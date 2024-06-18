"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useState} from "react";
import {TopItem} from "src/app/dashboard/components/top-item";
import {DashFilter} from "src/app/dashboard/components/dash-filter";
import {ListItem} from "src/app/dashboard/components/list-item";
import {getAllProducts, searchProducts} from "src/server/product";
import {defaultOptions} from "src/components/default-option";
import Lottie from "react-lottie";
import {getAllCategories} from "src/server/category";

export default function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allCategories = await getAllCategories(setIsLoading);
        if (allCategories.statusCode === 200) {
            setCategories(allCategories);
        }
    }

    const getProducts = async() => {
        const allProducts = await getAllProducts(setCategoryLoading);
        const user = localStorage.getItem('username')
        if(allProducts.statusCode === 200){
            //@ts-ignore
            setProducts(allProducts.data);
        }
        setUsername(user!);
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(products);
        }else{
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
        getCategory();
    }, [])

    return (
        <DashboardCustomHeader>
            {isLoading ?
                <div className={'flex flex-col items-center justify-center w-full h-full'}>
                    <Lottie options={defaultOptions} width={100} height={50}/>
                </div> :
                <>
                <TopItem username={username} />

                <DashFilter searchTerm={searchTerm} setSearchTerm={filterProduct} categories={categories} />

                <ListItem products={filteredList} setIsLoading={setIsLoading} refreshList={refreshList} />
               </>
            }
        </DashboardCustomHeader>
    );
}
