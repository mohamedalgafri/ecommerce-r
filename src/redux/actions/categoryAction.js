import {GET_ALL_CATEGORY , GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'
import baseUrl from '../../Api/baseURL'

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
