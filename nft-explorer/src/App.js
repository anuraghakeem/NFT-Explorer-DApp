import { Provider, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"


import Explore from "./pages/explore";

function App() {
  // initialize wagmi library connectors for Metamask and Walletconnect
  const connectors = () => {
    return [
      new InjectedConnector({ defaultChains }),
    ]
  }
  return (
    <Provider autoConnect connectors={connectors}>
      <Explore />
    </Provider>
  );
}

export default App;
