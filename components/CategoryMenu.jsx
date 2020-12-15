import React from "react";

const Menu = ({ categories }) => {
  return (
    <div className="inline-flex px-8 space-x-5 text-sm md:px-12">
      {categories.map((category, index) => {
        if (index === 1) {
          return category.map((type, index) => (
            <a href="#" key={index} className="text-gray-800 whitespace-nowrap">
              {type}
            </a>
          ));
        }
      })}
    </div>
  );
};

export default Menu;
