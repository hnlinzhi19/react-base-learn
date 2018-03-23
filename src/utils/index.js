import {
  PixelRatio,
  Dimensions,
  Platform,
  NativeModules,
} from 'react-native';

// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 640
const uiWidthPx = 750;

// function pxToDp(uiElementPx) {
// return uiElementPx *  deviceWidthDp / uiWidthPx;
// }

export const pxToDp = (uiElementPx) => {
  return uiElementPx * deviceWidthDp / uiWidthPx;
};

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
      (screenH === X_WIDTH && screenW === X_HEIGHT))
  )
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */

export function ifIphoneX() {
  if (isIphoneX()) {
    return 44;
  } else if (Platform.OS === 'ios') {
    return 20;
  } else {
    return StatusBarManager.HEIGHT;
  }
}