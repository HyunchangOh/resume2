let UIs = {
    name: ["Hans O", "오현창", "Hans O"],
    mobile: "(+49) 152 3130 2240",
    mail: "ohyunchang@gmail.com",
    githubLink: "https://github.com/HyunchangOh/",
    githubId: "HyunchangOh",
    resumeLink: "https://drive.google.com/uc?export=download&id=1OfFs6VxZgg3V8Al8C01TAd8JrAShBV-c",
    blogLink: "https://hansmitkunst.tistory.com/",
    instagramId: "hyunchang.oh",
    instagramLink: "https://www.instagram.com/hyunchang.oh/",
    button: ["Download Résumé", "이력서 다운로드 (영문)", "Resume Herunterladen (Englisch)"],
    language: ["한국어", "English", "Deutsch"],
    filter: ["Filter", "필터", "Filter"],
};

let tag_translation_sheet = {
    biology: "생명과학",
    chemistry: "화학",
    computer_science: "전산학",
    international: "국제활동",
    leadership: "리더십",
    writing: "저술활동",
};
let tag_selected = Object.keys(tag_translation_sheet);

let contents = [
    {
        title: ["Education", "학력", "Studium"],
        type: "multilined",
        items: [
            {
                job: ["Free University of Berlin", "베를린자유대학교", "Freie Universität Berlin"],
                link: "https://www.mi.fu-berlin.de/bioinf/stud/master/index.html",
                description: ["M.S. in Bioinformatics", "생명정보학 석사", "Master in Bioinformatik"],
                items: [
                ],
                where: ["Berlin, Germany", "독일 베를린", "Berlin, Deutschland"],
                when: ["Oct. 2023 - Aug. 2025", "2023년 10월 - 현재", "Oct. 2023 - Aug. 2025"],
                tag: ["biology","computer_science"],
            },
            {
                job: ["Korea Advanced Institute of Science and Technology", "한국과학기술원 (KAIST)", "Korea Advanced Institute of Science and Technology (KAIST)"],
                link: "https://cs.kaist.ac.kr/",
                description: ["B.S. in Computer Science / B.S. in Biological Sciences", "전산학 학사 / 생명과학 학사", "Bachelor in Informatik, Bachelor in Biologie"],
                items: [
                    ["Science Fellowship, the President of the Republic of Korea", "대통령과학장학생", "Stipendium vom Präsident der Republik Korea"],
                    ["KAIST Presidential Fellowship", "카이스트 총장 장학생", "Studentehrengesellschaft des Präsidents KAIST"]
                ],
                where: ["Daejeon, S.Korea", "대한민국 대전", "Daejeon, Südkorea"],
                when: ["Feb. 2017 - Feb. 2023", "2017년 2월 - 2023년 2월", "Feb. 2017 - Feb. 2023"],
                tag: ["biology","computer_science"],
            },

            {
                job: ["Korea Science Academy of KAIST", "KAIST 부설 한국과학영재학교", "Akademie der Naturwissenschaften Korea von KAIST"],
                link: "https://www.ksa.hs.kr/",
                description: ["Science-Talented High School in S.Korea", "과학 및 공학 분야의 영재학교", "Gymnasium für Begabte Schülere in Südkorea"],
                items: [["Summa Kum Laude in Biology", "생명과학 최우등 졸업", "Summa Kum Laude in Biologie"]],
                where: ["Busan, S.Korea", "대한민국 부산", "Busan, Südkorea"],
                when: ["Mar. 2014 - Feb. 2017", "2014년 3월 - 2017년 2월", "Mar. 2014 - Feb. 2017"],
                tag: ["biology","chemistry"],
            }
        ],
    },
    {
        title: ["Non Degree-Awarding Education", "비학위과정 학력", "Nicht-Abschlussvergebende Ausbildung"],
        type: "multilined",
        items: [
            {
                job: ["Technical University of Berlin", "베를린공과대학교", "Technische Universität Berlin"],
                link: "https://www.tu.berlin/international/studierende/studienkolleg",
                description: ["German Language Course: Propädeutikum", "학위예비자과정 슈투디엔콜렉: 프로페도이티쿰", "Studienkolleg: Propädeutikum"],
                where: ["Berlin, Germany", "베를린, 독일", "Berlin, Deutschland"],
                when: ["Feb. 2023 - Jun. 2023", "2023년 2월 - 2023년 6월", "Feb. 2023 - Jun. 2023"],
                tag: ["international", "writing"],
            },
            {
                job: ["University of Stuttgart", "슈투트가르트대학교", "Universität Stuttgart"],
                link: "https://www.uni-stuttgart.de/en/study/international/short-term/essp/winter-university/",
                description: ["Winter University, as a Student Ambassador of KAIST", "겨울교환학생, KAIST 학생 대사", "Winter Universität, als Studentischer Botschafter von KAIST"],
                items: [
                    ["Courses: German Language Course (B2.2: 1.0), German Film & Literature (2.3)", "이수과목: 독일어 (B2.2: 1.0), 독일 영화와 문학 (2.3)", "Deutsch B2.2 (1.0) Deutsche Filme und Literature (2.3)"]
                ],
                where: ["Stuttgart, Germany", "슈투트가르트, 독일", "Stuttgart, Deutschland"],
                when: ["Jan. 2023 - Feb. 2023", "2023년 1월 - 2023년 2월", "Jan. 2023 - Feb. 2023"],
                tag: ["international", "leadership", "writing"],
            },
            {
                job: ["University of California, Berkeley", "캘리포니아주립대학교, 버클리", "University of California, Berkeley"],
                link: "https://summer.berkeley.edu/",
                description: ["Summer School", "교환학생", "Austauschstudent"],
                items: [
                    ["Courses Taken: Multivariable Calculus, Introductory Psychology", "수강 과목: 다변수 미적분학 (A), 기초심리학 (P)", "Multivariable Infinitesimalrechnung (A), Psychologie (P)"],
                    ["Studies Funded by the President of KAIST", "KAIST 총장 교육비 및 체재비 지원", "Stipendium vom Präsident KAIST"],
                ],
                where: ["Berkeley, California, U.S.A.", "버클리, 캘리포니아, 미국", "Berkeley, Kalifornien, VSA"],
                when: ["Jun. 2017 - Aug. 2017", "2017년 6월 - 2017년 8월","Jun. 2017 - Aug. 2017"],
                tag: ["international"],
            },
            {
                job: ["National Junior College", "National Junior College", "National Junior College"],
                link: "https://nationaljc.moe.edu.sg/",
                description: ["International Research Program", "국제공동연구 프로그램", "Internationales Forschungsprogram"],
                items: [
                    ["Research Topic: Microbial Desalination Cells", "연구주제: 미생물담수화전지", "Forschungsthema: Mikrobielle Entsalzungszelle"],
                    ["Studies Funded by Korea Science Academy of KAIST", "한국과학영재학교 체재비 지원", "Stipendium von der Akademie der Naturwissenschaften Korea von KAIST"],
                ],
                where: ["Singapore", "싱가포르", "Singapur"],
                when: ["Jan. 2017 - Feb. 2017", "2017년 6월 - 2017년 8월","Jan. 2017 - Feb. 2017"],
                tag: ["chemistry", "international"],
            },
            {
                job: ["Camborne Science and International Academy", "Camborne Science and International Academy", "Camborne Science and International Academy"],
                link: "https://www.cambornescience.co.uk/",
                description: ["Summer Exchange Student", "여름 교환학생", "Austauschstudent"],
                items: [["Studies Funded by Korea Science Academy of KAIST", "한국과학영재학교 체재비 지원", "Stipendium von der Akademie der Naturwissenschaften Korea von KAIST"]],
                where: ["Camborne, England", "캠본, 영국", "Camborne, England"],
                when: ["Jun. 2016 - Jul. 2016", "2016년 6월 - 2016년 7월","Jun. 2016 - Jul. 2016"],
                tag: ["biology", "international"],
            },
            {
                job: ["Moscow Chemical Lyceum", "모스크바 화학영재학교", "Moskauer Chemisches Lyzeum"],
                link: "http://www.1303.ru/eng/",
                description: ["Summer Science School / International Research Program", "여름학교 / 국제공동연구프로그램", "Sommer Chemischule  / Internationales Forschungsprogram"],
                items: [["Studies Funded by Korea Science Academy of KAIST", "한국과학영재학교 체재비 지원", "Stipendium von der Akademie der Naturwissenschaften Korea von KAIST"]],
                where: ["Moscow, Russia", "모스크바, 러시아", "Moskau, Russland"],
                when: ["Jun. 2015 - Jul. 2015", "2015년 6월 - 2015년 7월","Jun. 2015 - Jul. 2015"],
                tag: ["chemistry", "international"],
            },
            {
                job: ["Delia School of Canada", "Delia School of Canada", "Delia School of Canada"],
                link: "https://www.dsc.edu.hk/",
                description: ["Ontario Curriculum", "온타리오 주 교육과정", "Lehrplan von Ontario"],
                items: [["Intermediate Section Graduation Ceremony: Art Award", "중등부 졸업표창: 인문학분야최우등", "Der Kunstpreisgewinner"]],
                where: ["Hong Kong", "홍콩", "Hong Kong"],
                when: ["Feb. 2011 - Feb. 2013", "2011년 2월 - 2013년 2월", "Feb. 2011 - Feb. 2013"],
                tag: ["international"],
            },
        ],
    },
    {
        title: ["Research Experience", "연구경력", "Forschungserfahrung"],
        type: "multilined",
        items: [
            {
                job: ["Ringle English Education Service", "(주)링글잉글리시에듀케이션서비스","Ringle English Education Service"],
                link: "https://www.ringleplus.com/ko/student/landing/home",
                description: ["Personalized Online English Education", "일대일 맞춤형 화상영어", "Personalisierte Online-Englischunterricht"],
                items: [["Developer: Developed Big Data Module for Collocations and API Server ","단어 학습 모듈 개발 및 서버 구현","Entwickler: entwickelt Big-Data-Modul für Kollokationen und API Server"]],
                where: ["Seoul, S.Korea", "대한민국 서울", "Seoul, Südkorea"],
                when: ["Jan. 2021 - Feb. 2021", "2021년 1월 - 2021년 2월", "Jan. 2021 - Feb. 2021"],
                tag: ["computer_science"],
            },
            {
                job: ["Neuro-Machine Augmented Intelligence Lab", "신경-기계 증강 지능 연구실","Neuro-Machine Augmented Intelligence Lab"],
                link: "http://nmail.kaist.ac.kr/wordpress/",
                description: ["Prof. Sungho Jo, School of Computing, KAIST", "조성호 교수님, KAIST 전산학부", "Prof. Dr. Sungho Jo, School of Computing, KAIST"],
                items: [["Research Intern: Developed Network Modules for Brain-wave Controlled Drones", "연구인턴: 뇌파로 조종하는 드론을 위한 네트워크 모듈 개발","Praktikant: entwickelt Netzwerkmodulen für gehirnwellengesteuerte Drohnen"]],
                where: ["Daejeon, S.Korea", "대한민국 대전","Daejeon, SüdKorea"],
                when: ["Aug. 2020 - Dec. 2020", "2020년 8월 - 2020년 12월","Aug. 2020 - Dez. 2020"],
                tag: ["computer_science"],
            },
            {
                job: ["KAIST Interaction Lab", "KIXLAB(카이스트 인터랙션 연구실)", "KAIST Interaction Lab"],
                link: "https://www.kixlab.org/",
                description: ["Prof. Juho Kim, School of Computing, KAIST", "김주호 교수님, KAIST 전산학부","Prof. Dr. Juho Kim, School of Computing, KAIST"],
                items: [["Research Intern: Personalized Correction and Expansion of Vocabulary Use Based on User’s Speech", "연구인턴: 사용자 스피치에 기반한 어휘의 개인 맞춤 교정 및 확장", "Praktikant: Personalisierte Korrektur und Erweiterung des Wortschatzgebrauchs basierend auf der Sprache des Benutzers"]],
                where: ["Daejeon, S.Korea", "대한민국 대전", "Daejeon, SüdKorea"],
                when: ["Jan. 2020 - Aug. 2020", "2020년 1월 - 2020년 8월", "Jan. 2020 - Aug. 2020"],
                tag: ["computer_science"],
            },
            {
                job: ["Nanochemistry Lab", "나노화학연구실", "Nanochemie Labor"],
                link: "https://www.kixlab.org/",
                description: ["Prof. Eun-Young Choi, Dept. of Chemistry and Biology, KSA of KAIST", "최은영 선생님, 한국과학영재학교 화학생물학부", "Prof. Dr. Eun-Young Choi, Dept. of Chemistry and Biology, KSA of KAIST"],
                items: [["Research Student: On the Structural Trends of Ionothermally Prepared Metal Organic Frameworks", "연구인턴: 이온열 합성 금속유기골조의 구조적 추세 파악", "Forschungsstudent: Über die strukturellen Trends von ionotherm hergestellten metallorganischen Gerüsten"]],
                where: ["Busan, S.Korea", "대한민국 부산","Busan, SüdKorea"],
                when: ["Feb. 2018 - Aug. 2018", "2018년 2월 - 2018년 8월","Feb. 2018 - Aug. 2018"],
                tag: ["chemistry"],
            },
            {
                job: ["Analytical Biochemistry Lab", "분석생화학연구실", "Analytical Biochemistry Lab"],
                link: "https://sites.google.com/site/ywjunglab/?pli=1",
                description: ["Prof. Yongwon Jung, Dept. of Chemistry, KAIST", "정용원 교수님, KAIST 화학과","Prof. Dr. Yongwon Jung, Dept. of Chemistry, KAIST"],
                items: [["Research Student: Search for Amino Acids Compositions Leading to Liquid-liquid Phase Separations", "연구인턴: 아미노산의 액체-액체 상분리현상","Forschungsstudent: Suche nach Aminosäurezusammensetzungen, die zu Flüssig-Flüssig-Phasentrennungen führen"]],
                where: ["Daejeon, S.Korea", "대한민국 대전", "Daejeon, SüdKorea"],
                when: ["Dec. 2017 - Feb. 2018", "2020년 1월 - 2020년 8월", "Dez. 2017 - Feb. 2018"],
                tag: ["chemistry"],
            },
            {
                job: ["Animal Cell Biology Lab", "동물세포실험실", "Labor für Tierzellbiologie"],
                link: "https://sites.google.com/site/ywjunglab/?pli=1",
                description: ["Dr. Kiyoub Park, Dept. of Chemistry and Biology, KSA of KAIST", "박기엽 선생님, 한국과학영재학교 화학생물학부", "Dr. Kiyoub Park, Dept. of Chemistry and Biology, KSA of KAIST"],
                items: [["Research Student: On the Effects of Reactive Oxygen Species in Differentiation of Neural Cells", "연구인턴: 신경줄기세포의 분화과정에서 활성산소종의 역할", "Forschungsstudent: Über die Auswirkungen reaktiver Sauerstoffspezies auf die Differenzierung neuraler Zellen"]],
                where: ["Busan, S.Korea", "대한민국 부산", "Busan, Südkorea"],
                when: ["Mar. 2016 - Jan. 2017", "2016년 3월 - 2017년 1월", "Mar. 2016 - Jan. 2017"],
                tag: ["biology"],
            },
        ],
    },
    {
        title: ["Work Experience", "경력", "Berufserfahrung"],
        type: "multilined",
        items: [
            {
                job: ["Republic of Korea Army", "대한민국 육군", "Koreanische Armee"],
                link: "https://www.army.mil.kr/webapp/user/indexMain.do?siteId=english",
                description: ["Signal Company, 35th Brigade, 5th Infatry Division", "제5보병사단 제35보병여단 통신중대", "Signalkompanie, 35. Brigade, 5. Infanteriedivision"],
                items: [
                    [
                        "Final Rank: Sergeant, Informatics(C4I) Squad Leader",
                        "육군병장 만기전역, C4I체계운용반 분대장",
                        "Letzter Rang: Sergeant, Informatik (C4I) Zugführer"
                    ],
                    [
                        "Brigade Commander's Commendation: Distinguished Service for Security Audit, 6th Corp",
                        "여단장 표창: 보안감사 우수",
                        "Belobigung des Brigadekommandanten: Ausgezeichneter Dienst für Sicherheitsaudit, 6. Corp"
                    ]
                ],
                where: ["Yeoncheon, S.Korea", "대한민국 연천", "Yeoncheon, SüdKorea"],
                when: ["Feb. 2021 - Aug. 2022", "2021년 2월 - 2022년 8월","Feb. 2021 - Aug. 2022"],
                tag: ["leadership"],
            },
        ],
    },
    {
        title: ["Publication", "저서", "Publikationen"],
        type: "multilined",
        items: [
            {
                job: ["Ionothermal Synthesis of Metal-Organic Framework", "Ionothermal Synthesis of Metal-Organic Framework","Ionothermal Synthesis of Metal-Organic Framework"],
                link: "https://www.intechopen.com/books/recent-advancements-in-the-metallurgical-engineering-and-electrodeposition/ionothermal-synthesis-of-metal-organic-framework",
                description: ["InTechOpen (2018), Chapter 1st Author", "InTechOpen (2018), 챕터 제1저자", "InTechOpen (2018), Erster Autor vom Kapitel"],
                items: [
                    ["Advisor: Prof. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy", "연구지도자: 최은영 선생님, 나노화학 연구실, 한국과학영재학교", "Beraterin: Prof. Dr. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산", "Busan, Südkorea"],
                when: ["2018", "2018년","2018",],
                tag: ["chemistry","writing"],
            },
            {
                job: [
                    "Tabular Organisation of Ionothermally Prepared MOFs To Extrapolate Chemical Trends and Successfully Predict Synthesis Results", 
                    "Tabular Organisation of Ionothermally Prepared MOFs To Extrapolate Chemical Trends and Successfully Predict Synthesis Results",
                    "Tabular Organisation of Ionothermally Prepared MOFs To Extrapolate Chemical Trends and Successfully Predict Synthesis Results",
                ],
                link: "https://biomedres.us/pdfs/BJSTR.MS.ID.000996.pdf",
                description: ["Biomedical Journal of Scientific & Technical Research (2018), 1st Author", "Biomedical Journal of Scientific & Technical Research (2018), 제1저자", "Biomedical Journal of Scientific & Technical Research (2018), Erste Autor"],
                items: [
                    ["Advisor: Prof. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy", "연구지도자: 최은영 선생님, 나노화학 연구실, 한국과학영재학교",  "Beraterin: Prof. Dr. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산", "Busan, Südkorea"],
                when: ["2018", "2018년", "2018"],
                tag: ["chemistry","writing"],
            },
            {
                job: [
                    "Microporous metal organic framework-based copolymers with efficient gas adsorption capability and high temporal stability", 
                    "Microporous metal organic framework-based copolymers with efficient gas adsorption capability and high temporal stability",
                    "Microporous metal organic framework-based copolymers with efficient gas adsorption capability and high temporal stability"
                ],
                link: "https://link.springer.com/article/10.1007/s13233-017-5147-0",
                description: ["Macromolecular Research (2017), 2nd Author", "Macromolecular Research (2017), 제2저자", "Macromolecular Research (2017), Zweiter Autor"],
                items: [
                    ["Advisor: Prof. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy", "연구지도자: 최은영 선생님, 나노화학 연구실, 한국과학영재학교", "Beraterin: Prof. Dr. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산", "Busan, Südorea"],
                when: ["2017", "2017년","2017"],
                tag: ["chemistry","writing"],
            },
            {
                job: [ 
                    "Ionothermal synthesis of a novel 3D cobalt coordination polymer with a uniquely reported framework:[BMI] 2 [Co2 (BTC) 2 (H2O) 2", 
                    "Ionothermal synthesis of a novel 3D cobalt coordination polymer with a uniquely reported framework:[BMI] 2 [Co2 (BTC) 2 (H2O) 2",
                    "Ionothermal synthesis of a novel 3D cobalt coordination polymer with a uniquely reported framework:[BMI] 2 [Co2 (BTC) 2 (H2O) 2"
                ],
                link: "https://www.hindawi.com/journals/amse/2017/3237247/",
                description: [
                    "Advances in Materials Science and Engineering (2017), 1st Author", 
                    "Advances in Materials Science and Engineering (2017), 제1저자",
                    "Advances in Materials Science and Engineering (2017), Erster Autor",
                ],
                items: [
                    ["Advisor: Prof. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy", "연구지도자: 최은영 선생님, 나노화학 연구실, 한국과학영재학교", "Beraterin: Prof. Dr. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산", "Busan, Südorea"],
                when: ["2017", "2017년","2017"],
                tag: ["chemistry","writing"],
            },
            {
                job: [  
                    "Inhibition of Neurogenesis of Subventricular Zone Neural Stem Cells by 5-ethynyl-2-deoxyuridine (EdU)",
                    "Inhibition of Neurogenesis of Subventricular Zone Neural Stem Cells by 5-ethynyl-2-deoxyuridine (EdU)",
                    "Inhibition of Neurogenesis of Subventricular Zone Neural Stem Cells by 5-ethynyl-2-deoxyuridine (EdU)", 
                ],
                link: "https://www.koreascience.or.kr/article/JAKO201720861205214.page",
                description: ["Korean Journal of Biological Sciences (2017), 2nd Author", "Korean Journal of Biological Sciences (2017), 제2저자", "Korean Journal of Biological Sciences (2017), Zweiter Autor"],
                items: [
                    ["Advisor: Dr. Kiyoub Park, Animal Cell Biology Lab, Korea Science Academy", "연구지도자: 박기엽 선생님, 동물세포생물학연구실, 한국과학영재학교", "Beraterin: Advisor: Dr. Kiyoub Park, Animal Cell Biology Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산", "Busan, Südorea"],
                when: ["2017", "2017년","2017"],
                tag: ["biology","writing"],
            },
            {
                job: [ 
                    "The Effect of [RMI] X (R= alkyl; X= halide) Ionic Liquids on the Formation of M-H₃BTC Metal Organic Frameworks",
                    "The Effect of [RMI] X (R= alkyl; X= halide) Ionic Liquids on the Formation of M-H₃BTC Metal Organic Frameworks",
                    "The Effect of [RMI] X (R= alkyl; X= halide) Ionic Liquids on the Formation of M-H₃BTC Metal Organic Frameworks",
                ],
                link: "",
                description: ["Korean Polymer Society 40th Annual Conference, Poster Session", "Korean Polymer Society 40th Annual Conference, 포스터 발표", "Korean Polymer Society 40th Annual Conference, Posterpräsentation"],
                items: [
                    ["Advisor: Prof. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy", "연구지도자: 최은영 선생님, 나노화학 연구실, 한국과학영재학교", "Beraterin: Prof. Dr. Eun-Young Choi, Nanochemistry Lab, Korea Science Academy"]
                ],
                where: ["Busan, S. Korea", "대한민국 부산","Busan, Südorea"],
                when: ["2016", "2016년", "2016"],
                tag: ["chemistry","writing"],
            }
        ],
    },
    {
        title: ["Ex-Curricular Activities", "학외 활동", "Außerschulische Aktivitäten"],
        type: "multilined",
        items: [
            {
                job: ["Writing and Publication", "집필 및 편찬", "Schreiben und Publizieren"],
                items: [],
                where: [],
                when: [],
                subtitle: true,
                tag: ["writing"],
            },
            {
                job: ["Research and Education Support Centre", "과학영재창의연구지원센터", "Unterstützungszentrum für Forschung und Bildung"],
                link: "http://www.rne.or.kr/webzine/vol005/RnE2211_sub24.php",
                description: ["Article Author: Relax & Enjoy, R&E", "기고: R&E 참여 졸업생 이야기: Relax & Enjoy, R&E", "Artikelautor: Relax & Enjoy, R&E"],
                items: [
                ],
                where: ["Busan, S.Korea", "대한민국 부산", "Busan, Südorea"],
                when: ["Oct. 2023", "2023년 10월","Okt. 2023"],
                tag: ["writing","leadership"],
            },
            {
                job: ["KAIST Research Magazine", "카이스트 리서치 매거진", "KAIST Research Magazine (KAIST Forschungsmagazin)"],
                link: "http://krpc.kaist.ac.kr/",
                description: [
                    "Reporter: Organised the first issue of the magazine along with the school administration. Interviewed various researchers of KAIST and wrote research-related articles.", 
                    "학생기자: 카이스트의 연구자를 인터뷰하고 리서치 매거진 첫 부를 기획했습니다.",
                    "Reporter: Organisierte die erste Ausgabe des Magazins zusammen mit der Schulverwaltung. Interviewte verschiedene Forscher von KAIST und schrieb forschungsbezogene Artikel."
                ],
                items: [
                ],
                where: ["Daejeon, S.Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Aug. 2020 - Jan. 2021", "2020년 8월 - 2021년 1월", "Aug. 2020 - Jan. 2021"],
                tag: ["writing","leadership"],
            },
            {
                job: ["KAIST Times", "카이스트신문","KAIST Times (KAIST Zeit)"],
                link: "https://times.kaist.ac.kr/",
                description: [
                    "Head of Dept. of Scholastics / Reporter of Dept. of Culture", 
                    "학술부장 / 문화부 기자", 
                    "Leiter der Abteilung für Scholastik / Berichterstatter der Abteilung für Kultur"
                ],
                items: [
                ],
                where: ["S.Korea", "대한민국", "Südkorea"],
                when: ["Sept. 2017 - Jun. 2019", "2017년 9월 - 2019년 6월", "Sept. 2017 - Jun. 2019"],
                tag: ["writing","leadership"],
            },
            {
                job: ["KAIST Freshman Program Designers", "카이스트 새내기 프로그램 디자이너", "KAIST Freshman Program Designers (Programmgestalter für die Student*innen im ersten Jahr)"],
                link: "https://freshman.kaist.ac.kr/en/page/events/list.do",
                description: [
                    "Translated Program Contents and Announcements for International Students", 
                    "학생번역: 국제학생을 위한 공지사항 및 프로그램 콘텐츠 번역 (영어).",
                    "Übersetzer: Koreanisch auf Englisch"
                ],
                items: [
                ],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Aug. 2020 - Dec. 2020", "2020년 8월 - 2020년 12월", "Aug. 2020 - Dez. 2020"],
                tag: ["international","writing","leadership"],
            },
            {
                job: ["Social Service", "사회활동 및 리더십", "Freiwilligenarbeit"],
                items: [],
                where: [],
                when: [],
                subtitle: true,
                tag: ["leadership"],
            },
            

            {
                job: ["KAIST Presidential Fellowship ", "카이스트 총장 장학생", "KAIST Presidential Fellowship"],
                link: "https://leadership.kaist.ac.kr/en/page/sub/sub_0501.do",
                description: ["Student Honor Society of KAIST", "장학생 리더십 단체", "Studentehrengesellschaft des Präsidents KAIST"],
                tag: ["leadership"],
                nomargin: true
            },
            {
                items: [[
                    "Head of Bureau of Intl. Relations: Organised 1st Joint Contextual Research Project with Centre for Innovation, Indian Institute of Technology, Madras(IITM)",
                    "국제부장: 인도 IITM 대학과 첫 번째 공동연구 프로그램 기획 및 추진",
                    "Leiter des Büros für internationale Beziehungen: Organisierte das 1. gemeinsame kontextbezogene Forschungsprojekt mit dem Zentrum für Innovation, Indian Institute of Technology, Madras (IITM)"
                ],
                ],
                where: ["Chennai, India", "첸나이, 인도", "Chennai, Indien"],
                when: ["Aug. 2019, Jan. 2020", "2019년 8월, 2020년 1월", "Aug. 2019, Jan. 2020"],
                tag: ["leadership","international"],
                nomargin:true,
                smallwhere:true
            },
            {
                items: [
                [
                    "Student Head: Organised and operated student seminars, volunteer works, exchange with other universities, and many others.",
                    "학생회장: 학생 연구 세미나, 봉사활동, 타대학 교류활동, 친목도모활동 등 학생활동 전반 관리",
                    "Studentischer Leiter: Organisation und Durchführung von studentischen Seminaren, ehrenamtliche Arbeit, Austausch mit anderen Universitäten und vieles mehr."
                ],
                ],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südkorea"],
                when: ["Dec. 2017 - Dec. 2018", "2017년 12월 - 2018년 12월", "Dez. 2017 - Dez. 2018"],
                tag: ["leadership"],
                nomargin: true,
                smallwhere:true,
            },
            {
                items: [
                [
                    "Batch of 2017 Representative: Organised Student Visits and Alumni Meet-ups in San Francisco Bay Area",
                    "7기 학생대표: 샌프란시스코-실리콘 밸리 지역 동문과의 만남 주최 및 인솔",
                    "Vertreter der Klasse des 2017: Organisierte Studentenbesuche und Alumni-Treffen in der San Francisco Bay Area"
                ],
                ],
                where: ["Bay Area, California, USA", "샌프란시스코/산호세 일대, 미국", "Bay Area, Kalifornien, VSA"],
                when: ["Feb. 2017 - Dec. 2017", "2017년 2월 - 2017년 12월", "Feb. 2017 - Dez. 2017"],
                tag: ["leadership","writing"],
                smallwhere:true,
                nomargin: true
            },
            {
                job: ["KAIST Leadership Executing Team (K-Let)", "카이스트 실천 리더십 단체", "KAIST Leadership Executing Team (K-Let, Führung ausführendes Team von KAIST)"],
                link: "https://www.facebook.com/KAISTLet",
                description: ["Subordinate Organization of KAIST Global Leadership Center", "카이스트 글로벌 리더십센터 산하 학생단체", "Untergeordnete Organisation des KAIST Global Leadership Center"],
                nomargin:true,
                tag: ["leadership"],
            },
            {
                items: [
                    [
                        "Student Mentor: Prepared lessons for younger students to foster team-building, dream-searching, improving self-esteem, etc.",
                        "학생 멘토: 중고등학생을 위한 리더십 강연 기획 및 진행",
                        "Studentischer Mentor: Vorbereitete Lektionen für jüngere Studenten, um Teambuilding, Traumsuche, Verbesserung des Selbstwertgefühls usw. zu fördern."
                    ]
                ],
                nomargin:true,
                where: ["Boeun/ Daejeon/ Geumsan, S. Korea", "보은, 대전, 금산, 대한민국", "Boeun/ Daejeon/ Geumsan, Südorea"],
                when: ["Feb. 2017 - Aug. 2019", "2017년 2월-2019년 8월", "Feb. 2017 - Aug. 2019"],
                tag: ["leadership"],
                smallwhere: true,
            },
            {
                items: [
                [
                    "Program Organiser: Organised and Participated the 1st Talented Youth Camp, supported by Chungcheongnamdo Office of Education.",
                    "프로그램기획: 충청남도교육청 주최 1차 영재학생캠프 학생멘토",
                    "Programmorganisator: Organisation und Teilnahme am 1. Talented Youth Camp, unterstützt vom Chungcheongnamdo Büro von Erziehung"
                ]
                ],
                where: ["Primorsky Krai, Russia", "연해주, 러시아", "Region Primorsky, Russland"],
                when: ["Dec. 2017 - Jan. 2018", "2017년 12월 - 2018년 1월", "Dez. 2017 - Jan. 2018"],
                tag: ["leadership"],
                smallwhere:true,
            },
            {
                job: ["Teaching & Knowledge Sharing", "교육 및 지식 공유", "Lehren und Wissen teilen"],
                items: [],
                where: [],
                when: [],
                subtitle: true,
                tag: ["writing","leadership","computer_science"],
            },
            {
                job: ["KAIST Global Strategy Institute 3rd Forum", "카이스트 글로벌전략센터 3회 포럼", "KAIST Global Strategy Institute 3. Forum"],
                link: "https://www.youtube.com/watch?v=fbj7YVgvKPI&t=10920s",
                description: [
                    "Invited Panel: Raised ethical questions on transhumanism and biotechnology", 
                    "초대받은 패널: 트랜스휴머니즘과 생명공학에 대한 윤리적 문제 제기",
                    "Eingeladenes Panel: Aufgeworfene ethische Fragen zu Transhumanismus und Biotechnologie"
                ],
                items: [],
                where: ["Online", "온라인", "Online"],
                when: ["Sept, 2020", "2020년 9월", "Sept, 2020"],
                tag: ["leadership"],
            },
            {
                job: ["KAIST School of Computing", "카이스트 전산학부", "KAIST School of Computing (Schule für Informatik)"],
                link: "https://cs101.kaist.ac.kr/",
                description: [
                    "TA for CS101, Intro. to Programming course, responsible for the mandatory lab sessions.", 
                    "조교: 프로그래밍의 기초 CS101, 카이스트 1학년 필수과목",
                    "Lehrassistent für CS101, Intro. zum Programmierkurs, verantwortlich für die obligatorischen Praktika."
                ],
                items: [
                    [
                        "Supplementary Material Author: Volunteered to Provide answers and explanations with video & documentation on lab sessions, homeworks, and practice quizes during COVID times.",
                        "교육보조자료 총괄: 코로나 시기 학생들의 학습여건 보장을 위한 실습 세션 답안 및 인강 제작",
                        "Autor des Zusatzmaterials: Freiwillige Bereitstellung von Antworten und Erklärungen mit Videos und Dokumentationen zu Laborsitzungen, Hausaufgaben und Übungsquizes während der COVID-Zeiten."
                    ],
                ],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Aug. 2019 - Jan. 2023", "2019년 8월 - 2023년 1월", "Aug. 2019 - Jan. 2023"],
                tag: ["writing","leadership","computer_science"],
            },
            {
                job: ["KAIST Prototyping Society (kOOk)", "카이스트 프로토타이핑 동아리 (kOOk)", "KAIST Prototyping Society (kOOk)"],
                link: "",
                description: [
                    "Founding Member and Seminar Presenter of KAIST Prototyping Society", 
                    "카이스트 프로토타이핑 동아리 창립 멤버 및 세미나 발표자",
                    "Gründungsmitglied und Seminarleiter der KAIST Prototyping Society"
                ],
                items: [],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Jan. 2019 - Feb. 2020", "2019년 1월 - 2020년 2월", "Jan. 2019 - Feb. 2020"],
                tag: ["leadership","computer_science"],
            },
            {
                job: ["KAIST Center for Gifted Education", "카이스트 영재교육원", "KAIST Center for Gifted Education (KAIST Zentrum für Begabtenförderung)"],
                link: "https://talented.kaist.ac.kr:8443/",
                description: [
                    "Taught programming with Python to elementary school students", 
                    "기간제 강사: 초등학교 영재학생에게 파이썬으로 프로그래밍을 가르쳤습니다.",
                    "Beigebracht Grundschülern das Programmieren mit Python"
                ],
                items: [
                    [
                        "Invited Speaker for 'Summer Programming Camp' for basics of programming and Arduino", 
                        "초청강사: 프로그래밍의 기초와 아두이노",
                        "Eingeladener Sprecher für das 'Summer Programming Camp' für Grundlagen der Programmierung und Arduino"
                    ]
                ],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Sept. 2020 - Jan. 2021", "2020년 9월 - 2021년 1월", "Sept. 2020 - Jan. 2021"],
                tag: ["leadership","computer_science"],
            },
            {
                job: ["Midam Scholarship Committee", "미담장학회", "Midam Scholarship Committee (Midam-Stipendienkomitee)"],
                link: "http://www.midamss.org/",
                description: [
                    "English Lecturer: Taught high school students for the Korean College Scholastic Ability Test.", 
                    "영어강사: 고3을 위한 수능영어 강사",
                    "Englischdozent: Unterrichtete Highschool-Schüler für koreanische Abitur"
                ],
                items: [],
                where: ["Daejeon, S. Korea", "대한민국 대전", "Daejeon, Südorea"],
                when: ["Aug. 2017 - Dec. 2017", "2017년 8월 - 2017년 12월", "Aug. 2017 - Dez. 2017"],
                tag: ["international","leadership"],
            },
        ],
    },
    {
        title: ["Award & Scholarship", "수상 및 장학금", "Auszeichnung & Stipendium"],
        type: "threecolumns",
        items: [
            {
                year: "2022",
                name: [
                    "Korea Health Industry Development Institute (KHIDI) President's Award", 
                    "한국보건산업진흥원장상",
                    "Korea Health Industry Development Institute (KHIDI) President's Award"
                ],
                description: [
                    "Overseas Market Entry Feasibility Diagnosis System Through Comparative Analysis between Medical Device Items",
                    "의료기기의 품목 간 비교분석을 통한 해외시장 진출 타당성 진단 프로그램",
                    "Machbarkeitsdiagnosesystem für den Markteintritt in Übersee durch vergleichende Analyse zwischen Medizinproduktartikeln"
                ],
                where: [],
                link: "https://www.khidi.or.kr/board/view?pageNum=3&rowCnt=10&no1=2075&linkId=48876424&menuId=MENU00099&maxIndex=00488795429998&minIndex=00488627429998&schType=0&schText=&schStartDate=&schEndDate=&boardStyle=&categoryId=&continent=&country=",
                tag: ["computer_science"],
            },
            {
                year: "2019",
                name: [
                    "KAIST E5 Startup Challenge", 
                    "KAIST E5 창업경진대회 (입선)",
                    "KAIST E5 Startup Challenge",
                ],
                description: [
                    "Dobby: Connecting Student Developer to the Startups Focusing on Hands-on Experiences", 
                    "학생 개발자와 중소기업을 연결하는 실무중심 교육 및 도급계약 플랫폼 도비",
                    "Dobby: Studentische Entwickler mit Startups verbinden, die sich auf praktische Erfahrungen konzentrieren"
                ],
                where: [],
                tag: ["computer_science","leadership"],
            },
            {
                year: "2017",
                name: ["Scholarship for Science, President of Korea","대통령과학장학금", "Stupendium für Wissenschaft, Präsident von Korea"],
                link: "https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_05_01",
                description: [
                    "Full Tuition + 2.5M KRW per semester",
                    "학비 전액 지급 및 학기당 250만원 추가 지원",
                    "Volle Studiengebühren + 2,5 Mio. KRW pro Semester"
                ],
                where: [],
                tag: ["leadership"],
            },
            {
                year: "2017",
                name: ["KAIST Presidential Fellowship","KAIST 총장 장학생", "Studentehrengesellschaft des Präsidents KAIST"],
                link: "https://leadership.kaist.ac.kr/en/page/sub/sub_0501.do",
                description: [
                    "10M KRW Budget for International Exchanges + Various Specialized Overseas Opportunities", 
                    "해외 교환학생 및 연수 위한 1천만원 장학금 및 멘토교수 매칭 등 혜택 부여",
                    "10 Mio. KRW-Budget für internationalen Austausch + verschiedene spezialisierte Möglichkeiten im Ausland"
                ],
                where: [],
                tag: ["leadership"],
            },
            {
                year: "2016",
                name: ["e-ICON World Contest, 2nd Place in the World", "e-ICON World Contest, 세계 2등상 수상", "e-ICON World Contest, 2. Platz der Welt"],
                link: "http://e-icon.or.kr/ko/2016%eb%85%84-%ec%a0%9c6%ed%9a%8c-%ec%88%98%ec%83%81%ec%9e%91/",
                description: [
                    "Culang: social network with word-to-word translation along with sentence-wise translation to naturally pick up foreign culture and language",
                    "Culang: 단어별 번역과 문장별 번역의 비교 제시를 통해 외국의 문화와 언어를 자연스레 습득하는 소셜 네트워크 개발",
                    "Culang: soziales Netzwerk mit Wort-zu-Wort-Übersetzung zusammen mit satzweiser Übersetzung, um fremde Kulturen und Sprachen auf natürliche Weise aufzunehmen"
                ],
                where: [],
                tag: ["international","computer_science","leadership"],
            },

        ],
    },
    {
        title: ["Certificates", "자격증", "Zertifikate"],
        type: "threecolumns",
        items: [
            {
                year: "2022",
                name: ["Advanced Data Analytics Semi-Professional", "데이터분석준전문가", "Advanced Data Analytics Semi-Professional"],
                description: ["National Technical Certificate","국가공인자격증", "Staatliches bauaufsichtliches Prüfzeugnis"],
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2021",
                name: ["Industrial Engineer, Data Processing", "정보처리산업기사", "Industrial Engineer, Data Processing"],
                description: ["National Technical Certificate","국가공인자격증", "Staatliches bauaufsichtliches Prüfzeugnis"],
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2021",
                name: ["A.I. Instructor, 1st Class", "인공지능교육지도사 1급", "KI Lehrer, 1. Klasse"],
                description: ["Private Technical Certificate", "민간기술자격증", "Privates technisches Zertifikat"],
                where: [],
                tag: ["computer_science"],
            },
        ],
        bigmargin:true,
    },
    {
        title: ["Selected Projects", "개인 프로젝트", "Ausgewählte Projekte"],
        type: "threecolumns",
        items: [
            {
                year: "2022",
                name: ["medical-market-finder", "medical-market-finder","medical-market-finder"],
                description: ["A Blockchain-based Web App that Finds the Best Market for a Given Product Group in the Medical Industry. Awarded by President of Korea Health Industry Development Institute", "블록체인 기반 의료기기 시장 탐색 플랫폼 (KHIDI)", "Eine Blockchain-basierte Web-App, die den besten Markt für eine bestimmte Produktgruppe in der Medizinbranche findet. Verliehen vom Präsidenten des Korea Health Industry Development Institute"],
                github: "https://github.com/sleepy-juan/medical-market-finder",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2020",
                name: ["Georeum", "거름", "Georeum"],
                description: ["Automated selection of test cases with emphasis on amended fragments", "수정된 부분에 집중하는 테스트케이스 자동 생성 프로그램", "Automatisierte Auswahl von Testfällen mit Schwerpunkt auf geänderten Fragmenten"],
                github: "https://github.com/limebell/GEOREUM",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2019",
                name: ["Travelling Salesman Problem Solver", "Travelling Salesman Problem 답안 생성기", "Problemlöser für das Problem des Handlungsreisenden"],
                description: ["introduces nobel search-based algorithms", "탐색기반 알고리즘 기반 프로그램", "Vorstellt neue suchbasierte Algorithmen"],
                github: "https://github.com/HyunchangOh/Travelling-Salesman-Problem",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2019",
                name: ["Testing False Positive Speech Recognition Using Evolutionary Algorithms", "유전자 알고리즘을 통한 거짓 양성 음성 데이터 생성 및 실험", "Testen der falsch positiven Spracherkennung mit evolutionären Algorithmen"],
                description: ["and human-in-the-loop interaction", "휴먼-인-더-루프 상호작용을 사용합니다", "mit Human-in-the-Loop-Interaktion"],
                github: "https://github.com/sleepy-juan/false-positive-speech-data",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2019",
                name: ["re-Cruit", "re-Cruit","re-Cruit"],
                description: ["History-Specified Job Hunting Platform for Students with Web Database", "학생을 위한 이력 반영되는 취업 시스템", "Geschichtsspezifische Jobsuche-Plattform für Studenten mit Webdatenbank"],
                github: "https://github.com/sleepy-juan/re-Cruit",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2019",
                name: ["PoZangZee", "PoZangZee", "PoZangZee"],
                description: ["HCI Project to develop Email System for Expert Users", "전문가를 위한 이메일 시스템 개발", "HCI-Projekt zur Entwicklung eines E-Mail-Systems für erfahrene Benutzer"],
                github: "https://github.com/sleepy-juan/PoZangZee",
                where: [],
                tag: ["computer_science"],
            },
            {
                year: "2016",
                name: ["Microbial Fuel Cell on Lignin", "리그닌을 활용한 미생물연료전지", "Mikrobielle Brennstoffzelle auf Lignin"],
                description: ["Advisor: Prof. Heechul Woo, Pukyong N'tl Univ", "지도: 우희철 교수님, 부경대학교", "Berater: Advisor: Prof. Dr. Heechul Woo, Pukyong N'tl Univ"],
                where: ["Busan, S.Korea", "대한민국 부산", "Busan, Südorea"],
                smallwhere:true,
                tag: ["biology","chemistry"],
            },
            {
                year: "2016",
                name: ["Microbial Desalination Cell Optimized for Local Waters", "지역 해수에 맞춘 미생물담수화전지 개발", "Mikrobielle Entsalzungszelle, optimiert für lokale Gewässer"],
                description: ["Advisor: Dr. Mansuk Cheon, Korea Science Academy", "지도: 천만석 선생님, 한국과학영재학교", "Berater: Dr. Mansuk Cheon, Korea Science Academy"],
                where: ["Singapore", "싱가포르", "Singapur"],
                smallwhere: true,
                tag: ["biology","chemistry","international"],
            },
            {
                year: "2016",
                name: ["Organic Sensors for Metal Ions", "금속 이온 탐지 유기 센서 개발", "Organische Sensoren für Metallionen"],
                description: ["Advisor: Dr. Jinho Oh, Korea Science Academy", "지도: 오진호 선생님, 한국과학영재학교", "Berater: Dr. Jinho Oh, Korea Science Academy"],
                where: ["Moscow, Russia", "러시아 모스크바", "Moskau, Russland"],
                smallwhere: true,
                tag: ["chemistry","international"],
            },
        ],
    },
    {
        title: ["Languages", "자연어", "Sprachen"],
        type: "twocolumns",
        items: [
            {
                category: ["Korean", "한국어", "Koreanisch"],
                description: ["Native (CEFR C2)","모국어 (CEFR C2)", "Muttersprachler (CEFR C2)"],
                tag: ["international"],
            },
            {
                category: ["English", "영어", "Englisch"],
                description: [
                    "Fluent (CEFR C2): TOEIC 990/990, TOEFL iBT 111/120", 
                    "유창함 (CEFR C2): TOEIC 990/990, TOEFL iBT 111/120",
                    "Fließend (CEFR C2): TOEIC 990/990, TOEFL iBT 111/120"
                ],
                tag: ["international"],
            },
            {
                category: ["German", "독일어", "Deutsch"],
                description: [
                    "Advanced (CEFR C2): DSH3",
                    "고급 (CEFR C1): DSH3",
                    "Fließend (CEFR C2): DSH3 an dem Studienkolleg der Technischen Universität Berlin"
                ],
                tag: ["international"],
            },
            {
                category: ["Chinese", "중국어", "Chinesisch"],
                description: [
                    "Advanced (CEFR C1): HSK Level 6",
                    "고급 (CEFR C1): HSK 6급",
                    "Mittelstufe (CEFR C1): HSK Niveau 6"
                ],
                tag: ["international"],
            },


        ],
    },
    {
        title: ["Programming Skills", "프로그래밍 기술", "Programmieren"],
        type: "twocolumns",
        items: [
            {
                category: ["Languages", "프로그래밍 언어", "Sprachen"],
                description: ["Python, Javascript, C/C++, Java, R, HTML/CSS", "Python, Javascript, C, Java, R, HTML/CSS","Python, Javascript, C/C++, Java, R, HTML/CSS",],
                tag: ["computer_science"],
            },
            {
                category: ["Database", "데이터베이스", "Datenbank"],
                description: ["MySQL, Firebase, MongoDB", "MySQL, Firebase, MongoDB","MySQL, Firebase, MongoDB",],
                tag: ["computer_science"],
            },
            {
                category: ["Frameworks", "프레임워크", "Frameworks"],
                description: ["ReactJS, Flask", "ReactJS, Flask","ReactJS, Flask",],
                tag: ["computer_science"],
            },
            {
                category: ["Prototyping", "프로토타이핑", "Prototyping"],
                description: ["Figma", "Figma","Figma",],
                tag: ["computer_science"],
            },
        ],
    },
];
let lastUpdateTime = ["Last Updated: Aug 05, 2023", "2023년 8월 5일에 마지막으로 수정되었습니다.", "Letzte Aktualisierung: 05.08.2023"];

// 0: korean
// 1: english
// 2: german
function overwrite(language, keepTags) {
    // keepTags = true;
    let container = document.getElementById("container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
    let photo = document.createElement("img");
    photo.src="foto.JPG";

    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(UIs.name[language]));

    let p = document.createElement("p");
    let mobile = document.createElement("i");
    mobile.classList.add("fa");
    mobile.classList.add("fa-mobile");
    let envelope = document.createElement("i");
    envelope.classList.add("fa");
    envelope.classList.add("fa-envelope");
    let a = document.createElement("a");
    a.setAttribute("href", "mailto:" + UIs.mail);
    a.appendChild(document.createTextNode(UIs.mail));
    let github = document.createElement("i");
    github.classList.add("fa");
    github.classList.add("fa-github");

    let aa = document.createElement("a");
    aa.setAttribute("href", UIs.githubLink);
    aa.appendChild(document.createTextNode(" " + UIs.githubId));

    let blogIcon = document.createElement("i");
    blogIcon.classList.add("fa");
    blogIcon.classList.add("fa-book");

    let blog = document.createElement("a");
    blog.setAttribute("href",UIs.blogLink);
    blog.appendChild(document.createTextNode(" HansMitKunst@Tistory"));

    let instaIcon = document.createElement("i");
    instaIcon.classList.add("fa");
    instaIcon.classList.add("fa-instagram");

    let insta = document.createElement("a");
    insta.setAttribute("href",UIs.instagramLink);
    insta.appendChild(document.createTextNode(" "+ UIs.instagramId));


    p.appendChild(mobile);
    p.appendChild(document.createTextNode(" " + UIs.mobile + " | "));
    p.appendChild(envelope);
    p.appendChild(document.createTextNode(" "));
    p.appendChild(a);
    p.appendChild(document.createTextNode(" | "));
    p.appendChild(github);
    p.appendChild(aa);
    p.appendChild(document.createTextNode(" | "));
    p.appendChild(blogIcon);
    p.appendChild(blog);
    p.appendChild(document.createTextNode(" | "));
    p.appendChild(instaIcon);
    p.appendChild(insta);
    container.appendChild(h1);
    container.appendChild(photo);
    container.appendChild(p);

    let resumebtn = document.createElement("a");
    resumebtn.setAttribute("href", "https://drive.google.com/uc?export=download&id=1OfFs6VxZgg3V8Al8C01TAd8JrAShBV-c");
    resumebtn.classList.add("button");
    resumebtn.classList.add("button-primary");
    resumebtn.appendChild(document.createTextNode(UIs.button[language]));

    let filterbtn = document.createElement("a");
    filterbtn.classList.add("button");
    filterbtn.appendChild(document.createTextNode(UIs.filter[language]));
    filterbtn.addEventListener("click", function () {
        filterbtn.classList.toggle("button-primary");
        if (filterbtn.classList.contains("button-primary")) {
            koreanbtn.after(tagcontainer);
            englishbtn.after(tagcontainer);
            germanbtn.after(tagcontainer);
        } else {
            container.removeChild(tagcontainer);
        }
    });

    let englishbtn = document.createElement("a");
    englishbtn.classList.add("button");
    if(language===1){
        englishbtn.classList.add("button-primary");
    }
    englishbtn.appendChild(document.createTextNode(UIs.language[0]));
    englishbtn.addEventListener("click", function () {
        tag_selected = Object.keys(tag_translation_sheet);
        overwrite(1);
    });

    let koreanbtn = document.createElement("a");
    koreanbtn.classList.add("button");
    if(language===0){
        koreanbtn.classList.add("button-primary");
    }
    koreanbtn.appendChild(document.createTextNode(UIs.language[1]));
    koreanbtn.addEventListener("click", function () {
        tag_selected = Object.keys(tag_translation_sheet);
        overwrite(0);
    });

    let germanbtn = document.createElement("a");
    germanbtn.classList.add("button");
    if(language===2){
        germanbtn.classList.add("button-primary");
    }
    germanbtn.appendChild(document.createTextNode(UIs.language[2]));
    germanbtn.addEventListener("click", function () {
        tag_selected = Object.keys(tag_translation_sheet);
        overwrite(2);
    });

    let tagcontainer = document.createElement("div");
    tagcontainer.classList.add("row");
    tagcontainer.classList.add("tagcontainer");
    let tags = new Set();
    contents.forEach((content) => {
        content.items.forEach((item) => {
            if (!item.tag) return;
            item.tag.forEach((tag) => {
                tags.add(tag);
            });
        });
    });

    for (let tag of tags) {
        let tagitem = document.createElement("span");
        tagitem.classList.add("tag");
        if (tag_selected.includes(tag)) tagitem.classList.add("tag-selected");
        tagitem.appendChild(document.createTextNode(tag + " "));
        tagitem.addEventListener("click", function (e) {
            e.target.classList.toggle("tag-selected");
            if (e.target.classList.contains("tag-selected")) {
                tag_selected.push(tag);
            } else {
                const index = tag_selected.indexOf(tag);
                if (index > -1) {
                    tag_selected.splice(index, 1);
                }
            }

            overwrite(language, true);
        });
        tagcontainer.appendChild(tagitem);
    }

    let selectall = document.createElement("span");
    selectall.classList.add("tag");
    selectall.classList.add("tag-button");
    selectall.appendChild(document.createTextNode("select all "));
    selectall.addEventListener("click", function (e) {
        tag_selected = Object.keys(tag_translation_sheet);
        overwrite(language, true);
    });
    tagcontainer.appendChild(selectall);

    let deselectall = document.createElement("span");
    deselectall.classList.add("tag");
    deselectall.classList.add("tag-button");
    deselectall.appendChild(document.createTextNode("deselect all "));
    deselectall.addEventListener("click", function (e) {
        tag_selected = [];
        overwrite(language, true);
    });
    tagcontainer.appendChild(deselectall);

    container.appendChild(h1);
    container.appendChild(p);
    // container.appendChild(resumebtn);
    container.appendChild(filterbtn);
    container.appendChild(englishbtn);
    container.appendChild(koreanbtn);
    container.appendChild(germanbtn);

    if (keepTags) {
        filterbtn.classList.add("button-primary");
        englishbtn.after(tagcontainer);
        koreanbtn.after(tagcontainer);
        germanbtn.after(tagcontainer);
    }

    contents.forEach((content) => {
        container.appendChild(document.createElement("hr"));

        let h5 = document.createElement("h5");
        h5.appendChild(document.createTextNode(content.title[language]));
        container.appendChild(h5);

        if (content.type === "multilined") {
            content.items.forEach((item) => {
                if (!item.tag) {
                    item.tag = [];
                }
                const intersection = item.tag.filter((tag) => tag_selected.includes(tag));
                if (intersection.length === 0) return;

                let outer = document.createElement("div");
                if(item.nomargin){
                    outer.classList.add("nomargin");
                }
                if(item.bigmargin){
                    outer.classList.add("bigmargin")
                }
                outer.classList.add("row");
                outer.classList.add("multilined");

                let ninecolumns = document.createElement("div");
                ninecolumns.classList.add("nine");
                ninecolumns.classList.add("columns");

                
                if(item.job){
                    let job = document.createElement("p");
                    job.classList.add("job");
                    job.appendChild(document.createTextNode(item.job[language] + " "));
    
                    if (item.link) {
                        let a = document.createElement("a");
                        a.setAttribute("href", item.link);
    
                        let i = document.createElement("i");
                        i.classList.add("fa");
                        i.classList.add("fa-link");
    
                        a.appendChild(i);
                        job.appendChild(a);
                    }
                    if (item.subtitle){
                        job.classList.add("subtitle");
                    }
                    ninecolumns.appendChild(job);
                }


                if(item.description){
                    let description = document.createElement("p");
                    description.classList.add("description");
                    description.appendChild(document.createTextNode(item.description[language]));
                    ninecolumns.appendChild(description);
                }

                if(item.items){
                    let ul = document.createElement("ul");
                    item.items.forEach((tli) => {
                        let li = document.createElement("li");
                        li.appendChild(document.createTextNode(tli[language]));
                        ul.appendChild(li);
                    });
    
    
    
                    ninecolumns.appendChild(ul);
                }


                let threecolumns = document.createElement("div");
                threecolumns.classList.add("three");
                threecolumns.classList.add("columns");


                if(!item.subtitle){
                    if(item.where){
                        let where = document.createElement("p");
                        where.classList.add("where");
                        if(item.smallwhere){
                            where.classList.add("smallwhere");
                        }
                        where.appendChild(document.createTextNode(item.where[language]));
                        threecolumns.appendChild(where);
                        
                    }
    
                    if(item.when){
                        let when = document.createElement("p");
                        when.classList.add("when");
                        if(item.smallwhere){
                            when.classList.add("smallwhere");
                        }
                        when.appendChild(document.createTextNode(item.when[language]));
                        threecolumns.appendChild(when);
                    }
                }


                outer.appendChild(ninecolumns);
                outer.appendChild(threecolumns);

                container.appendChild(outer);
            });
        } else if (content.type === "threecolumns") {
            content.items.forEach((item) => {
                if (!item.tag) {
                    item.tag = [];
                }
                const intersection = item.tag.filter((tag) => tag_selected.includes(tag));
                if (intersection.length === 0) return;

                let outer = document.createElement("div");
                outer.classList.add("row");

                let onecolumn = document.createElement("div");
                onecolumn.classList.add("one");
                onecolumn.classList.add("columns");
                onecolumn.classList.add("when");
                onecolumn.appendChild(document.createTextNode(item.year));

                let ninecolumns = document.createElement("div");
                ninecolumns.classList.add("nine");
                ninecolumns.classList.add("columns");

                let span = document.createElement("span");
                span.classList.add("name");
                span.appendChild(document.createTextNode(item.name[language]));

                ninecolumns.appendChild(span);
                if (item.description) {
                    ninecolumns.appendChild(document.createTextNode(", " + item.description[language]));
                }

                if (item.link) {
                    ninecolumns.appendChild(document.createTextNode(" "));
                    let a = document.createElement("a");
                    a.setAttribute("href", item.link);
                    let i = document.createElement("i");
                    i.classList.add("fa");
                    i.classList.add("fa-link");
                    a.appendChild(i);
                    ninecolumns.appendChild(a);
                }
                if (item.github) {
                    ninecolumns.appendChild(document.createTextNode(" "));
                    let a = document.createElement("a");
                    a.setAttribute("href", item.github);
                    let i = document.createElement("i");
                    i.classList.add("fa");
                    i.classList.add("fa-github");
                    a.appendChild(i);
                    ninecolumns.appendChild(a);
                }

                let twocolumns = document.createElement("div");
                twocolumns.classList.add("two");
                twocolumns.classList.add("columns");
                if(item.where.length >0){
                    twocolumns.classList.add("where");
                    twocolumns.appendChild(document.createTextNode(item.where[language]));
                }


                outer.appendChild(onecolumn);
                outer.appendChild(ninecolumns);
                outer.appendChild(twocolumns);
                if(item.placeholder){
                    twocolumns.classList.add("placeholder");
                    onecolumns.classList.add("placeholder");
                    ninecolumns.classList.add("placeholder");
                }
                container.appendChild(outer);
            });
        } else if (content.type === "twocolumns") {
            content.items.forEach((item) => {
                if (!item.tag) {
                    item.tag = [];
                }
                const intersection = item.tag.filter((tag) => tag_selected.includes(tag));
                if (intersection.length === 0) return;

                let outer = document.createElement("div");
                outer.classList.add("row");

                let twocolumns = document.createElement("div");
                twocolumns.classList.add("two");
                twocolumns.classList.add("columns");
                twocolumns.classList.add("name");
                if (item.category[language].trim() === "") twocolumns.innerHTML = "&nbsp;";
                else twocolumns.appendChild(document.createTextNode(item.category[language]));

                let tencolumns = document.createElement("div");
                tencolumns.classList.add("ten");
                tencolumns.classList.add("columns");
                tencolumns.innerHTML = item.description[language];

                outer.appendChild(twocolumns);
                outer.appendChild(tencolumns);

                container.appendChild(outer);
            });
        }
    });

    container.appendChild(document.createElement("hr"));

    p = document.createElement("p");
    p.appendChild(document.createTextNode(lastUpdateTime[language]));
    container.appendChild(p);
}
