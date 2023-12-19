import { Button } from "@/components/ui/button";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import TaskContainer from "@/components/task-board/TaskContainer";
import SideBar from "@/components/layout/SideBar";
import FunctionToolBar from "@/components/layout/FunctionToolBar";

export default function TaskManagementPage() {
  return (
    <div className="ml-[261px] flex w-full dark:bg-[#20212c] ">
      {/* Sidebar */}
      <div className="fixed left-0 top-[65px] z-20 h-screen min-w-[261px] items-center border-r border-solid  bg-white dark:bg-[#2b2c37]">
        <div className="mx-auto my-16 h-full w-[200px]">
          <SideBar />
        </div>
      </div>
      <div className="mx-16 mt-28 max-h-[calc(100%-10rem)] flex-1">
        {/* Functional */}
        <FunctionToolBar />
        {/* Task board */}
        <TaskContainer />
      </div>
    </div>
  );
}
