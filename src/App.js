import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kalku:false,
      persegi:false,
      submit: false,
      hasil:0,
      angka1:0,
      angka2:0,
      operator:""
    };
  }

  changeHandler = (event) => {
    let value = event.target.value
    this.setState({[event.target.name]:value})
  }

  submitHandlerkalku = () => {
    let angka1 = parseInt(this.state.angka1)
    let angka2 = parseInt(this.state.angka2)
    let operator = this.state.operator
    let hasil= 0
    if(operator==="+"){
      hasil=angka1 + angka2
    }else if(operator==="-"){
      hasil=angka1 - angka2
    }else if(operator==="*"){
      hasil=angka1 * angka2
    }else if(operator==="/"){
      hasil=angka1 / angka2
    }
    this.setState({
      hasil,
      kalku:!this.state.kalku
    })
  }

  backHandlerkalku = () => {
    this.setState({
      kalku:!this.state.kalku
    })
    
  }

  

  backHandlerpersegi = () => {
    this.setState({
      persegi:!this.state.persegi
    })
    
  }

  backHandlerpersegipanjang = () => {
    this.setState({
      persegipanjang:!this.state.persegipanjang
    })
    
  }

  backHandlerlingkaran = () => {
    this.setState({
      lingkaran:!this.state.lingkaran
    })
    
  }
  

  

  render() {
    return (
      <div>
        <center>

           {!this.state.kalku ? (
            <div >
              <h1>Kalkulator</h1>

              <input type="number" name="angka1" placeholder="Angka 1" onChange={this.changeHandler}/>
              <br/><br/>

              <select name="operator" onChange={this.changeHandler}>
                <option value="">=Pilih Operator=</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
              <br/><br/>

              <input type="number" name="angka2" placeholder="Angka 2"  onChange={this.changeHandler}/>
              <br/><br/>
              
              <input type="submit" onClick={() => this.submitHandlerkalku()} value="Hasil"/>
            </div>
          ):(
            <div>
              <h1>Hasil {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil} </h1> 
              <button onClick={() => this.backHandlerkalku()}>Back To Home</button>
            </div>
          )}  

        


        </center>
      </div>
    );
  }
}

export default App;