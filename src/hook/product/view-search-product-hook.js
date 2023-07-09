import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsSearch, getAllProductspage } from '../../redux/actions/productsAction'
import { useEffect } from 'react';


const ViewSearchProductHook = () => {

    let limit = 8;
    const dispatch = useDispatch(); 
    const allProduct = useSelector((state)=> state.allProducts.allProduct);


    const getProduct = async (word)=>{
        await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    }

    useEffect(()=>{
        getProduct('')
    },[])

    let items = [];
    let pagination = [];
    try{
        if(allProduct.data){
            items = allProduct.data;
        }else{
            items = [];
        }
    }catch(e){}
        
   
    try{
        if(allProduct.paginationResult){
            pagination = allProduct.paginationResult.numberOfPages;
        }else{
            pagination=[];
        }
    }catch(e){}

    


    const getPage = async (page) =>{
        await dispatch(getAllProductspage(page , 8))
    }


  return [items , pagination , getPage , getProduct]

}

export default ViewSearchProductHook