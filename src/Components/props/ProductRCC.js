import React, { Component } from 'react'

export default class ProductRCC extends Component {

    // this.props là thuộc tính có sẳn của react class components dùng để nhận giá trị từ component cha truyền vào 
    //this.props thuộc tính không được gán lại giá trị mới 
    // state chứa các giá trị thay đổi , có thể gán lại thông qua thuộc tính setState
    render() {
        // let { tenSP,hinhAnh } = this.props;
       // let{maSP, tenSP,giaBan,hinhAnh} = this.props.sanPham;
        let { sanPham } = this.props;//es6
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                </div>
            </div>
        )
    }
    
}

