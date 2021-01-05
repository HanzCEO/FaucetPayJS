const API = require('./API')
const Merchant = require('./Merchant')

class FaucetPay {
	constructor(api_key, merchantkey) {
		this.api_key = api_key
		this.API = new API(api_key)
		this.Merchant = new Merchant(merchantkey)
	}
}

exports.API = API
exports.Merchant = Merchant
exports.FaucetPay = FaucetPay
