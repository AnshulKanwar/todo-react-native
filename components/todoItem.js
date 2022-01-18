import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ todo, pressHandler }) {
  return (
    <View style={styles.todoItem}>
      <Ionicons
        name={todo.isCompleted ? "checkbox" : "square-outline"}
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => pressHandler(todo.key)}
      />
      <View style={styles.todoText}>
        <Text
          style={[
            styles.todoTitle,
            todo.isCompleted ? styles.isCompleted : null,
          ]}
        >
          {todo.title}
        </Text>
        {todo.description ? (
          <Text style={[styles.todoDescription, todo.isCompleted ? styles.isCompleted : null]}>{todo.description}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 14,
  },
  isCompleted: {
    textDecorationLine: "line-through",
    color: "#828282",
  },
  icon: {
    minWidth: 35,
  },
  todoText: {
    flexDirection: 'column'
  },
  todoTitle: {

  },
  todoDescription: {
    fontWeight: '600',
    fontSize: 13,
    color: '#828282'
  },
});
