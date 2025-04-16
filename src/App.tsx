import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "./components/ProductCard/UI/Modal";
import { formInputsList, productList } from "./Products/Products";
import Button from "./components/ProductCard/UI/Button";
import Input from "./components/ProductCard/UI/Input";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    console.log("Opening Modal");
    setIsOpen(true);
  }

  function closeModal() {
    console.log("Closing Modal");
    setIsOpen(false);
  }

  const products = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div>
        <Button
          className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium cursor-pointer"
          onClick={openModal}
          width="w-fit"
        >
          Build a Product
        </Button>
        <div className="container mx-auto m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Are you sure ?">
          <div className="flex flex-col items-center space-y-4 w-full">
            {
              <div className="space-y-4 w-full">
                {formInputsList.map((input, index) => (
                  <div className="flex flex-col" key={index}>
                    <label className="text-sm font-medium mb-1" htmlFor={input.id}>
                      {input.label}
                    </label>
                    <Input type="text" id={input.id} name={input.name} className="border-1 border-gray-700 focus:outline-none p-3 focus:ring-4 rounded-md focus:ring-blue-900 shadow-md"/>
                  </div>
                ))}
              </div>
            }
            <Button
              className="bg-blue-800 hover:bg-blue-950 flex-1 h-10 flex items-center justify-center "
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
