import { useEffect } from 'react';
import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui';
import Notification from './Notification';

let isInitial = true;

function App() {
  const dispath = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispath(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      console.log('**');
      const response = await fetch('https://react-adcf7-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

      dispath(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfually!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispath(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispath]);

  return (
    <>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
