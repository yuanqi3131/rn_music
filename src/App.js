
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Mine from './views/mine';
import Discover from './views/discover';
import Account from './views/account';
import Video from './views/video';

const TabNavigator = createBottomTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={'md-compass'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Video: {
    screen: Video,
    navigationOptions: {
      tabBarLabel: '视频',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="ios-videocam" size={30} style={{ color: tintColor }} />
      )
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="ios-musical-notes" size={30} style={{ color: tintColor }} />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: '账户',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="ios-person" size={30} style={{ color: tintColor }} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);