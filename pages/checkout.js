import { Box, Button, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Header from "../components/Header";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import { font, fontHeading } from "./_app";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Container maxW="1400px" color="white" className={font.className}>
        <Header />

        <Grid
          mt={5}
          gridTemplateColumns={{
            lg: "repeat(2, 1fr)",
          }}
        >
          <Stack>
            <Text
              fontWeight="bold"
              fontSize="3xl"
              className={fontHeading.className}
            >
              Checkout
            </Text>

            <Stack>
              {cart.map((item) => (
                <Stack key={item.id}>
                  <Text>{item.title}</Text>
                  <Text>({item.quantity})</Text>
                  <Stack>
                    <Text fontWeight="semibold">
                      {currencyFormatter(item.price)}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack gap={5}>
            <Text
              fontWeight="bold"
              fontSize="xl"
              className={fontHeading.className}
            >
              Total: {currencyFormatter(total)}
            </Text>

            <Button
              _hover={{
                bg: "whiteAlpha.200",
              }}
              variant="outline"
            >
              Confirm purchase
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;
