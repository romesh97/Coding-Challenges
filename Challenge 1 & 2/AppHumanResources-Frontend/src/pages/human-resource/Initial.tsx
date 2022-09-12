// material
import { Box } from "@mui/material";

// components
import Header from "../../layouts/Header";
import ChallengeOne from "../../components/ChallengeOne";

// ----------------------------------------------------------------------

export default function InitialPage() {
  return (
    <>
      <Header />
      <Box>
        <ChallengeOne />
      </Box>
    </>
  );
}
