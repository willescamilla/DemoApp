import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const ViewScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        padding: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(ViewScreen);