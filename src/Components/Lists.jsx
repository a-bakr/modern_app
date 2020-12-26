import React from "react";
import { Container, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { RiTodoLine } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import Todo from "./Todo";

export default function ToDo() {
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
						<Grid item lg={4} md={6} sm={6}>
							<Todo todo="note1" />
						</Grid>
						<Grid item lg={4} md={6} sm={6}>
							<Todo todo="note1" />
						</Grid>
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
						<Grid item lg={4} md={6} sm={6}>
							<Todo todo="note2" />
						</Grid>
						<Grid item lg={4} md={6} sm={6}>
							<Todo todo="note3" />
						</Grid>
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
		padding: "30px 20px",
	},
	icon: {
		color: theme.palette.primary.main,
	},
	heading: {
		marginBottom: "16px",
	},
}));
