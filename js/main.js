/*
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (mobileNavToggle && siteHeader) {
        mobileNavToggle.addEventListener('click', () => {
            siteHeader.classList.toggle('nav-open');
            const isNavOpen = siteHeader.classList.contains('nav-open');
            mobileNavToggle.setAttribute('aria-label', isNavOpen ? 'Close menu' : 'Open menu');
        });
    }
});

// animation for the header 
  // Typewriter effect for the subtitle
                const text = "Welcome to the Love Shayari section, where we celebrate the beauty of love through words.";
                const el = document.getElementById("typewriter-text");
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        el.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 38);
                    }
                }
                typeWriter();

*/




 // Shayari image data stored as objects
        const shayariImages = [
                {
                    id: 1,
                    title: "motivation student",
                    imageUrl: '../assets/images/motivation_1.jpg',
                    tags: ["motivation", "student", "heart", "study"],
                    description: "A beautiful expression of romantic love",
                    category: "motivation"               },
                {
                    id: 2,
                    title: "Heartbreak",
                    imageUrl: "https://images.unsplash.com/photo-1544361895-542e7d73fd5f?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "heartbreak", "pain", "tears"],
                    description: "The pain of a broken heart",
                    category: "sad"
                },
                {
                    id: 3,
                    title: "Motivational",
                    imageUrl: "https://images.unsplash.com/photo-1522163182-012478102b65?auto=format&fit=crop&w=500&q=80",
                    tags: ["motivation", "success", "inspire", "goals"],
                    description: "Inspirational words to achieve your dreams",
                    category: "motivation"
                },
                {
                    id: 4,
                    title: "Deep Love",
                    imageUrl: "https://images.unsplash.com/photo-1567611593829-65e2b826f68e?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "deep", "soulmate", "forever"],
                    description: "Expressions of deep and eternal love",
                    category: "love"
                },
                {
                    id: 5,
                    title: "Loneliness",
                    imageUrl: "https://images.unsplash.com/photo-1587093375395-583eda085028?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "lonely", "alone", "empty"],
                    description: "The feeling of loneliness in a crowd",
                    category: "sad"
                },
                {
                    id: 6,
                    title: "Ambition",
                    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
                    tags: ["motivation", "ambition", "dream", "aspire"],
                    description: "Chase your ambitions fearlessly",
                    category: "motivation"
                },
                {
                    id: 7,
                    title: "First Love",
                    imageUrl: "https://images.unsplash.com/photo-1518428138779-9947a1516b3f?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "first", "innocent", "pure"],
                    description: "The magic of first love",
                    category: "love"
                },
                {
                    id: 8,
                    title: "Lost Love",
                    imageUrl: "https://images.unsplash.com/photo-1534349762237-72023b3558c7?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "lost", "regret", "memory"],
                    description: "Remembering a love that was lost",
                    category: "sad"
                },
                {
                    id: 9,
                    title: "Perseverance",
                    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80",
                    tags: ["motivation", "perseverance", "strength", "resilience"],
                    description: "Keep going no matter what",
                    category: "motivation"
                },
                {
                    id: 10,
                    title: "Eternal Love",
                    imageUrl: "https://images.unsplash.com/photo-1597157635483-573a8f1b2d86?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "eternal", "forever", "commitment"],
                    description: "Love that transcends time",
                    category: "love"
                },
                {
                    id: 11,
                    title: "Sorrow",
                    imageUrl: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "sorrow", "pain", "grief"],
                    description: "Deep sorrow that words can't express",
                    category: "sad"
                },
                {
                    id: 12,
                    title: "Achievement",
                    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
                    tags: ["motivation", "achievement", "success", "victory"],
                    description: "Celebrating hard-earned success",
                    category: "motivation"
                },
                {
                    id: 13,
                    title: "Passionate Love",
                    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "passion", "desire", "intense"],
                    description: "The fire of passionate love",
                    category: "love"
                },
                {
                    id: 14,
                    title: "Heartache",
                    imageUrl: "https://images.unsplash.com/photo-1516246843872-f67971438914?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "heartache", "pain", "suffering"],
                    description: "The ache of a wounded heart",
                    category: "sad"
                },
                {
                    id: 15,
                    title: "Overcoming Fear",
                    imageUrl: "https://images.unsplash.com/photo-1574015945229-9f7984a8a5f2?auto=format&fit=crop&w=500&q=80",
                    tags: ["motivation", "fear", "courage", "bravery"],
                    description: "Conquering your fears to succeed",
                    category: "motivation"
                },
                {
                    id: 16,
                    title: "Inner Peace",
                    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07568e728?auto=format&fit=crop&w=500&q=80",
                    tags: ["peace", "calm", "serenity", "mindfulness"],
                    description: "Finding tranquility within yourself",
                    category: "wellness"
                },
                {
                    id: 17,
                    title: "Unbreakable Bond",
                    imageUrl: "https://images.unsplash.com/photo-1581888224145-d667809a4735?auto=format&fit=crop&w=500&q=80",
                    tags: ["friendship", "bond", "trust", "support"],
                    description: "The strength of a true friendship",
                    category: "love"
                },
                {
                    id: 18,
                    title: "Lonely Road",
                    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
                    tags: ["loneliness", "solitude", "sad", "journey"],
                    description: "Walking a path of solitude",
                    category: "sad"
                },
                {
                    id: 19,
                    title: "Creative Spark",
                    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=500&q=80",
                    tags: ["creativity", "inspiration", "ideas", "art"],
                    description: "Igniting the spark of innovation",
                    category: "motivation"
                },
                {
                    id: 20,
                    title: "Majestic Mountains",
                    imageUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=500&q=80",
                    tags: ["nature", "mountains", "adventure", "scenery"],
                    description: "The breathtaking beauty of the peaks",
                    category: "nature"
                },
                {
                    id: 21,
                    title: "Urban Jungle",
                    imageUrl: "https://images.unsplash.com/photo-1531932375833-ff942a382c2a?auto=format&fit=crop&w=500&q=80",
                    tags: ["city", "urban", "hustle", "modern"],
                    description: "The vibrant energy of city life",
                    category: "travel"
                },
                {
                    id: 22,
                    title: "Quiet Contemplation",
                    imageUrl: "https://images.unsplash.com/photo-1489648022186-8f49310909a0?auto=format&fit=crop&w=500&q=80",
                    tags: ["thoughtful", "reflection", "solitude", "mindfulness"],
                    description: "A moment of deep reflection",
                    category: "wellness"
                },
                {
                    id: 23,
                    title: "Endless Summer",
                    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723a9ce6ad3?auto=format&fit=crop&w=500&q=80",
                    tags: ["summer", "beach", "vacation", "relax"],
                    description: "Chasing the sun and the waves",
                    category: "travel"
                },
                {
                    id: 24,
                    title: "Lost in Thought",
                    imageUrl: "https://images.unsplash.com/photo-1562620669-980011370217?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "lost", "melancholy", "thinking"],
                    description: "Wandering in a maze of thoughts",
                    category: "sad"
                },
                {
                    id: 25,
                    title: "Victorious Spirit",
                    imageUrl: "https://images.unsplash.com/photo-1521464302861-ce9449538553?auto=format&fit=crop&w=500&q=80",
                    tags: ["success", "victory", "achievement", "motivation"],
                    description: "The feeling of ultimate triumph",
                    category: "motivation"
                },
                {
                    id: 26,
                    title: "Gentle Affection",
                    imageUrl: "https://images.unsplash.com/photo-1564415428619-35399b19e485?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "affection", "tenderness", "care"],
                    description: "A soft touch, a gentle love",
                    category: "love"
                },
                {
                    id: 27,
                    title: "The Silent Forest",
                    imageUrl: "https://images.unsplash.com/photo-1489564242025-7de2a804043b?auto=format&fit=crop&w=500&q=80",
                    tags: ["nature", "forest", "peace", "solitude"],
                    description: "Whispers among the ancient trees",
                    category: "nature"
                },
                {
                    id: 28,
                    title: "Unwavering Focus",
                    imageUrl: "https://images.unsplash.com/photo-1580541634351-c19b6a091567?auto=format&fit=crop&w=500&q=80",
                    tags: ["focus", "determination", "goals", "motivation"],
                    description: "Eyes on the prize, mind on the goal",
                    category: "motivation"
                },
                {
                    id: 29,
                    title: "A Glimmer of Hope",
                    imageUrl: "https://images.unsplash.com/photo-1532187643623-dbf26b5894b1?auto=format&fit=crop&w=500&q=80",
                    tags: ["hope", "light", "faith", "optimism"],
                    description: "Finding light in the darkness",
                    category: "motivation"
                },
                {
                    id: 30,
                    title: "Bittersweet Memories",
                    imageUrl: "https://images.unsplash.com/photo-1483366774565-c783b9f74e1a?auto=format&fit=crop&w=500&q=80",
                    tags: ["memories", "nostalgia", "bittersweet", "past"],
                    description: "Smiling at the past with a tear",
                    category: "sad"
                },
                {
                    id: 31,
                    title: "Journey of Discovery",
                    imageUrl: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=500&q=80",
                    tags: ["travel", "adventure", "discovery", "explore"],
                    description: "Exploring new worlds and yourself",
                    category: "travel"
                },
                {
                    id: 32,
                    title: "Pure Joy",
                    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=500&q=80",
                    tags: ["joy", "happiness", "laughter", "bliss"],
                    description: "The simple, pure bliss of being happy",
                    category: "love"
                },
                {
                    id: 33,
                    title: "The Weight of the World",
                    imageUrl: "https://images.unsplash.com/photo-1518307038392-41778b0569ee?auto=format&fit=crop&w=500&q=80",
                    tags: ["stress", "burden", "sad", "overwhelmed"],
                    description: "Feeling the heavy weight of worries",
                    category: "sad"
                },
                {
                    id: 34,
                    title: "Unstoppable Drive",
                    imageUrl: "https://images.unsplash.com/photo-1530021232336-92769455883a?auto=format&fit=crop&w=500&q=80",
                    tags: ["drive", "ambition", "motivation", "hustle"],
                    description: "An unyielding will to succeed",
                    category: "motivation"
                },
                {
                    id: 35,
                    title: "Serene Waters",
                    imageUrl: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=500&q=80",
                    tags: ["nature", "serene", "water", "calm"],
                    description: "The peaceful stillness of the water",
                    category: "nature"
                },
                {
                    id: 36,
                    title: "A Shared Secret",
                    imageUrl: "https://images.unsplash.com/photo-1530972235672-17add5360350?auto=format&fit=crop&w=500&q=80",
                    tags: ["love", "friendship", "secret", "intimacy"],
                    description: "A moment shared between two souls",
                    category: "love"
                },
                {
                    id: 37,
                    title: "The Climb to the Top",
                    imageUrl: "https://images.unsplash.com/photo-1542382257-80ded14b2d11?auto=format&fit=crop&w=500&q=80",
                    tags: ["ambition", "challenge", "success", "motivation"],
                    description: "The arduous journey to reach the peak",
                    category: "motivation"
                },
                {
                    id: 38,
                    title: "Fading Light",
                    imageUrl: "https://images.unsplash.com/photo-1502947285625-22e34988a666?auto=format&fit=crop&w=500&q=80",
                    tags: ["sad", "ending", "farewell", "melancholy"],
                    description: "As the day and hope fade away",
                    category: "sad"
                },
                {
                    id: 39,
                    title: "Wild Spirit",
                    imageUrl: "https://images.unsplash.com/photo-1551893909-144a9b993976?auto=format&fit=crop&w=500&q=80",
                    tags: ["freedom", "wild", "spirit", "nature"],
                    description: "An untamed and free spirit",
                    category: "motivation"
                },
                {
                    id: 40,
                    title: "Cozy Comfort",
                    imageUrl: "https://images.unsplash.com/photo-1528825867112-c2153545de5f?auto=format&fit=crop&w=500&q=80",
                    tags: ["comfort", "cozy", "relax", "home"],
                    description: "Finding comfort in the little things",
                    category: "wellness"
                }
            ];

        // DOM Elements
        const column1 = document.getElementById('column1');
        const column2 = document.getElementById('column2');
        const column3 = document.getElementById('column3');
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        const resultsInfo = document.getElementById('search-results');

        // Function to create an image box
        function createImageBox(image) {
            const box = document.createElement('section');
            box.className = 'shayari-box';

            box.innerHTML = `
        <div class="box-image">
          <img src="${image.imageUrl}" alt="${image.title}" />
          <div class="icon-overlay">
            <div class="left-icons">
              <div class="user-icon"><i class="ri-user-3-line"></i></div>
              <button><i class="ri-thumb-up-line"></i></button>
              <button><i class="ri-thumb-down-line"></i></button>
              <button><i class="ri-chat-1-line"></i></button>
            </div>
            <div class="right-icon">
              <a href="${image.imageUrl}" download class="download-btn">
                <i class="ri-download-2-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="image-info">
         <h3>${image.title}</h3>
          <p>${image.description}</p>
          <div class="tags-container">
            ${image.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

            return box;
        }

        // Function to render images in gallery
        function renderImages(images) {
            // Clear columns
            column1.innerHTML = '';
            column2.innerHTML = '';
            column3.innerHTML = '';

            if (images.length === 0) {
                resultsInfo.textContent = 'No images found matching your search.';
                return;
            }

            // Update results info
            resultsInfo.textContent = images.length === shayariImages.length ?
                'Showing all 15 Shayari images' :
                `Found ${images.length} images matching your search`;

            // Render images in columns
            images.forEach((image, index) => {
                const imageBox = createImageBox(image);

                if (index % 3 === 0) {
                    column1.appendChild(imageBox);
                } else if (index % 3 === 1) {
                    column2.appendChild(imageBox);
                } else {
                    column3.appendChild(imageBox);
                }
            });
        }

        // Function to filter images based on search term
        function filterImages(searchTerm) {
            if (!searchTerm.trim()) {
                return shayariImages;
            }

            const term = searchTerm.toLowerCase();

            return shayariImages.filter(image => {
                return image.title.toLowerCase().includes(term) ||
                    image.description.toLowerCase().includes(term) ||
                    image.tags.some(tag => tag.toLowerCase().includes(term)) ||
                    image.category.toLowerCase().includes(term);
            });
        }

        // Event listener for search form
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = searchInput.value;
            const filteredImages = filterImages(searchTerm);
            renderImages(filteredImages);
        });

        // Initialize gallery with all images
        renderImages(shayariImages);
