import React from 'react';
import { Dimensions, Image } from 'react-native';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Pokemon from './pokemon';
import Progress from './progress';
import { fetchApi } from './fetchApi';
const { width } = Dimensions.get('window');
const SPACING = width * 0.03;

export default function App() {

  const [list, hasMoreData, fetch] = fetchApi();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <FlatList
        onEndReached={() => {
          fetch();
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={hasMoreData && <Progress />}
        contentContainerStyle={{
          paddingTop: SPACING,
          alignItems: 'center',
        }}
        data={list}
        keyExtractor={item => item.data.name}
        renderItem={({ item, index }) => {
          return (
            <Pokemon {...item.data} />
          )
        }}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
  },
});