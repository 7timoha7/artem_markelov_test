import React from 'react';
import '../../features/Products/Products.css'
import imgWS from '../../assets/whatsUp.png'
import imgInsta from '../../assets/insta.png'
import imgLogoMini from '../../assets/logoMini.png'

const Footer = () => {
  return (
    <div style={{background: 'rgba(245, 245, 245, 1)', marginTop: '200px', paddingTop: '40px', paddingBottom: '40px'}}>
      <div className="container desktop-footer">
        <div className="frame-8">
          <div className="LOGO">
            <img className="frame" src={imgLogoMini} alt={'TANDA'}/>
            <div className="text-wrapper-17">TANDA</div>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <img className="img-2" src={imgWS} alt={'whats-up'}/>
            <img className="img-2" src={imgInsta} alt={'instagram'}/>
          </div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-18">Компания</div>
          <div className="frame-11">
            <div className="text-wrapper-19">О нас</div>
            <div className="text-wrapper-4">Способы оплаты</div>
            <div className="text-wrapper-4">Доставка</div>
          </div>
          <div className="text-wrapper-4">Политика конфиденциальности</div>
          <div className="text-wrapper-4">Персональные данные</div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-18">Партнерам</div>
          <div className="frame-11">
            <div className="text-wrapper-19">Продавайте на UNO</div>
            <div className="text-wrapper-4">Курьерам</div>
          </div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-18">Контакты</div>
          <div className="frame-11">
            <div className="text-wrapper-19">unokg@gmail.com</div>
            <div className="text-wrapper-4">+996 700 000 000</div>
            <div className="text-wrapper-4">+996 500 000 000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;