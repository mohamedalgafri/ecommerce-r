import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productsAction'
import { useEffect } from 'react';

const ViewProductHook = () => {
    const dispatch = useDispatch(); 

    const allProduct = useSelector((state)=> state.allProducts.allProduct);


    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    let items = [];
    if(allProduct.data){
        items = allProduct.data.slice(0,4);
    }else{
        items = [];
    }

  return [items]
}

export default ViewProductHook