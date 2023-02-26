import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";
import MainFrame from "../Components/main/MainFrame";

const Dashboard = () => {

    // get all tudu from back end store it here. even filtered tudu is stored here
    const [tudu, setTudu] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        async function fetchData() {
            const data = Cookies.get("id");
            setTudu(await GetTodos(data));
        }
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar tudu={tudu} setTudu={setTudu}  />
            <MiddleSection tudu={tudu} setTudu={setTudu}  />
            {/* list item table view */}
            {/* <MainFrame tudu={tudu} setTudu={setTudu} /> */}
        </div>
    );
};

export default Dashboard;
