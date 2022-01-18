import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const addTodo = () => {
    if (title) {
      submitHandler(title, description);
      setTitle("");
      setDescription("");
      titleInput.current.clear();
      descriptionInput.current.clear();
    }
  };

  return (
    <View style={styles.todoInput}>
      <TextInput
        style={[styles.titleInput]}
        placeholder="Add Todo..."
        placeholderTextColor="#828282"
        onChangeText={(val) => setTitle(val)}
        enablesReturnKeyAutomatically
        returnKeyType="done"
        ref={titleInput}
        onSubmitEditing={addTodo}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Add an optional description..."
        placeholderTextColor="#828282"
        onChangeText={(val) => setDescription(val)}
        enablesReturnKeyAutomatically
        returnKeyType="done"
        ref={descriptionInput}
        onSubmitEditing={addTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 30,
  },
  titleInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 6,
  },
  descriptionInput: {
    padding: 6,
  },
});
