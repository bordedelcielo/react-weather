import { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider=({children}) =>{
    const [myVar, setMyVar] = useState(['item1'])
    const values={
        myList,
        setMyList
    }
}