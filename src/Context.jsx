//https://www.freecodecamp.org/forum/t/how-do-i-save-the-items-of-a-shopping-cart-in-the-local-storage/254745/22
//for local storage
import React, { Component } from "react";
import {
  storeProducts,
  detailProduct
} from "./Components/Product/Data/data.js";

import {
  auth,
  createUserProfileDocument
} from "../src/Components/Firebase/firebase.utils.js";

import { Persist } from 'react-persist'

const ProductContext = React.createContext();
//context sits on top of all components
//everytime you set create context, it comes with two things;
//Provider(providing state)
//Consumer(consuming state)

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // because we have a nested object within an array, we need to copy them
      products: [],
      detailProduct: detailProduct,
      cart: [],
      cartCountTotal: 0,
      cartTotal: 0,
      currentUser: null
    };
  }

  //we need this to sign out, currently user is not signed out
  unsubscribeFromAuth = null;

  componentDidMount() {
    //set products to their initial state
    this.setProducts();
    // set the currentusers state as signed in user with google
    //userAuth comes from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if userAuth exists(have any value besides null)
      if (userAuth) {
        //userRef is waiting for the function we created in firebase utils that created a snapshot, which takes userAuth as value
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        //if user logs out then state will be userAuth(if theres no userAuth then its null)
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  //this is how user will sign out
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // with set products, we can iterate through the array and get each object.
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    // after we call setproducts function,products array will become tempProducts
    // which means every object in data array will be there as well
    this.setState(() => {
      return {
        products: tempProducts
      };
    });
  };

  //get item will return product thats id matches with the id from products list(data)
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  // handeDetails will get item set it as product and then set the state of detailproduct as product.
  // getitem must have id
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product
      };
    });
  };

  addToCart = id => {
    // tempProducts is all the products, we are copying it to work on
    let tempProducts = [...this.state.products];
    // we get the index of product that we got with getitem and set it index of tempProducts
    // so we have a product from tempProducts with specific id
    const index = tempProducts.indexOf(this.getItem(id));
    // product is tempProducts[index]
    const product = tempProducts[index];
    // change the inCart value of product into true
    product.inCart = true;
    // change the count value of product to one(since we added it to cart)
    product.count = 1;
    // total price is products price
    const price = product.price;
    // change the total value of product to price(then we will multiple or delete it from cart)
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          // we are copying the state of cart and adding product we got above to it
          cart: [...this.state.cart, product]
        };
        // callback function to get state after we setstate
      },
      () => {
        this.addTotals();
      }
    );
  };

  increment = id => {
    console.log("my wife is sexier");
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(i => i.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    console.log("decrement");
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(i => i.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.count >= 1) {
      product.count = product.count - 1;
      product.total = product.count * product.price;
    }

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  remove = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(i => i.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    console.log("working");

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let cartTotal = 0;
    let cartCountTotal = 0;
    this.state.cart.map(i => (cartTotal += i.total));
    this.state.cart.map(i => (cartCountTotal += i.count));
    this.setState({
      cartTotal: cartTotal,
      cartCountTotal: cartCountTotal
    });
  };

  render() {
    return (
      //we are creating/returning Contexts Provider, to provide state.
      <ProductContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
        <Persist 
          name="cart" 
          data={this.state} 
          debounce={500} 
          onMount={data => this.setState(data)}
        />
      </ProductContext.Provider>
    );
  }
}

//Variable for state consumers
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
