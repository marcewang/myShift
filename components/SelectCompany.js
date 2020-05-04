import React from "react";
import { setCompany } from '../redux/actions';
import { connect } from 'react-redux'
import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";
import companies from "../data/companies";


const SelectCompany = (props) => {
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
                {companies.map((company) => (
                    <Button
                        onPress={() => {
                            props.setCompany(company)
                            props.navigation.navigate('Select a Shift')
                        }}
                        key={company.key}
                        title={company.name}
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
                ))}
            </View>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

const mapDispatchToProps = dispatch => {
    return {
        setCompany: company => dispatch(setCompany(company)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCompany);
