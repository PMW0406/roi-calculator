let DELIVERY_DATA = null;
let deliveryLoaded = false;

async function loadDeliveryData() {
  if (deliveryLoaded) return;
  const loadingEl = document.getElementById("delivery-loading");
  const searchWrap = document.getElementById("delivery-search-wrap");
  try {
    const res = await fetch("delivery-data.json");
    DELIVERY_DATA = await res.json();
    deliveryLoaded = true;
    if (loadingEl) loadingEl.style.display = "none";
    if (searchWrap) searchWrap.style.display = "";
    bindDeliverySearch();
  } catch (e) {
    if (loadingEl) loadingEl.textContent = "데이터 로드 실패. 새로고침 해주세요.";
  }
}

function bindDeliverySearch() {
  const input = document.getElementById("delivery-input");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (q.length < 1) {
      renderDeliveryResults([], q);
      return;
    }
    const results = searchDelivery(q);
    renderDeliveryResults(results, q);
  });
  input.focus();
}

function searchDelivery(q) {
  if (!DELIVERY_DATA) return [];
  const lower = q.toLowerCase();
  return DELIVERY_DATA.filter(r =>
    (r.hospital && r.hospital.includes(q)) ||
    (r.serial && r.serial.toLowerCase().includes(lower)) ||
    (r.product && r.product.toLowerCase().includes(lower))
  );
}

function highlight(text, q) {
  if (!text || !q) return text || "";
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

function renderDeliveryResults(results, q) {
  const box = document.getElementById("delivery-results");
  if (!box) return;

  if (!q) { box.innerHTML = ""; return; }

  if (results.length === 0) {
    box.innerHTML = `<p class="delivery-empty">검색 결과가 없습니다.</p>`;
    return;
  }

  const count = results.length > 200 ? results.slice(0, 200) : results;
  const more = results.length > 200 ? `<p class="delivery-more">총 ${results.length.toLocaleString()}건 중 200건 표시</p>` : `<p class="delivery-more">총 ${results.length.toLocaleString()}건</p>`;

  const rows = count.map(r => `
    <tr>
      <td>${highlight(r.date, q)}</td>
      <td><span class="d-badge d-badge--${r.status === '납품' ? 'ok' : r.status === '교체' ? 'swap' : 'etc'}">${r.status || r.type}</span></td>
      <td><strong>${highlight(r.product, q)}</strong></td>
      <td>${highlight(r.hospital, q)}</td>
      <td class="d-serial">${highlight(r.serial, q)}</td>
      <td>${r.distributor || ""}</td>
      <td>${r.note || ""}</td>
    </tr>
  `).join("");

  box.innerHTML = `
    ${more}
    <div class="d-table-wrap">
      <table class="d-table">
        <thead>
          <tr>
            <th>날짜</th><th>상태</th><th>제품</th><th>납품처</th><th>시리얼</th><th>도매처</th><th>비고</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function initDelivery() {
  const searchWrap = document.getElementById("delivery-search-wrap");
  if (searchWrap) searchWrap.style.display = "none";

  // 납품조회 탭 클릭 시 데이터 로드
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    if (tab.dataset.tab === "delivery") {
      tab.addEventListener("click", loadDeliveryData, { once: true });
    }
  });
}
