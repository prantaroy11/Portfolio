import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, readable, and maintainable code using best practices learned through DSA, OOP, and real-world projects.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed and scalability, from efficient database queries to responsive frontend interfaces.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Experience working in team-based projects, contributing to shared codebases, and communicating ideas clearly with peers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring AI-driven development, automation, and modern frameworks to stay ahead with emerging technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science Engineering undergraduate at IIIT Gwalior with a strong interest in building scalable web applications and AI-powered systems. My journey into development began with problem-solving and data structures, and has grown into hands-on experience with modern full-stack and AI technologies.

I specialize in React, Node.js, and modern JavaScript, and have worked extensively with tools like MongoDB, Firebase, Stripe, and Socket.io to build real-world applications used by hundreds of users. I also explore AI systems using LangChain and LangGraph to automate and generate software solutions.

Beyond development, I actively practice competitive programming and have solved 300+ DSA problems across platforms like LeetCode and takeUforward, sharpening my analytical thinking and algorithmic skills.

              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build reliable, scalable, and meaningful software —
combining strong problem-solving skills with clean code and modern
technologies to create products that make a real impact."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};