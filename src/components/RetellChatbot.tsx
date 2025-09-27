import { useState, useEffect } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    RetellWebClient: any;
  }
}

const RetellChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [retellClient, setRetellClient] = useState<any>(null);

  useEffect(() => {
    // Load Retell SDK
    const script = document.createElement("script");
    script.src = "https://cdn.retellai.com/retell-client-js-sdk.js";
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const toggleChat = async () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      
      if (isLoaded && window.RetellWebClient && !retellClient) {
        try {
          const client = new window.RetellWebClient({
            publicKey: "public_key_2a75fd5f3c6789cf3d1e6",
            agentId: "KeyForFaqBot",
          });
          
          setRetellClient(client);
          await client.startCall();
        } catch (error) {
          console.error("Error starting Retell call:", error);
        }
      }
    } else {
      setIsOpen(false);
      if (retellClient) {
        try {
          await retellClient.stopCall();
        } catch (error) {
          console.error("Error stopping Retell call:", error);
        }
      }
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const restoreChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-cosmic hover:shadow-nebula bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-300 z-50"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div 
          className={`fixed bottom-6 right-6 w-96 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-cosmic transition-all duration-300 z-50 ${
            isMinimized ? "h-16" : "h-96"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ask our Assistant</h3>
                <p className="text-xs text-muted-foreground">Space exploration expert</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={isMinimized ? restoreChat : minimizeChat}
                className="w-8 h-8 p-0 hover:bg-accent/20"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="w-8 h-8 p-0 hover:bg-destructive/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex-1 p-4 h-80">
              {!isLoaded && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-pulse-glow w-8 h-8 bg-primary/20 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Loading assistant...</p>
                  </div>
                </div>
              )}
              
              {isLoaded && !retellClient && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-muted-foreground mb-2">Assistant ready</p>
                    <p className="text-xs text-muted-foreground">Click to start voice chat</p>
                  </div>
                </div>
              )}
              
              {retellClient && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-pulse-glow w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-semibold mb-1">Voice chat active</p>
                    <p className="text-xs text-muted-foreground">Ask me anything about space!</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RetellChatbot;