import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import "./app.css";
import Add from "./Components/Add";
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import store from "./store/configerStore";
import theme from "./theme";

function App() {
	const [dark, setDark] = useState(true);
	const getTheme = createMuiTheme({ ...theme, palette: { type: dark ? "dark" : "light" } });

	return (
		<Provider store={store}>
			<ThemeProvider theme={getTheme}>
				<div className="App">
					<Header darkTheme={() => setDark(!dark)} />
					<Add />
					<Lists />
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default hot(App);
