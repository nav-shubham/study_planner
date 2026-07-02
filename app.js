/* ============================================================
   CA Final Study Planner — app.js
   ============================================================ */

// ── SUBJECT CONFIG ────────────────────────────────────────────
const SUBJECTS = {
  FR:    { label: 'FR',    name: 'Financial Reporting',      color: '#6c63ff' },
  AFM:   { label: 'AFM',   name: 'Adv. Financial Mgmt',      color: '#22d3ee' },
  DT:    { label: 'DT',    name: 'Direct Tax',                color: '#f59e0b' },
  IDT:   { label: 'IDT',   name: 'Indirect Tax',              color: '#10b981' },
  Audit: { label: 'Audit', name: 'Audit & Assurance',         color: '#f472b6' },
};

// ── SYLLABUS (topics per subject) ──────────────────────────────
const SYLLABUS = {
  FR: [
    { id:'fr1',  text:'AS-1 Disclosure of Accounting Policies',          priority:'high' },
    { id:'fr2',  text:'AS-2 Valuation of Inventories',                   priority:'high' },
    { id:'fr3',  text:'AS-7 Construction Contracts',                     priority:'high' },
    { id:'fr4',  text:'AS-9 Revenue Recognition',                        priority:'imp'  },
    { id:'fr5',  text:'AS-10 Property, Plant & Equipment',               priority:'imp'  },
    { id:'fr6',  text:'AS-11 Effects of Changes in Foreign Exchange',    priority:'high' },
    { id:'fr7',  text:'AS-13 Accounting for Investments',                priority:'med'  },
    { id:'fr8',  text:'AS-15 Employee Benefits',                         priority:'high' },
    { id:'fr9',  text:'AS-16 Borrowing Costs',                           priority:'med'  },
    { id:'fr10', text:'AS-17 Segment Reporting',                         priority:'med'  },
    { id:'fr11', text:'AS-18 Related Party Disclosures',                 priority:'high' },
    { id:'fr12', text:'AS-19 Leases',                                    priority:'imp'  },
    { id:'fr13', text:'AS-20 Earnings Per Share',                        priority:'imp'  },
    { id:'fr14', text:'AS-22 Taxes on Income (Deferred Tax)',            priority:'imp'  },
    { id:'fr15', text:'AS-24 Discontinuing Operations',                  priority:'med'  },
    { id:'fr16', text:'AS-26 Intangible Assets',                         priority:'high' },
    { id:'fr17', text:'AS-28 Impairment of Assets',                      priority:'high' },
    { id:'fr18', text:'AS-29 Provisions, Contingent Liabilities',        priority:'imp'  },
    { id:'fr19', text:'Ind AS 1 – Presentation of Financial Statements', priority:'imp'  },
    { id:'fr20', text:'Ind AS 2 – Inventories',                          priority:'high' },
    { id:'fr21', text:'Ind AS 8 – Accounting Policies & Estimates',      priority:'med'  },
    { id:'fr22', text:'Ind AS 10 – Events After Reporting Period',        priority:'med'  },
    { id:'fr23', text:'Ind AS 12 – Income Taxes',                        priority:'imp'  },
    { id:'fr24', text:'Ind AS 16 – Property, Plant & Equipment',         priority:'imp'  },
    { id:'fr25', text:'Ind AS 19 – Employee Benefits',                   priority:'high' },
    { id:'fr26', text:'Ind AS 20 – Government Grants',                   priority:'med'  },
    { id:'fr27', text:'Ind AS 21 – Effects of Foreign Exchange',         priority:'high' },
    { id:'fr28', text:'Ind AS 23 – Borrowing Costs',                     priority:'med'  },
    { id:'fr29', text:'Ind AS 24 – Related Party Disclosures',           priority:'high' },
    { id:'fr30', text:'Ind AS 33 – Earnings Per Share',                  priority:'imp'  },
    { id:'fr31', text:'Ind AS 36 – Impairment of Assets',                priority:'imp'  },
    { id:'fr32', text:'Ind AS 37 – Provisions & Contingent Liabilities', priority:'imp'  },
    { id:'fr33', text:'Ind AS 38 – Intangible Assets',                   priority:'high' },
    { id:'fr34', text:'Ind AS 40 – Investment Property',                 priority:'high' },
    { id:'fr35', text:'Ind AS 102 – Share-Based Payment',                priority:'high' },
    { id:'fr36', text:'Ind AS 103 – Business Combinations',              priority:'imp'  },
    { id:'fr37', text:'Ind AS 105 – Non-Current Assets Held for Sale',   priority:'med'  },
    { id:'fr38', text:'Ind AS 107 – Financial Instruments (Disclosures)',priority:'high' },
    { id:'fr39', text:'Ind AS 109 – Financial Instruments (Recognition)',priority:'imp'  },
    { id:'fr40', text:'Ind AS 110 – Consolidated Financial Statements',  priority:'imp'  },
    { id:'fr41', text:'Ind AS 111 – Joint Arrangements',                 priority:'med'  },
    { id:'fr42', text:'Ind AS 113 – Fair Value Measurement',             priority:'high' },
    { id:'fr43', text:'Ind AS 115 – Revenue from Contracts',             priority:'imp'  },
    { id:'fr44', text:'Ind AS 116 – Leases',                             priority:'imp'  },
    { id:'fr45', text:'Financial Instruments – FVTOCI / FVTPL / AC',     priority:'imp'  },
  ],
  AFM: [
    { id:'afm1',  text:'Financial Policy & Corporate Strategy',           priority:'med'  },
    { id:'afm2',  text:'Risk Management – Types & Framework',             priority:'high' },
    { id:'afm3',  text:'Security Analysis – Fundamental & Technical',     priority:'high' },
    { id:'afm4',  text:'Security Valuation – Equity, Bonds, Debentures',  priority:'imp'  },
    { id:'afm5',  text:'Portfolio Management – MPT, CAL, SML',            priority:'imp'  },
    { id:'afm6',  text:'Portfolio Performance Evaluation',                priority:'high' },
    { id:'afm7',  text:'Derivatives – Forwards & Futures',                priority:'imp'  },
    { id:'afm8',  text:'Derivatives – Options (B-S Model, Greeks)',       priority:'imp'  },
    { id:'afm9',  text:'Derivatives – Swaps (Interest & Currency)',       priority:'imp'  },
    { id:'afm10', text:'Foreign Exchange Risk Management',                priority:'imp'  },
    { id:'afm11', text:'Interest Rate Risk Management',                   priority:'high' },
    { id:'afm12', text:'Merger & Acquisitions – Valuation & Synergy',    priority:'imp'  },
    { id:'afm13', text:'Corporate Restructuring & Divestiture',           priority:'high' },
    { id:'afm14', text:'Business Valuation – DCF, Relative Methods',      priority:'imp'  },
    { id:'afm15', text:'Startup Finance – VC Financing, Angel Investing', priority:'med'  },
    { id:'afm16', text:'Dividend Policy – Theories & Decisions',          priority:'med'  },
    { id:'afm17', text:'Capital Structure – Theories & Optimization',     priority:'high' },
    { id:'afm18', text:'Leveraged Buyout (LBO) Analysis',                 priority:'med'  },
    { id:'afm19', text:'Infrastructure Finance – PPP, InvIT, REITs',      priority:'med'  },
    { id:'afm20', text:'International Finance – Forex Markets & Parity',  priority:'high' },
  ],
  DT: [
    { id:'dt1',  text:'Basis of Charge & Residential Status',            priority:'imp'  },
    { id:'dt2',  text:'Income from Salaries',                            priority:'imp'  },
    { id:'dt3',  text:'Income from House Property',                      priority:'high' },
    { id:'dt4',  text:'Profits & Gains of Business / Profession',        priority:'imp'  },
    { id:'dt5',  text:'Capital Gains (Short & Long Term)',               priority:'imp'  },
    { id:'dt6',  text:'Income from Other Sources',                       priority:'high' },
    { id:'dt7',  text:'Set-Off & Carry-Forward of Losses',              priority:'imp'  },
    { id:'dt8',  text:'Deductions u/s 80C to 80U',                      priority:'imp'  },
    { id:'dt9',  text:'Agricultural Income & Partial Integration',        priority:'med'  },
    { id:'dt10', text:'Assessment of Various Entities',                  priority:'high' },
    { id:'dt11', text:'Clubbing of Income',                              priority:'med'  },
    { id:'dt12', text:'Assessment of HUF',                               priority:'high' },
    { id:'dt13', text:'Assessment of Partnership Firms & LLPs',          priority:'imp'  },
    { id:'dt14', text:'Assessment of Companies',                         priority:'imp'  },
    { id:'dt15', text:'Assessment of Co-op Societies & Trusts',          priority:'med'  },
    { id:'dt16', text:'Tax Planning, Avoidance & Evasion',               priority:'med'  },
    { id:'dt17', text:'Transfer Pricing – Domestic & International',     priority:'imp'  },
    { id:'dt18', text:'DTAA – Treaty Provisions & Relief',               priority:'imp'  },
    { id:'dt19', text:'TDS & TCS Provisions',                            priority:'imp'  },
    { id:'dt20', text:'Advance Tax & Interest Provisions',               priority:'high' },
    { id:'dt21', text:'Assessment Procedure & Appeals',                  priority:'high' },
    { id:'dt22', text:'Search, Seizure & Survey',                        priority:'med'  },
    { id:'dt23', text:'Penalties & Prosecution',                         priority:'med'  },
    { id:'dt24', text:'GAAR (General Anti-Avoidance Rules)',             priority:'high' },
    { id:'dt25', text:'International Taxation – BEPS / MLI',             priority:'high' },
  ],
  IDT: [
    { id:'idt1',  text:'GST – Constitutional Background & Overview',      priority:'imp'  },
    { id:'idt2',  text:'Levy & Collection of GST',                        priority:'imp'  },
    { id:'idt3',  text:'Concept of Supply (Sec 7-9)',                     priority:'imp'  },
    { id:'idt4',  text:'Composite & Mixed Supply',                        priority:'high' },
    { id:'idt5',  text:'Time of Supply (Sec 12-14)',                      priority:'imp'  },
    { id:'idt6',  text:'Value of Supply (Sec 15 & Rules)',                priority:'imp'  },
    { id:'idt7',  text:'Exemptions – Goods & Services',                   priority:'imp'  },
    { id:'idt8',  text:'ITC – Eligibility, Conditions & Restrictions',    priority:'imp'  },
    { id:'idt9',  text:'ITC – Reversal (Rule 42, 43)',                    priority:'high' },
    { id:'idt10', text:'Place of Supply – Goods & Services',              priority:'imp'  },
    { id:'idt11', text:'Zero-Rated Supplies & Refunds',                   priority:'imp'  },
    { id:'idt12', text:'Registration – Sec 22-30',                        priority:'high' },
    { id:'idt13', text:'Tax Invoice, Credit & Debit Notes',               priority:'med'  },
    { id:'idt14', text:'Returns Filing & GSTR Forms',                     priority:'high' },
    { id:'idt15', text:'Payment of Tax, E-Ledgers & Offset',              priority:'med'  },
    { id:'idt16', text:'Assessment & Audit under GST',                    priority:'high' },
    { id:'idt17', text:'Demand & Recovery (Sec 73-74)',                   priority:'imp'  },
    { id:'idt18', text:'Offences & Penalties',                            priority:'med'  },
    { id:'idt19', text:'Appeals & Revision under GST',                    priority:'med'  },
    { id:'idt20', text:'Advance Ruling under GST',                        priority:'high' },
    { id:'idt21', text:'Customs Duty – Basis & Valuation',                priority:'imp'  },
    { id:'idt22', text:'Customs – Types of Duty & Exemptions',            priority:'imp'  },
    { id:'idt23', text:'Customs – Import/Export Procedures',              priority:'high' },
    { id:'idt24', text:'Foreign Trade Policy (FTP) Highlights',           priority:'med'  },
    { id:'idt25', text:'Transitional Provisions under GST',               priority:'med'  },
  ],
  Audit: [
    { id:'aud1',  text:'Nature, Objectives & Scope of Audit',             priority:'imp'  },
    { id:'aud2',  text:'Auditing Standards – SA 200 to SA 299',           priority:'imp'  },
    { id:'aud3',  text:'Risk Assessment – SA 300 to SA 330',              priority:'imp'  },
    { id:'aud4',  text:'Audit Evidence – SA 500 to SA 580',               priority:'imp'  },
    { id:'aud5',  text:'Audit of Items of Financial Statements',          priority:'high' },
    { id:'aud6',  text:'Audit Sampling – SA 530',                         priority:'high' },
    { id:'aud7',  text:'Analytical Procedures – SA 520',                  priority:'med'  },
    { id:'aud8',  text:'Audit of Different Types of Entities',            priority:'high' },
    { id:'aud9',  text:'Audit of Banks & Financial Institutions',         priority:'imp'  },
    { id:'aud10', text:'Audit of Insurance Companies',                    priority:'high' },
    { id:'aud11', text:'Audit of Co-operative Societies',                 priority:'med'  },
    { id:'aud12', text:'Audit of Public Sector Undertakings',             priority:'high' },
    { id:'aud13', text:'Internal Audit – SA 610',                         priority:'high' },
    { id:'aud14', text:'Internal Financial Controls (IFC)',                priority:'imp'  },
    { id:'aud15', text:'Audit Committee & Corporate Governance',          priority:'imp'  },
    { id:'aud16', text:'Company Audit – Sec 139-148 Companies Act',       priority:'imp'  },
    { id:'aud17', text:'Divisional Accounts & Branch Audit',              priority:'med'  },
    { id:'aud18', text:'Reporting – SA 700, 701, 705, 706',               priority:'imp'  },
    { id:'aud19', text:'Modified Opinion & Key Audit Matters',            priority:'imp'  },
    { id:'aud20', text:'Auditor Responsibilities – Fraud (SA 240)',        priority:'imp'  },
    { id:'aud21', text:'Going Concern – SA 570',                           priority:'high' },
    { id:'aud22', text:'Subsequent Events – SA 560',                      priority:'med'  },
    { id:'aud23', text:'Peer Review & Quality Control – SQC 1',           priority:'high' },
    { id:'aud24', text:'Due Diligence, Investigation & Forensic Audit',   priority:'high' },
    { id:'aud25', text:'Professional Ethics & Code of Conduct (ICAI)',     priority:'imp'  },
  ],
};

// ── STATE ─────────────────────────────────────────────────────
let state = {
  sessions:   [],
  revisions:  [],
  topicsDone: {},   // { topicId: true }
  timerData:  { pomodorosToday: 0, focusMinutesToday: 0, lastDate: '' },
  examDate:   '',
};

function loadState() {
  try { state = JSON.parse(localStorage.getItem('cafinal_state')) || state; } catch(e) {}
  // ensure structures
  state.sessions   = state.sessions   || [];
  state.revisions  = state.revisions  || [];
  state.topicsDone = state.topicsDone || {};
  state.timerData  = state.timerData  || { pomodorosToday:0, focusMinutesToday:0, lastDate:'' };
  state.examDate   = state.examDate   || '';
}
function saveState() { localStorage.setItem('cafinal_state', JSON.stringify(state)); }

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupNav();
  setupTopbar();
  setupSidebar();
  setupModal();
  setupPlanner();
  setupTopics();
  setupTimer();
  setupRevision();
  setupExamCountdown();
  renderAll();
});

function renderAll() {
  renderGreeting();
  renderStats();
  renderSubjectCards();
  renderRecentSessions();
  renderRecentRevisions();
  renderPlannerGrid();
  renderAllSessions();
  renderTopics();
  renderRevisionList();
  renderAnalytics();
  updateCountdown();
  resetTimerDayIfNeeded();
}

// ── NAVIGATION ────────────────────────────────────────────────
function setupNav() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      switchView(el.dataset.view);
      closeSidebar();
    });
  });
}

function switchView(viewName) {
  const titles = {
    dashboard:'Dashboard', planner:'Study Planner', topics:'Topic Tracker',
    timer:'Focus Timer', revision:'Revision Log', analytics:'Analytics'
  };
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const v = document.getElementById('view-' + viewName);
  const n = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (v) v.classList.add('active');
  if (n) n.classList.add('active');
  document.getElementById('topbarTitle').textContent = titles[viewName] || viewName;
  if (viewName === 'analytics') renderAnalytics();
}

// ── TOPBAR ────────────────────────────────────────────────────
function setupTopbar() {
  const d = new Date();
  document.getElementById('todayDate').textContent =
    d.toLocaleDateString('en-IN', { weekday:'short', day:'2-digit', month:'short', year:'numeric' });
  document.getElementById('addSessionBtn').onclick = () => {
    document.getElementById('modalDate').value = today();
    document.getElementById('logSessionModal').classList.add('active');
  };
}

// ── SIDEBAR ───────────────────────────────────────────────────
function setupSidebar() {
  document.getElementById('menuBtn').onclick = () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
  };
  document.getElementById('sidebarClose').onclick = closeSidebar;
  document.getElementById('overlay').onclick = closeSidebar;
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ── MODAL ─────────────────────────────────────────────────────
function setupModal() {
  document.getElementById('modalClose').onclick = () =>
    document.getElementById('logSessionModal').classList.remove('active');
  document.getElementById('modalSave').onclick = () => {
    const subj = document.getElementById('modalSubject').value;
    const topic = document.getElementById('modalTopic').value || 'General Study';
    const dur   = parseFloat(document.getElementById('modalDuration').value) || 1;
    const date  = document.getElementById('modalDate').value || today();
    const type  = document.getElementById('modalType').value;
    addSession({ subject:subj, topic, duration:dur, date, type });
    document.getElementById('logSessionModal').classList.remove('active');
    document.getElementById('modalTopic').value = '';
  };
}

// ── GREETING ──────────────────────────────────────────────────
function renderGreeting() {
  const h = new Date().getHours();
  const greet = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  document.getElementById('greeting').textContent = `${greet}, CA Aspirant! 💼`;
}

// ── STATS ─────────────────────────────────────────────────────
function renderStats() {
  const totalH = state.sessions.reduce((s,x) => s + x.duration, 0);
  document.getElementById('totalHours').textContent = totalH.toFixed(1) + 'h';

  const allTopics = Object.values(SYLLABUS).flat().length;
  const done = Object.keys(state.topicsDone).filter(k => state.topicsDone[k]).length;
  document.getElementById('topicsCompleted').textContent = allTopics ? Math.round(done/allTopics*100) + '%' : '0%';

  document.getElementById('streakCount').textContent = calcStreak();
  const tod = state.sessions.filter(s => s.date === today()).length;
  document.getElementById('sessionsToday').textContent = tod;
}

function calcStreak() {
  const dates = [...new Set(state.sessions.map(s=>s.date))].sort().reverse();
  if (!dates.length) return 0;
  let streak = 0, cur = new Date();
  for (const d of dates) {
    const dt = new Date(d);
    const diff = Math.round((cur - dt) / 86400000);
    if (diff <= 1) { streak++; cur = dt; }
    else break;
  }
  return streak;
}

// ── SUBJECT CARDS ─────────────────────────────────────────────
function renderSubjectCards() {
  const cont = document.getElementById('subjectCards');
  cont.innerHTML = '';
  Object.entries(SUBJECTS).forEach(([key, sub]) => {
    const topics = SYLLABUS[key] || [];
    const done   = topics.filter(t => state.topicsDone[t.id]).length;
    const pct    = topics.length ? Math.round(done/topics.length*100) : 0;
    const hours  = state.sessions.filter(s=>s.subject===key).reduce((a,b)=>a+b.duration,0);
    const div = document.createElement('div');
    div.className = 'subject-card';
    div.style.setProperty('--color', sub.color);
    div.innerHTML = `
      <div class="sc-label">${sub.label}</div>
      <div class="sc-name">${sub.name}</div>
      <div class="sc-progress-bar"><div class="sc-progress-fill" style="width:${pct}%;background:${sub.color}"></div></div>
      <div class="sc-percent">${pct}%</div>
      <div class="sc-detail">${done}/${topics.length} topics · ${hours.toFixed(1)}h studied</div>
    `;
    div.onclick = () => { switchView('topics'); filterTopics(key); };
    cont.appendChild(div);
  });
}

// ── RECENT SESSIONS ───────────────────────────────────────────
function renderRecentSessions() {
  const cont = document.getElementById('recentSessions');
  if (!cont) return;
  const recent = [...state.sessions].reverse().slice(0, 5);
  if (!recent.length) { cont.innerHTML = emptyState('📚','No sessions logged yet'); return; }
  cont.innerHTML = recent.map(s => sessionItemHTML(s)).join('');
}

function sessionItemHTML(s) {
  const sub = SUBJECTS[s.subject];
  return `<div class="session-list-item">
    <div class="sli-subject" style="background:${hex2rgba(sub.color,.15)};color:${sub.color}">${s.subject}</div>
    <div class="sli-info">
      <div class="sli-topic">${s.topic}</div>
      <div class="sli-meta">${s.type} · ${s.duration}h · ${formatDate(s.date)}</div>
    </div>
    <button class="sli-del" onclick="deleteSession('${s.id}')">🗑</button>
  </div>`;
}

// ── RECENT REVISIONS (dashboard) ──────────────────────────────
function renderRecentRevisions() {
  const cont = document.getElementById('recentRevisions');
  if (!cont) return;
  const recent = [...state.revisions].reverse().slice(0, 5);
  if (!recent.length) { cont.innerHTML = emptyState('🔁','No revisions logged yet'); return; }
  cont.innerHTML = recent.map(r => revisionMiniHTML(r)).join('');
}

function revisionMiniHTML(r) {
  const sub = SUBJECTS[r.subject];
  const conf = { low:'🔴', medium:'🟡', high:'🟢' };
  return `<div class="session-list-item">
    <div class="sli-subject" style="background:${hex2rgba(sub.color,.15)};color:${sub.color}">${r.subject}</div>
    <div class="sli-info">
      <div class="sli-topic">${conf[r.confidence]} ${r.topic}</div>
      <div class="sli-meta">${formatDate(r.date)}${r.notes ? ' · ' + r.notes : ''}</div>
    </div>
    <button class="sli-del" onclick="deleteRevision('${r.id}')">🗑</button>
  </div>`;
}

// ── PLANNER ───────────────────────────────────────────────────
let currentWeekOffset = 0;

function setupPlanner() {
  document.getElementById('prevWeek').onclick = () => { currentWeekOffset--; renderPlannerGrid(); };
  document.getElementById('nextWeek').onclick = () => { currentWeekOffset++; renderPlannerGrid(); };
  document.getElementById('sessionDate').value = today();
  document.getElementById('addSessionSubmit').onclick = () => {
    const subj = document.getElementById('sessionSubject').value;
    const date = document.getElementById('sessionDate').value || today();
    const dur  = parseFloat(document.getElementById('sessionDuration').value) || 2;
    const top  = document.getElementById('sessionTopic').value || 'General Study';
    const type = document.getElementById('sessionType').value;
    addSession({ subject:subj, topic:top, duration:dur, date, type });
    document.getElementById('sessionTopic').value = '';
  };
}

function renderPlannerGrid() {
  const grid = document.getElementById('plannerGrid');
  if (!grid) return;
  const days = getWeekDays(currentWeekOffset);
  document.getElementById('weekLabel').textContent =
    `${formatDate(days[0])} – ${formatDate(days[6])}`;

  grid.innerHTML = '';
  days.forEach(day => {
    const isToday = day === today();
    const daySessions = state.sessions.filter(s => s.date === day);
    const d = new Date(day);
    const dayName = d.toLocaleDateString('en-IN', { weekday:'short' });
    const dayNum  = d.getDate();

    const col = document.createElement('div');
    col.className = 'day-col';
    col.innerHTML = `
      <div class="day-col-header ${isToday ? 'today-col' : ''}">
        <div>${dayName}</div>
        <div class="day-num">${dayNum}</div>
      </div>
      <div class="day-sessions" id="daySessions_${day}"></div>
    `;
    grid.appendChild(col);

    const sessEl = col.querySelector('.day-sessions');
    if (!daySessions.length) {
      sessEl.innerHTML = '<div style="font-size:11px;color:#7a7fa8;text-align:center;padding:10px">—</div>';
    } else {
      daySessions.forEach(s => {
        const sub = SUBJECTS[s.subject];
        const chip = document.createElement('div');
        chip.className = 'session-chip';
        chip.style.background = hex2rgba(sub.color, .18);
        chip.style.color = sub.color;
        chip.innerHTML = `<span class="chip-sub">${s.subject}</span> ${s.duration}h
          <span class="chip-del" onclick="deleteSession('${s.id}')">✕</span>`;
        chip.title = `${s.topic} (${s.type})`;
        sessEl.appendChild(chip);
      });
    }
  });
  renderAllSessions();
}

function addSession(data) {
  const s = { id: uid(), ...data };
  state.sessions.push(s);
  saveState();
  renderAll();
}

function deleteSession(id) {
  state.sessions = state.sessions.filter(s => s.id !== id);
  saveState();
  renderAll();
}

function renderAllSessions() {
  const cont = document.getElementById('allSessionsList');
  if (!cont) return;
  if (!state.sessions.length) { cont.innerHTML = emptyState('📅','No sessions added yet'); return; }
  const sorted = [...state.sessions].sort((a,b) => b.date.localeCompare(a.date));
  cont.innerHTML = sorted.map(s => sessionItemHTML(s)).join('');
}

// ── TOPICS ────────────────────────────────────────────────────
let currentFilter = 'all';

function setupTopics() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTopics(btn.dataset.filter);
    });
  });
}

function filterTopics(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  renderTopics();
}

function renderTopics() {
  const cont = document.getElementById('topicsList');
  if (!cont) return;
  cont.innerHTML = '';
  const subjects = currentFilter === 'all' ? Object.keys(SYLLABUS) : [currentFilter];
  subjects.forEach(key => {
    const sub = SUBJECTS[key];
    const topics = SYLLABUS[key];
    const done   = topics.filter(t => state.topicsDone[t.id]).length;

    const group = document.createElement('div');
    group.className = 'topic-group';
    const header = document.createElement('div');
    header.className = 'topic-group-header open';
    header.innerHTML = `
      <div class="tg-label" style="background:${hex2rgba(sub.color,.18)};color:${sub.color}">${sub.label}</div>
      <div class="tg-name">${sub.name}</div>
      <div class="tg-progress">${done}/${topics.length}</div>
      <div class="tg-arrow">▶</div>
    `;
    const items = document.createElement('div');
    items.className = 'topic-items';
    topics.forEach(t => {
      const row = document.createElement('div');
      row.className = 'topic-item';
      const checked = !!state.topicsDone[t.id];
      const badgeMap = { imp:'badge-imp', high:'badge-high', med:'badge-med' };
      const badgeLabel = { imp:'⭐ Important', high:'🔶 High', med:'🔹 Med' };
      row.innerHTML = `
        <input type="checkbox" class="topic-cb" ${checked ? 'checked' : ''} />
        <span class="topic-text ${checked ? 'done' : ''}">${t.text}</span>
        <span class="topic-badge ${badgeMap[t.priority]}">${badgeLabel[t.priority]}</span>
      `;
      row.querySelector('.topic-cb').addEventListener('change', (e) => {
        state.topicsDone[t.id] = e.target.checked;
        saveState();
        renderStats();
        renderSubjectCards();
        renderTopics();
        renderAnalytics();
      });
      items.appendChild(row);
    });

    header.addEventListener('click', () => {
      header.classList.toggle('open');
      items.style.display = header.classList.contains('open') ? 'block' : 'none';
    });

    group.appendChild(header);
    group.appendChild(items);
    cont.appendChild(group);
  });
}

// ── TIMER ─────────────────────────────────────────────────────
let timerInterval = null;
let timerRunning  = false;
let timerTotal    = 25 * 60;
let timerLeft     = 25 * 60;
const CIRC        = 2 * Math.PI * 96; // 603.19

function setupTimer() {
  const modes = { pomodoro: 25, short: 5, long: 15 };
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      const customInput = document.getElementById('customTimeInput');
      if (mode === 'custom') {
        customInput.style.display = 'flex';
      } else {
        customInput.style.display = 'none';
        setTimer(modes[mode]);
      }
    });
  });

  document.getElementById('setCustomTime').addEventListener('click', () => {
    const m = parseInt(document.getElementById('customMinutes').value) || 60;
    setTimer(m);
  });

  document.getElementById('timerStart').addEventListener('click', () => {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      document.getElementById('timerStart').textContent = '▶ Resume';
    } else {
      timerRunning = true;
      document.getElementById('timerStart').textContent = '⏸ Pause';
      timerInterval = setInterval(tickTimer, 1000);
    }
  });

  document.getElementById('timerReset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerLeft = timerTotal;
    document.getElementById('timerStart').textContent = '▶ Start';
    updateTimerDisplay();
  });

  updateTimerDisplay();
}

function setTimer(minutes) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTotal = minutes * 60;
  timerLeft  = timerTotal;
  document.getElementById('timerStart').textContent = '▶ Start';
  updateTimerDisplay();
}

function tickTimer() {
  if (timerLeft <= 0) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerStart').textContent = '▶ Start';
    completePomodoro();
    return;
  }
  timerLeft--;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(timerLeft / 60).toString().padStart(2,'0');
  const s = (timerLeft % 60).toString().padStart(2,'0');
  document.getElementById('timerDisplay').textContent = `${m}:${s}`;
  const progress = timerLeft / timerTotal;
  const offset   = CIRC * (1 - progress);
  document.getElementById('ringProgress').style.strokeDashoffset = offset;
}

function completePomodoro() {
  resetTimerDayIfNeeded();
  state.timerData.pomodorosToday += 1;
  state.timerData.focusMinutesToday += Math.round(timerTotal / 60);
  saveState();
  updateTimerStats();
  // Auto-log session
  const subj = document.getElementById('timerSubject').value;
  addSession({ subject:subj, topic:'Pomodoro Session', duration:+(timerTotal/3600).toFixed(2), date:today(), type:'Study' });
  alert('🎉 Session complete! Great work!');
  timerLeft = timerTotal;
  updateTimerDisplay();
}

function resetTimerDayIfNeeded() {
  if (state.timerData.lastDate !== today()) {
    state.timerData.pomodorosToday = 0;
    state.timerData.focusMinutesToday = 0;
    state.timerData.lastDate = today();
    saveState();
  }
  updateTimerStats();
}

function updateTimerStats() {
  document.getElementById('pomodorosToday').textContent = state.timerData.pomodorosToday || 0;
  const m = state.timerData.focusMinutesToday || 0;
  document.getElementById('focusTimeToday').textContent = `${Math.floor(m/60)}h ${m%60}m`;
}

// ── REVISION ──────────────────────────────────────────────────
function setupRevision() {
  document.getElementById('addRevisionBtn').onclick = () => {
    const form = document.getElementById('addRevisionForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    document.getElementById('revDate').value = today();
  };
  document.getElementById('saveRevision').onclick = () => {
    const subj  = document.getElementById('revSubject').value;
    const topic = document.getElementById('revTopic').value;
    const conf  = document.getElementById('revConfidence').value;
    const notes = document.getElementById('revNotes').value;
    const date  = document.getElementById('revDate').value || today();
    if (!topic) { alert('Please enter a topic name'); return; }
    state.revisions.push({ id:uid(), subject:subj, topic, confidence:conf, notes, date });
    saveState();
    renderRevisionList();
    renderRecentRevisions();
    document.getElementById('addRevisionForm').style.display = 'none';
    document.getElementById('revTopic').value = '';
    document.getElementById('revNotes').value = '';
  };
}

function renderRevisionList() {
  const cont = document.getElementById('revisionList');
  if (!cont) return;
  if (!state.revisions.length) { cont.innerHTML = emptyState('🔁','No revisions logged yet. Start adding!'); return; }
  const sorted = [...state.revisions].sort((a,b) => b.date.localeCompare(a.date));
  const conf = { low:'🔴', medium:'🟡', high:'🟢' };
  cont.innerHTML = sorted.map(r => {
    const sub = SUBJECTS[r.subject];
    return `<div class="revision-item">
      <div class="rev-subject" style="background:${hex2rgba(sub.color,.15)};color:${sub.color}">${r.subject}</div>
      <div style="flex:1">
        <div class="rev-topic">${conf[r.confidence]} ${r.topic}</div>
        ${r.notes ? `<div class="rev-notes">📝 ${r.notes}</div>` : ''}
      </div>
      <div class="rev-date">${formatDate(r.date)}</div>
      <button class="rev-delete" onclick="deleteRevision('${r.id}')">🗑</button>
    </div>`;
  }).join('');
}

function deleteRevision(id) {
  state.revisions = state.revisions.filter(r => r.id !== id);
  saveState();
  renderRevisionList();
  renderRecentRevisions();
}

// ── ANALYTICS ─────────────────────────────────────────────────
function renderAnalytics() {
  renderHoursChart();
  renderDonutChart();
  renderHeatmap();
  renderCompletionChart();
  renderWeakTopics();
}

function renderHoursChart() {
  const cont = document.getElementById('hoursChart');
  if (!cont) return;
  const maxH = Math.max(...Object.keys(SUBJECTS).map(k => state.sessions.filter(s=>s.subject===k).reduce((a,b)=>a+b.duration,0)), 1);
  cont.innerHTML = Object.entries(SUBJECTS).map(([key,sub]) => {
    const h = state.sessions.filter(s=>s.subject===key).reduce((a,b)=>a+b.duration,0);
    const w = Math.round(h/maxH*100);
    return `<div class="bar-row">
      <div class="bar-label" style="color:${sub.color}">${sub.label}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${sub.color}"></div></div>
      <div class="bar-value">${h.toFixed(1)}h</div>
    </div>`;
  }).join('');
}

function renderDonutChart() {
  const canvas = document.getElementById('donutCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const types = ['Study','Revision','Practice','Mock'];
  const colors = ['#6c63ff','#22d3ee','#f59e0b','#f472b6'];
  const counts = types.map(t => state.sessions.filter(s=>s.type===t).length);
  const total  = counts.reduce((a,b)=>a+b,0) || 1;
  ctx.clearRect(0,0,200,200);
  let start = -Math.PI/2;
  counts.forEach((c,i) => {
    const angle = (c/total)*2*Math.PI;
    ctx.beginPath(); ctx.moveTo(100,100);
    ctx.arc(100,100,80,start,start+angle); ctx.closePath();
    ctx.fillStyle = colors[i]; ctx.fill();
    start += angle;
  });
  // donut hole
  ctx.beginPath(); ctx.arc(100,100,45,0,2*Math.PI);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg2') || '#13162a';
  ctx.fill();

  const leg = document.getElementById('donutLegend');
  if (leg) leg.innerHTML = types.map((t,i)=>`
    <div class="legend-item">
      <div class="legend-dot" style="background:${colors[i]}"></div>
      <span>${t}: ${counts[i]}</span>
    </div>`).join('');
}

function renderHeatmap() {
  const wrap = document.getElementById('heatmapWrap');
  if (!wrap) return;
  const days = [];
  for (let i=29;i>=0;i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    days.push(dateStr(d));
  }
  const maxH = Math.max(...days.map(d => state.sessions.filter(s=>s.date===d).reduce((a,b)=>a+b.duration,0)), 1);
  wrap.innerHTML = `<div class="heatmap">${days.map(d=>{
    const h = state.sessions.filter(s=>s.date===d).reduce((a,b)=>a+b.duration,0);
    const intensity = Math.round((h/maxH)*5)/5;
    const alpha = h ? 0.2 + intensity*0.8 : 0;
    const tip = `${formatDate(d)}: ${h.toFixed(1)}h`;
    return `<div class="heatmap-day" data-tip="${tip}" style="background:rgba(108,99,255,${alpha})"></div>`;
  }).join('')}</div>`;
}

function renderCompletionChart() {
  const cont = document.getElementById('completionRateChart');
  if (!cont) return;
  cont.innerHTML = Object.entries(SUBJECTS).map(([key,sub]) => {
    const topics = SYLLABUS[key];
    const done   = topics.filter(t=>state.topicsDone[t.id]).length;
    const pct    = topics.length ? Math.round(done/topics.length*100) : 0;
    return `<div class="bar-row">
      <div class="bar-label" style="color:${sub.color}">${sub.label}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${sub.color}"></div></div>
      <div class="bar-value">${pct}%</div>
    </div>`;
  }).join('');
}

function renderWeakTopics() {
  const cont = document.getElementById('weakTopicsList');
  if (!cont) return;
  const lowConf = state.revisions.filter(r=>r.confidence==='low').slice(-8).reverse();
  if (!lowConf.length) { cont.innerHTML = emptyState('✅','No weak topics flagged! Keep it up.'); return; }
  cont.innerHTML = lowConf.map(r=>{
    const sub = SUBJECTS[r.subject];
    return `<div class="weak-topic-item">
      <div class="rev-subject" style="background:${hex2rgba(sub.color,.15)};color:${sub.color}">${r.subject}</div>
      <div style="flex:1;font-size:13px">${r.topic}</div>
      <div style="font-size:11px;color:var(--text-muted)">${formatDate(r.date)}</div>
    </div>`;
  }).join('');
}

// ── EXAM COUNTDOWN ────────────────────────────────────────────
function setupExamCountdown() {
  const input = document.getElementById('examDateInput');
  if (state.examDate) input.value = state.examDate;
  input.addEventListener('change', () => {
    state.examDate = input.value;
    saveState();
    updateCountdown();
  });
}

function updateCountdown() {
  const el = document.getElementById('daysLeft');
  if (!state.examDate) { el.textContent = '--'; return; }
  const diff = Math.ceil((new Date(state.examDate) - new Date()) / 86400000);
  el.textContent = diff > 0 ? diff : '🎯 Exam Day!';
}

// ── HELPERS ───────────────────────────────────────────────────
function today() { return dateStr(new Date()); }
function dateStr(d) { return d.toISOString().split('T')[0]; }
function uid() { return Math.random().toString(36).slice(2,10); }
function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}
function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
function emptyState(icon, msg) {
  return `<div class="empty-state"><div class="empty-state-icon">${icon}</div><p>${msg}</p></div>`;
}
function getWeekDays(offset) {
  const now = new Date();
  const mon = new Date(now);
  mon.setDate(now.getDate() - ((now.getDay()+6)%7) + offset*7);
  return Array.from({length:7}, (_,i) => {
    const d = new Date(mon); d.setDate(mon.getDate()+i);
    return dateStr(d);
  });
}
