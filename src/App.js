import { Box } from "rebass";
import NavBar from "./components/NavBar";
import UserAdder from "./components/AddUser";
import UserList from "./components/UserList";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Box width={[1 / 1.03, 1 / 1.04, 1 / 1.5]} mx={"auto"} className="App">
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route element={<UserAdder />} path={"/add"} />
            <Route element={<UserList />} path={"/"} />
          </Routes>
        </Provider>
      </Box>
    </Router>
  );
}

export default App;
