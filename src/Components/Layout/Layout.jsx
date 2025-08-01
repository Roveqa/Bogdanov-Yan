// import Header from '../Header/Header';
// import Footer from "../Footer/Footer"
// import { Outlet } from 'react-router-dom';
// import ScrollToTop from '../ScrollToTop';

// export default function Layout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// }

import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

export default function Layout() {
  const location = useLocation();

  // Укажи путь, на котором футер не нужен
  const hideFooterOnPaths = ['/contacts'];

  const hideFooter = hideFooterOnPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}