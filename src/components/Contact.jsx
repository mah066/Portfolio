import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <a
                  href="mailto:mhaazim6606@gmail.com"
                  className="hover:text-primary"
                >
                  mhaazim6606@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <a
                  href="tel:+447554509824"
                  className="hover:text-primary"
                >
                  +44 7554 509824
                </a>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <span>Manchester, UK</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 bg-secondary/20 p-8 rounded-2xl border border-border/50"
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_KEY}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Your message here..."
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};
