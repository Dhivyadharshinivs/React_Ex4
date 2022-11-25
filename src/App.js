import './App.css';
import React from "react";
import ReactDOM from "react-dom";

function App() {
  class DemoComponent extends React.Component{
    render(){
    
        return(
 
                <div className='App-header'>
                    {/*accessing information from props */}
                    <h2>Hello {this.props.user}</h2>
                    <h1>Welcome to <div className='cl'>FASHION LOUNGE</div></h1>
                    <h3>About Us</h3>
                    <p>Hi, welcome to The Fashion Lounge!<br/>

Established in 2009, TFL is owned by two, DD & DV, who share a love for fashion. With over a decade of experience in the industry, our concept has evolved but our focus remains the same: to help make women feel beautiful & confident by expressing their unique sense of style!

As buyers for the store, we have two very different styles which is reflected in the casual/contemporary apparel & accessories found throughout our four different locations- there’s a little bit of something for everyone to appreciate!
<br/><br/>


 XO,<br/>


DD & DV
</p>
                </div>
            );
    }
}

ReactDOM.render(
    // passing props
    <DemoComponent user = "Dhivyadharshini" />,
    document.getElementById("root")
);
}

export default App;

