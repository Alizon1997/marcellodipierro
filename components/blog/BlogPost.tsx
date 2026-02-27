import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';
import { PortableText } from '@portabletext/react';
import { BlogPost as BlogPostType } from './mockData';
import { client, urlFor } from '../../lib/sanity';
import { useLanguage } from '../../context/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const { openModal } = useModal();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          body,
          "authorName": author->name,
          "authorImage": author->image,
          "categories": categories[]->title,
          "excerpt": pt::text(body)
        }`;
        const data = await client.fetch(query, { slug });
        if (data && data.excerpt) {
          data.excerpt = data.excerpt.substring(0, 160) + '...';
        }
        setPost(data);
      } catch (error) {
        console.error('Error fetching post from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString(language === 'it' ? 'it-IT' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value) return null;
        return (
          <div className="my-8 rounded-2xl overflow-hidden border border-brand-border">
            <img
              src={urlFor(value).width(800).url()}
              alt={value.alt || 'Post image'}
              className="w-full h-auto"
            />
          </div>
        );
      }
    },
    block: {
      normal: ({ children }: any) => <p className="text-brand-text/80 leading-relaxed mb-4">{children}</p>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold text-brand-text mt-12 mb-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-bold text-brand-text mt-8 mb-4">{children}</h3>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-brand-accent pl-6 py-2 my-8 bg-brand-surfaceHighlight rounded-r-lg italic text-brand-muted">
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-brand-text">{children}</strong>,
      em: ({ children }: any) => <em className="italic text-brand-text/80">{children}</em>,
      code: ({ children }: any) => <code className="bg-brand-surfaceHighlight text-brand-accent px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 space-y-2 text-brand-text/80 my-6">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 space-y-2 text-brand-text/80 my-6">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
      number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
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
        <h1 className="text-brand-text text-2xl mb-4">{language === 'it' ? 'Articolo non trovato' : 'Article not found'}</h1>
        <Link to="/blog" className="text-brand-accent hover:underline">{language === 'it' ? 'Torna al Blog' : 'Back to Blog'}</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Storm X Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Storm X Blog`} />
        <meta property="og:description" content={post.excerpt} />
        {post.mainImage && (
          <meta property="og:image" content={urlFor(post.mainImage).width(1200).height(630).url()} />
        )}
      </Helmet>

      <article className="pt-32 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center text-brand-muted hover:text-brand-accent mb-8 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {language === 'it' ? 'Torna al Blog' : 'Back to Blog'}
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-3 text-xs font-mono mb-4">
              {post.categories && post.categories.length > 0 && (
                <span className="bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.categories[0]}
                </span>
              )}
              <span className="flex items-center text-brand-muted">
                <Clock className="w-3 h-3 mr-1" /> {language === 'it' ? '5 MIN DI LETTURA' : '5 MIN READ'}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-brand-border py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-surfaceHighlight overflow-hidden border border-brand-border">
                  {post.authorImage ? (
                    <img src={urlFor(post.authorImage).width(100).url()} alt={post.authorName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-muted" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-brand-text text-sm font-bold">{post.authorName || 'Storm X Team'}</p>
                  <p className="text-brand-muted text-xs">{language === 'it' ? 'Autore' : 'Author'}</p>
                </div>
              </div>
              <p className="text-brand-muted text-sm">{formatDate(post.publishedAt)}</p>
            </div>

            {post.mainImage && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-brand-border aspect-video">
                <img src={urlFor(post.mainImage).width(1200).url()} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose max-w-none text-brand-text/80 leading-relaxed">
            <PortableText value={post.body} components={ptComponents} />
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-brand-surface border border-brand-border rounded-2xl p-8 text-center relative overflow-hidden group hover:border-brand-accent/50 transition-colors shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">{language === 'it' ? 'Vuoi applicare questo sistema alla tua azienda?' : 'Want to apply this system to your business?'}</h3>
            <p className="text-brand-muted mb-8 max-w-lg mx-auto">
              {language === 'it' ? 'Non perdere tempo a fare A/B testing da solo. Il nostro team ha già inviato milioni di email e sa cosa funziona.' : "Don't waste time A/B testing alone. Our team has already sent millions of emails and knows what works."}
            </p>
            <Button onClick={openModal} className="shadow-glow">
              {language === 'it' ? 'Richiedi una Strategia Personalizzata' : 'Request a Custom Strategy'}
            </Button>
          </div>

        </div>
      </article>
    </>
  );
};

export default BlogPost;
