import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          fontWeight="bold"
          color="primary"
        >
          Sociopath
        </Typography>
        <Box sx={{
          padding: "2rem",
          alignContent: "center"
        }}><Form /></Box>
        
      </Box>
      <Box
        width={isNonMobileScreens ? "40%" : "90%"}
        p="2rem"
        m="2rem auto"
        textAlign="center"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography> Welcome to Sociopath, live unreal!</Typography>

      </Box>

    </Box>
  );
};

export default LoginPage;
