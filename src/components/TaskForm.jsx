import { useState } from "react";

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, completed: false });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "30px auto", maxWidth: "600px" }}>
            <h2 style={{ marginBottom: "10px" }}>Agregar tarea</h2>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) =>setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
            />
            <button type="submit" style={{ marginTop: "10px", padding: "10px 16px", fontSize: "0.9rem" }}>
              Crear tarea
            </button>
        </form>
    );
};

export default TaskForm;