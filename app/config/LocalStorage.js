import { AsyncStorage } from 'react-native';
var localStorage = {
  getItem: function (key) {
    return AsyncStorage.getItem(key).then(function(value) {
      return JSON.parse(value);
    });
  },

  setItem: function (key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },

  removeItem: function (key) {
    return AsyncStorage.removeItem(key).then(function(value) {
      return JSON.parse(value);
    });
  },

  clear: function () {
    return AsyncStorage.clear()
  },

  getAllKeys: function () {
    return AsyncStorage.getAllKeys()
  },

  multiGet: function(keys) {
    return AsyncStorage.multiGet(keys)
  },


  multiSet: function(array) {
    return AsyncStorage.multiSet(array)
  },
};
global.localStorage = localStorage

