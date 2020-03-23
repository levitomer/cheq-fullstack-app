export const SELECT_ALL_VASTS = 'SELECT * FROM Vasts';
export const SELECT_VAST_BY_ID = vast_id =>
    `SELECT * FROM Vasts WHERE id = ${vast_id}`;
export const INSERT_VAST = (
    table,
    { location, url, position, height, width }
) => `INSERT INTO ${table} (
    location,
    vast_url,
    position,
    height,
    width) VALUES (
        '${location}',
        '${url}',
        '${position}',
        '${height}',
        '${width}')`;
export const UPDATE_VAST = (
    table,
    { id, location, vast_url, position, height, width }
) => `UPDATE ${table} SET
            location = '${location}',
            vast_url = '${vast_url}',
            position = '${position}',
            height = ${height},
            width = ${width}
            WHERE id = '${id}'`;
