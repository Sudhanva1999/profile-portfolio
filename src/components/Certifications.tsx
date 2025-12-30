import { useEffect, useContext } from 'react';
import { Award } from 'lucide-react';
import TimelineEvent from './TimelineEvent';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Certifications() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const certs = [
    {
      "title": "GenAl Bootcamp Certificate (Gold Squad)",
      "company": "ExamPro",
      "date": "2025",
      "icon": <img src={theme === 'dark' ? "icons/exampro.png" : "icons/exampro-dark-min.png"} alt={"ExamPro Icon"} className="filter aboutIcons" />,
      "description": "Earned the GenAl Bootcamp Certificate (Gold Squad), demonstrating foundational knowledge of GenAI, RAGs, Local and Hosted LLMs, Agentic LLMs, and more.",
      "technologies": ["GenAI", "RAGs", "Local and Hosted LLMs", "Agentic LLMs", "Google Gemeni", "OpenAI", "Anthropic", "Gemini", "Claude", "Amazon AWS Bedrock"],
      button: {
        text: 'View Certificate',
        link: 'https://app.exampro.co/student/achievements/validate/certificate/DKJr3qqbBe7zSUywc_N5ig2f1ad'
      }
    },
    {
      "title": "AWS Developer Associate",
      "company": "Amazon Web Services",
      "date": "2022",
      "icon": <img src={theme === 'dark' ? "icons/aws-dark.png" : "icons/aws-light.png"} alt={"AWS Icon"} className="filter aboutIcons" />,
      "description": "Earned the AWS Developer Associate certification, demonstrating thorough knowledge of AWS services and cloud computing concepts.",
      "technologies": ["AWS Lambda", "AWS CloudFront", "AWS S3", "AWS EC2", "AWS API Gateway", "AWS DynamoDB", "AWS IAM", "AWS CloudWatch", "AWS CloudTrail", "AWS CloudFormation"],
      button: {
        text: 'View Certificate',
        link: 'https://www.credly.com/badges/013e77c5-dbbd-4a28-b7b1-89dec611a088?'
      }
    }
  ];

  return (
    <section id="certifications" className="w-full h-screen flex items-center justify-center overflow-y-auto py-12">
      <div className="container mx-auto pl-8 pr-4 md:px-4">
        <div className="mb-10 sm:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center relative">
            Certifications
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <Award className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl font-bold">Professional Certifications</h3>
            </div>
            
            <div className="relative mt-6 sm:mt-8">
              {certs.map((cert, index) => (
                <TimelineEvent key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



