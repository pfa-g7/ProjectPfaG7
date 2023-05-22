import {Outlet} from "react-router-dom";
import {Container} from "reactstrap";
import Sidebar from ".././Components/dashboard/student/SideBar";
import "../assets/scss/StudentLaout.css";

const StudentLayout = () => {
    return (
        <main>
            <div className="">
                {/********Sidebar**********/}
                <aside className="sidebarArea shadow" id="sidebarArea">
                    <Sidebar/>
                </aside>
                {/********Content Area**********/}

                <div className="contentArea">
                    {/********Middle Content**********/}
                    <Container className="p-4 wrapper" fluid>
                        <Outlet/>
                    </Container>
                </div>
            </div>
        </main>
    );
};

export default StudentLayout;