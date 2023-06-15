import {CREATE_CATEGORY, GET_ALL_CATEGORY , GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'
import baseUrl from '../../Api/baseURL'
import { useInsertDataWithImage } from '../../hooks/useInsertData';


//get all category
export const getAllCategory = (limit) => async (dispatch)=>{

    try{
        
        const res = await useGetData(`/api/v1/categories?limit=${limit}`);

        dispatch({
            type:GET_ALL_CATEGORY,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch)=>{

    try{
        
        const res = await useGetData(`/api/v1/categories?limit=3&page=${page}`);

        dispatch({
            type:GET_ALL_CATEGORY,
            payload: res,      
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}

//create category 
export const createCategory = (formData) => async (dispatch)=>{

    try{
        
        const res = await useInsertDataWithImage(`/api/v1/categories` , formData);

        dispatch({
            type:CREATE_CATEGORY,
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

