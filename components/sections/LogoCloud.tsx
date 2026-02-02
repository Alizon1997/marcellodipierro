import React from 'react';

const partners = [
    { name: 'Reebok', logo: 'https://framerusercontent.com/images/YHqqbTAKexXII5ooCjU1v8fwTY.png' },
    { name: 'Wrangler', logo: 'https://framerusercontent.com/images/Kgc2sfNd0XmqmDHUSNZZG5nfPg.png' },
    { name: 'Lee', logo: 'https://framerusercontent.com/images/bECsBckTqnHqP8CPBDwA7ZofME.png' },
    { name: 'Brands Cosmos', logo: 'https://framerusercontent.com/images/uzscAiqLntQvGrNU0xica2mHZg.png' },
    { name: 'Reliance Medical', logo: 'https://framerusercontent.com/images/FvUdZES4jIKprnw76yaYKdYfNf4.png' },
    { name: 'Profood', logo: 'https://framerusercontent.com/images/LkNmWx15131drSdFgCKnpSWnqEU.png' },
];

const LogoCloud: React.FC = () => {
    return (
        <section className="py-12 bg-brand-dark/50 border-y border-brand-border/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 opacity-60">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <h2 className="text-sm font-medium tracking-wider text-brand-muted uppercase">
                            Trusted by top global companies
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                        {partners.map((partner) => (
                            <img
                                key={partner.name}
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="h-6 md:h-8 w-auto object-contain grayscale brightness-150 contrast-125 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
