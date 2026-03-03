// Sayfa tamamen yüklendikten sonra çalışacak kodlar (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {

    // Çok dilli destek için çeviri objesi (i18n = internationalization)
    // Her dil için anahtar-değer çiftleri tutuluyor
    const i18n = {
        tr: {
            "btn-contact": "Bana Ulaş",
            "nav-about": "Neler Yapıyorum?",
            "nav-projects": "Projelerim",
            "nav-career": "Kariyer & Eğitim",
            "nav-skills": "Yetenekler",
            "hero-badge": "YAZILIM GELİŞTİRME // ÜNİVERSİTE 1",
            "hero-title": "Tasarımı Kodla Buluşturuyorum.",
            "hero-desc": "Liseden gelen 4 yıllık teknik temelimi ve tam dönem staj tecrübemi harmanlıyorum.",
            "stat-1-val": "Sertifikalı",
            "stat-1-lbl": "Usta Geliştirici",
            "stat-2-lbl": "Arayüz Vizyonu",
            "stat-3-val": "Aktif",
            "stat-3-lbl": "Öğrenme Süreci",
            "feat-1-title": "Modern Arayüz",
            "feat-1-desc": "Tailwind ve Bootstrap kullanarak şık, hızlı ve kullanıcı odaklı tasarımlar geliştiriyorum.",
            "feat-2-title": "Teknik Analiz",
            "feat-2-desc": "Bölümümün getirdiği analiz yeteneğiyle, karmaşık sorunlara temiz kodlu çözümler üretiyorum.",
            "feat-3-title": "Ustalık Belgeli",
            "feat-3-desc": "Lise eğitimimden gelen resmi ustalık ve işyeri açma belgeleriyle teknik yetkinlik.",
            "proj-main-title": "Seçkin Projelerim",
            "proj-1-desc": "Karmaşık görev yönetimi süreçlerini optimize eden saf JavaScript tabanlı mantık projesi.",
            "proj-2-desc": "İnternetin tarihsel gelişimini modern bir arayüzle sunan görsel çalışma.",
            "proj-3-desc": "Veri odaklı yönetim panelleri için tasarlanmış, tam responsive arayüz bileşenleri.",
            "career-main-title": "Kariyer & Eğitim",
            "edu-1-title": "M. Rüştü Uzel MTAL",
            "edu-1-desc": "Bilişim Teknolojileri ve Yazılım eğitimi. 12. sınıfta tam dönem staj ile saha tecrübesi.",
            "edu-2-title": "Yazılım Geliştirme",
            "edu-2-desc": "Yazılım Geliştirme ve Çözümleme bölümü. Frontend üzerine aktif akademik uzmanlaşma.",
            "footer-role": "Usta Geliştirici"
        },
        en: {
            "btn-contact": "Contact Me",
            "nav-about": "What I Do",
            "nav-projects": "Projects",
            "nav-career": "Career",
            "nav-skills": "Skills",
            "hero-badge": "SOFTWARE DEVELOPMENT // FRESHMAN",
            "hero-title": "Merging Design with Code.",
            "hero-desc": "Blending 4 years of technical foundation with professional internship experience.",
            "stat-1-val": "Certified",
            "stat-1-lbl": "Master Developer",
            "stat-2-lbl": "UI Vision",
            "stat-3-val": "Active",
            "stat-3-lbl": "Learning Process",
            "feat-1-title": "Modern UI",
            "feat-1-desc": "Developing sleek, fast and user-centric designs with modern tools.",
            "feat-2-title": "Technical Analysis",
            "feat-2-desc": "Creating clean-coded solutions with strong analytical skills.",
            "feat-3-title": "Mastery Certified",
            "feat-3-desc": "Technical competence with official mastery certificates.",
            "proj-main-title": "Featured Projects",
            "proj-1-desc": "Pure JS logic project for complex task management.",
            "proj-2-desc": "Visual study presenting the history of the web.",
            "proj-3-desc": "Responsive UI components for data-driven dashboards.",
            "career-main-title": "Career & Education",
            "edu-1-title": "M. Rüştü Uzel MTAL",
            "edu-1-desc": "IT and Software education with field experience.",
            "edu-2-title": "Software Development",
            "edu-2-desc": "Academic specialization in Frontend development.",
            "footer-role": "Master Developer"
        },
        ar: {
            "btn-contact": "اتصل بي",
            "nav-about": "ماذا أفعل؟",
            "nav-projects": "مشاريعي",
            "nav-career": "المسيرة والتعليم",
            "nav-skills": "المهارات",
            "hero-badge": "تطوير البرمجيات // السنة الجامعية الأولى",
            "hero-title": "أجمع بين التصميم والكود.",
            "hero-desc": "أمزج بين أساسي التقني لمدة 4 سنوات وخبرتي العملية في التدريب الميداني.",
            "stat-1-val": "معتمد",
            "stat-1-lbl": "مطور محترف",
            "stat-2-lbl": "رؤية الواجهة",
            "stat-3-val": "نشط",
            "stat-3-lbl": "عملية التعلم",
            "feat-1-title": "واجهة عصرية",
            "feat-1-desc": "تطوير تصميمات أنيقة وسريعة باستخدام Tailwind و Bootstrap.",
            "feat-2-title": "التحليل التقني",
            "feat-2-desc": "تقديم حلول برمجية نظيفة للمشاكل المعقدة بمهارات تحليلية.",
            "feat-3-title": "شهادة إتقان",
            "feat-3-desc": "كفاءة تقنية مع شهادات إتقان رسمية لفتح المشاريع.",
            "proj-main-title": "مشاريع مختارة",
            "proj-1-desc": "مشروع منطق JavaScript خالص لتحسين إدارة المهام.",
            "proj-2-desc": "دراسة بصرية تعرض التطور التاريخي للإنترنت بواجهة حديثة.",
            "proj-3-desc": "مكونات واجهة مستخدم سريعة الاستجابة للوحات التحكم.",
            "career-main-title": "المسيرة والتعليم",
            "edu-1-title": "M. Rüştü Uzel MTAL",
            "edu-1-desc": "تعليم تكنولوجيا المعلومات والبرمجيات مع خبرة ميدانية.",
            "edu-2-title": "تطوير البرمجيات",
            "edu-2-desc": "تخصص أكاديمي في تطوير الواجهات الأمامية.",
            "footer-role": "مطور محترف"
        }
    };

    // Dil değiştirme fonksiyonu
    // Tüm data-i18n attribute'lu elementlerin metnini günceller
    // HTML lang ve dir attribute'larını da ayarlar (özellikle Arapça için RTL)
    const updateLang = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerText = i18n[lang][key];
            }
        });

        // <html> etiketine lang ve direction (ltr/rtl) ekle
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Seçilen dili tarayıcıda sakla (sayfa yenilense bile kalır)
        localStorage.setItem('lang', lang);
    };

    // Tüm dil değiştirme linklerine tıklama olayı ekle
    document.querySelectorAll('.lang-switch').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();                    // Link'in normal davranışını engelle
            updateLang(link.dataset.lang);         // Tıklanan dil kodunu al ve uygula
        });
    });

    // Tema değiştirme butonu (light ↔ dark)
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        // Mevcut temanın tersini al (light → dark, dark → light)
        const current = document.documentElement.getAttribute('data-theme');
        const nextTheme = current === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);   // Tercihi sakla
    });

    // Scroll ile görünme efekti (reveal animation)
    const reveal = () => {
        // .reveal class'lı tüm elementleri kontrol et
        document.querySelectorAll('.reveal').forEach(el => {
            // Element ekranın üst kısmına (window yüksekliğinin -50px kadar) geldiyse
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add('active');     // active class'ı ekle → CSS animasyonu başlar
            }
        });
    };

    // Sayfa yüklendiğinde kaydedilmiş tema ve dili uygula
    const savedTheme = localStorage.getItem('theme') || 'light';   // Varsayılan: light
    const savedLang = localStorage.getItem('lang') || 'tr';      // Varsayılan: Türkçe

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateLang(savedLang);

    // Scroll olayında reveal fonksiyonunu çalıştır
    window.addEventListener('scroll', reveal);

    // Sayfa ilk açıldığında da reveal uygula (bazı elementler hemen görünür)
    reveal();
});

// ========================
// Mobil menü davranışı
// ========================

// Navbar'daki tüm linkleri seç
const navLinks = document.querySelectorAll('.nav-link');

// Collapse menü elementini seç
const menuToggle = document.querySelector('.navbar-collapse');

// Bootstrap Collapse instance'ı oluştur (toggle: false → manuel kontrol)
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

// Her menü linkine tıklandığında
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Eğer menü şu an açıksa (mobil modda)
        if (menuToggle.classList.contains('show')) {
            bsCollapse.hide();          // Menüyü kapat
        }
    });
});