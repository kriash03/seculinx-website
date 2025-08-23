// src/components/SEO.jsx
import { useEffect } from 'react';

const SEO = ({ 
  title = "Seculinx - Advanced Security Solutions for Modern Enterprises",
  description = "Seculinx provides cutting-edge cybersecurity solutions including BrightSense AI-powered threat detection. Protect your enterprise with next-generation security technology.",
  keywords = "cybersecurity, AI security, threat detection, BrightSense, enterprise security, Seculinx",
  ogImage = "https://seculinx.com/og-image.jpg",
  twitterImage = "https://seculinx.com/twitter-image.jpg",
  canonicalUrl,
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (selector, content) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        const [attr, value] = selector.split('=');
        element.setAttribute(attr.replace(/\[|\]/g, ''), value.replace(/['"]/g, ''));
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update all meta tags
    updateMetaTag('[name="description"]', description);
    updateMetaTag('[name="keywords"]', keywords);
    updateMetaTag('[property="og:title"]', title);
    updateMetaTag('[property="og:description"]', description);
    updateMetaTag('[property="og:image"]', ogImage);
    updateMetaTag('[property="og:type"]', type);
    updateMetaTag('[property="twitter:title"]', title);
    updateMetaTag('[property="twitter:description"]', description);
    updateMetaTag('[property="twitter:image"]', twitterImage);
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (canonicalElement) {
        canonicalElement.setAttribute('href', canonicalUrl);
      } else {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        canonicalElement.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalElement);
      }
      
      // Also update OG URL
      updateMetaTag('[property="og:url"]', canonicalUrl);
      updateMetaTag('[property="twitter:url"]', canonicalUrl);
    }
  }, [title, description, keywords, ogImage, twitterImage, canonicalUrl, type]);

  return null; // This component doesn't render anything
};

export default SEO;