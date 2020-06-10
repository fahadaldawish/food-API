import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",

  headers: {
    Authorization:
      "Bearer DSITwTH0S673UftUHKrSL2ijY7dFwBGQtUuiDUAUtyGYleMh_5Gy07kKDgpSTfQyt1I_nyII4YWVNh7In_S6O6KCBOkDLd95--HMbpD3kFumAPOnA9zTvaZ0AFivXnYx",
  },
});
