import './App.css'
import Cart from './components/Header/Cart'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Header />
        <Main />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App
