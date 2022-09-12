// material
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";

// ----------------------------------------------------------------------

export default function ChallengeTwo() {
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
      </Stack>
    </>
  );
}
