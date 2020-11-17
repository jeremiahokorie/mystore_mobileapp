import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StyleSheet,TextInput, Button,Platform, Dimensions,Image,TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
            <Image 
                source={require('../../assets/logo_bk.png')}
                style={styles.logo}
            />
                <Text style ={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.action}>Email</Text>
                <View style={styles.action}>
                    
                <TextInput
                    placeholder="Your Email"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    />
                </View>
                <Text style={[styles.action,{marginTop:25} ]}>Password</Text>
                <View style={styles.action}>
                
                <TextInput
                        placeholder="Your Password"
                        secureTextEntry={true}
                    style={styles.TextInput}
                    autoCapitalize="none"
                    />
                </View>

                <View style={styles.button}>
                    
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Dashboard')}
                        colors={['#08d4c4', '#01ab9d']}
                        style={[styles.signIn, {
                            backgroundColor:'#08d4c4'
                        }]}
                        
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop:15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color:"#009387"
                        }]}>Sign Up</Text>
                        </TouchableOpacity>
            
                </View>

            </Animatable.View>

           

            
        </View>
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
        fontSize: 30,
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
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
        
    },
    textSign: {
        fontSize: 18,
        fontWeight:'bold'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
})

export default SignInScreen;