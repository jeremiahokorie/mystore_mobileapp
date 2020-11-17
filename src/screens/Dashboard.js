import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {View, StyleSheet, Button, Text ,StatusBar,SafeAreaView, FlatList, Image} from 'react-native';
import { Component } from 'react';
import BottomTap from '../components/bottomTap';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            datasource: []
        }
    }

    renderItem = ({ item }) => {
        return(
            <View style = {{flex:1,flexDirection:'row',marginBottom:3}}>
                <Image style ={styles.image}
                    
                source={{uri:item.image}}
            />

            <View style={{flex:1,justifyContent:'center',margin:5}}>
                <Text style = {styles.text}>
                    {item.book_title}
        
                </Text>
                <Text>
                {item.author}
            
            </Text>
            </View>
        
        </View>
        )
        
    }

    seperatorComponent = () => {
        return (
            <View style = {styles.seperator}>
            
            </View>
        )
    }

    componentDidMount = () => {
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                datasource:responseJson.book_array
            })
            })
            .catch((error) => {
            console.log(error)
        })
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#009387")
    }
    render()
    {
        return (
            
            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Image 
                        source={require('../../assets/logo_bk.png')}
                        style={styles.image}
                        />
                    <Text style={styles.text_header}>Welcome to Smartme!</Text>
                </View>

                <View style={styles.footer}>
                
                    <FlatList
                        data={this.state.datasource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.seperatorComponent}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}/>
        
                </View>
                <StatusBar barStyle="light-content" />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20

    },
    text_header: {
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff',
    },
    action: {
        flexDirection: 'row',
        marginTop: Platform.OS==='ios'? 0 :-12,
        paddingLeft: 10,
        fontSize:15,
        color:'#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop:50
    },
    signIn: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
        
    },
    textSign: {
        fontSize: 18,
        fontWeight:'bold'
    },
    text: {
        color: 'green',
        fontSize: 18,
        marginBottom:15
    },
    ScrollView: {
        backgroundColor: "#fff",
        marginHorizontal:20,
    },
    image: {
        width: 100,
        height: 100
    },
    seperator: {
        height: 1,
        width: '100%',
        backgroundColor:'black'
    }

})

