import { Routes, Route } from 'react-router-dom';
import SignInSide from './pages/signIn/SignInSide';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/SignUp';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInSide />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    );
};

export default App;
