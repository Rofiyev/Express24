import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../../Components/Error/ErrorPage";
import Header from "../../Components/Header/Header";
import KategoriyaPage from "../../Components/Kategoriya/Kategoriya";
import AddFoodPage from "../../Components/Kategoriya/Taomlar";
import MainPage_Petition from "../../Components/Main/Arizalar";
import Users from "../../Components/Main/Foydalanuvchilar";
import AddNew from "../../Components/Main/Qo'shish/AddNew";
import Statistics from "../../Components/Main/Statistika";
import DeliverPage from "../../Components/Main/Yetkazilgan";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomeStyleWrapper from "./HomeStyle";

export default function Menu() {
  return (
    <HomeStyleWrapper>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <header>
          <div>
            <Header />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage_Petition />} />
            <Route path="arizalar" element={<MainPage_Petition />} />
            <Route path="yetkazish" element={<DeliverPage />} />
            <Route path="statistika" element={<Statistics />} />
            <Route path="qo'shish" element={<AddNew />}>
              <Route path="kategoriya" element={<KategoriyaPage />} />
              <Route path="food" element={<AddFoodPage />} />
            </Route>
            <Route path="foydalanuvchilar" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </HomeStyleWrapper>
  );
}
