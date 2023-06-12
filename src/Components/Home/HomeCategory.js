import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategory = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.allCategory);

  console.log(data.category.data);

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

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {data.loading === false ? (
          data.category.data ? (
            data.category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={clothe}
                  background={colors[index]}
                />
              ))
          ) : (
            <h3>لاتوجد منتجات</h3>
          )
        ) : (
          <div className=" d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
