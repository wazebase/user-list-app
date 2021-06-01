import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import UserListApp from './containers/UserListApp/UserListApp';

ReactDOM.render(
  <BrowserRouter>
    <UserListApp />
    </BrowserRouter>,
  document.getElementById('root')
);

