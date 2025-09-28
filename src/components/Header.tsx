import cosmosLogo from "@/assets/cosmos-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={cosmosLogo} 
              alt="Cosmos logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold text-foreground">Cosmos</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sessions" className="text-muted-foreground hover:text-primary transition-colors">
              Sessions
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;