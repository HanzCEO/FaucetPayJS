const axios = require('axios')
const fp = axios.create({
	baseURL: 'https://faucetpay.io/api/v1/',
	timeout: 2000,
	method: 'POST',
	headers: {
		'X-FaucetPayJS': 'v0.1.0'
	}
})

async function getBalance(currency='BTC') {
	let api_key = this.api_key
	try {
		let response = await fp.post('/balance', {
			api_key: api_key,
			currency: currency
		})
		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function getCurrencies() {
	let api_key = this.api_key
	try {
		let response = await fp.post('/currencies', {
			api_key: api_key
		})
		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function checkAddress(address, currency='BTC') {
	let api_key = this.api_key
	try {
		let response = await fp.post('/checkaddress', {
			api_key: api_key,
			address: address,
			currency: currency
		})

		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function send(amount, to, currency='BTC', referral=false, ipaddress='0.0.0.0') {
	let api_key = this.api_key
	try {
		let response = await fp.post('/send', {
			api_key: api_key,
			amount: amount,
			to: to,
			currency: currency,
			referral: referral,
			ip_address: ipaddress
		})

		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function payouts(currency='BTC', count=100) {
	let api_key = this.api_key
	try {
		let response = await fp.post('/payouts', {
			api_key: api_key,
			currency: currency,
			count: count
		})

		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function faucetlist() {
	let api_key = this.api_key
	try {
		let response = await fp.post('/faucetlist', {
			api_key: api_key
		})

		return response
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

class API {
	constructor(api_key) {
		this.api_key = api_key
	}
}

API.prototype.getBalance = getBalance
API.prototype.balance = getBalance

API.prototype.getCurrencies = getCurrencies
API.prototype.currencies = getCurrencies
API.prototype.checkCurrencies = getCurrencies

API.prototype.checkAddress = checkAddress
API.prototype.isAddressExist = checkAddress
API.prototype.findAddress = checkAddress

API.prototype.send = send
API.prototype.tip = send
API.prototype.transfer = send
API.prototype.withdraw = send
API.prototype.withdrawto = send

API.prototype.payouts = payouts
API.prototype.getPayouts = payouts
API.prototype.listPayouts = payouts
API.prototype.recentPayouts = payouts

API.prototype.faucetlist = faucetlist
API.prototype.faucetList = faucetlist
API.prototype.listFaucet = faucetlist
API.prototype.faucetLists = faucetlist
API.prototype.listFaucets = faucetlist
API.prototype.fetchFaucet = faucetlist
API.prototype.fetchFaucets = faucetlist
API.prototype.retrieveFaucets = faucetlist
API.prototype.fetchRotator = faucetlist

module.exports = API
