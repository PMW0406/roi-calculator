function number(v) {
  const n = Number(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function formatPrice(input) {
  const raw = input.value.replace(/[^0-9]/g, "");
  const pos = input.selectionStart;
  const oldLen = input.value.length;
  input.value = raw ? Number(raw).toLocaleString("ko-KR") : "";
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
  return `${Math.round(v).toLocaleString("ko-KR")}원`;
}

function month(v) {
  if (!Number.isFinite(v) || v <= 0) return "회수 불가";
  return `${v.toFixed(1)}개월`;
}

function day(v) {
  if (!Number.isFinite(v) || v <= 0) return "회수 불가";
  return `${v.toFixed(1)}일`;
}

function monthlyNetProfit(monthlyRevenue, monthlyCost) {
  return monthlyRevenue - monthlyCost;
}

const RF_PACKAGE_DATA = {
  "Oligio X/Kiss": [
    {
      packageName: "4,400 패키지",
      packagePrice: 44000000,
      consumableCount: 90,
      shotsPerTreatment: 600,
      tipShots: 900,
      defaultPricePerTreatment: 1200000,
      defaultTreatmentsPerDay: 3
    },
    {
      packageName: "6,600 패키지",
      packagePrice: 66000000,
      consumableCount: 170,
      shotsPerTreatment: 600,
      tipShots: 900,
      defaultPricePerTreatment: 1200000,
      defaultTreatmentsPerDay: 3
    },
    {
      packageName: "8,800 패키지",
      packagePrice: 88000000,
      consumableCount: 250,
      shotsPerTreatment: 600,
      tipShots: 900,
      defaultPricePerTreatment: 1200000,
      defaultTreatmentsPerDay: 3
    }
  ],
  Tightan: [
    {
      packageName: "550 패키지",
      packagePrice: 5500000,
      consumableCount: 5,
      shotsPerTreatment: 300,
      tipShots: 15000,
      defaultPricePerTreatment: 300000,
      defaultTreatmentsPerDay: 3
    },
    {
      packageName: "1,100 패키지",
      packagePrice: 11000000,
      consumableCount: 10,
      shotsPerTreatment: 300,
      tipShots: 15000,
      defaultPricePerTreatment: 300000,
      defaultTreatmentsPerDay: 1
    }
  ]
};

function setRFDefaults(pkg) {
  const form = document.getElementById("rf-form");

  if (pkg.isCustom) {
    form.packagePrice.readOnly = false;
    form.consumableCount.readOnly = false;
    form.shotsPerTreatment.readOnly = false;
    form.tipShots.readOnly = false;
    calcRF();
    return;
  }

  form.packagePrice.readOnly = true;
  form.consumableCount.readOnly = true;
  form.shotsPerTreatment.readOnly = true;
  form.tipShots.readOnly = true;
  form.packagePrice.value = pkg.packagePrice.toLocaleString("ko-KR");
  form.consumableCount.value = pkg.consumableCount;
  form.shotsPerTreatment.value = pkg.shotsPerTreatment;
  form.tipShots.value = pkg.tipShots;
  if (pkg.defaultPricePerTreatment) {
    form.pricePerTreatment.value = pkg.defaultPricePerTreatment.toLocaleString("ko-KR");
  }
  if (pkg.defaultTreatmentsPerDay) {
    form.treatmentsPerDay.value = pkg.defaultTreatmentsPerDay;
  }
  calcRF();
}

function populateRFPackageOptions() {
  const equipmentSelect = document.getElementById("rf-equipment");
  const packageSelect = document.getElementById("rf-package");
  const packages = RF_PACKAGE_DATA[equipmentSelect.value] || [];

  packageSelect.innerHTML = "";
  packages.forEach((pkg, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = pkg.packageName;
    packageSelect.appendChild(option);
  });

  const customOption = document.createElement("option");
  customOption.value = "custom";
  customOption.textContent = "직접 입력";
  packageSelect.appendChild(customOption);

  if (packages.length > 0) {
    setRFDefaults(packages[0]);
  }
}

function bindRFPackageSelection() {
  const equipmentSelect = document.getElementById("rf-equipment");
  const packageSelect = document.getElementById("rf-package");

  equipmentSelect.innerHTML = "";
  Object.keys(RF_PACKAGE_DATA).forEach((equipmentName) => {
    const option = document.createElement("option");
    option.value = equipmentName;
    option.textContent = equipmentName;
    equipmentSelect.appendChild(option);
  });

  equipmentSelect.addEventListener("change", populateRFPackageOptions);
  packageSelect.addEventListener("change", () => {
    const packages = RF_PACKAGE_DATA[equipmentSelect.value] || [];
    if (packageSelect.value === "custom") {
      setRFDefaults({ isCustom: true });
      return;
    }

    const selectedPackage = packages[number(packageSelect.value)] || packages[0];
    if (selectedPackage) {
      setRFDefaults(selectedPackage);
    }
  });

  populateRFPackageOptions();
}

function renderResult(target, title, lines, error) {
  if (error) {
    target.innerHTML = `<div class="error-box">${error}</div>`;
    return;
  }

  const cards = lines
    .map((line) => `
      <div class="result-kpi${line.primary ? " is-primary" : ""}">
        <div class="kpi-label">${line.label}</div>
        <div class="kpi-value">${line.value}</div>
      </div>`)
    .join("");

  target.innerHTML = `
    <div class="result-inner">
      <div class="result-title">${title}</div>
      <div class="result-grid">${cards}</div>
    </div>`;
}

function calcRF() {
  const form = document.getElementById("rf-form");
  const result = document.getElementById("rf-result");

  const packagePrice = number(form.packagePrice.value);
  const consumableCount = number(form.consumableCount.value);
  const shotsPerTreatment = number(form.shotsPerTreatment.value);
  const pricePerTreatment = number(form.pricePerTreatment.value);
  const treatmentsPerDay = number(form.treatmentsPerDay.value);
  const tipShots = number(form.tipShots.value);

  if (packagePrice <= 0) {
    renderResult(result, "RF/HIFU 결과", [], "패키지 가격이 0보다 커야 합니다.");
    return;
  }

  if (consumableCount <= 0 || shotsPerTreatment <= 0 || pricePerTreatment <= 0 || treatmentsPerDay <= 0 || tipShots <= 0) {
    renderResult(result, "RF/HIFU 결과", [], "모든 입력값은 0보다 커야 합니다.");
    return;
  }

  const totalTreatments = (tipShots / shotsPerTreatment) * consumableCount;
  const totalRevenue = totalTreatments * pricePerTreatment;
  const pureProfit = totalRevenue - packagePrice;
  const paybackDays = packagePrice / (pricePerTreatment * treatmentsPerDay);

  renderResult(
    result,
    "RF/HIFU 결과",
    [
      { label: "원금회수일", value: day(paybackDays), primary: true },
      { label: "총 시술 횟수", value: `${Math.round(totalTreatments).toLocaleString("ko-KR")}회` },
      { label: "총 매출", value: won(totalRevenue) },
      { label: "순수익", value: won(pureProfit), primary: true }
    ],
    ""
  );
}

function calcLaser() {
  const form = document.getElementById("laser-form");
  const result = document.getElementById("laser-result");

  const equipmentPrice = number(form.equipmentPrice.value);
  const sessionUnitPrice = number(form.sessionUnitPrice.value);
  const ticketingCount = number(form.ticketingCount.value);
  const customerCount = number(form.customerCount.value);

  const packagePrice = sessionUnitPrice * ticketingCount * customerCount;
  const paybackDays = equipmentPrice / packagePrice;

  if (equipmentPrice <= 0) {
    renderResult(result, "Laser 결과", [], "장비 가격이 0보다 커야 합니다.");
    return;
  }

  if (sessionUnitPrice <= 0 || ticketingCount <= 0 || customerCount <= 0) {
    renderResult(result, "Laser 결과", [], "시술단가, 티케팅수, 고객수는 0보다 커야 합니다.");
    return;
  }

  renderResult(
    result,
    "Laser 결과",
    [
      { label: "일 패키지 매출", value: won(packagePrice), primary: true },
      { label: "원금회수일", value: day(paybackDays), primary: true }
    ],
    ""
  );
}

function bindTabs() {
  const tabs = document.querySelectorAll(".tab");
  const rfPanel = document.getElementById("panel-rf");
  const laserPanel = document.getElementById("panel-laser");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      rfPanel.classList.toggle("is-active", target === "rf");
      laserPanel.classList.toggle("is-active", target === "laser");
    });
  });
}

function bindInputs() {
  document.getElementById("rf-form").addEventListener("input", calcRF);
  document.getElementById("laser-form").addEventListener("input", calcLaser);
}

bindTabs();
bindRFPackageSelection();
bindInputs();
bindPriceInputs();
calcRF();
calcLaser();
