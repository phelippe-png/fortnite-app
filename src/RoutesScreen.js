import DescriptionItem from './DescriptionItem';
import { createAppContainer, createStackNavigator } from '@react-navigation/native';

const Routes = createAppContainer(
    createStackNavigator({
      ItemDescription: DescriptionItem
    })
);

export default Routes