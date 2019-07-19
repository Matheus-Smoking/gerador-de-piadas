import React, { Component } from 'react';
import Logo from "./img/logo-chuck.png";
import {
  Container,
  Hero,
  Img,
  Title,
  Name,
  Menu,
  Item
} from "./globalStyle/style";

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
    fetch(`https://api.chucknorris.io/jokes/random?category=${name}`)
    .then(res => res.json())
    .then(res => this.setState({ joke: res }))
  }

  render() {
    return (
      <Container>
        <Hero>
          <Img src={Logo} alt="logo"/>
          <Title>Gerador de Piadas <Name>Chuck Norris</Name></Title>
          <Menu>
            {
              this.state.categories.map((item, key) => {
                return(
                  <Item 
                  key={key} 
                  onClick={() => this.metodoClick(item)}
                  >{item}</Item>
                )
              }
              )}
          </Menu>
          <section>
              <p>{this.state.joke.value}</p>
              <p onClick={() => this.metodoClick(this.state.joke.categories)} >Proxima</p>
          </section>
          </Hero>
      </Container>
    );
  }
}

export default App;