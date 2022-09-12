// material
import { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

// components
import Header from "../../layouts/Header";

// ----------------------------------------------------------------------

export default function InitialPage() {
  const [document, setDocument] = useState<string>("");
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  const handleInputChange = (event: any) => {
    setDocument(event.target.files[0]);
  };

  const options = {
    onUploadProgress: (progressEvent: any) => {
      const { loaded, total } = progressEvent;

      let percent = Math.floor((loaded * 100) / total);

      if (percent < 100) {
        setUploadPercentage(percent);
      }
    },
  };

  const handleSubmit = () => {
    let data = new FormData();
    data.append("file", document);
    console.log("data", data);
    console.log("document", document);

    axios
      .post("http://127.0.0.1:8000/api/upload-csv", data, options)
      .then((res) => {
        console.log("CSV file uploaded successfully", res);
        setUploadPercentage(100);

        setTimeout(() => {
          setUploadPercentage(0);
        }, 1000);
      })
      .catch((err) => {
        console.log("an error occurred in catch", err);
        setUploadPercentage(0);
      });
  };

  return (
    <>
      <Box>
        <Header />
        <Grid container sx={{ px: { md: "20em", sm: "3em", xs: "2em" } }}>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              sx={{
                pt: "40px",
              }}
            >
              Upload Document:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="receiptFile"
              type="file"
              onChange={handleInputChange}
              sx={{ pt: 1.5 }}
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 3, width: "100%" }}
            color="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
          {uploadPercentage > 0 && (
            <Box>
              <ProgressBar
                now={uploadPercentage}
                striped={true}
                label={`${uploadPercentage}%`}
              />
            </Box>
          )}
        </Grid>
      </Box>
    </>
  );
}
