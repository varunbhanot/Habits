import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import HabitsHeader from '../Components/HabitsHeader.js'
import TitleNav from '../Components/TitleNav.js'
import TouchableNav from '../Components/TouchableNav.js'
import Images from '../Themes/Images'

import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StatisticsScreenStyle'

class StatisticsScreen extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onNavPress = this.onNavPress.bind(this);
  }

  onNavPress(navigation) {
    navigation.goBack()
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <HabitsHeader
          centerComponent={<TitleNav title={''} />}
          rightComponent={<TouchableNav text={'Done'} onPress={() => this.onNavPress(this.props.navigation)} />}
          leftComponent={<TitleNav title={this.props.navigation.state.params.name.name} />}
        />
        <KeyboardAvoidingView behavior='position'>
          <Text>StatisticsScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen)
