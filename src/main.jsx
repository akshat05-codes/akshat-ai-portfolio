import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Download, BrainCircuit, Code2, Database, Sparkles, Menu, X } from 'lucide-react';
import './styles.css';

const projects = [
  {title:'Hate Speech Detection System', tag:'NLP / Machine Learning', text:'Classifies social-media text using preprocessing, TF-IDF vectorization and ML classification, with precision, recall and accuracy evaluation.', visual:'tfidf'},
  {title:'AI Virtual Assistant', tag:'AI / Python / APIs', text:'Voice-driven assistant for desktop tasks, intelligent interaction, API integration and automation workflows.', visual:'assistant'},
  {title:'Language Translator Application', tag:'Python / Tkinter / API', text:'Multilingual desktop translator with speech-to-text, text-to-speech and real-time translation through an API.', visual:'translate'}
];

function App(){
 const [open,setOpen]=React.useState(false);
 const nav=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <div className="site">
   <div className="noise"/><div className="grid"/>
   <header className="nav"><div className="nav-inner"><button className="brand" onClick={()=>nav('home')}>AS<span>.</span></button>
    <nav className={open?'nav-links open':'nav-links'}>{['about','skills','projects','education','contact'].map(x=><button key={x} onClick={()=>nav(x)}>{x}</button>)}</nav>
    <div className="nav-actions"><a href="https://github.com/akshat05-codes" target="_blank"><Github size={18}/></a><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
   </div></header>
   <main>
    <section id="home" className="hero section">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse"/> AVAILABLE FOR AI / DATA ROLES</div>
       <h1>Building <span>intelligent</span><br/>digital experiences.</h1>
       <p className="lead">I’m <b>Akshat Sharma</b>, a Computer Science graduate focused on Python, Machine Learning, AI and Data Science — turning ideas into practical software.</p>
       <div className="cta"><button className="primary" onClick={()=>nav('projects')}>Explore my work <ArrowUpRight size={18}/></button><a className="secondary" href="mailto:akshatsharma070519@gmail.com"><Mail size={17}/> Contact me</a></div>
       <div className="mini-stats"><div><strong>3+</strong><span>featured projects</span></div><div><strong>AI</strong><span>ML & NLP focus</span></div><div><strong>Python</strong><span>core language</span></div></div>
      </div>
      <div className="hero-art" aria-label="AI network visualization">
        <div className="orbital o1"/><div className="orbital o2"/><div className="orbital o3"/>
        <div className="node center"><BrainCircuit size={48}/><small>AI CORE</small></div>
        {['PY','ML','NLP','SQL','API','DS'].map((x,i)=><div className={'node n'+i} key={x}>{x}</div>)}
        <svg className="connections" viewBox="0 0 500 500"><line x1="250" y1="250" x2="115" y2="125"/><line x1="250" y1="250" x2="390" y2="120"/><line x1="250" y1="250" x2="410" y2="275"/><line x1="250" y1="250" x2="360" y2="410"/><line x1="250" y1="250" x2="125" y2="405"/><line x1="250" y1="250" x2="75" y2="285"/></svg>
        <div className="floating-card fc1"><span>MODEL</span><b>TF-IDF</b><i>● ACTIVE</i></div><div className="floating-card fc2"><span>STACK</span><b>Python + ML</b></div>
      </div>
    </section>

    <section id="about" className="section about"><div className="section-label">01 / ABOUT</div><div className="two-col"><div><h2>Curious by nature.<br/><span>Practical by design.</span></h2></div><div><p>I enjoy building projects where software, data and AI meet. My focus is on creating useful systems rather than only studying theory — from NLP classifiers to voice assistants and API-powered tools.</p><p>I’m currently looking for opportunities where I can grow as an AI / Python / Data Science professional and contribute to real-world products.</p></div></div></section>

    <section id="skills" className="section"><div className="section-label">02 / SKILLS</div><div className="skill-grid">
      <div className="skill-card"><Code2/><h3>Programming</h3><div className="chips"><span>Python</span><span>C</span><span>C++</span><span>SQL</span></div></div>
      <div className="skill-card"><BrainCircuit/><h3>AI & ML</h3><div className="chips"><span>Machine Learning</span><span>NLP</span><span>Scikit-learn</span><span>Pandas</span></div></div>
      <div className="skill-card"><Database/><h3>Development</h3><div className="chips"><span>API Integration</span><span>Tkinter</span><span>GUI</span><span>Automation</span></div></div>
      <div className="skill-card"><Sparkles/><h3>Core Knowledge</h3><div className="chips"><span>DBMS</span><span>DSA</span><span>Operating Systems</span><span>AI</span></div></div>
    </div></section>

    <section id="projects" className="section projects"><div className="section-head"><div><div className="section-label">03 / SELECTED WORK</div><h2>Things I’ve <span>built.</span></h2></div><a href="https://github.com/akshat05-codes" target="_blank" className="github-link">View GitHub <ArrowUpRight size={17}/></a></div>
      <div className="project-grid">{projects.map((p,i)=><article className="project" key={p.title}><div className={'project-visual '+p.visual}>{p.visual==='tfidf'&&<><div className="bars">{[42,75,56,91,63,82].map((h,j)=><i style={{height:h+'%'}} key={j}/>)}</div><div className="scan">TEXT → VECTORS → MODEL</div></>}{p.visual==='assistant'&&<><div className="terminal"><span>assistant.py</span><b>› listening...</b><em>voice command received</em><strong>automation complete ✓</strong></div></>}{p.visual==='translate'&&<><div className="translate-box"><b>Hello!</b><span>नमस्ते!</span><small>EN → HI</small></div><div className="wave">~~~~~~~</div></>}</div><div className="project-meta"><span>{String(i+1).padStart(2,'0')}</span><span>{p.tag}</span></div><h3>{p.title}</h3><p>{p.text}</p><div className="project-footer"><span>Python</span><ArrowUpRight size={18}/></div></article>)}</div>
    </section>

    <section id="education" className="section education"><div className="section-label">04 / EDUCATION</div><div className="edu-card"><div className="edu-year">2022 — 2026</div><div><h3>B.Tech — Computer Science & Engineering</h3><p>Sri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</p></div><strong>CGPA 6.7</strong></div></section>

    <section id="contact" className="section contact"><div className="contact-card"><div><div className="section-label">05 / CONTACT</div><h2>Let’s build something<br/><span>useful with AI.</span></h2><p>Open to entry-level opportunities, internships and practical AI / Python / Data Science projects.</p></div><div className="contact-actions"><a className="primary" href="mailto:akshatsharma070519@gmail.com"><Mail size={18}/> Email me</a><a className="outline" href="https://www.linkedin.com/in/akshat-sharma-305a5b3b2" target="_blank"><Linkedin size={18}/> LinkedIn</a><a className="outline" href="https://github.com/akshat05-codes" target="_blank"><GithubIcon size={18}/> GitHub</a></div></div></section>
   </main>
   <footer><span>AKSHAT SHARMA</span><span>AI • PYTHON • MACHINE LEARNING • DATA SCIENCE</span><span>© 2026</span></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
