import React from "react";
import { connect } from 'react-redux'


import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";

const SelectShift = (props) => {
    return (
        <ScrollView>
            <View
                style={{
                    marginRight: 60,
                    marginLeft: 60,
                    marginTop: 10,
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    flexWrap: "wrap",
                    height: "100%",
                }}
            >
                {props.browsedCompany.shifts.map((shift) =>
                    (
                        <Button
                            onPress={() => {
                                props.navigation.navigate('Shift Calendar')
                            }}
                            key={shift}
                            title={shift}
                            containerStyle={{
                                width: "100%",
                                maxHeight: 80,
                                marginVertical: 10,
                            }}
                            buttonStyle={{ height: "100%", width: "100%", borderRadius: 10 }}
                            linearGradientProps={{
                                colors: ["#bc4e9c", "#f80759"],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                            }}
                            raised
                        />
                    )
                )}
            </View>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return { browsedCompany: state.shiftBrowser.browsedCompany };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         setCompany: companyName => dispatch(setCompany(companyName)),
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(SelectShift);
