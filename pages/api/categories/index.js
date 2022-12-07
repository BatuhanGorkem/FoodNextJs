import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  try {
    if (method === "GET") {
      const categories = await Category.find();
      res.status(200).json(categories);
    }
  } catch (error) {
    console.log(error);
  }

  try {
    if (method === "POST") {
      const { body } = req;
      const newCategory = await Category.create(body);
      res.status(201).json(newCategory);
    }
  } catch (error) {
    console.log(error);
  }
};
export default handler;
