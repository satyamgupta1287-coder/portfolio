// All public repositories of satyamgupta1287-coder
const PROJECTS = [
  // ---- Featured / key tools ----
  { name: "billmitra-app", desc: "Billing application — complete invoicing & billing solution.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/billmitra-app", icon: "🧾" },
  { name: "numberdetailfinder", desc: "Number detail finder tool — lookup details by phone number.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/numberdetailfinder", icon: "🔎" },
  { name: "vehiclelookup", desc: "Vehicle lookup utility — find vehicle information quickly.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/vehiclelookup", icon: "🚗" },
  { name: "astracampus", desc: "Astra Campus — campus platform website.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/astracampus", icon: "🎓" },
  { name: "link-vault", desc: "Link Vault — save & organise your important links (Android).", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/link-vault", icon: "🔗" },
  { name: "pdf-compressor", desc: "PDF compressor tool written in Python.", lang: "Python", cat: "other", url: "https://github.com/satyamgupta1287-coder/pdf-compressor", icon: "📄" },
  { name: "Happy-logs", desc: "Happy Logs — Android logging utility app.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/Happy-logs", icon: "😊" },
  { name: "StreamHd", desc: "StreamHD — video streaming web project.", lang: "JavaScript", cat: "web", url: "https://github.com/satyamgupta1287-coder/StreamHd", icon: "🎬" },
  { name: "instaautodm", desc: "Insta Auto DM — Instagram automation tool.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/instaautodm", icon: "📩" },

  // ---- Web tools ----
  { name: "Vehicle-mobile-no", desc: "Vehicle mobile number lookup tool.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/Vehicle-mobile-no", icon: "📱" },
  { name: "New-ui-vehicle-info", desc: "Modern UI for vehicle information display.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/New-ui-vehicle-info", icon: "🖥️" },
  { name: "amandrugstore", desc: "A Man Drugstore — pharmacy store website.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/amandrugstore", icon: "💊" },
  { name: "nirajpharma", desc: "Niraj Pharma — stock report management site.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/nirajpharma", icon: "📦" },
  { name: "astracampus-react", desc: "Astra Campus rebuilt with React.", lang: "JavaScript", cat: "web", url: "https://github.com/satyamgupta1287-coder/astracampus-react", icon: "⚛️" },
  { name: "Otp-website", desc: "OTP verification website.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/Otp-website", icon: "🔐" },
  { name: "livevideocall", desc: "Live video call web experiment.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/livevideocall", icon: "📹" },
  { name: "jiotv", desc: "JioTV web project.", lang: "PHP", cat: "web", url: "https://github.com/satyamgupta1287-coder/jiotv", icon: "📺" },
  { name: "camhack", desc: "Camera web experiment.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/camhack", icon: "📷" },
  { name: "camhack-v", desc: "Camera web experiment (variant).", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/camhack-v", icon: "📸" },
  { name: "instaphising", desc: "Instagram UI clone experiment.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/instaphising", icon: "📷" },
  { name: "Modi", desc: "Modi-themed web page.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/Modi", icon: "🇮🇳" },
  { name: "valentine", desc: "Valentine's day themed CSS page.", lang: "CSS", cat: "web", url: "https://github.com/satyamgupta1287-coder/valentine", icon: "💝" },
  { name: "Chicken-lollipop", desc: "Chicken Lollipop themed CSS page.", lang: "CSS", cat: "web", url: "https://github.com/satyamgupta1287-coder/Chicken-lollipop", icon: "🍗" },
  { name: "bronxbomber", desc: "Bronx Bomber web project.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/bronxbomber", icon: "💣" },
  { name: "numberdetailfinder-apk", desc: "Number Detail Finder — APK build site.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/numberdetailfinder-apk", icon: "📲" },
  { name: "latest-numberdetailfinder-apks", desc: "Latest builds of Number Detail Finder APKs.", lang: "HTML", cat: "web", url: "https://github.com/satyamgupta1287-coder/latest-numberdetailfinder-apks", icon: "🆕" },

  // ---- Android apps ----
  { name: "call-logs", desc: "Call Logs — Android call history manager.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/call-logs", icon: "📞" },
  { name: "Parental-Safety", desc: "Parental Safety — family protection app.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/Parental-Safety", icon: "🛡️" },
  { name: "Family", desc: "Family — family-oriented Android app.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/Family", icon: "👨‍👩‍👧" },
  { name: "smsforwarder", desc: "SMS Forwarder — forward SMS messages automatically.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/smsforwarder", icon: "💬" },
  { name: "sms-app", desc: "SMS App — messaging utility for Android.", lang: "Kotlin", cat: "android", url: "https://github.com/satyamgupta1287-coder/sms-app", icon: "✉️" },

  // ---- TypeScript ----
  { name: "billmitra", desc: "Bill Mitra — billing platform.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/billmitra", icon: "🧾" },
  { name: "bill-Mitra-vercel", desc: "Bill Mitra deployed on Vercel.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/bill-Mitra-vercel", icon: "▲" },
  { name: "bill-mitra-offline", desc: "Bill Mitra offline-capable version.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/bill-mitra-offline", icon: "📴" },
  { name: "zip2gitm", desc: "Zip2Git — convert zip uploads to git repos.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/zip2gitm", icon: "🗜️" },
  { name: "zip2gitop", desc: "Zip2Git OP — zip to git utility.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/zip2gitop", icon: "📁" },
  { name: "products-compositon", desc: "Products Composition project.", lang: "TypeScript", cat: "ts", url: "https://github.com/satyamgupta1287-coder/products-compositon", icon: "🧩" },

  // ---- Other ----
  { name: "Apks", desc: "Collection of APK builds.", lang: "—", cat: "other", url: "https://github.com/satyamgupta1287-coder/Apks", icon: "🤖" },
  { name: "Scrrenshot", desc: "Screenshot collection.", lang: "—", cat: "other", url: "https://github.com/satyamgupta1287-coder/Scrrenshot", icon: "🖼️" },
  { name: "kvaluesql", desc: "Key-value SQL experiment.", lang: "—", cat: "other", url: "https://github.com/satyamgupta1287-coder/kvaluesql", icon: "🗄️" },
  { name: "com-ferelin-faketubestudio-replaced2", desc: "FakeTube Studio — YouTube Studio style app.", lang: "—", cat: "other", url: "https://github.com/satyamgupta1287-coder/com-ferelin-faketubestudio-replaced2", icon: "🎥" },
];

const CAT_LABEL = { web: "Web Tool", android: "Android", ts: "TypeScript", other: "Other" };

const grid = document.getElementById("projectsGrid");
const noResults = document.getElementById("noResults");
let activeFilter = "all";
let searchTerm = "";

function renderProjects() {
  grid.innerHTML = "";
  const filtered = PROJECTS.filter(p => {
    const matchFilter = activeFilter === "all" || p.cat === activeFilter;
    const q = searchTerm.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.lang.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  noResults.classList.toggle("hidden", filtered.length > 0);

  filtered.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${p.icon}</div>
        <div class="card-links">
          <a href="${p.url}" target="_blank" rel="noopener" aria-label="Open repository" title="Open repository">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
          </a>
          <a href="${p.url}" target="_blank" rel="noopener" aria-label="External link" title="Visit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
          </a>
        </div>
      </div>
      <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">
        <span class="tag cat-${p.cat}">${CAT_LABEL[p.cat]}</span>
        <span class="tag">${p.lang}</span>
      </div>`;
    grid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), 40 * i);
  });
}

// Filters
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  renderProjects();
});

// Search
document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.trim();
  renderProjects();
});

// Animated counters
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = +el.dataset.count;
    const dur = 1200, start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", e => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

// Back to top
document.getElementById("toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Init
renderProjects();
animateCounters();
