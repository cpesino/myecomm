import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { AppRoute } from "./AppRoute";
import { useApolloClient } from "./hooks";
import { Provider } from "./components/ui/provider";
import { AppLayout } from "./Layout";

function App() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Provider>
        <AppLayout>
          <AppRoute />
        </AppLayout>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
