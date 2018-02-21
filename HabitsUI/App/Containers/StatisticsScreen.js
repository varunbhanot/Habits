import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View,Dimensions } from 'react-native'
import HabitsHeader from '../Components/HabitsHeader.js'
import TitleNav from '../Components/TitleNav.js'
import TouchableNav from '../Components/TouchableNav.js'
import Images from '../Themes/Images'
import { Card, Icon } from 'react-native-elements'
import { Calendar } from 'react-native-calendars';


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

  componentWillMount() {
    //call Api for specific habit
  }

  onNavPress(navigation) {
    navigation.goBack()
  }

  render() {
    
    
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <HabitsHeader centerComponent={<TitleNav title={this.props.navigation.state.params.name.name} />}
          rightComponent={<TouchableNav text={'Done'} onPress={() => this.onNavPress(this.props.navigation)} />}
          leftComponent={<TitleNav title={''} />}
        />
        <ScrollView style={styles.container}>
          <Card containerStyle={{ backgroundColor: '#303030',borderColor:'#303030' }} >
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <View style={{alignSelf:'flex-start', flexDirection: 'row'}}>
              <Icon name='check' type='font-awesome' color='#2fcc0c' />
              <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, marginLeft: 15, color: '#26A69A' }}>Total Times Done</Text>              
              </View>
              <View style={{alignSelf:'flex-end', flexDirection: 'row'}}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, color: '#26A69A' }}>42</Text>
              </View>
            </View>            
          </Card>
          <Card containerStyle={{ backgroundColor: '#303030',borderColor:'#303030' }} >
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <View style={{alignSelf:'flex-start', flexDirection: 'row'}}>
              <Icon name='check' type='font-awesome' color='#2fcc0c' />
              <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, marginLeft: 15, color: '#26A69A' }}>Best Streak</Text>              
              </View>
              <View style={{alignSelf:'flex-end', flexDirection: 'row'}}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, color: '#26A69A' }}>42</Text>
              </View>
            </View>            
          </Card>
          <Card containerStyle={{ backgroundColor: '#303030',borderColor:'#303030' }} >
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <View style={{alignSelf:'flex-start', flexDirection: 'row'}}>
              <Icon name='check' type='font-awesome' color='#2fcc0c' />
              <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, marginLeft: 15, color: '#26A69A' }}>Current Streak</Text>              
              </View>
              <View style={{alignSelf:'flex-end', flexDirection: 'row'}}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 20, color: '#26A69A' }}>42</Text>
              </View>
            </View>            
          </Card>

<View>
<Calendar
  
  theme={{
    backgroundColor: '#303030',
    calendarBackground: '#303030',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}

  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}

  markedDates={
    {'2018-02-16': {textColor: 'green'},
     '2018-02-17': {startingDay: true, color: 'green'},
     '2018-02-18': {selected: true, color: 'green'},
     '2018-02-19': {selected: true, color: 'green'},
     '2018-02-20': {selected: true, color: 'green'},
     '2018-02-21': {selected: true, endingDay: true, color: 'green', textColor: 'gray'}     
    }}

    markingType={'period'}
/>
</View>

        </ScrollView>
      </View>
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
