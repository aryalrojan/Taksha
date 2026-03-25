import Link from "next/link";
import Cart from "./Cart/Cart";
import { useContext } from "react";
import CartItemsContext from "contexts/cartItemsContext";
import CartVisibilityContext from "contexts/cartVisibilityContext";
import { CartProduct } from "lib/interfaces";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

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
                  href="https://github.com/aryalrojan/Taksha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
              </li>
            </ul>

            <Show when="signed-out">
              <SignInButton>
                <button className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-stone-900 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-stone-700 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>

            {/* Cart */}
            <button 
              className="relative p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-700"
              onClick={toggleCartVisibility}
              aria-label="Shopping cart"
            >
              <CartIcon />
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
