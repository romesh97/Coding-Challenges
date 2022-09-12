// material
import { Grid } from "@mui/material";

// components
import Header from "../../layouts/Header";
import ChallengeOthers from "../../components/ChallengeOthers";

// ----------------------------------------------------------------------

export default function ChallengeOther() {
  return (
    <>
      <Header />
      <Grid container sx={{ px: { md: "20em", sm: "3em", xs: "2em" } }}>
        <ChallengeOthers />
      </Grid>
    </>
  );
}
