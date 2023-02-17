import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import StyledButtons from "../ButtonStyled/ButtonStyled";
import LoginWrapper from "./LoginStyle";

export default function LoginPage() {
  const navigate = useNavigate(false);
  const { setLogin } = useContext(LoginContext);
  return (
    <LoginWrapper>
      <div className="card-login shadow rounded py-3 text-center px-4">
        <h1 className="mb-5">Sign In</h1>
        <form>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Username"
          />
          <input
            className="form-control mb-3"
            type="email"
            placeholder="xxx@gmail.com"
          />
        </form>
        <StyledButtons
          type="button"
          onClick={() => {
            setLogin(true);
            navigate("/menu");
          }}
          className="mt-3 fw-bold"
        >
          Sign In
        </StyledButtons>
      </div>
    </LoginWrapper>
  );
}
