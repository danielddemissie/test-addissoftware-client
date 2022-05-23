import React, { useEffect } from 'react';
import { Table, Thead, Tbody, Th, Tr, Button } from './Common';
import { Box, Flex, Text } from 'rebass';
import { useNavigate } from 'react-router-dom';
import {
  deleteUserAction,
  getAlluserAction,
  getToDeleteUserAction,
  getToEditUserAction,
} from '../action/actions';
import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { capitalizeName } from '../config';

export default function UsersList() {
  const navigateTo = useNavigate();

  const onEdit = (user) => {
    getToEditUserAction(user);
    navigateTo('/edit');
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
            color="#006887"
            enabled={loading}
            style={{
              marginLeft: '50%',
            }}
          />
        </Box>
      ) : (
        <Box
          width={[1 / 1, 1 / 1.03]}
          mx={'auto'}
          style={{
            overflowX: 'auto',
          }}
        >
          {users.length > 0 ? (
            <Table>
              <Thead>
                <tr>
                  <Th>FirstName</Th>
                  <Th>LastName</Th>
                  <Th>Age</Th>
                  <Th>Gender</Th>
                  <Th>Height(cm)</Th>
                  <Th>Actions</Th>
                </tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr key={user._id}>
                    <td>{capitalizeName(user.FirstName)}</td>
                    <td>{capitalizeName(user.LastName)}</td>
                    <td>{user.Age}</td>
                    <td>{user.Gender}</td>
                    <td>{user.Height}</td>
                    <td>
                      <Flex
                        justifyContent={['center', 'start']}
                        flexWrap={'wrap'}
                        flexDirection={['column', 'row']}
                      >
                        <Button
                          primary
                          backgroundColor={'indigo'}
                          onClick={() => onEdit(user)}
                        >
                          Edit
                        </Button>
                        <Button
                          backgroundColor={'red'}
                          onClick={() => onDelete(user)}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Box ml={'30%'} py={5}>
              <Text fontSize={[15, 20, 25]}>No Users Please Add Users.</Text>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
}
