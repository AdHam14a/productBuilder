
import { txtSlicer } from "../../functions/Functions";
import { IProduct } from "../../interfaces/interfaces";
import Button from "./UI/Button";

interface IProps{
  product:IProduct
}

const ProductCard = ({product}:IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-1 p-3 m-2 border rounded-xl">
      <img src={product.imageURL} alt="product" className="rounded-2xl w-full h-46 object-cover" />
      <h3 className="text-2xl font-bold mt-4">{txtSlicer(product.title,18)}</h3>
      <p>
        {txtSlicer(product.description)}
      </p>
      <div className="flex space-x-2 my-4">
        <span className="w-5 h-5 bg-amber-300 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-cyan-800 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-orange-800 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold font-serif">500$</span>
        <img src={product.category.imageURL} alt={product.category.name} className="rounded-full w-10 h-10 cursor-pointer object-contain"/>
      </div>
      <div className="flex justify-between mt-5 space-x-1">
        <Button className=" bg-green-800 " width="w-full">Edit</Button>
        <Button className=" bg-red-800" width="w-full">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
