import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import ImageClick from "../assets/img/cursor.png";
import ImageClient from "../assets/img/button.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const buttonStart = () => {
    navigate("/surtidor");
  };

  return (
    <Box w="100%">
      <Stack
        spacing={8}
        marginTop="10"
        top="50%"
        marginLeft="auto"
        marginRight="auto"

      >
        <Box 
          className="content-box"
          p={5}
          borderRadius="10"
          bgGradient="linear(to-r, teal.500, green.500)"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          cursor="pointer"
          shadow="base"
          _hover={{ shadow: "2xl" }}
          onClick={buttonStart}
        >
          <div >
            <Heading className="title-box" fontSize="5xl" color="white">
              Empezar
            </Heading>
            <Heading className="subtitle-box" fontSize="3xl" color="white">
              Pulsa aquí
            </Heading>
          </div>
          <Image className="image-box" src={ImageClick} alt="Click Here" width="90px" />
        </Box>

        <Box 
          className="content-box"
          p={5}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          cursor="pointer"
          borderRadius="10"
          shadow="base"
          _hover={{ shadow: "2xl" }}
        >
          <Heading className="title-box" fontSize="4xl">Identificarse como cliente</Heading>
          <Image  className="image-box" src={ImageClient} alt="Client" width="90px" />
        </Box>
      </Stack>
    </Box>
  );
}