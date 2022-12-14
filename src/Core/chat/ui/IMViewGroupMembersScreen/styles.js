import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]
  const fontSize = theme.fontSizes
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.primaryBackground,
    },
    itemContainer: {
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
    },
    chatIconContainer: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    photo: {
      height: 40,
      borderRadius: 20,
      width: 40,
    },
    addFlexContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    divider: {
      bottom: 0,
      left: 70,
      right: 0,
      position: 'absolute',
      height: 0.5,
      backgroundColor: colorSet.hairline,
    },
    name: {
      marginLeft: 20,
      alignSelf: 'center',
      flex: 1,
      color: colorSet.primaryText,
    },
    adminText: {
      color: colorSet.primaryText,
      fontSize: fontSize.xs,
      fontStyle: 'italic',
    },
  })
}

export default dynamicStyles
