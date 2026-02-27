import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from './mockData';
import { client, urlFor } from '../../lib/sanity';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          "authorName": author->name,
          "authorImage": author->image,
          "categories": categories[]->title,
          "excerpt": pt::text(body)
        }`;
        const data = await client.fetch(query);
        const processedData = data.map((post: any) => ({
          ...post,
          excerpt: post.excerpt ? post.excerpt.substring(0, 160) + '...' : ''
        }));
        setPosts(processedData);
      } catch (error) {
        console.error('Error fetching posts from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Storm X <span className="text-brand-accent">Insights</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Analisi, strategie e breakdown tecnici sul mondo del B2B Outbound.
            <br />Nessuna teoria, solo tattiche testate sul campo.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-brand-accent animate-spin" />
          </div>
        )}

        {/* Grid */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug.current}`}
                key={post._id}
                className="group flex flex-col bg-brand-surface border border-brand-border rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-all duration-300 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-brand-surfaceHighlight">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage)?.width(600).url()}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-surfaceHighlight" />
                  )}

                  {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-white uppercase tracking-wider">
                      {post.categories[0]}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-brand-muted mb-3 font-mono">
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.authorName || 'Storm X'}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-brand-muted line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-brand-accent text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                    Leggi Articolo <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-muted">Nessun articolo trovato.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
