import React from "react";

export default function useMobile() {
    const [isMobile, setMobile] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );

        setMobile(mobile);
    }, []);

    return { isMobile };
}
