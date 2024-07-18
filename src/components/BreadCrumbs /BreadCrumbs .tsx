import React from 'react';

const BreadCrumbs = () => {
  return (
    <div className={'container'} style={{
      fontSize: '16px',
      fontWeight: '400',
      color: '#757575'
    }}>
      <p>Главная/Бытовая техника/<span style={{color: '#1E90FF'}}>Стиральные машины</span></p>
    </div>
  );
};

export default BreadCrumbs;

// font-family: Roboto;
// font-size: 16px;
// font-weight: 400;
// line-height: 18.75px;
// text-align: left;
