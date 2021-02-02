const axios = require('axios')

/*
 * This greedy function doesnt work
 * because this just simply redirects
 * costumer to faucetpay's page which
 * we didn't handle, right?
 *
 * Just forget about this function,
 * let's create middlewares instead
 */
async function createInvoice(
	item_description,
	price,
	receive_as,
	pay_with='',
	custom="",
	callback_url='http://0.0.0.0',
	success_url='http://merchant.hanzhaxors.online/thank-you',
	cancel_url='http://merchant.hanzhaxors.online/feedback'
) {
	try {
		let response = await axios.post('/webscr', qs.stringify({
			merchant_username: this.merchant_username,
			item_description: String(item_description),
			amount1: +price,
			currency1: receive_as.toUpperCase(),
			currency2: pay_with.toUpperCase(),
			custom: String(custom),
			callback_url: String(callback_url),
			success_url: String(success_url),
			cancel_url: String(cancel_url)
		}), this.axios_config)

		return response.data
	} catch (e) {
		console.error(e)
		throw e
	}
}

async function validateToken(token) {
	let response = await axios.get(`/get-payment/${token}`, this.axios_config)
	return response.data
}

/*
 * getMiddleware function returns a middleware
 * suitable for http, https, Express.js, connect,
 * and much more framework.
 *
 * Please do note, if you want to retrieve the
 * token validity use `req.tokenValid` (Boolean)
 */
function getMiddleware(config={}) {
	let retfun = async (req, res, next) => {
		if (!req.body || !req.body.token) {
			return next()
		}

		req.paymentData = validateToken(req.body.token)
		next()
	}

	return retfun
}

class Merchant {
	constructor(merchant_username) {
		this.merchant_username = merchant_username
		this.fp = axios.create({
			baseURL: 'https://faucetpay.io/merchant/',
			method: 'POST',
			headers: {
				'X-FaucetPayJS': 'v0.2.0',
				'User-Agent': 'FaucetPayJS/0.2.0'
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

Merchant.prototype.getMiddleware = getMiddleware

module.exports = Merchant
