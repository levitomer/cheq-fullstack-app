import { connection } from '../index';
import * as queries from '../db/queries';

export default router => {
    router.route('/fetch_vasts').get((_, res) => {
        connection.query(queries.SELECT_ALL_VASTS, (err, results) => {
            if (err) {
                return res.send(err);
            }
            console.log(results);
            return res.json({
                data: results
            });
        });
    });

    router.route('/create_vast').post((req, res) => {
        // TODO: save a new vast into DB and return the new vast
    });

    router.route('/edit_vast').patch((req, res) => {
        // TODO: save edits for the vast and return the updated version
    });
};
