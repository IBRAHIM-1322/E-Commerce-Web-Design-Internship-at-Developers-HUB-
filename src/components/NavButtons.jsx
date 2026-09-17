import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { path: '/',           label: 'Home' },
  { path: '/grid-view',  label: 'Grid View' },
  { path: '/list-view',  label: 'List View' },
  { path: '/details/1',  label: 'Details' },
  { path: '/cart',       label: 'Cart' },
];

function NavButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.findIndex(p => p.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-4 inset-x-0 pointer-events-none z-50 flex justify-between site-container">
      {/* Previous Button */}
      {prevPage ? (
        <button
          onClick={() => navigate(prevPage.path)}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900/90 hover:bg-gray-900 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg backdrop-blur-sm active:scale-95 transition-all border border-white/20"
        >
          <span>←</span>
          <span className="hidden xs:inline">{prevPage.label}</span>
          <span className="xs:hidden">Prev</span>
        </button>
      ) : <div />}

      {/* Next Button */}
      {nextPage ? (
        <button
          onClick={() => navigate(nextPage.path)}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600/90 hover:bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg backdrop-blur-sm active:scale-95 transition-all border border-white/20 ml-auto"
        >
          <span className="hidden xs:inline">{nextPage.label}</span>
          <span className="xs:hidden">Next</span>
          <span>→</span>
        </button>
      ) : <div />}
    </div>
  );
}

export default NavButtons;