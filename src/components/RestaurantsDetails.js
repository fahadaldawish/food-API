import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const RestaurantsDetails = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.result.image_url }} />
      <Text style={styles.name}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars, {props.result.review_count}Reviews
      </Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 230,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default RestaurantsDetails;
