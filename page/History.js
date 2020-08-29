import React, {useState, useEffect} from "react";
import {View,Text,StyleSheet,Image, ScrollView} from "react-native"

const History = ({navigation}) => {

  const [history,setHistory] = useState({
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
  });
    //navigation 속성에 들어 있는 함수중 addListener를 사용하여, 자바스크립트때 'focus'일 때,
//즉, 지금 보고 있는 페이지가 도달 할 때마다 어떠한 로직이 실행되게끔 코드를 구성할 수 있습니다. 
useEffect(()=>{
    navigation.addListener('focus', () => {
       console.log("탭을 누를때마다 실행 시킬 로직을 여기에 작성!")  
  });
},[])

    return (
        <ScrollView style={styles.Container}>
          <View style={styles.historyBox}>
            <Image source={{uri:history.image}} resizeMode="cover" style={styles.historyImage}/>
            <View style={styles.text}>
              <Text style={styles.question} numberOfLines={3} ellipsizeMode={'tail'}>{history.question}</Text>
              <Text style={styles.answers}>[내가 고른 답]</Text>
              <View>
                <Text style={styles.answers}>{history.answer[0].answer_title}</Text>
                <Text style={styles.answers}>{history.answer[0].answer_desc}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )
}
export default History
const styles = StyleSheet.create({
    //준비화면 스타일
    Container: {
      flex: 1,
      backgroundColor: '#000',
    },
    historyBox: {
      flex: 1,
      borderColor: "#fff",
      borderRadius: 10,
      borderStyle: "solid",
      borderWidth: 1,
      backgroundColor: "#000",
      flexDirection: "row"
    },
    historyImage: {
      borderRadius: 10,
      flex: 1
    },
    text: {
      flex: 4,
      padding: 20
    },
    question: {
      color: "hotpink",
      fontSize: 15
    },
    answers: {
      color: "#fff",
      fontSize: 15
    }
  });