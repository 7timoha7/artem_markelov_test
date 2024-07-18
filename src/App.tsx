import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AppToolBar from "./components/Header/AppToolBar";
import BreadCrumbs from "./components/BreadCrumbs /BreadCrumbs ";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
      <Header/>
      <AppToolBar/>
      <BreadCrumbs/>
      <Content/>
    </>

  );
}

export default App;
