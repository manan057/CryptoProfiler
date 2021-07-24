import { render } from "react-dom";
import Coin from "./Coin";

const App = () => {
  return (
    <div>
      <h1>Crypto Profiler!</h1>
      <Coin name="Bitcoin" protocol="Proof of Work" age="12 years" />
      <Coin name="Etherum" protocol="Proof of Stake" age="6 years"/>
      <Coin name="Binance" protocol="Proof of Staked Authority" age="4 years"/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
