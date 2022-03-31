import './App.css';

import React from "react";
import {  Route, Switch  } from 'react-router-dom';

//Componentes Generales
import Layout from './components/common/ui/layout';
import Home from './pages/Home'


//Componentes Individuales
import BlogDetails from './components/common/blog/BlogDetail';

//Paginas Virtuales
import BlogPage from './pages/blogs';
import TopGames from './pages/top';
import NotFound from "./pages/notFound"

import Clasicos from './pages/proyects/clasicos';
import Pnp from './pages/proyects/pnp';
import Pcards from './pages/proyects/proyectCards';

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
        <Route path="/cards">
          <Pcards/>
        </Route>
        <Route path="/pnp">
          <Pnp/>
        </Route>
        <Route path="/clasicos">
          <Clasicos/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
