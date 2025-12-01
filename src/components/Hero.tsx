import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-accent/20" />
      <div className="absolute bottom-40 right-20 w-20 h-20 rounded-full border border-accent/20" />
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-accent/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-0 right-0 flex justify-between items-center px-8"
        >
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => window.open('http://www.linkedin.com/in/thimesha-weliwita', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => window.location.href = 'mailto:mindakakt@gmail.com'}
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => window.location.href = 'tel:+94705594892'}
            >
              <Phone className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            variant="default"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center pt-24">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-accent/20" />
              <img
                src={heroPortrait}
                alt="Thimesha M. Weliwita"
                className="relative rounded-full w-full h-full object-cover shadow-elegant"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Thimesha M. Weliwita
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
              Systems Engineer & Business Analyst
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Spearheading digital transformation through innovative ERP solutions, 
              strategic business analysis, and seamless project coordination across 
              international operations.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-12 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground font-light">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-12 bg-border"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
