import { useState } from "react";

  const PRODUCTS = [
  { id: 1, name: "Banana", price: 10},
  { id: 2, name: "Apple", price: 20},
  { id: 3, name: "Orange", price: 15},
  { id: 4, name: "Mango", price: 25},
  { id: 5, name: "Grapes", price: 30},
  { id: 6, name: "Pineapple", price: 35},
];

function Shoppingcart() {
  const [items, setItems] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem])
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const itemCount = items.length;

  function updateShowCart() {
    return setIsOpen(!isOpen);
  }

  const updateShowCartWithArrow = () => {
    return setIsOpen(!isOpen);
  }

  return (
    <div className="max-w-lg bg-yellow-50 mx-auto my-20 px-6">
      <div className="flex text-2xl text-yellow-900 py-1 m-5 pt-4" >
         <h3>TiGirl's Shop</h3>
      </div>

      <div className="flex flex-col ">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex justify-between items-center mb-4 px-4 gap-6 border border-gray-200">

            <span className="text-black">
              {product.name} - ${product.price.toFixed(2)}
            </span>
            <button onClick={() => addItem({...product, cartId: Date.now() })} className="bg-yellow-900 rounded text-white hover:bg-yellow-600 px-4 py-1 cursor-pointer">
              Add
            </button>
          </div> 
        ))}
      </div>
      {/*   CARTBTOGGLE BUTTON*/} 
      <button onClick={() =>setIsOpen(!isOpen)}
         className="w-full py-3 bg-yellow-900 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer mb-3">

          {isOpen ? "Hide Cart" : `Show Cart (${itemCount})`}
      </button>

                {isOpen && (
            <div>
              <h3 className="text-black">Your Cart</h3>
              {items.length === 0 ? (
                <p>Your Cart is empty. Add something</p>
              ) : (
                <>
                <ul>
                  {items.map(item => (
                    <li key ={item.cartId}
                    className="flex justify-between border border-gray-200 p-2">
                      <span className="flex text-black"> 
                        {item.name} - ${item.price.toFixed(2)}
                      </span>
                      <button className="text-red-500 bg-black p-1 px-4"
                      onClick={() => removeItem(item.id)}>
                        X
                      </button>
                    </li>
                  ))}
                </ul>

                <p className="text-black text-bold p-2">
                  Total: ${totalPrice.toFixed(2)}
                </p>
                </>
              )}
            </div>
          )}
    </div>
  );
}

export default Shoppingcart;