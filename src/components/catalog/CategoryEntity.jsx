import { Card, Button } from "react-bootstrap";

const CategoryEntity = ({ id, name }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Id:</strong> {id}
                </Card.Text>
                <Button variant="warning" style={{ marginRight: "10px" }}>
                    Edit
                </Button>
                <Button variant="danger">
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CategoryEntity;