import { 
  SafeAreaView,
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity, 
} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>To-Do App</Text>
      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder='add an item' placeholderTextColor={'black'} />
      </TouchableOpacity>

      <View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },
  headerContainer: {
    marginBottom: 25,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  inputContainer:{
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 12,
    color:'black',
  },

  inputText: {
    color: 'black', 
    // placeholderColor: 'black',
  }
  
})

export default App