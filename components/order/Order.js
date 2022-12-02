import React from "react";

const Order = () => {
  return (
    <div class="overflow-x-auto relative basis-2/3 ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Products
            </th>
            <th scope="col" class="py-3 px-6">
              Extras
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Quantity
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
            <td class="py-4 px-6">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
