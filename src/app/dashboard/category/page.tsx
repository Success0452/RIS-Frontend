"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {CategoryListItem} from "src/app/dashboard/category/components/category-list-item";
import {SearchItem} from "src/app/dashboard/components/search-item";
import {CategoryTopItem} from "src/app/dashboard/category/components/category-top-item";
import {searchCategoryByName, searchProducts} from "src/server/product";
import {getAllCategories} from "src/server/category";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";
import {EmptyState} from "src/app/dashboard/components/empty-state";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allCategories = await getAllCategories(setIsLoading);
        if(allCategories?.statusCode === 200){
            // @ts-ignore
            const category = allCategories?.data;
            setCategories(category);
            setFilteredList(category);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(categories);
        }else {
            const filteredProducts = searchCategoryByName(categories, search);
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

                {filteredList.length === 0 ? <EmptyState message="No categories found."/> :
                    <CategoryListItem filteredList={filteredList} setIsLoading={setIsLoading}/>}
            </>}
        </DashboardCustomHeader>
    )
}
