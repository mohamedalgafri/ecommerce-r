import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails, getProductsLike } from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getCategoryDetails } from "../../redux/actions/categoryAction";

const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsDetails(prodID));

  }, []);

  let productDetails = useSelector((item) => item.allProducts.productDetails);
  let categoryDetails = useSelector((item) => item.allCategory.categoryDetails);
  let productLike = useSelector((item) => item.allProducts.productLike);

  // show product items
  let item = [];

  if (productDetails.data) {
    item = productDetails.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if(item.category){
        dispatch(getCategoryDetails(item.category));
        dispatch(getProductsLike(item.category));
    }
  }, [item]);



  // view gallery images
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${mobile}` }];
  }

  // show category items
  let itemCat = [];

  if (categoryDetails.data) {
    itemCat = categoryDetails.data;
  } else {
    itemCat = [];
  }

  // show product Link
  let itemLike = [];

  if(productLike && productLike.data){
    itemLike = productLike.data.slice(0,4);
  }
  else{
    itemLike = []
  }

  return [item, images , itemCat , itemLike];
};

export default ViewProductDetailsHook;
