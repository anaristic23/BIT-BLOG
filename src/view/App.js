import React, { Component, Fragment } from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { BlogList } from './pages/homepage/blog_page/BlogList';
import { BlogItem } from './pages/homepage/blog_page/BlogItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <BlogList />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
