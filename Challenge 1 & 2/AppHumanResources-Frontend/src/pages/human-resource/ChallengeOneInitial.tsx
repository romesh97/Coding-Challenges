// material
import { Grid } from "@mui/material";

// components
import Header from "../../layouts/Header";
import ChallengeOne from "../../components/ChallengeOne";

// ----------------------------------------------------------------------

export default function ChallengeOneInitial() {
  return (
    <>
      <Header />
      <Grid container sx={{ px: { md: "20em", sm: "3em", xs: "2em" } }}>
        <ChallengeOne />
      </Grid>
    </>
  );
}
