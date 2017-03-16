import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
import { API_KEY } from '../../config'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
