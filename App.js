import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Todo List</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
        />

        <Button
          title="Add Task"
          onPress={() => {
            if (task.trim().length === 0) return;
            setTasks([...tasks, { id: Date.now().toString(), text: task }]);
            setTask('');
          }}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
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
