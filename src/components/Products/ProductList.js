import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { productsContext } from '../../context/ProductsContext';
import ProductCard from './ProductCard';
import { useHistory } from 'react-router-dom';

const ProductList = (props) => {
   const { getProducts, productsData, paginationPages } = useContext(
       productsContext
   );
   const history = useHistory();
   const [page, setPage] = useState(getPage);

   function getPage() {
       const search = new URLSearchParams(history.location.search);
       return search.get("_page");
   }

   const handlePage = (e, page) => {
       const search = new URLSearchParams(history.location.search);
       search.set("_page", page); // set method has two parameters (first is q and second is its value)
       history.push(`${history.location.pathname}?${search.toString()}`);
       setPage(page);
       getProducts(history);
   };
   useEffect(() => {
       getProducts(history);
   }, []);

   return (          
       <>
           <Grid container spacing={3}>
               {productsData.map((item) => (
                   <ProductCard item={item} key={item.id} />
               ))}
           </Grid>
           <Pagination
               page={+page}
               onChange={handlePage}
               count={paginationPages}
               variant="outlined"
               color="primary"
           />
       </>
   );
};

export default ProductList;
