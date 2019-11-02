import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createSwitchNavigator } from 'react-navigation';

import { createAppContainer } from 'react-navigation';

//CREATING NAVIGATORS FOR THE POST AUTHENTICATION ROUTES
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//IMPORTING AUTHENTICATION VIEWS
import LoadingView from './views/LoadingView';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';

//IMPORTING TAB VIEWS
import FastFoodTab from './tabs/FastFoodTab';
import AutoCompleteTab from './tabs/AutoCompleteTab';
import FavoritesTab from './tabs/FavoritesTab';

//IMPORTING STACKS//
/*
- Fast Food Stack Includes -
MealTypeView
TimeView
FetchView - beta
ResultsView

- AutoComplete Stack Includes -
MealTypeView
IngredientsView
NarrowSearchView
FetchView - beta
ResultsView

- Favorites Stack Includes -
FetchView
FavesView

*/

import MealTypeView from './stacks/MealTypeView';
import ResultsView from './stacks/ResultsView';
import TimeView from './stacks/TimeView';
import FetchView from './stacks/FetchView';
import FavesView from './stacks/FavesView';
import IngredientsView from './stacks/IngredientsView';
import NarrowSearchView from './stacks/NarrowSearchView';





import {firebaseConfig} from './config';
import * as firebase from 'firebase';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';


firebase.initializeApp(firebaseConfig);

const FastFoodStack = createStackNavigator({
  MealTypeView: {
    screen: MealTypeView,
    navigationOptions: {
      headerTitle: 'Select Meal',
    }
  },
  TimeView: {
    screen: TimeView,
    navigationOptions: {
      headerTitle: 'How Fast?',
    }
  },
  ResultsView: {
    screen: ResultsView,
    navigationOptions: {
      headerTitle: 'Results',
    }
  }
});

const AutoCompleteStack = createStackNavigator({
  MealTypeView: {
    screen: MealTypeView,
    navigationOptions: {
      headerTitle: 'Select Meal',
    }
  },
  IngredientsView: {
    screen: IngredientsView,
    navigationOptions: {
      headerTitle: 'Start with some ingredents',
    }
  },
  NarrowSearchView: {
    screen: NarrowSearchView,
    navigationOptions: {
      headerTitle: 'Enhance',
    }
  },
  ResultsView: {
    screen: ResultsView,
    navigationOptions: {
      headerTitle: 'Results',
    }
  }

});

const FavesStack = createStackNavigator({
  FetchView: {
    screen: FetchView,
    navigationOptions: {
      headerTitle: 'Select Meal',
    }
  },
  FavesView: {
    screen: FavesView,
    navigationOptions: {
      headerTitle: 'Results',
    }
  }
});

const MainTabs = createBottomTabNavigator({
  FastFood: {
    screen: FastFoodStack,
    navigationOptions: {
      tabBarLabel: 'Fast Food'
    }
  },
  AutoCompleteTab: {
    screen: AutoCompleteStack,
    navigationOptions: {
      tabBarLabel: 'Auto Complete'
    }
  },
  FavoritesTab: {
    screen: ResultsView,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    }
  }
});



const AppSwitchNavigator = createSwitchNavigator({
  LoadingView: LoadingView,
  LoginView: LoginView,
  DashboardView: {
    screen: MainTabs
  },
  });

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
