const { OrdersController, CheckoutPaymentIntent } = require('@paypal/paypal-server-sdk');
const clientePaypal = require("../config/paypal");
const ordersController = new OrdersController(clientePaypal);

const returnUrl = "http://localhost:5432/api/payment/capture";
const cancelUrl = "http://localhost:5432/cancel";
let collect = {}


const CaptureOrder = async (orderId) => {
  
    collect = {
        id: orderId,
        prefer: 'return=minimal'
    }

    try {
        const { result, ...httpResponse } = await ordersController.ordersCapture(collect);
        if (result) {
            return result
        }

    }
    catch (error) {
        throw error

    }
}

const CreateOrder = async (req) => {
  collect = {
    body: {
      intent: CheckoutPaymentIntent.Capture,  // El valor está bien, ya que Capture es uno de los valores permitidos
      applicationContext: {
        returnUrl: returnUrl,
        cancelUrl: cancelUrl
      },
      purchaseUnits: [
        {
          amount: {
            currencyCode: 'USD',  // Moneda correcta, debe ser algo como USD, EUR, etc.
            value: req.body.total ,      // Valor de la compra debe tener formato adecuado (números decimales con 2 dígitos)
            breakdown: { itemTotal: { currencyCode: 'USD', value: req.body.total } },
          },
          items:req.body.items,
          description: "VENTA DEL DIA 24 DE DICIEMRBE"
        },
        
      ],
      paymentSource: { 
        paypal: {
          experienceContext: {
            landingPage: "GUEST_CHECKOUT"
          }
        }
      }
    },
    prefer: 'return=minimal',  // El valor debe ser return=minimal o return=representation
  };

  try {

    const { result, ...httpResponse } = await ordersController.ordersCreate(collect);
    if(result){
        return result
    }
    


  } catch (error) {
    console.log(error.statusCode)
    throw error
  }
};

module.exports = {
  CreateOrder,
  CaptureOrder

}


