/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaSearch, FaSpinner, FaCheck } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../../components/Container';
import { CircleRating } from '../../components/CircleRating';
import LoadingPage from '../../components/LoadingPage';

import { Form, SubmitButton, List, Waiting, SearchTitle } from './styles';
import { CircleRatingComponent } from '../../components/CircleRating/styles';

export default class Main extends Component {
  state = {
    newSearch: '',
    products: [],
    loading: false,
  };

  componentDidMount() {
    const localProducts = localStorage.getItem('products');

    if (localProducts) {
      this.setState({ products: JSON.parse(localProducts) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { products } = this.state;

    if (prevState.products !== products) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newSearch: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const { newSearch } = this.state;
    const response = await api.get(`/${newSearch}`);

    this.setState({
      products: [...response.data.results],
      newSearch: '',
      loading: false,
    });
  };

  render() {
    const { newSearch, products, loading } = this.state;
    return (
      <Container>
        <h1>
          KUANTO<strong>BUSKA</strong>
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisa um produto, marca, referencia..."
            value={newSearch}
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
        {products.length === 0 && !loading ? <LoadingPage /> : ''}
        {loading ? (
          <Waiting>
            <FaSpinner color="#F36F2C" size={80} />
          </Waiting>
        ) : (
          <>
            <SearchTitle>
              {products.length === 0
                ? ''
                : 'O resultado da sua ultima pesquisa foi essa'}
            </SearchTitle>
            <List>
              {products.map((product, index) => (
                <li key={index} className={`effect${index}`}>
                  <FaCheck color="#F36F2C" size={30} className="checked" />
                  <a
                    href="eee"
                    alt={product.score}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="contentImage">
                      <img src={product.image} alt={product.score} />
                    </div>
                    <div className="contentTitle">
                      <p className="title">{product.title}</p>
                    </div>
                    <CircleRatingComponent fullCircle={product.score}>
                      <div className="circle__container">
                        <CircleRating
                          tittle="SCORE"
                          progressStatus={product.score}
                          specialClass={`cirle-rating__featured effectRating${index}`}
                          position="circle__three"
                          number={product.score}
                        />
                      </div>
                    </CircleRatingComponent>
                  </a>
                </li>
              ))}
            </List>
          </>
        )}
      </Container>
    );
  }
}
