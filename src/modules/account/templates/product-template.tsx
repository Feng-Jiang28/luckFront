import ProductOverview from "../components/product-overview"
//import { useProducts } from "medusa-react"
// Medusa JS Client way of Listing products


// import Medusa from "@medusajs/medusa-js"
// import {MEDUSA_BACKEND_URL} from "@lib/config";
// const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// medusa.products.list()
//     .then(({ products, limit, offset, count }) => {
//         console.log(products.length);});




const ProductsTemplate = () => {
    //const { products, isLoading } = useProducts()

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-2xl-semi">Products</h1>
                <p className="text-base-regular">
                    View all your published products here.
                </p>
            </div>
            <div>
                <ProductOverview />
            </div>
        </div>
    )
}

export default ProductsTemplate
