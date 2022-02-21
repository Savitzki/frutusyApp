import { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext({});

export default CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState()


    useEffect( () => {
        console.log(cart)
    }, [cart])

    // Funcao de adicionar itens ao carrinho
    function addCart(item){
        const newCart = cart
        newCart.push(item)
        setCart([...newCart])
        Alert.alert('Sucesso', 'Seu produto foi adicionado ao carrinho');
    }

    const store = {
        addCart,
        cart,
        totalValue
    }

    return <CartContext.Provider value={store}>
                {children}
            </CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext);
    const {
        addCart, 
        cart, 
        totalValue
    } = context

    return {
        addCart,
        cart, 
        totalValue
    }
}