import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f9f9fb",
    minHeight: "100vh",
  },
  appBar: {
    backgroundColor: "#144729",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#fff",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#144729",
    color: "#fff",
    boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    fontWeight: 600,
    fontSize: "1.1rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#f4f6f8",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({ pageTitle, navItems, children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ display: "flex", alignItems: "center", fontWeight: 600 }}
          >
            <img
              alt="logo"
              src="/logo.png"
              style={{ height: "40px", marginRight: 10 }}
            />
            AGRI-CHAIN
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <span>{pageTitle}</span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <List>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <ListItem
              button
              onMouseEnter={(e) => (e.currentTarget.style.background = "#14288c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/explorer" style={{ textDecoration: "none", color: "#fff" }}>
            <ListItem
              button
              onMouseEnter={(e) => (e.currentTarget.style.background = "#14288c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <ListItemText>Explorer</ListItemText>
            </ListItem>
          </Link>
        </List>

        <List>
          {navItems.length !== 0 &&
            navItems.map((item) => (
              <Link
                key={item[0]}
                to={item[1]}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <ListItem
                  button
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#14288c")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <ListItemText primary={item[0]} />
                </ListItem>
              </Link>
            ))}
        </List>

        <div
          style={{
            marginTop: "auto",
            padding: "1rem 0",
            borderTop: "1px solid #444",
            textAlign: "center",
            fontWeight: 500,
            fontSize: "0.9rem",
          }}
        >
          By Team SMS &nbsp;&nbsp;
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/Teamsms-18/Agricultural_Supplychain_Management_System"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ color: "#fff" }} />
          </a>
        </div>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ margin: "0 auto", maxWidth: 1300 }}>{children}</div>
      </main>
    </div>
  );
}
