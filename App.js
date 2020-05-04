
import React from 'react';
import Main from "./components/Main";
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC0TkiZ2xRAruY4GIgDvIpThuuLE9Q9h5o",
  authDomain: "myshift-01.firebaseapp.com",
  databaseURL: "https://myshift-01.firebaseio.com",
  projectId: "myshift-01",
  storageBucket: "myshift-01.appspot.com",
  messagingSenderId: "822943303113",
  appId: "1:822943303113:web:40ac5e76904194dff6d418",
  measurementId: "G-7BXQ800JFY"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <>
      {!this.state.loading &&
        (
          <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <Main />
          </Provider>
        )
      }

    </>
    );
  }
};
