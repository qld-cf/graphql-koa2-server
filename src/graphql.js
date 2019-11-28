import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const QUERY = gql`
query User{
  user(id: 100, name: "马大帅") {
    id
    name
  }
  users(id: 100) {
    id
    name
    date
  }
}
`

const NameWithQuery = graphql(QUERY)

export default NameWithQuery
