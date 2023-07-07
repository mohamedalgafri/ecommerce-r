import {CREATE_PRODUCTS, DELETE_PRODUCTS, GET_ALL_PRODUCTS , GET_ERROR, GET_PRODUCTS_DETAILS, GET_PRODUCTS_LIKE, UPDATE_PRODUCTS} from '../type'
import useGetData from '../../hooks/useGetData'
import { useInsertDataWithImage } from '../../hooks/useInsertData';
import useDeleteData from '../../hooks/useDeleteData';
import { useUpdateDataWithImage } from '../../hooks/useEditData';


//get all products
export const getAllProducts = (limit) => async (dispatch)=>{

    try{
        
        const res = await useGetData(`/api/v1/products?limit=${limit}`);

        dispatch({
            type:GET_ALL_PRODUCTS,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}
//get all products with page Number
export const getAllProductspage = (page , limit) => async (dispatch)=>{

    try{
        
        const res = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);

        dispatch({
            type:GET_ALL_PRODUCTS,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//get product Details
export const getProductsDetails = (id) => async (dispatch)=>{

    try{
        const res = await useGetData(`/api/v1/products/${id}`);

        dispatch({
            type:GET_PRODUCTS_DETAILS,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//get product Details
export const getProductsLike = (id) => async (dispatch)=>{

    try{
        const res = await useGetData(`/api/v1/products?category=${id}`);

        dispatch({
            type:GET_PRODUCTS_LIKE,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//create products 
export const createProducts = (formData) => async (dispatch)=>{

    try{
        
        const res = await useInsertDataWithImage(`/api/v1/products` , formData);

        dispatch({
            type:CREATE_PRODUCTS,
            payload: res, 
            loading:true,     
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}


//delete products 
export const deleteProducts = (id) => async (dispatch)=>{

    try{
        
        const res = await useDeleteData(`/api/v1/products/${id}`);

        dispatch({
            type:DELETE_PRODUCTS,
            payload: res, 
            loading:true,     
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//update products 
export const updateProducts = (id,data) => async (dispatch)=>{

    try{
        
        const res = await useUpdateDataWithImage(`/api/v1/products/${id}`, data);

        dispatch({
            type:UPDATE_PRODUCTS,
            payload: res, 
            loading:true,     
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}