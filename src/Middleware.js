'use strict'

import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'
import { NetInfo, AsyncStorage } from 'react-native'
import axios from 'axios'
import MQTT from 'sp-react-native-mqtt'

const baseURL = 'http://192.168.43.7:3333/api'

const client = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

function* apiRequest(action) {
  try {
    const isConnected = yield NetInfo.isConnected.fetch()
    if (!isConnected) {
      return yield put(NavigationActions.navigate({ routeName: 'Offline' }))
    }

    yield put({
      type: 'PAGE_LOADING',
      payload: true,
    })

    const response = yield client.request({
      method: action.payload.request.method,
      url: action.payload.request.url,
      data: action.payload.request.data,
    })

    yield put({
      type: 'PAGE_LOADING',
      payload: false,
    })

    yield put({
      type: action.payload.type + '_SUCCESS',
      payload: response.data,
    })
  } catch (error) {
    yield put({
      type: 'PAGE_LOADING',
      payload: false,
    })
    yield put({
      type: action.payload.type + '_FAIL',
      payload: error,
    })
  }
}

function* Middleware() {
  yield takeLatest('API_REQUEST', apiRequest)
}

export default Middleware
