import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const HomeScreen = ({ navigation, route }) => {
    const [tasks, setTasks] = useState(route.params?.tasks || []);

    useEffect(() => {
        if (route.params?.updatedTasks) {
            setTasks(route.params.updatedTasks);
        }
    }, [route.params?.updatedTasks]);

    const renderTask = ({ item, index }) => (
        <View style={styles.taskItem}>
            <Text>{item.input1}</Text>
            <Text>{item.input2}</Text>
            <Text>{item.input3}</Text>
            <TouchableOpacity onPress={() => deleteItem(index)}>
                <Image style={styles.deleteIcon} source={require('../assets/delete.png')} />
            </TouchableOpacity>
        </View>
    );

    const deleteItem = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleAddNewTask = () => {
        navigation.navigate('InputScreen', { onAddTask: addTask });
    };

    const addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const deleteItems = () => {
        setTasks([]);
    };

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
};

export default HomeScreen;

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
