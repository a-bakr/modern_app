import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Checkbox, Grid } from "@material-ui/core";
import { BsTrash } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import { connect } from "react-redux";
import { completedTodo, deleteTodo } from "../store/todoReducer";

function SimpleCard({ createDeleteTodo, createCompletedTodo, id, todoBody, title, completed }) {
	const classes = useStyles();
	return (
		<Grid item lg={4} md={6} sm={6}>
			<Card className={classes.root} color="primary">
				<CardContent>
					<Typography variant="h6" color="textSecondary" gutterBottom>
						{title}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" gutterBottom>
						{todoBody}
					</Typography>
				</CardContent>
				<CardActions>
					<Checkbox
						icon={<RiTodoLine />}
						checked={completed}
						onClick={() => createCompletedTodo(id, completed)}
						checkedIcon={<IoMdDoneAll />}
					/>
					<Button size="small" color="secondary" variant="contained" onClick={() => createDeleteTodo(id)}>
						<BsTrash fontSize="20" />
						<Typography variant="subtitle2" className={classes.delete}>
							Delete
						</Typography>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: "5px 5px 7px 0 rgba(50, 50, 50, 0.5);",
		height: "100%",
	},
	delete: {
		padding: "0 5px",
	},
}));

const mapDispatchToProps = (dispatch) => ({
	createDeleteTodo: (id) => dispatch(deleteTodo({ id })),
	createCompletedTodo: (id, completed) => dispatch(completedTodo({ id, completed })),
});

export default connect(null, mapDispatchToProps)(SimpleCard);
