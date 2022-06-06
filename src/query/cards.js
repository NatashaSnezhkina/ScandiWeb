import { gql } from '@apollo/client'

export const GET_CARDS = (name) =>  gql`
query {
  category(input: {
    title: \"${name}\"
  }){
    products {
      id
      name
      gallery
    }
}
}  
`