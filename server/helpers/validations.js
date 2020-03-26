import validator from 'validator';
import * as positions from '../helpers/positions';

const locationRgx = new RegExp(/[a-zA-Z ]/g);

export function validateRequest(requestBody) {
    const { location, vast_url, position, height, width } = requestBody;
    if (!locationRgx.test(location) || location.length > 30) return false;
    if (!validator.isURL(vast_url)) return false;
    if (!positions[position]) return false;
    if (!validator.isDecimal(height) || height > 1000 || height < 100)
        return false;
    if (!validator.isDecimal(width) || width > 1000 || width < 100)
        return false;
    return true;
}
