import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsSearch, getAllProductspage } from '../../redux/actions/productsAction'
import { useEffect } from 'react';


const ViewSearchProductHook = () => {

    let limit = 8;
    const dispatch = useDispatch(); 
    const allProduct = useSelector((state)=> state.allProducts.allProduct);


    const getProduct = async ()=>{
        let word = ""
        if(localStorage.getItem('searchWord') != null)
            word = localStorage.getItem('searchWord');

        await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    }

    useEffect(()=>{
        getProduct()
    },[])

    let items = [];
    let pagination = [];
    let results = [];
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

    try{
        if(allProduct.results){
            results = allProduct.results;
        }else{
            results=[];
        }
    }catch(e){}

    


    const getPage = async (page) =>{
        let word = ""
        if(localStorage.getItem('searchWord') != null)
            word = localStorage.getItem('searchWord');
        await dispatch(getAllProductsSearch(`limit=${limit}&page=${page}&keyword=${word}`))
    }


  return [items , pagination , getPage , getProduct , results]

}

export default ViewSearchProductHook