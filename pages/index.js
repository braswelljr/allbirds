import Head from "next/head";
import Topper from "../components/Topper";
import Navbar from "../components/Navbar";
import { categories, types, products } from "../data/data";
import CategoryMenu from "../components/CategoryMenu";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const appname = "allbirds";

  return (
    <div className="font-mulish">
      <Head>
        <title>{appname}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topper />
      <Navbar />
      <main className="">
        <div className="">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <div className="space-x-1 text-xs font-bold text-gray-900">
                <a href="#" className="text-base underline">
                  Home
                </a>
                <span>/</span>
              </div>
              {types.map((type, index) => {
                if (index === 0) {
                  return (
                    <div
                      className="text-lg font-bold text-gray-900 md:text-xl"
                      key={index}
                    >
                      {type}
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex">
              <button className="h-6 v-6 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6 transform rotate-90"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-3 overflow-x-auto bg-gray-100 scrollbars-hidden">
            <CategoryMenu categories={categories} />
          </div>
        </div>
        <div className="px-8 py-12 space-y-14 md:px-12">
          {products.map((product, index) => (
            <div className="" key={index}>
              <div className="">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-800">{product.description}</p>
              </div>
              <div className="mt-4 md:grid md:grid-cols-2 md:gap-6">
                <ProductCard product={product} />
                <div className="hidden md:block">
                  <div className="relative w-full h-full">
                    <img
                      src={product.preview.image}
                      alt={product.preview.description}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 opacity-95 top-1/2 bg-gradient-to-t from-gray-900">
                        <div className="absolute inset-x-0 bottom-0">
                          <p className="px-6 pb-6 text-lg font-bold text-white capitalize">
                            {product.preview.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
