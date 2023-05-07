import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import App from "./App";
import "./index.css";

/**
 * This is a code block that configures and creates a Redux store using the configureStore
 * function from the @reduxjs/toolkit package, which provides a simplified interface for
 * creating and working with Redux stores.
 * The store is created with a persisted reducer, meaning that the application
 * state will be persisted across sessions using the redux-persist package.
 * The persistReducer function takes in a configuration object which includes
 *  a key property for the storage key, a storage property to specify the storage
 * engine, and a version property to help manage migrations.
 * In addition, configureStore is passed a middleware function that is used to
 * customize the behavior of the Redux store's middleware. Here, it uses the
 * getDefaultMiddleware function to retrieve the default middleware, and passes
 * it an object with a serializableCheck property to specify which actions should
 * be ignored by the default serializable action check. The ignored actions are the
 * ones listed under the ignoredActions array: FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, and REGISTER.
 * Finally, the Redux store is exported as store and can be used in the application to manage global state.
 */

/**
 * docs
 */
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
