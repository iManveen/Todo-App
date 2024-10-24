import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InputScreen = ({ navigation, route }) => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleAddTask = () => {
        if (input1 && input2 && input3) {
            const newTask = { input1, input2, input3 };
            route.params.onAddTask(newTask);
            navigation.navigate('HomeScreen');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder="Add name"
                value={input1}
                onChangeText={setInput1}
            />
            <TextInput
                style={styles.inputBox}
                placeholder="Add Price"
                value={input2}
                onChangeText={setInput2}
            />
            <TextInput
                style={styles.inputBox}
                placeholder="Add description"
                value={input3}
                onChangeText={setInput3}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Image source={require('../assets/plus.png')} style={styles.addIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default InputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',
    },
    inputBox: {
        padding: 15,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
    },
    addButton: {
        width: 50,
        height: 50,
        backgroundColor: '#48c9b0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop: 20,
    },
    addIcon: {
        width: 20,
        height: 20,
    },
});
