'use client'
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {CreateCategoryHeader} from "src/app/dashboard/category/create-category/components/header";
import {CreateCategoryFields} from "src/app/dashboard/category/create-category/components/fields";
import {useState} from "react";
import {CreateCategoryActions} from "src/app/dashboard/category/create-category/components/action";

export default function CreateCategoryPage() {
    const [categoryName, setCategoryName] = useState('');
    return (
        <DashboardCustomHeader>
            <div className={'flex flex-col items-center justify-center w-full'}>
                <CreateCategoryHeader title={"Create Category"} />

                <CreateCategoryFields categoryName={categoryName} setCategoryName={setCategoryName} />

                <CreateCategoryActions name={categoryName} setName={setCategoryName} />
            </div>
        </DashboardCustomHeader>
    )
}
