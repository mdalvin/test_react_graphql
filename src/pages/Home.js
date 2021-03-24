import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";

const client = new ApolloClient({
  uri: "https://n7b67.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const Home = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Hero />
        <Movie />
        <Footer />
      </ApolloProvider>
    </>
  );
};

export default Home;
