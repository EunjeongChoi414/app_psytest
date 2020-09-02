import React, {useState, useEffect} from "react";
import {View,Text,StyleSheet,Image, ScrollView} from "react-native"
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';
import Loading from './Loading';

const History = ({navigation}) => {

  const [state,setState] = useState({
    isLoading: true,
    history: []
  });
  const user_id = Constants.installationId;
    //navigation 속성에 들어 있는 함수중 addListener를 사용하여, 자바스크립트때 'focus'일 때,
//즉, 지금 보고 있는 페이지가 도달 할 때마다 어떠한 로직이 실행되게끔 코드를 구성할 수 있습니다. 
  useEffect(()=>{
    navigation.addListener('focus', () => {
      firebase_db.ref('/history/' + user_id).once('value').then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!")
        let history = snapshot.val(); 
        if(history) {
          setState({
            isLoading: false,
            history: Object.values(history)
          })
        }
      });
  });
},[])

    return state.isLoading? <Loading/> : (

        <ScrollView style={styles.Container}>
          {state.history.map((a,i)=>{
            return (
            <View key={i} style={styles.historyBox}>
              <Image source={{uri:a.image}} resizeMode="cover" style={styles.historyImage}/>
              <View style={styles.text}>
                <Text style={styles.question} ellipsizeMode='tail' numberOfLines={3} >{a.question}</Text>
                <Text style={styles.answers}>[내가 고른 답]</Text>
                <View>
                  <Text style={styles.answers}>{a.answer}</Text>
                  <Text style={styles.answers} ellipsizeMode='tail' numberOfLines={3}>{a.desc}</Text>
                </View>
              </View>
            </View>)
          })}
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