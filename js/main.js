// ── Screenshot tabs ──
const SCREENS = [
  { label: 'Sign In',         src: 'assets/screenshots/01-login.png' },
  { label: 'Dashboard',       src: 'assets/screenshots/03-manager-dashboard.png' },
  { label: 'Point of Sale',   src: 'assets/screenshots/04-pos-empty.png' },
  { label: 'POS with Items',  src: 'assets/screenshots/05-pos-with-item.png' },
  { label: 'Employees',       src: 'assets/screenshots/06-employees.png' },
  { label: 'Inventory',       src: 'assets/screenshots/08-advanced-inventory.png' },
  { label: 'Returns',         src: 'assets/screenshots/09-returns.png' },
  { label: 'Reports',         src: 'assets/screenshots/10-reports.png' },
  { label: 'System Settings', src: 'assets/screenshots/12-system-settings.png' },
  { label: 'Cash Session',    src: 'assets/screenshots/15-cash-session.png' },
  { label: 'Hardware Status', src: 'assets/screenshots/16-hardware-status.png' },
]

function initScreenshotTabs() {
  const tabsEl = document.getElementById('screenshotTabs')
  const imgEl  = document.getElementById('screenshotImg')
  if (!tabsEl || !imgEl) return

  let activeIdx = 0
  let cycleTimer = null

  function switchScreen(idx) {
    if (idx === activeIdx) return
    activeIdx = idx
    tabsEl.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx))
    imgEl.classList.add('fade')
    setTimeout(() => {
      imgEl.src = SCREENS[idx].src
      imgEl.alt = SCREENS[idx].label
      imgEl.onload = () => imgEl.classList.remove('fade')
    }, 200)
  }

  SCREENS.forEach((s, i) => {
    const btn = document.createElement('button')
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '')
    btn.textContent = s.label
    btn.addEventListener('click', () => switchScreen(i))
    tabsEl.appendChild(btn)
  })

  cycleTimer = setInterval(() => switchScreen((activeIdx + 1) % SCREENS.length), 4000)
  tabsEl.addEventListener('click', () => {
    clearInterval(cycleTimer)
    cycleTimer = null
  })
}

// ── FAQ accordion ──
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
      if (!isOpen) item.classList.add('open')
    })
  })
}

// ── GitHub release version + direct download links ──
function initDownloadLinks() {
  fetch('https://api.github.com/repos/decentaro/BMS-Point-of-Sale-System/releases/latest')
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (!data?.tag_name) return
      document.getElementById('versionText').textContent = data.tag_name
      data.assets?.forEach(asset => {
        const name = asset.name.toLowerCase()
        if (name.includes('arm64') && name.endsWith('.appimage'))
          document.getElementById('dlLinuxArm').href = asset.browser_download_url
        else if (name.includes('x64') && name.endsWith('.appimage'))
          document.getElementById('dlLinuxX64').href = asset.browser_download_url
        else if (name.endsWith('.exe'))
          document.getElementById('dlWin').href = asset.browser_download_url
      })
    })
    .catch(() => {})
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons()
  initScreenshotTabs()
  initFaq()
  initDownloadLinks()
})
