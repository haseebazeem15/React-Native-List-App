import * as React from 'react';
import { StyleSheet,  TouchableOpacity, Image, ScrollView, View, Text, TextInput, FlatList, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type ListItem = {
    id: any;
    title: string;
    onDeletePress(): void
}

export default function CardItem(props: ListItem) {

    const askForDelete = () => {
        Alert.alert('Delete Item', 'Do you want to delete this item?', [
            {
              text: 'No',
              style: 'cancel',
            },
            { text: 'Yes', onPress: () => props.onDeletePress() },
        ]);
    }

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{parseInt(props.id)+1}) {props.title}</Text>
            <AntDesign name="delete" size={18} color="red" onPress={() => askForDelete()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {},
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})