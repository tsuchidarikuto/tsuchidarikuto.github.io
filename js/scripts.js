/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const translations = {
        ja: {
            'meta.title': '土田陸斗 - Resume',
            'nav.name': '土田陸斗',
            'about.name.family': '土田',
            'about.name.given': '陸斗',
            'about.subtitle': '奈良先端科学技術大学院大学 情報科学領域 修士2年',
            'experience.ico.role': 'バックエンドエンジニア（業務委託）',
            'experience.ico.company': '株式会社ICO',
            'experience.ico.desc': 'NAIST発スタートアップにて、FastAPIを用いたバックエンド開発を担当しています。',
            'experience.ico.date': '2025年5月 - 現在',
            'experience.stella.role': 'メンター',
            'experience.stella.company': 'NAIST STELLA',
            'experience.stella.desc': '高校生の研究活動を支援するメンターとして活動しています。',
            'experience.stella.date': '2025年5月 - 現在',
            'experience.monotaro.role': 'インターンシップ',
            'experience.monotaro.company': '株式会社MonotaRO',
            'experience.monotaro.desc': '既存処理の非同期化によるレイテンシ改善に取り組みました。各種テストの実装やDatadogによる計測を行いました。',
            'experience.monotaro.date': '2025年8月',
            'experience.fr.role': 'インターンシップ',
            'experience.fr.company': '株式会社ファーストリテイリング',
            'experience.fr.desc': 'ECサイトのバックエンド開発に従事しました。社内共通語が英語の環境で、海外メンターとの1on1ミーティングを含め、英語でのコミュニケーションを経験しました。',
            'experience.fr.date': '2025年9月 - 10月',
            'experience.utm.role': 'インターンシップ',
            'experience.utm.company': 'マレーシア工科大学',
            'experience.utm.desc': '教材用ロボットアームの設計から部品の選定・発注、組み立て、プログラム実装まで一連の開発プロセスを英語でのコミュニケーションと議論を通じて完遂しました。',
            'experience.utm.date': '2023年9月 - 10月',
            'education.naist.school': '奈良先端科学技術大学院大学',
            'education.naist.degree': '情報科学領域 修士課程',
            'education.naist.date': '2025年4月 - 2027年3月（予定）',
            'education.kosen.school': '岐阜工業高等専門学校',
            'education.kosen.degree': '先端融合開発専攻科',
            'education.kosen.date': '2023年4月 - 2025年3月',
            'education.kosen.undergrad.school': '岐阜工業高等専門学校',
            'education.kosen.undergrad.degree': '電子制御工学科',
            'education.kosen.undergrad.date': '2018年4月 - 2023年3月',
            'interests.research.github.title': 'GitHubにおけるAIエージェント採用者の分析',
            'interests.research.github.desc': 'ソフトウェア工学研究室にて、AIコーディングエージェントのユーザー理解に関する研究を実施しています。',
            'interests.research.github.date': '2025年',
            'interests.research.sentiment.title': 'Word2vecとクラスタ分析を使用した感情分析モデル',
            'interests.research.sentiment.desc': 'Word2vecとクラスタ分析を組み合わせることで、教師データを必要とせず、低コストかつ柔軟性の高い感情分析モデルを開発しました。',
            'interests.research.sentiment.date': '2023年',
            'projects.mimcare.title': 'MiMcare(介護施設向けおしゃべりロボット)',
            'projects.mimcare.desc': '高齢者の見守りを目的としたシステムです。高齢者との会話情報を元に、介護施設側のダッシュボードや家族用のアプリケーションに必要な情報を表示します。<a href="https://geiot-comm.naist.jp/" target="_blank">NAIST GEIOT</a>全体2位を獲得し、<a href="https://www.osaka-startup.com/program/sio-accel/" target="_blank">SIOアクセラレーション2025</a>に採択されました。',
            'projects.mimcare.date': '2025年',
            'projects.mentry.title': 'MENTRY（面接シミュレーションアプリ）',
            'projects.mentry.desc': '就職活動における面接練習を支援するWebアプリケーションです。また、LLMに入力されるコンテキストの増大に伴って、LLMが本来の支持から逸れてしまうのを避けるために、質問リスト作成、面接の進行、深掘り質問の考案、合否の評価をそれぞれ別のLLMが、オーケストレーション的な動作するような設計にしました。',
            'projects.mentry.date': '2025年',
            'projects.cooking.title': 'AI料理アシスタント',
            'projects.cooking.desc': '音声対話と画像認識AIを搭載した料理支援アプリケーションです。Progate主催のハッカソンで開発しました。',
            'projects.cooking.date': '2025年',
            'projects.comentor.title': 'Comentor（コメント評価アプリ）',
            'projects.comentor.desc': 'コードのコメント品質を評価するWebアプリケーションです。ハッカソンで開発しました。',
            'projects.comentor.date': '2024年',
            'presentations.github.title': 'GitHub における生成 AI 採用者のメンテナンス活動の分析',
            'presentations.github.venue': '日本ソフトウェア科学会 ソフトウェア工学の基礎ワークショップ <a href="https://fose.jssst.or.jp/fose2025/award.html#FOSE" target="_blank">FOSE2025</a> ポスターセッション',
            'presentations.github.date': '2025年11月',
            'presentations.sentiment.title': 'Word2vecとクラスタ分析を利用した感情推定モデル',
            'presentations.sentiment.venue': '電気・電子・情報関係学会東海支部連合大会',
            'presentations.sentiment.date': '2023年8月',
            'awards.toeic': 'TOEIC L&R 915点（2023年10月）',
            'awards.fe': '基本情報技術者（2024年5月）',
            'awards.gci': '松尾研 GCI講座 修了',
            'awards.llm': '松尾研 LLM講座 修了',
            'awards.fose': '第32回 日本ソフトウェア科学会 ソフトウェア工学の基礎ワークショップ ポスターセッション 優秀発表賞（2025年11月）',
            'awards.geiot': 'NAIST GEIOT 2位（2025年）',
            'awards.gihaku': '技育博2024 Vol.6 出展（2025年2月）',
            'awards.sio': '<a href="https://www.osaka-startup.com/program/sio-accel/" target="_blank">SIOアクセラレーション2025</a> 採択',
            'awards.valorant': '<strong>Round Outcome Prediction in VALORANT Using Tactical Features from Video Analysis</strong><br><em>Authors:</em> Nirai Hayakawa, Kazumasa Shimari, Kazuma Yamasaki, Hirotatsu Hoshikawa, Rikuto Tsuchida, Kenichi Matsumoto<br><em>Venue:</em> 2025 IEEE Conference on Games (CoG 2025)（2025年8月）',
        },
        en: {
            'meta.title': 'Rikuto Tsuchida - Resume',
            'nav.name': 'Rikuto Tsuchida',
            'about.name.family': 'Tsuchida',
            'about.name.given': 'Rikuto',
            'about.subtitle': 'M2, Information Science, Nara Institute of Science and Technology',
            'experience.ico.role': 'Backend Engineer (Contract)',
            'experience.ico.company': 'ICO Inc.',
            'experience.ico.desc': 'Working on backend development with FastAPI at a startup originating from NAIST.',
            'experience.ico.date': 'May 2025 - Present',
            'experience.stella.role': 'Mentor',
            'experience.stella.company': 'NAIST STELLA',
            'experience.stella.desc': 'Supporting high school students with their research projects.',
            'experience.stella.date': 'May 2025 - Present',
            'experience.monotaro.role': 'Internship',
            'experience.monotaro.company': 'MonotaRO Co., Ltd.',
            'experience.monotaro.desc': 'Worked on latency reduction by making existing processes asynchronous and handled testing and measurements with Datadog.',
            'experience.monotaro.date': 'August 2025',
            'experience.fr.role': 'Internship',
            'experience.fr.company': 'Fast Retailing Co., Ltd.',
            'experience.fr.desc': 'Contributed to e-commerce backend development and communicated in English with overseas mentors, including 1-on-1 meetings.',
            'experience.fr.date': 'September - October 2025',
            'experience.utm.role': 'Internship',
            'experience.utm.company': 'Universiti Teknologi Malaysia',
            'experience.utm.desc': 'Completed the full development process for an educational robot arm—from design and component sourcing to assembly and programming—through discussions and communication in English.',
            'experience.utm.date': 'September - October 2023',
            'education.naist.school': 'Nara Institute of Science and Technology',
            'education.naist.degree': 'M.S. in Information Science',
            'education.naist.date': 'Apr 2025 - Mar 2027 (expected)',
            'education.kosen.school': 'Gifu National College of Technology',
            'education.kosen.degree': 'Advanced Course in Integrated Engineering',
            'education.kosen.date': 'Apr 2023 - Mar 2025',
            'education.kosen.undergrad.school': 'Gifu National College of Technology',
            'education.kosen.undergrad.degree': 'Department of Electronic Control Engineering',
            'education.kosen.undergrad.date': 'Apr 2018 - Mar 2023',
            'interests.research.github.title': 'Analyzing Early Adopters of AI Agents on GitHub',
            'interests.research.github.desc': 'Conducting research in a software engineering lab to understand users of AI coding agents.',
            'interests.research.github.date': '2025',
            'interests.research.sentiment.title': 'Sentiment Analysis Model Using Word2vec and Cluster Analysis',
            'interests.research.sentiment.desc': 'Developed a cost-efficient, flexible sentiment analysis model that requires no labeled data by combining Word2vec with cluster analysis.',
            'interests.research.sentiment.date': '2023',
            'projects.mimcare.title': 'MiMcare (Conversational Robot for Care Facilities)',
            'projects.mimcare.desc': 'A system that supports elder care by surfacing insights from conversation data on facility dashboards and a family app. Won 2nd place overall at <a href="https://geiot-comm.naist.jp/" target="_blank">NAIST GEIOT</a> and was selected for <a href="https://www.osaka-startup.com/program/sio-accel/" target="_blank">SIO Acceleration 2025</a>.',
            'projects.mimcare.date': '2025',
            'projects.mentry.title': 'MENTRY (Interview Simulation App)',
            'projects.mentry.desc': 'A web application for practicing job interviews. Separate LLMs orchestrate question list creation, interview flow, deep-dive questions, and evaluation to keep each model aligned as context grows.',
            'projects.mentry.date': '2025',
            'projects.cooking.title': 'AI Cooking Assistant',
            'projects.cooking.desc': 'A cooking assistant with voice dialogue and image recognition AI, built during a Progate hackathon.',
            'projects.cooking.date': '2025',
            'projects.comentor.title': 'Comentor (Comment Quality Evaluator)',
            'projects.comentor.desc': 'A web application that evaluates code comment quality, built during a hackathon.',
            'projects.comentor.date': '2024',
            'presentations.github.title': 'Analyzing Maintenance Activities of Generative AI Adopters on GitHub',
            'presentations.github.venue': 'Japan Society for Software Science and Technology, Foundations of Software Engineering Workshop <a href="https://fose.jssst.or.jp/fose2025/award.html#FOSE" target="_blank">FOSE2025</a> Poster Session',
            'presentations.github.date': 'November 2025',
            'presentations.sentiment.title': 'Sentiment Estimation Model Using Word2vec and Cluster Analysis',
            'presentations.sentiment.venue': 'Tokai-Section Joint Conference of Electrical, Electronic and Information Engineers',
            'presentations.sentiment.date': 'August 2023',
            'awards.toeic': 'TOEIC L&R 915 (Oct 2023)',
            'awards.fe': 'Fundamental Information Technology Engineer (May 2024)',
            'awards.gci': 'Completed Matsuo Lab GCI Course',
            'awards.llm': 'Completed Matsuo Lab LLM Course',
            'awards.fose': '32nd JSSST Foundations of Software Engineering Workshop Poster Session Best Presentation Award (Nov 2025)',
            'awards.geiot': 'NAIST GEIOT Runner-up (2025)',
            'awards.gihaku': 'Exhibited at Gihaku 2024 Vol.6 (Feb 2025)',
            'awards.sio': 'Selected for <a href="https://www.osaka-startup.com/program/sio-accel/" target="_blank">SIO Acceleration 2025</a>',
            'awards.valorant': '<strong>Round Outcome Prediction in VALORANT Using Tactical Features from Video Analysis</strong><br><em>Authors:</em> Nirai Hayakawa, Kazumasa Shimari, Kazuma Yamasaki, Hirotatsu Hoshikawa, Rikuto Tsuchida, Kenichi Matsumoto<br><em>Venue:</em> 2025 IEEE Conference on Games (CoG 2025) (Aug 2025)',
        },
    };

    const translatableElements = document.querySelectorAll('[data-i18n-key]');
    const languageButtons = document.querySelectorAll('[data-lang-toggle]');

    const setLanguage = lang => {
        const selectedLang = translations[lang] ? lang : 'ja';

        translatableElements.forEach(element => {
            const key = element.dataset.i18nKey;
            const translation = translations[selectedLang][key];

            if (!translation) {
                return;
            }

            if (element.dataset.i18nHtml === 'true') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        document.documentElement.setAttribute('lang', selectedLang === 'en' ? 'en' : 'ja');

        languageButtons.forEach(button => {
            const isActive = button.dataset.langToggle === selectedLang;
            button.classList.toggle('btn-light', isActive);
            button.classList.toggle('text-primary', isActive);
            button.classList.toggle('active', isActive);
            button.classList.toggle('btn-outline-light', !isActive);
            button.setAttribute('aria-pressed', isActive);
        });

        localStorage.setItem('preferredLanguage', selectedLang);
    };

    const savedLanguage = localStorage.getItem('preferredLanguage');
    setLanguage(savedLanguage === 'en' ? 'en' : 'ja');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.langToggle;
            setLanguage(selectedLang);
        });
    });

});
