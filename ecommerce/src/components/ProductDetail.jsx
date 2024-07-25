import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

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
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
