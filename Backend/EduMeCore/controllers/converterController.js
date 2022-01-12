
 exports.getConversion = (req, res) => {

       let numericStringLength = 3 ** req.params.value.toString().length;
        res.json(numericStringLength);
};
