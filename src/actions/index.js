import axios from 'axios';

const ROOT_URL='https://mysterious-waters-75101.herokuapp.com/companies'
const DATABASE_URL ='https://guarded-cove-22538.herokuapp.com'

export const FETCH_COMPANIES ='fetch_companies'
export const FETCH_VCS = 'fetch_vcs'
export const FETCH_VC = 'fetch_vc'
export const UPDATE_VC = 'update_vc'
export const FETCH_PORTFOLIO = 'fetch_portfolio'
export const ADD_PORTFOLIO = 'add_portfolio'
export const GET_ALL_STARTUPS = 'get_all_startups'
export const FILTER_STARTUPS = 'filter_startups'
export const ADD_INVESTMENT = 'add_investment'

export function fetchCompanies(searchterm) {
  const url = `${ROOT_URL}/${searchterm}`;

  const request = axios.post(url)

  return {
    type: FETCH_COMPANIES,
    payload: request
  }
}

export function fetchVC (id) {
  const url = `${DATABASE_URL}/vc/${id}`
  const request = axios.get(url)

  return {
    type: FETCH_VC,
    payload: request
  }
}

 export function fetchVCs() {
   const url = `${DATABASE_URL}/vc`
   const request = axios.get(url)

   return {
     type: FETCH_VCS,
     payload: request
   }
 }

  export function updateVC (id, name,
     facebook, twitter, linkedin, description, city, state, website, vertical) {
    // const url = `${DATABASE_URL}/add/:id`
    const url = `${DATABASE_URL}/vc/${id}`
    const request = axios.post(url, {
      id: id,
      name: name,
      facebook: facebook,
      twitter: twitter,
      linkedin: linkedin,
      description: description,
      city: city,
      state: state,
      website: website,
      vertical: vertical
    })

    return {
      type: UPDATE_VC,
      payload: request
    }
  }

 export function fetchPortfolio (id) {
  //  const url = `${DATABASE_URL}/portfolio/${id}`
   const url = `http://localhost:3000/portfolio/${id}`
   const request = axios.get(url)

   return {
     type: FETCH_PORTFOLIO,
     payload: request
   }
 }

 export function addPortfolio (id, row) {
  // const url = `${DATABASE_URL}/add/:id`
  const url = 'http://localhost:3000/portfolio/add'
  const request = axios.post(url, {
    id: id,
    name: row.name,
    facebook: row.facebook,
    twitter: row.twitter,
    linkedin: row.linkedin,
    description: row.description,
    city: row.city,
    state: row.state,
    website: row.website,
    domain: row.domain,
    profile_image: row.profile_image,
    country: row.country
  })

  return {
    type: ADD_PORTFOLIO,
    payload: request
  }
 }

 export function addInvestment(data) {
   const url = 'http://localhost:3000/portfolio/investment/add'
   const request = axios.post(url, data)

   return {
     type: ADD_INVESTMENT,
     payload: request
   }
 }

 export function fetchStartups() {
   const url = 'http://localhost:3000/startup/all'
   const request = axios.get(url)

   return {
     type: GET_ALL_STARTUPS,
     payload: request
   }
 }

export function filterStartups(terms) {
  return {
    type: FILTER_STARTUPS,
    payload: terms
  }
}
