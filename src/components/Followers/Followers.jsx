import { Text } from './Followers.styled';

export const Followers = ({ followers }) => {
  return <Text>{followers.toLocaleString('en-US')} Followers </Text>;
};
