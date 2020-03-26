import validator from 'validator';

export const height = { min: 100, max: 1000 };
export const width = { min: 100, max: 1000 };
export const location = location =>
    location.match(/[^a-zA-Z ]/g) === null && location.length < 30;
export const vast_url = url =>
    validator.isURL(url) && url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
