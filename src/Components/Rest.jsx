import React from "react";
import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Rest = () => {
  return (
    <>
      <HStack
        textTransform={"uppercase"}
        className="green-strip"
        justifyContent={"space-between"}
      >
        <Image
          objectFit={"cover"}
          boxSize={200}
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
        />
        <VStack justifyContent={"center"}>
          <Heading>Sign up for Sidcup News and Special </Heading>
          <Heading>Offers </Heading>
          <Heading>Straight to Your Inbox</Heading>
        </VStack>
        <Image
          objectFit={"cover"}
          boxSize={200}
          background={""}
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
        />
      </HStack>

      <HStack backgroundColor={"black"} p={60} gap={"10%"}>
        <div className="rest-image">
        <Image
          position={"relative"}
          borderRadius={15}
          width={"100%"}
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&fit=1002%2C1024&ssl=1"         
          />
          </div>
        <VStack alignItems={"start"} gap={"2%"}>
          <Heading fontSize={"4rem"}>Food and drink</Heading>
          <Text fontSize={"20px"}>
            Whether youre getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options bought directly to your table or bay. We make sure
            that we cater for everyone, offering a range of vegan and gluten
            free options.
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default Rest;
