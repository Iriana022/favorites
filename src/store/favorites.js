import { configureStore, createSlice } from "@reduxjs/toolkit"
let id = 6
const favoris = [
    {
        id: 1,
        nom: 'Le retour de Jeday',
        category: 'Film'
    },
    {
        id: 2,
        nom: 'Harry potter',
        category: 'Livre'
    },
    {
        id: 3,
        nom: 'Core i7 12500F',
        category: 'High-Tech'
    },
     {
        id: 5,
        nom: 'Samsung S23 Ultra 5G',
        category: 'High-Tech'
    },
    {
        id: 4,
        nom: 'Star Wars XI',
        category : 'Film'
    },
    {
        id: 6,
        nom: 'Inter Stellar',
        category: 'Film'
    },
]

export const favoriteSlice = createSlice({
    name: 'favoris',
    initialState: favoris,
    reducers: {
        addFavorite: (state, action) => {
            state.push({
                id : ++id,
                ...action.payload
            })       
        },
        deleteFavorite: (state, action) => {
            return state.filter( s => (s.id !== action.payload.id) )
        },
        editFavorite: (state, action) => {
            const fav = state.find(s => s.id === action.payload.id)
            fav.nom = action.payload.newNom
        }
    }
})

export const {addFavorite, deleteFavorite, editFavorite} = favoriteSlice.actions

export const store = configureStore({ reducer: {
    favorites: favoriteSlice.reducer
} })