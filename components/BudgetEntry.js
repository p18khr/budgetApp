import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

const BudgetEntry = () => {
  const [Name, setName] = React.useState('');
  const [pamnt, setpamnt] = React.useState(0);
  const [amnt,setamnt] = React.useState(0);

  return (
    <View style={{flex:1}}>
        <Text style={{textAlign:'center',paddingTop:'40px',fontWeight:'bold'}}>Budget Entry</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder='Enter Name of the item'
      />
      <TextInput
        style={styles.input}
        onChangeText={setpamnt}
        placeholder="Enter planned amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setamnt}
        placeholder="Enter actual amount"
        keyboardType="numeric"
      />
      <TouchableOpacity style={{alignSelf:'center', backgroundColor:'#DDDDDD',padding:'10px'}} >Save</TouchableOpacity>
    </View>
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

export default BudgetEntry;