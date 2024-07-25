import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2' },
  // Añade más productos según sea necesario
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <Container className="mt-4">
    <Row>
      <Col  md={6}>
        <Card>
          <Card.Body>
          <Card.Img variant="top" src={product.image} alt={product.name} />
          </Card.Body>
        </Card>
      
        
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Precio: {product.price}</strong></Card.Text>
            <Button variant="success">Comprar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default ProductDetail;
