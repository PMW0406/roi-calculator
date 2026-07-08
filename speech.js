const SPEECH_DATA = [
  {
    id: "v-laser",
    name: "V LASER",
    color: "#e8472a",
    tagline: {
      ko: "엑셀브이급 적응증, 혁신적인 ROI의 혈관레이저",
      en: "Excel V-level indications with the fastest ROI in vascular laser",
      zh: "媲美Excel V适应症，ROI回报最优的血管激光"
    },
    competitors: {
      ko: ["Excel V", "Vbeam", "Cynergy"],
      en: ["Excel V", "Vbeam", "Cynergy"],
      zh: ["Excel V", "Vbeam", "Cynergy"]
    },
    table: {
      competitor: { ko: "Excel V", en: "Excel V", zh: "Excel V" },
      rows: [
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "약 6,000만원",  en: "~₩60M",          zh: "约6,000万韩元<span class='tbl-note'>引进负担↓</span>" }, rival: { ko: "1.5~2억",   en: "₩150M~200M",  zh: "1.5~2亿韩元<span class='tbl-note'>高价投资</span>" } },
        { label: { ko: "소모품", en: "Consumables", zh: "耗材"   }, wontech: { ko: "없음",          en: "None",           zh: "无<span class='tbl-note'>节省运营成本</span>"           }, rival: { ko: "있음",     en: "Required",    zh: "有<span class='tbl-note'>消耗性成本</span>"           } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응", en: "Immediate (KR)", zh: "国内即时响应<span class='tbl-note'>停工期最短</span>"  }, rival: { ko: "수입 지연", en: "Import delay", zh: "进口延迟"     } },
        { label: { ko: "ROI",   en: "ROI",          zh: "ROI"    }, wontech: { ko: "매우 우수",      en: "Excellent",      zh: "非常优秀<span class='tbl-note'>回收周期缩短</span>"      }, rival: { ko: "투자금 부담", en: "High cost burden", zh: "投资负担重" } }
      ]
    },
    speech: {
      ko: [
        { text: "V LASER는 **핸드피스 교체 없이 532nm와 1064nm 두 파장을 즉시 전환**해 사용할 수 있어, 시술 흐름을 끊지 않고 연속 진료가 가능합니다." },
        { text: "4단계 접촉식 쿨링 시스템으로 피부 타입과 병변 종류에 따라 시술자가 세밀하게 파라미터를 조절할 수 있으며, **화상 위험을 최소화**합니다." },
        { text: "**소모품이 없어 유지비가 거의 발생하지 않고**, 혈관 병변부터 리쥬브·색소·여드름까지 폭넓은 적응증을 하나의 장비로 커버합니다." },
        { closing: true, text: "소모품 비용 '0', 넓은 적응증 — Excel V 효과를 6,000만원으로. ROI가 가장 빠른 혈관·색소 플랫폼입니다." }
      ],
      en: [
        { text: "V LASER allows **instant switching between 532nm and 1064nm wavelengths without changing handpieces**, enabling seamless, uninterrupted patient flow." },
        { text: "Its 4-level contact cooling system enables precise parameter control by skin type and lesion, **minimizing the risk of thermal injury**." },
        { text: "**With zero consumables**, maintenance costs are virtually eliminated, covering vascular lesions, rejuvenation, pigmentation, and acne with a single platform." },
        { closing: true, text: "Zero consumable costs, broad indications — Excel V-level results for ₩60M. The fastest ROI among vascular and pigmentation platforms." }
      ],
      zh: [
        { closing: true, text: "Excel V是1.5~2亿韩元级的高价设备，而V-LASER以约6,000万韩元提供同级效果——**引进负担更低，回收周期更快**。" },
        { text: "以耗材成本'零'降低运营费用，**国内即时售后将停工期降至最短**的血管·色素平台。" }
      ]
    }
  },
  {
    id: "pastelle-pro",
    name: "PASTELLE PRO",
    color: "#8b5cf6",
    tagline: {
      ko: "기존 Q-Switch가 못 지우는 문신색상까지 커버",
      en: "Covers tattoo colors that conventional Q-Switch cannot remove",
      zh: "覆盖传统Q开关无法去除文身颜色的高功率Q开关激光"
    },
    competitors: {
      ko: ["Spectra XT", "Revlite SI", "Medlite C6"],
      en: ["Spectra XT", "Revlite SI", "Medlite C6"],
      zh: ["Spectra XT", "Revlite SI", "Medlite C6"]
    },
    table: {
      competitor: { ko: "기존 Q-Switched", en: "Q-Switched", zh: "传统Q开关" },
      rows: [
        { label: { ko: "파장",     en: "Wavelength",  zh: "波长"   }, wontech: { ko: "1064/532/595/660", en: "1064/532/595/660", zh: "1064/532/595/660<span class='tbl-note'>4波长多功能</span>" }, rival: { ko: "1064/532", en: "1064/532",  zh: "1064/532<span class='tbl-note'>仅限2波长</span>" } },
        { label: { ko: "문신 색상", en: "Tattoo color", zh: "文身颜色" }, wontech: { ko: "거의 전색상",   en: "Nearly all colors", zh: "几乎全色系<span class='tbl-note'>彩色文身也可</span>"     }, rival: { ko: "제한적",  en: "Limited",   zh: "有限<span class='tbl-note'>以黑·蓝为主</span>"         } },
        { label: { ko: "MLA",      en: "MLA",          zh: "MLA"    }, wontech: { ko: "가능",           en: "Available",         zh: "支持<span class='tbl-note'>均匀发射</span>"           }, rival: { ko: "제한",    en: "Limited",   zh: "受限<span class='tbl-note'>选配·不支持</span>"         } },
        { label: { ko: "활용성",   en: "Versatility",  zh: "适用性" }, wontech: { ko: "매우 높음",       en: "Very high",         zh: "非常高<span class='tbl-note'>多重适应症</span>"         }, rival: { ko: "색소 위주", en: "Pigment-focused", zh: "以色素为主<span class='tbl-note'>单一适应症</span>" } }
      ]
    },
    speech: {
      ko: [
        { text: "기존 Q-Switched 장비가 1064/532nm에 한정된 것과 달리, **PASTELLE PRO는 595nm(홍조·파란 문신)와 660nm(초록 문신·고멜라닌)까지 총 4파장을 지원**합니다." },
        { text: "덕분에 기존에 거절할 수밖에 없었던 다양한 색상의 문신도 효과적으로 치료할 수 있습니다." },
        { text: "**HEXA MLA와 멀티 PTP 모드**는 광기계적 파괴력을 극대화해 기존 Q-Switched 대비 더 적은 횟수로 뚜렷한 개선 효과를 냅니다." },
        { closing: true, text: "4가지 파장으로 모든 문신 색상까지 전부 수용하세요. 시술 메뉴 확장과 수익성이 동시에 해결됩니다." }
      ],
      en: [
        { text: "Unlike conventional Q-Switched devices limited to 1064/532nm, **PASTELLE PRO supports 4 wavelengths including 595nm (redness/blue tattoos) and 660nm (green tattoos/high melanin)**." },
        { text: "This allows effective treatment of multi-colored tattoos that were previously impossible to address." },
        { text: "**HEXA MLA and multi-PTP mode** maximize photomechanical disruption, delivering visible results in fewer sessions compared to conventional Q-Switched lasers." },
        { closing: true, text: "Accept every tattoo color with 4 wavelengths. Expand your treatment menu and improve profitability at the same time." }
      ],
      zh: [
        { closing: true, text: "传统Q开关设备停留在1064·532nm双波长，无法处理彩色文身——PASTELLE PRO再加595·660nm，以**4波长覆盖几乎所有文身颜色**。" },
        { text: "MLA手具实现均匀发射与更短停工期——**同步实现诊疗菜单扩展与盈利**的高端Q开关平台。" }
      ]
    }
  },
  {
    id: "picocare-majesty",
    name: "PICOCARE MAJESTY",
    color: "#f59e0b",
    tagline: {
      ko: "250ps 초단파 펄스로 프리미엄 피코 시장 공략",
      en: "250ps ultra-short pulse for premium pico laser market",
      zh: "以250ps超短脉冲攻占高端皮秒市场的国产旗舰"
    },
    competitors: {
      ko: ["피코웨이", "PicoPlus", "디스커버리 피코"],
      en: ["PicoWay", "PicoPlus", "Discovery Pico"],
      zh: ["PicoWay", "PicoPlus", "Discovery Pico"]
    },
    table: {
      competitor: { ko: "PicoPlus", en: "PicoPlus", zh: "PicoPlus" },
      rows: [
        { label: { ko: "펄스폭",   en: "Pulse width", zh: "脉宽"   }, wontech: { ko: "250ps",      en: "250ps",         zh: "250ps<span class='tbl-note'>世界最短级别</span>"    }, rival: { ko: "300ps급",     en: "~300ps",       zh: "约300ps<span class='tbl-note'>相对较长</span>"   } },
        { label: { ko: "피크파워", en: "Peak power",   zh: "峰值功率" }, wontech: { ko: "2GW",        en: "2GW",           zh: "2GW<span class='tbl-note'>强力粉碎色素</span>"      }, rival: { ko: "상대적 낮음", en: "Relatively low", zh: "相对较低<span class='tbl-note'>输出受限</span>"  } },
        { label: { ko: "유지비",   en: "Maintenance",  zh: "维护成本" }, wontech: { ko: "국산 저렴",  en: "Low (domestic)", zh: "国产低价<span class='tbl-note'>节省运营成本</span>" }, rival: { ko: "수입 고가",   en: "High (import)", zh: "进口高价<span class='tbl-note'>负担↑</span>"  } },
        { label: { ko: "가격",     en: "Price",        zh: "价格"   }, wontech: { ko: "경쟁력 우수", en: "Competitive",    zh: "价格有优势<span class='tbl-note'>ROI↑</span>" }, rival: { ko: "고가",       en: "Premium",      zh: "高价<span class='tbl-note'>投资负担</span>"       } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOCARE MAJESTY는 **전 세계 최초로 250ps 펄스듀레이션을 구현한 피코레이저** 장비입니다. 기존 Q스위치보다 1,000배 빠르고, 멜라노좀의 SRT인 300ps보다 짧은 펄스로 **멜라노좀만 선택적으로 파괴**합니다." },
        { text: "**2GW 피크 파워**는 나노 레이저로 치료가 어려웠던 완고한 색소 병변과 복잡한 문신 색상에서도 탁월한 효과를 발휘합니다." },
        { text: "국산 장비이므로 수입 피코 대비 **유지비가 저렴하고, A/S 대응이 신속**합니다." },
        { closing: true, text: "세계 최초 250ps · 2GW — 피코플러스보다 빠르고 강하면서 가격은 더 낮습니다. 프리미엄 시술 단가를 기술로 정당화하는 유일한 국산 플래그십입니다." }
      ],
      en: [
        { text: "PICOCARE MAJESTY is the **world's first pico laser with a 250ps pulse duration** — 1,000x faster than Q-switched lasers, **selectively destroying melanosomes** before thermal energy spreads to surrounding tissue." },
        { text: "Its **2GW peak power** delivers outstanding results on stubborn pigmentation and complex multi-colored tattoos that were challenging to treat with nano lasers." },
        { text: "As a domestically manufactured device, it offers **significantly lower maintenance costs and faster after-sales support** compared to imported pico lasers." },
        { closing: true, text: "World's first 250ps · 2GW — faster and more powerful than PicoPlus at a lower price. The only domestic flagship that technically justifies premium procedure pricing." }
      ],
      zh: [
        { closing: true, text: "全球首款250ps · 2GW——**比PicoPlus更快、更强，价格更低**。用技术为高端治疗定价正名。" },
        { text: "作为国产旗舰，是**维护成本与售后负担都更低的唯一皮秒平台**——从引进到运营、回收都是最快的选择。" }
      ]
    }
  },
  {
    id: "picoalex",
    name: "PICOALEX",
    color: "#10b981",
    tagline: {
      ko: "755nm 피코 시장 공략용 플랫폼",
      en: "755nm pico platform targeting the Alexandrite market",
      zh: "精准锁定755nm皮秒亚历山大市场的高功率·高效率平台"
    },
    competitors: {
      ko: ["PicoSure", "Discovery Pico"],
      en: ["PicoSure", "Discovery Pico"],
      zh: ["PicoSure", "Discovery Pico"]
    },
    table: {
      competitor: { ko: "PicoSure", en: "PicoSure", zh: "PicoSure" },
      rows: [
        { label: { ko: "출력",         en: "Max output",     zh: "输出"      }, wontech: { ko: "310mJ",      en: "310mJ",          zh: "310mJ<span class='tbl-note'>高功率稳定发射</span>"    }, rival: { ko: "상대적 낮음", en: "Relatively low",   zh: "相对较低<span class='tbl-note'>输出受限</span>"  } },
        { label: { ko: "캘리브레이션", en: "Calibration",    zh: "校准"      }, wontech: { ko: "초기 1회",   en: "Once at start",  zh: "初始1次<span class='tbl-note'>运营负担↓</span>"  }, rival: { ko: "스팟 변경마다", en: "Per spot change", zh: "每次换光斑<span class='tbl-note'>运营负担↑</span>" } },
        { label: { ko: "운용편의성",   en: "Ease of use",    zh: "操作便利性" }, wontech: { ko: "우수",       en: "Excellent",      zh: "优秀<span class='tbl-note'>直观UI</span>"      }, rival: { ko: "보통",       en: "Average",          zh: "一般<span class='tbl-note'>设置复杂</span>"      } },
        { label: { ko: "가격",         en: "Price",          zh: "价格"      }, wontech: { ko: "경쟁력 우수", en: "Competitive",    zh: "价格有优势<span class='tbl-note'>ROI↑</span>" }, rival: { ko: "고가",       en: "Premium",          zh: "高价<span class='tbl-note'>投资负担</span>"      } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOALEX는 **755nm 알렉산드라이트 파장 특유의 높은 멜라닌 선택성**을 600ps 피코초 기술과 결합한 장비입니다." },
        { text: "피코슈어(PicoSure) 대비 **최대 출력(310mJ)이 높고**, 스팟 사이즈 변경 시 매번 캘리브레이션을 진행해야 하는 번거로움 없이 **시술 시작 시 한 번만** 진행하면 되어 시술 흐름이 훨씬 효율적입니다." },
        { text: "Zoom과 MLA 핸드피스로 문신 제거·토닝에서 리쥬브네이션·흉터 치료까지 폭넓게 대응하며, 동급 수입 장비 대비 **합리적인 가격으로 도입 문턱을 낮춥니다.**" },
        { closing: true, text: "피코슈어 대비 출력은 높고, 캘리브레이션은 1회로 끝나고, 가격은 낮습니다. 동일 결과를 더 빠르고 효율적으로 낼 수 있습니다." }
      ],
      en: [
        { text: "PICOALEX combines the **high melanin selectivity of the 755nm Alexandrite wavelength** with 600ps pico technology for superior treatment outcomes." },
        { text: "Compared to PicoSure, PICOALEX offers **higher maximum output (310mJ)** and requires calibration **only once at the start of treatment** — not every time you change spot size — delivering a smoother workflow." },
        { text: "With Zoom and MLA handpieces, it covers tattoo removal, toning, rejuvenation, and scar treatment, while **offering a more affordable entry point** than equivalent imported devices." },
        { closing: true, text: "Higher output than PicoSure, one-time calibration, and a lower price. Achieve the same results faster and more efficiently." }
      ],
      zh: [
        { closing: true, text: "相比PicoSure，**输出更高、校准一次即可、价格更低**——能更快更高效实现相同效果的755nm皮秒平台。" },
        { text: "在减少院长运营时间与运营成本的同时，**皮秒菜单的盈利能力原封不动**地保留。" }
      ]
    }
  },
  {
    id: "picoandy",
    name: "PICOANDY",
    color: "#3b82f6",
    tagline: {
      ko: "개원가에서 가장 무난하게 수익 내는 피코 장비",
      en: "The most reliable pico laser for steady clinic revenue",
      zh: "开业诊所最稳健盈利的通用型皮秒激光"
    },
    competitors: {
      ko: ["PicoPlus", "PicoLO", "Enlighten"],
      en: ["PicoPlus", "PicoLO", "Enlighten"],
      zh: ["PicoPlus", "PicoLO", "Enlighten"]
    },
    table: {
      competitor: { ko: "피코플러스", en: "PicoPlus", zh: "PicoPlus" },
      rows: [
        { label: { ko: "출력",   en: "Output",      zh: "输出"   }, wontech: { ko: "600mJ",     en: "600mJ",          zh: "600mJ<span class='tbl-note'>高输出余量</span>"   }, rival: { ko: "500mJ",       en: "500mJ",          zh: "500mJ<span class='tbl-note'>基本水平</span>"    } },
        { label: { ko: "펄스폭", en: "Pulse width",  zh: "脉宽"   }, wontech: { ko: "450~550ps", en: "450~550ps",      zh: "450~550ps<span class='tbl-note'>稳定运用</span>" }, rival: { ko: "유사",       en: "Similar",        zh: "相近<span class='tbl-note'>相近</span>"     } },
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "우수",       en: "Competitive",    zh: "有优势<span class='tbl-note'>引进负担↓</span>"  }, rival: { ko: "상대적 고가", en: "Relatively high", zh: "相对较高<span class='tbl-note'>投资负担↑</span>" } },
        { label: { ko: "범용성", en: "Versatility", zh: "适用性" }, wontech: { ko: "매우 높음",  en: "Very high",      zh: "非常高<span class='tbl-note'>多重适应症</span>"  }, rival: { ko: "높음",       en: "High",           zh: "高<span class='tbl-note'>基本范围</span>"       } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOANDY는 **450ps의 피코초 펄스**로 기존 나노 레이저 대비 색소 파괴력을 높이면서도 주변 조직 손상을 최소화합니다." },
        { text: "**1064nm 기준 최대 600mJ의 출력**은 깊은 진피 색소부터 표피 잡티, 문신 제거까지 넓은 적응증을 한 번의 도입으로 커버합니다." },
        { text: "낮은 통증과 부작용 프로파일 덕분에 **환자 만족도가 높고**, 유연한 패키지 구성으로 시술 단가와 재방문율 향상에 직접 기여합니다." },
        { closing: true, text: "나노 레이저를 쓰고 계신다면, 동일 환자에게 피코 옵션을 추가해 시술 단가를 높일 수 있는 가장 합리적인 업그레이드입니다." }
      ],
      en: [
        { text: "PICOANDY's **450ps pico pulses** deliver superior pigment disruption compared to nano lasers while minimizing damage to surrounding tissue." },
        { text: "With **up to 600mJ output at 1064nm**, it covers deep dermal pigmentation, epidermal spots, and tattoo removal — all with a single device investment." },
        { text: "Its low pain and side-effect profile results in **high patient satisfaction**, while flexible package design directly boosts treatment pricing and return visits." },
        { closing: true, text: "If you're using a nano laser, PICOANDY is the most sensible upgrade — add a pico option for the same patients and increase your treatment pricing." }
      ],
      zh: [
        { closing: true, text: "如果您正在使用纳秒激光，为同一患者增加皮秒选项、**将治疗单价提升一个档次**，这是最合理的升级。" },
        { text: "输出·脉宽·价格在通用皮秒级别中**盈利与稳定平衡最佳**的开业诊所型平台。" }
      ]
    }
  },
  {
    id: "oligio",
    name: "OLIGIO",
    color: "#f97316",
    tagline: {
      ko: "써마지급 효과 + 국내 A/S + 낮은 소모품 비용",
      en: "Thermage-level results · domestic A/S · lower consumable costs",
      zh: "以五分之一引进成本实现热玛吉级单极射频的国产RF提升"
    },
    competitors: {
      ko: ["써마지 FLX", "볼뉴머"],
      en: ["Thermage FLX", "Volnewmer"],
      zh: ["热玛吉 FLX", "Volnewmer"]
    },
    table: {
      competitor: { ko: "써마지 FLX", en: "Thermage FLX", zh: "热玛吉 FLX" },
      rows: [
        { label: { ko: "원리",   en: "Principle",   zh: "原理"   }, wontech: { ko: "Monopolar RF",  en: "Monopolar RF",    zh: "单极射频<span class='tbl-note'>400W同等输出</span>" }, rival: { ko: "Monopolar RF",  en: "Monopolar RF", zh: "单极射频<span class='tbl-note'>原理相同</span>" } },
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "약 5,500만원",  en: "~₩55M",          zh: "约5,500万韩元<span class='tbl-note'>引进负担↓</span>" }, rival: { ko: "1.5억 이상",   en: "₩150M+",       zh: "1.5亿韩元以上<span class='tbl-note'>高价投资</span>" } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응", en: "Immediate (KR)", zh: "国内即时响应<span class='tbl-note'>停工期最短</span>" }, rival: { ko: "수입 지연",    en: "Import delay", zh: "进口延迟" } },
        { label: { ko: "소모품", en: "Consumables", zh: "耗材"   }, wontech: { ko: "저렴",           en: "Affordable",     zh: "低价<span class='tbl-note'>节省运营成本</span>" }, rival: { ko: "고가",         en: "Expensive",    zh: "高价<span class='tbl-note'>运营负担↑</span>" } }
      ]
    },
    speech: {
      ko: [
        { text: "OLIGIO는 **한국 최초 모노폴라 RF 장비**로, 진피 콜라겐에 열에너지를 직접 전달해 콜라겐 수축과 섬유아세포 자극을 통해 신생 콜라겐을 생성합니다." },
        { text: "**4중 안전장치와 GAS Cooling 시스템**이 시술 중 실시간으로 작동하여 열 손상 위험을 최소화하면서도 충분한 치료 심도를 확보합니다." },
        { text: "싱글·듀얼·오토 모드와 자유로운 쿨링 조절 기능으로 시술자의 임상 판단에 따른 맞춤 프로토콜이 가능하며, 울세라·써마지 대비 **합리적인 도입 비용과 우수한 국내 A/S 체계**를 갖추고 있습니다." },
        { closing: true, text: "써마지와 동일한 모노폴라 RF, 동등한 최대출력 400W — 도입 비용은 5분의 1 이하에 국내 즉시 A/S까지. 효과는 같고 운영 효율은 훨씬 높습니다." }
      ],
      en: [
        { text: "OLIGIO is **Korea's first monopolar RF device**, delivering thermal energy directly to dermal collagen to stimulate collagen contraction and fibroblast activation for new collagen formation." },
        { text: "Its **4-layer safety system and GAS Cooling** operate in real time during treatment, minimizing thermal injury risk while ensuring adequate treatment depth." },
        { text: "Single, dual, and auto modes with flexible cooling control allow clinician-customized protocols, all while offering **significantly lower acquisition costs and superior domestic A/S** versus Ulthera or Thermage." },
        { closing: true, text: "Same monopolar RF as Thermage, equivalent max output of 400W — at less than 1/5 the cost with immediate domestic A/S. Same results, far better operational efficiency." }
      ],
      zh: [
        { closing: true, text: "热玛吉FLX是1.5亿韩元以上的高价设备，而OLIGIO以约5,500万韩元提供相同的单极射频·400W同等输出——**引进成本不足1/5，效果不变**。" },
        { text: "降低耗材负担，国内即时售后将停工期降至最短——**开业诊所引进效率最佳**的单极射频提升平台。" }
      ]
    }
  },
  {
    id: "oligio-xm",
    name: "OLIGIO XM",
    color: "#f97316",
    tagline: {
      ko: "RF + HIFU 복합 전층 리프팅 — 두 장비가 하나로",
      en: "RF + HIFU combined full-layer lifting — two devices in one",
      zh: "将Ulthera·热玛吉整合于一台的RF + HIFU复合全层提升平台"
    },
    competitors: {
      ko: ["써마지 FLX", "울쎄라", "볼뉴머"],
      en: ["Thermage FLX", "Ulthera", "Volnewmer"],
      zh: ["热玛吉 FLX", "Ulthera", "Volnewmer"]
    },
    table: {
      competitor: { ko: "써마지 FLX", en: "Thermage FLX", zh: "热玛吉 FLX" },
      rows: [
        { label: { ko: "RF",      en: "RF",        zh: "RF"   }, wontech: { ko: "O", en: "✓", zh: "支持<span class='tbl-note'>搭载单极射频</span>" }, rival: { ko: "O", en: "✓", zh: "支持<span class='tbl-note'>仅RF</span>" } },
        { label: { ko: "HIFU",    en: "HIFU",      zh: "HIFU" }, wontech: { ko: "O", en: "✓", zh: "支持<span class='tbl-note'>全层提升</span>" }, rival: { ko: "X", en: "✗", zh: "不支持<span class='tbl-note'>需另购设备</span>" } },
        { label: { ko: "복합시술", en: "Combo tx", zh: "复合治疗" }, wontech: { ko: "O", en: "✓", zh: "RF+HIFU同时<span class='tbl-note'>一次完成</span>" }, rival: { ko: "X", en: "✗", zh: "不支持<span class='tbl-note'>设备分离运用</span>" } },
        { label: { ko: "쿨링",    en: "Cooling",   zh: "冷却"   }, wontech: { ko: "강화", en: "Enhanced", zh: "强化冷却<span class='tbl-note'>治疗稳定性↑</span>" }, rival: { ko: "기본", en: "Basic", zh: "基本冷却<span class='tbl-note'>输出受限</span>" } }
      ]
    },
    speech: {
      ko: [
        { text: "OLIGIO XM은 **HIFU와 RF를 하나의 플랫폼에 통합한 세계 최초 복합 리프팅 장비**입니다." },
        { text: "HIFU로 SMAS층부터 끌어올리고, RF G모드로 진피 상부를 부드럽게 가열하고, RF X모드로 심부까지 강력하게 히팅하는 **3에너지 교차 시술**이 가능합니다." },
        { text: "울세라는 HIFU만, 써마지는 RF만 제공하는 데 반해, **OLIGIO XM은 두 장비의 적응증을 단일 플랫폼으로 커버**합니다. XM Pack 소모품 패키지로 1인 1팩 프리미엄 시술 구조를 설계할 수 있습니다." },
        { closing: true, text: "울세라와 써마지를 따로 살 이유가 없습니다. OLIGIO XM 하나로 HIFU+RF 전층 리프팅을 완성하고, XM Pack으로 반복 매출 구조까지 만드세요." }
      ],
      en: [
        { text: "OLIGIO XM is the **world's first combined lifting device integrating both HIFU and RF in a single platform**." },
        { text: "It enables **3-energy cross-treatment**: HIFU lifts from the SMAS layer, RF G-mode gently heats the upper dermis, and RF X-mode delivers powerful deep-layer heating." },
        { text: "While Ulthera offers only HIFU and Thermage offers only RF, **OLIGIO XM covers the indications of both devices in one platform**. XM Pack consumables support a premium 1-per-patient treatment structure." },
        { closing: true, text: "No need to buy Ulthera and Thermage separately. Complete HIFU+RF full-layer lifting with OLIGIO XM alone, and build a recurring revenue structure with XM Pack." }
      ],
      zh: [
        { closing: true, text: "没有理由分别引进Ulthera和热玛吉——OLIGIO XM是在一台设备上**同时传递RF与HIFU**的复合全层提升平台。" },
        { text: "XM Pack耗材还能一并打造**循环营收结构**——从引进到运营·盈利都最高效的提升选择。" }
      ]
    }
  },
  {
    id: "tightan",
    name: "TIGHTAN",
    color: "#22c55e",
    tagline: {
      ko: "HIFU 시장 진입용 — 최고의 투자 효율",
      en: "HIFU market entry — best-in-class investment efficiency",
      zh: "HIFU市场准入的最佳投资效率——千万韩元级起步的提升菜单"
    },
    competitors: {
      ko: ["울쎄라", "울트라포머 MPT", "슈링크 유니버스"],
      en: ["Ulthera", "Ultraformer MPT", "Shurink Universe"],
      zh: ["Ulthera", "超声炮 MPT", "Shurink Universe"]
    },
    table: {
      competitor: { ko: "울쎄라", en: "Ulthera", zh: "Ulthera" },
      rows: [
        { label: { ko: "가격",     en: "Price",       zh: "价格"   }, wontech: { ko: "1천만원대",  en: "~₩10M",          zh: "约1千万韩元<span class='tbl-note'>十分之一价格</span>"   }, rival: { ko: "1억 이상",   en: "₩100M+",          zh: "1亿韩元以上<span class='tbl-note'>高价投资</span>" } },
        { label: { ko: "시술속도", en: "Speed",       zh: "治疗速度" }, wontech: { ko: "300샷 6분",  en: "300 shots/6 min", zh: "300发/6分钟<span class='tbl-note'>周转率↑</span>"   }, rival: { ko: "상대적 느림", en: "Relatively slow", zh: "相对较慢<span class='tbl-note'>周转率↓</span>"    } },
        { label: { ko: "도입부담", en: "Entry cost",  zh: "引进负担" }, wontech: { ko: "매우 낮음",  en: "Very low",        zh: "非常低<span class='tbl-note'>风险最小</span>"        }, rival: { ko: "높음",       en: "High",            zh: "高<span class='tbl-note'>初期负担↑</span>"          } },
        { label: { ko: "A/S",     en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내",       en: "Domestic",        zh: "国内即时响应<span class='tbl-note'>停工期最短</span>"          }, rival: { ko: "수입",       en: "Import",          zh: "进口延迟<span class='tbl-note'>响应慢</span>"        } }
      ]
    },
    speech: {
      ko: [
        { text: "TIGHTAN은 HIFU 기반 비침습 리프팅 장비로, 타겟층에만 에너지를 정밀 집속해 **주변 조직 손상 없이 즉각적인 리프팅 효과**를 제공합니다." },
        { text: "**1회 시술로 6개월~1년까지 효과가 지속**되며, 300샷을 6분 이내에 완료하는 빠른 시술 속도로 회전율 높은 시술 환경에 최적화되어 있습니다." },
        { text: "합리적인 도입 가격으로 **HIFU 시술 메뉴를 처음 추가하려는 클리닉에도 진입 장벽이 낮고**, 얼굴 부위별 카트리지 선택으로 개인화 시술이 가능합니다." },
        { closing: true, text: "울세라 대비 10분의 1 가격에 HIFU 리프팅 메뉴 추가, 300샷을 6분에 완료. 시술 단가는 유지하면서 도입 부담은 최소화됩니다." }
      ],
      en: [
        { text: "TIGHTAN is a HIFU-based non-invasive lifting device that precisely focuses energy on the target layer, delivering **immediate lifting results without damage to surrounding tissue**." },
        { text: "**Effects last 6 months to 1 year per session**, and 300 shots can be completed in under 6 minutes — optimized for high-throughput clinic environments." },
        { text: "Its affordable acquisition price makes it **the lowest barrier entry point for clinics adding HIFU for the first time**, with per-area cartridge selection for personalized treatment." },
        { closing: true, text: "Add a HIFU lifting menu at 1/10 the cost of Ulthera, complete 300 shots in 6 minutes. Maintain treatment pricing while minimizing your investment." }
      ],
      zh: [
        { closing: true, text: "以Ulthera**十分之一的价格**原样增设HIFU提升菜单，并确保300发6分钟完成的周转率。" },
        { text: "保持治疗单价的同时**将引进负担降到最低**——能最安全地开启HIFU首次引进的平台。" }
      ]
    }
  },
  {
    id: "avvio",
    name: "AVVIO",
    color: "#14b8a6",
    tagline: {
      ko: "CO2 대비 짧은 다운타임 — 같은 효과, 더 빠른 회복",
      en: "Shorter downtime vs CO2 — same results, faster recovery",
      zh: "比CO2停工期更短——同等效果、更快恢复的新一代分段激光"
    },
    competitors: {
      ko: ["액션2", "루트로닉 eCO2", "CO2 레이저"],
      en: ["Action II", "Lutronic eCO2", "CO2 Laser"],
      zh: ["Action II", "Lutronic eCO2", "CO2激光"]
    },
    table: {
      competitor: { ko: "CO2 레이저", en: "CO2 Laser", zh: "CO2激光" },
      rows: [
        { label: { ko: "열손상",   en: "Thermal damage", zh: "热损伤"   }, wontech: { ko: "적음", en: "Minimal", zh: "少<span class='tbl-note'>保护周围组织</span>" }, rival: { ko: "많음", en: "High",    zh: "多<span class='tbl-note'>热扩散↑</span>" } },
        { label: { ko: "회복속도", en: "Recovery",       zh: "恢复速度" }, wontech: { ko: "빠름", en: "Fast",    zh: "快<span class='tbl-note'>停工期↓</span>" }, rival: { ko: "느림", en: "Slow",    zh: "慢<span class='tbl-note'>停工期↑</span>" } },
        { label: { ko: "PIH",     en: "PIH risk",       zh: "PIH风险" }, wontech: { ko: "적음", en: "Low",     zh: "低<span class='tbl-note'>色素沉着↓</span>" }, rival: { ko: "상대적 높음", en: "Higher", zh: "相对较高<span class='tbl-note'>风险↑</span>" } },
        { label: { ko: "A/S",     en: "After-sales",    zh: "售后"    }, wontech: { ko: "국내", en: "Domestic", zh: "国内即时响应<span class='tbl-note'>稳定运用</span>" }, rival: { ko: "수입", en: "Import",   zh: "进口延迟<span class='tbl-note'>响应慢</span>" } }
      ]
    },
    speech: {
      ko: [
        { text: "AVVIO는 **수분 흡수율이 CO2 레이저보다 16배 높은 Er:YAG 2940nm 레이저**로, 표피 손상과 열 확산이 최소화되어 회복 기간이 훨씬 짧습니다." },
        { text: "다운타임에 민감한 환자가 늘어나는 추세에서, AVVIO는 **CO2 대비 환자 만족도를 높이면서 동등한 치료 효과**를 제공합니다." },
        { text: "Short/Long 모드 선택으로 Ablation과 Coagulation 효과를 병변에 따라 적용하고, **Fractional 핸드피스로 적응증 범위를 더욱 확장**할 수 있습니다." },
        { closing: true, text: "CO2보다 16배 높은 수분 흡수율로 열 확산과 피부 손상을 최소화 — 다운타임이 짧아 CO2를 꺼려하던 환자도 설득되는 더 안전한 선택입니다." }
      ],
      en: [
        { text: "AVVIO is an **Er:YAG 2940nm laser with 16x higher water absorption than CO2**, minimizing epidermal damage and thermal spread for significantly shorter recovery time." },
        { text: "As more patients become sensitive to downtime, AVVIO offers **higher patient satisfaction than CO2 while delivering equivalent treatment outcomes**." },
        { text: "Short/Long mode selection applies ablation or coagulation based on the lesion, and the **Fractional handpiece further expands the range of indications**." },
        { closing: true, text: "16x higher water absorption than CO2 minimizes thermal spread and skin damage — shorter downtime makes it the safer choice that even CO2-hesitant patients accept." }
      ],
      zh: [
        { closing: true, text: "水分吸收率是CO2的16倍，**最大限度减少热扩散和皮肤损伤**——停工期短，连顾虑CO2的患者也能被说服的更安全选择。" },
        { text: "降低PIH风险，同时**提升周转率与咨询转化率**的高端分段激光平台。" }
      ]
    }
  },
  {
    id: "lavieen",
    name: "LAVIEEN",
    color: "#a855f7",
    tagline: {
      ko: "BB레이저로 알려진 패키지 매출 창출 장비",
      en: "The BB laser known for creating package-based revenue",
      zh: "以BB激光著称的1927nm铥激光——连套餐营收都能创造的光疗设备"
    },
    competitors: {
      ko: ["모자이크", "Halo", "Fraxel Dual"],
      en: ["Mosaic", "Halo", "Fraxel Dual"],
      zh: ["Mosaic", "Halo", "Fraxel Dual"]
    },
    table: {
      competitor: { ko: "프락셀", en: "Fraxel", zh: "Fraxel" },
      rows: [
        { label: { ko: "다운타임",    en: "Downtime",     zh: "停工期"   }, wontech: { ko: "짧음",     en: "Short",     zh: "短<span class='tbl-note'>保留角质层</span>" }, rival: { ko: "상대적 김",  en: "Longer",    zh: "相对长<span class='tbl-note'>恢复负担↑</span>" } },
        { label: { ko: "소모품",      en: "Consumables",  zh: "耗材"    }, wontech: { ko: "없음",     en: "None",      zh: "无<span class='tbl-note'>节省运营成本</span>" }, rival: { ko: "있음",      en: "Required",  zh: "有<span class='tbl-note'>消耗性成本</span>" } },
        { label: { ko: "드럭딜리버리", en: "Drug delivery", zh: "药物导入" }, wontech: { ko: "강점",    en: "Strength",  zh: "优势<span class='tbl-note'>安瓿吸收率↑</span>" }, rival: { ko: "보통",      en: "Standard",  zh: "一般<span class='tbl-note'>额外收益有限</span>" } },
        { label: { ko: "환자인지도",  en: "Patient awareness", zh: "患者认知度" }, wontech: { ko: "BB레이저", en: "BB Laser", zh: "BB激光<span class='tbl-note'>咨询转化率↑</span>" }, rival: { ko: "프락셀",   en: "Fraxel",    zh: "Fraxel<span class='tbl-note'>同级认知度</span>" } }
      ]
    },
    speech: {
      ko: [
        { text: "LAVIEEN은 **1927nm Thulium 파장이 수분에 선택적으로 반응하는 BB레이저**입니다. 각질층을 보존한 채로 표피와 진피 상부에만 열에너지를 전달하기 때문에 CO2 대비 다운타임이 짧고 피부 장벽 손상이 최소화됩니다." },
        { text: "'**비비크림 필요 없는 올인원 레이저**'라는 컨셉으로 환자 인지도가 높아 상담 전환율이 좋은 장비입니다." },
        { text: "핵심 강점은 **시술 후 드럭 딜리버리 효과**입니다. MTZ 형성 후 EGF·FGF·PDRN·트라넥삼산 등 앰플을 도포하면 흡수율이 현저히 높아져 **앰플 판매로 추가 수익 구조**를 만들 수 있습니다." },
        { closing: true, text: "경쟁 프랙셔널 장비들의 소모품 비용 없이 BB레이저 고객 유입 · 앰플 수익 · 복합 패키지 단가 극대화를 동시에 실현하세요." }
      ],
      en: [
        { text: "LAVIEEN is a **BB laser using a 1927nm Thulium wavelength that selectively reacts with water**. By targeting only the epidermis and upper dermis while preserving the stratum corneum, it offers shorter downtime and minimal skin barrier disruption compared to CO2." },
        { text: "Marketed as the **'all-in-one laser that eliminates the need for BB cream'**, it has strong patient awareness that translates into high consultation conversion rates." },
        { text: "A key strength is its **post-treatment drug delivery enhancement**. After MTZ formation, topical ampoules (EGF, FGF, PDRN, tranexamic acid) absorb at significantly higher rates — creating an **additional revenue stream through ampoule sales**." },
        { closing: true, text: "Without the consumable costs of competing fractional devices, simultaneously achieve BB laser patient acquisition, ampoule revenue, and maximized complex package pricing." }
      ],
      zh: [
        { closing: true, text: "1927nm铥激光波长选择性作用于水分的BB激光——**保留角质层，仅向表皮·真皮上层传导热能**，停工期与屏障损伤均降至最低。" },
        { text: "术后EGF·FGF·PDRN安瓿药物导入带来**额外收益**——同步抓住BB激光客流·安瓿营收·复合套餐单价的套餐型平台。" }
      ]
    }
  },
  {
    id: "sandro-dual",
    name: "SANDRO DUAL",
    color: "#06b6d4",
    tagline: {
      ko: "제모·색소·혈관을 모두 커버하는 수익형 레이저 플랫폼",
      en: "Revenue-driven laser platform covering hair removal, pigmentation and vascular",
      zh: "覆盖脱毛·色素·血管的综合盈利激光平台"
    },
    competitors: {
      ko: ["젠틀맥스 프로", "아포지 플러스", "클라리티2"],
      en: ["GentleMax Pro", "Apogee Plus", "Clarity II"],
      zh: ["GentleMax Pro", "Apogee Plus", "Clarity II"]
    },
    table: {
      competitor: { ko: "젠틀맥스", en: "GentleMax", zh: "GentleMax Pro" },
      rows: [
        { label: { ko: "파장",   en: "Wavelength",  zh: "波长"   }, wontech: { ko: "755+1064 동시조사", en: "755+1064 simultaneous", zh: "755+1064<span class='tbl-note'>同时照射</span>" }, rival: { ko: "개별조사",  en: "Sequential only", zh: "单独照射<span class='tbl-note'>不支持独立波长</span>"  } },
        { label: { ko: "냉각",   en: "Cooling",     zh: "冷却"   }, wontech: { ko: "파장별 독립냉각",   en: "Independent per wavelength", zh: "各波长独立冷却<span class='tbl-note'>输出稳定性↑</span>" }, rival: { ko: "DCD 냉각", en: "DCD cooling",     zh: "DCD冷却<span class='tbl-note'>消耗性喷雾</span>"  } },
        { label: { ko: "활용도", en: "Use cases",   zh: "用途"   }, wontech: { ko: "제모+색소+혈관",     en: "Hair+pigment+vascular",  zh: "脱毛+色素+血管<span class='tbl-note'>多重适应症</span>"  }, rival: { ko: "제모 중심", en: "Hair removal focus", zh: "以脱毛为主<span class='tbl-note'>单一适应症</span>" } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응",     en: "Immediate (KR)",         zh: "国内即时响应"    }, rival: { ko: "수입 지연", en: "Import delay",    zh: "进口延迟"  } }
      ]
    },
    speech: {
      ko: [
        { text: "SANDRO DUAL은 **755nm Alexandrite와 1064nm Nd:YAG 파장을 단일 플랫폼에 통합**한 멀티 레이저 장비입니다." },
        { text: "경쟁사 대부분의 듀얼 장비가 두 파장을 순차적으로만 사용하는 데 반해, **SANDRO DUAL은 하이브리드 모드를 통해 두 파장을 동시에 조사**할 수 있어 시술 시간을 단축하고 치료 효율을 극대화합니다." },
        { text: "각 파장별 독립 냉각 시스템(SCS)으로 출력 안정성이 뛰어나며, **제모는 물론 색소·혈관 병변과 리쥬브네이션까지 한 장비로 커버**할 수 있어 원내 장비 투자 효율이 높습니다." },
        { closing: true, text: "젠틀맥스 프로는 두 파장을 순차 조사하지만, SANDRO DUAL은 755nm + 1064nm을 동시 조사 — 시술 시간은 줄고 치료 효율은 올라갑니다. 파장별 독립 냉각으로 출력 안정성까지 갖췄으니, 젠틀맥스 프로 가격의 절반 이하로 더 넓은 적응증을 커버하는 장비입니다." }
      ],
      en: [
        { text: "SANDRO DUAL is a **multi-laser platform integrating both 755nm Alexandrite and 1064nm Nd:YAG in a single device**." },
        { text: "While most competitor dual-wavelength devices only operate sequentially, **SANDRO DUAL's hybrid mode allows simultaneous dual-wavelength irradiation**, reducing treatment time and maximizing efficacy." },
        { text: "Independent cooling per wavelength (SCS) ensures output stability, and the platform **covers hair removal, pigmentation, vascular lesions, and rejuvenation** with a single investment." },
        { closing: true, text: "GentleMax Pro fires each wavelength in sequence, but SANDRO DUAL irradiates 755nm + 1064nm simultaneously — less time, better efficacy. Independent per-wavelength cooling ensures output stability, covering broader indications at less than half the GentleMax Pro price." }
      ],
      zh: [
        { closing: true, text: "GentleMax Pro顺序照射两种波长，而SANDRO DUAL**同时照射755nm+1064nm**——治疗更快，疗效更强。" },
        { text: "以脱毛·色素·血管三大适应症拓宽诊室收益，并以**不足GentleMax Pro一半的价格**降低引进负担。" }
      ]
    }
  }
];

const CLOSING_SPEECH = {
  ko: {
    quote: "원텍 장비의 가장 큰 장점은\n단순히 효과가 아니라 **투자금 회수**입니다.\n\n수입장비 대비 초기 투자금은 낮고,\n유지비는 적으며, 시술 메뉴는 더 많이 만들 수 있습니다.\n\n결국 장비는 스펙이 아니라\n**병원 매출을 만드는 도구**인데,\n원텍 장비는 그 부분에 가장 최적화되어 있습니다.",
    points: [
      { icon: "💰", title: "낮은 초기 투자금", desc: "수입장비 대비 대폭 절감" },
      { icon: "🔧", title: "적은 유지비",      desc: "국내 A/S · 소모품 절약" },
      { icon: "📈", title: "넓은 시술 메뉴",   desc: "투자 대비 수익 극대화" }
    ]
  },
  en: {
    quote: "Wontech's greatest advantage\nis not simply clinical efficacy —\nit's **return on investment**.\n\nLower upfront costs than imported devices,\nlower ongoing maintenance,\nand more treatment menus to offer.\n\nUltimately, a device is not about specs —\nit's a **tool for generating clinic revenue**,\nand Wontech is optimized for exactly that.",
    points: [
      { icon: "💰", title: "Lower upfront cost",   desc: "Significantly below imported devices" },
      { icon: "🔧", title: "Lower maintenance",     desc: "Domestic A/S · consumable savings" },
      { icon: "📈", title: "Broader service menu",  desc: "Maximize return on investment" }
    ]
  },
  zh: {
    quote: "原泰克设备最大的优势\n不仅仅是临床效果——\n而是**投资回报**。\n\n与进口设备相比，初期投资更低，\n维护成本更少，\n可提供的治疗菜单更多。\n\n归根结底，设备不是规格参数的比拼——\n而是**创造诊所营收的工具**，\n原泰克设备正是为此而优化的。",
    points: [
      { icon: "💰", title: "初期投资更低",   desc: "大幅低于进口设备" },
      { icon: "🔧", title: "维护成本更少",   desc: "国内售后 · 节省耗材" },
      { icon: "📈", title: "更广泛的治疗菜单", desc: "最大化投资回报" }
    ]
  }
};

/* ── 마크업 파서 ── */
function parseBold(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function getLang() {
  return window.CURRENT_LANG || "ko";
}

function buildDeviceGrid() {
  const grid = document.getElementById("device-grid");
  if (!grid) return;
  const lang = getLang();

  grid.innerHTML = SPEECH_DATA.map((d) => `
    <button class="device-card" data-id="${d.id}" type="button" style="--card-color:${d.color}">
      <span class="device-card-name">${d.name}</span>
      <span class="device-card-tag">${d.tagline[lang] || d.tagline.ko}</span>
    </button>
  `).join("") + `
    <button class="device-card device-card--closing" data-id="closing" type="button" style="--card-color:#ff5a0a">
      <span class="device-card-name">${(TRANSLATIONS[lang] || TRANSLATIONS.ko).sales_closing_name}</span>
      <span class="device-card-tag">${(TRANSLATIONS[lang] || TRANSLATIONS.ko).sales_closing_tag}</span>
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

  content.innerHTML = id === "closing"
    ? renderClosing()
    : renderDetail(SPEECH_DATA.find((x) => x.id === id));

  gridView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function renderDetail(d) {
  if (!d) return "";
  const lang = getLang();
  const ui   = TRANSLATIONS[lang] || TRANSLATIONS.ko;
  const speeches = d.speech[lang] || d.speech.ko;
  const competitors = d.competitors[lang] || d.competitors.ko;
  const tableCompetitor = d.table.competitor[lang] || d.table.competitor.ko;

  const rows = d.table.rows.map((r) => `
    <tr>
      <td class="tbl-label">${r.label[lang] || r.label.ko}</td>
      <td class="tbl-wontech">${r.wontech[lang] || r.wontech.ko}</td>
      <td class="tbl-rival">${r.rival[lang] || r.rival.ko}</td>
    </tr>
  `).join("");

  const rivals = competitors.map((c) => `<span class="rival-chip">${c}</span>`).join("");

  const closing = speeches.find((b) => b.closing);
  const details = speeches.filter((b) => !b.closing);

  const closingBlock = closing ? `
    <div class="speech-closing" style="border-color:${d.color}70; background:${d.color}14; border-left: 3px solid ${d.color}">
      <p class="speech-closing-text">${parseBold(closing.text)}</p>
    </div>` : "";

  const detailBlocks = details.map((block) =>
    `<p class="speech-para">${parseBold(block.text)}</p>`
  ).join("");

  const speechBlocks = closingBlock + detailBlocks;

  return `
    <div class="detail-header">
      <div class="detail-name-badge" style="background:${d.color}">${d.name}</div>
      <p class="detail-tagline">${d.tagline[lang] || d.tagline.ko}</p>
      <div class="rival-list">${rivals}</div>
    </div>
    <div class="detail-section">
      <p class="detail-section-label">${ui.sales_cmp}</p>
      <div class="tbl-wrap">
        <table class="cmp-table">
          <thead>
            <tr>
              <th>${ui.tbl_item}</th>
              <th style="color:${d.color}">${d.name}</th>
              <th>${tableCompetitor}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
    <div class="detail-section">
      <p class="detail-section-label">${ui.sales_speech}</p>
      <div class="speech-body">${speechBlocks}</div>
    </div>
  `;
}

function renderClosing() {
  const lang    = getLang();
  const closing = CLOSING_SPEECH[lang] || CLOSING_SPEECH.ko;
  const ui      = TRANSLATIONS[lang] || TRANSLATIONS.ko;

  const paragraphs = closing.quote.split("\n").map((line) =>
    line.trim() ? `<p>${parseBold(line)}</p>` : `<br>`
  ).join("");

  const points = closing.points.map((p) => `
    <div class="closing-point">
      <span class="closing-icon">${p.icon}</span>
      <strong>${p.title}</strong>
      <span>${p.desc}</span>
    </div>
  `).join("");

  return `
    <div class="detail-header">
      <div class="detail-name-badge" style="background:#ff5a0a">${ui.sales_closing_name}</div>
      <p class="detail-tagline">${ui.sales_closing_tag}</p>
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
