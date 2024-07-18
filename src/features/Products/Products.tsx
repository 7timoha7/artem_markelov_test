import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectProductsState, selectProductsLoading, selectProductsError} from './productSlice';
import {createImageUrl} from '../../utils';
import {productsFetch} from "./productsThinks";
import './Products.css';
import imgFrame from '../../assets/Frame-3935.png'
import imgStar from '../../assets/Star.png'

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProductsState);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0].url);
    }
  }, [product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  const imageUrl = (url: string) => createImageUrl(url);

  return (
    <div className='container'>
      <div className='images-container'>
        <div className='thumbnail-list'>
          {product?.images?.map((image) => (
            <img
              key={image.id}
              src={imageUrl(image.url)}
              alt={product.title}
              className={`thumbnail ${selectedImage === image.url ? 'selected' : ''}`}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </div>
        <img
          src={selectedImage ? imageUrl(selectedImage) : ''}
          alt={product?.title}
          className='selected-image'
        />
      </div>
      <div className="frame-7">
        <div className="frame-8">
          <div className="div-2">
            <p className="p">{product?.title}</p>
            <div className="frame-9">
              <div className="div">
                <img className="img" src={imgFrame} alt={product?.title}/>
                <div className="text-wrapper-8">Название магазина</div>
              </div>
              <div className="text-wrapper-9">Бренд</div>
            </div>
            <div className="frame-10">
              <div className="div-3">
                <img className="img-2" src={imgStar} alt={product?.title}/>
                <div className="text-wrapper-4">4.9</div>
              </div>
              <div className="text-wrapper-10">60 отзывов</div>
            </div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-11">Описание</div>
            <p className="jack-JK-jack">{product?.description}</p>
          </div>
        </div>
        <div className="text-wrapper-12">Смотреть характеристики</div>
      </div>
      <div className="price-card-desktop">
        <div className="frame-10">
          <div className="text-wrapper-13">{product?.sellingPrice} сом</div>
          <div className="text-wrapper-14">{product?.sellingPrice} сом</div>
        </div>
        <div className="frame-12">
          <button className="secondary-btn">
            <div className="text-wrapper-15">Купить сейчас</div>
          </button>
          <button className="tertiary-btn">
            <div className="text-wrapper-16">Оформить в кредит</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
