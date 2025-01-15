const { Client, Environment } = require('@paypal/paypal-server-sdk');
const dotenv = require('dotenv');
dotenv.config();

// Validar variables de entorno
if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
  throw new Error('PAYPAL_CLIENT_ID o PAYPAL_CLIENT_SECRET no están definidas en el archivo .env');
}

const cliente = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.PAYPAL_CLIENT_ID,
    oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
  timeout: 0, // Opcional, puedes eliminarlo si no lo necesitas
  environment: Environment.Sandbox, // Cambia a Environment.Production en producción
});

module.exports = cliente;
