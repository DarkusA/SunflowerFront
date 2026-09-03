import { Card, Button } from "react-bootstrap";

const CategoryEntity = ({ id, name, onEdit, onDelete }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Id:</strong> {id}
                </Card.Text>
                <Button variant="warning" style={{ marginRight: "10px" }} onClick={() => onEdit(id)}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CategoryEntity;