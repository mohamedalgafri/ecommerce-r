import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useSelector, useDispatch } from "react-redux";
import { brandAction } from "../../redux/actions/brandAction";
import { useEffect } from "react";
const AllBrand = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(brandAction());
    }, []);
  
    const brand = useSelector((state) => state.allBrand.brands);
    const loading = useSelector((state) => state.allBrand.loading);

    let pageCount = 0
    if(brand.paginationResult){
        pageCount = brand.paginationResult.numberOfPages;
        console.log(pageCount)
    }

    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer data={brand} loading={loading} />
            {
                pageCount > 1 ?(
                    <Pagination />
                ):
                ("")
            }
           
        </div>
    )
}

export default AllBrand
