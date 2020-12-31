import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Registration from './Pages/Authentication/Registration';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function App() {

  const [{}, dispatch] =useStateValue();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => {
        // handle success
        setData(res.data);
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }, [setData]);


  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>>", authUser);

      if (authUser){
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/register">
            <Header />
            <Registration/>
          </Route>

          <Route path="/">
            <Header />
            <Home data={data}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
