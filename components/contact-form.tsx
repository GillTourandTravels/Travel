"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const whatsappMessage = `New Inquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const whatsappURL = `https://wa.me/919218921595?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp only
    window.open(whatsappURL, "_blank");

    // Show success message instead of form
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Contact Us
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          {!submitted ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  We'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            // SUCCESS MESSAGE
            <Card className="flex items-center justify-center text-center p-10">
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-3">
                  Thank You!
                </h3>
                <p className="text-foreground text-lg">
                  Your message has been sent on WhatsApp.
                  <br />
                  We will contact you shortly.
                </p>
              </div>
            </Card>
          )}

          {/* RIGHT COLUMN - Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  Connect With Us
                </CardTitle>
                <CardDescription>
                  Find us on all major platforms
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap items-center gap-6">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919218921595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <MessageCircle size={22} />
                    WhatsApp
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/gillholidays0095?igsh=MWkybDMwczM1d3pwZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <svg
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 
          2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 
          2a5 5 0 100 10 5 5 0 000-10zm6.5-.2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      />
                    </svg>
                    Instagram
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@YOUR_YOUTUBE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <svg
                      width="26"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-1-1.9-1-2.4-1.1C16.6 
          2.5 12 2.5 12 2.5s-4.6 0-8.2.3c-.5.1-1.5.1-2.4 
          1.1C.7 4.6.5 6.2.5 6.2s-.5 1.9-.5 3.8V12c0 
          1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.9 1 2.1 1 2.7 
          1.1C6 19.5 12 19.5 12 19.5s4.6 0 8.2-.3c.5-.1 1.5-.1 
          2.4-1.1.7-.7.9-2.3.9-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.8 
          14.9V8.8l6.4 3.1-6.4 3z"
                      />
                    </svg>
                    YouTube
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/YOUR_LINKEDIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <svg
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 
          6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 
          2.5zM.5 8h4V24h-4V8zm7.5 
          0h3.8v2.2h.1c.5-1 1.8-2.2 
          3.8-2.2 4.1 0 4.9 2.7 4.9 
          6.2V24h-4v-7.6c0-1.8 
          0-4.1-2.5-4.1s-2.9 1.9-2.9 
          3.9V24h-4V8z"
                      />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Mail size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:gilltourandtravels.com@gmail.com"
                  className="text-primary hover:underline font-semibold"
                >
                  gilltourandtravels.com@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Phone size={24} />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+919218921595"
                  className="text-primary hover:underline font-semibold"
                >
                  +91 92189 21595
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
