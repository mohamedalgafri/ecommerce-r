import React from 'react'
import { useState } from 'react'
import ViewSearchProductHook from '../product/view-search-product-hook';

const NavbarSearchHook = () => {

    let [searchWord , setSerachWord] = useState('');
    const [items , pagination , getPage , getProduct] = ViewSearchProductHook();

    const onChangeSearch =(e)=>{
        console.log(e.target.value)
        setSerachWord(e.target.value);
        getProduct(e.target.value)
    }

  return [searchWord , onChangeSearch]
}

export default NavbarSearchHook