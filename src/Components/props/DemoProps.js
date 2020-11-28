import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sach san pham</h3>
                <div className="row">
                    <div className="col-3">
                    <ProductRFC name='iphone'price='10000$'></ProductRFC>
                    </div>
                    <div className="col-3">
                    <ProductRFC name='samsung' price='10000$'></ProductRFC>
                    </div>
                    <div className="col-3">
                    <ProductRFC name='iphone'price='10000$'></ProductRFC>
                    </div>
                    <div className="col-3">
                    <ProductRFC name='iphone'price='10000$'></ProductRFC>
                    </div>

                </div>
                
            </div>
        )
    }
}
