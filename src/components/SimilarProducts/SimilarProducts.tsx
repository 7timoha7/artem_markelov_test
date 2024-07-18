import React from 'react';
import '../../features/Products/Products.css'
import ProductCart from "../../features/Products/ProductCart";
import {useAppSelector} from "../../app/hooks";
import {selectProductsError, selectProductsLoading} from "../../features/Products/productSlice";

const SimilarProducts = () => {
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className={'container'} style={{marginTop: '100px'}}>
      <div className="frame-8">
        <div className="text-wrapper-20">Похожие товары</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
          <ProductCart/>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;