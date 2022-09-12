import { Typography, Toolbar, AppBar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d6d5d5" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          fontWeight="bold"
          color="black"
          noWrap
          sx={{ fontSize: { md: "22px", sm: "17px", xs: "14px" } }}
        >
          CODING CHALLENGES
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
