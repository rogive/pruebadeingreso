const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require ("../database/connection");

const Pago = sequelize.define("Pago", {
  documentoIdentificacionArrendatario: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      isNumeric: {
        args: true,
        msg: "Debe ser un valor númerico"
      },
      len: {
        args: [8,10],
        msg: "El documento de identificación debe ser valido"
      },
      notNull: {
        msg: 'Porfavor, ingrese su documento de identificación'
      }
    }
  },
  codigoInmueble: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: "El codigo de inmueble debe ser alfanúmerico"
      },
    }
  },
  valorPagado: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: "El valor pagado debe ser un valor númerico"
      },
      len: {
        args: [1,7],
        msg: "El valor pagado debe ser entre 1 y 1000000"
      },
      max: {
        args: 1000000,
        msg: "El valor pagado debe ser menor o igual a 1000000"
      },
      min: {
        args: 1,
        msg: "El valor pagado debe ser mayor o igual a 1"
      }
    }
  },
  fechaPago: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        msg: "La fecha de pago debe ser valida [dd/mm/yyyy]"
      },
      isValidDate(value) {
        const dateValue = value.split('/');
        const dateRef = new Date(dateValue[2], dateValue[1] - 1, dateValue[0]);
        if (!(dateRef && (dateRef.getMonth() + 1) == dateValue[1])) {
          throw new Error('La fecha de pago debe ser existente en el calendario');
        }
        if (dateValue[0] % 2 === 0) {
          throw new Error('lo siento pero no se puede recibir el pago por decreto de administración');
        }
      }
    }
  }
}, {timestamps: false});

module.exports = Pago