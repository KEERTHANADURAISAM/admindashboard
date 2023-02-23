import logo from "./logo.svg";
import "./App.css";
import NoPage from "./components/NoPage";
import DashBoard from "./components/DashBoard";
import Four from "./components/Four";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Colors from "./components/Colors";
import Borders from "./components/Borders";
import Animation from "./components/Animation";
import Others from "./components/Others";
import Register from "./components/Register";
import Charts from "./components/Charts";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <DashBoard />
        </Route>
        <Route path="/button">
          <Buttons />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/four">
          <Four />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/borders">
          <Borders />
        </Route>
        <Route path="/animation">
          <Animation />
        </Route>
        <Route path="/others">
          <Others />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/no">
          <NoPage />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
