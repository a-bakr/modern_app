import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import todoReducer from "./todoReducer";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
};

const persistReducer1 = persistReducer(persistConfig, todoReducer);

const store = configureStore({ reducer: persistReducer1 });
// export const persistor = persistStore(store);

export default store;
