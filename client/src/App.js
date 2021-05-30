import './App.css';
import Footer from "../src/components/Footer";
import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import PostsList from "../src/components/posts/PostList";
import PostAdd from "../src/components/posts/PostAdd";

function App() {
  return (
    <div className="App">     
      <Router>
        <div>
          <Main />
        </div>
        <Footer />
      </Router>
    </div>
  );
}


function Main() {
  return(
    <Switch>
      <Route exact path="/posts" component={PostsList} />
      <Route exact path="/posts/new" component={PostAdd} />
      {/* <Route exact path="/posts/:_id" component={PostInfo} />
      <Route exact path="/posts/:_id/edit" component={PostEdit} />

      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} /> */}
    </Switch>
  );

}
export default App;
