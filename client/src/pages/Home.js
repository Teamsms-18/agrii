import React from "react";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Home() {
  const classes = useStyles();
  const navItem = [];

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <Grid
            container
            spacing={3}
            style={{ height: "100%", minHeight: "90vh", width: "100%" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                alt="."
                src="/homeArt.png"
                style={{ width: "90%", height: "auto" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
                color: "#000", // Font color changed to black
              }}
            >
              <div className={classes.HomeCardWrap}>
                <h1 className={classes.pageHeading}>Assign Roles</h1>
                <Link to="/roleAdmin" style={{ textDecoration: "none" }}>
                  <Button className={classes.HomeBtn}>Assign</Button>
                </Link>
                <br />

                <h1 className={classes.pageHeading}>Visit As</h1>
                <Link to="/manufacturer/manufacture" style={{ textDecoration: "none" }}>
                  <Button className={classes.HomeBtn}>Farmer</Button>
                </Link>
                <Link to="/ThirdParty/allProducts" style={{ textDecoration: "none" }}>
                  <Button className={classes.HomeBtn}>Manufacturer</Button>
                </Link>
                <Link to="/DeliveryHub/receive" style={{ textDecoration: "none" }}>
                  <Button className={classes.HomeBtn}>Delivery Hub</Button>
                </Link>
                <Link to="/Customer/buy" style={{ textDecoration: "none" }}>
                  <Button className={classes.HomeBtn}>Customer</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Navbar>
      </div>
    </>
  );
}
