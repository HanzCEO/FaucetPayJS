const axios = require('axios');

async function validateToken(token) {
	let response = await axios.get(`https://faucetpay.io/merchant/get-payment/${token}`, this.axios_config);
	return response.data;
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
			return next();
		}

		req.paymentData = await validateToken(req.body.token);
		next();
	}

	return retfun;
}

class Merchant {
	constructor(merchant_username) {
		this.merchant_username = merchant_username;
		this.fp = axios.create({
			baseURL: 'https://faucetpay.io/merchant/',
			method: 'POST',
			headers: {
				'X-FaucetPayJS': 'v0.2.0',
				'User-Agent': 'FaucetPayJS/0.2.0'
			}
		});
		this.axios_config = {
			timeout: 0
		};
	}
}

Merchant.prototype.createInvoice = createInvoice;
Merchant.prototype.makeInvoice = createInvoice;
Merchant.prototype.generateInvoice = createInvoice;
Merchant.prototype.requestInvoice = createInvoice;

Merchant.prototype.validateToken = validateToken;
Merchant.prototype.checkToken = validateToken;
Merchant.prototype.isTokenValid = validateToken;

Merchant.prototype.getMiddleware = getMiddleware;

module.exports = Merchant;
