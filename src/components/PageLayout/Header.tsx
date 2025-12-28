import Link from "next/link";
import Cart from "./Cart/Cart";
import { useContext } from "react";
import CartItemsContext from "contexts/cartItemsContext";
import CartVisibilityContext from "contexts/cartVisibilityContext";
import { CartProduct } from "lib/interfaces";
import { MdShoppingCart } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  const { cart } = useContext(CartItemsContext);
  const { toggleCartVisibility } = useContext(CartVisibilityContext);
  const cartLength = cart.reduce(
    (count: number, item: CartProduct) =>
      (count += item.quantity ? item.quantity : 1),
    0
  );

  return (
    <>
      <Cart />
      <header className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="w-full mx-auto flex justify-between items-center py-4 max-w-7xl px-6">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-xl font-semibold tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">
              taksha
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link 
                  href="/" 
                  className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/aryalrojan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
              </li>
            </ul>

            {/* Cart */}
            <button 
              className="relative p-2 rounded-full hover:bg-stone-100 transition-colors"
              onClick={toggleCartVisibility}
              aria-label="Shopping cart"
            >
              <MdShoppingCart
                className="text-stone-700"
                size={22}
              />
              {cartLength > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold bg-stone-900 text-white rounded-full flex items-center justify-center">
                  {cartLength}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
