import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight, WebView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'
import {isEmpty} from 'lodash'
import {BASE_URL} from '../constants/Server';

const styles = SharedStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()
const cardIcons = {
  'default': require('../../assets/icon-visa-pay.png'),
}

const URI = BASE_URL

/* eslint-disable camelcase */

// This function is an iOS hack to fix WebView's onMessage callback
// https://github.com/facebook/react-native/issues/10865#issuecomment-269847703
const patchPostMessageFunction = () => {
  const originalPostMessage = window.postMessage;

  const patchedPostMessage = (message, targetOrigin, transfer) => {
    originalPostMessage(message, targetOrigin, transfer);
  };

  patchedPostMessage.toString = () => {
    return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
  };

  window.postMessage = patchedPostMessage;
};

const patchPostMessageJsCode = `(${String(patchPostMessageFunction)})();`


export default class PaymentTypes extends Component {
  static propTypes = {
    selectedPaymentDetails: PropTypes.object,
    selectPayment: PropTypes.func,
    access_token: PropTypes.string,
    refresh_token: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      currentScreen: isEmpty(props.selectedPaymentDetails) ? 'card' : 'show',
    }
  }

  changeScreen = (screen) => {
    this.setState({currentScreen: screen})
  }

  get currentDetails() {
    const {selectedPaymentDetails} = this.props

    /* eslint-disable-next-line complexity */
    if (isEmpty(selectedPaymentDetails)) {
      return null
    }

    const icon = cardIcons[selectedPaymentDetails.brand] ? cardIcons[selectedPaymentDetails.brand] : cardIcons.default

    return (
      <TouchableHighlight key={selectedPaymentDetails.id} onPress={() => this.changeScreen('card')}>
        <View style={checkoutStyles.rowContainerActive}>
          <View style={checkoutStyles.row}>
            <Image
              style={checkoutStyles.iconPayment}
              source={icon}
            />
            <View>
              <Text style={checkoutStyles.ticketHeader}>**** **** **** {selectedPaymentDetails.last4}</Text>
              <Text style={checkoutStyles.ticketSubHeader}>{selectedPaymentDetails.name} . {selectedPaymentDetails.exp_month}/{selectedPaymentDetails.exp_year}</Text>
            </View>
          </View>

          <Icon style={checkoutStyles.iconCheck} name="check-circle" />
        </View>
      </TouchableHighlight>
    )

  }

  parseMessage = (event) => {
    const {nativeEvent: {data}} = event
    const payment = JSON.parse(data)

    if (payment.error) {
      alert(`There was an error.\n\n${payment.error}`);
    } else {
      this.props.selectPayment(payment)
    }
  }


  get changeDetails() {
    const {access_token, refresh_token} = this.props

    return (
      <WebView
        injectedJavaScript={patchPostMessageJsCode}
        source={{uri: `${URI}/mobile_stripe_token_auth/${encodeURIComponent(access_token)}/${encodeURIComponent(refresh_token)}`}}
        onMessage={this.parseMessage}
      />
    )
  }

  get showScreen() {
    const {currentScreen} = this.state

    switch (currentScreen) {
    case 'show':
      return this.currentDetails
    default:
      return this.changeDetails
    }
  }

  render() {
    return (
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={styles.container}>
            <Text style={checkoutStyles.header}>Payment Details</Text>
          </View>

          {this.showScreen}
        </View>
      </View>
    )
  }
}
