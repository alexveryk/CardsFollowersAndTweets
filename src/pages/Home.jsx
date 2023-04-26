import { Card } from 'components/Card/Card';
import { List } from './Home.styled';
import { Section } from './Home.styled';

const Home = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
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
                    id={user.id}
                  />
                </li>
              );
            })}
          </List>
        </Section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
