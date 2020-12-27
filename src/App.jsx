import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./app.css";
import Add from "./Components/Add";
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import store from "./store/configerStore";
import theme from "./theme";

function App() {
	const [dark, setDark] = useState(true);

	const getTheme = createMuiTheme({ ...theme, palette: { type: dark ? "dark" : "light" } });
	document.body.style.backgroundColor = !dark ? grey[300] : grey[100];

	return (
		<Provider store={store}>
			{/* <PersistGate persistor={persistor}> */}
			<ThemeProvider theme={getTheme}>
				<div className="App">
					<Header darkTheme={() => setDark(!dark)} />
					<Add />
					<Lists />
				</div>
			</ThemeProvider>
			{/* </PersistGate> */}
		</Provider>
	);
}

export default hot(App);
