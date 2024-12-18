import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// interfaces
type menus = {
    value: string | number;
    label: string;
};
interface IDropDown {
    label: string;
    value: any;
    onChange: (event: SelectChangeEvent) => void;
    menus: menus[];
    fullWidth?: boolean;
    height?: string | number;
}
// type guards
function isMenus(obj: menus[]): obj is menus[] {
    function isMenu(obj: any): obj is menus {
        return (
            typeof obj === "object" &&
            obj !== null &&
            (typeof obj.value === "string" || typeof obj.value === "number") &&
            typeof obj.label === "string"
        );
    }

    return Array.isArray(obj) && obj.every((menu: any) => isMenu(menu));
}

const DropDown: React.FC<IDropDown> = ({
    onChange,
    label,
    value,
    menus,
    fullWidth,
    height,
}) => {
    return (
        <Box sx={{ minWidth: !fullWidth ? 120 : "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    {label || "No Label"}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value || ""}
                    label={label || "No Label"}
                    onChange={onChange}
                    sx={{
                        height: height ? height : "48px" || "48px", // Adjust the height of the Select input
                        "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center",
                        },
                    }}
                >
                    {menus?.length > 0 && isMenus(menus) ? (
                        menus?.map((item, index) => (
                            <MenuItem key={item.label + index} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem key={0} value={0}>
                            No Menu
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};
export default React.memo(DropDown);
