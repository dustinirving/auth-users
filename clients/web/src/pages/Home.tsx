import React, { useContext } from 'react';
import Button from 'components/styles/Button.styled';
import AuthApi from 'api/AuthApi';
import { Context } from 'stores/Store';

const Home = () => {
  const [{ user }, dispatch] = useContext<any>(Context);
  const handleLogOut = async () => {
    try {
      const res: any = await AuthApi.logout();
      if (res) {
        dispatch({ type: 'UPDATE_USER', payload: null });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Button style={{ width: '200px' }} onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default Home;
