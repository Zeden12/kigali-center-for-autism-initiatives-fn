import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

// Placeholder images (replace with your actual images)
const blogImage1 = "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const blogImage2 = "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const blogImage3 = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const videoThumbnail = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const BlogsNews = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Autism Spectrum Disorder: A Comprehensive Guide",
      excerpt: "Learn about the different aspects of autism spectrum disorder and how to support individuals effectively.",
      image: blogImage1,
      date: "March 15, 2024",
      author: "Dr. Jane Smith",
      category: "education",
      type: "article",
      content: "Autism Spectrum Disorder (ASD) is a complex developmental condition that involves persistent challenges in social interaction, speech and nonverbal communication, and restricted/repetitive behaviors. The effects of ASD and the severity of symptoms are different in each person. ASD is called a 'spectrum' disorder because people with ASD can have a range of symptoms. People with ASD might have problems talking with you, or they might not look you in the eye when you talk to them..."
    },
    {
      id: 2,
      title: "New Research Breakthrough in Autism Therapy Techniques",
      excerpt: "Recent studies show promising results for innovative therapy approaches that could transform autism treatment.",
      image: blogImage2,
      date: "April 2, 2024",
      author: "Research Team",
      category: "research",
      type: "article",
      content: "A groundbreaking study published in the Journal of Autism and Developmental Disorders has revealed significant improvements in communication skills among children with autism who participated in a new therapy program. The study followed 120 children over a 12-month period, showing a 40% improvement in verbal communication compared to control groups. This research opens new possibilities for early intervention strategies..."
    },
    {
      id: 3,
      title: "KCA Launches Community Support Program for Families",
      excerpt: "Our new initiative provides resources and support for families navigating autism diagnosis and treatment.",
      image: blogImage3,
      date: "April 10, 2024",
      author: "KCA Team",
      category: "news",
      type: "article",
      content: "We're excited to announce the launch of our Family Support Program, designed to provide comprehensive resources for families affected by autism. The program includes monthly workshops, one-on-one counseling, and a resource library. 'This initiative represents our commitment to supporting not just individuals with autism, but their entire family system,' said Dr. Sarah Johnson, program director..."
    },
    {
      id: 4,
      title: "Autism Awareness Month: Activities and Events",
      excerpt: "Join us for a month of awareness-raising events, workshops, and community activities throughout April.",
      image: blogImage1,
      date: "March 28, 2024",
      author: "Events Team",
      category: "events",
      type: "article",
      content: "April is Autism Awareness Month, and we have an exciting lineup of events planned to educate, support, and celebrate the autism community. From expert panels to family fun days, there's something for everyone. Our goal is to increase understanding and acceptance of autism while providing valuable resources to those who need them most..."
    },
    {
      id: 5,
      title: "Therapy Techniques Demonstration: Sensory Integration",
      excerpt: "Watch our expert therapists demonstrate effective sensory integration techniques for children with autism.",
      image: videoThumbnail,
      date: "April 5, 2024",
      author: "Therapy Team",
      category: "education",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/example-video-id",
      content: "In this demonstration, our experienced occupational therapists show practical sensory integration techniques that can be used at home or in clinical settings. These techniques help individuals with autism process sensory information more effectively, reducing anxiety and improving focus..."
    },
    {
        id: 5,
        title: "Therapy Techniques Demonstration: Sensory Integration",
        excerpt: "Watch our expert therapists demonstrate effective sensory integration techniques for children with autism.",
        image: videoThumbnail,
        date: "April 5, 2024",
        author: "Therapy Team",
        category: "education",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/example-video-id",
        content: "In this demonstration, our experienced occupational therapists show practical sensory integration techniques that can be used at home or in clinical settings. These techniques help individuals with autism process sensory information more effectively, reducing anxiety and improving focus..."
      },
      {
        id: 5,
        title: "Therapy Techniques Demonstration: Sensory Integration",
        excerpt: "Watch our expert therapists demonstrate effective sensory integration techniques for children with autism.",
        image: videoThumbnail,
        date: "April 5, 2024",
        author: "Therapy Team",
        category: "education",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/example-video-id",
        content: "In this demonstration, our experienced occupational therapists show practical sensory integration techniques that can be used at home or in clinical settings. These techniques help individuals with autism process sensory information more effectively, reducing anxiety and improving focus..."
      }
  ];

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <div id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Blog & <span className="text-[#FFC107]">News</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, research, and insights from the autism community. 
            Our blog features articles, videos, and resources for families, educators, and professionals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'all' 
                ? 'bg-[#FFC107] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'education' 
                ? 'bg-[#FFC107] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'research' 
                ? 'bg-[#FFC107] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'news' 
                ? 'bg-[#FFC107] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'events' 
                ? 'bg-[#FFC107] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Events
          </button>
        </div>

        {/* Featured Post */}
        <div className="mb-16 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#FFC107] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-1" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(blogPosts[0])}
                  className="text-[#FFC107] font-medium flex items-center hover:underline"
                >
                  Read More <FaArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {post.type === 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <FaPlayCircle className="text-white text-4xl" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.category === 'education' ? 'bg-blue-100 text-blue-600' :
                    post.category === 'research' ? 'bg-green-100 text-green-600' :
                    post.category === 'news' ? 'bg-red-100 text-red-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-[#FFC107] font-medium flex items-center hover:underline"
                >
                  {post.type === 'video' ? 'Watch Now' : 'Read More'} <FaArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-[#FFC107] to-[#F2BA12] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest blog posts, news, and event updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#FFC107] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              {selectedPost.type === 'video' ? (
                <div className="mb-6">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                    <iframe
                      src={selectedPost.videoUrl}
                      className="w-full h-64 md:h-96 rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedPost.title}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  <span>{selectedPost.author}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedPost.category === 'education' ? 'bg-blue-100 text-blue-600' :
                  selectedPost.category === 'research' ? 'bg-green-100 text-green-600' :
                  selectedPost.category === 'news' ? 'bg-red-100 text-red-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {selectedPost.category}
                </span>
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We hope you found this {selectedPost.type === 'video' ? 'video' : 'article'} informative and helpful. 
                  For more resources and support, please explore our website or contact us directly.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#FFC107] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#E6AC00] transition-colors">
                  Share This Post
                </button>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsNews;