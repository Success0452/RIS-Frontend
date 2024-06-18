'use client'
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {UpdateProductHeader} from "src/app/dashboard/product/update-product/components/header";
import {UpdateProductFields} from "src/app/dashboard/product/update-product/components/fields";
import {UpdateProductActions} from "src/app/dashboard/product/update-product/components/action";
import {getSingleProduct} from "src/server/product";
import {getAllCategories} from "src/server/category";

export default function UpdateProductPage() {
    const { product } = useParams();
    const [productName, setProductName] = useState('');
    const [productObject, setProductObject] = useState({});
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(false);

    const getCategory = async() => {
        const allProducts = await getAllCategories(setCategoryLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setCategories(allProducts?.data);
        }
    }

    const getProduct = async() => {
        console.log(product);
        const singleResponse = await getSingleProduct(product[0], setIsLoading);
        if(singleResponse.statusCode === 200){
            //@ts-ignore
            const productResponse = singleResponse?.data;
            setQuantity(productResponse?.quantity);
            setProductDescription(productResponse?.description);
            setProductName(productResponse?.name);
            setPrice(productResponse?.price);
            setProductObject(productResponse)
        }
    }

    useEffect(() => {
        getProduct();
        getCategory();
    },[])

    return (
        <DashboardCustomHeader>
            <div className={'flex flex-col items-center justify-center w-full'}>
                <UpdateProductHeader title={"Update Category"} />

                <UpdateProductFields
                    productName={productName}
                    setProductName={setProductName}
                    productDescription={productDescription}
                    setProductDescription={setProductDescription}
                    price={price}
                    quantity={quantity}
                    categoryType={categoryType}
                    setCategoryType={setCategoryType}
                    setQuantity={setQuantity}
                    setPrice={setPrice}
                    categories={categories}
                />

                <UpdateProductActions
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    productName={productName}
                    setProductName={setProductName}
                    productDescription={productDescription}
                    setProductDescription={setProductDescription}
                    price={price}
                    quantity={quantity}
                    categoryType={categoryType}
                    setCategoryType={setCategoryType}
                    setQuantity={setQuantity}
                    setPrice={setPrice}
                    productId={product[0]}
                />
            </div>
        </DashboardCustomHeader>
    )
}
