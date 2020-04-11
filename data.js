let ly1 = [{"x":1,"y":148},{"x":29,"y":130},{"x":67,"y":121},{"x":149,"y":142},{"x":173,"y":202},{"x":148,"y":261},{"x":108,"y":286},{"x":80,"y":268},{"x":98,"y":244},{"x":136,"y":240},{"x":182,"y":252},{"x":284,"y":345},{"x":304,"y":390},{"x":305,"y":415},{"x":290,"y":430},{"x":233,"y":420},{"x":161,"y":363},{"x":122,"y":310},{"x":109,"y":263},{"x":120,"y":198},{"x":141,"y":176},{"x":162,"y":172},{"x":211,"y":196},{"x":254,"y":283},{"x":249,"y":318},{"x":234,"y":326},{"x":223,"y":308},{"x":223,"y":278},{"x":234,"y":237},{"x":263,"y":189},{"x":310,"y":157},{"x":351,"y":152},{"x":381,"y":164},{"x":399,"y":187},{"x":409,"y":222},{"x":396,"y":280},{"x":365,"y":330},{"x":333,"y":362},{"x":282,"y":397},{"x":215,"y":421},{"x":180,"y":420},{"x":159,"y":410},{"x":154,"y":398},{"x":159,"y":381},{"x":175,"y":367},{"x":206,"y":360},{"x":249,"y":356},{"x":286,"y":363},{"x":453,"y":403},{"x":499,"y":410}]
let ly1_step_svg = `<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M1,148L15,148L15,130L48,130L48,121L108,121L108,142L161,142L161,202L160.5,202L160.5,261L128,261L128,286L94,286L94,268L89,268L89,244L117,244L117,240L159,240L159,252L233,252L233,345L294,345L294,390L304.5,390L304.5,415L297.5,415L297.5,430L261.5,430L261.5,420L197,420L197,363L141.5,363L141.5,310L115.5,310L115.5,263L114.5,263L114.5,198L130.5,198L130.5,176L151.5,176L151.5,172L186.5,172L186.5,196L232.5,196L232.5,283L251.5,283L251.5,318L241.5,318L241.5,326L228.5,326L228.5,308L223,308L223,278L228.5,278L228.5,237L248.5,237L248.5,189L286.5,189L286.5,157L330.5,157L330.5,152L366,152L366,164L390,164L390,187L404,187L404,222L402.5,222L402.5,280L380.5,280L380.5,330L349,330L349,362L307.5,362L307.5,397L248.5,397L248.5,421L197.5,421L197.5,420L169.5,420L169.5,410L156.5,410L156.5,398L156.5,398L156.5,381L167,381L167,367L190.5,367L190.5,360L227.5,360L227.5,356L267.5,356L267.5,363L369.5,363L369.5,403L476,403L476,410L499,410" stroke="#000000" stroke-width="2" fill="none"></path></svg>`
let ly1_basis_svg = `<svg preserveAspectRatio="none" viewBox="0 0 500 500"><path d="M1,148L5.666666666666667,145C10.333333333333334,142,19.666666666666668,136,30.666666666666668,131.5C41.666666666666664,127,54.333333333333336,124,74.33333333333333,126C94.33333333333333,128,121.66666666666667,135,139.33333333333334,148.5C157,162,165,182,164.83333333333334,201.83333333333334C164.66666666666666,221.66666666666666,156.33333333333334,241.33333333333334,145.5,255.33333333333334C134.66666666666666,269.3333333333333,121.33333333333333,277.6666666666667,110,278.8333333333333C98.66666666666667,280,89.33333333333333,274,87.66666666666667,267C86,260,92,252,101.33333333333333,247.33333333333334C110.66666666666667,242.66666666666666,123.33333333333333,241.33333333333334,137.33333333333334,242.66666666666666C151.33333333333334,244,166.66666666666666,248,191.33333333333334,265.5C216,283,250,314,270.3333333333333,337C290.6666666666667,360,297.3333333333333,375,300.8333333333333,386.6666666666667C304.3333333333333,398.3333333333333,304.6666666666667,406.6666666666667,302.3333333333333,413.3333333333333C300,420,295,425,283,425.8333333333333C271,426.6666666666667,252,423.3333333333333,230.5,412.1666666666667C209,401,185,382,166.5,363.6666666666667C148,345.3333333333333,135,327.6666666666667,126.33333333333333,311C117.66666666666667,294.3333333333333,113.33333333333333,278.6666666666667,113,260C112.66666666666667,241.33333333333334,116.33333333333333,219.66666666666666,121.66666666666667,205.16666666666666C127,190.66666666666666,134,183.33333333333334,141,179C148,174.66666666666666,155,173.33333333333334,166.66666666666666,176.66666666666666C178.33333333333334,180,194.66666666666666,188,210,206.5C225.33333333333334,225,239.66666666666666,254,246,274.3333333333333C252.33333333333334,294.6666666666667,250.66666666666666,306.3333333333333,247.33333333333334,313.5C244,320.6666666666667,239,323.3333333333333,234.66666666666666,321.6666666666667C230.33333333333334,320,226.66666666666666,314,224.83333333333334,306C223,298,223,288,224.83333333333334,276.1666666666667C226.66666666666666,264.3333333333333,230.33333333333334,250.66666666666666,237,235.83333333333334C243.66666666666666,221,253.33333333333334,205,266,191.66666666666666C278.6666666666667,178.33333333333334,294.3333333333333,167.66666666666666,309,161.5C323.6666666666667,155.33333333333334,337.3333333333333,153.66666666666666,349.1666666666667,154.83333333333334C361,156,371,160,379,165.83333333333334C387,171.66666666666666,393,179.33333333333334,397.6666666666667,189C402.3333333333333,198.66666666666666,405.6666666666667,210.33333333333334,405.1666666666667,225.83333333333334C404.6666666666667,241.33333333333334,400.3333333333333,260.6666666666667,393,278.6666666666667C385.6666666666667,296.6666666666667,375.3333333333333,313.3333333333333,364.8333333333333,327C354.3333333333333,340.6666666666667,343.6666666666667,351.3333333333333,329.8333333333333,362.5C316,373.6666666666667,299,385.3333333333333,279.3333333333333,395.1666666666667C259.6666666666667,405,237.33333333333334,413,220.33333333333334,416.8333333333333C203.33333333333334,420.6666666666667,191.66666666666666,420.3333333333333,182.33333333333334,418.5C173,416.6666666666667,166,413.3333333333333,161.66666666666666,409.6666666666667C157.33333333333334,406,155.66666666666666,402,155.66666666666666,397.1666666666667C155.66666666666666,392.3333333333333,157.33333333333334,386.6666666666667,160.83333333333334,381.5C164.33333333333334,376.3333333333333,169.66666666666666,371.6666666666667,177.5,368.1666666666667C185.33333333333334,364.6666666666667,195.66666666666666,362.3333333333333,208,360.5C220.33333333333334,358.6666666666667,234.66666666666666,357.3333333333333,248,357.8333333333333C261.3333333333333,358.3333333333333,273.6666666666667,360.6666666666667,307.6666666666667,368.5C341.6666666666667,376.3333333333333,397.3333333333333,389.6666666666667,432.8333333333333,397.5C468.3333333333333,405.3333333333333,483.6666666666667,407.6666666666667,491.3333333333333,408.8333333333333L499,410" stroke="#000000" stroke-width="2" fill="none"></path></svg>`