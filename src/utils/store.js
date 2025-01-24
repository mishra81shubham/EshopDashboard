import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import commonReducer from './slices/commonSlice';
import { loadState, saveState } from "./localDataStore/localStorageUtils";

const preloadedState = {
  common: loadState('commonState'), 
  auth: loadState('loggedInState'),
};


export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
  },
  preloadedState,
});
store.subscribe(() => {
  const { common, auth } = store.getState();
  saveState('commonState', { isToggleSidebar: common.isToggleSidebar, themeMode: common.themeMode });
  saveState('loggedInState', auth.isLoggedIn); 
});
export default store;
