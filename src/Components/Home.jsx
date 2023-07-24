import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import hero from "../Assests/.mp4"
const Home = () => {
  return (
    <>
      <video
        autoplay
        loop
        muted
        src={hero}
      ></video>

      <div className="home-container">
        <Heading fontSize={"4rem"} textAlign={"center"} id="Heading">
          EAT. DRINK. PLAY
        </Heading>
        <h2>WELCOME TO SIDCUP FAMILY GOLF</h2>
        <Text>
          Sidcup Family Golf is a multipurpose golf facility located in Sidcup,
          South East London. Passionate about technology, player development and
          making golf fun and accessible to everyone.
        </Text>
      </div>
    </>
  );
};

export default Home;
