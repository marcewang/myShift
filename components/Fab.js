import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Fab, Text } from 'native-base';

export default function FabComponent(props) {
    const [active, setActive] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            {props.baseElement}
            <Fab
                active={active}
                direction="up"
                position="bottomRight"
                containerStyle={{ flexDirection: "row-reverse" }}
                style={{ backgroundColor: '#fc4a1a' }}
                onPress={() => setActive(!active)}
            >
                <Icon name="plus" />
                <Button
                    onPress={() => {
                        props.navigation.navigate('Select a Company')
                    }}
                    style={{
                        width: 67,
                        justifyContent: 'center',
                        backgroundColor: '#f7b733',
                    }}
                >
                    <Text>Shift</Text>
                </Button>
                <Button
                    style={{
                        width: 100,
                        justifyContent: 'center',
                        backgroundColor: '#f7b733',
                    }}
                >
                    <Text>Holidays</Text>
                </Button>
            </Fab>
        </View>
    );
}