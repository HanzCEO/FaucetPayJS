const axios = require('axios')
const fp = axios.create({
	baseURL: 'https://faucetpay.io/merchant/',
	timeout: 2000,
	method: 'POST',
	headers: {
		'X-FaucetPayJS': 'v0.1.0'
	}
})

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
	axios.post('/webscr', {

	})
}

async function validateToken(token) {
	let response = await axios.get(`/validate-token${token}`)
	return response.valid
}

class Merchant {
	constructor(merchant_username) {
		this.merchant_username = merchant_username
	}
}

Merchant.prototype.createInvoice = createInvoice
Merchant.prototype.makeInvoice = createInvoice
Merchant.prototype.generateInvoice = createInvoice
Merchant.prototype.requestInvoice = createInvoice

Merchant.prototype.validateToken = validateToken
Merchant.prototype.checkToken = validateToken
Merchant.prototype.isTokenValid = validateToken
