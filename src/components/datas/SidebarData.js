import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Comparation ",
    path: "/comparationpage",
    icon: <FaIcons.FaRegChartBar />,
    cName: "nav-text",
  },
  {
    title: "Timeseries",
    path: "/timeseriespage",
    icon: <BsIcons.BsGraphUp />,
    cName: "nav-text",
  },
];
