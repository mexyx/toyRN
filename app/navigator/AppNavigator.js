import React from 'react'
import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FavoritePage from '@app/pages/FavoritePage'
import PersonalCenterPage from '@app/pages/PersonalCenterPage'
import PopularPage from '@app/pages/PopularPage'
import TrendingPage from '@app/pages/TrendingPage'

const BottomTabNavigator = createBottomTabNavigator({
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon ({ tintColor }) {
                return <MaterialIcons
                    name="whatshot"
                    size={26}
                    style={{ color: tintColor }}
                />
            }
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon ({ tintColor }) {
                return <Ionicons
                    name="md-trending-up"
                    size={26}
                    style={{ color: tintColor }}
                />
            }
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon ({ tintColor }) {
                return <MaterialIcons
                    name="favorite"
                    size={26}
                    style={{ color: tintColor }}
                />
            }
        }
    },
    PersonalCenterPage: {
        screen: PersonalCenterPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon ({ tintColor }) {
                return <Entypo name="user" size={26} style={{ color: tintColor}} />
            }
        },
    },
}, {
    navigationOptions: {
        headerShown: false
    }
})

const RootNavigator = createSwitchNavigator({
    Main: BottomTabNavigator,
})

export default createAppContainer(RootNavigator)