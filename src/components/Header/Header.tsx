import React from 'react';
import './Header.css'
import imgLogIn from '../../assets/Profile.png'
import imgBuy from '../../assets/Buy.png'


const Header = () => {
  return (
    <>
      <div className={'containerHeader'}>
        <div className={'header'} style={{display: 'flex', alignItems: 'center'}}>
          <div style={{marginRight: '109px'}}>
            <a className={'logo'} href="/public">Tanda</a>
          </div>

          <div className="search-container">
            <input style={{
              minWidth: '694px',
              borderRadius: '16px',
              padding: '12px 16px 12px 40px',
              gap: '8px',
              border: "none",
              fontSize: '16px',
            }}
                   type={'search'}
                   placeholder={'Искать на UNO'}/>
          </div>
          <div style={{marginLeft: '109px', marginTop: '5px'}}>
            <button style={{border: 'none', background: 'transparent'}}>
              <div>
                <img style={{width: '20px', height: '20px'}} src={imgLogIn} alt="#"/>
                <p style={{marginTop: '8px', fontSize: '16px'}}>Войти</p>
              </div>
            </button>
            <button style={{border: 'none', background: 'transparent'}}>
              <div>
                <img style={{width: '20px', height: '20px'}} src={imgBuy} alt="#"/>
                <p style={{marginTop: '8px', fontSize: '16px'}}>Корзина</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
