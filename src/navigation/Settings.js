import React from 'react';
import { View, StyleSheet, Button ,Text} from 'react-native';


const Settings = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
    )
}

export default Settings;