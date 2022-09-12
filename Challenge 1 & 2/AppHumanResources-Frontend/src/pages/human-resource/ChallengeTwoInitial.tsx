// material
import { Grid } from "@mui/material";

// components
import Header from "../../layouts/Header";
import ChallengeTwo from "../../components/ChallengeTwo";

// ----------------------------------------------------------------------

export default function ChallengeTwoInitial() {
  return (
    <>
      <Header />
      <Grid container sx={{ px: { md: "20em", sm: "3em", xs: "2em" } }}>
        <ChallengeTwo />
      </Grid>
    </>
  );
}
