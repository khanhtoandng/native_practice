import React,{ useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const DetailView = ({route, navigation}) => {
    const { number, index, onSave } = route.params;
    const [text, setText,] = useState(number.toString());

    return (
        <View stype={styles.wrapper}>
            <TextInput
                style={{
                    width: '50%',
                    borderWidth: 1,
                    fontSize: 30,
                    marginLeft: '25%',
                    marginRight:'25%'

                }}
                onChangeText={setText}
                value={text}
                defaultValue={number.toString()}
            />
            <TouchableOpacity
                onPress={() => onSave(parseInt(text), index)}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

export default DetailView;


