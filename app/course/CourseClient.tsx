"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PlayCircle, 
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { MediaEmbed } from "@/components/MediaEmbed";
import { cn } from "@/lib/utils";
import { CourseSidebar } from "@/components/course/CourseSidebar";

type MediaEmbedType = "loom" | "youtube" | "iframe" | "placeholder";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  mediaType: MediaEmbedType;
}

interface Course {
  title: string;
  lessons: Lesson[];
}

// Sample course data
const courseData: Course = {
  title: "Product Management Interview Preparation",
  lessons: [
    {
      id: "about-course",
      title: "About the Course",
      duration: "0:58",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      mediaType: "youtube"
    },
    {
      id: "generic-interview-structure",
      title: "Generic Interview Structure: Beginning, Middle, End",
      duration: "4:47",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      mediaType: "youtube"
    },
    {
      id: "beginning-question-types",
      title: "Beginning: Different Question Types",
      duration: "2:30",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      mediaType: "youtube"
    },
    {
      id: "middle-brainstorming",
      title: "Middle: Brainstorming Techniques",
      duration: "5:00",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      mediaType: "youtube"
    },
    {
      id: "end-conclude",
      title: "End: How to conclude",
      duration: "2:02",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      mediaType: "youtube"
    },
    {
      id: "product-design-intro",
      title: "Introduction to Product Design",
      duration: "1:31",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      mediaType: "loom"
    },
    {
      id: "how-to-answer",
      title: "How to answer Product Design questions?",
      duration: "3:22",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      mediaType: "iframe"
    }
  ]
};

// Course content component
const CourseContent = ({ 
  lesson, 
  onPrevious, 
  onNext 
}: { 
  lesson: Lesson;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onPrevious}
            className="md:hidden"
            aria-label="Previous lesson"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onPrevious}
            className="hidden md:flex"
          >
            Previous
          </Button>
          
          <h1 className="text-xl md:text-2xl font-bold truncate">{lesson.title}</h1>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onNext}
            className="md:hidden"
            aria-label="Next lesson"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={onNext}
            className="hidden md:flex"
          >
            Next
          </Button>
        </div>
        
        <MediaEmbed 
          type={lesson.mediaType}
          url={lesson.videoUrl}
          title={lesson.title}
          aspectRatio="16:9"
        />
        
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Answers to any interview question has three distinct parts: beginning, middle, and end. Each
            part requires different skills and techniques to deliver a solid answer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CourseClient() {
  const [activeLesson, setActiveLesson] = useState(courseData.lessons[1].id);
  const currentLesson = courseData.lessons.find(l => l.id === activeLesson) || courseData.lessons[0];
  const [showSidebar, setShowSidebar] = useState(false);
  
  const currentIndex = courseData.lessons.findIndex(l => l.id === activeLesson);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveLesson(courseData.lessons[currentIndex - 1].id);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < courseData.lessons.length - 1) {
      setActiveLesson(courseData.lessons[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden relative">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 z-50 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        aria-label={showSidebar ? "Close menu" : "Open menu"}
      >
        {showSidebar ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>
      
      {/* Sidebar */}
      <div className={cn(
        "absolute md:relative inset-0 z-40 md:z-auto",
        showSidebar ? "block" : "hidden md:block"
      )}>
        <CourseSidebar 
          course={courseData}
          activeLesson={activeLesson}
          setActiveLesson={(id) => {
            setActiveLesson(id);
            setShowSidebar(false); // Close sidebar on mobile when lesson is selected
          }}
        />
      </div>
      
      {/* Content */}
      <CourseContent 
        lesson={currentLesson} 
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
} 