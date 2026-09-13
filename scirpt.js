const translations = {
  en: {
    profileName: 'Lam Man-Hei, Hanson',
    profileTitle: 'Student in Computer Science',
    contactEmail: 'Email: mhlam0403@gmail.com',
    contactPhone: 'Phone: +852 61698780',
    contactLocation: 'Location: Hong Kong',
    basicInfoTitle: 'Basic Information',
    labelName: 'Name:',
    nameValue: 'Lam Man-Hei, Hanson',
    labelAge: 'Age:',
    ageValue: '20',
    labelLinkedIn: 'LinkedIn:',
    labelGitHub: 'GitHub:',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    degreeTitle: 'B.Sc. in Computer Science',
    eduMeta: 'The Chinese University of Hong Kong • 2024 - 2028',
    eduDesc: 'Currently a year-3 student focusing on software engineering, web technologies, human-computer interaction and Cybersecurity.',
    courseworkTitle: 'Relevant Coursework',
    courseMeta: 'Web Development, Data Structures, Algorithms',
    courseDesc: 'Completed advanced coursework in front-end development, database systems, and application design.',
    projectsTitle: 'Projects',
    projectOneTitle: 'Portfolio Website',
    projectOneDesc: 'Designed and developed a personal portfolio to showcase projects, skills, and professional experience with a modern and responsive UI.',
    projectTwoTitle: 'Stay Tuned!',
    projectTwoDesc: '...',
    experienceTitle: 'Working Experience',
    jobTitle: 'Data Auditor Intern',
    jobMeta: 'China Mobile International (CMI) • 2026 Jul - 2026 Aug',
    jobDesc: 'Data Analytic Audit Intern in Internal Audit Department Engage in AI agent for contract extraction development, including skill training and result checking Arrange irregular data of attendance record of part-time staff using Python Involve in several projects, including log auditing using SQL and AI skill development.',
    toggleLabel: '中文版'
  },
  zh: {
    profileName: '林文希，Hanson',
    profileTitle: '計算機科學學生',
    contactEmail: '電郵：mhlam0403@gmail.com',
    contactPhone: '電話：+852 61698780',
    contactLocation: '地點：香港',
    basicInfoTitle: '基本資料',
    labelName: '姓名：',
    nameValue: '林文希，Hanson',
    labelAge: '年齡：',
    ageValue: '20',
    labelLinkedIn: 'LinkedIn：',
    labelGitHub: 'GitHub：',
    skillsTitle: '技能',
    educationTitle: '教育背景',
    degreeTitle: '計算機科學學士',
    eduMeta: '香港中文大學 • 2024 - 2028',
    eduDesc: '目前為三年級學生，主修軟件工程、網頁技術、人機互動及網絡安全。',
    courseworkTitle: '相關課程',
    courseMeta: '網頁開發、數據結構、演算法',
    courseDesc: '修讀了前端開發、資料庫系統及應用程式設計等進階課程。',
    projectsTitle: '項目',
    projectOneTitle: '個人作品集網站',
    projectOneDesc: '設計及開發個人作品集網站，用於展示項目、技能和專業經驗，採用現代且響應式的界面設計。',
    projectTwoTitle: '敬請期待！',
    projectTwoDesc: '...',
    experienceTitle: '工作經驗',
    jobTitle: '數據審計實習生',
    jobMeta: '中國移動國際 (CMI) • 2026 年 7 月 - 2026 年 8 月',
    jobDesc: '內部審計部數據分析審計實習生，參與 AI 合約抽取代理開發，包括技能訓練與結果核對；使用 Python 整理兼職員工出勤紀錄的異常數據；參與多個項目，包括使用 SQL 進行日誌審計及 AI 技能開發。',
    toggleLabel: 'English'
  }
};

const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

const applyLanguage = (lang) => {
  const data = translations[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';

  document.getElementById('profileName').textContent = data.profileName;
  document.getElementById('profileTitle').textContent = data.profileTitle;
  document.getElementById('contactEmail').textContent = data.contactEmail;
  document.getElementById('contactPhone').textContent = data.contactPhone;
  document.getElementById('contactLocation').textContent = data.contactLocation;
  document.getElementById('basicInfoTitle').textContent = data.basicInfoTitle;
  document.getElementById('labelName').textContent = data.labelName;
  document.getElementById('nameValue').textContent = data.nameValue;
  document.getElementById('labelAge').textContent = data.labelAge;
  document.getElementById('ageValue').textContent = data.ageValue;
  document.getElementById('labelLinkedIn').textContent = data.labelLinkedIn;
  document.getElementById('labelGitHub').textContent = data.labelGitHub;
  document.getElementById('skillsTitle').textContent = data.skillsTitle;
  document.getElementById('educationTitle').textContent = data.educationTitle;
  document.getElementById('degreeTitle').textContent = data.degreeTitle;
  document.getElementById('eduMeta').textContent = data.eduMeta;
  document.getElementById('eduDesc').textContent = data.eduDesc;
  document.getElementById('courseworkTitle').textContent = data.courseworkTitle;
  document.getElementById('courseMeta').textContent = data.courseMeta;
  document.getElementById('courseDesc').textContent = data.courseDesc;
  document.getElementById('projectsTitle').textContent = data.projectsTitle;
  document.getElementById('projectOneTitle').textContent = data.projectOneTitle;
  document.getElementById('projectOneDesc').textContent = data.projectOneDesc;
  document.getElementById('projectTwoTitle').textContent = data.projectTwoTitle;
  document.getElementById('projectTwoDesc').textContent = data.projectTwoDesc;
  document.getElementById('experienceTitle').textContent = data.experienceTitle;
  document.getElementById('jobTitle').textContent = data.jobTitle;
  document.getElementById('jobMeta').textContent = data.jobMeta;
  document.getElementById('jobDesc').textContent = data.jobDesc;
  langToggle.textContent = data.toggleLabel;
};

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyLanguage(currentLang);
});

applyLanguage(currentLang);
