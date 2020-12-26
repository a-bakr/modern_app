import { createMuiTheme } from "@material-ui/core";
import { createSlice } from "@reduxjs/toolkit";
import theme from "../theme";

const { reducer, actions } = createSlice({
    name: theme,
    initialState: theme,
    reducers: {
        getDarkTheme: (theme, action) => {
            createMuiTheme({ ...theme, palette: { type: action.payload.theme } });
        }
    }
});


export default reducer;
export const { getDarkTheme } = actions;
