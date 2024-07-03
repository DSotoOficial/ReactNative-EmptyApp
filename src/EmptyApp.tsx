

import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { default as theme } from './config/theme.json';
// import { AuthProvider } from "./presentation/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DrawerNavigator } from "./presentation/navigation/DrawerNavigator";
import { StackNavigator } from "./presentation/navigation/StackNavigator";


const queryClient = new QueryClient();


export const EmptyApp = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = theme['color-basic-100'];

  return (
        <QueryClientProvider client={queryClient}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
                <NavigationContainer theme={{
                    dark: false,
                    colors: {
                        primary: theme['color-primary-500'],
                        background: backgroundColor,
                        card: theme['color-basic-100'],
                        text: theme['text-basic-color'],
                        border: theme['color-basic-800'],
                        notification: theme['color-primary-500'],
                    }
                }}
                >
                    {/* <AuthProvider> */}
                        <DrawerNavigator />
                        {/* <StackNavigator /> */}
                    {/* </AuthProvider> */}
                </NavigationContainer>
            </ApplicationProvider>
        </QueryClientProvider>
    )
}
