import xml from 'xml';
import validator from 'validator';
import { createConnection } from '../db/config';
import buildXML from '../helpers/buildXML';
import * as queries from '../db/queries';
import { validateRequest } from '../helpers/validations';

export default router => {
    router.route('/fetch_vasts').get(async (_, res) => {
        const db = await createConnection();
        try {
            const results = await db.query(queries.SELECT_ALL_VASTS);
            return res.status(200).json({
                data: results
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        } finally {
            await db.done();
        }
    });

    router.route('/create_vast').post(async (req, res) => {
        const validRequset = validateRequest(req.body);
        const db = await createConnection();

        if (validRequset) {
            try {
                const results = await db.query(queries.INSERT_VAST(req.body));
                return res.status(201).json({
                    data: results.insertId
                });
            } catch (err) {
                console.log(err);
                return res.status(400).send(err);
            } finally {
                await db.done();
            }
        }

        return res.status(400).json({
            data: 'Invalid input'
        });
    });

    router.route('/edit_vast').patch(async (req, res) => {
        const validRequset = validateRequest(req.body);
        const db = await createConnection();
        if (validRequset) {
            try {
                await db.query(queries.UPDATE_VAST(req.body));
                return res.status(204).json({
                    data: `Vast (id: ${req.body.id}) updated successfully`
                });
            } catch (err) {
                console.log(err);
                return res.status(400).send(err);
            } finally {
                await db.done();
            }
        }

        return res.status(400).json({
            data: 'Invalid input'
        });
    });

    router.route('/vast').get(async (req, res) => {
        const id = req.query.id;
        const db = await createConnection();
        if (validator.isInt(id)) {
            try {
                const results = await db.query(queries.SELECT_VAST_BY_ID(id));
                const template = buildXML(results);
                return res
                    .set('Content-Type', 'text/html')
                    .status(200)
                    .send(xml(template));
            } catch (err) {
                return res.status(400).send(err);
            } finally {
                await db.done();
            }
        }

        return res.status(400).json({
            data: 'Invalid Request'
        });
    });
};
