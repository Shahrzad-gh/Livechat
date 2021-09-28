import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Home from "./components/layouts/Home";
import NotFound from "./components/layouts/NotFound";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Livechat from "./components/layouts/Livechat";
import Authentication from "./components/layouts/Authentication";
import Profile from "./components/layouts/Profile";
import { AuthContextProvider } from "./context/AuthContext";

function App(props) {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          {props.location.pathname !== "/livechat" && <Navbar />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/authentication" component={Authentication} />
            <Route path="/livechat" component={Livechat} />
            <Route path="/profile/:id" component={Profile} />
            <Route component={NotFound} />
          </Switch>
          {props.location.pathname !== "/livechat" && <Footer />}
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default withRouter(App);
