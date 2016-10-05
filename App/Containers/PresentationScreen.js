import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const CELL_HEIGHT = 30
    let Inputs=[];
    for(var i=0;i<30;i++){
      const someTopPadding = 200
      const scrollTo = i * CELL_HEIGHT - someTopPadding
      Inputs.push(
        <TextInput
          key={i}
          style={{borderWidth:1,height: CELL_HEIGHT,backgroundColor:'white'}}
          value={'box' + i}
          onFocus={() => {
            this.refs.scrolly.scrollTo({y: scrollTo})
          }}
        />
      );
    }
    return (
      <View style={{flex:1}}>
        <KeyboardAvoidingView style={{flex:1}} behavior='padding'>
          <ScrollView ref='scrolly' style={{flex:1}}>
            {Inputs}
          </ScrollView>
        </KeyboardAvoidingView>
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
