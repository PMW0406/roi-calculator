const SPEECH_DATA = [
  {
    id: "v-laser",
    name: "V LASER",
    tagline: "엑셀브이급 적응증, 혁신적인 ROI의 혈관레이저",
    color: "#e8472a",
    competitors: ["Excel V", "Vbeam", "Cynergy"],
    table: {
      competitor: "Excel V",
      rows: [
        { label: "가격",   wontech: "약 6,000만원",   rival: "1.5~2억" },
        { label: "소모품", wontech: "없음",            rival: "있음" },
        { label: "A/S",   wontech: "국내 즉시 대응",  rival: "수입 지연" },
        { label: "ROI",   wontech: "매우 우수",        rival: "투자금 부담" }
      ]
    },
    speech: [
      {
        text: "V LASER는 **핸드피스 교체 없이 532nm와 1064nm 두 파장을 즉시 전환**해 사용할 수 있어, 시술 흐름을 끊지 않고 연속 진료가 가능합니다."
      },
      {
        text: "4단계 접촉식 쿨링 시스템으로 피부 타입과 병변 종류에 따라 시술자가 세밀하게 파라미터를 조절할 수 있으며, **화상 위험을 최소화**합니다."
      },
      {
        text: "**소모품이 없어 유지비가 거의 발생하지 않고**, 혈관 병변부터 리쥬브·색소·여드름까지 폭넓은 적응증을 하나의 장비로 커버합니다."
      },
      {
        closing: true,
        text: "소모품 비용 'ZERO', 넓은 적응증 커버리지 — V LASER는 ROI가 가장 빠른 혈관·색소 플랫폼입니다."
      }
    ]
  },
  {
    id: "pastelle-pro",
    name: "PASTELLE PRO",
    tagline: "기존 Q-Switch가 못 지우는 문신색상까지 커버",
    color: "#8b5cf6",
    competitors: ["Spectra XT", "Revlite SI", "Medlite C6"],
    table: {
      competitor: "기존 Q-Switched",
      rows: [
        { label: "파장",     wontech: "1064/532/595/660", rival: "1064/532" },
        { label: "문신 색상", wontech: "거의 전색상",      rival: "제한적" },
        { label: "MLA",      wontech: "가능",              rival: "제한" },
        { label: "활용성",   wontech: "매우 높음",          rival: "색소 위주" }
      ]
    },
    speech: [
      {
        text: "기존 Q-Switched 장비가 1064/532nm에 한정된 것과 달리, **PASTELLE PRO는 595nm(홍조·파란 문신)와 660nm(초록 문신·고멜라닌)까지 총 4파장을 지원**합니다."
      },
      {
        text: "덕분에 기존에 거절할 수밖에 없었던 다양한 색상의 문신도 효과적으로 치료할 수 있습니다."
      },
      {
        text: "**HEXA MLA와 멀티 PTP 모드**는 광기계적 파괴력을 극대화해 기존 Q-Switched 대비 더 적은 횟수로 뚜렷한 개선 효과를 냅니다. 스킨 리쥬브네이션, 흉터, 모공 치료까지 합리적인 가격으로 커버합니다."
      },
      {
        closing: true,
        text: "4파장 지원으로 거절하던 문신 케이스를 수용으로 전환하고, 스킨 리쥬브까지 확장해 시술 메뉴 다양화에 직결됩니다."
      }
    ]
  },
  {
    id: "picocare-majesty",
    name: "PICOCARE MAJESTY",
    tagline: "250ps 초단파 펄스로 프리미엄 피코 시장 공략",
    color: "#f59e0b",
    competitors: ["피코웨이", "PicoPlus", "디스커버리 피코"],
    table: {
      competitor: "PicoPlus",
      rows: [
        { label: "펄스폭",   wontech: "250ps",      rival: "300ps급" },
        { label: "피크파워", wontech: "2GW",         rival: "상대적 낮음" },
        { label: "유지비",   wontech: "국산 저렴",   rival: "수입 고가" },
        { label: "가격",     wontech: "경쟁력 우수", rival: "고가" }
      ]
    },
    speech: [
      {
        text: "PICOCARE MAJESTY는 **전 세계 최초로 250ps 펄스듀레이션을 구현한 피코레이저** 장비입니다. 기존 Q스위치보다 1,000배 빠르고, 멜라노좀의 SRT인 300ps보다 짧은 펄스로 충격파가 주변 조직에 전달되기 전에 **멜라노좀만 선택적으로 파괴**합니다."
      },
      {
        text: "**2GW 피크 파워**는 나노 레이저로 치료가 어려웠던 완고한 색소 병변과 복잡한 문신 색상에서도 탁월한 효과를 발휘합니다."
      },
      {
        text: "국산 장비이므로 수입 피코 대비 **유지비가 저렴하고, A/S 대응이 신속**합니다."
      },
      {
        closing: true,
        text: "펄스 속도와 피크 파워 모두에서 앞서는 유일한 국산 플래그십 — 프리미엄 시술 단가를 정당화할 기술적 근거가 있는 장비입니다."
      }
    ]
  },
  {
    id: "picoalex",
    name: "PICOALEX",
    tagline: "755nm 피코 시장 공략용 플랫폼",
    color: "#10b981",
    competitors: ["PicoSure", "Discovery Pico"],
    table: {
      competitor: "PicoSure",
      rows: [
        { label: "출력",         wontech: "310mJ",      rival: "상대적 낮음" },
        { label: "캘리브레이션", wontech: "초기 1회",   rival: "스팟 변경마다" },
        { label: "운용편의성",   wontech: "우수",        rival: "보통" },
        { label: "가격",         wontech: "경쟁력 우수", rival: "고가" }
      ]
    },
    speech: [
      {
        text: "PICOALEX는 **755nm 알렉산드라이트 파장 특유의 높은 멜라닌 선택성**을 600ps 피코초 기술과 결합한 장비입니다."
      },
      {
        text: "피코슈어(PicoSure) 대비 **최대 출력(310mJ)이 높고**, 스팟 사이즈 변경 시 매번 캘리브레이션을 진행해야 하는 번거로움 없이 **시술 시작 시 한 번만** 진행하면 되어 시술 흐름이 훨씬 효율적입니다."
      },
      {
        text: "Zoom과 MLA 핸드피스로 문신 제거·토닝에서 리쥬브네이션·흉터 치료까지 폭넓게 대응하며, 동급 수입 장비 대비 **합리적인 가격으로 도입 문턱을 낮춥니다.**"
      },
      {
        closing: true,
        text: "피코슈어 대비 출력은 높고, 운용 편의성은 우수하며, 가격은 더 낮아 동일 임상 결과를 더 빠르고 효율적으로 낼 수 있습니다."
      }
    ]
  },
  {
    id: "picoandy",
    name: "PICOANDY",
    tagline: "개원가에서 가장 무난하게 수익 내는 피코 장비",
    color: "#3b82f6",
    competitors: ["PicoPlus", "PicoLO", "Pico K"],
    table: {
      competitor: "피코플러스",
      rows: [
        { label: "출력",   wontech: "600mJ",     rival: "500mJ" },
        { label: "펄스폭", wontech: "450~550ps", rival: "유사" },
        { label: "가격",   wontech: "우수",       rival: "상대적 고가" },
        { label: "범용성", wontech: "매우 높음",  rival: "높음" }
      ]
    },
    speech: [
      {
        text: "PICOANDY는 **450ps의 피코초 펄스**로 기존 나노 레이저 대비 색소 파괴력을 높이면서도 주변 조직 손상을 최소화합니다."
      },
      {
        text: "**1064nm 기준 최대 600mJ의 출력**은 깊은 진피 색소부터 표피 잡티, 문신 제거까지 넓은 적응증을 한 번의 도입으로 커버합니다."
      },
      {
        text: "낮은 통증과 부작용 프로파일 덕분에 **환자 만족도가 높고**, 시술 패키지 구성도 유연하게 설계할 수 있어 시술 단가와 고객 재방문율 향상에 직접 기여합니다."
      },
      {
        closing: true,
        text: "기존 나노 레이저를 운용 중인 클리닉이라면, 동일 환자에게 더 강력한 피코 옵션을 추가해 단가를 높일 수 있는 가장 합리적인 업그레이드 경로입니다."
      }
    ]
  },
  {
    id: "oligio",
    name: "OLIGIO",
    tagline: "써마지급 효과 + 국내 A/S + 낮은 소모품 비용",
    color: "#f97316",
    competitors: ["써마지 FLX", "볼뉴머"],
    table: {
      competitor: "써마지 FLX",
      rows: [
        { label: "원리",   wontech: "Monopolar RF",  rival: "Monopolar RF" },
        { label: "가격",   wontech: "약 5,500만원",   rival: "1억 이상" },
        { label: "A/S",   wontech: "국내 즉시 대응",  rival: "수입 지연" },
        { label: "소모품", wontech: "저렴",            rival: "고가" }
      ]
    },
    speech: [
      {
        text: "OLIGIO는 **한국 최초 모노폴라 RF 장비**로, 진피 콜라겐에 열에너지를 직접 전달해 콜라겐 수축과 섬유아세포 자극을 통해 신생 콜라겐을 생성합니다."
      },
      {
        text: "**4중 안전장치와 GAS Cooling 시스템**이 시술 중 실시간으로 작동하여 열 손상 위험을 최소화하면서도 충분한 치료 심도를 확보합니다."
      },
      {
        text: "싱글·듀얼·오토 모드와 자유로운 쿨링 조절 기능으로 시술자의 임상 판단에 따른 맞춤 프로토콜이 가능하며, 울세라·써마지 대비 **합리적인 도입 비용과 우수한 국내 A/S 체계**를 갖추고 있습니다."
      },
      {
        closing: true,
        text: "써마지의 국산 대안으로 입증된 OLIGIO — 동일 적응증에서 더 빠른 A/S와 낮은 소모품 비용으로 운영 효율을 높이실 수 있습니다."
      }
    ]
  },
  {
    id: "oligio-xm",
    name: "OLIGIO XM",
    tagline: "RF + HIFU 복합 전층 리프팅 — 두 장비가 하나로",
    color: "#f97316",
    competitors: ["써마지 FLX", "울쎄라", "볼뉴머"],
    table: {
      competitor: "써마지 FLX",
      rows: [
        { label: "RF",      wontech: "O",    rival: "O" },
        { label: "HIFU",    wontech: "O",    rival: "X" },
        { label: "복합시술", wontech: "O",   rival: "X" },
        { label: "쿨링",    wontech: "강화",  rival: "기본" }
      ]
    },
    speech: [
      {
        text: "OLIGIO XM은 **HIFU와 RF를 하나의 플랫폼에 통합한 세계 최초 복합 리프팅 장비**입니다."
      },
      {
        text: "HIFU로 SMAS층부터 끌어올리고, RF G모드로 진피 상부를 부드럽게 가열하고, RF X모드로 심부까지 강력하게 히팅하는 **3에너지 교차 시술**이 가능합니다."
      },
      {
        text: "울세라는 HIFU만, 써마지는 RF만 제공하는 데 반해, **OLIGIO XM은 두 장비의 적응증을 단일 플랫폼으로 커버**합니다. XM Pack 소모품 패키지로 1인 1팩 프리미엄 시술 구조를 설계할 수 있습니다."
      },
      {
        closing: true,
        text: "울세라와 써마지를 따로 도입할 이유가 없습니다. OLIGIO XM 하나로 전층 리프팅 메뉴를 완성하고, XM Pack 소모품으로 안정적인 반복 매출 구조를 만드세요."
      }
    ]
  },
  {
    id: "tightan",
    name: "TIGHTAN",
    tagline: "HIFU 시장 진입용 — 최고의 투자 효율",
    color: "#22c55e",
    competitors: ["울쎄라", "울트라포머 MPT", "슈링크 유니버스"],
    table: {
      competitor: "울쎄라",
      rows: [
        { label: "가격",     wontech: "1천만원대",  rival: "1억 이상" },
        { label: "시술속도", wontech: "300샷 6분",  rival: "상대적 느림" },
        { label: "도입부담", wontech: "매우 낮음",   rival: "높음" },
        { label: "A/S",     wontech: "국내",        rival: "수입" }
      ]
    },
    speech: [
      {
        text: "TIGHTAN은 HIFU 기반 비침습 리프팅 장비로, 타겟층에만 에너지를 정밀 집속해 **주변 조직 손상 없이 즉각적인 리프팅 효과**를 제공합니다."
      },
      {
        text: "**1회 시술로 6개월~1년까지 효과가 지속**되며, 300샷을 6분 이내에 완료하는 빠른 시술 속도로 회전율 높은 시술 환경에 최적화되어 있습니다."
      },
      {
        text: "합리적인 도입 가격으로 **HIFU 시술 메뉴를 처음 추가하려는 클리닉에도 진입 장벽이 낮고**, 얼굴 부위별 카트리지 선택으로 개인화 시술이 가능합니다."
      },
      {
        closing: true,
        text: "울쎄라 대비 10분의 1 수준 가격으로 동급 HIFU 리프팅 메뉴 추가 — 적절한 시술 단가를 유지하면서 도입 비용을 최소화하세요."
      }
    ]
  },
  {
    id: "avvio",
    name: "AVVIO",
    tagline: "CO2 대비 짧은 다운타임 — 같은 효과, 더 빠른 회복",
    color: "#14b8a6",
    competitors: ["액션2", "루트로닉 eCO2", "CO2 레이저"],
    table: {
      competitor: "CO2 레이저",
      rows: [
        { label: "열손상",   wontech: "적음",  rival: "많음" },
        { label: "회복속도", wontech: "빠름",  rival: "느림" },
        { label: "PIH",     wontech: "적음",  rival: "상대적 높음" },
        { label: "A/S",     wontech: "국내",  rival: "수입" }
      ]
    },
    speech: [
      {
        text: "AVVIO는 **수분 흡수율이 CO2 레이저보다 16배 높은 Er:YAG 2940nm 레이저**로, 표피 손상과 열 확산이 최소화되어 회복 기간이 훨씬 짧습니다."
      },
      {
        text: "다운타임에 민감한 환자가 늘어나는 추세에서, AVVIO는 **CO2 대비 환자 만족도를 높이면서 동등한 치료 효과**를 제공합니다."
      },
      {
        text: "Short/Long 모드 선택으로 Ablation과 Coagulation 효과를 병변에 따라 적용하고, **Fractional 핸드피스로 적응증 범위를 더욱 확장**할 수 있습니다."
      },
      {
        closing: true,
        text: "CO2 시술을 꺼려하는 환자에게 '빠른 회복, 동등한 효과'를 내세운 새로운 옵션을 제시하세요. 거절 케이스를 수용으로 전환할 수 있습니다."
      }
    ]
  },
  {
    id: "lavieen",
    name: "LAVIEEN",
    tagline: "BB레이저로 알려진 패키지 매출 창출 장비",
    color: "#a855f7",
    competitors: ["모자이크", "Halo", "Fraxel Dual"],
    table: {
      competitor: "프락셀",
      rows: [
        { label: "다운타임",    wontech: "짧음",     rival: "상대적 김" },
        { label: "소모품",      wontech: "없음",     rival: "있음" },
        { label: "드럭딜리버리", wontech: "강점",    rival: "보통" },
        { label: "환자인지도",  wontech: "BB레이저", rival: "프락셀" }
      ]
    },
    speech: [
      {
        text: "LAVIEEN은 **1927nm Thulium 파장이 수분에 선택적으로 반응하는 BB레이저**입니다. 각질층을 보존한 채로 표피와 진피 상부에만 열에너지를 전달하기 때문에 CO2 대비 다운타임이 짧고 피부 장벽 손상이 최소화됩니다."
      },
      {
        text: "'**비비크림 필요 없는 올인원 레이저**'라는 컨셉으로 환자 인지도가 높아 상담 전환율이 좋은 장비입니다."
      },
      {
        text: "핵심 강점은 **시술 후 드럭 딜리버리 효과**입니다. MTZ 형성 후 EGF·FGF·PDRN·트라넥삼산 등 앰플을 도포하면 흡수율이 현저히 높아져 **앰플 판매로 추가 수익 구조**를 만들 수 있습니다."
      },
      {
        closing: true,
        text: "소모품 비용 없이 BB레이저 고객 유입 · 앰플 수익 · 복합 패키지 단가 극대화를 동시에 실현하세요."
      }
    ]
  },
  {
    id: "sandro-dual",
    name: "SANDRO DUAL",
    tagline: "제모·색소·혈관을 모두 커버하는 수익형 레이저 플랫폼",
    color: "#06b6d4",
    competitors: ["젠틀맥스 프로", "아포지 플러스", "클라리티2"],
    table: {
      competitor: "젠틀맥스",
      rows: [
        { label: "파장",   wontech: "755+1064 동시조사", rival: "개별조사" },
        { label: "냉각",   wontech: "파장별 독립냉각",   rival: "DCD 냉각" },
        { label: "활용도", wontech: "제모+색소+혈관",     rival: "제모 중심" },
        { label: "A/S",   wontech: "국내 즉시 대응",     rival: "수입 지연" }
      ]
    },
    speech: [
      {
        text: "SANDRO DUAL은 **755nm Alexandrite와 1064nm Nd:YAG 파장을 단일 플랫폼에 통합**한 멀티 레이저 장비입니다."
      },
      {
        text: "경쟁사 대부분의 듀얼 장비가 두 파장을 순차적으로만 사용하는 데 반해, **SANDRO DUAL은 하이브리드 모드를 통해 두 파장을 동시에 조사**할 수 있어 시술 시간을 단축하고 치료 효율을 극대화합니다."
      },
      {
        text: "각 파장별 독립 냉각 시스템(SCS)으로 출력 안정성이 뛰어나며, **제모는 물론 색소·혈관 병변과 리쥬브네이션까지 한 장비로 커버**할 수 있어 원내 장비 투자 효율이 높습니다."
      },
      {
        closing: true,
        text: "두 파장을 따로 구매하실 필요 없이, SANDRO DUAL 하나로 제모·색소·혈관 병변을 모두 커버하세요. 시술 케이스 다양화와 수익 구조 개선에 직결됩니다."
      }
    ]
  }
];

const CLOSING_SPEECH = {
  quote: "원텍 장비의 가장 큰 장점은\n단순히 효과가 아니라 **투자금 회수**입니다.\n\n수입장비 대비 초기 투자금은 낮고,\n유지비는 적으며, 시술 메뉴는 더 많이 만들 수 있습니다.\n\n결국 장비는 스펙이 아니라\n**병원 매출을 만드는 도구**인데,\n원텍 장비는 그 부분에 가장 최적화되어 있습니다.",
  points: [
    { icon: "💰", title: "낮은 초기 투자금", desc: "수입장비 대비 대폭 절감" },
    { icon: "🔧", title: "적은 유지비",      desc: "국내 A/S · 소모품 절약" },
    { icon: "📈", title: "넓은 시술 메뉴",   desc: "투자 대비 수익 극대화" }
  ]
};

/* ── 마크업 파서 (**bold** → <strong>) ── */
function parseBold(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function buildDeviceGrid() {
  const grid = document.getElementById("device-grid");
  if (!grid) return;

  grid.innerHTML = SPEECH_DATA.map((d) => `
    <button class="device-card" data-id="${d.id}" type="button" style="--card-color:${d.color}">
      <span class="device-card-name">${d.name}</span>
      <span class="device-card-tag">${d.tagline}</span>
    </button>
  `).join("") + `
    <button class="device-card device-card--closing" data-id="closing" type="button" style="--card-color:#ff5a0a">
      <span class="device-card-name">원장님 클로징</span>
      <span class="device-card-tag">마무리 세일즈 멘트</span>
    </button>
  `;

  grid.querySelectorAll(".device-card").forEach((btn) => {
    btn.addEventListener("click", () => showDetail(btn.dataset.id));
  });
}

function showDetail(id) {
  const gridView   = document.getElementById("speech-grid-view");
  const detailView = document.getElementById("speech-detail-view");
  const content    = document.getElementById("speech-detail-content");

  content.innerHTML = id === "closing" ? renderClosing() : renderDetail(SPEECH_DATA.find((x) => x.id === id));

  gridView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function renderDetail(d) {
  if (!d) return "";

  const rows = d.table.rows.map((r) => `
    <tr>
      <td class="tbl-label">${r.label}</td>
      <td class="tbl-wontech">${r.wontech}</td>
      <td class="tbl-rival">${r.rival}</td>
    </tr>
  `).join("");

  const rivals = d.competitors.map((c) => `<span class="rival-chip">${c}</span>`).join("");

  const speechBlocks = d.speech.map((block) => {
    if (block.closing) {
      return `<div class="speech-closing" style="border-color:${d.color}60; background:${d.color}12">
        <span class="speech-dot" style="background:${d.color}"></span>
        <p>${parseBold(block.text)}</p>
      </div>`;
    }
    return `<p class="speech-para">${parseBold(block.text)}</p>`;
  }).join("");

  return `
    <div class="detail-header">
      <div class="detail-name-badge" style="background:${d.color}">${d.name}</div>
      <p class="detail-tagline">${d.tagline}</p>
      <div class="rival-list">${rivals}</div>
    </div>

    <div class="detail-section">
      <p class="detail-section-label">경쟁사 비교</p>
      <div class="tbl-wrap">
        <table class="cmp-table">
          <thead>
            <tr>
              <th>항목</th>
              <th style="color:${d.color}">${d.name}</th>
              <th>${d.table.competitor}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>

    <div class="detail-section">
      <p class="detail-section-label">세일즈 멘트</p>
      <div class="speech-body">${speechBlocks}</div>
    </div>
  `;
}

function renderClosing() {
  const paragraphs = CLOSING_SPEECH.quote.split("\n").map((line) =>
    line.trim() ? `<p>${parseBold(line)}</p>` : `<br>`
  ).join("");

  const points = CLOSING_SPEECH.points.map((p) => `
    <div class="closing-point">
      <span class="closing-icon">${p.icon}</span>
      <strong>${p.title}</strong>
      <span>${p.desc}</span>
    </div>
  `).join("");

  return `
    <div class="detail-header">
      <div class="detail-name-badge" style="background:#ff5a0a">원장님 클로징</div>
      <p class="detail-tagline">마무리 세일즈 멘트</p>
    </div>
    <div class="detail-section">
      <div class="closing-quote">${paragraphs}</div>
    </div>
    <div class="detail-section">
      <div class="closing-points">${points}</div>
    </div>
  `;
}

function bindBackBtn() {
  document.getElementById("back-btn").addEventListener("click", () => {
    document.getElementById("speech-grid-view").classList.remove("hidden");
    document.getElementById("speech-detail-view").classList.add("hidden");
    window.scrollTo(0, 0);
  });
}

function initSpeech() {
  buildDeviceGrid();
  bindBackBtn();
}
