import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsSearch, getAllProductspage } from '../../redux/actions/productsAction'
import { useEffect } from 'react';


const ViewSearchProductHook = () => {

    let limit = 8;
    const dispatch = useDispatch(); 
    const allProduct = useSelector((state)=> state.allProducts.allProduct);


    const getProduct = async ()=>{
        let word = ""; let catCheacked =""; let brandCheacked ="";
        if(localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")
        if(localStorage.getItem("catCheacked") != null)
            catCheacked = localStorage.getItem("catCheacked");
        if(localStorage.getItem("brandCheacked") != null)
            brandCheacked = localStorage.getItem("brandCheacked");
        sortData()
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${catCheacked}&${brandCheacked}`));
    }

    useEffect(()=>{
        getProduct()
    },[])



    let items = [];
    let pagination = [];
    let results = 0;
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
            results = 0;
        }
    }catch(e){}


    let sortType = "" , sort;
    let sortData =()=>{
        if(localStorage.getItem("sortType") != null){
            sortType = localStorage.getItem("sortType");
        }else{
            sortType = "";
        }

        if(sortType === "السعر من الاقل للاعلي"){
            sort = "+price"
        }else if(sortType === "السعر من الاعلي للاقل"){
            sort = "-price"
        }
        else if(sortType === "الاكثر مبيعا"){
            sort = "-sold"
        }
        else if(sortType === "الاعلي تقييما"){
            sort = "-quantity"
        }

    }
    

    const getPage = async (page) =>{
        let word = ""; let catCheacked ="";let brandCheacked ="";
        if(localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")
        if(localStorage.getItem("catCheacked") != null)
            catCheacked = localStorage.getItem("catCheacked");
        if(localStorage.getItem("brandCheacked") != null)
            brandCheacked = localStorage.getItem("brandCheacked");
        sortData()
        await dispatch(getAllProductspage(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}}&${catCheacked}&${brandCheacked}`))

    }





  return [items , pagination , getPage , getProduct ,results]

}

export default ViewSearchProductHook