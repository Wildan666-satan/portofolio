import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Code2, Terminal, 
  MapPin, Calendar, Phone, GraduationCap, 
  Briefcase, Heart, Instagram, ArrowLeft, ExternalLink,
  Cpu, Database, Layers, Globe
} from 'lucide-react';

// --- PENTING: PASTIKAN FILE profile.jpg ADA DI DALAM FOLDER src ---
import fotoProfil from './profile.jpg'; 

// --- DATA PROYEK ---
const projectData = [
  {
    id: 1,
    title: "Ketua Kelompok KKN",
    subtitle: "Kelurahan Parung Serab • 1-2 Bulan",
    badge: null,
    desc: "Memimpin tim dalam program pengabdian masyarakat. Fokus utama pada edukasi bidang IT kepada warga lokal.",
    fullDetails: "Bertanggung jawab penuh atas koordinasi 30 anggota tim. Program kerja unggulan meliputi seminar 'Internet Sehat' untuk remaja dan pelatihan Microsoft Office dasar untuk perangkat desa.",
    tags: ["Leadership", "Public Speaking", "Community Dev"]
  },
  {
    id: 2,
    title: 'Aplikasi "Codingin"',
    subtitle: "Mobile Learning Platform",
    badge: "Success",
    desc: "Mengembangkan aplikasi pembelajaran coding via mobile yang memungkinkan pengguna belajar tanpa komputer.",
    fullDetails: "Aplikasi ini dirancang untuk mengatasi kesenjangan digital. Fitur utama meliputi: Compiler kode ringan (Python/JS), modul materi offline, dan kuis interaktif.",
    tags: ["Mobile App", "Education", "React Native"]
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    subtitle: "Bantuan UMKM",
    badge: null,
    desc: "Aktif membantu pelaku UMKM (Usaha Makanan) dengan membuatkan landing page dan website profil.",
    fullDetails: "Membantu digitalisasi UMKM lokal dengan membangun Landing Page yang SEO-friendly dan cepat diakses.",
    tags: ["Web Design", "Freelance", "SEO"]
  }
];

// --- DATA PENDIDIKAN ---
const educationData = [
  {
    id: 1,
    school: "Universitas Muhammadiyah Tangerang",
    major: "S1 Teknik Informatika",
    year: "Lulus 2025",
    extra: "IPK 3.47",
    color: "bg-sky-500", 
    mapUrl: "https://maps.google.com/?q=Jl.+Perintis+Kemerdekaan+I+No.33,+RT.007/RW.003,+Babakan,+Cikokol,+Kec.+Tangerang,+Kota+Tangerang,+Banten+15118"
  },
  {
    id: 2,
    school: "SMK Ki Hajar Dewantoro",
    major: "Teknik Komputer & Jaringan",
    year: "2018 - 2021",
    extra: null,
    color: "bg-slate-600",
    mapUrl: "https://maps.google.com/?q=Jl.+Buana+Agung+Raya+No.7,+RT.003/RW.004,+Pinang,+Kec.+Pinang,+Kota+Tangerang,+Banten+15145"
  },
  {
    id: 3,
    school: "SMPN 16 Tangerang Selatan",
    major: null,
    year: "2015 - 2018",
    extra: null,
    color: "bg-slate-700",
    mapUrl: "https://maps.google.com/?q=QM5C%2B4C5,+Jl.+Bhayangkara+1,+Paku+Jaya,+Kec.+Serpong+Utara,+Kota+Tangerang+Selatan,+Banten+15220"
  },
  {
    id: 4,
    school: "SDN Pinang 06",
    major: null,
    year: "2009 - 2015",
    extra: null,
    color: "bg-slate-800",
    mapUrl: "https://maps.google.com/?q=Jl.+Matahari+No.15,+RT.10/RW.3,+Sudimara+Pinang,+Kec.+Pinang,+Kota+Tangerang,+Banten+15145"
  }
];

// --- DATA SKILLS ---
const techStack = {
  core: [
    "React.js", "Next.js", "JavaScript (ES6+)", 
    "Tailwind CSS", "HTML5 & CSS3"
  ],
  familiar: [
    "PHP Native", "Laravel", "Golang (Go)", 
    "Python", "Java (OOP)", "C++", 
    "MySQL / SQL", "Dart / Flutter"
  ],
  tools: [
    "Git & GitHub", "VS Code", "Postman", 
    "Figma", "Docker", "Vercel", "Trello"
  ]
};

// --- KONFIGURASI KONTAK ---
const phoneNumber = "6285158025595";
const message = "Hai wildan, Saya tertarik dengan portofolio mu. Mau bergabung dengan perusahaan kami?";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
const linkedinUrl = "https://www.linkedin.com/in/wildan-obit-waluyo-45574a283";
const githubUrl = "https://github.com/Wildan666-satan";
const instagramUrl = "https://www.instagram.com/wldnobit/";

// --- VARIASI ANIMASI ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const imageFloat = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "backOut" } },
  float: { y: [0, -15, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectData.find((p) => p.id === selectedId);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-sky-500 selection:text-white overflow-hidden relative">
      
      {/* Background FX */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/50 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-bold tracking-tighter">
            Wildan<span className="text-sky-400">.dev</span>
          </motion.div>
          <div className="flex gap-3 md:gap-5">
            <motion.a href={whatsappUrl} target="_blank" whileHover={{ scale: 1.1, color: "#22c55e" }} className="text-slate-400 transition-colors"><Phone size={20} /></motion.a>
            <motion.a href="mailto:wildanobit22@gmail.com" whileHover={{ scale: 1.1, color: "#ef4444" }} className="text-slate-400 transition-colors"><Mail size={20} /></motion.a>
            <motion.a href={linkedinUrl} target="_blank" whileHover={{ scale: 1.1, color: "#0a66c2" }} className="text-slate-400 transition-colors"><Linkedin size={20} /></motion.a>
            <motion.a href={githubUrl} target="_blank" whileHover={{ scale: 1.1, color: "#ffffff" }} className="text-slate-400 transition-colors"><Github size={20} /></motion.a>
            <motion.a href={instagramUrl} target="_blank" whileHover={{ scale: 1.1, color: "#e1306c" }} className="text-slate-400 transition-colors"><Instagram size={20} /></motion.a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* HERO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left flex-1">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Open to Work
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              Halo, Saya <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">Wildan Obit Waluyo</span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-slate-400 mb-6 text-sm md:text-base">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-sky-500"/> Tangerang</div>
              <div className="flex items-center gap-2"><Calendar size={16} className="text-sky-500"/> 22 Mei 2003</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-sky-500"/> wildanobit22@gmail.com</div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-lg leading-relaxed mb-8 border-l-4 border-sky-500 pl-4 bg-slate-900/50 py-2 rounded-r-lg">
              "Full Stack Developer dengan rasa ingin tahu yang tinggi. Saya tidak hanya fokus pada coding, tetapi juga antusias mempelajari hal baru dari setiap baris kode yang saya tulis. Siap tumbuh dan memberikan dampak nyata."
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.a href={whatsappUrl} target="_blank" variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] hover:shadow-sky-500/50 transition-all items-center gap-2">
                <Phone size={18} /> Rekrut Saya via WhatsApp
              </motion.a>
              <motion.a href={githubUrl} target="_blank" variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex px-4 py-3 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-all items-center gap-2">
                <Github size={18} /> <span className="hidden md:inline ml-1">GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={["visible", "float"]} variants={imageFloat} className="relative flex-shrink-0">
            <div className="absolute top-5 right-5 w-full h-full bg-sky-500/30 blur-3xl rounded-[50%] -z-10"></div>
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[100px] border-4 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img src={fotoProfil} alt="Wildan Obit Waluyo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            </div>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* KOLOM KIRI (7) - PROYEK */}
          <div className="md:col-span-7 space-y-10 min-h-[500px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {!selectedId && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-sky-500/10 rounded-lg"><Briefcase className="text-sky-400" size={24}/></div>
                  <h2 className="text-2xl font-bold">Pengalaman & Proyek</h2>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {!selectedId ? (
                   <motion.div key="list-view" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
                     {projectData.map((item) => (
                        <motion.button key={item.id} layoutId={`card-${item.id}`} onClick={() => setSelectedId(item.id)} className="w-full text-left group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/80 transition-all cursor-pointer relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-sky-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-sky-200 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                            {item.badge && <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">{item.badge}</span>}
                          </div>
                          <p className="text-sm text-slate-400 mb-3">{item.subtitle}</p>
                          <p className="text-slate-300 leading-relaxed text-sm line-clamp-2">{item.desc}</p>
                          <div className="mt-4 text-xs text-sky-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Lihat Detail <ExternalLink size={12}/></div>
                        </motion.button>
                     ))}
                   </motion.div>
                ) : (
                  <motion.div key="detail-view" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
                    <button onClick={() => setSelectedId(null)} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group">
                      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Kembali
                    </button>
                    <motion.div layoutId={`card-${selectedProject.id}`}>
                      <h2 className="text-3xl font-bold text-sky-400 mb-2">{selectedProject.title}</h2>
                      <p className="text-slate-400 mb-6 border-b border-slate-800 pb-4">{selectedProject.subtitle}</p>
                      <div className="prose prose-invert max-w-none text-slate-300">
                         <p className="text-lg mb-4 italic text-slate-200">"{selectedProject.desc}"</p>
                         <div className="p-5 bg-slate-950/50 rounded-xl border border-slate-800/50 mb-6"><p className="leading-relaxed text-sm md:text-base">{selectedProject.fullDetails}</p></div>
                         <div className="flex flex-wrap gap-2 mt-6">{selectedProject.tags?.map(tag => (<span key={tag} className="px-3 py-1 bg-sky-500/10 text-sky-300 rounded-full text-xs font-medium border border-sky-500/20">#{tag}</span>))}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* KOLOM KANAN (5) - EDUCATION & SKILLS */}
          <div className="md:col-span-5 space-y-8">
            
            {/* 1. TECH STACK */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-sky-400" size={20}/>
                <h3 className="text-lg font-bold text-white">Tech Stack & Tools</h3>
              </div>
              
              <div className="space-y-4">
                {/* Core Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Main Skills</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.core.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-sky-500/10 text-sky-300 border border-sky-500/30 rounded-lg text-sm font-medium shadow-[0_0_10px_-4px_rgba(56,189,248,0.5)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Familiar */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Familiar With</p>
                    <span className="text-[10px] text-slate-600 bg-slate-900 px-1.5 rounded border border-slate-800" title="Bahasa yang pernah dipelajari atau digunakan untuk project kecil">Exposure</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.familiar.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-lg text-sm hover:text-slate-200 hover:border-slate-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                 {/* Tools */}
                 <div>
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-semibold">Tools & Others</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.tools.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-900 text-slate-500 border border-slate-800 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. PENDIDIKAN (DENGAN MAPS) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-500/10 rounded-lg"><GraduationCap className="text-sky-400" size={24}/></div>
                <h2 className="text-2xl font-bold">Riwayat Pendidikan</h2>
              </div>
              <div className="relative border-l-2 border-slate-800 ml-3 space-y-8 pl-8 py-2">
                {educationData.map((edu) => (
                  <motion.div variants={fadeInUp} className="relative group" key={edu.id}>
                    <div className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 ${edu.color}`}></div>
                    <h3 className={`font-bold text-lg ${edu.id === 1 ? 'text-white' : 'text-slate-300'}`}>{edu.school}</h3>
                    {edu.major && <p className="text-sky-400">{edu.major}</p>}
                    <div className="flex flex-wrap justify-between items-center mt-1 gap-2">
                      <span className="text-sm text-slate-500">{edu.year}</span>
                      {edu.extra && <span className="px-2 py-0.5 bg-sky-500/20 text-sky-300 text-xs rounded font-bold">{edu.extra}</span>}
                    </div>
                    <a href={edu.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all">
                      <MapPin size={12} /> Lihat Lokasi
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3. SOFT SKILLS (DI-UPDATE) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer} 
              className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800"
            >
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Heart size={18} className="text-pink-500"/> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Komunikasi Efektif", "Teamwork", "Problem Solving", 
                  "Critical Thinking", "Time Management", "Adaptability", 
                  "Fast Learner", "Leadership", "Public Speaking",
                  "Attention to Detail", "Agile Mindset"
                ].map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700 hover:border-sky-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* POETIC FOOTER */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-32 pt-10 border-t border-slate-900 text-center">
          <div className="max-w-2xl mx-auto italic text-slate-400 font-serif">
            <p className="mb-2">"Di antara logika 0 dan 1, terdapat seni yang tak terhingga."</p>
            <p className="text-sky-500/80">Seperti kode yang terus dikompilasi, hidup adalah proses belajar tanpa henti.<br/>Setiap error adalah pelajaran, setiap baris adalah harapan.</p>
          </div>
          <p className="mt-8 text-xs text-slate-700">© 2026 Wildan Obit Waluyo. Crafted with Passion.</p>
        </motion.div>

      </main>
    </div>
  );
}