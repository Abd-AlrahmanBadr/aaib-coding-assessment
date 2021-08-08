import { inHTMLData } from 'xss-filters'

export default () => (req, res, next) => {
	function xssFilter (payload = '') {
		let isObject = false
		if (typeof payload === 'object') {
			payload = JSON.stringify(payload)
			isObject = true
		}

		payload = inHTMLData(payload).trim()
		if (isObject) { payload = JSON.parse(payload) }

		return payload
	}

	// Filter All Inputs
	if (req.body) { req.body = xssFilter(req.body) }
	if (req.query) { req.query = xssFilter(req.query) }
	if (req.params) { req.params = xssFilter(req.params) }

	next()
}
