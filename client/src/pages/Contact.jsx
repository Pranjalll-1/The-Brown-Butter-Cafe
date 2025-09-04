import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-2xl w-full bg-cafe-dark/80 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-cafe-warm-accent">
          Contact Us
        </h1>
        <p className="text-lg mb-2">
          We'd love to hear from you! Reach out with any questions, feedback, or
          just to say hello.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <span className="font-semibold text-cafe-warm-accent">Email:</span>
            <span className="ml-2 text-foreground">
              brownbuttercafe@email.com
            </span>
          </div>
          <div>
            <span className="font-semibold text-cafe-warm-accent">Phone:</span>
            <span className="ml-2 text-foreground">+91 98765 43210</span>
          </div>
          <div>
            <span className="font-semibold text-cafe-warm-accent">
              Address:
            </span>
            <span className="ml-2 text-foreground">
              123 Main Street, Your City, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
