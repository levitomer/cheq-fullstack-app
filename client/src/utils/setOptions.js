export default function setOptions(options = {}) {
    options.headers = {
        Accept: 'application/json',
        ...options.headers
    };

    options.headers['Content-Type'] = 'application/json';

    options.body =
        options.headers['Content-Type'] === 'application/json' &&
        typeof options.body !== 'string'
            ? JSON.stringify(options.body)
            : options.body;

    return options;
}
