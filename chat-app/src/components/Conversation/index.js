import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Header */}
      <Header />

      {/* msg */}
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        <Message />
      </Box>

      {/* footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
