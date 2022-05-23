import { Box } from 'rebass';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <Router>
      <Box width={[1 / 1.03, 1 / 1.2, 1 / 1.5]} mx={'auto'} className="App">
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route element={<AddPage />} exact path={'/add'} />
            <Route element={<EditPage />} exact path={'/edit'} />
            <Route element={<HomePage />} path={'/'} />
          </Routes>
        </Provider>
      </Box>
    </Router>
  );
}

export default App;
