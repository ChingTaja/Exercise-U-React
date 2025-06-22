import Counter from './Counter';
import Header from './Header';
import Auth from './Auth';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuthN = useSelector((state) => state.authN.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthN && <Auth />}
      {isAuthN && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
