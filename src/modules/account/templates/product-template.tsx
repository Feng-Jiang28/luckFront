import {TableDemo} from "../components/product-overview"
import { PlusMini } from "@medusajs/icons"
import {Button} from "@medusajs/ui"
import { useEffect, useState } from 'react';
// Medusa JS Client way of Listing products
// import Medusa from "@medusajs/medusa-js"
// import {MEDUSA_BACKEND_URL} from "@lib/config";
// const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// medusa.products.list()
//     .then(({ products, limit, offset, count }) => {
//         console.log(products.length);});

const ProductsTemplate = () => {
    //const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //     setIsClient(true);
    // }, []);

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-2xl-semi">Products</h1>
                <p className="text-base-regular">
                    View all your published and unpublished products here.
                </p>
            </div>
            <div>
                <Button>
                Button <PlusMini/>
                </Button>
            </div>
            <div>
                <TableDemo />
            </div>
        </div>
    )
}

export default ProductsTemplate
