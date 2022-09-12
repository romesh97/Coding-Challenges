// material
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, TextField, Button, Stack } from "@mui/material";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

// components
import DataTable from "./Table";

// ----------------------------------------------------------------------

export default function ChallengeOne() {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
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

        Swal.fire({
          position: "center",
          icon: "success",
          title: "CSV file uploaded successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log("an error occurred in catch", err);
        setUploadPercentage(0);
      });
  };

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          color="primary"
          onClick={() => navigate("/home/file-upload")}
        >
          CHALLENGE 1
        </Button>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          color="primary"
          onClick={() => navigate("/home/challenge-two")}
        >
          CHALLENGE 2
        </Button>
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="primary"
          onClick={() => navigate("/home/others")}
        >
          OTHER
        </Button>
      </Stack>
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <Typography
            variant="h6"
            sx={{
              pt: "40px",
            }}
          >
            Upload Document:
          </Typography>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
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
      <DataTable />
    </>
  );
}
