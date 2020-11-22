// rfc 
import React from 'react'

export default function () {
    const title = 'Cybersoft';
    const imgSrc = 'https://picsum.photos/200/200';

    // object 
    const sinhVien = {
        maSV: 'SV001',
        tenSinhVien: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200'
    }
    // binding hamf 
    const renderimg = () => {

        // giá trị phải trả về 1 chuỗi số, jsx (1 đoạn code html được bao phủ bởi 1 thẻ)
        return <div>
            <h3>Hình ảnh</h3>
            <img src={sinhVien.hinhAnh} width="200" height="200" />
        </div>
    }

    return (
        <div className='container'>
            <h3>Databinding</h3>
            <p id='title' className='display-4'>Tiêu đề:{title}</p>
            <img src={imgSrc} width="200" height="200" alt="hinh anh" />
            <input className="form-control w-25" value={title} />
            <hr></hr>
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={sinhVien.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                    <p className="card-text">{sinhVien.maSV}</p>
                </div>
            </div>

            <div className="mt-5">
                {renderimg()}
            </div>
        </div>
    )
}
