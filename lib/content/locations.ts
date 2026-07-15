export interface NeighborhoodMention {
  name: string
  note: string
}

export interface SeasonalPestEntry {
  season: string
  months: string
  conditions: string
  primaryPests: string[]
  notes: string
}

export interface LocationContent {
  slug: string
  city: string
  state: string
  county: string
  displayName: string
  metaDescription: string
  heroHeadline: string
  heroSubhead: string
  climateOverview: string
  housingStockOverview: string
  neighborhoods: NeighborhoodMention[]
  seasonalPestCalendar: SeasonalPestEntry[]
  localFactors: string[]
  whyLAIsDifferent: string[]
  serviceAreaNote: string
}

export const locations: LocationContent[] = [
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Los Angeles, CA',
    metaDescription:
      'Pest control in Los Angeles, CA. Bed bugs, termites, rats, and bees. Serving University Park, Jefferson Park, Historic South-Central, and surrounding neighborhoods. Call (866) 755-1284.',
    heroHeadline: 'Los Angeles Pest Control — Local Experts in Your Neighborhood',
    heroSubhead:
      'OCP Pest Control serves Los Angeles from our South LA location. We understand the specific pest pressures that come with LA\'s climate, housing stock, and urban density.',
    climateOverview: `Los Angeles operates on a Mediterranean climate that creates unique, year-round pest pressure unlike what most of the country experiences. Rather than a hard winter that suppresses insect activity for months, LA sees a compressed dry season from June through September and a brief wet season from November through March. Temperatures rarely fall below 50°F even at night, meaning cold-weather die-off that naturally controls pest populations in other climates almost never occurs here.

The marine layer — that dense coastal fog that rolls in off the Pacific each night and morning during summer — adds moisture to an otherwise arid climate. This combination of warmth, occasional moisture, and never-freezing temperatures allows pest populations to remain biologically active across all twelve months. Termites swarm in both spring and fall. Bed bugs reproduce year-round inside climate-controlled apartments. Rats maintain active colonies through every season. Bees can swarm in late winter when almond and citrus start flowering. There is no "off season" for pest control in Los Angeles.

Temperature ranges across LA's neighborhoods also vary significantly — coastal areas near the ocean run 10–15°F cooler than the inland San Fernando Valley or the neighborhoods near downtown, where the urban heat island adds additional warmth that accelerates insect development cycles. South LA neighborhoods like University Park and Jefferson Park, where our office is located, average daily highs in the mid-70s through most of the year, with summer peaks in the upper 80s to low 90s during heat events. These temperatures are ideal for rat activity, bed bug reproduction, and termite colony expansion.`,

    housingStockOverview: `The residential housing stock in South and Central Los Angeles is among the oldest and most varied in the city, and housing age is one of the most reliable predictors of pest vulnerability.

The earliest residential development in neighborhoods like University Park, Exposition Park, and Jefferson Park dates from the 1880s through the 1920s, producing a dense concentration of Craftsman bungalows, Prairie-style homes, and early California Colonial houses. These structures were built with old-growth Douglas fir and redwood — dense, tight-grained lumber that was standard for the era. While this wood has exceptional strength, it has had a century to accumulate gaps at every joint, sill plate, rafter tail, and trim connection. The entry points available to termites, rodents, and insects in a 1920s Craftsman are numerous and often hidden under layers of renovation.

The postwar building boom of the 1940s through 1960s produced the large apartment blocks that define much of the residential landscape between downtown and the University of Southern California campus. These 1960s-era stucco apartment buildings — two- and three-story, often with internal courtyards — are particularly challenging for pest control because a single infestation in one unit can spread through shared wall voids, plumbing chases, and electrical conduits to adjacent units with little visible indication. Bed bug infestations in these buildings require coordination across multiple units to achieve full eradication.

The USC campus and the University Park neighborhood immediately surrounding it generate significant pest pressure from the transient student population — frequent moves in August and May, high use of secondhand and curbside furniture, and rapid unit turnover all increase the likelihood of bed bug introduction and spread. Our proximity to the USC area means we understand the specific dynamics of infestation control in student housing.`,

    neighborhoods: [
      {
        name: 'University Park',
        note:
          'The neighborhood immediately surrounding USC. Dense mix of single-family homes converted to rentals, older apartment buildings, and student housing. High bed bug transmission risk due to student population turnover and secondhand furniture. Our office is in this neighborhood.',
      },
      {
        name: 'Jefferson Park',
        note:
          'Historic residential neighborhood with significant Craftsman and Spanish Colonial housing stock from the 1920s–1940s. Drywood termite pressure is high in original wood-frame structures. Subterranean termite activity is active in properties with aging landscaping and wood-to-soil contact at foundations.',
      },
      {
        name: 'Historic South-Central',
        note:
          'One of LA\'s oldest residential districts, with housing stock spanning from Victorian-era through 1950s construction. Rat pressure is elevated in areas with mature fruit trees and dense vegetation. Properties near the LA River corridor see higher Norway rat activity.',
      },
      {
        name: 'Exposition Park',
        note:
          'Adjacent to the Natural History Museum and the Coliseum. Residential streets have a mix of older single-family homes and apartment conversions. Bee swarm activity is notable in spring — the neighborhood\'s mature trees and gardens provide ideal swarm resting points.',
      },
      {
        name: 'Vermont Square',
        note:
          'South of Exposition Park, with dense 1950s–1960s apartment stock. Bed bug pressure in multi-unit buildings is a recurring service area. Rodent exclusion work is consistently in demand due to aging building seals on older structures.',
      },
      {
        name: 'West Adams',
        note:
          'Experiencing significant renovation activity on older Craftsman and Victorian homes. Renovation disturbs dormant pest activity — termite damage found during renovation, rodents displaced from disturbed structures entering adjacent homes, and bee colonies exposed during wall demolition are all common scenarios we handle in this neighborhood.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions:
          'Temperatures begin rising from winter lows (mid-50s overnight) into the 60s and 70s. Early flowering — citrus, almond, and ornamental plums — begins. Soil moisture is at annual peak from winter rains.',
        primaryPests: ['Bee swarms', 'Subterranean termites (initial swarmer emergence)', 'Rat activity increase'],
        notes:
          'First bee swarm calls of the season typically arrive in February. Rat breeding season accelerates as temperatures rise. Subterranean termite swarmers begin appearing on warm evenings after rain events.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions:
          'Daytime temperatures consistently in the 70s. Overcast marine layer mornings give way to afternoon sun. Peak flowering period across LA. Rainfall tapering toward dry season.',
        primaryPests: ['Bee swarms (peak season)', 'Drywood termite swarmers', 'Subterranean termite swarmers', 'Bed bugs (increased movement)'],
        notes:
          'Highest volume of bee swarm calls. Both drywood and subterranean termite swarmers are active on warm evenings, particularly following light rain. Bed bug activity increases as residents open windows and move furniture.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions:
          'Marine layer ("June Gloom") dominant in early summer mornings near the coast, burning off by midday. Inland temperatures can spike 90°F+ during heat events. Dry conditions dominate — no meaningful rainfall.',
        primaryPests: ['Roof rats (peak foraging activity)', 'Bed bugs (accelerated reproduction in heat)', 'Wasps', 'Subterranean termites (continued activity)'],
        notes:
          'Summer heat accelerates bed bug reproductive cycles — a population that doubles every 6 weeks in mild temps can accelerate significantly in uncooled apartments. Roof rats forage aggressively as fruit trees ripen. Wasp nests reach maximum size.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions:
          'Santa Ana wind events bring hot, dry offshore winds that push temperatures into the 90s and drop humidity to 10–15%. First rains of the season typically arrive in November.',
        primaryPests: ['Roof rats (seeking indoor shelter before cool nights)', 'Bed bugs (resident travel season increases spread)', 'Secondary bee swarms', 'Drywood termites (fall swarm event)'],
        notes:
          'Rat entry into structures spikes in October as nights cool and indoor warmth becomes attractive. Drywood termites have a secondary swarmer flight in October–November. Holiday travel season beginning in November is a major bed bug spread vector.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions:
          'Coolest months — overnight lows in the 45–55°F range in South LA, rarely freezing. Winter rains increase soil moisture. Shorter days.',
        primaryPests: ['Rats (heaviest indoor nesting season)', 'Bed bugs (continuous — climate-controlled interiors)', 'Subterranean termites (soil activity continues in rain-softened ground)'],
        notes:
          'Winter is the highest-activity season for rat calls — animals are fully indoors nesting in attics and wall voids. Bed bugs are unaffected by season in heated or air-conditioned buildings. Subterranean termite foraging continues in moist soil through winter.',
      },
    ],

    localFactors: [
      'Year-round warmth means no seasonal die-off — pest populations that would naturally crash in cold climates maintain continuous pressure in Los Angeles',
      'The marine layer adds ambient moisture that supports wood rot (termite vulnerability), mold growth, and sustained insect activity in coastal-adjacent neighborhoods',
      'LA\'s fruit tree culture — citrus, avocado, fig, and stone fruit are common in residential gardens across South LA — provides a reliable food source for roof rats year-round',
      'The density of the USC student population and the frequent unit turnover in University Park and adjacent neighborhoods creates persistent bed bug introduction pressure',
      'Aging apartment stock from the 1950s–1970s lacks modern pest exclusion construction details — gap-prone wood frame behind stucco exteriors is standard in these buildings',
      'LA\'s extensive network of mature street trees, overgrown alleys, and utility lines creates a highway system for roof rats to move between properties and access rooflines',
      'Water-main breaks and irrigation systems in the dry summer months create localized moisture that supports subterranean termite foraging far from natural water sources',
    ],

    whyLAIsDifferent: [
      'No killing frost: unlike most of the United States, Los Angeles never gets cold enough to naturally suppress insect populations. Pest control in LA is a year-round necessity, not a seasonal convenience.',
      'Mixed species pressure: LA has both drywood AND subterranean termites active simultaneously — most US cities deal with one or the other. LA homeowners need accurate species identification before committing to treatment.',
      'Africanized honey bees: Southern California is within the established range of Africanized honey bees. Every bee situation must be approached with appropriate awareness — AHB look identical to European honey bees but respond to disturbance with significantly higher aggression.',
      'Dense multi-unit housing: The apartment building density in neighborhoods like University Park means a single pest infestation is rarely contained to one unit. Effective treatment in multi-unit buildings requires building-wide awareness and coordination.',
      'Urban wildlife pressure: LA\'s urban ecosystem supports large populations of roof rats, opossums, raccoons, and other wildlife that coexist with dense human housing — pest pressure from wildlife is constant and year-round.',
    ],

    serviceAreaNote:
      'OCP Pest Control is located in University Park at 3332 S Hope St, Los Angeles, CA 90007. We serve the surrounding neighborhoods including Jefferson Park, Historic South-Central, Exposition Park, Vermont Square, West Adams, and additional service areas. Contact us at (866) 755-1284 to confirm service for your specific address.',
  },

  // ─── Pasadena ─────────────────────────────────────────────────────────────────

  {
    slug: 'pasadena',
    city: 'Pasadena',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Pasadena, CA',
    metaDescription:
      'Pest control in Pasadena, CA. Termites, bed bugs, rats, and bees. Serving Old Pasadena, Arcadia, San Marino adjacent neighborhoods. Licensed, insured. Call (866) 755-1284.',
    heroHeadline: 'Pasadena Pest Control — Protecting Historic Homes and Modern Properties',
    heroSubhead:
      'Pasadena\'s blend of century-old Craftsman estates, Bungalow Heaven historic district homes, and the San Gabriel foothills creates pest conditions unlike the rest of LA County. We know this city.',
    climateOverview: `Pasadena sits at the base of the San Gabriel Mountains in the eastern San Gabriel Valley, giving it a distinctly different climate than coastal Los Angeles. Temperatures in Pasadena regularly exceed 100°F during summer heat waves — the city recorded 119°F in September 2020 during an historic heat event. This extreme inland heat accelerates insect development cycles: bed bugs reproduce faster, German cockroaches cycle through generations more quickly, and Argentine ant colonies expand aggressively during summer foraging.

Winter temperatures drop lower than coastal LA — overnight lows in the mid-40s are common in December and January — but Pasadena still rarely freezes at ground level, meaning overwintering pest populations survive year to year. The foothills location also brings wildlife pressures not common in flatland LA: raccoon populations are dense along the Arroyo Seco corridor, and roof rats access structures from the massive mature oak, sycamore, and pine trees that line the historic residential streets.

The dry Santa Ana wind events that hit Pasadena in October and November — often exceeding 50 mph through the Arroyo Seco — desiccate ground moisture and temporarily suppress subterranean termite swarming, but create ideal conditions for drywood termites, which thrive in dry wood. Pasadena's combination of extreme heat, dramatic seasonal swings, and mature arboreal canopy makes it one of the more pest-pressured cities in LA County.`,

    housingStockOverview: `Pasadena's architectural heritage is unmatched in Southern California — the city has over 15,000 structures listed in historic surveys, with the highest concentration of original Craftsman bungalows anywhere in the country. The Bungalow Heaven Landmark District alone contains over 800 homes from the 1905–1930 era, and neighborhoods like Madison Heights, Linda Vista, and the Caltech adjacent streets are dense with Period Revival, Spanish Colonial Revival, and California Bungalow homes that have been continually occupied since their construction.

This historic housing stock presents enormous pest management challenges. Original Douglas fir and redwood construction means the structural lumber has been in place for over a century in many cases. Every joint, every gap, every aged window sill represents a potential entry point or harborage area. Drywood termite pressure in these structures is persistent and often multi-generational — a Craftsman bungalow in Bungalow Heaven may have had successive drywood termite infestations treated over decades, with old gallery systems and residual attractants even in previously treated wood.

The Caltech campus and the Art Center College of Design create a student-adjacent population zone that elevates bed bug introduction risk, particularly in rental properties within walking distance of these institutions. Combined with the large transient population of Rose Bowl event attendees who stay in short-term rentals throughout the city, Pasadena has higher bed bug introduction pressure than its suburban character might suggest.`,

    neighborhoods: [
      {
        name: 'Bungalow Heaven',
        note: 'LA County Landmark District with 800+ Craftsman homes from 1905–1930. Among the highest drywood termite pressure in the region. Original old-growth lumber with century of accumulated entry points.',
      },
      {
        name: 'Old Pasadena',
        note: 'Historic commercial district with mixed residential above retail. Cockroach pressure associated with restaurant activity. Older building stock with challenging exclusion geometry.',
      },
      {
        name: 'Caltech / Millionaire\'s Row',
        note: 'Large estate properties with mature tree canopy. Roof rat pressure is elevated due to dense oak and sycamore cover. Wildlife corridor from Arroyo Seco brings raccoon and skunk activity.',
      },
      {
        name: 'Arroyo Seco Corridor',
        note: 'Runs along the natural drainage corridor. Significant wildlife pressure year-round — raccoons, opossums, and skunks are resident wildlife. Norway rat activity near the wash banks.',
      },
      {
        name: 'Hastings Ranch',
        note: 'Mid-century ranch homes on the east side. Subterranean termite activity driven by irrigation systems and aging landscaping. Argentine ant colonies are persistent due to irrigated gardens.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'Foothill temperatures rise faster than coastal areas. Early wildflower bloom on the San Gabriel foothills. Post-rain soil moisture at peak.',
        primaryPests: ['Subterranean termite swarmers', 'Bee swarms (earlier than coastal areas)', 'Argentine ants (first foraging push of the season)'],
        notes: 'Pasadena\'s inland position means termite swarming activity begins 2–3 weeks earlier than coastal neighborhoods. Bee swarms are common in the Arroyo Seco and Eaton Canyon areas during February.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Temperatures accelerating into the 80s+ by May. Rose Bowl and Rose Parade prep brings unusual foot traffic and visitor activity. Dry conditions setting in earlier than coastal LA.',
        primaryPests: ['Drywood termite swarmers', 'Bee swarms (peak)', 'Roof rats (breeding peak)', 'German cockroaches (activity spike in warmer weather)'],
        notes: 'Peak termite swarming season in Bungalow Heaven and Madison Heights historic districts. Roof rat populations peak before summer — fruit trees and bird feeders are primary foraging sites.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Pasadena\'s inland location means temperatures regularly exceed 100°F during heat events. June Gloom is minimal here. Fully dry conditions by June.',
        primaryPests: ['Roof rats (peak activity)', 'Wasps and yellow jackets (nest expansion)', 'Bed bugs (Rose Bowl and event visitor spread)', 'German cockroaches'],
        notes: 'Extreme summer heat makes Pasadena one of the hottest pest-pressure months in the region. Wasps are aggressive in August–September when nests are at maximum population. Event tourism at Rose Bowl increases bed bug introduction risk from out-of-town visitors.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana wind events are strong in the foothill communities — Pasadena experiences some of the most severe Santa Ana conditions in LA County. Dramatic temperature drops after winds pass.',
        primaryPests: ['Rats (indoor sheltering begins)', 'Drywood termites (secondary swarm)', 'Raccoons (more aggressive foraging before winter)'],
        notes: 'Santa Ana winds are a significant fire risk event in Pasadena — pest control concerns take a secondary role during active wind events. Post-Santa Ana periods see rapid temperature cooling that drives rodents indoors.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Pasadena\'s colder winter compared to coastal LA — overnight lows regularly in the mid-40s to low 50s. First frosts possible in some foothill-adjacent streets. Rose Bowl Game in early January brings major visitor influx.',
        primaryPests: ['Rats (peak indoor activity)', 'Bed bugs (holiday travel + New Year\'s Rose Bowl visitor season)', 'Subterranean termites (active in moist soil after rains)'],
        notes: 'Rose Bowl New Year\'s Game brings tens of thousands of visitors to Pasadena in a one-week period — short-term rental bed bug introduction events are common in the first weeks of January.',
      },
    ],

    localFactors: [
      'Pasadena\'s extreme summer heat (regularly 100°F+) accelerates insect life cycles faster than coastal LA — German cockroaches and bed bugs reach reproductive maturity faster under these conditions',
      'The city\'s historic Craftsman housing stock — some homes 100+ years old — creates exceptional pest vulnerability in original structural lumber that has accumulated entry points over generations',
      'The Arroyo Seco wildlife corridor runs through the city, maintaining large wildlife populations (raccoons, skunks, opossums) that create persistent pressure on adjacent residential streets',
      'Mature arboreal canopy city-wide (oak, sycamore, pine, and citrus) provides roof rat highway access to rooflines across virtually every residential block',
      'The Rose Bowl events calendar brings hundreds of thousands of out-of-town visitors annually, increasing bed bug introduction risk in short-term rental and hotel properties',
      'Pasadena\'s foothill elevation means it experiences Santa Ana wind events more severely than flatland communities — these events can drive wildlife seeking water into residential areas during extended dry periods',
    ],

    whyLAIsDifferent: [
      'Extreme heat: Pasadena\'s inland position creates summer temperatures that regularly exceed 100°F — significantly hotter than coastal LA — which accelerates pest development cycles and makes some insect problems more severe than elsewhere in the county.',
      'Historic housing concentrated: Pasadena has the highest concentration of pre-1930 Craftsman bungalows anywhere in the US. This housing type is particularly vulnerable to drywood termites and has accumulated pest entry points over a century of occupation.',
      'Arroyo wildlife pressure: The Arroyo Seco natural corridor maintains resident wildlife populations including raccoons, skunks, and opossums that create year-round wildlife removal demand in adjacent residential areas.',
      'Event-driven bed bug risk: The Rose Bowl calendar creates unusually concentrated out-of-town visitor traffic compared to a typical suburban community, elevating bed bug introduction risk during event seasons.',
      'Argentine ant dominance: Pasadena\'s irrigated gardens sustain the massive Argentine ant supercolony that spans much of Southern California — these ants are extremely difficult to eliminate without professional treatment targeting the full colony structure.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Pasadena from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Pasadena neighborhoods including Bungalow Heaven, Old Pasadena, Linda Vista, Hastings Ranch, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Glendale ─────────────────────────────────────────────────────────────────

  {
    slug: 'glendale',
    city: 'Glendale',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Glendale, CA',
    metaDescription:
      'Pest control in Glendale, CA. Termites, bed bugs, rats, cockroaches. Serving Montrose, Adams Hill, Glenoaks Canyon. Licensed, insured. Call (866) 755-1284.',
    heroHeadline: 'Glendale Pest Control — Experts in LA County\'s Hill Communities',
    heroSubhead:
      'Glendale\'s hillside terrain, dense canyons, and mix of mid-century housing and new construction create distinct pest challenges. OCP Pest Control handles them all.',
    climateOverview: `Glendale occupies a transitional climate zone between the coastal influence of the LA Basin and the inland heat of the San Fernando Valley. The city's north-south topography — flat commercial corridors in the south, rising into the Verdugo Mountains and Chevy Chase Canyon to the north — creates significant microclimate variation within city limits. Hillside neighborhoods like Adams Hill and Chevy Chase Canyon are significantly cooler and wetter than the flatland commercial districts along Brand Boulevard.

This topographic variation creates variable pest pressure across the city. The canyon neighborhoods experience year-round wildlife activity (deer, coyotes, raccoons, and skunks moving down from Verdugo Mountains), persistent wood-boring beetle activity in the mature native oak and pepper trees, and subterranean termite pressure from the naturally moist canyon soils. The flatland areas experience the more typical LA pest profile — roof rats, German cockroaches in multi-unit buildings, and bed bugs in the city's dense apartment stock.

Glendale's large Armenian-American community has contributed to a specific landscaping culture of dense gardens with fig, pomegranate, and mulberry trees — all of which serve as roof rat food sources and harborage, particularly in the older residential neighborhoods east of the 134 freeway.`,

    housingStockOverview: `Glendale's housing stock spans nearly a century of construction, from pre-war Craftsman and Spanish Revival homes in the historic neighborhoods north of Colorado Street to mid-century ranch homes in the hillside communities and modern multi-family development along Brand Boulevard and the Glendale Galleria corridor.

The hillside neighborhoods present the most complex pest management challenges. Homes built into canyon walls often have substructure access that has gone uninspected for decades — crawl spaces, partial basements, and retaining wall cavities that provide harborage for rodents, spiders, and insects. Canyon-adjacent properties also deal with persistent ant pressure from Argentine ant colonies that exploit the garden irrigation systems required to maintain landscaping on steep hillside lots.

The densely developed apartment corridor along Brand Boulevard and the adjacent Glendale City College neighborhood presents more familiar urban pest pressures — bed bugs in the high-turnover rental buildings, German cockroaches in the ground-floor retail-adjacent apartments, and rodent pressure from the restaurant district dumpsters along the commercial corridors.`,

    neighborhoods: [
      {
        name: 'Adams Hill',
        note: 'Hillside residential community with canyon-adjacent properties. Wildlife pressure (raccoons, skunks) from Verdugo Hills corridor. Subterranean termites active in moist hillside soils.',
      },
      {
        name: 'Montrose',
        note: 'Village-style commercial and residential district. Argentine ant pressure persistent in irrigated gardens. German cockroach activity in the restaurant/café district.',
      },
      {
        name: 'Glenoaks Canyon',
        note: 'Canyon bottom neighborhood with natural drainage. Norway rat activity near the wash. Dense vegetation provides harborage for roof rats and wildlife year-round.',
      },
      {
        name: 'Downtown Glendale / Brand Blvd',
        note: 'High-density apartment and retail corridor. Bed bug pressure in multi-family buildings near Glendale City College. Cockroach pressure near the restaurant district.',
      },
      {
        name: 'Chevy Chase Canyon',
        note: 'Exclusive canyon neighborhood with large estate properties. Significant wildlife corridor from Verdugo Mountains. Wood-boring beetle activity in native oaks. Roof rats in mature tree canopy.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'Canyon soils reach peak moisture from winter rains. Temperatures warming into mid-60s. Wildlife beginning breeding season.',
        primaryPests: ['Subterranean termites (swarming after rains)', 'Wildlife (raccoon/skunk breeding activity increases)', 'Argentine ants (first colony expansion)'],
        notes: 'Subterranean termite swarming events in canyon-adjacent properties are particularly active after heavy rains. Skunk activity increases as females establish denning sites for spring births.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Temperatures rising into the 70s–80s. Canyon vegetation lush. Dry season beginning to establish.',
        primaryPests: ['Bee swarms (active in canyon corridors)', 'Drywood termite swarmers', 'Roof rats (breeding)', 'Wasps'],
        notes: 'Glendale\'s canyon topography channels bee swarms — swarm clusters are common along Glenoaks Canyon Boulevard, Verdugo Road, and canyon trail corridors. Roof rat populations expanding with spring fruit availability.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Hot and dry, though canyons retain more moisture than flatlands. Verdugo fire season creates wildlife displacement pressure.',
        primaryPests: ['Roof rats (peak activity in residential trees)', 'Wasps (peak nests in canyon vegetation)', 'German cockroaches (restaurant district)', 'Bed bugs'],
        notes: 'Wildfire evacuation and emergency activity in the Verdugo Hills can displace wildlife into residential areas. Roof rat foraging peaks as citrus, fig, and pomegranate ripen in residential gardens.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana conditions affect Glendale strongly due to its foothill position. Dramatic temperature swings.',
        primaryPests: ['Rats (indoor entry begins)', 'Raccoons (aggressive pre-winter foraging)', 'Drywood termites (secondary swarm)'],
        notes: 'Glendale\'s position at the base of the Verdugo Mountains means Santa Ana winds are intense and wildlife displacement into residential areas is common during extended hot, dry wind events.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Cooler and wetter than flatland LA. Canyon soils remain moist through winter rains.',
        primaryPests: ['Rats (indoor nesting peak)', 'Subterranean termites (active in wet canyon soils)', 'Bed bugs (holiday travel season)'],
        notes: 'Canyon-adjacent homes see the highest rat activity in winter as animals move from the Verdugo corridor into attics and wall voids seeking warmth. Holiday travel season elevates bed bug risk city-wide.',
      },
    ],

    localFactors: [
      'The Verdugo Mountains create a wildlife corridor that maintains large populations of raccoons, skunks, coyotes, and opossums that regularly enter residential areas in canyon-adjacent neighborhoods',
      'Glendale\'s Armenian-American community\'s gardening culture — dense fruiting trees including fig, pomegranate, and mulberry — provides exceptional roof rat food sources in residential areas east of the 134',
      'Canyon neighborhood homes often have uninspected crawl spaces and substructure access that harbor rodents and insects for years without discovery',
      'The dense apartment corridor along Brand Boulevard generates continuous bed bug and cockroach demand from multi-unit building stock with high tenant turnover',
      'Hillside irrigation required for steep-lot landscaping creates persistent soil moisture that supports Argentine ant colony expansion and subterranean termite foraging year-round',
      'Glendale City College creates a student-adjacent rental population zone with elevated bed bug introduction risk near the campus corridor',
    ],

    whyLAIsDifferent: [
      'Canyon topography: Glendale\'s Verdugo canyon system is a wildlife superhighway that delivers raccoons, skunks, and other wildlife into residential neighborhoods at much higher density than flatland LA communities.',
      'Multi-microclimate city: pest pressures vary dramatically between Glendale\'s cool, moist canyon neighborhoods and its hot, flat commercial corridors — effective treatment requires knowing which microclimate applies to your property.',
      'Historic tree canopy: the dense mix of mature fruiting trees, native oaks, and ornamental trees creates persistent roof rat habitat that requires active exclusion management in addition to trapping.',
      'Hillside construction vulnerabilities: many hillside homes have substructure access points — retaining wall cavities, partial basements, and crawl spaces — that receive little inspection and harbor pests undetected for years.',
      'Restaurant district proximity: the Brand Boulevard restaurant corridor generates cockroach pressure that spreads into adjacent residential buildings through shared utility infrastructure.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Glendale from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Glendale neighborhoods including Adams Hill, Montrose, Glenoaks Canyon, Chevy Chase Canyon, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Burbank ──────────────────────────────────────────────────────────────────

  {
    slug: 'burbank',
    city: 'Burbank',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Burbank, CA',
    metaDescription:
      'Pest control in Burbank, CA. Termites, bed bugs, rats, cockroaches, and wildlife. Serving Magnolia Park, Verdugo Woodlands, and all Burbank neighborhoods. Call (866) 755-1284.',
    heroHeadline: 'Burbank Pest Control — The Media Capital Needs Pest-Free Properties',
    heroSubhead:
      'From Magnolia Park\'s vintage commercial district to the Warner Bros. and Disney studio-adjacent neighborhoods, Burbank has unique pest pressures. We serve them all.',
    climateOverview: `Burbank sits in the eastern San Fernando Valley, sheltered from ocean influence by the Santa Monica and Santa Susana mountains to the west. This position makes Burbank one of the hottest cities in the Los Angeles region during summer — temperatures regularly exceed 100°F in July and August, and the city holds several records for extreme summer heat in LA County. The Bob Hope Airport (Burbank-Hollywood Airport) corridor creates an urban heat island effect that elevates temperatures in the flatland commercial and residential areas.

This extreme summer heat creates conditions highly favorable for German cockroach reproduction, accelerates bed bug population growth in un-air-conditioned residential units, and drives roof rats to seek water sources in residential irrigation systems. The dry Santa Ana wind conditions in fall hit Burbank with full force given its valley location — these events regularly produce fire weather conditions and drive wildlife toward residential water sources.

Burbank's northern proximity to the Verdugo Mountains and the Stough Canyon Nature Center maintains a consistent wildlife corridor into residential neighborhoods. Deer, coyotes, raccoons, and skunks are regularly seen in the residential streets north of Glenoaks Boulevard, and roof rat populations are dense in the mature tree-lined streets of the historic Magnolia Park and Rancho neighborhoods.`,

    housingStockOverview: `Burbank's residential stock reflects its evolution from a 1920s citrus-growing town to a mid-century suburban bedroom community to its current identity as the center of the American entertainment industry. The oldest residential areas — Magnolia Park, the streets surrounding Burbank High School, and the Rancho neighborhood — contain substantial Craftsman, Spanish Colonial, and California Bungalow construction from the 1920s–1940s.

The entertainment industry presence creates an unusual rental market dynamic — a significant portion of Burbank's rental housing stock serves as short-term and transitional housing for production crews, actors, and industry workers on assignment. This transient population creates persistent bed bug introduction risk in the areas near Warner Bros., Disney, and the cluster of production facilities in the southern industrial area near the airport.

Post-war construction dominates the residential neighborhoods east of San Fernando Boulevard, with 1950s–1970s ranch homes and early apartment buildings that share the typical mid-century construction vulnerabilities: minimal subfloor ventilation, wood siding with aged caulking, and utility penetrations that were never properly sealed against rodent entry. The rooflines of these structures — flat or low-slope construction common to the 1950s ranch style — provide ideal roof rat access and nesting conditions in poorly ventilated attic spaces.`,

    neighborhoods: [
      {
        name: 'Magnolia Park',
        note: 'Historic commercial and residential district. Craftsman and bungalow housing from the 1920s–1940s. High drywood termite pressure in original wood construction. Retail pest activity from the antique and restaurant corridor.',
      },
      {
        name: 'Verdugo Woodlands',
        note: 'Hillside residential community adjacent to Verdugo Mountains. Heavy wildlife pressure (raccoons, skunks, deer). Roof rats in mature tree canopy. Subterranean termite activity in moist hillside soils.',
      },
      {
        name: 'Media District / Studio Area',
        note: 'Production facility corridor near Warner Bros. and Disney. Large commercial buildings with pest management requirements. Adjacent residential housing shows bed bug pressure from transient production worker population.',
      },
      {
        name: 'Downtown Burbank',
        note: 'Commercial core with attached residential. Cockroach pressure from restaurant activity on San Fernando Boulevard. German cockroach in older commercial kitchen spaces.',
      },
      {
        name: 'Rancho / Bel Aire Estates',
        note: 'Upscale residential neighborhoods with large lot estates. Wildlife activity from the Stough Canyon corridor. Bee swarm activity in spring among mature ornamental trees.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'San Fernando Valley warms faster than coastal areas. Post-rain termite swarming activity. Valley wildlife beginning breeding season.',
        primaryPests: ['Subterranean termites (post-rain swarmers)', 'Bee swarms', 'Argentine ants (foraging begins early in valley heat)'],
        notes: 'Burbank\'s valley position means spring comes earlier than coastal LA. Termite swarming events can begin in mid-February following rain events. Bee swarm season in Verdugo Woodlands typically starts 3–4 weeks before coastal areas.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Rapid temperature rise into the 80s–90s by late April. Dry season establishing. Fruit trees in full production.',
        primaryPests: ['Drywood termite swarmers', 'Roof rats (breeding peak)', 'Bee swarms (Verdugo corridor)', 'Wasps (early nest establishment)'],
        notes: 'Roof rat populations expand rapidly in April as citrus and stone fruit come into season in residential gardens. Drywood termite swarming in the Magnolia Park Craftsman district is particularly active.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Extreme heat regularly exceeding 100°F. Airport area urban heat island intensifies. No marine influence to moderate temperatures.',
        primaryPests: ['German cockroaches (accelerated reproduction)', 'Roof rats (peak activity near water sources)', 'Wasps (large nests in peak condition)', 'Bed bugs (entertainment industry transient population)'],
        notes: 'Burbank\'s extreme summer heat makes it one of the most active pest seasons in the region. German cockroach populations in un-air-conditioned buildings cycle faster under 100°F+ conditions. Water-seeking behavior drives rats toward irrigation systems.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana wind events — strong in the valley — create extreme fire weather. Rapid temperature swings after wind events.',
        primaryPests: ['Rats (indoor entry begins rapidly with cooling)', 'Raccoons (pre-winter foraging from Verdugo corridor)', 'Drywood termites (secondary swarm event)'],
        notes: 'Burbank experiences some of the strongest Santa Ana wind conditions in the region due to its valley position near the Verdugo/Tujunga wind gap. Post-wind cooling drives rapid rodent indoor entry.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Valley temperatures cool faster and lower than coastal LA. Overnight lows in the 40s common. Rain-softened soils through January.',
        primaryPests: ['Rats (peak indoor nesting)', 'Subterranean termites (active in moist soils)', 'Bed bugs (holiday travel + entertainment industry award season activity)'],
        notes: 'Entertainment industry award season (SAG, DGA, WGA events) in January and February brings production workers and visitors to Burbank hotels and rentals, creating a secondary bed bug introduction vector.',
      },
    ],

    localFactors: [
      'Burbank\'s position in the San Fernando Valley creates extreme summer heat (regularly 100°F+) that accelerates pest development cycles faster than coastal LA communities',
      'The entertainment industry creates a large transient population of production workers and visiting talent in short-term rentals, elevating bed bug introduction risk in residential areas near the studio corridor',
      'The Verdugo Mountains and Stough Canyon Nature Center maintain a wildlife corridor that delivers raccoons, skunks, deer, and coyotes into residential neighborhoods north of Glenoaks Boulevard year-round',
      'Magnolia Park\'s historic Craftsman and bungalow housing stock — 1920s–1940s construction — presents persistent drywood termite pressure in original structural lumber',
      'The Burbank Airport urban heat island amplifies temperatures in the commercial and industrial areas, creating ideal conditions for insect pest activity in adjoining residential blocks',
      'Valley position and orientation toward the Tujunga wind gap makes Burbank one of the most severely affected cities during Santa Ana wind events, which drives wildlife displacement into residential areas',
    ],

    whyLAIsDifferent: [
      'Entertainment industry bed bug risk: Burbank\'s unique status as an entertainment production hub creates a distinctly high rate of short-term and transitional rental occupancy — a primary bed bug introduction vector not found in typical suburban communities.',
      'Valley extreme heat: Temperatures regularly 10–15°F higher than coastal LA accelerate pest reproduction cycles — German cockroach and bed bug infestations can escalate faster in Burbank than in equivalent coastal properties.',
      'Stough Canyon wildlife interface: the Stough Canyon Nature Center directly adjacent to residential neighborhoods creates one of the more active urban wildlife corridors in the San Fernando Valley.',
      'Historic commercial pest export: the Magnolia Park antique and vintage commercial district creates elevated risk of used-furniture bed bug introduction from commercial sources, an unusual pest pressure vector.',
      'Airport urban heat island: the Burbank Airport area creates localized extreme heat conditions that maintain pest activity through the "cooler" months that would suppress populations in less heat-impacted areas.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Burbank from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Burbank neighborhoods including Magnolia Park, Verdugo Woodlands, the Media District, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Long Beach ───────────────────────────────────────────────────────────────

  {
    slug: 'long-beach',
    city: 'Long Beach',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Long Beach, CA',
    metaDescription:
      'Pest control in Long Beach, CA. Bed bugs, cockroaches, rats, termites. Serving Belmont Shore, Bixby Knolls, Signal Hill, downtown. Licensed, insured. Call (866) 755-1284.',
    heroHeadline: 'Long Beach Pest Control — Harbor City Expertise',
    heroSubhead:
      'Long Beach\'s port activity, diverse neighborhoods, and coastal climate create unique pest pressures from Belmont Shore to Signal Hill. OCP Pest Control handles them all.',
    climateOverview: `Long Beach's coastal position along the Pacific gives it one of the most moderate climates in Los Angeles County — summer highs rarely exceed 85°F at the beach, and overnight lows in winter rarely drop below 45°F. This moderate climate is excellent for human comfort but creates year-round pest activity: without the temperature extremes that stress or kill pest populations, insects and rodents maintain continuous activity through all twelve months.

The Port of Long Beach — the busiest container port in North America — creates unusual pest introduction vectors that affect the entire city. Shipping containers carry pest stowaways from international origins, and the vast warehouse and distribution infrastructure surrounding the port creates ideal harborage for rats, cockroaches, and stored product pests. While most container contents are inspected, the sheer volume of commerce creates statistical pest introduction events that ripple through the local pest population.

The city's position at the interface of the LA Basin and the Long Beach coastal plain creates a marine layer influence that persists longer than most inland areas — fog and low clouds can persist until early afternoon in summer, maintaining coastal moisture that supports wood decay fungi and the conditions favoring subterranean termite activity near the shore.`,

    housingStockOverview: `Long Beach has one of the most diverse housing stocks in LA County — the city spans from Victorian and Craftsman historic homes in the Willmore District and Bluff Park to mid-century California ranch homes in the Bixby Knolls and Los Altos neighborhoods to modern high-rise condominiums in the downtown waterfront corridor.

Belmont Shore and Naples are particularly interesting from a pest perspective: both neighborhoods are dense, walkable communities built on what was once coastal marshland. The high water table and coastal soil moisture in these areas creates persistent subterranean termite pressure year-round, and the densely packed bungalows and craftsman homes of Belmont Shore have many of the same aged-construction vulnerabilities as South LA's historic neighborhoods.

The Downtown Long Beach high-rise and transit-oriented development corridor has generated a large urban apartment population with the corresponding bed bug pressure common to high-density urban housing. The port-adjacent industrial areas also create cockroach pressure that migrates into adjacent residential neighborhoods through storm drains, utility lines, and shared infrastructure.`,

    neighborhoods: [
      {
        name: 'Belmont Shore',
        note: 'Coastal bungalow neighborhood on former marshland. High water table creates persistent subterranean termite pressure. Dense housing stock with older construction vulnerable to drywood termites.',
      },
      {
        name: 'Bixby Knolls',
        note: 'Mid-century ranch home neighborhood. Mature tree canopy with heavy roof rat pressure. Argentine ants persistent in irrigated front gardens.',
      },
      {
        name: 'Signal Hill',
        note: 'Hilltop community with views and older housing stock. Oil field legacy creates unusual soil conditions. Wildlife pressure from the open space reserve.',
      },
      {
        name: 'Downtown Long Beach',
        note: 'High-density mixed-use corridor near the port. Cockroach pressure from restaurant district. Bed bug pressure in high-turnover apartment buildings and hotels.',
      },
      {
        name: 'Naples',
        note: 'Canal community built on former wetlands. Coastal moisture creates ideal termite conditions. High property values mean structural pest damage is particularly costly.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'Marine layer persistent through morning. Post-rain soil moisture. Coastal temperatures mild year-round.',
        primaryPests: ['Subterranean termites (swarming)', 'Bee swarms', 'Cockroaches (activity increases with warming)'],
        notes: 'Long Beach\'s coastal position means termite swarming activity is driven more by moisture than temperature — post-rain events trigger swarming throughout the year.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Perfect coastal spring conditions — mild temperatures, occasional marine layer. Port activity at peak capacity.',
        primaryPests: ['Bee swarms (peak)', 'Drywood termite swarmers', 'Roof rats', 'Bed bugs (tourism/event season)'],
        notes: 'Grand Prix of Long Beach in April brings large numbers of visitors to the downtown area, creating a bed bug introduction vector in the hotel corridor.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Marine layer dominates — "June Gloom" is most persistent here of any LA neighborhood. Temperatures mild at the shore but rising inland.',
        primaryPests: ['Roof rats (foraging peak in residential fruit trees)', 'Wasps (peak nests)', 'Bed bugs (summer tourism)', 'Port-area cockroaches'],
        notes: 'Long Beach\'s summer is its mildest pest season for insects — the marine layer keeps temperatures lower than inland. However, rats remain active year-round in the tree-lined residential streets.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana effects are moderated by coastal position. Warm, clear days. Tourism continues into fall.',
        primaryPests: ['Rats (indoor entry begins)', 'Cockroaches (seeking warmth)', 'Drywood termites (secondary swarm)'],
        notes: 'Fall brings the Long Beach International Film Festival and other events that elevate visitor counts in the downtown hotel corridor — bed bug introduction risk is elevated during these events.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Long Beach\'s mildest possible winter — coastal temperatures rarely below 48°F. Port activity peaks with holiday shipping. Marine layer dense.',
        primaryPests: ['Rats (indoor nesting)', 'Subterranean termites (active in moist coastal soils)', 'Cockroaches (restaurant district activity continues)'],
        notes: 'Long Beach\'s mild winter means insect activity never fully suppresses. Subterranean termites remain active in the coastal soil moisture environment through winter without a seasonal pause.',
      },
    ],

    localFactors: [
      'The Port of Long Beach — North America\'s busiest container port — creates continuous pest introduction pressure from international shipping into the local pest population',
      'Former marshland construction in neighborhoods like Naples and Belmont Shore creates persistent high-water-table soil moisture that supports year-round subterranean termite activity',
      'Long Beach\'s mild coastal climate means pest populations never experience temperature-driven die-off — a continuous year-round population maintained at stable levels',
      'The downtown restaurant and entertainment district on Pine Avenue generates cockroach pressure that migrates into adjacent residential streets through shared infrastructure',
      'Major events (Grand Prix, Film Festival) create regular visitor influxes to the hotel district, elevating bed bug introduction risk several times per year',
      'The Signal Hill oil field heritage creates unusual soil composition in that neighborhood that affects pest behavior patterns differently than typical residential soils',
    ],

    whyLAIsDifferent: [
      'Port pest introduction: no other LA County city has the continuous international pest introduction pressure that comes with North America\'s busiest container port — this creates unusual exotic pest exposure risk in Long Beach.',
      'Coastal moisture sustains termites: the high water table and persistent marine moisture in neighborhoods built on former coastal wetlands (Naples, Belmont Shore) creates year-round subterranean termite activity unlike inland communities.',
      'No seasonal suppression: Long Beach\'s extremely mild climate means pest populations face essentially zero thermal suppression — the city has the most continuous year-round pest activity of any LA County location.',
      'Event-driven bed bug cycles: the downtown event calendar (Grand Prix, festivals, convention center events) creates repeated bed bug introduction waves that require active monitoring in the hotel and short-term rental corridor.',
      'Industrial pest export: the port-adjacent warehouse district\'s German cockroach and stored product pest populations create ongoing migration pressure into surrounding residential neighborhoods.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Long Beach from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Long Beach neighborhoods including Belmont Shore, Bixby Knolls, Signal Hill, Downtown, Naples, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Santa Monica ─────────────────────────────────────────────────────────────

  {
    slug: 'santa-monica',
    city: 'Santa Monica',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Santa Monica, CA',
    metaDescription:
      'Pest control in Santa Monica, CA. Bed bugs, termites, rodents. Serving Ocean Park, Mid-City, Montana Avenue, Pico Neighborhood. Licensed, insured. Call (866) 755-1284.',
    heroHeadline: 'Santa Monica Pest Control — Coastal Living Requires Coastal Expertise',
    heroSubhead:
      'Santa Monica\'s marine climate, premium rental market, and tourism-driven bed bug pressure require pest control expertise tuned to the coast. OCP Pest Control delivers it.',
    climateOverview: `Santa Monica sits directly on the Pacific Ocean at the western terminus of the I-10 freeway, giving it the most coastal climate of any incorporated city in Los Angeles County. Summer temperatures rarely exceed 80°F due to the persistent marine layer, while winter temperatures stay comfortably above 50°F year-round. This near-perfect climate is the foundation of Santa Monica's real estate market — and its year-round pest activity.

The consistent moisture from the marine layer creates conditions uniquely favorable for wood decay and the wood-eating organisms that follow: subterranean termites thrive in the perpetually moist coastal soils, wood-boring beetles exploit the fungal decay in aged structural lumber, and the humid conditions support robust German cockroach populations in restaurant kitchens along the Third Street Promenade and Main Street corridors.

Santa Monica's status as a tourist destination — the Pier, the Promenade, the beach — creates what may be the highest bed bug introduction pressure of any city in LA County relative to its size. Millions of tourists visit annually, staying in the dense hotel corridor along Ocean Avenue and the short-term rentals that blanket the walkable neighborhoods. Each visitor is a potential bed bug vector, and the city's rental market — with nightly rates among the highest in the country — means property damage from bed bug infestations is proportionally more costly than elsewhere.`,

    housingStockOverview: `Santa Monica's housing stock is defined by its premium real estate market and the consequent pressure to preserve and renovate rather than demolish and replace. The city has significant Victorian and Craftsman heritage in Ocean Park (the oldest neighborhood in Santa Monica, developed in the 1890s), Spanish Colonial bungalows in the Pico neighborhood, and a substantial mid-century apartment inventory in the Wilshire Corridor and Montana Avenue areas.

Ocean Park's Victorian and early Craftsman structures — some of the oldest continuously occupied residential buildings in LA County — present significant termite challenges. Both drywood and subterranean species are active in this neighborhood, and the coastal moisture accelerates wood decay that creates additional vulnerability to wood-boring insects. Properties in Ocean Park that have not been treated for termites in the last 5–7 years are statistically likely to have active infestations in original structural members.

The Wilshire Corridor's high-rise condominiums and the premium rental apartments of Sunset Park and North of Montana (NoMo) present the bed bug challenges common to upscale urban housing: high-net-worth residents traveling to high-risk destinations (international business travel, luxury hotel stays), cleaning staff moving between units, and the false security that premium properties are somehow immune to bed bugs. The highest-cost pest control scenarios we see involve luxury condominium bed bug infestations where remediation must occur with minimal disruption and maximum discretion.`,

    neighborhoods: [
      {
        name: 'Ocean Park',
        note: 'Oldest neighborhood in Santa Monica, with Victorian and Craftsman homes from the 1890s–1920s. Highest termite pressure in the city — coastal moisture plus aged structural lumber creates ideal conditions.',
      },
      {
        name: 'North of Montana (NoMo)',
        note: 'Premium residential neighborhood with high-value properties. Bed bug risk from high-net-worth international travelers. Roof rat pressure from mature tree canopy on residential streets.',
      },
      {
        name: 'Pico Neighborhood',
        note: 'Diverse residential community with older housing stock. More affordable rental market creates higher bed bug introduction pressure. Argentine ants active in irrigated gardens.',
      },
      {
        name: 'Downtown / Third Street Promenade',
        note: 'Commercial and hotel corridor. Highest tourist foot traffic in LA County. Bed bug pressure from hotel cluster on Ocean Avenue. German cockroach pressure in restaurant kitchens.',
      },
      {
        name: 'Wilshire Corridor',
        note: 'High-rise residential corridor. Luxury condominiums with bed bug risk from international resident travel. Building infrastructure creates cockroach migration pathways between units.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'Marine layer dense and persistent. Ocean moisture at annual peak. Temperatures mild in the upper 50s to low 60s.',
        primaryPests: ['Subterranean termites (moisture-triggered swarming)', 'Bed bugs (post-holiday tourist arrivals)', 'Bee swarms'],
        notes: 'Santa Monica\'s subterranean termite swarming is triggered by moisture cycles rather than temperature — the marine layer provides near-continuous swarmer-triggering conditions in the Ocean Park and Pico areas.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Tourist season beginning to build. Spring break visitors spike hotel occupancy. Temperatures pleasantly mild.',
        primaryPests: ['Bed bugs (spring break tourism peak)', 'Drywood termite swarmers', 'Bee swarms', 'German cockroaches'],
        notes: 'Spring break concentrates visitors in the beach hotel corridor — bed bug introduction risk in Ocean Avenue hotels is highest in late March and April. Third Street Promenade restaurant cockroach pressure increases with warming.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Peak tourist season. "June Gloom" marine layer dominates morning conditions but burns off by noon. Persistent moderate temperatures.',
        primaryPests: ['Bed bugs (peak tourist season — highest introduction risk of the year)', 'Roof rats (fruit tree foraging)', 'German cockroaches (restaurant kitchens at peak activity)', 'Wasps'],
        notes: 'Summer is peak tourist season and peak bed bug introduction season simultaneously. Ocean Avenue hotels and Airbnb properties see the highest infestation rates during July–August. Restaurant cockroach activity on the Promenade and Main Street is at its peak.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Marine layer persists as Santa Ana winds are moderated by coastal position. Comfortable tourist weather.',
        primaryPests: ['Roof rats (indoor entry begins)', 'Bed bugs (fall tourism continues)', 'Drywood termites (secondary swarm in coastal properties)'],
        notes: 'Santa Monica\'s fall tourist season remains strong due to pleasant weather — bed bug introduction pressure continues through October. Drywood termite secondary swarm in coastal properties is typically smaller than spring event but still significant in Ocean Park.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Mild coastal winter. Holiday tourism elevates hotel occupancy. Marine moisture at peak.',
        primaryPests: ['Rats (indoor nesting)', 'Subterranean termites (active in moist coastal soils)', 'Bed bugs (holiday tourism)'],
        notes: 'Holiday tourism at the Pier and Promenade creates year-end bed bug introduction pressure. Subterranean termite foraging in Ocean Park and Pico neighborhood soils remains active through winter due to coastal moisture.',
      },
    ],

    localFactors: [
      'The persistent marine layer from the Pacific maintains coastal soil moisture year-round, creating continuous subterranean termite foraging conditions that don\'t have an off-season',
      'Santa Monica\'s status as a major tourist destination generates the highest bed bug introduction pressure per square mile of any city in LA County — millions of hotel stays annually',
      'The Third Street Promenade and Main Street restaurant corridors maintain German cockroach populations at sufficient density to create ongoing residential migration pressure in adjacent neighborhoods',
      'Ocean Park\'s Victorian and early Craftsman housing stock represents 100+ years of termite vulnerability accumulation in aged structural lumber',
      'The premium real estate market means property damage from pest infestations — particularly termite structural damage and bed bug rental income loss — is proportionally more costly than in lower-value markets',
      'Short-term rental platforms (Airbnb, VRBO) have dramatically increased the short-term rental inventory in Santa Monica, multiplying the number of potential bed bug introduction vectors throughout the residential neighborhoods',
    ],

    whyLAIsDifferent: [
      'Tourist volume bed bug risk: Santa Monica hosts more tourist overnight stays per square mile than any other LA city — the sheer volume of hotel and short-term rental turnover creates continuous bed bug introduction pressure that residential pest control in typical neighborhoods doesn\'t face.',
      'Persistent coastal termite pressure: the ocean moisture environment means subterranean termites never enter a seasonal low-activity period — properties in Ocean Park and beachside neighborhoods face continuous termite foraging pressure 365 days per year.',
      'Premium remediation costs: Santa Monica\'s real estate values mean structural termite damage, bed bug rental income loss, and remediation costs are proportionally higher than anywhere else in our service area — early treatment is exceptionally cost-effective here.',
      'Marine layer cockroach conditions: the persistent humidity from the marine layer creates ideal German cockroach conditions in restaurant kitchens — Third Street Promenade kitchens maintain some of the region\'s highest cockroach pressure.',
      'International traveler exposure: North of Montana residents\' frequent international business and luxury travel creates above-average bed bug introduction risk from high-risk destinations that typical suburban residents don\'t encounter.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Santa Monica from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Santa Monica neighborhoods including Ocean Park, North of Montana, Pico, Downtown, the Wilshire Corridor, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Torrance ─────────────────────────────────────────────────────────────────

  {
    slug: 'torrance',
    city: 'Torrance',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Torrance, CA',
    metaDescription:
      'Pest control in Torrance, CA. Termites, bed bugs, cockroaches, rats. Serving Old Torrance, North Torrance, South Torrance, Walteria. Licensed, insured. Call (866) 755-1284.',
    heroHeadline: 'Torrance Pest Control — South Bay Specialists',
    heroSubhead:
      'Torrance\'s Japanese-American community gardens, industrial park borders, and South Bay coastal climate create distinct pest patterns. We\'ve served this community for years.',
    climateOverview: `Torrance occupies the South Bay region of Los Angeles County, positioned between the beach cities of Redondo Beach and Manhattan Beach to the west and the industrial corridors of Carson and Gardena to the east. The city's climate reflects this transitional position — mildly coastal in the western residential neighborhoods near Del Amo Fashion Center, and slightly warmer and more continental in the eastern industrial and commercial zones.

The South Bay coastal influence keeps Torrance temperatures moderate year-round — summers rarely exceed 90°F in the residential areas, and winters are among the mildest in the county. This moderation creates year-round pest activity without the extreme seasonal spikes found in inland valley communities. German cockroaches in commercial kitchens, subterranean termites in the high-moisture coastal soils, and roof rats in the mature residential tree canopy are consistent year-round presences.

The presence of major industrial facilities in eastern Torrance — historically including Toyota, Exxon, and other manufacturing operations — has attracted a large Japanese-American community with associated landscaping culture. Japanese-style gardens with koi ponds, dense bamboo plantings, and elaborate rock-and-moss arrangements create unusual pest harborage conditions not commonly found in typical LA residential neighborhoods.`,

    housingStockOverview: `Torrance's residential housing stock is predominantly mid-century, with the bulk of single-family development occurring during the 1950s–1970s in planned residential tracts. The city was largely developed in a single planned-community era under the guidance of the Dominguez Land Corporation, resulting in relatively uniform housing typology: single-story ranch homes with attached garages, concrete block construction, and standard 6,000–8,000 square foot lots with front and back lawn irrigation.

Old Torrance — the original commercial and residential core near the city's founding in 1912 — contains the oldest and most pest-vulnerable housing stock. Victorian, Craftsman, and early California Bungalow construction in Old Torrance shares the same characteristics as similar vintage properties in South LA and Long Beach: original old-growth lumber with a century of accumulated entry points, aging utility penetrations, and foundation construction that predates modern pest exclusion standards.

The condominium and townhome communities concentrated near Del Amo Fashion Center and the South Bay Galleria area present the typical multi-unit bed bug and cockroach management challenges common to shared-wall residential construction. Japanese-American community-owned properties frequently maintain the elaborate gardens that create Argentine ant and termite conditions requiring specialized management approaches.`,

    neighborhoods: [
      {
        name: 'Old Torrance',
        note: 'Original city center with Craftsman and Victorian homes. Drywood termite pressure high in original construction. Argentine ants persistent in the older irrigated gardens.',
      },
      {
        name: 'North Torrance',
        note: 'Mid-century ranch home district adjacent to the 405 freeway. Standard suburban pest profile — roof rats, subterranean termites, cockroaches near commercial corridors.',
      },
      {
        name: 'South Torrance',
        note: 'More upscale residential area near the beach cities. Japanese-American community with distinctive garden landscaping. Koi ponds and bamboo plantings create unusual pest harborage conditions.',
      },
      {
        name: 'Walteria',
        note: 'Hillside community bordering Palos Verdes. Wildlife pressure from the undeveloped Palos Verdes open space. Roof rats in mature Eucalyptus and Jacaranda canopy.',
      },
      {
        name: 'Del Amo Corridor',
        note: 'Dense commercial and multi-family residential zone. Cockroach pressure from restaurant district. Bed bug pressure in multi-family residential towers.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'South Bay marine influence keeps temperatures mild. Post-rain soil moisture active. First flowering in residential gardens.',
        primaryPests: ['Subterranean termites (swarming)', 'Argentine ants (first expansion)', 'Bee swarms'],
        notes: 'South Torrance and Old Torrance experience subterranean termite swarming shortly after first significant rains of the season. Argentine ant foraging begins in irrigated gardens as soon as first warm nights appear.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'South Bay\'s ideal spring — mild temperatures, morning marine layer. Gardens in peak bloom.',
        primaryPests: ['Bee swarms (peak)', 'Drywood termite swarmers', 'Roof rats (breeding)', 'Wasps'],
        notes: 'Torrance\'s extensive koi pond culture creates unusual spring conditions for mosquito breeding in improperly maintained ponds. Bee swarm calls peak in April from the Walteria and South Torrance hillside areas.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Classic South Bay summer — mild, marine-influenced, with afternoon clearing. Cooler than inland LA by 15–20°F.',
        primaryPests: ['Roof rats (fruit tree activity)', 'German cockroaches', 'Bed bugs', 'Wasps (peak)'],
        notes: 'Torrance summer pest activity is generally lower intensity than inland cities due to marine influence. However, roof rats are highly active in the South Torrance fruit tree gardens from July through September.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana conditions are more moderate in coastal South Bay than inland. Comfortable temperatures continue into November.',
        primaryPests: ['Rats (indoor entry begins)', 'Drywood termites (secondary swarm)', 'Cockroaches (activity in cooling restaurants)'],
        notes: 'Roof rat indoor entry in Torrance begins slightly later than inland cities due to the milder coastal fall temperatures. Drywood termite secondary swarm in Old Torrance is notable in October.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'South Bay\'s mildest months — coastal influence keeps temperatures above 48°F consistently. Persistent marine layer.',
        primaryPests: ['Rats (indoor nesting)', 'Subterranean termites (active through winter)', 'Bed bugs (continuous in multi-family)'],
        notes: 'Torrance\'s mild winter keeps pest activity continuous. Subterranean termites in South Torrance and Walteria coastal soils remain active through December and January without a seasonal pause.',
      },
    ],

    localFactors: [
      'Japanese-American community garden culture — with koi ponds, bamboo groves, and ornamental gardens — creates unusual pest harborage conditions including mosquito breeding in improperly maintained water features and rodent cover in bamboo plantings',
      'The Palos Verdes Peninsula open space adjacent to Walteria maintains wildlife populations including skunks, raccoons, and coyotes that enter residential areas year-round',
      'Industrial park borders in eastern Torrance (historically Toyota\'s North American headquarters, aerospace facilities) create cockroach and rodent migration pressure from commercial to residential zones',
      'Mid-century ranch home construction throughout most of the city means standard utility penetration gaps, aging crawl space screens, and minimal attic exclusion — all common rodent entry points',
      'Old Torrance\'s original downtown area has the city\'s most vulnerable housing stock — pre-war Craftsman and California Bungalow construction with century-old structural lumber',
      'The South Bay marine climate means Torrance never experiences the extreme summer heat that suppresses pest activity in inland cities — populations remain stable and consistent year-round',
    ],

    whyLAIsDifferent: [
      'Koi pond mosquito risk: Torrance\'s distinctive Japanese-American garden culture includes a higher concentration of decorative water features than any comparable LA city — improperly managed koi ponds and garden water features are significant mosquito breeding sources.',
      'Industrial pest migration: eastern Torrance borders with major industrial facilities create pest pressure vectors from commercial operations into adjacent residential neighborhoods that typical suburban communities don\'t experience.',
      'Palos Verdes wildlife interface: the undeveloped Palos Verdes Peninsula creates a major wildlife corridor directly adjacent to Walteria and South Torrance residential areas, maintaining higher skunk, raccoon, and wildlife activity than comparable suburban cities.',
      'Year-round subterranean termite pressure: Torrance\'s coastal soil moisture from the South Bay marine climate creates subterranean termite foraging conditions that remain active 12 months per year — there is no low-activity season.',
      'Mid-century construction concentration: unlike older cities with variable housing ages, Torrance has a remarkably uniform mid-century construction vintage across most residential neighborhoods — a widespread pattern of utility penetration gaps and aged exclusion details that creates consistent rodent entry vulnerability throughout the city.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Torrance from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Torrance neighborhoods including Old Torrance, North Torrance, South Torrance, Walteria, the Del Amo Corridor, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },

  // ─── Beverly Hills ────────────────────────────────────────────────────────────

  {
    slug: 'beverly-hills',
    city: 'Beverly Hills',
    state: 'CA',
    county: 'Los Angeles County',
    displayName: 'Beverly Hills, CA',
    metaDescription:
      'Pest control in Beverly Hills, CA. Discreet, professional termite, bed bug, and rodent control for luxury estates and commercial properties. Call (866) 755-1284.',
    heroHeadline: 'Beverly Hills Pest Control — Discreet, Expert Protection for Luxury Properties',
    heroSubhead:
      'Beverly Hills estates and commercial properties require pest control that matches their standards: thorough, discreet, and effective. OCP Pest Control delivers all three.',
    climateOverview: `Beverly Hills occupies an interior coastal basin position in the central part of the Los Angeles metro — slightly warmer than the beach cities to the west but significantly cooler than the San Fernando Valley to the north. The city's unique topography, rising from the flat commercial district along Wilshire Boulevard through the residential flats into the Benedict Canyon and Coldwater Canyon hillside estates, creates meaningful microclimate variation within its 5.7 square miles.

The hillside and canyon estates north of Sunset Boulevard experience a distinctly different pest environment than the residential flats or the commercial corridor. Canyon soils retain moisture year-round, supporting continuous subterranean termite activity. The dense mature vegetation in the canyon lots — mature oaks, eucalyptus, ficus, and ornamental plantings maintained by professional landscaping crews — creates a tree canopy that serves as a roof rat highway system connecting canyon estates across property lines.

Beverly Hills' groundwater and irrigation infrastructure — supporting the immaculately maintained streetscapes and private garden estates — creates persistent soil moisture that benefits subterranean termite populations throughout the year. The combination of this irrigation moisture with the city's year-round mild temperatures creates one of the most consistently favorable termite environments in LA County.`,

    housingStockOverview: `Beverly Hills' residential stock is among the most valuable in the world, and the city has exceptionally stringent preservation and renovation requirements that limit demolition. As a result, a substantial portion of the housing stock is genuinely historic — Spanish Revival, Neoclassical, Tudor Revival, and early California Modern estates from the 1920s–1960s that have been continuously maintained and renovated over decades.

These historic luxury estates present pest challenges proportional to their scale and age. A 10,000 square foot Spanish Revival from 1928 has a century of potential termite gallery accumulation in its original structural members. The estate gardens — often featuring towering mature palms, ficus hedgerows, and ornamental citrus — create exceptional roof rat habitat. And the building's sheer footprint means more linear feet of foundation perimeter, more roof penetrations, and more structural complexity than a typical residential property.

The commercial corridor along Rodeo Drive and the Wilshire Boulevard hotel district creates conventional commercial pest management demands — German cockroach pressure in the restaurant kitchens, bed bug risk in the luxury hotel inventory (where a single incident can generate significant negative publicity), and rodent pressure from the large food service waste streams in this high-density commercial zone.`,

    neighborhoods: [
      {
        name: 'Beverly Hills Flats',
        note: 'Original residential development from the 1920s–1940s. Spanish Colonial and Tudor Revival estates with original structural lumber. High drywood termite pressure in aged wood.',
      },
      {
        name: 'Beverly Hills Post Office (BHPO)',
        note: 'Canyon-adjacent estates in the 90210 ZIP code. Roof rats extremely active in mature palm and eucalyptus canopy. Wildlife corridor from Benedict Canyon delivers raccoons and skunks regularly.',
      },
      {
        name: 'Trousdale Estates',
        note: 'Mid-century modern estates on hillside lots. Open-plan construction creates unusual pest entry points. Wildlife pressure from the undeveloped hillside parcels.',
      },
      {
        name: 'Rodeo Drive / Golden Triangle',
        note: 'Premium commercial corridor. German cockroach pressure in restaurant kitchens. Bed bug risk in luxury hotels. High-visibility properties where pest incidents are exceptionally costly reputationally.',
      },
      {
        name: 'Wilshire Corridor',
        note: 'Luxury high-rise residential and hotel corridor. Bed bug pressure from international hotel guests. Building infrastructure creates pest migration pathways between units.',
      },
    ],

    seasonalPestCalendar: [
      {
        season: 'Late Winter / Early Spring',
        months: 'February – March',
        conditions: 'Irrigation and winter rains create moist soil. Canyon temperatures mild. Palm flowering begins.',
        primaryPests: ['Subterranean termites (swarmers)', 'Bee swarms (canyon properties)', 'Rats (breeding season begins)'],
        notes: 'Subterranean termite swarming events in Beverly Hills canyon properties typically follow the first significant rain. Canyon-adjacent estates see the earliest termite swarmer activity in the spring season.',
      },
      {
        season: 'Spring',
        months: 'April – May',
        conditions: 'Ideal outdoor conditions. Garden party season begins. Film festival and award season activity brings visitors.',
        primaryPests: ['Drywood termite swarmers', 'Bee swarms (peak in canyon and estate gardens)', 'Roof rats (breeding)', 'German cockroaches'],
        notes: 'Award season events at the Beverly Hills Hotel and nearby venues bring visitors from international film markets — bed bug introduction risk in the hotel corridor elevates significantly during Oscars season.',
      },
      {
        season: 'Summer',
        months: 'June – September',
        conditions: 'Pleasant Beverly Hills summer — cooler than inland LA. Outdoor entertaining season. International visitor peak.',
        primaryPests: ['Roof rats (fruit tree and palm foraging peak)', 'Wasps (garden nests)', 'Bed bugs (hotel and short-term rental peak)', 'German cockroaches'],
        notes: 'Beverly Hills hotel district sees its highest international visitor volume in summer — bed bug introduction risk in the hotel corridor is at annual peak. Estate roof rat activity in mature palm dates peaks in August–September.',
      },
      {
        season: 'Fall',
        months: 'October – November',
        conditions: 'Santa Ana winds moderated by interior basin position. Film industry award season preparation.',
        primaryPests: ['Rats (indoor entry begins)', 'Raccoons (aggressive pre-winter foraging)', 'Drywood termites (secondary swarm)'],
        notes: 'Award season preparation brings film industry events to Beverly Hills properties — bed bug risk from hotel corridor visitor activity remains elevated. Canyon estate raccoon activity increases significantly in October.',
      },
      {
        season: 'Winter',
        months: 'December – January',
        conditions: 'Mild winter with holiday events and award season. International visitor activity continues.',
        primaryPests: ['Rats (indoor nesting)', 'Subterranean termites (active in irrigated soils)', 'Bed bugs (hotel corridor)'],
        notes: 'Beverly Hills hotel corridor maintains near-peak international visitor activity through December — bed bug introduction pressure does not have a meaningful winter low as it does in non-destination cities.',
      },
    ],

    localFactors: [
      'Estate scale multiplies pest management complexity — a 10,000+ square foot historic estate has far more linear feet of foundation, more roof penetrations, and more structural complexity than a standard residential property',
      'The city\'s extensive irrigation infrastructure creates continuous soil moisture that supports year-round subterranean termite activity throughout the residential flats and hillside areas',
      'Mature palm canopy city-wide provides exceptional roof rat habitat — palm date clusters are a primary rat food source in late summer, and the fibrous palm crown is ideal nesting material',
      'Award season and film industry event calendar brings international visitors to the hotel corridor multiple times per year, creating repeated bed bug introduction events',
      'Luxury property owners\' legitimate concern about reputational discretion creates a specific service requirement — pest control for these properties must be executed with complete professional discretion',
      'Benedict Canyon and Coldwater Canyon wildlife corridors bring raccoons, skunks, coyotes, and deer regularly into estate gardens on the hillside and canyon parcels',
    ],

    whyLAIsDifferent: [
      'Estate-scale complexity: Beverly Hills properties require pest management at a scale and complexity level that standard residential service is not designed to address — both in terms of property size and the client\'s expectation of thoroughness and discretion.',
      'Award season bed bug cycles: no other LA city has the cyclical international visitor concentration that Beverly Hills hotel properties experience during Oscars, Emmys, and Golden Globes seasons — creating multiple distinct bed bug introduction windows per year.',
      'Palm canopy rat density: Beverly Hills\' massive concentration of mature date palms — particularly along the famous palm-lined streets — creates roof rat habitat density that makes rat exclusion a permanent, ongoing challenge rather than a one-time fix.',
      'Historic estate termite accumulation: century-old luxury estates have accumulated decades or generations of termite gallery history in original structural lumber — treatment requires thorough investigation to identify legacy activity vs. current infestation.',
      'Reputational discretion requirement: pest incidents in high-visibility luxury properties carry reputational costs that far exceed the remediation cost — the operational requirement for professional discretion in service delivery is higher here than anywhere else in our service area.',
    ],

    serviceAreaNote:
      'OCP Pest Control serves Beverly Hills from our Los Angeles office at 3332 S Hope St, Los Angeles, CA 90007. We serve all Beverly Hills neighborhoods including the Flats, BHPO, Trousdale Estates, the Golden Triangle commercial district, and surrounding areas. Contact us at (866) 755-1284 to schedule service.',
  },
]
