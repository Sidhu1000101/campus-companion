export const categories = [
  {
    id: 'academics',
    name: 'Academics & Exams',
    color: 'bg-blue-600',
    icon: 'BookOpen',
  },
  {
    id: 'library',
    name: 'Library & Learning',
    color: 'bg-yellow-500',
    icon: 'Archive',
  },
  {
    id: 'student-life',
    name: 'Student Life & Campus',
    color: 'bg-green-600',
    icon: 'Users',
  },
  {
    id: 'career',
    name: 'Career & Alumni',
    color: 'bg-purple-600',
    icon: 'Briefcase',
  },
  {
    id: 'online-services',
    name: 'Online Services',
    color: 'bg-pink-600',
    icon: 'Laptop',
  },
  {
    id: 'notices',
    name: 'Notices & Grievances',
    color: 'bg-red-600',
    icon: 'Bell',
  },
  {
    id: 'contact',
    name: 'Social & Contact',
    color: 'bg-gray-700',
    icon: 'Phone',
  },
];

export const links = [
  // Academics & Exams
  {
    id: 'au-official',
    title: 'Official AU Website',
    url: 'https://www.andhrauniversity.edu.in/',
    category: 'academics',
    icon: 'Globe',
    description: 'Andhra University official homepage with all university information.'
  },
  {
    id: 'academic-calendar',
    title: 'Academic Calendar',
    url: 'https://www.andhrauniversity.edu.in/student-corner/academic-calendar.html',
    category: 'academics',
    icon: 'Calendar',
    description: 'View the latest academic calendar for all AU programs.'
  },
  {
    id: 'exam-portal',
    title: 'Examination Portal',
    url: 'https://exams.andhrauniversity.edu.in/',
    category: 'academics',
    icon: 'FileText',
    description: 'Hall tickets, revaluation, certificates, and more.'
  },
  {
    id: 'admissions',
    title: 'Admissions (AUEET, Notifications, Application)',
    url: 'https://audoa.andhrauniversity.edu.in/',
    category: 'academics',
    icon: 'ClipboardList',
    description: 'Admissions portal for all AU programs and entrance tests.'
  },
  {
    id: 'results',
    title: 'Results',
    url: 'https://results.andhrauniversity.edu.in/',
    category: 'academics',
    icon: 'BarChart2',
    description: 'Check your Andhra University exam results online.'
  },

  // Library & Learning
  {
    id: 'library',
    title: 'AU Central Library',
    url: 'https://www.andhrauniversity.edu.in/library/dashboard.html',
    category: 'library',
    icon: 'BookOpen',
    description: 'Access the central library, digital resources, and e-journals.'
  },
  {
    id: 'library-digital',
    title: 'Library Digital Manuscript Repository',
    url: 'https://scholarkart.in/AU/',
    category: 'library',
    icon: 'Archive',
    description: 'Rare manuscripts and digital archives.'
  },
  {
    id: 'lms',
    title: 'AU LMS (MOOCs)',
    url: 'https://andhrauniversity-sde.com/',
    category: 'library',
    icon: 'MonitorPlay',
    description: 'Online learning and MOOCs platform for AU students.'
  },

  // Student Life & Campus
  {
    id: 'hostel',
    title: 'Hostel & Accommodation',
    url: 'https://www.andhrauniversity.edu.in/university-hostels/engineering-hostel.html',
    category: 'student-life',
    icon: 'Home',
    description: 'Information about hostels and accommodation at AU.'
  },
  {
    id: 'campus-map',
    title: 'Campus Map / How to Reach',
    url: 'https://www.unirank.org/in/uni/andhra-university/map/',
    category: 'student-life',
    icon: 'Map',
    description: 'Directions and campus map for Andhra University.'
  },
  {
    id: 'sports',
    title: 'Sports & Facilities',
    url: 'https://www.andhrauniversity.edu.in/sports/sports.html',
    category: 'student-life',
    icon: 'Dribbble',
    description: 'Sports infrastructure and activities at AU.'
  },

  // Career & Alumni
  {
    id: 'placement',
    title: 'Placement Cell / Career Guidance',
    url: 'https://www.andhrauniversity.edu.in/administration-wing/placementcell.html',
    category: 'career',
    icon: 'Briefcase',
    description: 'Placement and career guidance for AU students.'
  },
  {
    id: 'alumni',
    title: 'AU Alumni Association',
    url: 'https://andhrauniversityalumni.com/',
    category: 'career',
    icon: 'Users',
    description: 'Connect with AU alumni and alumni events.'
  },

  // Online Services
  {
    id: 'fee-payment',
    title: 'Online Tuition Fee Payment',
    url: 'https://services.andhrauniversity.edu.in/tutionfee/payfee.php',
    category: 'online-services',
    icon: 'CreditCard',
    description: 'Pay your tuition and other fees online.'
  },
  {
    id: 'certificates',
    title: 'Apply for Certificates/Transcripts',
    url: 'https://services.andhrauniversity.edu.in/apply-online-certificates.php',
    category: 'online-services',
    icon: 'FileCheck2',
    description: 'Apply for certificates, transcripts, and other documents.'
  },
  {
    id: 'distance-education',
    title: 'Distance & Online Education',
    url: 'https://www.andhrauniversity.edu.in/admissions/school-of-distance-education.html',
    category: 'online-services',
    icon: 'Laptop',
    description: 'Centre for Distance & Online Education at AU.'
  },
  {
    id: 'wifi-registration',
    title: 'WiFi Registration',
    url: 'https://exams.andhrauniversity.edu.in/filestorage/Wifiform.pdf',
    category: 'online-services',
    icon: 'Wifi',
    description: 'Register your device for campus WiFi access.'
  },

  // Notices & Grievances
  {
    id: 'grievance',
    title: 'Student Grievance Cell',
    url: 'https://www.andhrauniversity.edu.in/grievance/student-gr.html',
    category: 'notices',
    icon: 'AlertCircle',
    description: 'Submit grievances and complaints.'
  },
  {
    id: 'anti-ragging',
    title: 'Anti-Ragging Cell',
    url: 'https://www.andhrauniversity.edu.in/grievance/anti-ragg.html',
    category: 'notices',
    icon: 'ShieldAlert',
    description: 'Report ragging and get support.'
  },
  {
    id: 'women-cell',
    title: 'Women\'s Grievance Cell',
    url: 'https://www.andhrauniversity.edu.in/grievance/women-gr.html',
    category: 'notices',
    icon: 'UserCheck',
    description: 'Support for women students at AU.'
  },

  // Social & Contact
  {
    id: 'contact',
    title: 'Contact Directory',
    url: 'https://andhrauniversityonline.in/contact.html',
    category: 'contact',
    icon: 'Phone',
    description: 'Contact information for AU departments and offices.'
  },
  {
    id: 'facebook',
    title: 'AU Facebook',
    url: 'https://www.facebook.com/andhrauniversitydotedudotin/',
    category: 'contact',
    icon: 'Facebook',
    description: 'Official Facebook page of Andhra University.'
  },
  {
    id: 'twitter',
    title: 'AU Twitter',
    url: 'https://x.com/ANDHRAUNIVERSITY',
    category: 'contact',
    icon: 'Twitter',
    description: 'Official Twitter handle of Andhra University.'
  },
  {
    id: 'instagram',
    title: 'AU Instagram',
    url: 'https://www.instagram.com/andhrauniversity.official/',
    category: 'contact',
    icon: 'Instagram',
    description: 'Official Instagram of Andhra University.'
  }
]; 