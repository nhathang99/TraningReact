import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone XS', price: 3000 },
    ]
    // renderProduct = () => {
    //     //tạo mảng chứa jsx hiển thị lên giao diện
    //     let arrJSX = [];
    //     //mỗi 1 lần duyệt lấy ra 1 đối tượng sản phẩm
    //     for (let i in this.products) {
    //         let product = this.products[i];
    //         //từ đối tượng sản phẩm tạo ra đối tượng jsx
    //         let jxProduct = <div className="col-4">
    //              <div className="card ">
    //             <img className="card-img-top" src="https://picsum.photos/200" alt />
    //             <div className="card-body">
    //     <h4 className="card-title">{product.name}</h4>
    //     <p className="card-text">{product.price}</p>
    //             </div>
    //         </div>
    //         </div>;
    //     arrJSX.push(jxProduct); // đưa phần tử jsx được từ dữ liệu sản phẩm
    //     }
    //     return arrJSX;
    // }
    renderProductWithMap = ()=>{
       return  this.products.map((product, i) => {
            return  <div className="col-4" key={i}>
            <div className="card ">
           <img className="card-img-top" src="https://picsum.photos/200" alt />
           <div className="card-body">
   <h4 className="card-title">{product.name}</h4>
   <p className="card-text">{product.price}</p>
           </div>
       </div>
       </div>;
        })
        // return arrJSX;
    }

    rederTable = () =>{
        return this.products.map((product,i) =>{
            return <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    {/* {this.renderProduct()}
                     */}
                     {/* {this.renderProductWithMap()}
                      */}
                      <table className="table">
                          <thead>
                              <tr>
                                  <th>id</th>
                                  <th>name</th>
                                  <th>price</th>
                              </tr>
                              <tbody>
                                  {this.rederTable()}
                              </tbody>
                          </thead>

                      </table>
                </div>

            </div>
        )
    }
}
