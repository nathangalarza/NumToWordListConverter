import convert from '../controllers/phoneController';

export default (app) => {
    app.route('/convert/:value')
        .get(convert.getExpansion)

};