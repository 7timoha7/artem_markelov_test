import React, {useEffect} from 'react';
import Products from "../../features/Products/Products";
import Reviews from "../Reviews/Reviews";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import {useAppDispatch} from "../../app/hooks";
import {productsFetch} from "../../features/Products/productsThinks";

const Content = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  return (
    <>
      <Products/>
      <Reviews/>
      <SimilarProducts/>
    </>
  );
};

export default Content;