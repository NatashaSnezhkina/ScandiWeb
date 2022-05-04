// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import gql from 'graphql-tag'

// const client = new ApolloClient({
//   link: new HttpLink({ URL: 'https://localhost:4000' }),
//   cache: new InMemoryCache()
// })

// client.query({
//   query: gql`
//     query AllProducts {
//       category(input: {
//         title: "tech"
//       }) {
//         products{
//           name
//         }
//       }
//     }
//   `,
// })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// class Api {
//   constructor(address) {
//     this._address = address;
//   }

//   _responseProcessing() {
//     return (res => {
//       if (res.ok) {
//         return res.json()
//       }
//       return Promise.reject(`Ошибка ${res.status}`)
//     })
//   }

//   // getCards() {
//   //   return fetch(`${this._address}/cards`, {
//   //     headers: {
//   //       authorization: this._token
//   //     }
//   //   })
//   //     .then(this._responseProcessing())
//   // }

//   getCards() {
//     query {
//       category(input: {
//         title: "tech"
//       }){
//         products {
//           name
//         }
//       }
//     }
//   }

//   sendCard(data) {
//     return fetch(`${this._address}/cards`, {
//       method: 'POST',
//       headers: {
//         authorization: this._token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link
//       })
//     })
//       .then(this._responseProcessing())
//   }

//   getProfileInfo() {
//     return fetch(`${this._address}/users/me`, {
//       headers: {
//         authorization: this._token
//       }
//     })
//       .then(this._responseProcessing())
//   }

//   sendProfileInfo(data) {
//     return fetch(`${this._address}/users/me`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this._token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.name,
//         about: data.about,
//       })
//     })
//       .then(this._responseProcessing())
//   }

//   sendAvatar(data) {
//     return fetch(`${this._address}/users/me/avatar`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this._token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         avatar: data.avatar
//       })
//     })
//       .then(this._responseProcessing())
//   }

//   deleteCard(cardId) {
//     return fetch(`${this._address}/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this._token,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(this._responseProcessing())
//   }

//   changeLikeCardStatus(cardId, isLiked) {
//     return fetch(`${this._address}/cards/${cardId}/likes`, {
//       method: isLiked ? 'PUT' : 'DELETE',
//       headers: {
//         authorization: this._token,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(this._responseProcessing())
//   }
// }

// const api = new Api('http://localhost:4000/');

// export default api;

