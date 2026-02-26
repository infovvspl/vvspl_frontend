export const SERVICES = [
    {
        id: '01',
        title: 'AI/ML Solutions',
        short: 'Artificial Intelligence',
        icon: '🤖',
        accent: 'from-indigo-500 to-violet-500',
        glow: 'bg-indigo-600/20',
        border: 'hover:border-indigo-500/40',
        tag: 'Intelligence',
        description:
            'We design and deploy production-ready AI and machine learning systems — from predictive analytics and NLP pipelines to computer vision and generative AI integrations that transform raw data into competitive advantage.',
        features: [
            {
                name: 'Predictive Analytics',
                desc: 'Harness historical data to forecast trends and outcomes, enabling proactive decision-making and operational optimization.'
            },
            {
                name: 'Natural Language Processing',
                desc: 'Build systems that understand, interpret, and generate human language to automate communication and extract insights from text.'
            },
            {
                name: 'Computer Vision',
                desc: 'Implement visual recognition systems that can identify objects, track movements, and interpret visual data with human-like precision.'
            },
            {
                name: 'GenAI Integration',
                desc: 'Leverage large language models to create creative content, automate coding, and build intelligent virtual assistants.'
            },
            {
                name: 'Model Fine-tuning',
                desc: 'Customize pre-trained models on your specific dataset to achieve superior performance for niche industry use cases.'
            },
            {
                name: 'MLOps & Monitoring',
                desc: 'Establish robust pipelines for automated model deployment, retraining, and real-time performance tracking.'
            }
        ],
        techStack: ['PyTorch', 'TensorFlow', 'OpenAI', 'HuggingFace', 'Kubeflow', 'MLflow'],
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200',
    },
    {
        id: '02',
        title: 'Cloud Infrastructure',
        short: 'Cloud & DevOps',
        icon: '☁️',
        accent: 'from-cyan-500 to-blue-500',
        glow: 'bg-cyan-500/20',
        border: 'hover:border-cyan-500/40',
        tag: 'Scalability',
        description:
            'Architect resilient, auto-scaling cloud environments across AWS, GCP, and Azure. We handle everything from multi-cloud strategy and cost optimisation to CI/CD pipelines and zero-downtime deployments.',
        features: [
            {
                name: 'Multi-Cloud Architecture',
                desc: 'Design distributed systems that leverage the strengths of multiple providers for maximum reliability and flexibility.'
            },
            {
                name: 'Kubernetes & Docker',
                desc: 'Containerize applications and orchestrate them at scale to ensure consistent performance across environments.'
            },
            {
                name: 'CI/CD Pipelines',
                desc: 'Automate building, testing, and deployment to deliver features faster and with fewer manual errors.'
            },
            {
                name: 'Cost Optimisation',
                desc: 'Analyze cloud spend and implement rightsizing and architecture changes to maximize ROI on infrastructure.'
            },
            {
                name: 'Disaster Recovery',
                desc: 'Implement automated backup systems and failover strategies to guarantee business continuity in any scenario.'
            },
            {
                name: 'Infrastructure as Code',
                desc: 'Manage your entire infrastructure through version-controlled code using tools like Terraform and CloudFormation.'
            }
        ],
        techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Docker'],
        img: 'https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: '03',
        title: 'Cyber Security',
        short: 'Security & Compliance',
        icon: '🔐',
        accent: 'from-rose-500 to-orange-500',
        glow: 'bg-rose-500/15',
        border: 'hover:border-rose-500/40',
        tag: 'Protection',
        description:
            'End-to-end security posture management — penetration testing, threat modelling, SOC setup, and compliance readiness (ISO 27001, GDPR, SOC 2). We harden your systems before attackers find the cracks.',
        features: [
            {
                name: 'Penetration Testing',
                desc: 'Identify vulnerabilities through simulated attacks, providing actionable reports to strengthen your defenses.'
            },
            {
                name: 'Threat Modelling',
                desc: 'Systematically identify potential security threats and design countermeasures early in the development lifecycle.'
            },
            {
                name: 'SOC Implementation',
                desc: 'Set up Security Operations Centers for continuous monitoring and rapid response to security incidents.'
            },
            {
                name: 'GDPR & ISO 27001',
                desc: 'Ensure your organization meets global data protection standards and industry security certifications.'
            },
            {
                name: 'Zero-Trust Architecture',
                desc: 'Implement security models that require strict verification for every user and device trying to access resources.'
            },
            {
                name: 'Incident Response',
                desc: 'Develop and test playbooks for reacting to security breaches, minimizing damage and recovery time.'
            }
        ],
        techStack: ['Burp Suite', 'Metasploit', 'Wazuh', 'Splunk', 'CrowdStrike', 'Okta'],
        img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200',
    },
    {
        id: '04',
        title: 'Web Applications',
        short: 'Web Development',
        icon: '🌐',
        accent: 'from-emerald-500 to-teal-500',
        glow: 'bg-emerald-500/15',
        border: 'hover:border-emerald-500/40',
        tag: 'Experience',
        description:
            'Full-stack web applications built for speed, scale, and conversion. From React and Next.js frontends to robust Node, Python, or Go backends — we ship products that feel as good as they perform.',
        features: [
            {
                name: 'React / Next.js',
                desc: 'Develop dynamic, SEO-friendly frontends using the industry-leading frameworks for modern web experiences.'
            },
            {
                name: 'Node & Python APIs',
                desc: 'Architect high-performance backends and REST/GraphQL APIs that power seamless data exchange.'
            },
            {
                name: 'Performance Optimisation',
                desc: 'Fine-tune core web vitals and code efficiency to ensure sub-second load times and smooth interactions.'
            },
            {
                name: 'PWA & Offline-first',
                desc: 'Build web applications that function reliably even without an internet connection, providing app-like experiences.'
            },
            {
                name: 'CMS Integration',
                desc: 'Implement headless or traditional content management systems to empower marketing teams while maintaining technical control.'
            },
            {
                name: 'A/B Testing & Analytics',
                desc: 'Deploy data-driven feature experiments and tracking to continuously improve user engagement and conversion rates.'
            }
        ],
        techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Vercel'],
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200',
    },
    {
        id: '05',
        title: 'Mobile Apps',
        short: 'iOS & Android',
        icon: '📱',
        accent: 'from-amber-500 to-yellow-400',
        glow: 'bg-amber-500/15',
        border: 'hover:border-amber-500/40',
        tag: 'Mobile-first',
        description:
            'Native and cross-platform mobile experiences that users love to open. React Native and Flutter for cross-platform reach; Swift and Kotlin for maximum native performance — shipped with rigorous QA.',
        features: [
            {
                name: 'React Native & Flutter',
                desc: 'Efficiently build high-quality apps for both iOS and Android using a single codebase without compromising quality.'
            },
            {
                name: 'Swift & Kotlin Native',
                desc: 'Develop performance-critical applications using platform-native languages for the best possible user experience.'
            },
            {
                name: 'Offline Sync',
                desc: 'Implement complex data synchronization logic to ensure seamless usage across varying network conditions.'
            },
            {
                name: 'Push Notifications',
                desc: 'Architect engagement systems using FCM and APNs to keep users informed and returning to the app.'
            },
            {
                name: 'App Store Optimisation',
                desc: 'Optimize app metadata and assets to improve search rankings and conversion rates in the App Store and Google Play.'
            },
            {
                name: 'Performance Profiling',
                desc: 'Rigorous testing to identify and eliminate memory leaks and ensure smooth 60fps animations.'
            }
        ],
        techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Sentry'],
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200',
    },
    {
        id: '06',
        title: 'E-Commerce',
        short: 'Commerce Platforms',
        icon: '🛒',
        accent: 'from-pink-500 to-fuchsia-500',
        glow: 'bg-pink-500/15',
        border: 'hover:border-pink-500/40',
        tag: 'Revenue',
        description:
            'High-converting commerce experiences built on Shopify, custom headless stacks, or bespoke platforms. From catalogue management and payment integrations to personalisation engines and inventory automation.',
        features: [
            {
                name: 'Headless Commerce',
                desc: 'Decouple your frontend from the commerce engine for maximum design freedom and performance.'
            },
            {
                name: 'Shopify & Custom',
                desc: 'Expert implementation of Shopify Plus stores or fully bespoke commerce engines tailored to your business model.'
            },
            {
                name: 'Payment Gateways',
                desc: 'Securely integrate global and local payment providers including Stripe, PayPal, and regional gateways.'
            },
            {
                name: 'Personalisation Engine',
                desc: 'Implement AI-driven product recommendations and dynamic content to increase average order value.'
            },
            {
                name: 'Inventory Automation',
                desc: 'Synchronize stock levels across multiple channels and automate fulfillment workflows to reduce manual overhead.'
            },
            {
                name: 'Conversion Optimisation',
                desc: 'Continuous checkout refinement and UX improvements to turn more visitors into loyal customers.'
            }
        ],
        techStack: ['Shopify', 'Stripe', 'Magento', 'ElasticSearch', 'Algolia', 'Klaviyo'],
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
    },
];
