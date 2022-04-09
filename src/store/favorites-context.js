import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    total:0,
    // Agrego estas funciones unicamente para ayudar el autocompletado
    addFavorite:(favoriteItem) => {},
    removeFavorite:(itemID) => {},
    isFavorite:(itemID) => {}
});

export function FavoritesContextProvider(props)  {
const [userFavorites,setUserFavorites] = useState([])

function addFavoriteHandler(favoriteItem) {
    // Como la actualizacion de useState no es automatica, necesito pasarle una funcion y no un valor para asegurar que 
    // actualize con los valores previos del array. De otra forma setUserFavorites puede que se ejecute en otro momento con otro estado
    // Sabemos que useState es rapido pero no necesariamente corre cuando lo ejecuto, a menos que le pase una funcion 
    setUserFavorites((prevUserfavorites) => {
        return prevUserfavorites.concat(favoriteItem)
    })
}
function removeFavoriteHandler(favoriteId) {
    //Idem, para asegurar el estado actual del state, le paso una funcion.
    setUserFavorites((prevUserfavorites) => {
    return prevUserfavorites.filter(Item => Item.id !== favoriteId)
        }
    )
}
function itemIsFavoriteHandler(favoriteId) {
    return userFavorites.some(Item => Item.id === favoriteId);
}
    const context = {
        favorites:userFavorites,
        total:userFavorites.length,

        // No solo debo manejar variables y valores sino funciones para que utilizen otros componentes
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        isFavorite:itemIsFavoriteHandler
    };
return(
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    )
}
// exporto por defecto el contexto y ademas exporto la funcion de manipulacion con su propio nombre : FavoritesContextProvider
export default FavoritesContext