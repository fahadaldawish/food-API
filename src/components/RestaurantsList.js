import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantsDetails from "../components/RestaurantsDetails";
const RestaurantsList = (props) => {
  if (!props.results.length) {
    // if we dont have restaurants in a category , don't show it
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Restaurant", { id: item.id })
              }
            >
              <RestaurantsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
export default withNavigation(RestaurantsList);
