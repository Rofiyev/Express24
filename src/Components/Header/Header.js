import React, { useContext } from "react";
import HeaderStyleWrapper from "./HeaderStyle";
import { GoThreeBars } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import StyledButtons from "../ButtonStyled/ButtonStyled";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";

export default function Header() {
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  return (
    <>
      <HeaderStyleWrapper />
      <div
        id="header"
        className="container-fluid d-flex align-items-center justify-content-between py-3"
      >
        <div className="icons">
          <GoThreeBars className="icon" />
        </div>
        <div className="login d-flex align-items-center">
          <div className="icon me-1">
            <BsPerson className="icon" />
          </div>
          <span className="fw-bold">Axror</span>
          <StyledButtons
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
            className="ms-3 fw-bold"
          >
            Login
          </StyledButtons>
          <StyledButtons className="ms-2">
            <Link
            className="text-decoration-none text-black fw-bold"
              to={"/"}
              onClick={() => {
                setLogin(true);
              }}
            >
              Home
            </Link>
          </StyledButtons>
        </div>
      </div>
    </>
  );
}
