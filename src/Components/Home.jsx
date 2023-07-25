import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const src = "https://rr3---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1690318066&ei=kuC_ZJHlBuGLsfIP6OeVoA8&ip=212.102.46.205&id=o-AB3WKM1aQZifZ-uWwtJzuIRyGpMr-J92L1dLQWWaUEeE&itag=18&source=youtube&requiressl=yes&mh=Ta&mm=31%2C26&mn=sn-nx5s7n7s%2Csn-qxoedn7k&ms=au%2Conr&mv=m&mvi=3&pl=24&initcwndbps=1181250&spc=Ul2SqzA86UNXe1T7Q0Dws72kamdYmURyVMzMPChDSQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=-PLMLCbJ6rHn4E0Ohh2BsegO&gir=yes&clen=13781460&ratebypass=yes&dur=183.808&lmt=1687717422674316&mt=1690296110&fvip=2&fexp=24007246%2C24362686&beids=24350018&c=WEB&txp=4530434&n=MxtzvoLXw7iciA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJgKwgKjdWItFcEtQDVY0K8ap29LLZsZ4z8SRFqz6uQoAiBwjXoyTkwUpbfhXr0gQVHDYNV6vxbsZHQc_gDVy85gAw%3D%3D&sig=AOq0QJ8wRgIhANZgkA7FkHpqz0Vbb6lblb87JOVOmNWXgTDycbMwYWcNAiEAq7vUOIcZDv-aIzg3MA8aCZf5I3CcnUMzRP6jGn0w5Y4%3D"

  return (
    <>
      <div className="container">
      <video
        autoplay
        loop
        muted
        src={src}
      ></video>
        <div className="home-container">
          <Heading fontSize={"4rem"} textAlign={"center"} id="Heading">
            EAT. DRINK. PLAY
          </Heading>
          <h2>WELCOME TO SIDCUP FAMILY GOLF</h2>
          <Text>
            Sidcup Family Golf is a multipurpose golf facility located in
            Sidcup, South East London. Passionate about technology, player
            development and making golf fun and accessible to everyone.
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home;
