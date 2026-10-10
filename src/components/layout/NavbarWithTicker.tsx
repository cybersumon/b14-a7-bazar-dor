import Navbar from "@/components/layout/Navbar";
import { getProducts } from "@/lib/api";

export default async function avbarWithTicker() {
     const products = await getProducts();
 
     return <Navbar products={products} />

}