import React, { FC, ChangeEvent } from "react";

interface SelectFieldProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    height?: number;
    list?: any,
    optionId?: boolean;
}

export const SelectBox: FC<SelectFieldProps> = ({ value, setValue, placeholder, height, list, optionId }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="w-full flex flex-row items-center">
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // className="w-full h-[36px] border-[1px] border-[#DBDADE] rounded-[8px] p-2 bg-transparent"
                className="border-[1px] border-gray-500 text-black rounded-[8px] w-full p-4"
                style={{height: height ? `${height}px` : 'auto', padding: '10px'}}
            >
                {list.map((option: any, index: number) => (
                    <option key={index} value={optionId ? option.id : option}>
                        {optionId ? option?.name : option}
                    </option>
                ))}
            </select>
        </div>
    );
};
