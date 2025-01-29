const { CreateOrder, CaptureOrder } = require("../models/paypal.modele")
const {confirmSales} = require("./controllerSale")
const createOrders = async (req, res, next) => {
  try {
    const order = await CreateOrder(req)
    if (!order) {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR"
      })
    }

    res.status(200).json({
      message: "SE CREO LA ORDEN DE PAGO",
      body: order
    })

  } catch (error) {
    next(error)
  }

}

const captureOrders = async (req, res, next) => {

  const orderId = req.params.id
  const saleId = req.body.saleId
  console.log("venta id:" + saleId)
 
  try {
    const capture = await CaptureOrder(orderId)
    if (!capture) {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR"
      })
    }
    // STATUS
    const status = capture.status
    console.log("status:" + status)
    //  UPDATE SALE STATUS

     const confirm =await confirmSales(saleId, status)
    console.log(confirm)
    res.status(200).json({
      message: "SE CAPTURE EL PAGO",
      body: capture
    })


  } catch (error) {
    next(error)
  }

}

module.exports = { createOrders, captureOrders }
