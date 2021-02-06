import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList201905Navigator from '../features/ArticleList201905/navigator';
import ArticleList201904Navigator from '../features/ArticleList201904/navigator';
import ArticleList201903Navigator from '../features/ArticleList201903/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList201905: { screen: ArticleList201905Navigator },
ArticleList201904: { screen: ArticleList201904Navigator },
ArticleList201903: { screen: ArticleList201903Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
