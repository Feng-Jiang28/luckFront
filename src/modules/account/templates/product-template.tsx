import ProductOverview from "../components/product-overview"

const ProductsTemplate = () => {
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
