"use client"
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from './firebase';
const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
  
	useEffect(() => {
	  const unsubscribe = onAuthStateChanged(auth, (user) => {
		if (!user) {
		  router.push('/landing-page');
		}
	  });
	  return () => {
		unsubscribe();
	  };
	}, []);
  
	return (
	  <html lang="en">
			<head>
				<title>Netflix-clone</title>
				<link rel="icon"  href="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"/>
			</head>
		<body className={inter.className}>{children}</body>
	  </html>
	);
  };
  
  export default RootLayout;
