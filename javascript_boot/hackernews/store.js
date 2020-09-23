function createStore(reducer){
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        }//whatever action we provide and pass it on to the reducer
    }
}

const initialState = { //deafault parameter mentioned in the function
    favorites: []
}

function favoritesReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_FAVORITE':{
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite];
            return {favorites};
    }
        case 'REMOVE_FAVORITE':{
            const remvoeFav = action.payload.favorite;
            state.favorites.filter(favorite => favorite.id !== remvoeFav.id);
            return {favorite}
        }
            default:
                return state;

    }
}

const action = {type: 'ADD_FAVORITE', payload: {favorite: 'story1', id:1}}

const store = createStore(favoritesReducer);
store.dispatch(action);
console.log(store.getState())

export default store;