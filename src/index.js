import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import './tail.css';
import store from './store/store';
import Header from './common/Header';
import contactList from './contactList';
import ContactDetail from './ContactDetail';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => (
  <Router history={history()}>
    <div className="flex flex-col min-h-screen">
         <Header />
        
         <Route exact path="/" component={contactList} />
         <Route path="/details/:id" component={ContactDetail} />
        
    </div>
      </Router>
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Index />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);