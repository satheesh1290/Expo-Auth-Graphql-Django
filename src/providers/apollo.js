import React from "react";
import { Platform } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUri = () => {
  // For Android emulator
  if (Platform.OS === "android") {
    return "http://10.0.2.2:8000/graphql/";
  }
  // For iOS emulator or other environments
  return "http://localhost:8000/graphql/";
};

const httpLink = createHttpLink({
  uri: getUri(),
});

const getToken = async () => {
  if (Platform.OS === "web") {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    return token;
  } else {
    const token = await AsyncStorage.getItem("token");
    console.log("Token from AsyncStorage:", token);
    return token;
  }
};

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function AppProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
