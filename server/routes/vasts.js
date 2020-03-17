export default router => {
    router.route('/fetch_vasts').get((req, res) => {
        // TODO: return all vasts from DB
        res.send(['hello', 'world']);
    });

    router.route('/create_vast').post((req, res) => {
        // TODO: save a new vast into DB and return the new vast
    });

    router.route('/edit_vast').patch((req, res) => {
        // TODO: save edits for the vast and return the updated version
    });
};
