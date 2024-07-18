import React from 'react';
import './Products.css';
import {createImageUrl} from '../../utils';
import {useAppSelector} from '../../app/hooks';
import {selectProductsState} from './productSlice';
import imgStarG from '../../assets/Star-grey.png';

const ProductCart: React.FC = () => {
  const product = useAppSelector(selectProductsState);

  const imageUrl = product?.images?.[0]?.url ? createImageUrl(product.images[0].url) : '';

  return (
    <div className="div-2">
      <div className="image-wrapper">
        {imageUrl ? (
          <img className="image-2" src={imageUrl} alt={product?.title || 'Изображение'}/>
        ) : (
          <div className="no-image">Нет изображения</div>
        )}
      </div>
      <div className="frame-22">
        <div className="text-wrapper-26">{product?.title || 'Название товара'}</div>
        <div className="text-wrapper-27">{product?.category?.name || 'Неизвестная категория'}</div>
        <div className="frame-23">
          <img className="img-2" src={imgStarG} alt="star"/>
          <img className="img-2" src={imgStarG} alt="star"/>
          <img className="img-2" src={imgStarG} alt="star"/>
          <img className="img-2" src={imgStarG} alt="star"/>
          <img className="img-2" src={imgStarG} alt="star"/>
          <div className="text-wrapper-28">0 отзывов</div>
        </div>
        <div className="text-wrapper-29">{product?.sellingPrice || 'Цена не указана'}</div>
      </div>
      <div className="primary-btn-2">
        <div className="text-wrapper-15">Купить сейчас</div>
      </div>
    </div>
  );
};

export default ProductCart;
