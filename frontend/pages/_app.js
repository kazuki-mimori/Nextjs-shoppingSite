import React, { Component } from "react";
import App from "next/app";
import Head from "next/head"
import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppContext from "../context/Appcontext";
import Cookies from "js-cookie";

class MyApp extends App {
  state = {
    user: null,
    cart: {items: [] , total: 0},
  };

  setUser = (user) => {
    this.setState({user});
  };

  ///既にユーザーのクッキが残っているか確認
  componentDidMount() {
    const token = Cookies.get("token");
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}` ,
        },
      })
      .then(async(res) => {
        if(!res.ok) {
          Cookies.remove("token");
          this.setState({user: null});
          return null;
        }
        const user = await res.json();
        this.setUser(user) //ログイン
      })
    }
  }

  //カートへ商品の追加
  addItem = (item) => {
    let {items} = this.state.cart;
    const newItem = items.find((i) => i.id === item.id);
    if (!newItem){
      item.quantity = 1;
      //cartに追加
      this.setState({
        cart: {
          items: [...item, item],
          total: this.state.cart.total + item.price,
        },
      },
      () => Cookies.set("cart", this.state.cart.items)
      )
    }

    //既に同じ商品がカートに入っているとき
    else {
      this.setState({
        cart: {
          item: this.state.cart.item.map((item) => 
          item.id === newItem.id 
          ? Object.assign({}, item, {quantity: item.quantity + 1}) 
          : item
          ),
          total: this.state.cart.total + item.price,
        },
      },
      () => Cookies.set("cart", this.state.cart.items)
      )
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
      <AppContext.Provider 
        value={{user: this.state.user, setUser: this.setUser}}
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