import { Avatar, Box, Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { FC, ReactNode } from 'react'
import ImageNA from "./assets/ImageNA.svg";

interface IDialogue {
    open: boolean;
    children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
    onClose?: (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => void | undefined;
    label: string | undefined;
    message: string | undefined;
    onClickClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    iconBgColor?: string | undefined;
    icon?: string | undefined;
}

const Dialogue: FC<IDialogue> = (props: IDialogue) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <Stack m={1.5} sx={{ minWidth: '45vh', maxWidth: "1000px" }}>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        m: 1,
                    }}
                >
                    <div
                        style={{
                            width: "6.5vh",
                            height: "6.5vh",
                            borderRadius: "50%",
                            backgroundColor: props.iconBgColor || "#F15D22",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            border: '1px solid red',
                            alignItems: "center",
                        }}

                    >
                        {/* <img src={props.icon || ImageNA} style={{ height: "3.5vh" }} /> */}
                        {props.icon || <ImageNA />}
                    </div>
                    <Stack
                        sx={{
                            alignItems: "flex-start",
                            justifyContent: "center",
                            flexGrow: 1,
                            ml: '1vw',
                            mr: '2vw'
                        }}
                        spacing={2}
                    >
                        {/* <DialogTitle flexGrow={1} > */}
                        <Typography sx={{ fontSize: '2vh', fontWeight: 700 }}>{props.label ?? "Comfirmation"}</Typography >
                        <Typography sx={{ fontSize: '1.2vh', fontWeight: 400 }}>{props.message ?? "Do you want to confirm the Release?"}</Typography >
                        {/* </DialogTitle> */}
                    </Stack>
                    <IconButton onClick={props.onClickClose} sx={{ transform: "scale(0.8)", position: "absolute", top: 0, right: 0 }} disableRipple >
                        <GridCloseIcon />
                    </IconButton>
                </Stack>
                <Stack mx={1} mb={1}>
                    {props.children}
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default Dialogue
