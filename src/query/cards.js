import { gql } from '@apollo/client'

export const GET_ALL_CARDS = gql`
query {
  category(input: {
    title: "tech"
  }){
    products {
      name
    }
}
}  
`