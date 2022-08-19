import { Image, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageShop from "../assets/img/shop.png";

export default function Navbar(params) {
    const navigate = useNavigate();

    const redirect = () => {
    navigate("/");
    }
  return (
    <Box
      display="block"
      alignItems="center"
      justifyContent="space-evenly"
      borderBottom="lpx solid #ddd"
    >
      <Image
        src={ImageShop}
        alt="Logotipo"
        width={75}
        margin="0 auto"
        cursor="pointer"
        onClick={redirect}
      />
      <Heading
        as="h1"
        size="sm"
        isTruncated
        textTransform="uppercase"
        textAlign="center"
        color="#ff6b6b"
        paddingBottom="5"
      >
        Maria Auxiliadora Station
      </Heading>
    </Box>
  );
}
