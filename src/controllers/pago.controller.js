const Pago = require('../models/pago.model');

module.exports = {
  async list(req, res) {
    try {
      const pagos = await Pago.findAll()
      res.status(200).json(pagos);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async createorupdate(req, res) {
    try {
      const data = req.body;
      const {documentoIdentificacionArrendatario, fechaPago, valorPagado, codigoInmueble} = req.body;
      const dateValue = fechaPago.split('/');
      const valorArriendo = 1000000;
      
      if (dateValue[0] % 2 === 0) {
        res.status(400).json({"respuesta": "lo siento pero no se puede recibir el pago por decreto de administración"});
      }

      const pagoEncontrado = await Pago.findOne({ where: {documentoIdentificacionArrendatario, codigoInmueble} });
      if (pagoEncontrado) {
        const valorPagadoAnterior = parseInt(pagoEncontrado.dataValues.valorPagado)
        const valorPagadoTotal = valorPagadoAnterior + parseInt(valorPagado);
        const saldoActual = valorArriendo - valorPagadoTotal;
        const pagoActual = await Pago.update({ valorPagado:  `${valorPagadoTotal}` }, {
          where: {documentoIdentificacionArrendatario, codigoInmueble}
        });
        if(valorPagadoTotal > valorArriendo){
          const respuesta = { "respuesta": `gracias por pagar todo tu arriendo`}
          res.status(200).json(respuesta); 
        }
        if(valorPagadoTotal === valorArriendo){
          const respuesta = { "respuesta": `gracias por pagar todo tu arriendo`}
          res.status(200).json(respuesta); 
        }
        const respuesta = { "respuesta": `gracias por tu abono, sin embargo recuerda que te hace falta pagar ${saldoActual}`}
        res.status(200).json(respuesta); 
      }

      const pagos = await Pago.create(data);
      if( valorPagado == valorArriendo ){
        const respuesta = { "respuesta": `gracias por pagar todo tu arriendo`}
        res.status(200).json(respuesta); 
      }
      const respuesta = { "respuesta": `gracias por tu abono, sin embargo recuerda que te hace falta pagar ${valorArriendo-parseInt(valorPagado)}`}
      res.status(200).json(respuesta);

    } catch (err) {
      res.status(400).json(err);
    }
  }
}