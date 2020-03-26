export const SELECT_ALL_VASTS = 'SELECT * FROM Vasts';

export const SELECT_VAST_BY_ID = id => `SELECT * FROM Vasts WHERE id = '${id}'`;

export const INSERT_VAST = ({
    location,
    vast_url,
    position,
    height,
    width
}) => `INSERT INTO Vasts (
    location,
    vast_url,
    position,
    height,
    width) VALUES (
        '${location}',
        '${vast_url}',
        '${position}',
        '${height}',
        '${width}')`;

export const UPDATE_VAST = ({
    location,
    vast_url,
    position,
    height,
    width,
    id
}) => `UPDATE Vasts SET
            location = '${location}',
            vast_url = '${vast_url}',
            position = '${position}',
            height = ${height},
            width = ${width}
            WHERE id = '${id}'`;
