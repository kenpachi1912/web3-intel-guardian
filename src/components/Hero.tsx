
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8">
            <Zap className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-300">Powered by Amazon Bedrock & Akash Network</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Detect Web3 Scams with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            ChainCheck.AI analyzes tweets, posts, and wallet interactions to protect you from 
            fake news and cryptocurrency scams using advanced LLM technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-lg px-8 py-4 h-auto"
            >
              Start Analyzing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4 h-auto"
            >
              View Demo
            </Button>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span>CDP Wallet Auth</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span>Decentralized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
