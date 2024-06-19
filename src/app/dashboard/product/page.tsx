"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {ProductTopItem} from "src/app/dashboard/product/components/product-top-item";
import {ProductListItem} from "src/app/dashboard/product/components/product-list-item";
import {SearchItem} from "src/app/dashboard/components/search-item";
import {getCategorizedProducts, searchProductsByName} from "src/server/product";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";
import {EmptyState} from "src/app/dashboard/components/empty-state";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getProducts = async() => {
        const allProducts = await getCategorizedProducts(setIsLoading);
        console.log(allProducts, 'all');
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setProducts(allProducts?.data);
            // @ts-ignore
            setFilteredList(allProducts?.data);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(products);
        }else {
            const filteredProducts = searchProductsByName(products, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <DashboardCustomHeader>
            {isLoading ?
                <div className={'flex flex-col items-center justify-center w-full h-full'}>
                    <Lottie options={defaultOptions} width={100} height={50}/>
                </div> :
                <>
                 <ProductTopItem/>

                 <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterProduct={filterProduct}/>

                    {filteredList.length === 0 ? <EmptyState message="No products found."/> :
                        <ProductListItem filteredList={filteredList} setIsLoading={setIsLoading}/>}
             </>}
        </DashboardCustomHeader>
    )
}
