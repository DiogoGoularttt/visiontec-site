import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from '../../pages/home/home.jsx';
import Signin from '../../pages/signin/signin.jsx';
import Signup from '../../pages/signup/signup.jsx';
import useAuth from '../hooks/useAuth.ts';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
}

const RoutesApp = () => {
  return (
    <Home/>
    // <BrowserRouter>
    //   <Fragment>
    //     <Routes>
    //       <Route exact path="/home" element={<Private Item={Home} />} />
    //       <Route path="/signin" element={< Signin/>} />
    //       <Route exact path="/signup" element={<Signup/>} />
    //       <Route path="*" element={<Signin />} />
    //     </Routes>
    //   </Fragment>
    // </BrowserRouter>
  )
}

export default RoutesApp;