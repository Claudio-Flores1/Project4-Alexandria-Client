import apiUrl from '../apiConfig'
import axios from 'axios'

export const exhibitCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/exhibits',
		data: {
			exhibit: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const exhibitIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/exhibits',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const exhibitShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/exhibits/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const exhibitUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + `/exhibits/${id}`,
		data: {
			exhibit: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const exhibitDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/exhibits/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
