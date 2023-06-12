import { GET_ALL_BRANDS , GET_ERROR } from "../type"

const inital ={
    brands:[],
    loading:true,
}

const brandReducer = (state=inital , action )=>{

    switch(action.type){
        case GET_ALL_BRANDS: return {
            ...state,
            brands:action.payload,
            loading:false,
        }
        case GET_ERROR : return {
            loading:true,
            brands:action.payload,
            
        }
        default: return state;
            
    }

}

export default brandReducer;