import "./App.css";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import NavBarMain from "./components/NavBars/NavBarMain";

import PostsList from "../src/components/posts/PostList";
import PostAdd from "../src/components/posts/PostAdd";
import Login from "../src/components/users/login";
import Register from "../src/components/users/register";

import Profile from "../src/components/views/Profile";
import Home from "../src/components/views/Home";
import ProtectedRoute from "../src/components/auth0/Protected-route";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Router>
        <div>
          <NavBarMain />
          <Main />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      
      <Route exact path="/posts/new" component={PostAdd} />
      {/* <Route exact path="/posts/:_id" component={PostInfo} />
      <Route exact path="/posts/:_id/edit" component={PostEdit} /> */}

      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <ProtectedRoute exact path="/posts" component={PostsList} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
  );
}
export default App;
