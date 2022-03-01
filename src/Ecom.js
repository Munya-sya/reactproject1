import './Ecom.css';
import React from 'react';
import ReactDOM from 'react-dom';

const array = ['Male Suits', 'Female Suits', 'Male Shoes', 'Female Shoes'];
class Hello extends React.Component{
    state = {
        text: 'Male Clothing',
        integer: 1,
      }
      componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1500);
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick =()=>{
        const { integer } = this.state;
        this.setState({
            text: array[integer],
            integer: (integer + 1) % array.length,  
        });
      }
      render(){
        const { text } = this.state;
          return(
            <div>
                
                   <h5 style={{margin: '0', padding: '0', textAlign: 'center'}}>
                  {`<${text} />`}
                </h5>
                  
            </div>  
          );
      }

}
class Footer extends React.Component{
    render(){
      return(
        <div>
      
                   <h5>Contact us on berncollection@gmail.com</h5>
                  
          </div>
      );
    }
}
class Item extends React.Component{
    render(){
        return(
        <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
            
              <div className="thumbnail  first column">
                <div className="date_image_holder1">
                  <span className="heart_position glyphicon glyphicon-heart"></span>
                </div>
                <div className="caption">
                  <h4 className="pull-right"> Kes 10,000.00</h4>
                  <h4>Male Suit
                  </h4>
                </div>
              </div>
            
            
            
                  <div className="thumbnail second column">
                  <div className="thumbnail">
                    <div className="date_image_holder2">
                      <span className="heart_position glyphicon glyphicon-heart"></span>
                    </div>
                    <div className="caption">
                      <h4 className="pull-right">Kes 8,000.00</h4>
                      <h4>Female Suit
                      </h4>
                    </div>
                  </div>
                </div>
              
          <div className="thumbnail third column">
              <div className="thumbnail">
                <div className="date_image_holder3">
                  <span className="heart_position glyphicon glyphicon-heart"></span>
                </div>
                <div className="caption">
                  <h4 className="pull-right">Kes 9,000.00</h4>
                  <h4>Male Shoes
                  </h4>
                </div>
              </div>
            </div>
         
           <div className="thumbnail forth column">
              <div className="thumbnail">
                <div className="date_image_holder4">
                  <span className="heart_position glyphicon glyphicon-heart"></span>
                </div>
                <div className="caption">
                  <h4 className="pull-right">Kes 6,000.00</h4>
                  <h4>Female Shoes
                  </h4>
                </div>
              </div>
            </div>
          
          </div>
          
        );
    }
}

class Ecom extends React.Component {
  render (){
   return (
        <div className="App">
          <header className="app">
            <h1>Welcome to <span className="app-title">Bern Collections</span></h1>
          </header>
          <main>
              <h1 style={{margin: '0', padding: '0', textAlign: 'center'}}>
				  <span style={{color: '#FFFFFF'}}>#</span>
					<span style={{color: '#091f40'}}>We</span>
                    <span> </span>
					<span style={{color: '#C5203E'}}>Have</span>
					{`\u00A0`}
                    <Hello />
				</h1>
            <div className="container container-fluid">
                <div className = "row">
                <Item />
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
          </main>
        </div>
        
      );
  }
}

export default Ecom;
