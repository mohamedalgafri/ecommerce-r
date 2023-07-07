import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.allCategory);

  
    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
  
    const colors = [
      "#FFD3E8",
      "#F4DBA5",
      "#55CFDF",
      "#FF6262",
      "#0034FF",
      "#FFD3E8",
    ];
  


  return [data , colors]
}

export default HomeCategoryHook