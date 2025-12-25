        // 經驗值表（最新累計經驗值，到達各級所需總經驗，基於FFXIV 7.x版本統一表）
        const expTable = [
            0,         // 達到1級
            300,       // 達到2級
            750,       // 達到3級
            1380,      // 達到4級
            2350,      // 達到5級
            3790,      // 達到6級
            5730,      // 達到7級
            8730,      // 達到8級
            12650,     // 達到9級
            17620,     // 達到10級
            23520,     // 達到11級
            30950,     // 達到12級
            39570,     // 達到13級
            49770,     // 達到14級
            61070,     // 達到15級
            74170,     // 達到16級
            89370,     // 達到17級
            106770,    // 達到18級
            126370,    // 達到19級
            148270,    // 達到20級
            172570,    // 達到21級
            199970,    // 達到22級
            230570,    // 達到23級
            264470,    // 達到24級
            301770,    // 達到25級
            342570,    // 達到26級
            391770,    // 達到27級
            446370,    // 達到28級
            508270,    // 達到29級
            573870,    // 達到30級
            642270,    // 達到31級
            716270,    // 達到32級
            798970,    // 達到33級
            887670,    // 達到34級
            982670,    // 達到35級
            1084670,   // 達到36級
            1197670,   // 達到37級
            1318670,   // 達到38級
            1451670,   // 達到39級
            1593670,   // 達到40級
            1748670,   // 達到41級
            1911670,   // 達到42級
            2082670,   // 達到43級
            2261670,   // 達到44級
            2448670,   // 達到45級
            2643670,   // 達到46級
            2857670,   // 達到47級
            3086670,   // 達到48級
            3330670,   // 達到49級
            3589670,   // 達到50級
            4010670,   // 達到51級
            4510670,   // 達到52級
            5090670,   // 達到53級
            5753670,   // 達到54級
            6502670,   // 達到55級
            7339670,   // 達到56級
            8266670,   // 達到57級
            9285670,   // 達到58級
            10399670,  // 達到59級
            11610670,  // 達到60級
            12997670,  // 達到61級
            14453670,  // 達到62級
            15987670,  // 達到63級
            17608670,  // 達到64級
            19328670,  // 達到65級
            21162670,  // 達到66級
            23130670,  // 達到67級
            25256670,  // 達到68級
            27573670,  // 達到69級
            30123670,  // 達到70級
            33046670,  // 達到71級
            36064670,  // 達到72級
            39217670,  // 達到73級
            42541670,  // 達到74級
            46073670,  // 達到75級
            49844270,  // 達到76級
            53910270,  // 達到77級
            58287270,  // 達到78級
            63064270,  // 達到79級
            68320270,  // 達到80級
            74312270,  // 達到81級
            80483270,  // 達到82級
            87425270,  // 達到83級
            94630270,  // 達到84級
            102578270, // 達到85級
            110865270, // 達到86級
            120096270, // 達到87級
            129625270, // 達到88級
            140084270, // 達到89級
            150922270  // 達到90級
        ];

        function calculateCrafts() {
            // 清空錯誤和結果
            document.getElementById('error').innerText = '';
            document.getElementById('result').innerText = '';

            // 獲取輸入值
            const expPerCraft = parseInt(document.getElementById('expPerCraft').value);
            const currentLevel = parseInt(document.getElementById('currentLevel').value) || 1;
            const targetLevel = parseInt(document.getElementById('targetLevel').value);

            // 驗證輸入
            if (!expPerCraft || expPerCraft <= 0) {
                document.getElementById('error').innerText = '請輸入有效的每次生產經驗值（大於0）。';
                return;
            }
            if (currentLevel < 1 || currentLevel > 89) {
                document.getElementById('error').innerText = '當前等級必須在1到89之間。';
                return;
            }
            if (targetLevel < 2 || targetLevel > 90) {
                document.getElementById('error').innerText = '目標等級必須在2到90之間。';
                return;
            }
            if (targetLevel <= currentLevel) {
                document.getElementById('error').innerText = '目標等級必須高於當前等級。';
                return;
            }

            // 計算所需總經驗值（從當前等級的0經驗開始，到目標等級）
            const totalExpNeeded = expTable[targetLevel - 1] - expTable[currentLevel - 1];

            // 計算所需生產次數（向上取整）
            const craftsNeeded = Math.ceil(totalExpNeeded / expPerCraft);

            // 顯示結果
            document.getElementById('result').innerText = 
                `從 ${currentLevel} 級（經驗條從0開始）升到 ${targetLevel} 級需要 ${totalExpNeeded.toLocaleString()} 經驗值，\n` +
                `每次生產 ${expPerCraft.toLocaleString()} 經驗值，需生產 ${craftsNeeded.toLocaleString()} 次。`;
        }