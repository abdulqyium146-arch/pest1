export interface TreatmentStep {
  step: string
  detail: string
}

export interface TreatmentFAQ {
  q: string
  a: string
}

export interface Treatment {
  slug: string
  name: string
  category: 'chemical' | 'thermal' | 'biological' | 'mechanical' | 'integrated'
  description: string
  heroHeadline: string
  heroSubhead: string
  overview: string
  howItWorks: string
  targetPests: string[]
  process: TreatmentStep[]
  effectiveness: string
  pros: string[]
  cons: string[]
  costFactors: string[]
  preparation: string[]
  faqs: TreatmentFAQ[]
  relatedServices: string[]
  schema: { name: string; description: string }
}

export const treatments: Treatment[] = [
  {
    slug: 'heat-treatment',
    name: 'Thermal Heat Treatment',
    category: 'thermal',
    description:
      'Thermal heat treatment reaches 120–135°F to kill all bed bug and insect life stages in a single visit. OCP provides whole-room heat treatment throughout Los Angeles.',
    heroHeadline: 'Heat Treatment Los Angeles — Kill Bed Bugs in One Visit, No Chemicals',
    heroSubhead:
      'OCP Pest Control\'s thermal heat treatment penetrates walls, mattresses, and furniture to eliminate every insect life stage — including eggs — in a single day.',
    overview:
      'Thermal heat treatment is the most effective single-treatment method for bed bug elimination available in Los Angeles, achieving 100% mortality across all life stages — eggs, nymphs, and adults — when the target zone is raised to 120–135°F and held at that temperature for a minimum of 4 continuous hours. Unlike chemical treatments, heat penetrates into mattress interiors, wall voids, furniture joints, and electronics — places residual insecticides cannot reach. OCP uses commercial-grade propane and electric heating equipment with multiple temperature probes throughout the treatment zone to guarantee lethal temperature is maintained throughout.',
    howItWorks:
      'Heat treatment kills insects through protein denaturation — at temperatures above 113°F (45°C), cellular proteins in insects irreversibly unfold and cease to function, causing fatal physiological breakdown. The thermal death point for Cimex lectularius eggs is 118°F for 90 minutes; adults and nymphs die faster. By driving room temperatures to 135°F, we ensure all cold spots (inside mattresses, behind walls, inside electronics) exceed the lethal threshold, achieving a complete lethal thermal dose throughout the treated space.',
    targetPests: [
      'bed-bugs',
      'fleas',
      'cockroaches',
      'beetles',
      'clothes-moths',
    ],
    process: [
      {
        step: 'Pre-Treatment Inspection',
        detail: 'OCP technicians conduct a detailed inspection to map infestation zones, identify heat-sensitive items (candles, vinyl records, aerosols) for removal, and establish sensor placement points throughout the unit.',
      },
      {
        step: 'Heat Equipment Setup',
        detail: 'Commercial heating units (electric or propane) and distribution fans are positioned throughout the treatment space. Temperature sensors are placed at the coldest predicted locations: inside closets, under beds, inside mattresses, and along exterior walls.',
      },
      {
        step: 'Temperature Ramp-Up',
        detail: 'The space is gradually heated over 2–3 hours to a target ambient temperature of 130–135°F. Technicians monitor all sensor readings in real time via wireless data loggers, repositioning fans to address cold spots.',
      },
      {
        step: 'Lethal Temperature Hold',
        detail: 'Target temperature is maintained for a minimum of 4 hours once all sensors confirm the space has reached the lethal threshold. Furniture is repositioned mid-treatment to expose harborage areas and ensure complete heat penetration.',
      },
      {
        step: 'Cool-Down and Post-Inspection',
        detail: 'Equipment is removed and the space allowed to cool. OCP technicians conduct a post-treatment inspection, applying a residual insecticide perimeter treatment to kill any insects that may have escaped to adjacent areas during treatment.',
      },
    ],
    effectiveness:
      'When performed by trained technicians with proper temperature monitoring, thermal heat treatment achieves 97–100% mortality in the treated zone in a single visit, as validated by university entomology studies including research by UC Riverside\'s Center for Invasive Species Research. A single follow-up inspection at 14 days is included in all OCP heat treatment programs.',
    pros: [
      'Single-treatment elimination — no 2–3 visit chemical program needed',
      'No chemical residue — safe for infants, pregnant residents, and chemically sensitive individuals',
      'Penetrates all harborage areas including mattress interiors, electronics, and wall voids',
      'Eliminates all life stages simultaneously, including chemically resistant eggs',
      'Occupants return the same day — no overnight hotel stay required',
    ],
    cons: [
      'Heat-sensitive items (aerosols, candles, plants, pets, vinyl records) must be removed before treatment',
      'Cannot provide residual protection — new introductions after treatment are not prevented',
      'Less effective as a standalone treatment in multi-unit LA buildings where adjacent units are untreated',
      'Higher upfront cost than initial chemical treatment visit alone',
    ],
    costFactors: [
      'Square footage of the treatment zone — larger LA apartments and homes require more equipment',
      'Severity and distribution of the infestation — heavily infested units require longer holds',
      'Number of floors and structural complexity affecting heat distribution',
      'Whether adjacent units require simultaneous treatment in LA multi-unit buildings',
      'Emergency same-day service requests vs. scheduled appointments',
    ],
    preparation: [
      'Remove all aerosol cans, pressurized containers, candles, wax items, and fresh flowers from the treatment area',
      'Remove pets, plants, fish tanks, and any live organisms from the space',
      'Remove heat-sensitive items: vinyl records, fine art, musical instruments, and medications',
      'Wash all linens and clothing in hot water and seal in plastic bags before treatment day',
      'Leave all interior doors, drawers, and closets open to maximize heat circulation',
      'Arrange to be away from the property for 8–10 hours on treatment day',
    ],
    faqs: [
      {
        q: 'Does heat treatment damage my furniture, walls, or electronics?',
        a: 'Modern flat-screen TVs, laptops, and most electronics tolerate temperatures up to 130°F — the same temperatures reached in a car on an LA summer day. However, we recommend removing desktop computers, external hard drives, wax-based items, and aerosols as a precaution. Walls, furniture, flooring, and most household items are unaffected at treatment temperatures.',
      },
      {
        q: 'Can I do heat treatment in just one room of my LA apartment?',
        a: 'Yes. Single-room or partial-unit treatment is available and appropriate when the infestation is confirmed localized. However, we perform a whole-unit inspection to confirm containment. In LA\'s multi-unit buildings, bed bugs frequently travel between units, and treating a single room without addressing adjacent areas often results in reinfestation.',
      },
      {
        q: 'How is heat treatment different from the heat of a hot LA summer day?',
        a: 'Outdoor LA summer temperatures rarely exceed 100–105°F even in the Valley. Bed bugs require sustained exposure to 118°F+ for lethal effect. Interior spaces in a home, even on hot summer days, rarely exceed 90°F without active heating. Our commercial heating systems drive room temperatures to 130–135°F and hold them there for 4+ hours — far beyond what ambient weather produces.',
      },
      {
        q: 'Will heat treatment work for my entire apartment building?',
        a: 'Whole-building heat treatment is available for LA multi-unit properties. We coordinate with building management to treat all infested units and adjacent units simultaneously. This approach is the most effective strategy for LA apartment buildings where bed bugs have spread through multiple floors.',
      },
    ],
    relatedServices: [
      'bed-bug-treatment',
      'flea-treatment',
      'inspection',
    ],
    schema: {
      name: 'Thermal Heat Treatment',
      description:
        'Thermal heat treatment kills bed bugs and all life stages in a single visit by raising temperatures to 120–135°F. OCP provides professional heat treatment throughout Los Angeles.',
    },
  },
  {
    slug: 'fumigation',
    name: 'Whole-Structure Fumigation',
    category: 'chemical',
    description:
      'Whole-structure fumigation with Vikane (sulfuryl fluoride) is the only treatment that eliminates drywood termites in every part of your LA home. Licensed by CDPR.',
    heroHeadline: 'Termite Fumigation Los Angeles — Complete Drywood Termite Elimination',
    heroSubhead:
      'OCP Pest Control\'s licensed Vikane fumigation eliminates 100% of drywood termites throughout your entire LA home in one treatment.',
    overview:
      'Whole-structure fumigation using Vikane (sulfuryl fluoride) is the California Department of Pesticide Regulation (CDPR)-licensed treatment recognized as the gold standard for eliminating drywood termites throughout an entire structure. It is the only treatment method that simultaneously reaches every piece of wood, furniture item, and void within the structure regardless of accessibility, making it the preferred approach when drywood termite activity is detected in multiple locations throughout an LA home. OCP Pest Control holds active CDPR structural fumigation licenses and employs certified fumigants required by California law.',
    howItWorks:
      'Sulfuryl fluoride (Vikane) is a colorless, odorless, non-flammable gas that penetrates all materials — wood, concrete, plaster, and furniture — distributing evenly throughout the tented structure. At the required concentration and exposure time (calculated as CT value: concentration × time), the gas interferes with cellular respiration in insects, killing all life stages including eggs, nymphs, and adults. After treatment, the structure is aerated to below the 1 ppm CDPR clearance level before any re-entry is permitted.',
    targetPests: [
      'termites',
      'bed-bugs',
      'beetles',
      'cockroaches',
      'stored-product-pests',
    ],
    process: [
      {
        step: 'Pre-Fumigation Inspection and Preparation',
        detail: 'OCP conducts a full inspection documenting all termite damage locations and confirms the structure\'s suitability for fumigation. A detailed preparation checklist is provided to the homeowner covering food bagging, medication removal, and plant care.',
      },
      {
        step: 'Structure Tenting',
        detail: 'The entire structure is draped with multi-layer fumigation tarps (Fumigans or equivalent) and sealed at the foundation using sand snakes and weighted materials. A secondary fumiscope seal is placed around door openings. Warning agents (warning agents with tear-gas component) are posted at all entrances.',
      },
      {
        step: 'Gas Introduction and Monitoring',
        detail: 'Sulfuryl fluoride is introduced into the sealed structure in calculated doses based on cubic footage, temperature, and wood density. Concentration levels are monitored at multiple points throughout the structure using fumiscope monitoring equipment over the 24–72 hour treatment period.',
      },
      {
        step: 'CT Value Verification',
        detail: 'OCP\'s licensed fumigant confirms that the required concentration-time (CT) value has been achieved at all monitoring points — a California legal requirement. No early aeration is permitted until CT requirements are met throughout the entire structure.',
      },
      {
        step: 'Aeration and Clearance Testing',
        detail: 'Tarps are removed and the structure is aerated for a minimum of 6 hours with all windows and doors open. Before re-entry is permitted, all areas of the structure are tested with a calibrated gas detection instrument to confirm levels below 1 ppm — the CDPR re-entry clearance standard.',
      },
    ],
    effectiveness:
      'Whole-structure fumigation achieves 100% mortality of all drywood termite life stages throughout the treated structure when performed at required CT values, which is why it is the only treatment recognized by the California Structural Pest Control Board for a whole-structure drywood termite clearance on WDPO reports. It does not provide residual protection against new termite introduction after treatment.',
    pros: [
      'Only treatment that reaches all wood in the structure simultaneously, including inaccessible areas',
      'Eliminates all life stages of drywood termites — including eggs — throughout the entire structure',
      'Required for whole-structure WDPO clearance in California real estate transactions',
      'Effective against multiple pest species simultaneously: termites, bed bugs, and stored-product pests',
      'Established, well-regulated industry standard with over 50 years of use in California',
    ],
    cons: [
      'Requires 24–72 hours of evacuation including pets — occupants must arrange alternative accommodation',
      'No residual protection — new termites can enter the structure after fumigation',
      'All food, medications, and plants must be removed or double-bagged in Nylofume bags',
      'Not effective against subterranean termites, which require soil-barrier treatment',
    ],
    costFactors: [
      'Total cubic footage of the structure — the primary cost driver for LA homes',
      'Roof complexity and tenting difficulty for LA multi-story or complex roofline structures',
      'Whether WDPO report clearance documentation is required for real estate purposes',
      'Distance and logistics for multi-structure properties or LA hillside properties with limited access',
      'Re-inspection and clearance certification included in OCP fumigation packages',
    ],
    preparation: [
      'Remove or double-bag all food, beverages, medications, and vitamins in certified Nylofume bags provided by OCP',
      'Remove all plants, pets, fish tanks, and living organisms from the structure',
      'Arrange 2–3 nights of alternative accommodation for all occupants and pets',
      'Unlock all interior doors, attic access hatches, and crawl space entry points',
      'Trim all vegetation to at least 12 inches from the structure to allow proper tarp sealing',
      'Coordinate with neighbors regarding shared fences or overhanging structures if present',
    ],
    faqs: [
      {
        q: 'How long do I have to be out of my LA home during fumigation?',
        a: 'Most LA residential fumigations require 24–72 hours of evacuation, typically 2 nights and 3 days. The exact timeline depends on structure size, temperature, and achieved CT values. OCP provides a confirmed re-entry date and time after clearance testing — you cannot return until OCP certifies the structure is below 1 ppm Vikane.',
      },
      {
        q: 'Does fumigation kill the termite eggs too?',
        a: 'Yes — this is one of the key advantages of Vikane fumigation over localized spot treatments. Sulfuryl fluoride penetrates wood to the cellular level and kills all life stages including eggs at required CT values. Spot treatments with orange oil or foam cannot guarantee egg kill in wood not directly contacted.',
      },
      {
        q: 'Is Vikane safe after I re-enter my LA home?',
        a: 'Yes. OCP performs calibrated gas detection throughout the home before authorizing re-entry. Vikane does not leave surface residue — it dissipates completely during aeration. There are no surfaces to wipe down and no residual chemical on furniture, dishes, or children\'s toys after clearance is confirmed.',
      },
      {
        q: 'Will fumigation prevent future termite infestations?',
        a: 'No — fumigation eliminates all existing termites but leaves no residual barrier. New drywood termites can enter the structure during the next swarming season. OCP recommends annual termite inspections and can apply borate preventive wood treatments to exposed wood during attic inspections to provide longer-term protection.',
      },
    ],
    relatedServices: [
      'termite-control',
      'heat-treatment',
      'wood-repair',
    ],
    schema: {
      name: 'Whole-Structure Fumigation',
      description:
        'Whole-structure fumigation with Vikane eliminates all drywood termites throughout your LA home. OCP Pest Control is CDPR-licensed for structural fumigation throughout Los Angeles County.',
    },
  },
  {
    slug: 'liquid-treatment',
    name: 'Liquid Residual Insecticide Treatment',
    category: 'chemical',
    description:
      'Liquid residual insecticide applications provide lasting pest control for LA homes and businesses. OCP applies EPA-registered products targeting cockroaches, ants, spiders, and more.',
    heroHeadline: 'Liquid Pest Treatment Los Angeles — Lasting Residual Insecticide Protection',
    heroSubhead:
      'OCP Pest Control applies targeted liquid residual treatments to eliminate and prevent pests in LA homes and commercial properties.',
    overview:
      'Liquid residual insecticide treatment is the most versatile and widely applicable pest control method in Los Angeles, used for perimeter protection, indoor harborage treatment, and direct contact kill of a broad spectrum of crawling and flying pests. Modern liquid formulations include micro-encapsulated products that adhere to surfaces, wettable powders that provide extended residuality, and low-odor aqueous concentrates suitable for food-handling environments. OCP selects products from multiple active ingredient classes to prevent resistance development, a significant concern in LA\'s high-density urban pest populations.',
    howItWorks:
      'Liquid residual insecticides kill insects through contact with treated surfaces or direct spray contact. Most modern formulations work via nervous system disruption — pyrethroids block sodium channels causing prolonged nerve firing and death; organophosphates and carbamates inhibit acetylcholinesterase. Micro-encapsulated formulations release active ingredient slowly from polymer capsules, extending residual activity on surfaces from 30 to 90 days depending on the product, substrate, and LA environmental conditions. Insects do not need to be directly sprayed — contact with treated surfaces for seconds to minutes is sufficient for transfer of a lethal dose.',
    targetPests: [
      'cockroaches',
      'ants',
      'spiders',
      'wasps',
      'fleas',
      'silverfish',
      'earwigs',
    ],
    process: [
      {
        step: 'Pre-Treatment Inspection',
        detail: 'Technician surveys the property to identify pest species, active harborage locations, entry points, and conducive conditions. Product selection and application sites are determined based on inspection findings and the specific pest pressures in the LA property.',
      },
      {
        step: 'Interior Crack-and-Crevice Application',
        detail: 'Low-volume precision application of residual concentrate is made to baseboards, under and behind appliances, inside wall void openings, and along plumbing runs where pests harborage. In food facilities, this step uses only food-safe exempt or registered formulations at food-handler-safe rates.',
      },
      {
        step: 'Perimeter Barrier Treatment',
        detail: 'A continuous barrier application is made along the exterior foundation, up the walls to 2–3 feet, around all door and window frames, and across utility penetrations. For LA properties, this perimeter barrier is the primary defense against Argentine ant invasion and general crawling pest entry.',
      },
      {
        step: 'Harborage and Void Treatment',
        detail: 'Drill-and-treat application into wall voids, foam expansion into pipe chases, and direct application to identified harborage sites such as corrugated cardboard in commercial settings or under-equipment areas in LA restaurants.',
      },
      {
        step: 'Post-Treatment Documentation and Follow-Up',
        detail: 'OCP provides a service record documenting all products applied, EPA registration numbers, rates, and locations — required for LA County Health permit holders. A follow-up inspection at 30 days assesses treatment efficacy and pest activity reduction.',
      },
    ],
    effectiveness:
      'Liquid residual treatments achieve 70–90% reduction in crawling pest populations within 7–14 days of first application; a second treatment at 30 days raises efficacy to 95%+ for most LA residential pest pressures. Residual effectiveness varies from 30–90 days depending on surface porosity, UV exposure, and cleaning frequency, making quarterly maintenance service the standard recommendation for LA food businesses.',
    pros: [
      'Broad-spectrum efficacy against a wide range of LA pest species in a single treatment',
      'Flexible formulations available for food-contact surfaces, outdoor perimeters, and indoor crack-and-crevice',
      'Residual activity of 30–90 days reduces service frequency compared to non-residual methods',
      'Cost-effective for routine preventive maintenance programs for LA commercial properties',
      'Available as low-odor, non-staining aqueous formulations suitable for occupied LA apartments',
    ],
    cons: [
      'Cannot penetrate into sealed harborage areas as effectively as fumigation or heat treatment',
      'Surface residual degraded by cleaning, sunlight, and rain on exterior surfaces',
      'Resistance to pyrethroid insecticides documented in German cockroach populations in LA — requires rotation',
      'Re-entry interval of 4 hours required after indoor treatment for sensitive populations',
    ],
    costFactors: [
      'Square footage and number of rooms in the treatment area',
      'Pest species and infestation severity — German cockroaches require more intensive multi-visit programs',
      'Whether food facility-grade products are required for LA restaurants and commercial kitchens',
      'Frequency of service — monthly, bi-monthly, or quarterly programs for LA commercial clients',
      'Number and accessibility of harborage areas requiring void and crack-and-crevice treatment',
    ],
    preparation: [
      'Clear all items away from baseboards, under sinks, and under appliances to allow technician access',
      'Remove all food items and dishes from cabinets being treated or cover with plastic in food preparation areas',
      'Empty and clean pet food and water bowls before treatment and keep pets out for 4 hours post-treatment',
      'Plan to vacate the treatment area for a minimum of 4 hours (longer for sensitive individuals)',
      'Inform OCP of any household members with chemical sensitivities, asthma, or pregnancy for appropriate product selection',
      'Ensure all windows and doors can be opened for ventilation during indoor applications',
    ],
    faqs: [
      {
        q: 'How long do I need to stay out of my LA home after liquid treatment?',
        a: 'Standard re-entry time is 4 hours after spray has dried, which occurs within 30–60 minutes in LA\'s climate. Infants, pregnant individuals, and those with respiratory conditions should extend to 8 hours. All pets should remain out until surfaces are dry. OCP uses low-odor aqueous formulations that minimize exposure concern.',
      },
      {
        q: 'Is liquid treatment safe around my children and pets in LA?',
        a: 'EPA-registered pesticides applied at label rates by licensed applicators meet federal and California safety standards for residential use. Re-entry intervals protect residents during the highest-exposure window. We use reduced-risk chemistries in homes with young children and offer organic botanical alternatives. Always inform OCP of household sensitivities before treatment.',
      },
      {
        q: 'How often do I need liquid treatments to keep my LA home pest-free?',
        a: 'For LA residential pest prevention, quarterly treatments align with pest reproductive cycles and provide overlapping residual coverage year-round. Monthly service is recommended for LA food businesses subject to health inspections. A one-time treatment without follow-up service typically shows pest rebound within 60–90 days as new pests enter from the urban environment.',
      },
      {
        q: 'Why are some cockroaches in my LA building not dying from the spray?',
        a: 'German cockroach populations in LA urban settings have developed documented resistance to pyrethroid insecticides — the most common class of liquid residual products. OCP combats resistance by rotating active ingredient classes (e.g., pyrethroid → neonicotinoid → organophosphate rotations) and supplementing with non-resistance-prone bait gel treatments alongside liquid applications.',
      },
    ],
    relatedServices: [
      'general-pest-control',
      'cockroach-control',
      'ant-control',
      'commercial-pest-control',
    ],
    schema: {
      name: 'Liquid Residual Insecticide Treatment',
      description:
        'Liquid residual insecticide treatment provides lasting pest control for LA homes and businesses. OCP Pest Control applies EPA-registered products targeting cockroaches, ants, and spiders throughout Los Angeles.',
    },
  },
  {
    slug: 'bait-stations',
    name: 'Bait Station Programs',
    category: 'integrated',
    description:
      'Rodent and termite bait station programs provide continuous monitoring and control for LA properties. OCP manages tamper-resistant bait stations for lasting pest management.',
    heroHeadline: 'Bait Station Programs Los Angeles — Continuous Rodent and Termite Monitoring',
    heroSubhead:
      'OCP Pest Control installs and services tamper-resistant bait stations for ongoing rodent control and subterranean termite management throughout LA County.',
    overview:
      'Bait station programs represent the most sophisticated ongoing pest management strategy available for Los Angeles properties, combining targeted toxic bait delivery with continuous population monitoring. For rodents, tamper-resistant exterior bait stations placed around LA properties intercept invading rats and mice before they enter structures, providing 24/7 passive control between service visits. For subterranean termites, in-ground termite bait stations monitor for foraging termite activity and deliver insect growth regulators (IGRs) that suppress entire colony populations over months of feeding.',
    howItWorks:
      'Rodent bait stations use single-feed anticoagulant rodenticides (brodifacoum, bromadiolone, or diphacinone formulations based on LA\'s secondary poisoning risk assessment for local raptors) placed inside tamper-resistant lockable housings that only target-sized rodents can enter. Termite bait stations use hexaflumuron or noviflumuron IGRs — termite workers carry bait back to the colony, where the molting inhibitor spreads through trophallaxis, eventually killing the colony\'s entire workforce by preventing successful molting. Monitoring visits every 30–90 days confirm bait consumption and station activity, alerting technicians to active pressure zones.',
    targetPests: [
      'rats',
      'mice',
      'termites',
    ],
    process: [
      {
        step: 'Site Assessment and Station Placement Design',
        detail: 'OCP conducts a full exterior assessment to identify rodent runways, entry points, and termite-conducive areas. Station placement map is created for the LA property, positioning rodent stations at 25–50 foot intervals along fence lines, at building corners, and near known travel corridors.',
      },
      {
        step: 'Station Installation',
        detail: 'Tamper-resistant bait stations are secured to fixed structures or staked into soil. Termite bait stations are augered 4–6 inches into the ground at 10-foot intervals around the structure perimeter. All stations are logged with GPS coordinates and labeled for service tracking.',
      },
      {
        step: 'Bait Loading and Basal Monitoring',
        detail: 'Rodent stations are loaded with approved bait formulations. Termite stations are initially loaded with untreated wood monitoring cartridges (no bait until termite activity is detected). Service records document baseline activity levels for all stations on the LA property.',
      },
      {
        step: 'Regular Monitoring Service',
        detail: 'Monthly or quarterly service visits include inspecting all stations for bait consumption, rodent activity signs, and termite feeding. Active termite monitoring stations are upgraded to bait cartridges. Bait levels are replenished and stations are cleaned and re-secured.',
      },
      {
        step: 'Reporting and Trend Analysis',
        detail: 'OCP provides written service reports after each visit documenting active station locations, bait consumed, and activity trends. For LA commercial properties, reports are formatted for LA County Health permit compliance review and property management records.',
      },
    ],
    effectiveness:
      'Rodent bait station programs reduce exterior rodent pressure by 80–95% within 60–90 days at a properly designed property in LA. Termite bait programs eliminate active subterranean termite colonies within 3–6 months of confirmed station feeding, as validated by Sentricon and Advance system efficacy studies conducted in California conditions.',
    pros: [
      'Passive 24/7 control between service visits — unlike spray treatments that fade within weeks',
      'Tamper-resistant housings protect LA wildlife, children, and pets from accidental bait access',
      'Continuous monitoring provides early warning of new rodent or termite pressure before infestations establish',
      'Termite bait IGRs are low-toxicity to mammals — minimal human health concern',
      'Ideal for LA commercial properties requiring ongoing pest management documentation for Health Department compliance',
    ],
    cons: [
      'Slower-acting than direct treatment methods — rodent bait programs require 4–6 weeks for full effect',
      'Require ongoing service visits and bait replenishment — not a one-time solution',
      'Bait shyness (neophobia) in established rodent populations may delay station acceptance initially',
      'Subterranean termite bait programs do not prevent new colonies from foraging the property after colony elimination',
    ],
    costFactors: [
      'Number of bait stations required based on LA property perimeter length',
      'Type of station program: rodent only, termite only, or combined integrated program',
      'Service frequency — monthly commercial programs vs. quarterly residential service',
      'Whether a one-time initial treatment is needed alongside bait program initiation',
      'Property size and pest pressure level — commercial food facilities in LA require denser station networks',
    ],
    preparation: [
      'Clear vegetation, debris, and obstructions from planned station locations to allow installation access',
      'Identify and disclose any areas where children, pets, or wildlife have regular access for station placement adjustment',
      'For termite programs, ensure irrigation does not flood termite station locations (drainage should be adequate)',
      'Commercial LA property managers should provide site map and access to all exterior perimeter areas',
      'Notify OCP of any recent changes to landscaping, concrete work, or foundation areas that may affect station access',
      'Ensure all staff or residents who may encounter stations are informed of their purpose and not to tamper with them',
    ],
    faqs: [
      {
        q: 'Are rodent bait stations safe if I have dogs or children at my LA home?',
        a: 'Yes — OCP uses tamper-resistant stations certified to USEPA standards, which require an 85+ lb force to open without the key. The entry openings are sized to admit only mouse and rat-sized animals. We also offer snap-trap-only programs for LA households with strong secondary poisoning concerns due to raptors or coyotes in the area.',
      },
      {
        q: 'How is a termite bait station different from a soil termiticide treatment?',
        a: 'Liquid termiticide treatments (Termidor, Altriset) create a chemical zone in the soil that termites contact and either die from directly or carry back to the colony. Termite bait stations are passive monitors that only become active when termites find them — then deliver a colony-killing IGR via the workers\' food-sharing behavior. Bait programs are preferred for LA properties with landscaping, irrigation systems, or structures where soil drilling is impractical.',
      },
      {
        q: 'How long does a rodent bait program take to work in my LA neighborhood?',
        a: 'Expect 2–4 weeks for neophobic behavior to subside and rodents to begin accepting stations, then another 2–4 weeks for lethal bait doses to take effect. Peak reduction in roof rat activity around a typical LA single-family home is typically observed at 6–8 weeks after program initiation. Exclusion work performed concurrently dramatically accelerates the population elimination.',
      },
      {
        q: 'Do I still need bait stations if I had fumigation for termites?',
        a: 'Fumigation eliminates existing drywood termites but leaves no residual protection. A post-fumigation subterranean termite bait station program makes excellent sense for LA homes, as subterranean termites are often present simultaneously and are not affected by fumigation. Ongoing monitoring also alerts you to new drywood termite activity before a second fumigation becomes necessary.',
      },
    ],
    relatedServices: [
      'rat-control',
      'termite-control',
      'rodent-exclusion',
      'commercial-pest-control',
    ],
    schema: {
      name: 'Bait Station Programs',
      description:
        'Rodent and termite bait station programs provide continuous monitoring and control for Los Angeles properties. OCP Pest Control manages tamper-resistant bait station networks throughout LA County.',
    },
  },
  {
    slug: 'exclusion',
    name: 'Physical Pest Exclusion',
    category: 'mechanical',
    description:
      'Physical pest exclusion permanently seals entry points to prevent rodents and wildlife from entering your LA home. OCP provides guaranteed exclusion work throughout Los Angeles.',
    heroHeadline: 'Pest Exclusion Los Angeles — Permanently Seal Rodents and Wildlife Out',
    heroSubhead:
      'OCP Pest Control\'s professional exclusion services use commercial-grade materials to permanently block rodent and wildlife entry into LA homes and businesses.',
    overview:
      'Physical pest exclusion — the practice of identifying and permanently sealing all structural entry points that allow pests into a building — is the most durable and cost-effective long-term pest prevention strategy available for Los Angeles properties. Unlike chemical treatments that fade over time, properly installed exclusion materials remain effective for the life of the structure. In LA, where roof rat activity is driven by trees and palm contact with rooflines, and where mice exploit the countless gaps in aging Craftsman, Spanish, and mid-century building stock, exclusion is the only way to achieve lasting protection against rodent reinfestation.',
    howItWorks:
      'Exclusion works by physically preventing pest entry through every opening larger than the target pest\'s access threshold: 6 mm for mice, 12 mm for roof rats, and progressively larger for Norway rats and wildlife. OCP technicians systematically inspect the entire building envelope — foundation, walls, roof, and utilities — identifying and sealing all gaps with materials that pests cannot chew through or dislodge, including 1/4-inch galvanized hardware cloth (16 or 19 gauge), stainless steel wool mixed with caulk (Xcluder), metal flashing, and commercial-grade expanding foam. Entry points are prioritized by size, location, and species of concern for the specific LA property.',
    targetPests: [
      'rats',
      'mice',
      'wildlife',
      'cockroaches',
      'wasps',
    ],
    process: [
      {
        step: 'Full Exterior Pest Entry Audit',
        detail: 'OCP technicians systematically walk the entire building exterior documenting every potential entry point with photographs. The inspection covers the foundation line, weep screeds, all utility penetrations, roof vents, soffit returns, fascia boards, chimney, HVAC penetrations, and any existing rodent gnaw damage.',
      },
      {
        step: 'Prioritization and Material Selection',
        detail: 'Entry points are categorized by severity, size, and pest risk. Material specifications are selected based on opening type: hardware cloth for vent covers, Xcluder fill for gaps around pipes, sheet metal flashing for larger structural gaps, copper mesh for irregular voids, and silicone caulk for hairline cracks.',
      },
      {
        step: 'Foundation and Ground-Level Sealing',
        detail: 'All weep screeds, expansion joints, foundation vents, and ground-level gaps are sealed. L-shaped hardware cloth aprons are installed at potential digging points for skunk and opossum exclusion in LA hillside and suburban properties.',
      },
      {
        step: 'Roof and Attic Exclusion',
        detail: 'All roof vents, ridge vents, soffit returns, turbine vents, and pipe penetrations through the roof deck are covered with 1/4-inch 19-gauge galvanized hardware cloth secured with construction screws or stainless steel staples. Chimney caps are installed or repaired. Fascia gaps are closed with sheet metal or foam backer.',
      },
      {
        step: 'Post-Exclusion Inspection and Warranty',
        detail: 'A final inspection documents all completed exclusion points. OCP provides a written 1-year workmanship warranty on all exclusion work. A follow-up inspection at 30 days confirms no new breach points have appeared and that rodent activity inside has ceased.',
      },
    ],
    effectiveness:
      'A professionally executed full exclusion of an LA single-family home eliminates new rodent entry in 95–100% of cases when all entry points are identified and sealed. The most common failures result from incomplete inspections — OCP\'s systematic photo-documented approach addresses this through a comprehensive whole-envelope audit rather than spot sealing.',
    pros: [
      'Permanent solution — properly installed materials last the life of the structure',
      'No ongoing chemical applications required to maintain effectiveness',
      'Addresses root cause of reinfestation rather than repeatedly treating symptoms',
      'Reduces overall pest control costs over time by ending the reinfestation cycle',
      'Environmentally responsible — eliminates the need for ongoing rodenticide use inside the structure',
    ],
    cons: [
      'Requires comprehensive inspection to be fully effective — missed entry points allow reinfestation',
      'Higher upfront labor cost than a single chemical treatment visit',
      'Tree and landscaping management must accompany exclusion work to eliminate aerial access routes',
      'Older LA homes with complex construction history may require multiple visits for thorough coverage',
    ],
    costFactors: [
      'Size and construction complexity of the LA property — single-story vs. multi-story, simple vs. complex roofline',
      'Number of entry points requiring sealing — older LA homes have significantly more than newer construction',
      'Materials required for wildlife-grade exclusion (heavier gauge materials for raccoon exclusion)',
      'Whether attic cleanup and insulation replacement is needed alongside exclusion work',
      'Urgency and travel time for emergency exclusion requests within greater LA',
    ],
    preparation: [
      'Ensure OCP technicians have full exterior access including all fence gates, locked equipment areas, and roof access',
      'Trim all vegetation within 3 feet of the structure prior to exclusion work for clear access to the building envelope',
      'Note any areas of known pest activity for the technician — sounds heard, droppings found, or sightings',
      'Ensure attic access hatch is unobstructed if attic inspection is included in the exclusion scope',
      'Notify OCP of any existing damage to the structure (water damage, soft wood) that may complicate material attachment',
      'Keep pets and children away from work areas during installation — power tools and metal materials are in use',
    ],
    faqs: [
      {
        q: 'How is exclusion different from just spraying for pests?',
        a: 'Chemical spray treatments kill pests that are currently present but cannot prevent new pests from entering. In LA\'s urban environment, a new rat or mouse will typically find its way into an untreated building within weeks. Exclusion physically prevents entry — it\'s the structural equivalent of fixing a leaky roof rather than continually mopping up water.',
      },
      {
        q: 'Can I do pest exclusion myself on my LA home?',
        a: 'DIY exclusion is possible for obvious, accessible entry points. However, effective exclusion requires finding 100% of entry points — not just the obvious ones. LA\'s roof rat population will find and exploit the single missed gap. OCP\'s systematic photo-documented inspection methodology identifies gaps homeowners consistently miss, including weep screeds, plumbing escutcheon gaps, and attic eave vents.',
      },
      {
        q: 'Will exclusion work if I have a current rat infestation in my LA attic?',
        a: 'Exclusion and active infestation treatment must be performed together. We first confirm that rats are not trapped inside — if they are, exclusion alone could trap them indoors with no food or water, causing them to chew new exit holes. The standard OCP protocol is: set interior traps first, confirm no new activity for 5–7 days, then execute full exclusion with all sealing materials.',
      },
      {
        q: 'How long does a pest exclusion installation take?',
        a: 'A complete exclusion of a typical LA single-family home (1,200–2,500 sq ft) takes 4–8 hours. Larger multi-story homes in LA\'s hillside communities may require 2 visits. Commercial property exclusion projects are scoped individually based on building envelope complexity.',
      },
    ],
    relatedServices: [
      'rodent-exclusion',
      'rat-control',
      'mouse-control',
      'wildlife-removal',
      'attic-restoration',
    ],
    schema: {
      name: 'Physical Pest Exclusion',
      description:
        'Physical pest exclusion permanently seals rodent and wildlife entry points in Los Angeles homes. OCP Pest Control provides guaranteed exclusion services with a 1-year warranty throughout LA County.',
    },
  },
  {
    slug: 'organic-pest-control',
    name: 'Organic & Eco-Friendly Pest Control',
    category: 'biological',
    description:
      'Organic pest control uses botanical, biological, and mechanical methods to eliminate pests without synthetic chemicals. OCP provides eco-friendly pest control throughout Los Angeles.',
    heroHeadline: 'Organic Pest Control Los Angeles — Effective, Eco-Friendly Pest Solutions',
    heroSubhead:
      'OCP Pest Control offers OMRI-listed and botanical-based treatments for LA families, schools, and businesses seeking sustainable pest management.',
    overview:
      'Organic and eco-friendly pest control in Los Angeles has grown significantly in demand alongside the city\'s broader sustainability and public health initiatives, including the Los Angeles Green Business Certification Program and the City of LA\'s Integrated Pest Management policy for public facilities. OCP\'s organic pest control program uses OMRI (Organic Materials Review Institute)-listed products, botanical insecticides, biological control agents, physical exclusion, and targeted mechanical removal to achieve pest control results without synthetic conventional insecticides — appropriate for households with young children, individuals with chemical sensitivities, organic farms and gardens, and businesses pursuing green certification in LA.',
    howItWorks:
      'Organic pest control relies on multiple mechanisms rather than a single chemical class. Botanical insecticides (pyrethrin from chrysanthemums, d-limonene from citrus peel, neem oil from Azadirachta indica) disrupt insect nervous systems and metabolic processes. Diatomaceous earth (DE) kills insects via desiccation by abrading the waxy cuticle. Biological agents including Bacillus thuringiensis israelensis (Bti) produce toxins lethal to mosquito and fly larvae without harming other organisms. Physical exclusion prevents pest entry, while mechanical traps and vacuuming directly remove populations. The program is designed around IPM (Integrated Pest Management) principles endorsed by the LA County Department of Public Health and CDFA.',
    targetPests: [
      'ants',
      'cockroaches',
      'mosquitoes',
      'fleas',
      'spiders',
      'flies',
    ],
    process: [
      {
        step: 'IPM Assessment and Threshold Setting',
        detail: 'OCP performs a full inspection to identify pest species, population levels, and conducive conditions. We establish action thresholds — the pest population level at which treatment is warranted — consistent with EPA and California IPM guidelines. Below-threshold populations may require only monitoring and prevention measures.',
      },
      {
        step: 'Habitat Modification and Sanitation Guidance',
        detail: 'Reduction of conditions that support pest populations: moisture correction, food source elimination, harborage removal, and vegetation management. This non-chemical first step is the foundation of organic IPM and often resolves minor infestations without product application.',
      },
      {
        step: 'Physical and Mechanical Controls',
        detail: 'Installation of physical barriers, exclusion materials, sticky monitoring traps, and mechanical removal (vacuuming) of existing pest populations. For LA gardens, row covers and copper tape for slug and snail management; Bti dunks for ornamental water features.',
      },
      {
        step: 'Botanical and Biological Product Application',
        detail: 'Application of OMRI-listed botanical insecticides (pyrethrin/PBO, neem oil, d-limonene), desiccant dusts (food-grade DE, boric acid at appropriate concentrations), and biological agents (Bti for mosquito larvae). Products are selected and applied at labeled rates appropriate for the LA property and pest target.',
      },
      {
        step: 'Monitoring and Program Adjustment',
        detail: 'Regular monitoring visits assess pest population trends and treatment efficacy. Organic programs typically require more frequent monitoring (monthly vs. quarterly) than conventional programs. OCP adjusts product selection and application points based on monitoring data.',
      },
    ],
    effectiveness:
      'Organic pest control programs achieve comparable results to conventional programs for most LA residential pest pressures when combined with habitat modification and exclusion, typically within 1–2 additional treatment visits compared to synthetic programs. Heavy infestations (German cockroaches, bed bugs) may require a conventional anchor treatment followed by organic maintenance — OCP provides honest guidance when organic-only is insufficient for the infestation level.',
    pros: [
      'Minimal re-entry interval — most botanical products allow re-entry within minutes of application drying',
      'Safe for use in organic gardens, around food plants, and in certified organic commercial kitchens',
      'Supports LA\'s Green Business Certification and sustainability goals for commercial properties',
      'Lower risk of resistance development compared to single-class conventional synthetic programs',
      'Appropriate for sensitive environments: hospitals, schools, daycare centers, and LA food handling facilities',
    ],
    cons: [
      'Generally shorter residual activity than synthetic products — requires more frequent service visits',
      'Less effective for heavy or advanced infestations compared to conventional synthetic treatments',
      'Higher per-visit cost due to increased material costs and labor for more frequent monitoring',
      'Botanical pyrethrins are highly toxic to fish and aquatic invertebrates — care needed near koi ponds common in LA landscapes',
    ],
    costFactors: [
      'Service frequency — organic programs typically require monthly visits vs. quarterly conventional',
      'Infestation severity — higher-pressure LA properties may need conventional initial treatment before transitioning to organic maintenance',
      'OMRI-listed product costs, which are generally higher per unit than conventional synthetic insecticides',
      'Scope of habitat modification and exclusion work required alongside product application',
      'Whether green certification documentation is required for LA commercial property programs',
    ],
    preparation: [
      'Correct all moisture and sanitation issues before treatment — habitat modification is essential for organic program success',
      'Clear all access areas for the technician as with any pest treatment',
      'Disclose all household sensitivities, allergies, and specific botanical ingredient concerns to OCP technician',
      'Remove pets (especially fish, reptiles, and amphibians) from treatment areas — botanical pyrethrins are highly toxic to aquatic and cold-blooded animals',
      'Be prepared for more frequent monitoring visits than with conventional programs',
      'Engage in the program as a partner — OCP will provide specific guidance on LA yard and kitchen practices that significantly affect organic program success',
    ],
    faqs: [
      {
        q: 'Does organic pest control actually work as well as conventional in Los Angeles?',
        a: 'For preventive maintenance and low-to-moderate pest pressure, organic programs achieve comparable results. For severe infestations — particularly German cockroaches in LA multi-unit housing or established bed bug infestations — organic-only programs are typically insufficient and a hybrid approach (conventional initial treatment + organic maintenance) is more effective and cost-efficient. OCP provides honest guidance based on your specific LA situation.',
      },
      {
        q: 'What is the difference between "green," "natural," and "organic" pest control?',
        a: '"Organic" specifically means OMRI-listed products compliant with NOP organic production standards. "Natural" and "green" are marketing terms with no regulatory definition in California. OCP\'s organic program uses documented OMRI-listed products; we can provide product labels and OMRI listing documentation for any product used on your LA property.',
      },
      {
        q: 'Is organic pest control available for my LA restaurant?',
        a: 'Yes. Organic programs are available and appropriate for food facility maintenance programs once a pest infestation is under control. All products we use in food facilities are EPA-registered and compliant with FDA food-contact surface standards. We provide service documentation meeting LA County Environmental Health permit requirements.',
      },
      {
        q: 'Are essential oil-based sprays sold at LA farmers markets effective for pest control?',
        a: 'Retail botanical sprays (peppermint oil, clove oil, etc.) have limited documented efficacy against established pest infestations and lack the application equipment, concentration, and systematic placement that professional organic treatments provide. They may temporarily repel a few individual ants but will not eliminate a colony or address the harborage. Professional organic IPM requires trained applicators and appropriate-concentration OMRI-listed formulations.',
      },
    ],
    relatedServices: [
      'general-pest-control',
      'school-pest-control',
      'restaurant-pest-control',
    ],
    schema: {
      name: 'Organic & Eco-Friendly Pest Control',
      description:
        'Organic pest control uses botanical and biological methods for safe, effective pest management. OCP Pest Control provides OMRI-listed organic pest control services throughout Los Angeles.',
    },
  },
]
