import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function TodoApp({ ToDo, addItem }) {
  const [input, setInput] = React.useState()
  return (
    <View style={styles.container}>
      <Text>TO DO APP</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.section_input}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity onPress={() => addItem(input)} style={styles.btn_add}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      {ToDo &&
        ToDo.map((item, index) => <Text key={index.toString()}>{item}</Text>)}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    marginTop: 120,
  },
  section_input: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    padding: 15,
  },
  wrapper: {
    width: '100%',
  },
  btn_add: {
    height: 50,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
})
