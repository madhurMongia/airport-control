import { StatusBar } from "expo-status-bar";
import React,{ useState } from "react";
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ImageBackground,
  Alert,
  Modal,
  Image,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import HttpExample from './http_example.js'
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppLoading } from 'expo';
import { useFonts, Montserrat_900Black,Montserrat_500Medium } from '@expo-google-fonts/montserrat';
/* function HomeScreen({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Terminal")}
    >
      <LinearGradient
        colors={["#78254D", "#361573"]}
        style={styles.container2}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={{ color: "white", bottom: 150 }}>TAP TO PROCEED </Text>

        <Image
          style={styles.image}
          source={require("./assets/airport-control.png")}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
} */
function TerminalScreen({ navigation }) {
  return (<SafeAreaView
    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  >
    <ImageBackground source={require('./assets/Map.png')}  style={{left:30,width: '90%',    justifyContent: "center"
, height: '100%'}} >
   <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        opacity:0.2,
        padding: 30,
        width:'67%',
        left:0,
      bottom:50}}
        onPress={() => navigation.navigate("Terminal_1")}
      >
          
      </TouchableOpacity>
      
       <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        padding: 30,
        width:'30%',
        left:70,
      bottom:35}}
      onPress={() => navigation.navigate("Jewel")}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        opacity:0.2,
        padding: 60,
        width:'20%',
        left:10,
      bottom:-70}}
        onPress={() => navigation.navigate("Terminal_3")}
      >
        
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        opacity:0.2,
        paddingTop:150,
        width:'20%',
        left:160,
      bottom:80}}
        onPress={() => navigation.navigate("Terminal_2")}
      >
      </TouchableOpacity><TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
        opacity:0.2,
        padding: 50,
        width:'20%',
        left:190,
      bottom:-120}}
        onPress={() => navigation.navigate("Terminal_4")}
      >
      </TouchableOpacity>
      
      </ImageBackground>
    </SafeAreaView>
   
  );
}
function DetailsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#2C589D", fontSize: 30,fontFamily: 'Montserrat_900Black' }}>TERMINAL 1</Text>
      <Text style={{ color: "#2C589D", fontSize: 30,fontFamily: 'Montserrat_900Black' }}>SHOPPING</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableHighlight
    
    onPress={() => {
      setModalVisible(!modalVisible);
    }}>
<AntDesign name="close" size={24} color="black" style={{alignSelf: 'flex-end', marginLeft:200, textAlign: 'right'}} />            
</TouchableHighlight>
            <Text style={styles.modalText}>APPLE</Text>
            <Text style={styles.modalText}>#01-05</Text>
            <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    paddingLeft:100,
    paddingTop:20,
    paddingRight:100,
    bottom:10
  }}
/>
                    <Text style={{ color: "#000", fontSize: 20,fontFamily: 'Montserrat_500Medium' }}>PEOPLE COUNTER</Text>
<HttpExample/>
                    <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    paddingLeft:100,
    paddingTop:20,
    paddingRight:100,
    bottom:10
  }}
/>                    
<Text style={{ color: "#000", fontSize: 18, padding:10,fontFamily: 'Montserrat_500Medium' }}>LEGEND</Text>
<Text style={{ color: "#000", fontSize: 15,fontFamily: 'Montserrat_500Medium' }}>{">"} 50 CROWDED</Text>
<Text style={{ color: "#000", fontSize: 15, padding:5,fontFamily: 'Montserrat_500Medium'}}>{">"} 30 SOME CROWDED</Text>
<Text style={{ color: "#000", fontSize: 15, padding:5, fontFamily: 'Montserrat_500Medium'}}>{">"} 20 NOT CROWDED</Text>


           
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
  <View style={styles.innerCircle3}>
            <Text
              style={styles.textstyle}
            >
A
           </Text>

          </View>
          <Text style={styles.companynam}>ADIDAS</Text>
          <TouchableOpacity 
      onPress={() => {
        setModalVisible(true);
      }}
    >
           <Text style={styles.companynam}  >APPLE</Text>
           </TouchableOpacity>
           <Text style={styles.companynam}  >ARMANI</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
           <Text
              style={styles.textstyle}
            >C</Text>

          </View>
           <Text style={styles.companynam}  >COS</Text>
           <Text style={styles.companynam}  >CHLOE</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
            <Text
              style={{
                alignSelf: "center",
                textDecorationLine: 'underline',
                flex:1,

                textAlign: "center",
                color: "white",
                top: 0,
                fontSize: 14,
              }}
            >F</Text>

          </View>
           <Text style={styles.companynam}  >FOOT LOCKER</Text>
           <Text style={styles.companynam}  >FIJI</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
           <Text
              style={styles.textstyle}
            >M</Text>

          </View>

           <Text style={styles.companynam}  >MUJI</Text>
           <Text style={styles.companynam}  >MAISON MARGIELA</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
           <Text
              style={styles.textstyle}
            >N</Text>

          </View>
           <Text style={styles.companynam}  >NIKE SHOES</Text>
           <Text style={styles.companynam}  >NATIVE SHOES</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
              <View style={styles.innerCircle3} >
              <Text
              style={styles.textstyle}
            >O</Text>

          </View>
           <Text style={styles.companynam}  >OAKLEY</Text>
           <Text style={styles.companynam}  >ONITSUKA</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
           <Text
              style={styles.textstyle}
            >P</Text>
          </View>
           <Text style={styles.companynam}  >PAC SAFE</Text>
           <Text style={styles.companynam}  >PUMA</Text>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    padding:10,
    bottom:10
  }}
/>
           <View style={styles.innerCircle3} >
           <Text
              style={styles.textstyle}
            >Z</Text>

          </View>
           <Text style={styles.companynam}  >ZARA</Text>
           <Text style={styles.companynam}  >ZEAL OPTICS</Text>

           </ScrollView>



    </SafeAreaView>
  );
}
function Terminal1Screen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#2C589D", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
      <Text style={{ color: "#2C589D", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 1</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_12")}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Departure Hall & Arrival Hall
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Transit Hall{" "}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function Terminal1Screen2({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#2C589D", fontFamily: 'Montserrat_900Black'}}>YOU’RE AT</Text>
      <Text style={{ color: "#2C589D", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 1</Text>

     
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Details")}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SHOPPING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
      
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 70,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
           DINING
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 70,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
              SERVICES
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}
function Terminal1Screen3({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#2C589D", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 1</Text>
      <Text style={{ color: "#2C589D", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>SHOPPING 1</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_12")}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 80,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Departure Hall & Arrival Hall
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_2")}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 80,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Transit Hall{" "}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function Terminal2Screen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#ED3933", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
      <Text style={{ color: "#ED3933", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 2</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_22")}
      >
        <LinearGradient
          colors={["#361573", "#ED3933"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 80,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Departure Hall & Arrival Hall
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#361573", "#ED3933"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 80,
                fontSize: 15,
                fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Transit Hall{" "}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function Terminal2Screen2({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
            <Text style={{ color: "#ED3933", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
      <Text style={{ color: "#ED3933", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 2</Text>


     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#361573", "#ED3933"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SHOPPING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#361573", "#ED3933"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            DINING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#361573", "#ED3933"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SERVICES
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function Terminal3Screen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#349F7F", fontFamily: 'Montserrat_900Black'}}>YOU’RE AT</Text>
      <Text style={{ color: "#349F7F", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 3</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_32")}
      >
        <LinearGradient
          colors={["#349F7F", "#361573"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Departure Hall & Arrival Hall
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#349F7F", "#361573"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Transit Hall{" "}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Terminal3Screen2({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
            <Text style={{ color: "#349F7F", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
    <Text style={{ color: "#349F7F", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 3</Text>


     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
        colors={["#349F7F", "#361573"]}
        style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SHOPPING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
        colors={["#349F7F", "#361573"]}
          style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            DINING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
        colors={["#349F7F", "#361573"]}
        style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SERVICES
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Terminal4Screen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#F88125", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
      <Text style={{ color: "#F88125", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 4</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Terminal_42")}
      >
        <LinearGradient
          colors={["#361573", "#F88125"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Departure Hall & Arrival Hall
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
          colors={["#361573", "#F88125"]}
          style={styles.outerCircle}
        >
          <View style={styles.innerCircle}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                color: "black",
                top: 80,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
              {" "}
              Transit Hall{" "}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function Terminal4Screen2({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
            <Text style={{ color: "#F88125", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
    <Text style={{ color: "#F88125", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>TERMINAL 4</Text>


     
      <TouchableOpacity
      
        style={styles.container}
      >
        <LinearGradient
colors={["#361573", "#F88125"]}
         style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SHOPPING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
colors={["#361573", "#F88125"]}
           style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            DINING 
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
colors={["#361573", "#F88125"]}
         style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SERVICES
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
function JewelScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
            <Text style={{ color: "#F59887", fontFamily: 'Montserrat_900Black' }}>YOU’RE AT</Text>
    <Text style={{ color: "#F59887", fontSize: 30, fontFamily: 'Montserrat_900Black' }}>JEWEL</Text>


     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
colors={["#F59887", "#361573"]}
         style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SHOPPING
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
colors={["#F59887", "#361573"]}
style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            DINING 
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.container}
      >
        <LinearGradient
colors={["#F59887", "#361573"]}
style={styles.outerCircle2}
        >
          <View style={styles.innerCircle2}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: "black",
                top: 70,
                fontSize: 15
                , fontFamily: 'Montserrat_900Black'
              }}
            >
            SERVICES
             </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const win = Dimensions.get("window");
const ratio = win.width / 2317; //541 is actual image width
const new_w = win.width / 10;

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_500Medium
  });

  if (!fontsLoaded) {

    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Terminal">
        <Stack.Screen name="Details" component={DetailsScreen} 
         options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
            <AntDesign name="home" size={24}  color="black" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{paddingLeft:20}}  onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}/>
        <Stack.Screen
          name="Terminal_1"
          component={Terminal1Screen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
        <Stack.Screen
          name="Terminal_2"
          component={Terminal2Screen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />
        <Stack.Screen
          name="Terminal_3"
          component={Terminal3Screen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),

            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />
        <Stack.Screen
          name="Terminal_4"
          component={Terminal4Screen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />
         <Stack.Screen
          name="Terminal_12"
          component={Terminal1Screen2}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{paddingLeft:20}}  onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />  
           <Stack.Screen
          name="Jewel"
          component={JewelScreen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />  
        <Stack.Screen
          name="Terminal"
          component={TerminalScreen}
          options={{headerShown: false}}           />    
           <Stack.Screen
          name="Terminal_22"
          component={Terminal2Screen2}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{paddingLeft:20}}  onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        />   
         <Stack.Screen
          name="Terminal_32"
          component={Terminal3Screen2}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{paddingLeft:20}}  onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        /> 
          <Stack.Screen
          name="Terminal_42"
          component={Terminal4Screen2}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight:20}}  onPress={() => navigation.navigate("Terminal")}>
              <AntDesign name="home" size={24}  color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{paddingLeft:20}}  onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}        /> 
      </Stack.Navigator>

    </NavigationContainer>  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    borderWidth: 1,
    alignSelf: 'stretch',    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    
    width: win.width-100,
    height: 1332 * ratio,
    resizeMode: "contain",
  },
  term_1: {
    width: 200,

    resizeMode: "contain",
  },
  term_3: {
    width: 200,

    resizeMode: "contain",
  },
  outerCircle: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: "blue",
  },
  innerCircle: {
    borderRadius: 100,
    width: 190,
    height: 190,
    margin: 5,
    backgroundColor: "white",
  },
  outerCircle2: {
    borderRadius: 80,
    width: 160,
    height: 160,
    backgroundColor: "blue",
  },

  innerCircle2: {
    borderRadius: 200,
    width: 150,
    height: 150,
    margin: 5,
    
    backgroundColor: "white",
  },
  innerCircle3: {
    borderRadius: 200,
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: "blue",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textstyle: {
    alignSelf: "center",
    textDecorationLine: 'underline',
    flex:1,

    textAlign: "center",
    color: "white",
    top: 0,
    fontSize: 14,
  },
  companynam:{
    color: "#000",
    fontSize: 15,
    padding: 10,
    fontFamily: 'Montserrat_500Medium'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:50,
    fontFamily: 'Montserrat_500Medium',
    textAlign: "center"
  },
  scrollView: {
  },
});
export default App;
