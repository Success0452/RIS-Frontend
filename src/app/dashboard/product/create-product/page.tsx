'use client'
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {CreateProductActions} from "src/app/dashboard/product/create-product/components/action";
import {CreateProductFields} from "src/app/dashboard/product/create-product/components/fields";
import {CreateProductHeader} from "src/app/dashboard/product/create-product/components/header";
import {getAllCategories} from "src/server/category";

export default function CreateProductPage() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allProducts = await getAllCategories(setIsLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setCategories(allProducts?.data);
        }
    }

    useEffect(() => {
        getCategory();
    },[])

    return (
        <DashboardCustomHeader>
            <div className={'flex flex-col items-center justify-center w-full'}>
                <CreateProductHeader title={"Create Category"} />

                <CreateProductFields
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

                <CreateProductActions
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
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </div>
        </DashboardCustomHeader>
    )
}
