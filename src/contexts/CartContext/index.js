import { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext({});

export default CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState()


    useEffect( () => {
        let value = 0
        cart.map((item) => {
            value = value + item.price;

        })
        setTotalValue(value);
    }, [cart])

    // Funcao de adicionar itens ao carrinho
    function addCart(item){
        const newCart = cart
        newCart.push(item)

        setCart([...newCart])
        Alert.alert('Sucesso', 'Seu produto foi adicionado ao carrinho');
    }

    // Funcao de remover itens do carrinho
    function removeCart(index){
        let newCart = cart.filter((item, i) => i !== index)

        setCart([...newCart])
    }

    const store = {
        addCart,
        cart,
        totalValue,
        removeCart
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
        totalValue,
        removeCart
    } = context

    return {
        addCart,
        cart, 
        totalValue,
        removeCart
    }
}