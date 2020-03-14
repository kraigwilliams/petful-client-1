import config from '../config.js';

const PersonApiService = {
	getPeople() {
		return fetch(`${config.API_BASE_URL}/people`, {
			method : 'GET',
			headers : {
				'content-type': 'application/json',
				'mode' : 'no-cors'
			}
		})
			.then(res => !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json())
		
	},
	enqueuePerson(person) {
		return fetch(`${config.API_BASE_URL}/people/${person}`, {
			method : 'POST',
			headers : {
				'content-type': 'application/json',
				'mode': 'no-cors'
			},
			body: JSON.stringify(person)
		})
			.then(res => res.ok ?
				Promise.resolve('Succesfully added to the queue') :
				Promise.reject('Cannot add to the queue at the moment'))
			
			.catch(err => console.log(err))
	},
	getPerson() {
		return fetch(`${config.API_BASE_URL}/people`, {
			method : 'PATCH',
			headers : {
				'content-type': 'application/json',
				'mode': 'no-cors'
			},
			
		})
			.then(res => res.ok ?
				Promise.resolve('Succesfully removed from the queue') :
				Promise.reject('Cannot remove from queue at the moment'))
			
			.catch(err => console.log(err))
	}
};

export default PersonApiService;