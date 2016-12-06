import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Test from './test'
import TestWrapper from './testwrapper'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let Inputs=[];
    for(var i=0;i<30;i++){
      Inputs.push(<TextInput key={i} style={{borderWidth:1,height: 30,backgroundColor:'white'}} value={'box' + i}></TextInput>);
    }
    return (
      <View style={{flex:1}}>
        <ScrollView style={{backgroundColor:'blue'}} />
      </View>
    )
  }
}

PresentationScreen.propTypes = {
  componentExamples: PropTypes.func,
  usageExamples: PropTypes.func,
  apiTesting: PropTypes.func,
  theme: PropTypes.func,
  deviceInfo: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentExamples: NavigationActions.componentExamples,
    usageExamples: NavigationActions.usageExamples,
    apiTesting: NavigationActions.apiTesting,
    theme: NavigationActions.theme,
    deviceInfo: NavigationActions.deviceInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
