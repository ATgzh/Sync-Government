"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "../components/ui/button";
import { ArrowLeft, Eye, Home } from "lucide-react";

// Import the new homepage component
import NewHomePage from '../new-homepage/page';

export default function PreviewPage() {
  return (
    <div>
      {/* Preview Header */}
      <div className="bg-muted border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Eye className="h-5 w-5 text-primary" />
              <span className="font-medium text-primary">Preview Mode: New Homepage</span>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Current Homepage
                </Button>
              </Link>
              <Link href="/new-homepage">
                <Button size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Full View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Homepage Content */}
      <NewHomePage />
    </div>
  );
}
