import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "transparent" : "blueviolet"};
  border: 1px solid blueviolet;
  padding: 10px 20px;
  color: ${(props) => (props.variant === "outline" ? "blueviolet" : "white")};
  margin: 10px;
`;

const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, blueviolet 0%, #00ced1 80%);
  border: none;
  transition: 0.2s all ease-out;
  &:hover {
    padding: ${(props) => props.hover && "10px 22px"};
    background-image: ${(props) =>
      props.hover && "linear-gradient(to left, blueviolet 0%, #00ced1 80%)"};
  }
`;

const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 1px 2px 5px black;
`;

const animation = keyframes`
    0% {
        transform: translate(-5px);
    }
    50% {
        transform: translate(5px);
    }
    100% {
        transform: translate(-5 px);
    }
`;

const AnimatedButton = styled(StyledButton)`
  animation: ${animation} infinite 2s linear;
`;

const Card = styled.div`
  min-height: 100px;
  width: 500px;
  margin: 20px;
  padding: 20px;
  box-shadow: 1px 1px 10px black;
  border-radius: 5px;
  display: inline-block;
`;

const DarkCard = styled(Card)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

const LightCard = styled(Card)`
  background-color: ${(props) => props.theme.light.primary};
  color: ${(props) => props.theme.light.text};
`;

function StyledComponentEg() {
  return (
    <div>
      <StyledButton>I'm Normal</StyledButton>
      <StyledButton variant="outline">I'm Outlined</StyledButton>
      <FancyButton>I'm Fancy</FancyButton>
      <FancyButton hover={true}>I'm Fancy with Hover Effect</FancyButton>
      <SubmitButton type="submit">I'm a Submit Button</SubmitButton>
      <FancyButton as="h1">I'm Fancy Heading</FancyButton>
      <AnimatedButton>I'm Animated</AnimatedButton>
      <br />
      <DarkCard>I am a dark themed card.</DarkCard>
      <LightCard>I am a light themed card.</LightCard>
    </div>
  );
}

export default StyledComponentEg;
