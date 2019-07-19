import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: [],
      joke:'',
    }
      
    
  }

  componentWillMount() {
    fetch(`https://api.chucknorris.io/jokes/categories`)
    .then(res => res.json())
    .then(res => this.setState({ categories: res }))
    
  }

  metodoClick(name){
    console.log(name)
    fetch(`https://api.chucknorris.io/jokes/random?category=${name}`)
    .then(res => res.json())
    .then(res => this.setState({ joke: res }))
  }

  render() {
    return (
      <main>
      <h1>Gerador de Piadas- Chuck Norris</h1>
      <ul>
        {
          this.state.categories.map((item, key) => {
            return(
              <li key={key} onClick={() => this.metodoClick(item)}>{item}</li>
            )
          }
          )}
      </ul>
        <section>
            <p>{this.state.joke.value}</p>
            <p onClick={() => this.metodoClick(this.state.joke.categories)} >Proxima</p>
        </section>

      </main>
    );
  }
}

export default App;