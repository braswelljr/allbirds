import React from "react";

const Topper = () => {
  const topper = `Giving light can still be your thing. Order before 12/16 for holiday
  delivery.`;
  return (
    <div className="px-4 py-3 text-center text-white bg-gray-500">
      <div className="">
        <p className="text-xs font-semibold">{topper}</p>
      </div>
    </div>
  );
};

export default Topper;
