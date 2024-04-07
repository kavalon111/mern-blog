// store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from './theme/themeSlice.js'; // Import themeReducer as default
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import storage engine

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer, // Use themeReducer as default
});

const persistConfig = {
  key: "root",
  storage, // Specify the storage engine
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
