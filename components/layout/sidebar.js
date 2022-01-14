import "@material-ui/core";

export default function Sidebar() {
    return (
        <div className={"nav-container"}>
            <h1>Onboarding.</h1>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Activity</li>
                    <li>Teams</li>
                    <li>Planning</li>
                    <li>Account</li>
                </ul>
            </nav>
            <div className={"settings-container"}>
                Settings
            </div>

            <style jsx>{`
                .nav-container nav, .settings-container {
                    font-weight: 800;
                    font-size:1.5em;
                }
                .nav-container {
                    height:100%;
                    display:flex;
                    flex-direction:column;
                }
                nav {
                    margin-top:5%;
                }
                nav ul {
                    margin:0;
                    padding:0;
                    list-style:none;
                    display:flex;
                    flex-direction:column;
                }
                nav ul li,.settings-container {
                padding: 10% 10%;
                cursor: pointer;
                }
                
                h1{
                    padding : 0 10%;
                    cursor: default;
                }
                .settings-container {
                }
                nav ul li:hover, .settings-container:hover {
                transition-duration: 0.2s;
                background:#C9C9C9FF;
                }
            `}</style>
        </div>
    )
}