import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST'

import { API_KEY } from '../../config'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}


export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
  return {
    type: CREATE_POST,
    payload: request
  };
}
