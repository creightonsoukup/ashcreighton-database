import axios from 'axios';

const ROOT_URL='https://mysterious-waters-75101.herokuapp.com/companies'
const DATABASE_URL ='https://guarded-cove-22538.herokuapp.com'

export const FETCH_COMPANIES ='fetch_companies'
export const FETCH_VCS = 'fetch_vcs'
export const FETCH_VC = 'fetch_vc'
export const UPDATE_VC = 'update_vc'
export const FETCH_PORTFOLIO = 'fetch_portfolio'

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

 export function updateVC (id, props) {
   const url = `${DATABASE_URL}/vc/${id}`
   const request = axios.post(url)

   return {
     type: UPDATE_VC,
     payload: request
   }
 }

 export function fetchPortfolio (id) {
   const url = `${DATABASE_URL}/portfolio/${id}`
   const request = axios.get(url)

   return {
     type: FETCH_PORTFOLIO,
     payload: request
   }
 }
