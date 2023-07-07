import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
import ViewProductHook from '../../hook/product/view-product-hook';
const HomePage = () => {

    const [items] = ViewProductHook();

    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer product={items} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer product={items} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />

        </div>
    )
}

export default HomePage
