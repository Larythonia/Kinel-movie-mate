import Home from "./pages/Home";
import Shoppingcart from "./pages/Shoppingcart";
import Counter from "./pages/Counter";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signupweek4 from "./pages/Signupweek4";
import Week5 from "./pages/Week5";
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <Home />
      <Login />
    </AuthProvider>
  );
}

export default App;
