import {GET_ALL_BRANDS , GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'


export const brandAction = (limit) => async (dispatch)=>{
    try{
        const res = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch(
            {
                type:GET_ALL_BRANDS,
                payload:res,
            }
        )

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}


export const getAllBrandActionPage = (page) => async (dispatch)=>{
    try{
        const res = await useGetData(`/api/v1/brands?limit=3&page=${page}`);
        dispatch(
            {
                type:GET_ALL_BRANDS,
                payload:res,
            }
        )

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error" + e, 
        })
    }
}