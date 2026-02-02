import { ArrowRight, Calendar, User, Loader2 } from 'lucide-react';

export interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: string; // Changed to string for mock simplicity
    publishedAt: string;
    authorName: string;
    authorImage?: string;
    categories: string[];
    excerpt: string;
    body: any[]; // Portable Text mock (simple array of blocks)
}

export const MOCK_POSTS: BlogPost[] = [
    {
        _id: "1",
        title: "Cold Calling vs LinkedIn: Dove Investire nel 2026?",
        slug: { current: "cold-calling-vs-linkedin-2026" },
        mainImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
        publishedAt: "2026-01-15T10:00:00Z",
        authorName: "Marcello Di Pierro",
        authorImage: "https://framerusercontent.com/images/cZBX1sYJ1c7FE5IdmjZeDKr70.png",
        categories: ["Strategia", "Outbound"],
        excerpt: "Analisi dati alla mano sui tassi di risposta e conversione dei due canali principali per il B2B. Spoiler: l'approccio ibrido vince.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "Il dibattito è aperto da anni: meglio alzare la cornetta o inviare una InMail? La risposta, come spesso accade nel B2B, non è binaria. Nel 2026, l'attenzione dei decision maker è la risorsa più scarsa in assoluto.",
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: "I Numeri del Cold Calling" }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "Nonostante si dica 'il Cold Calling è morto', i dati raccontano una storia diversa. Una chiamata a freddo ben strutturata ha ancora un tasso di conversione in meeting del 5-10% se il targeting è corretto.",
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: "L'Ecosistema LinkedIn" }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "LinkedIn non è più solo un CV online, è una fiera aperta 24/7. Ma attenzione: l'automazione selvaggia ha saturato le inbox. La personalizzazione non è più un optional, è l'unico modo per passare i filtri mentali del prospect.",
                    },
                ],
            }
        ]
    },
    {
        _id: "2",
        title: "Come Scalare una Pipeline B2B in 90 Giorni",
        slug: { current: "scalare-pipeline-b2b-90-giorni" },
        mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        publishedAt: "2026-01-28T09:00:00Z",
        authorName: "Francesco Monopoli",
        authorImage: "https://framerusercontent.com/images/6B44ycjVxhNNIBWi7AVcosS7J8k.png",
        categories: ["Growth", "Case Study"],
        excerpt: "Il framework esatto che abbiamo usato per generare 50+ meeting qualificati per un cliente software enterprise, partendo da zero.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "Partire da zero è spaventoso, ma è anche l'occasione per costruire fondamenta solide. In questo case study, mostriamo come abbiamo strutturato una campagna outbound multicanale.",
                    },
                ],
            },
        ]
    },
    {
        _id: "3",
        title: "L'Arte del Follow-up: Quando Fermarsi?",
        slug: { current: "arte-del-follow-up" },
        mainImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        publishedAt: "2026-02-01T14:30:00Z",
        authorName: "Sali Leshi",
        authorImage: "https://framerusercontent.com/images/6AmVKJRphEEfatzeOw357uIVe4.png",
        categories: ["Sales", "Mindset"],
        excerpt: "Il 60% dei meeting viene fissato dopo il 4° contatto. Eppure, il 90% dei commerciali si ferma al primo 'no' (o al silenzio).",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "La perseveranza batte il talento, se c'è metodo. In questo articolo analizziamo la cadenza perfetta per non risultare stalker ma rimanere top-of-mind.",
                    },
                ],
            },
        ]
    },
    {
        _id: "4",
        title: "AI & Sales: Sostituzione o Potenziamento?",
        slug: { current: "ai-sales-sostituzione-potenziamento" },
        mainImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        publishedAt: "2026-01-10T11:15:00Z",
        authorName: "Armand Ohoungnon",
        authorImage: "https://framerusercontent.com/images/jJ5TdOXHARo98ck5dhQcmidmw.png",
        categories: ["Tech", "AI"],
        excerpt: "L'Intelligenza Artificiale non ruberà il lavoro ai commerciali. I commerciali che usano l'AI ruberanno il lavoro a quelli che non la usano.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: "L'AI è un moltiplicatore di forza. Permette di personalizzare su scala, di analizzare chiamate in tempo reale e di prevedere il churn. Ma l'empatia resta umana.",
                    },
                ],
            },
        ]
    }
];
