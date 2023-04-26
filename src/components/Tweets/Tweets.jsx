import { Text } from './Tweets.styled';

export const Tweets = ({ tweets }) => {
  return <Text> {tweets.toLocaleString('en-US')} tweets</Text>;
};
