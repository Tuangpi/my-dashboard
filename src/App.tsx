import { Provider } from "react-redux";
import MainRouter from "./router";
import store from "./store";
import { AuthContextProvider } from "./context/AuthContextProvider";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthContextProvider>
          <MainRouter />
        </AuthContextProvider>
      </Provider>
    </ErrorBoundary>
  );
};
export default App;
