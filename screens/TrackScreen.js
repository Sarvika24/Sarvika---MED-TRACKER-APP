import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Image,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';



export default class WelcomeScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
  }

    render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          
           <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'>
           <View style={styles.categoriesItemContainer}>
             <Image style={styles.categoriesPhoto} source={require("../assets/medicine.png") } />
             <Text style={styles.categoriesName}>SUGAR</Text>
             <Text style={styles.categoriesInfo}>ddfs</Text>
           </View>
         </TouchableHighlight>
          
     <View>
      
         
      </View>
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
   fontSize:35,
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
 categoriesItemContainer: {
  flex: 1,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  height: 215,
  borderColor: '#cccccc',
  borderWidth: 0.5,
  borderRadius: 20,
},
categoriesPhoto: {
  width: '100%',
  height: 155,
  borderRadius: 20,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  shadowColor: 'blue',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
  elevation: 3
},
categoriesName: {
  flex: 1,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#333333',
  marginTop: 8
},
categoriesInfo: {
  marginTop: 3,
  marginBottom: 5
}
})
