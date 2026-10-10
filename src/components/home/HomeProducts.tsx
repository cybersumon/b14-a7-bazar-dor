import AllProducts from "./AllProducts";
import ProductSection from "./ProductSection";
import { getProducts } from "@/lib/api";




export default async  function HomeProducts() {
const products = await getProducts();

const risers = products
.filter((product) => product.change.dir === "up")
.sort((a, b)  =>  b.change.pct - a.change.pct)
.slice(0, 6);

const fallers = products
.filter((product) => product.change.dir === "down")
.sort((a, b)  =>  b.change.pct - a.change.pct)
.slice(0, 6);

  return (

    <>
    
   
<ProductSection title="আজ দাম বেড়েছে ▲" products={risers} />
<ProductSection title="আজ দাম কমেছে ▼" products={fallers} />






    <AllProducts products={products}/>
    </>
  );
}