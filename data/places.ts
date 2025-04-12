export interface PlaceData {
  name: string;
  title: string;
  heroImage: string;
  description: string;
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
  facts: string[];
  tips: string[];
  hasARModel: boolean;
}

export const placesData: Record<string, Record<string, PlaceData>> = {
  waterfalls: {
    "jog-falls": {
      name: "Jog Falls",
      title: "Jog Falls: India's Second Highest Plunge Waterfall",
      heroImage: "/images/places/waterfalls/jog-falls/hero.jpg",
      description: "Jog Falls, created by the Sharavathi River, is the second-highest plunge waterfall in India. Located in the Western Ghats of Karnataka, it's a breathtaking natural wonder where water plunges directly down from a height without streaming over rocks.",
      sections: [
        {
          title: "About Jog Falls",
          content: "Jog Falls, also known as Gerusoppa Falls or Joga Falls, is created by the Sharavathi River dropping 253 meters (830 ft) in four distinct cascades - Raja (King), Rani (Queen), Rover, and Rocket. Unlike tiered waterfalls, Jog Falls plunges directly down without streaming over rocks, making it a spectacular sight, especially during the monsoon season from June to September when the water flow is at its peak.",
          image: "/images/places/waterfalls/jog-falls/about.jpg"
        },
        {
          title: "Best Time to Visit",
          content: "The best time to visit Jog Falls is during the monsoon season (June to September) when the waterfall is in its full glory. During winter (October to February), the water flow reduces but still offers a beautiful view with pleasant weather for exploration. Summer (March to May) sees minimal water flow as the dam upstream diverts water for electricity generation.",
          image: "/images/places/waterfalls/jog-falls/season.jpg"
        },
        {
          title: "How to Reach",
          content: "Jog Falls is located about 30 km from Sagara town in Shimoga district. The nearest railway station is at Sagara (Shimoga district), about 28 km away. The nearest airport is Hubli Airport, approximately 140 km from Jog Falls. Regular buses operate from major cities like Bangalore, Mangalore, and Hubli to Jog Falls. If driving from Bangalore, take the Bangalore-Honnavar road via NH-206 and NH-63 (approximately 340 km).",
          image: "/images/places/waterfalls/jog-falls/location.jpg"
        },
        {
          title: "Nearby Attractions",
          content: "While visiting Jog Falls, you can explore several nearby attractions including Linganamakki Dam (6 km), Sharavathi Valley Wildlife Sanctuary, Kodachadri Peak (80 km), Honnemaradu for water sports (20 km), and the historic town of Sagara with its ancient temples.",
          image: "/images/places/waterfalls/jog-falls/nearby.jpg"
        }
      ],
      facts: [
        "Jog Falls is the second-highest plunge waterfall in India",
        "It consists of four cascades - Raja, Rani, Rover, and Rocket",
        "The waterfall drops from a height of 253 meters (830 feet)",
        "The Sharavathi River creates this magnificent waterfall",
        "A hydroelectric project upstream controls the water flow during non-monsoon seasons"
      ],
      tips: [
        "Wear comfortable footwear as there are many steps to climb down to the base of the falls",
        "Carry raincoats or umbrellas during monsoon as the spray from the falls can drench you",
        "The viewpoint at the top offers the best panoramic view of all four cascades",
        "Photography enthusiasts should visit during early morning for the best lighting",
        "Carry water and snacks as options are limited near the falls"
      ],
      hasARModel: true
    },
    "abbey-falls": {
      name: "Abbey Falls",
      title: "Abbey Falls: Cascading Beauty in Coorg",
      heroImage: "/images/places/waterfalls/abbey-falls/hero.jpg",
      description: "Nestled in the Western Ghats of Coorg, Abbey Falls is a magnificent cascade where the Kaveri River tumbles down rocky steps amidst coffee and spice plantations.",
      sections: [
        {
          title: "About Abbey Falls",
          content: "Located just 8 kilometers from Madikeri, Abbey Falls cascades down at a height of 70 feet amidst private coffee and spice estates. The waterfall is formed by a small river that originates in the Western Ghats and joins the Kaveri River.",
          image: "/images/places/waterfalls/abbey-falls/about.jpg"
        },
        {
          title: "Best Time to Visit",
          content: "The ideal time to visit Abbey Falls is during the monsoon season (July to October) when the waterfall is at its full glory. Post-monsoon (October to February) is also good with moderate water flow.",
          image: "/images/places/waterfalls/abbey-falls/season.jpg"
        },
        {
          title: "How to Reach",
          content: "Abbey Falls is easily accessible from Madikeri town. The nearest major railway station is Mysore (120 km) and the nearest airport is Mangalore International Airport (160 km). Regular buses and taxis are available from Madikeri.",
          image: "/images/places/waterfalls/abbey-falls/location.jpg"
        }
      ],
      facts: [
        "Originally known as 'Jessie Falls' during British rule",
        "Surrounded by coffee and spice plantations",
        "Features a hanging bridge for viewing",
        "Water from the falls joins the Kaveri River",
        "Popular spot for photography and nature lovers"
      ],
      tips: [
        "Visit early morning to avoid crowds",
        "Wear non-slip footwear as paths can be slippery",
        "Carry water and snacks",
        "Best photos from the hanging bridge",
        "Combine with visit to nearby coffee plantations"
      ],
      hasARModel: true
    },
    "iruppu-falls": {
      name: "Iruppu Falls",
      title: "Iruppu Falls: Sacred Cascades of Brahmagiri",
      heroImage: "/images/places/waterfalls/iruppu-falls/hero.jpg",
      description: "A sacred waterfall in the Brahmagiri Range, Iruppu Falls holds mythological significance and offers a serene natural setting.",
      sections: [
        {
          title: "About Iruppu Falls",
          content: "The falls drop from a height of 170 feet through multiple stages in the Brahmagiri Range. According to legend, Lord Rama and Lakshmana passed this way while searching for Sita, and when Rama was thirsty, he shot an arrow into the Brahmagiri hills, creating these falls.",
          image: "/images/places/waterfalls/iruppu-falls/about.jpg"
        },
        {
          title: "Best Time to Visit",
          content: "Post-monsoon season (September to January) is ideal for visiting Iruppu Falls when the water flow is substantial and the weather is pleasant. The falls are particularly spectacular during the monsoon months.",
          image: "/images/places/waterfalls/iruppu-falls/season.jpg"
        },
        {
          title: "Spiritual Significance",
          content: "The nearby Rameshwara Temple is an important pilgrimage site. Devotees believe taking a dip in the falls on Shivaratri absolves them of their sins.",
          image: "/images/places/waterfalls/iruppu-falls/temple.jpg"
        }
      ],
      facts: [
        "Also known as the Lakshmana Tirtha Falls",
        "Located near Srimangala in Kodagu district",
        "Falls from a height of 170 feet",
        "Sacred to both Hindu and tribal communities",
        "Part of the Brahmagiri Wildlife Sanctuary"
      ],
      tips: [
        "Best visited during early morning",
        "Carry change of clothes if planning to take a dip",
        "Respect the religious significance of the site",
        "Watch out for slippery rocks",
        "Combine visit with Nagarhole National Park"
      ],
      hasARModel: true
    },
    "shivanasamudra-falls": {
      name: "Shivanasamudra Falls",
      title: "Shivanasamudra Falls: Twin Wonders of the Kaveri",
      heroImage: "/images/places/waterfalls/shivanasamudra-falls/hero.jpg",
      description: "Twin waterfalls formed by the Kaveri River, featuring Asia's first hydroelectric power station and stunning views.",
      sections: [
        {
          title: "About Shivanasamudra",
          content: "Shivanasamudra consists of twin falls - Gaganachukki and Bharachukki, created where the Kaveri River splits around a small island. The falls drop from a height of 98 meters, creating a spectacular sight.",
          image: "/images/places/waterfalls/shivanasamudra-falls/about.jpg"
        },
        {
          title: "Historical Significance",
          content: "The falls are home to Asia's first hydroelectric power station, established in 1902. This historic power station supplied electricity to the Kolar Gold Fields, Bangalore, and Mysore.",
          image: "/images/places/waterfalls/shivanasamudra-falls/history.jpg"
        },
        {
          title: "Best Time to Visit",
          content: "The best time to visit is between July and October when the water flow is at its peak due to monsoon rains. The falls are also beautiful during winter months.",
          image: "/images/places/waterfalls/shivanasamudra-falls/season.jpg"
        }
      ],
      facts: [
        "One of the largest waterfalls in India",
        "Home to Asia's first hydroelectric power station",
        "Consists of twin falls - Gaganachukki and Bharachukki",
        "Falls from a height of 98 meters",
        "Located about 130 km from Bangalore"
      ],
      tips: [
        "Visit both viewpoints for complete experience",
        "Carry binoculars for better views",
        "Best photographed during morning hours",
        "Avoid monsoon peak for safety",
        "Pack food as options are limited nearby"
      ],
      hasARModel: true
    }
  },
  temples: {
    "virupaksha-temple": {
      name: "Virupaksha Temple",
      title: "Virupaksha Temple: Ancient Marvel of Hampi",
      heroImage: "/images/places/temples/virupaksha/hero.jpg",
      description: "The Virupaksha Temple in Hampi is a UNESCO World Heritage site and the main center of pilgrimage at Hampi. This 7th-century temple is dedicated to Lord Virupaksha, a form of Shiva, and showcases the magnificent Vijayanagara architecture.",
      sections: [
        {
          title: "Temple History",
          content: "The Virupaksha Temple has been functioning uninterruptedly since the 7th century AD. The temple grew from a small shrine to a large complex under the Vijayanagara rulers who built the temple's main entrance tower (gopura) to a height of 160 feet, making it one of the largest in South India.",
          image: "/images/places/temples/virupaksha/history.jpg"
        },
        {
          title: "Architecture",
          content: "The temple's architecture reflects the Vijayanagara style with its massive gopuras, decorated pillars, and intricate carvings. The main temple consists of a sanctum, three ante chambers, a pillared hall and an open pillared hall. The nine-tiered eastern gateway is a masterpiece of temple architecture.",
          image: "/images/places/temples/virupaksha/architecture.jpg"
        },
        {
          title: "How to Reach",
          content: "Hampi is accessible from Hospet (12 km), which has good rail and road connections. The nearest airport is Bellary (74 km). Regular buses operate between Hospet and Hampi. Auto-rickshaws and taxis are available for local transportation.",
          image: "/images/places/temples/virupaksha/location.jpg"
        },
        {
          title: "Best Time to Visit",
          content: "October to February is the best time to visit when the weather is pleasant. The annual Hampi Festival in November/December showcases the cultural heritage of the region. Summer months (March to May) can be extremely hot.",
          image: "/images/places/temples/virupaksha/season.jpg"
        }
      ],
      facts: [
        "It is one of the oldest functioning temples in India",
        "The temple features an inverted shadow of its gopura",
        "The temple survived the destruction of Hampi in 1565",
        "The main temple tower is 160 feet high",
        "The temple complex houses a small museum"
      ],
      tips: [
        "Visit early morning or late afternoon for better photography",
        "Dress modestly as it's a religious site",
        "Guide services are available at the temple",
        "The temple is active during festival seasons",
        "Combine visit with other Hampi attractions"
      ],
      hasARModel: true
    },
    "chennakesava-temple": {
      name: "Chennakesava Temple",
      title: "Chennakesava Temple: Hoysala Masterpiece of Belur",
      heroImage: "/images/places/temples/chennakesava/hero.jpg",
      description: "The Chennakesava Temple in Belur is a stunning example of Hoysala architecture, built in the 12th century. Known for its intricate sculptures and detailed craftsmanship, it stands as a testament to Karnataka's rich architectural heritage.",
      sections: [
        {
          title: "Temple History",
          content: "Built in 1117 CE by Hoysala King Vishnuvardhana, this temple took 103 years to complete. The temple celebrates the Hoysalas' victory over the Cholas, marking a significant period in Karnataka's history.",
          image: "/images/places/temples/chennakesava/history.jpg"
        },
        {
          title: "Architecture",
          content: "The temple is built on a star-shaped platform and features intricate carvings depicting scenes from the Ramayana, Mahabharata, and Puranas. The walls are adorned with over 4,000 carvings, each telling unique stories from Indian mythology.",
          image: "/images/places/temples/chennakesava/architecture.jpg"
        },
        {
          title: "Sculptures and Artwork",
          content: "Famous for its bracket figures known as Madanikas, the temple features 38 unique sculptures depicting celestial nymphs in various poses. The ceiling panels contain intricate designs and the outer walls showcase detailed friezes.",
          image: "/images/places/temples/chennakesava/sculptures.jpg"
        }
      ],
      facts: [
        "Built in 1117 CE during the Hoysala Empire",
        "Features over 4,000 intricate carvings",
        "Took 103 years to complete",
        "Built to commemorate victory over Cholas",
        "Known for its unique Madanika sculptures"
      ],
      tips: [
        "Visit early morning for the best lighting",
        "Hire a guide to understand the intricate details",
        "Photography is allowed but no flash",
        "Combine visit with Halebidu temples",
        "Wear comfortable footwear for stone floors"
      ],
      hasARModel: true
    },
    "hoysaleswara-temple": {
      name: "Hoysaleswara Temple",
      title: "Hoysaleswara Temple: Twin Temples of Halebidu",
      heroImage: "/images/places/temples/hoysaleswara/hero.jpg",
      description: "The Hoysaleswara Temple in Halebidu is a masterpiece of Hoysala architecture, featuring twin temples dedicated to Lord Shiva with some of the most intricate stone carvings in India.",
      sections: [
        {
          title: "Historical Significance",
          content: "Built in the 12th century during the reign of King Vishnuvardhana, this temple was the grand project of the Hoysala Empire. The name Halebidu means 'old capital', as it was once the capital of the Hoysala Empire.",
          image: "/images/places/temples/hoysaleswara/history.jpg"
        },
        {
          title: "Architectural Marvel",
          content: "The temple features two shrines, each with a complete set of sculptures depicting scenes from the Ramayana, Mahabharata, and Bhagavata Purana. The outer walls are covered with an endless variety of Hindu deities, animals, birds, and dancing figures.",
          image: "/images/places/temples/hoysaleswara/architecture.jpg"
        },
        {
          title: "Sculptural Details",
          content: "The temple is renowned for its platform with friezes showing charging elephants, lions, horses, and scenes from the epics. Each panel tells a different story, and no two sculptures are exactly alike.",
          image: "/images/places/temples/hoysaleswara/sculptures.jpg"
        }
      ],
      facts: [
        "Built in the 12th century CE",
        "Features twin temples dedicated to Shiva",
        "Contains over 240 wall sculptures",
        "Survived multiple invasions",
        "Known for its unique star-shaped platform"
      ],
      tips: [
        "Morning light is best for photography",
        "Plan at least 3 hours for the visit",
        "Combine with Chennakesava Temple visit",
        "Local guides provide detailed information",
        "Visit during winter for comfortable weather"
      ],
      hasARModel: true
    },
    "murudeshwara-temple": {
      name: "Murudeshwara Temple",
      title: "Murudeshwara Temple: Coastal Marvel with World's Second-Tallest Shiva Statue",
      heroImage: "/images/places/temples/murudeshwara/hero.jpg",
      description: "The Murudeshwara Temple, situated on the coast of Karnataka, features the world's second-tallest Shiva statue and a stunning gopura, making it a unique blend of traditional and modern architecture.",
      sections: [
        {
          title: "Temple Overview",
          content: "Located between the Arabian Sea and Western Ghats, this temple features a 123-feet tall Shiva statue and a 237-feet tall Raja Gopura. The temple is built on the Kanduka Hill, surrounded on three sides by the Arabian Sea.",
          image: "/images/places/temples/murudeshwara/overview.jpg"
        },
        {
          title: "Mythological Significance",
          content: "According to legend, this is where Lord Shiva gave the Atma Linga to Ravana, and parts of the original linga fell here when Ravana tried to place it on the ground. The name Murudeshwara comes from 'Muru' meaning three and 'Eshwara' meaning Lord Shiva.",
          image: "/images/places/temples/murudeshwara/mythology.jpg"
        },
        {
          title: "Modern Architecture",
          content: "The temple combines traditional architecture with modern elements, featuring glass elevators in the gopura offering panoramic views of the Arabian Sea and the Shiva statue. The entire complex was renovated and expanded in recent years.",
          image: "/images/places/temples/murudeshwara/architecture.jpg"
        }
      ],
      facts: [
        "Features world's second-tallest Shiva statue",
        "237-feet tall Raja Gopura with elevators",
        "Surrounded by Arabian Sea on three sides",
        "Modern renovation completed in 2008",
        "Attracts millions of visitors annually"
      ],
      tips: [
        "Visit during sunset for spectacular views",
        "Take elevator to gopura top for panorama",
        "Combine with beach activities",
        "Best visited during October to March",
        "Photography allowed in most areas"
      ],
      hasARModel: true
    },
    "udupi-krishna-temple": {
      name: "Udupi Sri Krishna Temple",
      title: "Udupi Sri Krishna Temple: Sacred Window to Divinity",
      heroImage: "/images/places/temples/udupi-krishna/hero.jpg",
      description: "The Udupi Sri Krishna Temple is famous for its unique window-based darshan and is one of the most important Krishna temples in India, known for its spiritual significance and distinctive traditions.",
      sections: [
        {
          title: "Temple History",
          content: "Established by Sri Madhvacharya in the 13th century, this temple is known for its unique tradition where Lord Krishna is worshipped through a window with nine holes called the Navagraha Kitiki. The idol was discovered by Madhvacharya in a large ball of gopichandana (sacred clay).",
          image: "/images/places/temples/udupi-krishna/history.jpg"
        },
        {
          title: "Unique Features",
          content: "The temple is unique as the deity is viewed through a window with nine holes, symbolizing the nine forms of devotion. The temple follows a distinctive system of worship where eight monasteries (Ashta Mathas) take turns in managing the temple worship.",
          image: "/images/places/temples/udupi-krishna/features.jpg"
        },
        {
          title: "Cultural Impact",
          content: "The temple has significantly influenced the culture of the region, particularly in cuisine, with the famous Udupi cuisine originating from its temple kitchen. The temple's prasadam is served daily to thousands of devotees.",
          image: "/images/places/temples/udupi-krishna/culture.jpg"
        }
      ],
      facts: [
        "Founded by Sri Madhvacharya in 13th century",
        "Features unique window-based darshan",
        "Managed by eight different monasteries",
        "Birthplace of Udupi cuisine",
        "Follows distinctive worship traditions"
      ],
      tips: [
        "Visit early morning for special prayers",
        "Dress modestly and traditionally",
        "Try the temple prasadam",
        "Photography not allowed inside",
        "Plan visit around festival times"
      ],
      hasARModel: true
    }
  },
  forts: {
    "bangalore-fort": {
      name: "Bangalore Fort",
      title: "Bangalore Fort: Legacy of the Mysore Kingdom",
      heroImage: "/images/places/forts/bangalore-fort/hero.jpg",
      description: "Originally built as a mud fort by Kempe Gowda in 1537, the Bangalore Fort was later expanded and reinforced with stone by Hyder Ali. Today, only the Delhi Gate and remnants of two bastions remain as a testament to Bangalore's military history.",
      sections: [
        {
          title: "Historical Significance",
          content: "The fort played a crucial role in the history of Bangalore, serving as a military stronghold during the rule of Tipu Sultan. The fort's architecture showcases a blend of Islamic and European military architectural styles, particularly after Hyder Ali's modifications.",
          image: "/images/places/forts/bangalore-fort/history.jpg"
        },
        {
          title: "Architecture",
          content: "The remaining Delhi Gate is built in the Islamic military architectural style with pointed arches and detailed ornamentation. The fort walls were originally built with granite stones and featured multiple bastions and gates.",
          image: "/images/places/forts/bangalore-fort/architecture.jpg"
        },
        {
          title: "Present Day",
          content: "Located in the busy Pete area of Bangalore, the fort's remains serve as an important historical landmark. The site includes an ancient Ganapathi temple and provides insights into the city's evolution from a small mud fort to a major metropolis.",
          image: "/images/places/forts/bangalore-fort/present.jpg"
        }
      ],
      facts: [
        "Originally built as a mud fort in 1537",
        "Renovated with stone by Hyder Ali in 1761",
        "Only the Delhi Gate survives today",
        "Witnessed the Third Anglo-Mysore War",
        "Houses an ancient Ganapathi temple"
      ],
      tips: [
        "Visit early morning to avoid traffic",
        "Combine with a visit to Tipu Sultan's Summer Palace",
        "Hire a local guide for historical insights",
        "Best photographed during golden hours",
        "Accessible by metro and local transport"
      ],
      hasARModel: true
    },},
    mountains: {
      "mullayanagiri": {
        name: "Mullayanagiri",
        title: "Mullayanagiri: Karnataka's Highest Peak",
        heroImage: "/images/places/mountains/mullayanagiri/hero.jpg",
        description: "Standing at 1,930 meters (6,330 feet), Mullayanagiri is the highest peak in Karnataka, offering breathtaking views of the Western Ghats and challenging trekking opportunities.",
        sections: [
          {
            title: "Peak Overview",
            content: "Located in the Chandra Drona Hill Ranges of Chikmagalur, Mullayanagiri is named after Lord Mulappa Swamy, whose temple sits at the summit. The peak offers panoramic views of the surrounding coffee plantations and the entire Chikmagalur region.",
            image: "/images/places/mountains/mullayanagiri/overview.jpg"
          },
          {
            title: "Trekking Experience",
            content: "The trek to Mullayanagiri peak involves a moderate 3-kilometer trail with steep sections. The path features well-marked steps and natural terrain, making it accessible to both beginners and experienced trekkers. The summit can also be reached by road for those who prefer not to trek.",
            image: "/images/places/mountains/mullayanagiri/trek.jpg"
          },
          {
            title: "Best Time to Visit",
            content: "October to February offers the best weather for trekking, with clear skies and moderate temperatures. Early morning treks are recommended for clearer views and to avoid afternoon heat or fog.",
            image: "/images/places/mountains/mullayanagiri/season.jpg"
          }
        ],
        facts: [
          "Highest peak in Karnataka at 1,930 meters",
          "Named after Lord Mulappa Swamy temple",
          "Part of the Chandra Drona Hill Ranges",
          "Features both trekking trail and road access",
          "Surrounded by coffee plantations"
        ],
        tips: [
          "Start trek early morning for clear views",
          "Carry warm clothes as it gets cold at summit",
          "Wear proper trekking shoes",
          "Register at forest office before trek",
          "Carry sufficient water and snacks"
        ],
        hasARModel: true
      },
      "kudremukh": {
        name: "Kudremukh",
        title: "Kudremukh: The Majestic Horse-Faced Peak",
        heroImage: "/images/places/mountains/kudremukh/hero.jpg",
        description: "Kudremukh, meaning 'horse-face' in Kannada, is a spectacular mountain range in the Western Ghats, known for its rich biodiversity and challenging trekking trails.",
        sections: [
          {
            title: "Natural Beauty",
            content: "The peak gets its name from its distinctive horse-face shape. Located within Kudremukh National Park, it's surrounded by dense forests, grasslands, and streams, making it a paradise for nature lovers and wildlife enthusiasts.",
            image: "/images/places/mountains/kudremukh/nature.jpg"
          },
          {
            title: "Trekking Routes",
            content: "The trek to Kudremukh peak is a challenging 9-kilometer trail through varied terrain including shola forests, grasslands, and streams. The trek offers stunning views of the Western Ghats and requires good physical fitness.",
            image: "/images/places/mountains/kudremukh/trek.jpg"
          },
          {
            title: "Wildlife and Biodiversity",
            content: "The surrounding national park is home to diverse wildlife including leopards, sambar deer, gaur, and numerous bird species. The region also features rare flora species and is an important watershed area.",
            image: "/images/places/mountains/kudremukh/wildlife.jpg"
          }
        ],
        facts: [
          "Third highest peak in Karnataka",
          "Located within Kudremukh National Park",
          "Named after its horse-face shape",
          "Important watershed for three rivers",
          "Rich in iron ore deposits"
        ],
        tips: [
          "Obtain trekking permit in advance",
          "Trek only with authorized guides",
          "Start early to complete trek before dark",
          "Carry rain gear during monsoon",
          "Follow leave-no-trace principles"
        ],
        hasARModel: true
      },
      "kumara-parvatha": {
        name: "Kumara Parvatha",
        title: "Kumara Parvatha: The Challenging Peak of Pushpagiri",
        heroImage: "/images/places/mountains/kumara-parvatha/hero.jpg",
        description: "Kumara Parvatha, also known as Pushpagiri, is one of the most challenging treks in Karnataka, offering stunning views of the Western Ghats and testing the endurance of trekkers.",
        sections: [
          {
            title: "Trek Overview",
            content: "The trek to Kumara Parvatha is a demanding 14-kilometer journey through dense forests, steep climbs, and rocky terrain. It's considered one of the toughest treks in Karnataka and requires excellent physical fitness.",
            image: "/images/places/mountains/kumara-parvatha/overview.jpg"
          },
          {
            title: "Regional Variations",
            content: "Each community along the coast has its own version. The Mangalorean Catholic style uses more coconut, while the Bunt style is spicier. The GSB style often includes additional souring agents.",
            image: "/images/places/mountains/kumara-parvatha/variations.jpg"
          },
          {
            title: "Serving Traditions",
            content: "Traditionally served with rice, neer dosa, or pundi (rice balls). The curry is usually prepared thick for rice and slightly thinner when served with dosas or pundi.",
            image: "/images/places/mountains/kumara-parvatha/serving.jpg"
          }
        ],
        facts: [
          "Second highest peak in Coorg",
          "Elevation of 1,712 meters",
          "14-kilometer challenging trek",
          "Requires overnight camping",
          "Home to ancient Subramanya temple"
        ],
        tips: [
          "Book permits well in advance",
          "Carry camping gear for overnight stay",
          "Trek only during favorable weather",
          "Maintain good physical fitness",
          "Carry sufficient water and food"
        ],
        hasARModel: true
      },
      "skandagiri": {
        name: "Skandagiri",
        title: "Skandagiri: Night Trekking Paradise",
        heroImage: "/images/places/mountains/skandagiri/hero.jpg",
        description: "Skandagiri, also known as Kalavara Durga, is famous for its night treks and sunrise views. Located near Bangalore, it's an ancient mountain fortress that offers a unique trekking experience.",
        sections: [
          {
            title: "Night Trekking",
            content: "Skandagiri is particularly popular for night treks, where adventurers climb under the moonlight to witness spectacular sunrise views. The trek involves a moderate 4-kilometer trail with some challenging sections.",
            image: "/images/places/mountains/skandagiri/night-trek.jpg"
          },
          {
            title: "Historical Significance",
            content: "The hill features ruins of an ancient fortress built by Tipu Sultan. The historical structures add an element of mystery and intrigue to the trekking experience.",
            image: "/images/places/mountains/skandagiri/history.jpg"
          },
          {
            title: "Sunrise Experience",
            content: "The summit offers breathtaking views of the sunrise, with clouds often creating a sea of mist below. The early morning vista includes surrounding hills and valleys bathed in golden light.",
            image: "/images/places/mountains/skandagiri/sunrise.jpg"
          }
        ],
        facts: [
          "Elevation of 1,450 meters",
          "Famous for night treks",
          "Features ancient fortress ruins",
          "Located 70 km from Bangalore",
          "Popular weekend getaway"
        ],
        tips: [
          "Book night trek permits in advance",
          "Carry headlamps for night trek",
          "Wear warm clothes for early morning",
          "Start trek early for sunrise view",
          "Trek only with authorized guides"
        ],
        hasARModel: true
      },
      "nandi-hills": {
        name: "Nandi Hills",
        title: "Nandi Hills: Historical Hill Station Near Bangalore",
        heroImage: "/images/places/mountains/nandi-hills/hero.jpg",
        description: "Nandi Hills, an ancient hill fortress, is a popular weekend getaway near Bangalore known for its historical monuments, sunrise views, and pleasant climate.",
        sections: [
          {
            title: "Historical Heritage",
            content: "The hills feature several historical monuments including Tipu Sultan's summer palace, ancient temples, and military structures. The fortress was used by various rulers including the Ganga Dynasty, Cholas, and Tipu Sultan.",
            image: "/images/places/mountains/nandi-hills/history.jpg"
          },
          {
            title: "Natural Attractions",
            content: "Besides historical sites, Nandi Hills offers beautiful gardens, viewpoints, and walking trails. The area is also known for its rich birdlife and serves as a paradise for nature photographers.",
            image: "/images/places/mountains/nandi-hills/nature.jpg"
          },
          {
            title: "Adventure Activities",
            content: "The hills offer various activities including paragliding, cycling, and rock climbing. The winding roads leading to the summit are popular among cycling enthusiasts.",
            image: "/images/places/mountains/nandi-hills/activities.jpg"
          }
        ],
        facts: [
          "Elevation of 1,478 meters",
          "Ancient hill fortress",
          "Home to Tipu Sultan's summer residence",
          "Popular cycling destination",
          "Rich in colonial history"
        ],
        tips: [
          "Visit early morning for sunrise",
          "Weekdays are less crowded",
          "Carry warm clothes in winter",
          "Book accommodation in advance",
          "Try local cuisine at hill top"
        ],
        hasARModel: true
      }
    
  },
  food: {
    "mysore-masala-dosa": {
      name: "Mysore Masala Dosa",
      title: "Mysore Masala Dosa: Karnataka's Iconic Breakfast",
      heroImage: "/images/places/food/mysore-masala-dosa/hero.jpg",
      description: "A crispy dosa with a unique spicy red chutney and potato filling, Mysore Masala Dosa is a signature dish from Karnataka that has gained worldwide recognition.",
      sections: [
        {
          title: "Origin and History",
          content: "Originating from the royal city of Mysore, this variation of the traditional dosa was created in the iconic Mylari Hotel. The distinctive red chutney made with garlic, chilis, and spices sets it apart from regular masala dosas.",
          image: "/images/places/food/mysore-masala-dosa/history.jpg"
        },
        {
          title: "Preparation",
          content: "The dosa is made from fermented rice and urad dal batter, spread thin on a hot griddle. The signature red chutney is spread inside, followed by spiced potato filling. It's then folded into a crispy golden-brown triangle.",
          image: "/images/places/food/mysore-masala-dosa/preparation.jpg"
        },
        {
          title: "Serving Style",
          content: "Traditionally served with coconut chutney and sambar, the Mysore Masala Dosa is enjoyed for breakfast or as a snack. The combination of spicy chutney and cooling coconut chutney creates a perfect balance of flavors.",
          image: "/images/places/food/mysore-masala-dosa/serving.jpg"
        }
      ],
      facts: [
        "Originated in Mysore's Mylari Hotel",
        "Features unique spicy red chutney",
        "Made from fermented rice-lentil batter",
        "Served with coconut chutney and sambar",
        "Popular breakfast dish across South India"
      ],
      tips: [
        "Best enjoyed hot and crispy",
        "Try with filter coffee for authentic experience",
        "Available throughout the day",
        "Look for traditional restaurants",
        "Can be customized for spice level"
      ],
      hasARModel: true
    },
    "bisi-bele-bath": {
      name: "Bisi Bele Bath",
      title: "Bisi Bele Bath: Karnataka's Comfort Rice Dish",
      heroImage: "/images/places/food/bisi-bele-bath/hero.jpg",
      description: "A hot, spicy, and nutritious rice dish made with lentils, vegetables, and aromatic spices, Bisi Bele Bath is a complete meal that represents Karnataka's culinary excellence.",
      sections: [
        {
          title: "Traditional Recipe",
          content: "Made with rice, toor dal, mixed vegetables, and a special spice blend called 'Bisi Bele Bath powder'. The dish gets its rich flavor from tamarind, jaggery, and ghee-roasted spices and nuts.",
          image: "/images/places/food/bisi-bele-bath/recipe.jpg"
        },
        {
          title: "Cultural Significance",
          content: "Originally from the Mysore royal kitchen, this dish has become a staple in Karnataka households. The name literally means 'hot lentil rice' in Kannada, emphasizing its serving temperature.",
          image: "/images/places/food/bisi-bele-bath/culture.jpg"
        },
        {
          title: "Variations",
          content: "While the basic recipe remains consistent, each region adds its own touch. Some versions include more vegetables, while others focus on the spice blend. It's often garnished with fried cashews and curry leaves.",
          image: "/images/places/food/bisi-bele-bath/variations.jpg"
        }
      ],
      facts: [
        "Contains over 30 ingredients",
        "Rich in proteins and vegetables",
        "Uses unique spice blend",
        "Originally from Mysore Palace",
        "Served piping hot"
      ],
      tips: [
        "Best eaten fresh and hot",
        "Pair with papad or chips",
        "Available in most Karnataka restaurants",
        "Can be made spicier on request",
        "Try with raita for balance"
      ],
      hasARModel: true
    },
    "ragi-mudde": {
      name: "Ragi Mudde",
      title: "Ragi Mudde: Traditional Finger Millet Balls",
      heroImage: "/images/places/food/ragi-mudde/hero.jpg",
      description: "A nutritious staple food made from finger millet flour, Ragi Mudde is a healthy and filling dish that's deeply rooted in Karnataka's rural cuisine.",
      sections: [
        {
          title: "Preparation Method",
          content: "Made by cooking ragi flour with water until it forms a smooth, dense ball. The technique requires skill to achieve the right consistency - soft inside but firm enough to hold shape.",
          image: "/images/places/food/ragi-mudde/preparation.jpg"
        },
        {
          title: "Nutritional Value",
          content: "Ragi is rich in calcium, iron, and fiber. The mudde is a low-calorie, gluten-free option that provides sustained energy and is particularly beneficial for diabetics.",
          image: "/images/places/food/ragi-mudde/nutrition.jpg"
        },
        {
          title: "Traditional Consumption",
          content: "Typically eaten with sambar or curry, the mudde is traditionally swallowed without chewing. This unique eating method is believed to aid better digestion and provide sustained energy.",
          image: "/images/places/food/ragi-mudde/serving.jpg"
        }
      ],
      facts: [
        "High in calcium and iron",
        "Traditional farmer's food",
        "Gluten-free and nutritious",
        "Unique eating method",
        "Provides sustained energy"
      ],
      tips: [
        "Best consumed fresh and hot",
        "Learn proper eating technique",
        "Pair with spicy curry or sambar",
        "Available in traditional restaurants",
        "Good for diabetic diet"
      ],
      hasARModel: true
    },
    "neer-dosa": {
      name: "Neer Dosa",
      title: "Neer Dosa: Delicate Rice Crepes",
      heroImage: "/images/places/food/neer-dosa/hero.jpg",
      description: "A specialty from coastal Karnataka, Neer Dosa is a soft, thin rice crepe made with a watery batter. 'Neer' means water in Tulu, reflecting its unique preparation method.",
      sections: [
        {
          title: "Making Process",
          content: "Made from a thin batter of soaked rice ground with water. Unlike regular dosas, it doesn't require fermentation. The batter is spread in a circular motion on a hot griddle to create lacy, delicate crepes.",
          image: "/images/places/food/neer-dosa/process.jpg"
        },
        {
          title: "Coastal Origins",
          content: "A staple breakfast item in Udupi-Mangalore region, Neer Dosa represents the simple yet sophisticated coastal cuisine. It's particularly popular during monsoon season.",
          image: "/images/places/food/neer-dosa/origin.jpg"
        },
        {
          title: "Serving Suggestions",
          content: "Traditionally served with coconut chutney, curry, or chicken/fish curry. Its mild flavor makes it versatile enough to pair with various accompaniments.",
          image: "/images/places/food/neer-dosa/serving.jpg"
        }
      ],
      facts: [
        "No fermentation required",
        "Made with just rice and water",
        "Popular in coastal Karnataka",
        "Naturally gluten-free",
        "Quick to prepare"
      ],
      tips: [
        "Best eaten fresh off the griddle",
        "Try with traditional curry",
        "Available in coastal restaurants",
        "Can be made at home easily",
        "Ideal for breakfast or dinner"
      ],
      hasARModel: true
    },
    "mangalore-fish-curry": {
      name: "Mangalore Fish Curry",
      title: "Mangalore Fish Curry: Coastal Delicacy",
      heroImage: "/images/places/food/mangalore-fish-curry/hero.jpg",
      description: "A spicy, tangy coconut-based curry that's a signature dish of coastal Karnataka, particularly famous in Mangalore region.",
      sections: [
        {
          title: "Preparation Style",
          content: "Made with fresh fish, coconut, red chilies, and tamarind, the curry gets its distinctive taste from Byadgi chilies and kokum. Different fish varieties are used, with mackerel and pomfret being popular choices.",
          image: "/images/places/food/mangalore-fish-curry/preparation.jpg"
        },
        {
          title: "Regional Variations",
          content: "Each community along the coast has its own version. The Mangalorean Catholic style uses more coconut, while the Bunt style is spicier. The GSB style often includes additional souring agents.",
          image: "/images/places/food/mangalore-fish-curry/variations.jpg"
        },
        {
          title: "Serving Traditions",
          content: "Traditionally served with rice, neer dosa, or pundi (rice balls). The curry is usually prepared thick for rice and slightly thinner when served with dosas or pundi.",
          image: "/images/places/food/mangalore-fish-curry/serving.jpg"
        }
      ],
      facts: [
        "Uses fresh coastal fish",
        "Coconut-based gravy",
        "Features Byadgi chilies",
        "Multiple regional variations",
        "Traditional coastal dish"
      ],
      tips: [
        "Best with fresh catch of the day",
        "Try different fish varieties",
        "Pair with local rice varieties",
        "Available in coastal restaurants",
        "Can be customized for spice level"
      ],
      hasARModel: true
    }

},
"dance-art": {
    "yakshagana": {
      name: "Yakshagana",
      title: "Yakshagana: Karnataka's Epic Theater Art",
      heroImage: "/images/places/dance-art/yakshagana/hero.jpg",
      description: "Yakshagana is a traditional theater form that combines dance, music, dialogue, costume, make-up, and stage techniques with a unique style and form. This art form is primarily performed in the coastal regions of Karnataka.",
      sections: [
        {
          title: "Performance Style",
          content: "Performances typically start in the evening and last throughout the night. Artists wear elaborate costumes, colorful makeup, and perform to the accompaniment of background music played on traditional instruments like chande, maddale, and harmonium.",
          image: "/images/places/dance-art/yakshagana/performance.jpg"
        },
        {
          title: "Historical Significance",
          content: "Dating back to the 16th century, Yakshagana evolved from ancient ritual theater. The performances traditionally depict episodes from epics like Ramayana, Mahabharata, and Bhagavata, bringing mythology to life through dramatic storytelling.",
          image: "/images/places/dance-art/yakshagana/history.jpg"
        },
        {
          title: "Modern Adaptations",
          content: "While maintaining its traditional essence, modern Yakshagana has adapted to include contemporary social themes and shorter duration performances, making it more accessible to urban audiences.",
          image: "/images/places/dance-art/yakshagana/modern.jpg"
        }
      ],
      facts: [
        "Originated in coastal Karnataka",
        "Performances last up to 8-12 hours",
        "Combines multiple art forms",
        "Uses traditional musical instruments",
        "Features elaborate costumes and makeup"
      ],
      tips: [
        "Watch full night performances for authentic experience",
        "Photography usually allowed without flash",
        "Best viewed during temple festivals",
        "Learn basic storyline beforehand",
        "Respect performance traditions"
      ],
      hasARModel: true
    },
    "dollu-kunitha": {
      name: "Dollu Kunitha",
      title: "Dollu Kunitha: The Dynamic Drum Dance",
      heroImage: "/images/places/dance-art/dollu-kunitha/hero.jpg",
      description: "Dollu Kunitha is a powerful and energetic drum dance native to Karnataka. Performers wear a large drum (dollu) around their necks and dance to its rhythmic beats, creating a mesmerizing spectacle.",
      sections: [
        {
          title: "Dance Form",
          content: "The dance involves vigorous movements while beating the dollu (drum) hung around the neck. Performers move in synchronized patterns, creating complex rhythms through their dance and drumming.",
          image: "/images/places/dance-art/dollu-kunitha/dance.jpg"
        },
        {
          title: "Cultural Significance",
          content: "Originally performed in temples dedicated to Lord Beereshwara, this dance form has deep religious roots. It's believed to have originated among the Kuruba community and is now performed during festivals and cultural events.",
          image: "/images/places/dance-art/dollu-kunitha/culture.jpg"
        },
        {
          title: "Musical Elements",
          content: "The performance centers around the dollu drum, accompanied by traditional instruments. The dancers create various rhythmic patterns while performing acrobatic movements, making it a highly energetic art form.",
          image: "/images/places/dance-art/dollu-kunitha/music.jpg"
        }
      ],
      facts: [
        "Traditional dance of Kuruba community",
        "Features large drums called dollu",
        "Performed during festivals",
        "Requires intense physical stamina",
        "Has religious significance"
      ],
      tips: [
        "Best viewed during local festivals",
        "Bring earplugs for sensitive ears",
        "Photography allowed during performances",
        "Watch from different angles",
        "Learn basic rhythm patterns"
      ],
      hasARModel: true
    },
    "kamsale": {
      name: "Kamsale",
      title: "Kamsale: The Sacred Cymbal Dance",
      heroImage: "/images/places/dance-art/kamsale/hero.jpg",
      description: "Kamsale is a unique religious folk art form dedicated to Lord Mahadeshwara. Performers use brass cymbals called kamsale to create rhythm while dancing, making it both a musical and dance performance.",
      sections: [
        {
          title: "Religious Connection",
          content: "Performed by devotees of Lord Mahadeshwara, Kamsale is considered a form of worship. The performers, known as Kamsale Mela, are believed to be blessed by the deity.",
          image: "/images/places/dance-art/kamsale/religion.jpg"
        },
        {
          title: "Performance Style",
          content: "The dance involves rhythmic movements while playing the kamsale (cymbals). Performers often narrate stories of Lord Mahadeshwara through songs while dancing.",
          image: "/images/places/dance-art/kamsale/performance.jpg"
        },
        {
          title: "Traditional Practice",
          content: "The art form is passed down through generations within certain communities. The performers undergo rigorous training to master both the musical and dance aspects.",
          image: "/images/places/dance-art/kamsale/tradition.jpg"
        }
      ],
      facts: [
        "Dedicated to Lord Mahadeshwara",
        "Uses brass cymbals called kamsale",
        "Performed by devoted followers",
        "Combines music and dance",
        "Part of temple traditions"
      ],
      tips: [
        "Visit during temple festivals",
        "Respect religious significance",
        "Photography with permission",
        "Learn about Lord Mahadeshwara",
        "Watch complete performance"
      ],
      hasARModel: true
    },
    "veeragase": {
      name: "Veeragase",
      title: "Veeragase: The Warrior Dance",
      heroImage: "/images/places/dance-art/veeragase/hero.jpg",
      description: "Veeragase is a vigorous dance form dedicated to Lord Veerabhadra. Performers wear ankle bells and carry a plaque of Lord Veerabhadra, dancing with intense energy and devotion.",
      sections: [
        {
          title: "Dance Form",
          content: "The dance involves powerful movements and jumps, with performers wearing elaborate costumes and makeup. The dance depicts the anger of Lord Veerabhadra and requires immense physical stamina.",
          image: "/images/places/dance-art/veeragase/dance.jpg"
        },
        {
          title: "Spiritual Significance",
          content: "Veeragase is performed as an offering to Lord Veerabhadra. The dancers enter a trance-like state during performance, believed to be possessed by the deity's spirit.",
          image: "/images/places/dance-art/veeragase/spiritual.jpg"
        },
        {
          title: "Traditional Elements",
          content: "The performance includes storytelling through songs and dialogue, accompanied by traditional instruments. The costume includes a tall headgear and symbolic weapons.",
          image: "/images/places/dance-art/veeragase/elements.jpg"
        }
      ],
      facts: [
        "Dedicated to Lord Veerabhadra",
        "Features intense physical movements",
        "Performers enter trance state",
        "Includes storytelling elements",
        "Requires special costumes"
      ],
      tips: [
        "Watch during Shivaratri festival",
        "Maintain respectful distance",
        "Photography with permission",
        "Learn about Lord Veerabhadra",
        "Observe complete ritual"
      ],
      hasARModel: true
    },
    "bharatanatyam": {
      name: "Bharatanatyam",
      title: "Bharatanatyam: Classical Grace of Karnataka",
      heroImage: "/images/places/dance-art/bharatanatyam/hero.jpg",
      description: "While originating in Tamil Nadu, Bharatanatyam has deep roots in Karnataka with its own unique style and interpretations. This classical dance form combines precise movements, expressions, and storytelling.",
      sections: [
        {
          title: "Karnataka Style",
          content: "The Karnataka school of Bharatanatyam emphasizes geometric precision and graceful movements. The style has been enriched by great dancers and gurus from the state, creating a distinct tradition.",
          image: "/images/places/dance-art/bharatanatyam/style.jpg"
        },
        {
          title: "Training and Practice",
          content: "Learning Bharatanatyam requires years of rigorous training. Students learn complex footwork, hand gestures (mudras), facial expressions (abhinaya), and choreographic patterns.",
          image: "/images/places/dance-art/bharatanatyam/training.jpg"
        },
        {
          title: "Performance Aspects",
          content: "Performances include pure dance sequences (nritta), expressional dance (abhinaya), and a combination of both. The dance is accompanied by Carnatic music and often depicts mythological stories.",
          image: "/images/places/dance-art/bharatanatyam/performance.jpg"
        }
      ],
      facts: [
        "Ancient classical dance form",
        "Features precise techniques",
        "Uses elaborate costumes",
        "Accompanied by Carnatic music",
        "Requires years of training"
      ],
      tips: [
        "Watch performances in traditional venues",
        "Learn basic mudras beforehand",
        "Photography usually allowed",
        "Attend dance festivals",
        "Observe costume details"
      ],
      hasARModel: true
    }
  }
}