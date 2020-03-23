import { connection } from '../index';
import { viewXML } from '../db/viewXML';
import * as queries from '../db/queries';

export default router => {
    router.route('/fetch_vasts').get((_, res) => {
        connection.query(queries.SELECT_ALL_VASTS, (err, results) => {
            if (err) {
                return res.send(err);
            }
            return res.status(200).json({
                data: results
            });
        });
    });

    router.route('/create_vast').post((req, res) => {
        connection.query(
            queries.INSERT_VAST('Vasts', req.body),
            (err, results) => {
                if (err) {
                    return res.send(err);
                }

                return res.status(201).json({
                    data: results.insertId
                });
            }
        );
    });

    router.route('/edit_vast').patch((req, res) => {
        connection.query(queries.UPDATE_VAST('Vasts', req.body), (err, _) => {
            if (err) {
                return res.send(err);
            }
            return res.status(204).json({
                data: `Vast (id: ${req.body.id}) updated successfully`
            });
        });
    });

    router.route('/vast').get((req, res) => {
        const id = req.query.id;
        connection.query(queries.SELECT_VAST_BY_ID(id), (err, results) => {
            if (err) {
                return res.send(err);
            }
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(viewXML(...results));
        });
    });
};
