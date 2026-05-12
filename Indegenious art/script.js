/* ============================================================
   KALA DARSHAN — Indigenous Art Collection of India
   script.js  |  All interactive functionality
   ============================================================ */

/* ──────────────────────────────────────────────────────────────
   ⚠️  STEP 1: INSERT YOUR FREE GEMINI API KEY BELOW
   Get it at: https://aistudio.google.com/app/apikey
   It's completely free for personal/student projects.
   ────────────────────────────────────────────────────────────── */
const GEMINI_API_KEY = "YOUR_API_KEY_HERE";   // ← Replace this string

/* Gemini API endpoint (uses gemini-2.0-flash — fast & free) */
const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;


/* ==============================================================
   ART FORM DATA
   All detailed content for modals & map panels lives here.
   If you want to update info, just edit this object.
   ============================================================== */
const artData = {

  warli: {
    title:    "Warli Art",
    state:    "Maharashtra",
    region:   "Palghar, Nashik, Thane districts",
    community:"Warli Tribe (Adivasi)",
    color:    "#c0562a",
    mapSnippet: "Warli art is one of India's oldest surviving art forms, using geometric shapes to depict daily life — harvesting, dancing, praying — on mud walls with rice paste.",
    history: `Warli painting is believed to be over 2,500 years old, originating with the Warli 
tribe of Maharashtra's Sahyadri mountain ranges. Traditionally painted by women on the 
interior walls of homes as ritual art for festivals, marriages, and seasonal ceremonies, 
Warli art was formally 'discovered' by researchers in the 1970s and began reaching wider 
audiences through the work of artists like Jivya Soma Mashe.`,
    significance: `Warli images narrate community life — the Tarpa dance (a circular harvest dance), 
agriculture, animals, and the forest — expressing the tribe's deep connection to nature. 
The style uses only a circle (sun/moon), a triangle (hills/mountains), and a square (sacred 
enclosure) as its visual grammar. Human and animal figures are made from two triangles joined 
at their tips. No elaborate color — only white (rice paste) on red-brown (mud) backgrounds.`,
    materials: `• White: Rice paste mixed with water and gum (traditionally)
• Background: Mud-plastered walls or paper coated with cow dung and mud
• Modern: Acrylic/poster colors on canvas, paper, or fabric
• Tools: Bamboo sticks chewed at the tip to form a brush`,
    technique: `Figures are drawn as geometric combinations — circles, triangles, squares, and dots. 
No shading, no perspective, no empty space. The Chowk (a central sacred square) is often the 
starting point of a composition. Patterns are built outward, depicting a narrative scene of life.`,
    giStatus: "GI Tag Registered — Maharashtra (Warli Paintings of Nashik District)",
    youtubeId: "VFSsmmqYOgU",   /* YouTube embed ID — replace with current valid ID */
    learnMore: [
      { title: "Warli Art – Sahapedia",        url: "https://www.sahapedia.org/warli-art" },
      { title: "Warli Paintings – Google Arts", url: "https://artsandculture.google.com/story/warli-paintings" }
    ]
  },

  madhubani: {
    title:    "Madhubani Art",
    state:    "Bihar",
    region:   "Mithila Region (Darbhanga, Madhubani, Sitamarhi)",
    community:"Mithila community women (Brahmin & Kayastha castes traditionally)",
    color:    "#8b3a8f",
    mapSnippet: "Madhubani (Mithila) painting is a vivid, myth-rich tradition from Bihar, known for bold outlines, brilliant colors, and no empty space — every corner is filled with pattern.",
    history: `Madhubani painting, also called Mithila painting, dates back to the time of the Ramayana 
(King Janaka of Mithila is said to have commissioned art for his daughter Sita's wedding). 
For centuries, it was painted on freshly plastered mud walls and floors. In 1934, the Bihar 
earthquake destroyed many homes, and an artist named Bhaskar Kulkarni encouraged women 
to paint on paper — bringing Madhubani to a global audience. It received India's GI tag in 2007.`,
    significance: `Madhubani is painted for festivals, births, marriages, and seasonal rituals. 
Five sub-styles exist: Bharni (filled with color, often gods/goddesses), Kachni (single-color 
hatching), Tantrik (sacred geometry, Durga/Kali), Godna (tattoo-inspired outlines), and Kohbar 
(fertility imagery in the bridal chamber). The art is matrilineal — taught mother to daughter 
as sacred household knowledge.`,
    materials: `• Colors: Natural pigments — turmeric (yellow), indigo (blue), cow dung (ochre), 
  sindoor (red), lamp soot (black), sandalwood paste (white)
• Background: Freshly plastered mud walls, paper, canvas, or silk
• Tools: Fingers, matchsticks, twigs, and nib pens
• Modern: Commercial paints on handmade paper`,
    technique: `Every line is bold and deliberate. Outlines are drawn in black, then filled with 
bright, flat color. The hallmark is horror vacui — no empty space. Fish, parrots, lotus flowers, 
bamboo groves, and peacocks appear as fillers between main figures. Faces are shown in profile 
with large expressive eyes. Figures are flattened, never three-dimensional.`,
    giStatus: "GI Tag Registered — Bihar (Madhubani Paintings, 2007)",
    youtubeId: "0b7m1oTF-4A",
    learnMore: [
      { title: "Madhubani Art – Sahapedia",         url: "https://www.sahapedia.org/madhubani-painting" },
      { title: "Mithila Art – Google Arts & Culture", url: "https://artsandculture.google.com/story/mithila" }
    ]
  },

  kasuti: {
    title:    "Kasuti Embroidery",
    state:    "Karnataka",
    region:   "Northern Karnataka (Dharwad, Hubli, Gadag, Bijapur)",
    community:"Lingayat community women of northern Karnataka",
    color:    "#2a7a4b",
    mapSnippet: "Kasuti is a centuries-old embroidery tradition from Karnataka — intricate, knotless needlework on dark fabric, featuring temple towers, palanquins, lotus flowers, and geometric patterns.",
    history: `Kasuti (literally 'hand-embroidery' in Kannada, derived from kai = hand, suti = cotton 
thread) dates to the Chalukya and Rashtrakuta periods (6th–10th century CE). It was traditionally 
worked by Lingayat women onto their paavade (silk skirts) and langa-davani (two-piece garments) 
for weddings and religious festivals. The craft nearly died out in the 20th century but was revived 
through Karnataka government craft programs. It received its GI tag in 2005.`,
    significance: `Kasuti is considered one of the finest Indian hand-embroidery traditions. It is 
unique for being entirely knotless — a remarkable feat of skill. Motifs are drawn from religious 
architecture: temple gopurams, rathas (chariots), palanquins, elephants, and the lotus. The patterns 
symbolize prosperity, auspiciousness, and devotion — making Kasuti garments essential to wedding 
trousseaux in the Lingayat community.`,
    materials: `• Base fabric: Dark-coloured silk, cotton, or dharwad cotton
• Thread: Brightly coloured silk or cotton thread (traditional: hand-spun)
• Colors: Deep reds, greens, yellows, and whites on indigo, black, or dark-green fabric
• Tools: Needles, embroidery frames (khatola)`,
    technique: `Kasuti uses four primary stitching techniques:
• Gavanti – running stitch (single and double)
• Murgi – zigzag stitch forming a step pattern
• Negi – weaving-style interlocking stitch
• Menthi – cross stitch resembling a fenugreek seed
No knots are tied at any point. Designs are counted by thread, never drawn on the fabric, 
requiring the artisan to calculate pattern by counting warp and weft threads.`,
    giStatus: "GI Tag Registered — Karnataka (Kasuti Embroidery, 2005)",
    youtubeId: "0JT8EWNHHlU",
    learnMore: [
      { title: "Kasuti Embroidery – Sahapedia",   url: "https://www.sahapedia.org/kasuti" },
      { title: "Kasuti – Google Arts & Culture",   url: "https://artsandculture.google.com/story/kasuti-embroidery" }
    ]
  }

};

/* ==============================================================
   MAP DATA
   Short snippets shown in the map info panel on click
   ============================================================== */
const mapInfo = {
  warli: {
    heading:  "Warli Art — Maharashtra",
    tagline:  "Maharashtra",
    body:     artData.warli.mapSnippet,
    artKey:   "warli"
  },
  madhubani: {
    heading:  "Madhubani Art — Bihar",
    tagline:  "Bihar",
    body:     artData.madhubani.mapSnippet,
    artKey:   "madhubani"
  },
  kasuti: {
    heading:  "Kasuti Embroidery — Karnataka",
    tagline:  "Karnataka",
    body:     artData.kasuti.mapSnippet,
    artKey:   "kasuti"
  }
};


/* ==============================================================
   HELPER: Build the modal HTML from artData
   ============================================================== */
function buildModalHTML(key) {
  const d = artData[key];

  /* Build Learn More links */
  const learnMoreLinks = d.learnMore
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener"
                  style="display:inline-block;margin-right:12px;margin-top:4px;
                         color:var(--terracotta);font-weight:700;font-size:0.85rem;">
                  ${l.title} ↗
               </a>`)
    .join("");

  return `
    <div class="modal-art-header">
      <p class="modal-art-label">${d.state} &nbsp;·&nbsp; ${d.region}</p>
      <h2 class="modal-art-title">${d.title}</h2>
      <span class="gi-badge">✔ ${d.giStatus}</span>
    </div>

    <div class="modal-section">
      <h4>📜 History & Origin</h4>
      <p>${d.history.trim()}</p>
    </div>

    <div class="modal-section">
      <h4>🌸 Cultural Significance</h4>
      <p>${d.significance.trim()}</p>
    </div>

    <div class="modal-section">
      <h4>🖌️ Materials Used</h4>
      <p style="white-space:pre-line;">${d.materials.trim()}</p>
    </div>

    <div class="modal-section">
      <h4>🔧 Technique & Process</h4>
      <p style="white-space:pre-line;">${d.technique.trim()}</p>
    </div>

    <div class="modal-section">
      <h4>🎥 Documentary / Video</h4>
      <iframe class="modal-video"
        src="https://www.youtube.com/embed/${d.youtubeId}"
        title="${d.title} documentary"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div class="modal-section">
      <h4>🔗 Learn More</h4>
      ${learnMoreLinks}
    </div>
  `;
}


/* ==============================================================
   MODAL — open / close
   ============================================================== */
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose   = document.getElementById("modalClose");

/* Open a modal for a given art key ("warli" / "madhubani" / "kasuti") */
function openModal(key) {
  if (!artData[key]) return;
  modalContent.innerHTML = buildModalHTML(key);
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";  /* prevent background scroll */
}

/* Close the modal */
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  /* Reset iframe to stop video playing */
  setTimeout(() => { modalContent.innerHTML = ""; }, 300);
}

/* Close on ✕ button */
modalClose.addEventListener("click", closeModal);

/* Close on backdrop click */
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

/* Close on Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) closeModal();
});


/* ==============================================================
   ART FORM CARDS — click to open modal
   ============================================================== */
document.querySelectorAll(".art-card").forEach((card) => {
  card.addEventListener("click", () => {
    const artKey = card.dataset.art;
    openModal(artKey);
  });
  /* Keyboard accessibility */
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card.dataset.art);
    }
  });
});


/* ==============================================================
   INDIA MAP — click states to show info panel
   ============================================================== */
const mapInfoPanel = document.getElementById("mapInfoPanel");

document.querySelectorAll(".map-state").forEach((state) => {
  state.addEventListener("click", () => showMapInfo(state.dataset.art));
  state.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showMapInfo(state.dataset.art);
    }
  });
});

function showMapInfo(artKey) {
  const info = mapInfo[artKey];
  if (!info) return;

  mapInfoPanel.innerHTML = `
    <div class="map-info-content">
      <p class="map-state-tag">${info.tagline}</p>
      <h3>${info.heading}</h3>
      <p>${info.body}</p>
      <button class="btn btn-outline" onclick="openModal('${info.artKey}')">
        Explore in Detail →
      </button>
    </div>
  `;
}


/* ==============================================================
   GALLERY FILTER
   Filters gallery items by data-category attribute
   ============================================================== */
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    /* Toggle active class on buttons */
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;  /* "all" / "warli" / "madhubani" / "kasuti" */

    galleryItems.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});


/* ==============================================================
   NAVBAR — mobile toggle
   ============================================================== */
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* Close nav when a link is clicked (mobile) */
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* Add shadow to navbar on scroll */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


/* ==============================================================
   SUBMISSION FORM
   Simple frontend validation + success message display
   ============================================================== */
const submitBtn      = document.getElementById("submitBtn");
const submissionForm = document.getElementById("submissionForm");
const submitSuccess  = document.getElementById("submitSuccess");
const submitAnother  = document.getElementById("submitAnother");

submitBtn.addEventListener("click", () => {

  /* Read field values */
  const artistName = document.getElementById("artistName").value.trim();
  const community  = document.getElementById("community").value.trim();
  const state      = document.getElementById("state").value;
  const artForm    = document.getElementById("artFormName").value.trim();
  const desc       = document.getElementById("artDesc").value.trim();

  /* Simple validation */
  if (!artistName || !community || !state || !artForm || !desc) {
    alert("Please fill in all required fields (marked with *).");
    return;
  }

  /* Show success message (no backend — this is a frontend-only form) */
  submissionForm.style.display = "none";
  submitSuccess.style.display  = "block";

  /* Scroll to success message */
  submitSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
});

/* Reset form to submit another artwork */
submitAnother.addEventListener("click", () => {
  /* Clear all form fields */
  document.getElementById("artistName").value  = "";
  document.getElementById("community").value   = "";
  document.getElementById("state").value       = "";
  document.getElementById("artFormName").value = "";
  document.getElementById("artDesc").value     = "";
  document.getElementById("cultural").value    = "";
  document.getElementById("email").value       = "";
  document.getElementById("imageUpload").value = "";

  submitSuccess.style.display  = "none";
  submissionForm.style.display = "block";
});


/* ==============================================================
   AI ASSISTANT — Google Gemini API
   ============================================================== */
const aiChatbox = document.getElementById("aiChatbox");
const aiInput   = document.getElementById("aiInput");
const aiAskBtn  = document.getElementById("aiAskBtn");

/* System-level instruction injected into every Gemini prompt */
const SYSTEM_PROMPT = `You are an expert cultural guide specializing in Indian indigenous and 
traditional art forms. You have deep knowledge of:
- Warli Art (Maharashtra): tribal geometric paintings
- Madhubani Art (Bihar): Mithila paintings with mythology and nature
- Kasuti Embroidery (Karnataka): knotless needlework with temple motifs

Always respond in a warm, educational, and culturally respectful tone.
Keep responses concise (150–250 words maximum).
When possible, mention materials, techniques, cultural significance, or community context.
If asked about something outside Indian indigenous art, politely redirect the conversation.`;

/* Append a chat bubble to the chatbox */
function addMessage(text, type) {
  /* type = "user" | "bot" | "loading" */
  const div = document.createElement("div");
  div.classList.add("ai-msg", type);
  div.textContent = text;
  aiChatbox.appendChild(div);
  aiChatbox.scrollTop = aiChatbox.scrollHeight;  /* auto-scroll to bottom */
  return div;
}

/* Main function: send question to Gemini and display response */
async function askAI(question) {

  if (!question.trim()) return;

  /* 1. Show user's question */
  addMessage(question, "user");
  aiInput.value = "";

  /* 2. Show loading indicator */
  const loadingDiv = addMessage("Thinking… 🪔", "loading");

  /* 3. Disable button during request */
  aiAskBtn.disabled = true;
  aiAskBtn.textContent = "Asking…";

  /* 4. Check if API key is set */
  if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" || !GEMINI_API_KEY) {
    loadingDiv.remove();
    addMessage(
      "⚠️ Gemini API key not configured. Open script.js and replace 'YOUR_API_KEY_HERE' with your free key from https://aistudio.google.com/app/apikey",
      "bot"
    );
    aiAskBtn.disabled = false;
    aiAskBtn.textContent = "Ask AI";
    return;
  }

  /* 5. Build the request body for Gemini */
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: SYSTEM_PROMPT + "\n\nUser question: " + question
          }
        ]
      }
    ],
    generationConfig: {
      maxOutputTokens: 512,
      temperature: 0.7,   /* balanced creativity vs. accuracy */
    }
  };

  /* 6. Make the API call using fetch() */
  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    /* Check HTTP status */
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || `HTTP ${response.status}`);
    }

    /* 7. Parse the JSON response */
    const data = await response.json();

    /* Extract text from Gemini's response structure */
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "I couldn't generate a response. Please try again.";

    /* 8. Remove loading, show bot reply */
    loadingDiv.remove();
    addMessage(replyText.trim(), "bot");

  } catch (error) {
    /* Handle errors gracefully */
    loadingDiv.remove();
    addMessage(
      `Sorry, I ran into an issue: ${error.message}. Please check your API key and internet connection.`,
      "bot"
    );
    console.error("Gemini API error:", error);
  }

  /* 9. Re-enable the Ask button */
  aiAskBtn.disabled = false;
  aiAskBtn.textContent = "Ask AI";
}

/* Ask button click */
aiAskBtn.addEventListener("click", () => {
  askAI(aiInput.value);
});

/* Press Enter to send */
aiInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    askAI(aiInput.value);
  }
});

/* Suggestion pills — click to pre-fill and send */
document.querySelectorAll(".suggestion-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    const question = pill.dataset.q;
    aiInput.value = question;
    askAI(question);
  });
});


/* ==============================================================
   SMOOTH SCROLL — handles browsers that don't support CSS
   scroll-behavior (already handled by html { scroll-behavior })
   ============================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


/* ==============================================================
   PAGE LOAD — gentle fade-in for main sections
   ============================================================== */
window.addEventListener("DOMContentLoaded", () => {

  /* Simple intersection observer for scroll-reveal */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = "1";
          entry.target.style.transform  = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  /* Apply initial hidden state + observe */
  document.querySelectorAll(".about-card, .art-card, .lit-card, .resource-card, .gallery-item").forEach((el) => {
    el.style.opacity   = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    observer.observe(el);
  });

});

/* ── END OF SCRIPT ── */