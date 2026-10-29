import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const content = {
  en: {
    nav:['Services','Expertise','Experience','Contact'], badge:'DIGITAL TRANSFORMATION • TECHNOLOGY CONSULTING',
    hero:'Technology for a Better Future', sub:'We connect strategy, engineering, and innovation to help businesses modernize, automate, and grow with confidence.',
    explore:'Explore our solutions', talk:'Contact our team', servicesTitle:'Solutions designed around your business',
    servicesSub:'Practical expertise across platforms, data, software, and intelligent operations.',
    expertiseTitle:'Built for complex challenges', expertiseSub:'From architecture to implementation, our approach prioritizes measurable outcomes, secure foundations, and long-term value.',
    pillars:[['Business first','Technology decisions guided by your objectives.'],['Connected by design','Integrated experiences across teams, tools, and data.'],['Ready to evolve','Scalable solutions that adapt as you grow.']],
    caseLabel:'SELECTED EXPERIENCE', caseTitle:'Experience that informs our work',
    caseText:'Our founder has contributed to enterprise initiatives, including an intranet solution for Volkswagen Truck & Bus Brazil using SharePoint and Microsoft 365 technologies. This is prior professional experience, not a representation of a direct ASLCOMPANY client engagement.',
    contactTitle:'Let’s build what comes next.', contactSub:'Tell us about your technology goals. We would love to explore how we can help.', footer:'Technology for a Better Future.',
    items:[
      ['Microsoft 365 & SharePoint','Modern digital workplaces, intranets, collaboration, and governance.'],
      ['Power Platform & Automation','Power Apps, Power Automate, and low-code business workflows.'],
      ['Artificial Intelligence','Responsible AI opportunities, intelligent experiences, and process improvement.'],
      ['Cloud & Infrastructure','Cloud strategy, modernization, resilience, and scalable platforms.'],
      ['Software Development','Custom applications, modern web solutions, and product engineering.'],
      ['Data & Analytics','Business intelligence, dashboards, and data-driven decision-making.'],
      ['Enterprise Architecture','Technology roadmaps, application landscapes, and transformation alignment.'],
      ['Integration & APIs','Connect systems and streamline information across your organization.']
    ]
  },
  pt: {
    nav:['Serviços','Diferenciais','Experiência','Contato'],badge:'TRANSFORMAÇÃO DIGITAL • CONSULTORIA EM TECNOLOGIA',
    hero:'Tecnologia para um Futuro Melhor',sub:'Conectamos estratégia, engenharia e inovação para ajudar empresas a modernizar, automatizar e crescer com confiança.',
    explore:'Conheça nossas soluções',talk:'Fale com nossa equipe',servicesTitle:'Soluções pensadas para o seu negócio',
    servicesSub:'Experiência prática em plataformas, dados, software e operações inteligentes.',
    expertiseTitle:'Preparados para desafios complexos',expertiseSub:'Da arquitetura à implementação, priorizamos resultados mensuráveis, bases seguras e valor duradouro.',
    pillars:[['Negócio em primeiro lugar','Decisões de tecnologia orientadas pelos seus objetivos.'],['Integração por natureza','Experiências conectadas entre equipes, ferramentas e dados.'],['Prontos para evoluir','Soluções escaláveis que acompanham seu crescimento.']],
    caseLabel:'EXPERIÊNCIA SELECIONADA',caseTitle:'Experiência que orienta nosso trabalho',
    caseText:'Nosso fundador participou de iniciativas corporativas, incluindo uma solução de intranet para a Volkswagen Caminhões e Ônibus no Brasil, utilizando SharePoint e tecnologias Microsoft 365. Trata-se de experiência profissional anterior, não de um contrato direto da ASLCOMPANY com a empresa.',
    contactTitle:'Vamos construir o próximo passo.',contactSub:'Conte seus objetivos de tecnologia. Será um prazer conversar sobre como podemos ajudar.',footer:'Tecnologia para um Futuro Melhor.',
    items:[
      ['Microsoft 365 e SharePoint','Ambientes digitais de trabalho, intranets, colaboração e governança.'],
      ['Power Platform e Automação','Power Apps, Power Automate e fluxos de trabalho low-code.'],
      ['Inteligência Artificial','Oportunidades de IA responsável, experiências inteligentes e melhoria de processos.'],
      ['Cloud e Infraestrutura','Estratégia de nuvem, modernização, resiliência e plataformas escaláveis.'],
      ['Desenvolvimento de Software','Aplicações sob medida, soluções web e engenharia de produtos.'],
      ['Dados e Analytics','Business intelligence, painéis e decisões orientadas por dados.'],
      ['Arquitetura Corporativa','Roadmaps tecnológicos, portfólio de aplicações e alinhamento da transformação.'],
      ['Integração e APIs','Conecte sistemas e simplifique o fluxo de informações da sua organização.']
    ]
  }
};
const icons=['▦','⚙','✧','☁','⌘','▥','◇','⇄'];
function App(){
 const [lang,setLang]=useState<'pt'|'en'>('pt'),[menu,setMenu]=useState(false);
 const t=content[lang];const ids=['services','expertise','experience','contact'];
 return <div>
  <header className="header"><a className="brand" href="#home" aria-label="ASLCOMPANY home"><img src={`${import.meta.env.BASE_URL}asl-logo.png`} alt="ASLCOMPANY logo"/> </a>
   <button className="hamburger" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>☰</button>
   <nav className={menu?'open':''}>{t.nav.map((x,i)=><a key={x} href={'#'+ids[i]} onClick={()=>setMenu(false)}>{x}</a>)}<button className="lang" onClick={()=>{setLang(lang==='pt'?'en':'pt');setMenu(false)}}>{lang==='pt'?'EN':'PT'} ↗</button></nav>
  </header>
  <main><section className="hero" id="home"><div className="hero-grid"><div><p className="eyebrow"><span className="dot"/> {t.badge}</p><h1>{t.hero.split(' ').slice(0,-2).join(' ')} <em>{t.hero.split(' ').slice(-2).join(' ')}</em></h1><p className="hero-sub">{t.sub}</p><div className="actions"><a className="button primary" href="#services">{t.explore} <span>↗</span></a><a className="button outline" href="mailto:admin@aslcompanygroup.com?subject=ASLCOMPANY%20-%20Business%20inquiry">{t.talk} <span>→</span></a></div></div><div className="hero-art" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="glass"><span className="glass-label">ASL / DIGITAL</span><div className="gridmark">✳</div><div className="glass-bottom">STRATEGY <span>↗</span> ENGINEERING <span>↗</span> INNOVATION</div></div></div></div><div className="hero-foot"><span>01 / ASLCOMPANY GROUP</span><span>↓ SCROLL TO EXPLORE</span></div></section>
  <section className="section services" id="services"><div className="section-top"><div><p className="kicker">01 / SERVICES</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesSub}</p></div><div className="cards">{t.items.map(([title,desc],i)=><article className={'card card-'+i} key={title}><div className="card-visual"><div className="visual-rings"/><span className="service-icon">{icons[i]}</span><span className="card-index">{String(i+1).padStart(2,'0')}</span></div><div className="card-copy"><h3>{title}</h3><p>{desc}</p><a href={`mailto:admin@aslcompanygroup.com?subject=${encodeURIComponent('ASLCOMPANY - '+title)}`} aria-label={'Contact us about '+title}>↗</a></div></article>)}</div></section>
  <section className="section expertise" id="expertise"><div className="section-top"><div><p className="kicker">02 / OUR APPROACH</p><h2>{t.expertiseTitle}</h2></div><p>{t.expertiseSub}</p></div><div className="pillars">{t.pillars.map(([a,b],i)=><div key={a}><span>0{i+1} /</span><h3>{a}</h3><p>{b}</p></div>)}</div></section>
  <section className="section experience" id="experience"><div className="experience-panel"><div><p className="kicker">03 / {t.caseLabel}</p><h2>{t.caseTitle}</h2></div><p>{t.caseText}</p></div></section>
  <section className="section contact" id="contact"><p className="kicker">04 / CONTACT</p><h2>{t.contactTitle}</h2><p>{t.contactSub}</p><a className="button primary" href="mailto:admin@aslcompanygroup.com?subject=ASLCOMPANY%20-%20Business%20inquiry">{t.talk} ↗</a><a className="email" href="mailto:admin@aslcompanygroup.com">admin@aslcompanygroup.com</a></section></main>
  <footer><div className="footer-brand">ASLCOMPANY <span>GROUP</span></div><p>{t.footer}</p><small>© {new Date().getFullYear()} ASLCOMPANY Group</small></footer>
 </div>
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
