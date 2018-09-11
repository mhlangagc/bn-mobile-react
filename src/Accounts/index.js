import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {ScrollView, Modal, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()


const QRCode = ({_qrCode, toggleModal, modalVisible}) => (
  <Modal
    onRequestClose={() => {
      toggleModal(!modalVisible)
    }}
    visible={modalVisible}
  >
    <View>
      <View>
        <Image source={require('../../assets/qr-code-placeholder.png')} />
      </View>
      <Button
        name="close"
        onPress={() => {
          toggleModal(!modalVisible)
        }}
        title="Got It"
      />
    </View>
  </Modal>
)

QRCode.propTypes = {
  _qrCode: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
}


export default class Account extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    showQRModal: false,
  }

  toggleQRModal = (visible) => {
    this.setState({showQRModal: visible})
  }

  render() {
    const {navigation: {navigate}} = this.props
    const {showQRModal} = this.state

    return (
      <ScrollView>
        <QRCode _qrCode="" toggleModal={this.toggleQRModal} modalVisible={showQRModal} />
        <View style={accountStyles.accountBkgdContainer}>
          <Image
            style={accountStyles.accountBkgd}
            source={require('../../assets/account-placeholder-bkgd.png')}
          />
          <View style={accountStyles.accountPhotoContainer}>
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)">
              <Text style={accountStyles.accountPhotoText}>+ TAP TO ADD A COVER PHOTO</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.container}>
          <View style={accountStyles.avatarPlaceholderContainer}>
            <Icon style={accountStyles.avatarIcon} name="person-add" />
          </View>

          <View style={accountStyles.accountHeaderContainer}>
            <View>
              <Text style={accountStyles.accountEmailHeader}>Kook McDropin</Text>
              <View style={accountStyles.emailWrapper}>
                <Icon style={accountStyles.emailIcon} name="mail" />
                <Text style={accountStyles.accountEmail}>KOOKMCDROPZ@GMAIL.COM</Text>
              </View>
            </View>
            <TouchableHighlight onPress={() => this.toggleQRModal(true)}>
              <Image
                style={accountStyles.qrCodeSmall}
                source={require('../../assets/qr-code-small.png')}
              />
            </TouchableHighlight>
          </View>
        </View>

        <View style={accountStyles.containerDark}>

          <Text style={accountStyles.sectionHeader}>Account Details</Text>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Icon style={accountStyles.accountIcon} name="account-circle" />
                <Text style={accountStyles.accountHeader}>Account</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>


          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('Notifications')}>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Icon style={accountStyles.accountIcon} name="notifications" />
                <Text style={accountStyles.accountHeader}>Notification Preferences</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('Billing')}>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Icon style={accountStyles.accountIcon} name="credit-card" />
                <Text style={accountStyles.accountHeader}>Billing Information</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('OrderHistory')}>
            <View style={accountStyles.rowContainer}>
              <View style={accountStyles.row}>
                <Icon style={accountStyles.accountIcon} name="assignment" />
                <Text style={accountStyles.accountHeader}>Order History</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

        </View>
      </ScrollView>
    )
  }
}
