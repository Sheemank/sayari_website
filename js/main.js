document.addEventListener("DOMContentLoaded", () => {
  // --- 1. DATA SOURCE ---
  // Master list of all Shayari image data.
  const shayariImages = [
    {
      id: 1,
      title: "motivation",
      imageUrl: "assets/images/motivation-1.png",
      tags: ["motivation", "student", "study"],
      description:
        "badal jao vakt ke saath ya phir vakt badalana seekho majabooriyon ko mat koso har haal mein chalana seekho",
      category: "motivation",
    },
    {
      id: 2,
      title: "motivation",
      imageUrl: "assets/images/2.png",
      tags: ["motivation", "student", "joosh"],
      description:
        "suna hai aaj samandar ko bada gumaan aaya hai, udhar hee le chalo kashtee jahaan toophaan aaya ha",
      category: "motivation",
    },
    {
      id: 3,
      title: "sad",
      imageUrl: "assets/images/love-1.png",
      tags: ["love", "sad", "pyar", "atached"],
      description:
        "likha tha ki khush hain tere hathiyaar bhee yahaan ham, magar maalik phool hain ki kalam se pahale hee chal.",
      category: "motivation",
    },
    {
      id: 4,
      title: "Deep sad Love",
      imageUrl: "assets/images/sad-1.png",
      tags: ["love", "deep", "soulmate", "sad"],
      description:
        "talaash meree thee aur bhatak rahee thee vo, dil mera tha aur dhadak raha tha vo. pyaar ka sauda bhee ajeeb hota hai,",
      category: "sad",
    },
    {
      id: 5,
      title: "sad love",
      imageUrl: "assets/images/sad-2.png",
      tags: ["sad", "lonely", "alone", "empty", "love"],
      description:
        "ab jaane tum to nahin, shikava-e-gam kisase kahate hainya chup raho ya ro padhen",
      category: "sad",
    },
    {
      id: 6,
      title: "sad love",
      imageUrl: "assets/images/sad-3.png",
      tags: ["sad", "heart break", "chuta dil", "pain"],
      description:
        "jo dil ke kareeb the vo jabase dushman ho gaye baazaar mein hue charch",
      category: "heart break",
    },
    {
      id: 7,
      title: "First Love return",
      imageUrl: "assets/images/love-2.png",
      tags: ["love", "first love", "old love", "pain love"],
      description:
        "sirf ek saafa palatakar vah, baste kee duhaee dee hai. phir bhee vaapas jaana hoga",
      category: "love",
    },
    {
      id: 8,
      title: "motivation",
      imageUrl: "assets/images/motivation-2.png",
      tags: ["motivation", "attitude", "positive", "student"],
      description:
        "mere baare mein koee raay mat banao gaalib, mera vaqt badalega aur tumhaaree raay bhee",
      category: "motivation",
    },
    {
      id: 9,
      title: "sad",
      imageUrl: "assets/images/sad-4.png",
      tags: ["sad", "heartbreak", "self respect", "pain", "sad love"],
      description:
        "tumakar laut aao dukh kee baat maan mat karana, ham ek baar kee mohobbat hain mahila nahin karo!",
      category: "sad",
    },
    {
      id: 10,
      title: "motivation",
      imageUrl: "assets/images/motivation-3.png",
      tags: ["motivation", "student", "zindagi shayari", "commitment"],
      description:
        "koee chaaraagaah jalaata nahin saalike se magar sabhee kee yaachika hava se hota hai",
      category: "love",
    },
    {
      id: 11,
      title: "motivation",
      imageUrl: "assets/images/motivation-4.png",
      tags: ["motivation", "josh", "student", "belive", "ziddi"],
      description:
        "mil sake jo aasaanee se usakee khvaahish kise hai jid to usaka hai jo muqaddar mein likha hee nahin hai",
      category: "motivation",
    },
    {
      id: 12,
      title: "love",
      imageUrl: "assets/images/love-3.png",
      tags: ["love", "success", "victory"],
      description:
        "paravaane ko shama par jalakar kuchh to hoga yoon hee mrtyu ke lie koee muhabbat nahin karata",
      category: "love",
    },
    {
      id: 13,
      title: "Attitude",
      imageUrl: "assets/images/attitude-1.png",
      tags: ["attitude", "passion", "circle", "power"],
      description:
        "dushman bhee mere mureed hain shaayad, vakt-bevakt mera naam liya gaya hai. meree galee se kahaaniyaan chhupe ke khanjar hain roo-ba-roo hone par salaam karate hain",
      category: "power",
    },
    {
      id: 14,
      title: "love",
      imageUrl: "assets/images/love-4.png",
      tags: ["sad", "love", "girls", "suffering", "boy poin"],
      description:
        "ya khuda ret ke sehara ko samandar kar de ya chhalakatee huee nazar ko bhee patthar kar de",
      category: "love",
    },
    {
      id: 15,
      title: "love",
      imageUrl: "assets/images/sad-5.png",
      tags: ["love", "boyspain", "brackup"],
      description:
        "mujhe dekhen itana kyon hota hai hairaan ai dost kuchh nahin hua hai bas bharosa karake dhokha khaana hai!",
      category: "boy poin",
    },
    {
      id: 16,
      title: "motivation",
      imageUrl: "assets/images/motivation-5.png",
      tags: ["motivation", "belive", "hidden pain", "mindfulness"],
      description:
        "shiksha bhee shaamil hai to kisase parichay ye apana hee muqaddar hai apane hee roodhiyaan hain.",
      category: "self improvement",
    },
    {
      id: 17,
      title: "sad",
      imageUrl: "assets/images/sad-6.png",
      tags: ["emotion", "bond", "trust", "support"],
      description:
        "hamen bhee neend aaegee ham bhee so hee jaenge abhee kuchh bekaraaree hai sitaare tum to to jao",
      category: "love",
    },
    {
      id: 18,
      title: "love",
      imageUrl: "assets/images/love-5.png",
      tags: ["single person", "pain", "sad", "one sided love"],
      description:
        "na kar too itanee koshishen mere dard ko sanket kee pahale ishk kar phir chot kha phir dava likho mere dard kee",
      category: "sad",
    },
    {
      id: 19,
      title: "Creative Spark",
      imageUrl:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=500&q=80",
      tags: ["creativity", "inspiration", "ideas", "art"],
      description: "Igniting the spark of innovation",
      category: "motivation",
    },
    {
      id: 20,
      title: "Majestic Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=500&q=80",
      tags: ["nature", "mountains", "adventure", "scenery"],
      description: "The breathtaking beauty of the peaks",
      category: "nature",
    },
  ];

  // --- 2. DOM ELEMENTS ---
  // Store all references to HTML elements here.
  const columns = [
    document.getElementById("column1"),
    document.getElementById("column2"),
    document.getElementById("column3"),
  ];
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const resultsInfo = document.getElementById("search-results");
  const filterLinks = document.querySelectorAll(".filter-link");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const siteHeader = document.querySelector(".site-header");
  const typewriterElement = document.getElementById("typewriter-text");

  // --- 3. FUNCTIONS ---

  /**
   * Creates the HTML structure for a single gallery item.
   * @param {object} image - The image object from the data source.
   * @returns {HTMLElement} A <section> element for the gallery item.
   */
  function createShayariBox(image) {
    const box = document.createElement("section");
    box.className = "shayari-box";
    box.setAttribute("data-category", image.category);

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
          ${image.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    `;
    return box;
  }

  /**
   * Renders a list of images into the gallery columns.
   * @param {Array<object>} images - An array of image objects to display.
   */
  function populateGallery(images) {
    // Clear existing content from all columns
    columns.forEach((col) => (col.innerHTML = ""));

    if (images.length === 0) {
      resultsInfo.textContent = "No images found matching your criteria.";
      return;
    }

    // Update the results text
    resultsInfo.textContent =
      images.length === shayariImages.length
        ? `Showing all ${shayariImages.length} Shayari images`
        : `Found ${images.length} images`;

    // Distribute the new set of items across the three columns
    images.forEach((image, index) => {
      const shayariBox = createShayariBox(image);
      columns[index % 3].appendChild(shayariBox);
    });
  }

  /**
   * Typewriter effect for a given element and text.
   * @param {HTMLElement} el - The element to apply the effect to.
   * @param {string} text - The text to type out.
   */
  function typeWriter(el, text) {
    if (!el || !text) return;
    let i = 0;
    el.textContent = ""; // Clear existing text
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 38);
      }
    }
    type();
  }

  // --- 4. EVENT LISTENERS ---

  // Mobile navigation toggle
  if (mobileNavToggle && siteHeader) {
    mobileNavToggle.addEventListener("click", () => {
      siteHeader.classList.toggle("nav-open");
      const isNavOpen = siteHeader.classList.contains("nav-open");
      mobileNavToggle.setAttribute(
        "aria-label",
        isNavOpen ? "Close menu" : "Open menu"
      );
    });
  }

  // Category filter links
  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedCategory = this.dataset.category;

      // Update active class on links
      filterLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Filter data and re-populate the gallery
      const filteredData =
        selectedCategory === "all"
          ? shayariImages
          : shayariImages.filter(
              (item) => item.category === selectedCategory
            );
      populateGallery(filteredData);
    });
  });

  // Search form submission
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchTerm = searchInput.value.toLowerCase().trim();

      const filteredImages = shayariImages.filter((image) => {
        return (
          image.title.toLowerCase().includes(searchTerm) ||
          image.description.toLowerCase().includes(searchTerm) ||
          image.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          image.category.toLowerCase().includes(searchTerm)
        );
      });
      populateGallery(filteredImages);
    });
  }

  // --- 5. INITIALIZATION ---
  // Run functions when the page loads.

  // Initially populate the gallery with all items
  populateGallery(shayariImages);

  // Start the typewriter effect on the hero text
  const heroText =
    "Express your deepest emotions through beautiful Shayari";
  typeWriter(typewriterElement, heroText);
});
