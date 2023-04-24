import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const HeaderCard = styled.div`
  width: 380px;
  height: 230px;
  border-radius: 20px 20px 0 0;
`;

export const FooterCard = styled.div`
  width: 380px;
  height: 230px;
  border-radius: 0 0 20px 20px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const ImgBg = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
`;
