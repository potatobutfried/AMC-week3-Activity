import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  
  let img = new Image();
  const [number, onChangeNumber] = React.useState('');
  const [num1, onChangeNumber1] = React.useState('');
  const [num2, onChangeNumber2] = React.useState('');
  const [num3, onChangeNumber3] = React.useState('');
  const [num4, onChangeNumber4] = React.useState('');
  const [num5, onChangeNumber5] = React.useState('');
  const [num6, onChangeNumber6] = React.useState('');
  const [num7, onChangeNumber7] = React.useState('');
  const [num8, onChangeNumber8] = React.useState('');
  
  
  
  
  

  return (
    <SafeAreaProvider>
     <SafeAreaView>
      
      
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={num1}
          placeholder="Name:"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={num2}
          placeholder="Age:"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber3}
          value={num3}
          placeholder="Address"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber4}
          value={num4}
          placeholder="School"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber5}
          value={num5}
          placeholder="Course:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber6}
          value={num6}
          placeholder="Email:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber7}
          value={num7}
          placeholder="Contact No:"
          keyboardType=""
        />

      <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={onChangeNumber8}
          value={num8}
          style={styles.textInput}
          placeholder="ALL ABOUT ME:"
        />
      </SafeAreaView>
     </SafeAreaProvider>     
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,

    borderWidth: 1,
    padding: 10,
  },
});


export default TextInputExample;