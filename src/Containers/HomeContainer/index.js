import React, { useContext } from "react";
import logo from "./logo.png";
import fon from "./fon.png";
import { CiSearch } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import HomeStyleWrapper from "./HomeContainerStyle";
import StyledButtons from "../../Components/ButtonStyled/ButtonStyled";
import { Link } from "react-router-dom";
import { foodsDataFunc, menuDataFunc } from "../../Data";
import { useSelector } from "react-redux";
import LoginContext from "../../Context/LoginContext";

const footerItem = [
  <BsFacebook className="icon" />,
  <AiFillInstagram className="icon" />,
  <FaTelegramPlane className="icon" />,
];

export default function HomeContainer() {
  const { isLogin } = useContext(LoginContext);
  const state = useSelector((state) => state.items.item);
  const title = useSelector((state) => state.items.title);
  return (
    <>
      <HomeStyleWrapper />
      <div className="container-fluid p-0">
        <nav className="d-flex align-items-center justify-content-between shadow-sm py-3 px-5 m-0">
          <img src={logo} alt="Logo" />
          <form className="w-50 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <CiSearch className="icon" />
          </form>
          <div className="login">
            <div className="col d-flex align-items-center">
              {!isLogin ? (
                <Link to={"/login"}>
                  <StyledButtons className="fw-bold me-2">
                    Sign In
                  </StyledButtons>
                </Link>
              ) : (
                <Link to={"/menu"}>
                  <StyledButtons className="fw-bold me-2">Menu</StyledButtons>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <section>
          <div className="image">
            <img src={fon} alt="Fon" />
          </div>
          <img src={logo} className="logo" alt="Brand" />
        </section>
        <main>
          <div className="container py-4">
            <div className="d-flex gap-2 menu-item-container">
              {menuDataFunc().map((item) => (
                <span key={item} className="menu-item">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <h1>Salatlar</h1>
              <div className="wrapper d-flex align-items-center">
                {foodsDataFunc().map((item, i) => (
                  <div key={i} className="card-item">
                    <div className="card-image">
                      <img src={item.url} alt="Rasm" />
                      <StyledButtons className="btn">Qo'shish</StyledButtons>
                    </div>
                    <div className="card-info px-2">
                      <h4>{item.title}</h4>
                      <h6>{item.price} so'm</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              {title.map((item) => (
                <h1 key={item}>{item.title}</h1>
              ))}
              <div className="wrapper d-flex align-items-center">
                {state.map((item, i) => {
                  return item.food == "" ? (
                    console.log(
                      "%c Mahsulot bo'lmasligi yoki xatolik bo'lishi mumkin!",
                      "color: red"
                    )
                  ) : (
                    <>
                      <div key={i} className="card-item">
                        <div className="card-image">
                          <img src={item.image} alt="Rasm" />
                          <StyledButtons className="btn">
                            Qo'shish
                          </StyledButtons>
                        </div>
                        <div className="card-info px-2">
                          <h4>{item.food}</h4>
                          <h6>{item.price} so'm</h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <footer className="py-5 px-5">
          <div>
            <span className="me-5">&copy; 2021 Express 24</span>
            <a className="footer-link me-5" href="#">
              Foyadalanish shartlari
            </a>
            <a className="footer-link" href="#">
              Kontaktlar
            </a>
          </div>
          <div className="d-flex mt-3">
            <div className="icon me-5">
              {footerItem.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
            <div>
              <a className="footer-link me-5" href="#">
                Savol va Javob
              </a>
              <a className="footer-link" href="#">
                Hamkorlik uchun
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
