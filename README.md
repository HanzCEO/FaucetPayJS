# FaucetPayJS
NodeJS Based API collection of FaucetPay.io<br/>
<br/>

# Installation
`npm i --save faucetpayjs`

# API Endpoints
How to start<br/>
```javascript
const { API } = require('FaucetPayJS');
const myAPI = new API(process.env.API_KEY);
myAPI.getBalance().then(data => {
	console.dir(data)
})
```
Response
```javascript
{
  status: 200,
  message: 'OK',
  currency: 'BTC',
  balance: '174',
  balance_bitcoin: '0.00000174'
}
```

### API Methods
#### Get Balance
`API.getBalance(currency='BTC')`<br/>
Aliases<br/>
`API.balance`<br/>

#### List Currencies
`API.getCurrencies()`<br/>
Aliases<br/>
`API.currencies`<br/>
`API.checkCurrencies`<br/>

#### Check If Address Linked
`API.checkAddress(address, currency='BTC')`<br/>
Aliases<br/>
`API.isAddressExist`<br/>
`API.findAddress`<br/>

#### Send Funds
`API.send(amount, to, currency='BTC', referral=false, ipaddress='0.0.0.0')`<br/>
Aliases<br/>
`API.tip`<br/>
`API.transfer`<br/>
`API.withdraw`<br/><br/>
`API.withdrawto`<br/>

#### List Your Faucet's Payout
`API.payouts(currency='BTC', count=100)`<br/>
Aliases<br/>
`API.getPayouts`<br/>
`API.listPayouts`<br/>
`API.recentPayouts`<br/>

#### List Faucets on Faucet List
`API.faucetlist()`<br/>
Aliases<br/>
`API.faucetList`<br/>
`API.listFaucet`<br/>
`API.faucetLists`<br/>
`API.listFaucets`<br/>
`API.fetchFaucet`<br/>
`API.fetchFaucets`<br/>
`API.retrieveFaucets`<br/>
`API.fetchRotator`<br/>

# Contributing
1. I use `'` instead of `"` for string or character
2. No semicolons, sorry.
3. No trailing space (ex. `a = 1 + 1                 `)
4. Add space before and after curly-braces (except if its making trailing spaces)
5. Minimum line changed is 2
6. DO NOT CHANGE THE BRAND, that's stupid.

# End Notes
Thank you for visiting this page! Appreciate my works by Following, being a Stargazer, Contribute to the project or Donate me via cryptocurrency down below<br/>
<br/>
BTC, ETH, LTC, BCH, DASH, DGB, FEY via FaucetPay (username: `Hanz`)<br/>
DOGE	: DFazapEWQNFBDMRN4Soo4iGDRgdqKqUSfR<br/>
WAVES	: use alias (`hanz`, `hanzhaxors`, `haxors`)<br/>
