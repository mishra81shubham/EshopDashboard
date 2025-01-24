import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleSidebar: false,
  themeMode: 'light',
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isToggleSidebar = !state.isToggleSidebar;
    },
    toggleThemeMood(state) {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleSidebar, toggleThemeMood } = commonSlice.actions;
export default commonSlice.reducer;

