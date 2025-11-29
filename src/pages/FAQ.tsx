import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I submit my CV?",
      answer: "You can submit your CV through our dedicated CV Upload page. Simply fill out the required information, attach your CV file (PDF or DOCX), and accept our confidentiality agreements. Our recruitment team will review your submission and contact you if suitable opportunities arise.",
    },
    {
      question: "Do you support international placements?",
      answer: "Yes, we specialize in global recruitment and work with employers across multiple continents. We facilitate international placements and can guide both employers and candidates through visa requirements, relocation support, and cross-border employment considerations.",
    },
    {
      question: "What industries do you recruit for?",
      answer: "We recruit across a diverse range of industries including technology, finance, healthcare, engineering, logistics, operations, professional services, and more. Our team includes specialists with deep expertise in each sector.",
    },
    {
      question: "How long does the hiring process take?",
      answer: "Timeline varies based on role complexity and requirements. For most positions, our process takes 2-4 weeks from initial consultation to offer stage. Executive searches may require 4-8 weeks. We prioritize efficiency while maintaining thorough vetting standards.",
    },
    {
      question: "Do you charge candidates any fees?",
      answer: "No, we never charge candidates for our services. All recruitment fees are paid by employers. Our career advisory, CV optimization, interview preparation, and placement services are completely free for job seekers.",
    },
    {
      question: "How do employers begin working with you?",
      answer: "Employers can start by contacting us through our Contact page or calling directly. We'll schedule a discovery consultation to understand your hiring needs, company culture, and success criteria. From there, we develop a customized recruitment strategy.",
    },
    {
      question: "What regions do you operate in?",
      answer: "We operate globally with established networks in North America, Europe, Asia-Pacific, Middle East, and Africa. Our international reach allows us to source talent and serve employers across major business hubs worldwide.",
    },
    {
      question: "Are my details kept confidential?",
      answer: "Absolutely. Confidentiality is paramount. We never share candidate information without explicit permission. Your current employment status, job search, and personal details remain strictly confidential throughout our engagement.",
    },
    {
      question: "Do you assist with interview preparation?",
      answer: "Yes, comprehensive interview preparation is a core part of our candidate services. We provide personalized coaching, conduct mock interviews, offer employer insights, and share strategies to help you present your best self during interviews.",
    },
    {
      question: "How do you ensure candidate quality?",
      answer: "Our rigorous screening process includes skills assessment, background verification, reference checks, and cultural fit evaluation. We conduct in-depth interviews and only present candidates who meet all specified requirements and demonstrate genuine interest in the role.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-primary hover:text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
