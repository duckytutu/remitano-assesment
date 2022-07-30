import {
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Field, FormField } from "./typings";
import { parseVideoIdFromYoutubeLink } from "./helper";
import { getVideoDetail } from "../../api/videos";

const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "500px",
  padding: "3rem",
  margin: "3rem auto",
  border: "1px solid #ddd",
  borderRadius: "10px",
}));

export default function ShareVideo() {
  const onSubmit = async (values: FormField) => {
    const videoId = parseVideoIdFromYoutubeLink(values[Field.LINK]);
    if (videoId) {
      const video = await getVideoDetail(videoId);
      console.log(video);
    }
  };

  const formik = useFormik<FormField>({
    initialValues: {
      [Field.LINK]: "",
    },
    validationSchema: Yup.object().shape({
      [Field.LINK]: Yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit,
  });

  const getError = useCallback(
    (field: Field) => {
      return formik.touched[field] && formik.errors[field];
    },
    [formik]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <Container>
      <Wrapper>
        <Typography variant="h4" mb={4}>
          Share A Movie
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField
            name={Field.LINK}
            label="Youtube URL"
            fullWidth
            margin="normal"
            error={!!getError(Field.LINK)}
            helperText={getError(Field.LINK)}
            value={formik.values[Field.LINK]}
            onChange={formik.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
          >
            Share
          </Button>
        </Box>
      </Wrapper>
    </Container>
  );
}
