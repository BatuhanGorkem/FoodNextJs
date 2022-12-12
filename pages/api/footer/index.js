import Footer from "../../../models/Footer";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const footer = await Footer.find({});
        res.status(200).json(footer);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newfooter = await Footer.create(req.body);
        res.status(201).json(newfooter);
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
