import React from 'react';
import SelectCompany from './SelectCompany';
import { createStackNavigator } from '@react-navigation/stack';
import SelectShift from './SelectShift';
import Calendar from './Calendar';

const Stack = createStackNavigator();

export default function FindShiftScreen() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Select a Company" component={SelectCompany} />
                <Stack.Screen name="Select a Shift" options={{ headerBackTitle: "Back" }} component={SelectShift} />
                <Stack.Screen name="Shift Calendar" options={{ headerBackTitle: "Back" }} component={Calendar} />
            </Stack.Navigator>
    );
}