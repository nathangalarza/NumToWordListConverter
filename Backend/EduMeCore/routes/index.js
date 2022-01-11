import convert from '../controllers/converterController';

export default (app) => {
    app.route('/convert')
        .get(convert.getConversion)

};