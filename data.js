const ly = [{dots: [{"x":1,"y":148},{"x":29,"y":130},{"x":67,"y":121},{"x":149,"y":142},{"x":173,"y":202},{"x":148,"y":261},{"x":108,"y":286},{"x":80,"y":268},{"x":98,"y":244},{"x":136,"y":240},{"x":182,"y":252},{"x":284,"y":345},{"x":304,"y":390},{"x":305,"y":415},{"x":290,"y":430},{"x":233,"y":420},{"x":161,"y":363},{"x":122,"y":310},{"x":109,"y":263},{"x":120,"y":198},{"x":141,"y":176},{"x":162,"y":172},{"x":211,"y":196},{"x":254,"y":283},{"x":249,"y":318},{"x":234,"y":326},{"x":223,"y":308},{"x":223,"y":278},{"x":234,"y":237},{"x":263,"y":189},{"x":310,"y":157},{"x":351,"y":152},{"x":381,"y":164},{"x":399,"y":187},{"x":409,"y":222},{"x":396,"y":280},{"x":365,"y":330},{"x":333,"y":362},{"x":282,"y":397},{"x":215,"y":421},{"x":180,"y":420},{"x":159,"y":410},{"x":154,"y":398},{"x":159,"y":381},{"x":175,"y":367},{"x":206,"y":360},{"x":249,"y":356},{"x":286,"y":363},{"x":453,"y":403},{"x":499,"y":410}]
, step: `<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M1,148L15,148L15,130L48,130L48,121L108,121L108,142L161,142L161,202L160.5,202L160.5,261L128,261L128,286L94,286L94,268L89,268L89,244L117,244L117,240L159,240L159,252L233,252L233,345L294,345L294,390L304.5,390L304.5,415L297.5,415L297.5,430L261.5,430L261.5,420L197,420L197,363L141.5,363L141.5,310L115.5,310L115.5,263L114.5,263L114.5,198L130.5,198L130.5,176L151.5,176L151.5,172L186.5,172L186.5,196L232.5,196L232.5,283L251.5,283L251.5,318L241.5,318L241.5,326L228.5,326L228.5,308L223,308L223,278L228.5,278L228.5,237L248.5,237L248.5,189L286.5,189L286.5,157L330.5,157L330.5,152L366,152L366,164L390,164L390,187L404,187L404,222L402.5,222L402.5,280L380.5,280L380.5,330L349,330L349,362L307.5,362L307.5,397L248.5,397L248.5,421L197.5,421L197.5,420L169.5,420L169.5,410L156.5,410L156.5,398L156.5,398L156.5,381L167,381L167,367L190.5,367L190.5,360L227.5,360L227.5,356L267.5,356L267.5,363L369.5,363L369.5,403L476,403L476,410L499,410" stroke="#000000" stroke-width="2" fill="none"></path></svg>`
, basis: `<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M1,148L5.666666666666667,145C10.333333333333334,142,19.666666666666668,136,30.666666666666668,131.5C41.666666666666664,127,54.333333333333336,124,74.33333333333333,126C94.33333333333333,128,121.66666666666667,135,139.33333333333334,148.5C157,162,165,182,164.83333333333334,201.83333333333334C164.66666666666666,221.66666666666666,156.33333333333334,241.33333333333334,145.5,255.33333333333334C134.66666666666666,269.3333333333333,121.33333333333333,277.6666666666667,110,278.8333333333333C98.66666666666667,280,89.33333333333333,274,87.66666666666667,267C86,260,92,252,101.33333333333333,247.33333333333334C110.66666666666667,242.66666666666666,123.33333333333333,241.33333333333334,137.33333333333334,242.66666666666666C151.33333333333334,244,166.66666666666666,248,191.33333333333334,265.5C216,283,250,314,270.3333333333333,337C290.6666666666667,360,297.3333333333333,375,300.8333333333333,386.6666666666667C304.3333333333333,398.3333333333333,304.6666666666667,406.6666666666667,302.3333333333333,413.3333333333333C300,420,295,425,283,425.8333333333333C271,426.6666666666667,252,423.3333333333333,230.5,412.1666666666667C209,401,185,382,166.5,363.6666666666667C148,345.3333333333333,135,327.6666666666667,126.33333333333333,311C117.66666666666667,294.3333333333333,113.33333333333333,278.6666666666667,113,260C112.66666666666667,241.33333333333334,116.33333333333333,219.66666666666666,121.66666666666667,205.16666666666666C127,190.66666666666666,134,183.33333333333334,141,179C148,174.66666666666666,155,173.33333333333334,166.66666666666666,176.66666666666666C178.33333333333334,180,194.66666666666666,188,210,206.5C225.33333333333334,225,239.66666666666666,254,246,274.3333333333333C252.33333333333334,294.6666666666667,250.66666666666666,306.3333333333333,247.33333333333334,313.5C244,320.6666666666667,239,323.3333333333333,234.66666666666666,321.6666666666667C230.33333333333334,320,226.66666666666666,314,224.83333333333334,306C223,298,223,288,224.83333333333334,276.1666666666667C226.66666666666666,264.3333333333333,230.33333333333334,250.66666666666666,237,235.83333333333334C243.66666666666666,221,253.33333333333334,205,266,191.66666666666666C278.6666666666667,178.33333333333334,294.3333333333333,167.66666666666666,309,161.5C323.6666666666667,155.33333333333334,337.3333333333333,153.66666666666666,349.1666666666667,154.83333333333334C361,156,371,160,379,165.83333333333334C387,171.66666666666666,393,179.33333333333334,397.6666666666667,189C402.3333333333333,198.66666666666666,405.6666666666667,210.33333333333334,405.1666666666667,225.83333333333334C404.6666666666667,241.33333333333334,400.3333333333333,260.6666666666667,393,278.6666666666667C385.6666666666667,296.6666666666667,375.3333333333333,313.3333333333333,364.8333333333333,327C354.3333333333333,340.6666666666667,343.6666666666667,351.3333333333333,329.8333333333333,362.5C316,373.6666666666667,299,385.3333333333333,279.3333333333333,395.1666666666667C259.6666666666667,405,237.33333333333334,413,220.33333333333334,416.8333333333333C203.33333333333334,420.6666666666667,191.66666666666666,420.3333333333333,182.33333333333334,418.5C173,416.6666666666667,166,413.3333333333333,161.66666666666666,409.6666666666667C157.33333333333334,406,155.66666666666666,402,155.66666666666666,397.1666666666667C155.66666666666666,392.3333333333333,157.33333333333334,386.6666666666667,160.83333333333334,381.5C164.33333333333334,376.3333333333333,169.66666666666666,371.6666666666667,177.5,368.1666666666667C185.33333333333334,364.6666666666667,195.66666666666666,362.3333333333333,208,360.5C220.33333333333334,358.6666666666667,234.66666666666666,357.3333333333333,248,357.8333333333333C261.3333333333333,358.3333333333333,273.6666666666667,360.6666666666667,307.6666666666667,368.5C341.6666666666667,376.3333333333333,397.3333333333333,389.6666666666667,432.8333333333333,397.5C468.3333333333333,405.3333333333333,483.6666666666667,407.6666666666667,491.3333333333333,408.8333333333333L499,410" stroke="#000000" stroke-width="2" fill="none"></path></svg>`
},{dots:[{"x":0,"y":326},{"x":40,"y":324},{"x":104,"y":340},{"x":288,"y":406},{"x":323,"y":407},{"x":355,"y":401},{"x":382,"y":389},{"x":396,"y":364},{"x":399,"y":329},{"x":395,"y":294},{"x":378,"y":261},{"x":360,"y":248},{"x":347,"y":255},{"x":346,"y":271},{"x":367,"y":289},{"x":415,"y":300},{"x":428,"y":308},{"x":431,"y":326},{"x":425,"y":343},{"x":412,"y":355},{"x":416,"y":347},{"x":420,"y":338},{"x":426,"y":315},{"x":426,"y":290},{"x":416,"y":271},{"x":399,"y":258},{"x":384,"y":255},{"x":362,"y":264},{"x":318,"y":320},{"x":271,"y":448},{"x":270,"y":466},{"x":272,"y":472},{"x":275,"y":471},{"x":280,"y":466},{"x":318,"y":339},{"x":336,"y":207},{"x":331,"y":181},{"x":312,"y":176},{"x":290,"y":195},{"x":291,"y":204},{"x":302,"y":204},{"x":318,"y":188},{"x":336,"y":157},{"x":353,"y":139},{"x":370,"y":133},{"x":379,"y":141},{"x":372,"y":158},{"x":350,"y":181},{"x":325,"y":191},{"x":288,"y":186},{"x":279,"y":177},{"x":277,"y":162},{"x":284,"y":145},{"x":335,"y":98},{"x":362,"y":87},{"x":389,"y":88},{"x":407,"y":101},{"x":407,"y":124},{"x":393,"y":139},{"x":367,"y":145},{"x":341,"y":141},{"x":267,"y":100},{"x":253,"y":79},{"x":256,"y":60},{"x":276,"y":52},{"x":297,"y":52},{"x":319,"y":60},{"x":337,"y":78},{"x":340,"y":103},{"x":324,"y":140},{"x":271,"y":171},{"x":245,"y":167},{"x":235,"y":145},{"x":241,"y":121},{"x":273,"y":87},{"x":334,"y":47},{"x":360,"y":46},{"x":376,"y":57},{"x":372,"y":78},{"x":347,"y":107},{"x":307,"y":123},{"x":271,"y":127},{"x":238,"y":116},{"x":234,"y":104},{"x":245,"y":92},{"x":301,"y":82},{"x":315,"y":87},{"x":321,"y":97},{"x":308,"y":107},{"x":295,"y":108},{"x":294,"y":97},{"x":301,"y":90},{"x":327,"y":75},{"x":360,"y":67},{"x":395,"y":59},{"x":452,"y":56},{"x":499,"y":57}]
, basis:`<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M0,326L6.666666666666667,325.6666666666667C13.333333333333334,325.3333333333333,26.666666666666668,324.6666666666667,44,327C61.333333333333336,329.3333333333333,82.66666666666667,334.6666666666667,124,348.3333333333333C165.33333333333334,362,226.66666666666666,384,263.1666666666667,395.1666666666667C299.6666666666667,406.3333333333333,311.3333333333333,406.6666666666667,322.5,405.8333333333333C333.6666666666667,405,344.3333333333333,403,354.1666666666667,400C364,397,373,393,379.8333333333333,386.8333333333333C386.6666666666667,380.6666666666667,391.3333333333333,372.3333333333333,394.1666666666667,362.3333333333333C397,352.3333333333333,398,340.6666666666667,397.8333333333333,329C397.6666666666667,317.3333333333333,396.3333333333333,305.6666666666667,392.8333333333333,294.3333333333333C389.3333333333333,283,383.6666666666667,272,377.8333333333333,264.3333333333333C372,256.6666666666667,366,252.33333333333334,360.8333333333333,251.33333333333334C355.6666666666667,250.33333333333334,351.3333333333333,252.66666666666666,349,256.5C346.6666666666667,260.3333333333333,346.3333333333333,265.6666666666667,349.6666666666667,271.3333333333333C353,277,360,283,371.5,287.8333333333333C383,292.6666666666667,399,296.3333333333333,409.1666666666667,299.5C419.3333333333333,302.6666666666667,423.6666666666667,305.3333333333333,426.3333333333333,309.6666666666667C429,314,430,320,429.5,325.8333333333333C429,331.6666666666667,427,337.3333333333333,423.8333333333333,342.1666666666667C420.6666666666667,347,416.3333333333333,351,414.8333333333333,351.6666666666667C413.3333333333333,352.3333333333333,414.6666666666667,349.6666666666667,416,346.8333333333333C417.3333333333333,344,418.6666666666667,341,420.3333333333333,335.6666666666667C422,330.3333333333333,424,322.6666666666667,425,314.6666666666667C426,306.6666666666667,426,298.3333333333333,424.3333333333333,291C422.6666666666667,283.6666666666667,419.3333333333333,277.3333333333333,414.8333333333333,272C410.3333333333333,266.6666666666667,404.6666666666667,262.3333333333333,399.3333333333333,259.6666666666667C394,257,389,256,382.8333333333333,257C376.6666666666667,258,369.3333333333333,261,358.3333333333333,271.8333333333333C347.3333333333333,282.6666666666667,332.6666666666667,301.3333333333333,317.5,332C302.3333333333333,362.6666666666667,286.6666666666667,405.3333333333333,278.6666666666667,429.6666666666667C270.6666666666667,454,270.3333333333333,460,270.5,464C270.6666666666667,468,271.3333333333333,470,272.1666666666667,470.8333333333333C273,471.6666666666667,274,471.3333333333333,275.3333333333333,470.3333333333333C276.6666666666667,469.3333333333333,278.3333333333333,467.6666666666667,285.5,445.6666666666667C292.6666666666667,423.6666666666667,305.3333333333333,381.3333333333333,314.6666666666667,338.1666666666667C324,295,330,251,332.1666666666667,224.66666666666666C334.3333333333333,198.33333333333334,332.6666666666667,189.66666666666666,328.6666666666667,184.5C324.6666666666667,179.33333333333334,318.3333333333333,177.66666666666666,311.5,180C304.6666666666667,182.33333333333334,297.3333333333333,188.66666666666666,293.8333333333333,193.33333333333334C290.3333333333333,198,290.6666666666667,201,292.6666666666667,202.5C294.6666666666667,204,298.3333333333333,204,302.8333333333333,201.33333333333334C307.3333333333333,198.66666666666666,312.6666666666667,193.33333333333334,318.3333333333333,185.5C324,177.66666666666666,330,167.33333333333334,335.8333333333333,159.16666666666666C341.6666666666667,151,347.3333333333333,145,353,141C358.6666666666667,137,364.3333333333333,135,368.6666666666667,135.33333333333334C373,135.66666666666666,376,138.33333333333334,376.3333333333333,142.5C376.6666666666667,146.66666666666666,374.3333333333333,152.33333333333334,369.5,159C364.6666666666667,165.66666666666666,357.3333333333333,173.33333333333334,349.5,178.83333333333334C341.6666666666667,184.33333333333334,333.3333333333333,187.66666666666666,323,188.5C312.6666666666667,189.33333333333334,300.3333333333333,187.66666666666666,292.6666666666667,185.33333333333334C285,183,282,180,280.1666666666667,176C278.3333333333333,172,277.6666666666667,167,278.5,161.66666666666666C279.3333333333333,156.33333333333334,281.6666666666667,150.66666666666666,291.3333333333333,140C301,129.33333333333334,318,113.66666666666667,331,104C344,94.33333333333333,353,90.66666666666667,362,89C371,87.33333333333333,380,87.66666666666667,387.5,90C395,92.33333333333333,401,96.66666666666667,404,102.66666666666667C407,108.66666666666667,407,116.33333333333333,404.6666666666667,122.66666666666667C402.3333333333333,129,397.6666666666667,134,391,137.5C384.3333333333333,141,375.6666666666667,143,367,143.33333333333334C358.3333333333333,143.66666666666666,349.6666666666667,142.33333333333334,333,134.83333333333334C316.3333333333333,127.33333333333333,291.6666666666667,113.66666666666667,277,103.33333333333333C262.3333333333333,93,257.6666666666667,86,255.83333333333334,79.33333333333333C254,72.66666666666667,255,66.33333333333333,258.8333333333333,61.833333333333336C262.6666666666667,57.333333333333336,269.3333333333333,54.666666666666664,276.1666666666667,53.333333333333336C283,52,290,52,297.1666666666667,53.333333333333336C304.3333333333333,54.666666666666664,311.6666666666667,57.333333333333336,318.3333333333333,61.666666666666664C325,66,331,72,334.5,79.16666666666667C338,86.33333333333333,339,94.66666666666667,336.8333333333333,105C334.6666666666667,115.33333333333333,329.3333333333333,127.66666666666667,317.8333333333333,139C306.3333333333333,150.33333333333334,288.6666666666667,160.66666666666666,275.5,165.16666666666666C262.3333333333333,169.66666666666666,253.66666666666666,168.33333333333334,247.66666666666666,164C241.66666666666666,159.66666666666666,238.33333333333334,152.33333333333334,237.66666666666666,144.66666666666666C237,137,239,129,245.33333333333334,119.33333333333333C251.66666666666666,109.66666666666667,262.3333333333333,98.33333333333333,277.8333333333333,86C293.3333333333333,73.66666666666667,313.6666666666667,60.333333333333336,328.1666666666667,53.5C342.6666666666667,46.666666666666664,351.3333333333333,46.333333333333336,358.3333333333333,48C365.3333333333333,49.666666666666664,370.6666666666667,53.333333333333336,372.6666666666667,58.666666666666664C374.6666666666667,64,373.3333333333333,71,368.5,79.33333333333333C363.6666666666667,87.66666666666667,355.3333333333333,97.33333333333333,344.5,104.83333333333333C333.6666666666667,112.33333333333333,320.3333333333333,117.66666666666667,307.6666666666667,121C295,124.33333333333333,283,125.66666666666667,271.5,124.5C260,123.33333333333333,249,119.66666666666667,242.83333333333334,115.83333333333333C236.66666666666666,112,235.33333333333334,108,236.5,104C237.66666666666666,100,241.33333333333334,96,252.5,92.33333333333333C263.6666666666667,88.66666666666667,282.3333333333333,85.33333333333333,294,84.5C305.6666666666667,83.66666666666667,310.3333333333333,85.33333333333333,313.6666666666667,87.83333333333333C317,90.33333333333333,319,93.66666666666667,317.8333333333333,97C316.6666666666667,100.33333333333333,312.3333333333333,103.66666666666667,308,105.5C303.6666666666667,107.33333333333333,299.3333333333333,107.66666666666667,297,106C294.6666666666667,104.33333333333333,294.3333333333333,100.66666666666667,295.3333333333333,97.66666666666667C296.3333333333333,94.66666666666667,298.6666666666667,92.33333333333333,304.1666666666667,88.66666666666667C309.6666666666667,85,318.3333333333333,80,328.1666666666667,76.16666666666667C338,72.33333333333333,349,69.66666666666667,360.3333333333333,67C371.6666666666667,64.33333333333333,383.3333333333333,61.666666666666664,398.6666666666667,59.833333333333336C414,58,433,57,450.3333333333333,56.666666666666664C467.6666666666667,56.333333333333336,483.3333333333333,56.666666666666664,491.1666666666667,56.833333333333336L499,57" stroke="#000000" stroke-width="2" fill="none"></path></svg>`
, step: `<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M0,326L20,326L20,324L72,324L72,340L196,340L196,406L305.5,406L305.5,407L339,407L339,401L368.5,401L368.5,389L389,389L389,364L397.5,364L397.5,329L397,329L397,294L386.5,294L386.5,261L369,261L369,248L353.5,248L353.5,255L346.5,255L346.5,271L356.5,271L356.5,289L391,289L391,300L421.5,300L421.5,308L429.5,308L429.5,326L428,326L428,343L418.5,343L418.5,355L414,355L414,347L418,347L418,338L423,338L423,315L426,315L426,290L421,290L421,271L407.5,271L407.5,258L391.5,258L391.5,255L373,255L373,264L340,264L340,320L294.5,320L294.5,448L270.5,448L270.5,466L271,466L271,472L273.5,472L273.5,471L277.5,471L277.5,466L299,466L299,339L327,339L327,207L333.5,207L333.5,181L321.5,181L321.5,176L301,176L301,195L290.5,195L290.5,204L296.5,204L296.5,204L310,204L310,188L327,188L327,157L344.5,157L344.5,139L361.5,139L361.5,133L374.5,133L374.5,141L375.5,141L375.5,158L361,158L361,181L337.5,181L337.5,191L306.5,191L306.5,186L283.5,186L283.5,177L278,177L278,162L280.5,162L280.5,145L309.5,145L309.5,98L348.5,98L348.5,87L375.5,87L375.5,88L398,88L398,101L407,101L407,124L400,124L400,139L380,139L380,145L354,145L354,141L304,141L304,100L260,100L260,79L254.5,79L254.5,60L266,60L266,52L286.5,52L286.5,52L308,52L308,60L328,60L328,78L338.5,78L338.5,103L332,103L332,140L297.5,140L297.5,171L258,171L258,167L240,167L240,145L238,145L238,121L257,121L257,87L303.5,87L303.5,47L347,47L347,46L368,46L368,57L374,57L374,78L359.5,78L359.5,107L327,107L327,123L289,123L289,127L254.5,127L254.5,116L236,116L236,104L239.5,104L239.5,92L273,92L273,82L308,82L308,87L318,87L318,97L314.5,97L314.5,107L301.5,107L301.5,108L294.5,108L294.5,97L297.5,97L297.5,90L314,90L314,75L343.5,75L343.5,67L377.5,67L377.5,59L423.5,59L423.5,56L475.5,56L475.5,57L499,57" stroke="#000000" stroke-width="2" fill="none"></path></svg>`
 },{dots: [{"x":0,"y":235},{"x":85,"y":222},{"x":91,"y":216},{"x":85,"y":206},{"x":74,"y":204},{"x":66,"y":210},{"x":61,"y":223},{"x":61,"y":252},{"x":53,"y":261},{"x":33,"y":265},{"x":26,"y":261},{"x":27,"y":251},{"x":36,"y":248},{"x":47,"y":248},{"x":66,"y":258},{"x":85,"y":267},{"x":92,"y":266},{"x":104,"y":256},{"x":114,"y":248},{"x":110,"y":257},{"x":112,"y":263},{"x":120,"y":264},{"x":126,"y":258},{"x":126,"y":250},{"x":120,"y":247},{"x":120,"y":252},{"x":127,"y":259},{"x":133,"y":258},{"x":139,"y":252},{"x":140,"y":245},{"x":139,"y":258},{"x":143,"y":264},{"x":146,"y":266},{"x":149,"y":261},{"x":154,"y":244},{"x":157,"y":253},{"x":164,"y":256},{"x":173,"y":257},{"x":179,"y":250},{"x":176,"y":245},{"x":170,"y":248},{"x":168,"y":261},{"x":176,"y":267},{"x":183,"y":265},{"x":190,"y":257},{"x":198,"y":246},{"x":212,"y":245},{"x":224,"y":245},{"x":215,"y":237},{"x":214,"y":221},{"x":220,"y":212},{"x":229,"y":204},{"x":238,"y":204},{"x":247,"y":211},{"x":249,"y":226},{"x":246,"y":238},{"x":245,"y":254},{"x":249,"y":264},{"x":260,"y":264},{"x":270,"y":255},{"x":287,"y":213},{"x":285,"y":231},{"x":282,"y":250},{"x":283,"y":266},{"x":284,"y":281},{"x":279,"y":297},{"x":268,"y":300},{"x":262,"y":284},{"x":272,"y":275},{"x":297,"y":264},{"x":304,"y":264},{"x":300,"y":257},{"x":302,"y":250},{"x":308,"y":248},{"x":315,"y":246},{"x":318,"y":255},{"x":312,"y":263},{"x":1,"y":2},{"x":4,"y":1},{"x":3,"y":2},{"x":4,"y":3},{"x":309,"y":251},{"x":312,"y":255},{"x":321,"y":258},{"x":328,"y":255},{"x":331,"y":248},{"x":330,"y":259},{"x":334,"y":260},{"x":338,"y":260},{"x":342,"y":249},{"x":343,"y":257},{"x":347,"y":262},{"x":353,"y":262},{"x":358,"y":254},{"x":364,"y":245},{"x":362,"y":238},{"x":355,"y":245},{"x":369,"y":249},{"x":369,"y":256},{"x":372,"y":264},{"x":377,"y":265},{"x":386,"y":257},{"x":390,"y":251},{"x":392,"y":244},{"x":391,"y":236},{"x":388,"y":243},{"x":393,"y":251},{"x":397,"y":258},{"x":395,"y":264},{"x":388,"y":261},{"x":391,"y":266},{"x":399,"y":263},{"x":408,"y":259},{"x":416,"y":255},{"x":420,"y":251},{"x":417,"y":244},{"x":410,"y":247},{"x":411,"y":257},{"x":415,"y":264},{"x":421,"y":265},{"x":429,"y":260},{"x":437,"y":246},{"x":446,"y":218},{"x":446,"y":210},{"x":442,"y":205},{"x":436,"y":209},{"x":433,"y":225},{"x":435,"y":258},{"x":438,"y":264},{"x":444,"y":266},{"x":455,"y":254},{"x":468,"y":208},{"x":462,"y":200},{"x":455,"y":205},{"x":455,"y":301},{"x":459,"y":307},{"x":465,"y":304},{"x":467,"y":288},{"x":457,"y":270},{"x":476,"y":253},{"x":500,"y":220}]}]

 /* 

 // Globals
let lines = [
  [{"x":0,"y":326},{"x":40,"y":324},{"x":104,"y":340},{"x":288,"y":406},{"x":323,"y":407},{"x":355,"y":401},{"x":382,"y":389},{"x":396,"y":364},{"x":399,"y":329},{"x":395,"y":294},{"x":378,"y":261},{"x":360,"y":248},{"x":347,"y":255},{"x":346,"y":271},{"x":367,"y":289},{"x":415,"y":300},{"x":428,"y":308},{"x":431,"y":326},{"x":425,"y":343},{"x":412,"y":355},{"x":416,"y":347},{"x":420,"y":338},{"x":426,"y":315},{"x":426,"y":290},{"x":416,"y":271},{"x":399,"y":258},{"x":384,"y":255},{"x":362,"y":264},{"x":318,"y":320},{"x":271,"y":448},{"x":270,"y":466},{"x":272,"y":472},{"x":275,"y":471},{"x":280,"y":466},{"x":318,"y":339},{"x":336,"y":207},{"x":331,"y":181},{"x":312,"y":176},{"x":290,"y":195},{"x":291,"y":204},{"x":302,"y":204},{"x":318,"y":188},{"x":336,"y":157},{"x":353,"y":139},{"x":370,"y":133},{"x":379,"y":141},{"x":372,"y":158},{"x":350,"y":181},{"x":325,"y":191},{"x":288,"y":186},{"x":279,"y":177},{"x":277,"y":162},{"x":284,"y":145},{"x":335,"y":98},{"x":362,"y":87},{"x":389,"y":88},{"x":407,"y":101},{"x":407,"y":124},{"x":393,"y":139},{"x":367,"y":145},{"x":341,"y":141},{"x":267,"y":100},{"x":253,"y":79},{"x":256,"y":60},{"x":276,"y":52},{"x":297,"y":52},{"x":319,"y":60},{"x":337,"y":78},{"x":340,"y":103},{"x":324,"y":140},{"x":271,"y":171},{"x":245,"y":167},{"x":235,"y":145},{"x":241,"y":121},{"x":273,"y":87},{"x":334,"y":47},{"x":360,"y":46},{"x":376,"y":57},{"x":372,"y":78},{"x":347,"y":107},{"x":307,"y":123},{"x":271,"y":127},{"x":238,"y":116},{"x":234,"y":104},{"x":245,"y":92},{"x":301,"y":82},{"x":315,"y":87},{"x":321,"y":97},{"x":308,"y":107},{"x":295,"y":108},{"x":294,"y":97},{"x":301,"y":90},{"x":327,"y":75},{"x":360,"y":67},{"x":395,"y":59},{"x":452,"y":56},{"x":499,"y":57}], 
   [{"x":0,"y":219},{"x":87,"y":223},{"x":90,"y":210},{"x":78,"y":203},{"x":64,"y":213},{"x":61,"y":234},{"x":55,"y":259},{"x":32,"y":264},{"x":24,"y":257},{"x":33,"y":248},{"x":68,"y":259},{"x":87,"y":267},{"x":116,"y":246},{"x":109,"y":255},{"x":113,"y":265},{"x":124,"y":260},{"x":125,"y":248},{"x":120,"y":254},{"x":130,"y":258},{"x":139,"y":246},{"x":138,"y":257},{"x":144,"y":266},{"x":150,"y":259},{"x":155,"y":246},{"x":158,"y":255},{"x":168,"y":259},{"x":177,"y":253},{"x":175,"y":242},{"x":166,"y":247},{"x":174,"y":265},{"x":190,"y":255},{"x":213,"y":233},{"x":219,"y":211},{"x":235,"y":202},{"x":251,"y":219},{"x":244,"y":238},{"x":244,"y":260},{"x":257,"y":266},{"x":270,"y":254},{"x":286,"y":217},{"x":282,"y":291},{"x":273,"y":299},{"x":262,"y":296},{"x":268,"y":278},{"x":299,"y":262},{"x":301,"y":250},{"x":309,"y":265},{"x":317,"y":255},{"x":311,"y":239},{"x":310,"y":253},{"x":321,"y":262},{"x":332,"y":244},{"x":328,"y":256},{"x":333,"y":263},{"x":343,"y":259},{"x":343,"y":243},{"x":349,"y":265},{"x":355,"y":259},{"x":363,"y":245},{"x":362,"y":235},{"x":353,"y":242},{"x":372,"y":247},{"x":368,"y":257},{"x":374,"y":266},{"x":384,"y":255},{"x":393,"y":245},{"x":393,"y":236},{"x":385,"y":240},{"x":394,"y":253},{"x":395,"y":262},{"x":386,"y":263},{"x":405,"y":258},{"x":417,"y":253},{"x":418,"y":239},{"x":407,"y":248},{"x":416,"y":266},{"x":428,"y":257},{"x":442,"y":235},{"x":446,"y":209},{"x":440,"y":199},{"x":433,"y":209},{"x":438,"y":261},{"x":447,"y":266},{"x":458,"y":246},{"x":467,"y":225},{"x":467,"y":209},{"x":463,"y":200},{"x":454,"y":217},{"x":455,"y":299},{"x":463,"y":308},{"x":466,"y":299},{"x":464,"y":284},{"x":458,"y":271},{"x":465,"y":265},{"x":473,"y":254},{"x":491,"y":238},{"x":499,"y":201}]
]

//const NUM_LINES = 6
//const LINE_LEN = lineData.length
//const SHIFT = 10

//let lines = []
//lines.push(lineData)

colors = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB","#B5EAD7", "#C7CEEA"]

// Helper Functions



/*
randomly generate lines, needs work

let morphLine = data => {
  return data.map((coord, ind) => 
  randCoord(coord, ind))
}

let randCoord = (coord, ind) => {
  let result = { 
    x:randVal(coord.x), 
    y:randVal(coord.y)
  }
  result.x = ind == 0 ? 0 : result.x
  result.x = ind == LINE_LEN-1 ? 100 : result.x
  return result
}

let randVal = val => {
 let plusMinus = Math.random() < 0.5 ? -1 : 1
 let result = Math.abs(plusMinus * Math.ceil(Math.random() * SHIFT))
 result = result > 100 ? 100 : result
 return result
} */



// Make a bunch more lines
/*for (let i=1; i<NUM_LINES; i++) {
  let arr = morphLine(lineData)
  lines.push(arr)
}*/

// Add all lines to page
/*for (let i=0; i<NUM_LINES; i++) {
  container.append("path")
    .attr("d", lineFunction(lines[i]))
    .attr("stroke", colors[i])
    .attr("stroke-width", 1)
    .attr("fill", "none");
}*//*

console.log(`0:${lines[0].length}, 1:${lines[1].length}`)

let lineFunction = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })
  .curve(d3.curveBasis);  

// Create SVG container
let container = d3.select(".container").append("svg")
  .attr("preserveAspectRatio", "none")
  .attr("viewBox", "0 0 500 500")

let line = container.append("path")
  .attr("d", lineFunction(lines[0]))
  .attr("stroke", "#940303")
  .attr("stroke-width", 5)
  .attr("fill", "none")

repeat()

function repeat() {
  line
    .transition()
    .attr("d", lineFunction(lines[1]))
    .attr("stroke", "#250394")
    .ease(d3.easeSin)
    .duration(3000)
    .transition()
    .attr("d", lineFunction(lines[0]))
    .attr("stroke", "#940303")
    .on("end", repeat)
}
 */