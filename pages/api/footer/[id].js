import Footer from "../../../models/Footer";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    try {
      const footer = await Footer.findById(id);
      res.status(200).json(footer);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  if (method === "PUT") {
    try {
      const footer = await Footer.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(footer);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
