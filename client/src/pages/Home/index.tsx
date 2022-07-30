import { Box, Container } from "@mui/material";
import React from "react";
import VideoItem from "../../components/VideoItem";

const data = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/7WyHtSlvHD4",
    title: "This is a movies",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis assumenda pariatur fugiat eius qui explicabo commodi optio ipsam veniam ",
    sharedBy: "abc@asd.com",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/7WyHtSlvHD4",
    title: "This is a movies",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis assumenda pariatur fugiat eius qui explicabo commodi optio ipsam veniam ",
    sharedBy: "abc@asd.com",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/7WyHtSlvHD4",
    title: "This is a movies",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis assumenda pariatur fugiat eius qui explicabo commodi optio ipsam veniam ",
    sharedBy: "abc@asd.com",
  },
];

export default function Home() {
  return (
    <Container>
      <Box py={4}>
        {data.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </Box>
    </Container>
  );
}
