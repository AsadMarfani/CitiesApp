import React from 'react';

import AddCity from './components/AddCities/AddCity';
import Cities from './components/Cities/Cities';
import City from './components/Cities/City';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { colors } from './theme';

const CititesStack = createStackNavigator({
    Cities: Cities,
    City: City
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: '#fff'
        }
    }
);

const Tabs = createBottomTabNavigator({
    Cities: CititesStack,
    AddCity: AddCity
})

export default createAppContainer(Tabs);

