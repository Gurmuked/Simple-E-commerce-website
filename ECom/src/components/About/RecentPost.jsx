import { posts } from "./Data";
const RecentPost = () => {
  return (
    <div className="max-w-2xl p-6 bg-white"> {/* Increased max-width */}
      <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div 
            key={post.id}
            id={post.id}
            className="border-b border-gray-200 pb-6 last:border-0 last:pb-0 flex gap-4"
          >
            {/* Image - now displayed on the left */}
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/400x300?text=" + post.id;
              }}
            />
            
            {/* Text content - now displayed on the right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium whitespace-pre-line">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;