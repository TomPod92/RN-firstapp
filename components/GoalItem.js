import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.handleDeleteGoal(props.goal.id)}>
            <View style={styles.listItem}>
                <Text>{props.goal.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
 
export default GoalItem;