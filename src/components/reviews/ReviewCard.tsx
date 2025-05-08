
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export interface ReviewProps {
  id: string;
  name: string;
  college: string;
  company: string;
  year: number;
  rating: number;
  content: string;
  profileImage?: string;
  package?: string;
  role?: string;
  tags?: string[];
}

const ReviewCard = ({
  name,
  college,
  company,
  year,
  rating,
  content,
  profileImage,
  package: salaryPackage,
  role,
  tags
}: ReviewProps) => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              {profileImage ? (
                <AvatarImage src={profileImage} alt={name} />
              ) : (
                <AvatarFallback className="bg-brand-100 text-brand-700">{initials}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <h4 className="font-medium text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{college}</p>
            </div>
          </div>
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-brand-100 text-brand-700 hover:bg-brand-200">
            {company}
          </Badge>
          {role && (
            <Badge variant="outline" className="text-gray-700">
              {role}
            </Badge>
          )}
          {salaryPackage && (
            <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              ₹{salaryPackage} LPA
            </Badge>
          )}
        </div>
        <p className="text-gray-700 line-clamp-4">{content}</p>
      </CardContent>
      <CardFooter className="pt-2 border-t text-sm text-gray-500 flex justify-between">
        <div className="flex items-center space-x-2">
          <span>Placed: {year}</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap justify-end">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
