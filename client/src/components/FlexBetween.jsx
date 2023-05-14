import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween;

/**
 * This is a React component that creates a styled Box component
 *  using Material-UI's styling solution styled and sets its display to flex, 
 * its justifyContent to space-between, and its alignItems to center. 
 * The resulting component, FlexBetween, can be used to create a 
 * flexible container with content distributed evenly between the 
 * left and right sides and vertically centered.

The Box component is a basic component in Material-UI that 
can be used to create a rectangular box. By using the styled 
function provided by @mui/system, we can define custom styles 
for the Box component.

The FlexBetween component can be imported 
and used in other parts of the application as 
a regular component. For example, we can use it 
to create a container with two items aligned at 
the left and right edges:
 */