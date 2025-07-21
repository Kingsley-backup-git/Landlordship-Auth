import React from "react";
import styles from "../../../../dashboard.module.css";
export default function ExpenseTrackingMobile() {
  const expenses = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
  ];
  return (
    <div className="sm:bg-[#F9F9FA] bg-white rounded-2xl p-4 sm:hidden flex flex-col sm:h-auto h-[290px] col-span-12 w-[100%]">
      <h1 className="font-semibold text-black text-sm">Expense tracking</h1>

      <div
        className={`overflow-y-auto flex flex-col gap-y-2 mt-4 ${styles.overflow}`}
      >
        {expenses.map((expense, index) => {
          return (
            <div
              key={index}
              className={`${index % 2 === 0 ? "bg-[#00000008]" : "bg-[#00000003]"} flex items-center px-3 py-2 gap-x-4 rounded-2xl`}
            >
              <div className="flex-1 text-black font-[400] text-sm">
                {expense.name}
              </div>
              <div className=" text-black font-[400] text-sm">
                {expense.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
