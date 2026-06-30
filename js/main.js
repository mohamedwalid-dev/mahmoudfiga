// ============================================
// Navigation & Mobile Menu
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

const translations = {
    ar: {
        brandName: 'محمود فيجا',
        brandSubtitle: 'مصمم فيديو احترافي',
        navHome: 'الرئيسية',
        navPortfolio: 'أعمالي',
        navShop: 'المتجر',
        navAbout: 'معلومات',
        navContact: 'تواصل معي',
        themeButtonDark: 'وضع الظلام',
        themeButtonLight: 'الوضع الفاتح',
        langButtonEn: 'EN',
        langButtonAr: 'AR',
        heroTitle: 'سينيور مونتاج وفيديو يبحث عن أفكارك الرقمية',
        heroIntro: 'أمنح علامتك فيديوهات حديثة ومذهلة',
        heroDesc: 'أفضل تجربة بصرية لتقديم قصتك في كل منصة',
        heroAction1: 'شاهد أعمالي',
        heroAction2: 'تصفح المتجر',
        aiTitle: 'Editor GPT',
        aiDesc: 'المساعد الذكي الداخلي للموقع، يساعدك في معرفة خدمات المونتاج والإجابة على استفساراتك بسرعة.',
        aiWelcome: 'أهلاً بك! أنا Editor GPT، المساعد الذكي الداخلي لموقع محمود فيجا.',
        aiPlaceholder: 'اكتب سؤالك عن المونتاج أو الموقع',
        aiButton: 'اسأل الآن',
        aiReplyPrice: 'الأسعار تبدأ من 149 جنيه للبدء وتختلف حسب نوع الفيديو وطبيعة المشروع والخدمة المطلوبة.',
        aiReplyServices: 'أقدم مونتاج، مقدمات، إعلانات، وتأثيرات فيديو حديثة لاحتياجات السوشيال ميديا.',
        aiReplyExperience: 'خبرة 8 سنوات في المونتاج، أكثر من 2000 مشروع، و1200 عميل راضٍ.',
        aiReplySite: 'Editor GPT يجيب من بيانات الموقع مباشرة ويشرح كل قسم وخدمة داخل الموقع.',
        aiReplyContact: 'يمكنك التواصل عبر نموذج التواصل أو إرسال رسالة مباشرة لمناقشة مشروع المونتاج الخاص بك.',
        aiReplyAbout: 'محمود فيجا متخصص في مونتاج الفيديو وتصميم المحتوى، ويقدم حلول فيديو حديثة بجودة احترافية.',
        aiReplyShop: 'في المتجر تجد حزم مونتاج، انتقالات، ومؤثرات صوتية جاهزة للاستخدام في الفيديوهات.',
        aiReplyPortfolio: 'في قسم الأعمال المميزة ستجد مشاريع فيديو احترافية تُظهر أساليب التعديل والتسويق.',
        aiReplyTool: 'Editor GPT هو مساعد داخلي للموقع، يعمل مثل أداة ذكاء اصطناعي داخلية للرد على أسئلة المونتاج والخدمات فقط.',
        aiReplyGeneral: 'Editor GPT يرد داخلياً على أسئلة الموقع والمونتاج. اطرح سؤالاً عن الخدمات، الأسعار، أو كيفية البدء.',
        aboutTitle: 'عني',
        aboutIntro: 'أنا محمود فيجا، سينيور مونتاج ومصمم فيديو حديث. بدأت رحلتي في عالم صناعة الفيديو قبل أكثر من 8 سنوات، وطورت خبرة عميقة في جميع جوانب المونتاج والتصميم.',
        aboutDesc: 'أعمل على بناء قصص بصرية قوية للشركات وصنّاع المحتوى بتقنيات إنتاج حديثة وتأثيرات جاذبة.',
        aboutSkillsTitle: 'مهاراتي:',
        contactTitle: 'تواصل معي',
        contactDesc: 'لديك مشروع في الذهن؟ تواصل معي لمناقشة أفكارك'
    },
    en: {
        brandName: 'Mahmoud Figa',
        brandSubtitle: 'Professional Video Designer',
        navHome: 'Home',
        navPortfolio: 'Portfolio',
        navShop: 'Shop',
        navAbout: 'About',
        navContact: 'Contact',
        themeButtonDark: 'Dark Mode',
        themeButtonLight: 'Light Mode',
        langButtonEn: 'EN',
        langButtonAr: 'عربي',
        heroTitle: 'Senior Video Editor for Modern Digital Stories',
        heroIntro: 'I deliver fresh, high-impact video content.',
        heroDesc: 'I craft visuals that make your story stand out across platforms.',
        heroAction1: 'View Work',
        heroAction2: 'Explore Shop',
        aiTitle: 'Editor GPT',
        aiDesc: 'The internal smart assistant for the site, helping you learn about video editing services and answer your questions quickly.',
        aiWelcome: 'Hello! I am Editor GPT, the internal AI assistant for Mahmoud Figa’s site.',
        aiPlaceholder: 'Ask your question about editing or the site',
        aiButton: 'Ask Now',
        aiReplyPrice: 'Prices start at 149 EGP and vary depending on project type and production.',
        aiReplyServices: 'I offer editing, intros, ads, and modern social media video content.',
        aiReplyExperience: 'Senior experience with 8 years, over 2000 projects, and 1200 happy clients.',
        aiReplySite: 'Editor GPT answers from site data and explains every section and service.',
        aboutTitle: 'About',
        aboutIntro: 'I’m Mahmoud Figa, a senior video editor and modern content creator. I have over 8 years of experience in video production and editing.',
        aboutDesc: 'I build strong visual stories for brands and creators using modern production techniques and striking effects.',
        aboutSkillsTitle: 'Skills:',
        contactTitle: 'Contact Me',
        contactDesc: 'Have a project in mind? Reach out to discuss your ideas.'
    }
};

let currentLang = localStorage.getItem('siteLang') || 'ar';
let currentTheme = localStorage.getItem('siteTheme') || 'dark';

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    currentTheme = theme;
    localStorage.setItem('siteTheme', theme);
    const buttonText = theme === 'dark' ? translations[currentLang].themeButtonLight : translations[currentLang].themeButtonDark;
    if (themeToggle) themeToggle.textContent = buttonText;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    applyTranslations(lang);
    if (langToggle) langToggle.textContent = lang === 'ar' ? translations[lang].langButtonEn : translations[lang].langButtonAr;
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? translations[lang].themeButtonLight : translations[lang].themeButtonDark;
    }
}

function getAIReply(message) {
    const lower = message.toLowerCase();

    // أسئلة عن GPT أو أدوات الذكاء الاصطناعي الداخلية
    if (lower.includes('chatgpt') || lower.includes('gpt') || lower.includes('ai') || lower.includes('شات جي بي تي') || lower.includes('جي بي تي') || lower.includes('ذكاء اصطناعي') || lower.includes('اداة') || lower.includes('أداة') || lower.includes('ادوات') || lower.includes('tools')) {
        return translations[currentLang].aiReplyTool || translations[currentLang].aiReplyGeneral;
    }

    // الأسعار
    if (lower.includes('سعر') || lower.includes('جنيه') || lower.includes('price') || lower.includes('تكلفة')) {
        return translations[currentLang].aiReplyPrice;
    }

    // الخبرة والمشاريع
    if (lower.includes('خبرة') || lower.includes('experience') || lower.includes('project') || lower.includes('مشروع') || lower.includes('اعمال') || lower.includes('portfolio')) {
        return translations[currentLang].aiReplyExperience;
    }

    // أقسام الموقع
    if (lower.includes('موقع') || lower.includes('site') || lower.includes('سيت') || lower.includes('عن')) {
        return translations[currentLang].aiReplySite;
    }

    // أسئلة عن التواصل
    if (lower.includes('تواصل') || lower.includes('اتصال') || lower.includes('contact') || lower.includes('message') || lower.includes('رسالة')) {
        return translations[currentLang].aiReplyContact;
    }

    // أسئلة عن المتجر
    if (lower.includes('متجر') || lower.includes('shop') || lower.includes('حزمة') || lower.includes('منتج') || lower.includes('حزم')) {
        return translations[currentLang].aiReplyShop;
    }

    // أسئلة عن البورتفوليو والأعمال
    if (lower.includes('بورتفوليو') || lower.includes('portfolio') || lower.includes('أعمال') || lower.includes('مشاريع') || lower.includes('عرض')) {
        return translations[currentLang].aiReplyPortfolio;
    }

    // أسئلة عن معلومات الموقع أو عني
    if (lower.includes('عن') || lower.includes('about') || lower.includes('معلومات') || lower.includes('أنا') || lower.includes('أنا محمود') || lower.includes('من')) {
        return translations[currentLang].aiReplyAbout;
    }

    // أسئلة عامة خاصة بالمونتاج والمحتوى
    if (lower.includes('كيف') || lower.includes('ماذا') || lower.includes('لماذا') || lower.includes('اين') || lower.includes('وين') || lower.includes('ليش')) {
        return translations[currentLang].aiReplyGeneral;
    }

    return translations[currentLang].aiReplyGeneral;
}

function addChatMessage(text, sender = 'bot') {
    if (!chatWindow) return;
    const message = document.createElement('div');
    message.className = `chat-message ${sender}`;
    message.textContent = text;
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendChat() {
    if (!chatInput || !chatWindow) return;
    const message = chatInput.value.trim();
    if (!message) return;

    addChatMessage(message, 'user');
    chatInput.value = '';

    try {
        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!res.ok) {
            throw new Error('Server response was not ok');
        }

        const data = await res.json();
        const reply = data.reply || translations[currentLang].aiReplyGeneral;
        addChatMessage(reply, 'bot');
    } catch (error) {
        console.error(error);
        addChatMessage(translations[currentLang].aiReplyGeneral, 'bot');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
    });
}

if (chatSend) {
    chatSend.addEventListener('click', sendChat);
}

if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendChat();
        }
    });
}

setLanguage(currentLang);
setTheme(currentTheme);

// ============================================
// Active Navigation Link
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Portfolio Filter
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Set initial animation for portfolio items
portfolioItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
    item.style.opacity = '1';
});

// ============================================
// Contact Form
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const data = {
            name: contactForm.querySelector('input[name="name"]').value,
            email: contactForm.querySelector('input[name="email"]').value,
            projectType: contactForm.querySelector('input[name="projectType"]').value,
            message: contactForm.querySelector('textarea[name="message"]').value
        };

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideDown 0.3s ease;
        `;
        successMessage.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً';
        document.body.appendChild(successMessage);

        // Reset form
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);

        console.log('تم إرسال البيانات:', data);
    });
}

// ============================================
// Add to Cart Functionality
// ============================================

const addToCartButtons = document.querySelectorAll('.btn-small.btn-primary');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Show notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #7c3aed;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(124, 58, 237, 0.3);
            z-index: 9999;
            animation: slideUp 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="font-weight: 600;">${productName}</div>
            <div style="font-size: 0.9rem; margin-top: 5px;">تم إضافة المنتج للسلة - ${productPrice}</div>
        `;
        document.body.appendChild(notification);

        // Animate button
        button.style.background = '#10b981';
        button.textContent = '✓ تم الإضافة';

        setTimeout(() => {
            notification.remove();
        }, 4000);

        setTimeout(() => {
            button.style.background = '';
            button.textContent = 'أضف للسلة';
        }, 2000);
    });
});

// ============================================
// Smooth Scroll Enhancement
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Video Placeholder Click
// ============================================

const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        alert('سيتم فتح عرض الفيديو الرئيسي هنا');
    });
}

// ============================================
// Video Gallery Modal

const videoModal = document.getElementById('videoModal');
const videoModalPlayer = videoModal ? videoModal.querySelector('.video-modal-player') : null;
const videoModalClose = videoModal ? videoModal.querySelector('.video-modal-close') : null;
const videoGrid = document.getElementById('videoGrid');
const shortCardDetails = [
    { title: 'فيديو: 404', description: 'لقطة درامية سريعة تعرض الإحساس البصري للمونتاج.' },
    { title: 'فيديو: DR.Ali', description: 'مشهد طبي احترافي مع تركيز واضح على التفاصيل.' },
    { title: 'فيديو: Feedback', description: 'عرض لتجارب العملاء بصيغة فيديو واقعية.' },
    { title: 'فيديو: GS8', description: 'إعلان سيارة بحركة كاميرا ناعمة وديناميكية.' },
    { title: 'فيديو: ريل استيت / العقارات', description: 'فيديو يشرح في تفاصيل عن عقار مميز وما يمز المونتاج البسيط والاحترافي في نفس الوقت.' },
    { title: 'فيديو: لحظة', description: 'فيديو سريع يحافظ على الإيقاع والحركة.' },
    { title: 'فيديو: التوتر', description: 'مشهد درامي يعكس حالة التوتر بصرياً.' },
    { title: 'فيديو: معرض سيارات', description: 'إعلان بسيط يركّز على السيارة والحركة.' },
    { title: 'فيديو: السيارات', description: 'لقطة إعلان سيارات بإضاءة ومونتاج ممتاز.' },
    { title: 'فيديو: الرحم', description: 'مشهد إنساني يحكي بقوة الكاميرا.' },
    { title: 'فيديو: المونديال', description: 'فيديو رياضي سريع ينقل طاقة الحدث.' },
    { title: 'فيديو: شركة سعودية', description: 'عرض ترويجي سعودي بمسار كاميرا احترافي.' }
];

const buildVideoGallery = async () => {
    if (!videoGrid) {
        return;
    }

    try {
        const response = await fetch('/urlShort.txt');

        console.log('Fetch response:', response);

        if (!response.ok) {
            console.error(response.status, response.statusText);
            throw new Error(`Failed to load urlShort.txt (${response.status})`);
        }

        const text = await response.text();
        console.log('Text file:', text);

        const urls = text
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean);

        console.log('Fetch response:', response);
        console.log('Text file length:', text.length);
        console.log('Raw URL lines:', urls);

        const extractUrlFromLine = (line) => {
            const markdownUrlMatch = line.match(/\((https?:\/\/[^\s)]+)\)/i);
            if (markdownUrlMatch) {
                return markdownUrlMatch[1];
            }

            const plainUrlMatch = line.match(/https?:\/\/[^\s|)]+/i);
            return plainUrlMatch ? plainUrlMatch[0] : null;
        };

        const extractVideoId = (url) => {
            if (!url) {
                return null;
            }

            const normalizedUrl = url.trim();

            const shortsMatch = normalizedUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube\.googleapis\.com)\/shorts\/([A-Za-z0-9_-]{11})/i);
            if (shortsMatch) {
                return shortsMatch[1];
            }

            const youtuBeMatch = normalizedUrl.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11})/i);
            if (youtuBeMatch) {
                return youtuBeMatch[1];
            }

            const watchMatch = normalizedUrl.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?[^\s]*/i);
            if (watchMatch) {
                try {
                    return new URL(normalizedUrl).searchParams.get('v');
                } catch (error) {
                    return null;
                }
            }

            return null;
        };

        const videoIds = urls
            .map((line, index) => {
                const url = extractUrlFromLine(line);
                const videoId = extractVideoId(url);

                if (!videoId) {
                    console.error(`Unable to parse YouTube ID on line ${index + 1}:`, line);
                }

                return videoId;
            })
            .filter(Boolean);

        console.log('Video IDs:', videoIds);

        if (!videoIds.length) {
            videoGrid.innerHTML = '<div class="video-card"><div class="video-preview" style="display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(135deg,#111827,#0f172a);">لا توجد روابط شورتس</div><div class="video-card-content"><h3>لا توجد فيديوهات</h3><p>أضف روابط Shorts إلى ملف urlShort.txt.</p></div></div>';
            return;
        }

        videoGrid.innerHTML = videoIds.map((videoId, index) => {
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            const cardInfo = shortCardDetails[index] || { title: `YouTube Short ${index + 1}`, description: 'مشهد قصير من يوتيوب شورتس داخل الموقع.' };

            return `
                <div class="video-card" data-video-id="${videoId}">
                    <img
                        class="video-preview"
                        src="${thumbnail}"
                        alt="${cardInfo.title}"
                        loading="lazy"
                    >
                    <div class="video-card-content">
                        <h3>${cardInfo.title}</h3>
                        <p>${cardInfo.description}</p>
                    </div>
                    <div class="video-more-card">
                        <button class="video-more-btn" type="button" onclick="window.open('https://www.behance.net/midofox3', '_blank', 'noopener,noreferrer')">للمزيد اضغط هنا</button>
                    </div>
                </div>
            `;
        }).join('');

        videoGrid.querySelectorAll('.video-card').forEach((card) => {
            card.addEventListener('click', (event) => {
                if (event.target.closest('.video-more-btn')) {
                    return;
                }

                if (!videoModal || !videoModalPlayer) {
                    return;
                }

                const videoId = card.getAttribute('data-video-id');
                if (!videoId) {
                    return;
                }

                videoModalPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
                videoModal.classList.add('open', 'short');
                videoModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });
    } catch (error) {
        console.error(error);
        videoGrid.innerHTML = '<div class="video-card"><div class="video-preview" style="display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(135deg,#111827,#0f172a);">تعذر تحميل Shorts</div><div class="video-card-content"><h3>تعذر تحميل الفيديوهات</h3><p>تحقق من وجود ملف urlShort.txt.</p></div></div>';
    }
};

const closeVideoModal = () => {
    if (!videoModal || !videoModalPlayer) {
        return;
    }

    videoModal.classList.remove('open', 'short');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    videoModalPlayer.src = '';
};

if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
}

if (videoModal) {
    videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal || event.target.classList.contains('video-modal-backdrop')) {
            closeVideoModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && videoModal && videoModal.classList.contains('open')) {
        closeVideoModal();
    }
});

buildVideoGallery();

// ============================================
// Portfolio Image Click
// ============================================

const portfolioLinks = document.querySelectorAll('.portfolio-link');

portfolioLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('سيتم فتح الفيديو الكامل في نافذة جديدة');
    });
});

// ============================================
// Add CSS Animations

// ============================================
// Add CSS Animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.hero-content, .hero-background, .section-header, .portfolio-item, .product-card, .stat-item, .about-content, .contact-container, .profile-card');
revealElements.forEach(el => {
    el.classList.add('reveal-item');
    revealObserver.observe(el);
});

// ============================================
// Counter Animation for Stats
// ============================================

const statItems = document.querySelectorAll('.stat-item h3');
let counterStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
            counterStarted = true;
            animateCounters();
        }
    });
}, { threshold: 0.5 });

document.querySelector('.stats') && counterObserver.observe(document.querySelector('.stats'));

function animateCounters() {
    statItems.forEach(item => {
        const finalValue = item.textContent;
        let currentValue = 0;
        const increment = finalValue.match(/\d+/) ? parseInt(finalValue.match(/\d+/)[0]) / 30 : 0;
        const suffix = finalValue.replace(/\d+/g, '');

        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= parseInt(finalValue.match(/\d+/)[0])) {
                item.textContent = finalValue;
                clearInterval(counter);
            } else {
                item.textContent = Math.floor(currentValue) + suffix;
            }
        }, 50);
    });
}

// ============================================
// Responsive Navigation Menu
// ============================================

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

console.log('✓ موقع محمود مصطفى تم تحميله بنجاح!');