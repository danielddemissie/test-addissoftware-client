import { Box, Flex } from "rebass";
import { Label, Input, Radio } from "@rebass/forms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Common";
import {
  addUserAction,
  editUserAction,
  getAlluserAction,
} from "../action/actions";

export default function UserAdder() {
  const navigateTo = useNavigate();
  const userToEdit = useSelector((state) => state.user);
  const isEditing = useSelector((state) => state.loading);

  useEffect(() => {
    isEditing && setUser(userToEdit);
  }, [isEditing, userToEdit]);

  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Gender: "",
    Height: "",
  });

  const onChangeOfForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    isEditing ? editUserAction(user) : addUserAction(user);
    navigateTo("/");
    getAlluserAction();
  };

  return (
    <Box as="form" onSubmit={onSubmitHandler} py={3}>
      <Flex flexWrap={"wrap"} flexDirection="column" width={[1, 1 / 2]}>
        <Box px={2}>
          <Label htmlFor="name">FirstName</Label>
          <Input
            id="FirstName"
            name="FirstName"
            placeholder="FirstName"
            required={isEditing ? false : true}
            value={user.FirstName}
            onChange={onChangeOfForm}
          />
        </Box>
        <Box px={2}>
          <Label htmlFor="name">LastName</Label>
          <Input
            id="LastName"
            name="LastName"
            placeholder="LastName"
            required={isEditing ? false : true}
            value={user.LastName}
            onChange={onChangeOfForm}
          />
        </Box>
        <Box px={2}>
          <Label htmlFor="name">Age</Label>
          <Input
            id="Age"
            name="Age"
            required={isEditing ? false : true}
            value={user.Age}
            placeholder="age"
            onChange={onChangeOfForm}
          />
        </Box>

        <Box px={2}>
          <Label htmlFor="name">Height</Label>
          <Input
            id="Height"
            name="Height"
            placeholder="Height"
            required={isEditing ? false : true}
            value={user.Height}
            onChange={onChangeOfForm}
          />
        </Box>
      </Flex>
      <Flex mx={1} flexWrap="wrap" flexDirection={"column"}>
        <Label p={2}>Gender</Label>
        <Flex>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio
              id="Male"
              name="Male"
              value={user.Gender}
              onChange={(e) => {
                setUser({ ...user, Gender: "Male" });
              }}
            />
            Male
          </Label>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio
              id="Female"
              name="Male"
              value={user.Gender}
              onChange={(e) => {
                setUser({ ...user, Gender: "Female" });
              }}
            />
            Female
          </Label>
        </Flex>
        <Button
          primary
          width={1 / 8}
          height={"100%"}
          padding={10}
          color="#000"
          ml={10}
        >
          {isEditing ? "Edit" : "Add"}
        </Button>
      </Flex>
    </Box>
  );
}
