import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { AppRoute } from "./AppRoute";
import { useApolloClient } from "./hooks";

function App() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <AppRoute />
    </ApolloProvider>
  );
}

export default App;
