import {GET_ALL_CATEGORY} from '../type'
import baseUrl from '../../Api/baseURL'

const categoryAction = async ()=>{
    try{
        const res = await baseUrl.get(/api/v1/categories);

        return{
            type:GET_ALL_CATEGORY,
            payload: res.data,
        }
    }catch(e){

    }
}
