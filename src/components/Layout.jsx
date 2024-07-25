import { Outlet } from "react-router-dom"
import { Box, Center } from "@chakra-ui/react"

export function Layout() {
    return (
        <Center>
            <Box maxW="32rem">
                <Outlet />
            </Box>
        </Center>
    );
}