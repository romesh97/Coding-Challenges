// material
import { Box, Typography } from "@mui/material";
import Header from "../../layouts/Header";

// ----------------------------------------------------------------------

export default function InitialPage() {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ px: "20px", pb: 4, pt: 2.5 }}>
          <Typography variant="h3" gutterBottom>
            내 차 시세를 알아볼까요?
          </Typography>
          <Typography variant="body1" sx={{ color: "#858794" }}>
            님의 차량번호를 알려주세요
          </Typography>
        </Box>
      </Box>
    </>
  );
}
