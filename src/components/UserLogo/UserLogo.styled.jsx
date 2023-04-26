import styled from '@emotion/styled';

export const UserContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  /* border: 1px solid tomato; */
  width: 380px;
  height: 80px;
  direction: flex;
`;

export const Line = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 36px;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const LogoContainer = styled.div`
  position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 86px;
`;

export const UserImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 86px;
  background-color: #5736a3;
`;
