export const SELECT_ALL_VASTS = 'SELECT * FROM Vasts';
export const SELECT_VAST_BY_ID = vast_id =>
    `SELECT * FROM Vasts WHERE id = ${vast_id}`;
