import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import chevLeft from "../assets/chevleft.svg";
import chevRight from "../assets/chevright.svg";
import CartIcon from "../assets/shopping-cart.svg";
import CartContext from "../context/CartContext";
import { font } from "../pages/_app";
import { currencyFormatter } from "../utils/currencyFormatter";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cart, removeFromCart, increaseQuantity, clearCart } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  console.log(cart);

  return (
    <>
      <Stack
        bg="whiteAlpha.200"
        mt={5}
        rounded="xl"
        flexDir="row"
        p={5}
        justifyContent="space-between"
        alignItems="center"
        color="white"
      >
        <Link href="/">
          <Text fontWeight="semibold">Ecommerce</Text>
        </Link>

        <Box cursor="pointer">
          <Image
            style={{
              margin: 0,
            }}
            src={CartIcon}
            alt="shopping cart"
            onClick={onOpen}
          />
        </Box>
      </Stack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white" className={font.className}>
          <DrawerCloseButton />
          <DrawerHeader>CART</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 ? (
              <>
                <Stack>
                  {cart.map((product) => (
                    <Box key={product.id}>
                      <Text as="h2">{product.title}</Text>
                      <Stack
                        flexDir="row"
                        justifyContent="center"
                        alignItems="center"
                        p={3}
                        gap={5}
                      >
                        <Image
                          onClick={() => removeFromCart(product)}
                          src={chevLeft}
                          alt="chev"
                          style={{
                            cursor: "pointer",
                          }}
                        />
                        <Text
                          style={{
                            marginTop: 0,
                          }}
                        >
                          {product.quantity}
                        </Text>
                        <Image
                          onClick={() => increaseQuantity(product)}
                          style={{
                            marginTop: 0,
                            cursor: "pointer",
                          }}
                          src={chevRight}
                          alt="chev"
                        />
                      </Stack>
                    </Box>
                  ))}
                </Stack>

                <Text mt={10}>Total: {currencyFormatter(total)}</Text>
              </>
            ) : (
              <Text>Cart without products</Text>
            )}
          </DrawerBody>

          <DrawerFooter gap={5}>
            <Button
              _hover={{
                bg: "whiteAlpha.200",
              }}
              onClick={() => clearCart()}
              variant="outline"
              hidden={cart.length > 0 ? false : true}
            >
              Clear
            </Button>
            <Button
              _hover={{
                bg: "whiteAlpha.200",
              }}
              variant="outline"
              hidden={cart.length > 0 ? false : true}
            >
              <Link href="/checkout">Go to Checkout</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
