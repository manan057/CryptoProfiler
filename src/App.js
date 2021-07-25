import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./Coin";
import SearchParamsAnimal from "./SearchParamsAnimal";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1>Crypto Profiler!</h1>
      {/* <Coin name="Bitcoin" protocol="Proof of Work" age="12 years" />
      <Coin name="Etherum" protocol="Proof of Stake" age="6 years"/>
      <Coin name="Binance" protocol="Proof of Staked Authority" age="4 years"/> */}
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParamsAnimal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
