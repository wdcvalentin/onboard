import {Box, Paper} from "@material-ui/core";

export default function MainBody() {
    return (
        <div className={"body-container"}>
            <h2>TITLE PAGE</h2>

            <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gap={2}>
                <Box gridColumn="span 8">
                </Box>
                <Box gridColumn="span 4">
                </Box>
                <Box gridColumn="span 4">
                </Box>
                <Box gridColumn="span 8">
                </Box>
            </Box>

            <style jsx>{`
                .nav-container nav, .settings-container {
                    font-weight: 800;
                    font-size:1.5em;
                }
            `}</style>
        </div>
    )
}