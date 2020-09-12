/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaSearch, FaSpinner, FaCheck } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../../components/Container';

import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <h1>
          KUANTO<strong>BUSKA</strong>
        </h1>
        <Form onSubmit={this.handleSubmit}>
           <input
            type="text"
            placeholder="Pesquisa um produto, marca, referencia..."
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaSearch color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
           {repositories.map((repository) => (
              <li key={repository.name}>
                <FaCheck color="#F36F2C" size={30} class="checked" />
                <a
                  href="https://www.magazineluiza.com.br/smartphone-quantum-muv-pro-azul-tela-de-5-5-32gb-16mp/p/gd3g79a81b/te/qtum/"
                  alt={repository.name}
                  target="_blank"
                >
                  <p>Smartphone Quantum MÜV PRO, Azul, Tela de 5.5”, 32GB, 16MP</p>
                  <div>
                    <img src="https://a-static.mlcdn.com.br/618x463/smartphone-quantum-muv-pro-azul-tela-de-5-5-32gb-16mp/onofre-agora/745804/1ba149b5f3aee4f4bf0715772888924c.jpg" title={repository.name}/>
                  </div>
                </a>
              </li>
          ))}
        </List>
      </Container>
    );
  }
}
