import React from "react";

const Card = ({ product }) => {
  return (
    <div className="shadow-xl">
      <div className="shadow-lg">
        <a href="#" className="">
          <div className="w-full">
            <img className="w-full" src={product.styles[0].image} alt="" />
          </div>
          <div className="px-4 pt-3">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <p className="mt-2 text-sm font-light text-gray-800">
              {product.styles[0].name}
            </p>
          </div>
        </a>
        <div className="px-4 pb-4 mt-3">
          <p className="text-sm font-light text-gray-800">
            {product.styles[0].price}
          </p>
          <div className="flex items-center justify-between mt-3 space-x-6 md:space-x-2">
            {product.styles.slice(0, 5).map((style, index) => (
              <span className="md:flex md:flex-1 md:min-w-0" key={index}>
                <button
                  className={`flex flex-col w-6 h-6 overflow-hidden border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none ${
                    index === 0
                      ? `ring-2 ring-offset-1 ring-gray-300 md:ring-0`
                      : ``
                  } md:rounded-none md:w-full md:aspect-w-1 md:aspect-h-1 md:h-full`}
                >
                  <span className="sr-only">{style.name}</span>
                  <span className="flex flex-col transform -rotate-45 md:hidden">
                    <span
                      className="w-6 h-3 font-medium"
                      style={{ backgroundColor: style.colors[0] }}
                    ></span>
                    <span
                      className="w-6 h-3 font-medium"
                      style={{ backgroundColor: style.colors[1] }}
                    ></span>
                  </span>
                  <span className="hidden md:flex md:h-full md:w-full">
                    <img className="" src={style.image} alt="" />
                    <span
                      className={`absolute inset-0 ${
                        index === 0
                          ? `md:ring-1 md:ring-inset md:ring-offset-0 md:ring-gray-300`
                          : ``
                      }`}
                    ></span>
                  </span>
                </button>
              </span>
            ))}
            <span className="md:flex md:flex-1 md:min-w-0">
              <button
                type="button"
                className="flex items-center justify-center w-6 h-6 text-gray-800 border rounded-full hover:border-gray-400 md:rounded-none md:w-full md:h-full md:aspect-w-1 md:aspect-h-1"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
        <div className="border-t">
          <button className="flex justify-between w-full px-4 py-3 text-sm focus:outline-none">
            <span className="font-bold">Quick Add</span>
            <span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
