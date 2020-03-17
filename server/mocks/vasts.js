import vasts from '../json/vasts';

export default router => {
    router.route('/fetch_vasts').get((req, res) => {
        res.json(vasts);
    });
};
