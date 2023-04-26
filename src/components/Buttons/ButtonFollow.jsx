import { BtnFollow } from './ButtonFollow.styled';

export const ButtonFollow = ({ onChange, isFollowing }) => {
  const buttonBackgroundColor = isFollowing && '#ebd8ff';

  return (
    <BtnFollow
      type="button"
      style={{ backgroundColor: buttonBackgroundColor }}
      onClick={onChange}
    >
      {isFollowing ? 'Follow' : 'Following'}
    </BtnFollow>
  );
};
