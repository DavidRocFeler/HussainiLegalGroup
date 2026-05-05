import profilePicture from '@/assets/ProfilePicture.png'
import { CardProfessionalProfileProps } from '@/types/about'

export const professionalProfilesData: CardProfessionalProfileProps[] = [
  {
    image: profilePicture,
    name: 'Adeeb Hussaini',
    role: 'Managing Partner',
    slug: 'adeeb-hussaini',
    email: 'adeeb@hussainilegalgroup.com',
    phone: '+963 933 339 513',
    linkedin: 'https://linkedin.com',
    qualifications: 'Lawyer, admitted to the Syrian Bar',
    languages: ['Arabic', 'English'],
    previousPositions: [
      { period: '2008–2022', description: 'Lecturer of Civil Law and Civil Procedural Law at the Higher Judge Institute' },
      { period: '2011–2024', description: 'Lecturer of Civil Procedural Law at Bilad Al-Sham University' },
      { period: '2015–2020', description: 'Dean of the Law Faculty of the University of Bilad Al-Sham' }
    ],
    summary: [
      'With over 40 years of legal practice, Dr. Adeeb Hussaini is widely regarded as one of Syria\'s foremost authorities in civil law, commercial litigation, and international arbitration. Since founding Hussaini Legal Group in 1987, he has played a pivotal role in shaping the legal profession in Syria.',
      'He is the author of the Encyclopedia of Civil Law, a landmark multi-volume work frequently cited by the Syrian Supreme Court and used in universities across the country. His exhaustive analysis of more than 50,000 Supreme Court judgments—distilling over 5,800 legal principles—has established him as a central figure in the interpretation and development of Syrian civil law.',
      'In addition to the Encyclopedia of Civil Law, he has authored several influential publications on civil, commercial, and arbitration law—among them, his PhD dissertation: a comparative legal study on Build-Operate-Transfer (BOT) contracts.',
      'Over the decades, he has led high-stakes legal matters involving real estate law, commercial and investment contracts, public procurement, corporate advisory, and arbitration—representing major companies, developers, landowners, global suppliers, family offices, and institutions.',
      'Alongside his legal practice, Dr. Hussaini has personally trained over 100 lawyers within Hussaini Legal Group and has served as a legal educator to generations of judges at the Higher Institute for the Judiciary, as well as law students during his tenure as Dean of the Faculty of Law at Bilad Al-Sham University.',
      'His approach is defined by strategic legal thinking, deep contractual precision, and a belief that law is a mission—not merely a profession. His legacy lives on through the ongoing work of Hussaini Legal Group and the many legal minds he has mentored and inspired.'
    ]
  },
  {
    image: profilePicture,
    name: 'Alaa Hussaini',
    role: 'Partner',
    slug: 'alaa-hussaini',
    qualifications: 'Lawyer, admitted to the Netherlands Bar',
    languages: ['Arabic', 'Dutch', 'English', 'French', 'German', 'Spanish'],
    summary: [
      'Alaa Hussaini is a Dutch lawyer based in Amsterdam with a cross-border legal background and a practice that bridges traditional law with emerging digital industries. He studied law in three different countries and three different languages, giving him a unique global legal perspective.',
      'Alaa earned his degrees from the University of Groningen, where he completed two master\'s programs—one in International Commercial Law and another in International Business Law. He also studied Dutch law and International and European Law, and later became a lecturer in European law at the University of Groningen.',
      'Early in his legal career, Alaa interned and worked at several leading international law firms in Amsterdam, gaining experience in international commercial and investment arbitration, commercial litigation, and corporate advisory. He later worked at multiple technology companies, where he developed a strong commercial sense, technical capabilities, and a deep understanding of the legal challenges tech businesses face.',
      'In 2025, he founded NovaLex, a boutique technology law firm focused on serving technology, fintech, and crypto companies.',
      'At Hussaini Legal Group, Alaa advises clients across Europe and the Middle East in matters involving real estate, commercial disputes, international arbitration, technology and data regulation, regulatory compliance, and corporate advisory. His practice reflects a fusion of legal precision and business-driven strategy, tailored for a globalized and rapidly evolving legal and business environment.'
    ]
  },
  {
    image: profilePicture,
    name: 'Mayada Hussaini',
    role: 'Partner',
    slug: 'mayada-hussaini',
    qualifications: 'Lawyer, admitted to the Florida Bar, USA',
    languages: ['Arabic', 'English'],
    summary: [
      'Mayada Hussaini is an American lawyer based in Miami. She received her Juris Doctor from Florida International University, where she developed a strong interest in arbitration and represented the university at the Willem C. Vis International Commercial Arbitration Moot.',
      'Her legal career spans multiple practice areas and firm environments, including her time at a major Florida-based law firm, where she supported clients across the United States in insurance law matters—representing insurance companies in complex claims and coverage disputes.',
      'At Hussaini Legal Group, she advises American and international clients on a range of matters under U.S. law, including insurance, commercial, corporate, and real estate transactions and disputes.',
      'Known for her persistence and unwavering commitment to delivering results, Mayada brings a rigorous, hands-on approach to every case she handles.'
    ]
  }
]