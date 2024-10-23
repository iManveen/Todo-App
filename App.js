// In App.js in a new project

import * as React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './src/screens/InputScreen';


function HomeScreen({navigation, route}) {
  React.useEffect
  (() => {
    if (route.params?.tasks) {
      setTasks(route.params.tasks);
    }
  }, [route.params?.tasks]);
  
  const [tasks, setTasks] = React.useState(route.params?.tasks || []);

  const completeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    navigation.navigate('InputScreen', { updatedTasks });
  };

  const handleAddNewTask = () => {
    navigation.navigate('InputScreen', { tasks });
  };

  const deleteItems = () => {
    setTasks([]);
    // navigation.navigate('InputScreen', { updatedTasks: [] });
  };

  const renderTask = ({ item, index }) => (
    <View style={styles.taskItem}>
      <Text>{item.input1}</Text>
      <Text>{item.input2}</Text>
      <Text>{item.input3}</Text>
      <TouchableOpacity onPress={() => deleteItems(index)}>
        <Image style={styles.deleteIcon} source={require('../NewJsproject/src/assets/delete.png')} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity onPress={deleteItems} style={styles.removeAll}>
        <Text style={styles.removeAllText}>Remove all</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddNewTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
  },
  removeAllText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    padding: 10,
  },
  removeAll: {
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    width: 130,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginVertical: 15,
    elevation: 2,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#48c9b0',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 2,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});