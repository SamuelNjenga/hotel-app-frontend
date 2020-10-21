import {
	API_BASE_URL
} from '../constants';
import axios from 'axios';
export const postContactRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/contacts`, values);
};