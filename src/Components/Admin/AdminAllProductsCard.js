import React from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../images/prod1.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
const AdminAllProductsCard = ({ item }) => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async ()=>{
        setShow(true)
        await dispatch(deleteProducts(item._id));
        setShow(false)
        window.location.reload();
    }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title className="font">تأكيد عملية الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font">هل انت متأكد من عملية حذف المنتج</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="font" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="primary" className="font" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
              <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
              <Link to={`/admin/edit-prodict/${item._id}`} className="d-inline item-delete-edit">تعديل</Link>
            </Col>
          </Row>
          <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              src={item.imageCover}
            />
            <Card.Body>
              <Card.Title>
                <div className="card-title">{item.title}</div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <div className="card-rate">{item.ratingsQuantity}</div>
                  <div className="d-flex">
                    <div className="card-currency mx-1">جنيه</div>
                    <div className="card-price"> {item.price}</div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </>
  );
};

export default AdminAllProductsCard;
