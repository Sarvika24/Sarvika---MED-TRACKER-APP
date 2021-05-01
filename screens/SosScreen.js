import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView} from 'react-native';

import * as SMS from 'expo-sms'
import db from '../config';
import firebase from 'firebase';



export default class SosScreen extends Component{
  constructor(){
    super();
    this.state={
     userId : firebase.auth().currentUser.email,
     drnumber : 0
    }
  }

  componentDidMount(){
      db.collection("users").where("email_id","==", this.state.userId).get()
  .then((snapshot)=>{
 snapshot.forEach((doc) => {
  this.setState({
  "drnumber" : doc.data().Dr_Number
  })
})
  })
}
sendSms = async ()=>{
    
    const { result } = await SMS.sendSMSAsync(
    [this.state.drnumber],
    "PLEASE SEND EMERGENCY HELP I AM COLLAPSING",
    {
     
    }
  );}
  render(){

    return(
        <View style = {styles.container}>

        <TouchableOpacity style = {styles.button}
        onPress = {()=>{

            this.sendSms()


        }}
        >

            <Image source = {require("../assets/sos2.jpeg")} 
            style = {styles.imageStyle}/>
          
        </TouchableOpacity>
           
        </View>
    ) 
  }}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#89dee2',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   marginLeft : 30 ,
   color : '#1d75bc'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#bcf2ff",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 } , 

 imageStyle : {
width : 200 ,
height : 200
 }
})