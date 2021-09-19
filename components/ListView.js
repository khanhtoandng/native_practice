import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ListView = ({navigation}) => {
  const [arrayList, setArrayList] = useState([1,2,3]);

  const handleAdd = () => setArrayList([...arrayList, arrayList[arrayList.length - 1] + 1]);

  const handleSave = (value,index) => {
      const updatedArray = [...arrayList];
      updatedArray[index] = value;
      setArrayList(updatedArray);
  }

  const handleHold = removedValue => {
    const removedArray = arrayList.filter((value) => {
      return value !== removedValue;
    })

    setArrayList(removedArray);
  };

  return (
    <View style={styles.container}>

    <View style={styles.taskWrapper}>
      <ScrollView>
      { arrayList.map((el, index) => {
        return (
          <TouchableOpacity
            key={el}
            onLongPress={() => handleHold(el)}
            onPress={() => navigation.navigate(('detailview'),{
                number: el,
                index: index,
                onSave: handleSave
            })}
          >  
            <Text style={styles.items}>{el}</Text>
          </TouchableOpacity>
        );
      })
      }
      </ScrollView> 
    </View>

    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => handleAdd()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>

      </TouchableOpacity>
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  items: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#fff',
    fontSize: 24
  },
  wrapper: {
    position: 'absolute',
    bottom: 60,
    paddingRight: 30,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end'
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },

});

export default ListView;