import vasts from '../db/vasts';

export default router => {
    router.route('/fetch_vasts').get((req, res) => {
        res.json(vasts);
    });
};
