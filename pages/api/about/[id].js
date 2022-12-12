import dbConnect from "../../../util/dbConnect";
import About from "../../../models/About";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;
  const { body } = req;

  if (method === "PUT") {
    try {
      const updatedAbout = await About.findByIdAndUpdate(id, body, {
        new: true,
      });
      res.status(200).json({ success: true, data: updatedAbout });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  }
};

export default handler;
