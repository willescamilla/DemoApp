import React from 'react';
import {connect} from 'react-redux';
import {View, TextInput, StyleSheet} from 'react-native';

const InputScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TextInput 
                style={styles.input}
                onChangeText={props.setText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        padding: 10,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '60%'
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        setText: (text) => dispatch({ type: 'SET_TEXT', payload: text })
    }
}

export default connect(null, mapDispatchToProps)(InputScreen);