import React, { useEffect } from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'


const CardProductsContainer = ({product, title ,btntitle,pathText}) => {



    return (
        <Container>
            {
                product ? ( <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>):null
            }
           
            <Row className='my-2 d-flex justify-content-between'>
            {
                product ? (
                    product.map((item , index)=>(
                        <ProductCard key={index} item={item} />
                    ))
                ):(null)
             
            }
            
            </Row>
        </Container>
    )
}

export default CardProductsContainer
