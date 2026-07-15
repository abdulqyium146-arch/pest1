export interface ServiceProcess {
  step: string
  detail: string
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceSchema {
  serviceType: string
  description: string
}

export interface Service {
  slug: string
  name: string
  tagline: string
  description: string
  heroHeadline: string
  heroSubhead: string
  symptoms: string[]
  process: ServiceProcess[]
  safetyPrep: string[]
  aftercare: string[]
  faqs: ServiceFAQ[]
  schema: ServiceSchema
  relatedServices: string[]
  category: 'insect' | 'rodent' | 'wildlife' | 'wood-destroying' | 'specialty'
}

export const services: Service[] = [
  {
    slug: 'bed-bug-extermination',
    name: 'Bed Bug Extermination',
    tagline: 'Complete bed bug elimination — not just treatment, total eradication.',
    description: 'Professional bed bug extermination in Los Angeles. Heat treatment, chemical options, and full inspections. Call (866) 755-1284 for same-day service.',
    heroHeadline: 'Bed Bugs in Your Home? We Eliminate Them Completely.',
    heroSubhead: 'Los Angeles bed bug infestations require fast, thorough treatment. We inspect every hiding spot, treat every life stage, and verify zero survivors before we leave.',
    symptoms: [
      'Small rust-colored or reddish-brown stains on your mattress, sheets, or box spring — these are bed bug excrement or crushed bugs',
      'Tiny cream-colored shed skins along mattress seams, behind headboards, or inside furniture joints',
      'Live bugs or eggs in the folds of your mattress, inside electrical outlets, behind picture frames, or in the gaps of your bed frame',
      'Waking up with itchy, red bite marks in clusters or lines on your arms, neck, or torso — bites that weren\'t there when you went to sleep',
      'A faint musty or sweet odor in the bedroom, caused by bed bug pheromones in high-infestation areas',
      'Dark speckling or spotting along baseboards, behind outlet covers, or in the seams of upholstered furniture',
      'Neighbors or building management confirming a bed bug complaint — infestations spread unit-to-unit in LA apartment buildings with surprising speed',
    ],
    process: [
      {
        step: 'Thorough Inspection',
        detail: 'We inspect every square inch of the infested space — mattresses, box springs, bed frames, headboards, dressers, nightstands, baseboards, electrical outlets, picture frames, and any clutter near the sleeping area. We use a flashlight and probes to check seams, cracks, and voids. We confirm active infestation and map its extent before recommending treatment.',
      },
      {
        step: 'Treatment Plan Selection',
        detail: 'We discuss treatment options based on infestation size, unit layout, and your household situation (children, pets, immunocompromised residents). Options include chemical treatment with residual insecticides targeting all life stages, heat treatment to raise room temperature to lethal levels for bugs and eggs, or a combination approach for severe infestations.',
      },
      {
        step: 'Preparation Confirmation',
        detail: 'We walk you through the preparation steps required before treatment day — laundering linens, clearing floor clutter, bagging items, and removing pets. Proper prep is the single biggest factor in treatment success. We won\'t start treatment until the space is properly prepared.',
      },
      {
        step: 'Primary Treatment',
        detail: 'Chemical treatments use EPA-registered insecticides applied to all bed bug harborage points — mattress seams, box spring interiors, bed frame joints, baseboards, outlet interiors, and furniture crevices. We apply residual products that continue killing newly hatched nymphs for weeks after treatment. Heat treatments raise the ambient temperature to 120–135°F and maintain it long enough to penetrate furniture and wall voids, killing bugs and eggs in a single session.',
      },
      {
        step: 'Follow-Up Verification',
        detail: 'Bed bug eggs are resistant to many chemical treatments and require a follow-up visit timed to the hatching cycle (7–14 days after initial treatment). We schedule and conduct a follow-up inspection and retreatment of any surviving activity. We don\'t consider the job complete until you confirm you have not had a single bite in two consecutive weeks.',
      },
    ],
    safetyPrep: [
      'Wash all bed linens, pillowcases, and clothing in the affected room on the hottest setting and dry on high heat for at least 30 minutes — place directly into sealed plastic bags after drying',
      'Remove all items from under the bed and from closet floors — bed bugs hide in clutter, and technicians need clear access to all surfaces',
      'Vacuum all mattresses, box springs, carpets, and upholstered furniture, then immediately dispose of the vacuum bag or canister contents in a sealed trash bag outside the home',
      'Remove pets and their bedding from the treatment area for at least 4 hours after chemical treatment; fish tanks must be covered and air pumps turned off during treatment',
      'Move furniture away from walls so technicians can access baseboards and electrical outlets on all sides',
      'Inform us of any household members with respiratory conditions, chemical sensitivities, or immune system concerns before treatment day so we can adjust our approach',
    ],
    aftercare: [
      'Do not wash or vacuum treated surfaces for at least 7 days after chemical treatment — residual insecticides need time to remain active and kill hatching nymphs',
      'Keep mattress encasements on for a minimum of 12 months after treatment — encasements trap any surviving bugs and prevent reinfestation from used furniture or visitors',
      'Monitor the bed, headboard, and baseboards nightly for the first two weeks — report any live bug sightings immediately so we can assess whether retreatment is needed',
      'Avoid bringing secondhand furniture, especially upholstered items, into your home without inspecting them thoroughly first — this is the most common source of re-infestation in Los Angeles',
      'In apartment buildings, alert building management if you see renewed activity — bed bugs travel through wall voids, plumbing chases, and electrical conduits between units',
      'Schedule your follow-up visit as directed (typically 10–14 days post-treatment) — do not skip this visit even if you have seen no activity',
    ],
    faqs: [
      {
        q: 'How long does bed bug treatment take in an average LA apartment?',
        a: 'A chemical treatment for a standard one-bedroom Los Angeles apartment typically takes 2–3 hours from start to finish. Larger units, heavy infestations, or heat treatments require more time — heat treatments for a one-bedroom run 6–8 hours to safely cycle the room temperature and cool down. We give you a specific time estimate after the initial inspection.',
      },
      {
        q: 'Will one treatment completely eliminate my bed bug infestation?',
        a: 'For chemical treatments, a single visit is rarely sufficient because bed bug eggs are partially resistant to insecticides. A follow-up visit 10–14 days later targets newly hatched nymphs before they can reproduce. Heat treatment has a higher single-visit success rate because heat kills eggs as effectively as live bugs. We build the follow-up visit into our standard pricing — it is not an extra charge.',
      },
      {
        q: 'My neighbor just told me they have bed bugs. What should I do?',
        a: 'Contact us for an inspection as soon as possible. In multi-unit LA apartment buildings — particularly the dense 1960s-era blocks common in neighborhoods like University Park, Jefferson Park, and Historic South-Central — bed bugs spread aggressively between units through wall voids, pipe chases, and shared fixtures. An early inspection often catches activity before a full infestation develops, and early treatment is significantly less expensive than treating a full infestation.',
      },
      {
        q: 'Are the chemicals you use safe for children and pets?',
        a: 'We use EPA-registered insecticides labeled for residential use. Children and pets need to be out of the treatment area during application and for approximately 4 hours after we finish, until treated surfaces are fully dry. We can walk you through the specific products we plan to use so you can make an informed decision. If you have an infant or a family member with specific chemical sensitivities, ask us about heat treatment as a chemical-free alternative.',
      },
      {
        q: 'How did I get bed bugs? I keep a clean home.',
        a: 'Bed bugs have no relationship to cleanliness. They are hitchhikers that travel on luggage, used clothing, secondhand furniture, and visitors\' belongings. In Los Angeles, common sources include hotel stays, rideshare vehicles, movie theaters, and used furniture purchased at swap meets or online marketplaces. High-density housing also means a neighbor\'s infestation can become yours through shared building infrastructure.',
      },
    ],
    schema: {
      serviceType: 'Bed Bug Extermination',
      description: 'Professional bed bug inspection, treatment, and eradication services in Los Angeles, CA. Chemical and heat treatment options available.',
    },
    relatedServices: ['heat-treatment', 'cockroach-control', 'flea-control'],
    category: 'insect',
  },
  {
    slug: 'termite-control',
    name: 'Termite Control',
    tagline: 'Protect your LA property from termites before they become a structural problem.',
    description: 'Termite control and inspection in Los Angeles. Drywood and subterranean termite treatment for homes and apartment buildings. Call (866) 755-1284.',
    heroHeadline: 'Termites Are Eating Your Home Right Now. Stop Them.',
    heroSubhead: 'Los Angeles termite infestations are year-round — our dry climate and aging housing stock create ideal conditions for both drywood and subterranean species. Early treatment prevents thousands in structural repairs.',
    symptoms: [
      'Small piles of pellets resembling sawdust or coffee grounds near windowsills, doorframes, or baseboards — these are drywood termite frass (excrement) pushed out of galleries',
      'Swarms of winged insects, often near windows and light sources, during spring and fall — termite swarmers look similar to flying ants but have equal-length wings and a thick waist',
      'Discarded wings in small piles on windowsills or near entry points after a swarm — swarmers shed their wings immediately after landing',
      'Wood that sounds hollow when tapped, particularly in door frames, window sills, floor joists, and structural beams',
      'Mud tubes — pencil-width tunnels of soil and debris — running along your foundation, concrete block walls, or floor joists (a definitive sign of subterranean termites)',
      'Doors and windows that suddenly stick or become difficult to open, caused by the structural wood warping as termites consume it',
      'Paint that bubbles or peels in a pattern that doesn\'t match water damage — termites working just beneath the paint surface can cause similar blistering',
    ],
    process: [
      {
        step: 'Termite Species Identification',
        detail: 'Effective termite treatment depends entirely on species. Los Angeles properties commonly host drywood termites (Incisitermes minor), which live inside wood with no soil contact, and Western subterranean termites (Reticulitermes hesperus), which build underground colonies and forage via mud tubes. Each requires a completely different treatment strategy. We inspect the exterior foundation, attic space, crawl space (if present), and interior wood members to identify species and map colony locations.',
      },
      {
        step: 'Infestation Mapping',
        detail: 'We probe and tap structural wood throughout the property to identify active galleries and damage extent. We document every affected area with notes and photos before recommending treatment. We assess whether the infestation is localized (treatable with spot or local treatments) or widespread (requiring whole-structure fumigation or a comprehensive liquid treatment perimeter).',
      },
      {
        step: 'Treatment Execution',
        detail: 'For drywood termites in localized areas, we inject termiticide foam or dust directly into galleries through small drilled holes, or use electro-gun treatment in accessible areas. Widespread drywood infestations may require whole-structure tenting (fumigation). For subterranean termites, we trench and treat the soil perimeter with a non-repellent termiticide (Termidor or equivalent) that foraging workers carry back into the colony, eliminating it from within. We may also install bait stations for ongoing monitoring.',
      },
      {
        step: 'Structural Assessment Notes',
        detail: 'Where we find damaged structural wood, we document the damage in detail and note whether repair is needed before or alongside treatment. We can refer you to licensed contractors for structural repairs. Termite treatment protects remaining healthy wood — it does not restore already-consumed wood.',
      },
      {
        step: 'Annual Inspection Program',
        detail: 'A single treatment eliminates the current infestation. An annual inspection catches new activity before it becomes a structural problem. Given LA\'s year-round termite pressure, we recommend scheduling a yearly walk-through of the property exterior, attic, and any substructure access points.',
      },
    ],
    safetyPrep: [
      'For whole-structure fumigation: vacate all humans, pets, plants, and food items not in sealed, fumigation-safe bags for the duration of the fumigation plus the required aeration period (typically 24–72 hours total)',
      'For subterranean termite soil treatment: keep children and pets away from treated soil areas and foundation perimeter until the treatment has dried and settled (typically 24 hours)',
      'For localized drywood treatments: clear the area immediately around treatment zones; drilling produces fine wood dust that should be vacuumed after treatment',
      'Notify your landlord or HOA if you are a tenant or condo owner — termite treatment in multi-unit buildings often requires coordination across units and common areas',
      'Pull back any landscaping, mulch, or wood materials in direct contact with the foundation before our arrival — wood-to-soil contact is a primary entry point for subterranean termites',
    ],
    aftercare: [
      'Do not disturb soil treatment zones along the foundation for at least 30 days — irrigation and digging can break the chemical barrier that protects your structure',
      'Repair any moisture sources that contribute to wood rot near the foundation — wet, softened wood is significantly more vulnerable to termite activity and nullifies treatment efficacy over time',
      'Do not seal the drilled holes in wood treatment areas yourself for at least 2 weeks — allow the termiticide to fully move through the gallery system before patching',
      'If you see new termite swarmers or frass after treatment, contact us immediately — new swarmers during the treated period warrant a reinspection to determine whether they are a new infestation or activity from an untreated area',
      'Maintain the inspection schedule — termite activity in neighboring properties (common in LA\'s dense residential neighborhoods) means reinfestation risk remains even after successful treatment',
    ],
    faqs: [
      {
        q: 'What type of termites are most common in the Los Angeles area?',
        a: 'Los Angeles has active populations of both drywood termites and Western subterranean termites. Drywood termites are particularly common in older wood-frame construction — the Craftsman bungalows, Spanish Colonial homes, and early 20th-century apartment buildings common in neighborhoods like University Park and Jefferson Park provide decades of untreated old-growth wood that drywood termites exploit. Subterranean termites are common throughout the region and expand their activity during the wet season when soil moisture is higher.',
      },
      {
        q: 'Do I need to tent my house for termites, or are there alternatives?',
        a: 'Whole-structure fumigation (tenting) is the most effective treatment for widespread drywood termite infestations but requires full vacation of the property for 24–72 hours. Localized infestations that are well-mapped and accessible can often be treated with targeted injection treatments without tenting. We make this determination during the inspection based on the extent and location of the infestation. We will not recommend fumigation unless it is genuinely necessary.',
      },
      {
        q: 'How quickly do termites cause serious structural damage?',
        a: 'A mature subterranean termite colony of several hundred thousand workers can consume approximately one foot of 2x4 wood framing in about five months. Drywood termite colonies are smaller and cause damage more slowly, but their presence in structural members like roof rafters, floor joists, and wall framing can accumulate into serious structural compromise over several years. The longer an infestation goes untreated, the more costly the repair — and in older LA homes, structural lumber is often irreplaceable old-growth wood.',
      },
      {
        q: 'My neighbor had their house tented. Should I be worried about my property?',
        a: 'Yes — a tenting in your immediate neighborhood is a signal that drywood termite pressure in your area is high. Swarmers travel on wind and can infest adjacent properties during swarm season. We recommend a precautionary inspection of your property, particularly if you have a wood-frame structure. An inspection costs far less than treating an established infestation.',
      },
    ],
    schema: {
      serviceType: 'Termite Control',
      description: 'Drywood and subterranean termite inspection, treatment, and prevention for homes and apartment buildings in Los Angeles, CA.',
    },
    relatedServices: ['fumigation', 'crawl-space-treatment', 'ant-control'],
    category: 'wood-destroying',
  },
  {
    slug: 'rat-rodent-control',
    name: 'Rat & Rodent Control',
    tagline: 'Seal entry points. Eliminate the colony. Keep them out permanently.',
    description: 'Rat and rodent control in Los Angeles. Roof rats, Norway rats, and mice. Full exclusion, trapping, and sanitation services. Call (866) 755-1284.',
    heroHeadline: 'Rats in Your Walls or Ceiling? We Find Them and Stop Them.',
    heroSubhead: 'Los Angeles has one of the highest urban rat populations in the country. Roof rats are especially common in dense residential areas. We eliminate the infestation and seal every entry point so they cannot return.',
    symptoms: [
      'Scratching, gnawing, or running sounds in walls, attic spaces, or ceiling voids — most active after midnight when rat activity peaks',
      'Dark, capsule-shaped droppings (about 1/2 inch for roof rats, 3/4 inch for Norway rats) in kitchen cabinets, along walls, in garages, or in attic insulation',
      'Grease smears and dark rub marks along baseboards, pipes, and structural beams — rats follow the same routes repeatedly and their fur leaves oily trails on surfaces',
      'Gnaw marks on food packaging, wood structural members, electrical wiring insulation, and PVC plumbing pipes',
      'Nesting materials — shredded insulation, paper, fabric, or plant material — in attic corners, wall voids, or in rarely-opened cabinet spaces',
      'Damaged or chewed fruit on trees in your yard, or half-eaten citrus on the ground beneath trees — roof rats are notorious for raiding fruit trees across LA neighborhoods',
      'Pets acting fixated on specific wall sections, cabinets, or corners — dogs and cats often detect rodent activity before their owners do',
      'Visible burrow holes along fence lines, near the base of walls, or in garden areas (Norway rat indicator)',
    ],
    process: [
      {
        step: 'Full Property Inspection',
        detail: 'We inspect the exterior and interior of the structure to determine rodent species, entry points, harborage areas, and the scale of activity. We check the roofline, eave gaps, foundation vents, utility penetrations, garage doors, and yard conditions. Active runways, droppings, rub marks, and nesting sites all tell us exactly what we are dealing with.',
      },
      {
        step: 'Entry Point Identification and Documentation',
        detail: 'Rodents enter structures through gaps as small as 1/4 inch (mice) or 1/2 inch (rats). We identify every potential entry point on the exterior — roof-to-fascia gaps, broken vent screens, pipe sleeve gaps, missing weep screed, open crawl space vents, garage door weatherstripping gaps, and utility line penetrations. We photograph and document each one.',
      },
      {
        step: 'Trapping and Population Reduction',
        detail: 'We place snap traps at documented activity points inside the structure — along walls, in the attic, and in any identified interior harborage areas. We use bait stations on the exterior in tamper-resistant boxes positioned where rodent activity has been confirmed. We check and service traps on a schedule appropriate to the infestation size.',
      },
      {
        step: 'Exclusion (Sealing Entry Points)',
        detail: 'Once trapping has reduced the active population, we seal identified entry points using durable materials — hardware cloth, copper mesh, concrete patching, and sheet metal flashing depending on the gap type and location. Exclusion is the permanent solution. Trapping alone without sealing entries only temporarily reduces population; new rats from outside will re-enter within weeks.',
      },
      {
        step: 'Sanitation Recommendations',
        detail: 'We identify and communicate the conditions on the property that attracted and sustained the rodent population — unsecured food sources, clutter, compost piles, fruit trees, dense vegetation against the structure, and accessible water sources. Eliminating attractants is essential for long-term success.',
      },
    ],
    safetyPrep: [
      'Do not handle rodent droppings, nesting material, or deceased rodents without heavy rubber gloves and a properly fitted N95 respirator — hantavirus, leptospirosis, and salmonella are genuine risks from rodent waste',
      'If you discover a rodent nest or significant droppings in a confined space, do not vacuum — vacuuming aerosolizes particles and increases disease exposure risk. Dampen the area with a bleach/water solution and remove with gloves',
      'Secure all food in hard-sided airtight containers before our visit — uncovered food sources attract rodents back into treated areas even after exclusion',
      'Move stored items away from walls in garages, attics, and storage areas to give technicians access to walls and floor perimeters',
      'Trim any branches that overhang or touch the roofline — roof rats (the dominant species in LA) are exceptional climbers that use trees as highway systems onto your roof',
    ],
    aftercare: [
      'Check snap traps daily for the first week and report any catches to us — high catch rates after treatment indicate either more population than estimated or a gap in our exclusion work that needs attention',
      'Do not seal bait station access or move exterior stations without contacting us — stations need to remain accessible for servicing and population monitoring',
      'Inspect the exterior of the structure quarterly for new gaps, especially after rains or seismic events that can shift foundation materials and create new entry points',
      'Cut back any vegetation touching the building exterior — shrubs, vines, and tree branches that contact the structure are the most common way roof rats re-establish access to a sealed building',
      'If you hear renewed nighttime activity in walls or ceilings within 60 days of our exclusion work, contact us immediately — our exclusion work is warranted and we will reinspect at no charge',
    ],
    faqs: [
      {
        q: 'What kind of rats are most common in Los Angeles?',
        a: 'The roof rat (Rattus rattus) is by far the most common rodent pest in Los Angeles residential neighborhoods. Roof rats are agile climbers that nest in attic spaces, palm trees, and dense shrubs, and travel along power lines, fences, and tree branches to access rooftops. Norway rats (Rattus norvegicus) are less common but present, particularly in areas near restaurants, commercial dumpsters, or active construction. House mice are common in all areas, particularly in kitchen and pantry spaces.',
      },
      {
        q: 'Why do I keep getting rats even after I set traps?',
        a: 'Trapping reduces the population inside your structure but does not stop new rats from entering. If there are open entry points in your roofline, eaves, foundation vents, or utility penetrations, new rats will replace trapped ones within days to weeks. Permanent control requires exclusion — physically sealing every gap 1/2 inch or larger. This is why our process always combines trapping with documented entry point sealing.',
      },
      {
        q: 'Are the poison baits you use safe around children and pets?',
        a: 'We use tamper-resistant bait stations that require a key or tool to open, preventing access by children and most pets. Stations are placed against exterior walls in locations not accessible to non-target animals. We discuss station placement with you before installation. If you have curious dogs, cats, or small children with access to the exterior, we can adjust placement strategy or use trap-only approaches in those specific areas.',
      },
      {
        q: 'How long does it take to fully resolve a rat infestation?',
        a: 'A typical residential rat infestation requires 2–4 weeks from initial treatment to confirmed resolution. The first week is heavy trapping to reduce the active population. Exclusion sealing typically happens after initial population reduction. A follow-up inspection at the 2–3 week mark confirms exclusion effectiveness and addresses any overlooked entry points. Active infestations in attics with nesting may take longer if attic remediation (removing contaminated insulation) is part of the scope.',
      },
      {
        q: 'Do I need to clean my attic after a rat infestation?',
        a: 'If rats have been nesting in attic insulation, the insulation will be contaminated with droppings, urine, and nesting debris. Contaminated insulation loses R-value, poses ongoing health risks from airborne particles, and can continue to attract rodents through scent marking. We recommend attic cleanout and insulation replacement for any attic with evidence of active nesting. We can assess this during our inspection and discuss the scope and cost.',
      },
    ],
    schema: {
      serviceType: 'Rat and Rodent Control',
      description: 'Rat elimination, exclusion sealing, and rodent prevention services for homes and buildings in Los Angeles, CA.',
    },
    relatedServices: ['rodent-proofing', 'wildlife-control', 'crawl-space-treatment'],
    category: 'rodent',
  },
  {
    slug: 'bee-removal',
    name: 'Bee Removal',
    tagline: 'Live bee removal and relocation — protecting people and pollinators.',
    description: 'Bee removal in Los Angeles. Live hive removal, Africanized bee treatment, and wasp control. Humane relocation when possible. Call (866) 755-1284.',
    heroHeadline: 'Bees Swarming or Nesting on Your Property? We Remove Them Safely.',
    heroSubhead: 'Los Angeles bee activity is year-round, with swarm season peaking in spring. Whether you have a new swarm or an established hive inside a wall, we remove them safely and prevent return.',
    symptoms: [
      'A cluster of bees hanging from a tree branch, under eaves, on a fence, or on outdoor furniture — this is a swarm that has temporarily stopped while scouts search for a permanent nest site',
      'Consistent bee traffic in and out of a specific point on your structure — a gap in the eaves, a weep hole in a brick wall, a soffit vent, or a hole in an exterior wall — indicating an established hive inside',
      'Bees entering and exiting the same small opening repeatedly at regular intervals, especially in the morning and afternoon when foraging activity peaks',
      'A low hum or buzzing sound coming from inside a wall, floor void, or ceiling space — established hives in wall cavities can contain tens of thousands of bees and significant amounts of wax and honey',
      'Honey or wax staining on walls or ceilings — in warm LA temperatures, an unprotected hive inside a wall can melt, causing honey to seep through drywall and cause significant structural and cosmetic damage',
      'Increased bee aggression near a specific area of your property — bees defend their established hive aggressively, especially Africanized honey bees, which are present in Southern California',
      'Dead bees accumulating on windowsills inside your home — may indicate a hive in a wall void that has established long enough that normal bee die-off is seeping into the living space',
    ],
    process: [
      {
        step: 'Swarm vs. Established Hive Assessment',
        detail: 'The approach and cost differ significantly between a swarm (bees temporarily clustering without comb or honey) and an established hive (bees that have built wax comb, brood, and honey stores inside a structure). We assess the situation to determine what we are dealing with and recommend the appropriate removal method.',
      },
      {
        step: 'Africanized Bee Screening',
        detail: 'Africanized honey bees (AHB) are present throughout Southern California and Los Angeles. AHB look identical to European honey bees but are significantly more defensive and will respond to disturbance in much larger numbers over a much larger radius. We assess behavioral indicators at a safe distance before approaching. If Africanized traits are suspected, we adjust our protective equipment and removal method accordingly.',
      },
      {
        step: 'Live Swarm Removal',
        detail: 'A fresh swarm — one that has been resting for less than 24–48 hours and has not begun building comb — can typically be collected into a container and relocated to a beekeeper without structural work. We use a collection box or bee vacuum to gather the cluster, confirm the queen is included, and remove the cluster entirely. We then treat the resting site with a repellent to discourage future swarms from clustering in the same location.',
      },
      {
        step: 'Established Hive Removal',
        detail: 'Hives inside walls, attics, or structural cavities require opening the structure to access the hive. We remove all wax comb, honey, and brood — leaving any of these behind guarantees that wax moths will infest the cavity and that the residual honey scent will attract new swarms for years. After full hive removal, we seal the access point and surrounding area to prevent re-entry.',
      },
      {
        step: 'Site Repair Coordination',
        detail: 'Opening a wall or soffit to remove a hive creates a repair need. We coordinate with you on patching the access point — for smaller openings, we can patch; for larger structural access, we recommend a licensed contractor. We never leave an open cavity after removal.',
      },
    ],
    safetyPrep: [
      'Do not disturb a bee swarm or hive before our arrival — vibration, loud noise, and attempting to spray bees with water or chemicals can trigger a defensive response',
      'Keep children, pets, and non-essential people inside and away from windows facing the bee activity while we work',
      'If anyone in your household has a known bee sting allergy, ensure they have their epinephrine auto-injector available and are inside a sealed area of the home during our work',
      'Do not attempt to seal the bee entry point yourself before our arrival — sealing the entry while bees are inside traps them and forces them to find alternate exits, potentially into your living space',
      'Mark the entry/exit point where you see bee traffic with a small flag or tape so we can locate it quickly on arrival',
      'If the hive is inside a wall and you hear the buzzing getting louder indoors, it may indicate the bees are moving toward the interior — contact us immediately and avoid the area',
    ],
    aftercare: [
      'After live hive removal from a structural cavity, keep the repaired access point sealed for at least one full season — residual wax and honey scent can persist and attract new swarms',
      'Inspect the exterior of your structure annually for new gaps, particularly around eaves, soffits, water meter boxes, and utility penetrations — these are preferred bee entry points',
      'If you notice bees investigating the same location where we previously removed a hive, contact us promptly — scout bees checking a former hive site is an early warning sign of impending reinfestation',
      'Have any honey staining on walls or ceilings inspected and remediated — residual honey inside a wall void can attract ants, wax moths, and new bee swarms long after the original hive is gone',
      'Consider planting bee-friendly plants away from your home in a deliberate garden space to give local bee populations an attractive alternative to nesting in your structure',
    ],
    faqs: [
      {
        q: 'Are the bees on my property Africanized? How can I tell?',
        a: 'Africanized honey bees (AHB) are physically indistinguishable from European honey bees without laboratory testing. Behavioral indicators include: responding to disturbance in unusually large numbers, pursuing threats over a very large distance (hundreds of feet rather than tens of feet), and remaining agitated for extended periods. AHB are established throughout Southern California including Los Angeles. We treat every bee situation with appropriate caution and assess behavioral indicators before approaching. Do not attempt to determine bee type by disturbing the colony yourself.',
      },
      {
        q: 'Why can\'t I just spray the bees with wasp killer from the hardware store?',
        a: 'Over-the-counter aerosol insecticides applied to an established hive typically kill some forager bees but fail to penetrate to the queen and brood. The result is an agitated colony that becomes significantly more defensive. For hives inside structures, spraying also kills bees inside the wall without removing the hive — the decomposing bees, melting wax, and fermenting honey then attract secondary pests including ants, beetles, and wax moths. Proper removal requires physically removing all comb and colony material.',
      },
      {
        q: 'How much does bee removal cost in Los Angeles?',
        a: 'A fresh swarm removal that requires no structural access is typically the most straightforward and affordable service. Established hive removal requiring wall or soffit access is priced based on access difficulty, hive size, and repair scope. We provide a firm quote after assessing the situation — we do not quote bee jobs accurately without seeing the specific location and access point. Contact us and describe what you are seeing for an initial estimate range.',
      },
      {
        q: 'When is bee swarm season in Los Angeles?',
        a: 'Los Angeles bee swarm season runs from roughly February through June, peaking in March through May when flowering plants produce the most nectar and colonies are at peak population. However, because LA\'s climate is mild year-round, swarms and new infestations can occur in any month. Fall secondary swarm events are common when colonies split before winter in areas with sufficient warm-weather foraging. If you are seeing swarm activity outside the traditional spring window, it may indicate an Africanized colony, which swarms more frequently than European honey bees.',
      },
    ],
    schema: {
      serviceType: 'Bee Removal',
      description: 'Live bee removal, swarm collection, and established hive extraction for properties in Los Angeles, CA. Africanized bee-aware service.',
    },
    relatedServices: ['wasp-control', 'wildlife-control'],
    category: 'insect',
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    tagline: 'Eliminate cockroach infestations at the source — not just the ones you can see.',
    description: 'Professional cockroach control in Los Angeles. German cockroach, American cockroach, and Oriental cockroach treatment for homes and apartments. Call (866) 755-1284.',
    heroHeadline: 'Cockroaches in Your Kitchen or Bathroom? We Eliminate Them Fast.',
    heroSubhead: 'Los Angeles cockroach infestations thrive in the city\'s warm climate and dense housing stock. German cockroaches spread rapidly through apartment buildings while American cockroaches exploit the city\'s aging sewer infrastructure. We identify the species and eliminate the colony.',
    symptoms: [
      'Live cockroaches spotted in the kitchen or bathroom, especially when you turn on a light at night — cockroaches are nocturnal and daytime sightings often indicate a large, overcrowded infestation',
      'Small, dark droppings resembling ground pepper or coffee grounds in kitchen cabinet corners, behind the refrigerator, under the stove, and in bathroom vanity drawers — German cockroach frass is a primary allergen trigger',
      'Egg cases (oothecae) — brown, capsule-shaped cases about 8mm long — glued to the inside of cabinet hinges, behind appliances, or tucked into cardboard boxes in pantries',
      'A musty, oily odor in the kitchen or bathroom that intensifies when cabinets are opened — large German cockroach infestations produce a distinctive pheromone smell',
      'Smear marks on walls or surfaces near water sources — cockroaches leave dark smears where they travel regularly, particularly along the backs of counters and walls near the stove and sink',
      'Shed cockroach skins in cabinet corners, inside appliance motor housings, or behind refrigerator drip pans — cockroaches molt multiple times and shed skins are a reliable sign of active harborage',
      'Cockroaches emerging from drain openings or appearing from under the refrigerator or stove — American cockroaches in LA frequently enter through sewer connections and floor drains in older homes',
    ],
    process: [
      {
        step: 'Species Identification and Harborage Mapping',
        detail: 'German cockroaches (Blattella germanica) and American cockroaches (Periplaneta americana) require different treatment strategies. German cockroaches are small, fast-reproducing, and live in tight harborages inside kitchen appliances and cabinet voids. American cockroaches are large peridomestic cockroaches that enter from outdoors and sewer systems. We identify the species and map every harborage point before selecting a treatment approach.',
      },
      {
        step: 'Gel Bait Application',
        detail: 'For German cockroaches, high-potency gel bait (formulations such as Advion or Maxforce) applied in precise small placements directly inside harborage zones is the most effective treatment. Bait is placed in the hinges of cabinet doors, inside appliance voids, beneath the refrigerator, inside the motor housing of dishwashers, and at the back of drawer channels. Cockroaches feed on the bait and carry it back to the harborage, eliminating the entire population including nymphs and egg-bearing females.',
      },
      {
        step: 'Residual Insecticide Treatment',
        detail: 'We apply residual insecticides to cracks, voids, and perimeter entry points to intercept foraging cockroaches and prevent reinfestation from adjacent units. In multi-unit LA apartment buildings, cockroach pressure from neighboring units is a constant reinfestation risk — perimeter treatment creates a chemical barrier at shared walls, utility penetrations, and plumbing chases.',
      },
      {
        step: 'Insect Growth Regulator (IGR) Application',
        detail: 'We incorporate insect growth regulators into the treatment protocol to disrupt the cockroach reproductive cycle. IGRs prevent nymphs from maturing into reproductive adults and cause female egg cases to be non-viable, breaking the breeding cycle and preventing population recovery even if some adults survive initial treatment.',
      },
      {
        step: 'Follow-Up Inspection and Retreatment',
        detail: 'We return 2–3 weeks after initial treatment to assess bait consumption, check for surviving activity, and replace depleted bait placements. German cockroach infestations in heavily infested kitchens often require 2–3 service visits to fully collapse the population. We consider the job complete only when there is no evidence of live activity on reinspection.',
      },
    ],
    safetyPrep: [
      'Empty all kitchen cabinets completely before treatment — gel bait must be placed directly in cabinet interiors, and clutter prevents thorough placement and inspection',
      'Pull the refrigerator and stove away from the wall to allow access to the motors and the wall void behind them — these are primary German cockroach harborage zones',
      'Do not apply any over-the-counter cockroach sprays or foggers before our visit — aerosol insecticides repel cockroaches away from bait placements and dramatically reduce treatment effectiveness',
      'Remove all pet food bowls and store pet food in sealed hard-sided containers — competing food sources reduce cockroach bait consumption',
      'Clean grease buildup from the stovetop and behind the stove before treatment — grease residue is a primary food source for German cockroaches and competes with bait attractiveness',
      'Inform us if you live in a multi-unit building and know which neighboring units also have cockroach issues — coordinated treatment across multiple units is significantly more effective than single-unit treatment',
    ],
    aftercare: [
      'Do not wipe out cabinet interiors or clean areas where bait was placed for at least 3 weeks — cleaning removes bait placements and eliminates the residual that cockroaches track back to harborage sites',
      'Do not use aerosol sprays, foggers, or other pesticide products in the kitchen or bathroom during the treatment period — repellent products disrupt bait uptake and undermine the entire treatment',
      'Seal cracks and gaps around plumbing penetrations under sinks and behind the stove with silicone caulk after the treatment period — these are the primary entry routes for cockroaches from neighboring units and from the exterior',
      'Store all food in sealed containers and promptly clean up spills — available food sources allow a recovering cockroach population to rebuild even after effective treatment',
      'Report any renewed activity at the 3–4 week mark — some level of activity immediately after treatment is normal as surviving cockroaches contact bait, but sustained activity after 4 weeks warrants a retreatment visit',
    ],
    faqs: [
      {
        q: 'Why do I keep getting cockroaches even though I keep a clean kitchen?',
        a: 'German cockroaches in Los Angeles apartment buildings spread through shared plumbing walls, electrical conduit runs, and gaps around utility penetrations. A clean unit next to an infested unit will typically develop cockroaches within weeks. Cleanliness reduces food availability but does not prevent cockroaches from entering through structural pathways. Effective control in multi-unit buildings requires treating the source units, not just the affected ones.',
      },
      {
        q: 'Are cockroach foggers or bug bombs effective?',
        a: 'Total-release foggers (bug bombs) are consistently ineffective against German cockroach infestations and often make them worse. Foggers disperse a repellent aerosol that drives cockroaches deeper into wall voids and appliance harborages rather than killing them. Studies have shown that fogger treatment in apartments significantly reduces gel bait effectiveness for months afterward. We never recommend foggers for cockroach control.',
      },
      {
        q: 'How long does it take to get rid of a German cockroach infestation?',
        a: 'A moderate German cockroach infestation in a single kitchen typically shows significant reduction within 7–10 days of proper gel bait treatment. Complete elimination of a heavy infestation usually requires 2–3 treatment visits over 4–6 weeks. Faster resolution depends on thorough prep, no competing food sources, and avoiding pesticide products that interfere with bait. Infestations that have been present for months with heavy egg case accumulation take longer to fully collapse.',
      },
      {
        q: 'The large cockroaches I see seem to come from drains. Is this normal in LA?',
        a: 'Yes. American cockroaches (also called palmetto bugs or water bugs) are common throughout Los Angeles and frequently enter homes through floor drains, toilet bases, and sewer connections — particularly in older homes in neighborhoods like South Central, East LA, and Boyle Heights where aging sewer infrastructure provides extensive cockroach habitat. These large cockroaches are not as prolific indoors as German cockroaches but indicate a sewer-connected entry point that should be addressed.',
      },
      {
        q: 'Do cockroaches actually cause health problems?',
        a: 'Yes, significantly. German cockroach allergens (shed skins, frass, and body parts) are a leading trigger for asthma attacks and allergic reactions, particularly in children. Studies in urban housing have linked German cockroach allergen levels directly to asthma hospitalization rates. Cockroaches also mechanically transmit pathogens including Salmonella, E. coli, and Listeria by walking across food preparation surfaces after traveling through sewage and waste. Eliminating a cockroach infestation is a genuine public health measure.',
      },
    ],
    schema: {
      serviceType: 'Cockroach Control',
      description: 'German and American cockroach elimination using gel bait, residual insecticides, and growth regulators for homes and apartments in Los Angeles, CA.',
    },
    relatedServices: ['ant-control', 'flea-control', 'bed-bug-extermination'],
    category: 'insect',
  },
  {
    slug: 'ant-control',
    name: 'Ant Control',
    tagline: 'Stop ant invasions at the colony — not just the trail you can see.',
    description: 'Ant control in Los Angeles. Argentine ants, carpenter ants, fire ants, and odorous house ants. Exterior barrier treatment and baiting programs. Call (866) 755-1284.',
    heroHeadline: 'Ants Invading Your Home? We Eliminate the Colony, Not Just the Trail.',
    heroSubhead: 'Los Angeles is one of the most ant-dense urban areas in the country. Argentine ants form super-colonies that span entire neighborhoods. Effective control requires targeting the colony, not just the foragers you see inside.',
    symptoms: [
      'Visible ant trails — typically along baseboards, countertops, window sills, and plumbing lines — especially leading to food sources, water, or exterior entry points',
      'Ant activity in kitchen cabinets, pantry areas, under sinks, or near fruit bowls — Argentine ants in LA are attracted to sweet foods, grease, and moisture and will exploit any available food source',
      'Sawdust-like frass piles near wooden structural members, window frames, door frames, or deck wood — a sign of carpenter ant activity, which can indicate moisture-damaged wood inside the structure',
      'Winged ants (swarmers) emerging from walls, floor voids, or exterior wood — carpenter ant swarm season in Los Angeles typically runs February through April',
      'Ant mounds in the yard, near the foundation, in lawn areas, or in potted plant soil — fire ants and other mound-building species are present in LA County and their mounds near the foundation represent a direct structural entry pathway',
      'Ants appearing after rain — Argentine ants flood into structures during wet weather to escape saturated soil, making post-rain ant invasions one of the most common pest complaints in Los Angeles',
      'Lines of ants following irrigation lines, drip tubing, or water meter box edges — moisture sources are critical ant attractants, especially during LA\'s dry summers',
    ],
    process: [
      {
        step: 'Species Identification',
        detail: 'Ant species identification determines treatment strategy entirely. Argentine ants (Linepithema humile) — the dominant ant species in most LA neighborhoods — respond well to slow-acting bait that workers carry back to the super-colony. Carpenter ants require investigation of moisture-damaged wood. Fire ants require direct mound treatment. Odorous house ants have treatment nuances distinct from Argentine ants. We identify the species before recommending any treatment.',
      },
      {
        step: 'Exterior Perimeter Treatment',
        detail: 'We apply a residual insecticide band around the exterior foundation, treating the soil-to-structure junction, weep screed openings, cracks in the foundation, and entry points around utility penetrations. This exterior barrier intercepts foraging ants before they enter the structure and significantly reduces interior pressure. We also treat the base of fences, retaining walls, and any exterior structures attached to the home.',
      },
      {
        step: 'Bait Placement',
        detail: 'For Argentine ant infestations, we place slow-acting liquid or gel bait formulations at documented foraging trails both exterior and interior. Argentine ants are polydomous — their super-colonies span multiple properties — and bait carried back to the colony is far more effective long-term than contact kills. We use bait formulations and placements appropriate to the current food preference of the local colony.',
      },
      {
        step: 'Interior Crack and Crevice Treatment',
        detail: 'Interior ant activity is addressed with targeted crack and crevice application of residual insecticide or additional bait placements along active trails, around plumbing penetrations under sinks, and in the gaps behind appliances. We do not broadcast-spray interior living areas — targeted placements are more effective and minimize chemical exposure.',
      },
      {
        step: 'Entry Point Sealing Recommendations',
        detail: 'We document and communicate the specific entry points ants are using — gaps around plumbing, unsealed utility penetrations, cracks in the foundation, gaps at door thresholds — and recommend caulking or sealing these points to reduce ongoing ant pressure. Physical exclusion combined with chemical treatment produces significantly more durable results than chemical treatment alone.',
      },
    ],
    safetyPrep: [
      'Remove all food items from countertops and store in sealed containers before interior treatment — available food sources compete with bait and reduce bait uptake',
      'Pull kitchen appliances away from walls to expose baseboards and floor gaps where ants trail — technicians need clear access to these areas',
      'Do not apply any store-bought ant spray to trails or entry points before our visit — contact insecticides scatter ant colonies and disrupt bait placements, making treatment significantly less effective',
      'Trim back shrubs, ground cover, and tree branches that touch the exterior walls — dense vegetation against the structure creates a highway for ant entry and reduces the effectiveness of exterior perimeter treatment',
      'Empty and clean under-sink cabinet areas where ant activity is heaviest — technicians need clear access to treat the cabinet perimeter and plumbing penetrations',
    ],
    aftercare: [
      'Do not clean up ant bait placements or wipe down treated surfaces for at least 2 weeks — baits need time to be discovered, consumed, and carried back to the colony',
      'Expect to continue seeing ants for several days to a week after bait treatment as workers continue foraging and contacting bait — activity should decline steadily by day 5–10',
      'Fix any dripping faucets, leaking pipes under sinks, or standing water near the foundation — moisture elimination dramatically reduces the ant pressure that drives ants indoors, especially during dry LA summers',
      'Keep all outdoor compost bins, food waste, and fallen fruit from trees in sealed containers — Los Angeles properties with citrus, avocado, and stone fruit trees are particularly attractive to Argentine ants',
      'If ant activity continues at the same level beyond 2 weeks after treatment, contact us for a retreatment — persistent activity may indicate a bait aversion (Argentine ants can shift food preferences) requiring a bait formulation change',
    ],
    faqs: [
      {
        q: 'Why are ants such a persistent problem in Los Angeles specifically?',
        a: 'Los Angeles is the epicenter of the Argentine ant super-colony invasion on the West Coast. Argentine ants form mega-colonies that can span thousands of acres — entire LA neighborhoods are effectively occupied by a single interconnected colony. This means that even after successful treatment, neighboring properties continuously replenish ant pressure on treated areas. Ongoing maintenance treatment is often necessary in high-pressure neighborhoods.',
      },
      {
        q: 'Why do I get ants every time it rains?',
        a: 'Argentine ants nest in soil and are driven to the surface and into structures when rain saturates the ground. This is an instinctive response to flooding conditions, not a reaction to anything you are doing inside your home. Post-rain ant invasions are one of the most consistent pest complaints in Los Angeles. A well-maintained exterior perimeter treatment before the rainy season dramatically reduces the intensity of post-rain invasions.',
      },
      {
        q: 'Do I have carpenter ants? Are they damaging my home?',
        a: 'Carpenter ants (Camponotus species) are present in Los Angeles, particularly in hillside communities and areas with mature tree cover like Silver Lake, Los Feliz, and the San Gabriel Valley foothills. Carpenter ants do not eat wood — they excavate galleries in wood that is already soft from moisture damage. If you have carpenter ants, there is likely a moisture problem (leaking roof, plumbing leak, damaged stucco) creating soft wood they can exploit. Treating the ants without addressing the moisture source allows the colony to return.',
      },
      {
        q: 'Is ant control safe for my pets and the ants I want in my garden?',
        a: 'Our exterior perimeter treatment uses low-toxicity residual insecticides applied to the foundation band — pets should be kept away from treated areas until dry (typically 30–60 minutes). Bait placements are in small, targeted amounts in inaccessible locations. Beneficial ants in garden areas away from the structure are generally not affected by foundation perimeter treatments. We can discuss the specific products and their environmental profiles before treatment.',
      },
    ],
    schema: {
      serviceType: 'Ant Control',
      description: 'Argentine ant, carpenter ant, and fire ant control services for homes and properties in Los Angeles, CA. Exterior barrier and baiting programs.',
    },
    relatedServices: ['cockroach-control', 'termite-control', 'spider-control'],
    category: 'insect',
  },
  {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    tagline: 'Reclaim your outdoor spaces from mosquitoes — season-long protection.',
    description: 'Mosquito control in Los Angeles. Targeted larviciding, adulticide barrier treatment, and breeding site elimination. Call (866) 755-1284 for residential and commercial service.',
    heroHeadline: 'Mosquitoes Ruining Your Yard? We Eliminate Breeding Sites and Adults.',
    heroSubhead: 'Los Angeles mosquito pressure has intensified with the spread of the invasive Aedes aegypti and Aedes albopictus species — day-biting mosquitoes that breed in tiny water sources and are much harder to control than native species. We target breeding sites and adults to restore your outdoor comfort.',
    symptoms: [
      'Bites occurring during daytime hours, particularly in the morning and late afternoon — native Culex mosquitoes bite at dusk and dawn, but the invasive Aedes aegypti (yellow fever mosquito) bites aggressively during the day',
      'Bites concentrated on the ankles and lower legs while outdoors — Aedes aegypti is a low-flying species that preferentially bites below the knee, a behavior that distinguishes it from other mosquito species',
      'Visible mosquito activity in heavily planted areas of your yard, particularly around dense shrubs, ground cover, and shade trees where adults rest during daylight hours',
      'Standing water in saucers under potted plants, bird baths, clogged gutters, low spots in the lawn, or containers left outside — Aedes aegypti breeds in containers as small as a bottle cap and can complete a breeding cycle in less than a week',
      'Mosquito larvae (wigglers) visible in standing water sources — larvae are small, comma-shaped, and visible near the surface of still water sources',
      'Mosquito complaints from neighbors — Aedes aegypti populations spread quickly through urban neighborhoods and a high-pressure yard typically reflects conditions across several adjacent properties',
    ],
    process: [
      {
        step: 'Property Assessment and Breeding Site Survey',
        detail: 'We walk the entire property to identify every standing water source and potential breeding site — potted plant saucers, bird baths, clogged gutters, tree holes, tarps and tarped items, rain barrels, pool equipment, downspout splash blocks, and any low-lying areas that hold water after irrigation. In Los Angeles, the invasive Aedes aegypti breeds in micro-containers that most property owners would not recognize as mosquito habitat.',
      },
      {
        step: 'Larviciding',
        detail: 'Water sources that cannot be eliminated (ornamental ponds, rain barrels, tree cavities) are treated with EPA-registered larvicides — Bacillus thuringiensis israelensis (Bti) biological granules or long-lasting dunks — that kill mosquito larvae without harming other wildlife, pets, or birds. Eliminating larvae before they emerge as adults is the most efficient and environmentally responsible component of mosquito control.',
      },
      {
        step: 'Adult Barrier Treatment',
        detail: 'We apply a residual adulticide treatment to the vegetation, shrubs, and shaded resting areas on the property where adult mosquitoes harbor during the day. Treatment is focused on the underside of leaves and dense ground cover where mosquitoes rest. This treatment significantly reduces adult populations and provides residual protection for 3–4 weeks depending on weather and irrigation.',
      },
      {
        step: 'Source Reduction Recommendations',
        detail: 'We document every correctable breeding site and provide specific recommendations for elimination — emptying or treating saucers, clearing gutters, drilling drainage holes in containers, leveling low spots in lawn areas, and adjusting irrigation timing to prevent standing water. Source reduction is the most durable mosquito control measure and reduces the frequency of retreatment needed.',
      },
    ],
    safetyPrep: [
      'Walk the property before our visit and empty any standing water containers you can identify — saucers under pots, buckets, toys, tarps, and any item holding water',
      'Clear vegetation and ground cover where possible to improve access for adulticide application to resting sites',
      'Keep pets and children indoors during treatment application and for 30 minutes after application while the treatment dries',
      'Inform us of any ornamental ponds, water features, or rain collection systems so we can apply appropriate larvicide rather than adulticide near water sources',
      'Note any areas of the yard where mosquito activity is heaviest so we can prioritize those resting and breeding sites during our survey',
    ],
    aftercare: [
      'Check and empty all standing water sources weekly throughout mosquito season — Aedes aegypti can complete a full breeding cycle in 7–10 days, so weekly source reduction is necessary between treatments',
      'Maintain gutters in clear condition — clogged gutters are one of the highest-volume mosquito breeding sites in Los Angeles residential properties',
      'Reapply larvicide dunks to ornamental ponds and water features every 30 days through the season, or contact us for a service visit',
      'Schedule barrier retreatment every 3–4 weeks during peak season (May through October in LA) for continuous protection',
      'Report any areas of renewed high mosquito pressure — daytime biting activity that resumes quickly after treatment may indicate a breeding site we missed that needs attention',
    ],
    faqs: [
      {
        q: 'Why are mosquitoes worse in Los Angeles now than they used to be?',
        a: 'The invasive Aedes aegypti mosquito has established itself throughout the Los Angeles basin over the past decade. Unlike native Culex mosquitoes, Aedes aegypti bites during the day, breeds in tiny amounts of water, and lives in close association with humans rather than near larger water bodies. This species is far more difficult to control with conventional mosquito management and has dramatically increased the bite pressure residents experience in their own yards.',
      },
      {
        q: 'Can mosquitoes in Los Angeles transmit diseases?',
        a: 'Yes. Culex mosquitoes in Los Angeles are established vectors of West Nile Virus, which has caused illness and deaths in LA County residents. The invasive Aedes aegypti is a vector for dengue fever, Zika virus, chikungunya, and yellow fever — diseases not currently transmitted locally but a public health concern given the mosquito\'s established presence. LA County Vector Control monitors and responds to disease activity annually.',
      },
      {
        q: 'My neighbor has a neglected pool. Can I do anything about it?',
        a: 'A neglected, green pool in Los Angeles can produce thousands of mosquitoes per week and is a significant community-level problem. You can report neglected pools and mosquito breeding sites to the Los Angeles County West Vector Control District or the Greater Los Angeles County Vector Control District depending on your municipality. We can treat your property to reduce adult mosquito pressure from neighboring sources, but the source itself needs to be reported to vector control authorities.',
      },
      {
        q: 'Are the treatments safe for my pets, birds, and the bees in my garden?',
        a: 'Our larvicide products (Bti) are highly selective biological agents that affect only mosquito and fungus gnat larvae and are safe for birds, fish, beneficial insects, and mammals. Our adulticide treatments are applied only to vegetation resting sites and are not applied to flowering plants to minimize contact with pollinators. Pets should be kept away from treated areas for 30 minutes after application. We can discuss specific product profiles with you before treatment.',
      },
    ],
    schema: {
      serviceType: 'Mosquito Control',
      description: 'Mosquito breeding site elimination, larviciding, and barrier treatment for residential and commercial properties in Los Angeles, CA.',
    },
    relatedServices: ['fly-control', 'wasp-control', 'spider-control'],
    category: 'insect',
  },
  {
    slug: 'wasp-control',
    name: 'Wasp & Hornet Control',
    tagline: 'Safe removal of wasp and hornet nests — protecting your family and guests.',
    description: 'Wasp and hornet removal in Los Angeles. Yellow jackets, paper wasps, mud daubers, and bald-faced hornets. Nest removal and prevention. Call (866) 755-1284.',
    heroHeadline: 'Wasp Nest on Your Property? We Remove It Safely.',
    heroSubhead: 'Wasp and yellow jacket activity in Los Angeles peaks in late summer and fall when colonies are at maximum size and most aggressive. A nest near a doorway, playground, or outdoor dining area is a genuine sting risk. We remove it completely.',
    symptoms: [
      'A visible paper nest — gray, layered, and football- to basketball-sized — attached to eaves, under deck ledges, inside BBQ grills, in attic vents, or in dense shrubs',
      'Consistent wasp traffic entering and exiting a specific point in the ground, a wall void, or a structural gap — yellow jackets frequently nest underground or inside wall cavities and are identified by the steady stream of workers entering the opening',
      'Mud tube structures on walls, under eaves, or on outdoor furniture — mud daubers (Sceliphron species) build individual mud chambers for egg-laying and are largely non-aggressive but indicate active wasp presence',
      'Increased wasp activity near food at outdoor gatherings — yellow jackets are strongly attracted to protein foods and sweet drinks in late summer and fall as their colony\'s need for protein increases',
      'Multiple wasp stings to people or pets in a specific area of the yard without a visible nest — the nest may be underground, in a dense hedge, or in a structure void that is not immediately apparent',
      'Wasps entering the interior of the home through gaps around windows, doors, or vents — late fall yellow jacket workers sometimes enter structures looking for overwintering sites',
    ],
    process: [
      {
        step: 'Species and Nest Location Assessment',
        detail: 'Paper wasps (Polistes species), yellow jackets (Vespula and Dolichovespula species), bald-faced hornets, and mud daubers each require a different removal approach. Paper wasp nests are open-faced and accessible. Yellow jacket nests are frequently concealed in ground burrows or wall voids. Bald-faced hornet nests are enclosed and large. We assess the species, nest location, and size before selecting a removal method.',
      },
      {
        step: 'Protective Equipment and Timing',
        detail: 'Wasp removal work requires full protective equipment. We schedule wasp jobs for early morning or evening when most foraging workers are inside the nest and the colony is least active. Attempting nest removal at mid-day when foragers are fully active and defensive is the most common cause of sting incidents during DIY attempts.',
      },
      {
        step: 'Nest Treatment',
        detail: 'We apply an appropriate insecticide directly into or onto the nest — residual dust into ground openings and wall voids for yellow jackets, aerosol pyrethroid for accessible paper wasp and hornet nests. Treatment is applied in a single rapid application to prevent alarming the colony before the product takes effect. For wall void nests, we may need to create a small access point to treat the nest interior.',
      },
      {
        step: 'Nest Removal',
        detail: 'Once the colony is eliminated, we physically remove the nest structure. For ground nests and wall voids, we remove the comb and colony material and seal the entry point. Leaving a dead nest in place — particularly a yellow jacket nest inside a wall void — creates conditions for secondary pests (beetles, moths) and the residual pheromones attract new queens looking for nesting sites the following season.',
      },
      {
        step: 'Prevention Assessment',
        detail: 'We inspect for conditions that attract nesting wasps — open eave voids, unsealed wall gaps, soil conditions conducive to ground nesting, and accessible food sources. We provide recommendations for preventing nest establishment in future seasons.',
      },
    ],
    safetyPrep: [
      'Do not disturb the nest or attempt to spray it with over-the-counter products before our arrival — agitated yellow jackets and paper wasps release alarm pheromones that recruit other colony members to sting',
      'Keep children, pets, and non-essential people away from the nest area and well inside the home during our removal work',
      'If the nest is near an exterior door, use an alternate entrance to your home until after removal to avoid disturbing foraging workers',
      'If anyone in your household has a known venom allergy, ensure they are inside with their epinephrine auto-injector available before our work begins',
      'Mark the nest location or entry point clearly if it is not immediately visible so our technician can locate it on arrival without approaching too closely before suited up',
    ],
    aftercare: [
      'Expect some wasp activity near the former nest site for 24–48 hours after treatment as foraging workers that were away from the nest return and find the colony eliminated',
      'Seal the entry point of any wall void or eave gap where a yellow jacket nest was located to prevent future queens from selecting the same cavity as a nesting site',
      'Remove any exposed food waste, open compost, and standing protein food sources from outdoor areas — yellow jackets are primarily driven to human areas by food availability',
      'Inspect eave voids, soffit gaps, and ground areas for new nest starts in early spring before colonies develop to a defensive size — small nests detected early are far easier to treat than mature colonies',
      'If you see renewed wasp activity at the treatment site within 2 weeks, contact us — some yellow jacket wall void treatments require a follow-up to address colony members that relocated within the wall',
    ],
    faqs: [
      {
        q: 'What is the difference between wasps, yellow jackets, and hornets in Los Angeles?',
        a: 'Paper wasps (Polistes species) are the slim, long-legged wasps that build open, umbrella-shaped nests under eaves and are relatively docile unless directly disturbed. Yellow jackets (Vespula species) are stocky, aggressive wasps that frequently nest underground or in wall voids and are the most common sting-incident species in LA. Bald-faced hornets build the large, enclosed gray paper nests and are highly defensive within 15–20 feet of their nest. All three species are present in Los Angeles, with paper wasps and yellow jackets being most common.',
      },
      {
        q: 'Why are yellow jackets so aggressive in late summer and fall?',
        a: 'Yellow jacket colonies reach their maximum population size in August through October in the Los Angeles climate. At peak colony size, food demand for developing larvae is highest, driving forager workers to aggressively pursue protein food sources. Simultaneously, the colony becomes more defensive as it protects large stores of comb and brood. The combination of peak numbers, food competition, and heightened defensiveness makes late summer and fall the highest-risk period for sting incidents.',
      },
      {
        q: 'Can I remove a wasp nest myself?',
        a: 'Small paper wasp nests (fewer than 10 cells, no workers present) can sometimes be knocked down at night with protective covering. Any nest with active workers — particularly yellow jackets in a wall void or ground nest — is genuinely dangerous without proper protective equipment and knowledge of the species\' defensive behavior. Yellow jacket stings cause more deaths annually in the US than any other venomous animal. We do not recommend DIY removal of any established colony.',
      },
      {
        q: 'Will wasps return to the same spot next year?',
        a: 'Yellow jacket and paper wasp colonies die off entirely each winter in most climates, but in Los Angeles\' mild climate, some yellow jacket queens successfully overwinter and can re-establish nests in the same location the following spring. Leaving a treated nest in place without sealing the entry point significantly increases the probability of a new colony establishing in the same void. We always recommend sealing entry points after nest removal.',
      },
    ],
    schema: {
      serviceType: 'Wasp and Hornet Control',
      description: 'Yellow jacket, paper wasp, and hornet nest removal and prevention for homes and properties in Los Angeles, CA.',
    },
    relatedServices: ['bee-removal', 'spider-control', 'mosquito-control'],
    category: 'insect',
  },
  {
    slug: 'flea-control',
    name: 'Flea Control',
    tagline: 'Eliminate fleas from your home and yard — not just your pets.',
    description: 'Flea control in Los Angeles. Interior and exterior flea treatment for homes with cats, dogs, and wildlife exposure. Call (866) 755-1284 for fast relief.',
    heroHeadline: 'Fleas in Your Home? We Treat the Entire Environment, Not Just Your Pet.',
    heroSubhead: 'Los Angeles flea problems are year-round due to the mild climate. Cat fleas (Ctenocephalides felis) are the dominant species, infesting homes through pets and wildlife. Effective control requires simultaneous treatment of your pet, your home\'s interior, and the yard.',
    symptoms: [
      'Your dog or cat scratching, biting, or licking themselves excessively — particularly at the base of the tail, belly, and neck areas where fleas concentrate',
      'Tiny dark specks in your pet\'s fur, on their bedding, or on white paper placed under your pet after grooming — these specks dissolve red when wet, confirming flea dirt (digested blood)',
      'Small, intensely itchy red bite marks on human ankles, lower legs, and waist — flea bites typically appear in clusters or lines and cause disproportionate itching relative to their size',
      'Flea adults visible jumping on light-colored socks or on light-colored floor surfaces — adult fleas are 1–2mm, dark brown, and extremely fast-moving when disturbed',
      'Your pet rubbing against furniture, carpets, or walls to scratch areas they cannot reach — an indicator of generalized flea irritation rather than localized scratching',
      'Flea dirt visible in carpet fibers, on pet bedding, or at the base of furniture legs — flea dirt in carpets indicates a heavy established infestation with significant egg and larval populations in the floor',
      'Fleas jumping on you when entering a room that pets frequent — a room where a pet has been spending time without recent occupancy will have fleas jump aggressively when disturbed, as they detect CO2 from a new host',
    ],
    process: [
      {
        step: 'Infestation Assessment',
        detail: 'We assess the extent of the infestation — the rooms and areas affected, the pet access patterns, and the degree of outdoor exposure (yard, feral cats on the property, wildlife activity). Flea biology means that only 5% of the infestation at any time is adult fleas on the pet — the remaining 95% is eggs, larvae, and pupae in carpets, upholstery, and the yard. Our treatment must address all life stages in all environments.',
      },
      {
        step: 'Coordinate Pet Treatment',
        detail: 'Effective flea control requires that pets be treated with a veterinarian-recommended flea product on the same day as the interior and exterior treatment. We coordinate with you to confirm pet treatment is scheduled. Treating the home without simultaneously treating the pet — or treating the pet without the home — results in treatment failure because the untreated element immediately re-seeds the other.',
      },
      {
        step: 'Interior Treatment',
        detail: 'We apply a combination of an adulticide (typically a pyrethrin or pyrethroid) and an insect growth regulator (IGR such as methoprene or pyriproxyfen) to all carpeted areas, area rugs, upholstered furniture, pet bedding areas, and baseboard perimeters. The IGR prevents flea eggs and larvae from developing into reproductive adults and is the critical component for breaking the flea breeding cycle. Hard floors are treated at the perimeters and beneath furniture.',
      },
      {
        step: 'Exterior Treatment',
        detail: 'We treat the yard areas where pets rest, play, and travel — particularly shaded areas under decks, along fence lines, in kennel areas, and in dense ground cover where flea larvae develop. In Los Angeles, outdoor flea populations are sustained year-round by wildlife (opossums, raccoons, and feral cats are primary flea hosts) and require ongoing exterior treatment in properties with persistent wildlife activity.',
      },
      {
        step: 'Follow-Up Visit',
        detail: 'Flea pupae inside their cocoons are highly resistant to insecticides and can remain dormant for weeks to months. A follow-up treatment 2–3 weeks after initial treatment addresses newly emerged adults before they can reproduce. We schedule this visit as part of our standard flea treatment service.',
      },
    ],
    safetyPrep: [
      'Vacuum all carpets, area rugs, upholstered furniture, and along all baseboards thoroughly before our visit — vacuuming stimulates flea pupae to emerge from cocoons, making them vulnerable to insecticide, and removes eggs and larvae that pesticides alone may not reach',
      'Dispose of the vacuum bag or empty the canister into a sealed plastic bag outside the home immediately after vacuuming — flea eggs and larvae in the bag can hatch and reinfest the home',
      'Wash all pet bedding, blankets, and any fabric items pets regularly contact on the hottest wash setting and dry on high heat',
      'Arrange for pets to be treated at the veterinarian or with an approved veterinary flea product on the same day as our interior treatment — contact your vet in advance',
      'Remove pets, children, and all people from the home during interior treatment and for at least 2 hours after treatment until surfaces are dry',
      'Clear floor clutter — toys, clothing, shoes — from all carpeted areas to give technicians unobstructed access to the full carpet surface',
    ],
    aftercare: [
      'Do not vacuum treated carpets for at least 7 days after treatment — vacuuming removes the IGR residual and adulticide before they have had full effect on larvae and emerging adults',
      'Expect to see some live fleas jumping for up to 2 weeks after treatment as pupae continue emerging from cocoons — this is normal and does not indicate treatment failure; the emerged fleas will contact the IGR residual and die',
      'Keep pets on their veterinary flea prevention product continuously for at least 3 months after treatment — any lapse in pet protection allows new fleas from outdoor sources to restart an interior infestation',
      'Continue vacuuming after the 7-day window is passed — regular vacuuming stimulates remaining pupae to emerge and contact treated surfaces, accelerating the elimination of the remaining population',
      'If you have wildlife activity in the yard (opossums under the deck, feral cats visiting), address these wildlife sources — persistent wildlife flea hosts will continuously re-seed outdoor flea populations and undermine long-term control',
    ],
    faqs: [
      {
        q: 'My pet is on flea prevention but I still have fleas in my house. How is that possible?',
        a: 'Monthly topical flea preventatives kill adult fleas that jump on your pet, but they do not prevent eggs and larvae already in your carpet and upholstery from completing their life cycle and emerging as new adults. If an infestation was established before the prevention was started, the eggs, larvae, and pupae already in the environment will continue developing and emerging for weeks to months. Treating the home environment is necessary to eliminate the existing infestation even while the pet product prevents reinfestation.',
      },
      {
        q: 'Do I have to treat my yard, or just the inside of the house?',
        a: 'In Los Angeles, yard treatment is important for properties where pets spend time outdoors and where wildlife activity occurs. Opossums, raccoons, and feral cats — common in LA neighborhoods — are primary flea hosts that deposit flea eggs into your yard continuously. Pets picking up fleas from the yard will re-seed the interior infestation even after a successful interior treatment. For properties with high wildlife activity or pets with regular yard access, exterior treatment is not optional.',
      },
      {
        q: 'Can I get fleas even without a pet?',
        a: 'Yes. A previous resident\'s pet or a vacant property can harbor flea pupae in carpets for months to over a year. Pupae remain dormant until they detect heat, vibration, and CO2 from a potential host — which means moving into a previously infested property or reoccupying a vacant home can trigger a mass emergence of fleas that appear seemingly from nowhere. Wildlife activity under a structure or feral cats in the yard can also bring fleas into a pet-free home.',
      },
      {
        q: 'Are the products used in flea treatment safe for my family?',
        a: 'We use EPA-registered products formulated for residential flea treatment. All people and pets need to be out of the treatment area during application and for approximately 2 hours after treatment until surfaces are dry. The IGR products we use have extremely low mammalian toxicity — they work by disrupting insect-specific hormonal pathways that do not exist in mammals. We can walk you through the specific products planned for your treatment before we begin.',
      },
    ],
    schema: {
      serviceType: 'Flea Control',
      description: 'Interior and exterior flea treatment using adulticides and insect growth regulators for homes and yards in Los Angeles, CA.',
    },
    relatedServices: ['cockroach-control', 'bed-bug-extermination', 'wildlife-control'],
    category: 'insect',
  },
  {
    slug: 'spider-control',
    name: 'Spider Control',
    tagline: 'Reduce dangerous and nuisance spider populations inside and outside your home.',
    description: 'Spider control in Los Angeles. Black widow elimination, brown recluse inspection, and general spider reduction for homes and businesses. Call (866) 755-1284.',
    heroHeadline: 'Black Widows or Too Many Spiders? We Treat the Whole Property.',
    heroSubhead: 'Los Angeles has one of the highest black widow spider densities in the country. Western black widows are common in garages, storage areas, and yard debris. We eliminate dangerous spiders and reduce overall spider pressure throughout your property.',
    symptoms: [
      'Irregular, messy, three-dimensional webs low to the ground — near the floor in garages, in storage boxes, under outdoor furniture, in wood piles, and inside meter boxes — characteristic of black widow spiders (Latrodectus hesperus)',
      'Visible black widow spiders — shiny black, bulbous abdomen, approximately 1.5 inches in leg span, with the characteristic red hourglass marking on the underside of the abdomen — in garage corners, under outdoor chairs, or in cluttered storage areas',
      'Brown recluse indicators — irregular webs in dark undisturbed areas such as closets, attics, cardboard boxes, and inside shoes or clothing left undisturbed for extended periods (note: brown recluse are not widespread in LA but occasional specimens are found)',
      'Large cellar spider (Pholcus phalangioides) populations in garages, basements, and crawl spaces — while harmless, heavy cellar spider infestations indicate conditions (insects, moisture) that attract more dangerous spider species',
      'Spider egg sacs — papery, round or irregular sacs attached to webs, walls, or inside corners — each sac can contain 50–400 eggs and rapid population growth follows egg sac hatching',
      'Numerous orb weaver webs in yard vegetation, under eaves, and around exterior lighting — heavy orb weaver populations indicate a high insect food source and usually spike after warm, wet periods or near properties with significant outdoor lighting',
    ],
    process: [
      {
        step: 'Spider Species Assessment and Risk Mapping',
        detail: 'We inspect the property with particular focus on black widow habitat — garage perimeters and storage areas, meter boxes, wood piles, under outdoor furniture, in pool equipment areas, and in any low, dark, undisturbed voids. We identify black widow activity, map web and egg sac locations, and assess the overall spider population. We note any conditions creating high insect food availability that sustain elevated spider populations.',
      },
      {
        step: 'Web and Egg Sac Removal',
        detail: 'Physical removal of webs and egg sacs is the first treatment step. Removing egg sacs before they hatch dramatically reduces the next generation of the population. We use long-handled dusters and vacuums to remove webs, spiders, and egg sacs from garage perimeters, storage areas, eave voids, and yard structures. Physical removal is more immediately effective than chemical treatment alone for reducing the visible population.',
      },
      {
        step: 'Residual Insecticide Application',
        detail: 'We apply residual insecticides to the areas where black widows and other spiders harbor and travel — garage wall perimeters at floor level, exterior foundation band, under exterior furniture, wood pile periphery, utility boxes, and any other identified spider harborage. Residual products are selected for long dwell time on porous surfaces where spiders walk, ensuring contact-kill of spiders encountered weeks after treatment.',
      },
      {
        step: 'Exterior Lighting Consultation',
        detail: 'Exterior lighting — particularly white incandescent or older fluorescent fixtures — attracts insects at night, which in turn attracts spiders to feeding positions near light fixtures. We advise on switching exterior lights to yellow or sodium vapor bulbs (which attract far fewer insects) to reduce the insect food source that sustains large spider populations around homes.',
      },
    ],
    safetyPrep: [
      'Wear thick gloves when moving storage boxes, wood piles, or other items in garages or storage areas before or after our treatment — do not reach blindly into dark corners or under items',
      'Clear clutter from garage perimeters and storage room floors before our visit — spiders harborage in clutter, and technicians need access to the floor perimeter and wall bases where black widows build webs',
      'Remove items from under outdoor furniture, decks, and patio areas so technicians can treat underneath without obstruction',
      'Shake out shoes, gloves, and clothing stored in garages or outdoor areas before wearing — this is a permanent safety practice in black widow territory',
      'Keep children and pets out of treated areas for at least 2 hours after application until surfaces are dry',
    ],
    aftercare: [
      'Wear gloves whenever handling items from garages, storage areas, or outdoor structures — residual treatment reduces spider populations but does not provide instant-elimination guarantees for every individual spider',
      'Reduce clutter in garages and storage areas — boxes, wood piles, and stored materials provide ideal black widow habitat and make retreatment more difficult',
      'Keep wood piles stored away from the structure and elevated off the ground — wood stored against the exterior wall is a primary black widow harborage that creates continuous pressure into the garage',
      'Seal gaps in garage door weatherstripping and around utility penetrations to reduce spider entry from the exterior',
      'Schedule annual or semi-annual maintenance treatment in black widow-heavy areas — in LA\'s climate, black widow populations recover quickly in undisturbed exterior areas and routine treatment maintains population suppression',
    ],
    faqs: [
      {
        q: 'How dangerous are black widows in Los Angeles?',
        a: 'Western black widows (Latrodectus hesperus) are venomous and their bites can cause latrodectism — severe muscle cramping, pain, sweating, and nausea — requiring medical attention and sometimes hospitalization, particularly in children, elderly individuals, and those with compromised health. Fatalities are rare with modern medical care, but black widow bites are a genuine medical emergency. Los Angeles properties, particularly those with garages, storage areas, and mature landscaping, commonly harbor significant black widow populations.',
      },
      {
        q: 'Are brown recluse spiders common in Los Angeles?',
        a: 'True brown recluse (Loxosceles reclusa) are not native to California, but the desert recluse (Loxosceles deserta) and Chilean recluse (Loxosceles laeta) are present in parts of Southern California and Los Angeles County. Recluse spiders are uncommon compared to black widows but their bites can cause necrotic skin wounds. If you find a spider you believe may be a recluse species, photograph it and contact us — we can assist with identification and targeted treatment if warranted.',
      },
      {
        q: 'Why do I have so many spiders in my garage specifically?',
        a: 'Garages in Los Angeles provide near-ideal black widow habitat: undisturbed dark corners, low foot traffic, storage clutter that creates web attachment points, and abundant prey insects attracted to the garage environment. Garage door gaps, utility penetrations, and plumbing access points provide easy entry. In LA\'s mild year-round climate, black widow populations in garages do not experience the winter die-off that limits populations in colder climates, allowing them to build up significantly over time.',
      },
      {
        q: 'Can spider treatment also reduce the insects that attract spiders?',
        a: 'Yes — our residual perimeter treatment kills many of the insects that constitute spider food, which reduces the food supply available to sustain a large spider population. However, direct insect source reduction (sealing entry points, reducing exterior lighting attractiveness, addressing moisture) is the most durable way to reduce both insect and spider populations simultaneously. We often combine spider treatment with a general perimeter pest inspection to address the food chain that sustains spider populations.',
      },
    ],
    schema: {
      serviceType: 'Spider Control',
      description: 'Black widow elimination, web and egg sac removal, and residential spider control for homes and properties in Los Angeles, CA.',
    },
    relatedServices: ['wasp-control', 'ant-control', 'cockroach-control'],
    category: 'insect',
  },
  {
    slug: 'fly-control',
    name: 'Fly Control',
    tagline: 'Identify fly breeding sources and eliminate populations at the origin.',
    description: 'Fly control in Los Angeles. House flies, drain flies, fruit flies, blow flies, and fungus gnats. Breeding source elimination and residual treatment. Call (866) 755-1284.',
    heroHeadline: 'Fly Problem That Won\'t Go Away? We Find the Source.',
    heroSubhead: 'Persistent fly problems are always a breeding source problem. Spraying adult flies is temporary — eliminating the organic material they breed in is permanent. We identify and treat the source.',
    symptoms: [
      'Large numbers of house flies (Musca domestica) clustering on windows, near garbage areas, or in food preparation spaces — high fly counts inside always indicate a breeding source within or immediately adjacent to the structure',
      'Small drain flies (Psychodidae) — tiny, fuzzy-winged moths hovering near drains, under sinks, and near floor drains — indicating a buildup of organic sludge inside drain pipes where larvae develop',
      'Fruit fly (Drosophila melanogaster) infestations around overripe fruit, recycling bins, bar areas, and floor drains — fruit flies breed in small amounts of fermenting organic matter and can establish in overlooked drains within days',
      'Blow flies (Calliphoridae) — large, metallic blue or green flies — inside the structure indicating a dead animal somewhere in the building, often in a wall void, attic, or crawl space',
      'Fungus gnats hovering around houseplants — larvae develop in moist potting soil and overwatered plant containers, and populations can expand from plants throughout the structure',
      'Cluster flies in attic spaces and upper rooms in fall — cluster flies (Pollenia rudis) enter structures to overwinter in large numbers and are a seasonal problem in some LA properties',
    ],
    process: [
      {
        step: 'Fly Species Identification and Source Investigation',
        detail: 'Fly control begins with species identification because each fly species has a completely different breeding substrate. House flies and blow flies breed in decaying organic matter and animal waste. Drain flies and fruit flies breed in organic buildup in drain lines and fermenting organic material. Fungus gnats breed in potting soil. Cluster flies are ectoparasites of earthworms that enter buildings to overwinter. We identify the species before looking for sources, then trace back to the breeding environment.',
      },
      {
        step: 'Breeding Source Elimination',
        detail: 'We locate and eliminate or treat the breeding source — cleaning or treating drain lines for drain fly and fruit fly infestations, identifying and removing deceased animals for blow fly infestations, addressing organic waste accumulation for house fly infestations. Source elimination is the only permanent fly control measure. Chemical treatment of adult flies without source elimination produces only temporary population reduction.',
      },
      {
        step: 'Drain Treatment',
        detail: 'For drain fly and fruit fly problems, we apply enzymatic drain cleaners or microbial products that break down the organic biofilm lining drain interiors. This treatment directly destroys the larval habitat. We treat floor drains, sink drains, and any other drain openings where fly activity is concentrated. In commercial kitchens and bar areas — common fly problem sites across LA\'s restaurant-dense neighborhoods — comprehensive drain treatment is the primary control tool.',
      },
      {
        step: 'Residual and Knockdown Treatment',
        detail: 'We apply residual insecticides to resting areas and surfaces where adult flies concentrate — near doorways, around windows, on exterior walls near entry points — to reduce adult fly populations while breeding source elimination takes effect. In commercial settings, we use space treatments or fly light traps as supplemental population management tools.',
      },
    ],
    safetyPrep: [
      'Identify and remove overripe fruit, vegetable waste, and any fermenting organic material before our visit — these are common fruit fly breeding sources that should be eliminated regardless of treatment',
      'Empty and clean all garbage cans and recycling bins — uncovered or rarely-cleaned waste receptacles are the most common house fly and fruit fly breeding source in LA homes',
      'Pull back rugs and mats from floor drains and clean visible organic buildup around drain openings — this helps the drain treatment reach the full biofilm layer',
      'If a dead animal odor is present anywhere in the structure, inform us before our visit — blow fly investigations require access to attic spaces, crawl spaces, and wall voids that should be identified and unlocked in advance',
      'Commercial clients should clear under bar equipment, kitchen prep stations, and floor drain mats for full access during the service visit',
    ],
    aftercare: [
      'Run enzymatic drain cleaner in all drains monthly to prevent organic biofilm accumulation that sustains drain fly and fruit fly populations',
      'Keep all food waste in tightly sealed containers and clean recycling bins weekly — available organic material sustains fly populations even after successful treatment',
      'Repair any torn window screens or gaps around door frames — physical exclusion reduces fly entry from the exterior, particularly for house fly problems driven by nearby organic material sources',
      'Address any moisture accumulation under appliances, in cabinet bases, or near plumbing — moist organic matter is a fly breeding substrate and moisture control is part of long-term fly prevention',
      'If blow fly activity returns after treatment, a new deceased animal may be present — contact us for reinspection rather than waiting for the situation to resolve on its own',
    ],
    faqs: [
      {
        q: 'Why do I keep getting fruit flies even though my kitchen is clean?',
        a: 'Fruit flies most commonly breed in drain line biofilm — the organic sludge that accumulates on the inside of drain pipes, particularly in kitchen sinks, bar sinks, and floor drains. This breeding site is not visible to residents and is not addressed by surface cleaning. Flies emerging from drains appear to come from nowhere. Enzymatic drain treatment is the solution. Other overlooked sources include the drip tray under the refrigerator, overripe produce, and the residue inside recycling bins.',
      },
      {
        q: 'I have large blue-green flies appearing inside my home. What are they?',
        a: 'Large metallic flies — blue bottles (Calliphora species) or green bottles (Lucilia species) — emerging inside your home almost certainly indicate a dead animal somewhere in the structure: a rodent that died in a wall void, attic, or crawl space after bait treatment, or a bird that entered a vent and became trapped. The flies breed in the carcass and emerge as adults. We investigate for the deceased animal source, remove it if accessible, and treat the area. If the carcass is inside a sealed wall void, we treat the void and ventilate as best as possible.',
      },
      {
        q: 'Are fly light traps effective?',
        a: 'UV fly light traps are effective management tools in commercial settings — restaurants, food processing areas, and commercial kitchens where fly entry from the exterior is ongoing. They continuously capture adult flies but do not address breeding sources. In residential settings, they can supplement source elimination as a monitoring and capture tool. We can install and service commercial fly light trap systems as part of an ongoing fly management program.',
      },
      {
        q: 'How do I prevent flies from being attracted to my property?',
        a: 'The most effective fly prevention steps for Los Angeles properties are: secure all food waste in sealed containers (particularly outdoor compost and trash bins), keep pet waste areas clean, remove fallen fruit from yard trees promptly (a major fly attractant in LA\'s fruit-tree-dense neighborhoods), maintain clean drain lines, and ensure window and door screens are intact and properly fitted. In LA\'s warm climate, organic waste decomposes rapidly and quickly becomes a fly breeding site if not managed.',
      },
    ],
    schema: {
      serviceType: 'Fly Control',
      description: 'Fly breeding source identification, drain treatment, and adult fly elimination for homes and commercial properties in Los Angeles, CA.',
    },
    relatedServices: ['cockroach-control', 'mosquito-control', 'ant-control'],
    category: 'insect',
  },
  {
    slug: 'wildlife-control',
    name: 'Wildlife Removal',
    tagline: 'Humane wildlife removal and exclusion — keeping wildlife out permanently.',
    description: 'Wildlife removal in Los Angeles. Opossums, raccoons, skunks, squirrels, and gophers. Humane trapping, exclusion, and property-proofing. Call (866) 755-1284.',
    heroHeadline: 'Wildlife in Your Attic, Yard, or Under Your Home? We Remove Them Safely.',
    heroSubhead: 'Los Angeles urban wildlife populations are large and growing. Raccoons, opossums, skunks, and squirrels regularly access homes and structures through surprisingly small gaps. We remove them humanely and exclude them permanently.',
    symptoms: [
      'Thumping, scratching, or rolling sounds in the attic during evening or nighttime hours — raccoons and opossums are nocturnal and their size makes their attic movement clearly audible',
      'A strong musky or ammonia odor under the house, near the foundation, or in the attic — wildlife nesting in enclosed spaces produce significant waste accumulation that creates persistent odor',
      'Overturned or ransacked garbage cans, torn compost bags, or disturbed garden areas overnight — raccoons are highly intelligent and dexterous and will exploit accessible food sources repeatedly',
      'Skunk spray odor under the house, near the deck, or in the crawl space — skunks den under structures and spray when disturbed by pets or during nighttime encounters',
      'Squirrel activity entering and exiting eave gaps, roof vents, or attic vents — squirrels are daytime animals, distinguishing them from nocturnal raccoons and rats',
      'Burrowing or tunneling in lawn areas, under the foundation, or beneath outbuildings — pocket gophers, ground squirrels, and skunks create extensive burrow systems that can undermine hardscape and planters',
      'Damaged fruit, vegetable gardens, and bird feeders — raccoons and squirrels are opportunistic feeders that exploit any accessible food source on the property',
    ],
    process: [
      {
        step: 'Wildlife Species and Behavior Assessment',
        detail: 'We assess the property to determine which wildlife species are present, their access points and travel routes, denning locations, and the scale of the problem. Evidence examination — tracks, droppings, hair, damage patterns, and timing of activity — allows us to confirm species before setting traps or beginning exclusion. Proper species identification is required by California wildlife regulations governing handling and relocation.',
      },
      {
        step: 'Humane Trapping',
        detail: 'We set live capture traps appropriate to the species in question — raccoons, opossums, and skunks require different trap sizes and placements. Traps are checked daily as required by California regulations. Captured animals are handled with appropriate protective equipment (rabies vector species are handled with full precaution). Relocation of wildlife in California is regulated — we follow all DFW regulations regarding trapping and relocation.',
      },
      {
        step: 'Exclusion and Entry Point Sealing',
        detail: 'Once the actively-denning animals have been removed, we seal entry points using heavy-gauge hardware cloth, metal flashing, and appropriate construction materials. Exclusion is the permanent solution — live-trapping without sealing access points results in new animals occupying the same dens within days to weeks. We identify and seal every opening large enough for the target species to enter.',
      },
      {
        step: 'Contamination Assessment and Remediation',
        detail: 'Wildlife denning in attics and crawl spaces leaves behind urine, feces, and nesting debris that creates health hazards (Baylisascaris roundworm from raccoons, leptospirosis from multiple species) and odor problems. We assess the degree of contamination and provide recommendations for cleaning, deodorizing, and insulation replacement where warranted.',
      },
      {
        step: 'Attractant Reduction Recommendations',
        detail: 'We identify and communicate the property conditions that attract wildlife — unsecured garbage, compost, pet food left outdoors, fruit trees, bird feeders, accessible water features, and dense vegetation against the structure. Reducing these attractants dramatically lowers the probability of re-infestation after exclusion.',
      },
    ],
    safetyPrep: [
      'Do not attempt to approach, handle, or corner any wild animal — cornered wildlife will bite or spray, and urban wildlife in LA has higher rates of disease exposure than rural populations',
      'Keep pets inside and away from wildlife activity areas during our trapping period — pets that investigate traps or encounter wildlife are at risk of injury and disease transmission',
      'Secure all outdoor food sources before our visit — pet food bowls, unsecured garbage, and accessible compost actively attract wildlife back to the property and interfere with trapping',
      'If a skunk has sprayed under your house, avoid entering the crawl space until we have assessed the situation — confined skunk spray in an enclosed space can cause respiratory irritation',
      'Inform us of any children or elderly family members with particular health concerns — areas contaminated with wildlife waste should be avoided until professional remediation is complete',
    ],
    aftercare: [
      'Keep all garbage in wildlife-proof containers with locking lids — unsecured garbage is the single largest attractant for raccoons in Los Angeles residential neighborhoods',
      'Bring pet food bowls inside at night and avoid leaving any food outside — even bird seed and fallen fruit are significant wildlife attractants in LA\'s dense urban environment',
      'Inspect the exterior of your structure seasonally for new gaps, particularly after winter storms — raccoons and squirrels investigate any new opening that might provide den access',
      'Trim tree branches that overhang the roofline — squirrels and raccoons use overhanging branches as access routes to rooftops and eave voids',
      'Contact us if you hear renewed activity in the attic or under the house within 30 days of exclusion work — our exclusion is warranted and we will reinspect if new activity begins',
    ],
    faqs: [
      {
        q: 'Is it legal to trap and relocate wildlife in Los Angeles?',
        a: 'California wildlife trapping and relocation is regulated by the California Department of Fish and Wildlife. Most nuisance wildlife species can be live-trapped, but relocation requirements and restrictions vary by species. Certain species cannot be relocated and must be euthanized if trapped. We follow all applicable California DFW regulations and will explain the lawful options for your specific situation during our assessment.',
      },
      {
        q: 'Can raccoons or opossums make my family sick?',
        a: 'Yes. Raccoons are the primary host of Baylisascaris procyonis, a roundworm whose eggs can survive in soil and attic insulation for years and cause serious neurological disease in humans if ingested. Raccoons and opossums can also carry leptospirosis (transmitted through urine) and are potential carriers of rabies. Attic spaces contaminated with raccoon waste should be remediated by professionals using appropriate respiratory protection and not disturbed by residents.',
      },
      {
        q: 'Why do I keep getting skunks under my house?',
        a: 'Skunks den under homes and decks because the enclosed, dark, relatively undisturbed space provides ideal shelter — particularly during breeding season (February through March) and when raising young (April through June). Once a skunk den is established under a structure, the odor from scent marking attracts subsequent skunks to the same site even after the original animal is removed. Exclusion sealing after removal — combined with odor neutralization — breaks the cycle.',
      },
      {
        q: 'I have gophers destroying my lawn and garden. Can you help?',
        a: 'Yes. Pocket gophers (Thomomys bottae) are common in Los Angeles residential properties and cause significant damage to lawns, gardens, tree roots, and irrigation systems. We use a combination of trapping and underground bait application to reduce gopher populations in affected areas. Because gophers are territorial, removing the resident gopher and monitoring for new territory establishment is an ongoing process in properties adjacent to open space or natural areas where gopher populations are continuously replenished.',
      },
    ],
    schema: {
      serviceType: 'Wildlife Removal',
      description: 'Humane wildlife trapping, exclusion, and property-proofing for raccoons, opossums, skunks, squirrels, and gophers in Los Angeles, CA.',
    },
    relatedServices: ['rat-rodent-control', 'rodent-proofing', 'crawl-space-treatment'],
    category: 'wildlife',
  },
  {
    slug: 'fumigation',
    name: 'Fumigation Services',
    tagline: 'Whole-structure fumigation for complete elimination of drywood termites and other pervasive pests.',
    description: 'Fumigation services in Los Angeles. Whole-structure tenting for drywood termites, bed bugs, and stored product pests. Licensed fumigation for homes and apartments. Call (866) 755-1284.',
    heroHeadline: 'Whole-Structure Fumigation in Los Angeles — Total Pest Elimination.',
    heroSubhead: 'Fumigation is the most thorough pest elimination method available for widespread drywood termite infestations and pervasive pest problems that cannot be addressed by localized treatments. We manage the entire process from structural access coordination to re-entry clearance.',
    symptoms: [
      'Multiple areas of the structure showing active drywood termite frass or gallery damage — widespread infestations that have reached multiple roof members, wall framing, or floor joists are typically better addressed by fumigation than by attempting multiple localized treatments',
      'Repeated localized termite treatment failures — areas that have been spot-treated multiple times and continue showing active termite activity likely have a more extensive infestation than localized treatment can address',
      'Wood boring beetle infestations (Anobiidae or Bostrichidae) throughout structural lumber — powderpost beetles and other wood borers in widespread structural wood require whole-structure treatment for complete elimination',
      'Confirmed bed bug infestations that have spread to multiple rooms or to hard-to-access areas such as wall voids, behind built-in furniture, and inside structural framing',
      'Stored product pest infestations (grain beetles, flour moths, Indian meal moths) that have spread throughout a pantry or storage area and cannot be fully addressed by discarding infested products alone',
      'Pre-sale pest clearance required by lender or real estate transaction — many Los Angeles residential real estate transactions require a current pest report; identified drywood termite activity may require fumigation clearance before escrow closes',
    ],
    process: [
      {
        step: 'Pre-Fumigation Inspection and Scope Definition',
        detail: 'We conduct a thorough inspection of the structure to confirm the pest species, infestation extent, and whether whole-structure fumigation is the appropriate treatment or whether localized alternatives are viable. We document all affected areas, discuss the fumigation process with you in detail, and provide a firm scope of work and timeline.',
      },
      {
        step: 'Preparation and Scheduling',
        detail: 'Fumigation requires vacating the structure for 24–72 hours depending on structural volume and weather conditions. We provide a detailed preparation checklist — removing or sealing food and medications in certified fumigation bags, removing plants and pets, notifying neighbors and property management if applicable, arranging alternate accommodation. We coordinate a specific fumigation date and timeline with you.',
      },
      {
        step: 'Structure Tenting',
        detail: 'Our licensed fumigation crew drapes the structure in impermeable tarps sealed at ground level to contain the fumigant gas (sulfuryl fluoride). Warning signs are posted as required by California law. Neighboring properties are notified. The fumigant is metered into the tented structure at a precisely calculated concentration based on structural volume, temperature, and target pest. We monitor gas concentration throughout the fumigation period using Vikane gas concentration readers.',
      },
      {
        step: 'Aeration and Clearance Testing',
        detail: 'After the required exposure period, the tent is opened and the structure is aerated — fans are used to accelerate gas dispersal through all structural voids and living spaces. We conduct air quality testing with calibrated equipment to confirm that sulfuryl fluoride concentration has dropped below the California-mandated re-entry threshold (1 ppm) before issuing a clearance for re-entry. We do not issue clearance until testing confirms safe levels.',
      },
      {
        step: 'Post-Fumigation Documentation',
        detail: 'We provide a written completion report documenting the fumigant used, application concentration, exposure duration, and clearance test results. This documentation satisfies real estate disclosure requirements and pest inspection certification. We also note any structural repairs needed (gaps in the structure that required special tenting accommodations) and any areas of pest damage observed during preparation.',
      },
    ],
    safetyPrep: [
      'Remove or double-bag in certified Nylofume fumigation bags all food items, medications, vitamins, tobacco products, and pet food that will remain in the structure during fumigation — unsealed consumables must be removed or will be contaminated',
      'Remove all people, pets (including fish and reptiles), houseplants, and potted plants from the structure — sulfuryl fluoride is lethal to all living organisms and there are no safe re-entry protocols for plants or animals during fumigation',
      'Arrange confirmed alternate accommodation for the full fumigation and aeration period (minimum 24–48 hours, may be longer for large or poorly ventilated structures)',
      'Notify your homeowners or renters insurance in advance if required by your policy — some policies require notification for structural work of this nature',
      'Provide access keys or combinations to all interior locked areas — closets, rooms, and storage areas must be accessible and open during fumigation so gas can penetrate all spaces',
      'Unlock or remove all interior doors to allow gas circulation throughout the structure — deadbolted interior doors or sealed rooms create under-concentration zones where pests survive',
    ],
    aftercare: [
      'Do not re-enter the structure until we have issued a written clearance — the clearance is based on actual air quality testing, not just elapsed time',
      'Ventilate the structure fully on re-entry — open all windows and doors for 30 minutes before occupying the space, even after clearance has been issued',
      'Discard any food items that were not removed or properly bagged before fumigation — do not consume food that was present in the structure without a certified fumigation bag',
      'Wash dishes, utensils, and cookware before use after fumigation — surface residue from the fumigant is minimal but recommended practice',
      'Any structural repairs needed after tenting (damaged weatherstripping, torn screens) should be addressed promptly — entry points that required special tenting attention represent ongoing pest entry risks if left unrepaired',
      'Schedule an annual inspection to monitor for new termite activity — fumigation eliminates all current infestation but does not prevent new swarmers from reinfesting the structure in future swarm seasons',
    ],
    faqs: [
      {
        q: 'How long do I have to be out of my home during fumigation in Los Angeles?',
        a: 'Standard residential fumigation in Los Angeles requires vacating the structure for a minimum of 24 hours from tent placement, with re-entry permitted only after a certified clearance test confirms gas levels below 1 ppm. In practice, most LA residential fumigations require 48–72 hours from tent-up to clearance, depending on structural volume, weather conditions (temperature affects gas circulation), and the scheduled clearance testing time. We provide a specific timeline estimate when we schedule your fumigation.',
      },
      {
        q: 'Is fumigation the only option for drywood termites, or are there alternatives?',
        a: 'Fumigation is the most reliable treatment for widespread drywood termite infestations but is not required for all situations. Localized infestations that are well-mapped and accessible can be treated with spot injection of termiticide foam or dust, electro-gun treatment, or microwave treatment without vacating the structure. We make this determination during the inspection based on the number and location of active sites. We recommend fumigation only when localized options are genuinely insufficient.',
      },
      {
        q: 'Will fumigation kill all types of pests, not just termites?',
        a: 'Yes. Sulfuryl fluoride fumigation kills all living organisms within the tented structure including insects at all life stages (adults, larvae, pupae, and eggs), rodents, and other pests. Fumigation is used for drywood termites, bed bugs, wood boring beetles, cockroaches, and stored product pests. However, fumigation does not provide residual protection — it does not prevent new pests from entering after the tent is removed. Exclusion work and preventive treatment are still necessary after fumigation.',
      },
      {
        q: 'My neighbor is getting their house tented. Is the fumigant dangerous to my household?',
        a: 'Properly conducted fumigation with licensed operators and appropriate tenting is safe for neighboring properties. Sulfuryl fluoride is heavier than air and does not drift significantly under proper tenting conditions. California regulations require warning signs, neighbor notification, and licensed monitoring of the fumigation. You may notice the tarped structure but there is no exposure risk to neighboring households from a properly managed fumigation.',
      },
    ],
    schema: {
      serviceType: 'Fumigation Services',
      description: 'Whole-structure tenting and sulfuryl fluoride fumigation for drywood termites, bed bugs, and other pervasive pest infestations in Los Angeles, CA.',
    },
    relatedServices: ['termite-control', 'bed-bug-extermination', 'heat-treatment'],
    category: 'specialty',
  },
  {
    slug: 'heat-treatment',
    name: 'Heat Treatment',
    tagline: 'Chemical-free whole-room heat treatment — kills bed bugs and eggs in a single session.',
    description: 'Heat treatment for bed bugs in Los Angeles. Thermal remediation raises room temperature to lethal levels, killing all bed bug life stages without chemicals. Call (866) 755-1284.',
    heroHeadline: 'Bed Bug Heat Treatment in Los Angeles — One Treatment, Total Elimination.',
    heroSubhead: 'Heat treatment is the most effective single-session bed bug elimination method available. We raise room temperature to 120–135°F and maintain it long enough to penetrate every piece of furniture, clothing, and wall void — killing bed bugs and eggs that chemical treatments miss.',
    symptoms: [
      'Confirmed bed bug activity — bites in clusters or lines on the skin, live bugs in mattress seams, fecal spotting on bed linens, or shed skins in furniture crevices',
      'Previous chemical treatment that failed to fully eliminate the infestation — heat treatment is particularly effective as a secondary treatment for infestations that survived an initial chemical protocol',
      'Household members with chemical sensitivities, respiratory conditions, or compromised immune systems for whom chemical treatment poses elevated health concerns',
      'Highly cluttered rooms or units with extensive upholstered furniture, dense storage, or hard-to-access wall voids that limit the thoroughness of chemical treatment coverage',
      'Bed bug activity confirmed in multiple rooms — heat treatment treats an entire defined space simultaneously rather than room by room, making it more efficient for multi-room infestations',
      'Luxury or irreplaceable furniture items that cannot be easily disposed of or treated with chemical insecticides without risk of damage',
    ],
    process: [
      {
        step: 'Pre-Treatment Inspection and Space Preparation Assessment',
        detail: 'We inspect the affected area to confirm the extent of the infestation, identify heat-sensitive items that must be removed before treatment, and assess the space configuration for electric heater placement and air circulation equipment layout. We provide a detailed preparation checklist and confirm that all preparation has been completed before scheduling the treatment day.',
      },
      {
        step: 'Heat-Sensitive Item Removal',
        detail: 'Certain items must be removed before heat treatment — aerosol cans, candles, medications, chocolate, vinyl records, musical instruments, and items with heat-sensitive components. We walk through the checklist with you before treatment day to ensure all heat-sensitive items are removed or moved to spaces outside the treatment zone. Items left improperly can be damaged by the high treatment temperatures.',
      },
      {
        step: 'Equipment Setup and Space Sealing',
        detail: 'We place electric resistance heaters throughout the treatment space and position high-volume fans to ensure consistent heat circulation throughout all areas, including under furniture, inside closets, and in wall void adjacencies. We seal gaps under doors and around HVAC supply vents to contain heat within the treatment zone and prevent the HVAC system from cooling the space during treatment.',
      },
      {
        step: 'Temperature Ramping and Monitoring',
        detail: 'We raise the room temperature gradually to allow heat to penetrate deeply into furniture, mattresses, and structural voids before reaching lethal levels. We monitor temperature continuously using multiple remote sensors placed throughout the space — inside furniture, under the bed, in closets, and at wall surfaces. We confirm that all sensor locations have reached and maintained the lethal temperature threshold (120°F minimum for 60 minutes, or 130°F for shorter exposure) before concluding treatment.',
      },
      {
        step: 'Cooldown and Post-Treatment Inspection',
        detail: 'After the required lethal exposure period is confirmed across all monitoring points, we allow the space to cool. We conduct a post-treatment inspection — checking mattress seams, furniture joints, and known harborage areas for dead bugs and confirming no surviving activity. We provide documentation of the treatment duration, temperatures achieved at all monitoring points, and our post-treatment findings.',
      },
    ],
    safetyPrep: [
      'Remove all aerosol cans, propane cylinders, lighters, and pressurized containers from the treatment space — these can rupture or explode at high temperatures',
      'Remove all candles, wax items, chocolate, medications, vitamins, and perishable food items — all will melt, degrade, or be damaged at treatment temperatures',
      'Remove all musical instruments, vinyl records, film negatives, photographs, artwork with wax-based media, and any irreplaceable items you are uncertain about — when in doubt, remove it',
      'Remove pets, plants, and all people from the treatment zone for the full treatment duration — typically 6–8 hours for a standard residential space',
      'Spread out items in closets and storage areas rather than leaving them in tightly packed piles — heat must circulate through all items for the treatment to be effective throughout the space',
      'Notify us of any built-in electronics, large appliances, or wall-mounted items that cannot be moved so we can assess heat exposure risk before treatment day',
    ],
    aftercare: [
      'Vacuum dead bugs from mattress seams, floor perimeters, and furniture crevices after the space cools — removing dead bugs and shed skins after heat treatment reduces allergen load',
      'Inspect furniture joints, baseboards, and mattress seams carefully for any surviving bugs over the week following treatment — surviving activity is rare after a properly conducted heat treatment but should be reported immediately if found',
      'Install bed bug mattress encasements after heat treatment to monitor for any surviving activity and prevent reinfestation from secondhand items or visitors',
      'In multi-unit Los Angeles apartment buildings, alert your building manager to the bed bug situation even after successful treatment — neighboring units should be inspected to prevent re-introduction through shared building infrastructure',
      'Avoid bringing secondhand upholstered furniture or mattresses into the treated space without thorough inspection — this is the most common cause of reinfestation after a successful heat treatment',
    ],
    faqs: [
      {
        q: 'What is the advantage of heat treatment over chemical treatment for bed bugs?',
        a: 'Heat treatment kills all bed bug life stages including eggs — which are partially resistant to many chemical insecticides — in a single treatment session. Heat penetrates inside mattresses, into wall voids, and through furniture upholstery that chemical sprays cannot fully reach. For patients with chemical sensitivities, households with infants, or heavily infested spaces with extensive furniture, heat treatment offers a chemical-free complete solution. The main tradeoff is cost and preparation time compared to chemical treatment.',
      },
      {
        q: 'Does heat treatment work on the first visit, or do I need follow-up?',
        a: 'A properly conducted heat treatment that achieves and maintains lethal temperatures at all monitoring points throughout the treatment space kills all bed bug life stages including eggs in a single visit. There is no hatching cycle vulnerability that requires a follow-up treatment as there is with chemical protocols. We conduct a post-treatment inspection before leaving and provide documentation. Follow-up is recommended at 30 days as a precaution in severe infestations, but is not required as a routine component of the treatment.',
      },
      {
        q: 'Will the heat damage my belongings or the structure of my home?',
        a: 'Treatment temperatures (120–135°F) are below the damage threshold for most common household materials including wood furniture, drywall, carpeting, and standard construction materials. Items that are heat-sensitive — aerosols, candles, vinyl, wax-based items, medications — are removed before treatment per the prep checklist. Modern residential construction in Los Angeles is tolerant of the treatment temperature range. We identify any specific structural or material concerns during our pre-treatment inspection.',
      },
      {
        q: 'My building is infested with bed bugs across multiple units. Can heat treatment help?',
        a: 'Heat treatment is highly effective for individual unit treatment in multi-unit LA apartment buildings. However, if neighboring units remain untreated, bed bugs will re-enter through shared walls and plumbing chases within weeks. For whole-building infestations, we recommend coordinating treatment across all affected units simultaneously — heat treatment of individual units combined with chemical treatment of shared building infrastructure (hallways, utility chases) produces the most durable multi-unit building result. Contact us to discuss a building-wide treatment plan.',
      },
    ],
    schema: {
      serviceType: 'Heat Treatment',
      description: 'Thermal remediation heat treatment for bed bugs in Los Angeles, CA. Chemical-free, single-session elimination of all bed bug life stages.',
    },
    relatedServices: ['bed-bug-extermination', 'fumigation', 'cockroach-control'],
    category: 'specialty',
  },
  {
    slug: 'rodent-proofing',
    name: 'Rodent Proofing & Exclusion',
    tagline: 'Seal every entry point — permanent rodent exclusion for LA homes and buildings.',
    description: 'Rodent proofing and exclusion in Los Angeles. Entry point sealing, hardware cloth installation, vent screening, and structural gap closure for permanent rodent prevention. Call (866) 755-1284.',
    heroHeadline: 'Stop Rats and Mice From Getting In — Permanent Rodent Proofing.',
    heroSubhead: 'Trapping reduces the rodents inside your structure. Exclusion keeps them out permanently. We seal every gap, screen every vent, and close every entry point that rodents use to access your home — guaranteed.',
    symptoms: [
      'Recurring rodent activity despite repeated trapping — if rodents keep returning after traps have removed the visible population, unsealed entry points are allowing continuous reentry from outside',
      'Hearing rodents in the attic or walls but being unable to locate an obvious entry point — roof rats enter through gaps as small as 1/2 inch at roofline junctions, eave voids, and utility penetrations that are not visible without a systematic inspection',
      'Evidence of rodent activity in a newly purchased or recently renovated home — understanding the entry vulnerability of an unfamiliar structure before infestation establishes is the highest-value application of exclusion work',
      'Gnaw marks on PVC plumbing, electrical wiring insulation, or wood framing near potential entry points — active gnawing at potential entry points is a sign that rodents are attempting to enlarge an existing gap',
      'Droppings concentrated near a specific area of the structure such as a utility penetration, an eave corner, or a foundation vent — concentrated dropping sites typically indicate a nearby entry or harborage point',
      'Gap or damage visible at roofline junctions, fascia boards, eave voids, foundation vents, or around utility lines where they penetrate the exterior wall — these are the most common rodent entry points in LA\'s aging residential housing stock',
    ],
    process: [
      {
        step: 'Systematic Exterior Entry Point Inspection',
        detail: 'We conduct a methodical exterior inspection of the entire structure — roofline, eave voids, fascia and soffit junctions, foundation vents, crawl space access, utility penetrations (gas, electric, water, cable), weep screed, garage door weatherstripping, and any visible gaps in the exterior building envelope. We use a flashlight and inspection mirror to examine recessed areas. Every identified gap 1/4 inch or larger is documented.',
      },
      {
        step: 'Interior Confirmation',
        detail: 'We inspect the attic space, crawl space (if accessible), garage, and utility areas from the interior to correlate exterior gaps with interior entry points, identify active runway evidence near entry points, and check for structural damage from prior rodent activity. Interior confirmation helps prioritize which gaps are actively being used versus which are simply potential vulnerabilities.',
      },
      {
        step: 'Material Selection and Sealing',
        detail: 'Different entry point types require different sealing materials. Foundation vent screens are replaced with heavy-gauge hardware cloth (1/4 inch mesh) if damaged or missing. Eave and soffit gaps are sealed with metal flashing, copper mesh, or galvanized screen secured with construction staples and exterior-grade caulk. Utility penetrations are sealed with copper mesh stuffed into the gap and finished with mortar or expanding foam sealant. Gaps in concrete foundations are patched with hydraulic cement. All materials used are rodent-impenetrable — we do not use standard expanding foam alone, which rodents can chew through.',
      },
      {
        step: 'Roof and Roofline Work',
        detail: 'Roof-level exclusion addresses the primary entry routes used by roof rats — the dominant rodent species in LA. We seal gaps at the roof-to-fascia junction, between roof tiles and the top plate, at chimney flashings, around plumbing stack vents, and at any roof penetrations. Where continuous eave venting creates unavoidable gaps, we install exclusion screening that allows airflow while blocking rodent entry.',
      },
      {
        step: 'Verification and Documentation',
        detail: 'After all sealing work is complete, we walk the perimeter with you to review every sealed location, explain the material used, and confirm that no gaps have been missed. We provide written documentation of all sealed entry points with photographs. This documentation establishes a baseline for future inspections and is useful for property sales or landlord-tenant pest documentation.',
      },
    ],
    safetyPrep: [
      'Trim tree branches that overhang or touch the roofline before our exclusion work — branches provide roof rats direct access to the roofline above any exclusion work at eave level',
      'Move stored items away from exterior walls in garages and storage areas so technicians can access the wall base and identify any floor-level entry points',
      'Identify and communicate any areas of the exterior that are difficult to access (steep slopes, tall rooflines, dense vegetation) so we can arrange appropriate access equipment',
      'If you have an active infestation, inform us so we can coordinate trapping with exclusion work — sealing an entry point while rats are inside the structure without providing an exit route or trapping them inside can create a secondary problem',
    ],
    aftercare: [
      'Inspect all sealed entry points quarterly — particularly after heavy rain, seismic events, or any exterior construction work that may have disturbed sealed areas',
      'Trim vegetation regularly — ivy, shrubs, and tree branches that grow back into contact with the structure provide rodents new pathways to previously sealed areas',
      'Check garage door weatherstripping annually and replace worn sections — degraded weatherstripping is the most commonly overlooked rodent entry point in LA residential properties',
      'If you hear rodent activity inside the structure after our exclusion work is complete, contact us immediately — activity after exclusion indicates either a gap we missed or a rodent population that was sealed inside and requires trapping removal',
      'Maintain all exterior vents with intact hardware cloth screening — damaged screens are the most common point of re-entry after initial exclusion work in Los Angeles',
    ],
    faqs: [
      {
        q: 'How is rodent proofing different from just setting traps?',
        a: 'Trapping eliminates the rodents currently inside your structure. Exclusion sealing prevents new rodents from entering after the current population is removed. Without exclusion, roof rats from neighboring properties, fruit trees, and palm trees will re-enter a successfully trapped structure within days to weeks — Los Angeles roof rat population density is high enough that any unsealed structure will be re-colonized. Exclusion is the only permanent rodent control solution.',
      },
      {
        q: 'Can you guarantee that rodents won\'t get back in after exclusion?',
        a: 'We guarantee our exclusion work — if rodents re-enter through a point we sealed within the warranty period, we return and address it at no charge. We cannot guarantee against new entry points created by subsequent structural changes, storm damage, or pest damage to sealed materials. Our written documentation of all sealed entry points allows clear assessment of whether a re-entry occurred at a previously sealed point or through a new opening.',
      },
      {
        q: 'How do roof rats get onto my roof in Los Angeles?',
        a: 'Roof rats (Rattus rattus) are exceptional climbers that reach rooftops via multiple routes common in LA\'s urban landscape: overhanging tree branches, power lines and utility wires running to the structure, wood fences and fence posts, stucco walls (which they can climb directly), and palm trees. Once on the roof, they probe eave voids, tile gaps, and any roofline irregularity for entry. Cutting overhanging branches and maintaining clear roofline access is the most important complementary action for any exclusion program.',
      },
      {
        q: 'My house is old and has many gaps. Is full exclusion realistic?',
        a: 'Older Los Angeles housing stock — Craftsman bungalows, Spanish colonials, post-war stucco construction — does have more entry vulnerability than newer construction, but complete exclusion is absolutely achievable and routinely accomplished. The key is systematic inspection rather than spot-treating obvious gaps. Our full exterior inspection documents every gap regardless of perceived significance. The most common missed entry points in older LA homes are at the rafter tail-to-fascia junction, at original-construction foundation vents with degraded original screening, and at roof-to-chimney junctions.',
      },
    ],
    schema: {
      serviceType: 'Rodent Proofing and Exclusion',
      description: 'Systematic entry point sealing and structural rodent exclusion for homes and buildings in Los Angeles, CA. Permanent rodent prevention.',
    },
    relatedServices: ['rat-rodent-control', 'wildlife-control', 'crawl-space-treatment'],
    category: 'rodent',
  },
  {
    slug: 'crawl-space-treatment',
    name: 'Crawl Space Treatment',
    tagline: 'Clean, treat, and protect your crawl space — the most overlooked pest environment in your home.',
    description: 'Crawl space treatment in Los Angeles. Rodent cleanup, moisture barrier installation, insulation replacement, fumigation, and pest exclusion for residential crawl spaces. Call (866) 755-1284.',
    heroHeadline: 'Crawl Space Pest Problems in Los Angeles? We Fix the Whole Environment.',
    heroSubhead: 'The crawl space under your Los Angeles home is where rodent nesting, termite activity, moisture damage, and pest harborage converge out of sight. We inspect, treat, clean, and seal your crawl space completely.',
    symptoms: [
      'Rodent activity sounds (scratching, movement) coming from under the floor, not from the walls or attic — under-floor sounds that intensify in certain rooms indicate harborage in the crawl space directly beneath',
      'A persistent musty, ammonia, or animal odor in ground-floor rooms that worsens in humid weather — contaminated crawl space insulation and nesting debris produces odors that migrate through floor gaps and HVAC returns into the living space',
      'Evidence of rodent entry into the crawl space through damaged or missing foundation vents, gaps around plumbing penetrations, or broken perimeter screening',
      'Sagging or damaged insulation on the underside of floors — rodents, moisture, and gravity cause batt insulation to fall from floor joists, reducing energy efficiency and creating open harborage space in the subfloor cavity',
      'Mud tubes on foundation walls or floor joists in the crawl space — subterranean termites access floor framing from the soil through the crawl space and their mud tubes are a definitive sign of active infestation',
      'Standing water, excessive moisture, or visible mold on subfloor framing during or after the rainy season — moisture in the crawl space creates conditions for wood rot and fungal decay that attract wood-destroying insects and weaken the structure',
      'Pest activity inside the home despite exterior exclusion work — when rodents or insects cannot be eliminated with standard treatment, an accessible crawl space is frequently the overlooked harborage and entry route',
    ],
    process: [
      {
        step: 'Crawl Space Inspection',
        detail: 'We enter and inspect the full extent of the crawl space — foundation walls, perimeter vents, floor joist condition, subfloor insulation, soil surface, plumbing and utility penetrations, and any access points. We document all pest activity evidence (droppings, nesting, runways, mud tubes), moisture conditions, damaged insulation, and structural concerns. We photograph the interior conditions before any work begins to provide you with a clear picture of the existing situation.',
      },
      {
        step: 'Pest Treatment',
        detail: 'Based on the pest species found, we conduct appropriate targeted treatment inside the crawl space — rodent trapping and exclusion sealing of foundation entry points, termiticide soil application or foam injection for subterranean termite activity, insecticide application for cockroach or other insect harborage in the crawl space, and treatment of any identified pest harborage on floor joists or foundation walls. Treatment is tailored to the specific pests documented during inspection.',
      },
      {
        step: 'Debris and Contamination Cleanup',
        detail: 'Rodent nesting debris, contaminated insulation, and accumulated organic matter are removed from the crawl space. Rodent waste in crawl spaces presents genuine health risks — Baylisascaris (raccoon roundworm) and hantavirus are transmitted through aerosolized contaminated material. Our technicians work in appropriate respiratory protection and remove all contaminated material for proper disposal. We treat the soil surface with a disinfectant formulation where heavy contamination was present.',
      },
      {
        step: 'Moisture Barrier Installation',
        detail: 'We install a heavy-gauge polyethylene vapor barrier on the soil surface of the crawl space. Vapor barriers reduce moisture vapor migration from the soil into the subfloor framing — the primary cause of wood rot, fungal growth, and conditions attractive to subterranean termites and wood boring insects in LA crawl spaces. We seal the barrier at foundation walls and overlap seams to maximize moisture control.',
      },
      {
        step: 'Exclusion and Vent Screening',
        detail: 'We seal all identified pest entry points into the crawl space — replacing damaged foundation vent screens with heavy-gauge hardware cloth, sealing gaps around plumbing penetrations, and closing any perimeter access gaps. We also inspect and seal the connection between the crawl space and the living space — gaps around pipes, HVAC ducts, and floor penetrations that allow pests and odors to migrate upward into the home.',
      },
    ],
    safetyPrep: [
      'Do not enter the crawl space yourself before our inspection — confined spaces with accumulated rodent waste require respiratory protection, and the structural and environmental conditions (moisture, pest presence) should be assessed before entry',
      'Locate and provide access to all crawl space entry hatches before our arrival — access hatches are sometimes beneath carpet, inside closets, or behind storage that needs to be moved',
      'Inform us if there is any known or suspected mold or structural damage in the crawl space — our inspection will assess these conditions, but prior knowledge helps us prepare appropriate equipment',
      'Keep pets away from crawl space access points during and after treatment — pest products used in crawl spaces may be accessible to pets through foundation vents until sealed',
      'If your HVAC system draws air from the crawl space (common in some older LA homes), inform us so we can ensure treatment timing and product selection accounts for HVAC air quality',
    ],
    aftercare: [
      'Check foundation vents and perimeter screening quarterly for damage — wildlife, lawn maintenance equipment, and weather can damage exclusion screening and create re-entry points',
      'Monitor ground-floor rooms for any return of musty or animal odors — odor recurrence after crawl space remediation indicates either a new pest infestation or a moisture condition that has developed since our treatment',
      'Maintain gutters and downspout drainage to direct water away from the foundation — water pooling against the foundation perimeter is the primary source of crawl space moisture in Los Angeles, particularly during and after El Nino rain seasons',
      'Do not store wood, cardboard, or organic materials against the exterior foundation wall or inside the crawl space — these materials attract termites, cockroaches, and rodents to the substructure',
      'Schedule an annual crawl space re-inspection — the crawl space environment changes seasonally with moisture levels and is the most common location for early-stage pest problems to go undetected',
    ],
    faqs: [
      {
        q: 'Why is my crawl space such a problem area for pests?',
        a: 'Crawl spaces provide exactly the conditions pests seek — dark, enclosed, relatively undisturbed, with direct soil contact and proximity to the structure\'s plumbing, wiring, and framing. In Los Angeles, the combination of aging housing stock (many homes built before 1960 have substandard crawl space vent screening and aging vapor barriers), year-round mild temperatures that allow pests to remain active, and a dense urban wildlife population creates persistent crawl space pest pressure. Most crawl space problems go undetected for years because homeowners rarely inspect them.',
      },
      {
        q: 'Do I need to have my crawl space insulation replaced after a rodent infestation?',
        a: 'Heavily contaminated insulation — insulation with visible rodent droppings, nesting material, urine staining, or significant rodent damage — should be replaced. Contaminated batt insulation loses its R-value effectiveness, poses an ongoing health risk from airborne particles, and can continue attracting rodents through pheromone scent marking even after the infestation is resolved. We assess insulation condition during our inspection and provide a recommendation based on actual contamination level, not a blanket replacement recommendation.',
      },
      {
        q: 'How does moisture in the crawl space cause pest problems?',
        a: 'Moisture in the crawl space elevates wood moisture content in subfloor framing, which creates conditions for wood rot and fungal decay. Softened, moisture-damaged wood is significantly more vulnerable to subterranean termite attack and wood boring beetle infestation. Moisture also attracts cockroaches, silverfish, and other moisture-dependent insects into the substructure. In Los Angeles, crawl space moisture problems are most acute during and after the winter rainy season and in properties with inadequate drainage around the foundation.',
      },
      {
        q: 'Can I use my crawl space for storage after treatment and sealing?',
        a: 'We do not recommend using crawl spaces for storage. Stored organic materials (cardboard boxes, wood, fabric items) in a crawl space create pest harborage, retain moisture, and make future inspections more difficult and less thorough. If you must use the crawl space for storage, use only hard-sided plastic containers elevated off the soil surface, and ensure the stored items do not block foundation vents or obstruct access for future inspections.',
      },
    ],
    schema: {
      serviceType: 'Crawl Space Treatment',
      description: 'Crawl space pest treatment, cleanup, moisture barrier installation, and exclusion sealing for homes in Los Angeles, CA.',
    },
    relatedServices: ['rat-rodent-control', 'rodent-proofing', 'termite-control'],
    category: 'specialty',
  },
]
