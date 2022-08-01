import React, { Component,　useState } from "react";
import App from "next/app";
import Head from "next/head"
import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppContext from "../context/Appcontext";

class MyApp extends App {
  state = {
    user: null,
  }

  setUser = (user) => {
    this.setState({user})
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
      <AppContext.Provider 
        value={{user: this.state.user, setUser:this.setUser}}
      >
        <>
          <Head>
            <link 
              rel="stylesheet" 
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
            />
          </Head>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </>
      </AppContext.Provider>
    )
  }
}

export default withData(MyApp)