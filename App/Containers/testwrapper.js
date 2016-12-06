import React, {PropTypes} from 'react'
import {Metrics, Colors, Images} from '../Themes'

import {View, TouchableOpacity, Dimensions, StyleSheet, Text, ListView, TextInput, Linking} from 'react-native';

import {connect} from 'react-redux'
import Test from './test'

class TestWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    if(this.props.level=1){
      return <View>
        <Test level={this.props.level} />
        </View>
    }
  }
}


TestWrapper.propTypes = {
  level: PropTypes.number
}


const mapStateToProps = (state) => {
  return {
    login:state.login
  }
}

export default connect(mapStateToProps, undefined)(TestWrapper)



