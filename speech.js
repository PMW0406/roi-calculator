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
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "약 6,000만원",  en: "~₩60M",          zh: "约6,000万韩元" }, rival: { ko: "1.5~2억",   en: "₩150M~200M",  zh: "1.5~2亿韩元" } },
        { label: { ko: "소모품", en: "Consumables", zh: "耗材"   }, wontech: { ko: "없음",          en: "None",           zh: "无"           }, rival: { ko: "있음",     en: "Required",    zh: "有"           } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응", en: "Immediate (KR)", zh: "国内即时响应"  }, rival: { ko: "수입 지연", en: "Import delay", zh: "进口延迟"     } },
        { label: { ko: "ROI",   en: "ROI",          zh: "ROI"    }, wontech: { ko: "매우 우수",      en: "Excellent",      zh: "非常优秀"      }, rival: { ko: "투자금 부담", en: "High cost burden", zh: "投资负担重" } }
      ]
    },
    speech: {
      ko: [
        { text: "V LASER는 **핸드피스 교체 없이 532nm와 1064nm 두 파장을 즉시 전환**해 사용할 수 있어, 시술 흐름을 끊지 않고 연속 진료가 가능합니다." },
        { text: "4단계 접촉식 쿨링 시스템으로 피부 타입과 병변 종류에 따라 시술자가 세밀하게 파라미터를 조절할 수 있으며, **화상 위험을 최소화**합니다." },
        { text: "**소모품이 없어 유지비가 거의 발생하지 않고**, 혈관 병변부터 리쥬브·색소·여드름까지 폭넓은 적응증을 하나의 장비로 커버합니다." },
        { closing: true, text: "소모품 비용 'ZERO', 넓은 적응증 커버리지 — V LASER는 ROI가 가장 빠른 혈관·색소 플랫폼입니다." }
      ],
      en: [
        { text: "V LASER allows **instant switching between 532nm and 1064nm wavelengths without changing handpieces**, enabling seamless, uninterrupted patient flow." },
        { text: "Its 4-level contact cooling system enables precise parameter control by skin type and lesion, **minimizing the risk of thermal injury**." },
        { text: "**With zero consumables**, maintenance costs are virtually eliminated, covering vascular lesions, rejuvenation, pigmentation, and acne with a single platform." },
        { closing: true, text: "Zero consumable costs, broad indication coverage — V LASER delivers the fastest ROI among vascular and pigmentation platforms." }
      ],
      zh: [
        { text: "V LASER**无需更换手具即可在532nm和1064nm双波长之间即时切换**，实现不间断的连续诊疗流程。" },
        { text: "4级接触式冷却系统可根据皮肤类型和病变种类精细调节参数，**最大限度降低灼伤风险**。" },
        { text: "**无耗材设计使维护成本几乎为零**，一台设备即可覆盖血管病变、嫩肤、色素、痤疮等广泛适应症。" },
        { closing: true, text: "耗材成本'零负担'，广覆盖适应症——V LASER是ROI回收最快的血管·色素治疗平台。" }
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
      zh: "覆盖传统Q开关无法去除的文身颜色"
    },
    competitors: {
      ko: ["Spectra XT", "Revlite SI", "Medlite C6"],
      en: ["Spectra XT", "Revlite SI", "Medlite C6"],
      zh: ["Spectra XT", "Revlite SI", "Medlite C6"]
    },
    table: {
      competitor: { ko: "기존 Q-Switched", en: "Q-Switched", zh: "传统Q开关" },
      rows: [
        { label: { ko: "파장",     en: "Wavelength",  zh: "波长"   }, wontech: { ko: "1064/532/595/660", en: "1064/532/595/660", zh: "1064/532/595/660" }, rival: { ko: "1064/532", en: "1064/532",  zh: "1064/532" } },
        { label: { ko: "문신 색상", en: "Tattoo color", zh: "文身颜色" }, wontech: { ko: "거의 전색상",   en: "Nearly all colors", zh: "几乎全色系"     }, rival: { ko: "제한적",  en: "Limited",   zh: "有限"         } },
        { label: { ko: "MLA",      en: "MLA",          zh: "MLA"    }, wontech: { ko: "가능",           en: "Available",         zh: "支持"           }, rival: { ko: "제한",    en: "Limited",   zh: "受限"         } },
        { label: { ko: "활용성",   en: "Versatility",  zh: "适用性" }, wontech: { ko: "매우 높음",       en: "Very high",         zh: "非常高"         }, rival: { ko: "색소 위주", en: "Pigment-focused", zh: "以色素为主" } }
      ]
    },
    speech: {
      ko: [
        { text: "기존 Q-Switched 장비가 1064/532nm에 한정된 것과 달리, **PASTELLE PRO는 595nm(홍조·파란 문신)와 660nm(초록 문신·고멜라닌)까지 총 4파장을 지원**합니다." },
        { text: "덕분에 기존에 거절할 수밖에 없었던 다양한 색상의 문신도 효과적으로 치료할 수 있습니다." },
        { text: "**HEXA MLA와 멀티 PTP 모드**는 광기계적 파괴력을 극대화해 기존 Q-Switched 대비 더 적은 횟수로 뚜렷한 개선 효과를 냅니다." },
        { closing: true, text: "4파장 지원으로 거절하던 문신 케이스를 수용으로 전환하고, 스킨 리쥬브까지 확장해 시술 메뉴 다양화에 직결됩니다." }
      ],
      en: [
        { text: "Unlike conventional Q-Switched devices limited to 1064/532nm, **PASTELLE PRO supports 4 wavelengths including 595nm (redness/blue tattoos) and 660nm (green tattoos/high melanin)**." },
        { text: "This allows effective treatment of multi-colored tattoos that were previously impossible to address." },
        { text: "**HEXA MLA and multi-PTP mode** maximize photomechanical disruption, delivering visible results in fewer sessions compared to conventional Q-Switched lasers." },
        { closing: true, text: "Convert previously declined tattoo cases into revenue opportunities, while expanding into skin rejuvenation for a more diverse treatment menu." }
      ],
      zh: [
        { text: "与传统Q开关设备仅限于1064/532nm不同，**PASTELLE PRO支持595nm（红血丝·蓝色文身）和660nm（绿色文身·高黑色素）共4种波长**。" },
        { text: "因此，之前无法处理的多色文身案例也能有效治疗，拓宽了诊疗范围。" },
        { text: "**HEXA MLA和多重PTP模式**最大化光机械破坏力，以更少的治疗次数实现显著效果。" },
        { closing: true, text: "4波长支持让拒绝的文身案例变为营收来源，同时向嫩肤领域延伸，实现诊疗菜单多元化。" }
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
      zh: "250ps超短脉冲，攻占高端皮秒市场"
    },
    competitors: {
      ko: ["피코웨이", "PicoPlus", "디스커버리 피코"],
      en: ["PicoWay", "PicoPlus", "Discovery Pico"],
      zh: ["PicoWay", "PicoPlus", "Discovery Pico"]
    },
    table: {
      competitor: { ko: "PicoPlus", en: "PicoPlus", zh: "PicoPlus" },
      rows: [
        { label: { ko: "펄스폭",   en: "Pulse width", zh: "脉宽"   }, wontech: { ko: "250ps",      en: "250ps",         zh: "250ps"    }, rival: { ko: "300ps급",     en: "~300ps",       zh: "约300ps"   } },
        { label: { ko: "피크파워", en: "Peak power",   zh: "峰值功率" }, wontech: { ko: "2GW",        en: "2GW",           zh: "2GW"      }, rival: { ko: "상대적 낮음", en: "Relatively low", zh: "相对较低"  } },
        { label: { ko: "유지비",   en: "Maintenance",  zh: "维护成本" }, wontech: { ko: "국산 저렴",  en: "Low (domestic)", zh: "国产低价" }, rival: { ko: "수입 고가",   en: "High (import)", zh: "进口高价"  } },
        { label: { ko: "가격",     en: "Price",        zh: "价格"   }, wontech: { ko: "경쟁력 우수", en: "Competitive",    zh: "价格有优势" }, rival: { ko: "고가",       en: "Premium",      zh: "高价"       } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOCARE MAJESTY는 **전 세계 최초로 250ps 펄스듀레이션을 구현한 피코레이저** 장비입니다. 기존 Q스위치보다 1,000배 빠르고, 멜라노좀의 SRT인 300ps보다 짧은 펄스로 **멜라노좀만 선택적으로 파괴**합니다." },
        { text: "**2GW 피크 파워**는 나노 레이저로 치료가 어려웠던 완고한 색소 병변과 복잡한 문신 색상에서도 탁월한 효과를 발휘합니다." },
        { text: "국산 장비이므로 수입 피코 대비 **유지비가 저렴하고, A/S 대응이 신속**합니다." },
        { closing: true, text: "펄스 속도와 피크 파워 모두에서 앞서는 유일한 국산 플래그십 — 프리미엄 시술 단가를 정당화할 기술적 근거가 있는 장비입니다." }
      ],
      en: [
        { text: "PICOCARE MAJESTY is the **world's first pico laser with a 250ps pulse duration** — 1,000x faster than Q-switched lasers, **selectively destroying melanosomes** before thermal energy spreads to surrounding tissue." },
        { text: "Its **2GW peak power** delivers outstanding results on stubborn pigmentation and complex multi-colored tattoos that were challenging to treat with nano lasers." },
        { text: "As a domestically manufactured device, it offers **significantly lower maintenance costs and faster after-sales support** compared to imported pico lasers." },
        { closing: true, text: "The only domestic flagship that leads in both pulse speed and peak power — providing the technical justification to command premium procedure pricing." }
      ],
      zh: [
        { text: "PICOCARE MAJESTY是**全球首款实现250ps脉冲时长的皮秒激光**设备，比Q开关激光快1000倍，以比黑色素体SRT（300ps）更短的脉冲**选择性破坏黑色素体**。" },
        { text: "**2GW峰值功率**对纳秒激光难以治疗的顽固色素病变和复杂文身颜色均有卓越效果。" },
        { text: "作为国产设备，与进口皮秒相比**维护成本更低，售后响应更迅速**。" },
        { closing: true, text: "脉冲速度和峰值功率双项领先的唯一国产旗舰——拥有支撑高端治疗定价的技术依据。" }
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
      zh: "755nm皮秒平台，攻占亚历山大激光市场"
    },
    competitors: {
      ko: ["PicoSure", "Discovery Pico"],
      en: ["PicoSure", "Discovery Pico"],
      zh: ["PicoSure", "Discovery Pico"]
    },
    table: {
      competitor: { ko: "PicoSure", en: "PicoSure", zh: "PicoSure" },
      rows: [
        { label: { ko: "출력",         en: "Max output",     zh: "输出"      }, wontech: { ko: "310mJ",      en: "310mJ",          zh: "310mJ"    }, rival: { ko: "상대적 낮음", en: "Relatively low",   zh: "相对较低"  } },
        { label: { ko: "캘리브레이션", en: "Calibration",    zh: "校准"      }, wontech: { ko: "초기 1회",   en: "Once at start",  zh: "初始1次"  }, rival: { ko: "스팟 변경마다", en: "Per spot change", zh: "每次换光斑" } },
        { label: { ko: "운용편의성",   en: "Ease of use",    zh: "操作便利性" }, wontech: { ko: "우수",       en: "Excellent",      zh: "优秀"      }, rival: { ko: "보통",       en: "Average",          zh: "一般"      } },
        { label: { ko: "가격",         en: "Price",          zh: "价格"      }, wontech: { ko: "경쟁력 우수", en: "Competitive",    zh: "价格有优势" }, rival: { ko: "고가",       en: "Premium",          zh: "高价"      } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOALEX는 **755nm 알렉산드라이트 파장 특유의 높은 멜라닌 선택성**을 600ps 피코초 기술과 결합한 장비입니다." },
        { text: "피코슈어(PicoSure) 대비 **최대 출력(310mJ)이 높고**, 스팟 사이즈 변경 시 매번 캘리브레이션을 진행해야 하는 번거로움 없이 **시술 시작 시 한 번만** 진행하면 되어 시술 흐름이 훨씬 효율적입니다." },
        { text: "Zoom과 MLA 핸드피스로 문신 제거·토닝에서 리쥬브네이션·흉터 치료까지 폭넓게 대응하며, 동급 수입 장비 대비 **합리적인 가격으로 도입 문턱을 낮춥니다.**" },
        { closing: true, text: "피코슈어 대비 출력은 높고, 운용 편의성은 우수하며, 가격은 더 낮아 동일 임상 결과를 더 빠르고 효율적으로 낼 수 있습니다." }
      ],
      en: [
        { text: "PICOALEX combines the **high melanin selectivity of the 755nm Alexandrite wavelength** with 600ps pico technology for superior treatment outcomes." },
        { text: "Compared to PicoSure, PICOALEX offers **higher maximum output (310mJ)** and requires calibration **only once at the start of treatment** — not every time you change spot size — delivering a smoother workflow." },
        { text: "With Zoom and MLA handpieces, it covers tattoo removal, toning, rejuvenation, and scar treatment, while **offering a more affordable entry point** than equivalent imported devices." },
        { closing: true, text: "Higher output, superior usability, and a lower price than PicoSure — achieve the same clinical outcomes faster and more efficiently." }
      ],
      zh: [
        { text: "PICOALEX将**755nm亚历山大波长特有的高黑色素选择性**与600ps皮秒技术相结合。" },
        { text: "与PicoSure相比，**最大输出功率更高（310mJ）**，且更换光斑尺寸时无需每次重新校准，**仅需在治疗开始时校准一次**，大幅提升诊疗效率。" },
        { text: "通过Zoom和MLA手具，可广泛应对文身去除、色调调整、嫩肤及疤痕治疗，**准入门槛低于同级进口设备**。" },
        { closing: true, text: "输出更高、操作更便捷、价格低于PicoSure——以更快、更高效的方式实现相同临床效果。" }
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
      zh: "开业诊所最稳健的盈利皮秒设备"
    },
    competitors: {
      ko: ["PicoPlus", "PicoLO", "Pico K"],
      en: ["PicoPlus", "PicoLO", "Pico K"],
      zh: ["PicoPlus", "PicoLO", "Pico K"]
    },
    table: {
      competitor: { ko: "피코플러스", en: "PicoPlus", zh: "PicoPlus" },
      rows: [
        { label: { ko: "출력",   en: "Output",      zh: "输出"   }, wontech: { ko: "600mJ",     en: "600mJ",          zh: "600mJ"   }, rival: { ko: "500mJ",       en: "500mJ",          zh: "500mJ"    } },
        { label: { ko: "펄스폭", en: "Pulse width",  zh: "脉宽"   }, wontech: { ko: "450~550ps", en: "450~550ps",      zh: "450~550ps" }, rival: { ko: "유사",       en: "Similar",        zh: "相近"     } },
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "우수",       en: "Competitive",    zh: "有优势"  }, rival: { ko: "상대적 고가", en: "Relatively high", zh: "相对较高" } },
        { label: { ko: "범용성", en: "Versatility", zh: "适用性" }, wontech: { ko: "매우 높음",  en: "Very high",      zh: "非常高"  }, rival: { ko: "높음",       en: "High",           zh: "高"       } }
      ]
    },
    speech: {
      ko: [
        { text: "PICOANDY는 **450ps의 피코초 펄스**로 기존 나노 레이저 대비 색소 파괴력을 높이면서도 주변 조직 손상을 최소화합니다." },
        { text: "**1064nm 기준 최대 600mJ의 출력**은 깊은 진피 색소부터 표피 잡티, 문신 제거까지 넓은 적응증을 한 번의 도입으로 커버합니다." },
        { text: "낮은 통증과 부작용 프로파일 덕분에 **환자 만족도가 높고**, 유연한 패키지 구성으로 시술 단가와 재방문율 향상에 직접 기여합니다." },
        { closing: true, text: "기존 나노 레이저를 운용 중인 클리닉이라면, 동일 환자에게 더 강력한 피코 옵션을 추가해 단가를 높일 수 있는 가장 합리적인 업그레이드 경로입니다." }
      ],
      en: [
        { text: "PICOANDY's **450ps pico pulses** deliver superior pigment disruption compared to nano lasers while minimizing damage to surrounding tissue." },
        { text: "With **up to 600mJ output at 1064nm**, it covers deep dermal pigmentation, epidermal spots, and tattoo removal — all with a single device investment." },
        { text: "Its low pain and side-effect profile results in **high patient satisfaction**, while flexible package design directly boosts treatment pricing and return visits." },
        { closing: true, text: "For clinics currently operating nano lasers, PICOANDY is the most cost-effective upgrade path to offer existing patients a more powerful pico option at a higher price point." }
      ],
      zh: [
        { text: "PICOANDY的**450ps皮秒脉冲**在提高色素破坏力的同时，最大限度减少对周围组织的损伤。" },
        { text: "**1064nm最大600mJ的输出**，一台设备即可覆盖深层真皮色素、表皮色斑到文身去除等广泛适应症。" },
        { text: "低疼痛、低副作用特性带来**高患者满意度**，灵活的套餐设计直接提升治疗单价和复诊率。" },
        { closing: true, text: "对于正在使用纳秒激光的诊所，PICOANDY是向同一患者提供更强皮秒选项、提升客单价的最合理升级路径。" }
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
      zh: "媲美热玛吉效果 + 国内售后 + 更低耗材成本"
    },
    competitors: {
      ko: ["써마지 FLX", "볼뉴머"],
      en: ["Thermage FLX", "Volnewmer"],
      zh: ["热玛吉 FLX", "Volnewmer"]
    },
    table: {
      competitor: { ko: "써마지 FLX", en: "Thermage FLX", zh: "热玛吉 FLX" },
      rows: [
        { label: { ko: "원리",   en: "Principle",   zh: "原理"   }, wontech: { ko: "Monopolar RF",  en: "Monopolar RF",    zh: "单极射频"   }, rival: { ko: "Monopolar RF",  en: "Monopolar RF", zh: "单极射频" } },
        { label: { ko: "가격",   en: "Price",       zh: "价格"   }, wontech: { ko: "약 5,500만원",  en: "~₩55M",          zh: "约5,500万韩元" }, rival: { ko: "1억 이상",     en: "₩100M+",       zh: "1亿韩元以上" } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응", en: "Immediate (KR)", zh: "国内即时响应" }, rival: { ko: "수입 지연",    en: "Import delay", zh: "进口延迟"  } },
        { label: { ko: "소모품", en: "Consumables", zh: "耗材"   }, wontech: { ko: "저렴",           en: "Affordable",     zh: "低价"        }, rival: { ko: "고가",         en: "Expensive",    zh: "高价"      } }
      ]
    },
    speech: {
      ko: [
        { text: "OLIGIO는 **한국 최초 모노폴라 RF 장비**로, 진피 콜라겐에 열에너지를 직접 전달해 콜라겐 수축과 섬유아세포 자극을 통해 신생 콜라겐을 생성합니다." },
        { text: "**4중 안전장치와 GAS Cooling 시스템**이 시술 중 실시간으로 작동하여 열 손상 위험을 최소화하면서도 충분한 치료 심도를 확보합니다." },
        { text: "싱글·듀얼·오토 모드와 자유로운 쿨링 조절 기능으로 시술자의 임상 판단에 따른 맞춤 프로토콜이 가능하며, 울세라·써마지 대비 **합리적인 도입 비용과 우수한 국내 A/S 체계**를 갖추고 있습니다." },
        { closing: true, text: "써마지의 국산 대안으로 입증된 OLIGIO — 동일 적응증에서 더 빠른 A/S와 낮은 소모품 비용으로 운영 효율을 높이실 수 있습니다." }
      ],
      en: [
        { text: "OLIGIO is **Korea's first monopolar RF device**, delivering thermal energy directly to dermal collagen to stimulate collagen contraction and fibroblast activation for new collagen formation." },
        { text: "Its **4-layer safety system and GAS Cooling** operate in real time during treatment, minimizing thermal injury risk while ensuring adequate treatment depth." },
        { text: "Single, dual, and auto modes with flexible cooling control allow clinician-customized protocols, all while offering **significantly lower acquisition costs and superior domestic A/S** versus Ulthera or Thermage." },
        { closing: true, text: "Proven as the domestic alternative to Thermage — OLIGIO delivers the same indications with faster A/S response and lower consumable costs for improved operational efficiency." }
      ],
      zh: [
        { text: "OLIGIO是**韩国首款单极射频设备**，将热能直接传导至真皮胶原蛋白，通过胶原收缩和成纤维细胞刺激促进新胶原再生。" },
        { text: "**四重安全装置和GAS冷却系统**在治疗过程中实时运行，在最大限度降低热损伤风险的同时确保足够的治疗深度。" },
        { text: "单模、双模、自动模式配合灵活的冷却调节，可根据临床判断制定个性化方案，**引进成本远低于热玛吉，国内售后更优**。" },
        { closing: true, text: "已被证实为热玛吉的国产替代方案——OLIGIO以更快的售后响应和更低的耗材成本提升运营效率。" }
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
      zh: "RF + HIFU复合全层提升——两台设备合为一台"
    },
    competitors: {
      ko: ["써마지 FLX", "울쎄라", "볼뉴머"],
      en: ["Thermage FLX", "Ulthera", "Volnewmer"],
      zh: ["热玛吉 FLX", "Ulthera", "Volnewmer"]
    },
    table: {
      competitor: { ko: "써마지 FLX", en: "Thermage FLX", zh: "热玛吉 FLX" },
      rows: [
        { label: { ko: "RF",      en: "RF",        zh: "RF"   }, wontech: { ko: "O", en: "✓", zh: "✓" }, rival: { ko: "O", en: "✓", zh: "✓" } },
        { label: { ko: "HIFU",    en: "HIFU",      zh: "HIFU" }, wontech: { ko: "O", en: "✓", zh: "✓" }, rival: { ko: "X", en: "✗", zh: "✗" } },
        { label: { ko: "복합시술", en: "Combo tx", zh: "复合治疗" }, wontech: { ko: "O", en: "✓", zh: "✓" }, rival: { ko: "X", en: "✗", zh: "✗" } },
        { label: { ko: "쿨링",    en: "Cooling",   zh: "冷却"   }, wontech: { ko: "강화", en: "Enhanced", zh: "强化" }, rival: { ko: "기본", en: "Basic", zh: "基本" } }
      ]
    },
    speech: {
      ko: [
        { text: "OLIGIO XM은 **HIFU와 RF를 하나의 플랫폼에 통합한 세계 최초 복합 리프팅 장비**입니다." },
        { text: "HIFU로 SMAS층부터 끌어올리고, RF G모드로 진피 상부를 부드럽게 가열하고, RF X모드로 심부까지 강력하게 히팅하는 **3에너지 교차 시술**이 가능합니다." },
        { text: "울세라는 HIFU만, 써마지는 RF만 제공하는 데 반해, **OLIGIO XM은 두 장비의 적응증을 단일 플랫폼으로 커버**합니다. XM Pack 소모품 패키지로 1인 1팩 프리미엄 시술 구조를 설계할 수 있습니다." },
        { closing: true, text: "울세라와 써마지를 따로 도입할 이유가 없습니다. OLIGIO XM 하나로 전층 리프팅 메뉴를 완성하고, XM Pack 소모품으로 안정적인 반복 매출 구조를 만드세요." }
      ],
      en: [
        { text: "OLIGIO XM is the **world's first combined lifting device integrating both HIFU and RF in a single platform**." },
        { text: "It enables **3-energy cross-treatment**: HIFU lifts from the SMAS layer, RF G-mode gently heats the upper dermis, and RF X-mode delivers powerful deep-layer heating." },
        { text: "While Ulthera offers only HIFU and Thermage offers only RF, **OLIGIO XM covers the indications of both devices in one platform**. XM Pack consumables support a premium 1-per-patient treatment structure." },
        { closing: true, text: "No need to invest in Ulthera and Thermage separately. Complete your full-layer lifting menu with OLIGIO XM and build a stable recurring revenue stream with XM Pack consumables." }
      ],
      zh: [
        { text: "OLIGIO XM是**全球首款将HIFU和RF整合于单一平台的复合提升设备**。" },
        { text: "支持**3能量交叉治疗**：HIFU从SMAS层开始提升，RF G模式温和加热真皮上层，RF X模式强力加热深层组织。" },
        { text: "Ulthera仅提供HIFU，热玛吉仅提供RF，而**OLIGIO XM以单一平台覆盖两台设备的适应症**。XM Pack耗材套餐支持高端1人1包治疗结构。" },
        { closing: true, text: "无需分别引进Ulthera和热玛吉。一台OLIGIO XM完成全层提升菜单，通过XM Pack耗材构建稳定的循环营收结构。" }
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
      zh: "HIFU市场准入首选——最佳投资效率"
    },
    competitors: {
      ko: ["울쎄라", "울트라포머 MPT", "슈링크 유니버스"],
      en: ["Ulthera", "Ultraformer MPT", "Shurink Universe"],
      zh: ["Ulthera", "超声炮 MPT", "Shurink Universe"]
    },
    table: {
      competitor: { ko: "울쎄라", en: "Ulthera", zh: "Ulthera" },
      rows: [
        { label: { ko: "가격",     en: "Price",       zh: "价格"   }, wontech: { ko: "1천만원대",  en: "~₩10M",          zh: "约1千万韩元"   }, rival: { ko: "1억 이상",   en: "₩100M+",          zh: "1亿韩元以上" } },
        { label: { ko: "시술속도", en: "Speed",       zh: "治疗速度" }, wontech: { ko: "300샷 6분",  en: "300 shots/6 min", zh: "300发/6分钟"   }, rival: { ko: "상대적 느림", en: "Relatively slow", zh: "相对较慢"    } },
        { label: { ko: "도입부담", en: "Entry cost",  zh: "引进负担" }, wontech: { ko: "매우 낮음",  en: "Very low",        zh: "非常低"        }, rival: { ko: "높음",       en: "High",            zh: "高"          } },
        { label: { ko: "A/S",     en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내",       en: "Domestic",        zh: "国内"          }, rival: { ko: "수입",       en: "Import",          zh: "进口"        } }
      ]
    },
    speech: {
      ko: [
        { text: "TIGHTAN은 HIFU 기반 비침습 리프팅 장비로, 타겟층에만 에너지를 정밀 집속해 **주변 조직 손상 없이 즉각적인 리프팅 효과**를 제공합니다." },
        { text: "**1회 시술로 6개월~1년까지 효과가 지속**되며, 300샷을 6분 이내에 완료하는 빠른 시술 속도로 회전율 높은 시술 환경에 최적화되어 있습니다." },
        { text: "합리적인 도입 가격으로 **HIFU 시술 메뉴를 처음 추가하려는 클리닉에도 진입 장벽이 낮고**, 얼굴 부위별 카트리지 선택으로 개인화 시술이 가능합니다." },
        { closing: true, text: "울쎄라 대비 10분의 1 수준 가격으로 동급 HIFU 리프팅 메뉴 추가 — 적절한 시술 단가를 유지하면서 도입 비용을 최소화하세요." }
      ],
      en: [
        { text: "TIGHTAN is a HIFU-based non-invasive lifting device that precisely focuses energy on the target layer, delivering **immediate lifting results without damage to surrounding tissue**." },
        { text: "**Effects last 6 months to 1 year per session**, and 300 shots can be completed in under 6 minutes — optimized for high-throughput clinic environments." },
        { text: "Its affordable acquisition price makes it **the lowest barrier entry point for clinics adding HIFU for the first time**, with per-area cartridge selection for personalized treatment." },
        { closing: true, text: "Add an equivalent HIFU lifting menu at 1/10 the cost of Ulthera — minimize your investment while maintaining appropriate treatment pricing." }
      ],
      zh: [
        { text: "TIGHTAN是基于HIFU的非侵入性提升设备，将能量精准聚焦于目标层，**不损伤周围组织即可实现即时提升效果**。" },
        { text: "**单次治疗效果持续6个月~1年**，300发在6分钟内完成，专为高周转诊疗环境优化。" },
        { text: "合理的引进价格使其成为**初次增设HIFU治疗菜单诊所的最低门槛选择**，按面部部位选择头具实现个性化治疗。" },
        { closing: true, text: "以Ulthera十分之一的成本增设同等HIFU提升菜单——在保持合理治疗定价的同时最小化引进成本。" }
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
      zh: "比CO2停工期更短——同等效果，更快恢复"
    },
    competitors: {
      ko: ["액션2", "루트로닉 eCO2", "CO2 레이저"],
      en: ["Action II", "Lutronic eCO2", "CO2 Laser"],
      zh: ["Action II", "Lutronic eCO2", "CO2激光"]
    },
    table: {
      competitor: { ko: "CO2 레이저", en: "CO2 Laser", zh: "CO2激光" },
      rows: [
        { label: { ko: "열손상",   en: "Thermal damage", zh: "热损伤"   }, wontech: { ko: "적음", en: "Minimal", zh: "少" }, rival: { ko: "많음", en: "High",    zh: "多" } },
        { label: { ko: "회복속도", en: "Recovery",       zh: "恢复速度" }, wontech: { ko: "빠름", en: "Fast",    zh: "快" }, rival: { ko: "느림", en: "Slow",    zh: "慢" } },
        { label: { ko: "PIH",     en: "PIH risk",       zh: "PIH风险" }, wontech: { ko: "적음", en: "Low",     zh: "低" }, rival: { ko: "상대적 높음", en: "Higher", zh: "相对较高" } },
        { label: { ko: "A/S",     en: "After-sales",    zh: "售后"    }, wontech: { ko: "국내", en: "Domestic", zh: "国内" }, rival: { ko: "수입", en: "Import",   zh: "进口" } }
      ]
    },
    speech: {
      ko: [
        { text: "AVVIO는 **수분 흡수율이 CO2 레이저보다 16배 높은 Er:YAG 2940nm 레이저**로, 표피 손상과 열 확산이 최소화되어 회복 기간이 훨씬 짧습니다." },
        { text: "다운타임에 민감한 환자가 늘어나는 추세에서, AVVIO는 **CO2 대비 환자 만족도를 높이면서 동등한 치료 효과**를 제공합니다." },
        { text: "Short/Long 모드 선택으로 Ablation과 Coagulation 효과를 병변에 따라 적용하고, **Fractional 핸드피스로 적응증 범위를 더욱 확장**할 수 있습니다." },
        { closing: true, text: "CO2 시술을 꺼려하는 환자에게 '빠른 회복, 동등한 효과'를 내세운 새로운 옵션을 제시하세요. 거절 케이스를 수용으로 전환할 수 있습니다." }
      ],
      en: [
        { text: "AVVIO is an **Er:YAG 2940nm laser with 16x higher water absorption than CO2**, minimizing epidermal damage and thermal spread for significantly shorter recovery time." },
        { text: "As more patients become sensitive to downtime, AVVIO offers **higher patient satisfaction than CO2 while delivering equivalent treatment outcomes**." },
        { text: "Short/Long mode selection applies ablation or coagulation based on the lesion, and the **Fractional handpiece further expands the range of indications**." },
        { closing: true, text: "Offer patients who are hesitant about CO2 a new option: 'Faster recovery, same results.' Convert declined cases into booked treatments." }
      ],
      zh: [
        { text: "AVVIO是一款**水分吸收率比CO2激光高16倍的Er:YAG 2940nm激光**，最大限度减少表皮损伤和热扩散，恢复期大幅缩短。" },
        { text: "随着对停工期敏感的患者日益增多，AVVIO在**提升患者满意度的同时，提供与CO2同等的治疗效果**。" },
        { text: "通过Short/Long模式选择对不同病变施加消融或凝固效果，**分段手具进一步扩大适应症范围**。" },
        { closing: true, text: "向对CO2顾虑的患者提供'恢复更快，效果相同'的新选择，将拒绝案例转化为预约治疗。" }
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
      zh: "以BB激光著称的套餐营收创造设备"
    },
    competitors: {
      ko: ["모자이크", "Halo", "Fraxel Dual"],
      en: ["Mosaic", "Halo", "Fraxel Dual"],
      zh: ["Mosaic", "Halo", "Fraxel Dual"]
    },
    table: {
      competitor: { ko: "프락셀", en: "Fraxel", zh: "Fraxel" },
      rows: [
        { label: { ko: "다운타임",    en: "Downtime",     zh: "停工期"   }, wontech: { ko: "짧음",     en: "Short",     zh: "短"     }, rival: { ko: "상대적 김",  en: "Longer",    zh: "相对长"  } },
        { label: { ko: "소모품",      en: "Consumables",  zh: "耗材"    }, wontech: { ko: "없음",     en: "None",      zh: "无"     }, rival: { ko: "있음",      en: "Required",  zh: "有"      } },
        { label: { ko: "드럭딜리버리", en: "Drug delivery", zh: "药物导入" }, wontech: { ko: "강점",    en: "Strength",  zh: "优势"   }, rival: { ko: "보통",      en: "Standard",  zh: "一般"    } },
        { label: { ko: "환자인지도",  en: "Patient awareness", zh: "患者认知度" }, wontech: { ko: "BB레이저", en: "BB Laser", zh: "BB激光" }, rival: { ko: "프락셀",   en: "Fraxel",    zh: "Fraxel"  } }
      ]
    },
    speech: {
      ko: [
        { text: "LAVIEEN은 **1927nm Thulium 파장이 수분에 선택적으로 반응하는 BB레이저**입니다. 각질층을 보존한 채로 표피와 진피 상부에만 열에너지를 전달하기 때문에 CO2 대비 다운타임이 짧고 피부 장벽 손상이 최소화됩니다." },
        { text: "'**비비크림 필요 없는 올인원 레이저**'라는 컨셉으로 환자 인지도가 높아 상담 전환율이 좋은 장비입니다." },
        { text: "핵심 강점은 **시술 후 드럭 딜리버리 효과**입니다. MTZ 형성 후 EGF·FGF·PDRN·트라넥삼산 등 앰플을 도포하면 흡수율이 현저히 높아져 **앰플 판매로 추가 수익 구조**를 만들 수 있습니다." },
        { closing: true, text: "소모품 비용 없이 BB레이저 고객 유입 · 앰플 수익 · 복합 패키지 단가 극대화를 동시에 실현하세요." }
      ],
      en: [
        { text: "LAVIEEN is a **BB laser using a 1927nm Thulium wavelength that selectively reacts with water**. By targeting only the epidermis and upper dermis while preserving the stratum corneum, it offers shorter downtime and minimal skin barrier disruption compared to CO2." },
        { text: "Marketed as the **'all-in-one laser that eliminates the need for BB cream'**, it has strong patient awareness that translates into high consultation conversion rates." },
        { text: "A key strength is its **post-treatment drug delivery enhancement**. After MTZ formation, topical ampoules (EGF, FGF, PDRN, tranexamic acid) absorb at significantly higher rates — creating an **additional revenue stream through ampoule sales**." },
        { closing: true, text: "Achieve patient acquisition, ampoule revenue, and maximized package pricing simultaneously — all with zero consumable costs." }
      ],
      zh: [
        { text: "LAVIEEN是**1927nm铥激光波长选择性作用于水分的BB激光**。在保留角质层的同时，仅向表皮和真皮上层传导热能，与CO2相比停工期更短，皮肤屏障损伤最小。" },
        { text: "以**'无需BB霜的全效激光'**为概念，患者认知度高，咨询转化率良好。" },
        { text: "核心优势在于**治疗后的药物导入效果**。MTZ形成后涂抹EGF·FGF·PDRN·氨甲环酸等安瓿，吸收率显著提升，可通过**安瓿销售创造额外营收结构**。" },
        { closing: true, text: "在零耗材成本下，同步实现BB激光客流引入、安瓿营收和复合套餐单价最大化。" }
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
      competitor: { ko: "젠틀맥스", en: "GentleMax", zh: "GentleMax" },
      rows: [
        { label: { ko: "파장",   en: "Wavelength",  zh: "波长"   }, wontech: { ko: "755+1064 동시조사", en: "755+1064 simultaneous", zh: "755+1064同时照射" }, rival: { ko: "개별조사",  en: "Sequential only", zh: "单独照射"  } },
        { label: { ko: "냉각",   en: "Cooling",     zh: "冷却"   }, wontech: { ko: "파장별 독립냉각",   en: "Independent per wavelength", zh: "各波长独立冷却" }, rival: { ko: "DCD 냉각", en: "DCD cooling",     zh: "DCD冷却"  } },
        { label: { ko: "활용도", en: "Use cases",   zh: "用途"   }, wontech: { ko: "제모+색소+혈관",     en: "Hair+pigment+vascular",  zh: "脱毛+色素+血管"  }, rival: { ko: "제모 중심", en: "Hair removal focus", zh: "以脱毛为主" } },
        { label: { ko: "A/S",   en: "After-sales",  zh: "售后"   }, wontech: { ko: "국내 즉시 대응",     en: "Immediate (KR)",         zh: "国内即时响应"    }, rival: { ko: "수입 지연", en: "Import delay",    zh: "进口延迟"  } }
      ]
    },
    speech: {
      ko: [
        { text: "SANDRO DUAL은 **755nm Alexandrite와 1064nm Nd:YAG 파장을 단일 플랫폼에 통합**한 멀티 레이저 장비입니다." },
        { text: "경쟁사 대부분의 듀얼 장비가 두 파장을 순차적으로만 사용하는 데 반해, **SANDRO DUAL은 하이브리드 모드를 통해 두 파장을 동시에 조사**할 수 있어 시술 시간을 단축하고 치료 효율을 극대화합니다." },
        { text: "각 파장별 독립 냉각 시스템(SCS)으로 출력 안정성이 뛰어나며, **제모는 물론 색소·혈관 병변과 리쥬브네이션까지 한 장비로 커버**할 수 있어 원내 장비 투자 효율이 높습니다." },
        { closing: true, text: "두 파장을 따로 구매하실 필요 없이, SANDRO DUAL 하나로 제모·색소·혈관 병변을 모두 커버하세요. 시술 케이스 다양화와 수익 구조 개선에 직결됩니다." }
      ],
      en: [
        { text: "SANDRO DUAL is a **multi-laser platform integrating both 755nm Alexandrite and 1064nm Nd:YAG in a single device**." },
        { text: "While most competitor dual-wavelength devices only operate sequentially, **SANDRO DUAL's hybrid mode allows simultaneous dual-wavelength irradiation**, reducing treatment time and maximizing efficacy." },
        { text: "Independent cooling per wavelength (SCS) ensures output stability, and the platform **covers hair removal, pigmentation, vascular lesions, and rejuvenation** with a single investment." },
        { closing: true, text: "No need to purchase two separate devices. Cover hair removal, pigmentation, and vascular treatments with SANDRO DUAL alone — directly improving case diversity and revenue structure." }
      ],
      zh: [
        { text: "SANDRO DUAL是**将755nm亚历山大和1064nm Nd:YAG双波长整合于单一平台**的多功能激光设备。" },
        { text: "大多数竞品双波长设备仅支持顺序使用，而**SANDRO DUAL通过混合模式实现双波长同时照射**，缩短治疗时间，最大化治疗效率。" },
        { text: "各波长独立冷却系统（SCS）确保输出稳定性，一台设备即可**覆盖脱毛、色素、血管病变及嫩肤**，设备投资效率极高。" },
        { closing: true, text: "无需分别购买两台设备，一台SANDRO DUAL覆盖脱毛·色素·血管全适应症，直接实现诊疗多元化和营收结构优化。" }
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

  const speechBlocks = speeches.map((block) => {
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
