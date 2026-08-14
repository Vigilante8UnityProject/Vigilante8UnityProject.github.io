(() => {
  'use strict';

  const data = window.V8_SITE_DATA;
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const delay = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));
  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

  /* --------------------------------------------------------------------------
     Header
  -------------------------------------------------------------------------- */
  const topbar = q('#topbar');
  const navToggle = q('#navToggle');
  const mainNav = q('#mainNav');
  let headerTicking = false;

  const updateHeader = () => {
    headerTicking = false;
    topbar?.classList.toggle('is-compact', window.scrollY > 48);
  };

  const requestHeaderUpdate = () => {
    if (headerTicking) return;
    headerTicking = true;
    window.requestAnimationFrame(updateHeader);
  };

  updateHeader();
  window.addEventListener('scroll', requestHeaderUpdate, { passive: true });

  navToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  qa('.main-nav a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  /* --------------------------------------------------------------------------
     News & Updates cinematic carousel
  -------------------------------------------------------------------------- */
  const ultimateNostalgiaInformation = `
    <p>I am bringing the iconic cars from the original Vigilante 8 straight into the Vigilante 8: 2nd Offense engine!</p>

    <p>The ultimate V8 crossover project is coming SOON! 🛠️💥</p>

    <p>Ever wanted to drive the original OG roster inside 2nd Offense arenas? Now you can experience total vehicular mayhem with classic favorites!</p>

    <p><strong>Ported and Developed by: Ameer_007x</strong></p>`;

  const importantAnnouncementInformation = `
    <p>I would like to clarify a few things regarding the original base project. Neither I nor anybody created the core Unity project. All credit, effort, and ownership of the original foundation belong to the original developer, Stefan Vranjes. I want to express my sincere gratitude and appreciation to him for creating this masterpiece and bringing a forgotten game back to life. His contributions are fully recognized and credited in the Credits section.</p>

    <p>As for the additions made after the original developer departed, those are entirely my work. This includes integrating classic vehicles from the original game, adding TDM and LTS game modes, alongside several major improvements and features that the community has long wished for. All this hard work was done solely to make the project better and more enjoyable for everyone—a simple word of thanks is more than enough.</p>

    <p>If anyone has an issue with the features I have added, please keep in mind that unless you are the original developer, you have no say in the matter. Let’s put an end to the hypocrisy and let the players enjoy this amazing project. If you have a legitimate issue or any question, feel free to message me directly for a mature, professional discussion. We are developers, not children.</p>

    <p><strong>Thank you,<br>Ameer</strong></p>`;

  const loadingMenuInformation = `
    <p>This video showcases a faster loading menu experience, reducing the time between launching the game and getting into the action.</p>`;

  const originalVehiclesInformation = `
    <p>In this trailer, i will showcase an epic crossover bringing back the ultimate nostalgia ❤️‍🔥<br>
    I've ported all your favorite classic cars from the original Vigilante 8 and made them fully playable inside the Vigilante 8: 2nd Offense engine!</p>

    <p>The ultimate V8 crossover project SOON! 🛠️💣<br>
    Ever imagined playing as the original Vigilante 8 characters in 2nd Offense arenas? Now it's a reality!</p>

    <p>Get ready to cause massive destruction with the OG roster in V8 2nd arenas! 🛞💣</p>

    <p>📌 What to expect in this video:</p>
    <ul>
      <li>Showcase for the OG vehicles in the survival mode and arcade mode lobby.</li>
      <li>I made the OG vehicles can be upgraded to be fair stats between the 2nd vehicles and but without visual parts 🛠️</li>
    </ul>

    <p>There’s more coming<br>
    New features and more so stay tuned ⏳</p>`;

  const originalHudInformation = `
    <p><strong>Adding the original HUD to the game</strong></p>

    <p>This video shows the classic PlayStation 1 HUD being added to the Unity project, including the original weapon display, health information, radar, and familiar combat interface from the first Vigilante 8.</p>

    <p>The goal is to preserve the original game feeling while keeping the HUD clear and functional with the current gameplay systems.</p>`;

  const combatShowcaseInformation = `
    <p><strong>Combat Showcase – Vigilante 8: Second Offense</strong></p>

    <p>In this video, I showcase combat matchup between the Original Vehicles and the 2nd Vehicles.</p>

    <p>Experience and showcasing classic vehicular combat action, special weapons, retro nostalgia in high quality and iconic voices.</p>

    <p>The video highlights:
    <ul>
      <li>All the Original special weapons in action.</li>
      <li>retro nostalgia in high quality.</li>
      <li>iconic voices of the old vehicles.</li>
    </ul></p>

    <p><a href="https://youtu.be/yXXAi27gjpc?si=fWdbXRFQ-X69KdUl" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>`;

  const newWeaponSlotsInformation = `
    <p>A showcase of the updated weapon slot interface, featuring full arsenal visibility and instant switching for a smoother gameplay experience.</p>

    <h4>Key Features:</h4>

    <ul>
      <li>Full 3-slot inventory visibility.</li>
      <li>Real-time item count indicators</li>
      <li>Instant and seamless weapon switching.</li>
      <li>Enhanced Ul visibility and design.</li>
    </ul>`;

  const onlinePhotonSystemOverhaulInformation = `
    <p>A new fix has been implemented for the online server.</p>

    <ul>
      <li>Faster connections, stable room transitions, accurate Friends presence, and fully working Public/Private Match joining.❤️‍🔥</li>
      <li>New SOLO OFFLINE / COOP ONLINE selector added to Arcade, Survival, and Quest. Offline is now the default mode, while CO-OP connects only when the player chooses it.✅</li>
      <li>Added the game’s native Connecting screen when starting an online CO-OP session.✅</li>
      <li>Fixed unnecessary online disconnects when switching back to offline gameplay.✅</li>
      <li>Fixed several connection and transition issues between menus, Private Match, Matchmaking, Friends, and CO-OP.✅</li>
      <li>Removed old delays that could make Private Match and Friends feel slow or temporarily stuck.✅</li>
      <li>Improved online connection handling so joining or creating matches only happens when the connection is fully ready.✅</li>
      <li>Fixed cases where an old matchmaking or room request could still continue after the player had already backed out.✅</li>
      <li>Fixed an issue where the player’s online name could sometimes appear as a random generated ID instead of their saved username.✅</li>
      <li>Improved the stability of player names and online identities across Friends, Private Matches, and Matchmaking.✅</li>
      <li>Fixed the major Friends bug where players could incorrectly appear Offline while they were actually inside a Private Match or Matchmaking room.✅</li>
      <li>Fixed an online presence conflict that could leave outdated player information active after moving into a match.✅</li>
      <li>Player presence is now updated correctly when moving between menus and active online matches.✅</li>
      <li>Fixed joining Private Matches directly through the Friends list.✅</li>
      <li>Improved room transition stability to prevent invalid, outdated, or duplicated online states.✅</li>
      <li>Added extra online safety checks to prevent network data from being sent while the connection is not ready.✅</li>
    </ul>

    <p><strong>Fixed by: Ameer_007x</strong></p>
    <p><a href="https://www.youtube.com/watch?v=l5ang0fxAEQ" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>`;

  const whatIfStyleInformation = `
    <p>Here’s a simple prototype of the game’s UI menu,</p>
    <p>There is two styles you can watch in the video.</p>
    <p>Of course, it needs more adjustments and changes.</p>
    <p><strong>by: Ameer_007x</strong></p>
    <p><a href="https://www.youtube.com/watch?v=ENIJk3c3ydQ" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></p>`;

  const teamModesUpdateInformation = `
    <h3>VIGILANTE 8 Online Multiplayer Update – New Features &amp; Improvements</h3>

    <p>I’m excited to share the latest updates and improvements added to the game, focused on making the online multiplayer experience more organized, competitive, and enjoyable.</p>

    <h4>✅ New Features &amp; Improvements:</h4>

    <ul>
      <li>Added a fully developed Team Deathmatch mode and Last Team Standing with a clear team-based system during matches without deleting the FREE FOR ALL mode.</li>
      <li>Added team selection in the lobby, allowing players to choose their teams before the match begins.</li>
      <li>Added a Random Teams option to automatically and fairly distribute players between teams.</li>
      <li>Added support for 4 Teams, allowing more varied match setups such as 2v2v2v2.</li>
      <li>Improved team colors across the game, including the radar, player UI, HUD elements, and results screen.</li>
      <li>Improved targeting and lock-on logic so teammates are no longer targeted, allowing players to focus only on enemies.</li>
      <li>Disabled Friendly Fire between teammates while keeping enemy damage working normally.</li>
      <li>Improved the lobby interface, making match options clearer and easier to use.</li>
      <li>Added new match options, including game mode selection, number of teams, and team distribution settings.</li>
      <li>Improved the post-match statistics and results screen, with better display of teams, scores, kills, and deaths.</li>
      <li>Improved in-game player information display, including team-colored UI elements and HUD improvements.</li>
      <li>Improved the overall multiplayer experience, especially in distinguishing teammates from enemies during combat.</li>
      <li>Fixed the specter mode issue when players shifting between others players.</li>
      <li>Fixed nina special weapon ability.</li>
      <li>Add camera control for the keyboard.</li>
      <li>And a lot of new features added you gonna find out your self.</li>
    </ul>

    <p>These updates clear team-based system during are an important step forward in improving the online experience. Development is still ongoing, with more work planned for game modes, balancing, UI improvements, and overall polish.</p>

    <p>Thank you all for watching. Your feedback, ideas, and suggestions are always highly appreciated.</p>

    <p>Vigilante 8 is still evolving… more updates are coming soon.</p>

    <p>youtube link: <a href="https://www.youtube.com/watch?v=bKZzpjuAMFU" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=bKZzpjuAMFU</a></p>`;

  const newsCollections = {
    news: [
      {
        poster: 'assets/news/online-photon-system-overhaul-cover.jpg',
        youtubeId: 'l5ang0fxAEQ',
        eyebrow: 'PROJECT NEWS',
        title: 'ONLINE & PHOTON SYSTEM OVERHAUL',
        date: '2026.08.14',
        infoHtml: onlinePhotonSystemOverhaulInformation
      },
      {
        poster: 'assets/news/what-if-style-1-2-cover.jpg',
        youtubeId: 'ENIJk3c3ydQ',
        eyebrow: 'PROJECT NEWS',
        title: 'what if?… Style 1 & 2',
        date: '2026.08.14',
        infoHtml: whatIfStyleInformation
      },
      {
        image: 'assets/news/important-announcement.png',
        eyebrow: 'IMPORTANT ANNOUNCEMENT',
        title: 'Important Announcement, read it first…',
        date: '2026.07.30',
        infoHtml: importantAnnouncementInformation
      },
      {
        poster: 'assets/news/combat-showcase-vigilante8-cover.jpg',
        youtubeId: 'yXXAi27gjpc',
        eyebrow: 'PROJECT NEWS',
          title: 'Gameplay Showcase the original vehicles vs 2nd vehicles!',
        date: '2026.07.30',
        infoHtml: combatShowcaseInformation
      },
      {
        poster: 'assets/news/loading-menu-faster-cover.jpg',
        video: 'assets/news/loading-menu-faster.mp4',
        eyebrow: 'PROJECT NEWS',
        title: 'Making the Loading menu much faster!',
        date: '2026.07.30',
        infoHtml: loadingMenuInformation
      },
      {
        video: 'assets/news/ultimate-nostalgia-trip.MP4',
        eyebrow: 'PROJECT NEWS',
        title: 'get ready for the ultimate nostalgia trip!',
        date: '2026.07.29',
        infoHtml: ultimateNostalgiaInformation
      },
      {
        poster: 'assets/news/original-v8-vehicles-cover.jpg',
        video: 'assets/news/original-v8-vehicles.mp4',
        eyebrow: 'PROJECT NEWS',
        title: 'Original Vigilante 8 vehicles join the game soon with upgrade system!',
        date: '2026.07.28',
        infoHtml: originalVehiclesInformation
      },
      {
        poster: 'assets/news/original-hud-showcase-cover.jpg',
        video: 'assets/news/original-hud-showcase.mp4',
        eyebrow: 'PROJECT NEWS',
        title: 'Adding the original HUD to the game',
        date: '2026.07.28',
        infoHtml: originalHudInformation
      },
      {
        poster: 'assets/news/new-weapon-slots-cover.jpg',
        video: 'assets/news/new-weapon-slots.mp4',
        eyebrow: 'PROJECT NEWS',
        title: 'The new weapon Slots! Coming soon….',
        date: '2026.07.29',
        infoHtml: newWeaponSlotsInformation
      }
    ],
    update: [
      {
        poster: 'assets/news/team-modes-update-cover.jpg',
        video: 'assets/news/team-modes-update.mp4',
        eyebrow: 'NEW UPDATE',
        title: 'NEW UPDATE: Team modes, threats warning, online improvements and so much features!',
        date: '2026/6/13',
        infoHtml: teamModesUpdateInformation
      }
    ]
  };

  const newsTrack = q('#newsTrack');
  const newsDots = q('#newsDots');
  const newsPrev = q('#newsPrev');
  const newsNext = q('#newsNext');
  let activeNewsFilter = 'news';
  let activeNewsIndex = 0;
  const newsIndexes = { news: 0, update: 0 };

  const informationModal = q('#informationModal');
  const informationPanel = q('#informationPanel');
  const informationClose = q('#informationClose');
  const informationKicker = q('#informationKicker');
  const informationTitle = q('#informationTitle');
  const informationBody = q('#informationBody');
  const informationBackdrop = q('#informationBackdrop');
  let informationReturnFocus = null;

  function escapeInformationText(value) {
    return String(value || '').replace(/[&<>'"]/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[character]);
  }

  function defaultInformationHtml(item) {
    return `<p>More information about <strong>${escapeInformationText(item?.title || 'this item')}</strong> will be added here.</p>`;
  }

  function openInformationModal(item, kicker = 'MORE INFORMATION', trigger = null) {
    if (!informationModal || !informationPanel || !item) return;
    informationReturnFocus = trigger || document.activeElement;
    const visual = item.poster || item.image || '';
    if (informationKicker) informationKicker.textContent = kicker;
    if (informationTitle) informationTitle.textContent = item.title || 'More information';
    if (informationBody) informationBody.innerHTML = item.infoHtml || defaultInformationHtml(item);
    if (informationBackdrop) {
      informationBackdrop.style.backgroundImage = visual ? `url("${visual}")` : '';
      informationBackdrop.classList.toggle('has-image', Boolean(visual));
    }
    informationModal.classList.add('is-open');
    informationModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('information-modal-open');
    requestAnimationFrame(() => informationClose?.focus());
  }

  function closeInformationModal() {
    if (!informationModal?.classList.contains('is-open')) return;
    informationModal.classList.remove('is-open');
    informationModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('information-modal-open');
    const returnTarget = informationReturnFocus;
    informationReturnFocus = null;
    if (returnTarget && typeof returnTarget.focus === 'function') returnTarget.focus();
  }

  informationClose?.addEventListener('click', closeInformationModal);
  informationModal?.addEventListener('click', event => {
    if (event.target === informationModal) closeInformationModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && informationModal?.classList.contains('is-open')) closeInformationModal();
  });

  function getNewsRelativePosition(index, current, total) {
    if (index === current) return 0;
    if (total <= 1) return index - current;
    let delta = index - current;
    const half = total / 2;
    if (delta > half) delta -= total;
    if (delta < -half) delta += total;
    return delta;
  }

  function pauseInactiveNewsVideos() {
    if (!newsTrack) return;
    qa('video', newsTrack).forEach(video => {
      const slide = video.closest('.news-slide');
      if (!slide?.classList.contains('is-current')) {
        video.pause();
      }
    });
  }

  function renderNewsCarousel({ replay = true } = {}) {
    if (!newsTrack) return;
    const collection = newsCollections[activeNewsFilter] || [];
    if (!collection.length) {
      newsTrack.innerHTML = '';
      if (newsDots) { newsDots.innerHTML = ''; newsDots.hidden = true; }
      if (newsPrev) { newsPrev.hidden = true; newsPrev.disabled = true; }
      if (newsNext) { newsNext.hidden = true; newsNext.disabled = true; }
      return;
    }

    const total = collection.length;
    activeNewsIndex = ((activeNewsIndex % total) + total) % total;
    newsIndexes[activeNewsFilter] = activeNewsIndex;

    newsTrack.innerHTML = collection.map((item, index) => {
      const relative = getNewsRelativePosition(index, activeNewsIndex, total);
      let positionClass = 'is-far-right';
      if (relative === 0) positionClass = 'is-current';
      else if (relative === -1) positionClass = 'is-prev';
      else if (relative === 1) positionClass = 'is-next';
      else if (relative < -1) positionClass = 'is-far-left';

      const mediaMarkup = item.youtubeId
        ? `<div class="news-youtube-wrap" data-ytid="${item.youtubeId}">
             <img src="${item.poster || `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}" alt="${item.title}" class="news-media news-youtube-thumb" decoding="async">
             <button class="news-youtube-play" aria-label="Play video on YouTube" type="button">
               <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><path class="yt-play-bg" d="M66.5 7.7a8.5 8.5 0 0 0-6-6C56 0 34 0 34 0S12 0 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.1 0 24 0 24s0 11.9 1.5 16.3a8.5 8.5 0 0 0 6 6C12 48 34 48 34 48s22 0 26.5-1.7a8.5 8.5 0 0 0 6-6C68 35.9 68 24 68 24s0-11.9-1.5-16.3z"/><path class="yt-play-arrow" d="M45 24 27 14v20z"/></svg>
             </button>
           </div>`
        : item.video
        ? `<video class="news-media" ${relative === 0 ? 'controls' : ''} preload="metadata" playsinline poster="${item.poster || ''}">
             <source src="${item.video}" type="video/mp4">
           </video>`
        : `<img src="${item.image}" alt="${item.title}" decoding="async">`;

      return `
        <article class="news-slide ${positionClass}${item.video ? ' has-video' : ''}" data-news-index="${index}" aria-hidden="${relative !== 0}">
          <div class="news-shot-frame${item.video ? ' has-video' : ''}">
            ${mediaMarkup}
            <div class="news-shot-sheen"></div>
          </div>
          <div class="news-slide-caption">
            <span>${item.eyebrow}</span>
            <h3>${item.title}</h3>
            <time>${item.date}</time>
          </div>
          <div class="news-more-row">
            <button type="button" class="more-information-button" data-news-more="${index}">MORE INFORMATION</button>
          </div>
        </article>`;
    }).join('');

    qa('.news-slide', newsTrack).forEach(slide => {
      const video = q('video', slide);
      if (video) {
        const sheen = q('.news-shot-sheen', slide);
        const syncPlayingState = () => {
          const isPlaying = !video.paused && !video.ended;
          slide.classList.toggle('is-video-playing', isPlaying);

          // Apply a direct DOM state as well as the CSS class. This prevents
          // the animated shine overlay from remaining visible over native
          // video controls in browsers that repaint the media layer separately.
          if (sheen) {
            sheen.hidden = isPlaying;
            sheen.style.display = isPlaying ? 'none' : '';
            sheen.style.visibility = isPlaying ? 'hidden' : '';
            sheen.style.opacity = isPlaying ? '0' : '';
            sheen.style.animation = isPlaying ? 'none' : '';
            sheen.style.transform = isPlaying ? 'none' : '';
          }
        };
        ['play', 'playing', 'pause', 'ended', 'waiting', 'seeking', 'seeked', 'canplay', 'timeupdate']
          .forEach(eventName => video.addEventListener(eventName, syncPlayingState));
        syncPlayingState();
      }

      // YouTube click-to-load handler
      const ytWrap = q('.news-youtube-wrap', slide);
      const ytPlayBtn = q('.news-youtube-play', slide);
      if (ytWrap && ytPlayBtn) {
        ytPlayBtn.addEventListener('click', event => {
          event.stopPropagation();
          const ytId = ytWrap.dataset.ytid;
          if (!ytId) return;
          const iframe = document.createElement('iframe');
          iframe.className = 'news-media news-youtube-iframe';
          iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
          iframe.allowFullscreen = true;
          iframe.title = 'YouTube video player';
          ytWrap.innerHTML = '';
          ytWrap.appendChild(iframe);
          const sheen = q('.news-shot-sheen', slide);
          if (sheen) { sheen.hidden = true; sheen.style.display = 'none'; }
          slide.classList.add('is-video-playing');
        });
      }

      slide.addEventListener('click', event => {
        const index = Number(slide.dataset.newsIndex);
        if (!Number.isFinite(index)) return;
        if (index !== activeNewsIndex) {
          setNewsIndex(index);
          return;
        }
        if (event.target.closest('video')) return;
        if (event.target.closest('.news-youtube-wrap')) return;
      });
    });

    qa('[data-news-more]', newsTrack).forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const itemIndex = Number(button.dataset.newsMore);
        const item = collection[itemIndex];
        if (!item) return;
        qa('video', newsTrack).forEach(video => video.pause());
        openInformationModal(item, item.eyebrow || 'MORE INFORMATION', button);
      });
    });

    if (newsDots) {
      newsDots.hidden = total <= 1;
      newsDots.innerHTML = collection.map((_, index) => `
        <button type="button" class="${index === activeNewsIndex ? 'is-active' : ''}" data-news-dot="${index}" aria-label="Show item ${index + 1}"></button>
      `).join('');
      qa('[data-news-dot]', newsDots).forEach(dot => dot.addEventListener('click', () => setNewsIndex(Number(dot.dataset.newsDot))));
    }

    if (newsPrev) { newsPrev.hidden = total <= 1; newsPrev.disabled = total <= 1; }
    if (newsNext) { newsNext.hidden = total <= 1; newsNext.disabled = total <= 1; }

    if (replay) {
      const current = q('.news-slide.is-current', newsTrack);
      current?.classList.remove('news-slide-enter');
      void current?.offsetWidth;
      current?.classList.add('news-slide-enter');
    }

    pauseInactiveNewsVideos();
  }

  function setNewsIndex(index) {
    const collection = newsCollections[activeNewsFilter] || [];
    if (!collection.length) return;
    const total = collection.length;
    activeNewsIndex = ((index % total) + total) % total;
    renderNewsCarousel();
  }

  function applyNewsFilter(filter) {
    if (!newsCollections[filter]) return;
    activeNewsFilter = filter;
    activeNewsIndex = newsIndexes[filter] || 0;
    qa('[data-news-filter]').forEach(item => item.classList.toggle('is-active', item.dataset.newsFilter === filter));
    renderNewsCarousel();
  }

  qa('[data-news-filter]').forEach(button => button.addEventListener('click', () => applyNewsFilter(button.dataset.newsFilter)));
  newsPrev?.addEventListener('click', () => setNewsIndex(activeNewsIndex - 1));
  newsNext?.addEventListener('click', () => setNewsIndex(activeNewsIndex + 1));
  applyNewsFilter('news');

  const newsSection = q('#news');
  const pauseNewsWhenLeavingSection = () => {
    if (!newsTrack) return;
    qa('video', newsTrack).forEach(video => video.pause());
  };

  if ('IntersectionObserver' in window && newsSection) {
    const newsVisibilityObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (!entry?.isIntersecting || entry.intersectionRatio < 0.35) {
        pauseNewsWhenLeavingSection();
      }
    }, { threshold: [0, 0.35, 1] });
    newsVisibilityObserver.observe(newsSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!newsSection) return;
      const bounds = newsSection.getBoundingClientRect();
      const visible = Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0);
      if (visible < Math.min(bounds.height, window.innerHeight) * 0.35) pauseNewsWhenLeavingSection();
    }, { passive: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseNewsWhenLeavingSection();
  });

  /* --------------------------------------------------------------------------
     Driver selector
  -------------------------------------------------------------------------- */
  const drivers = data.drivers;
  const AUTO_DELAY = 15000;
  const VISIBLE_THUMBS = 4;

  /*
    V21 fine composition pass:
    - portraits can shift right per driver without entering the selector lane;
    - First Offense requested vehicles retain the 25% enlargement, with per-driver extras;
    - Second Offense secondary vehicles stay above the base vehicle and receive precise local tuning;
    - labels identify the stock and upgraded variants.
  */
  const DRIVER_ART_INSETS = Array(31).fill(0);
  const LARGE_FIRST_OFFENSE_VEHICLES = new Set([2, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const VEHICLE_GROUP_OFFSETS = [
    [0,0], [-20,0], [-10,0], [-55,0], [-30,0], [-55,0], [-25,0], [-25,0], [-30,0], [-35,0], [-25,0], [-15,0], [0,0],
    [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]
  ];
  const DRIVER_TUNE = {
    2:  { artX: 4, primaryX: -14, primaryY: 102, primaryScaleMult: 1.10 },
    3:  { primaryX: -62, primaryScaleMult: 1.18 },
    4:  { artX: 10, primaryX: 0, primaryY: 180 },
    5:  { artX: 30, primaryX: -18, primaryScaleMult: 1.07 },
    6:  { artX: -4, primaryX: -18, primaryScaleMult: 1.18 },
    7:  { artX: 38, artScale: 0.95, primaryX: -24, primaryY: 92 },
    8:  { artX: 32, primaryX: -18, primaryScaleMult: 1.08 },
    9:  { artX: 12, primaryX: -24, primaryY: 86 },
    10: { artX: 8, artScale: 0.95, primaryX: -24, primaryScaleMult: 1.15 },
    11: { artX: 16, primaryX: -20, primaryY: 120 },
    12: { artX: -4, primaryScaleMult: 0.95 },
    13: { artX: -18, primaryScaleMult: 1.15, primaryY: 26 },
    14: { secondaryY: 14, labelSecondaryLeft: 56, labelSecondaryBottom: 109 },
    15: { artX: 14, labelPrimaryLeft: 48, labelSecondaryLeft: 51, labelSecondaryBottom: 116 },
    16: { groupX: -12, nameScale: 0.70 },
    17: { secondaryY: 14, labelSecondaryLeft: 56, labelSecondaryBottom: 111 },
    18: { secondaryY: 14, labelPrimaryBottom: 12, labelSecondaryLeft: 56, labelSecondaryBottom: 106 },
    19: { primaryScale: 1.10, secondaryY: 24, labelSecondaryLeft: 56, labelSecondaryBottom: 106 },
    20: { primaryScale: 0.90, secondaryScale: 0.70, secondaryY: 14, labelPrimaryLeft: 50, labelSecondaryLeft: 43, labelSecondaryBottom: 111 },
    21: { labelPrimaryLeft: 52, labelSecondaryLeft: 53, labelSecondaryBottom: 104 },
    22: { secondaryY: 28, labelSecondaryLeft: 53, labelSecondaryBottom: 116 },
    23: { secondaryY: 14, secondaryX: 10, labelPrimaryLeft: 52, labelSecondaryLeft: 53, labelSecondaryBottom: 116 },
    24: { secondaryY: 14, labelPrimaryLeft: 48, labelSecondaryLeft: 54 },
    25: { labelSecondaryLeft: 51, labelSecondaryBottom: 111 },
    26: { secondaryScale: 0.595, secondaryY: 29, labelPrimaryLeft: 48, labelSecondaryLeft: 46, labelSecondaryBottom: 106 },
    27: { artX: 32, artScale: 0.70, groupX: -24, secondaryY: 40, labelSecondaryLeft: 55, labelSecondaryBottom: 114 },
    28: { secondaryY: 24, labelSecondaryLeft: 57, labelSecondaryBottom: 122 },
    29: { primaryScale: 0.80, secondaryScale: 0.80, primaryY: 84, secondaryY: 84, labelPrimaryLeft: 54, labelPrimaryBottom: 23, labelSecondaryLeft: 58, labelSecondaryBottom: 136 },
    30: { secondaryY: 28, labelSecondaryLeft: 56, labelSecondaryBottom: 112 },
    31: { secondaryY: 28, secondaryX: -10, labelPrimaryLeft: 50, labelSecondaryLeft: 51, labelSecondaryBottom: 116 }
  };
  let driverIndex = 0;
  let driverChanging = false;
  let autoChangeId = 0;
  let driverSceneActive = false;
  const DRIVER_AUTO_STORAGE_KEY = 'v8-driver-auto-enabled';
  let driverAutoEnabled = true;
  try { driverAutoEnabled = window.localStorage.getItem(DRIVER_AUTO_STORAGE_KEY) !== 'false'; }
  catch (_) { driverAutoEnabled = true; }

  const driverName = q('#driverName');
  const driverKicker = q('#driverKicker');
  const driverVehicle = q('#driverVehicle');
  const driverTagline = q('#driverTagline');
  const driverGhost = q('#driverGhost');
  const driverArt = q('#driverArt');
  const driverBackdropArt = q('#driverBackdropArt');
  const driverArtWrap = q('#driverArtWrap');
  const driverVehicleArt = q('#driverVehicleArt');
  const driverColorWorld = q('#driverColorWorld');
  const driverCopy = q('#driverCopy');
  const skillList = q('#skillList');
  const driverThumbs = q('#driverThumbs');
  const driverIndexEl = q('#driverIndex');
  const driverTotal = q('#driverTotal');
  const autoTimer = q('#autoTimer');
  const driverProgress = q('#driverProgress');
  const driverAutoToggle = q('#driverAutoToggle');
  const driverAutoText = q('#driverAutoText');
  const driverAutoDelay = q('#driverAutoDelay');

  if (driverTotal) driverTotal.textContent = String(drivers.length).padStart(2, '0');

  const wrapIndex = index => (index + drivers.length) % drivers.length;

  function driverFactionClass(faction = '') {
    const value = faction.toUpperCase();
    if (value.includes('VIGILANTE')) return 'faction-vigilante';
    if (value.includes('COYOTE')) return 'faction-coyote';
    if (value.includes('DRIFTER')) return 'faction-drifter';
    return 'faction-secret';
  }

  function driverKickerMarkup(driver) {
    return `<span class="driver-game-label">${driver.game}</span><span class="driver-kicker-separator"> • </span><span class="driver-faction ${driverFactionClass(driver.faction)}">${driver.faction}</span>`;
  }

  function updateDriverAutoUi() {
    driverProgress?.classList.toggle('is-auto-off', !driverAutoEnabled);
    driverAutoToggle?.classList.toggle('is-on', driverAutoEnabled);
    driverAutoToggle?.classList.toggle('is-off', !driverAutoEnabled);
    driverAutoToggle?.setAttribute('aria-pressed', String(driverAutoEnabled));
    driverAutoToggle?.setAttribute('aria-label', driverAutoEnabled ? 'Turn automatic driver changes off' : 'Turn automatic driver changes on');
    if (driverAutoToggle) driverAutoToggle.title = `Automatic driver changes: ${driverAutoEnabled ? 'on' : 'off'}`;
    if (driverAutoText) driverAutoText.textContent = driverAutoEnabled ? 'AUTO ON' : 'AUTO OFF';
    if (driverAutoDelay) driverAutoDelay.textContent = driverAutoEnabled ? '15 SEC' : 'PAUSED';
  }

  function restartTimerAnimation() {
    if (!autoTimer) return;
    autoTimer.style.animation = 'none';
    autoTimer.style.transform = 'scaleX(0)';
    void autoTimer.offsetWidth;
    if (!driverAutoEnabled) return;
    autoTimer.style.transform = '';
    autoTimer.style.animation = '';
  }

  function stopAutoChange() {
    window.clearInterval(autoChangeId);
    autoChangeId = 0;
  }

  function startAutoChange() {
    stopAutoChange();
    if (!driverAutoEnabled || !driverSceneActive || document.hidden || q('#profileModal')?.classList.contains('is-open')) return;
    restartTimerAnimation();
    autoChangeId = window.setInterval(() => {
      setDriver(driverIndex + 1, { automatic: true });
    }, AUTO_DELAY);
  }

  function buildVisibleThumbs() {
    if (!driverThumbs) return;
    driverThumbs.innerHTML = '';
    const start = driverIndex;

    for (let offset = 0; offset < VISIBLE_THUMBS; offset += 1) {
      const index = wrapIndex(start + offset);
      const driver = drivers[index];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'driver-thumb';
      button.classList.toggle('is-active', index === driverIndex);
      button.title = `${String(index + 1).padStart(2, '0')} — ${driver.name} — ${driver.game}`;
      button.setAttribute('aria-label', `Show ${driver.name}`);
      button.innerHTML = `
        <img src="${driver.avatar}" alt="${driver.name}" decoding="async">
        <span class="driver-thumb-index">${String(index + 1).padStart(2, '0')}</span>
      `;
      button.addEventListener('click', () => setDriver(index, { manual: true }));
      driverThumbs.appendChild(button);
    }
  }

  function renderSkills(driver) {
    if (!skillList) return;
    skillList.innerHTML = driver.skills.map((skill, index) => {
      const isDriverBackground = skill.kind === 'driver';
      const kind = isDriverBackground ? 'is-driver' : 'is-weapon';
      const driverNumber = driverIndex + 1;
      const forceNewDriverBackground = isDriverBackground && driverNumber >= 14 && driverNumber <= 31;
      const fitClass = forceNewDriverBackground || skill.fit === 'contain' ? 'is-contain' : '';
      const iconSource = forceNewDriverBackground
        ? `assets/drivers/backgrounds-v42/${driverNumber}.png?v=42`
        : (skill.icon || 'assets/tutorial/specials.svg');
      const alt = isDriverBackground ? `${driver.name} portrait` : `${driver.specialWeapon} weapon`;
      return `
        <article class="skill" style="animation-delay:${index * 0.11}s">
          <span class="skill-icon ${kind} ${fitClass}">
            <img src="${iconSource}" alt="${alt}" decoding="async">
          </span>
          <div>
            <h4>${skill.title}</h4>
            <p>${skill.text}</p>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderDriverVehicles(driver) {
    if (!driverVehicleArt) return;
    const vehicles = Array.isArray(driver.vehicles) ? driver.vehicles : [];
    const isSecondOffensePair = vehicles.length > 1;
    const vehicleMarkup = vehicles.map((source, index) => `
      <img class="driver-vehicle-image ${index === 0 ? 'vehicle-primary' : 'vehicle-secondary'}"
           src="${source}" alt="" decoding="async" loading="eager"
           style="animation-delay:${index * 0.08}s">
    `).join('');
    const labels = isSecondOffensePair ? `
      <span class="driver-vehicle-label label-primary">WITHOUT UPGRADE</span>
      <span class="driver-vehicle-label label-secondary">UPGRADED</span>
    ` : '';
    driverVehicleArt.innerHTML = vehicleMarkup + labels;
    driverVehicleArt.classList.toggle('has-two-vehicles', isSecondOffensePair);
  }

  function applyDriver(index, { replay = true } = {}) {
    driverIndex = wrapIndex(index);
    const driver = drivers[driverIndex];

    document.documentElement.style.setProperty('--driver-accent', driver.accent);
    document.documentElement.style.setProperty('--driver-accent2', driver.accent2);
    document.documentElement.style.setProperty('--driver-accent3', driver.accent3 || driver.accent);
    document.documentElement.style.setProperty('--progress', `${((driverIndex + 1) / drivers.length) * 100}%`);

    const visualNumber = driverIndex + 1;
    const tune = DRIVER_TUNE[visualNumber] || {};
    const [baseVehicleShiftX, baseVehicleShiftY] = VEHICLE_GROUP_OFFSETS[driverIndex] || [0, 0];
    const vehicleShiftX = baseVehicleShiftX + (tune.groupX || 0);
    const vehicleShiftY = baseVehicleShiftY + (tune.groupY || 0);
    const basePrimaryScale = LARGE_FIRST_OFFENSE_VEHICLES.has(visualNumber) ? 1.25 : 1;
    const primaryScale = Number.isFinite(tune.primaryScale) ? tune.primaryScale : basePrimaryScale * (tune.primaryScaleMult || 1);
    const secondaryScale = Number.isFinite(tune.secondaryScale) ? tune.secondaryScale : 0.95;

    driverCopy?.style.setProperty('--driver-name-scale', `${tune.nameScale || 1}`);
    driverArtWrap?.style.setProperty('--driver-art-inset', `${DRIVER_ART_INSETS[driverIndex] || 0}px`);
    driverArtWrap?.style.setProperty('--driver-art-shift-x', `${tune.artX || 0}px`);
    driverArtWrap?.style.setProperty('--driver-art-scale', `${tune.artScale || 1}`);
    driverArtWrap?.style.setProperty('--driver-wrap-right-adjust', `${driverIndex < 13 ? 34 : 0}px`);
    driverVehicleArt?.style.setProperty('--vehicle-group-shift-x', `${vehicleShiftX}px`);
    driverVehicleArt?.style.setProperty('--vehicle-group-shift-y', `${vehicleShiftY}px`);
    driverVehicleArt?.style.setProperty('--vehicle-primary-scale', `${primaryScale}`);
    driverVehicleArt?.style.setProperty('--vehicle-primary-x', `${tune.primaryX || 0}px`);
    driverVehicleArt?.style.setProperty('--vehicle-primary-y', `${tune.primaryY || 0}px`);
    driverVehicleArt?.style.setProperty('--vehicle-secondary-scale', `${secondaryScale}`);
    driverVehicleArt?.style.setProperty('--vehicle-secondary-x', `${tune.secondaryX || 0}px`);
    driverVehicleArt?.style.setProperty('--vehicle-secondary-y', `${tune.secondaryY || 0}px`);
    driverVehicleArt?.style.setProperty('--label-primary-left', `${Number.isFinite(tune.labelPrimaryLeft) ? tune.labelPrimaryLeft : 58}%`);
    driverVehicleArt?.style.setProperty('--label-primary-bottom', `${Number.isFinite(tune.labelPrimaryBottom) ? tune.labelPrimaryBottom : 8}%`);
    driverVehicleArt?.style.setProperty('--label-secondary-left', `${Number.isFinite(tune.labelSecondaryLeft) ? tune.labelSecondaryLeft : 61}%`);
    driverVehicleArt?.style.setProperty('--label-secondary-bottom', `${Number.isFinite(tune.labelSecondaryBottom) ? tune.labelSecondaryBottom : 126}%`);

    if (driverName) driverName.textContent = driver.name;
    if (driverKicker) driverKicker.innerHTML = driverKickerMarkup(driver);
    if (driverVehicle) driverVehicle.innerHTML = `<span class="vehicle-logo-text">${driver.vehicle}</span>`;
    if (driverTagline) driverTagline.textContent = driver.tagline;
    if (driverGhost) driverGhost.textContent = driver.name.replace(/\s+/g, ' ');
    if (driverArt) {
      driverArt.src = driver.image;
      driverArt.alt = driver.name;
    }
    if (driverBackdropArt) driverBackdropArt.src = driver.backgroundImage || driver.image;
    if (driverIndexEl) driverIndexEl.textContent = String(driverIndex + 1).padStart(2, '0');
    renderSkills(driver);
    renderDriverVehicles(driver);
    buildVisibleThumbs();

    driverArtWrap?.classList.remove('is-exiting');
    driverColorWorld?.classList.remove('is-exiting');
    driverCopy?.classList.remove('is-exiting');
    driverVehicleArt?.classList.remove('is-exiting');

    if (replay) {
      [driverArt, driverBackdropArt, driverColorWorld, driverCopy, driverVehicleArt].forEach(element => {
        if (!element) return;
        element.style.animation = 'none';
        void element.offsetWidth;
        element.style.animation = '';
      });
    }

    driverChanging = false;
    if (driverSceneActive && driverAutoEnabled) restartTimerAnimation();
  }

  function setDriver(next, options = {}) {
    const target = wrapIndex(next);
    if (driverChanging || (target === driverIndex && !options.instant)) {
      if (options.manual) startAutoChange();
      return;
    }

    driverChanging = true;
    if (options.instant) {
      applyDriver(target);
    } else {
      driverArtWrap?.classList.add('is-exiting');
      driverColorWorld?.classList.add('is-exiting');
      driverCopy?.classList.add('is-exiting');
      driverVehicleArt?.classList.add('is-exiting');
      window.setTimeout(() => applyDriver(target), 390);
    }

    if (options.manual) startAutoChange();
  }

  q('#driverPrev')?.addEventListener('click', () => setDriver(driverIndex - 1, { manual: true }));
  q('#driverNext')?.addEventListener('click', () => setDriver(driverIndex + 1, { manual: true }));

  driverAutoToggle?.addEventListener('click', () => {
    driverAutoEnabled = !driverAutoEnabled;
    try { window.localStorage.setItem(DRIVER_AUTO_STORAGE_KEY, String(driverAutoEnabled)); }
    catch (_) { /* Storage can be unavailable in strict privacy modes. */ }
    updateDriverAutoUi();
    if (driverAutoEnabled) startAutoChange();
    else {
      stopAutoChange();
      restartTimerAnimation();
    }
  });

  updateDriverAutoUi();
  const requestedDriver = Number.parseInt(new URLSearchParams(window.location.search).get('driver') || '1', 10);
  setDriver(Number.isFinite(requestedDriver) ? Math.min(Math.max(requestedDriver, 1), drivers.length) - 1 : 0, { instant: true });

  /* --------------------------------------------------------------------------
     Driver profile modal
  -------------------------------------------------------------------------- */
  const modal = q('#profileModal');

  q('#viewProfile')?.addEventListener('click', () => {
    const driver = drivers[driverIndex];
    const modalImage = q('#modalImage');
    const modalVehicleGallery = q('#modalVehicleGallery');
    const modalWeaponImage = q('#modalWeaponImage');
    const modalWeaponName = q('#modalWeaponName');
    const vehicles = Array.isArray(driver.vehicles) ? driver.vehicles : [];
    const weaponSkill = Array.isArray(driver.skills)
      ? driver.skills.find(skill => skill.kind === 'weapon')
      : null;

    if (modalImage) {
      modalImage.src = driver.image;
      modalImage.alt = driver.name;
    }
    if (modalVehicleGallery) {
      modalVehicleGallery.classList.toggle('has-two-vehicles', vehicles.length > 1);
      modalVehicleGallery.innerHTML = vehicles.map((source, vehicleIndex) => `
        <img class="modal-vehicle-image ${vehicleIndex === 0 ? 'modal-vehicle-primary' : 'modal-vehicle-secondary'}"
             src="${source}" alt="${driver.vehicle}${vehicleIndex === 1 ? ' upgraded' : ''}" decoding="async">
      `).join('');
    }
    if (modalWeaponImage) {
      modalWeaponImage.src = weaponSkill?.icon || 'assets/tutorial/specials.svg';
      modalWeaponImage.alt = `${driver.specialWeapon} weapon`;
    }
    if (modalWeaponName) modalWeaponName.textContent = driver.specialWeapon;

    q('#profileTitle').textContent = driver.name;
    q('#modalKicker').innerHTML = driverKickerMarkup(driver);
    q('#modalVehicle').innerHTML = `<span class="vehicle-logo-text">${driver.vehicle}</span>`;
    q('#modalSpecial').textContent = `SPECIAL WEAPON: ${driver.specialWeapon}`;
    q('#modalDescription').textContent = driver.description;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    stopAutoChange();
  });

  function closeModal() {
    modal?.classList.remove('is-open');
    modal?.setAttribute('aria-hidden', 'true');
    startAutoChange();
  }

  q('#modalClose')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal?.classList.contains('is-open')) closeModal();
  });

  /* --------------------------------------------------------------------------
     Map selector
  -------------------------------------------------------------------------- */
  const maps = data.maps || [];
  const MAP_AUTO_DELAY = 15000;
  const MAP_VISIBLE_THUMBS = 4;
  const MAP_AUTO_STORAGE_KEY = 'v8-map-auto-enabled';
  let mapIndex = 0;
  let mapChanging = false;
  let mapAutoId = 0;
  let mapSceneActive = false;
  let mapAutoEnabled = true;
  try { mapAutoEnabled = window.localStorage.getItem(MAP_AUTO_STORAGE_KEY) !== 'false'; }
  catch (_) { mapAutoEnabled = true; }

  const mapBackground = q('#mapBackground');
  const mapMiniImage = q('#mapMiniImage');
  const mapGame = q('#mapGame');
  const mapName = q('#mapName');
  const mapLocation = q('#mapLocation');
  const mapDescription = q('#mapDescription');
  const mapGhost = q('#mapGhost');
  const mapStats = q('#mapStats');
  const mapInfoCard = q('#mapInfoCard');
  const mapHighlight = q('#mapHighlight');
  const mapHighlightTitle = q('#mapHighlightTitle');
  const mapHighlightText = q('#mapHighlightText');
  const mapThumbs = q('#mapThumbs');
  const mapIndexElement = q('#mapIndex');
  const mapTotal = q('#mapTotal');
  const mapAutoTimer = q('#mapAutoTimer');
  const mapProgress = q('#mapProgress');
  const mapAutoToggle = q('#mapAutoToggle');
  const mapAutoText = q('#mapAutoText');
  const mapAutoDelay = q('#mapAutoDelay');

  if (mapTotal) mapTotal.textContent = String(maps.length).padStart(2, '0');

  const wrapMapIndex = index => maps.length ? (index + maps.length) % maps.length : 0;

  function updateMapAutoUi() {
    mapProgress?.classList.toggle('is-auto-off', !mapAutoEnabled);
    mapAutoToggle?.classList.toggle('is-on', mapAutoEnabled);
    mapAutoToggle?.classList.toggle('is-off', !mapAutoEnabled);
    mapAutoToggle?.setAttribute('aria-pressed', String(mapAutoEnabled));
    mapAutoToggle?.setAttribute('aria-label', mapAutoEnabled ? 'Turn automatic map changes off' : 'Turn automatic map changes on');
    if (mapAutoToggle) mapAutoToggle.title = `Automatic map changes: ${mapAutoEnabled ? 'on' : 'off'}`;
    if (mapAutoText) mapAutoText.textContent = mapAutoEnabled ? 'AUTO ON' : 'AUTO OFF';
    if (mapAutoDelay) mapAutoDelay.textContent = mapAutoEnabled ? '15 SEC' : 'PAUSED';
  }

  function restartMapTimerAnimation() {
    if (!mapAutoTimer) return;
    mapAutoTimer.style.animation = 'none';
    mapAutoTimer.style.transform = 'scaleX(0)';
    void mapAutoTimer.offsetWidth;
    if (!mapAutoEnabled) return;
    mapAutoTimer.style.transform = '';
    mapAutoTimer.style.animation = '';
  }

  function stopMapAuto() {
    window.clearInterval(mapAutoId);
    mapAutoId = 0;
  }

  function startMapAuto() {
    stopMapAuto();
    if (!mapAutoEnabled || !mapSceneActive || document.hidden || maps.length < 2) return;
    restartMapTimerAnimation();
    mapAutoId = window.setInterval(() => setMap(mapIndex + 1, { automatic: true }), MAP_AUTO_DELAY);
  }

  function buildMapThumbs() {
    if (!mapThumbs || !maps.length) return;
    mapThumbs.innerHTML = '';
    for (let offset = 0; offset < Math.min(MAP_VISIBLE_THUMBS, maps.length); offset += 1) {
      const index = wrapMapIndex(mapIndex + offset);
      const map = maps[index];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'map-thumb';
      button.classList.toggle('is-active', index === mapIndex);
      button.title = `${String(index + 1).padStart(2, '0')} — ${map.name}`;
      button.setAttribute('aria-label', `Show ${map.name}`);
      button.innerHTML = `<img src="${map.thumbImage || map.previewImage || map.image}" alt="${map.name}" decoding="async">`;
      button.addEventListener('click', () => setMap(index, { manual: true }));
      mapThumbs.appendChild(button);
    }
  }

  function renderMapStats(map) {
    if (!mapStats) return;
    mapStats.innerHTML = (map.stats || []).map(stat => `
      <article><small>${stat.label}</small><strong>${stat.value}</strong></article>
    `).join('');
  }

  function applyMap(index, { replay = true } = {}) {
    if (!maps.length) return;
    mapIndex = wrapMapIndex(index);
    const map = maps[mapIndex];

    document.documentElement.style.setProperty('--map-accent', map.accent || '#ff7714');
    document.documentElement.style.setProperty('--map-accent2', map.accent2 || '#ffd31c');
    document.documentElement.style.setProperty('--map-accent3', map.accent3 || '#2a211b');
    document.documentElement.style.setProperty('--map-progress', `${((mapIndex + 1) / maps.length) * 100}%`);

    if (mapBackground) {
      mapBackground.src = map.image;
      mapBackground.alt = `${map.name} battlefield`;
    }
    if (mapMiniImage) {
      mapMiniImage.src = map.previewImage || map.image;
      mapMiniImage.alt = `${map.name} preview`;
    }
    if (mapGame) mapGame.textContent = map.game || 'VIGILANTE 8';
    if (mapName) mapName.textContent = map.name;
    if (mapLocation) mapLocation.textContent = map.location;
    if (mapDescription) mapDescription.textContent = map.description;
    if (mapGhost) mapGhost.textContent = map.name;
    if (mapHighlightTitle) mapHighlightTitle.textContent = map.highlightTitle;
    if (mapHighlightText) mapHighlightText.textContent = map.highlightText;
    if (mapIndexElement) mapIndexElement.textContent = String(mapIndex + 1).padStart(2, '0');
    renderMapStats(map);
    buildMapThumbs();

    [mapBackground, mapInfoCard, mapHighlight].forEach(element => element?.classList.remove('is-exiting'));
    if (replay) [mapBackground, mapInfoCard, mapHighlight].forEach(restartElementAnimation);

    mapChanging = false;
    if (mapSceneActive) restartMapTimerAnimation();
  }

  function setMap(next, options = {}) {
    if (!maps.length) return;
    const target = wrapMapIndex(next);
    if (mapChanging || (target === mapIndex && !options.instant)) {
      if (options.manual) startMapAuto();
      return;
    }

    mapChanging = true;
    if (options.instant) {
      applyMap(target);
    } else {
      mapBackground?.classList.add('is-exiting');
      mapInfoCard?.classList.add('is-exiting');
      mapHighlight?.classList.add('is-exiting');
      window.setTimeout(() => applyMap(target), 390);
    }

    if (options.manual) startMapAuto();
  }

  mapAutoToggle?.addEventListener('click', () => {
    mapAutoEnabled = !mapAutoEnabled;
    try { window.localStorage.setItem(MAP_AUTO_STORAGE_KEY, String(mapAutoEnabled)); }
    catch (_) {}
    updateMapAutoUi();
    if (mapAutoEnabled) startMapAuto();
    else {
      stopMapAuto();
      restartMapTimerAnimation();
    }
  });

  q('#mapPrev')?.addEventListener('click', () => setMap(mapIndex - 1, { manual: true }));
  q('#mapNext')?.addEventListener('click', () => setMap(mapIndex + 1, { manual: true }));
  updateMapAutoUi();
  if (maps.length) setMap(0, { instant: true });

  /* --------------------------------------------------------------------------
     Tutorial cards
  -------------------------------------------------------------------------- */
  const tutorialTitles = {
    beginner: 'COMBAT TUTORIAL',
    advanced: 'HOW TO PLAY ONLINE',
    master: 'MODES & VEHICLES UPGRADES'
  };

  function renderTutorial(level) {
    const tutorialGrid = q('#tutorialGrid');
    const tutorialTitle = q('#tutorialTitle');
    const tutorialSection = q('#tutorial');
    if (!tutorialGrid) return;
    if (tutorialTitle) tutorialTitle.textContent = tutorialTitles[level] || tutorialTitles.beginner;
    if (tutorialSection) tutorialSection.dataset.tutorialLevel = level;
    const collection = data.tutorial[level] || [];
    tutorialGrid.innerHTML = collection.map((item, index) => `
      <article class="tutorial-card" style="animation-delay:${index * 0.07}s">
        <div class="tutorial-card-media">
          <img src="${item.image}" alt="${item.title}" loading="eager" decoding="async">
          <h3>${item.title}</h3>
        </div>
        <div class="tutorial-more-row">
          <button type="button" class="more-information-button" data-tutorial-more="${index}">MORE INFORMATION</button>
        </div>
      </article>
    `).join('');

    qa('[data-tutorial-more]', tutorialGrid).forEach(button => {
      button.addEventListener('click', () => {
        const item = collection[Number(button.dataset.tutorialMore)];
        if (item) openInformationModal(item, tutorialTitles[level] || 'COMBAT TUTORIAL', button);
      });
    });
  }

  qa('[data-tutorial]').forEach(button => button.addEventListener('click', () => {
    qa('[data-tutorial]').forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderTutorial(button.dataset.tutorial);
  }));
  renderTutorial('beginner');


  // V53: create the SOCIAL navigation item and scene before the cinematic engine
  // captures the page sections. This also protects against an older cached HTML file.
  function ensureSocialV53() {
    const credits = document.querySelector('#credits');
    const nav = document.querySelector('#mainNav');
    if (!credits || !nav) return;

    if (!nav.querySelector('a[href="#social"]')) {
      const creditsLink = nav.querySelector('a[href="#credits"]');
      const link = document.createElement('a');
      link.href = '#social';
      link.innerHTML = `<span aria-hidden="true" class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="7" cy="12" r="2.5"></circle><circle cx="17" cy="7" r="2.5"></circle><circle cx="17" cy="17" r="2.5"></circle><path d="m9.3 10.9 5.4-2.8M9.3 13.1l5.4 2.8"></path></svg></span><span class="nav-copy"><b>SOCIAL</b><small>CONTACT</small></span>`;
      nav.insertBefore(link, creditsLink);
    }

    if (document.querySelector('#social')) return;
    const section = document.createElement('section');
    section.className = 'social section-shell';
    section.id = 'social';
    section.setAttribute('aria-label', 'Social and contact links');
    section.innerHTML = `
      <div aria-hidden="true" class="social-crest">CONNECT</div>
      <div class="social-header" data-reveal><p class="section-eyebrow">CONTACT</p><h2>SOCIAL</h2><p>Connect with the development team, follow their channels, and join the official Vigilante 8 community.</p></div>
      <div class="social-grid">
        <article class="social-card social-card-ameer" data-reveal><span class="social-number">01</span><div class="social-card-heading"><small>ASSOCIATE DEVELOPER</small><h3>AMEER_007x</h3><p>Project development, original V8 content integration, website design, media, and community updates.</p></div><div class="social-links" aria-label="AMEER_007x contact links">
          <a class="social-link social-link-youtube" href="https://www.youtube.com/@Ameer007x" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z"></path><path d="m10 9 5 3-5 3Z" class="social-icon-cut"></path></svg></span><span><small>YOUTUBE</small><b>@Ameer007x</b></span></a>
          <a class="social-link social-link-discord" href="https://discord.com/users/761673442353086555" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.2 6.2A12 12 0 0 1 12 5.6c1.3 0 2.6.2 3.8.6l.7-1.3c1.8.5 3.2 1.2 4.2 2.2 1.2 2 1.8 4.3 1.7 6.8-1.4 1.8-3.2 3.1-5.3 3.9l-1.2-1.6c.7-.3 1.3-.7 1.9-1.1-3.7 1.7-7.9 1.7-11.6 0 .6.4 1.2.8 1.9 1.1l-1.2 1.6a12.6 12.6 0 0 1-5.3-3.9c-.1-2.5.5-4.8 1.7-6.8 1-1 2.4-1.7 4.2-2.2l.7 1.3Z"></path><circle cx="8.8" cy="12" r="1.2" class="social-icon-cut"></circle><circle cx="15.2" cy="12" r="1.2" class="social-icon-cut"></circle></svg></span><span><small>DISCORD</small><b>OPEN PROFILE</b></span></a>
          <a class="social-link social-link-email" href="mailto:ameerdavid1995@gmail.com"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5h18v14H3z"></path><path d="m4 7 8 6 8-6" class="social-icon-line"></path></svg></span><span><small>EMAIL</small><b>ameerdavid1995@gmail.com</b></span></a>
        </div></article>
        <article class="social-card social-card-infinity" data-reveal><span class="social-number">02</span><div class="social-card-heading"><small>ASSOCIATE DEVELOPER</small><h3>INFINITY4U</h3><p>Bug fixing, player support, online community maintenance, and weekly multiplayer broadcasts.</p></div><div class="social-links" aria-label="INFINITY contact links">
          <a class="social-link social-link-youtube" href="https://www.youtube.com/@InfiNity4U" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z"></path><path d="m10 9 5 3-5 3Z" class="social-icon-cut"></path></svg></span><span><small>YOUTUBE</small><b>@InfiNity4U</b></span></a>
          <a class="social-link social-link-discord" href="https://discord.com/users/642561584400564224" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.2 6.2A12 12 0 0 1 12 5.6c1.3 0 2.6.2 3.8.6l.7-1.3c1.8.5 3.2 1.2 4.2 2.2 1.2 2 1.8 4.3 1.7 6.8-1.4 1.8-3.2 3.1-5.3 3.9l-1.2-1.6c.7-.3 1.3-.7 1.9-1.1-3.7 1.7-7.9 1.7-11.6 0 .6.4 1.2.8 1.9 1.1l-1.2 1.6a12.6 12.6 0 0 1-5.3-3.9c-.1-2.5.5-4.8 1.7-6.8 1-1 2.4-1.7 4.2-2.2l.7 1.3Z"></path><circle cx="8.8" cy="12" r="1.2" class="social-icon-cut"></circle><circle cx="15.2" cy="12" r="1.2" class="social-icon-cut"></circle></svg></span><span><small>DISCORD</small><b>OPEN PROFILE</b></span></a>
        </div></article>
        <article class="social-card social-card-community" data-reveal><span class="social-number">03</span><div class="social-card-heading"><small>GAME COMMUNITY</small><h3>VIGILANTE 8 ONLINE</h3><p>Join the official multiplayer community, find other players, watch matches, and follow project activity.</p></div><div class="social-links" aria-label="Game community links">
          <a class="social-link social-link-youtube" href="https://www.youtube.com/@InfiNity4U" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z"></path><path d="m10 9 5 3-5 3Z" class="social-icon-cut"></path></svg></span><span><small>YOUTUBE</small><b>WATCH THE COMMUNITY</b></span></a>
          <a class="social-link social-link-discord" href="https://discord.gg/ckscEVaxxQ" target="_blank" rel="noopener noreferrer"><span class="social-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.2 6.2A12 12 0 0 1 12 5.6c1.3 0 2.6.2 3.8.6l.7-1.3c1.8.5 3.2 1.2 4.2 2.2 1.2 2 1.8 4.3 1.7 6.8-1.4 1.8-3.2 3.1-5.3 3.9l-1.2-1.6c.7-.3 1.3-.7 1.9-1.1-3.7 1.7-7.9 1.7-11.6 0 .6.4 1.2.8 1.9 1.1l-1.2 1.6a12.6 12.6 0 0 1-5.3-3.9c-.1-2.5.5-4.8 1.7-6.8 1-1 2.4-1.7 4.2-2.2l.7 1.3Z"></path><circle cx="8.8" cy="12" r="1.2" class="social-icon-cut"></circle><circle cx="15.2" cy="12" r="1.2" class="social-icon-cut"></circle></svg></span><span><small>DISCORD</small><b>JOIN THE SERVER</b></span></a>
        </div></article>
      </div>`;
    credits.parentNode.insertBefore(section, credits);
  }

  ensureSocialV53();

  /* --------------------------------------------------------------------------
     Ambient ash and section scenery
  -------------------------------------------------------------------------- */
  const ambientTargets = [
    q('.hero'),
    q('.news'),
    q('.tutorial'),
    q('.download'),
    q('.social'),
    q('.credits')
  ].filter(Boolean);

  ambientTargets.forEach((section, sectionIndex) => {
    if (section.querySelector(':scope > .v6-embers')) return;

    const layer = document.createElement('div');
    layer.className = 'v6-embers';
    layer.setAttribute('aria-hidden', 'true');

    const decor = document.createElement('div');
    decor.className = 'v8-scene-decor';
    decor.setAttribute('aria-hidden', 'true');
    const sceneNames = {
      home: 'ROAD WAR',
      news: 'NEWS & UPDATES',
      tutorial: 'COMBAT SCHOOL',
      download: 'DOWNLOAD',
      social: 'SOCIAL',
      credits: 'CREDITS'
    };
    decor.innerHTML = `
      <span class="scene-panel"></span>
      <span class="scene-ghost">${sceneNames[section.id] || 'VIGILANTE 8'}</span>
      <span class="scene-halftone"></span>
      <span class="scene-slash scene-slash-a"></span>
      <span class="scene-slash scene-slash-b"></span>
      <span class="scene-slash scene-slash-c"></span>
    `;

    const count = window.matchMedia('(max-width: 780px)').matches ? 12 : 24;
    for (let i = 0; i < count; i += 1) {
      const ember = document.createElement('i');
      const seed = (i * 37 + sectionIndex * 19) % 100;
      ember.className = i % 6 === 0 ? 'ash' : (i % 3 === 0 ? 'spark' : 'ember');
      ember.style.setProperty('--x', `${2 + (seed * 0.96)}%`);
      ember.style.setProperty('--delay', `${-((i * 0.73 + sectionIndex) % 11)}s`);
      ember.style.setProperty('--duration', `${7.2 + ((i * 11) % 46) / 10}s`);
      ember.style.setProperty('--size', `${1.5 + ((i * 7) % 5)}px`);
      ember.style.setProperty('--drift', `${-48 + ((i * 29 + sectionIndex * 13) % 96)}px`);
      ember.style.setProperty('--sway', `${-16 + ((i * 17) % 32)}px`);
      ember.style.setProperty('--alpha', `${0.34 + ((i * 9) % 38) / 100}`);
      layer.appendChild(ember);
    }

    section.prepend(layer);
    section.prepend(decor);
  });

  /* --------------------------------------------------------------------------
     Cinematic one-section-at-a-time navigation engine
  -------------------------------------------------------------------------- */
  const SCROLL_DURATION = 860;
  const SCENE_ANIMATION_TIME = 1180;
  const WHEEL_THRESHOLD = 34;
  const WHEEL_RELEASE_DELAY = 170;
  const POST_ANIMATION_COOLDOWN = 250;

  const scenes = qa('main > section');
  const navLinks = qa('.main-nav a');
  const sceneTransition = q('#sceneTransition');
  const sceneTransitionLabel = q('#sceneTransitionLabel');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cinematicQuery = window.matchMedia('(min-width: 901px) and (min-height: 680px)');

  let currentSceneIndex = 0;
  let sceneLocked = false;
  let wheelAccumulator = 0;
  let wheelResetId = 0;
  let ignoreWheelUntil = 0;
  let sceneScrollTicking = false;
  let sceneAnimationId = 0;

  scenes.forEach((section, index) => {
    section.classList.add('scene-section');
    section.dataset.sceneIndex = String(index);
    if (!section.id) section.id = `scene-${index + 1}`;
  });

  function cinematicEnabled() {
    return cinematicQuery.matches && !reducedMotionQuery.matches;
  }

  function sectionLabel(section) {
    const heading = section.querySelector('h2, .poster-title, .section-heading h2');
    return (heading?.textContent || section.id || 'VIGILANTE 8').replace(/\s+/g, ' ').trim();
  }

  function updateActiveNavigation(section) {
    navLinks.forEach(link => {
      const target = link.getAttribute('href');
      link.classList.toggle('active', target === `#${section.id}`);
    });
  }

  function restartElementAnimation(element) {
    if (!element) return;
    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = '';
  }

  function replaySceneDetails(section) {
    const revealItems = qa('[data-reveal]', section);
    revealItems.forEach((element, index) => {
      element.classList.remove('revealed');
      element.style.transitionDelay = `${Math.min(index * 110, 330)}ms`;
    });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        revealItems.forEach(element => element.classList.add('revealed'));
      });
    });

    if (section.id === 'drivers') {
      applyDriver(driverIndex, { replay: true });
    }

    if (section.id === 'maps') {
      applyMap(mapIndex, { replay: true });
    }

    if (section.id === 'tutorial') {
      qa('.tutorial-card', section).forEach((card, index) => {
        card.style.animationDelay = `${120 + index * 85}ms`;
        restartElementAnimation(card);
      });
    }

  }

  function setSceneActive(index, { initial = false } = {}) {
    currentSceneIndex = clamp(index, 0, scenes.length - 1);
    const activeSection = scenes[currentSceneIndex];

    scenes.forEach((section, sectionIndex) => {
      const active = sectionIndex === currentSceneIndex;
      section.classList.toggle('scene-active', active);
      section.setAttribute('aria-current', active ? 'true' : 'false');
      if (!active) {
        section.classList.remove('scene-entering');
        qa('[data-reveal]', section).forEach(element => element.classList.remove('revealed'));
      }
    });

    document.body.dataset.sceneIndex = String(currentSceneIndex);
    document.body.classList.toggle('scene-at-start', currentSceneIndex === 0);
    document.body.classList.toggle('scene-at-end', currentSceneIndex === scenes.length - 1);
    updateActiveNavigation(activeSection);

    driverSceneActive = activeSection.id === 'drivers';
    if (driverSceneActive) startAutoChange();
    else stopAutoChange();

    mapSceneActive = activeSection.id === 'maps';
    if (mapSceneActive) startMapAuto();
    else stopMapAuto();

    window.clearTimeout(sceneAnimationId);
    activeSection.classList.remove('scene-entering');
    void activeSection.offsetWidth;
    activeSection.classList.add('scene-entering');
    replaySceneDetails(activeSection);

    sceneAnimationId = window.setTimeout(() => {
      activeSection.classList.remove('scene-entering');
    }, SCENE_ANIMATION_TIME + 250);

  }

  function nearestSceneIndex() {
    const marker = window.scrollY + window.innerHeight * 0.45;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    scenes.forEach((section, index) => {
      const center = section.offsetTop + section.offsetHeight * 0.5;
      const distance = Math.abs(center - marker);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function targetScrollY(section) {
    const compactHeader = window.innerWidth <= 820 ? 56 : 58;
    const preferred = section.offsetTop - compactHeader;
    const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    return clamp(preferred, 0, maximum);
  }

  function easeInOutCubic(value) {
    return value < 0.5
      ? 4 * value * value * value
      : 1 - Math.pow(-2 * value + 2, 3) / 2;
  }

  function animateScrollTo(target, duration) {
    const start = window.scrollY;
    const distance = target - start;
    if (Math.abs(distance) < 2 || duration === 0) {
      window.scrollTo(0, target);
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const startedAt = performance.now();

      function frame(now) {
        const progress = clamp((now - startedAt) / duration, 0, 1);
        window.scrollTo(0, start + distance * easeInOutCubic(progress));
        if (progress < 1) window.requestAnimationFrame(frame);
        else resolve();
      }

      window.requestAnimationFrame(frame);
    });
  }


  /* Load every section and every dynamic driver/map/tutorial image concurrently.
     Navigation never waits for decoding; assets are already warming from startup. */
  const preloadedSources = new Set();
  const preloadHandles = [];

  function collectImageSources(value, output = preloadedSources) {
    if (!value) return output;
    if (typeof value === 'string') {
      if (/\.(?:png|jpe?g|webp|gif|svg)(?:[?#].*)?$/i.test(value)) output.add(value);
      return output;
    }
    if (Array.isArray(value)) {
      value.forEach(item => collectImageSources(item, output));
      return output;
    }
    if (typeof value === 'object') {
      Object.values(value).forEach(item => collectImageSources(item, output));
    }
    return output;
  }

  function preloadAllSiteAssets() {
    qa('img').forEach((image, index) => {
      image.loading = 'eager';
      image.decoding = 'async';
      if ('fetchPriority' in image) image.fetchPriority = index < 3 ? 'high' : 'auto';
      const source = image.currentSrc || image.src;
      if (source) preloadedSources.add(source);
    });

    collectImageSources(data);

    preloadedSources.forEach(source => {
      const image = new Image();
      image.decoding = 'async';
      image.loading = 'eager';
      image.src = source;
      preloadHandles.push(image);
    });
  }

  function showSceneTransition(section, direction) {
    if (!sceneTransition) return;
    if (sceneTransitionLabel) sceneTransitionLabel.textContent = sectionLabel(section);
    sceneTransition.classList.remove('is-forward', 'is-backward');
    sceneTransition.classList.add(direction >= 0 ? 'is-forward' : 'is-backward');
    void sceneTransition.offsetWidth;
    sceneTransition.classList.add('is-active');
  }

  function hideSceneTransition() {
    sceneTransition?.classList.remove('is-active');
  }

  async function navigateToScene(index, { immediate = false } = {}) {
    const targetIndex = clamp(index, 0, scenes.length - 1);
    if (sceneLocked || targetIndex === currentSceneIndex) return;

    const targetSection = scenes[targetIndex];
    const direction = targetIndex > currentSceneIndex ? 1 : -1;
    sceneLocked = true;
    document.body.classList.add('scene-navigation-locked', 'scene-switching');
    showSceneTransition(targetSection, direction);

    const duration = immediate || reducedMotionQuery.matches ? 0 : SCROLL_DURATION;
    await animateScrollTo(targetScrollY(targetSection), duration);
    setSceneActive(targetIndex);
    await delay(reducedMotionQuery.matches ? 80 : SCENE_ANIMATION_TIME);

    hideSceneTransition();
    document.body.classList.remove('scene-switching');
    ignoreWheelUntil = performance.now() + POST_ANIMATION_COOLDOWN;
    sceneLocked = false;
    document.body.classList.remove('scene-navigation-locked');
  }

  function handleWheel(event) {
    if (!cinematicEnabled()) return;
    if (modal?.classList.contains('is-open')) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    event.preventDefault();
    if (sceneLocked || performance.now() < ignoreWheelUntil) return;

    wheelAccumulator += event.deltaY;
    window.clearTimeout(wheelResetId);
    wheelResetId = window.setTimeout(() => { wheelAccumulator = 0; }, WHEEL_RELEASE_DELAY);

    if (Math.abs(wheelAccumulator) < WHEEL_THRESHOLD) return;
    const direction = wheelAccumulator > 0 ? 1 : -1;
    wheelAccumulator = 0;
    navigateToScene(currentSceneIndex + direction);
  }

  window.addEventListener('wheel', handleWheel, { passive: false });

  function handleHashNavigation(event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = q(hash);
    const index = scenes.indexOf(target);
    if (index < 0) return;

    event.preventDefault();
    mainNav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');

    if (cinematicEnabled()) navigateToScene(index);
    else target.scrollIntoView({ behavior: reducedMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
  }

  document.addEventListener('click', handleHashNavigation);

  function handleNativeSceneTracking() {
    if (sceneLocked || cinematicEnabled()) return;
    if (sceneScrollTicking) return;
    sceneScrollTicking = true;
    window.requestAnimationFrame(() => {
      sceneScrollTicking = false;
      const nearest = nearestSceneIndex();
      if (nearest !== currentSceneIndex) setSceneActive(nearest);
    });
  }

  window.addEventListener('scroll', handleNativeSceneTracking, { passive: true });

  function refreshCinematicMode() {
    const cinematic = cinematicEnabled();
    document.body.classList.toggle('scene-engine-ready', cinematic);
    document.documentElement.classList.toggle('scene-engine-ready', cinematic);
    document.body.classList.toggle('all-ambient-animations', cinematic);
    document.documentElement.classList.toggle('all-ambient-animations', cinematic);
    currentSceneIndex = nearestSceneIndex();
    setSceneActive(currentSceneIndex, { initial: true });
  }

  cinematicQuery.addEventListener?.('change', refreshCinematicMode);
  reducedMotionQuery.addEventListener?.('change', refreshCinematicMode);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoChange();
      stopMapAuto();
    } else {
      if (driverSceneActive) startAutoChange();
      if (mapSceneActive) startMapAuto();
    }
  });

  qa('main img').forEach(image => {
    image.decoding = 'async';
    image.loading = 'eager';
  });

  preloadAllSiteAssets();
  refreshCinematicMode();


  // V49: force the requested Credits copy at runtime as a cache-safe fallback.
  function applyCreditsV49() {
    const credits = document.querySelector('#credits');
    if (!credits) return;

    const eyebrow = credits.querySelector('.credits-header .section-eyebrow');
    const subtitle = credits.querySelector('.credits-header > p:last-child');
    const cards = credits.querySelectorAll('.credits-grid .credit-card');

    if (eyebrow) eyebrow.textContent = 'ACKNOWLEDGEMENT & RIGHTS';
    if (subtitle) subtitle.textContent = 'This page brings the project developers and legal information.';

    const requested = [
      {
        role: 'PROJECT CREATOR',
        name: 'Stefan Vranjes',
        description: 'All credit goes to him for the Unity project development and PC porting and bringing the game to life again.'
      },
      {
        role: 'ASSOCIATE DEVELOPER',
        name: 'AMEER_007x',
        description: 'Credit goes to him for porting the original vehicles of V8, integrating TDM, LTS modes & Random cars mode into the multiplayer, as well as adding new features UI & HUD, improving the gameplay & online experience, fixing bugs and Website Design and Content Creation.'
      },
      {
        role: 'ASSOCIATE DEVELOPER',
          name: 'INFINITY4U',
          description: 'Credits goes to him for fixing bugs and improving the gameplay experience, maintaining the discord community, hosting the game server and website also providing support to players.'
      }
    ];

    requested.forEach((entry, index) => {
      const card = cards[index];
      if (!card) return;
      const role = card.querySelector('small');
      const name = card.querySelector('h3');
      const description = card.querySelector('p');
      if (role) role.textContent = entry.role;
      if (name) name.textContent = entry.name;
      if (description) description.textContent = entry.description;
    });
  }

  applyCreditsV49();
  document.addEventListener('DOMContentLoaded', applyCreditsV49, { once: true });
  window.addEventListener('pageshow', applyCreditsV49);


  // V52: definitive publisher-rights layout, larger marks, and branded sign-off.
  function applyCreditsV52() {
    const credits = document.querySelector('#credits');
    if (!credits) return;

    const cards = credits.querySelectorAll('.credits-grid .credit-card');
    const ameerCard = Array.from(cards).find(card => card.querySelector('h3')?.textContent.trim() === 'AMEER_007x') || cards[1];
    const ameerCopy = ameerCard?.querySelector('p');
    if (ameerCopy && !ameerCopy.textContent.includes('Website Design and Content Creation.')) {
      ameerCopy.textContent = `${ameerCopy.textContent.trim()} Website Design and Content Creation.`;
    }

    let strip = credits.querySelector('#creditsRightsStrip') || credits.querySelector('.credits-legal');
    if (!strip) {
      strip = document.createElement('div');
      credits.appendChild(strip);
    }
    strip.id = 'creditsRightsStrip';
    strip.className = 'credits-legal credits-publisher-strip';
    strip.innerHTML = `
      <div class="credits-publisher-logos" aria-label="Publisher and ratings logos">
        <img class="credits-mark credits-mark-activision" alt="Activision" decoding="async" loading="eager" src="assets/credits-v52/01-activision.png?v=52">
        <img class="credits-mark credits-mark-luxoflux" alt="Luxoflux" decoding="async" loading="eager" src="assets/credits-v52/02-luxoflux.png?v=52">
        <img class="credits-mark credits-mark-privacy" alt="ESRB Privacy Certified" decoding="async" loading="eager" src="assets/credits-v52/03-esrb-privacy.png?v=52">
        <img class="credits-mark credits-mark-teen" alt="ESRB Teen rating" decoding="async" loading="eager" src="assets/credits-v52/04-esrb-teen.png?v=52">
      </div>
      <div class="credits-rights-copy">
        <p>© 2022 Activision Publishing Inc. ACTIVISION, VIGILANTE 8 and VIGILANTE 8: SECOND OFFENSE are trademarks of Activision Publishing, Inc.</p>
        <p>© 2020 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.</p>
        <p>The rating icon is a trademark of the Entertainment Software Association. All other trademarks and trade names are the properties of their respective owners.</p>
      </div>
      <div class="credits-brand-footer">
        <p class="credits-asset-credit">Website design, media, and all digital assets created and managed by <strong>AMEER_007x</strong></p>
        <p class="credits-rights-signoff">ALL RIGHTS RESERVED <span>•</span> 2026 <span>•</span> @AMEER_007x</p>
      </div>`;
  }

  applyCreditsV52();
  document.addEventListener('DOMContentLoaded', applyCreditsV52, { once: true });
  window.addEventListener('pageshow', applyCreditsV52);

})();
