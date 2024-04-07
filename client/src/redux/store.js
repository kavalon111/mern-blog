/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import storage engine

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage, // Specify the storage engine
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Use persistReducer to create the persisted reducer

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
