import React, { Component } from 'react'

export default class DemoState extends Component {
    //state là thuộc tính có sẳn của components  dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi dùng thao tác(click,change,blur)
    state ={
        isLogin: false
    }
    userName ='Sinsin'
    renderContent = () =>{
        
        if(this.state.isLogin){
            return <p>
                hello ! {this.userName}
            </p>
        }
        return <button onClick ={()=>{this.handleLogin();
        }}className="btn btn-success">đăng nhập</button>
    }
    //mang tính chất thay đổi thuộc tính biến của lớp đối tượng (hàm xử lý), không mang tính chất render 
    //mang tính chất render return về nội dung
    handleLogin = () =>{
        // không được thay đổi state trực tiếp mà phải thông qua phương thức setstate 
        // setstate là phương thức của lớp đối tượng component => dùng để thay đổi giá trị dữ trong this.state đồng thời gọi lại hàm render
        // this.state.isLogin = true;
        // console.log('islogin',this.isLogin);
        // const newState ={
        //     isLogin:true
        // }
        // this.setState(newState);
        this.setState({isLogin:true});
    }
    
    render() {
        return (
            <div className="container">
                <h3>if else react</h3>
                {/* toán tử 3 ngôi  */}
            {/* {this.isLogin ? <p>hello {this.userName}</p> : <button>Đăng nhập</button>} */}
            {this.renderContent()}

            </div>
        )
    }
}
