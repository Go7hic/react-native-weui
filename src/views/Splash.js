import React from 'react-native';
const {
  Dimensions,
  Image,
  Navigator,
  NavigatorIOS,
  Platform,
  InteractionManager
} = React;

import HomeContainer from '../containers/HomeContainer';
// import LoginContainer from '../containers/LoginContainer';
// import RegisterContainer from '../containers/RegisterContainer';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {navigator} = this.props;
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: HomeContainer,
          name: 'Home',
        });
      });
    }, 1500);
  }

  render() {
    return (
      <Image
        style={{ flex: 1, width: width, height: height }}
        source={require('../resources/images/splash.png') }
        />
    );
  }
}

export default Splash;
