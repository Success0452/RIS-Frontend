"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {ProductTopItem} from "src/app/dashboard/product/components/product-top-item";
import {ProductListItem} from "src/app/dashboard/product/components/product-list-item";
import {SearchItem} from "src/app/dashboard/components/search-item";
import {getAllCategories} from "src/server/category";
import {getAllProducts, getCategorizedProducts, searchProducts} from "src/server/product";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getProducts = async() => {
        const allProducts = await getCategorizedProducts(setIsLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setProducts(allProducts?.data);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(products);
        }else {
            const filteredProducts = searchProducts(products, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    const refreshList = () => {
        setFilteredList(products);
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

                 <ProductListItem filteredList={filteredList} setIsLoading={setIsLoading} refreshList={refreshList}/>
             </>}
        </DashboardCustomHeader>
    )
}
