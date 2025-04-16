import ProductList from "../../component/tables/Allproducts"

const Products = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Products
        </h1>
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          </div>
          <input
            type="text"
            placeholder="Search product name"
            className="block w-full md:w-72 pl-3 pr-3 py-2 border border-gray-200 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 bg-white"
          />
        </div>
      </div>
      <ProductList />
    </div>
  )
}

export default Products