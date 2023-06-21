import React, { useState } from "react";
import SendMessage from "./SendMessage";
import styles from "../pages/skuber/styles.module.css";

import { Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1025,
      lg: 1441,
      xl: 1921,
    },
  },
});

const useStyles = (theme) => ({
  getInTouch: {
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "500",
    padding: "16px 106px",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
      padding: "16px 128.5px",
    },
  },
});
const classes = useStyles(theme);

const GetInTouch = () => {
  return (
    <div className={styles.frameParent4}>
      <div className={styles.frameParent6}>
        <div
          style={{
            borderRadius: "40px",
            overflow: "hidden",
            background: "#F1F3F9",
          }}
        >
          <Lottie
            animationData={lottie5}
            loop={true}
            autoplay={true}
            className={styles.frameChild2}
          />
        </div>
        <div className={styles.component224Parent}>
          <img
            className={styles.component224Icon}
            alt=""
            src="/plug/component-224.svg"
          />
          <div className={styles.buyingACar}>
            <Grid container sx={classes.buyingACar}>
              Buying a car
            </Grid>
          </div>
          <div className={styles.onlineVehiclePurchase}>
            <Grid container sx={classes.onlineVehiclePurchase}>
              Online vehicle purchase and vehicle configuration
            </Grid>
          </div>
          <div className={styles.customersCanQuickly}>
            <Grid container sx={classes.customersCanQuickly}>
              Customers can quickly lookup and purchase a vehicle based on the
              inventory data of dealerships, and preview quotations by
              configuring interior, exterior colors and specs. Based on the
              configuration, customers can receive live consultation on
              purchases or be connected with online sales channels.
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.frameParen6}>
        <div
          style={{
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={lottie6}
            loop={true}
            autoplay={true}
            className={styles.frameChild2}
          />
        </div>

        <div className={styles.component224Parent}>
          <img
            className={styles.component224Icon}
            alt=""
            src="/plug/component-2241.svg"
          />

          <div className={styles.buyingACar}>
            <Grid container sx={classes.buyingACar}>
              Roadside assistance
            </Grid>
          </div>
          <div className={styles.onlineVehiclePurchase}>
            <Grid container sx={classes.onlineVehiclePurchase}>
              Swift and reliable assistance for safe recovery
            </Grid>
          </div>
          <div className={styles.customersCanQuickly}>
            <Grid container sx={classes.customersCanQuickly}>
              Customers can request a roadside assistant in the case of an
              emergency. We provide a swift assistance based on customer's
              location, and customers can check real-time progress status of the
              assistance.
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div
          style={{
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={lottie7}
            loop={true}
            autoplay={true}
            className={styles.frameChild2}
          />
        </div>
        <div className={styles.component224Parent}>
          <img
            className={styles.component224Icon}
            alt=""
            src="/plug/component-2242.svg"
          />

          <div className={styles.buyingACar}>
            <Grid container sx={classes.buyingACar}>
              Sell used car
            </Grid>
          </div>
          <div className={styles.onlineVehiclePurchase}>
            <Grid container sx={classes.onlineVehiclePurchase}>
              Get estimates from dealers by simply taking a photo
            </Grid>
          </div>
          <div className={styles.customersCanQuickly}>
            <Grid container sx={classes.customersCanQuickly}>
              To sell a used car, customers can share the specs, option and
              condition of their vehicle with a dealer. Dealers can provide a
              quotation based on the information. A deal takes place upon the
              agreed quotation and schedule.
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div
          style={{
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={lottie8}
            loop={true}
            autoplay={true}
            className={styles.frameChild2}
          />
        </div>

        <div className={styles.component225Parent}>
          <img
            className={styles.component224Icon}
            alt=""
            src="/plug/component-225.svg"
          />

          <div className={styles.buyingACar}>
            <Grid container sx={classes.buyingACar}>
              Live consult
            </Grid>
          </div>
          <div className={styles.onlineVehiclePurchase}>
            <Grid container sx={classes.onlineVehiclePurchase}>
              Direct communication between customer and dealers through Live
              Consultation and Chat functions
            </Grid>
          </div>
          <div className={styles.customersCanQuickly}>
            <Grid container sx={classes.customersCanQuickly}>
              Customers can request a live or scheduled consultation to a dealer
              by selecting the type of service they want. Dealers can conduct a
              consultation with the customer via mobile/PC application. Screen
              sharing and device switching features for the dealer allow a
              seamless consultation in a non-face-to-face environment.
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div
          style={{
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={lottie9}
            loop={true}
            autoplay={true}
            className={styles.frameChild2}
          />
        </div>
        <div className={styles.component224Parent}>
          <img
            className={styles.component224Icon}
            alt=""
            src="/plug/component-2251.svg"
          />

          <div className={styles.buyingACar}>
            <Grid container sx={classes.buyingACar}>
              {`Exterior repair & Service booking`}
            </Grid>
          </div>
          <div className={styles.onlineVehiclePurchase}>
            <Grid container sx={classes.onlineVehiclePurchase}>
              Receive reminders and schedule vehicle maintenance appointments
              online
            </Grid>
          </div>
          <div className={styles.customersCanQuickly}>
            <Grid container sx={classes.customersCanQuickly}>
              Customers can get assistance with scheduled or occasional
              maintenance services after purchasing a vehicle. They can make a
              request by selecting the type of service and desired schedule,
              then consult with a dealer for a quotation. Reminders for next
              service appointments are provided based on their service history.
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
