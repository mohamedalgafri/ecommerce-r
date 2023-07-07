import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductspage } from '../../redux/actions/productsAction';

const ViewProductAdminHook = () => {

    let dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getAllProducts(9));
    },[])

    let product = useSelector((state)=>state.allProducts.allProduct);
    let item = [];
    let pagination = [];


    try {
      
        if(product){
            if(product.data){
                item = product.data;
            }
        }else{
            item = [];
        }
    
        if(product){
            if(product.paginationResult){
                pagination = product.paginationResult.numberOfPages;
            }
        }else{
            pagination=[];
        }
        
    }catch (e){}



    const getPage = async (page) =>{
        await dispatch(getAllProductspage(page , 6))
    }


  return [item , pagination , getPage]
  
}

export default ViewProductAdminHook