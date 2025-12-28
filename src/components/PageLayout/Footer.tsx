const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold text-stone-900 tracking-tight">taksha</span>
            <span className="text-stone-400 text-sm">Authentic Nepali crafts</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://github.com/aryalrojan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://rojanaryal.com.np" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 text-center">
          <p className="text-stone-400 text-sm">
            &copy; {year} Taksha · Made in Nepal by{" "}
            <a
              href="https://rojanaryal.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Rojan Aryal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
