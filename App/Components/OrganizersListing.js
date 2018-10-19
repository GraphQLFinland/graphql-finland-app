import React from 'react'
import styled from 'styled-components/native'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OrganizerCard from './OrganizerCard'

const FlatList = styled.FlatList`
  background-color: transparent;
`
const getOrganizers = gql`
{
  conference(id: "graphql-finland-2018") {
    organizers {
      name
      about
      image {
        url
      }
      social {
        twitter
        homepage
        github
        linkedin
      }
    }
  }
}
`
export default class OrganizersListing extends React.Component {
  renderOrganizerCard ({ item }) {
    const { name, image, about, social: { homepage, twitter, github, linkedin } } = item
    console.tron.log(image)
    return <OrganizerCard
      author={name}
      picture={image.url}
      about={about}
      homepage={homepage}
      twitter={twitter}
      github={github}
      linkedin={linkedin}
    />
  }

  render () {
    return (
      <Query query={getOrganizers}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        console.tron.log(data)
        const {conference: { organizers }} = data
        return (
        <FlatList
          keyExtractor={(item) => item.name}
          data={organizers}
          renderItem={this.renderOrganizerCard}
        />
        )}}
      </Query>
    )
  }
}

