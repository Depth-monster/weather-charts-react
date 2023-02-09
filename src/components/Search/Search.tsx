import React, { useState } from 'react'
interface Props {
    setCity:(city:string)=>void;
}

const Search: React.FC<Props> = ({setCity}) => {

    const [value, setValue] = useState<string>('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(value);
        setValue('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleChange} />
            <button>search</button>
        </form>
    )
}
export default Search