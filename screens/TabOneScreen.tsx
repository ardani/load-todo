import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import { Text, View } from '../components/Themed';
import {getTodos} from '../requests/todo';
import {Ionicons} from "@expo/vector-icons";

interface DataType {
  id: string;
  title: string;
  completed: boolean
}

const Item = ({ title, completed } : DataType) => (
    <View  style={styles.row}>
      <Text><Ionicons name={completed ? 'checkbox-outline' : 'square-outline'} color={'green'} size={20} /> {title} </Text>
    </View>
);

const renderItem = ({ item } : any) => <Item {...item} />;

export default function TabOneScreen() {
  const [items, setItems] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const requestTodos = async () => {
      let todos = await getTodos();
      setItems(todos.data);
    };
    requestTodos();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList data={items} renderItem={renderItem} keyExtractor={({id}) => id} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    padding: 8,
    width: 320,
    fontSize:20,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
});
