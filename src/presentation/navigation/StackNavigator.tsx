import { StackCardStyleInterpolator, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { DummyScreen1 } from '../screens/DummyScreen1';
// import { useAuthStore } from '../store/useAuthStore';

export type RootStackParams = {
    StackNavigator: undefined;
    // LoadingScreen: undefined;
    LoginScreen: undefined;
    DummyScreen1: undefined;
    DrawerNavigator: undefined;
}

const Stack = createStackNavigator<RootStackParams>();


const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
    return {
        cardStyle: {
            opacity: current.progress,
        }
    }
}


export const StackNavigator = () => {
    // const { status } = useAuthStore();
    return (
        <Stack.Navigator
            // initialRouteName={status === 'authenticated' ? 'DummyScreen1' : 'LoginScreen'  }
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: fadeAnimation
            }}
        >
            {/* <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoadingScreen" component={LoadingScreen} /> */}
            <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="DummyScreen1" component={DummyScreen1} />
        </Stack.Navigator>
    );
}