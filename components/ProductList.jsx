import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import Product from "./Product";
import Search from "./Search";

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Search setFilter={setFilter} />
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        mt={10}
      >
        {products
          .filter((product) => product.title.toLowerCase().includes(filter))
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Grid>
    </>
  );
};

export default ProductList;
