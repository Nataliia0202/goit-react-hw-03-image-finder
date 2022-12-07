
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from './services/fetchImages';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    text: '',
    page: 1,
    images: [],
    largeImageData: {},
    loading: false,
    isModalOpen: false,
    isError: false,
  };

  render() {
    return (
      <>
        <Searchbar
          onSubmit={this.searchImages}
          toastInfo={this.toastInfoNothing}
        />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
};


