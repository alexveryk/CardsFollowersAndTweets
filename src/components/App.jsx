import { useState, useEffect } from 'react';
import { getUsers } from 'components/API/api';
import Home from 'pages/Home';
import { ButtonLoadMore } from './Buttons/ButtonLoadMore';
import { Container } from './App.styled';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getUsers(page);

        if (!response) {
          setError('No users found.');
          return;
        }

        setUsers(prevState => [...prevState, ...response.data]);
      } catch (error) {
        setError('Error fetching users.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      {error && <p>{error}</p>}
      {users.length > 0 && <Home users={users} />}
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.length < 12 && <ButtonLoadMore onChange={handlePageChange} />
      )}
    </Container>
  );
};
