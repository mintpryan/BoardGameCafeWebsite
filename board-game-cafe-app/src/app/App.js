import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Root from "../pages/Root";
import About from "../pages/About";
import Events from "../pages/Events";
import { ConfigProvider } from "antd";
import { tokens } from "../styles/main";
import Home from "../pages/Home";
import FoodDrinkPage from "../pages/FoodDrinkPage";
import { Helmet } from 'react-helmet';


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color:${tokens.bodyBg};
  }
  

  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
    font-family: "Nunito";
    font-size: 1em;
    overflow: auto;
    color:${tokens.colorText} !important; 
    
  }

`;



function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="menu" element={<FoodDrinkPage />} />
      </Route>
    </Route >

  ))
  return (<>
    <Helmet>
      <title>Sip&Play - Board Game Cafe</title>
      <meta name="description" content="Visit our board game cafe, where you will find a wide selection of games for all ages. Enjoy delicious drinks and snacks in a cozy atmosphere."/>
    </Helmet>
    <GlobalStyle />
    <ConfigProvider theme={{
      token: tokens,
    }}> <RouterProvider router={router}></RouterProvider></ConfigProvider>

  </>
  );
}

export default App;