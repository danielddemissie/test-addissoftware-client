import { Table, Thead, Tbody, Button } from "../Common";
import { Box, Flex } from "rebass";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteUserAction,
  getAlluserAction,
  getToDeleteUserAction,
  getToEditUserAction,
} from "../action/actions";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";

export default function UserList() {
  const navigateTo = useNavigate();

  const onEdit = (user) => {
    navigateTo("/add");
    getToEditUserAction(user);
  };
  const onDelete = (user) => {
    getToDeleteUserAction(user);
    deleteUserAction(user);
  };

  useEffect(() => {
    getAlluserAction();
  }, []);

  let users = useSelector((st) => st.users);

  const loading = useSelector((st) => st.loading);
  if (!loading) {
    users = users.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  return (
    <div>
      {loading ? (
        <Box>
          <SpinnerCircular
            style={{
              marginLeft: "50%",
            }}
          />
        </Box>
      ) : (
        <Table>
          <Thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Height(cm)</th>
              <th>Actions</th>
            </tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Age}</td>
                <td>{user.Gender}</td>
                <td>{user.Height}</td>
                <td>
                  <Flex>
                    <Button primary onClick={() => onEdit(user)}>
                      Edit
                    </Button>
                    <Button bgC="red" onClick={() => onDelete(user)}>
                      Delete
                    </Button>
                  </Flex>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
}
