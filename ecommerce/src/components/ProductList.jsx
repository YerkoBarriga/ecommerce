import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2' },
  // Añade más productos según sea necesario
];

const ProductList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">Ver Detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
