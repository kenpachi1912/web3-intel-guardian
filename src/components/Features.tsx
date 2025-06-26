
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Wallet, Globe, AlertTriangle, BarChart3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Advanced LLM analysis using Amazon Bedrock's Claude and Titan models to identify scams and fake news with high accuracy."
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant analysis of tweets, posts, and wallet interactions. Get immediate alerts about potential threats."
    },
    {
      icon: Wallet,
      title: "CDP Wallet Integration",
      description: "Secure authentication and payment processing through Coinbase Developer Platform wallet integration."
    },
    {
      icon: Globe,
      title: "Decentralized Infrastructure",
      description: "Backend hosted on Akash Network for truly decentralized compute and enhanced security."
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts",
      description: "Receive notifications about suspicious activities, scam patterns, and potential security threats."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and analytics about detected threats, trends, and your Web3 security posture."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Web3 Security
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive protection against scams, fake news, and malicious activities in the Web3 ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
