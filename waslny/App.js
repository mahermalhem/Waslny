import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {


  return (
    <SafeAreaView>
      <Button title="testtt" onPress={()=>{
        console.log(0)
      }}/>
      <Text>dasd</Text>
    </SafeAreaView>
  );
};

export default App;
