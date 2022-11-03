import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

const Product = ({ product }) => {
  const { addToCart } =
    useContext(CartContext);

  const toast = useToast();
  const handleAddToCart = () => {
    addToCart(product);

    toast({
      title: "Product added to cart",
      status: "success",
    });
  };

  return (
    <Stack
      bg="whiteAlpha.200"
      w="100%"
      height={200}
      rounded="xl"
      flexDir="row"
      color="white"
      gap={5}
    >
      <Box
        roundedTopLeft="xl"
        roundedBottomLeft="xl"
        width={{
          base: "140px",
          md: "200px",
        }}
        backgroundImage={product.image}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>

      <Stack w="50%" p={2}>
        <Text overflowWrap="anywhere" overflow="hidden">
          {product.title}
        </Text>
        <Text fontWeight="bold">{currencyFormatter(product.price)}</Text>

        <Button p="0" onClick={handleAddToCart} variant="outline">
          Add to Cart
        </Button>
      </Stack>
    </Stack>
  );
};

export default Product;
