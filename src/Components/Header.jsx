import { AppBar, Button, Checkbox, Divider, makeStyles, Toolbar } from "@material-ui/core";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import React, { useState } from "react";

export default function Header(props) {
	const [leng, setLeng] = useState(false);
	document.body.dir = leng ? "rtl" : "ltr";

	const classes = useStyles();
	return (
		<AppBar color="default">
			<Toolbar>
				<Checkbox icon={<ImSun className={classes.secondry} />} onClick={props.darkTheme} checkedIcon={<BsMoon />} />
				<Divider className={classes.divider} orientation="vertical" />
				<Button onClick={() => setLeng(!leng)}>{leng ? "En" : "Ar"}</Button>
			</Toolbar>
		</AppBar>
	);
}

const useStyles = makeStyles((theme) => ({
	divider: {
		height: 28,
		margin: 4,
	},
	icon: {
		color: theme.palette.grey[900],
	},
	secondry: {
		color: theme.palette.secondary.main,
	},
}));
