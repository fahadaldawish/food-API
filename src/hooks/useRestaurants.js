import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]); // we can call it restaurant instead of results
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm, //we can say term, because they have the same name
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("SomeThing went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};
