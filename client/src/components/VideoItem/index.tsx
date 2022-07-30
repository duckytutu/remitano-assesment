import { Grid, Typography } from "@mui/material";
import React from "react";
import { VideoIframe, VideoWrapper } from "./styles";

export type VideoItemProps = {
  video: any;
};

export default function VideoItem({ video }: VideoItemProps) {
  return (
    <Grid container columnSpacing={3} mb={3}>
      <Grid item xs={6}>
        <VideoWrapper>
          <VideoIframe src={video.url} frameBorder="0" />
        </VideoWrapper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" mb={1}>
          Movie Title
        </Typography>
        <Typography variant="body1" mb={2}>
          Shared by: {video.sharedBy}
        </Typography>
        <Typography variant="body1">
          Description: {video.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
