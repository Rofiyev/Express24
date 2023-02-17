import React from "react";
import logo from "./Image/logo.png";
import { FaCircleNotch } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { MdPeopleOutline } from "react-icons/md";
import SidebarStyleWrapper from "./SidebarStyle";
import { SidebarFunc } from "../../Data";
import { NavLink } from "react-router-dom";

const socials = [
  <FaCircleNotch className="icon" />,
  <FiCheck className="icon" />,
  <ImStatsBars className="icon" />,
  <AiOutlinePlus className="icon" />,
  <MdPeopleOutline className="icon" />,
];
const linksItem = [
  "arizalar",
  "yetkazish",
  "statistika",
  "qo'shish",
  "foydalanuvchilar",
];

export default function Sidebar() {
  return (
    <>
      <SidebarStyleWrapper />
      <div className="sidebar shadow-sm p-2">
        <img className="px-3 pt-3" src={logo} alt="Logotip" />
        <ul className="mt-5">
          {SidebarFunc().map((item, i) => {
            return (
              <NavLink
                to={linksItem[i]}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? "d-flex align-items-center item my-2 active"
                    : "d-flex align-items-center item my-2"
                }
              >
                <div className="icon">{socials[i]}</div>
                <div className="title">
                  <h6>{item.heading}</h6>
                  <p>{item.info}</p>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}
