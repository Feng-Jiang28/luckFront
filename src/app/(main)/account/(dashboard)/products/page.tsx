import ProductsTemplate from "@modules/account/templates/product-template"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Products",
    description: "Overview of your products..",
}

export default function Products() {
    return <ProductsTemplate />
}
