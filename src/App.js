import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    person: [
      {name: 'jinang', age: '22'},
      {name: 'lisa', age: '5'},
      {name: 'jimmy', age: '23'}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked: ');
    this.setState({ 
      person: [
        {name: 'jinang', age: '22'},
        {name: 'lisa', age: '5'},
        {name: newName, age: '32'}
      ]
    });
  }

  nameChangedHandler = (event) => { 
    this.setState({
      person: [
        {name: 'jinang', age: '22'},
        {name: 'lisa', age: '5'},
        {name: event.target.value, age: '32'}
      ]

    });
  }
  render(){
    return(
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, "john")}>Switch Name</button>
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}/>
        <Person
        name={this.state.person[1].name} 
        age={this.state.person[1].age}/>
        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age} 
        click={this.switchNameHandler.bind(this, "jack")}
        changed={this.nameChangedHandler}> My Hobbies: Racing </Person>

      </div>
    );
  }
}

export default App;
