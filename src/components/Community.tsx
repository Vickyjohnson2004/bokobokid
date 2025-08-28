import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import video1 from "./../assets/video1.mp4";
import video2 from "./../assets/video2.mp4";
import video3 from "./../assets/video3.mp4";

export const Community = () => {
  const videoSrc = [video1, video2, video3];
  return (
    <section className="py-2 bg-gradient-to-b from-muted to-background">
      <div className="container mt-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl mt-11 text-muted-foreground font-ubuntu max-w-4xl mx-auto leading-relaxed">
            Joining the Bokobokids movement means joining a welcoming community
            of families who desire to empower children with indestructible tools
            to promote inner well being.
          </p>
        </div>

        {/* Quote Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-warm">
            <CardContent className="p-10 md:p-12 text-center">
              <blockquote className="font-playfair text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                "If it takes a village to raise a child, it will take a
                Bokobokids village to raise the next generation of global
                citizens."
              </blockquote>
              <cite className="text-muted-foreground font-ubuntu text-lg">
                — Bokobokids Village Philosophy
              </cite>
            </CardContent>
          </Card>
        </div>

        {/* Responsive Video Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-10">
          {videoSrc.map((src, index) => (
            <div
              key={index}
              className="w-full md:w-[30%] aspect-[3/4] rounded-md overflow-hidden shadow-lg shadow-black"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
