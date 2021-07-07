import React from "react";
import { useLocalStorage } from "react-use";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { setAuthContext } from "../../Context/AuthContext";

import RecipeImage from "../../Assets/illustrations/recipe.svg";

import {
  HomeContainer,
  InputContainer,
  Heading,
  SubHeading,
  Input,
  InputControl,
  Button,
} from "./StyledComponents";

const Home = () => {
  const navigate = useNavigate();
  const setContextEmail = setAuthContext();
  const [email, setEmail] = useLocalStorage("email", "");

  const handleAuth = () => {
    console.log(email);
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setContextEmail(email);
      navigate("/view-all");
    }
  };

  return (
    <HomeContainer>
      <InputContainer>
        <Heading>Keep All Your Recipes Safe</Heading>
        <SubHeading>
          Do not worry about forgetting your mom's favorite recipes ever.
        </SubHeading>
        <InputControl>
          <Input
            placeholder="Enter email to start"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            onBlur={({ target }) => {
              if (
                target.value &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)
              ) {
                toast.error("Enter valid email");
              }
            }}
          />
          <Button onClick={() => handleAuth()} onkeyPress={() => handleAuth()}>
            Start Saving
          </Button>
        </InputControl>
      </InputContainer>
      <div>
        <img width={450} src={RecipeImage} alt="Fruit items" />
      </div>
    </HomeContainer>
  );
};

export default Home;
