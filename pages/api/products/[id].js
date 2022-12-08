import Product from "../../../models/Product";
import dbConnect from "../../../util/dbConnect";
const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
    }
  }

  if (method === "DELETE") {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      res.status(200).json(deletedProduct);
    } catch (err) {
      console.log(err);
    }
  }
};
export default handler;
