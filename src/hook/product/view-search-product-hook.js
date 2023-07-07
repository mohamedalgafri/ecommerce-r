import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductspage } from '../../redux/actions/productsAction'
import { useEffect } from 'react';

const ViewSearchProductHook = () => {
    const dispatch = useDispatch(); 

    const allProduct = useSelector((state)=> state.allProducts.allProduct);

    useEffect(()=>{
        dispatch(getAllProducts(8));
    },[])

    let items = [];
    if(allProduct.data){
        items = allProduct.data;
    }else{
        items = [];
    }

    
    let pagination = [];
    if(allProduct.paginationResult){
        pagination = allProduct.paginationResult.numberOfPages;
    }else{
        pagination=[];
    }

    const getPage = async (page) =>{
        await dispatch(getAllProductspage(page , 8))
    }


  return [items , pagination , getPage]

}

export default ViewSearchProductHook