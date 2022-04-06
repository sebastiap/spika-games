import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    total:0
});

function FavoritesContextProvider(props)  {
const [userFavorites,setUserFavorites] = useState([])
    const context = {
        favorites:userFavorites,
        total:userFavorites.length
    };

    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider