export interface PestFAQ {
  q: string
  a: string
}

export interface Pest {
  slug: string
  name: string
  scientificName: string
  category: 'insect' | 'rodent' | 'wildlife' | 'arachnid'
  description: string
  heroHeadline: string
  heroSubhead: string
  overview: string
  identification: string[]
  lifecycle: string
  habitat: string[]
  healthRisks: string[]
  propertyDamage: string[]
  preventionTips: string[]
  relatedServices: string[]
  faqs: PestFAQ[]
  schema: { name: string; description: string }
}

export const pests: Pest[] = [
  {
    slug: 'termites',
    name: 'Termites',
    scientificName: 'Reticulitermes hesperus / Incisitermes minor',
    category: 'insect',
    description:
      'Los Angeles termite infestations cause $1B+ in damage annually. Learn to identify subterranean and drywood termites and protect your LA home today.',
    heroHeadline: 'Termite Control in Los Angeles — Stop the Silent Destroyer',
    heroSubhead:
      'OCP Pest Control eliminates both subterranean and drywood termites threatening LA homes and structures.',
    overview:
      'Los Angeles is home to two dominant termite species: the Western subterranean termite (Reticulitermes hesperus), which builds colonies underground and enters homes through soil contact, and the Western drywood termite (Incisitermes minor), which lives entirely within the wood it consumes. California leads the nation in termite damage costs, with LA County properties particularly vulnerable due to the warm Mediterranean climate that supports year-round termite activity. Swarmer season in LA typically runs from March through November, with subterranean swarms peaking in spring and drywood swarms peaking in late summer and fall.',
    identification: [
      'Subterranean workers: creamy white, 3–4 mm, soft-bodied, no eyes, travel in mud tubes',
      'Drywood soldiers: larger head with mandibles, orange-brown coloration, 12–15 mm total length',
      'Swarmers (alates): dark brown to black, two equal-length wings that shed after flight, 8–10 mm',
      'Frass (drywood): tiny hexagonal pellets resembling fine sawdust or coffee grounds near kick-out holes',
      'Mud tubes: pencil-width earthen tunnels running up foundation walls, a definitive subterranean sign',
      'Bubbling or hollow-sounding wood: tap suspected areas — a dull thud indicates gallery damage within',
    ],
    lifecycle:
      'A subterranean termite colony begins when a mated queen establishes a chamber in moist soil, producing a few dozen eggs in year one and scaling to millions of workers over 10–15 years. Drywood colonies are smaller, typically 2,500–10,000 individuals, maturing over 4–7 years entirely within a single piece of wood without soil contact. Both species produce winged reproductives (swarmers) annually to establish new colonies.',
    habitat: [
      'Substructure crawl spaces and pier-and-beam foundations common in older LA bungalows',
      'Wood-to-soil contact at porch steps, fence posts, and landscaping timbers',
      'Attic framing, roof sheathing, and fascia boards — primary drywood targets in LA homes',
      'Window and door frames with paint or caulk failures that allow moisture intrusion',
      'Dead stumps, firewood stacks, and eucalyptus mulch stored against the home exterior',
    ],
    healthRisks: [
      'Termites are not a direct health threat, but structural collapse from advanced damage poses physical injury risk',
      'Mold growth in moisture-damaged wood treated by subterranean termites can trigger respiratory issues',
      'Termite frass and shed wings are allergens that may worsen asthma in sensitive individuals',
      'Fumigation chemicals (Vikane/sulfuryl fluoride) require strict re-entry protocols to protect occupant health',
      'Structural compromises to staircases, floors, and support beams create fall and collapse hazards',
    ],
    propertyDamage: [
      'Hollowed structural lumber in floor joists, wall studs, and roof rafters — often undetected for years',
      'Destruction of hardwood flooring, cabinets, and furniture by drywood colonies',
      'Compromised electrical wiring insulation as termites tunnel through wall voids',
      'Foundation sill plate damage requiring costly sistering or full replacement in older LA craftsman homes',
    ],
    preventionTips: [
      'Maintain a 6-inch gap between soil and any wood element on your home exterior',
      'Fix leaking pipes, AC condensate lines, and roof flashing immediately — moisture attracts subterranean colonies',
      'Store firewood at least 20 feet from the home and elevated off bare soil',
      'Schedule annual termite inspections — required by most LA-area lenders and recommended by CDFA',
      'Apply borate wood treatment to exposed framing during renovations as a preventive barrier',
      'Keep gutters clear and ensure downspouts direct water away from the foundation',
    ],
    relatedServices: [
      'termite-control',
      'fumigation',
      'heat-treatment',
      'wood-repair',
    ],
    faqs: [
      {
        q: 'How do I know if I have subterranean or drywood termites?',
        a: 'The simplest indicator is location: drywood termites leave small hexagonal frass pellets near the infestation and require no soil contact, while subterranean termites always build pencil-width mud tubes connecting soil to wood. OCP Pest Control performs a free inspection to definitively identify the species and recommend the appropriate treatment.',
      },
      {
        q: 'Does my LA home need a termite inspection before sale?',
        a: 'Yes. California requires a Wood Destroying Pest and Organism (WDPO) report — commonly called a Section 1/Section 2 report — as part of nearly every residential real estate transaction in Los Angeles County. Our licensed WDO inspectors provide the standard-format report required by lenders and escrow.',
      },
      {
        q: 'What time of year do termites swarm in Los Angeles?',
        a: 'Subterranean swarmers typically appear on warm days in March through May, often triggered by rain followed by sunshine. Drywood swarmers peak August through October. Year-round warm temperatures in LA mean swarming activity can occur outside these windows as well.',
      },
      {
        q: 'Is fumigation the only option for drywood termites?',
        a: 'No. Localized infestations can often be treated with spot treatments including orange oil (d-limonene), foam injection, or heat treatment. Whole-structure fumigation with Vikane is the most comprehensive option when multiple colonies are present throughout the structure, which is common in older LA homes.',
      },
      {
        q: 'How long does termite treatment last?',
        a: 'Liquid soil treatments (termiticides) for subterranean termites typically carry a 5-year warranty. Bait station monitoring programs are ongoing. Fumigation for drywood termites is a one-time elimination with no residual protection, so annual inspections are recommended to catch any new introductions.',
      },
    ],
    schema: {
      name: 'Termites',
      description:
        'Subterranean and drywood termites in Los Angeles cause severe structural damage. OCP Pest Control provides inspection, treatment, and prevention services throughout LA County.',
    },
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    category: 'insect',
    description:
      'Bed bugs are surging across Los Angeles hotels and apartments. Identify bites, signs of infestation, and get professional heat treatment from OCP Pest Control.',
    heroHeadline: 'Bed Bug Exterminator in Los Angeles — Same-Day Inspections',
    heroSubhead:
      "LA's #1 rated bed bug heat treatment service. One visit eliminates all life stages — eggs, nymphs, and adults.",
    overview:
      'Bed bugs have resurged dramatically in Los Angeles over the past decade, driven by international travel through LAX, high-density housing, and increased furniture resale markets. Cimex lectularius is a strictly blood-feeding parasite that cannot fly or jump — all infestations spread through direct contact with infested items or adjacent units. LA County Department of Public Health tracks bed bug complaints as a vector-borne nuisance, and landlords in the City of Los Angeles are legally required under LAMC Section 161.403 to remediate verified infestations.',
    identification: [
      'Adults: flat, oval, mahogany-brown, 4–5 mm (apple seed size), swell red after feeding',
      'Nymphs: translucent to pale yellow, 1.5–4.5 mm, nearly invisible until first blood meal',
      'Eggs: pearl-white, 1 mm, sticky, deposited in clusters in seams and crevices',
      'Fecal spots: rust-brown ink-dot stains on mattress seams, box springs, and headboard joints',
      'Cast skins (exuviae): translucent amber husks shed at each of 5 nymph stages — found near harborage',
      'Sweet musty odor: large infestations emit a distinctive coriander-like scent from glands',
    ],
    lifecycle:
      'A female bed bug lays 1–5 eggs per day and up to 500 in her lifetime, with eggs hatching in 6–10 days at room temperature. Nymphs pass through five instars over 5–8 weeks before reaching adulthood, requiring one blood meal per instar. Adults live 6–12 months and can survive over a year without feeding under cool conditions, making DIY elimination nearly impossible.',
    habitat: [
      'Mattress seams, box spring fabric, and bed frame joints — primary daytime harborage',
      'Behind headboards, picture frames, and electrical outlet plates adjacent to sleeping areas',
      'Sofa and upholstered furniture seams in living rooms where occupants sleep or rest',
      'Baseboards, carpet edges, and wall-to-floor junctions in heavily infested multi-unit buildings',
      'Luggage, backpacks, and clothing — the primary vector for new introductions into LA properties',
    ],
    healthRisks: [
      'Bite reactions range from no reaction to severe allergic response with large welts and intense pruritus',
      'Secondary skin infections (impetigo, cellulitis) from scratching bites, particularly in children',
      'Documented cases of iron-deficiency anemia in vulnerable populations from chronic blood loss',
      'Significant psychological impact: insomnia, anxiety, and PTSD-like symptoms reported by LA tenants',
      'Anaphylactic reactions, while rare, have been documented and require immediate emergency care',
    ],
    propertyDamage: [
      'Permanent fecal staining on mattresses, box springs, upholstery, and walls requiring replacement',
      'Destruction of personal belongings including books, electronics casings, and clothing stored near infested areas',
      'Landlord liability and tenant displacement costs under Los Angeles Rent Stabilization Ordinance provisions',
    ],
    preventionTips: [
      'Encase mattress and box spring in bed-bug-proof zippered encasements rated to ASTM F3136 standard',
      'Inspect secondhand furniture, especially upholstered pieces, before bringing into your LA home',
      'After travel through LAX, inspect and heat-dry all luggage contents on high for 30 minutes',
      'Seal wall voids, outlet covers, and baseboards in multi-unit buildings to limit spread between units',
      'Report suspected infestations to your LA landlord in writing immediately — document with photos',
      'Reduce clutter in bedrooms to eliminate harborage sites and enable early detection',
    ],
    relatedServices: [
      'bed-bug-treatment',
      'heat-treatment',
      'inspection',
    ],
    faqs: [
      {
        q: 'Can I get rid of bed bugs myself in my LA apartment?',
        a: 'DIY treatments are almost never effective for full elimination. Bed bugs hide in wall voids, electrical outlets, and building structure that consumer sprays cannot reach. In multi-unit LA buildings, adjacent units are almost always involved. Professional heat treatment or a coordinated chemical program managed by a licensed PCO is required for verified elimination.',
      },
      {
        q: 'How long does a bed bug heat treatment take?',
        a: 'A typical single-unit heat treatment in an LA apartment takes 6–8 hours. We raise the entire unit to 120–135°F and hold that temperature for a minimum of 4 hours to kill all life stages including eggs. You return the same day to a treated unit with no chemical residue.',
      },
      {
        q: 'Is my LA landlord responsible for bed bug treatment?',
        a: 'Under Los Angeles Municipal Code and California Civil Code Section 1941, landlords are required to maintain habitable premises free of vermin. If the infestation was not introduced by the tenant, the landlord must pay for professional treatment. OCP provides documentation for both landlord and tenant records.',
      },
      {
        q: 'Do bed bugs transmit disease?',
        a: 'Current scientific consensus from the CDC and LA County DPH is that bed bugs are not known vectors of human pathogens. They are, however, a serious nuisance and psychological health concern, and secondary infections from bite wounds are a genuine medical risk, particularly for children and immunocompromised individuals.',
      },
      {
        q: 'How soon can bed bugs spread between units in my LA apartment building?',
        a: 'Bed bugs can migrate through electrical conduits, plumbing chases, and wall voids to adjacent units within days to weeks of a new introduction. This is why LA building managers should treat the infested unit plus all immediately adjacent units (above, below, and side-to-side) simultaneously.',
      },
    ],
    schema: {
      name: 'Bed Bugs',
      description:
        'Bed bug infestations in Los Angeles apartments and hotels require professional heat treatment. OCP Pest Control provides same-day inspection and guaranteed elimination services.',
    },
  },
  {
    slug: 'cockroaches',
    name: 'Cockroaches',
    scientificName: 'Blattella germanica / Periplaneta americana',
    category: 'insect',
    description:
      'German and American cockroaches thrive in LA kitchens and sewers. Learn how OCP Pest Control eliminates roaches and keeps your LA home or restaurant compliant.',
    heroHeadline: 'Cockroach Exterminator Los Angeles — Eliminate Roaches Fast',
    heroSubhead:
      'Protecting LA homes and restaurants from German and American cockroaches with targeted gel bait and residual treatments.',
    overview:
      'Los Angeles supports thriving populations of both German cockroaches (Blattella germanica) and American cockroaches (Periplaneta americana), driven by the city\'s warm climate, extensive sewer infrastructure, and high-density food service industry. German cockroaches are the leading cause of failed LA County Health Department inspections, able to survive on food residues invisible to the naked eye. American cockroaches — commonly called "waterbugs" — inhabit LA\'s aging sewer system and enter structures through floor drains, pipe penetrations, and utility access points.',
    identification: [
      'German adult: 12–15 mm, tan with two parallel dark stripes behind head, short wings (rarely flies)',
      'American adult: 35–40 mm, reddish-brown with pale figure-8 pattern on pronotum, fully winged',
      'German egg case (ootheca): 6–9 mm purse-shaped brown capsule containing 30–40 eggs, carried by female',
      'American ootheca: 8–10 mm dark brown, deposited near food/water sources, 14–16 eggs per case',
      'Frass: black pepper-like specks (German) or blunt-ended cylindrical pellets 2–3 mm (American)',
      'Musty/oily odor: characteristic roach smell intensifies with heavy infestations in LA restaurant kitchens',
    ],
    lifecycle:
      'German cockroaches develop from egg to adult in as little as 36 days under LA\'s warm indoor conditions, with females producing up to 8 egg cases in a lifetime — yielding nearly 300 offspring per female. American cockroaches have a longer lifecycle of 6–12 months to maturity but can live 2–3 years as adults. Both species are most active at night; daytime sightings in LA food establishments indicate severe overcrowding.',
    habitat: [
      'Kitchen appliance motors, under refrigerators, and inside dishwasher panels — heat and moisture attract Germans',
      'Floor drain traps, sewer cleanouts, and basement utility rooms common in LA multi-story buildings',
      'Behind wall tile in bathrooms and kitchens where grout gaps provide tight harborage',
      'Restaurant grease traps, mop sinks, and under commercial cooking equipment along LA\'s restaurant row',
      'Cardboard boxes and paper bags used for deliveries — a primary introduction pathway in LA',
    ],
    healthRisks: [
      'Cockroach allergens (Bla g2 protein) are the #1 indoor asthma trigger for LA inner-city children per LA County DPH data',
      'Salmonella, E. coli, and Listeria transmission via contaminated food contact surfaces and utensils',
      'Mechanical transmission of 33+ bacterial species documented by CDC across food preparation environments',
      'Cockroach gut bacteria can cause serious wound infections if roach feces contact open skin',
      'Shed exoskeletons and frass become airborne particulate, worsening chronic respiratory conditions',
    ],
    propertyDamage: [
      'Food contamination and inventory loss in LA restaurants, cafes, and food storage facilities',
      'Fecal staining on walls, cabinetry, and books that is difficult to remove',
      'Damage to book bindings, wallpaper paste, and starchy materials used as supplemental food',
      'Failed LA County Health Department inspections resulting in "C" grades or temporary closure notices',
    ],
    preventionTips: [
      'Store all food in sealed glass or heavy plastic containers — cardboard boxes are accessible to cockroaches',
      'Fix dripping faucets, leaking P-traps, and condensation issues to eliminate water sources',
      'Seal gaps around pipes, conduits, and utility penetrations with copper mesh and foam',
      'Empty trash cans daily in kitchens and use bins with tight-fitting lids',
      'Deep-clean behind and under appliances monthly, removing grease buildup that sustains German populations',
      'Inspect all incoming delivery boxes before storing — a critical step for LA food businesses',
    ],
    relatedServices: [
      'cockroach-control',
      'restaurant-pest-control',
      'commercial-pest-control',
    ],
    faqs: [
      {
        q: 'Why do cockroaches keep coming back even after I spray?',
        a: 'Repellent sprays push roaches deeper into wall voids and can actually split colonies, worsening infestations. Professional gel bait programs target the colony\'s food chain — foraging roaches consume bait and return to the harborage where other roaches feed on the infected carcasses (secondary kill). This cascade eliminates even hidden portions of the colony.',
      },
      {
        q: 'How did I get cockroaches if my LA apartment is clean?',
        a: 'German cockroaches arrive most commonly in delivery boxes, grocery bags, secondhand appliances, and through shared wall voids from neighboring units. A single mated female can establish a new infestation. In LA\'s dense multi-unit housing, building-wide treatment is often necessary to prevent reinfestation.',
      },
      {
        q: 'Will cockroaches cause my restaurant to fail an LA County Health inspection?',
        a: 'Yes. Live cockroaches are a "major" violation under LA County Environmental Health standards and can result in immediate closure. Even cockroach evidence (frass, egg cases) is a "minor" violation that reduces your score. OCP provides emergency commercial treatments with documentation suitable for Health Department follow-up inspections.',
      },
      {
        q: 'Are the large "waterbugs" I see at night different from kitchen roaches?',
        a: 'Yes — American cockroaches ("waterbugs") primarily live in LA\'s sewer system and enter homes through floor drains and pipe gaps. They rarely establish indoor kitchen infestations like German roaches. Treatment focuses on sealing entry points and treating drain and sewer access points with appropriate formulations.',
      },
    ],
    schema: {
      name: 'Cockroaches',
      description:
        'German and American cockroaches in Los Angeles homes and restaurants require targeted professional treatment. OCP Pest Control provides fast, effective roach elimination throughout LA County.',
    },
  },
  {
    slug: 'ants',
    name: 'Ants',
    scientificName: 'Linepithema humile / Camponotus spp. / Solenopsis invicta',
    category: 'insect',
    description:
      'Argentine ants, carpenter ants, and fire ants invade LA homes year-round. OCP Pest Control identifies your ant species and delivers targeted elimination in Los Angeles.',
    heroHeadline: 'Ant Control Los Angeles — Target the Colony, Not Just the Trail',
    heroSubhead:
      'Identifying and eliminating Argentine ants, carpenter ants, and fire ants in LA homes and landscapes.',
    overview:
      'Argentine ants (Linepithema humile) dominate the Los Angeles ant landscape, forming massive supercolonies that stretch entire city blocks — a unique phenomenon documented by UC Riverside researchers spanning from San Diego to the Bay Area. Unlike most ant species, Argentine ant colonies have multiple queens and freely merge with neighboring colonies, making them extraordinarily difficult to control with perimeter sprays alone. Carpenter ants (Camponotus spp.) are a secondary concern in LA\'s hillside communities, excavating galleries in moisture-damaged wood, while red imported fire ants (Solenopsis invicta) have established populations in LA County parks and landscaped areas.',
    identification: [
      'Argentine worker: 2.2–2.8 mm, uniform light to dark brown, one-node petiole, moves in wide trails on flat surfaces',
      'Carpenter ant worker: 6–13 mm, black or bicolored black-red, smooth thorax profile, large mandibles for wood excavation',
      'Fire ant worker: 1.6–5 mm (polymorphic), reddish-brown, two-node petiole, aggressive when disturbed',
      'Argentine alate (swarmer): 4–5 mm, rarely seen — colony reproduction primarily by budding, not swarming',
      'Carpenter ant frass: coarse sawdust-like material mixed with insect parts and dead ants pushed from galleries',
      'Fire ant mound: dome-shaped loose soil mound 30–60 cm diameter in sunny LA lawns and parks',
    ],
    lifecycle:
      'Argentine ant queens lay 60 eggs per day with colonies numbering 100,000 to millions of workers across interconnected supercolony networks. New colonies form by budding — a queen and workers simply split off — rather than swarming flights. Carpenter ant colonies develop slowly, reaching 3,000 workers over 6–10 years, with a single queen per colony. Fire ant queens can live 7 years, producing over 1,500 eggs per day in mature colonies.',
    habitat: [
      'Argentine ants trail along irrigation lines, under mulch, and inside walls adjacent to kitchen plumbing',
      'Carpenter ants nest in water-damaged wood in LA hillside homes, particularly in basement joists and attic beams',
      'Fire ant mounds in irrigated LA parks, school grounds, and residential lawns with clay-heavy soils',
      'Wall voids near dishwashers, sink cabinets, and water heater closets — moisture-seeking behavior',
      'Expansion joints and cracks in concrete slabs where Argentine ants establish satellite colonies',
    ],
    healthRisks: [
      'Fire ant stings deliver venom (solenopsin) causing immediate burning pain, pustule formation, and potential anaphylaxis',
      'Carpenter ants deliver a painful bite and can spray formic acid into the wound',
      'Argentine ants contaminate food surfaces though individual bites are minor',
      'Fire ant attacks on elderly, bedridden, or infant LA residents have caused documented fatalities nationally',
      'Ant activity in hospital and healthcare settings poses cross-contamination risk to sterile fields',
    ],
    propertyDamage: [
      'Carpenter ant galleries in structural lumber accelerate rot and compromise load-bearing wood members',
      'Short-circuit and electrical fire risk from ant colonies nesting in electrical panels and junction boxes',
      'Undermining of pavers, patios, and sidewalks as Argentine ants excavate under hardscape in LA yards',
      'Damage to irrigation systems and drip lines as ants chew through soft tubing seeking moisture',
    ],
    preventionTips: [
      'Trim all vegetation, tree branches, and ground cover away from the home exterior — Argentine ants use vegetation bridges',
      'Fix irrigation system leaks and avoid overwatering foundation plantings',
      'Keep kitchen counters and floors dry and food sealed — a single cookie crumb sustains thousands of Argentine ants',
      'Seal cracks in the foundation, slab expansion joints, and utility penetrations with silicone caulk',
      'Replace moisture-damaged wood promptly to deny carpenter ants suitable nesting sites',
      'Inspect playground equipment and picnic areas for fire ant mounds before children play — especially in LA parks',
    ],
    relatedServices: [
      'ant-control',
      'general-pest-control',
      'commercial-pest-control',
    ],
    faqs: [
      {
        q: 'Why do Argentine ants come inside my LA home every time it rains?',
        a: 'Rain saturates the soil, flooding shallow Argentine ant nests and forcing massive colony migration into any dry structure. This is the most common complaint OCP receives from LA homeowners between November and March. A pre-season perimeter bait and barrier treatment applied before the rainy season dramatically reduces invasion pressure.',
      },
      {
        q: 'Are the ants in my walls carpenter ants or termites?',
        a: 'The quickest field distinction: carpenter ant wings (on swarmers) are unequal in length, the front pair larger; termite swarmer wings are equal in length. Carpenter ants have a pinched waist; termites do not. If you see frass with insect body parts mixed in, it\'s carpenter ants — termites never mix debris with frass. Call OCP for a definitive inspection.',
      },
      {
        q: 'I found a fire ant mound in my LA backyard. Is it dangerous?',
        a: 'Yes, fire ants are aggressive and attack in numbers when the mound is disturbed. LA County Vector Control monitors fire ant populations and provides guidance, but mound treatment requires direct application of appropriate contact or broadcast bait products. OCP handles fire ant mounds safely and can treat larger landscape areas in LA.',
      },
      {
        q: 'Do over-the-counter ant sprays work on Argentine ants?',
        a: 'Repellent sprays provide temporary relief but are counterproductive long-term — they scatter supercolony members and cause "budding" that multiplies the number of satellite nests. Professional baiting programs exploit the Argentine ant\'s food-sharing behavior (trophallaxis) to deliver lethal bait throughout the entire supercolony network over 1–2 weeks.',
      },
    ],
    schema: {
      name: 'Ants',
      description:
        'Argentine ants, carpenter ants, and fire ants in Los Angeles require species-specific professional control. OCP Pest Control delivers targeted ant elimination throughout LA County.',
    },
  },
  {
    slug: 'rats',
    name: 'Rats',
    scientificName: 'Rattus rattus / Rattus norvegicus',
    category: 'rodent',
    description:
      'Roof rats and Norway rats are spreading across Los Angeles neighborhoods. OCP Pest Control provides expert rat control, exclusion, and sanitation for LA homes and businesses.',
    heroHeadline: 'Rat Control Los Angeles — Eliminate Roof Rats and Norway Rats',
    heroSubhead:
      'Expert rodent exclusion and elimination services for LA homes, restaurants, and commercial properties.',
    overview:
      'Los Angeles is experiencing a significant roof rat (Rattus rattus) resurgence, documented by LA County Vector Control District across hillside communities from Silver Lake to Pacific Palisades. Roof rats are expert climbers that colonize attic spaces, palm trees, and overhead utility lines, while Norway rats (Rattus norvegicus) dominate the city\'s underground infrastructure, restaurant alleys, and riverbed areas. LA\'s year-round mild climate and abundant food sources in residential neighborhoods, composting programs, and fruit trees create near-ideal conditions for rapid population growth.',
    identification: [
      'Roof rat: slender, 150–200 g, large ears and eyes, tail longer than body, gray-brown above/light below',
      'Norway rat: robust, 300–500 g, blunt snout, small ears, tail shorter than body, brown-gray throughout',
      'Droppings: roof rat — spindle-shaped, 12 mm; Norway rat — capsule-shaped, 18–20 mm',
      'Gnaw marks: roof rat prefers smooth gnawing on soft materials; Norway rat leaves rough, splintered gnaw damage',
      'Runways: grease-stained "rat runs" along walls, pipes, and fences indicating regular travel routes',
      'Footprints and tail drag marks in dusty areas, attic insulation, or trap-checked flour plates',
    ],
    lifecycle:
      'Female rats reach sexual maturity at 5 weeks and can produce 4–7 litters per year with 6–12 pups per litter under LA\'s favorable conditions. A single breeding pair can theoretically yield over 1,000 descendants in one year. Roof rats live 12–18 months; Norway rats up to 3 years. Population explosions occur in LA neighborhoods following heavy fruit tree seasons, especially avocado, citrus, and fig harvests.',
    habitat: [
      'Attic insulation, HVAC ducts, and rafters — the dominant roof rat harborage in LA homes',
      'Mature palm trees (Washingtonia robusta) used as nesting and lookout sites throughout LA neighborhoods',
      'Subterranean burrows under concrete slabs, in ivy groundcover, and along LA river banks (Norway rats)',
      'Restaurant dumpster enclosures, alley debris, and commercial compost areas in LA\'s food districts',
      'Crawl spaces under raised-foundation homes in older LA neighborhoods like Highland Park and Boyle Heights',
    ],
    healthRisks: [
      'Leptospirosis transmission through rat urine contaminating water and soil — documented in LA County',
      'Rat-bite fever (Streptobacillus moniliformis) from bites or contact with infected rat material',
      'Salmonellosis and E. coli contamination of food storage areas and commercial kitchen surfaces',
      'Hantavirus risk from disturbing dried rat droppings or urine in enclosed spaces (attics, crawlspaces)',
      'Secondary vector role: roof rats carry the fleas that historically transmitted bubonic plague',
    ],
    propertyDamage: [
      'Electrical wiring damage from continuous gnawing — a leading cause of residential attic fires in LA',
      'Destruction of attic insulation through nesting, urine saturation, and fecal contamination requiring full replacement',
      'Gnaw damage to PVC pipes, irrigation lines, and roof soffit materials',
      'Contamination of stored food, pet food, and bulk pantry items causing significant loss in commercial settings',
    ],
    preventionTips: [
      'Remove all fallen fruit from under citrus, avocado, and fig trees — the primary attractant for LA roof rats',
      'Install 1/4-inch hardware cloth over all roof vents, weep screeds, and soffit gaps larger than a quarter',
      'Trim tree branches to maintain a 3-foot clearance from the roofline — rats use branches as highways',
      'Secure compost bins and eliminate open food waste in yards, particularly in LA\'s zero-waste neighborhoods',
      'Keep garage doors closed and seal the gap under exterior doors with door sweeps',
      'Remove ivy, bougainvillea, and dense ground cover within 3 feet of the home foundation',
    ],
    relatedServices: [
      'rat-control',
      'rodent-exclusion',
      'exclusion',
      'attic-restoration',
    ],
    faqs: [
      {
        q: 'How do I know if I have rats in my LA attic?',
        a: 'The clearest signs are scratching or scurrying sounds in the attic at night (rats are nocturnal), droppings near attic access hatches, urine trails visible under UV light, and gnawed wood or insulation. OCP performs a thorough attic inspection with documentation photos and a written exclusion plan.',
      },
      {
        q: 'Are snap traps or rodenticide bait stations better for roof rats in LA?',
        a: 'Both have a role. Snap traps are preferred inside living spaces to avoid secondary poisoning of LA\'s wildlife, including protected hawks, owls, and coyotes. Tamper-resistant bait stations are appropriate for exterior use away from wildlife zones. LA County Vector Control recommends an integrated approach combining exclusion, trapping, and targeted baiting.',
      },
      {
        q: 'Can rats enter my LA home through the toilet or drains?',
        a: 'Norway rats can swim through sewer lines and enter structures through toilet connections and floor drains — this is documented in older LA sewer infrastructure. This is a less common entry point than roof and wall penetrations but should be considered in ground-floor units and older homes near the LA river and sewer mains.',
      },
      {
        q: 'How long does rat exclusion work take?',
        a: 'A full rodent exclusion of a typical LA single-family home takes 4–8 hours for installation and uses materials including 1/4-inch galvanized hardware cloth, metal flashing, copper mesh, and expanding foam. Results are immediate — new rats cannot enter. OCP provides a 1-year warranty on all exclusion work.',
      },
    ],
    schema: {
      name: 'Rats',
      description:
        'Roof rats and Norway rats are common in Los Angeles homes and businesses. OCP Pest Control provides expert rat elimination, exclusion, and attic restoration throughout LA County.',
    },
  },
  {
    slug: 'mice',
    name: 'House Mice',
    scientificName: 'Mus musculus',
    category: 'rodent',
    description:
      'House mice infiltrate LA homes through gaps as small as a dime. Learn the signs of mouse infestation and how OCP Pest Control eliminates mice from Los Angeles properties.',
    heroHeadline: 'Mouse Control Los Angeles — Close Entry Points, Eliminate the Colony',
    heroSubhead:
      'OCP Pest Control delivers professional mouse exclusion and elimination for LA homes, apartments, and food businesses.',
    overview:
      'House mice (Mus musculus) are LA\'s most ubiquitous indoor rodent, thriving in the dense urban environment from downtown lofts to Westside single-family homes. A mouse can compress its body through any opening it can fit its skull through — roughly the diameter of a dime (6 mm) — enabling entry through the countless small gaps in LA\'s aging building stock. Mice are prolific breeders and highly adaptable, quickly developing neophobia toward traps and caution around new bait stations, making professional control with rotational strategies essential for sustained elimination.',
    identification: [
      'Adult: 60–90 mm body, 75–95 mm tail, large rounded ears, pointed snout, gray-brown above, pale gray below',
      'Droppings: 3–6 mm, rod-shaped with pointed ends, scattered randomly (vs. rat droppings which are larger and blunter)',
      'Gnaw holes: 20–30 mm clean-edged circular holes in food packaging, drywall, and cabinet kick plates',
      'Tracks: four-toed forefeet and five-toed hindfeet visible in dust or tracking powder applications',
      'Smear marks: gray grease stains along wall junctions and pipe runs from oil in mouse fur',
      'Urinary pillars: small mounds of dirt, grease, and urine deposited along runways in chronic infestations',
    ],
    lifecycle:
      'Female house mice are sexually mature at 5–6 weeks and produce 5–10 litters per year of 5–6 pups each — up to 60 offspring per female annually under indoor LA conditions. Gestation is 19–21 days, and pups are weaned in 3 weeks. Population doublings can occur every 30 days in uncontrolled indoor infestations, which is why early intervention is critical.',
    habitat: [
      'Kitchen cabinet base boards, behind stoves, and inside dishwasher insulation in LA homes',
      'Wall voids adjacent to utility chases and plumbing supply lines where insulation provides nesting material',
      'Attic insulation in LA hillside homes, where mice nest in cavities carved from blown-in or batt insulation',
      'Garage storage areas, especially cardboard boxes and bulk dry goods stored on the floor',
      'Basement crawl spaces and subfloor areas in older Craftsman and Spanish-style LA homes',
    ],
    healthRisks: [
      'Salmonella and Listeria contamination of food preparation surfaces through fecal deposition',
      'Lymphocytic choriomeningitis virus (LCMV) spread through mouse urine, droppings, and bites — documented in LA',
      'Mouse allergens are the second most common indoor allergen trigger for LA children after cockroaches',
      'Hantavirus pulmonary syndrome risk when dry mouse droppings are disturbed in enclosed spaces',
      'Mouse urine contains urine marks for navigation and can cause allergic sensitization with chronic exposure',
    ],
    propertyDamage: [
      'Electrical wire insulation stripping that creates short-circuit and fire hazard in wall voids',
      'Contamination and destruction of stored food, pet food, and bulk pantry goods',
      'Nesting damage to attic insulation, wall insulation, and upholstered furniture requiring replacement',
      'Structural damage from gnawing through PVC plumbing, drywall, and weatherstripping',
    ],
    preventionTips: [
      'Conduct a thorough exterior inspection and seal all gaps larger than 6 mm with copper mesh and caulk',
      'Install door sweeps on all exterior doors — a 6 mm gap under a door is a mouse highway',
      'Store dry food in hard-sided sealed containers; mice chew through cardboard and foil bags within minutes',
      'Keep garage floors clear of boxes and debris that provide nesting material and concealment',
      'Eliminate standing water sources including pet water bowls left overnight',
      'Inspect utility, cable, and plumbing entry points from outside — common LA mouse entry sites',
    ],
    relatedServices: [
      'mouse-control',
      'rodent-exclusion',
      'exclusion',
    ],
    faqs: [
      {
        q: 'How do I know if I have mice or rats in my LA home?',
        a: 'Size of droppings is the fastest field indicator: mouse droppings are 3–6 mm (grain of rice), rat droppings are 12–20 mm. Gnaw holes for mice are small (dime-sized), while rats produce quarter-sized or larger holes. Hearing: mice produce high-pitched squeaking; rats produce heavier thumping in walls and attic at night.',
      },
      {
        q: 'How quickly can a mouse infestation grow?',
        a: 'A single mated pair entering an LA home in fall can produce 50–60 offspring by spring if undisturbed. This exponential growth means a 2-mouse problem in October can be a 60-mouse infestation by March. Early treatment in fall before LA\'s mild winter conditions stimulate indoor breeding is strongly recommended.',
      },
      {
        q: 'Are snap traps or glue boards better for mice?',
        a: 'Snap traps are more humane, more effective per placement, and easier to monitor. Glue boards are non-selective and can capture lizards, non-target wildlife, and even small birds in LA\'s urban environment, and are subject to local humane trapping ordinances. We use snap traps and bait stations in a systematic grid placement.',
      },
      {
        q: 'How long until mice are gone after professional treatment?',
        a: 'With proper exclusion and a bait station/snap trap program, most LA residential infestations show no new activity within 2–4 weeks. Exclusion is critical — without sealing entry points, new mice from the neighborhood will re-enter regardless of how many traps are set indoors.',
      },
    ],
    schema: {
      name: 'House Mice',
      description:
        'House mice in Los Angeles homes and apartments multiply rapidly and contaminate food. OCP Pest Control provides professional mouse exclusion and elimination throughout LA County.',
    },
  },
  {
    slug: 'mosquitoes',
    name: 'Mosquitoes',
    scientificName: 'Aedes aegypti / Aedes albopictus',
    category: 'insect',
    description:
      'Invasive Aedes aegypti mosquitoes now bite day and night in LA. OCP Pest Control offers yard mosquito treatments to protect your Los Angeles family from disease-carrying mosquitoes.',
    heroHeadline: 'Mosquito Control Los Angeles — Eliminate Day-Biting Invasive Mosquitoes',
    heroSubhead:
      'Targeted mosquito yard treatments protecting LA families from Aedes aegypti and Aedes albopictus mosquitoes.',
    overview:
      'Los Angeles faces an escalating invasive mosquito crisis. The yellow fever mosquito (Aedes aegypti) and Asian tiger mosquito (Aedes albopictus) have established permanent breeding populations throughout LA County since their first detection in 2013, as confirmed by the Greater Los Angeles County Vector Control District (GLACVCD). Unlike the native Culex mosquito (which bites at dawn and dusk), invasive Aedes mosquitoes bite aggressively throughout the day, rest at ground level in vegetation rather than water surfaces, and breed in containers as small as a bottle cap, making them exceptionally difficult to control with conventional approaches.',
    identification: [
      'Aedes aegypti: 4–7 mm, distinctive white lyre-shaped pattern on thorax, white-banded legs, black body',
      'Aedes albopictus: similar size, single white dorsal stripe on thorax (no lyre pattern), banded legs',
      'Culex quinquefasciatus (native): 3–6 mm, plain brown with no white markings, bites at dusk and dawn',
      'Aedes eggs: laid singly above waterline in dark containers, survive desiccation for months before hatching',
      'Aedes larvae: "wrigglers" in standing water as small as a bottle cap, distinguished by siphon tube length',
      'Biting behavior: Aedes bite at ankle/knee level outdoors during daylight; Culex bite from above at night',
    ],
    lifecycle:
      'Aedes aegypti completes egg-to-adult development in as little as 8–10 days in LA\'s warm summer temperatures. Females require a blood meal before each egg batch of 100–200 eggs, laid in multiple small containers rather than one large breeding site. Eggs can survive dry conditions for up to 12 months, hatching when re-wetted — a key reason elimination programs must focus on eliminating all small containers, not just treating water.',
    habitat: [
      'Ornamental containers, saucers under potted plants, and bird baths in LA yards — primary urban breeding sites',
      'Clogged gutters, low spots in tarps, and water collecting in discarded tires in LA alleys',
      'Rain collection barrels and fountain ponds without mosquito dunks or fountain pump circulation',
      'Tree holes, bamboo cut ends, and bromeliad axils in LA\'s heavily planted hillside neighborhoods',
      'Construction site water accumulations and pooling in abandoned lots across LA\'s urban core',
    ],
    healthRisks: [
      'Dengue fever transmission — locally acquired cases confirmed in LA County for the first time in 2023',
      'Chikungunya virus capacity — Aedes aegypti is a proven vector; GLACVCD monitors for local transmission',
      'Zika virus vector competency — Aedes aegypti can transmit Zika; travel-associated cases reported in LA',
      'West Nile Virus via native Culex mosquitoes — LA County has recorded WNV fatalities annually since 2004',
      'Severe allergic reactions and secondary infection from excessive biting and scratching in children',
    ],
    propertyDamage: [
      'Mosquito pressure reduces usability of outdoor living spaces, patios, and gardens in LA homes',
      'Negative impact on outdoor dining revenue for LA restaurants and hospitality venues',
      'Property value perception concerns in neighborhoods with documented high Aedes populations',
    ],
    preventionTips: [
      'Eliminate all standing water in containers every 5–7 days — the Aedes egg-to-adult cycle in LA summer',
      'Use Bti (Bacillus thuringiensis israelensis) mosquito dunks in any ornamental water features monthly',
      'Screen all rain barrels and water storage containers with fine mesh',
      'Report Aedes sightings to GLACVCD at (562) 944-9656 — free service and trap deployment is available',
      'Wear DEET or picaridin repellent when gardening or doing outdoor work during daytime in LA summer',
      'Keep yard vegetation trimmed — Aedes rest at ground level in dense low foliage during the day',
    ],
    relatedServices: [
      'mosquito-control',
      'general-pest-control',
    ],
    faqs: [
      {
        q: 'What is the difference between the old mosquitoes and the new invasive ones in LA?',
        a: 'Native Culex mosquitoes in LA are larger, brown, bite from dusk to dawn, and breed in large water bodies like storm drains and ornamental ponds. Invasive Aedes mosquitoes are small, black-and-white striped, bite aggressively during the day, and breed in tiny containers in your yard. Aedes are much harder to control and are considered an urgent public health priority by GLACVCD.',
      },
      {
        q: 'Can LA mosquitoes really transmit dengue fever?',
        a: 'Yes. In summer 2023, LA County DPH confirmed the first locally acquired dengue fever cases in California in decades, transmitted by Aedes aegypti in Pasadena and Long Beach neighborhoods. This represents a genuine disease risk requiring proactive mosquito management, not just occasional fogging.',
      },
      {
        q: 'Does OCP\'s mosquito treatment kill mosquitoes or just repel them?',
        a: 'We use a combination of adulticide residual treatment on resting vegetation, larvicide application to water features, and source reduction guidance. The residual treatment kills resting Aedes mosquitoes on contact for 2–4 weeks. We recommend monthly treatments April through October for sustained protection in LA.',
      },
      {
        q: 'Is professional mosquito treatment safe for my children and pets?',
        a: 'Yes, when applied by a licensed PCO. We use EPA-registered products at label rates with appropriate re-entry intervals (typically 30–60 minutes after spray dries). We offer organic botanical options for households with specific concerns. Pyrethrin-based treatments break down rapidly and do not persist in the environment.',
      },
    ],
    schema: {
      name: 'Mosquitoes',
      description:
        'Invasive Aedes mosquitoes in Los Angeles carry dengue and Zika viruses. OCP Pest Control provides yard mosquito treatments to protect LA families throughout mosquito season.',
    },
  },
  {
    slug: 'fleas',
    name: 'Fleas',
    scientificName: 'Ctenocephalides felis',
    category: 'insect',
    description:
      'Cat fleas infest LA homes year-round thanks to the mild climate. OCP Pest Control eliminates fleas from carpets, yards, and pets\' environments across Los Angeles.',
    heroHeadline: 'Flea Exterminator Los Angeles — Break the Flea Life Cycle for Good',
    heroSubhead:
      'Comprehensive indoor and outdoor flea treatments targeting all life stages in LA homes and yards.',
    overview:
      'The cat flea (Ctenocephalides felis) is overwhelmingly the dominant flea species in Los Angeles, infesting cats, dogs, and — in the absence of pets — readily feeding on humans. LA\'s Mediterranean climate eliminates the traditional "flea season" found in colder climates; fleas in Los Angeles breed year-round, with population peaks in late summer and early fall when heat and humidity combine with dense urban wildlife serving as reservoir hosts. Feral cat populations, raccoons, opossums, and squirrels maintain flea reservoirs in LA neighborhoods even in homes without pets.',
    identification: [
      'Adult flea: 1–3 mm, laterally flattened, dark reddish-brown, powerful rear legs for jumping 150× body length',
      'Flea eggs: 0.5 mm white oval eggs laid on host, falling into carpet, furniture, and bedding as pet moves',
      'Flea larvae: 1–5 mm white legless larvae hiding deep in carpet fibers and pet bedding away from light',
      'Flea pupae: sticky sand-grain-sized cocoons in carpet, vacuum-resistant, impervious to most insecticides',
      'Flea dirt (feces): black comma-shaped specks on pet fur and bedding that turn red when wet on white paper',
      '"Flea jump" test: walk through suspected areas in white knee socks and observe for jumping fleas on socks',
    ],
    lifecycle:
      'The cat flea life cycle has four stages — egg, larva, pupa, adult — spanning 2–3 weeks under LA summer conditions or up to 6 months during cool winter periods. The pupal stage is the treatment\'s Achilles heel: cocoons are physically protected and chemically resistant, hatching in response to vibration and heat. This is why flea problems rebound 7–14 days after initial treatment as new adults emerge from pre-formed pupae.',
    habitat: [
      'Deep carpet pile and area rugs throughout LA homes, especially pet resting areas and under furniture',
      'Pet bedding, upholstered furniture, and car interiors where pets travel',
      'Yard areas with shade, moisture, and wildlife activity — under decks, in leaf litter, along fences',
      'Crawl spaces frequented by opossums, raccoons, or feral cats in LA hillside and older urban homes',
      'Dormant vacant homes and rental units — pupae can survive months and hatch when new occupants arrive',
    ],
    healthRisks: [
      'Flea allergy dermatitis (FAD) — the most common skin disease in LA-area dogs and cats, triggered by flea saliva',
      'Tapeworm (Dipylidium caninum) transmission when dogs or cats ingest infected fleas during grooming',
      'Murine typhus (Rickettsia typhi) transmitted by Xenopsylla cheopis rat fleas — documented in LA County',
      'Anemia in kittens and puppies from heavy flea infestation blood loss',
      'Secondary skin infections from human bite site scratching, especially in children',
    ],
    propertyDamage: [
      'Severe carpet and upholstery damage from flea treatments on heavily infested materials requiring replacement',
      'Pet veterinary costs from FAD, anemia, and tapeworm treatment associated with heavy infestations',
      'Property disclosure obligations in LA real estate transactions when previous flea infestations are known',
    ],
    preventionTips: [
      'Maintain year-round veterinarian-prescribed flea prevention on all pets — the #1 prevention measure in LA',
      'Vacuum carpets, upholstery, and pet bedding weekly; dispose of vacuum bag/canister contents in sealed outdoor bin',
      'Wash pet bedding in hot water (60°C+) weekly during active infestations',
      'Apply cedar mulch or diatomaceous earth under decks and in shaded yard areas to reduce outdoor flea habitat',
      'Use hardware cloth to exclude wildlife from under decks and crawl spaces',
      'Treat both the home interior and yard simultaneously for successful elimination',
    ],
    relatedServices: [
      'flea-treatment',
      'general-pest-control',
      'wildlife-control',
    ],
    faqs: [
      {
        q: 'Why do I have fleas if I don\'t have pets?',
        a: 'Feral cats, raccoons, opossums, and rodents common throughout LA serve as wildlife flea hosts. These animals shelter in crawl spaces, under decks, and in yards, leaving flea eggs and larvae behind. When wildlife is excluded or vacates, starving adult fleas attack human occupants. Previous tenants\' pets can also leave viable flea pupae that hatch months later.',
      },
      {
        q: 'How many treatments does it take to eliminate fleas?',
        a: 'Most LA homes require 2 treatments 2–3 weeks apart to intercept new adult fleas emerging from pre-formed pupae that survive the first treatment. A follow-up inspection at 30 days ensures complete elimination. Treating only once almost always results in reinfestation as resistant pupae hatch.',
      },
      {
        q: 'Do I need to treat my yard for fleas too?',
        a: 'Yes, for complete elimination. The outdoor environment — particularly shaded areas under decks, in tall grass, and along fence lines — is a major source of re-infestation. Treating inside without addressing the yard is a common reason flea problems persist in LA homes, especially those with dog runs or pet access to the yard.',
      },
      {
        q: 'What do I need to do to prepare for a flea treatment?',
        a: 'Vacuum all carpets, furniture, and baseboards immediately before treatment and discard the bag. Wash all pet bedding. Remove pets and people (including fish tanks covered with wet towels) for 4–5 hours. Ensure all floors are accessible. Running the HVAC system during treatment improves chemical distribution in LA homes.',
      },
    ],
    schema: {
      name: 'Fleas',
      description:
        'Cat fleas infest Los Angeles homes year-round due to the mild climate and urban wildlife. OCP Pest Control eliminates flea infestations from LA homes and yards with guaranteed results.',
    },
  },
  {
    slug: 'wasps',
    name: 'Wasps',
    scientificName: 'Vespula spp. / Polistes spp. / Vespa crabro',
    category: 'insect',
    description:
      'Yellow jackets, paper wasps, and hornets nest around LA homes from spring through fall. OCP Pest Control safely removes wasp nests from Los Angeles properties.',
    heroHeadline: 'Wasp Nest Removal Los Angeles — Safe, Fast, Same-Day Service',
    heroSubhead:
      'OCP Pest Control safely eliminates yellow jacket, paper wasp, and hornet nests from LA homes and commercial properties.',
    overview:
      'Los Angeles hosts three primary stinging Vespid wasps: the western yellow jacket (Vespula pensylvanica), which builds concealed paper nests in wall voids, attic spaces, and underground; the paper wasp (Polistes spp.), which constructs open umbrella-shaped nests under eaves and railings; and the European hornet (Vespa crabro), an introduced species establishing populations in LA\'s wooded hillside areas. Yellow jacket colonies peak at 4,000–5,000 workers in late summer and early fall, the period when most stinging incidents occur in LA parks and outdoor dining areas.',
    identification: [
      'Yellow jacket: 12–16 mm, bright yellow and black banded abdomen, smooth body (not fuzzy), rapid wing movement',
      'Paper wasp: 16–25 mm, narrow waist, orange-tipped antennae, long dangling legs visible in flight',
      'European hornet: 25–35 mm, brown and yellow (not bright yellow and black), large size, nocturnal flight',
      'Yellow jacket nest: papery gray football-shaped structure in wall voids, attics, or underground burrows',
      'Paper wasp nest: open, honeycomb-faced umbrella nest under eaves, porch ceilings, and rail caps',
      'Hornet nest: large (football to basketball size) papery structure in trees or attic voids',
    ],
    lifecycle:
      'Wasp queens overwinter in LA\'s mild climate and begin new colonies in early spring, reaching peak populations of thousands by August–September. Unlike bees, wasp colonies die off each winter — only mated queens survive. Paper wasp colonies are smaller (20–75 workers) and less aggressive than yellow jackets. Yellow jacket colonies in LA\'s mild climate occasionally overwinter, producing "super-colonies" exceeding 100,000 workers by the following fall.',
    habitat: [
      'Wall voids, attic soffits, and subterranean burrows in LA yards — primary yellow jacket nest sites',
      'Eaves, pergola rafters, porch overhangs, and utility meter boxes — paper wasp preferences',
      'Tree hollows, large shrubs, and attic spaces in LA\'s hillside neighborhoods — European hornet sites',
      'Underground nests in LA parks, golf courses, and landscaped commercial properties',
      'Irrigation valve boxes, outdoor light fixtures, and BBQ grills left unused over winter',
    ],
    healthRisks: [
      'Yellow jacket stings can trigger anaphylactic shock — responsible for more deaths annually in the US than any other venomous animal',
      'Multiple simultaneous stings from disturbed yellow jacket colonies cause envenomation even in non-allergic individuals',
      'Sting allergies affect an estimated 5–7.5% of LA adults — EpiPen availability is a critical safety measure',
      'Paper wasp stings cause intense localized pain, swelling, and urticaria lasting 24–72 hours',
      'Nest removal attempts by untrained homeowners are the most common cause of serious wasp stings in LA',
    ],
    propertyDamage: [
      'Yellow jackets chew through drywall and soft wood to enlarge wall void nest spaces, requiring repair',
      'Honey and wasp matter from abandoned nests attracts secondary pests and stains walls and ceilings',
      'Liability exposure for LA businesses and landlords when stings occur on their property',
    ],
    preventionTips: [
      'Inspect eaves, soffits, and porch overhangs for small paper wasp nests in early spring when colonies are small',
      'Seal wall void openings, gaps in fascia, and weep screed holes that yellow jackets use as nest entrances',
      'Keep outdoor food, beverages, and garbage covered during LA\'s late summer wasp peak (August–October)',
      'Remove abandoned underground rodent burrows from yards — favorite yellow jacket nesting sites',
      'Hang commercial wasp decoy nests in early spring — paper wasps are territorial and avoid occupied areas',
      'Schedule professional treatment if an active nest is within 15 feet of entry points, play areas, or seating',
    ],
    relatedServices: [
      'wasp-removal',
      'bee-and-wasp-control',
      'general-pest-control',
    ],
    faqs: [
      {
        q: 'How do I know if the nest on my LA home is wasps or bees?',
        a: 'Paper wasps build open-celled nests with visible hexagonal cells and no outer paper covering, hanging from a single stalk. Honey bees build in enclosed spaces (wall voids, tree hollows) and will not move willingly. Yellow jackets build enclosed papery nests. If you see a paper nest with visible cells under your eaves in LA, it\'s almost certainly paper wasps.',
      },
      {
        q: 'Can I remove a wasp nest myself?',
        a: 'Small paper wasp nests (under 10 cells) can be knocked down at night with a sealed garbage bag if no allergies are present. Never attempt to remove yellow jacket wall void nests or any ground nests — the confined space concentrates thousands of wasps and severely restricts escape. Professional PPE and the correct insecticide application point are essential.',
      },
      {
        q: 'When is the best time to treat a wasp nest?',
        a: 'Treatment should always be performed after sunset or before sunrise when all foraging workers have returned to the nest and temperatures reduce wasp activity. Late-season LA yellow jacket nests (September–November) are at peak population and require extra caution. Emergency same-day service is available from OCP regardless of time of year.',
      },
      {
        q: 'Do I need to remove the nest after it\'s treated?',
        a: 'For wall void yellow jacket nests, yes — dead nest material and stored protein attract secondary pests including beetles, flies, and other insects. Paper wasp nests can be left to desiccate and fall naturally after treatment, though removal is recommended near high-traffic areas. OCP includes nest removal in all treated accessible locations.',
      },
    ],
    schema: {
      name: 'Wasps',
      description:
        'Yellow jackets, paper wasps, and hornets nest around Los Angeles homes and businesses. OCP Pest Control provides safe, professional wasp nest removal throughout LA County.',
    },
  },
  {
    slug: 'spiders',
    name: 'Spiders',
    scientificName: 'Latrodectus hesperus / Loxosceles reclusa',
    category: 'arachnid',
    description:
      'Black widows and brown recluse spiders are found throughout Los Angeles. OCP Pest Control identifies and eliminates dangerous spiders from LA homes and businesses.',
    heroHeadline: 'Spider Control Los Angeles — Eliminate Black Widows and Brown Recluse',
    heroSubhead:
      'Protecting LA families from venomous spiders with targeted residual treatments and harborage elimination.',
    overview:
      'Los Angeles is home to two medically significant spider species. The western black widow (Latrodectus hesperus) is common throughout LA County, favoring dark undisturbed locations in garages, under patio furniture, in outdoor utility boxes, and around sprinkler systems. The brown recluse (Loxosceles reclusa) is less common but has established populations in LA, introduced through commerce, and is found primarily in undisturbed storage areas, cardboard boxes, and closets. LA\'s warm climate supports large spider populations year-round, and black widow sightings increase significantly in late summer when populations peak.',
    identification: [
      'Black widow female: shiny black, 8–10 mm body, distinctive red hourglass mark on ventral abdomen',
      'Black widow male: smaller (3–4 mm), lighter with red/white markings — rarely encountered but also venomous',
      'Brown recluse: 6–11 mm, tan to brown, distinctive dark brown violin-shaped mark on cephalothorax',
      'Black widow web: irregular, strong (resistant to tearing), funnel retreat at bottom, near ground level',
      'Brown recluse movement: slow, shy, retreating when disturbed; six eyes (three pairs) vs. eight eyes in most spiders',
      'Non-venomous spiders: most LA house spiders (cellar spiders, orb weavers, wolf spiders) are harmless',
    ],
    lifecycle:
      'Female black widows live 1–3 years and produce 4–9 egg sacs of 200–900 eggs each per season, with spiderlings dispersing by ballooning. Population peaks in LA occur August–October. Brown recluse spiders live 2–4 years with slower reproduction, producing up to 5 egg sacs of 20–50 eggs. Both species overwinter as adults, maintaining year-round presence in LA\'s climate.',
    habitat: [
      'Garages, under workbenches, around pool equipment, and behind outdoor furniture — black widow prime sites',
      'Electrical meter boxes, gas meter housings, and water shutoff valve enclosures throughout LA',
      'Undisturbed cardboard box storage in garages, attics, and closets — brown recluse preferred habitat',
      'Woodpiles, yard debris, and under landscape rocks in LA gardens',
      'Crawl spaces, under house skirting, and around outdoor plumbing fixtures',
    ],
    healthRisks: [
      'Black widow venom (alpha-latrotoxin) causes latrodectism: severe muscle pain, cramps, hypertension, and diaphoresis requiring emergency treatment',
      'Brown recluse venom (sphingomyelinase D) can cause necrotic skin lesions (dermonecrosis) requiring surgical debridement in severe cases',
      'Children and elderly individuals are at significantly higher risk for severe systemic reactions to black widow envenomation',
      'Antivenin (Merck Antivenin Latrodectus mactans) is available at LA County emergency departments for severe cases',
      'Misidentification risk: many LA bites attributed to brown recluse are actually from other causes — professional ID is important',
    ],
    propertyDamage: [
      'Spider webs on exterior surfaces damage paint and cladding if not removed regularly',
      'Liability exposure for LA landlords and businesses when venomous spider bites occur on premises',
      'Psychological distress and reduced property desirability in areas with visible spider populations',
    ],
    preventionTips: [
      'Wear gloves when reaching into undisturbed areas — garages, woodpiles, and storage boxes — in LA homes',
      'Shake out shoes, clothing, and gloves before wearing if stored in undisturbed areas',
      'Reduce outdoor lighting that attracts insect prey which sustains spider populations',
      'Remove ground-level debris, wood piles, and leaf litter within 3 feet of the home foundation',
      'Seal gaps under doors, around windows, and in foundation vents to reduce entry into living areas',
      'Declutter storage areas — eliminate undisturbed cardboard boxes where brown recluse spiders prefer to nest',
    ],
    relatedServices: [
      'spider-control',
      'general-pest-control',
    ],
    faqs: [
      {
        q: 'How common are black widows in Los Angeles?',
        a: 'Very common. Western black widows are present in virtually every LA neighborhood and are the most medically significant spider in California per the California Poison Control System. We routinely find them around pool equipment, in garage corners, under patio furniture, and in outdoor utility enclosures during inspections throughout LA County.',
      },
      {
        q: 'What should I do if I\'m bitten by a black widow in LA?',
        a: 'Seek emergency medical care immediately. Try to capture or photograph the spider for identification. Black widow envenomation symptoms — severe muscle pain and cramps, especially in the abdomen — develop within 1–3 hours. Antivenin is available at LA County emergency departments and significantly reduces symptom severity.',
      },
      {
        q: 'How do I identify a black widow vs. a harmless spider?',
        a: 'The western black widow female is unmistakable: shiny jet-black with a red hourglass on the underside of the abdomen. No common harmless LA spider has this marking. If in doubt, do not handle — contact OCP for professional identification. Cellar spiders (long-legged "daddy long-legs") are the most commonly misidentified harmless species.',
      },
      {
        q: 'Can a professional spider treatment prevent future infestations?',
        a: 'Residual insecticide treatment of harborage areas combined with web removal significantly reduces spider populations for 60–90 days. Because spiders are primarily controlled by reducing prey (other insects) and harborage, ongoing general pest control paired with habitat modification provides the most durable long-term protection in LA homes.',
      },
    ],
    schema: {
      name: 'Spiders',
      description:
        'Black widows and brown recluse spiders pose a genuine health risk in Los Angeles. OCP Pest Control provides expert spider identification and elimination throughout LA County.',
    },
  },
  {
    slug: 'flies',
    name: 'Flies',
    scientificName: 'Musca domestica / Psychoda spp. / Drosophila spp.',
    category: 'insect',
    description:
      'House flies, drain flies, and fruit flies are year-round problems in LA kitchens and restaurants. OCP Pest Control identifies and eliminates fly infestations throughout Los Angeles.',
    heroHeadline: 'Fly Control Los Angeles — Eliminate House, Drain, and Fruit Flies',
    heroSubhead:
      'OCP Pest Control identifies your fly species and targets the breeding source for complete fly elimination in LA homes and food businesses.',
    overview:
      'Fly infestations in Los Angeles are a year-round challenge across all three dominant species: the house fly (Musca domestica) breeds in organic waste and is a primary vector for food-borne illness in LA\'s food service industry; the drain fly (Psychoda alternata) breeds in the organic biofilm inside floor drains and plumbing — a pervasive problem in LA restaurants and commercial kitchens; and the fruit fly (Drosophila melanogaster) breeds in fermenting organic material and overripe produce, exploding in population during LA\'s warm fall harvest season. LA County Health Department lists fly infestations as a major violation in food facility inspections.',
    identification: [
      'House fly: 6–8 mm, gray with four dark thorax stripes, sponging mouthparts, compound red eyes',
      'Drain fly: 1.5–3 mm, moth-like fuzzy wings held tent-style, found resting on walls near drains',
      'Fruit fly: 3 mm, red eyes, tan-brown body, hovering slowly around fruit, wine, and drain areas',
      'Blow fly: 8–12 mm, metallic blue-green or copper sheen, associated with carrion or animal waste',
      'Cluster fly: 8–10 mm, golden hairs on thorax, sluggish movement, found in attics and upper walls in winter',
      'All species: presence near drains or food waste during daylight is a reliable infestation indicator',
    ],
    lifecycle:
      'House flies develop egg-to-adult in as little as 7–10 days in LA\'s summer heat, with females laying 400–600 eggs in batches across multiple breeding sites. Fruit flies complete the cycle in 8–10 days and can produce 500 offspring per female. Drain flies breed continuously in persistent biofilm; eliminating the biofilm — not just the adult flies — is essential for control.',
    habitat: [
      'Organic waste bins, garbage rooms, and dumpster enclosures in LA commercial properties',
      'Floor drain biofilm in restaurant kitchens, bar drains, and commercial laundry facilities',
      'Overripe and damaged produce, fermentation vessels, and alcohol residue in LA bars and restaurants',
      'Dead animals in wall voids or attics — primary blow fly breeding source in LA homes',
      'Compost bins, pet waste areas, and yard debris piles in LA residential gardens',
    ],
    healthRisks: [
      'House flies mechanically transmit Salmonella, E. coli O157:H7, Listeria, and Shigella to food surfaces',
      'A single house fly carries over 1 million bacteria and regurgitates digestive fluid onto food before feeding',
      'Myiasis (fly larva infestation of wounds) is a documented risk from blow flies in LA healthcare settings',
      'Drain fly populations in LA restaurants trigger major LA County Health violations and can cause facility closure',
      'Psychological distress and customer complaints — flies in food service settings cause immediate reputational damage',
    ],
    propertyDamage: [
      'Failed LA County Health Department inspections — flies are an immediate major violation in food facilities',
      'Food product contamination and inventory loss in LA food service and retail settings',
      'Reputational damage from customer-reported fly sightings on Yelp, Google Reviews, and social media',
    ],
    preventionTips: [
      'Clean floor drains with enzymatic drain gel weekly to eliminate biofilm — the drain fly breeding medium',
      'Keep all organic waste containers sealed and emptied daily in LA\'s warm climate',
      'Store produce in refrigeration or sealed containers; inspect incoming deliveries for damaged items',
      'Install air curtains or positive pressure HVAC on commercial receiving doors to prevent house fly entry',
      'Install UV light traps (ILT) in food preparation areas as supplemental monitoring and control',
      'Report and address any dead animal odors in walls — blow fly infestations signal a carcass requiring removal',
    ],
    relatedServices: [
      'fly-control',
      'restaurant-pest-control',
      'drain-cleaning',
    ],
    faqs: [
      {
        q: 'Why does my LA restaurant have drain flies even though we clean regularly?',
        a: 'Standard cleaning does not remove the deep organic biofilm inside floor drain pipes that sustains drain fly larvae. Effective treatment requires enzymatic drain treatment products that digest the biofilm, combined with insect growth regulator (IGR) foam applied inside the drain pipe. Surface cleaning alone will not eliminate the breeding habitat.',
      },
      {
        q: 'How quickly can a fruit fly infestation grow in an LA kitchen?',
        a: 'Under LA\'s warm conditions, fruit flies can go from 10 adults to thousands in under 3 weeks. A single overripe banana, a forgotten wine bottle residue, or a mop head left damp can sustain hundreds of breeding females. Full elimination requires finding and removing every breeding source simultaneously — adult trapping alone is ineffective.',
      },
      {
        q: 'Can flies actually make people sick?',
        a: 'Yes — house flies are documented mechanical vectors for over 100 pathogens. They cannot chew; instead they regurgitate saliva onto food to liquefy it, depositing bacteria in the process. LA County DPH cites fly control as a critical component of food safety, and fly infestations are listed as a major violation in health inspection protocols.',
      },
      {
        q: 'What type of fly treatment does OCP use?',
        a: 'OCP\'s fly control program begins with species identification, which determines the breeding source strategy. We use enzymatic biofilm treatments for drain flies, fruit fly bait gel for Drosophila, residual insecticide for house flies, UV insect light traps for monitoring and supplemental control, and source elimination guidance throughout. Treatment without source removal is temporary.',
      },
    ],
    schema: {
      name: 'Flies',
      description:
        'House flies, drain flies, and fruit flies are year-round pest problems in Los Angeles homes and restaurants. OCP Pest Control identifies fly species and eliminates breeding sources throughout LA County.',
    },
  },
  {
    slug: 'wildlife',
    name: 'Urban Wildlife',
    scientificName: 'Procyon lotor / Didelphis virginiana / Mephitis mephitis',
    category: 'wildlife',
    description:
      'Raccoons, opossums, and skunks commonly invade LA attics, crawl spaces, and yards. OCP Pest Control provides humane wildlife removal and exclusion throughout Los Angeles.',
    heroHeadline: 'Wildlife Removal Los Angeles — Humane Raccoon, Opossum & Skunk Control',
    heroSubhead:
      'Licensed humane wildlife removal and permanent exclusion services for LA homes, HOAs, and commercial properties.',
    overview:
      'Los Angeles is one of the most wildlife-dense urban environments in North America, with raccoons (Procyon lotor), Virginia opossums (Didelphis virginiana), and striped skunks (Mephitis mephitis) thriving across all LA neighborhoods from downtown to the Santa Monica Mountains. Urban wildlife activity in LA is governed by the California Department of Fish and Wildlife (CDFW) and the Los Angeles Municipal Code, which restricts lethal control methods and requires that captured nuisance wildlife be euthanized or released on-site — making professional exclusion and deterrence the only practical long-term solution.',
    identification: [
      'Raccoon: 4–9 kg, distinctive black facial mask and ringed tail, highly dexterous paws, nocturnal',
      'Opossum: 2–4 kg, long hairless prehensile tail, pointed snout, white-gray fur, 50 teeth (most of any NA mammal)',
      'Skunk: 1–4 kg, black with white dorsal stripe(s), slow-moving, raises tail in warning before spraying',
      'Raccoon tracks: 5-fingered hand-like prints 50–75 mm; opossum tracks: star-shaped 5-toe with offset thumb',
      'Entry damage: raccoons tear open roof vents, soffit panels, and fascia; skunks dig under foundations',
      'Sounds: raccoons produce chattering, chittering, and thumping in LA attics at night; skunks dig under concrete',
    ],
    lifecycle:
      'Raccoons in LA breed January–March with litters of 2–5 kits born in April–May, often in attics and chimneys of LA homes. Opossums breed twice yearly (February and June) producing up to 20 joeys per litter, maturing in the marsupial pouch. Skunks breed once annually in February–March with 4–7 young. LA\'s mild climate and abundant food sources allow near-continuous activity without true hibernation.',
    habitat: [
      'Attics accessed via torn roof vents, soffit gaps, or loose fascia — primary raccoon denning site in LA homes',
      'Crawl spaces and subfloor areas under older raised-foundation homes throughout historic LA neighborhoods',
      'Under concrete patios, decks, and outbuildings — skunk and opossum denning sites',
      'Storm drain systems and LA river channels — raccoon travel corridors through the urban landscape',
      'Dense ornamental plantings, koi ponds, and vegetable gardens in LA yards that provide food resources',
    ],
    healthRisks: [
      'Raccoon roundworm (Baylisascaris procyonis) eggs in raccoon feces can cause fatal neural larva migrans in humans',
      'Leptospirosis from raccoon urine contaminating soil, water, and crawl spaces — documented in LA County',
      'Rabies: though rare in LA County, raccoons are a primary rabies vector species nationally',
      'Skunk spray causes severe eye irritation, temporary blindness, and nausea in humans and pets',
      'Opossum feces can contaminate food gardens and water features, carrying Equine Protozoal Myeloencephalitis',
    ],
    propertyDamage: [
      'Raccoon attic access causes extensive damage to insulation, ductwork, and structural members from nesting and fecal accumulation',
      'Skunk digging under concrete foundations and slabs causes settlement, cracking, and undermining',
      'Raccoon predation on koi, goldfish, and water garden plants is a common LA homeowner complaint',
      'Contaminated insulation requiring full attic remediation — raccoon latrines concentrate fecal matter in one area',
    ],
    preventionTips: [
      'Install heavy-gauge (14-gauge) galvanized hardware cloth over all roof vents, turbines, and soffit returns',
      'Cap chimneys with a heavy-duty stainless steel chimney cap — open chimneys are prime raccoon den sites in LA',
      'Use L-shaped hardware cloth aprons 12 inches deep and 12 inches outward to prevent skunk digging under foundations',
      'Remove food attractants: fallen fruit, unsecured compost, koi pond fish covers, and pet food left outdoors',
      'Install motion-activated lighting and sound deterrents — effective as supplemental deterrents for skunks',
      'Contact OCP immediately if wildlife is heard in the attic — early intervention prevents nest establishment and fecal accumulation',
    ],
    relatedServices: [
      'wildlife-removal',
      'attic-restoration',
      'exclusion',
      'rodent-exclusion',
    ],
    faqs: [
      {
        q: 'Is it legal to trap and relocate raccoons in Los Angeles?',
        a: 'Under California Fish and Wildlife Code Section 4152, relocating trapped raccoons is generally prohibited — they must be released on-site or euthanized. Trapping without the intent to release on-site requires a CDFW Depredation Permit. This is why professional exclusion (preventing entry) is the most practical and legal long-term solution for raccoon problems in LA.',
      },
      {
        q: 'How do I know if raccoons are living in my LA attic?',
        a: 'Raccoons in attics produce distinct heavy thumping, chattering, and chittering sounds primarily at night. Look for torn roof vent covers, damaged soffit panels, or smeared muddy entry points from the exterior. Raccoon latrines — concentrated piles of dark tubular droppings about 50 mm long — are definitive evidence of denning.',
      },
      {
        q: 'My dog was sprayed by a skunk in my LA yard. What do I do?',
        a: 'The most effective de-skunking solution is a mixture of 1 quart hydrogen peroxide (3%), 1/4 cup baking soda, and 1 teaspoon dish soap — applied while fresh and rinsed thoroughly. Do not bring the pet inside before treating. Tomato juice is largely a myth. After treating your pet, contact OCP to assess where the skunk is denning and implement exclusion to prevent recurrence.',
      },
      {
        q: 'Are opossums dangerous to my family or pets?',
        a: 'Opossums are generally non-aggressive and have a very low rabies risk due to low body temperature. However, they are a significant flea carrier, can contaminate food gardens, and their presence attracts larger predators. Opossums playing dead ("playing possum") are not deceased — they are in an involuntary catatonic response and will recover. Call OCP for professional, humane removal.',
      },
    ],
    schema: {
      name: 'Urban Wildlife',
      description:
        'Raccoons, opossums, and skunks are common wildlife pests in Los Angeles. OCP Pest Control provides licensed, humane wildlife removal and permanent exclusion throughout LA County.',
    },
  },
]
