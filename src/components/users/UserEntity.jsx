import { Badge, Card, Button } from "react-bootstrap";

const UserEntity = ({ id, username, email, role, onDelete, onEdit }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Badge bg="primary">{role}</Badge>
                <Card.Text>
                    <strong>Email:</strong> {email}<br />
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
    )
}

export default UserEntity;