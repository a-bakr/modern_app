import { Fab, Grid, Input, makeStyles, Paper, Zoom } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { addTodo } from "../store/todoReducer";

function AddToDo({ onCreatePressed }) {
	const classes = useStyles();

	const [isClickNote, setIsClickNote] = useState(false);
	const [title, setTitle] = useState("");
	const [todoBody, setTodoBody] = useState("");

	return (
		<Paper className={classes.root}>
			<Grid container direction="column">
				{isClickNote && (
					<Input
						id="standard-basic"
						onChange={(e) => setTitle(e.target.value)}
						name="title"
						className={classes.input}
						value={title}
						placeholder="Title"
					/>
				)}
				<Input
					label="Standard secondary"
					onChange={(e) => setTodoBody(e.target.value)}
					onClick={() => {
						setIsClickNote(true);
					}}
					className={classes.input}
					multiline={true}
					name="content"
					value={todoBody}
					rows={isClickNote ? "2" : "1"}
					placeholder="Take a note..."
				/>
				{isClickNote && (
					<Zoom in={true} className={classes.icon}>
						<Fab
							size="small"
							color="secondary"
							onClick={(e) => {
								if (todoBody && title) {
									onCreatePressed(title, todoBody);
									setTitle("");
									setTodoBody("");
								}
								e.preventDefault();
							}}
							type="submit"
						>
							<AddIcon fontSize="large" />
						</Fab>
					</Zoom>
				)}
			</Grid>
		</Paper>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		margin: "80px auto 0",
		padding: "10px 0 12px",
		display: "flex",
		alignItems: "center",
		width: 500,
	},
	input: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		marginBottom: 12,
		flex: 1,
	},
	icon: {
		position: "absolute",
		bottom: -20,
		right: 16,
	},
}));

const mapDisptchToProps = (dispatch) => ({
	onCreatePressed: (title, todoBody) => dispatch(addTodo({ title, todoBody })),
});

export default connect(null, mapDisptchToProps)(AddToDo);
