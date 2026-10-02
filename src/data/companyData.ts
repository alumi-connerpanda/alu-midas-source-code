import heroImg from '../assets/images/alumidas_hero_architectural_1790940022575.jpg';
import doorsWindowsImg from '../assets/images/alumidas_work_doors_windows_1790940033337.jpg';
import glassRoofImg from '../assets/images/alumidas_work_glass_roof_1790940046101.jpg';
import facadeCladdingImg from '../assets/images/alumidas_work_facade_cladding_1790940059189.jpg';
import fabricationCraftImg from '../assets/images/alumidas_work_fabrication_craft_1790940074687.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  style: 'Modern' | 'Classic' | 'Luxury';
  workType: 'Interior' | 'Exterior' | 'Both';
}

export interface ServiceDetail {
  id: string;
  title: string;
  summary: string;
  fullDescription: string;
  features: string[];
  scope: string;
}

export const COMPANY_INFO = {
  name: 'ALU MIDAS',
  legalName: 'ALU MIDAS (PVT) LTD',
  tagline: 'Elegant Aluminium. Exceptional Craftsmanship.',
  subHeadline: 'Custom aluminium fabrication and architectural solutions for interior and exterior projects.',
  experienceYears: '25+',
  address: 'No. 586/2/A/1, Maha Katuwana Road, Homagama, Sri Lanka',
  phone: '0777 499 322',
  phoneRaw: '+94777499322',
  whatsapp: '077 218 6710',
  whatsappRaw: '+94772186710',
  email: 'alumidaspvt@gmail.com',
  facebookUrl: 'https://web.facebook.com/profile.php?id=61594706083606',
};

export const CORE_PILLARS = [
  {
    title: '25+ Years of Experience',
    description: 'Over a quarter century of established field expertise in interior and exterior aluminium fabrication.',
  },
  {
    title: 'Custom Fabrication',
    description: 'Tailored manufacturing built strictly to site measurements and specific architectural requirements.',
  },
  {
    title: 'Quality-Focused Workmanship',
    description: 'A steadfast commitment to quality over quantity, with clean joints, precise alignment, and lasting finishes.',
  },
  {
    title: 'Classic, Modern & Luxury Designs',
    description: 'Versatile fabrication capabilities capable of executing timeless classical profiles to sleek luxury minimalist lines.',
  },
  {
    title: 'Manufacturing Warranty',
    description: 'Confidence in material integrity, hardware endurance, and fabrication excellence on our projects.',
  },
  {
    title: 'After-Service Support',
    description: 'Reliable long-term customer assistance, maintenance guidance, and dedicated post-installation care.',
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'aluminium-fabrication',
    title: 'Aluminium Fabrication',
    summary: 'Precision custom metal fabrication for heavy-duty structural and architectural specifications.',
    fullDescription: 'Comprehensive workshop fabrication utilizing high-grade aluminium profiles. Every frame is cut, grooved, and assembled with tight tolerances, ensuring high structural integrity and clean corner joints for residential and commercial structures.',
    features: [
      'Precision mitering and heavy-duty corner jointing',
      'High-grade extruded aluminium section profiles',
      'Powder-coated, anodized, and wood-finish options',
      'Custom dimensions suited to exact site openings',
    ],
    scope: 'Interior & Exterior',
  },
  {
    id: 'doors-windows',
    title: 'Doors & Windows',
    summary: 'Sliding, casement, pivot, and folding door and window systems engineered for smooth operation.',
    fullDescription: 'Custom fabrication and installation of architectural aluminium doors and windows. From slimline panoramic sliding doors to high-weather-seal casement windows, built to provide longevity, sound insulation, and effortless movement.',
    features: [
      'Sliding, folding, bi-fold, and pivot door configurations',
      'Casement, top-hung, and fixed architectural windows',
      'Heavy-duty roller tracks and multi-point locking hardware',
      'Acoustic and weather-resistant perimeter gaskets',
    ],
    scope: 'Interior & Exterior',
  },
  {
    id: 'tempered-glass',
    title: 'Tempered Glass',
    summary: 'High-strength safety glass installations for balustrades, shower cubicles, partitions, and panels.',
    fullDescription: 'Precision tempered glass solutions manufactured for safety, visual clarity, and modern elegance. Ideal for staircase railings, balcony balustrades, frameless glass partitions, and specialized enclosure panels.',
    features: [
      'Toughened safety glass engineered for high impact resistance',
      'Polished pencil and bevelled edge treatments',
      'Frameless and slim-profile aluminium clamping systems',
      'Custom cutouts for patch fittings and architectural locks',
    ],
    scope: 'Interior & Exterior',
  },
  {
    id: 'glass-roofs',
    title: 'Glass Roofs',
    summary: 'Architectural skylights and glass canopies supported by sturdy structural aluminium frameworks.',
    fullDescription: 'Engineered glass roof installations designed to bring natural daylight into living spaces while safeguarding against weather and heat. Fabricated with reinforced aluminium rafters and UV-resistant tempered glass.',
    features: [
      'Heavy structural aluminium box-profile load supports',
      'Leak-proof EPDM sealants and concealed water drainage channels',
      'Clear, tinted, and heat-reflective laminated glass options',
      'Tested against tropical rainfall and thermal expansion',
    ],
    scope: 'Exterior',
  },
  {
    id: 'cladding',
    title: 'Cladding',
    summary: 'Aluminium composite panel (ACP) cladding for modern building envelopes and exterior protections.',
    fullDescription: 'Exterior and interior panel cladding providing sleek, uniform surfaces that transform building facades. Offers weather protection, thermal shielding, and an architectural finish that resists environmental degradation.',
    features: [
      'Aluminium composite panels in matte, metallic, and gloss finishes',
      'Robust substructure framing and precise joint sealant application',
      'High resistance to UV, corrosion, and moisture',
      'Fire-retardant and exterior-grade core specifications',
    ],
    scope: 'Exterior',
  },
  {
    id: 'facades',
    title: 'Facades',
    summary: 'Structural curtain walls and architectural storefronts engineered for commercial and luxury properties.',
    fullDescription: 'Large-scale structural glass and aluminium facade installations. Designed to achieve expansive visual sightlines, structural rigidity under wind loads, and a contemporary architectural exterior aesthetic.',
    features: [
      'Curtain wall glazing and semi-unitized facade systems',
      'Shopfront displays and commercial building entrances',
      'Engineered thermal expansion joints and safety anchors',
      'Integrated drainage and condensation control',
    ],
    scope: 'Exterior',
  },
  {
    id: 'ceiling-works',
    title: 'Ceiling Works',
    summary: 'Suspended aluminium strip ceilings, grid systems, and architectural decorative ceiling frameworks.',
    fullDescription: 'Durable, moisture-resistant ceiling installations ideal for residences, commercial premises, corridors, and semi-outdoor verandas where timber ceilings might warp or decay.',
    features: [
      'Linear aluminium baffle and strip ceiling profiles',
      'Concealed and exposed ceiling grid installations',
      'Rot-proof, moisture-proof, and termite-immune materials',
      'Neat integration with downlights and air-conditioning grilles',
    ],
    scope: 'Interior & Semi-Exterior',
  },
  {
    id: 'interior-solutions',
    title: 'Interior Aluminium & Glass Works',
    summary: 'Partition walls, glass dividers, custom wardrobe frames, and interior architectural screens.',
    fullDescription: 'Interior glass and aluminium fabrication that delivers practical spatial division without sacrificing ambient light. Crafted for modern homes, corporate offices, and hospitality settings.',
    features: [
      'Slimline glass office partitions and room dividers',
      'Aluminium framed sliding wardrobe and pantry doors',
      'Acoustic seal options for meeting rooms and private spaces',
      'Custom hardware handles and soft-close mechanisms',
    ],
    scope: 'Interior',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Fabrication & Architectural Solutions',
    summary: 'Bespoke aluminium and glass fabrication tailored to specific project drawings and site conditions.',
    fullDescription: 'When off-the-shelf systems do not fit, our 25+ years of practical field experience enables us to fabricate custom architectural solutions, specialized louvers, pergolas, and tailored hardware configurations.',
    features: [
      'Custom architectural louvers, sun-breakers, and fins',
      'Non-standard dimension frame fabrication',
      'Site-specific engineering problem solving and adaptation',
      'Close collaboration with contractors and property owners',
    ],
    scope: 'Interior & Exterior',
  },
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Modern Villa Architectural Glazing & Sliding Doors',
    category: 'Doors & Windows',
    image: heroImg,
    description: 'Full-height slimline aluminium sliding doors with high-clarity safety glass, opening onto exterior courtyard with seamless threshold joinery.',
    style: 'Luxury',
    workType: 'Both',
  },
  {
    id: 'proj-2',
    title: 'Panoramic Aluminium Window & Door Joinery',
    category: 'Doors & Windows',
    image: doorsWindowsImg,
    description: 'Precision-fabricated aluminium frame assemblies with multi-point locks, high weather seals, and smooth sliding tracks.',
    style: 'Modern',
    workType: 'Interior',
  },
  {
    id: 'proj-3',
    title: 'Architectural Tempered Glass Roof & Canopy',
    category: 'Glass Solutions',
    image: glassRoofImg,
    description: 'Outdoor tempered glass canopy supported by engineered heavy-duty dark aluminium structural beams and water-tight drainage.',
    style: 'Modern',
    workType: 'Exterior',
  },
  {
    id: 'proj-4',
    title: 'Commercial Building Facade & Composite Panel Cladding',
    category: 'Cladding & Facades',
    image: facadeCladdingImg,
    description: 'Exterior architectural aluminium cladding panels and integrated structural glazing engineered for long-term durability.',
    style: 'Modern',
    workType: 'Exterior',
  },
  {
    id: 'proj-5',
    title: 'Workshop Custom Aluminium Profile Fabrication',
    category: 'Aluminium Fabrication',
    image: fabricationCraftImg,
    description: 'Precision cutting, milling, and assembly of heavy aluminium extrusions by experienced craftsmen in our Homagama workshop.',
    style: 'Classic',
    workType: 'Both',
  },
];
