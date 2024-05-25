import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignInSide';
import SignUp from './pages/signUp/SignUp';
import Pricing from './components/Pricing';
import Checkout from './pages/checkout/Checkout';

const App = () => {
    return (
        <Router basename="/bulbabook_front">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
