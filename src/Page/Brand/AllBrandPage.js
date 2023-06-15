import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useSelector, useDispatch } from "react-redux";
import { brandAction } from "../../redux/actions/brandAction";
import { useEffect } from "react";
const AllBrand = () => {

    const dispatch = useDispatch();

    //when first load
    useEffect(() => {
      dispatch(brandAction(2));
    },[]);
  
    //to get state from redux
    const brand = useSelector((state) => state.allBrand.brands);
    const loading = useSelector((state) => state.allBrand.loading);
  
    //to page count
    let pageCount = 0;
    if(brand.paginationResult){
        pageCount = brand.paginationResult.numberOfPages
    }

        
    //when press pagination
    const getPage=(numPage)=>{
        dispatch(brandAction(numPage));
        console.log(numPage)
    }

    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer data={brand} loading={loading} />
            {
                pageCount > 1 ?(
                    <Pagination pageCount={pageCount} getPage={getPage} />
                ):
                ("")
            }
           
        </div>
    )
}

export default AllBrand
