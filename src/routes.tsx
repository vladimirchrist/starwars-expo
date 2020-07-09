import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import FilmScreen from './pages/Film';
import { Film } from './models/film';

export type AppStackParamList = {
    Home: undefined;
    FilmScreen:{ film: Film } ;
};

const StackApp = createStackNavigator<AppStackParamList>();

const Routes = () => (
    <NavigationContainer>
        <StackApp.Navigator screenOptions={{ headerShown: false }}>
            <StackApp.Screen
                name="Home"
                component={Home}
            />
            <StackApp.Screen
                name="FilmScreen"
                component={FilmScreen}
            />
        </StackApp.Navigator>
    </NavigationContainer>
);

export default Routes;