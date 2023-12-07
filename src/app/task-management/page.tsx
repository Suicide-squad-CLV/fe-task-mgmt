import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import {
  AdjustmentsHorizontalIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  BookmarkSquareIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusSmallIcon,
  Square2StackIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="ml-[261px] flex w-full border-l border-solid dark:bg-[#20212c] ">
      {/* Sidebar */}
      <div className="fixed left-0 top-[69px] z-20 h-screen min-w-[261px] items-center  bg-white dark:bg-[#2b2c37]">
        <div className="mx-auto my-16 h-full  w-[200px]">
          <div className="flex min-h-[750px] flex-col">
            <Button className="w-full bg-blue-600 px-4 py-2 hover:bg-blue-700">
              <ListBulletIcon className="mr-2 h-6 w-6" /> Tasks
            </Button>
            <Button className="mt-auto w-full bg-[#FDF0EC] px-4 py-2 text-[#81290E] hover:bg-[#ddc3bb]">
              <ArrowUturnLeftIcon className="mr-2 h-6 w-6" /> Log out
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-28 flex-1">
        {/* Functional */}
        <div className="mb-8 flex h-12 items-center justify-between">
          <p className="text-3xl font-medium text-neutral-700">Tasks</p>
          <div className="flex items-center gap-4">
            <ArrowUturnLeftIcon className="h-6 w-6" />
            <ArrowUturnRightIcon className="h-6 w-6" />
            <UsersIcon className="h-6 w-6" />
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
            <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">
              New Task <PlusSmallIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {/* Task container */}
          <div className=" min-h-[720px] rounded-xl bg-[#eef2fc] p-3">
            <div className="flex items-center text-[#14367B]">
              <Square2StackIcon className="mr-2 h-6 w-6" />
              <span className="text-xl font-medium">To do</span>
            </div>
            {/* task list */}
            <div>
              {/* task item */}
              <Card className="my-2 p-3">
                <div className="mb-3 flex justify-between">
                  <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <PencilIcon className="mr-2 h-5 w-5" />
                    <TrashIcon className="mr-2 h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quisquam itaque consequuntur blanditiis
                  aliquid, consectetur laudantium, minima sed magnam iusto quidem. Vero nihil animi, minus ut illum
                  ullam consequuntur aut!
                </p>
              </Card>
              {/* task item */}
              <Card className="my-2 p-3">
                <div className="mb-3 flex justify-between">
                  <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <PencilIcon className="mr-2 h-5 w-5" />
                    <TrashIcon className="mr-2 h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quisquam itaque consequuntur blanditiis
                  aliquid, consectetur laudantium, minima sed magnam iusto quidem. Vero nihil animi, minus ut illum
                  ullam consequuntur aut!
                </p>
              </Card>
              {/* task item */}
              <Card className="my-2 p-3">
                <div className="mb-3 flex justify-between">
                  <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <PencilIcon className="mr-2 h-5 w-5" />
                    <TrashIcon className="mr-2 h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quisquam itaque consequuntur blanditiis
                  aliquid, consectetur laudantium, minima sed magnam iusto quidem. Vero nihil animi, minus ut illum
                  ullam consequuntur aut!
                </p>
              </Card>
              {/* task item */}
              <Card className="my-2 p-3">
                <div className="mb-3 flex justify-between">
                  <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <PencilIcon className="mr-2 h-5 w-5" />
                    <TrashIcon className="mr-2 h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quisquam itaque consequuntur blanditiis
                  aliquid, consectetur laudantium, minima sed magnam iusto quidem. Vero nihil animi, minus ut illum
                  ullam consequuntur aut!
                </p>
              </Card>
            </div>
          </div>
          {/* Task container */}
          <div className="min-h-[720px] rounded-xl bg-[#FFF6EB] p-3">
            <div className="flex items-center text-[#8F4F00]">
              <ClockIcon className="mr-2 h-6 w-6" />
              <span className="text-xl font-medium">In Progress</span>
            </div>
          </div>
          {/* Task container */}
          <div className=" min-h-[720px] rounded-xl bg-[#FAD0C6] p-3">
            <div className="flex items-center text-[#81290E]">
              <ClipboardDocumentCheckIcon className="mr-2 h-6 w-6" />
              <span className="text-xl font-medium">Completed</span>
            </div>
          </div>
          {/* Task container */}
          <div className=" min-h-[720px] rounded-xl bg-[#C1E1C1] p-3">
            <div className="flex items-center text-[31532f]">
              <BookmarkSquareIcon className="mr-2 h-6 w-6" />
              <span className="text-xl font-medium">Archived</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
