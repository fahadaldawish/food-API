import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";
import RestaurantShowScreen from "../screens/RestaurantShowScreen";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurants();
  const filterResultByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <RestaurantsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <RestaurantsList
          results={filterResultByPrice("$$")}
          title="Bit Pricier"
          // navigation={navigation}
        />
        <RestaurantsList
          results={filterResultByPrice("$$$")}
          title="Big Spender"
          // navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
