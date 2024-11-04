import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const OpportunitiesPage = lazy(() => import('../../pages/OpportunitiesPage/OpportunitiesPage.jsx'));
const ClientsPage = lazy(() => import('../../pages/ClientsPage/ClientsPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {

    return (
        <div className={css.container}>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/opportunities' element={<OpportunitiesPage />} />
                    <Route path='/clients' element={<ClientsPage />} />
                    <Route path='/*' element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </div>
    );
}