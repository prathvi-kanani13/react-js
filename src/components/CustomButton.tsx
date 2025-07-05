import React from "react";
import { Button } from "@mui/material";

//1. Define prop types
interface CustomButton {
    Label: string;
    onClick: () => void;
    color?: "primary" | "secondary";
}

//2. Create the functional component
const CustomButton: React.FC<CustomButton> = ({ Label, onClick, color = "primary" }) => {
    return (
        <Button variant="contained" color={color} onClick={onClick}>
            {Label}
        </Button>
    );

};
export default CustomButton;