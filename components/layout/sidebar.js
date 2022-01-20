import { Grid } from "@mui/material";
import Link from "next/link";

export default function SideBar() {
    return (
        <Grid className="sidebar" container xs={3} direction='column' alignItems="center" >
            <Grid>
                <h2>Onboarding.</h2>
                <Grid
                    className='sidebar-links'
                    container
                    xs={12}
                    direction="column"
                    justifyContent="space-between">
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <Link href="/dashboard/events">Events</Link>
                    <Link href="/dashboard/activity">Activity</Link>
                    <Link href="/dashboard/teams">Teams</Link>
                    <Link href="/dashboard/planning">Planning</Link>
                    <Link href="/dashboard/account">Account</Link>
                </Grid>
                <Grid>
                    <Link href="/dashboard/settings">Settings</Link>
                </Grid>
            </Grid>
        </Grid>
    )
}