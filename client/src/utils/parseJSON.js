export default function parseJSON(response) {
    const header = response.headers.get('Content-Type') || '';
    if (header.indexOf('application/json') > -1) return response.json();
    if (header.indexOf('application/ld+json') > -1) return response.json();
    if (header.indexOf('application/octet-stream') > -1)
        return response.arrayBuffer();
    return response.text();
}
