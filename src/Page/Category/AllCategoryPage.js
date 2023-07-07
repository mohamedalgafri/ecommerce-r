import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllCategoryHook from '../../hook/category/all-category-hook'

const AllCategoryPage = () => {

    let [category , loading ,pageCount ,getPage] = AllCategoryHook();

    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer data={category} loading={loading}  />
            {
                pageCount > 1 ? (
                    <Pagination pageCount={pageCount} getPage={getPage} />
                ):null
            }
            
        </div>
    )
}

export default AllCategoryPage
