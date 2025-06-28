import { createSlice } from "@reduxjs/toolkit";

const DarkMode = () => {
  const darkmodeValue = localStorage.getItem("darkmode");
  return darkmodeValue ? JSON.parse(darkmodeValue) : false;
};

const layout = createSlice({
  name: "layout",
  initialState: {
    screenWidth: window.innerWidth,
    isSidebar: true,
    isDark: DarkMode(),
  },
  reducers: {
    handleScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    handleisSidebar: (state, action) => {
      state.isSidebar = action.payload;
    },
    handleDarkmode: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem("darkmode", action.payload);
    },
  },
});

export const { handleScreenWidth, handleisSidebar, handleDarkmode } =
  layout.actions;
export default layout.reducer;
