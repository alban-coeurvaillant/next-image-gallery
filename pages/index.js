// pages/index.js

import Head from "next/head";
import {
  Box,
  Container,
  Text,
  Wrap,
  WrapItem,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { getCuratedPhotos } from "../lib/api";
import React, { useState } from "react";
import Image from "next/image";

export default function Home({ data }) {
  console.log(data);
  const [photos, setPhotos] = useState(data.media);

  return (
    <div>
      <Head>
        <title> NextJS Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="dark-lg" minH="100vh">
        <Container>
          <Text
            color="pink.800"
            fontWeight="semibold"
            mb="1rem"
            textAlign="center"
            textDecoration="underline"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            Welcome
          </Text>
        </Container>

        <Wrap className="test" px="1rem" spacing={4} justify="center">
          {photos.map((pic) => (
            <WrapItem
              key={pic.id}
              boxShadow="base"
              rounded="20px"
              overflow="hidden"
              bg="white"
              lineHeight="0"
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                src={pic.src.portrait}
                height={600}
                width={400}
                alt={pic.photographer}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}
