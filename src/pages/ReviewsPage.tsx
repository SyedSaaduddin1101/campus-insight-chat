
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Extended review data with more colleges and companies
const allReviews = [
  {
    id: 1,
    company: "Google",
    college: "JNTU Hyderabad",
    year: 2023,
    rating: 5,
    review: "The interview process was well-structured with 3 rounds. First was an online coding test with medium difficulty algorithms. The technical interview focused on data structures, and the HR round was about past projects and team collaboration. Overall very professional process.",
    userImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Rahul Sharma",
    position: "Software Engineer",
    package: "25 LPA",
  },
  {
    id: 2,
    company: "Amazon",
    college: "CBIT Hyderabad",
    year: 2023,
    rating: 5,
    review: "Amazon's process was intensive with 5 rounds. It started with online assessments testing algorithms and efficiency. The technical interviews were challenging, focusing on system design and problem-solving. Leadership principles were heavily emphasized in all rounds.",
    userImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Priya Reddy",
    position: "SDE-1",
    package: "22 LPA",
  },
  {
    id: 3,
    company: "Microsoft",
    college: "IIIT Hyderabad",
    year: 2023,
    rating: 5,
    review: "Microsoft's interview was a great experience. After an initial coding round, there were 3 technical interviews focused on algorithms, object-oriented design, and system architecture. The final round with the hiring manager discussed my interests and team fit.",
    userImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Karthik Kumar",
    position: "Software Developer",
    package: "24 LPA",
  },
  {
    id: 4,
    company: "Infosys",
    college: "Osmania University",
    year: 2023,
    rating: 4,
    review: "The process at Infosys was straightforward with an aptitude test, technical interview, and HR round. Questions focused on basic programming concepts and problem-solving abilities. The HR round was conversational about career goals and company culture.",
    userImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Sneha Patel",
    position: "Systems Engineer",
    package: "8 LPA",
  },
  {
    id: 5,
    company: "TCS",
    college: "MGIT Hyderabad",
    year: 2022,
    rating: 4,
    review: "TCS campus recruitment had a three-stage process. The online test included aptitude, verbal and coding sections. Technical interview focused on CS fundamentals and problem-solving. HR interview was about adaptability and company knowledge.",
    userImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Neha Singh",
    position: "Assistant Systems Engineer",
    package: "7 LPA",
  },
  {
    id: 6,
    company: "Capgemini",
    college: "CVR College of Engineering",
    year: 2023,
    rating: 3,
    review: "Capgemini had a standard recruitment process with aptitude, technical and HR rounds. The technical interview focused on basic programming concepts and project discussion. The HR round discussed salary expectations and joining dates.",
    userImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Arjun Reddy",
    position: "Associate Consultant",
    package: "6.5 LPA",
  },
  {
    id: 7,
    company: "Wipro",
    college: "Gokaraju Rangaraju Institute of Engineering and Technology",
    year: 2022,
    rating: 4,
    review: "Wipro's recruitment had an online assessment followed by technical and HR rounds. The technical round focused on programming fundamentals and logic building. Overall a smooth and well-organized recruitment process.",
    userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Vikram Kumar",
    position: "Project Engineer",
    package: "6 LPA",
  },
  {
    id: 8,
    company: "Accenture",
    college: "Chaitanya Bharathi Institute of Technology",
    year: 2023,
    rating: 4,
    review: "Accenture's process involved an online cognitive and technical assessment, followed by an HR interview. The focus was on communication skills and adaptability. They were very punctual with the results and joining dates.",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Divya Sharma",
    position: "Associate Software Engineer",
    package: "7.5 LPA",
  },
  {
    id: 9,
    company: "IBM",
    college: "Vasavi College of Engineering",
    year: 2023,
    rating: 4,
    review: "IBM's process included a coding test, technical interview, and manager round. The technical interview was challenging with focus on cloud computing and microservices architecture. The manager round discussed career aspirations.",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Anu Thomas",
    position: "Associate Developer",
    package: "9 LPA",
  },
  {
    id: 10,
    company: "Cognizant",
    college: "VNR Vignana Jyothi Institute of Engineering & Technology",
    year: 2022,
    rating: 3,
    review: "Cognizant had a GenC recruitment drive with an aptitude test followed by technical and HR interviews. Questions focused on basic programming concepts and attitude towards learning new technologies.",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Sai Krishna",
    position: "Programmer Analyst",
    package: "6.8 LPA",
  },
  {
    id: 11,
    company: "Deloitte",
    college: "IIIT Hyderabad",
    year: 2023,
    rating: 5,
    review: "Deloitte's campus recruitment was very professional with four rounds - aptitude, group discussion, technical interview, and HR. The technical round was focused on problem-solving abilities and knowledge of latest technologies.",
    userImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Aditya Verma",
    position: "Technology Analyst",
    package: "12 LPA",
  },
  {
    id: 12,
    company: "Mindtree",
    college: "Muffakham Jah College of Engineering and Technology",
    year: 2022,
    rating: 4,
    review: "Mindtree's process included a coding test and two rounds of interviews. The focus was on problem-solving skills and understanding of data structures. The interviews were conversational and stress-free.",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    userName: "Fatima Khan",
    position: "Software Engineer",
    package: "8.5 LPA",
  }
];

// List of colleges in Telangana
const telanganaColleges = [
  "JNTU Hyderabad",
  "IIIT Hyderabad",
  "Osmania University",
  "CBIT Hyderabad",
  "VNR Vignana Jyothi Institute of Engineering & Technology",
  "Vasavi College of Engineering",
  "Chaitanya Bharathi Institute of Technology",
  "CVR College of Engineering",
  "MGIT Hyderabad",
  "Gokaraju Rangaraju Institute of Engineering and Technology",
  "Muffakham Jah College of Engineering and Technology",
  "Sreenidhi Institute of Science and Technology",
  "Mahatma Gandhi Institute of Technology",
  "Vardhaman College of Engineering",
  "KG Reddy College of Engineering and Technology",
];

// List of companies
const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Wipro",
  "Capgemini",
  "Accenture",
  "IBM",
  "Cognizant",
  "Deloitte",
  "Tech Mahindra",
  "Mindtree",
  "HCL Technologies",
  "Oracle",
];

const years = [2023, 2022, 2021, 2020, 2019];

const ReviewsPage = () => {
  // State for managing displayed reviews and filtering
  const [displayedReviews, setDisplayedReviews] = useState(allReviews.slice(0, 6));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle loading more reviews
  const handleLoadMore = () => {
    const currentLength = displayedReviews.length;
    const nextReviews = allReviews.slice(currentLength, currentLength + 6);
    setDisplayedReviews([...displayedReviews, ...nextReviews]);
  };

  // Filter reviews based on search term and selected filters
  const filterReviews = () => {
    // Filter logic would go here in a real application
    // For now, just reset to initial reviews
    setDisplayedReviews(allReviews.slice(0, 6));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fadeIn">Campus Placement Reviews</h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Explore authentic reviews about placement experiences shared by students across colleges in Telangana
          </p>
          
          {/* Filter section */}
          <div className="mb-10 bg-white p-4 rounded-lg shadow-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Input 
                  placeholder="Search by company, college..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCollege} onValueChange={setSelectedCollege}>
                <SelectTrigger>
                  <SelectValue placeholder="College" />
                </SelectTrigger>
                <SelectContent>
                  {telanganaColleges.map(college => (
                    <SelectItem key={college} value={college}>{college}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 text-right">
              <Button 
                onClick={filterReviews}
                className="bg-brand-600 hover:bg-brand-700"
              >
                Apply Filters
              </Button>
            </div>
          </div>
          
          {/* Reviews */}
          <div className="space-y-6">
            {displayedReviews.map((review) => (
              <Card key={review.id} className="shadow-md transition-all duration-300 hover:shadow-lg animate-scaleIn" style={{ animationDelay: `${0.1 * review.id}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-brand-700">{review.company}</h3>
                      <p className="text-gray-600">{review.college}, {review.year}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 ml-2">{review.rating}/5</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{review.review}</p>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 mr-3">
                        <img 
                          src={review.userImage} 
                          alt={review.userName} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.userName}</h4>
                        <p className="text-sm text-gray-500">{review.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-green-600">{review.package}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load more button */}
          <div className="mt-8 text-center">
            <Button 
              className="bg-brand-600 hover:bg-brand-700 transition-transform duration-300 transform hover:scale-105"
              onClick={handleLoadMore}
              disabled={displayedReviews.length >= allReviews.length}
            >
              {displayedReviews.length >= allReviews.length ? 'All Reviews Loaded' : 'Load More Reviews'}
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReviewsPage;
