 
        // Language Toggle Function
        function toggleLanguage() {
            const arabicContent = document.getElementById('arabic-content');
            const turkishContent = document.getElementById('turkish-content');
            const langBtn = document.getElementById('langBtn');
            const htmlElement = document.documentElement;
            const body = document.body;

            // Toggle visibility
            arabicContent.classList.toggle('hidden');
            turkishContent.classList.toggle('hidden');

            // Toggle direction and language
            if (htmlElement.lang === 'ar') {
                htmlElement.lang = 'tr';
                htmlElement.dir = 'ltr';
                body.classList.add('ltr');
                langBtn.textContent = 'العربية';
                localStorage.setItem('language', 'tr');
            } else {
                htmlElement.lang = 'ar';
                htmlElement.dir = 'rtl';
                body.classList.remove('ltr');
                langBtn.textContent = 'Türkçe';
                localStorage.setItem('language', 'ar');
            }
        }

        // Load saved language preference
        window.addEventListener('load', function() {
            const savedLanguage = localStorage.getItem('language') || 'ar';
            const htmlElement = document.documentElement;
            const body = document.body;
            const arabicContent = document.getElementById('arabic-content');
            const turkishContent = document.getElementById('turkish-content');
            const langBtn = document.getElementById('langBtn');

            if (savedLanguage === 'tr') {
                htmlElement.lang = 'tr';
                htmlElement.dir = 'ltr';
                body.classList.add('ltr');
                arabicContent.classList.add('hidden');
                turkishContent.classList.remove('hidden');
                langBtn.textContent = 'العربية';
            } else {
                htmlElement.lang = 'ar';
                htmlElement.dir = 'rtl';
                body.classList.remove('ltr');
                arabicContent.classList.remove('hidden');
                turkishContent.classList.add('hidden');
                langBtn.textContent = 'Türkçe';
            }
        }); 