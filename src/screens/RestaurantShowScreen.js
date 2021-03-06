import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import RestaurantsList from "../components/RestaurantsList";
const RestaurantShowScreen = (props) => {
  const [restaurant, setRestaurant] = useState(null); //we put 'null' when we are going to receive an object
  const id = props.navigation.getParam("id");
  console.log(restaurant);
  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };
  useEffect(() => {
    getRestaurant(id);
  }, []);
  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantShowScreen;
