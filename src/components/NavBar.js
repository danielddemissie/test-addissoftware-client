import { useLocation } from "react-router-dom";
import { Box, Text, Flex } from "rebass";
import { Link } from "../Common";

export default function Header() {
  const location = useLocation();
  return (
    <Box>
      <Flex px={2} bg="#006887" height={60} alignItems="center">
        <Box>
          <Text fontSize={[20, 25, 30]} ml={[10, 40]}>
            <Link to={"/"}>Users</Link>
          </Text>
        </Box>
        <Box mx={"auto"} />
        {location.pathname !== "/add" && (
          <Box>
            <Text p={2} fontSize={[13, 15, 25]} marginLeft="40px">
              <Link to={"/add"}>Add</Link>
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
