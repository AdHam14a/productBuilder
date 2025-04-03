import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { productList } from "./Products/Products";

function App() {
  const products = productList.map((product)=><ProductCard product={product}/>)
  return (
    <>
      <div className="container mx-auto m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products}
      </div>
    </>
  );
}

export default App;
