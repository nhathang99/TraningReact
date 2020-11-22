import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    show =() =>{
        alert('hello');
    }
   
    
    render() {
        const title= 'abc';
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.show}>Click</button>
                {/* HOẶC  */}
                {/* <button onClick ={()=>      {alert(`hello ${title}`);}}>show mess</button> */}
                <button onClick={() => {
                    alert(`hello ${title}`);

                }}> Show mess</button>

               <button onClick = {() => {
                   this.showInfo('hello fe54')
               }}>Show info</button>
            </div>
        )
    }
}
