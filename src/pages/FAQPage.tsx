
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from '@/components/ui/card';

const FAQPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-center mb-10">
              Find answers to common questions about CampusInsight
            </p>
            
            <Card className="shadow-md p-6 animate-scaleIn">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    What is CampusInsight?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    CampusInsight is a platform where students can share and access campus placement experiences. Our goal is to help students prepare better for placement interviews by learning from peers who have already gone through the process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I share my placement experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    After creating an account, navigate to your profile and click on "Add Review." Fill out the form with details about your placement experience, including the company, interview process, and any tips you'd like to share with others.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    Is my information kept private?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We take privacy seriously. While your reviews and shared experiences will be visible to other users, your contact information and other sensitive details are kept private. You can control what information is displayed on your public profile.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    How does the 1-on-1 chat feature work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Our chat feature allows you to connect directly with seniors or alumni from your college or others who have been placed in companies you're interested in. You can initiate a conversation through their profile, and if they accept, you can exchange messages privately.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I edit or delete my reviews?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, you can edit or delete your reviews at any time. Simply go to your profile, find the review you want to modify, and click on the edit or delete option.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I report inappropriate content?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    If you come across any content that violates our community guidelines, you can report it by clicking the "Report" button next to the content. Our moderation team will review it promptly.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">
                    Is CampusInsight free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, CampusInsight is completely free for students. We believe in making placement information accessible to all students regardless of their background.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium">
                    Can companies join CampusInsight?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We have plans to introduce company profiles in the future, where recruiters can share information about their hiring process and campus recruitment programs. If you represent a company and are interested, please contact us.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-lg font-medium">
                    How can I verify the authenticity of reviews?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We have a verification system for users who share their placement experiences. Verified reviews are marked with a badge, indicating that the user has provided proof of their placement, such as offer letters (with sensitive information redacted).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-lg font-medium">
                    I have more questions. How can I contact you?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    For any additional questions or concerns, please visit our Contact page or email us directly at support@campusinsight.com. We aim to respond to all inquiries within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
