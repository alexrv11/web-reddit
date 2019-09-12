import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Typography } from 'antd';
import Home from './containers/postList'
import PostDetail from './containers/postDetail'
import { Route, BrowserRouter as Router } from 'react-router-dom'
const { Header, Footer } = Layout;
const { Title } = Typography

function App() {
  return (
    <Router>
      <Layout>
      <Header>
      <Title id="reddit-title" level={2}>Reddit Top</Title>
      </Header>
        <div>
        <Route path="/" component={Home} />
        <Route path="/details" component={PostDetail} />
      </div>
      <Footer>Footer</Footer>
    </Layout>
    
  </Router>
  );
}

export default App;
