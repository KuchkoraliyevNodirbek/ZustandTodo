// components/TodoList.js
import React, { useState } from "react";
import { Input, Button, List, Typography, Card } from "antd";
import useTodoStore from "../store/todoStore";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const TodoList = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo, removeTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (task) {
      addTodo({
        id: Date.now(),
        text: task,
      });
      setTask("");
    }
  };

  return (
    <Card
      title="My To-Do List"
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        style={{ marginBottom: "10px", borderRadius: "8px" }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddTodo}
        style={{ width: "100%", marginBottom: "20px", borderRadius: "8px" }}
      >
        Add Task
      </Button>
      <List
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => removeTodo(item.id)}
                style={{ color: "#ff4d4f" }}
              />,
            ]}
            style={{
              borderRadius: "8px",
              marginBottom: "8px",
              backgroundColor: "#fafafa",
              padding: "8px 16px",
            }}
          >
            <Typography.Text>{item.text}</Typography.Text>
          </List.Item>
        )}
        style={{ borderRadius: "8px" }}
      />
    </Card>
  );
};

export default TodoList;
