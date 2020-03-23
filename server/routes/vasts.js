import { connection } from '../index';
import { viewXML } from '../db/viewXML';
import * as queries from '../db/queries';

export default router => {
    router.route('/fetch_vasts').get((_, res) => {
        connection.query(queries.SELECT_ALL_VASTS, (err, results) => {
            if (err) {
                return res.send(err);
            }
            return res.json({
                data: results
            });
        });
    });

    router.route('/create_vast').post((req, res) => {
        // TODO: save a new vast into DB and return the new vast
    });

    router.route('/edit_vast').post((req, res) => {
        console.log('edit_vast: ', req.body);
        return res.json({
            data: req.body
        });
    });

    router.route('/vast').get((req, res) => {
        const id = req.query.id;
        connection.query(queries.SELECT_VAST_BY_ID(id), (err, results) => {
            if (err) {
                return res.send(err);
            }
            res.set('Content-Type', 'text/xml');
            return res.send(viewXML(...results));
        });
    });
};
