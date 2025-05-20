import { createSlice } from "@reduxjs/toolkit";
import { MdHomeMax } from "react-icons/md";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { TiNews } from "react-icons/ti";
import { RiPagesLine } from "react-icons/ri";

const initialState = {
  navbarDatas: [
    { id: 1, label: "Home", icon: <MdHomeMax /> },
    { id: 2, label: "About", icon: <MdOutlineRoundaboutLeft /> },
    { id: 3, label: "News", icon: <TiNews /> },
    { id: 4, label: "Pages", icon: <RiPagesLine /> },
  ],
};

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
});

export default navBarSlice.reducer;
export const navbarData = (state) => state.navbar.navbarDatas;
