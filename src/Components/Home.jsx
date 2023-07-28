import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const src = "https://rr1---sn-vgqsrnlk.googlevideo.com/videoplayback?expire=1690469251&ei=Iy_CZK-aGoaM_9EPxZeCyA4&ip=139.190.117.171&id=o-AACAY94MmDRyI0-Q05MyEi7GYiwiTCz9h3wysfwgyC7A&itag=22&source=youtube&requiressl=yes&mh=dQ&mm=31%2C26&mn=sn-vgqsrnlk%2Csn-p5qlsnrr&ms=au%2Conr&mv=m&mvi=1&pl=20&spc=Ul2Sq-gQnCSfYTWvBKp5KB-h2QKP40QDNwHl5SE4-A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=HLY-3q1u2Fg2ljTK-aaFkqYO&cnr=14&ratebypass=yes&dur=83.104&lmt=1640789242742517&mt=1690446821&fvip=3&fexp=24007246%2C24362686%2C24363391&c=WEB&txp=5311224&n=x7NKDQbk65yFjw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgZZSYE-qMeJbaF9krzMUvviMaHvICeDy-KKYLvyY5trgCIEpOa1f4GRrTNyKVyLnCzrI2VwPeDcGkwEG1V3dd5hpy&sig=AOq0QJ8wRQIgS_kNvvArQcEht5ejEfBWj2mfAYpICBSCCbGSbinN5wYCIQCOr8yYA2aVVoYTXWwsQ-8_guJRUVh8RmpU8YhxwLdN4g%3D%3D&title=Thief%20-%20An%20Animated%20Short%20Film%20(2021)"

  return (
    <>
      <div className="container">
      <video
      autoPlay
      loop
      muted
      src="https://sidcupfamilygolf.com/wp-content/uploads/2023/02/hero.mp4"
    ></video>
        <Box className="home-container">
          <Heading fontSize={"4rem"} textAlign={"center"} id="Heading">
            EAT. DRINK. PLAY
          </Heading>
          <h2>WELCOME TO SIDCUP FAMILY GOLF</h2>
          <Text>
            Sidcup Family Golf is a multipurpose golf facility located in
            Sidcup, South East London. Passionate about technology, player
            development and making golf fun and accessible to everyone.
          </Text>
        </Box>
      </div>
    </>
  );
};

export default Home;
