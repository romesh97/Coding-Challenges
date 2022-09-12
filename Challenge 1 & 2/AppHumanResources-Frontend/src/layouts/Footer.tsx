import { Stack, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Stack direction="row">
        <Box
          component="img"
          alt="icon_logo"
          src="./static/img/facebook_profile_image.png"
          sx={{ height: "55px" }}
        ></Box>
        <Typography
          variant="body2"
          color="textSecondary"
          align="left"
          fontWeight="bold"
        >
          Pakistan Global Institute Moza Bagha Sheikhan, Rawat Pakistan
          <br />
          Tel.0345-534-2428
          <br />
          2022 Pakistan Global Institute, All Rights Reserved. Privacy Policy
        </Typography>
      </Stack>
    </>
  );
}
