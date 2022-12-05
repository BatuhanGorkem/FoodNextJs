import React from "react";

const Order = () => {
  return (
    <div className="flex px-20 gap-20 ">
      <div class="overflow-x-auto relative basis-2/3 ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                PRODUCT ID
              </th>
              <th scope="col" class="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" class="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" class="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" class="py-3 px-6">
                STATUS
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
                63598
              </th>
              <td class="py-4 px-6">Batuhan Görkem</td>
              <td class="py-4 px-6">$20</td>
              <td class="py-4 px-6">Cash</td>
              <td class="py-4 px-6">preparing</td>
              <td class="py-4 px-6">
                <button className="bg-red-400 text-white px-2 rounded-lg py-1 ">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
