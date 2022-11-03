import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Search = ({ setFilter }) => {
  return (
    <Box mt={5} bg="whiteAlpha.200" p={2} rounded="xl">
      <Input
        type="text"
        placeholder="Buscar"
        variant="unstyled"
        onChange={(e) => setFilter(e.target.value)}
      />
    </Box>
  );
};

export default Search;
