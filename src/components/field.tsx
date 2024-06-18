import React, { FC, ChangeEvent } from "react";

interface TextFieldProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    height?: number;
    isTextarea?: boolean;
    inputType?: string;
}

export const TextBox: FC<TextFieldProps> = ({ value, setValue, placeholder, height, isTextarea, inputType }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="w-full flex flex-row items-center">
            {!isTextarea ? (
                <input
                    type={inputType ?? 'text'}
                    value={value}
                    onChange={handleChange}
                    className="border-[1px] border-gray-500 text-black rounded-[8px] w-full p-4"
                    style={{ height: height ? `${height}px` : 'auto', padding: '10px' }}
                    placeholder={placeholder}
                />
            ) : (
                <textarea
                    value={value}
                    onChange={handleChange}
                    className="border-[1px] border-gray-500 text-black rounded-[8px] w-full p-4"
                    style={{ height: height ? `${height}px` : 'auto', padding: '10px' }}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};
