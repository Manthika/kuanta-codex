export type LangCode = 'en' | 'ko';

interface LanguageConfig {
  code: LangCode;
  label: string;
  flag: string;
  name: string;
  locale: string;
  htmlLang: string;
  pathPrefix: string;
}

export interface NavLinkConfig {
  label: string;
  path: string;
}

export interface HeaderContent {
  navLinks: NavLinkConfig[];
  downloadLabel: string;
  downloadPath: string;
  menuLabel: string;
  languageLabel: string;
  homeAriaLabel: string;
}

export interface FooterContent {
  brandCompany: string;
  brandProduct: string;
  addressLine: string;
  businessLabel: string;
  businessNumber: string;
  topLabel: string;
  topAriaLabel: string;
  copyright: string;
}

export interface HomeTranslations {
  headTitle: string;
  headDescription: string;
  hero: {
    titleLines: string[];
    description: string;
  };
  cards: {
    titleLines: string[];
    items: Array<{
      title: string;
      description: string;
      href: string;
      cta: string;
      image: string;
      imageAlt: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  news: {
    title: string;
    readMore: string;
  };
}

export interface UseCasesTranslations {
  headTitle: string;
  headDescription: string;
  heroHeading: string;
  cases: Array<{
    id: string;
    titleLines: string[];
    description: string;
    href: string;
    cta: string;
    image: string;
    imageAlt: string;
    reverseOnDesktop?: boolean;
  }>;
}

export interface BlogTranslations {
  headTitle: string;
  headDescription: string;
  breadcrumbs: {
    home: string;
    blog: string;
  };
  searchPlaceholder: string;
  readCta: string;
  readAriaLabelPrefix: string;
}

export interface BlogPostTranslations {
  breadcrumbs: {
    home: string;
    blog: string;
  };
  updatedPrefix: string;
}

export interface DateFormatConfig {
  locale: string;
  options: Intl.DateTimeFormatOptions;
}

export interface Translations {
  site: {
    title: string;
    description: string;
  };
  header: HeaderContent;
  footer: FooterContent;
  home: HomeTranslations;
  useCases: UseCasesTranslations;
  blog: BlogTranslations;
  blogPost: BlogPostTranslations;
  dates: DateFormatConfig;
}

export const LANGUAGES: Record<LangCode, LanguageConfig> = {
  en: {
    code: 'en',
    label: 'ENG',
    flag: '🇺🇸',
    name: 'English',
    locale: 'en-US',
    htmlLang: 'en',
    pathPrefix: 'en',
  },
  ko: {
    code: 'ko',
    label: 'KOR',
    flag: '🇰🇷',
    name: '한국어',
    locale: 'ko-KR',
    htmlLang: 'ko',
    pathPrefix: 'ko',
  },
};

export const DEFAULT_LANG: LangCode = 'en';

export function isLang(code: string | undefined): code is LangCode {
  return code === 'en' || code === 'ko';
}

export function getLanguage(code: string | undefined): LanguageConfig {
  if (code && isLang(code)) {
    return LANGUAGES[code];
  }
  return LANGUAGES[DEFAULT_LANG];
}

function normaliseSegments(path: string): string[] {
  if (!path) return [];
  return path
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export function splitLangFromPath(pathname: string): { lang: LangCode; segments: string[] } {
  const segments = normaliseSegments(pathname);
  const first = segments[0];
  if (first && isLang(first)) {
    return { lang: first, segments: segments.slice(1) };
  }
  return { lang: DEFAULT_LANG, segments };
}

export function buildPathFromSegments(lang: LangCode, segments: string[]): string {
  const cleaned = segments.filter(Boolean);
  const prefix = LANGUAGES[lang].pathPrefix;
  const parts = lang === DEFAULT_LANG ? cleaned : [prefix, ...cleaned];
  const path = '/' + parts.join('/');
  return path.endsWith('/') || path === '/' ? path : `${path}/`;
}

export function switchLanguagePath(pathname: string, targetLang: LangCode): string {
  const { segments } = splitLangFromPath(pathname);
  return buildPathFromSegments(targetLang, segments);
}

export function localisePath(path: string, lang: LangCode): string {
  const stripped = path.startsWith('/') ? path.slice(1) : path;
  const segments = normaliseSegments(stripped);
  return buildPathFromSegments(lang, segments);
}

export interface HeaderLanguageOption {
  code: LangCode;
  label: string;
  flag: string;
  href: string;
  isActive: boolean;
}

export function buildLanguageOptions(pathname: string, currentLang: LangCode): HeaderLanguageOption[] {
  return (Object.values(LANGUAGES) as LanguageConfig[]).map((lang) => ({
    code: lang.code,
    label: lang.label,
    flag: lang.flag,
    href: switchLanguagePath(pathname, lang.code),
    isActive: lang.code === currentLang,
  }));
}

export const translations: Record<LangCode, Translations> = {
  en: {
    site: {
      title: 'Kuanta',
      description: 'Welcome to Kuanta! Programmable message routing for demanding teams.',
    },
    header: {
      navLinks: [
        { label: 'Get started', path: 'get-started' },
        { label: 'Docs', path: 'docs' },
        { label: 'Product', path: 'product' },
        { label: 'Use Cases', path: 'use-cases' },
        { label: 'Blog', path: 'blog' },
      ],
      downloadLabel: 'Download',
      downloadPath: 'download',
      menuLabel: 'Menu',
      languageLabel: 'Language',
      homeAriaLabel: 'Kuanta home',
    },
    footer: {
      brandCompany: 'Billycrew',
      brandProduct: 'Kuanta Solution',
      addressLine: '17, Gukjegeumyung-ro 2-gil, Yeongdeungpo-gu, Seoul, Republic of Korea',
      businessLabel: 'Business Registration Number',
      businessNumber: '678-87-02665',
      topLabel: 'TOP',
      topAriaLabel: 'Back to top',
      copyright: '© billycrew 2023. All Rights Reserved.',
    },
    home: {
      headTitle: 'Home',
      headDescription: 'Discover Kuanta programmable messaging with low-latency performance.',
      hero: {
        titleLines: ['PROGRAMMABLE', 'MESSAGE', 'ROUTER'],
        description:
          'Kuanta PMR helps you solve integration problems by immediately applying best practices through the latest message patterns derived from microservice architecture. The new low-latency architecture and programmable messaging environment can actively respond to any integration and deployment strategy required.',
      },
      cards: {
        titleLines: ['Low-Latency and High-Performance,', 'Yet Programmable,', 'Making it Flexible.'],
        items: [
          {
            title: 'PMR',
            description:
              'Flexible configuration schemes and programming interfaces allow you to design a single message architecture that responds consistently to all messages.',
            href: '#',
            cta: 'Read more →',
            image: '/images/home/pmr.jpg',
            imageAlt: 'PMR preview',
          },
          {
            title: 'KAS',
            description:
              'A micro-application service that supports vertical/horizontal unit business expansion without restrictions on cloud and on-premises.',
            href: '#',
            cta: 'Read more →',
            image: '/images/home/kas.jpg',
            imageAlt: 'KAS preview',
          },
          {
            title: 'BROKER',
            description:
              'A Pub/Sub-based message broker supporting diverse topologies, high-speed messaging processing, and reliable recovery and retransmission.',
            href: '#',
            cta: 'Read more →',
            image: '/images/home/broker.jpg',
            imageAlt: 'Broker preview',
          },
        ],
      },
      features: {
        title: 'Features',
        subtitle: 'Technology that Leads the Way for Challenging Environments',
        description:
          'Learn about the core features of Kuanta technology, which offers stability and superior technology even in a rapidly changing market environment, a consistent messaging architecture, and flexible application across diverse environments without constraints. You can immediately apply it to your service environment.',
        items: [
          {
            title: 'Engineer-friendly',
            description: 'Intuitive CLI and TUI for engineers deliver fast and accurate operations.',
          },
          {
            title: 'Integrated with existing systems',
            description: 'Flexible integration with various legacy and external systems.',
          },
          {
            title: 'Message analysis and statistics',
            description: 'Analyze collected and refined, reliable real-time data.',
          },
          {
            title: 'Hierarchical distribution & low-latency messaging',
            description: 'Fast and reliable delivery through system-wide technology.',
          },
        ],
      },
      news: {
        title: 'NEWS / BLOG',
        readMore: 'Read more →',
      },
    },
    useCases: {
      headTitle: 'Use Cases',
      headDescription: 'Explore how organisations deliver resilient messaging with Kuanta.',
      heroHeading: 'POWERED BY',
      cases: [
        {
          id: 'daishin',
          titleLines: ['Daishin Securities', 'Kuanta Solutions'],
          description:
            'Discover Kuanta’s features, built with reliable and advanced architecture for volatile markets, offering a consistent single messaging framework and flexible data pipelines.',
          href: '#',
          cta: 'Learn',
          image: '/images/use-cases/daishin.jpg',
          imageAlt: 'Daishin Securities showcase',
        },
        {
          id: 'woori',
          titleLines: ['WOORI INVESTMENT', 'SECURITIES Kuanta', 'Solutions'],
          description:
            'Discover Kuanta’s features, built with reliable and advanced architecture for volatile markets, offering a consistent single messaging framework and flexible data pipelines.',
          href: '#',
          cta: 'Learn',
          image: '/images/use-cases/woori.jpg',
          imageAlt: 'Woori Investment Securities showcase',
          reverseOnDesktop: true,
        },
      ],
    },
    blog: {
      headTitle: 'Blog',
      headDescription: 'Insights and updates from the Kuanta team.',
      breadcrumbs: {
        home: 'Home',
        blog: 'Blog',
      },
      searchPlaceholder: 'Enter keywords',
      readCta: 'READ',
      readAriaLabelPrefix: 'Read',
    },
    blogPost: {
      breadcrumbs: {
        home: 'Home',
        blog: 'Blog',
      },
      updatedPrefix: 'Last updated on',
    },
    dates: {
      locale: 'en-US',
      options: { year: 'numeric', month: 'short', day: 'numeric' },
    },
  },
  ko: {
    site: {
      title: '쿠안타',
      description: '최신 메시징 패턴으로 통합을 가속화하는 Kuanta를 만나보세요.',
    },
    header: {
      navLinks: [
        { label: '시작하기', path: 'get-started' },
        { label: '문서', path: 'docs' },
        { label: '제품', path: 'product' },
        { label: '고객 사례', path: 'use-cases' },
        { label: '블로그', path: 'blog' },
      ],
      downloadLabel: '다운로드',
      downloadPath: 'download',
      menuLabel: '메뉴',
      languageLabel: '언어',
      homeAriaLabel: '쿠안타 홈',
    },
    footer: {
      brandCompany: 'Billycrew',
      brandProduct: 'Kuanta Solution',
      addressLine: '서울특별시 영등포구 국제금융로2길 17',
      businessLabel: '사업자등록번호',
      businessNumber: '678-87-02665',
      topLabel: '맨 위로',
      topAriaLabel: '페이지 맨 위로 이동',
      copyright: '© billycrew 2023. All Rights Reserved.',
    },
    home: {
      headTitle: '홈',
      headDescription: '쿠안타가 제공하는 초저지연 프로그래머블 메시징 환경을 살펴보세요.',
      hero: {
        titleLines: ['프로그래머블', '메시지', '라우터'],
        description:
          'Kuanta PMR은 최신 마이크로서비스 아키텍처에서 도출된 메시지 패턴을 적용해 통합 문제를 빠르게 해결합니다. 저지연 아키텍처와 프로그래머블 메시징 환경으로 요구되는 모든 통합 및 배포 전략에 능동적으로 대응합니다.',
      },
      cards: {
        titleLines: ['초저지연·고성능 기반,', '프로그래머블 설계로', '더욱 유연하게.'],
        items: [
          {
            title: 'PMR',
            description:
              '유연한 구성과 프로그래밍 인터페이스로 모든 메시지에 일관되게 대응하는 단일 메시지 아키텍처를 설계할 수 있습니다.',
            href: '#',
            cta: '자세히 보기 →',
            image: '/images/home/pmr.jpg',
            imageAlt: 'PMR 미리보기',
          },
          {
            title: 'KAS',
            description:
              '클라우드와 온프레미스를 가리지 않고 수직·수평 확장을 지원하는 마이크로 애플리케이션 서비스입니다.',
            href: '#',
            cta: '자세히 보기 →',
            image: '/images/home/kas.jpg',
            imageAlt: 'KAS 미리보기',
          },
          {
            title: 'BROKER',
            description:
              '다양한 토폴로지와 고속 메시징 처리, 안정적인 복구·재전송을 지원하는 Pub/Sub 기반 메시지 브로커입니다.',
            href: '#',
            cta: '자세히 보기 →',
            image: '/images/home/broker.jpg',
            imageAlt: '브로커 미리보기',
          },
        ],
      },
      features: {
        title: '주요 기능',
        subtitle: '도전적인 환경을 이끄는 기술',
        description:
          '급변하는 시장에서도 안정성과 높은 기술력을 제공하는 Kuanta의 핵심 기능을 확인하세요. 일관된 메시지 아키텍처와 다양한 환경에 제약 없이 적용 가능한 유연성을 서비스에 바로 적용할 수 있습니다.',
        items: [
          {
            title: '엔지니어 친화적',
            description: '직관적인 CLI·TUI로 빠르고 정확한 운영을 지원합니다.',
          },
          {
            title: '기존 시스템과 손쉬운 연동',
            description: '다양한 레거시·외부 시스템과 유연하게 통합됩니다.',
          },
          {
            title: '메시지 분석과 통계',
            description: '수집·정제된 신뢰도 높은 실시간 데이터를 분석합니다.',
          },
          {
            title: '계층형 분배와 저지연 메시징',
            description: '시스템 전반의 기술로 빠르고 안정적인 전달을 구현합니다.',
          },
        ],
      },
      news: {
        title: '뉴스 / 블로그',
        readMore: '자세히 보기 →',
      },
    },
    useCases: {
      headTitle: '고객 사례',
      headDescription: 'Kuanta를 통해 안정적인 메시징을 구현한 고객 사례를 만나보세요.',
      heroHeading: 'POWERED BY',
      cases: [
        {
          id: 'daishin',
          titleLines: ['대신증권', 'Kuanta 솔루션'],
          description:
            '변동성이 큰 시장에서도 일관된 메시징과 유연한 데이터 파이프라인을 제공하는 안정적이고 진화된 아키텍처를 만나보세요.',
          href: '#',
          cta: '자세히 보기',
          image: '/images/use-cases/daishin.jpg',
          imageAlt: '대신증권 사례 이미지',
        },
        {
          id: 'woori',
          titleLines: ['우리투자증권', 'Kuanta 솔루션'],
          description:
            '신뢰할 수 있는 Kuanta 아키텍처로 단일 메시징 프레임워크와 확장 가능한 데이터 파이프라인을 구현합니다.',
          href: '#',
          cta: '자세히 보기',
          image: '/images/use-cases/woori.jpg',
          imageAlt: '우리투자증권 사례 이미지',
          reverseOnDesktop: true,
        },
      ],
    },
    blog: {
      headTitle: '블로그',
      headDescription: 'Kuanta 팀의 인사이트와 소식을 전합니다.',
      breadcrumbs: {
        home: '홈',
        blog: '블로그',
      },
      searchPlaceholder: '검색어를 입력하세요',
      readCta: '읽기',
      readAriaLabelPrefix: '읽기',
    },
    blogPost: {
      breadcrumbs: {
        home: '홈',
        blog: '블로그',
      },
      updatedPrefix: '업데이트',
    },
    dates: {
      locale: 'ko-KR',
      options: { year: 'numeric', month: 'long', day: 'numeric' },
    },
  },
};

export function getTranslations(lang: LangCode): Translations {
  return translations[lang] ?? translations[DEFAULT_LANG];
}

export function buildNavLinks(lang: LangCode, navLinks: NavLinkConfig[]): { label: string; href: string }[] {
  return navLinks.map((item) => ({
    label: item.label,
    href: localisePath(item.path, lang),
  }));
}

export function buildDownloadHref(lang: LangCode, path: string): string {
  return localisePath(path, lang);
}

export function blogBasePath(lang: LangCode): string {
  return localisePath('blog', lang);
}

export function homePath(lang: LangCode): string {
  return localisePath('', lang);
}
