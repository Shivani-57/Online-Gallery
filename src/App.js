import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ImagePage from './components/ImagePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/imagepage" element={<ImagePage />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
