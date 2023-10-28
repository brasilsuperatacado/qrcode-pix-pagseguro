import { Request, Response } from "express";
import axios from "axios";

const endpoint = process.env.PAGSEGURO_ENDPOINT;
const token = process.env.PAGSEGURO_ACCESS_TOKEN;

class PixController {
  async createOrder(req: Request, res: Response) {
    const new_order = req.body();

    try {
      const response = await axios.post(endpoint, new_order, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        httpsAgent: new (require("https").Agent)({
          ca: require("ssl-root-cas").create(),
        }),
      });

      const data = response.data;

      if (data) {
        const qrCodeUrl = data.qr_codes[0].links[0].href;
        res.send(`<img src="${qrCodeUrl}" alt="">`);
      } else {
        res.status(500).send("Error in response from PagSeguro");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred while creating the order");
    }
  }
}
export default PixController;
