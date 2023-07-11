import React from 'react'

export default function BlogLayout({ children }) {
     return (
          <div>
               This is the header for the blog page
               {children}
               This is the footer for the blog page
          </div>
     )
}
