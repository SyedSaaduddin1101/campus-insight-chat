
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReviewCard, { ReviewProps } from '@/components/reviews/ReviewCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageSquare, Bell, Search, User } from 'lucide-react';

// Mock data for reviews
const recentReviews: ReviewProps[] = [
  {
    id: '1',
    name: 'Aarav Patel',
    college: 'JNTU Hyderabad',
    company: 'Microsoft',
    year: 2023,
    rating: 5,
    content: 'The interview process was thorough but fair. First round was a coding test with DSA problems, followed by 2 technical interviews focused on problem solving and system design. Final round was with the hiring manager discussing my projects and team fit.',
    role: 'Software Engineer',
    package: '24',
    tags: ['Technical', 'Coding Test']
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    college: 'IIIT Hyderabad',
    company: 'Amazon',
    year: 2023,
    rating: 4,
    content: 'Amazon\'s process had 4 rounds. Online assessment with 2 coding problems, then behavioral interview focusing on leadership principles. Two technical rounds with whiteboard coding and system design. Very detail oriented interviews.',
    role: 'SDE-1',
    package: '28',
    tags: ['Algorithms', 'Leadership Principles']
  },
  {
    id: '3',
    name: 'Karthik Sharma',
    college: 'CBIT Hyderabad',
    company: 'TCS',
    year: 2023,
    rating: 3,
    content: 'TCS recruitment was streamlined. We had an aptitude round, technical interview and HR round. The technical questions were mostly on fundamentals rather than complex problems. Good for freshers looking to start their career.',
    role: 'Systems Engineer',
    package: '5',
    tags: ['Mass Hiring', 'HR Interview']
  },
];

const topColleges = [
  { name: 'IIIT Hyderabad', placements: '98%', companies: 120 },
  { name: 'JNTU Hyderabad', placements: '85%', companies: 95 },
  { name: 'CBIT Hyderabad', placements: '92%', companies: 80 },
  { name: 'Osmania University', placements: '82%', companies: 75 },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Welcome Banner */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">Welcome to CampusInsight</h1>
            <p className="text-gray-600">Explore placement experiences from colleges across Telangana</p>
          </div>
        </section>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Quick Menu</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/reviews">
                      <Button variant="outline" className="w-full justify-start">
                        <Search size={18} className="mr-2" />
                        Browse Reviews
                      </Button>
                    </Link>
                    <Link to="/chat">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare size={18} className="mr-2" />
                        Start a Chat
                      </Button>
                    </Link>
                    <Link to="/profile">
                      <Button variant="outline" className="w-full justify-start">
                        <User size={18} className="mr-2" />
                        My Profile
                      </Button>
                    </Link>
                    <Link to="/notifications">
                      <Button variant="outline" className="w-full justify-start">
                        <Bell size={18} className="mr-2" />
                        Notifications
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <CardTitle>Top Colleges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topColleges.map((college, index) => (
                      <div key={index} className="flex justify-between items-center border-b last:border-b-0 pb-2 last:pb-0">
                        <div>
                          <h3 className="font-medium">{college.name}</h3>
                          <p className="text-sm text-gray-500">{college.placements} placement rate</p>
                        </div>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {college.companies} companies
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="reviews">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="reviews" className="flex-1">Recent Reviews</TabsTrigger>
                  <TabsTrigger value="trending" className="flex-1">Trending</TabsTrigger>
                  <TabsTrigger value="following" className="flex-1">Following</TabsTrigger>
                </TabsList>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {recentReviews.map(review => (
                      <ReviewCard key={review.id} {...review} />
                    ))}
                    
                    <div className="text-center mt-8">
                      <Link to="/reviews">
                        <Button variant="outline">View All Reviews</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="trending">
                  <div className="py-12 text-center">
                    <p className="text-gray-500">Trending content will appear here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="following">
                  <div className="py-12 text-center">
                    <p className="text-gray-500">Follow users to see their content here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
