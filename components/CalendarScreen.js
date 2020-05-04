import React from 'react';
import Calendar from './Calendar';
import { createStackNavigator } from '@react-navigation/stack';
import SelectShift from './SelectShift';
import SelectCompany from './SelectCompany';

const Stack = createStackNavigator();


export default function CalendarScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Calendar" component={Calendar} />
            <Stack.Screen name="Select a Company" options={{ headerBackTitle: "Back" }} component={SelectCompany} />
            <Stack.Screen name="Select a Shift" options={{ headerBackTitle: "Back" }} component={SelectShift} />
        </Stack.Navigator>
    );
}