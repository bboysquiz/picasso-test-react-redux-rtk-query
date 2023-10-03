import './App.css';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { api } from "./api";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
