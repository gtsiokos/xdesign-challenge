import api from '../services/spacex';

export default {
  getItems: () => async ({setState, getState}) => {
    const {launch} = getState();
    const {items:previousItems} = launch;

    setState({
      launch: {...launch, items:[]}
    });

    try {
      const response = await api.get('/launches');
      const {data:items} = response;
      const years = [...new Set(items.map(item => parseInt(item.launch_year, 10)))];

      setState({
        launch: {...launch, items, years}
      });

      return items;
    } catch(err) {
      setState({
        launch: {...launch, items:previousItems}
      });
      
      return previousItems;
    }
  },
}