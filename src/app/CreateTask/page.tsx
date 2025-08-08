// app/tasks/new/page.tsx
"use client";

import { useState } from "react";
import {
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
  Search,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  
  Link,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function NewTaskPage() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");
  const [assignee, setAssignee] = useState("Me");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title: taskTitle,
      description: taskDescription,
      priority,
      deadline,
      assignee,
    });
    // Reset form or redirect
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-50 p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-serif italic text-emerald-600">
            MoveIt
          </h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem icon={<Home size={20} />} label="Home" />
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
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="md:hidden">
              <h1 className="text-2xl font-serif italic text-emerald-600">
                MoveIt
              </h1>
            </div>
            <div className="ml-auto">
              <Search className="text-gray-500" size={20} />
            </div>
          </div>
        </header>

        {/* Form Content */}
        <div className="max-w-3xl mx-auto p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Create a task"
                  className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 border-b border-gray-200">
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <span className="text-gray-500 text-sm font-medium">
                        H₁
                      </span>
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <span className="text-gray-500 text-sm font-medium">
                        H₂
                      </span>
                    </button>
                    <span className="mx-1 text-gray-300">|</span>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Bold size={16} className="text-gray-500" />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Italic size={16} className="text-gray-500" />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Underline size={16} className="text-gray-500" />
                    </button>
                    <span className="mx-1 text-gray-300">|</span>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <List size={16} className="text-gray-500" />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <ListOrdered size={16} className="text-gray-500" />
                    </button>
                    <span className="mx-1 text-gray-300">|</span>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Link size={16} className="text-gray-500" />
                    </button>
                  </div>
                  <textarea
                    id="description"
                    placeholder="Add more details to this task"
                    className="w-full p-4 bg-gray-50 focus:outline-none min-h-32"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    rows={6}
                  />
                </div>
              </div>

              {/* Priority */}
              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Priority
                </label>
                <div className="relative">
                  <select
                    id="priority"
                    className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="deadline"
                    placeholder="DD/MM/YYYY"
                    className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-4">
                    <CalendarIcon size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Assignee */}
              <div>
                <label
                  htmlFor="assignee"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Assignee
                </label>
                <div className="relative">
                  <select
                    id="assignee"
                    className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                  >
                    <option value="Me">Me</option>
                    <option value="Team Member 1">Team Member 1</option>
                    <option value="Team Member 2">Team Member 2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg transition"
                >
                  Create task
                </button>
              </div>
            </div>
          </form>
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
