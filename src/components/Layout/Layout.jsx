import { Suspense } from 'react';
import { SphereSpinner } from 'react-spinners-kit';
import Navigation from '../Navigation/Navigation.jsx';
import css from './Layout.module.css';

export default function Layout({children = null}) {
    return (
        <div className={css.container}>
            <div className={css.decoration}></div>
            <Navigation />
            <Suspense fallback={<div className={css.spinner}>
                <SphereSpinner size={120} color='var(--accent)' />
            </div>} >
                {children}
            </Suspense>
        </div>
    );
}