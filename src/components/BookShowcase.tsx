import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Star, Quote } from 'lucide-react';

export const BookShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background pattern-geometric">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Image and Info */}
          <div className="relative">
            <Card className="overflow-hidden shadow-deep hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="relative h-[600px] bg-gradient-heritage flex items-center justify-center">
                  {/* Book Cover Mockup */}
                  <div className="relative w-80 h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 rotate-2 group-hover:rotate-0">
                    <div className="absolute inset-4 bg-gradient-to-br from-amber-600 to-orange-700 rounded-md flex flex-col items-center justify-center text-white p-6">
                      <div className="text-center mb-4">
                        <h3 className="font-playfair text-2xl font-bold mb-2">
                          The Winds of
                        </h3>
                        <h2 className="font-playfair text-4xl font-bold mb-4">
                          NAPATA
                        </h2>
                        <div className="w-16 h-1 bg-white/60 mx-auto mb-4"></div>
                        <p className="text-sm font-ubuntu">
                          Dr. Kheftusa Akhiba Ankh
                        </p>
                      </div>
                      <div className="mt-auto">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-2">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 animate-float">
                    <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary-glow" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-savanna rounded-full opacity-60 animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-earth rounded-full opacity-40 animate-float"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
                "The Winds of Napata"
              </h2>
              <h3 className="text-2xl font-ubuntu font-medium text-primary mb-6">
                And Its Modern Relevance
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground font-ubuntu leading-relaxed text-lg">
                    Dr. Kheftusa Akhiba Ankh's <em>The Winds of Napata</em> is a poignant tale that weaves 
                    African history, culture, and identity into an immersive narrative designed to inspire and empower.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    Through the lens of a young boy, Mark, and his journey between modern-day Manchester 
                    and his ancestral African roots, the book merges dreams, folklore, and historical insights.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    Set against the backdrop of historical kingdoms like Napata and Mali, the story rekindles 
                    pride in African heritage while addressing modern societal challenges.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    A compelling tool for young people grappling with identity and purpose, offering 
                    a pathway for personal growth and cultural connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heritage" size="lg" className="font-ubuntu">
                  Buy the Book
                </Button>
                <Button variant="savanna" size="lg" className="font-ubuntu">
                  Read Preview
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/5 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground font-ubuntu">
                  <strong>Special Focus:</strong> Particularly relevant for young men facing societal challenges, 
                  with over 7 million men in the U.S. experiencing unemployment and marginalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};