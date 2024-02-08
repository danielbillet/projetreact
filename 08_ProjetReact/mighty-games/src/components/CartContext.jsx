import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {

const initialState = {
    items: [],
    total: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART' :
            const existingGameIndex = state.items.findIndex((item => item.nomJeu === action.payload.nomJeu))
            console.log(state.total)

            if (existingGameIndex !== -1) {
                const updatedItems = [...state.items]
                updatedItems[existingGameIndex].quantite ++
                const updatedTotal = updatedItems.reduce((acc, item) => acc + item.prixJeu * item.quantite, 0)
 

            return {
                ...state,
                items: updatedItems,
                total: updatedTotal
            }
            
            } else {

                return {
                    ...state,                
                    items: [...state.items, {...action.payload,quantite : 1}],
                    total: state.total + action.payload.prixJeu
                }
            }
            case 'UPDATE_STOCK':
                const { nomJeu, updatedStock } = action.payload
   
        return {
          ...state,
          items: state.items.map((item) =>
            item.nomJeu === nomJeu ? { ...item, stock: updatedStock } : item
          )

        }
            default:
                return state
            }           
}
    const [cartState,dispatch] = useReducer(reducer,initialState)

    const ajouterAuPanier = (jeu) => {
        dispatch({ type: 'ADD_TO_CART', payload: jeu });
      };
    
      const updateStock = (nomJeu, updatedStock) => {
        dispatch({ type: 'UPDATE_STOCK', payload: { nomJeu, updatedStock } });
      };
    
      return (
        <CartContext.Provider value={{ cartState, ajouterAuPanier, updateStock }}>
          {children}
        </CartContext.Provider>
      );
    };

export const useCart = () => {
    return useContext(CartContext)
}