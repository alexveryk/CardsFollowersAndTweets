import { BtnFollow } from './ButtonFollow.styled';

export const ButtonFollow = ({ onChange, isFollowing }) => {
  const buttonBackgroundColor = isFollowing && '#5cd3a8';

  return (
    <BtnFollow
      type="button"
      style={{ backgroundColor: buttonBackgroundColor }}
      onClick={onChange}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </BtnFollow>
  );
};
