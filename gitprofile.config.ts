
const CONFIG = {
  github: {
    username: 'rohitkhoja',
  },
 
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Rohit Khoja',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rohit-khoja344',
    researchGate: '',
    //medium: '',
    phone: '',
    email: 'rkhoja2@asu.edu, rohit.khoja344@gmail.com',
    },
    resume: {
      fileUrl:
        'https://drive.google.com/file/d/1A1UKS9Lc3wl0DZ-iuM9SLq3oH1skLF2a/view?usp=sharing', 
    },
    skills: [
      'Java',
      'ReactJS',
      'Python',
      'MySQL',
      'PySpark',
      'C/C++',
      'JavaScript',
      'Spring Boot',
      'Node.js',
      'REST',
      'AG Grid',
      'gRPC',
      'Socket',
      'Playwright',
      'Grafana',
      'Hadoop',
      'MongoDB',
      'Docker',
      'RedHat OpenShift',
      'NAS',
      'Jenkins',
      'Git',
      'Kubernetes',
      'Linux',
      'Gradle',
      'Helm',
      'ECS',
      'Amazon S3',
      'AWS Lambda',
      'Django',
      'CI/CD',
      'Cloud-based Microservices',
      'Deep Learning',
      'LLMs',
      'Numpy',
      'Pandas',
      'Tensorflow',
      'Semantic Reasoning',
      'LLM Agent',
      'RAG',
      'CoT',
    ],
    experiences: [
      {
      company: 'NLP Lab at ASU',
      position: 'Research Assistant',
      from: 'August 2024',
      to: 'Present',
      companyLink: 'https://example.com',
      description: 'Designing a modular agentic pipeline to query semi-structured and multi-model tables, utilizing SQL for structured data operations and LLMs/VLMs for handling unstructured, temporal data, images and semantic reasoning tasks.\n\nAchieved 79 percent accuracy over table question answers datasets such as WikiTQ, outperforming existing models by ~9 percent.',

      },
      {
      company: 'EdPlus ASU',
      position: 'Software Developer',
      from: 'November 2024',
      to: 'Present',
      companyLink: 'https://example.com',
      description: 'Building a RAG-based chatbot leveraging LLMs and Server-Sent Events (SSE) to assist nearly 600 students with their coursework.\n\nMigrated and automated end to end user interface and API testing using Playwright, elevating efficiency by ~80 percent.',
      },
      {
        company: 'Citigroup',
        position: 'Software Developer',
        from: 'July 2021',
        to: 'August 2024',
        companyLink: 'https://example.com',
        description: 'Full Stack:\nOrchestrated Kubernetes to monitor performance, health and discovery of 53 ECS-deployed micro-services across 17 clusters, with real-time data streaming on a React dashboard leveraging Reactive Java, R-Socket. Ensuring near-zero down time.\nFacilitated over 10 teams and 200 employees globally by resolving issues and releasing new versions of Spring Boot starter framework to enable one click deployment and provided role based access control (RBAC) to each team.\nAutomated retrieval of service dependency vulnerability data from Jenkins build for ∼ 100 replicas and integrated with dashboard.\nInitiated and designed micro service to send status reports and failure notifications, improving system reliability by 30%.\nInitiated a tech program benefiting over 500 employees monthly to facilitate implementation of new technologies.\nData Analyst:\nAchieved tracing with less than 10 microseconds added latency and 50 plus metrics leveraging Grafana Tempo and Prometheus for service monitoring.\nIntegrated server-side data handling and MongoDB aggregation pipeline, reducing data loading time by 90%.\nLed migration of SQL and Java applications to the Spark framework using PySpark, implementing complex business logic and cutting down processing time by ∼ 65%.',        
      },
    ],
    certifications: [
      {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
      },
    ],
    educations: [
      {
        institution: 'Arizona State University',
        degree: 'Master of Science in Computer Science',
        from: '2024',
        to: '2026',
        description: 'Focus on artificial intelligence and machine learning',
        coursework: 'Cloud Computing,  Software Security, Natural Language Processing, Stastical Machine Learning, Data Mining',   
        gpa: '4.0/4.0',
      },
      {
        institution: 'National Institute of Technology Karnataka, Surathkal',
        degree: 'Bachelor of Technology in Electronics and Communication Engineering',
        from: '2017',
        to: '2021',
        description: '',
        coursework: 'Data Analytics, Neural Networks and Deep Learning, Image and Video Processing, Data Structures and Algorithms, Statistical Analysis, Numerical Analysis , Computer Programming, Computer Architecture',
        gpa: '8.8/10.0',
      },
    ],
    publications: [
      {
      title: 'CloudX-net: A robust encoder-decoder architecture for cloud detection from satellite remote sensing images',
      conferenceName: '',
      journalName: 'Elsevier',
      authors: 'Sumit Kanu, Rohit Khoja',
      link: 'https://doi.org/10.1016/j.rsase.2020.100417',
      description:
        'Cloud Detection is an important pre-processing step for any application involving remote sensing data. This paper presents a deep learning based CloudX-Net architecture, that can detect cloud cover with improved accuracy in comparison to the benchmark from satellite remote sensing images. The proposed CloudX-Net model reduces the number of parameters needed for accurate predictions and thus make deep learning based cloud detection method very efficient. Atrous Spatial Pyramid Pooling (ASPP) and Separable convolution are used to optimize the network. For experimentation, we have used Landsat 8 images and 38-Cloud dataset and trained the architectures using Soft Jaccard loss function. Comparing several quantifying metrics result from various recent deep learning architectures proves the efficiency and effectiveness of the proposed CloudX-Net model for cloud detection from satellite images. ',
      },
      {
      title: 'Simulation study of multilayer hybrid plasmonic switch using Franz–Keldysh effect.',
      conferenceName: 'Conference Name',
      journalName: 'SPIE',
      authors: 'Santosh Kumar Sahu, Rohit Khoja',
      link: 'https://doi.org/10.1117/1.OE.59.4.040501',
      description:
        'A CMOS compatible three-port all-optical silicon switch working in 1.473 to 1.502  μm (extinction ratio   (  ER  )    =  5.5  dB, λC  =  1.488  μm) and 1.512 to 1.5306  μm (ER  =  3.079  dB, λC  =  1.52  μm) bands is demonstrated in this work through numerical simulations. However, in spite of the all optical control, having null refractive index contrast between the transmitting and control waveguides of the switch causes the switching merit to deteriorate because of light leaking from the transmitting waveguide. Later, by employing Franz–Keldysh effect-induced absorption coefficient tuning of Si1  −  x Gex (x  =  0.85) to replace the silicon control port of the switch, 2.95-dB leakage reduction in the ON state is achieved, which is assessed in detail. Also, our numerical simulations confirmed the bandwidth of 38 GHz, which suggested a multilayer plasmonic waveguide structure.',
      },
    ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },


  enablePWA: true,
};

export default CONFIG;
