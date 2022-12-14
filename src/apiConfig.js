let apiUrl
const apiUrls = {
	production: 'https://alexandria-app.fly.dev/',
	development: 'http://localhost:8000',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
