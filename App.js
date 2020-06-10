import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
// Client ID
// u33X3W17QNetcHfxj3lmEw

// API Key
// DSITwTH0S673UftUHKrSL2ijY7dFwBGQtUuiDUAUtyGYleMh_5Gy07kKDgpSTfQyt1I_nyII4YWVNh7In_S6O6KCBOkDLd95--HMbpD3kFumAPOnA9zTvaZ0AFivXnYx
