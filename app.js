// ===== STATE =====
const STATE_KEY = 'nessa_littlestar_v2';
let state = {
  // App meta
  pin: null,               // 4-digit PIN string or null if not set
  pinVerified: false,      // session-only: don't persist

  // Child profile
  childName: 'Nessa',
  childAvatar: null,       // base64 photo or null
  startDate: null,         // ISO date when Week 1 began

  // Parents (scalable: array)
  parents: [
    { id: 'parent1', name: 'Mama', avatar: null },
    { id: 'parent2', name: 'Papa', avatar: null },
  ],

  // Week/age (computed from startDate at runtime)
  week: 1,
  ageMonths: 12,

  stats: { done: 0, milestones: 0, words: 14, streak: 0 },
  domains: [
    { id: 'cognitive',  name: 'Cognitive',            icon: 'ti-brain',          color: '#534AB7', bg: '#EEEDFE', pct: 0, last: 'Not started yet' },
    { id: 'language',   name: 'Language & Signs',      icon: 'ti-message-circle', color: '#1D9E75', bg: '#E1F5EE', pct: 0, last: 'Not started yet' },
    { id: 'emotional',  name: 'Emotional Intelligence',icon: 'ti-heart',          color: '#D85A30', bg: '#FAECE7', pct: 0, last: 'Not started yet' },
    { id: 'physical',   name: 'Physical & Motor',      icon: 'ti-run',            color: '#639922', bg: '#EAF3DE', pct: 0, last: 'Not started yet' },
    { id: 'creativity', name: 'Creativity & Arts',     icon: 'ti-palette',        color: '#BA7517', bg: '#FAEEDA', pct: 0, last: 'Not started yet' },
    { id: 'social',     name: 'Social & Character',    icon: 'ti-users',          color: '#185FA5', bg: '#E6F1FB', pct: 0, last: 'Not started yet' },
    { id: 'cultural',   name: 'Cultural Identity',     icon: 'ti-world',          color: '#0F7B6C', bg: '#E0F4F1', pct: 0, last: 'Not started yet' },
  ],
  milestones: [],
  moments: [],
  plan: [],
  weekHistory: [],
};

// ===== PERSIST =====
function saveState() {
  try {
    const toSave = { ...state, pinVerified: false }; // never persist session flag
    localStorage.setItem(STATE_KEY, JSON.stringify(toSave));
  } catch(e) {}
}
function loadState() {
  try {
    const s = localStorage.getItem(STATE_KEY);
    if (s) {
      const loaded = JSON.parse(s);
      state = { ...state, ...loaded, pinVerified: false };
      // Ensure parents array exists (migration)
      if (!state.parents) state.parents = [
        { id: 'parent1', name: 'Mama', avatar: null },
        { id: 'parent2', name: 'Papa', avatar: null },
      ];
    }
  } catch(e) {}
}

// ===== AUTOMATIC WEEK PROGRESSION =====
function computeCurrentWeek() {
  if (!state.startDate) {
    // First launch — set start date to today
    state.startDate = new Date().toISOString();
    saveState();
  }
  const start = new Date(state.startDate);
  const now = new Date();
  const daysDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const computedWeek = Math.min(Math.floor(daysDiff / 7) + 1, 104); // supports Year 1 + Year 2
  const computedAge = 12 + Math.floor((computedWeek - 1) / 4.33);

  // Auto-archive completed week when week changes
  if (computedWeek > state.week) {
    for (let w = state.week; w < computedWeek; w++) {
      const alreadyArchived = state.weekHistory.find(h => h.weekNum === w);
      if (!alreadyArchived) {
        state.weekHistory.push({
          weekNum: w,
          week: `Wk${w}`,
          done: w === state.week ? state.stats.done : 0,
          total: 5,
        });
      }
    }
    state.week = computedWeek;
    state.ageMonths = computedAge;
    state.stats.done = 0;
    state.plan = state.plan.filter(a => a.status === 'pending'); // carry over incomplete
    saveState();
  } else {
    state.week = computedWeek;
    state.ageMonths = computedAge;
  }
}

// ===== PIN SYSTEM =====
function initApp() {
  loadState();
  computeCurrentWeek();

  if (!state.pin) {
    // First time — go to setup
    showScreen('setup');
  } else if (!state.pinVerified) {
    showScreen('pin');
  } else {
    showScreen('home');
  }
}

function submitSetupPIN() {
  const p1 = document.getElementById('setup-pin1').value;
  const p2 = document.getElementById('setup-pin2').value;
  if (p1.length !== 4 || !/^\d{4}$/.test(p1)) {
    showPinError('setup-error', 'PIN must be exactly 4 digits'); return;
  }
  if (p1 !== p2) {
    showPinError('setup-error', 'PINs do not match'); return;
  }
  state.pin = p1;
  state.pinVerified = true;
  saveState();
  showScreen('home');
}

function submitPIN() {
  const entered = document.getElementById('pin-input').value;
  if (entered === state.pin) {
    state.pinVerified = true;
    document.getElementById('pin-input').value = '';
    showScreen('home');
  } else {
    showPinError('pin-error', 'Incorrect PIN. Try again.');
    document.getElementById('pin-input').value = '';
  }
}

function showPinError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function changePin() {
  const current = document.getElementById('change-pin-current').value;
  const newPin = document.getElementById('change-pin-new').value;
  const confirm = document.getElementById('change-pin-confirm').value;
  if (current !== state.pin) { showPinError('change-pin-error', 'Current PIN is incorrect'); return; }
  if (newPin.length !== 4 || !/^\d{4}$/.test(newPin)) { showPinError('change-pin-error', 'New PIN must be 4 digits'); return; }
  if (newPin !== confirm) { showPinError('change-pin-error', 'New PINs do not match'); return; }
  state.pin = newPin;
  saveState();
  closeModal('modal-change-pin');
  alert('PIN changed successfully!');
}

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + id);
  if (screen) screen.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const nb = document.querySelector(`[data-screen="${id}"]`);
  if (nb) nb.classList.add('active');
  const bottomNav = document.getElementById('bottom-nav');
  const noNav = ['splash','pin','setup'];
  bottomNav.style.display = noNav.includes(id) ? 'none' : 'flex';
  if (id === 'home') renderHome();
  if (id === 'progress') renderProgress();
  if (id === 'moments') renderMoments();
  if (id === 'settings') renderSettings();
}

// ===== AVATAR HELPERS =====
function getAvatarHTML(size = 42) {
  if (state.childAvatar) {
    return `<img src="${state.childAvatar}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;border:1.5px solid #C0BAF0;" alt="${state.childName}" />`;
  }
  return `<div class="avatar" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.4)}px">${state.childName.charAt(0)}</div>`;
}

// ===== HOME =====
function renderHome() {
  document.getElementById('home-meta').textContent = `Age ${state.ageMonths} months · Week ${state.week} of 52`;
  const avatarEl = document.getElementById('home-avatar');
  if (avatarEl) avatarEl.innerHTML = getAvatarHTML(42);
  const nameEl = document.getElementById('home-child-name');
  if (nameEl) nameEl.textContent = `${state.childName} 💝`;
  document.getElementById('stat-done').textContent = state.stats.done;
  document.getElementById('stat-milestones').textContent = state.stats.milestones;
  document.getElementById('stat-words').textContent = state.stats.words;
  document.getElementById('stat-streak').textContent = state.stats.streak;
  renderDomains('domain-list');
  renderRecentMilestones();
}

function renderDomains(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = state.domains.map(d => `
    <div class="domain-item">
      <div class="domain-icon" style="background:${d.bg}">
        <i class="ti ${d.icon}" style="color:${d.color}"></i>
      </div>
      <div class="domain-info">
        <div class="domain-name">${d.name}</div>
        <div class="domain-last">${d.last}</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${d.pct}%;background:${d.color}"></div></div>
      </div>
      <div class="domain-pct" style="color:${d.color}">${d.pct}%</div>
    </div>
  `).join('');
}

function renderRecentMilestones() {
  const el = document.getElementById('milestone-list');
  if (!el) return;
  const recent = [...state.milestones].reverse().slice(0, 3);
  if (recent.length === 0) {
    el.innerHTML = `<div class="empty-state"><i class="ti ti-stars"></i><p>No milestones yet.<br>Generate a plan and start tracking!</p></div>`;
    return;
  }
  el.innerHTML = recent.map(m => {
    const d = state.domains.find(x => x.id === m.domain.toLowerCase()) || state.domains[0];
    return `
      <div class="milestone-card">
        <div class="ms-dot" style="background:${d.color}"></div>
        <div>
          <div class="ms-title">${m.title}</div>
          <div class="ms-meta">${d.name} · ${formatDate(m.date)} · Logged by ${m.parent}</div>
          <span class="ms-badge" style="background:${d.bg};color:${d.color}">${d.name}</span>
          ${m.notes ? `<div class="ms-meta" style="margin-top:4px">${m.notes}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ===== PLAN =====
let currentPlanActivity = null;

async function generatePlan() {
  document.getElementById('plan-empty').style.display = 'none';
  document.getElementById('plan-list').innerHTML = '';
  document.getElementById('plan-loading').style.display = 'flex';

  const curriculumContext = typeof CURRICULUM !== 'undefined'
    ? CURRICULUM.getAIPromptContext(state.week, state.ageMonths)
    : `Week ${state.week}, Age ${state.ageMonths} months`;

  const parent1 = state.parents[0]?.name || 'Mama';
  const parent2 = state.parents[1]?.name || 'Papa';

  const prompt = `You are a child development expert and ${state.childName}'s personal development coach. Generate a 5-activity weekly plan using the curriculum context below.

${curriculumContext}

ABOUT ${state.childName.toUpperCase()}:
- Age: ${state.ageMonths} months | Week ${state.week} of her 52-week journey
- Location: Barcelona, Spain
- Home languages: English and Yoruba (parents: ${parent1} and ${parent2})
- School languages: Spanish and Catalan
- Already uses sign language and is developing very well
- Parents are working professionals — activities must be realistic and joyful

SCHEDULE RULES:
- 3 weekday evening activities: 10–15 mins, low setup, can be done during or after dinner/bath
- 2 weekend activities: 20–30 mins, can involve materials or outings in Barcelona

Return ONLY a valid JSON array (no markdown, no explanation) with exactly 5 objects:
[
  {
    "day": "Monday Evening" | "Tuesday Evening" | "Wednesday Evening" | "Thursday Evening" | "Friday Evening" | "Saturday" | "Sunday",
    "title": "Activity name",
    "domain": "cognitive" | "language" | "emotional" | "physical" | "creativity" | "social" | "cultural",
    "duration": "10-15 mins" or "20-30 mins",
    "emoji": "single relevant emoji",
    "description": "Clear 2-sentence description of exactly what parent and baby do together. Be specific and practical.",
    "language": "English" | "Yoruba" | "Spanish" | "Catalan" | "All",
    "tip": "One practical tip for working parents doing this after a long day",
    "platformLink": "https://... (real URL — YouTube video, free app, or resource directly relevant to this activity)",
    "platformName": "Name of the platform or resource",
    "materials": [
      {"name": "Specific material name", "link": "https://www.amazon.es/s?k=... (real search URL)", "required": true | false}
    ]
  }
]

REQUIREMENTS:
- Cover at least 5 different domains across the 5 activities
- Include at least 1 Yoruba language activity
- Include at least 1 sign language activity
- Include at least 1 physical/motor activity
- Weekend activities should be slightly richer and longer
- All activities must be appropriate for ${state.ageMonths} months
- Materials purchasable in Spain (amazon.es preferred)
- Platform links must be real, working URLs`;

  try {
    const response = await fetch('https://nessa-api-proxy.tokemi2022.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    if (data.error) throw new Error('API error: ' + JSON.stringify(data.error));
    if (!data.content) throw new Error('No content in response');
    const text = data.content.map(b => b.text || '').join('');
    const start = text.indexOf('[');
    const end = text.lastIndexOf(']');
    if (start === -1 || end === -1) throw new Error('No JSON array found in response');
    const activities = JSON.parse(text.substring(start, end + 1));
    state.plan = activities.map((a, i) => ({ ...a, id: i, status: 'pending' }));
    saveState();
    renderPlan();
  } catch (e) {
    document.getElementById('plan-loading').style.display = 'none';
    document.getElementById('plan-empty').style.display = 'flex';
    document.getElementById('plan-empty').innerHTML = `
      <i class="ti ti-alert-circle" style="color:#D85A30"></i>
      <p>Couldn't generate plan.<br><small>${e.message}</small></p>
      <button class="btn-primary" style="margin-top:16px" onclick="generatePlan()"><i class="ti ti-refresh"></i> Try again</button>
    `;
  }
}

function renderPlan() {
  document.getElementById('plan-loading').style.display = 'none';
  document.getElementById('plan-empty').style.display = 'none';

  // Week progress indicator
  const weekStart = new Date(state.startDate);
  weekStart.setDate(weekStart.getDate() + (state.week - 1) * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const daysLeft = Math.max(0, Math.ceil((weekEnd - new Date()) / (1000*60*60*24)));

  document.getElementById('plan-week-label').textContent = `Week ${state.week} · Age ${state.ageMonths} months · ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`;

  const grouped = {};
  state.plan.forEach(a => {
    if (!grouped[a.day]) grouped[a.day] = [];
    grouped[a.day].push(a);
  });

  let html = '';
  const dayOrder = ['Monday Evening','Tuesday Evening','Wednesday Evening','Thursday Evening','Friday Evening','Saturday','Sunday'];
  const days = dayOrder.filter(d => grouped[d]);

  days.forEach(day => {
    html += `<div class="plan-day"><div class="plan-day-label">${day}</div>`;
    grouped[day].forEach(act => {
      const dom = state.domains.find(d => d.id === act.domain) || state.domains[0];
      const statusIcon = act.status === 'done' ? '✅' : act.status === 'skipped' ? '⏭️' : '';
      html += `
        <div class="plan-card ${act.status}" onclick="openActivity(${act.id})">
          <div class="plan-card-top">
            <div class="plan-card-icon">${act.emoji || '⭐'}</div>
            <div class="plan-card-info">
              <div class="plan-card-title">${act.title}</div>
              <div class="plan-card-domain">${dom.name} · ${act.duration} · ${act.language}</div>
            </div>
          </div>
          <div class="plan-card-desc">${act.description}</div>
          <div class="plan-card-tags">
            <span class="tag" style="background:${dom.bg};color:${dom.color}">${dom.name}</span>
            <span class="tag" style="background:#F0F0F0;color:#555">${act.language}</span>
          </div>
          ${act.status === 'pending' ? `
          <div class="plan-card-actions" onclick="event.stopPropagation()">
            <button class="act-btn done-btn" onclick="quickMark(${act.id},'done')"><i class="ti ti-check"></i> Done</button>
            <button class="act-btn skip-btn" onclick="quickMark(${act.id},'skipped')"><i class="ti ti-x"></i> Skip</button>
            <button class="act-btn ms-btn" onclick="openMilestoneFromActivity(${act.id})"><i class="ti ti-star"></i> Milestone</button>
          </div>` : `<div class="plan-card-status">${statusIcon}</div>`}
        </div>
      `;
    });
    html += `</div>`;
  });

  document.getElementById('plan-list').innerHTML = html;
}

function openActivity(id) {
  const act = state.plan.find(a => a.id === id);
  if (!act) return;
  currentPlanActivity = act;
  const dom = state.domains.find(d => d.id === act.domain) || state.domains[0];
  document.getElementById('act-modal-title').textContent = act.title;
  let materialsHtml = '';
  if (act.materials && act.materials.length > 0) {
    materialsHtml = `
      <div class="act-detail-section">
        <h4>Materials needed</h4>
        <ul class="act-materials-list">
          ${act.materials.map(m => `<li>🛒 ${m.name} ${m.required ? '<span style="color:#D85A30;font-size:10px">Required</span>' : '<span style="color:#888;font-size:10px">Optional</span>'} <a href="${m.link}" target="_blank" rel="noopener">Buy →</a></li>`).join('')}
        </ul>
      </div>
    `;
  }
  document.getElementById('act-modal-body').innerHTML = `
    <div class="act-detail-section">
      <h4>What to do</h4>
      <p>${act.description}</p>
    </div>
    <div class="act-detail-section">
      <h4>Parent tip</h4>
      <p>${act.tip || "Keep it light and follow ${state.childName}'s lead!"}</p>
    </div>
    <div class="act-detail-section">
      <h4>Domain</h4>
      <span class="tag" style="background:${dom.bg};color:${dom.color};font-size:13px;padding:4px 12px">${dom.name}</span>
    </div>
    ${act.platformLink ? `
    <div class="act-detail-section">
      <h4>Resource</h4>
      <div class="act-link-row">
        <i class="ti ti-external-link"></i>
        <a href="${act.platformLink}" target="_blank" rel="noopener">${act.platformName || act.platformLink}</a>
      </div>
    </div>` : ''}
    ${materialsHtml}
  `;
  document.getElementById('modal-activity').style.display = 'flex';
}

function markActivity(status) {
  if (!currentPlanActivity) return;
  quickMark(currentPlanActivity.id, status);
  closeModal('modal-activity');
}

function quickMark(id, status) {
  const act = state.plan.find(a => a.id === id);
  if (!act || act.status !== 'pending') return;
  act.status = status;
  if (status === 'done') {
    state.stats.done++;
    const dom = state.domains.find(d => d.id === act.domain);
    if (dom) { dom.pct = Math.min(100, dom.pct + 14); dom.last = act.title; }
    state.stats.streak++;
  }
  saveState();
  renderPlan();
  renderHome();
}

function openMilestoneFromActivity(id) {
  const act = state.plan.find(a => a.id === id);
  if (act) {
    document.getElementById('ms-title').value = act.title;
    const domMap = { cognitive:'Cognitive', language:'Language', emotional:'Emotional', physical:'Physical', creativity:'Creativity', social:'Social', cultural:'Cultural' };
    document.getElementById('ms-domain').value = domMap[act.domain] || 'Language';
  }
  populateParentSelects();
  document.getElementById('modal-milestone').style.display = 'flex';
}

// ===== MILESTONES =====
function saveMilestone() {
  const title = document.getElementById('ms-title').value.trim();
  if (!title) { alert('Please add a milestone title'); return; }
  state.milestones.push({
    id: Date.now(),
    title,
    domain: document.getElementById('ms-domain').value,
    parent: document.getElementById('ms-parent').value,
    notes: document.getElementById('ms-notes').value.trim(),
    date: new Date().toISOString(),
  });
  state.stats.milestones++;
  saveState();
  closeModal('modal-milestone');
  document.getElementById('ms-title').value = '';
  document.getElementById('ms-notes').value = '';
  renderHome();
}

// ===== MOMENTS =====
function openAddMoment() {
  populateParentSelects();
  document.getElementById('modal-moment').style.display = 'flex';
}

function saveMoment() {
  const caption = document.getElementById('moment-caption').value.trim();
  if (!caption) { alert('Please add a caption'); return; }
  const file = document.getElementById('moment-photo').files[0];
  const save = (photoData) => {
    state.moments.push({
      id: Date.now(),
      caption,
      note: document.getElementById('moment-note').value.trim(),
      parent: document.getElementById('moment-parent').value,
      photo: photoData || null,
      date: new Date().toISOString(),
    });
    saveState();
    closeModal('modal-moment');
    document.getElementById('moment-caption').value = '';
    document.getElementById('moment-note').value = '';
    document.getElementById('moment-photo').value = '';
    renderMoments();
  };
  if (file) {
    const reader = new FileReader();
    reader.onload = e => save(e.target.result);
    reader.readAsDataURL(file);
  } else { save(null); }
}

function renderMoments() {
  const grid = document.getElementById('moments-grid');
  const empty = document.getElementById('moments-empty');
  if (state.moments.length === 0) { grid.innerHTML = ''; empty.style.display = 'flex'; return; }
  empty.style.display = 'none';
  const emojis = ['🌟','💝','🎉','✨','🌈','🦋','🌸','🎈'];
  grid.innerHTML = [...state.moments].reverse().map((m, i) => `
    <div class="moment-card">
      ${m.photo ? `<img src="${m.photo}" class="moment-img" alt="${m.caption}" />` : `<div class="moment-img">${emojis[i % emojis.length]}</div>`}
      <div class="moment-body">
        <div class="moment-caption">${m.caption}</div>
        <div class="moment-meta">${m.parent} · ${formatDate(m.date)}</div>
        ${m.note ? `<div class="moment-meta" style="margin-top:3px;font-style:italic">${m.note}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ===== PROGRESS =====
function renderProgress() {
  const el = document.getElementById('progress-domains');
  el.innerHTML = state.domains.map(d => `
    <div class="prog-domain">
      <div class="prog-domain-header">
        <div class="prog-domain-name"><i class="ti ${d.icon}" style="color:${d.color}"></i> ${d.name}</div>
        <div class="prog-domain-pct" style="color:${d.color}">${d.pct}%</div>
      </div>
      <div class="progress-bar" style="height:6px">
        <div class="progress-fill" style="width:${d.pct}%;background:${d.color}"></div>
      </div>
    </div>
  `).join('');

  const weeks = state.weekHistory.length > 0
    ? state.weekHistory.slice(-4)
    : [{ week: 'Wk1', done: 0, total: 5 },{ week: 'Wk2', done: 0, total: 5 },{ week: 'Wk3', done: 0, total: 5 },{ week: `Wk${state.week}`, done: state.stats.done, total: 5 }];
  const maxDone = Math.max(...weeks.map(w => w.total), 1);
  document.getElementById('completion-chart').innerHTML = `
    <div class="bar-chart">
      ${weeks.map(w => {
        const h = Math.max(4, Math.round((w.done / maxDone) * 70));
        return `<div class="bar-col"><div class="bar-val">${w.done}/${w.total}</div><div class="bar" style="height:${h}px;background:${w.done === w.total ? '#1D9E75' : '#534AB7'}"></div><div class="bar-label">${w.week || 'Wk'}</div></div>`;
      }).join('')}
    </div>`;

  const allMs = document.getElementById('all-milestones');
  if (state.milestones.length === 0) {
    allMs.innerHTML = `<div class="empty-state" style="padding:24px"><i class="ti ti-stars"></i><p>No milestones yet</p></div>`;
    return;
  }
  allMs.innerHTML = `<div class="milestone-list">` +
    [...state.milestones].reverse().map(m => {
      const d = state.domains.find(x => x.id === m.domain.toLowerCase()) || state.domains[0];
      return `<div class="milestone-card"><div class="ms-dot" style="background:${d.color}"></div><div><div class="ms-title">${m.title}</div><div class="ms-meta">${d.name} · ${formatDate(m.date)} · ${m.parent}</div>${m.notes ? `<div class="ms-meta" style="margin-top:4px">${m.notes}</div>` : ''}</div></div>`;
    }).join('') + `</div>`;
}

// ===== SETTINGS =====
function renderSettings() {
  // Avatar
  const avatarWrap = document.getElementById('settings-avatar-wrap');
  if (avatarWrap) avatarWrap.innerHTML = getAvatarHTML(72);

  // Child name
  const nameEl = document.getElementById('settings-child-name');
  if (nameEl) nameEl.value = state.childName;

  // Week info
  const phase = typeof CURRICULUM !== 'undefined' ? CURRICULUM.getPhaseForWeek(state.week) : { phase: 1, title: 'Explorer' };
  const weekEl = document.getElementById('settings-week');
  const phaseEl = document.getElementById('settings-phase');
  const ageEl = document.getElementById('settings-age');
  const startEl = document.getElementById('settings-start');
  if (weekEl) weekEl.textContent = `Week ${state.week} of 52`;
  if (phaseEl) phaseEl.textContent = `Phase ${phase.phase} — ${phase.title}`;
  if (ageEl) ageEl.textContent = `${state.ageMonths} months`;
  if (startEl) startEl.textContent = state.startDate ? new Date(state.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not set';

  // Parents
  const p1 = document.getElementById('settings-parent1-name');
  const p2 = document.getElementById('settings-parent2-name');
  if (p1) p1.value = state.parents[0]?.name || 'Mama';
  if (p2) p2.value = state.parents[1]?.name || 'Papa';
}

function saveChildName() {
  const val = document.getElementById('settings-child-name').value.trim();
  if (val) { state.childName = val; saveState(); renderHome(); }
}

function saveParentNames() {
  const p1 = document.getElementById('settings-parent1-name').value.trim();
  const p2 = document.getElementById('settings-parent2-name').value.trim();
  if (p1) state.parents[0].name = p1;
  if (p2) state.parents[1].name = p2;
  saveState();
  populateParentSelects();
  alert('Parent names saved!');
}

function uploadAvatar() {
  document.getElementById('avatar-file-input').click();
}

function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    state.childAvatar = e.target.result;
    saveState();
    renderSettings();
    renderHome();
  };
  reader.readAsDataURL(file);
}

function removeAvatar() {
  state.childAvatar = null;
  saveState();
  renderSettings();
  renderHome();
}

function populateParentSelects() {
  ['ms-parent','moment-parent'].forEach(id => {
    const sel = document.getElementById(id);
    if (sel) {
      sel.innerHTML = state.parents.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    }
  });
}

// ===== MODALS =====
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// ===== UTILS =====
function formatDate(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now - d) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff < 7) return `${diff} days ago`;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function resetAll() {
  if (confirm('This will delete ALL data including milestones, moments and progress. Are you sure?')) {
    localStorage.removeItem(STATE_KEY);
    location.reload();
  }
}

// ===== INIT =====
initApp();
