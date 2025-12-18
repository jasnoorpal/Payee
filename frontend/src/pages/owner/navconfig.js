import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";

const ownerNavConfig = [
    { label: "Dashboard", path: "/owner/dashboard", icon: DashboardIcon },
    { label: "My Plots", path: "/owner/myplots", icon: MapIcon },
    { label: "Wardens", path: "/owner/wardens", icon: SupervisorAccountIcon },
    { label: "Tenants", path: "/owner/tenants", icon: PeopleIcon },
    { label: "Payments", path: "/owner/payments", icon: PaymentsIcon },
    { label: "Settings", path: "/owner/settings", icon: SettingsIcon },
];


export default ownerNavConfig;
