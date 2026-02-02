import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Loader2 } from 'lucide-react';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';
import { PortableText } from '@portabletext/react';
import { MOCK_POSTS, BlogPost as BlogPostType } from './mockData';
// import { client, urlFor } from '../../lib/sanity';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const { openModal } = useModal();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch logic
    const foundPost = MOCK_POSTS.find(p => p.slug.current === slug);
    setTimeout(() => {
      setPost(foundPost || null);
      setLoading(false);
    }, 500);

  }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        return null; // Mock data currently doesn't have inline images in the body, so this is safe to leave simple or emtpy
      }
    },
    block: {
      h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mt-12 mb-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
      blockquote: ({ children }: any) => <blockquote className="border-l-4 border-brand-accent pl-4 italic my-8 text-white">{children}</blockquote>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-5 space-y-2 text-brand-muted my-6">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-5 space-y-2 text-brand-muted my-6">{children}</ol>,
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-brand-dark min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-accent animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-brand-dark min-h-screen text-center px-4">
        <h1 className="text-white text-2xl mb-4">Articolo non trovato</h1>
        <Link to="/blog" className="text-brand-accent hover:underline">Torna al Blog</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 bg-brand-dark min-h-screen">

      {/* Progress Bar (Optional Visual) */}
      <div className="fixed top-0 left-0 h-1 bg-brand-accent z-50 w-1/3"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center text-brand-muted hover:text-brand-accent mb-8 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Torna al Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-xs font-mono text-brand-accent mb-4">
            {post.categories && post.categories.length > 0 && (
              <span className="bg-brand-surface border border-brand-border px-2 py-1 rounded uppercase">{post.categories[0]}</span>
            )}
            <span className="flex items-center text-brand-muted"><Clock className="w-3 h-3 mr-1" /> 5 MIN READ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-y border-brand-border py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-surfaceHighlight overflow-hidden">
                {post.authorImage ? (
                  <img src={post.authorImage} alt={post.authorName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-surface border border-brand-border">
                    <User className="w-5 h-5 text-brand-muted" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-white text-sm font-bold">{post.authorName || 'Storm X Team'}</p>
                <p className="text-brand-muted text-xs">Author</p>
              </div>
            </div>
            <p className="text-brand-muted text-sm">{formatDate(post.publishedAt)}</p>
          </div>

          {post.mainImage && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-brand-border aspect-video">
              <img src={post.mainImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-brand-surface border border-brand-border rounded-2xl p-8 text-center relative overflow-hidden group hover:border-brand-accent/50 transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Vuoi applicare questo sistema alla tua azienda?</h3>
          <p className="text-brand-muted mb-8 max-w-lg mx-auto">
            Non perdere tempo a fare A/B testing da solo. Il nostro team ha già inviato milioni di email e sa cosa funziona.
          </p>
          <Button onClick={openModal} className="shadow-glow">
            Richiedi una Strategia Personalizzata
          </Button>
        </div>

      </div>
    </article>
  );
};

export default BlogPost;