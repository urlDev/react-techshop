import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Components/Product/Data/data.js';

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
            cart: []
		};
	}

    componentDidMount() {
        this.setProducts();
    }

    // with set products, we can iterate through the array and get each object.
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
            
        })
        // after we call setproducts function,products array will become tempProducts
        // which means every object in data array will be there as well
        this.setState(() => {
            return {
                products: tempProducts
            }
            
        })
    }
    
    //get item will return product thats id matches with the id from products list(data) 
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    // handeDetails will get item set it as product and then set the state of detailproduct as product.
	// getitem must have id 
    handleDetail = (id) => {
		const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })  
	};

	addToCart = (id) => {
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
        this.setState(() => {
            return {
                products: tempProducts, 
                // we are copying the state of cart and adding product we got above to it
                cart: [...this.state.cart, product]
            }
        // callback function to get state after we setstate
        }, () => console.log(this.state))
	};

	render() {
		return (
			//we are creating/returning Contexts Provider, to provide state.
			<ProductContext.Provider
				value={{ ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart }}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

//Variable for state consumers
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
