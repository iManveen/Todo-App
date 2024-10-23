import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {props.text}
      </Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    padding: 5,                  

    marginBottom: 10,           
  
   
  },
  itemText: {
    fontSize: 16,         
    fontWeight: '500',         
    color: '#333',               
  },
});
