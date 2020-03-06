import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Note from '../screens/NoteScreen';
import Quick from '../screens/QuickScreen';
import Setting from '../screens/SettingScreen';

const Tab = createMaterialTopTabNavigator();

function Navigator(){
    return(
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName = "Note"
            tabBarPosition = "bottom"
        >
            <Tab.Screen
                name = "Note"
                component = {Note}
                options = {{
                    tabBarLabel : "Note"
                }}
            />
            <Tab.Screen
                name = "Quick"
                component = {Quick}
                options = {{
                    tabBarLabel : "Quick"
                }}
            />
            <Tab.Screen
                name = "Setting"
                component = {Setting}
                options = {{
                    tabBarLabel : "Setting"
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;