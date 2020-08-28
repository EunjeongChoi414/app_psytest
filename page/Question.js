import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'

const Question = ({navigation,route}) => {

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
    // 복습겸 다시 써보는 해체 할당 방식의 변수 정의!

    useEffect(()=>{
        navigation.setOptions({
            title:'문제!!'
        })
    },[])
    
    const {title} = route.params;

    console.log("건네 받은 타이틀: "+ title)
    return (
     
        <View style={styles.container}>
            <Image source={{uri:questionState.image}} resizeMode="cover" style={styles.questionImage}/>
            <Text style={styles.questionTitle}>{questionState.title}</Text>
            <Text style={styles.question}>{questionState.question}</Text>
            <View style={styles.answerList}>
                <ScrollView>
                    {/* 문제에 딸린 답들을 나열 */}
                    {questionState.answer.map((a,i)=>{
                        //결과 화면에선 문제, 문제 이미지, 답, 해설 그리고 히스토리에 저장 할 문제 번호와 답안 번호를 goResult 함수에 넘겨줍니다.
                        return (
                        <TouchableOpacity 
                        key={i} 
                        style={styles.answerView} 
                        onPress={()=> navigation.navigate("Result",{
                            desc: a.answer_desc, 
                            image: questionState.image,
                            question: questionState.question,
                            answer: a.answer_title
                          })}>
                            <Text style={styles.answerText} >{Number(i + 1) + '.' + a.answer_title}</Text>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
            </View>
            
        </View>

    )
}

export default Question

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor:"#000"
    },
    questionImage: {
        height:100
    },
    questionTitle: {
        padding:20,
        color:'hotpink',
    },
    question: {
        padding:20,
        fontSize:18,
        color:'#fff',
    },
    answerList: {
        flex:1,
        padding:20
    },
    answerView: {
        borderRadius:10,
        borderStyle:'solid',
        borderColor:"#fff",
        borderWidth:1,
        padding:30,
        marginBottom:10
    },
    answerText: {
        color:"#fff"
    }
})