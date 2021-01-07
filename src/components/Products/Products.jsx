import React from 'react'
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$12', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&amp;hei=1190&amp;fmt=jpeg&amp;qlt=80&amp;.v=1603406905000' }
// ];

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}  />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products
