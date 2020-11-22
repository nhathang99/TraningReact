import React, { Component } from 'react'
import Header from './Header'
import Laptop from './Laptop'
import Products from './Products'
import Promotion from './Promotion'
import Slider from './Slider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className='bg-dark'>
               <Header/>
               <Slider/>
               <Products/>
               <Laptop/>
               <Promotion/>
            </div>
        )
    }
}
