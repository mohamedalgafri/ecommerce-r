
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { brandAction } from "../../redux/actions/brandAction";
import { getOneCategory } from "../../redux/actions/subCategoryAction";
import { createProducts } from "../../redux/actions/productsAction";
import notify from "../../hook/useNonafication";
import { useState } from "react";

const AddProductHook = () => {

    const [images, setImages] = useState([]);
    const [prodName, setProdName] = useState("");
    const [prodDescription, setProdDescription] = useState("");
    const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
    const [priceAfter, setPriceAfter] = useState("السعر بعض الخصم");
    const [qty, setQty] = useState("الكمية المتاحة");
    const [catId, setCatId] = useState("");
    const [brandId, setBrandId] = useState("");
    const [subCatId, setSubCatId] = useState([]);
    const [selectedSubId, setSelectedSubId] = useState([]);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
  
    //show Picker color
    const [showColor, setShowColor] = useState(false);
    const [colors , setColors] = useState([]);
  
    //when choose new color
    let handelChangeComplete = (color) => {
      setColors([...colors , color.hex]);
      setShowColor(!showColor);
  
    };

    const onChangeName=(e)=>{
        e.persist();
        setProdName(e.target.value);
    }
    const onChangeProdDescription=(e)=>{
        e.persist();
        setProdDescription(e.target.value);
    }
  
    const onChangeProdPriceBefore=(e)=>{
        e.persist();
        setPriceBefore(e.target.value);
    }
  
    const onChangeProdPriceAfter=(e)=>{
        e.persist();
        setPriceAfter(e.target.value);
    }
    const onChangeProdQty=(e)=>{
        e.persist();
        setQty(e.target.value);
    }
    const onChangeColor=(e)=>{
        e.persist();
        setShowColor(!showColor);
    }
  
    //remave color
    let removeColor = (color) => {
      let newColor =  colors.filter((e)=> e !== color);
      setColors(newColor);
    };
  
  
  
    const onSelect = (selectSub) => {
      setSelectedSubId(selectSub)
    };
    const onRemove = (selectSub) => {
      setSelectedSubId(selectSub)
    };

    
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllCategory());
      dispatch(brandAction());
    }, []);
  
  
    const categoryItam = useSelector((state) => state.allCategory.category);
    const subCategory = useSelector((state) => state.subCategory.subCategory);
    const brands = useSelector((state) => state.allBrand.brands);
  
    let categorySelect = async (e)=>{
  
      if(e.target.value != 0 ){
         await dispatch(getOneCategory(e.target.value));
      }
      
      setCatId(e.target.value);
  
    }
    
  
    useEffect(()=>{
      if(catId != 0){
          if(subCategory.data){
              setOptions(subCategory.data)
          }
      }
    },[catId])
  
      // to convert base 64 to file 
      function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[arr.length - 1]), 
              n = bstr.length, 
              u8arr = new Uint8Array(n);
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
      }
      
      
  
    let handelSubmit= async (e)=>{
      e.preventDefault();
  
      if(catId === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0){
          notify("من فضلك اكمل البيانات ","warn");
          return;
      }
  
      //conver base 64 image to file
      const imgCover = dataURLtoFile(images[0] , Math.random() + ".png")
      
      //conver array of base 64 image to file
      const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
          (item , index) => {
              return dataURLtoFile(images[index] , Math.random() + ".png")
          }
      )
  
      const formData = new FormData();
  
      formData.append("title",prodName);
      formData.append("description",prodDescription);
      formData.append("quantity",qty);
      formData.append("price",priceBefore);
      formData.append("imageCover",imgCover);
      formData.append("category",catId);
  
      itemImages.map((item)=>formData.append("images",item))
      colors.map((color)=>formData.append("availableColors",color))
      selectedSubId.map((item)=>formData.append("subcategory",item._id))
  
      setLoading(true);
      await dispatch(createProducts(formData));
      setLoading(false);
    }
  
    const products = useSelector((state)=> state.allProducts.poroduct);
  
    useEffect(()=>{
      if(loading === false){
          setProdName("")
          setCatId(0)
          setProdDescription("")
          setColors([])
          setImages([])
          setPriceBefore("السعر قبل الخصم")
          setPriceAfter("السعر بعد الخصم")
          setQty("الكمية المتاحة")
          setBrandId("")
          setSelectedSubId([])
  
          setTimeout(()=> setLoading(true) , 1500)
  
          if(products){
              if(products.status === 201 ){
                  notify("تمت العملية بنجاح" , "success")
              }else{
                  notify("هناك مشكلة ", "error")
              }
          }
  
          
      }
    },[loading])
  
    let category = []
    if(categoryItam){
        category = categoryItam.data;
    }else{
        let category = []
    }
  


  return [ onChangeName , prodDescription , onChangeProdDescription , priceBefore , images , setImages , prodName ,
    , onChangeProdPriceBefore , priceAfter , onChangeProdPriceAfter , qty , onChangeProdQty , categorySelect , category , options ,
     onSelect , onRemove , setBrandId , brands , colors , removeColor , setShowColor , showColor ,
      handelChangeComplete , handelSubmit , onChangeColor];
}

export default AddProductHook