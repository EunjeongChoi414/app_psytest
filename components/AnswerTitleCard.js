import React, {useState} from "react";
import {View,Text,StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";

const AnswerTitleCard = ({title, order}) => {
    return (

        <TouchableOpacity style={styles.answer}>
            <View style={styles.answerTitle}>
                <Text style={styles.answerTitleText}>{order + '.' + title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AnswerTitleCard;


const styles = StyleSheet.create({
    answer: {
        width: 380,
        height: 100,
        margin: 10,
        borderColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center"
    },
    answerTitle: {
        marginLeft: 30
    },
    answerTitleText: {
        color: "#fff",
        fontSize: 15
    },

});
