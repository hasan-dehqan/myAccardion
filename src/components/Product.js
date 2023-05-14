import React, { Component } from 'react';
import '../styles/product.css';

class Product extends Component {
    constructor(){
        super();
        this.state = {
            like : false
        }
    }
    like = ()=>{
        this.setState({like : !this.state.like})
    }
    render() { 
        const {img, productName, productPrice, children} = this.props;
        return (
            <>
                <div className='box'>
                    <img src={img} alt="" className='imgElement' />  
                    <h3>{productName}</h3>
                    <h2>{productPrice}</h2>
                    <p>{children}</p>
                    {
                        this.state.like ? 
                        (
                            <i className='fa fa-heart' onClick={this.like}></i>
                        )
                        :
                        (
                            <i className='fa fa-heart-o' onClick={this.like}></i>
                        )
                    }
                </div>

            </>
        );
    }
}
 
export default Product;