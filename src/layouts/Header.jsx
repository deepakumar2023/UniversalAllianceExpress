import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { pages } from "./layoutData";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
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
            <Stack sx={{ width: "140px" }}>
              <img src="/Untitled design.png" alt="Company Logo" />
            </Stack>
          </Link>

          <Box
            sx={{
              width: "100%",
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none", },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 ,
                  bgcolor: "#101c4b", // Set the background color to blue
                  height: "100%", // Ensure it covers the full height of the drawer
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page, index) => (
                    <Link
                      to={page.link || "#"}
                      style={{ textDecoration: "none", color: "#FFFF" }}
                      key={index}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary={page.pageName} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
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
                  color: "#0d3f5f",
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
