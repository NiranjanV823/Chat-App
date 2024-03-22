import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Header */}
      <Header />

      {/* msg */}
      <Box sx={{ width: "100%", flexGrow: 1 }}></Box>

      {/* footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
