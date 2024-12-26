import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import MesSnackbarContext from "../MesSnackbarContext/MesSnackbarContext";
import { Alert, Slide, Stack, Typography } from "@mui/material";

import CloseIcon from "/../assets/snackBarClose.svg";
import InfoIcon from "/../assets/severityInfo.svg";
import SuccessIcon from "/../assets/severitySuccess.svg";
import ErrorIcon from "/../assets/severityDanger.svg";
import WarningIcon from "/../assets/severityWarning.svg";
import "./SnackStyles.css";

interface Item {
  id: string;
  heading: string;
  message: string;
  severity: string;
  timeout?: number;
  visible?: boolean;
  timerId?: null | any;
}

interface IMesSnackbarProvider {
  children: PropsWithChildren<{}> | ReactNode | ReactNode[] | any;
  position?: "column-reverse" | "column";
}

const MesSnackbarProvider: FC<IMesSnackbarProvider> = ({
  children,
  position,
}) => {
  const [items, setItems] = useState<Item[]>([]);
  // Function to start the removal timer for an item
  const startRemoveTimer = (item: Item) => {
    item.timerId = setTimeout(() => {
      removeItem(item.id);
    }, item.timeout);
  };
  // Function to pause the removal timer for an item
  const pauseRemoveTimer = (item: Item) => {
    if (item.timerId) {
      clearTimeout(item.timerId);
      item.timerId = null;
    }
  };
  // Function to resume the removal timer for an item
  const resumeRemoveTimer = (item: Item) => {
    if (!item.timerId) {
      startRemoveTimer(item);
    }
  };
  // Function to add a new item to the list
  const addItem = (
    message: string,
    heading: string,
    severity: string,
    timeout: number
  ) => {
    const newItem = {
      heading: heading,
      message: message,
      severity: severity,
      timeout: timeout,
      visible: true,
      id: Date.now().toString(),
      timerId: null, // Store the timer ID for each item
    };
    setItems(() => [...items, newItem]);
    startRemoveTimer(newItem); // Start the removal timer for the new item
  };
  // Function to remove an item from the list
  const hideItem = (id: string) => {
    const oldItems = [...items];
    setItems(
      oldItems.map((val) => {
        if (val.id == id) {
          val.visible = false;
          return val;
        } else {
          return val;
        }
      })
    );
    setTimeout(
      () => setItems((prevItems) => prevItems.filter((item) => item.id !== id)),

      200
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item: Item) => item.id !== id));
  };

  // Event handler for the form submission
  const AddNewItem = (
    message: string,
    heading: string,
    severity: string,
    timeout: number
  ) => {
    addItem(message, heading, severity, timeout);
    // console.log(message, heading, severity, timeout);
  };

  useEffect(() => {
    console.log = console.warn = console.error = () => {};
  }, []);

  return (
    <MesSnackbarContext.Provider value={{ addSnack: AddNewItem }}>
      {/* Snackbar */}
      <Stack
        style={{
          // width: "300px",
          // height: "90%",
          // position: "absolute",
          // right: "0px",
          // top: "100px",
          // zIndex: 3,
          // height: "100%",
          // width: "100%",
          top: 0,
          right: 0,
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          zIndex: 3,
        }}
        sx={{ visibility: items?.length === 0 ? "hidden" : "visible" }}
        direction={position ?? "column"}
        spacing={1}
        padding={2}
      >
        {items?.map((item) => {
          return (
            <Snack
              key={item.id}
              item={item}
              pauseRemoveTimer={pauseRemoveTimer}
              resumeRemoveTimer={resumeRemoveTimer}
              hideItem={hideItem}
              removeItem={removeItem}
            />
          );
        })}
      </Stack>
      {children}
    </MesSnackbarContext.Provider>
  );
};

export default MesSnackbarProvider;

function Snack(props: any) {
  const [IsOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(props?.item.visible);
  }, [props?.item.visible]);

  const Height = "24px";
  const MinHeight = "70px";

  const messageCustomHeight =
    props?.item?.message?.length > 30
      ? "50px"
      : props?.item?.message?.length > 50
      ? "170px"
      : MinHeight;

  useEffect(() => {
    console.log = console.warn = console.error = () => {};
  }, []);

  return (
    <Slide
      direction="left"
      in={IsOpen}
      mountOnEnter
      unmountOnExit
      // onClose={() => props.removeItem(props.item.id)}
    >
      <Alert
        severity={props?.item?.severity}
        key={props?.item?.id}
        onMouseEnter={() => props?.pauseRemoveTimer(props?.item)}
        onMouseLeave={() => props?.resumeRemoveTimer(props?.item)}
        onClose={() => props.hideItem(props.item.id)}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
        }}
        componentsProps={{
          // closeIcon: <CloseIcon />,
          closeButton: {
            disableRipple: true,
            // style: { position:"fixed",right:1,top:8 },
          },
        }}
        iconMapping={{
          error: (
            <img src={ErrorIcon} alt="ErrorIcon" style={{ height: "1.2vh" }} />
          ),
          success: (
            <img
              src={SuccessIcon}
              alt="SuccessIcon"
              style={{ height: "1.2vh" }}
            />
          ),
          info: (
            <img src={InfoIcon} alt="InfoIcon" style={{ height: "1.2vh" }} />
          ),
          warning: (
            <img
              src={WarningIcon}
              alt="WarningIcon"
              style={{ height: "1.2vh" }}
            />
          ),
        }}
        sx={{
          width: "248px",
          minHeight:
            props?.item.message || props?.item.message === ""
              ? Height
              : messageCustomHeight,
          maxHeight: "170px",
          padding: "8px",
          ".MuiAlert-icon": {
            mr: "8px",
            mt: 0.35,
            alignItems: "normal",
          },
          ".MuiAlert-message": {
            alignItems: "start",
            overflowY:
              props?.item?.message?.length > 55
                ? "scroll"
                : "hidden" ?? "hidden",
            overflowX: "hidden",
          },
          borderLeft: `4px solid ${
            (props?.item?.severity === "error" && "#D60000  ") ||
            (props?.item?.severity === "success" && "#459D7C") ||
            (props?.item?.severity === "warning" && "#FFCA41") ||
            (props?.item?.severity === "info" && "#002856")
          }`,

          borderRadius: "4px",
          zIndex: 3,
        }}
      >
        {props?.item.heading === "" &&
          ((props?.item?.severity === "error" && "Danger Notification") ||
            (props?.item?.severity === "success" && "Success Notification") ||
            (props?.item?.severity === "warning" && "Warning Notification") ||
            (props?.item?.severity === "info" && "Info Notification "))}
        {
          <Typography sx={{ fontSize: "13px", fontWeight: 600, m: 0, p: 0 }}>
            {props?.item?.severity === "info" &&
              (props?.item?.heading ?? "Info Notification")}

            {props?.item?.severity === "success" &&
              (props?.item?.heading ?? "Success Notification")}

            {props?.item?.severity === "error" &&
              (props?.item?.heading ?? "Danger Notification")}

            {props?.item?.severity === "warning" &&
              (props?.item?.heading ?? "Warning Notification")}
          </Typography>
        }
        <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
          {props?.item?.message}
        </Typography>
      </Alert>
    </Slide>
  );
}
