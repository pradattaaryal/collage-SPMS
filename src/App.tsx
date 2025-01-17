import { useContext, useEffect, useState } from "react";
import { ITodo } from "./core/domain/entity/Todo.entity";
import { TodoContext } from "./core/application/context/TodoContext";

const App = () => {
  const todoRepository = useContext(TodoContext);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  // Fetch To-Do items
  const fetchTodos = async () => {
    try {
      if (!todoRepository) return;
  
      const response = await todoRepository.getAllTodos();
      if (response.succeeded && response.data) {
        setTodos(response.data.slice(0, 10)); // Access the nested `data` array
      }
    } catch (error) {
      console.error("Failed to fetch To-Dos:", error);
    }
  };
  

  useEffect(() => {
    fetchTodos();
  }, [todoRepository]);

 
  const handleAddTodo = async () => {
    if (!todoRepository || !newTodoTitle.trim()) return;
  
    try {
      const newTodo = {
        id: "0", // You may need to adjust this if the API generates the ID automatically
        title: newTodoTitle,
        completed: true, // Set it to false unless the todo is marked as complete on creation
      };
  
      await todoRepository.create(newTodo);
      setNewTodoTitle(""); // Clear input
      await fetchTodos(); // Refresh the list to include the new To-Do
       
    } catch (error: any) {
      console.error("Error adding To-Do:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };
  
  

  // Update a To-Do
  const handleUpdateTodo = async (id: string, completed: boolean) => {
    if (!todoRepository) return;

    try {
      const updatedTodo = todos.find((todo) => todo.id === id);
      if (!updatedTodo) return;

      const response = await todoRepository.update(id, {
        ...updatedTodo,
        completed: !completed,
      });

      if (response.succeeded) {
        await fetchTodos(); // Refresh list
      }
    } catch (error) {
      console.error("Error updating To-Do:", error);
    }
  };

  // Delete a To-Do
  const handleDeleteTodo = async (id: string) => {
    if (!todoRepository) return;

    try {
      const response = await todoRepository.delete(id);

      if (response.succeeded) {
        await fetchTodos(); // Refresh list
      }
    } catch (error) {
      console.error("Error deleting To-Do:", error);
    }
  };

  return (
    <div
      style={{
        background: "#2D3E4F",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      {/* To-Do List Section */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>To-Do List</h1>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                background: "#3E505C",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>ID:</strong> {todo.id}
              </p>
              <p>
                <strong>Title:</strong> {todo.title}
              </p>
              <p>
                <strong>Completed:</strong>{" "}
                <button
                  style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    background: todo.completed ? "#28A745" : "#DC3545",
                    color: "white",
                  }}
                  onClick={() => handleUpdateTodo(todo.id, todo.completed)}
                >
                  {todo.completed ? "Yes" : "No"}
                </button>
              </p>
              <button
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#DC3545",
                  color: "white",
                }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No To-Do items yet. Add one!</p>
        )}
      </div>

      {/* Add To-Do Section */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#1E2A36",
          padding: "20px",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <input
          type="text"
          placeholder="Enter To-Do Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          style={{
            width: "70%",
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            width: "25%",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#FFFFFF",
            background: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add To-Do
        </button>
      </div>
    </div>
  );
};

export default App;
