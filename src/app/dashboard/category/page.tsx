"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {StaticCustomButton} from "src/components/button";
import Image from "next/image";
import {useEffect, useState} from "react";
import {TextBox} from "src/components/field";
import {SideMenuHeader} from "src/app/dashboard/components/sidemenu-header";
import {CategoryListItem} from "src/app/dashboard/category/components/category-list-item";
import {SearchItem} from "src/app/dashboard/components/search-item";
import {CategoryTopItem} from "src/app/dashboard/category/components/category-top-item";
import {getCategorizedProducts, searchProducts} from "src/server/product";
import {getAllCategories} from "src/server/category";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allProducts = await getAllCategories(setIsLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setCategories(allProducts?.data);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(categories);
        }else {
            const filteredProducts = searchProducts(categories, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <DashboardCustomHeader>
            {isLoading ? <div className={'flex flex-col items-center justify-center w-full h-full'}>
                <Lottie options={defaultOptions} width={100} height={50}/>
            </div> : <>
                <CategoryTopItem/>

                <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterProduct={filterProduct}/>

                <CategoryListItem filteredList={filteredList} setIsLoading={setIsLoading}/>
            </>}
        </DashboardCustomHeader>
    )
}
