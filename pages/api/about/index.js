import About from "../../../models/About";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  dbConnect();
  const { method } = req;
  const { body } = req;
  if (method === "POST") {
    try {
      const about = await About.create(body);
      res.status(201).json(about);
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  }
  if (method === "GET") {
    try {
      const about = await About.find();
      res.status(200).json(about);
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  }
};

export default handler;
