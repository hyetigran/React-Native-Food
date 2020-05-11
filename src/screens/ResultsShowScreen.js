import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam("id");

  useEffect(() => {
    getResult(id);
  }, []);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={{ width: 250, height: 150 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResultsShowScreen;
