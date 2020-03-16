export default router => {
    router.route('/fetch_vasts').get((req, res) => {
        // return all vasts from DB
        res.send('fetch_vasts');
    });

    router.route('/create_vast').post((req, res) => {
        // save a new vast into DB and return the new vast
    });

    router.route('/edit_vast').patch((req, res) => {
        // save edits for the vast and return the updated version
    });
};
