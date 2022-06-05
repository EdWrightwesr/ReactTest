import NavBar from "./components/NavBar";
import Articles from './components/Articles/Articles'
import Logotips from './components/Logotips/Logotips'
import Products from './components/Products/Products'
import Statistic from './components/Statistic/Statistic'
import Content from './components/Content/Content'
import ContentTwo from './components/ContentTwo/ContentTwo'
import Footer from './components/Footer/Footer'
import React from 'react'

const App = () => {
  return <div>
    <NavBar />
    <Articles />
    <Logotips />
    <Products />
    <Statistic />
    <Content />
    <ContentTwo />
    <Footer />
  </div>
}

export default App;
