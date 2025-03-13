// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import {
  Search,
  Home,
  CheckSquare,
  BarChart2,
  Bell,
  Calendar,
  Users,
  Settings,
  HelpCircle,
  MessageSquare,
  Plus,
} from "lucide-react";

interface Task {
  id: number;
  title: string;
  timeRange?: string;
  date?: string;
  progress?: string;
  icon: string;
  status: "today" | "recently";
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design onboarding process",
      timeRange: "2:15 PM - 2:30 PM",
      progress: "2/3",
      icon: "🎨",
      status: "today",
    },
    {
      id: 2,
      title: "Write weekly progress report",
      timeRange: "5:00 PM - 6:00 PM",
      progress: "0/1",
      icon: "📊",
      status: "today",
    },
    {
      id: 3,
      title: "Update user profile page",
      date: "Jun 8, 2022",
      progress: "4/5",
      icon: "⛵",
      status: "recently",
    },
    {
      id: 4,
      title: "Fix broken image upload",
      date: "Jun 8, 2022",
      progress: "0/4",
      icon: "🧰",
      status: "recently",
    },
  ]);

  const taskStats = {
    total: 20,
    assigned: 3,
    inProgress: 5,
    waiting: 2,
    today: 1,
    late: 0,
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-50 p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-script text-emerald-600">MoveIt</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem icon={<Home size={20} />} label="Home" active />
          <SidebarItem icon={<CheckSquare size={20} />} label="My tasks" />
          <SidebarItem icon={<BarChart2 size={20} />} label="Progress" />
          <SidebarItem icon={<Bell size={20} />} label="Notifications" />
          <SidebarItem icon={<Calendar size={20} />} label="Calendar" />
          <SidebarItem icon={<Users size={20} />} label="Teams" />
        </nav>

        <div className="mt-8 space-y-4">
          <button className="w-full py-3 bg-emerald-400 hover:bg-emerald-500 text-white rounded-md transition flex items-center justify-center gap-2">
            <Plus size={18} />
            New task
          </button>

          <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <Plus size={18} />
            Invite team
          </button>

          <div className="pt-4 border-t border-gray-200 space-y-1">
            <SidebarItem icon={<Settings size={20} />} label="Settings" />
            <SidebarItem icon={<HelpCircle size={20} />} label="Help" />
            <SidebarItem icon={<MessageSquare size={20} />} label="Feedback" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Home</h1>
            <p className="text-gray-500">All tasks across all projects</p>
          </header>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search all tasks"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            <StatCard
              value={taskStats.total}
              label="Total tasks"
              color="text-emerald-600"
            />
            <StatCard
              value={taskStats.assigned}
              label="Assigned to me"
              color="text-blue-600"
            />
            <StatCard
              value={taskStats.inProgress}
              label="In progress"
              color="text-purple-600"
            />
            <StatCard
              value={taskStats.waiting}
              label="Waiting on someone"
              color="text-orange-600"
            />
            <StatCard
              value={taskStats.today}
              label="Today"
              color="text-emerald-600"
            />
            <StatCard
              value={taskStats.late}
              label="Late"
              color="text-red-600"
            />
          </div>

          {/* Today's Tasks */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Today</h2>
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === "today")
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    icon={task.icon}
                    title={task.title}
                    timeRange={task.timeRange}
                    progress={task.progress}
                  />
                ))}
            </div>
          </div>

          {/* Recent Tasks */}
          <div>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Recently</h2>
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === "recently")
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    icon={task.icon}
                    title={task.title}
                    date={task.date}
                    progress={task.progress}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for sidebar items
function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition ${
        active ? "bg-white text-gray-800" : "text-gray-700 hover:bg-white/50"
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

// Component for stat cards
function StatCard({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition">
      <div className={`text-2xl font-semibold ${color}`}>{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

// Component for task cards
function TaskCard({
  icon,
  title,
  timeRange,
  date,
  progress,
}: {
  icon: string;
  title: string;
  timeRange?: string;
  date?: string;
  progress?: string;
}) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md text-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          {timeRange && <p className="text-sm text-gray-500">{timeRange}</p>}
          {date && <p className="text-sm text-gray-500">{date}</p>}
        </div>
      </div>
      <div className="text-sm text-gray-600">{progress}</div>
    </div>
  );
}
