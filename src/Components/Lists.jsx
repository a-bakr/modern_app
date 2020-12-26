import React from "react";
import { Container, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { RiTodoLine } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import Todo from "./Todo";
import { connect } from "react-redux";

function ToDo({ todos, onCreatePressed }) {
	const classes = useStyles();
	return (
		<Container>
			<Grid container justify="center" className={classes.root}>
				<Grid item md className={classes.contant}>
					<Grid container direction="row" alignItems="center" justify="center" className={classes.heading}>
						<IconButton>
							<RiTodoLine className={classes.icon} />
						</IconButton>
						<Typography variant="h5" display="inline">
							ToDo Notes
						</Typography>
					</Grid>
					<Grid container spacing={3} justify="center">
						{todos.map(
							(todo) =>
								!todo.completed && (
									<Todo key={todo.id} id={todo.id} completed={todo.completed} todoBody={todo.todo} title={todo.title} />
								)
						)}
					</Grid>
				</Grid>

				<Grid item md className={classes.contant}>
					<Grid container direction="row" alignItems="center" justify="center" className={classes.heading}>
						<IconButton>
							<IoMdDoneAll className={classes.icon} />
						</IconButton>
						<Typography variant="h5" display="inline">
							Complated Notes
						</Typography>
					</Grid>
					<Grid container spacing={3} justify="center">
						{todos.map(
							(todo) =>
								todo.completed && (
									<Todo key={todo.id} completed={todo.completed} id={todo.id} todoBody={todo.todo} title={todo.title} />
								)
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "20px",
	},
	contant: {
		textAlign: "center",
		width: "100%",
		padding: "30px 20px",
	},
	icon: {
		color: theme.palette.primary.main,
	},
	heading: {
		marginBottom: "16px",
	},
}));

const mapStateToProps = (state) => ({ todos: state });
export default connect(mapStateToProps)(ToDo);
