import React, {PropTypes} from 'react'
import {Metrics, Colors, Images} from '../Themes'

import {View, TouchableOpacity, Dimensions, StyleSheet, Text, ListView, TextInput, Linking} from 'react-native';

import {connect} from 'react-redux'
import Test2 from './test2'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  nest(){
    if(this.props.level==1){
      return <Test />
    }
  }

  render() {
    if(this.props.level=1){
      return <View>
        <Text>test  - {this.props.level} - {(this.props.login?'present':'not present')}</Text>
        {/*<Test level={2} />*/}
        {this.nest()}
        <Test2 level={this.props.level}/>
      </View>
    }
  }
}


Test.propTypes = {
  level: PropTypes.number
}


const mapStateToProps = (state) => {
  return {
    login:state.login
  }
}

export default connect(mapStateToProps, undefined)(Test)



