import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this product?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status === 200) {
          toast.success("Product Deleted!");
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getProducts = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex px-20 gap-20 ">
      <div class="overflow-x-auto relative basis-2/3 ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                TITLE
              </th>
              <th scope="col" class="py-3 px-6">
                PRICE
              </th>
              <th scope="col" class="py-3 px-6">
                ACTİON
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => (
                <tr
                  key={item._id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all "
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item._id.substring(0, 7)}...
                  </th>
                  <td class="py-4 px-6">{item.category}</td>
                  <td class="py-4 px-6">{item.prices}</td>
                  <td class="py-4 px-6">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-400 text-white px-2 rounded-lg py-1 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
