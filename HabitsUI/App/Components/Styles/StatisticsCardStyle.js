import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    borderColor: '#303030'
  },
  cardView:{
     flexDirection: 'row',
     justifyContent: 'space-between'
  },
  iconContainer:{
     alignSelf: 'flex-start',
     flexDirection: 'row'
  },
  cardText:{
     fontFamily: 'Lato-Regular', 
     fontSize: 18,
     marginLeft: 15,
     color: '#26A69A'
  },
  valueContainer:{
     alignSelf: 'flex-end',
     flexDirection: 'row' 
  }

})
