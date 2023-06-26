import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import { Budget } from './budget';

const BudgetEntry = () => {
  const [Name, setName] = React.useState('');
  const [pamnt, setpamnt] = React.useState(0);
  const [amnt,setamnt] = React.useState(0);

  const dispatch = useDispatch()

  const save = ()=>{
    const budget = new Budget(Name,amnt,pamnt);
  }

  return (
    <SafeAreaView style={{flex:1}}>
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
        inputMode='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={setamnt}
        placeholder="Enter actual amount"
        keyboardType="numeric"
        inputMode='numeric'
      />
      
      <TouchableOpacity style={{alignSelf:'center', backgroundColor:'#DDDDDD',padding:'10px'}} ><Text>Save</Text></TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center', backgroundColor:'#DDDDDD',padding:'10px',marginTop:'10px'}} ><Text>See Entries</Text></TouchableOpacity>
    </SafeAreaView>
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