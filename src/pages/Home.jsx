import { getUsers } from 'components/API/api';
import { Card } from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { List } from './Home.styled';
import { ButtonLoadMore } from 'components/Buttons/ButtonLoadMore';
import { Section } from './Home.styled';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getUsers(page);

        if (!response) {
          console.log('Not Users found! :(');
        }

        setUsers(prevState => [...prevState, ...response.data]);
      } catch (error) {
        console.log(error);
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
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Section>
          <List>
            {users.map(user => {
              return (
                <li key={user.id}>
                  <Card
                    user={user.user}
                    tweets={user.tweets}
                    followers={user.followers}
                    avatar={user.avatar}
                  />
                </li>
              );
            })}
          </List>
          {users.length < 12 && <ButtonLoadMore onChange={handlePageChange} />}
        </Section>
      )}
    </div>
  );
};

export default Home;
