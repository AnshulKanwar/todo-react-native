import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.key == key) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );

    setTimeout(
      () =>
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key)),
      3000
    );
  };

  const submitHandler = (title, description) => {
    setTodos((prevTodos) =>
      setTodos([
        {
          key: Math.random().toString(),
          title: title,
          description: description,
          isCompleted: false,
        },
        ...prevTodos,
      ])
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <AddTodo submitHandler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={(todo) => (
            <TodoItem todo={todo.item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    paddingTop: 80,
    paddingHorizontal: 40,
  },
});
