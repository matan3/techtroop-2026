
import { useReducer } from 'react';

const initialState = {
    items: [],
    total: 0,
    itemCount: 0
};


function shoppingCartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, { ...action.data, id: Date.now() }],
                total: state.total + action.data.price,
                itemCount: state.itemCount + 1
            };
        case 'REMOVE_ITEM':
            const itemToUpdate = state.items.find(item => item.id === action.data);
            if (!itemToUpdate) {
                return state;
            }
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.data),
                total: state.total - itemToUpdate.price,
                itemCount: state.itemCount - 1
            };
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
}

function ShoppingCart() {

    const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

    const addItem = (product) => {
        dispatch({ type: 'ADD_ITEM', data: product })
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', data: id })
    };

    return (
        <div>
            <h2>Shopping Cart ({state.itemCount} items) - Total: ${state.total}</h2>
            {/* Render items */}
        </div>
    );
}
export default ShoppingCart
