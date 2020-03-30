import React from "react";
import { getCategory, getJoke } from "../service/HttpService";
import Logo from "../img/logo-chuck.png";
import LoaderImg from "../img/loader.svg";
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
} from "../globalStyle/style";

const Home = () => {
  const [categories, setcategories] = React.useState([]);
  const [joke, setJoke] = React.useState({});

  React.useEffect(() => {
    getCategory().then(res => setcategories([res]));
    setJoke({ value: "Selecione uma Categoria" });
  }, []);

  const handleJoke = name => {
    setJoke({ value: "loader" });
    getJoke(name).then(res => setJoke(res));
  };

  const Loader = () => {
    return <Img src={LoaderImg} />;
  };

  return (
    <Container>
      <GlobalStyle />
      <Hero>
        <Img src={Logo} alt="logo" />
        <Title>
          Gerador de Piadas <Name>Chuck Norris</Name>
        </Title>
        <Menu>
          {categories.length === 0
            ? Loader()
            : categories[0].map((item, key) => {
                return (
                  <Item key={key} onClick={() => handleJoke(item)}>
                    {item}
                  </Item>
                );
              })}
        </Menu>
        <Section>
          <Joke>{joke.value === "loader" ? Loader() : joke.value}</Joke>
          <Next onClick={() => handleJoke(joke.categories[0])}>Proxima</Next>
        </Section>
      </Hero>
    </Container>
  );
};


export default Home;
