import { StackNavigator } from 'react-navigation'
import AddModalScreen from '../Containers/AddModalScreen'
import StatisticsScreen from '../Containers/StatisticsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddModalScreen: { screen: AddModalScreen },
  StatisticsScreen: { screen: StatisticsScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
