// material
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function ChallengeTwo() {
  const navigate = useNavigate();

  const findDuplicates = (arr: any) => {
    let sorted_arr = arr.slice().sort();

    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  };

  let duplicatedArray = [2, 3, 1, 2, 3];

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
      <Box>
        <Typography variant="h4">
          The elements occurring from the Array &nbsp;{duplicatedArray} &nbsp;
          more than once are &nbsp;
          {findDuplicates(duplicatedArray)}
        </Typography>
      </Box>
    </>
  );
}
