import React, { Component } from 'react';

import '../styles/Attractive.css'

import Product from './Product';

// images 
import img1 from '../images/m_s1.jpg';
import img2 from '../images/m_s2.jpg';
import img3 from '../images/m_s3.jpg';
import img4 from '../images/m_s4.jpg';

class Attractive extends Component {
    constructor(){
        super();
        this.state = {
            Attractive : false
        }
    }
    
    render() { 
        return (
            <>
                
                <div className='Attractive'>
                    <Product img={img1} productName='YAMAHA' productPrice='230$'>Yamaha’s top-of-the-line ‘Hyper Naked,’ the MT-10 SP, remains the same for 2023. Aside from a little price hike that seen across the range, there are changes.</Product>
                    <Product img={img2} productName='HONDA' productPrice='410$'>A new generation of naked twin-cylinder motorcycle, with class-leading power-to-weight ratio, sharp-handling chassis with high-quality Showa suspension style. </Product>
                    <Product img={img3} productName='SUZUKI' productPrice='42$'>The V-STROM 800DE is designed to “Advance Your Adventure This conveys the V-STROM 800DE makes every ride feel like an interesting adventure inspiring.</Product>
                    <Product img={img4} productName='KAWASAKI' productPrice='75$'>Kawasaki's engines division, housed in a single office complex in Grand Rapids, Michigan, consolidates research and development projects for engines.</Product>
                </div>
                
            </>
        );
    }
}
 
export default Attractive;