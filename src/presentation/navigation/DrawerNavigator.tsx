import 'react-native-gesture-handler';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath, useTheme, Icon } from '@ui-kitten/components';
import { MyIcon } from '../components/MyIcon';
import { StackNavigator } from './StackNavigator';
import { DummyScreen1 } from '../screens/DummyScreen1';
import { DummyScreen2 } from '../screens/DummyScreen2';
import { LogoutScreen } from '../screens/LogoutScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';

const { Navigator, Screen } = createDrawerNavigator();


const DrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation, state } = props;
  // console.log(props)
  const theme = useTheme();


  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}
      style={{ backgroundColor: theme['color-primary-200'] }}
      contentContainerStyle={{ backgroundColor: theme['color-primary-600'] }}
    >
      <DrawerItem title='' />
      <DrawerItem title='Dummy Screen 1' accessoryLeft={<MyIcon name='cart-sharp' size={25} />} />
      <DrawerItem title='Dummy Screen 2' accessoryLeft={<MyIcon name='storefront-sharp' size={25} />} />
      <DrawerItem title='Change Password' accessoryLeft={<MyIcon name='log-out-outline' size={25} />}  />
      <DrawerItem title='Logout' accessoryLeft={<MyIcon name='log-out-outline' size={25} />}  />
    </Drawer>
  )
}

export const DrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Screen name='StackNavigator' component={StackNavigator} />
      <Screen name='Dummy1' component={DummyScreen1} />
      <Screen name='Dummy2' component={DummyScreen2} />
      <Screen name='Password' component={ChangePasswordScreen} />
      <Screen name='Logout' component={LogoutScreen} />
    </Navigator>
  );
}