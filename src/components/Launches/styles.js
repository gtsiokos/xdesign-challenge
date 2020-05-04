import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  display: flex;
  min-width: 180px;
  width: 40vw;
  height: 87vh;
  padding-top: 33px;
  overflow-y: hidden;
  justify-content: center;

  picture {
    width: 80%;
  }

  picture img {
    width: 100%;
    height: auto;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 87vh;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 33px;
  margin-bottom: 8px;
  line-height: 1;
`;

export const ControlSelect = styled.div`
  position: relative;
  align-items: center;
  margin-right: 9px;

  & select {
    appearance: none;
    width: 100%;
    height: 100%;
    padding: 10px 40px 10px 16px;
    font-weight: 700;
    font-size: 16px;
    font-family: ${props => props.theme.fontFamily};
    background: ${props => props.theme.primaryBlue};
    color: #fff;
    border: 0;
    outline: 0;
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

export const ControlButton = styled.button`
  position: relative;
  margin-right: 9px;
  padding: 10px 40px 10px 16px;
  font-weight: 700;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.primaryBlue};
  color: #fff;
  border: 0;

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

export const Items = styled.div`
  padding-right: 25px;
  overflow-y: scroll;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-width: 440px;
  width: 100%;
  margin-bottom: 8px;
  padding: 12px 16px 12px 32px;
  background: #fff;
  line-height: 1.1;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.fontColor};
  border: solid 1px rgba(0,0,0,0.25);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.25);
`;

export const ItemMission = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemMissionNumber = styled.div`
  min-width: 100px;
  font-size: min(5vw, 40px);
  font-weight: 500;
`;

export const ItemMissionName = styled.div`
  font-size: min(4vw, 32px);
  font-weight: 500;
  text-align: left;
`;

export const ItemMissionDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 130px;
  text-align: right;
`;

export const ItemMissionDate = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ItemMissionRocket = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
