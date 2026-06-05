/* ── 국제 버전 (EN / ZH) — RF/HIFU 직접 입력 전용 ── */

function number(v) {
  const n = Number(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function formatPrice(input) {
  const raw = input.value.replace(/[^0-9]/g, "");
  const pos = input.selectionStart;
  const oldLen = input.value.length;
  input.value = raw ? Number(raw).toLocaleString("en-US") : "";
  const newLen = input.value.length;
  try { input.setSelectionRange(pos + (newLen - oldLen), pos + (newLen - oldLen)); } catch (_) {}
}

function bindPriceInputs() {
  document.querySelectorAll("input[data-price]").forEach((el) => {
    if (el.readOnly) return;
    el.addEventListener("input", () => formatPrice(el));
  });
}

function won(v) {
  const lang = window.CURRENT_LANG || window.FIXED_LANG || "en";
  return (TRANSLATIONS[lang] || TRANSLATIONS.en).fmt_won(v);
}

function day(v) {
  const lang = window.CURRENT_LANG || window.FIXED_LANG || "en";
  const ui   = TRANSLATIONS[lang] || TRANSLATIONS.en;
  if (!Number.isFinite(v) || v <= 0) return ui.fmt_impossible;
  return ui.fmt_days(v);
}

function times(v) {
  const lang = window.CURRENT_LANG || window.FIXED_LANG || "en";
  return (TRANSLATIONS[lang] || TRANSLATIONS.en).fmt_times(v);
}

function renderResult(target, title, lines, error) {
  if (error) {
    target.innerHTML = `<div class="error-box">${error}</div>`;
    return;
  }
  const cards = lines.map((line) => `
    <div class="result-kpi${line.primary ? " is-primary" : ""}">
      <div class="kpi-label">${line.label}</div>
      <div class="kpi-value">${line.value}</div>
    </div>`).join("");
  target.innerHTML = `
    <div class="result-inner">
      <div class="result-title">${title}</div>
      <div class="result-grid">${cards}</div>
    </div>`;
}

/* ── RF/HIFU (직접 입력 전용) ── */
function calcRF() {
  const form   = document.getElementById("rf-form");
  const result = document.getElementById("rf-result");
  if (!form || !result) return;

  const packagePrice      = number(form.packagePrice.value);
  const consumableCount   = number(form.consumableCount.value);
  const shotsPerTreatment = number(form.shotsPerTreatment.value);
  const pricePerTreatment = number(form.pricePerTreatment.value);
  const treatmentsPerDay  = number(form.treatmentsPerDay.value);
  const tipShots          = number(form.tipShots.value);

  if (packagePrice <= 0) {
    renderResult(result, t("res_rf_title"), [], t("err_packagePrice")); return;
  }
  if (consumableCount <= 0 || shotsPerTreatment <= 0 || pricePerTreatment <= 0 || treatmentsPerDay <= 0 || tipShots <= 0) {
    renderResult(result, t("res_rf_title"), [], t("err_allPositive")); return;
  }

  const totalTreatments = (tipShots / shotsPerTreatment) * consumableCount;
  const totalRevenue    = totalTreatments * pricePerTreatment;
  const pureProfit      = totalRevenue - packagePrice;
  const paybackDays     = packagePrice / (pricePerTreatment * treatmentsPerDay);

  renderResult(result, t("res_rf_title"), [
    { label: t("res_paybackDays"),     value: day(paybackDays),     primary: true },
    { label: t("res_totalTreatments"), value: times(totalTreatments) },
    { label: t("res_totalRevenue"),    value: won(totalRevenue) },
    { label: t("res_pureProfit"),      value: won(pureProfit),      primary: true }
  ], "");
}

/* ── Laser ── */
function calcLaser() {
  const form   = document.getElementById("laser-form");
  const result = document.getElementById("laser-result");
  if (!form || !result) return;

  const equipmentPrice  = number(form.equipmentPrice.value);
  const sessionUnitPrice = number(form.sessionUnitPrice.value);
  const ticketingCount  = number(form.ticketingCount.value);
  const customerCount   = number(form.customerCount.value);

  if (equipmentPrice <= 0) {
    renderResult(result, t("res_laser_title"), [], t("err_equipmentPrice")); return;
  }
  if (sessionUnitPrice <= 0 || ticketingCount <= 0 || customerCount <= 0) {
    renderResult(result, t("res_laser_title"), [], t("err_laserInputs")); return;
  }

  const packageRevenue = sessionUnitPrice * ticketingCount * customerCount;
  const paybackDays    = equipmentPrice / packageRevenue;

  renderResult(result, t("res_laser_title"), [
    { label: t("res_dailyRevenue"), value: won(packageRevenue), primary: true },
    { label: t("res_paybackDays"), value: day(paybackDays),     primary: true }
  ], "");
}

/* ── Tabs ── */
function bindTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = {
    rf:     document.getElementById("panel-rf"),
    laser:  document.getElementById("panel-laser"),
    speech: document.getElementById("panel-speech")
  };
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      Object.entries(panels).forEach(([key, panel]) => {
        if (panel) panel.classList.toggle("is-active", key === target);
      });
    });
  });
}

/* ── Lang switcher (링크 방식) ── */
function bindLangLinks() {
  document.querySelectorAll(".lang-link").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.lang === (window.FIXED_LANG || window.CURRENT_LANG));
  });
}

function applyLang() {
  const lang = window.CURRENT_LANG;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = (TRANSLATIONS[lang] || TRANSLATIONS.en)[key];
    if (!val) return;
    const textNode = [...el.childNodes].find((n) => n.nodeType === Node.TEXT_NODE);
    if (textNode) {
      textNode.textContent = val + "\n            ";
    } else {
      el.textContent = val;
    }
  });
}

function bindInputs() {
  const rfForm    = document.getElementById("rf-form");
  const laserForm = document.getElementById("laser-form");
  if (rfForm)    rfForm.addEventListener("input", calcRF);
  if (laserForm) laserForm.addEventListener("input", calcLaser);
}

/* ── Init ── */
window.CURRENT_LANG = window.FIXED_LANG || "en";
applyLang();
bindTabs();
bindPriceInputs();
bindInputs();
calcRF();
calcLaser();
