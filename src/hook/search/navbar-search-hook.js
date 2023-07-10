import React from 'react'
import { useState } from 'react'
import ViewSearchProductHook from '../product/view-search-product-hook';
import { useEffect } from 'react';

const NavbarSearchHook = () => {

    let [searchWord , setSerachWord] = useState();
    const [items , pagination , getPage , getProduct , results] = ViewSearchProductHook();

    const onChangeSearch =(e)=>{
      localStorage.setItem('searchWord', e.target.value);
      setSerachWord(e.target.value);
    }

    useEffect(()=>{
      setTimeout(()=>{
        getProduct()
      },1000)
    },[searchWord])

  return [searchWord , onChangeSearch]
}

export default NavbarSearchHook