import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.contents}>
        <View style={styles.subContent}>
          <View style = {styles.userInfo}>
            <View style = {styles.profile}></View>
            <Text style = {styles.name}>스파르타코딩 클럽</Text>
          </View>
          <View style={styles.userComment}>
            <Text>안녕하세요 대표 이범규입니다</Text>
          </View>
        </View>

        <View style={styles.subContent}>
          <View style = {styles.userInfo}>
            <View style = {styles.profile}></View>
            <Text style = {styles.name}>김건희</Text>
          </View>
          <View style={styles.userComment}>
            <Text>좀만 참아보세요 오늘 강의 거의 다왔습니다</Text>
          </View>f
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    height: 60,
    backgroundColor:"green"
  },
  contents:{
    flex:1,
  },
  subContent: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#eee",
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white",
    alignItems: "center"
  },
  userInfo : {
    flexDirection: "row", 
    alignItems: "center"
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "flex-start"
  },
  name : {
    margin: 10,
  },
  userComment: {
    backgroundColor: "yellow",
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 10
  },
  footer:{
    height: 60,
    backgroundColor: "red"
  }
});