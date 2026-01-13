function Product({ title, price }) {
  return (
    <div className="flex justify-center items-center ml-96 ">
      <div className="border rounded-lg p-6 shadow-md bg-white w-80 mb-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          Product: {title}
        </h2>

        <h3 className="text-lg text-green-600 font-medium text-center">
          Price: ${price}
        </h3>
      </div>
    </div>
  );
}

export { Product };
