import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
function Nav() {
  const navItems = ["Home", "About", "Contact"];
  return(
    <Box sx={{position: "static"}}>
      <AppBar position="static" sx={{ backgroundColor: "#20232a", width: "100vw"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ color: "white", fontSize: "1.3rem" }}>
            My Website
          </Typography>
          
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
} export default Nav;