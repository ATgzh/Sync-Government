"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "../components/ui/button";
import { Eye, Home, Monitor, Smartphone, Tablet, ExternalLink } from "lucide-react";

// Import the new homepage component
import NewHomePage from '../new-homepage/page';

export default function PreviewPage() {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      default:
        return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Header */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Eye className="h-5 w-5 text-primary" />
              <span className="font-medium text-primary">Preview Mode: New Homepage Design</span>
            </div>

            {/* Viewport Controls */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-2">View:</span>
              <Button
                variant={viewMode === 'desktop' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('desktop')}
              >
                <Monitor className="h-4 w-4 mr-1" />
                Desktop
              </Button>
              <Button
                variant={viewMode === 'tablet' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('tablet')}
              >
                <Tablet className="h-4 w-4 mr-1" />
                Tablet
              </Button>
              <Button
                variant={viewMode === 'mobile' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('mobile')}
              >
                <Smartphone className="h-4 w-4 mr-1" />
                Mobile
              </Button>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Original Homepage
                </Button>
              </Link>
              <Link href="/new-homepage" target="_blank">
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Full View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="p-4">
        <div className={`${getViewportClass()} transition-all duration-300 bg-white rounded-lg shadow-lg overflow-hidden`}>
          <NewHomePage />
        </div>

        {/* Instructions */}
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">🚀 How to Access Your Pages:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-blue-800 mb-2">📍 Current (Original) Homepage</h4>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">localhost:3000/</code>
              <p className="text-gray-600 mt-2">Your existing homepage - safe and unchanged</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-green-800 mb-2">🆕 New Homepage</h4>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">localhost:3000/new-homepage</code>
              <p className="text-gray-600 mt-2">Your new design - ready for customization</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-medium text-purple-800 mb-2">🔍 Preview Page</h4>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">localhost:3000/preview</code>
              <p className="text-gray-600 mt-2">This page - for testing and comparison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
