import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { Link} from "react-router-dom";
import { pages } from "./layoutData";


function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null); // default serviceId


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Stack
      sx={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        bgcolor: "white",
        boxShadow: "0px 6px 8px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Stack sx={{ width: "6.5rem" }}>
              <img src="/logisticsLogo.png" alt="Company Logo" />
            </Stack>
          </Link>
          <Box
            sx={{
              width: "100%",
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, i) => (
                <Link
                  to={page.link || "#"}
                  style={{ textDecoration: "none", color: "#0d3f5f" }}
                  key={i}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{ width: "100px" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.pageName}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Typography
                key={index}
                sx={{
                  m: 2,
                  display: "block",
                  textTransform: "capitalize",
                  fontSize: ".95rem",
                  fontWeight: "700",
                  color: "#0d3f5f", // Added color
                }}
              >
                <Link
                  to={page.link || "#"}
                  style={{
                    textDecoration: "none",
                    color: "#0d3f5f",
                  }}
                >
                  {page.pageName}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                bgcolor: "#EAAA00",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Stack>
  );
}

export default Header;
