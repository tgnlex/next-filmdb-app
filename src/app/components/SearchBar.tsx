import {ChangeEvent, FormEvent, useState} from 'react';

interface SearchBarProps {
  onSearch: (query:string) => void;
}

const SearchBar = ({onSearch} : SearchBarProps) => {
  const [query,setQuery] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
 }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-screen max-w-3xl">
      <input 
        type='text' 
        className="border border-gray-300 rounded-xl py-2 px-4 w-full m-3 focus:outline-none focus:border-green-500" 
        value={query}
        onChange={handleChange}
      />
      <button 
        type="submit"
        className='bg-blue-500 text-white py-2 px-6 rounded-3xl m-3 hover:font-extrabold hover:bg-green-400 focus:outline-none active:rounded-2xl active:bg-green-800' >
            Search
      </button>    
     
    </form>
  )
}

export default SearchBar;