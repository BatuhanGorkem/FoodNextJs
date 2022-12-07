import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const category = await Category.findById(id);
        if (!category) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: category });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: "DELETED" });
      } catch (error) {}
  }
};
export default handler;
