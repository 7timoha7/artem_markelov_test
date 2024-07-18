import React from 'react';
import imgCategory from '../../assets/menu.png';
import './AppToolBar.css'; // Добавьте этот файл для стилей

const AppToolBar = () => {
  return (
    <div className="container">
      <div className={"toolbar"}>
        <a className="toolbar-item" href='/'>
          <img src={imgCategory} alt="Category Icon" className="icon"/>
          <p>Все категории</p>
        </a>
        <a href="/" className="toolbar-item">Стать продавцом</a>
        <a href="/" className="toolbar-item">О нас</a>
        <a href="/" className="toolbar-item">Курьерам</a>
        <a href="/" className="toolbar-item">Контакты</a>
        <a href="/" className="toolbar-item">Доставка</a>
      </div>

    </div>
  );
};

export default AppToolBar;
