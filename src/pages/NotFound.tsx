import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 pt-16">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="hover-lift">
              <Home className="mr-2" size={20} />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()} className="hover-lift">
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
