import React, { Component, Fragment } from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { BlogList } from './pages/homepage/blog_page/BlogList';
import './App.css';
import { About } from './pages/about_page/About';
import { Switch, Route } from 'react-router-dom';
import { AllAuthors } from './pages/authors_page/AllAuthors';
import { SinglePostPage } from './pages/homepage/single_post_page/SinglePostPage';
import { SingleAuthor } from './pages/authors_page/single_author_page/SingleAuthor';
import { NewPost } from "./pages/newPost/NewPost";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/authors" component={AllAuthors} />
            <Route exact path="/about" component={About} />
            {/*                 /single/4           */}
            <Route exact path="/single/:id" component={SinglePostPage} />
            <Route exact path="/single_author/:id" component={SingleAuthor} />
            <Route exact path="/" component={BlogList} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
