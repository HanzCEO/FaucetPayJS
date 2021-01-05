const axios = require('axios')

async function createInvoice(
	item_description,
	price,
	receive_as,
	pay_with='',
	order_id=-1,
	callback_url='http://0.0.0.0',
	success_url='http://merchant.hanzhaxors.online/thank-you',
	cancel_url='http://merchant.hanzhaxors.online/feedback'
) {
	try {
		let response = await axios.post('/webscr', qs.stringify({
			merchant_username: this.merchant_username,
			item_description: item_description,
			amount1: price,
			currency1: receive_as,
			currency2: pay_with,
			custom: order_id,
			callback_url: callback_url,
			success_url: success_url,
			cancel_url: cancel_url
		}), this.axios_config)

		return response.data
	} catch (e) {
		console.error(e)
		new Error(e);
	}
}

async function validateToken(token) {
	let response = await axios.get(`/validate-token${token}`, this.axios_config)
	return response.data.valid
}

class Merchant {
	constructor(merchant_username) {
		this.merchant_username = merchant_username
		this.fp = axios.create({
			baseURL: 'https://faucetpay.io/merchant/',
			method: 'POST',
			headers: {
				'X-FaucetPayJS': 'v0.1.0',
				'User-Agent': 'FaucetPayJS/0.1.0'
			}
		})
		this.axios_config = {
			timeout: 0
		}
	}
}

Merchant.prototype.createInvoice = createInvoice
Merchant.prototype.makeInvoice = createInvoice
Merchant.prototype.generateInvoice = createInvoice
Merchant.prototype.requestInvoice = createInvoice

Merchant.prototype.validateToken = validateToken
Merchant.prototype.checkToken = validateToken
Merchant.prototype.isTokenValid = validateToken
