import React, { Component } from 'react'

export default class DataBindingComponents extends Component {
    sinhVien ={
        ma: '001',
        ten: 'Nguyen Van A',
        hinhAnh:'http://picsum.photos/200'
    }
    renderPicture=()=>{
        return  <img src ={this.sinhVien.hinhAnh} width ="300" height="300" alt ="hinh anh"/>
    }
    render() {
        const title ='fontend';
        const rendertitile =()=>{
            return <p className="text-danger">
                {title}
            </p>
        };
        return (
            <div>
                <h3>abc</h3>
        <p>Tieu de:{title}</p>
        {rendertitile()}
        <h3>Thong tin sinh vien</h3>
        <ul>
        <li>Ma Sinh Vien: {this.sinhVien.ma}</li>
        <li>Ten Sinh Vien: {this.sinhVien.ten}</li>
        <li><img src={this.sinhVien.hinhAnh} alt='hinh anh'></img></li>
        </ul>
            </div>
        )
    }
}
