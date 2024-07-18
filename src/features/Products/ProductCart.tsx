import React from 'react';
import './Products.css'
import {createImageUrl} from "../../utils";
import {useAppSelector} from "../../app/hooks";
import {selectProductsState} from "./productSlice";
import imgStarG from '../../assets/Star-grey.png'

const ProductCart = () => {
  const product = useAppSelector(selectProductsState);
  const imageUrl = (url: string) => createImageUrl(url);
  return (

    <div className="div-2">
      <div className="image-wrapper"><img className="image-2" src={imageUrl(product?.images[0].url || '')}
                                          alt={product?.title}/></div>
      <div className="frame-22">
        <div className="text-wrapper-26">Jack JK - F4</div>
        <div className="text-wrapper-27">{product?.category.name}</div>
        <div className="frame-23">
          <img className="img-2" src={imgStarG} alt={'star'}/>
          <img className="img-2" src={imgStarG} alt={'star'}/>
          <img className="img-2" src={imgStarG} alt={'star'}/>
          <img className="img-2" src={imgStarG} alt={'star'}/>
          <img className="img-2" src={imgStarG} alt={'star'}/>
          <div className="text-wrapper-28">0 отзывов</div>
        </div>
        <div className="text-wrapper-29">{product?.sellingPrice}</div>
      </div>
      <div className="primary-btn-2">
        <div className="text-wrapper-15">Купить сейчас</div>
      </div>
    </div>

  );
};

export default ProductCart;