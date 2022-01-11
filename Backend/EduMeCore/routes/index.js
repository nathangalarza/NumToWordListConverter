import convert from '../controllers/converterController';

export default (app) => {
    app.route('/convert/:value')
        .get(convert.getConversion)

};