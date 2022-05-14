import { useLocation } from "react-router-dom";
import { Box, Text, Flex } from "rebass";
import { Link } from "../Common";

export default function Header() {
  const location = useLocation();
  return (
    <Box>
      <Flex
        px={2}
        color="#fff"
        bg="#006887"
        alignItems="center"
        justifyItems="center"
        height={60}
      >
        <Text p={2} fontWeight="500" fontSize={35} marginLeft="40px">
          <Link to={"/"}>Test addissoftware</Link>
        </Text>
        <Box mx={"auto"} />
        {location.pathname !== "/add" && (
          <Box>
            <Link
              to={"/add"}
              style={{
                fontSize: 20,
                marginRight: 10,
              }}
            >
              Add
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
