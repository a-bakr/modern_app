import { Divider, IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import { BiMessageSquareAdd } from "react-icons/bi";
import React from "react";

export default function AddToDo() {
	const classes = useStyles();
	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				color="primary"
				placeholder="note title..."
				className={classes.input}
				inputProps={{ "aria-label": "add new note" }}
			/>
			<InputBase
				color="primary"
				placeholder="add new note..."
				className={classes.input}
				inputProps={{ "aria-label": "add new note" }}
			/>
			<Divider className={classes.divider} orientation="vertical" />
			<IconButton color="primary" className={classes.iconButton} aria-label="directions">
				<BiMessageSquareAdd color="gray" className={classes.icon} />
			</IconButton>
		</Paper>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		margin: "-30px auto 0",
		display: "flex",
		width: 600,
	},
	input: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	icon: {
		color: theme.palette.primary.main,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));
