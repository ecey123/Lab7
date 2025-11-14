import { StyleSheet, Text, View } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
  },
});
