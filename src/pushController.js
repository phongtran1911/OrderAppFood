import React, {Component} from 'react';
import PushNotification from 'react-native-push-notification';
// var PushNotification = require("react-native-push-notification");
import saveTokenDevice from './components/api/saveTokenDevice';
import getTokenDevice from './components/api/getTokenDevice';
import global from './global';
export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: async function(token) {
        console.log('Token:', token.token);
        const tokenDevice = await getTokenDevice();
        if (tokenDevice !== '' && tokenDevice !== null) {
          global.setTokenDevice(tokenDevice);
        } else {
          saveTokenDevice(token.token);
          global.setTokenDevice(token.token);
        }
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification here

        // required on iOS only
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only
      senderID: '830624828643',
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
    });
  }

  render() {
    return null;
  }
}
