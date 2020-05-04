import React from 'react';
import days from 'dayjs';

import {
  Item,
  ItemMission,
  ItemMissionName,
  ItemMissionNumber,
  ItemMissionDetails,
  ItemMissionRocket,
  ItemMissionDate,
} from './styles';

export default (props) => {
  const { mission_name: missionName, flight_number: missionNumber, launch_date_local } = props.item;
  const { rocket_name: missionRocket } = props.item.rocket;
  const missionDate = days(launch_date_local).format('d MMM YYYY');

  return (
    <Item>
      <ItemMission>
        <ItemMissionNumber>{`#${missionNumber}`}</ItemMissionNumber>
        <ItemMissionName>{missionName.split('(')[0]}</ItemMissionName>
      </ItemMission>
      <ItemMissionDetails>
        <ItemMissionDate>{missionDate}</ItemMissionDate>
        <ItemMissionRocket>{missionRocket}</ItemMissionRocket>
      </ItemMissionDetails>
    </Item>
  );
};