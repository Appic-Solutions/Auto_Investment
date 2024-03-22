import { configureStore } from "@reduxjs/toolkit";

import {
  initWallet,
  setAssets,
  startLoading,
  stopLoading,
  walletReducer,
} from "./features/walletSlice";
import { sidebarReducer, themeReducer } from "./features/themeSlice";
import { coinReducer } from "./features/coinSlice";
import { pageReducer } from "./features/pageData";
export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    theme: themeReducer,
    sidebar: sidebarReducer,
    coins: coinReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const getState = store.getState;