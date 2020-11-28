import React, { Component } from 'react'
import data from '../../data/data.json';
export default class BaiTapRenderDSPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }
    renderMangPhim = () => {
        return this.state.mangPhim.map((Phim, i) => {
            return (
                <div className="card col-4">
                    <img className="card-img-top" src={Phim.hinhAnh} width={300} height={350} />
                    <div className="card-body">
                        <h4 className="card-title" style={{height:'60px'}}>{Phim.tenPhim.length > 20 ? <span>{Phim.tenPhim.substr(1,20)+'...'}</span>:<span>{Phim.tenPhim}</span>}</h4>
                        <p className="card-text">{Phim.moTa.length > 100 ? Phim.moTa.substr(1, 100) + '...' : Phim.moTa}</p>
                    </div>
                </div>

            )
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-danger">Danh Sach Phim</h3>
                <div className="row">
                    {this.renderMangPhim()}
                </div>
            </div>
        )
    }
}
