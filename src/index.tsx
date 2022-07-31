import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewReminder from "./components/NewReminder";
import ListReminders from "./components/ListReminders";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NavBar date={new Date().toLocaleDateString()} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListReminders />} />
        <Route path="new" element={<NewReminder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
