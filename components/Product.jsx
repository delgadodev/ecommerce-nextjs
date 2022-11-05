import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

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
      height="230px"
      rounded="xl"
      flexDir="row"
      color="white"
      gap={5}
    >
      <Box
        roundedTopLeft="xl"
        roundedBottomLeft="xl"
        w={{ base: "50%", md: "40%" }}
        backgroundImage={product.image}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>

      <Stack w={{ base: "50%", md: "60%" }} p={2}>
        <Text overflow="hidden">{product.title}</Text>
        <Text fontWeight="bold">{currencyFormatter(product.price)}</Text>

        <Button
          _hover={{
            bg: "whiteAlpha.200",
          }}
          p="0"
          onClick={handleAddToCart}
          variant="outline"
        >
          Add to Cart
        </Button>
      </Stack>
    </Stack>
  );
};

export default Product;
