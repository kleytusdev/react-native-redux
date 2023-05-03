import { StyleSheet, View } from 'react-native'
import React from 'react'
import InfoList from './../../components/InfoList'

const Home = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <InfoList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})