// import { makeStyles } from "@material-ui/core";
import React from "react";
import style from "./SideMenu.module.css";

// const usestyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "320px",
//     height: "100%",
//     backgroundColor: "#253053",
//   },
// });

export default function SideMenu() {
  //   const classes = usestyles();
  console.log(style);
  return <div className={style.sideMenu}></div>;
}
