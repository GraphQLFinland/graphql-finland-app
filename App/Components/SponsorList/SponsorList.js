import React from 'react'
import { View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Fonts } from '../../Themes'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

export const GoldImage = styled.Image`
 height: 50px;
 width: 140;
`

export const SilverImage = styled.Image`
 height: 50px;
 width: 80;
`
export const BronzeImage = styled.Image`
 height: 35px;
 width: 65;
`
export const BronzeWrapper = styled.View`
 padding-left: 10px;
 padding-right: 10px;
 background-color: black;
`

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`
export const SponsorContainer = styled.View`
  flex: 1; 
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Text = styled.Text`
  color: ${props => props.textcolor};
  padding-top: 20;
  padding-left: 20;
  padding-bottom: 15px;
  padding-right: 30;
  text-align: center;
  font-size: ${Fonts.size.h5};
  font-family: ${Fonts.type.base};
`

class SponsorList extends React.Component {
  render () {
    return (
      <BackgroundImage rexizeMode='cover' source={require('../../Images/graphql-background.png')} >
      <View style={{flex:1, backgroundColor: 'rgba(0,0,0, 0.4)'}}>
        <SponsorContainer>
          <ScrollView>
            <Text textcolor={'white'}>Gold</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              { this.props.gold.map((i, index) => 
                <GoldImage key={index} source={{uri: i.image.url}} />
              )}
            </View>
            <Text textcolor='white'>Silver</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              { this.props.silver.map((i, index) => 
                <SilverImage key={index} source={{uri: i.image.url}} />
              )}
            </View>
            <Text textcolor='white' >Bronze</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
              { this.props.bronze.map((i, index) => 
                <BronzeImage key={index} resizeMode='contain' source={{uri: i.image.url}} />
              )}
            </View>
          </ScrollView>
        </SponsorContainer>
        </View>
      </BackgroundImage>
    )
  }
}
const mapStateToProps = ({sponsors}) => ({
  gold:  pathOr([], ['data', 'goldSponsors'], sponsors),
  silver:  pathOr([], ['data', 'silverSponsors'], sponsors),
  bronze:  pathOr([], ['data', 'bronzeSponsors'], sponsors)
})
export default connect(mapStateToProps)(SponsorList)