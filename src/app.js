import React, { Component } from 'react';
import Logo from "./img/logo-chuck.png";
import {
  GlobalStyle,
  Container,
  Hero,
  Img,
  Title,
  Name,
  Menu,
  Item,
  Section,
  Joke,
  Next
} from "./globalStyle/style";

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: [],
      joke:'',
      key:'',
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
        <GlobalStyle />
        <Hero>
          <Img src={Logo} alt="logo"/>
          <Title>Gerador de Piadas <Name>Chuck Norris</Name></Title>
          <Menu>
            {
              this.state.categories.map((item, key) => {
                return(
                  <Item
                  className = { this.state.key === key ? 'active' : '' }
                  key={key} 
                  onClick={() =>{
                    this.metodoClick(item , key)
                    return this.setState({key:key})
                    }
                  }
                  >{item}</Item>
                )
              }
              )}
          </Menu>
          <Section>
              <Joke>{this.state.joke.value ? this.state.joke.value : "Selecione uma Categoria" }</Joke>
              <Next onClick={() => this.metodoClick(this.state.joke.categories[0])} >Proxima</Next>
          </Section>
          </Hero>
      </Container>
    );
  }
}

export default App;