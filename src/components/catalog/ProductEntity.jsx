import { Badge, Card, Button } from "react-bootstrap";

const ProductEntity = ({ id, name, price, stock, onEdit, onDelete }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Badge bg={stock > 0 ? "success" : "danger"}>{stock > 0 ? "Disponible" : "Agotado"}</Badge>
                <Card.Text>
                    <strong>Price:</strong> ${price}
                    <br />
                    <strong>Stock:</strong> {stock}
                    <br />
                    <strong>Id:</strong> {id}
                </Card.Text>
                <Button variant="warning" onClick={() => onEdit(id)} style={{ marginRight: '30px', marginLeft: '50px' }}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductEntity;