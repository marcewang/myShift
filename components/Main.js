import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarScreen from './CalendarScreen';
import FindShiftScreen from './FIndShiftScreen';
const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Calendar') {
                            iconName = 'calendar';
                        } else if (route.name === 'Shift Browser') {
                            iconName = 'progress-clock';
                        }
                        return (
                            <>
                                {focused &&
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            height: 2.5,
                                            marginBottom: 3,
                                        }}
                                    >
                                        <View style={{ backgroundColor: "#fc4a1a", flex: 0.3 }} />
                                    </View>
                                }
                                < Icon size={size} color={color} name={iconName} />
                            </>
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#fc4a1a',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Calendar" component={CalendarScreen} />
                <Tab.Screen name="Shift Browser" component={FindShiftScreen} />
            </Tab.Navigator >
        </NavigationContainer >
    );
}
