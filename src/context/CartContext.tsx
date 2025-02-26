import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
    id: number;
    title: string;
    image: string;
    price: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);
            if (!existingItem) {
                return [...prev, item];
            }
            return prev;
        })
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};
