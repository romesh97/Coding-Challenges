// material
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function ChallengeOthers() {
  const navigate = useNavigate();

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
          OTHERS
        </Button>
      </Stack>
      <Box>
        <Typography variant="h4">
          Challenge 3 and 4 Code Base Is On The Server Please Check It From The
          Server
        </Typography>
      </Box>
    </>
  );
}
