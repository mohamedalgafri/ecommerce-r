import React from 'react'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {getAllCategory, getAllCategoryPage} from '../../redux/actions/categoryAction'

const AllCategoryHook = () => {

    const dispatch = useDispatch();

    //when first load
    useEffect(() => {
      dispatch(getAllCategory(5));
    },[]);
  
    //to get state from redux
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
  
    //to page count
    let pageCount = 0;
    if(category.paginationResult){
        pageCount = category.paginationResult.numberOfPages
    }
        
    //when press pagination
    const getPage=(numPage)=>{
        dispatch(getAllCategoryPage(numPage));
        console.log(numPage)
    }

  return [category , loading ,pageCount ,getPage]
}

export default AllCategoryHook