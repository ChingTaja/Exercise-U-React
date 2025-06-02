import Header from './Header.jsx';
import Shop from './Shop.jsx';
// import { CartContext } from './store/shopping-cart-context.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function ShoppingCart() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Shop />
      </CartContextProvider>
    </>
  );
}

export default ShoppingCart;
