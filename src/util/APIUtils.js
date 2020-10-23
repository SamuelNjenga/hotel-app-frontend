import {
	API_BASE_URL
} from '../constants';
import axios from 'axios';

export const getMenuItems = async () => {
	return axios.get(`${API_BASE_URL}/menuItems`);
};

export const postContactRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/contacts`, values);
};