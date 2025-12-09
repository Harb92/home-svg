import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-br from-cyan-600 via-teal-500 to-cyan-400">
      <div className="max-w-4xl mx-auto">
        <div className="bg-foreground rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Be Part of Something Big
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Over 3 million people have already chosen Valu. Download the app and experience the difference.
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground rounded-full px-8 py-6 text-base"
          >
            Download valu app now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
