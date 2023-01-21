import React, { useState } from "react"

export function CreateProduct() {
    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
       setValue((event.target as HTMLInputElement).value)
    }

    return (
        <form action="/" className="" onSubmit={submitHandler}>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                onKeyDown={changeHandler}
            />
            <button className="py-2 px-4 border bg-yellow-400 hover:text-white" type="submit">Create</button>
        </form>
    )
}