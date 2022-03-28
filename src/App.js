import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//Componentes Generales
import Layout from './components/common/ui/layout';
import Home from './components/pages/Home';


//Componentes Individuales
import BlogDetails from './components/common/BlogDetail';

//Paginas Virtuales
import BlogPage from './components/pages/blogs';
import TopGames from './components/pages/top';
import NotFound from "./components/pages/notFound"

function App() {

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/top">
          <TopGames/>
        </Route>
        <Route exact path="/blog">
          <BlogPage/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
