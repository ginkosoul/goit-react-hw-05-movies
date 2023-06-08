import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/Layout/Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.container}>
        <ul className={css.navigation}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.active}` : `${css.link}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.active}` : `${css.link}`
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.container}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
