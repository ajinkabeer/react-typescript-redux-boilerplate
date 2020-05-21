import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { AppState } from './redux/store/store';
import { getAllUsers } from './redux/actions/UserActions';

import App from './components/App';

interface Props {
  store: Store<AppState>;
}

const Root: React.SFC<Props> = (props) => (
  <Provider store={props.store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const store = configureStore();
store.dispatch(getAllUsers());


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
