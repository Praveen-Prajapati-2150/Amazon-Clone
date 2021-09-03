import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import "./styles/Login.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./components/Firebase";
import { useEffect } from "react";

// hosting link https://clone-8b9b1.firebaseapp.com/

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<<<<< POWERFUL
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        // the user is logged out...

        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  console.log("user in >>>>", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            {/* <h1>Login page</h1> */}
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
