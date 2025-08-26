import React, { useState } from "react";

const Checkout = () => {
  const [payment, setPayment] = useState("bank");

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl bg-white shadow-lg p-8 rounded-xl">
        
        {/* Billing details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border rounded-md p-3 w-full col-span-2"
            />
            <select className="border rounded-md p-3 w-full col-span-2">
              <option>Sri Lanka</option>
              <option>India</option>
              <option>Pakistan</option>
              <option>Bangladesh</option>
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="border rounded-md p-3 w-full col-span-2"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border rounded-md p-3 w-full col-span-2"
            />
            <select className="border rounded-md p-3 w-full col-span-2">
              <option>Western Province</option>
              <option>Central Province</option>
              <option>Northern Province</option>
            </select>
            <input
              type="text"
              placeholder="ZIP code"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border rounded-md p-3 w-full col-span-2"
            />
            <textarea
              placeholder="Additional information"
              className="border rounded-md p-3 w-full col-span-2 h-24"
            />
          </form>
        </div>

        {/* Order details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Product</h2>
          <div className="flex justify-between border-b pb-2 mb-2">
            <p>Asgard sofa × 1</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-6">
            <p>Total</p>
            <p className="text-yellow-600">Rs. 250,000.00</p>
          </div>

          {/* Payment options */}
          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-2">
              <input
                type="radio"
                name="payment"
                checked={payment === "bank"}
                onChange={() => setPayment("bank")}
              />
              <span>
                <strong>Direct Bank Transfer</strong>
                <p className="text-sm text-gray-500">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
              />
              <span>Cash On Delivery</span>
            </label>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-blue-500 underline">
              privacy policy
            </a>
            .
          </p>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
