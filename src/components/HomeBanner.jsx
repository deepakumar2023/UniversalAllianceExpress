import { Stack } from '@mui/material';
import React from 'react';

function HomeBanner() {
    return (
        <Stack
            sx={{
                position: "relative",
                minHeight: "420px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "black",
                overflow: "hidden",
                '::before': {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                },
            }}
        >
            <video
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
                autoPlay
                muted
                loop={Infinity}
            >
                <source src="/homebanner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Stack>
    );
}

export default HomeBanner;