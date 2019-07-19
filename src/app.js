import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory, getJoke } from './service/HttpService';
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
  Category,
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
    getCategory()
    .then(res => this.setState({ categories: res }))
  }

  metodoClick(name){
    getJoke(name)
    .then(res => this.setState({ joke: res }))
    this.props.dispatch({
      lastCategory :name,
      type : 'ADDSTATE',
    })
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
          <Category>{`Você Esta na Categoria : ${this.props.category}`}</Category>
          <Section>
              <Joke>{this.state.joke.value ? this.state.joke.value : "Selecione uma Categoria" }</Joke>
              <Next onClick={() => this.metodoClick(this.state.joke.categories[0])} >Proxima</Next>
          </Section>
          </Hero>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state
  }
}

export default connect(mapStateToProps)(App); 