import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { brandAction } from "../../redux/actions/brandAction";
import { useState } from "react";
import ViewSearchProductHook from "../product/view-search-product-hook";

const SidebarSearchHook = () => {
  const [items, pagination, getPage, getProduct, results] =
    ViewSearchProductHook();

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(brandAction());
    };

    get();
  }, []);

  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brands);

  let category = [];
  if (allCat.data) {
    category = allCat.data;
  }

  let brand = [];
  if (allBrand.data) {
    brand = allBrand.data;
  }

  var queryCat = "";var queryBrand ="";
  // when user press any category
  let [catCheacked, setCatChecked] = useState([]);
  const clickCategory = (e) => {
    let value = e.target.value;

    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catCheacked, value]);
      } else {
        if (e.target.checked === false) {
          let newArr = catCheacked.filter((e) => e !== value);
          setCatChecked(newArr);
        }
      }
    }
  };

  useEffect(() => {

    // add list array category cheacked in query
    queryCat = catCheacked.map((val) => "category[in][]=" + val).join("&");
    setTimeout(() => {
      localStorage.setItem("catCheacked", queryCat);
      getProduct();
    }, 1000);

  }, [catCheacked]);

  // when user press any brand
  let [brandCheacked, setBrandChecked] = useState([]);
  const clickBrand = (e) => {
    let value = e.target.value;

    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandCheacked, value]);
      } else {
        if (e.target.checked === false) {
          let newArr = brandCheacked.filter((e) => e !== value);
          setBrandChecked(newArr);
        }
      }
    }
  };

  useEffect(() => {

    // add list array brand cheacked in query
    queryBrand = brandCheacked.map((val) => "brand[in][]=" + val).join("&");
    setTimeout(() => {
      localStorage.setItem("brandCheacked", queryBrand);
      getProduct();
    }, 1000);
    
  }, [brandCheacked]);

  return [category, brand, clickCategory, clickBrand];
};

export default SidebarSearchHook;
