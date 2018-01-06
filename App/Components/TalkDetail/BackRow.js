import React from 'react'
import { Platform, TouchableOpacity, Linking } from 'react-native'
import styled from 'styled-components/native'
import { Colors, Fonts } from '../../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

const backIcon = Platform.OS === 'ios' ? 'ios-arrow-back' : 'ios-arrow-round-back'

const Back = styled.Text`
  color: ${Colors.text};
  font-size: ${Fonts.size.h5};
`
const TopRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
const openUrl = link => Linking.openURL(link).catch(err => {
  console.tron.log(`Failed to open link ${link}`)
  console.tron.log(err)
})
export const BackRow = ({onBack}) => (
  <TopRow>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start'}} onPress={() => onBack()}>
      <Icon style={{paddingRight: 10, paddingBottom: 10}} size={28} name={backIcon} />
      <Back>Back</Back>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openUrl('https://ti.to/react-finland/2018')}>
      <Back>Buy Tickets</Back>
    </TouchableOpacity>
  </TopRow>
)