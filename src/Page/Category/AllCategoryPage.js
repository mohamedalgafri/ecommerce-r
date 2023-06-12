import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import baseUrl from '../../Api/baseURL'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {getAllCategory} from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCategory(4));
    });
  

    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
  
    let pageCount = 0;
    if(category.paginationResult){
        pageCount = category.paginationResult.numberOfPages
    }
        
    const getPage=(numPage)=>{
        console.log(numPage);
    }


    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer data={category} loading={loading}  />
            <Pagination pageCount={pageCount} getPage={getPage} />
        </div>
    )
}

export default AllCategoryPage
