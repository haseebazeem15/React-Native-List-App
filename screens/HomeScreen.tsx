import * as React from 'react';
import { StyleSheet,  TouchableOpacity, Image, ScrollView, View, Text, TextInput, FlatList, Platform} from 'react-native';
import CardItem from '../components/CardItem';
import { RootStackScreenProps } from '../types';

type ListItem = {
    id: number;
    title: string;
}

let gArray: ListItem[] = [];

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) { 

    const [data, setData] = React.useState([]) as any[];
    const [inputValue, setInputValue] = React.useState(null) as any;

    const addItem = () => {
        if(!inputValue) return;
        gArray.unshift(
            {
                id: gArray && gArray.length > 0 ? gArray[0].id + 1 : 0,
                title: inputValue
            }
        )
        setData(gArray);
        setInputValue('');
    }
   
  return (
    <View>
        <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Type item name" value={inputValue} onChangeText={(text) => setInputValue(text)} />
            <TouchableOpacity style={styles.button} onPress={() => addItem()}>
                <Text style={styles.buttonText}>Add To List</Text>
            </TouchableOpacity>
        </View>

        {data.length === 0 && <Text style={styles.placeholder}>No Item to  show</Text>}

        <FlatList
            data={data}
            extraData={data}
            keyExtractor={(item) => item.id.toString()}
            style={{paddingBottom: 10, height: '90%'}}
            renderItem={({ item, index }) => (
                <CardItem 
                    id={index} 
                    title={item.title} 
                    onDeletePress={() => {
                        data.splice(index, 1);
                        setData(data);
                        setInputValue("2");
                        setInputValue("");
                    }}
                 />
            )}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '72%',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'android' ? 5 : 0
    },
    placeholder: {color: 'black', marginTop: 50, width: '100%', textAlign: 'center'}
});
