import { Box } from "@mui/material";
import Link from "next/link";

export default function SideBar() {
    return (
        <Box className={'sidebar'}>
            <div className={"sidebar-body"}>
                <h1>Onboarding.</h1>
                
                <nav>
                    <ul>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/dashboard/activity">Activity</Link></li>
                        <li><Link href="/dashboard/teams">Teams</Link></li>
                        <li><Link href="/dashboard/planning">Planning</Link></li>
                        <li><Link href="/dashboard/account">Account</Link></li>
                    </ul>
                </nav>

                <div className={"settings-container"}>
                    <Link href="/dashboard/settings">Settings</Link>
                </div>
            </div>
        </Box>
    )
}