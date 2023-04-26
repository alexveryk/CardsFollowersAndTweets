import { BtnLoadMore } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ onChange }) => {
  return (
    <BtnLoadMore type="button" onClick={onChange}>
      Load More
    </BtnLoadMore>
  );
};
