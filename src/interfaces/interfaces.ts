import { ButtonHTMLAttributes, ReactNode } from "react";

export type ProductNameTypes = "title" | "description" | "imageURL" | "price";

export interface IProduct {
  id: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: { name: string; imageURL: string };
}


export interface IFormInput {
    id: string;
    name: ProductNameTypes;
    label: string;
    type: string;
  }
  
  export interface ICategory {
    id: string;
    name: string;
    imageURL: string;
  }


  export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className: string,
    children: ReactNode,
    width?: "w-full" | "w-fit",
    [key: string]: any;
}