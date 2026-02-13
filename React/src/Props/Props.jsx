function Card(props) {
    // console.log(props)
  return (
    <div className="w-[300px] rounded-3xl bg-white shadow-xl overflow-hidden">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={props.img}
          alt="Ice Cream"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-black">{props.title}</h2>
       

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur.
        </p>


        {/* Price & Button */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-yellow-600">$10.00</p>
    
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}




export default Card;
