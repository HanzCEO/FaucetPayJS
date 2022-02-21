const axios = require('axios');
const qs = require('querystring');

async function getBalance(currency='BTC') {
	let api_key = this.api_key;
	try {
		let response = await this.fp.post('/balance', qs.stringify({
			api_key: api_key,
			currency: currency
		}), this.axios_config);
		return response.data;
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

async function getCurrencies() {
	let api_key = this.api_key;
	try {
		let response = await this.fp.post('/currencies', qs.stringify({
			api_key: api_key
		}), this.axios_config);
		return response.data;
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

async function checkAddress(address, currency='BTC') {
	let api_key = this.api_key;
	try {
		let response = await this.fp.post('/checkaddress', qs.stringify({
			api_key: api_key,
			address: address,
			currency: currency
		}), this.axios_config);

		return response.data;
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

async function send(amount, to, currency='BTC', referral=false, ipaddress='0.0.0.0') {
	let api_key = this.api_key;
	try {
		if (ipaddress == '0.0.0.0') {
			let response = await this.fp.post('/send', qs.stringify({
				api_key: api_key,
				amount: amount,
				to: to,
				currency: currency,
				referral: referral
			}), this.axios_config);
			return response.data;
		} else {
			let response = await this.fp.post('/send', qs.stringify({
				api_key: api_key,
				amount: amount,
				to: to,
				currency: currency,
				referral: referral,
				ip_address: ipaddress
			}), this.axios_config);
			return response.data;
		}
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

async function payouts(currency='BTC', count=100) {
	let api_key = this.api_key;
	try {
		let response = await this.fp.post('/payouts', qs.stringify({
			api_key: api_key,
			currency: currency,
			count: count
		}), this.axios_config);

		return response.data;
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

async function faucetlist() {
	let api_key = this.api_key;
	try {
		let response = await this.fp.post('/faucetlist', qs.stringify({
			api_key: api_key
		}), this.axios_config);

		return response.data;
	} catch (e) {
		console.error(e);
		new Error(e);
	}
}

class API {
	constructor(api_key) {
		this.api_key = api_key;
		this.fp = axios.create({
			baseURL: 'https://faucetpay.io/api/v1/',
			method: 'POST',
			headers: {
				'X-FaucetPayJS': 'v0.1.0',
				'User-Agent': 'FaucetPayJS/0.1.0'
			}
		});
		this.axios_config = {
			timeout: 0
		};
	}
}

API.prototype.getBalance = getBalance;
API.prototype.balance = getBalance;

API.prototype.getCurrencies = getCurrencies;
API.prototype.currencies = getCurrencies;
API.prototype.checkCurrencies = getCurrencies;

API.prototype.checkAddress = checkAddress;
API.prototype.isAddressExist = checkAddress;
API.prototype.findAddress = checkAddress;

API.prototype.send = send;
API.prototype.tip = send;
API.prototype.transfer = send;
API.prototype.withdraw = send;
API.prototype.withdrawto = send;

API.prototype.payouts = payouts;
API.prototype.getPayouts = payouts;
API.prototype.listPayouts = payouts;
API.prototype.recentPayouts = payouts;

API.prototype.faucetlist = faucetlist;
API.prototype.faucetList = faucetlist;
API.prototype.listFaucet = faucetlist;
API.prototype.faucetLists = faucetlist;
API.prototype.listFaucets = faucetlist;
API.prototype.fetchFaucet = faucetlist;
API.prototype.fetchFaucets = faucetlist;
API.prototype.retrieveFaucets = faucetlist;
API.prototype.fetchRotator = faucetlist;

module.exports = API;
