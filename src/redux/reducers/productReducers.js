import {GET_ALL_PRODUCTS , CREATE_PRODUCTS ,  GET_ERROR, GET_PRODUCTS_DETAILS, GET_PRODUCTS_LIKE, DELETE_PRODUCTS, UPDATE_PRODUCTS} from '../type'

const inital = {
    poroduct:[],
    allProduct:[],
    productDetails:[],
    productLike:[],
    deleteProduct:[],
    updateProduct:[],
    loading:true,
}

const poroductReducer = (state=inital , action ) =>{
   
    switch(action.type){
        case GET_ALL_PRODUCTS : return{
            ...state,
            allProduct:action.payload,
            loading:false,
        }
        case GET_PRODUCTS_DETAILS : return{
            productDetails:action.payload,
            loading:false,
        }
        case GET_PRODUCTS_LIKE : return{
            ...state,
            productLike:action.payload,
            loading:false,
        }
        case CREATE_PRODUCTS : return{
            poroduct:action.payload,
            loading:false,
        }
        case DELETE_PRODUCTS : return{
            ...state,
            deleteProduct:action.payload,
            loading:false,
        }
        case UPDATE_PRODUCTS : return{
            ...state,
            updateProduct:action.payload,
            loading:false,
        }
        case GET_ERROR : return{
            loading:true,
            poroduct:action.payload,
        }
        default : return state; 
    }

}

export default poroductReducer;