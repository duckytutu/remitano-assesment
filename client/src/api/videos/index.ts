import { axios } from "../../configs/axiosConfig";
import { VideoDetails } from "./typings";

const API_KEY = process.env.REACT_APP_GG_API_KEY;

export const getVideoDetail = async (
  videoId: string
): Promise<VideoDetails | undefined> => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet&fields=items(id,snippet(title,description))`
  );
  const video = data?.items?.[0];
  if (!video) return undefined;
  return {
    videoId: video.id,
    title: video.snippet?.title,
    description: video.snippet?.description,
  };
};
