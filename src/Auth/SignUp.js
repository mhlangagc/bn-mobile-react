import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Button, Image, ScrollView, TouchableHighlight} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'
import LoginStyles from '../styles/login/loginStyles'

const styles = SharedStyles.createStyles()
const loginStyles = LoginStyles.createStyles()

export default class LogIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ScrollView>
        <View style={loginStyles.signupBkgdContainer}>
          <Image
            style={loginStyles.signupBkgd}
            source={require('../../assets/login-bkgd.png')}
          />
          <View style={loginStyles.container}>
            <Image
              style={loginStyles.logo}
              source={require('../../assets/big-neon-logo.png')}
            />
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
              <Text>+ TAP TO ADD A COVER PHOTO</Text>
            </TouchableHighlight>
            <Text>Sign Up</Text>
            <Button title="I have an account already" onPress={() => this.props.navigation.navigate('LogIn')} />
          </View>
        </View>
      </ScrollView>
    )
  }
}
