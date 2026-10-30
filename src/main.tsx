import { useState } from 'react';
import {
  ArrowRight, Users, ShieldCheck, Globe, Target, Cpu, Handshake,
  MapPin, Mail, Linkedin, Youtube,
} from 'lucide-react';

type Lang = 'en' | 'pt';

const t = {
  en: {
    nav: ['Home', 'Services', 'Expertise', 'Experience', 'Contact'],
    talk: 'Let’s Talk',
    eyebrow: 'Technology for a Better Future',
    heroTitle: 'Transforming Businesses',
    heroAccent: 'Through Technology',
    heroText:
      'We deliver innovative technology solutions to help businesses grow, operate more efficiently, and build a better future.',
    ourServices: 'Our Services',
    getInTouch: 'Get in Touch',
    trust: ['Strategic Solutions', 'Global Expertise', 'Trusted Partnership'],
    servicesEyebrow: 'Our Services',
    servicesTitle: 'Comprehensive Technology Solutions',
    servicesText:
      'From cloud infrastructure to custom software, we help organizations leverage technology to improve efficiency, security, and innovation.',
    services: [
      { title: 'Cloud Infrastructure', desc: 'Design, implement, and manage secure, scalable cloud solutions on AWS, Azure and Google Cloud.' },
      { title: 'Microsoft 365 Services', desc: 'Implement and optimize Microsoft 365, SharePoint, and modern workplace solutions.' },
      { title: 'Power Platform & Automation', desc: 'Build custom solutions with Power Apps, Power Automate, and Power BI to streamline processes.' },
      { title: 'Artificial Intelligence', desc: 'Unlock the potential of AI to drive innovation and smarter decisions.' },
      { title: 'Software Development', desc: 'Custom software solutions designed for your business needs.' },
      { title: 'Intranets & SharePoint Solutions', desc: 'Modern intranets that connect people, processes, and information.' },
      { title: 'IT Consulting & Support', desc: 'Keep your business secure, efficient, and future-ready.' },
      { title: 'Digital Transformation', desc: 'Strategic guidance to modernize operations and accelerate growth.' },
    ],
    aboutEyebrow: 'About ASLCOMPANY Group',
    aboutTitle: 'Your Technology Partner for a Better Future',
    aboutText:
      'ASLCOMPANY Group is a technology consulting company focused on delivering innovative solutions that help businesses grow and succeed. We combine global expertise with a personal approach, serving clients in the United States, Brazil, and beyond.',
    learnMore: 'Learn More',
    whyEyebrow: 'Why Choose Us',
    why: [
      { title: 'Global Perspective', desc: 'International experience with local understanding.' },
      { title: 'Client-Focused Approach', desc: 'Solutions tailored to your business needs.' },
      { title: 'Innovation Driven', desc: 'Leveraging the latest technologies.' },
      { title: 'Long-Term Partnerships', desc: 'Committed to your continued success.' },
    ],
    contactEyebrow: 'Contact Us',
    contactTitle: "Let's Build a Better Future Together",
    contactText: 'Tell us about your project or inquiry, and our team will get back to you as soon as possible.',
    fullName: 'Full Name *',
    email: 'Email Address *',
    interest: 'Service of Interest *',
    message: 'Message *',
    selectService: 'Select a service',
    send: 'Send Message',
    location: 'São Paulo, Brazil',
    serving: 'Serving the United States, Brazil, and beyond',
  },
  pt: {
    nav: ['Início', 'Serviços', 'Especialidades', 'Experiência', 'Contato'],
    talk: 'Vamos Conversar',
    eyebrow: 'Tecnologia para um Futuro Melhor',
    heroTitle: 'Transformando Empresas',
    heroAccent: 'Através da Tecnologia',
    heroText:
      'Entregamos soluções tecnológicas inovadoras para ajudar empresas a crescer, operar com mais eficiência e construir um futuro melhor.',
    ourServices: 'Nossos Serviços',
    getInTouch: 'Fale Conosco',
    trust: ['Soluções Estratégicas', 'Experiência Global', 'Parceria Confiável'],
    servicesEyebrow: 'Nossos Serviços',
    servicesTitle: 'Soluções Tecnológicas Abrangentes',
    servicesText:
      'Da infraestrutura em nuvem ao software personalizado, ajudamos organizações a usar tecnologia para melhorar eficiência, segurança e inovação.',
    services: [
      { title: 'Infraestrutura em Nuvem', desc: 'Projetamos, implementamos e gerenciamos soluções seguras e escaláveis na AWS, Azure e Google Cloud.' },
      { title: 'Serviços Microsoft 365', desc: 'Implementação e otimização do Microsoft 365, SharePoint e soluções de trabalho moderno.' },
      { title: 'Power Platform e Automação', desc: 'Soluções com Power Apps, Power Automate e Power BI para otimizar processos.' },
      { title: 'Inteligência Artificial', desc: 'Desbloqueie o potencial da IA para impulsionar inovação e decisões inteligentes.' },
      { title: 'Desenvolvimento de Software', desc: 'Soluções de software personalizadas para as necessidades do seu negócio.' },
      { title: 'Intranets e SharePoint', desc: 'Intranets modernas que conectam pessoas, processos e informações.' },
      { title: 'Consultoria e Suporte de TI', desc: 'Mantenha sua empresa segura, eficiente e pronta para o futuro.' },
      { title: 'Transformação Digital', desc: 'Orientação estratégica para modernizar operações e acelerar o crescimento.' },
    ],
    aboutEyebrow: 'Sobre a ASLCOMPANY Group',
    aboutTitle: 'Seu Parceiro de Tecnologia para um Futuro Melhor',
    aboutText:
      'A ASLCOMPANY Group é uma consultoria de tecnologia focada em entregar soluções inovadoras que ajudam empresas a crescer e ter sucesso. Combinamos experiência global com uma abordagem pessoal, atendendo clientes nos Estados Unidos, Brasil e além.',
    learnMore: 'Saiba Mais',
    whyEyebrow: 'Por Que Nos Escolher',
    why: [
      { title: 'Perspectiva Global', desc: 'Experiência internacional com entendimento local.' },
      { title: 'Foco no Cliente', desc: 'Soluções adaptadas ao seu negócio.' },
      { title: 'Inovação', desc: 'Utilizando as tecnologias mais recentes.' },
      { title: 'Parcerias de Longo Prazo', desc: 'Comprometidos com o seu sucesso contínuo.' },
    ],
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos Construir um Futuro Melhor Juntos',
    contactText: 'Conte-nos sobre seu projeto ou dúvida e nossa equipe retornará o mais breve possível.',
    fullName: 'Nome Completo *',
    email: 'E-mail *',
    interest: 'Serviço de Interesse *',
    message: 'Mensagem *',
    selectService: 'Selecione um serviço',
    send: 'Enviar Mensagem',
    location: 'São Paulo, Brasil',
    serving: 'Atendendo Estados Unidos, Brasil e além',
  },
};

const whyIcons = [Globe, Users, Cpu, Handshake];

const serviceImages = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const c = t[lang];

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/asl-logo.png" alt="ASLCOMPANY Group" />
            <span>ASLCOMPANY<br /><small style={{ fontSize: '0.65rem', letterSpacing: '3px', opacity: 0.7 }}>GROUP</small></span>
          </a>
          <nav className="nav-links">
            {c.nav.map((n, i) => <a key={n} href={['#', '#services', '#about', '#about', '#contact'][i]}>{n}</a>)}
          </nav>
          <div className="header-actions">
            <div className="lang-toggle">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            </div>
            <a href="#contact" className="btn btn-primary">{c.talk} <ArrowRight size={16} /></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">{c.eyebrow}</span>
            <h1>{c.heroTitle}<span className="accent">{c.heroAccent}</span></h1>
            <p>{c.heroText}</p>
            <div className="hero-cta">
              <a href="#services" className="btn btn-primary">{c.ourServices} <ArrowRight size={16} /></a>
              <a href="#contact" className="btn btn-outline">{c.getInTouch}</a>
            </div>
            <div className="trust-badges">
              <div className="trust-badge"><Target /><span>{c.trust[0]}</span></div>
              <div className="trust-badge"><Users /><span>{c.trust[1]}</span></div>
              <div className="trust-badge"><ShieldCheck /><span>{c.trust[2]}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{c.servicesEyebrow}</span>
            <h2>{c.servicesTitle}</h2>
            <p>{c.servicesText}</p>
          </div>
          <div className="services-grid">
            {c.services.map((s, i) => (
              <article className="service-card" key={s.title}>
                <div className="card-img"><img src={serviceImages[i]} alt={s.title} loading="lazy" /></div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="card-link">Learn more <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + WHY */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-eyebrow" style={{ color: 'var(--blue-bright)' }}>{c.aboutEyebrow}</span>
              <h2>{c.aboutTitle}</h2>
              <p>{c.aboutText}</p>
              <div><a href="#contact" className="btn btn-primary">{c.learnMore} <ArrowRight size={16} /></a></div>
            </div>
            <div className="about-img" role="img" aria-label="ASLCOMPANY office" />
          </div>

          <div className="why-panel" style={{ borderRadius: '12px', marginTop: '24px' }}>
            <span className="section-eyebrow">{c.whyEyebrow}</span>
            <div className="why-list">
              {c.why.map((w, i) => {
                const Icon = whyIcons[i];
                return (
                  <div className="why-item" key={w.title}>
                    <Icon />
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container contact-grid">
          <div className="contact-form">
            <span className="section-eyebrow">{c.contactEyebrow}</span>
            <h2>{c.contactTitle}</h2>
            <p>{c.contactText}</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field"><label>{c.fullName}</label><input required placeholder="Your name" /></div>
                <div className="form-field"><label>{c.email}</label><input required type="email" placeholder="yourname@company.com" /></div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label>{c.interest}</label>
                  <select required defaultValue="">
                    <option value="" disabled>{c.selectService}</option>
                    {c.services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label>{c.message}</label>
                  <textarea required placeholder="Tell us about your project..." />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">{c.send} <ArrowRight size={16} /></button>
            </form>
          </div>

          <div className="contact-visual">
            <div className="contact-info-card">
              <div className="info-row"><MapPin /><span>{c.location}<br /><small style={{ opacity: 0.7 }}>{c.serving}</small></span></div>
              <div className="info-row"><Mail /><span>www.aslcompanygroup.com</span></div>
              <div className="social-row">
                <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="logo" style={{ color: 'white' }}>
            <img src="/asl-logo.png" alt="ASLCOMPANY" />
            <span>ASLCOMPANY</span>
          </div>
          <nav className="footer-nav">
            {c.nav.map((n, i) => <a key={n} href={['#', '#services', '#about', '#about', '#contact'][i]}>{n}</a>)}
          </nav>
          <div className="footer-copy">© 2026 ASLCOMPANY Group. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
