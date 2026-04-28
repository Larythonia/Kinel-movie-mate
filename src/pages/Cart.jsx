import { useState } from "react";

// ============================================
// Product data — each fruit has an id, name, price, and image path
// NOTE: You have duplicate products in this array, remove the bottom 6
// ============================================
const PRODUCTS = [
  {id: 1, name: "Banana",    price: 10, Image: "src/Images/Fruits/bananas.png"},
  {id: 2, name: "Apple",     price: 20, Image: "src/Images/Fruits/apple.png"},
  {id: 3, name: "Orange",    price: 15, Image: "src/Images/Fruits/orange.png"},
  {id: 4, name: "Mango",     price: 25, Image: "src/Images/Fruits/mango.png"},
  {id: 5, name: "Grapes",    price: 30, Image: "src/Images/Fruits/grape.png"},
  {id: 6, name: "Pineapple", price: 35, Image: "src/Images/Fruits/pineapple.png"},
    {id: 1, name: "Banana",    price: 10, Image: "src/Images/Fruits/bananas.png"},
  {id: 2, name: "Apple",     price: 20, Image: "src/Images/Fruits/apple.png"},
  {id: 3, name: "Orange",    price: 15, Image: "src/Images/Fruits/orange.png"},
  {id: 4, name: "Mango",     price: 25, Image: "src/Images/Fruits/mango.png"},
  {id: 5, name: "Grapes",    price: 30, Image: "src/Images/Fruits/grape.png"},
  {id: 6, name: "Pineapple", price: 35, Image: "src/Images/Fruits/pineapple.png"},
]

function Cart() {

  // Stores the list of items added to the cart
  const [items, setItems] = useState([]);

  // Controls whether the cart is visible or hidden
  const [isOpen, setIsOpen] = useState(false);

  // Adds a new item to the cart
  // cartId uses Date.now() to give each item a unique id
  // even if the same product is added multiple times
  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem])
  };

  // Removes an item from the cart by its id
  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  // Calculates the total price of all items in the cart
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Counts the number of items in the cart
  const itemCount = items.length;

  return(
    <div className="w-h-full bg-black m-10">
      <h1 className="text-3xl font-bold text-left mt-10">Shopping Cart</h1>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-6 gap-2 my-10">
        {PRODUCTS.map((product) => (

          // Each product card
          <div className="flex flex-col items-start m-4" key={product.id}>
            <img className="w-30 h-30 rounded border-1 border-purple-300 p-3 mb-2"
              src={product.Image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>

            {/* Adds product to cart with a unique cartId */}
            <button className="w-fit bg-purple-700 text-white px-6 py-2 mt-3 rounded"
              onClick={() => addItem({...product, cartId: Date.now()})}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* ── Cart Section ── */}
      <div>

        {/* Toggles cart open/closed and shows item count */}
        <button className="w-full bg-purple-700 text-white px-6 py-2 mt-3 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Cart" : `Show Cart (${items.length})`}
        </button>

        {/* Cart content — only renders when isOpen is true */}
        {isOpen && (
          <div className="mt">

            {/* Shows empty message or list of cart items */}
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="flex flex-col gap-4 mt-6">
                <h2 className="text-left">Cart Items</h2>

                {/* Loop through each item in the cart */}
                {items.map((item) => (
                  <div className="flex justify-between items-center gap-6 border border-gray-300 p-3 rounded"
                    key={item.cartId}>
                    <img src={item.Image} alt={item.name} />
                    <div className="flex flex-col items-start gap-2 mr-5">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>

                      {/* Removes item from cart */}
                      <button className="bg-red-700 text-white px-5 py-1 rounded"
                        onClick={() => removeItem(item.id)}>X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Total price — only shows when cart is open */}
        <div className="flex justify-end">
          {isOpen && (
            <span className="mt-4 text-white px-6 py-2 rounded border-1">
              Total: ${totalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Submit button — only shows when cart is open */}
        {isOpen && (
          <button className="w-full mt-4 bg-purple-700 text-white px-6 py-2 rounded">
            Submit
          </button>
        )}

      </div>
    </div>
  );
}

export default Cart;