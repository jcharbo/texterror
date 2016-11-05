import React, {PropTypes} from 'react'
import {Metrics, Colors, Images} from '../Themes'

import {View, TouchableOpacity, Dimensions, StyleSheet, Text, ListView, TextInput, Linking} from 'react-native';

import {connect} from 'react-redux'


class Test2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  nest(){
    if(this.props.level==1){
      return <Test2 />
    }
  }

  render() {
    if(this.props.level=1){
      return <View>
        <Text>test2 - {this.props.level} - {(this.props.login?'present':'not present')}</Text>
        {/*<Test level={2} />*/}
        {this.nest()}
      </View>
    }
  }
}


Test2.propTypes = {
  level: PropTypes.number
}


const mapStateToProps = (state) => {
  return {
    login:state.login
  }
}

export default connect(mapStateToProps, undefined)(Test2)



