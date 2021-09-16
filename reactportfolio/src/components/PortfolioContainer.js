// import React, { useState } from 'react';
// import Nav from "../components/Header";
// import Home from '../components/pages/Home';
// import About from '../components/pages/About';
// import Portfolio from '../components/pages/Portfolio';
// import Contact from '../components/pages/Contact';
// import Footer from '../components/Footer';


// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage = () => {
//         if (currentPage === 'Home') {
//             return <Home />;
//         }
//         if (currentPage === 'About') {
//             return <About />;
//         }
//         if (currentPage === 'Portfolio') {
//             return <Portfolio />;
//         }
//         return <Contact />
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <>
//         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//         {renderPage()}
//         <Footer />
//         </>
//     );
// }