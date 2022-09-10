// material
import { Box, Typography, Grid, TextField } from "@mui/material";
import Header from "../../layouts/Header";

// ----------------------------------------------------------------------

export default function InitialPage() {
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
              // onChange={changeHandler}
              // inputProps={{ accept: "image/*" }}
              sx={{ pt: 1.5 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
