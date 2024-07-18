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
