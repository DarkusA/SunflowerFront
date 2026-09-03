import { useState } from "react";
import UserEntity from "./UserEntity";
import "./Users.css";

const Users = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "TestUser",
            email: "test@example.com",
            role: "User"
        }
    ]);

    const [nextId, setNextId] = useState(2);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("User");
    const [editingId, setEditingId] = useState(null);

    const handleCreate = () => {
        const newUser = {
            id: nextId,
            username: username,
            email: email,
            role: role
        };
        setUsers([
            ...users,
            newUser
        ]);

        setNextId(id => id + 1);

        setUsername("");
        setEmail("");
        setRole("User");
    };

    const handleDelete = (id) => {
        setUsers(
            users.filter(user => user.id !== id)
        );
    };

    const handleEdit = (id) => {

        const user = users.find(user => user.id === id);

        setUsername(user.username);
        setEmail(user.email);
        setRole(user.role);

        setEditingId(id);
    };

    const handleUpdate = () => {
        setUsers(
            users.map(user =>
                user.id === editingId
                    ? {
                        ...user,
                        username: username,
                        email: email,
                        role: role
                    }
                    : user
            )
        );

        setUsername("");
        setEmail("");
        setRole("User");

        setEditingId(null);
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                />
                {editingId === null ? (
                    <button
                        type="button"
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                )}
            </form>
            <div className="users-container">
                {users.map(user => (
                    <UserEntity
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        email={user.email}
                        role={user.role}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    );
};

export default Users;