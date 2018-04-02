import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //<ApolloProvider client={client}>
    <App />,
  //</ApolloProvider>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept();
// }

/* TODO: Replace this piece of shit styled components with something sane */
