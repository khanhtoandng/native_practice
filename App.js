import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [arrayList, setArrayList] = useState([1,2,3,4,5,6,7,8,9]);

  const handleHold = removedValue => {
    const removedArray = arrayList.filter((value) => {
      return value !== removedValue;
    })

    setArrayList(removedArray);
  }



  return (
    <View style={styles.container}>

    <ScrollView>
    { arrayList.map((el) => {
      return (
        <TouchableOpacity
          key={el}
          onLongPress={() => handleHold(el)}
        >  
          <Text style={styles.item}>{el}</Text>
        </TouchableOpacity>
      );
    })
    }
    </ScrollView>  
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
