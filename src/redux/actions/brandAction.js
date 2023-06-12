import {GET_ALL_BRANDS , GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'


export const brandAction = () => async (dispatch)=>{
    try{
        const res = await useGetData('/api/v1/brands');
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