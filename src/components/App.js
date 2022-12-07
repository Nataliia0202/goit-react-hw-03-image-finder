
import { React, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
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


// {/* <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div> */}