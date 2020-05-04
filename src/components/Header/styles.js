import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  height: 13vh;
  padding: 0 0 0 33px;
`;

export const HeaderLogo = styled.div`
  font-size: 20px;
  overflow-y: hidden;

  img {
    height: 22px;
  }

  span {
    position: relative;
    left: -15px;
  }
`;

export const HeaderButtonReload = styled.button`
  position: relative;
  font-weight: bold;
  font-size: 16px;
  outline: 0;
  border: 0;
  color: #fff;
  padding: 10px 40px 10px 16px;
  background: ${props => props.theme.primaryBlue};
  border-radius: 21.5px 0 0 21.5px;

  &:hover {
    cursor: pointer;
  }

  & picture {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }

  & picture img {
    display: block;
  }
`;