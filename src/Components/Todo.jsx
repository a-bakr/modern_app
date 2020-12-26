import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Checkbox } from "@material-ui/core";
import { BsTrash } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";

export default function SimpleCard(props) {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root} color="primary">
				<CardContent>
					<Typography variant="h6" color="textSecondary" gutterBottom>
						{props.todo}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary" gutterBottom>
						Hi every one my name is Abdallah Bakr Hi every one my name is Abdallah Bakr Hi every one my name is Abdallah Bakr
					</Typography>
				</CardContent>
				<CardActions>
					<Checkbox icon={<RiTodoLine />} checkedIcon={<IoMdDoneAll />} />
					<Button size="small" color="secondary" variant="contained" startIcon={<BsTrash />}>
						Delete
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: "5px 5px 7px 0 rgba(50, 50, 50, 0.5);",
	},
}));
