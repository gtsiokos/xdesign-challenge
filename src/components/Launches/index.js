import React, {useState} from 'react';
import {useAsync} from 'react-use';

import useLaunch from '../../core/launch/useLaunch';
import LaunchItem from './item';
import {
  Container, 
  Photo, 
  List, 
  Controls,
  ControlSelect,
  ControlButton,
  Items,
} from './styles';

export default (props) => {
  const [{items, years}, {getItems}] = useLaunch();
  const [year, setYear] = useState(0);
  const [sortReverse, setSortReverse] = useState(false);
  const selectOptions = years.map(year => ({value:year, label:year}));

  useAsync(getItems);

  let itemsToDisplay = sortReverse ? [...items].reverse() : [...items];
  if(year){
    itemsToDisplay = itemsToDisplay.filter(({launch_year}) => parseInt(launch_year) === year);
  }

  return (
    <Container>
      <Photo>
        <picture>
          <source srcSet={'assets/img/launch-home@2x.png 2x'} />
          <source srcSet={'assets/img/launch-home@3x.png 3x'} />
          <img src={'assets/img/launch-home.png'} alt="" />
        </picture>
      </Photo>
      <List>
        <Controls>
          <ControlSelect>
            <select value={year} onChange={(ev) => setYear(parseInt(ev.target.value))}>
              <option key={0} value={0} hidden>Filter by Year</option>
              <option key={1} value={0}>All</option>
              {
                selectOptions.map(({value, label}) => <option key={value} value={value}>{label}</option>)
              }
            </select>
            <picture>
              <source srcSet={'assets/icon/select@2x.png 2x'} />
              <source srcSet={'assets/icon/select@3x.png 3x'} />
              <img src={'assets/icon/select.png'} alt="" />
            </picture>
          </ControlSelect>
          <ControlButton onClick={(ev) => setSortReverse(!sortReverse)}>
            <span>
              {`Sort ${sortReverse ? 'Ascending' : 'Descending'}`}
            </span>
            <picture>
              <source srcSet={'assets/icon/sort@2x.png 2x'} />
              <source srcSet={'assets/icon/sort@3x.png 3x'} />
              <img src={'assets/icon/sort.png'} alt="" />
            </picture>
          </ControlButton>
        </Controls>
        <Items>
        { itemsToDisplay.map((item, key) => <LaunchItem key={key} item={item} />) }
        </Items>
      </List>
    </Container>
  );
};