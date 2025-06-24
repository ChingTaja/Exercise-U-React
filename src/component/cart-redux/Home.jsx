import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector((state) => state.ui.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
