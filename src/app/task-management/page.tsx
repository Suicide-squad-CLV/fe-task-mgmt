import { Button } from "@/components/ui/button";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import TaskContainer from "@/components/task-board/TaskContainer";
import SideBar from "@/components/layout/SideBar";

export default async function TaskManagementPage() {
  return (
    <div className="ml-[261px] flex w-full border-l border-solid dark:bg-[#20212c] ">
      {/* Sidebar */}
      <div className="fixed left-0 top-[69px] z-20 h-screen min-w-[261px] items-center  bg-white dark:bg-[#2b2c37]">
        <div className="mx-auto my-16 h-full  w-[200px]">
          <SideBar />
        </div>
      </div>
      <div className="mx-16 mt-28 flex-1">
        {/* Functional */}
        <div className="mb-8 flex h-12 items-center justify-between">
          <p className="text-3xl font-medium text-neutral-700">Tasks</p>
          <div className="flex items-center gap-4">
            {/* <ArrowUturnLeftIcon className="h-6 w-6" />
            <ArrowUturnRightIcon className="h-6 w-6" />
            <UsersIcon className="h-6 w-6" />
            <AdjustmentsHorizontalIcon className="h-6 w-6" /> */}
            <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">
              New Task <PlusSmallIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {/* Task board */}
        <TaskContainer />
      </div>
    </div>
  );
}
