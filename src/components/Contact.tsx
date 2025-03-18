import React from "react";
import RevealAnimation from "./RevealAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // In a real app, you would handle the form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 bg-secondary/10">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Get in Touch</h2>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <RevealAnimation delay={100}>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Let's Connect</h3>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out. I'm always open to new
                connections and collaborations.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>aryankhatana01@gmail.com</span>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-background/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/60"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-background/60"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="bg-background/60 min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
