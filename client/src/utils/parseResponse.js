export default function parseResponse(response) {
    const header = response.headers.get('Content-Type') || '';
    if (header.indexOf('application/json') > -1) return response.json();
    if (header.indexOf('application/ld+json') > -1) return response.json();
    return response.text();
}
