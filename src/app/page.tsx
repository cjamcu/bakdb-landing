'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Database, HardDrive, Clock, Shield, Github, FileText, Menu, X } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Card className="h-full border-2 border-gray-200 transition-all hover:border-blue-500 hover:shadow-lg">
    <CardContent className="flex flex-col items-center p-6 text-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="bg-white py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Bakdb</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#supported" className="hover:text-blue-600 transition-colors">Supported Tech</a></li>
              <li><a href="/docs" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="https://github.com/cjamcu/bakdb" className="hover:text-blue-600 transition-colors flex items-center"><Github className="w-4 h-4 mr-1" /> GitHub</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 mt-4 px-4">
              <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#supported" className="hover:text-blue-600 transition-colors">Supported Tech</a></li>
              <li><a href="/docs" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="https://github.com/yourusername/bakdb" className="hover:text-blue-600 transition-colors flex items-center"><Github className="w-4 h-4 mr-1" /> GitHub</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Simplify Your Database Backups
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bakdb is a self-hosted, single-file solution that streamlines your database backup process across multiple database types.
          </p>
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg inline-block mb-8 animate-pulse">
            <code className="text-lg font-semibold">./bakdb serve domain.com</code>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Deploy Bakdb instantly with this single command
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <Link href="https://demo.bakdb.com" className={buttonVariants({ variant: "default" })} target="_blank"> Live Demo</Link> */}
            <Link href="/docs" className={buttonVariants({ variant: "default", size: "lg" })}>    <FileText className="w-4 h-4 mr-2" /> Read Documentation</Link>
          </div>
        </div>

        <div id="features" className="mb-24">
          <h3 className="text-3xl font-extrabold text-center mb-12">
            Key Features
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<Database className="w-12 h-12 text-blue-600" />}
              title="Multi-Database Support"
              description="Backup various database types from a single interface."
            />
            <Feature
              icon={<HardDrive className="w-12 h-12 text-blue-600" />}
              title="Flexible Storage"
              description="Store backups locally or on major cloud platforms."
            />
            <Feature
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Automated Scheduling"
              description="Set up flexible backup schedules to keep your data protected."
            />
            <Feature
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Secure & Self-Hosted"
              description="Keep full control of your data with on-premise deployment."
            />
          </div>
        </div>

        <div id="supported" className="mb-24">
          <h3 className="text-3xl font-extrabold text-center mb-12">
            Supported Technologies
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-4">Databases</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>PostgreSQL</li>
                  <li>MariaDB</li>
                  <li>MySQL</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-4">Storage</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Local Storage</li>
                  <li>Amazon S3</li>
                  <li>Cloudflare R2</li>
                  <li>DigitalOcean Spaces</li>
                  <li>Backblaze B2</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-extrabold mb-8">
            Ready to Secure Your Data?
          </h3>

          <Link href="/docs" className={buttonVariants({ variant: "default", size: "lg" })}>Read Documentation</Link>

        </div>
      </main>

      <footer className="bg-gray-100 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2024 Bakdb. An open-source project.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;