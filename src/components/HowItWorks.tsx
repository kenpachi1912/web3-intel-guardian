
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Shield, Zap, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Submit Content",
      description: "Paste tweets, social media posts, or wallet addresses you want to analyze for potential scams or fake news."
    },
    {
      icon: Shield,
      step: "02",
      title: "AI Analysis",
      description: "Our Amazon Bedrock LLM models analyze the content using advanced pattern recognition and threat detection algorithms."
    },
    {
      icon: Zap,
      step: "03",
      title: "Instant Results",
      description: "Receive detailed analysis results with risk scores, explanations, and actionable recommendations within seconds."
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Take Action",
      description: "Use the insights to make informed decisions, avoid scams, and protect your Web3 assets and reputation."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ChainCheck.AI
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, fast, and reliable scam detection in just four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent z-0"></div>
              )}
              
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 relative z-10">
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-mono text-cyan-400 mb-2">{step.step}</div>
                  <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
