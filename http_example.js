import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Moment from 'moment';
import { Feather } from '@expo/vector-icons'; 

import AnimateNumber from 'react-native-animate-number'

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      setInterval(() => {
         fetch('http://api.thingspeak.com/channels/1183380/feeds/last.json', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson);
            this.setState({
               data: responseJson
            })
         })
         .catch((error) => {
            console.error(error);
         });
       }, 5000)
    
   }
   handleClick() {
      console.log('Click happened');
      fetch('http://api.thingspeak.com/channels/1183380/feeds/last.json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
    }
   render() {


      return (
        

         <View style={{alignContent:"center", alignItems:"center"}}>
              <TouchableHighlight
    
    onPress={() => this.handleClick()}>
                              <Feather name="refresh-ccw" size={24} color="black" style={{ padding: 10 }} />      
                              </TouchableHighlight>
            <AnimateNumber style={{ color: "#2C589D", fontSize: 90,fontFamily: 'Montserrat_500Medium'}} value={this.state.data.field1} countBy={1}
  timing={(interval, progress) => {
    // slow start, slow end
    return interval * (1 - Math.sin(Math.PI*progress) )*10
  }}/>

            <Text style={{ color: "#000", fontSize: 15,fontFamily: 'Montserrat_500Medium' }}>LAST UPDATE:  {Moment(this.state.data.created_at).format('DD MMM HH:mm')}  </Text>

         </View>
      )
   }
}
export default HttpExample