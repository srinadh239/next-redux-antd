import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import BasicLayout from '../layout/BasicLayout';

const MyApp = props => {
  const { Component, pageProps, store } = props
  return (
    <Provider store={store}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </Provider>
  )
}

export default withRedux(initStore)(MyApp)