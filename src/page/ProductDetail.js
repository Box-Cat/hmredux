import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import {productAction} from '../redux/actions/productAction';

const ProductDetail =  () => {
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect (()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col >
          <div>{product?.title}</div>
          <div>\{product?.price}</div>
          <div>{product?.choice == true?"Common Choice":""}</div>
          <select defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled hidden>사이즈 선택</option>
            {product?.size.map((item,key)=>{
                return(<option value={item} key={key}>{item}</option>);
            })}
          </select>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail