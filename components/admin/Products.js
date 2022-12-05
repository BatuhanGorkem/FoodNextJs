const Products = () => {
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all ">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Good Pizza
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">$20</td>
              <td class="py-4 px-6">
                <button className="bg-red-400 text-white px-2 rounded-lg py-1 ">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
