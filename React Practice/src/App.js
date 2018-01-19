import React, { Component } from 'react';

// const title = React.createElement("div",{className: 'me'}, [
                //       React.createElement('h1', {}, 'An Awesome Person'),
                //       React.createElement('p', {}, 'Who is learning React'),
                //       React.createElement('ul', {className: 'my-interests'}, [
                //         React.createElement('li', {}, 'JavaScript'),
                //         React.createElement('li', {}, 'React'),
                //         React.createElement('li', {}, 'Movies'),
                //         React.createElement('li', {}, 'Ice Cream')
                //       ])
                // ]);
// const title1 = React.createElement("p",{}, 'Hsdfgsdfgdfey');
//
// class Button extends Component {
//   render() {
//     return React.createElement('button', {}, 'Click me!');
//   }
// }
//
// const nestedButtons = React.createElement('div', {}, [
//   React.createElement(Button),
//   React.createElement(Button),
// ]);

const l = ['Tender', 'Short', 'Beef', 'Ribeye'];
const p1 = React.createElement('div', {className: "oldercoaster"},[
  React.createElement('p',{},'Two'),
  React.createElement('p',{},'Passen')
]);
const defaultLimit = 10
class App extends Component{
  constructor(){
    super();
    this.state = {
      btn : 0
    }
    // this.tickle = this.tickle.bind(this)
  }
  tickle(btn) {
    console.log('Tee hee!', btn);
    this.setState({
      btn: !this.state
    })
  }
  componentDidMount(){
  console.log("hey")
  }
  componentWillMount(){
  console.log("hey1")
  }
  handleChange = event =>{
    this.setState({
      value:event.target.value
    })
    console.log(this.state.value)

  }

  render(){
    // console.log("i am here")
    return(


      // <div>
      //This is the way for commneting inside the div
      // {/*<div></div> */}
      //       {this.state.btn?'hello this is false':"this is true"}
      //       <button onClick={this.tickle.bind(this, this.state.btn)}>{this.state.btn} Click Here </button>
      //       <input value={this.state.value} onChange={this.handleChange} maxLength={this.props.limit || defaultLimit}/>
      //
      // </div>
      l
    // <div className="dgdgdg">
      // {p1}
      // <ul>
      // {l.map((i)=><li>{i}</li>)}
      // </ul>
      //  </div>
    )
  }
}

// Function in React
// const App = () => title


export default App;
// export default className
// export ClassName
