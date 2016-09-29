import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View,TextInput,TouchableOpacity } from 'react-native'
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
      inputs:['test\n','test\n','test\n','test\n','test\n','test\n','test\n','test\n','test\n']
    }
  }

  render () {
    let Inputs=[];
    this.state.inputs.forEach(input => {
      Inputs.push(input);
    })
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <TouchableOpacity onPress={() =>this.setState({inputs:['test']})} style={{backgroundColor:'green'}}>
            <Text>Click This</Text>
          </TouchableOpacity>
          <TextInput
            multiline={true}
            onChange={(event) => {
              console.log('on change fired')
            }}
            onContentSizeChange={(event) => {
              console.log('on content size change fired')
                this.setState({height:event.nativeEvent.contentSize.height})
            }}
            onChangeText={(text) => {
          console.log('on change text fired')
            }}
            style={{borderWidth:1,height: this.state.height || 30,backgroundColor:'white'}}>{Inputs}</TextInput>


        </ScrollView>
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
