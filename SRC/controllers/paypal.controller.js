const{ CreateOrder, CaptureOrder} = require("../models/paypal.modele")

const createOrders = async(req, res, next) => {
  try {
    const order = await CreateOrder(req)
    if(!order) {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR"
      })
    }

    res.status(200).json({
      message:"SE CREO LA ORDEN DE PAGO",
      body: order
    })
    
  } catch (error) {
    next(error)   
  }

}

const captureOrders = async(req, res, next) => {

  const orderId = "6M4GHW9J89N8G"
  try {
    const order = await CaptureOrder(orderId)
    if(!order) {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR"
      })
    }

    res.status(200).json({
      message:"SE CAPTURE EL PAGO",
      body: capture
    })
    
  } catch (error) {
    next(error)   
  }

}

module.exports = {createOrders, captureOrders}
