import React, {useState} from "react";
import {View,Text,StyleSheet, Image, Dimensions,ScrollView} from "react-native";
import AnswerTitleCard from "../components/AnswerTitleCard"

export default function Question() {

//디테일 문제 페이지에서 문제를 관리할 상태 정의
const [questionState, setQuestionState] = useState({
    "idx": 0,
    "category": "무의식심리",
    "title": "소름돋게 정확한 심리테스트 1",
    "question": "가을을 맞이하여 책장 정리을 하였는데 책상 위에 필름이 하나 있습니다 그래서 필름을 뽑아 보았습니다.\n\n거기서 어떤 사진이 나올 것인가?",
    "image": "https://glenncy.s3.ap-northeast-2.amazonaws.com/st/problem/image/640/1581409010980.jpg",
    "image_origin": "banner.png",
    "view": 0,
    "status": 1,
    "option01": null,
    "option02": null,
    "createdAt": "2020-02-09T15:34:27.000Z",
    "updatedAt": "2020-02-09T15:34:27.000Z",
    "answer": [
        {
            "idx": 1,
            "question_idx": 0,
            "answer_order": 1,
            "answer_title": "어린이 사진",
            "answer_image": "",
            "answer_origin": "",
            "answer_desc": "눈물과 인정에 약함",
            "status": 1,
            "option01": null,
            "option02": null,
            "createdAt": "2020-02-09T15:34:27.000Z",
            "updatedAt": "2020-02-09T15:34:27.000Z"
        },
        {
            "idx": 2,
            "question_idx": 0,
            "answer_order": 2,
            "answer_title": "도시의 야경",
            "answer_image": "",
            "answer_origin": "",
            "answer_desc": "인간 관계가 중요하다고 생각, 술에 의존",
            "status": 1,
            "option01": null,
            "option02": null,
            "createdAt": "2020-02-09T15:34:27.000Z",
            "updatedAt": "2020-02-09T15:34:27.000Z"
        },
        {
            "idx": 3,
            "question_idx": 0,
            "answer_order": 3,
            "answer_title": "산 풍경",
            "answer_image": "",
            "answer_origin": "",
            "answer_desc": "약간의 짐만 있어도 아주 불안해함",
            "status": 1,
            "option01": null,
            "option02": null,
            "createdAt": "2020-02-09T15:34:27.000Z",
            "updatedAt": "2020-02-09T15:34:27.000Z"
        },
        {
            "idx": 4,
            "question_idx": 0,
            "answer_order": 4,
            "answer_title": "동물",
            "answer_image": "",
            "answer_origin": "",
            "answer_desc": "이성으로부터 많은 호응, 자신보다는 남을 생각할 줄 안다",
            "status": 1,
            "option01": null,
            "option02": null,
            "createdAt": "2020-02-09T15:34:27.000Z",
            "updatedAt": "2020-02-09T15:34:27.000Z"
        }
    ]
})

    return(
        <View style={styles.Container}>

            <Image style={styles.image} source={{uri: questionState.image}}/>
            <View style={styles.title}>
                <Text style={styles.titleText}>{questionState.title}</Text>
            </View>
            <View style={styles.question}>
                <Text style={styles.questionText}>{questionState.question}</Text>
            </View>
            <ScrollView>
                {questionState["answer"].map((data,i)=>{
                    return <AnswerTitleCard key={i} title={data.answer_title} order={data.answer_order}/>
                  })}
            </ScrollView>
           
        </View>

    )

}

const styles = StyleSheet.create({
    Container : {
      flex: 1,
      backgroundColor: '#000',
    },
    image : {
     width: Dimensions.get('window').width,
     height: 120,
    },
    title: {
        margin: 15
    },
    titleText: {
        color: "hotpink",
        fontSize: 15
    },
    question: {
        margin: 15
    },
    questionText: {
        color: "#fff",
        fontSize: 17
    },
   

   
});