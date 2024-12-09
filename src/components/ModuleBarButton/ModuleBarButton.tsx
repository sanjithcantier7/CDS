import { Grid2, IconButton, Paper, Typography, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react'

type Props = {
    icon: string | ReactNode;
    color: string;
    bgColor: string;
    hoverColor?: string;
    hoverBgColor?: string;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const ModuleBarButton: FC<Props> = ({
    bgColor, color, icon, onMouseEnter, onMouseLeave, hoverBgColor, hoverColor,
    label, onClick
}) => {
    return (

        <IconButton
            onClick={onClick}
            key={label + "-icon-btn-"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
                width: '13.5vh', height: '13.5vh',
                display: "flex",
                flexDirection: "column",
                borderColor: '#DDDDDD',
                borderRadius: '0.5vh',
                backgroundColor: bgColor,
                color: color,
                p: 0,
                py: 2,
                px: 2,
                "&:hover": {
                    backgroundColor: hoverBgColor || "#002856",
                    color: hoverColor || "#454545"
                },

            }}
            disableRipple
        >
            {
                typeof icon === "string" ? <img src={icon} alt={`${label + '-' + icon}`} style={{ height: '4vh', width: '4vh' }} /> : icon
            }
            <Typography sx={{
                fontSize: "1.5vh",
                pt: '0.5vh'
            }}>{label}</Typography>
        </IconButton>

    )
}

export default ModuleBarButton


