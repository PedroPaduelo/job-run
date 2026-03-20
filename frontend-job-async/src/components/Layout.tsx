import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Layers, ListTodo, Settings, Sun, Moon, Clock } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Jobs", href: "/jobs", icon: ListTodo },
  { name: "Queues", href: "/queues", icon: Layers },
  { name: "Recorrências", href: "/recurring-jobs", icon: Clock },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-60 border-r border-border flex flex-col" style={{ backgroundColor: 'hsl(var(--card))' }}>
        {/* Logo */}
        <div className="flex h-14 items-center gap-2 border-b border-border px-5">
          <Layers className="h-5 w-5 text-primary" />
          <span className="text-base font-semibold">Job Assync</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 p-3 flex-1">
          {navigation.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="pl-60">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
