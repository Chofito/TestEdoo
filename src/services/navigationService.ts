import {
  NavigationActions,
  NavigationContainerComponent,
} from 'react-navigation';

const config: any = {};

export function setNavigator(nav: NavigationContainerComponent) {
  if (nav) {
    config.navigator = nav;
  }
}

export function navigate(routeName: string, params?: any) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({routeName, params});
    config.navigator.dispatch(action);
  }
}

export function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
