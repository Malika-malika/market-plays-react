import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom" 
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthContextProvider from './context/AuthContext';
import ProductsContextProvider from './context/ProductsContext';

const Routes = () => {
   return (
      <ProductsContextProvider>
         <AuthContextProvider>
            <BrowserRouter>
               <Header/>
                  <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/login" component={SignIn}/>
                     <Route exact path="/signup" component={SignUp}/>
                     <Route exact path="/cart" component={Cart}/>
                  </Switch>
               </BrowserRouter>
         </AuthContextProvider>
      </ProductsContextProvider>
      
   );
};

export default Routes;