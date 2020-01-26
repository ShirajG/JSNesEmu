var testLog = ("\
C000  4C F5 C5  JMP $C5F5                       A:00 X:00 Y:00 P:24 SP:FD PPU:  0,  0 CYC:7\n\
C5F5  A2 00     LDX #$00                        A:00 X:00 Y:00 P:24 SP:FD PPU:  9,  0 CYC:10\n\
C5F7  86 00     STX $00 = 00                    A:00 X:00 Y:00 P:26 SP:FD PPU: 15,  0 CYC:12\n\
C5F9  86 10     STX $10 = 00                    A:00 X:00 Y:00 P:26 SP:FD PPU: 24,  0 CYC:15\n\
C5FB  86 11     STX $11 = 00                    A:00 X:00 Y:00 P:26 SP:FD PPU: 33,  0 CYC:18\n\
C5FD  20 2D C7  JSR $C72D                       A:00 X:00 Y:00 P:26 SP:FD PPU: 42,  0 CYC:21\n\
C72D  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU: 60,  0 CYC:27\n\
C72E  38        SEC                             A:00 X:00 Y:00 P:26 SP:FB PPU: 66,  0 CYC:29\n\
C72F  B0 04     BCS $C735                       A:00 X:00 Y:00 P:27 SP:FB PPU: 72,  0 CYC:31\n\
C735  EA        NOP                             A:00 X:00 Y:00 P:27 SP:FB PPU: 81,  0 CYC:34\n\
C736  18        CLC                             A:00 X:00 Y:00 P:27 SP:FB PPU: 87,  0 CYC:36\n\
C737  B0 03     BCS $C73C                       A:00 X:00 Y:00 P:26 SP:FB PPU: 93,  0 CYC:38\n\
C739  4C 40 C7  JMP $C740                       A:00 X:00 Y:00 P:26 SP:FB PPU: 99,  0 CYC:40\n\
C740  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU:108,  0 CYC:43\n\
C741  38        SEC                             A:00 X:00 Y:00 P:26 SP:FB PPU:114,  0 CYC:45\n\
C742  90 03     BCC $C747                       A:00 X:00 Y:00 P:27 SP:FB PPU:120,  0 CYC:47\n\
C744  4C 4B C7  JMP $C74B                       A:00 X:00 Y:00 P:27 SP:FB PPU:126,  0 CYC:49\n\
C74B  EA        NOP                             A:00 X:00 Y:00 P:27 SP:FB PPU:135,  0 CYC:52\n\
C74C  18        CLC                             A:00 X:00 Y:00 P:27 SP:FB PPU:141,  0 CYC:54\n\
C74D  90 04     BCC $C753                       A:00 X:00 Y:00 P:26 SP:FB PPU:147,  0 CYC:56\n\
C753  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU:156,  0 CYC:59\n\
C754  A9 00     LDA #$00                        A:00 X:00 Y:00 P:26 SP:FB PPU:162,  0 CYC:61\n\
C756  F0 04     BEQ $C75C                       A:00 X:00 Y:00 P:26 SP:FB PPU:168,  0 CYC:63\n\
C75C  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU:177,  0 CYC:66\n\
C75D  A9 40     LDA #$40                        A:00 X:00 Y:00 P:26 SP:FB PPU:183,  0 CYC:68\n\
C75F  F0 03     BEQ $C764                       A:40 X:00 Y:00 P:24 SP:FB PPU:189,  0 CYC:70\n\
C761  4C 68 C7  JMP $C768                       A:40 X:00 Y:00 P:24 SP:FB PPU:195,  0 CYC:72\n\
C768  EA        NOP                             A:40 X:00 Y:00 P:24 SP:FB PPU:204,  0 CYC:75\n\
C769  A9 40     LDA #$40                        A:40 X:00 Y:00 P:24 SP:FB PPU:210,  0 CYC:77\n\
C76B  D0 04     BNE $C771                       A:40 X:00 Y:00 P:24 SP:FB PPU:216,  0 CYC:79\n\
C771  EA        NOP                             A:40 X:00 Y:00 P:24 SP:FB PPU:225,  0 CYC:82\n\
C772  A9 00     LDA #$00                        A:40 X:00 Y:00 P:24 SP:FB PPU:231,  0 CYC:84\n\
C774  D0 03     BNE $C779                       A:00 X:00 Y:00 P:26 SP:FB PPU:237,  0 CYC:86\n\
C776  4C 7D C7  JMP $C77D                       A:00 X:00 Y:00 P:26 SP:FB PPU:243,  0 CYC:88\n\
C77D  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU:252,  0 CYC:91\n\
C77E  A9 FF     LDA #$FF                        A:00 X:00 Y:00 P:26 SP:FB PPU:258,  0 CYC:93\n\
C780  85 01     STA $01 = 00                    A:FF X:00 Y:00 P:A4 SP:FB PPU:264,  0 CYC:95\n\
C782  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:A4 SP:FB PPU:273,  0 CYC:98\n\
C784  70 04     BVS $C78A                       A:FF X:00 Y:00 P:E4 SP:FB PPU:282,  0 CYC:101\n\
C78A  EA        NOP                             A:FF X:00 Y:00 P:E4 SP:FB PPU:291,  0 CYC:104\n\
C78B  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:E4 SP:FB PPU:297,  0 CYC:106\n\
C78D  50 03     BVC $C792                       A:FF X:00 Y:00 P:E4 SP:FB PPU:306,  0 CYC:109\n\
C78F  4C 96 C7  JMP $C796                       A:FF X:00 Y:00 P:E4 SP:FB PPU:312,  0 CYC:111\n\
C796  EA        NOP                             A:FF X:00 Y:00 P:E4 SP:FB PPU:321,  0 CYC:114\n\
C797  A9 00     LDA #$00                        A:FF X:00 Y:00 P:E4 SP:FB PPU:327,  0 CYC:116\n\
C799  85 01     STA $01 = FF                    A:00 X:00 Y:00 P:66 SP:FB PPU:333,  0 CYC:118\n\
C79B  24 01     BIT $01 = 00                    A:00 X:00 Y:00 P:66 SP:FB PPU:  1,  1 CYC:121\n\
C79D  50 04     BVC $C7A3                       A:00 X:00 Y:00 P:26 SP:FB PPU: 10,  1 CYC:124\n\
C7A3  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU: 19,  1 CYC:127\n\
C7A4  24 01     BIT $01 = 00                    A:00 X:00 Y:00 P:26 SP:FB PPU: 25,  1 CYC:129\n\
C7A6  70 03     BVS $C7AB                       A:00 X:00 Y:00 P:26 SP:FB PPU: 34,  1 CYC:132\n\
C7A8  4C AF C7  JMP $C7AF                       A:00 X:00 Y:00 P:26 SP:FB PPU: 40,  1 CYC:134\n\
C7AF  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU: 49,  1 CYC:137\n\
C7B0  A9 00     LDA #$00                        A:00 X:00 Y:00 P:26 SP:FB PPU: 55,  1 CYC:139\n\
C7B2  10 04     BPL $C7B8                       A:00 X:00 Y:00 P:26 SP:FB PPU: 61,  1 CYC:141\n\
C7B8  EA        NOP                             A:00 X:00 Y:00 P:26 SP:FB PPU: 70,  1 CYC:144\n\
C7B9  A9 80     LDA #$80                        A:00 X:00 Y:00 P:26 SP:FB PPU: 76,  1 CYC:146\n\
C7BB  10 03     BPL $C7C0                       A:80 X:00 Y:00 P:A4 SP:FB PPU: 82,  1 CYC:148\n\
C7BD  4C D9 C7  JMP $C7D9                       A:80 X:00 Y:00 P:A4 SP:FB PPU: 88,  1 CYC:150\n\
C7D9  EA        NOP                             A:80 X:00 Y:00 P:A4 SP:FB PPU: 97,  1 CYC:153\n\
C7DA  60        RTS                             A:80 X:00 Y:00 P:A4 SP:FB PPU:103,  1 CYC:155\n\
C600  20 DB C7  JSR $C7DB                       A:80 X:00 Y:00 P:A4 SP:FD PPU:121,  1 CYC:161\n\
C7DB  EA        NOP                             A:80 X:00 Y:00 P:A4 SP:FB PPU:139,  1 CYC:167\n\
C7DC  A9 FF     LDA #$FF                        A:80 X:00 Y:00 P:A4 SP:FB PPU:145,  1 CYC:169\n\
C7DE  85 01     STA $01 = 00                    A:FF X:00 Y:00 P:A4 SP:FB PPU:151,  1 CYC:171\n\
C7E0  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:A4 SP:FB PPU:160,  1 CYC:174\n\
C7E2  A9 00     LDA #$00                        A:FF X:00 Y:00 P:E4 SP:FB PPU:169,  1 CYC:177\n\
C7E4  38        SEC                             A:00 X:00 Y:00 P:66 SP:FB PPU:175,  1 CYC:179\n\
C7E5  78        SEI                             A:00 X:00 Y:00 P:67 SP:FB PPU:181,  1 CYC:181\n\
C7E6  F8        SED                             A:00 X:00 Y:00 P:67 SP:FB PPU:187,  1 CYC:183\n\
C7E7  08        PHP                             A:00 X:00 Y:00 P:6F SP:FB PPU:193,  1 CYC:185\n\
C7E8  68        PLA                             A:00 X:00 Y:00 P:6F SP:FA PPU:202,  1 CYC:188\n\
C7E9  29 EF     AND #$EF                        A:7F X:00 Y:00 P:6D SP:FB PPU:214,  1 CYC:192\n\
C7EB  C9 6F     CMP #$6F                        A:6F X:00 Y:00 P:6D SP:FB PPU:220,  1 CYC:194\n\
C7ED  F0 04     BEQ $C7F3                       A:6F X:00 Y:00 P:6F SP:FB PPU:226,  1 CYC:196\n\
C7F3  EA        NOP                             A:6F X:00 Y:00 P:6F SP:FB PPU:235,  1 CYC:199\n\
C7F4  A9 40     LDA #$40                        A:6F X:00 Y:00 P:6F SP:FB PPU:241,  1 CYC:201\n\
C7F6  85 01     STA $01 = FF                    A:40 X:00 Y:00 P:6D SP:FB PPU:247,  1 CYC:203\n\
C7F8  24 01     BIT $01 = 40                    A:40 X:00 Y:00 P:6D SP:FB PPU:256,  1 CYC:206\n\
C7FA  D8        CLD                             A:40 X:00 Y:00 P:6D SP:FB PPU:265,  1 CYC:209\n\
C7FB  A9 10     LDA #$10                        A:40 X:00 Y:00 P:65 SP:FB PPU:271,  1 CYC:211\n\
C7FD  18        CLC                             A:10 X:00 Y:00 P:65 SP:FB PPU:277,  1 CYC:213\n\
C7FE  08        PHP                             A:10 X:00 Y:00 P:64 SP:FB PPU:283,  1 CYC:215\n\
C7FF  68        PLA                             A:10 X:00 Y:00 P:64 SP:FA PPU:292,  1 CYC:218\n\
C800  29 EF     AND #$EF                        A:74 X:00 Y:00 P:64 SP:FB PPU:304,  1 CYC:222\n\
C802  C9 64     CMP #$64                        A:64 X:00 Y:00 P:64 SP:FB PPU:310,  1 CYC:224\n\
C804  F0 04     BEQ $C80A                       A:64 X:00 Y:00 P:67 SP:FB PPU:316,  1 CYC:226\n\
C80A  EA        NOP                             A:64 X:00 Y:00 P:67 SP:FB PPU:325,  1 CYC:229\n\
C80B  A9 80     LDA #$80                        A:64 X:00 Y:00 P:67 SP:FB PPU:331,  1 CYC:231\n\
C80D  85 01     STA $01 = 40                    A:80 X:00 Y:00 P:E5 SP:FB PPU:337,  1 CYC:233\n\
C80F  24 01     BIT $01 = 80                    A:80 X:00 Y:00 P:E5 SP:FB PPU:  5,  2 CYC:236\n\
C811  F8        SED                             A:80 X:00 Y:00 P:A5 SP:FB PPU: 14,  2 CYC:239\n\
C812  A9 00     LDA #$00                        A:80 X:00 Y:00 P:AD SP:FB PPU: 20,  2 CYC:241\n\
C814  38        SEC                             A:00 X:00 Y:00 P:2F SP:FB PPU: 26,  2 CYC:243\n\
C815  08        PHP                             A:00 X:00 Y:00 P:2F SP:FB PPU: 32,  2 CYC:245\n\
C816  68        PLA                             A:00 X:00 Y:00 P:2F SP:FA PPU: 41,  2 CYC:248\n\
C817  29 EF     AND #$EF                        A:3F X:00 Y:00 P:2D SP:FB PPU: 53,  2 CYC:252\n\
C819  C9 2F     CMP #$2F                        A:2F X:00 Y:00 P:2D SP:FB PPU: 59,  2 CYC:254\n\
C81B  F0 04     BEQ $C821                       A:2F X:00 Y:00 P:2F SP:FB PPU: 65,  2 CYC:256\n\
C821  EA        NOP                             A:2F X:00 Y:00 P:2F SP:FB PPU: 74,  2 CYC:259\n\
C822  A9 FF     LDA #$FF                        A:2F X:00 Y:00 P:2F SP:FB PPU: 80,  2 CYC:261\n\
C824  48        PHA                             A:FF X:00 Y:00 P:AD SP:FB PPU: 86,  2 CYC:263\n\
C825  28        PLP                             A:FF X:00 Y:00 P:AD SP:FA PPU: 95,  2 CYC:266\n\
C826  D0 09     BNE $C831                       A:FF X:00 Y:00 P:EF SP:FB PPU:107,  2 CYC:270\n\
C828  10 07     BPL $C831                       A:FF X:00 Y:00 P:EF SP:FB PPU:113,  2 CYC:272\n\
C82A  50 05     BVC $C831                       A:FF X:00 Y:00 P:EF SP:FB PPU:119,  2 CYC:274\n\
C82C  90 03     BCC $C831                       A:FF X:00 Y:00 P:EF SP:FB PPU:125,  2 CYC:276\n\
C82E  4C 35 C8  JMP $C835                       A:FF X:00 Y:00 P:EF SP:FB PPU:131,  2 CYC:278\n\
C835  EA        NOP                             A:FF X:00 Y:00 P:EF SP:FB PPU:140,  2 CYC:281\n\
C836  A9 04     LDA #$04                        A:FF X:00 Y:00 P:EF SP:FB PPU:146,  2 CYC:283\n\
C838  48        PHA                             A:04 X:00 Y:00 P:6D SP:FB PPU:152,  2 CYC:285\n\
C839  28        PLP                             A:04 X:00 Y:00 P:6D SP:FA PPU:161,  2 CYC:288\n\
C83A  F0 09     BEQ $C845                       A:04 X:00 Y:00 P:24 SP:FB PPU:173,  2 CYC:292\n\
C83C  30 07     BMI $C845                       A:04 X:00 Y:00 P:24 SP:FB PPU:179,  2 CYC:294\n\
C83E  70 05     BVS $C845                       A:04 X:00 Y:00 P:24 SP:FB PPU:185,  2 CYC:296\n\
C840  B0 03     BCS $C845                       A:04 X:00 Y:00 P:24 SP:FB PPU:191,  2 CYC:298\n\
C842  4C 49 C8  JMP $C849                       A:04 X:00 Y:00 P:24 SP:FB PPU:197,  2 CYC:300\n\
C849  EA        NOP                             A:04 X:00 Y:00 P:24 SP:FB PPU:206,  2 CYC:303\n\
C84A  F8        SED                             A:04 X:00 Y:00 P:24 SP:FB PPU:212,  2 CYC:305\n\
C84B  A9 FF     LDA #$FF                        A:04 X:00 Y:00 P:2C SP:FB PPU:218,  2 CYC:307\n\
C84D  85 01     STA $01 = 80                    A:FF X:00 Y:00 P:AC SP:FB PPU:224,  2 CYC:309\n\
C84F  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:AC SP:FB PPU:233,  2 CYC:312\n\
C851  18        CLC                             A:FF X:00 Y:00 P:EC SP:FB PPU:242,  2 CYC:315\n\
C852  A9 00     LDA #$00                        A:FF X:00 Y:00 P:EC SP:FB PPU:248,  2 CYC:317\n\
C854  48        PHA                             A:00 X:00 Y:00 P:6E SP:FB PPU:254,  2 CYC:319\n\
C855  A9 FF     LDA #$FF                        A:00 X:00 Y:00 P:6E SP:FA PPU:263,  2 CYC:322\n\
C857  68        PLA                             A:FF X:00 Y:00 P:EC SP:FA PPU:269,  2 CYC:324\n\
C858  D0 09     BNE $C863                       A:00 X:00 Y:00 P:6E SP:FB PPU:281,  2 CYC:328\n\
C85A  30 07     BMI $C863                       A:00 X:00 Y:00 P:6E SP:FB PPU:287,  2 CYC:330\n\
C85C  50 05     BVC $C863                       A:00 X:00 Y:00 P:6E SP:FB PPU:293,  2 CYC:332\n\
C85E  B0 03     BCS $C863                       A:00 X:00 Y:00 P:6E SP:FB PPU:299,  2 CYC:334\n\
C860  4C 67 C8  JMP $C867                       A:00 X:00 Y:00 P:6E SP:FB PPU:305,  2 CYC:336\n\
C867  EA        NOP                             A:00 X:00 Y:00 P:6E SP:FB PPU:314,  2 CYC:339\n\
C868  A9 00     LDA #$00                        A:00 X:00 Y:00 P:6E SP:FB PPU:320,  2 CYC:341\n\
C86A  85 01     STA $01 = FF                    A:00 X:00 Y:00 P:6E SP:FB PPU:326,  2 CYC:343\n\
C86C  24 01     BIT $01 = 00                    A:00 X:00 Y:00 P:6E SP:FB PPU:335,  2 CYC:346\n\
C86E  38        SEC                             A:00 X:00 Y:00 P:2E SP:FB PPU:  3,  3 CYC:349\n\
C86F  A9 FF     LDA #$FF                        A:00 X:00 Y:00 P:2F SP:FB PPU:  9,  3 CYC:351\n\
C871  48        PHA                             A:FF X:00 Y:00 P:AD SP:FB PPU: 15,  3 CYC:353\n\
C872  A9 00     LDA #$00                        A:FF X:00 Y:00 P:AD SP:FA PPU: 24,  3 CYC:356\n\
C874  68        PLA                             A:00 X:00 Y:00 P:2F SP:FA PPU: 30,  3 CYC:358\n\
C875  F0 09     BEQ $C880                       A:FF X:00 Y:00 P:AD SP:FB PPU: 42,  3 CYC:362\n\
C877  10 07     BPL $C880                       A:FF X:00 Y:00 P:AD SP:FB PPU: 48,  3 CYC:364\n\
C879  70 05     BVS $C880                       A:FF X:00 Y:00 P:AD SP:FB PPU: 54,  3 CYC:366\n\
C87B  90 03     BCC $C880                       A:FF X:00 Y:00 P:AD SP:FB PPU: 60,  3 CYC:368\n\
C87D  4C 84 C8  JMP $C884                       A:FF X:00 Y:00 P:AD SP:FB PPU: 66,  3 CYC:370\n\
C884  60        RTS                             A:FF X:00 Y:00 P:AD SP:FB PPU: 75,  3 CYC:373\n\
C603  20 85 C8  JSR $C885                       A:FF X:00 Y:00 P:AD SP:FD PPU: 93,  3 CYC:379\n\
C885  EA        NOP                             A:FF X:00 Y:00 P:AD SP:FB PPU:111,  3 CYC:385\n\
C886  18        CLC                             A:FF X:00 Y:00 P:AD SP:FB PPU:117,  3 CYC:387\n\
C887  A9 FF     LDA #$FF                        A:FF X:00 Y:00 P:AC SP:FB PPU:123,  3 CYC:389\n\
C889  85 01     STA $01 = 00                    A:FF X:00 Y:00 P:AC SP:FB PPU:129,  3 CYC:391\n\
C88B  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:AC SP:FB PPU:138,  3 CYC:394\n\
C88D  A9 55     LDA #$55                        A:FF X:00 Y:00 P:EC SP:FB PPU:147,  3 CYC:397\n\
C88F  09 AA     ORA #$AA                        A:55 X:00 Y:00 P:6C SP:FB PPU:153,  3 CYC:399\n\
C891  B0 0B     BCS $C89E                       A:FF X:00 Y:00 P:EC SP:FB PPU:159,  3 CYC:401\n\
C893  10 09     BPL $C89E                       A:FF X:00 Y:00 P:EC SP:FB PPU:165,  3 CYC:403\n\
C895  C9 FF     CMP #$FF                        A:FF X:00 Y:00 P:EC SP:FB PPU:171,  3 CYC:405\n\
C897  D0 05     BNE $C89E                       A:FF X:00 Y:00 P:6F SP:FB PPU:177,  3 CYC:407\n\
C899  50 03     BVC $C89E                       A:FF X:00 Y:00 P:6F SP:FB PPU:183,  3 CYC:409\n\
C89B  4C A2 C8  JMP $C8A2                       A:FF X:00 Y:00 P:6F SP:FB PPU:189,  3 CYC:411\n\
C8A2  EA        NOP                             A:FF X:00 Y:00 P:6F SP:FB PPU:198,  3 CYC:414\n\
C8A3  38        SEC                             A:FF X:00 Y:00 P:6F SP:FB PPU:204,  3 CYC:416\n\
C8A4  B8        CLV                             A:FF X:00 Y:00 P:6F SP:FB PPU:210,  3 CYC:418\n\
C8A5  A9 00     LDA #$00                        A:FF X:00 Y:00 P:2F SP:FB PPU:216,  3 CYC:420\n\
C8A7  09 00     ORA #$00                        A:00 X:00 Y:00 P:2F SP:FB PPU:222,  3 CYC:422\n\
C8A9  D0 09     BNE $C8B4                       A:00 X:00 Y:00 P:2F SP:FB PPU:228,  3 CYC:424\n\
C8AB  70 07     BVS $C8B4                       A:00 X:00 Y:00 P:2F SP:FB PPU:234,  3 CYC:426\n\
C8AD  90 05     BCC $C8B4                       A:00 X:00 Y:00 P:2F SP:FB PPU:240,  3 CYC:428\n\
C8AF  30 03     BMI $C8B4                       A:00 X:00 Y:00 P:2F SP:FB PPU:246,  3 CYC:430\n\
C8B1  4C B8 C8  JMP $C8B8                       A:00 X:00 Y:00 P:2F SP:FB PPU:252,  3 CYC:432\n\
C8B8  EA        NOP                             A:00 X:00 Y:00 P:2F SP:FB PPU:261,  3 CYC:435\n\
C8B9  18        CLC                             A:00 X:00 Y:00 P:2F SP:FB PPU:267,  3 CYC:437\n\
C8BA  24 01     BIT $01 = FF                    A:00 X:00 Y:00 P:2E SP:FB PPU:273,  3 CYC:439\n\
C8BC  A9 55     LDA #$55                        A:00 X:00 Y:00 P:EE SP:FB PPU:282,  3 CYC:442\n\
C8BE  29 AA     AND #$AA                        A:55 X:00 Y:00 P:6C SP:FB PPU:288,  3 CYC:444\n\
C8C0  D0 09     BNE $C8CB                       A:00 X:00 Y:00 P:6E SP:FB PPU:294,  3 CYC:446\n\
C8C2  50 07     BVC $C8CB                       A:00 X:00 Y:00 P:6E SP:FB PPU:300,  3 CYC:448\n\
C8C4  B0 05     BCS $C8CB                       A:00 X:00 Y:00 P:6E SP:FB PPU:306,  3 CYC:450\n\
C8C6  30 03     BMI $C8CB                       A:00 X:00 Y:00 P:6E SP:FB PPU:312,  3 CYC:452\n\
C8C8  4C CF C8  JMP $C8CF                       A:00 X:00 Y:00 P:6E SP:FB PPU:318,  3 CYC:454\n\
C8CF  EA        NOP                             A:00 X:00 Y:00 P:6E SP:FB PPU:327,  3 CYC:457\n\
C8D0  38        SEC                             A:00 X:00 Y:00 P:6E SP:FB PPU:333,  3 CYC:459\n\
C8D1  B8        CLV                             A:00 X:00 Y:00 P:6F SP:FB PPU:339,  3 CYC:461\n\
C8D2  A9 F8     LDA #$F8                        A:00 X:00 Y:00 P:2F SP:FB PPU:  4,  4 CYC:463\n\
C8D4  29 EF     AND #$EF                        A:F8 X:00 Y:00 P:AD SP:FB PPU: 10,  4 CYC:465\n\
C8D6  90 0B     BCC $C8E3                       A:E8 X:00 Y:00 P:AD SP:FB PPU: 16,  4 CYC:467\n\
C8D8  10 09     BPL $C8E3                       A:E8 X:00 Y:00 P:AD SP:FB PPU: 22,  4 CYC:469\n\
C8DA  C9 E8     CMP #$E8                        A:E8 X:00 Y:00 P:AD SP:FB PPU: 28,  4 CYC:471\n\
C8DC  D0 05     BNE $C8E3                       A:E8 X:00 Y:00 P:2F SP:FB PPU: 34,  4 CYC:473\n\
C8DE  70 03     BVS $C8E3                       A:E8 X:00 Y:00 P:2F SP:FB PPU: 40,  4 CYC:475\n\
C8E0  4C E7 C8  JMP $C8E7                       A:E8 X:00 Y:00 P:2F SP:FB PPU: 46,  4 CYC:477\n\
C8E7  EA        NOP                             A:E8 X:00 Y:00 P:2F SP:FB PPU: 55,  4 CYC:480\n\
C8E8  18        CLC                             A:E8 X:00 Y:00 P:2F SP:FB PPU: 61,  4 CYC:482\n\
C8E9  24 01     BIT $01 = FF                    A:E8 X:00 Y:00 P:2E SP:FB PPU: 67,  4 CYC:484\n\
C8EB  A9 5F     LDA #$5F                        A:E8 X:00 Y:00 P:EC SP:FB PPU: 76,  4 CYC:487\n\
C8ED  49 AA     EOR #$AA                        A:5F X:00 Y:00 P:6C SP:FB PPU: 82,  4 CYC:489\n\
C8EF  B0 0B     BCS $C8FC                       A:F5 X:00 Y:00 P:EC SP:FB PPU: 88,  4 CYC:491\n\
C8F1  10 09     BPL $C8FC                       A:F5 X:00 Y:00 P:EC SP:FB PPU: 94,  4 CYC:493\n\
C8F3  C9 F5     CMP #$F5                        A:F5 X:00 Y:00 P:EC SP:FB PPU:100,  4 CYC:495\n\
C8F5  D0 05     BNE $C8FC                       A:F5 X:00 Y:00 P:6F SP:FB PPU:106,  4 CYC:497\n\
C8F7  50 03     BVC $C8FC                       A:F5 X:00 Y:00 P:6F SP:FB PPU:112,  4 CYC:499\n\
C8F9  4C 00 C9  JMP $C900                       A:F5 X:00 Y:00 P:6F SP:FB PPU:118,  4 CYC:501\n\
C900  EA        NOP                             A:F5 X:00 Y:00 P:6F SP:FB PPU:127,  4 CYC:504\n\
C901  38        SEC                             A:F5 X:00 Y:00 P:6F SP:FB PPU:133,  4 CYC:506\n\
C902  B8        CLV                             A:F5 X:00 Y:00 P:6F SP:FB PPU:139,  4 CYC:508\n\
C903  A9 70     LDA #$70                        A:F5 X:00 Y:00 P:2F SP:FB PPU:145,  4 CYC:510\n\
C905  49 70     EOR #$70                        A:70 X:00 Y:00 P:2D SP:FB PPU:151,  4 CYC:512\n\
C907  D0 09     BNE $C912                       A:00 X:00 Y:00 P:2F SP:FB PPU:157,  4 CYC:514\n\
C909  70 07     BVS $C912                       A:00 X:00 Y:00 P:2F SP:FB PPU:163,  4 CYC:516\n\
C90B  90 05     BCC $C912                       A:00 X:00 Y:00 P:2F SP:FB PPU:169,  4 CYC:518\n\
C90D  30 03     BMI $C912                       A:00 X:00 Y:00 P:2F SP:FB PPU:175,  4 CYC:520\n\
C90F  4C 16 C9  JMP $C916                       A:00 X:00 Y:00 P:2F SP:FB PPU:181,  4 CYC:522\n\
C916  EA        NOP                             A:00 X:00 Y:00 P:2F SP:FB PPU:190,  4 CYC:525\n\
C917  18        CLC                             A:00 X:00 Y:00 P:2F SP:FB PPU:196,  4 CYC:527\n\
C918  24 01     BIT $01 = FF                    A:00 X:00 Y:00 P:2E SP:FB PPU:202,  4 CYC:529\n\
C91A  A9 00     LDA #$00                        A:00 X:00 Y:00 P:EE SP:FB PPU:211,  4 CYC:532\n\
C91C  69 69     ADC #$69                        A:00 X:00 Y:00 P:6E SP:FB PPU:217,  4 CYC:534\n\
C91E  30 0B     BMI $C92B                       A:69 X:00 Y:00 P:2C SP:FB PPU:223,  4 CYC:536\n\
C920  B0 09     BCS $C92B                       A:69 X:00 Y:00 P:2C SP:FB PPU:229,  4 CYC:538\n\
C922  C9 69     CMP #$69                        A:69 X:00 Y:00 P:2C SP:FB PPU:235,  4 CYC:540\n\
C924  D0 05     BNE $C92B                       A:69 X:00 Y:00 P:2F SP:FB PPU:241,  4 CYC:542\n\
C926  70 03     BVS $C92B                       A:69 X:00 Y:00 P:2F SP:FB PPU:247,  4 CYC:544\n\
C928  4C 2F C9  JMP $C92F                       A:69 X:00 Y:00 P:2F SP:FB PPU:253,  4 CYC:546\n\
C92F  EA        NOP                             A:69 X:00 Y:00 P:2F SP:FB PPU:262,  4 CYC:549\n\
C930  38        SEC                             A:69 X:00 Y:00 P:2F SP:FB PPU:268,  4 CYC:551\n\
C931  F8        SED                             A:69 X:00 Y:00 P:2F SP:FB PPU:274,  4 CYC:553\n\
C932  24 01     BIT $01 = FF                    A:69 X:00 Y:00 P:2F SP:FB PPU:280,  4 CYC:555\n\
C934  A9 01     LDA #$01                        A:69 X:00 Y:00 P:ED SP:FB PPU:289,  4 CYC:558\n\
C936  69 69     ADC #$69                        A:01 X:00 Y:00 P:6D SP:FB PPU:295,  4 CYC:560\n\
C938  30 0B     BMI $C945                       A:6B X:00 Y:00 P:2C SP:FB PPU:301,  4 CYC:562\n\
C93A  B0 09     BCS $C945                       A:6B X:00 Y:00 P:2C SP:FB PPU:307,  4 CYC:564\n\
C93C  C9 6B     CMP #$6B                        A:6B X:00 Y:00 P:2C SP:FB PPU:313,  4 CYC:566\n\
C93E  D0 05     BNE $C945                       A:6B X:00 Y:00 P:2F SP:FB PPU:319,  4 CYC:568\n\
C940  70 03     BVS $C945                       A:6B X:00 Y:00 P:2F SP:FB PPU:325,  4 CYC:570\n\
C942  4C 49 C9  JMP $C949                       A:6B X:00 Y:00 P:2F SP:FB PPU:331,  4 CYC:572\n\
C949  EA        NOP                             A:6B X:00 Y:00 P:2F SP:FB PPU:340,  4 CYC:575\n\
C94A  D8        CLD                             A:6B X:00 Y:00 P:2F SP:FB PPU:  5,  5 CYC:577\n\
C94B  38        SEC                             A:6B X:00 Y:00 P:27 SP:FB PPU: 11,  5 CYC:579\n\
C94C  B8        CLV                             A:6B X:00 Y:00 P:27 SP:FB PPU: 17,  5 CYC:581\n\
C94D  A9 7F     LDA #$7F                        A:6B X:00 Y:00 P:27 SP:FB PPU: 23,  5 CYC:583\n\
C94F  69 7F     ADC #$7F                        A:7F X:00 Y:00 P:25 SP:FB PPU: 29,  5 CYC:585\n\
C951  10 0B     BPL $C95E                       A:FF X:00 Y:00 P:E4 SP:FB PPU: 35,  5 CYC:587\n\
C953  B0 09     BCS $C95E                       A:FF X:00 Y:00 P:E4 SP:FB PPU: 41,  5 CYC:589\n\
C955  C9 FF     CMP #$FF                        A:FF X:00 Y:00 P:E4 SP:FB PPU: 47,  5 CYC:591\n\
C957  D0 05     BNE $C95E                       A:FF X:00 Y:00 P:67 SP:FB PPU: 53,  5 CYC:593\n\
C959  50 03     BVC $C95E                       A:FF X:00 Y:00 P:67 SP:FB PPU: 59,  5 CYC:595\n\
C95B  4C 62 C9  JMP $C962                       A:FF X:00 Y:00 P:67 SP:FB PPU: 65,  5 CYC:597\n\
C962  EA        NOP                             A:FF X:00 Y:00 P:67 SP:FB PPU: 74,  5 CYC:600\n\
C963  18        CLC                             A:FF X:00 Y:00 P:67 SP:FB PPU: 80,  5 CYC:602\n\
C964  24 01     BIT $01 = FF                    A:FF X:00 Y:00 P:66 SP:FB PPU: 86,  5 CYC:604\n\
C966  A9 7F     LDA #$7F                        A:FF X:00 Y:00 P:E4 SP:FB PPU: 95,  5 CYC:607\n\
C968  69 80     ADC #$80                        A:7F X:00 Y:00 P:64 SP:FB PPU:101,  5 CYC:609\n\
C96A  10 0B     BPL $C977                       A:FF X:00 Y:00 P:A4 SP:FB PPU:107,  5 CYC:611\n\
C96C  B0 09     BCS $C977                       A:FF X:00 Y:00 P:A4 SP:FB PPU:113,  5 CYC:613\n\
C96E  C9 FF     CMP #$FF                        A:FF X:00 Y:00 P:A4 SP:FB PPU:119,  5 CYC:615\n\
C970  D0 05     BNE $C977                       A:FF X:00 Y:00 P:27 SP:FB PPU:125,  5 CYC:617\n\
C972  70 03     BVS $C977                       A:FF X:00 Y:00 P:27 SP:FB PPU:131,  5 CYC:619\n\
C974  4C 7B C9  JMP $C97B                       A:FF X:00 Y:00 P:27 SP:FB PPU:137,  5 CYC:621\n\
C97B  EA        NOP                             A:FF X:00 Y:00 P:27 SP:FB PPU:146,  5 CYC:624\n\
C97C  38        SEC                             A:FF X:00 Y:00 P:27 SP:FB PPU:152,  5 CYC:626\n\
C97D  B8        CLV                             A:FF X:00 Y:00 P:27 SP:FB PPU:158,  5 CYC:628\n\
C97E  A9 7F     LDA #$7F                        A:FF X:00 Y:00 P:27 SP:FB PPU:164,  5 CYC:630\n\
C980  69 80     ADC #$80                        A:7F X:00 Y:00 P:25 SP:FB PPU:170,  5 CYC:632\n\
C982  D0 09     BNE $C98D                       A:00 X:00 Y:00 P:27 SP:FB PPU:176,  5 CYC:634\n\
C984  30 07     BMI $C98D                       A:00 X:00 Y:00 P:27 SP:FB PPU:182,  5 CYC:636\n\
C986  70 05     BVS $C98D                       A:00 X:00 Y:00 P:27 SP:FB PPU:188,  5 CYC:638\n\
C988  90 03     BCC $C98D                       A:00 X:00 Y:00 P:27 SP:FB PPU:194,  5 CYC:640\n\
C98A  4C 91 C9  JMP $C991                       A:00 X:00 Y:00 P:27 SP:FB PPU:200,  5 CYC:642\n\
C991  EA        NOP                             A:00 X:00 Y:00 P:27 SP:FB PPU:209,  5 CYC:645\n\
C992  38        SEC                             A:00 X:00 Y:00 P:27 SP:FB PPU:215,  5 CYC:647\n\
C993  B8        CLV                             A:00 X:00 Y:00 P:27 SP:FB PPU:221,  5 CYC:649\n\
C994  A9 9F     LDA #$9F                        A:00 X:00 Y:00 P:27 SP:FB PPU:227,  5 CYC:651\n\
C996  F0 09     BEQ $C9A1                       A:9F X:00 Y:00 P:A5 SP:FB PPU:233,  5 CYC:653\n\
C998  10 07     BPL $C9A1                       A:9F X:00 Y:00 P:A5 SP:FB PPU:239,  5 CYC:655\n\
C99A  70 05     BVS $C9A1                       A:9F X:00 Y:00 P:A5 SP:FB PPU:245,  5 CYC:657\n\
C99C  90 03     BCC $C9A1                       A:9F X:00 Y:00 P:A5 SP:FB PPU:251,  5 CYC:659\n\
C99E  4C A5 C9  JMP $C9A5                       A:9F X:00 Y:00 P:A5 SP:FB PPU:257,  5 CYC:661\n\
C9A5  EA        NOP                             A:9F X:00 Y:00 P:A5 SP:FB PPU:266,  5 CYC:664\n\
C9A6  18        CLC                             A:9F X:00 Y:00 P:A5 SP:FB PPU:272,  5 CYC:666\n\
C9A7  24 01     BIT $01 = FF                    A:9F X:00 Y:00 P:A4 SP:FB PPU:278,  5 CYC:668\n\
C9A9  A9 00     LDA #$00                        A:9F X:00 Y:00 P:E4 SP:FB PPU:287,  5 CYC:671\n\
C9AB  D0 09     BNE $C9B6                       A:00 X:00 Y:00 P:66 SP:FB PPU:293,  5 CYC:673\n\
C9AD  30 07     BMI $C9B6                       A:00 X:00 Y:00 P:66 SP:FB PPU:299,  5 CYC:675\n\
C9AF  50 05     BVC $C9B6                       A:00 X:00 Y:00 P:66 SP:FB PPU:305,  5 CYC:677\n\
C9B1  B0 03     BCS $C9B6                       A:00 X:00 Y:00 P:66 SP:FB PPU:311,  5 CYC:679\n\
C9B3  4C BA C9  JMP $C9BA                       A:00 X:00 Y:00 P:66 SP:FB PPU:317,  5 CYC:681\n\
C9BA  EA        NOP                             A:00 X:00 Y:00 P:66 SP:FB PPU:326,  5 CYC:684\n\
C9BB  24 01     BIT $01 = FF                    A:00 X:00 Y:00 P:66 SP:FB PPU:332,  5 CYC:686\n\
C9BD  A9 40     LDA #$40                        A:00 X:00 Y:00 P:E6 SP:FB PPU:  0,  6 CYC:689\n\
C9BF  C9 40     CMP #$40                        A:40 X:00 Y:00 P:64 SP:FB PPU:  6,  6 CYC:691\n\
C9C1  30 09     BMI $C9CC                       A:40 X:00 Y:00 P:67 SP:FB PPU: 12,  6 CYC:693\n\
C9C3  90 07     BCC $C9CC                       A:40 X:00 Y:00 P:67 SP:FB PPU: 18,  6 CYC:695\n\
C9C5  D0 05     BNE $C9CC                       A:40 X:00 Y:00 P:67 SP:FB PPU: 24,  6 CYC:697\n\
C9C7  50 03     BVC $C9CC                       A:40 X:00 Y:00 P:67 SP:FB PPU: 30,  6 CYC:699\n\
C9C9  4C D0 C9  JMP $C9D0                       A:40 X:00 Y:00 P:67 SP:FB PPU: 36,  6 CYC:701\n\
C9D0  EA        NOP                             A:40 X:00 Y:00 P:67 SP:FB PPU: 45,  6 CYC:704\n\
C9D1  B8        CLV                             A:40 X:00 Y:00 P:67 SP:FB PPU: 51,  6 CYC:706\n\
C9D2  C9 3F     CMP #$3F                        A:40 X:00 Y:00 P:27 SP:FB PPU: 57,  6 CYC:708\n\
C9D4  F0 09     BEQ $C9DF                       A:40 X:00 Y:00 P:25 SP:FB PPU: 63,  6 CYC:710\n\
C9D6  30 07     BMI $C9DF                       A:40 X:00 Y:00 P:25 SP:FB PPU: 69,  6 CYC:712\n\
C9D8  90 05     BCC $C9DF                       A:40 X:00 Y:00 P:25 SP:FB PPU: 75,  6 CYC:714\n\
C9DA  70 03     BVS $C9DF                       A:40 X:00 Y:00 P:25 SP:FB PPU: 81,  6 CYC:716\n\
C9DC  4C E3 C9  JMP $C9E3                       A:40 X:00 Y:00 P:25 SP:FB PPU: 87,  6 CYC:718\n\
C9E3  EA        NOP                             A:40 X:00 Y:00 P:25 SP:FB PPU: 96,  6 CYC:721\n\
C9E4  C9 41     CMP #$41                        A:40 X:00 Y:00 P:25 SP:FB PPU:102,  6 CYC:723\n\
C9E6  F0 07     BEQ $C9EF                       A:40 X:00 Y:00 P:A4 SP:FB PPU:108,  6 CYC:725\n\
C9E8  10 05     BPL $C9EF                       A:40 X:00 Y:00 P:A4 SP:FB PPU:114,  6 CYC:727\n\
C9EA  10 03     BPL $C9EF                       A:40 X:00 Y:00 P:A4 SP:FB PPU:120,  6 CYC:729\n\
C9EC  4C F3 C9  JMP $C9F3                       A:40 X:00 Y:00 P:A4 SP:FB PPU:126,  6 CYC:731\n\
C9F3  EA        NOP                             A:40 X:00 Y:00 P:A4 SP:FB PPU:135,  6 CYC:734\n\
C9F4  A9 80     LDA #$80                        A:40 X:00 Y:00 P:A4 SP:FB PPU:141,  6 CYC:736\n\
C9F6  C9 00     CMP #$00                        A:80 X:00 Y:00 P:A4 SP:FB PPU:147,  6 CYC:738\n\
C9F8  F0 07     BEQ $CA01                       A:80 X:00 Y:00 P:A5 SP:FB PPU:153,  6 CYC:740\n\
C9FA  10 05     BPL $CA01                       A:80 X:00 Y:00 P:A5 SP:FB PPU:159,  6 CYC:742\n\
C9FC  90 03     BCC $CA01                       A:80 X:00 Y:00 P:A5 SP:FB PPU:165,  6 CYC:744\n\
C9FE  4C 05 CA  JMP $CA05                       A:80 X:00 Y:00 P:A5 SP:FB PPU:171,  6 CYC:746\n\
CA05  EA        NOP                             A:80 X:00 Y:00 P:A5 SP:FB PPU:180,  6 CYC:749\n\
CA06  C9 80     CMP #$80                        A:80 X:00 Y:00 P:A5 SP:FB PPU:186,  6 CYC:751\n\
CA08  D0 07     BNE $CA11                       A:80 X:00 Y:00 P:27 SP:FB PPU:192,  6 CYC:753\n\
CA0A  30 05     BMI $CA11                       A:80 X:00 Y:00 P:27 SP:FB PPU:198,  6 CYC:755\n\
CA0C  90 03     BCC $CA11                       A:80 X:00 Y:00 P:27 SP:FB PPU:204,  6 CYC:757\n\
CA0E  4C 15 CA  JMP $CA15                       A:80 X:00 Y:00 P:27 SP:FB PPU:210,  6 CYC:759\n\
CA15  EA        NOP                             A:80 X:00 Y:00 P:27 SP:FB PPU:219,  6 CYC:762\n\
CA16  C9 81     CMP #$81                        A:80 X:00 Y:00 P:27 SP:FB PPU:225,  6 CYC:764\n\
CA18  B0 07     BCS $CA21                       A:80 X:00 Y:00 P:A4 SP:FB PPU:231,  6 CYC:766\n\
CA1A  F0 05     BEQ $CA21                       A:80 X:00 Y:00 P:A4 SP:FB PPU:237,  6 CYC:768\n\
CA1C  10 03     BPL $CA21                       A:80 X:00 Y:00 P:A4 SP:FB PPU:243,  6 CYC:770\n\
CA1E  4C 25 CA  JMP $CA25                       A:80 X:00 Y:00 P:A4 SP:FB PPU:249,  6 CYC:772\n\
CA25  EA        NOP                             A:80 X:00 Y:00 P:A4 SP:FB PPU:258,  6 CYC:775\n\
CA26  C9 7F     CMP #$7F                        A:80 X:00 Y:00 P:A4 SP:FB PPU:264,  6 CYC:777\n\
CA28  90 07     BCC $CA31                       A:80 X:00 Y:00 P:25 SP:FB PPU:270,  6 CYC:779\n\
CA2A  F0 05     BEQ $CA31                       A:80 X:00 Y:00 P:25 SP:FB PPU:276,  6 CYC:781\n\
CA2C  30 03     BMI $CA31                       A:80 X:00 Y:00 P:25 SP:FB PPU:282,  6 CYC:783\n\
CA2E  4C 35 CA  JMP $CA35                       A:80 X:00 Y:00 P:25 SP:FB PPU:288,  6 CYC:785\n\
CA35  EA        NOP                             A:80 X:00 Y:00 P:25 SP:FB PPU:297,  6 CYC:788\n\
CA36  24 01     BIT $01 = FF                    A:80 X:00 Y:00 P:25 SP:FB PPU:303,  6 CYC:790\n\
CA38  A0 40     LDY #$40                        A:80 X:00 Y:00 P:E5 SP:FB PPU:312,  6 CYC:793\n\
CA3A  C0 40     CPY #$40                        A:80 X:00 Y:40 P:65 SP:FB PPU:318,  6 CYC:795\n\
CA3C  D0 09     BNE $CA47                       A:80 X:00 Y:40 P:67 SP:FB PPU:324,  6 CYC:797\n\
CA3E  30 07     BMI $CA47                       A:80 X:00 Y:40 P:67 SP:FB PPU:330,  6 CYC:799\n\
CA40  90 05     BCC $CA47                       A:80 X:00 Y:40 P:67 SP:FB PPU:336,  6 CYC:801\n\
CA42  50 03     BVC $CA47                       A:80 X:00 Y:40 P:67 SP:FB PPU:  1,  7 CYC:803\n\
CA44  4C 4B CA  JMP $CA4B                       A:80 X:00 Y:40 P:67 SP:FB PPU:  7,  7 CYC:805\n\
CA4B  EA        NOP                             A:80 X:00 Y:40 P:67 SP:FB PPU: 16,  7 CYC:808\n\
CA4C  B8        CLV                             A:80 X:00 Y:40 P:67 SP:FB PPU: 22,  7 CYC:810\n\
CA4D  C0 3F     CPY #$3F                        A:80 X:00 Y:40 P:27 SP:FB PPU: 28,  7 CYC:812\n\
CA4F  F0 09     BEQ $CA5A                       A:80 X:00 Y:40 P:25 SP:FB PPU: 34,  7 CYC:814\n\
CA51  30 07     BMI $CA5A                       A:80 X:00 Y:40 P:25 SP:FB PPU: 40,  7 CYC:816\n\
CA53  90 05     BCC $CA5A                       A:80 X:00 Y:40 P:25 SP:FB PPU: 46,  7 CYC:818\n\
CA55  70 03     BVS $CA5A                       A:80 X:00 Y:40 P:25 SP:FB PPU: 52,  7 CYC:820\n\
CA57  4C 5E CA  JMP $CA5E                       A:80 X:00 Y:40 P:25 SP:FB PPU: 58,  7 CYC:822\n\
CA5E  EA        NOP                             A:80 X:00 Y:40 P:25 SP:FB PPU: 67,  7 CYC:825\n\
CA5F  C0 41     CPY #$41                        A:80 X:00 Y:40 P:25 SP:FB PPU: 73,  7 CYC:827\n\
CA61  F0 07     BEQ $CA6A                       A:80 X:00 Y:40 P:A4 SP:FB PPU: 79,  7 CYC:829\n\
CA63  10 05     BPL $CA6A                       A:80 X:00 Y:40 P:A4 SP:FB PPU: 85,  7 CYC:831\n\
CA65  10 03     BPL $CA6A                       A:80 X:00 Y:40 P:A4 SP:FB PPU: 91,  7 CYC:833\n\
CA67  4C 6E CA  JMP $CA6E                       A:80 X:00 Y:40 P:A4 SP:FB PPU: 97,  7 CYC:835\n\
CA6E  EA        NOP                             A:80 X:00 Y:40 P:A4 SP:FB PPU:106,  7 CYC:838\n\
CA6F  A0 80     LDY #$80                        A:80 X:00 Y:40 P:A4 SP:FB PPU:112,  7 CYC:840\n\
CA71  C0 00     CPY #$00                        A:80 X:00 Y:80 P:A4 SP:FB PPU:118,  7 CYC:842\n\
CA73  F0 07     BEQ $CA7C                       A:80 X:00 Y:80 P:A5 SP:FB PPU:124,  7 CYC:844\n\
CA75  10 05     BPL $CA7C                       A:80 X:00 Y:80 P:A5 SP:FB PPU:130,  7 CYC:846\n\
CA77  90 03     BCC $CA7C                       A:80 X:00 Y:80 P:A5 SP:FB PPU:136,  7 CYC:848\n\
CA79  4C 80 CA  JMP $CA80                       A:80 X:00 Y:80 P:A5 SP:FB PPU:142,  7 CYC:850\n\
CA80  EA        NOP                             A:80 X:00 Y:80 P:A5 SP:FB PPU:151,  7 CYC:853\n\
CA81  C0 80     CPY #$80                        A:80 X:00 Y:80 P:A5 SP:FB PPU:157,  7 CYC:855\n\
CA83  D0 07     BNE $CA8C                       A:80 X:00 Y:80 P:27 SP:FB PPU:163,  7 CYC:857\n\
CA85  30 05     BMI $CA8C                       A:80 X:00 Y:80 P:27 SP:FB PPU:169,  7 CYC:859\n\
CA87  90 03     BCC $CA8C                       A:80 X:00 Y:80 P:27 SP:FB PPU:175,  7 CYC:861\n\
CA89  4C 90 CA  JMP $CA90                       A:80 X:00 Y:80 P:27 SP:FB PPU:181,  7 CYC:863\n\
CA90  EA        NOP                             A:80 X:00 Y:80 P:27 SP:FB PPU:190,  7 CYC:866\n\
CA91  C0 81     CPY #$81                        A:80 X:00 Y:80 P:27 SP:FB PPU:196,  7 CYC:868\n\
CA93  B0 07     BCS $CA9C                       A:80 X:00 Y:80 P:A4 SP:FB PPU:202,  7 CYC:870\n\
CA95  F0 05     BEQ $CA9C                       A:80 X:00 Y:80 P:A4 SP:FB PPU:208,  7 CYC:872\n\
CA97  10 03     BPL $CA9C                       A:80 X:00 Y:80 P:A4 SP:FB PPU:214,  7 CYC:874\n\
CA99  4C A0 CA  JMP $CAA0                       A:80 X:00 Y:80 P:A4 SP:FB PPU:220,  7 CYC:876\n\
CAA0  EA        NOP                             A:80 X:00 Y:80 P:A4 SP:FB PPU:229,  7 CYC:879\n\
CAA1  C0 7F     CPY #$7F                        A:80 X:00 Y:80 P:A4 SP:FB PPU:235,  7 CYC:881\n\
CAA3  90 07     BCC $CAAC                       A:80 X:00 Y:80 P:25 SP:FB PPU:241,  7 CYC:883\n\
CAA5  F0 05     BEQ $CAAC                       A:80 X:00 Y:80 P:25 SP:FB PPU:247,  7 CYC:885\n\
CAA7  30 03     BMI $CAAC                       A:80 X:00 Y:80 P:25 SP:FB PPU:253,  7 CYC:887\n\
CAA9  4C B0 CA  JMP $CAB0                       A:80 X:00 Y:80 P:25 SP:FB PPU:259,  7 CYC:889\n\
CAB0  EA        NOP                             A:80 X:00 Y:80 P:25 SP:FB PPU:268,  7 CYC:892\n\
CAB1  24 01     BIT $01 = FF                    A:80 X:00 Y:80 P:25 SP:FB PPU:274,  7 CYC:894\n\
CAB3  A2 40     LDX #$40                        A:80 X:00 Y:80 P:E5 SP:FB PPU:283,  7 CYC:897\n\
CAB5  E0 40     CPX #$40                        A:80 X:40 Y:80 P:65 SP:FB PPU:289,  7 CYC:899\n\
CAB7  D0 09     BNE $CAC2                       A:80 X:40 Y:80 P:67 SP:FB PPU:295,  7 CYC:901\n\
CAB9  30 07     BMI $CAC2                       A:80 X:40 Y:80 P:67 SP:FB PPU:301,  7 CYC:903\n\
CABB  90 05     BCC $CAC2                       A:80 X:40 Y:80 P:67 SP:FB PPU:307,  7 CYC:905\n\
CABD  50 03     BVC $CAC2                       A:80 X:40 Y:80 P:67 SP:FB PPU:313,  7 CYC:907\n\
CABF  4C C6 CA  JMP $CAC6                       A:80 X:40 Y:80 P:67 SP:FB PPU:319,  7 CYC:909\n\
CAC6  EA        NOP                             A:80 X:40 Y:80 P:67 SP:FB PPU:328,  7 CYC:912\n\
CAC7  B8        CLV                             A:80 X:40 Y:80 P:67 SP:FB PPU:334,  7 CYC:914\n\
CAC8  E0 3F     CPX #$3F                        A:80 X:40 Y:80 P:27 SP:FB PPU:340,  7 CYC:916\n\
CACA  F0 09     BEQ $CAD5                       A:80 X:40 Y:80 P:25 SP:FB PPU:  5,  8 CYC:918\n\
CACC  30 07     BMI $CAD5                       A:80 X:40 Y:80 P:25 SP:FB PPU: 11,  8 CYC:920\n\
CACE  90 05     BCC $CAD5                       A:80 X:40 Y:80 P:25 SP:FB PPU: 17,  8 CYC:922\n\
CAD0  70 03     BVS $CAD5                       A:80 X:40 Y:80 P:25 SP:FB PPU: 23,  8 CYC:924\n\
CAD2  4C D9 CA  JMP $CAD9                       A:80 X:40 Y:80 P:25 SP:FB PPU: 29,  8 CYC:926\n\
CAD9  EA        NOP                             A:80 X:40 Y:80 P:25 SP:FB PPU: 38,  8 CYC:929\n\
CADA  E0 41     CPX #$41                        A:80 X:40 Y:80 P:25 SP:FB PPU: 44,  8 CYC:931\n\
CADC  F0 07     BEQ $CAE5                       A:80 X:40 Y:80 P:A4 SP:FB PPU: 50,  8 CYC:933\n\
CADE  10 05     BPL $CAE5                       A:80 X:40 Y:80 P:A4 SP:FB PPU: 56,  8 CYC:935\n\
CAE0  10 03     BPL $CAE5                       A:80 X:40 Y:80 P:A4 SP:FB PPU: 62,  8 CYC:937\n\
CAE2  4C E9 CA  JMP $CAE9                       A:80 X:40 Y:80 P:A4 SP:FB PPU: 68,  8 CYC:939\n\
CAE9  EA        NOP                             A:80 X:40 Y:80 P:A4 SP:FB PPU: 77,  8 CYC:942\n\
CAEA  A2 80     LDX #$80                        A:80 X:40 Y:80 P:A4 SP:FB PPU: 83,  8 CYC:944\n\
CAEC  E0 00     CPX #$00                        A:80 X:80 Y:80 P:A4 SP:FB PPU: 89,  8 CYC:946\n\
CAEE  F0 07     BEQ $CAF7                       A:80 X:80 Y:80 P:A5 SP:FB PPU: 95,  8 CYC:948\n\
CAF0  10 05     BPL $CAF7                       A:80 X:80 Y:80 P:A5 SP:FB PPU:101,  8 CYC:950\n\
CAF2  90 03     BCC $CAF7                       A:80 X:80 Y:80 P:A5 SP:FB PPU:107,  8 CYC:952\n\
CAF4  4C FB CA  JMP $CAFB                       A:80 X:80 Y:80 P:A5 SP:FB PPU:113,  8 CYC:954\n\
CAFB  EA        NOP                             A:80 X:80 Y:80 P:A5 SP:FB PPU:122,  8 CYC:957\n\
CAFC  E0 80     CPX #$80                        A:80 X:80 Y:80 P:A5 SP:FB PPU:128,  8 CYC:959\n\
CAFE  D0 07     BNE $CB07                       A:80 X:80 Y:80 P:27 SP:FB PPU:134,  8 CYC:961\n\
CB00  30 05     BMI $CB07                       A:80 X:80 Y:80 P:27 SP:FB PPU:140,  8 CYC:963\n\
CB02  90 03     BCC $CB07                       A:80 X:80 Y:80 P:27 SP:FB PPU:146,  8 CYC:965\n\
CB04  4C 0B CB  JMP $CB0B                       A:80 X:80 Y:80 P:27 SP:FB PPU:152,  8 CYC:967\n\
CB0B  EA        NOP                             A:80 X:80 Y:80 P:27 SP:FB PPU:161,  8 CYC:970\n\
CB0C  E0 81     CPX #$81                        A:80 X:80 Y:80 P:27 SP:FB PPU:167,  8 CYC:972\n\
CB0E  B0 07     BCS $CB17                       A:80 X:80 Y:80 P:A4 SP:FB PPU:173,  8 CYC:974\n\
CB10  F0 05     BEQ $CB17                       A:80 X:80 Y:80 P:A4 SP:FB PPU:179,  8 CYC:976\n\
CB12  10 03     BPL $CB17                       A:80 X:80 Y:80 P:A4 SP:FB PPU:185,  8 CYC:978\n\
CB14  4C 1B CB  JMP $CB1B                       A:80 X:80 Y:80 P:A4 SP:FB PPU:191,  8 CYC:980\n\
CB1B  EA        NOP                             A:80 X:80 Y:80 P:A4 SP:FB PPU:200,  8 CYC:983\n\
CB1C  E0 7F     CPX #$7F                        A:80 X:80 Y:80 P:A4 SP:FB PPU:206,  8 CYC:985\n\
CB1E  90 07     BCC $CB27                       A:80 X:80 Y:80 P:25 SP:FB PPU:212,  8 CYC:987\n\
CB20  F0 05     BEQ $CB27                       A:80 X:80 Y:80 P:25 SP:FB PPU:218,  8 CYC:989\n\
CB22  30 03     BMI $CB27                       A:80 X:80 Y:80 P:25 SP:FB PPU:224,  8 CYC:991\n\
CB24  4C 2B CB  JMP $CB2B                       A:80 X:80 Y:80 P:25 SP:FB PPU:230,  8 CYC:993\n\
CB2B  EA        NOP                             A:80 X:80 Y:80 P:25 SP:FB PPU:239,  8 CYC:996\n\
CB2C  38        SEC                             A:80 X:80 Y:80 P:25 SP:FB PPU:245,  8 CYC:998\n\
CB2D  B8        CLV                             A:80 X:80 Y:80 P:25 SP:FB PPU:251,  8 CYC:1000\n\
CB2E  A2 9F     LDX #$9F                        A:80 X:80 Y:80 P:25 SP:FB PPU:257,  8 CYC:1002\n\
CB30  F0 09     BEQ $CB3B                       A:80 X:9F Y:80 P:A5 SP:FB PPU:263,  8 CYC:1004\n\
CB32  10 07     BPL $CB3B                       A:80 X:9F Y:80 P:A5 SP:FB PPU:269,  8 CYC:1006\n\
CB34  70 05     BVS $CB3B                       A:80 X:9F Y:80 P:A5 SP:FB PPU:275,  8 CYC:1008\n\
CB36  90 03     BCC $CB3B                       A:80 X:9F Y:80 P:A5 SP:FB PPU:281,  8 CYC:1010\n\
CB38  4C 3F CB  JMP $CB3F                       A:80 X:9F Y:80 P:A5 SP:FB PPU:287,  8 CYC:1012\n\
CB3F  EA        NOP                             A:80 X:9F Y:80 P:A5 SP:FB PPU:296,  8 CYC:1015\n\
CB40  18        CLC                             A:80 X:9F Y:80 P:A5 SP:FB PPU:302,  8 CYC:1017\n\
CB41  24 01     BIT $01 = FF                    A:80 X:9F Y:80 P:A4 SP:FB PPU:308,  8 CYC:1019\n\
CB43  A2 00     LDX #$00                        A:80 X:9F Y:80 P:E4 SP:FB PPU:317,  8 CYC:1022\n\
CB45  D0 09     BNE $CB50                       A:80 X:00 Y:80 P:66 SP:FB PPU:323,  8 CYC:1024\n\
CB47  30 07     BMI $CB50                       A:80 X:00 Y:80 P:66 SP:FB PPU:329,  8 CYC:1026\n\
CB49  50 05     BVC $CB50                       A:80 X:00 Y:80 P:66 SP:FB PPU:335,  8 CYC:1028\n\
CB4B  B0 03     BCS $CB50                       A:80 X:00 Y:80 P:66 SP:FB PPU:  0,  9 CYC:1030\n\
CB4D  4C 54 CB  JMP $CB54                       A:80 X:00 Y:80 P:66 SP:FB PPU:  6,  9 CYC:1032\n\
CB54  EA        NOP                             A:80 X:00 Y:80 P:66 SP:FB PPU: 15,  9 CYC:1035\n\
CB55  38        SEC                             A:80 X:00 Y:80 P:66 SP:FB PPU: 21,  9 CYC:1037\n\
CB56  B8        CLV                             A:80 X:00 Y:80 P:67 SP:FB PPU: 27,  9 CYC:1039\n\
CB57  A0 9F     LDY #$9F                        A:80 X:00 Y:80 P:27 SP:FB PPU: 33,  9 CYC:1041\n\
CB59  F0 09     BEQ $CB64                       A:80 X:00 Y:9F P:A5 SP:FB PPU: 39,  9 CYC:1043\n\
CB5B  10 07     BPL $CB64                       A:80 X:00 Y:9F P:A5 SP:FB PPU: 45,  9 CYC:1045\n\
CB5D  70 05     BVS $CB64                       A:80 X:00 Y:9F P:A5 SP:FB PPU: 51,  9 CYC:1047\n\
CB5F  90 03     BCC $CB64                       A:80 X:00 Y:9F P:A5 SP:FB PPU: 57,  9 CYC:1049\n\
CB61  4C 68 CB  JMP $CB68                       A:80 X:00 Y:9F P:A5 SP:FB PPU: 63,  9 CYC:1051\n\
CB68  EA        NOP                             A:80 X:00 Y:9F P:A5 SP:FB PPU: 72,  9 CYC:1054\n\
CB69  18        CLC                             A:80 X:00 Y:9F P:A5 SP:FB PPU: 78,  9 CYC:1056\n\
CB6A  24 01     BIT $01 = FF                    A:80 X:00 Y:9F P:A4 SP:FB PPU: 84,  9 CYC:1058\n\
CB6C  A0 00     LDY #$00                        A:80 X:00 Y:9F P:E4 SP:FB PPU: 93,  9 CYC:1061\n\
CB6E  D0 09     BNE $CB79                       A:80 X:00 Y:00 P:66 SP:FB PPU: 99,  9 CYC:1063\n\
CB70  30 07     BMI $CB79                       A:80 X:00 Y:00 P:66 SP:FB PPU:105,  9 CYC:1065\n\
CB72  50 05     BVC $CB79                       A:80 X:00 Y:00 P:66 SP:FB PPU:111,  9 CYC:1067\n\
CB74  B0 03     BCS $CB79                       A:80 X:00 Y:00 P:66 SP:FB PPU:117,  9 CYC:1069\n\
CB76  4C 7D CB  JMP $CB7D                       A:80 X:00 Y:00 P:66 SP:FB PPU:123,  9 CYC:1071\n\
CB7D  EA        NOP                             A:80 X:00 Y:00 P:66 SP:FB PPU:132,  9 CYC:1074\n\
CB7E  A9 55     LDA #$55                        A:80 X:00 Y:00 P:66 SP:FB PPU:138,  9 CYC:1076\n\
CB80  A2 AA     LDX #$AA                        A:55 X:00 Y:00 P:64 SP:FB PPU:144,  9 CYC:1078\n\
CB82  A0 33     LDY #$33                        A:55 X:AA Y:00 P:E4 SP:FB PPU:150,  9 CYC:1080\n\
CB84  C9 55     CMP #$55                        A:55 X:AA Y:33 P:64 SP:FB PPU:156,  9 CYC:1082\n\
CB86  D0 23     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:162,  9 CYC:1084\n\
CB88  E0 AA     CPX #$AA                        A:55 X:AA Y:33 P:67 SP:FB PPU:168,  9 CYC:1086\n\
CB8A  D0 1F     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:174,  9 CYC:1088\n\
CB8C  C0 33     CPY #$33                        A:55 X:AA Y:33 P:67 SP:FB PPU:180,  9 CYC:1090\n\
CB8E  D0 1B     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:186,  9 CYC:1092\n\
CB90  C9 55     CMP #$55                        A:55 X:AA Y:33 P:67 SP:FB PPU:192,  9 CYC:1094\n\
CB92  D0 17     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:198,  9 CYC:1096\n\
CB94  E0 AA     CPX #$AA                        A:55 X:AA Y:33 P:67 SP:FB PPU:204,  9 CYC:1098\n\
CB96  D0 13     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:210,  9 CYC:1100\n\
CB98  C0 33     CPY #$33                        A:55 X:AA Y:33 P:67 SP:FB PPU:216,  9 CYC:1102\n\
CB9A  D0 0F     BNE $CBAB                       A:55 X:AA Y:33 P:67 SP:FB PPU:222,  9 CYC:1104\n\
CB9C  C9 56     CMP #$56                        A:55 X:AA Y:33 P:67 SP:FB PPU:228,  9 CYC:1106\n\
CB9E  F0 0B     BEQ $CBAB                       A:55 X:AA Y:33 P:E4 SP:FB PPU:234,  9 CYC:1108\n\
CBA0  E0 AB     CPX #$AB                        A:55 X:AA Y:33 P:E4 SP:FB PPU:240,  9 CYC:1110\n\
CBA2  F0 07     BEQ $CBAB                       A:55 X:AA Y:33 P:E4 SP:FB PPU:246,  9 CYC:1112\n\
CBA4  C0 34     CPY #$34                        A:55 X:AA Y:33 P:E4 SP:FB PPU:252,  9 CYC:1114\n\
CBA6  F0 03     BEQ $CBAB                       A:55 X:AA Y:33 P:E4 SP:FB PPU:258,  9 CYC:1116\n\
CBA8  4C AF CB  JMP $CBAF                       A:55 X:AA Y:33 P:E4 SP:FB PPU:264,  9 CYC:1118\n\
CBAF  A0 71     LDY #$71                        A:55 X:AA Y:33 P:E4 SP:FB PPU:273,  9 CYC:1121\n\
CBB1  20 31 F9  JSR $F931                       A:55 X:AA Y:71 P:64 SP:FB PPU:279,  9 CYC:1123\n\
F931  24 01     BIT $01 = FF                    A:55 X:AA Y:71 P:64 SP:F9 PPU:297,  9 CYC:1129\n\
F933  A9 40     LDA #$40                        A:55 X:AA Y:71 P:E4 SP:F9 PPU:306,  9 CYC:1132\n\
F935  38        SEC                             A:40 X:AA Y:71 P:64 SP:F9 PPU:312,  9 CYC:1134\n\
F936  60        RTS                             A:40 X:AA Y:71 P:65 SP:F9 PPU:318,  9 CYC:1136\n\
CBB4  E9 40     SBC #$40                        A:40 X:AA Y:71 P:65 SP:FB PPU:336,  9 CYC:1142\n\
CBB6  20 37 F9  JSR $F937                       A:00 X:AA Y:71 P:27 SP:FB PPU:  1, 10 CYC:1144\n\
F937  30 0B     BMI $F944                       A:00 X:AA Y:71 P:27 SP:F9 PPU: 19, 10 CYC:1150\n\
F939  90 09     BCC $F944                       A:00 X:AA Y:71 P:27 SP:F9 PPU: 25, 10 CYC:1152\n\
F93B  D0 07     BNE $F944                       A:00 X:AA Y:71 P:27 SP:F9 PPU: 31, 10 CYC:1154\n\
F93D  70 05     BVS $F944                       A:00 X:AA Y:71 P:27 SP:F9 PPU: 37, 10 CYC:1156\n\
F93F  C9 00     CMP #$00                        A:00 X:AA Y:71 P:27 SP:F9 PPU: 43, 10 CYC:1158\n\
F941  D0 01     BNE $F944                       A:00 X:AA Y:71 P:27 SP:F9 PPU: 49, 10 CYC:1160\n\
F943  60        RTS                             A:00 X:AA Y:71 P:27 SP:F9 PPU: 55, 10 CYC:1162\n\
CBB9  C8        INY                             A:00 X:AA Y:71 P:27 SP:FB PPU: 73, 10 CYC:1168\n\
CBBA  20 47 F9  JSR $F947                       A:00 X:AA Y:72 P:25 SP:FB PPU: 79, 10 CYC:1170\n\
F947  B8        CLV                             A:00 X:AA Y:72 P:25 SP:F9 PPU: 97, 10 CYC:1176\n\
F948  38        SEC                             A:00 X:AA Y:72 P:25 SP:F9 PPU:103, 10 CYC:1178\n\
F949  A9 40     LDA #$40                        A:00 X:AA Y:72 P:25 SP:F9 PPU:109, 10 CYC:1180\n\
F94B  60        RTS                             A:40 X:AA Y:72 P:25 SP:F9 PPU:115, 10 CYC:1182\n\
CBBD  E9 3F     SBC #$3F                        A:40 X:AA Y:72 P:25 SP:FB PPU:133, 10 CYC:1188\n\
CBBF  20 4C F9  JSR $F94C                       A:01 X:AA Y:72 P:25 SP:FB PPU:139, 10 CYC:1190\n\
F94C  F0 0B     BEQ $F959                       A:01 X:AA Y:72 P:25 SP:F9 PPU:157, 10 CYC:1196\n\
F94E  30 09     BMI $F959                       A:01 X:AA Y:72 P:25 SP:F9 PPU:163, 10 CYC:1198\n\
F950  90 07     BCC $F959                       A:01 X:AA Y:72 P:25 SP:F9 PPU:169, 10 CYC:1200\n\
F952  70 05     BVS $F959                       A:01 X:AA Y:72 P:25 SP:F9 PPU:175, 10 CYC:1202\n\
F954  C9 01     CMP #$01                        A:01 X:AA Y:72 P:25 SP:F9 PPU:181, 10 CYC:1204\n\
F956  D0 01     BNE $F959                       A:01 X:AA Y:72 P:27 SP:F9 PPU:187, 10 CYC:1206\n\
F958  60        RTS                             A:01 X:AA Y:72 P:27 SP:F9 PPU:193, 10 CYC:1208\n\
CBC2  C8        INY                             A:01 X:AA Y:72 P:27 SP:FB PPU:211, 10 CYC:1214\n\
CBC3  20 5C F9  JSR $F95C                       A:01 X:AA Y:73 P:25 SP:FB PPU:217, 10 CYC:1216\n\
F95C  A9 40     LDA #$40                        A:01 X:AA Y:73 P:25 SP:F9 PPU:235, 10 CYC:1222\n\
F95E  38        SEC                             A:40 X:AA Y:73 P:25 SP:F9 PPU:241, 10 CYC:1224\n\
F95F  24 01     BIT $01 = FF                    A:40 X:AA Y:73 P:25 SP:F9 PPU:247, 10 CYC:1226\n\
F961  60        RTS                             A:40 X:AA Y:73 P:E5 SP:F9 PPU:256, 10 CYC:1229\n\
CBC6  E9 41     SBC #$41                        A:40 X:AA Y:73 P:E5 SP:FB PPU:274, 10 CYC:1235\n\
CBC8  20 62 F9  JSR $F962                       A:FF X:AA Y:73 P:A4 SP:FB PPU:280, 10 CYC:1237\n\
F962  B0 0B     BCS $F96F                       A:FF X:AA Y:73 P:A4 SP:F9 PPU:298, 10 CYC:1243\n\
F964  F0 09     BEQ $F96F                       A:FF X:AA Y:73 P:A4 SP:F9 PPU:304, 10 CYC:1245\n\
F966  10 07     BPL $F96F                       A:FF X:AA Y:73 P:A4 SP:F9 PPU:310, 10 CYC:1247\n\
F968  70 05     BVS $F96F                       A:FF X:AA Y:73 P:A4 SP:F9 PPU:316, 10 CYC:1249\n\
F96A  C9 FF     CMP #$FF                        A:FF X:AA Y:73 P:A4 SP:F9 PPU:322, 10 CYC:1251\n\
F96C  D0 01     BNE $F96F                       A:FF X:AA Y:73 P:27 SP:F9 PPU:328, 10 CYC:1253\n\
F96E  60        RTS                             A:FF X:AA Y:73 P:27 SP:F9 PPU:334, 10 CYC:1255\n\
CBCB  C8        INY                             A:FF X:AA Y:73 P:27 SP:FB PPU: 11, 11 CYC:1261\n\
CBCC  20 72 F9  JSR $F972                       A:FF X:AA Y:74 P:25 SP:FB PPU: 17, 11 CYC:1263\n\
F972  18        CLC                             A:FF X:AA Y:74 P:25 SP:F9 PPU: 35, 11 CYC:1269\n\
F973  A9 80     LDA #$80                        A:FF X:AA Y:74 P:24 SP:F9 PPU: 41, 11 CYC:1271\n\
F975  60        RTS                             A:80 X:AA Y:74 P:A4 SP:F9 PPU: 47, 11 CYC:1273\n\
CBCF  E9 00     SBC #$00                        A:80 X:AA Y:74 P:A4 SP:FB PPU: 65, 11 CYC:1279\n\
CBD1  20 76 F9  JSR $F976                       A:7F X:AA Y:74 P:65 SP:FB PPU: 71, 11 CYC:1281\n\
F976  90 05     BCC $F97D                       A:7F X:AA Y:74 P:65 SP:F9 PPU: 89, 11 CYC:1287\n\
F978  C9 7F     CMP #$7F                        A:7F X:AA Y:74 P:65 SP:F9 PPU: 95, 11 CYC:1289\n\
F97A  D0 01     BNE $F97D                       A:7F X:AA Y:74 P:67 SP:F9 PPU:101, 11 CYC:1291\n\
F97C  60        RTS                             A:7F X:AA Y:74 P:67 SP:F9 PPU:107, 11 CYC:1293\n\
CBD4  C8        INY                             A:7F X:AA Y:74 P:67 SP:FB PPU:125, 11 CYC:1299\n\
CBD5  20 80 F9  JSR $F980                       A:7F X:AA Y:75 P:65 SP:FB PPU:131, 11 CYC:1301\n\
F980  38        SEC                             A:7F X:AA Y:75 P:65 SP:F9 PPU:149, 11 CYC:1307\n\
F981  A9 81     LDA #$81                        A:7F X:AA Y:75 P:65 SP:F9 PPU:155, 11 CYC:1309\n\
F983  60        RTS                             A:81 X:AA Y:75 P:E5 SP:F9 PPU:161, 11 CYC:1311\n\
CBD8  E9 7F     SBC #$7F                        A:81 X:AA Y:75 P:E5 SP:FB PPU:179, 11 CYC:1317\n\
CBDA  20 84 F9  JSR $F984                       A:02 X:AA Y:75 P:65 SP:FB PPU:185, 11 CYC:1319\n\
F984  50 07     BVC $F98D                       A:02 X:AA Y:75 P:65 SP:F9 PPU:203, 11 CYC:1325\n\
F986  90 05     BCC $F98D                       A:02 X:AA Y:75 P:65 SP:F9 PPU:209, 11 CYC:1327\n\
F988  C9 02     CMP #$02                        A:02 X:AA Y:75 P:65 SP:F9 PPU:215, 11 CYC:1329\n\
F98A  D0 01     BNE $F98D                       A:02 X:AA Y:75 P:67 SP:F9 PPU:221, 11 CYC:1331\n\
F98C  60        RTS                             A:02 X:AA Y:75 P:67 SP:F9 PPU:227, 11 CYC:1333\n\
CBDD  60        RTS                             A:02 X:AA Y:75 P:67 SP:FB PPU:245, 11 CYC:1339\n\
C606  20 DE CB  JSR $CBDE                       A:02 X:AA Y:75 P:67 SP:FD PPU:263, 11 CYC:1345\n\
CBDE  EA        NOP                             A:02 X:AA Y:75 P:67 SP:FB PPU:281, 11 CYC:1351\n\
CBDF  A9 FF     LDA #$FF                        A:02 X:AA Y:75 P:67 SP:FB PPU:287, 11 CYC:1353\n\
CBE1  85 01     STA $01 = FF                    A:FF X:AA Y:75 P:E5 SP:FB PPU:293, 11 CYC:1355\n\
CBE3  A9 44     LDA #$44                        A:FF X:AA Y:75 P:E5 SP:FB PPU:302, 11 CYC:1358\n\
CBE5  A2 55     LDX #$55                        A:44 X:AA Y:75 P:65 SP:FB PPU:308, 11 CYC:1360\n\
CBE7  A0 66     LDY #$66                        A:44 X:55 Y:75 P:65 SP:FB PPU:314, 11 CYC:1362\n\
CBE9  E8        INX                             A:44 X:55 Y:66 P:65 SP:FB PPU:320, 11 CYC:1364\n\
CBEA  88        DEY                             A:44 X:56 Y:66 P:65 SP:FB PPU:326, 11 CYC:1366\n\
CBEB  E0 56     CPX #$56                        A:44 X:56 Y:65 P:65 SP:FB PPU:332, 11 CYC:1368\n\
CBED  D0 21     BNE $CC10                       A:44 X:56 Y:65 P:67 SP:FB PPU:338, 11 CYC:1370\n\
CBEF  C0 65     CPY #$65                        A:44 X:56 Y:65 P:67 SP:FB PPU:  3, 12 CYC:1372\n\
CBF1  D0 1D     BNE $CC10                       A:44 X:56 Y:65 P:67 SP:FB PPU:  9, 12 CYC:1374\n\
CBF3  E8        INX                             A:44 X:56 Y:65 P:67 SP:FB PPU: 15, 12 CYC:1376\n\
CBF4  E8        INX                             A:44 X:57 Y:65 P:65 SP:FB PPU: 21, 12 CYC:1378\n\
CBF5  88        DEY                             A:44 X:58 Y:65 P:65 SP:FB PPU: 27, 12 CYC:1380\n\
CBF6  88        DEY                             A:44 X:58 Y:64 P:65 SP:FB PPU: 33, 12 CYC:1382\n\
CBF7  E0 58     CPX #$58                        A:44 X:58 Y:63 P:65 SP:FB PPU: 39, 12 CYC:1384\n\
CBF9  D0 15     BNE $CC10                       A:44 X:58 Y:63 P:67 SP:FB PPU: 45, 12 CYC:1386\n\
CBFB  C0 63     CPY #$63                        A:44 X:58 Y:63 P:67 SP:FB PPU: 51, 12 CYC:1388\n\
CBFD  D0 11     BNE $CC10                       A:44 X:58 Y:63 P:67 SP:FB PPU: 57, 12 CYC:1390\n\
CBFF  CA        DEX                             A:44 X:58 Y:63 P:67 SP:FB PPU: 63, 12 CYC:1392\n\
CC00  C8        INY                             A:44 X:57 Y:63 P:65 SP:FB PPU: 69, 12 CYC:1394\n\
CC01  E0 57     CPX #$57                        A:44 X:57 Y:64 P:65 SP:FB PPU: 75, 12 CYC:1396\n\
CC03  D0 0B     BNE $CC10                       A:44 X:57 Y:64 P:67 SP:FB PPU: 81, 12 CYC:1398\n\
CC05  C0 64     CPY #$64                        A:44 X:57 Y:64 P:67 SP:FB PPU: 87, 12 CYC:1400\n\
CC07  D0 07     BNE $CC10                       A:44 X:57 Y:64 P:67 SP:FB PPU: 93, 12 CYC:1402\n\
CC09  C9 44     CMP #$44                        A:44 X:57 Y:64 P:67 SP:FB PPU: 99, 12 CYC:1404\n\
CC0B  D0 03     BNE $CC10                       A:44 X:57 Y:64 P:67 SP:FB PPU:105, 12 CYC:1406\n\
CC0D  4C 14 CC  JMP $CC14                       A:44 X:57 Y:64 P:67 SP:FB PPU:111, 12 CYC:1408\n\
CC14  EA        NOP                             A:44 X:57 Y:64 P:67 SP:FB PPU:120, 12 CYC:1411\n\
CC15  38        SEC                             A:44 X:57 Y:64 P:67 SP:FB PPU:126, 12 CYC:1413\n\
CC16  A2 69     LDX #$69                        A:44 X:57 Y:64 P:67 SP:FB PPU:132, 12 CYC:1415\n\
CC18  A9 96     LDA #$96                        A:44 X:69 Y:64 P:65 SP:FB PPU:138, 12 CYC:1417\n\
CC1A  24 01     BIT $01 = FF                    A:96 X:69 Y:64 P:E5 SP:FB PPU:144, 12 CYC:1419\n\
CC1C  A0 FF     LDY #$FF                        A:96 X:69 Y:64 P:E5 SP:FB PPU:153, 12 CYC:1422\n\
CC1E  C8        INY                             A:96 X:69 Y:FF P:E5 SP:FB PPU:159, 12 CYC:1424\n\
CC1F  D0 3D     BNE $CC5E                       A:96 X:69 Y:00 P:67 SP:FB PPU:165, 12 CYC:1426\n\
CC21  30 3B     BMI $CC5E                       A:96 X:69 Y:00 P:67 SP:FB PPU:171, 12 CYC:1428\n\
CC23  90 39     BCC $CC5E                       A:96 X:69 Y:00 P:67 SP:FB PPU:177, 12 CYC:1430\n\
CC25  50 37     BVC $CC5E                       A:96 X:69 Y:00 P:67 SP:FB PPU:183, 12 CYC:1432\n\
CC27  C0 00     CPY #$00                        A:96 X:69 Y:00 P:67 SP:FB PPU:189, 12 CYC:1434\n\
CC29  D0 33     BNE $CC5E                       A:96 X:69 Y:00 P:67 SP:FB PPU:195, 12 CYC:1436\n\
CC2B  C8        INY                             A:96 X:69 Y:00 P:67 SP:FB PPU:201, 12 CYC:1438\n\
CC2C  F0 30     BEQ $CC5E                       A:96 X:69 Y:01 P:65 SP:FB PPU:207, 12 CYC:1440\n\
CC2E  30 2E     BMI $CC5E                       A:96 X:69 Y:01 P:65 SP:FB PPU:213, 12 CYC:1442\n\
CC30  90 2C     BCC $CC5E                       A:96 X:69 Y:01 P:65 SP:FB PPU:219, 12 CYC:1444\n\
CC32  50 2A     BVC $CC5E                       A:96 X:69 Y:01 P:65 SP:FB PPU:225, 12 CYC:1446\n\
CC34  18        CLC                             A:96 X:69 Y:01 P:65 SP:FB PPU:231, 12 CYC:1448\n\
CC35  B8        CLV                             A:96 X:69 Y:01 P:64 SP:FB PPU:237, 12 CYC:1450\n\
CC36  A0 00     LDY #$00                        A:96 X:69 Y:01 P:24 SP:FB PPU:243, 12 CYC:1452\n\
CC38  88        DEY                             A:96 X:69 Y:00 P:26 SP:FB PPU:249, 12 CYC:1454\n\
CC39  F0 23     BEQ $CC5E                       A:96 X:69 Y:FF P:A4 SP:FB PPU:255, 12 CYC:1456\n\
CC3B  10 21     BPL $CC5E                       A:96 X:69 Y:FF P:A4 SP:FB PPU:261, 12 CYC:1458\n\
CC3D  B0 1F     BCS $CC5E                       A:96 X:69 Y:FF P:A4 SP:FB PPU:267, 12 CYC:1460\n\
CC3F  70 1D     BVS $CC5E                       A:96 X:69 Y:FF P:A4 SP:FB PPU:273, 12 CYC:1462\n\
CC41  C0 FF     CPY #$FF                        A:96 X:69 Y:FF P:A4 SP:FB PPU:279, 12 CYC:1464\n\
CC43  D0 19     BNE $CC5E                       A:96 X:69 Y:FF P:27 SP:FB PPU:285, 12 CYC:1466\n\
CC45  18        CLC                             A:96 X:69 Y:FF P:27 SP:FB PPU:291, 12 CYC:1468\n\
CC46  88        DEY                             A:96 X:69 Y:FF P:26 SP:FB PPU:297, 12 CYC:1470\n\
CC47  F0 15     BEQ $CC5E                       A:96 X:69 Y:FE P:A4 SP:FB PPU:303, 12 CYC:1472\n\
CC49  10 13     BPL $CC5E                       A:96 X:69 Y:FE P:A4 SP:FB PPU:309, 12 CYC:1474\n\
CC4B  B0 11     BCS $CC5E                       A:96 X:69 Y:FE P:A4 SP:FB PPU:315, 12 CYC:1476\n\
CC4D  70 0F     BVS $CC5E                       A:96 X:69 Y:FE P:A4 SP:FB PPU:321, 12 CYC:1478\n\
CC4F  C0 FE     CPY #$FE                        A:96 X:69 Y:FE P:A4 SP:FB PPU:327, 12 CYC:1480\n\
CC51  D0 0B     BNE $CC5E                       A:96 X:69 Y:FE P:27 SP:FB PPU:333, 12 CYC:1482\n\
CC53  C9 96     CMP #$96                        A:96 X:69 Y:FE P:27 SP:FB PPU:339, 12 CYC:1484\n\
CC55  D0 07     BNE $CC5E                       A:96 X:69 Y:FE P:27 SP:FB PPU:  4, 13 CYC:1486\n\
CC57  E0 69     CPX #$69                        A:96 X:69 Y:FE P:27 SP:FB PPU: 10, 13 CYC:1488\n\
CC59  D0 03     BNE $CC5E                       A:96 X:69 Y:FE P:27 SP:FB PPU: 16, 13 CYC:1490\n\
CC5B  4C 62 CC  JMP $CC62                       A:96 X:69 Y:FE P:27 SP:FB PPU: 22, 13 CYC:1492\n\
CC62  EA        NOP                             A:96 X:69 Y:FE P:27 SP:FB PPU: 31, 13 CYC:1495\n\
CC63  38        SEC                             A:96 X:69 Y:FE P:27 SP:FB PPU: 37, 13 CYC:1497\n\
CC64  A0 69     LDY #$69                        A:96 X:69 Y:FE P:27 SP:FB PPU: 43, 13 CYC:1499\n\
CC66  A9 96     LDA #$96                        A:96 X:69 Y:69 P:25 SP:FB PPU: 49, 13 CYC:1501\n\
CC68  24 01     BIT $01 = FF                    A:96 X:69 Y:69 P:A5 SP:FB PPU: 55, 13 CYC:1503\n\
CC6A  A2 FF     LDX #$FF                        A:96 X:69 Y:69 P:E5 SP:FB PPU: 64, 13 CYC:1506\n\
CC6C  E8        INX                             A:96 X:FF Y:69 P:E5 SP:FB PPU: 70, 13 CYC:1508\n\
CC6D  D0 3D     BNE $CCAC                       A:96 X:00 Y:69 P:67 SP:FB PPU: 76, 13 CYC:1510\n\
CC6F  30 3B     BMI $CCAC                       A:96 X:00 Y:69 P:67 SP:FB PPU: 82, 13 CYC:1512\n\
CC71  90 39     BCC $CCAC                       A:96 X:00 Y:69 P:67 SP:FB PPU: 88, 13 CYC:1514\n\
CC73  50 37     BVC $CCAC                       A:96 X:00 Y:69 P:67 SP:FB PPU: 94, 13 CYC:1516\n\
CC75  E0 00     CPX #$00                        A:96 X:00 Y:69 P:67 SP:FB PPU:100, 13 CYC:1518\n\
CC77  D0 33     BNE $CCAC                       A:96 X:00 Y:69 P:67 SP:FB PPU:106, 13 CYC:1520\n\
CC79  E8        INX                             A:96 X:00 Y:69 P:67 SP:FB PPU:112, 13 CYC:1522\n\
CC7A  F0 30     BEQ $CCAC                       A:96 X:01 Y:69 P:65 SP:FB PPU:118, 13 CYC:1524\n\
CC7C  30 2E     BMI $CCAC                       A:96 X:01 Y:69 P:65 SP:FB PPU:124, 13 CYC:1526\n\
CC7E  90 2C     BCC $CCAC                       A:96 X:01 Y:69 P:65 SP:FB PPU:130, 13 CYC:1528\n\
CC80  50 2A     BVC $CCAC                       A:96 X:01 Y:69 P:65 SP:FB PPU:136, 13 CYC:1530\n\
CC82  18        CLC                             A:96 X:01 Y:69 P:65 SP:FB PPU:142, 13 CYC:1532\n\
CC83  B8        CLV                             A:96 X:01 Y:69 P:64 SP:FB PPU:148, 13 CYC:1534\n\
CC84  A2 00     LDX #$00                        A:96 X:01 Y:69 P:24 SP:FB PPU:154, 13 CYC:1536\n\
CC86  CA        DEX                             A:96 X:00 Y:69 P:26 SP:FB PPU:160, 13 CYC:1538\n\
CC87  F0 23     BEQ $CCAC                       A:96 X:FF Y:69 P:A4 SP:FB PPU:166, 13 CYC:1540\n\
CC89  10 21     BPL $CCAC                       A:96 X:FF Y:69 P:A4 SP:FB PPU:172, 13 CYC:1542\n\
CC8B  B0 1F     BCS $CCAC                       A:96 X:FF Y:69 P:A4 SP:FB PPU:178, 13 CYC:1544\n\
CC8D  70 1D     BVS $CCAC                       A:96 X:FF Y:69 P:A4 SP:FB PPU:184, 13 CYC:1546\n\
CC8F  E0 FF     CPX #$FF                        A:96 X:FF Y:69 P:A4 SP:FB PPU:190, 13 CYC:1548\n\
CC91  D0 19     BNE $CCAC                       A:96 X:FF Y:69 P:27 SP:FB PPU:196, 13 CYC:1550\n\
CC93  18        CLC                             A:96 X:FF Y:69 P:27 SP:FB PPU:202, 13 CYC:1552\n\
CC94  CA        DEX                             A:96 X:FF Y:69 P:26 SP:FB PPU:208, 13 CYC:1554\n\
CC95  F0 15     BEQ $CCAC                       A:96 X:FE Y:69 P:A4 SP:FB PPU:214, 13 CYC:1556\n\
CC97  10 13     BPL $CCAC                       A:96 X:FE Y:69 P:A4 SP:FB PPU:220, 13 CYC:1558\n\
CC99  B0 11     BCS $CCAC                       A:96 X:FE Y:69 P:A4 SP:FB PPU:226, 13 CYC:1560\n\
CC9B  70 0F     BVS $CCAC                       A:96 X:FE Y:69 P:A4 SP:FB PPU:232, 13 CYC:1562\n\
CC9D  E0 FE     CPX #$FE                        A:96 X:FE Y:69 P:A4 SP:FB PPU:238, 13 CYC:1564\n\
CC9F  D0 0B     BNE $CCAC                       A:96 X:FE Y:69 P:27 SP:FB PPU:244, 13 CYC:1566\n\
CCA1  C9 96     CMP #$96                        A:96 X:FE Y:69 P:27 SP:FB PPU:250, 13 CYC:1568\n\
CCA3  D0 07     BNE $CCAC                       A:96 X:FE Y:69 P:27 SP:FB PPU:256, 13 CYC:1570\n\
CCA5  C0 69     CPY #$69                        A:96 X:FE Y:69 P:27 SP:FB PPU:262, 13 CYC:1572\n\
CCA7  D0 03     BNE $CCAC                       A:96 X:FE Y:69 P:27 SP:FB PPU:268, 13 CYC:1574\n\
CCA9  4C B0 CC  JMP $CCB0                       A:96 X:FE Y:69 P:27 SP:FB PPU:274, 13 CYC:1576\n\
CCB0  EA        NOP                             A:96 X:FE Y:69 P:27 SP:FB PPU:283, 13 CYC:1579\n\
CCB1  A9 85     LDA #$85                        A:96 X:FE Y:69 P:27 SP:FB PPU:289, 13 CYC:1581\n\
CCB3  A2 34     LDX #$34                        A:85 X:FE Y:69 P:A5 SP:FB PPU:295, 13 CYC:1583\n\
CCB5  A0 99     LDY #$99                        A:85 X:34 Y:69 P:25 SP:FB PPU:301, 13 CYC:1585\n\
CCB7  18        CLC                             A:85 X:34 Y:99 P:A5 SP:FB PPU:307, 13 CYC:1587\n\
CCB8  24 01     BIT $01 = FF                    A:85 X:34 Y:99 P:A4 SP:FB PPU:313, 13 CYC:1589\n\
CCBA  A8        TAY                             A:85 X:34 Y:99 P:E4 SP:FB PPU:322, 13 CYC:1592\n\
CCBB  F0 2E     BEQ $CCEB                       A:85 X:34 Y:85 P:E4 SP:FB PPU:328, 13 CYC:1594\n\
CCBD  B0 2C     BCS $CCEB                       A:85 X:34 Y:85 P:E4 SP:FB PPU:334, 13 CYC:1596\n\
CCBF  50 2A     BVC $CCEB                       A:85 X:34 Y:85 P:E4 SP:FB PPU:340, 13 CYC:1598\n\
CCC1  10 28     BPL $CCEB                       A:85 X:34 Y:85 P:E4 SP:FB PPU:  5, 14 CYC:1600\n\
CCC3  C9 85     CMP #$85                        A:85 X:34 Y:85 P:E4 SP:FB PPU: 11, 14 CYC:1602\n\
CCC5  D0 24     BNE $CCEB                       A:85 X:34 Y:85 P:67 SP:FB PPU: 17, 14 CYC:1604\n\
CCC7  E0 34     CPX #$34                        A:85 X:34 Y:85 P:67 SP:FB PPU: 23, 14 CYC:1606\n\
CCC9  D0 20     BNE $CCEB                       A:85 X:34 Y:85 P:67 SP:FB PPU: 29, 14 CYC:1608\n\
CCCB  C0 85     CPY #$85                        A:85 X:34 Y:85 P:67 SP:FB PPU: 35, 14 CYC:1610\n\
CCCD  D0 1C     BNE $CCEB                       A:85 X:34 Y:85 P:67 SP:FB PPU: 41, 14 CYC:1612\n\
CCCF  A9 00     LDA #$00                        A:85 X:34 Y:85 P:67 SP:FB PPU: 47, 14 CYC:1614\n\
CCD1  38        SEC                             A:00 X:34 Y:85 P:67 SP:FB PPU: 53, 14 CYC:1616\n\
CCD2  B8        CLV                             A:00 X:34 Y:85 P:67 SP:FB PPU: 59, 14 CYC:1618\n\
CCD3  A8        TAY                             A:00 X:34 Y:85 P:27 SP:FB PPU: 65, 14 CYC:1620\n\
CCD4  D0 15     BNE $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU: 71, 14 CYC:1622\n\
CCD6  90 13     BCC $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU: 77, 14 CYC:1624\n\
CCD8  70 11     BVS $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU: 83, 14 CYC:1626\n\
CCDA  30 0F     BMI $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU: 89, 14 CYC:1628\n\
CCDC  C9 00     CMP #$00                        A:00 X:34 Y:00 P:27 SP:FB PPU: 95, 14 CYC:1630\n\
CCDE  D0 0B     BNE $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU:101, 14 CYC:1632\n\
CCE0  E0 34     CPX #$34                        A:00 X:34 Y:00 P:27 SP:FB PPU:107, 14 CYC:1634\n\
CCE2  D0 07     BNE $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU:113, 14 CYC:1636\n\
CCE4  C0 00     CPY #$00                        A:00 X:34 Y:00 P:27 SP:FB PPU:119, 14 CYC:1638\n\
CCE6  D0 03     BNE $CCEB                       A:00 X:34 Y:00 P:27 SP:FB PPU:125, 14 CYC:1640\n\
CCE8  4C EF CC  JMP $CCEF                       A:00 X:34 Y:00 P:27 SP:FB PPU:131, 14 CYC:1642\n\
CCEF  EA        NOP                             A:00 X:34 Y:00 P:27 SP:FB PPU:140, 14 CYC:1645\n\
CCF0  A9 85     LDA #$85                        A:00 X:34 Y:00 P:27 SP:FB PPU:146, 14 CYC:1647\n\
CCF2  A2 34     LDX #$34                        A:85 X:34 Y:00 P:A5 SP:FB PPU:152, 14 CYC:1649\n\
CCF4  A0 99     LDY #$99                        A:85 X:34 Y:00 P:25 SP:FB PPU:158, 14 CYC:1651\n\
CCF6  18        CLC                             A:85 X:34 Y:99 P:A5 SP:FB PPU:164, 14 CYC:1653\n\
CCF7  24 01     BIT $01 = FF                    A:85 X:34 Y:99 P:A4 SP:FB PPU:170, 14 CYC:1655\n\
CCF9  AA        TAX                             A:85 X:34 Y:99 P:E4 SP:FB PPU:179, 14 CYC:1658\n\
CCFA  F0 2E     BEQ $CD2A                       A:85 X:85 Y:99 P:E4 SP:FB PPU:185, 14 CYC:1660\n\
CCFC  B0 2C     BCS $CD2A                       A:85 X:85 Y:99 P:E4 SP:FB PPU:191, 14 CYC:1662\n\
CCFE  50 2A     BVC $CD2A                       A:85 X:85 Y:99 P:E4 SP:FB PPU:197, 14 CYC:1664\n\
CD00  10 28     BPL $CD2A                       A:85 X:85 Y:99 P:E4 SP:FB PPU:203, 14 CYC:1666\n\
CD02  C9 85     CMP #$85                        A:85 X:85 Y:99 P:E4 SP:FB PPU:209, 14 CYC:1668\n\
CD04  D0 24     BNE $CD2A                       A:85 X:85 Y:99 P:67 SP:FB PPU:215, 14 CYC:1670\n\
CD06  E0 85     CPX #$85                        A:85 X:85 Y:99 P:67 SP:FB PPU:221, 14 CYC:1672\n\
CD08  D0 20     BNE $CD2A                       A:85 X:85 Y:99 P:67 SP:FB PPU:227, 14 CYC:1674\n\
CD0A  C0 99     CPY #$99                        A:85 X:85 Y:99 P:67 SP:FB PPU:233, 14 CYC:1676\n\
CD0C  D0 1C     BNE $CD2A                       A:85 X:85 Y:99 P:67 SP:FB PPU:239, 14 CYC:1678\n\
CD0E  A9 00     LDA #$00                        A:85 X:85 Y:99 P:67 SP:FB PPU:245, 14 CYC:1680\n\
CD10  38        SEC                             A:00 X:85 Y:99 P:67 SP:FB PPU:251, 14 CYC:1682\n\
CD11  B8        CLV                             A:00 X:85 Y:99 P:67 SP:FB PPU:257, 14 CYC:1684\n\
CD12  AA        TAX                             A:00 X:85 Y:99 P:27 SP:FB PPU:263, 14 CYC:1686\n\
CD13  D0 15     BNE $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:269, 14 CYC:1688\n\
CD15  90 13     BCC $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:275, 14 CYC:1690\n\
CD17  70 11     BVS $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:281, 14 CYC:1692\n\
CD19  30 0F     BMI $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:287, 14 CYC:1694\n\
CD1B  C9 00     CMP #$00                        A:00 X:00 Y:99 P:27 SP:FB PPU:293, 14 CYC:1696\n\
CD1D  D0 0B     BNE $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:299, 14 CYC:1698\n\
CD1F  E0 00     CPX #$00                        A:00 X:00 Y:99 P:27 SP:FB PPU:305, 14 CYC:1700\n\
CD21  D0 07     BNE $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:311, 14 CYC:1702\n\
CD23  C0 99     CPY #$99                        A:00 X:00 Y:99 P:27 SP:FB PPU:317, 14 CYC:1704\n\
CD25  D0 03     BNE $CD2A                       A:00 X:00 Y:99 P:27 SP:FB PPU:323, 14 CYC:1706\n\
CD27  4C 2E CD  JMP $CD2E                       A:00 X:00 Y:99 P:27 SP:FB PPU:329, 14 CYC:1708\n\
CD2E  EA        NOP                             A:00 X:00 Y:99 P:27 SP:FB PPU:338, 14 CYC:1711\n\
CD2F  A9 85     LDA #$85                        A:00 X:00 Y:99 P:27 SP:FB PPU:  3, 15 CYC:1713\n\
CD31  A2 34     LDX #$34                        A:85 X:00 Y:99 P:A5 SP:FB PPU:  9, 15 CYC:1715\n\
CD33  A0 99     LDY #$99                        A:85 X:34 Y:99 P:25 SP:FB PPU: 15, 15 CYC:1717\n\
CD35  18        CLC                             A:85 X:34 Y:99 P:A5 SP:FB PPU: 21, 15 CYC:1719\n\
CD36  24 01     BIT $01 = FF                    A:85 X:34 Y:99 P:A4 SP:FB PPU: 27, 15 CYC:1721\n\
CD38  98        TYA                             A:85 X:34 Y:99 P:E4 SP:FB PPU: 36, 15 CYC:1724\n\
CD39  F0 2E     BEQ $CD69                       A:99 X:34 Y:99 P:E4 SP:FB PPU: 42, 15 CYC:1726\n\
CD3B  B0 2C     BCS $CD69                       A:99 X:34 Y:99 P:E4 SP:FB PPU: 48, 15 CYC:1728\n\
CD3D  50 2A     BVC $CD69                       A:99 X:34 Y:99 P:E4 SP:FB PPU: 54, 15 CYC:1730\n\
CD3F  10 28     BPL $CD69                       A:99 X:34 Y:99 P:E4 SP:FB PPU: 60, 15 CYC:1732\n\
CD41  C9 99     CMP #$99                        A:99 X:34 Y:99 P:E4 SP:FB PPU: 66, 15 CYC:1734\n\
CD43  D0 24     BNE $CD69                       A:99 X:34 Y:99 P:67 SP:FB PPU: 72, 15 CYC:1736\n\
CD45  E0 34     CPX #$34                        A:99 X:34 Y:99 P:67 SP:FB PPU: 78, 15 CYC:1738\n\
CD47  D0 20     BNE $CD69                       A:99 X:34 Y:99 P:67 SP:FB PPU: 84, 15 CYC:1740\n\
CD49  C0 99     CPY #$99                        A:99 X:34 Y:99 P:67 SP:FB PPU: 90, 15 CYC:1742\n\
CD4B  D0 1C     BNE $CD69                       A:99 X:34 Y:99 P:67 SP:FB PPU: 96, 15 CYC:1744\n\
CD4D  A0 00     LDY #$00                        A:99 X:34 Y:99 P:67 SP:FB PPU:102, 15 CYC:1746\n\
CD4F  38        SEC                             A:99 X:34 Y:00 P:67 SP:FB PPU:108, 15 CYC:1748\n\
CD50  B8        CLV                             A:99 X:34 Y:00 P:67 SP:FB PPU:114, 15 CYC:1750\n\
CD51  98        TYA                             A:99 X:34 Y:00 P:27 SP:FB PPU:120, 15 CYC:1752\n\
CD52  D0 15     BNE $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:126, 15 CYC:1754\n\
CD54  90 13     BCC $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:132, 15 CYC:1756\n\
CD56  70 11     BVS $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:138, 15 CYC:1758\n\
CD58  30 0F     BMI $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:144, 15 CYC:1760\n\
CD5A  C9 00     CMP #$00                        A:00 X:34 Y:00 P:27 SP:FB PPU:150, 15 CYC:1762\n\
CD5C  D0 0B     BNE $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:156, 15 CYC:1764\n\
CD5E  E0 34     CPX #$34                        A:00 X:34 Y:00 P:27 SP:FB PPU:162, 15 CYC:1766\n\
CD60  D0 07     BNE $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:168, 15 CYC:1768\n\
CD62  C0 00     CPY #$00                        A:00 X:34 Y:00 P:27 SP:FB PPU:174, 15 CYC:1770\n\
CD64  D0 03     BNE $CD69                       A:00 X:34 Y:00 P:27 SP:FB PPU:180, 15 CYC:1772\n\
CD66  4C 6D CD  JMP $CD6D                       A:00 X:34 Y:00 P:27 SP:FB PPU:186, 15 CYC:1774\n\
CD6D  EA        NOP                             A:00 X:34 Y:00 P:27 SP:FB PPU:195, 15 CYC:1777\n\
CD6E  A9 85     LDA #$85                        A:00 X:34 Y:00 P:27 SP:FB PPU:201, 15 CYC:1779\n\
CD70  A2 34     LDX #$34                        A:85 X:34 Y:00 P:A5 SP:FB PPU:207, 15 CYC:1781\n\
CD72  A0 99     LDY #$99                        A:85 X:34 Y:00 P:25 SP:FB PPU:213, 15 CYC:1783\n\
CD74  18        CLC                             A:85 X:34 Y:99 P:A5 SP:FB PPU:219, 15 CYC:1785\n\
CD75  24 01     BIT $01 = FF                    A:85 X:34 Y:99 P:A4 SP:FB PPU:225, 15 CYC:1787\n\
CD77  8A        TXA                             A:85 X:34 Y:99 P:E4 SP:FB PPU:234, 15 CYC:1790\n\
CD78  F0 2E     BEQ $CDA8                       A:34 X:34 Y:99 P:64 SP:FB PPU:240, 15 CYC:1792\n\
CD7A  B0 2C     BCS $CDA8                       A:34 X:34 Y:99 P:64 SP:FB PPU:246, 15 CYC:1794\n\
CD7C  50 2A     BVC $CDA8                       A:34 X:34 Y:99 P:64 SP:FB PPU:252, 15 CYC:1796\n\
CD7E  30 28     BMI $CDA8                       A:34 X:34 Y:99 P:64 SP:FB PPU:258, 15 CYC:1798\n\
CD80  C9 34     CMP #$34                        A:34 X:34 Y:99 P:64 SP:FB PPU:264, 15 CYC:1800\n\
CD82  D0 24     BNE $CDA8                       A:34 X:34 Y:99 P:67 SP:FB PPU:270, 15 CYC:1802\n\
CD84  E0 34     CPX #$34                        A:34 X:34 Y:99 P:67 SP:FB PPU:276, 15 CYC:1804\n\
CD86  D0 20     BNE $CDA8                       A:34 X:34 Y:99 P:67 SP:FB PPU:282, 15 CYC:1806\n\
CD88  C0 99     CPY #$99                        A:34 X:34 Y:99 P:67 SP:FB PPU:288, 15 CYC:1808\n\
CD8A  D0 1C     BNE $CDA8                       A:34 X:34 Y:99 P:67 SP:FB PPU:294, 15 CYC:1810\n\
CD8C  A2 00     LDX #$00                        A:34 X:34 Y:99 P:67 SP:FB PPU:300, 15 CYC:1812\n\
CD8E  38        SEC                             A:34 X:00 Y:99 P:67 SP:FB PPU:306, 15 CYC:1814\n\
CD8F  B8        CLV                             A:34 X:00 Y:99 P:67 SP:FB PPU:312, 15 CYC:1816\n\
CD90  8A        TXA                             A:34 X:00 Y:99 P:27 SP:FB PPU:318, 15 CYC:1818\n\
CD91  D0 15     BNE $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU:324, 15 CYC:1820\n\
CD93  90 13     BCC $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU:330, 15 CYC:1822\n\
CD95  70 11     BVS $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU:336, 15 CYC:1824\n\
CD97  30 0F     BMI $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU:  1, 16 CYC:1826\n\
CD99  C9 00     CMP #$00                        A:00 X:00 Y:99 P:27 SP:FB PPU:  7, 16 CYC:1828\n\
CD9B  D0 0B     BNE $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU: 13, 16 CYC:1830\n\
CD9D  E0 00     CPX #$00                        A:00 X:00 Y:99 P:27 SP:FB PPU: 19, 16 CYC:1832\n\
CD9F  D0 07     BNE $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU: 25, 16 CYC:1834\n\
CDA1  C0 99     CPY #$99                        A:00 X:00 Y:99 P:27 SP:FB PPU: 31, 16 CYC:1836\n\
CDA3  D0 03     BNE $CDA8                       A:00 X:00 Y:99 P:27 SP:FB PPU: 37, 16 CYC:1838\n\
CDA5  4C AC CD  JMP $CDAC                       A:00 X:00 Y:99 P:27 SP:FB PPU: 43, 16 CYC:1840\n\
CDAC  EA        NOP                             A:00 X:00 Y:99 P:27 SP:FB PPU: 52, 16 CYC:1843\n\
CDAD  BA        TSX                             A:00 X:00 Y:99 P:27 SP:FB PPU: 58, 16 CYC:1845\n\
CDAE  8E FF 07  STX $07FF = 00                  A:00 X:FB Y:99 P:A5 SP:FB PPU: 64, 16 CYC:1847\n\
CDB1  A0 33     LDY #$33                        A:00 X:FB Y:99 P:A5 SP:FB PPU: 76, 16 CYC:1851\n\
CDB3  A2 69     LDX #$69                        A:00 X:FB Y:33 P:25 SP:FB PPU: 82, 16 CYC:1853\n\
CDB5  A9 84     LDA #$84                        A:00 X:69 Y:33 P:25 SP:FB PPU: 88, 16 CYC:1855\n\
CDB7  18        CLC                             A:84 X:69 Y:33 P:A5 SP:FB PPU: 94, 16 CYC:1857\n\
CDB8  24 01     BIT $01 = FF                    A:84 X:69 Y:33 P:A4 SP:FB PPU:100, 16 CYC:1859\n\
CDBA  9A        TXS                             A:84 X:69 Y:33 P:E4 SP:FB PPU:109, 16 CYC:1862\n\
CDBB  F0 32     BEQ $CDEF                       A:84 X:69 Y:33 P:E4 SP:69 PPU:115, 16 CYC:1864\n\
CDBD  10 30     BPL $CDEF                       A:84 X:69 Y:33 P:E4 SP:69 PPU:121, 16 CYC:1866\n\
CDBF  B0 2E     BCS $CDEF                       A:84 X:69 Y:33 P:E4 SP:69 PPU:127, 16 CYC:1868\n\
CDC1  50 2C     BVC $CDEF                       A:84 X:69 Y:33 P:E4 SP:69 PPU:133, 16 CYC:1870\n\
CDC3  C9 84     CMP #$84                        A:84 X:69 Y:33 P:E4 SP:69 PPU:139, 16 CYC:1872\n\
CDC5  D0 28     BNE $CDEF                       A:84 X:69 Y:33 P:67 SP:69 PPU:145, 16 CYC:1874\n\
CDC7  E0 69     CPX #$69                        A:84 X:69 Y:33 P:67 SP:69 PPU:151, 16 CYC:1876\n\
CDC9  D0 24     BNE $CDEF                       A:84 X:69 Y:33 P:67 SP:69 PPU:157, 16 CYC:1878\n\
CDCB  C0 33     CPY #$33                        A:84 X:69 Y:33 P:67 SP:69 PPU:163, 16 CYC:1880\n\
CDCD  D0 20     BNE $CDEF                       A:84 X:69 Y:33 P:67 SP:69 PPU:169, 16 CYC:1882\n\
CDCF  A0 01     LDY #$01                        A:84 X:69 Y:33 P:67 SP:69 PPU:175, 16 CYC:1884\n\
CDD1  A9 04     LDA #$04                        A:84 X:69 Y:01 P:65 SP:69 PPU:181, 16 CYC:1886\n\
CDD3  38        SEC                             A:04 X:69 Y:01 P:65 SP:69 PPU:187, 16 CYC:1888\n\
CDD4  B8        CLV                             A:04 X:69 Y:01 P:65 SP:69 PPU:193, 16 CYC:1890\n\
CDD5  A2 00     LDX #$00                        A:04 X:69 Y:01 P:25 SP:69 PPU:199, 16 CYC:1892\n\
CDD7  BA        TSX                             A:04 X:00 Y:01 P:27 SP:69 PPU:205, 16 CYC:1894\n\
CDD8  F0 15     BEQ $CDEF                       A:04 X:69 Y:01 P:25 SP:69 PPU:211, 16 CYC:1896\n\
CDDA  30 13     BMI $CDEF                       A:04 X:69 Y:01 P:25 SP:69 PPU:217, 16 CYC:1898\n\
CDDC  90 11     BCC $CDEF                       A:04 X:69 Y:01 P:25 SP:69 PPU:223, 16 CYC:1900\n\
CDDE  70 0F     BVS $CDEF                       A:04 X:69 Y:01 P:25 SP:69 PPU:229, 16 CYC:1902\n\
CDE0  E0 69     CPX #$69                        A:04 X:69 Y:01 P:25 SP:69 PPU:235, 16 CYC:1904\n\
CDE2  D0 0B     BNE $CDEF                       A:04 X:69 Y:01 P:27 SP:69 PPU:241, 16 CYC:1906\n\
CDE4  C9 04     CMP #$04                        A:04 X:69 Y:01 P:27 SP:69 PPU:247, 16 CYC:1908\n\
CDE6  D0 07     BNE $CDEF                       A:04 X:69 Y:01 P:27 SP:69 PPU:253, 16 CYC:1910\n\
CDE8  C0 01     CPY #$01                        A:04 X:69 Y:01 P:27 SP:69 PPU:259, 16 CYC:1912\n\
CDEA  D0 03     BNE $CDEF                       A:04 X:69 Y:01 P:27 SP:69 PPU:265, 16 CYC:1914\n\
CDEC  4C F3 CD  JMP $CDF3                       A:04 X:69 Y:01 P:27 SP:69 PPU:271, 16 CYC:1916\n\
CDF3  AE FF 07  LDX $07FF = FB                  A:04 X:69 Y:01 P:27 SP:69 PPU:280, 16 CYC:1919\n\
CDF6  9A        TXS                             A:04 X:FB Y:01 P:A5 SP:69 PPU:292, 16 CYC:1923\n\
CDF7  60        RTS                             A:04 X:FB Y:01 P:A5 SP:FB PPU:298, 16 CYC:1925\n\
C609  20 F8 CD  JSR $CDF8                       A:04 X:FB Y:01 P:A5 SP:FD PPU:316, 16 CYC:1931\n\
CDF8  A9 FF     LDA #$FF                        A:04 X:FB Y:01 P:A5 SP:FB PPU:334, 16 CYC:1937\n\
CDFA  85 01     STA $01 = FF                    A:FF X:FB Y:01 P:A5 SP:FB PPU:340, 16 CYC:1939\n\
CDFC  BA        TSX                             A:FF X:FB Y:01 P:A5 SP:FB PPU:  8, 17 CYC:1942\n\
CDFD  8E FF 07  STX $07FF = FB                  A:FF X:FB Y:01 P:A5 SP:FB PPU: 14, 17 CYC:1944\n\
CE00  EA        NOP                             A:FF X:FB Y:01 P:A5 SP:FB PPU: 26, 17 CYC:1948\n\
CE01  A2 80     LDX #$80                        A:FF X:FB Y:01 P:A5 SP:FB PPU: 32, 17 CYC:1950\n\
CE03  9A        TXS                             A:FF X:80 Y:01 P:A5 SP:FB PPU: 38, 17 CYC:1952\n\
CE04  A9 33     LDA #$33                        A:FF X:80 Y:01 P:A5 SP:80 PPU: 44, 17 CYC:1954\n\
CE06  48        PHA                             A:33 X:80 Y:01 P:25 SP:80 PPU: 50, 17 CYC:1956\n\
CE07  A9 69     LDA #$69                        A:33 X:80 Y:01 P:25 SP:7F PPU: 59, 17 CYC:1959\n\
CE09  48        PHA                             A:69 X:80 Y:01 P:25 SP:7F PPU: 65, 17 CYC:1961\n\
CE0A  BA        TSX                             A:69 X:80 Y:01 P:25 SP:7E PPU: 74, 17 CYC:1964\n\
CE0B  E0 7E     CPX #$7E                        A:69 X:7E Y:01 P:25 SP:7E PPU: 80, 17 CYC:1966\n\
CE0D  D0 20     BNE $CE2F                       A:69 X:7E Y:01 P:27 SP:7E PPU: 86, 17 CYC:1968\n\
CE0F  68        PLA                             A:69 X:7E Y:01 P:27 SP:7E PPU: 92, 17 CYC:1970\n\
CE10  C9 69     CMP #$69                        A:69 X:7E Y:01 P:25 SP:7F PPU:104, 17 CYC:1974\n\
CE12  D0 1B     BNE $CE2F                       A:69 X:7E Y:01 P:27 SP:7F PPU:110, 17 CYC:1976\n\
CE14  68        PLA                             A:69 X:7E Y:01 P:27 SP:7F PPU:116, 17 CYC:1978\n\
CE15  C9 33     CMP #$33                        A:33 X:7E Y:01 P:25 SP:80 PPU:128, 17 CYC:1982\n\
CE17  D0 16     BNE $CE2F                       A:33 X:7E Y:01 P:27 SP:80 PPU:134, 17 CYC:1984\n\
CE19  BA        TSX                             A:33 X:7E Y:01 P:27 SP:80 PPU:140, 17 CYC:1986\n\
CE1A  E0 80     CPX #$80                        A:33 X:80 Y:01 P:A5 SP:80 PPU:146, 17 CYC:1988\n\
CE1C  D0 11     BNE $CE2F                       A:33 X:80 Y:01 P:27 SP:80 PPU:152, 17 CYC:1990\n\
CE1E  AD 80 01  LDA $0180 = 33                  A:33 X:80 Y:01 P:27 SP:80 PPU:158, 17 CYC:1992\n\
CE21  C9 33     CMP #$33                        A:33 X:80 Y:01 P:25 SP:80 PPU:170, 17 CYC:1996\n\
CE23  D0 0A     BNE $CE2F                       A:33 X:80 Y:01 P:27 SP:80 PPU:176, 17 CYC:1998\n\
CE25  AD 7F 01  LDA $017F = 69                  A:33 X:80 Y:01 P:27 SP:80 PPU:182, 17 CYC:2000\n\
CE28  C9 69     CMP #$69                        A:69 X:80 Y:01 P:25 SP:80 PPU:194, 17 CYC:2004\n\
CE2A  D0 03     BNE $CE2F                       A:69 X:80 Y:01 P:27 SP:80 PPU:200, 17 CYC:2006\n\
CE2C  4C 33 CE  JMP $CE33                       A:69 X:80 Y:01 P:27 SP:80 PPU:206, 17 CYC:2008\n\
CE33  EA        NOP                             A:69 X:80 Y:01 P:27 SP:80 PPU:215, 17 CYC:2011\n\
CE34  A2 80     LDX #$80                        A:69 X:80 Y:01 P:27 SP:80 PPU:221, 17 CYC:2013\n\
CE36  9A        TXS                             A:69 X:80 Y:01 P:A5 SP:80 PPU:227, 17 CYC:2015\n\
CE37  20 3D CE  JSR $CE3D                       A:69 X:80 Y:01 P:A5 SP:80 PPU:233, 17 CYC:2017\n\
CE3D  BA        TSX                             A:69 X:80 Y:01 P:A5 SP:7E PPU:251, 17 CYC:2023\n\
CE3E  E0 7E     CPX #$7E                        A:69 X:7E Y:01 P:25 SP:7E PPU:257, 17 CYC:2025\n\
CE40  D0 19     BNE $CE5B                       A:69 X:7E Y:01 P:27 SP:7E PPU:263, 17 CYC:2027\n\
CE42  68        PLA                             A:69 X:7E Y:01 P:27 SP:7E PPU:269, 17 CYC:2029\n\
CE43  68        PLA                             A:39 X:7E Y:01 P:25 SP:7F PPU:281, 17 CYC:2033\n\
CE44  BA        TSX                             A:CE X:7E Y:01 P:A5 SP:80 PPU:293, 17 CYC:2037\n\
CE45  E0 80     CPX #$80                        A:CE X:80 Y:01 P:A5 SP:80 PPU:299, 17 CYC:2039\n\
CE47  D0 12     BNE $CE5B                       A:CE X:80 Y:01 P:27 SP:80 PPU:305, 17 CYC:2041\n\
CE49  A9 00     LDA #$00                        A:CE X:80 Y:01 P:27 SP:80 PPU:311, 17 CYC:2043\n\
CE4B  20 4E CE  JSR $CE4E                       A:00 X:80 Y:01 P:27 SP:80 PPU:317, 17 CYC:2045\n\
CE4E  68        PLA                             A:00 X:80 Y:01 P:27 SP:7E PPU:335, 17 CYC:2051\n\
CE4F  C9 4D     CMP #$4D                        A:4D X:80 Y:01 P:25 SP:7F PPU:  6, 18 CYC:2055\n\
CE51  D0 08     BNE $CE5B                       A:4D X:80 Y:01 P:27 SP:7F PPU: 12, 18 CYC:2057\n\
CE53  68        PLA                             A:4D X:80 Y:01 P:27 SP:7F PPU: 18, 18 CYC:2059\n\
CE54  C9 CE     CMP #$CE                        A:CE X:80 Y:01 P:A5 SP:80 PPU: 30, 18 CYC:2063\n\
CE56  D0 03     BNE $CE5B                       A:CE X:80 Y:01 P:27 SP:80 PPU: 36, 18 CYC:2065\n\
CE58  4C 5F CE  JMP $CE5F                       A:CE X:80 Y:01 P:27 SP:80 PPU: 42, 18 CYC:2067\n\
CE5F  EA        NOP                             A:CE X:80 Y:01 P:27 SP:80 PPU: 51, 18 CYC:2070\n\
CE60  A9 CE     LDA #$CE                        A:CE X:80 Y:01 P:27 SP:80 PPU: 57, 18 CYC:2072\n\
CE62  48        PHA                             A:CE X:80 Y:01 P:A5 SP:80 PPU: 63, 18 CYC:2074\n\
CE63  A9 66     LDA #$66                        A:CE X:80 Y:01 P:A5 SP:7F PPU: 72, 18 CYC:2077\n\
CE65  48        PHA                             A:66 X:80 Y:01 P:25 SP:7F PPU: 78, 18 CYC:2079\n\
CE66  60        RTS                             A:66 X:80 Y:01 P:25 SP:7E PPU: 87, 18 CYC:2082\n\
CE67  A2 77     LDX #$77                        A:66 X:80 Y:01 P:25 SP:80 PPU:105, 18 CYC:2088\n\
CE69  A0 69     LDY #$69                        A:66 X:77 Y:01 P:25 SP:80 PPU:111, 18 CYC:2090\n\
CE6B  18        CLC                             A:66 X:77 Y:69 P:25 SP:80 PPU:117, 18 CYC:2092\n\
CE6C  24 01     BIT $01 = FF                    A:66 X:77 Y:69 P:24 SP:80 PPU:123, 18 CYC:2094\n\
CE6E  A9 83     LDA #$83                        A:66 X:77 Y:69 P:E4 SP:80 PPU:132, 18 CYC:2097\n\
CE70  20 66 CE  JSR $CE66                       A:83 X:77 Y:69 P:E4 SP:80 PPU:138, 18 CYC:2099\n\
CE66  60        RTS                             A:83 X:77 Y:69 P:E4 SP:7E PPU:156, 18 CYC:2105\n\
CE73  F0 24     BEQ $CE99                       A:83 X:77 Y:69 P:E4 SP:80 PPU:174, 18 CYC:2111\n\
CE75  10 22     BPL $CE99                       A:83 X:77 Y:69 P:E4 SP:80 PPU:180, 18 CYC:2113\n\
CE77  B0 20     BCS $CE99                       A:83 X:77 Y:69 P:E4 SP:80 PPU:186, 18 CYC:2115\n\
CE79  50 1E     BVC $CE99                       A:83 X:77 Y:69 P:E4 SP:80 PPU:192, 18 CYC:2117\n\
CE7B  C9 83     CMP #$83                        A:83 X:77 Y:69 P:E4 SP:80 PPU:198, 18 CYC:2119\n\
CE7D  D0 1A     BNE $CE99                       A:83 X:77 Y:69 P:67 SP:80 PPU:204, 18 CYC:2121\n\
CE7F  C0 69     CPY #$69                        A:83 X:77 Y:69 P:67 SP:80 PPU:210, 18 CYC:2123\n\
CE81  D0 16     BNE $CE99                       A:83 X:77 Y:69 P:67 SP:80 PPU:216, 18 CYC:2125\n\
CE83  E0 77     CPX #$77                        A:83 X:77 Y:69 P:67 SP:80 PPU:222, 18 CYC:2127\n\
CE85  D0 12     BNE $CE99                       A:83 X:77 Y:69 P:67 SP:80 PPU:228, 18 CYC:2129\n\
CE87  38        SEC                             A:83 X:77 Y:69 P:67 SP:80 PPU:234, 18 CYC:2131\n\
CE88  B8        CLV                             A:83 X:77 Y:69 P:67 SP:80 PPU:240, 18 CYC:2133\n\
CE89  A9 00     LDA #$00                        A:83 X:77 Y:69 P:27 SP:80 PPU:246, 18 CYC:2135\n\
CE8B  20 66 CE  JSR $CE66                       A:00 X:77 Y:69 P:27 SP:80 PPU:252, 18 CYC:2137\n\
CE66  60        RTS                             A:00 X:77 Y:69 P:27 SP:7E PPU:270, 18 CYC:2143\n\
CE8E  D0 09     BNE $CE99                       A:00 X:77 Y:69 P:27 SP:80 PPU:288, 18 CYC:2149\n\
CE90  30 07     BMI $CE99                       A:00 X:77 Y:69 P:27 SP:80 PPU:294, 18 CYC:2151\n\
CE92  90 05     BCC $CE99                       A:00 X:77 Y:69 P:27 SP:80 PPU:300, 18 CYC:2153\n\
CE94  70 03     BVS $CE99                       A:00 X:77 Y:69 P:27 SP:80 PPU:306, 18 CYC:2155\n\
CE96  4C 9D CE  JMP $CE9D                       A:00 X:77 Y:69 P:27 SP:80 PPU:312, 18 CYC:2157\n\
CE9D  EA        NOP                             A:00 X:77 Y:69 P:27 SP:80 PPU:321, 18 CYC:2160\n\
CE9E  A9 CE     LDA #$CE                        A:00 X:77 Y:69 P:27 SP:80 PPU:327, 18 CYC:2162\n\
CEA0  48        PHA                             A:CE X:77 Y:69 P:A5 SP:80 PPU:333, 18 CYC:2164\n\
CEA1  A9 AE     LDA #$AE                        A:CE X:77 Y:69 P:A5 SP:7F PPU:  1, 19 CYC:2167\n\
CEA3  48        PHA                             A:AE X:77 Y:69 P:A5 SP:7F PPU:  7, 19 CYC:2169\n\
CEA4  A9 65     LDA #$65                        A:AE X:77 Y:69 P:A5 SP:7E PPU: 16, 19 CYC:2172\n\
CEA6  48        PHA                             A:65 X:77 Y:69 P:25 SP:7E PPU: 22, 19 CYC:2174\n\
CEA7  A9 55     LDA #$55                        A:65 X:77 Y:69 P:25 SP:7D PPU: 31, 19 CYC:2177\n\
CEA9  A0 88     LDY #$88                        A:55 X:77 Y:69 P:25 SP:7D PPU: 37, 19 CYC:2179\n\
CEAB  A2 99     LDX #$99                        A:55 X:77 Y:88 P:A5 SP:7D PPU: 43, 19 CYC:2181\n\
CEAD  40        RTI                             A:55 X:99 Y:88 P:A5 SP:7D PPU: 49, 19 CYC:2183\n\
CEAE  30 35     BMI $CEE5                       A:55 X:99 Y:88 P:65 SP:80 PPU: 67, 19 CYC:2189\n\
CEB0  50 33     BVC $CEE5                       A:55 X:99 Y:88 P:65 SP:80 PPU: 73, 19 CYC:2191\n\
CEB2  F0 31     BEQ $CEE5                       A:55 X:99 Y:88 P:65 SP:80 PPU: 79, 19 CYC:2193\n\
CEB4  90 2F     BCC $CEE5                       A:55 X:99 Y:88 P:65 SP:80 PPU: 85, 19 CYC:2195\n\
CEB6  C9 55     CMP #$55                        A:55 X:99 Y:88 P:65 SP:80 PPU: 91, 19 CYC:2197\n\
CEB8  D0 2B     BNE $CEE5                       A:55 X:99 Y:88 P:67 SP:80 PPU: 97, 19 CYC:2199\n\
CEBA  C0 88     CPY #$88                        A:55 X:99 Y:88 P:67 SP:80 PPU:103, 19 CYC:2201\n\
CEBC  D0 27     BNE $CEE5                       A:55 X:99 Y:88 P:67 SP:80 PPU:109, 19 CYC:2203\n\
CEBE  E0 99     CPX #$99                        A:55 X:99 Y:88 P:67 SP:80 PPU:115, 19 CYC:2205\n\
CEC0  D0 23     BNE $CEE5                       A:55 X:99 Y:88 P:67 SP:80 PPU:121, 19 CYC:2207\n\
CEC2  A9 CE     LDA #$CE                        A:55 X:99 Y:88 P:67 SP:80 PPU:127, 19 CYC:2209\n\
CEC4  48        PHA                             A:CE X:99 Y:88 P:E5 SP:80 PPU:133, 19 CYC:2211\n\
CEC5  A9 CE     LDA #$CE                        A:CE X:99 Y:88 P:E5 SP:7F PPU:142, 19 CYC:2214\n\
CEC7  48        PHA                             A:CE X:99 Y:88 P:E5 SP:7F PPU:148, 19 CYC:2216\n\
CEC8  A9 87     LDA #$87                        A:CE X:99 Y:88 P:E5 SP:7E PPU:157, 19 CYC:2219\n\
CECA  48        PHA                             A:87 X:99 Y:88 P:E5 SP:7E PPU:163, 19 CYC:2221\n\
CECB  A9 55     LDA #$55                        A:87 X:99 Y:88 P:E5 SP:7D PPU:172, 19 CYC:2224\n\
CECD  40        RTI                             A:55 X:99 Y:88 P:65 SP:7D PPU:178, 19 CYC:2226\n\
CECE  10 15     BPL $CEE5                       A:55 X:99 Y:88 P:A7 SP:80 PPU:196, 19 CYC:2232\n\
CED0  70 13     BVS $CEE5                       A:55 X:99 Y:88 P:A7 SP:80 PPU:202, 19 CYC:2234\n\
CED2  D0 11     BNE $CEE5                       A:55 X:99 Y:88 P:A7 SP:80 PPU:208, 19 CYC:2236\n\
CED4  90 0F     BCC $CEE5                       A:55 X:99 Y:88 P:A7 SP:80 PPU:214, 19 CYC:2238\n\
CED6  C9 55     CMP #$55                        A:55 X:99 Y:88 P:A7 SP:80 PPU:220, 19 CYC:2240\n\
CED8  D0 0B     BNE $CEE5                       A:55 X:99 Y:88 P:27 SP:80 PPU:226, 19 CYC:2242\n\
CEDA  C0 88     CPY #$88                        A:55 X:99 Y:88 P:27 SP:80 PPU:232, 19 CYC:2244\n\
CEDC  D0 07     BNE $CEE5                       A:55 X:99 Y:88 P:27 SP:80 PPU:238, 19 CYC:2246\n\
CEDE  E0 99     CPX #$99                        A:55 X:99 Y:88 P:27 SP:80 PPU:244, 19 CYC:2248\n\
CEE0  D0 03     BNE $CEE5                       A:55 X:99 Y:88 P:27 SP:80 PPU:250, 19 CYC:2250\n\
CEE2  4C E9 CE  JMP $CEE9                       A:55 X:99 Y:88 P:27 SP:80 PPU:256, 19 CYC:2252\n\
CEE9  AE FF 07  LDX $07FF = FB                  A:55 X:99 Y:88 P:27 SP:80 PPU:265, 19 CYC:2255\n\
CEEC  9A        TXS                             A:55 X:FB Y:88 P:A5 SP:80 PPU:277, 19 CYC:2259\n\
CEED  60        RTS                             A:55 X:FB Y:88 P:A5 SP:FB PPU:283, 19 CYC:2261\n\
C60C  20 EE CE  JSR $CEEE                       A:55 X:FB Y:88 P:A5 SP:FD PPU:301, 19 CYC:2267\n\
CEEE  A2 55     LDX #$55                        A:55 X:FB Y:88 P:A5 SP:FB PPU:319, 19 CYC:2273\n\
CEF0  A0 69     LDY #$69                        A:55 X:55 Y:88 P:25 SP:FB PPU:325, 19 CYC:2275\n\
CEF2  A9 FF     LDA #$FF                        A:55 X:55 Y:69 P:25 SP:FB PPU:331, 19 CYC:2277\n\
CEF4  85 01     STA $01 = FF                    A:FF X:55 Y:69 P:A5 SP:FB PPU:337, 19 CYC:2279\n\
CEF6  EA        NOP                             A:FF X:55 Y:69 P:A5 SP:FB PPU:  5, 20 CYC:2282\n\
CEF7  24 01     BIT $01 = FF                    A:FF X:55 Y:69 P:A5 SP:FB PPU: 11, 20 CYC:2284\n\
CEF9  38        SEC                             A:FF X:55 Y:69 P:E5 SP:FB PPU: 20, 20 CYC:2287\n\
CEFA  A9 01     LDA #$01                        A:FF X:55 Y:69 P:E5 SP:FB PPU: 26, 20 CYC:2289\n\
CEFC  4A        LSR A                           A:01 X:55 Y:69 P:65 SP:FB PPU: 32, 20 CYC:2291\n\
CEFD  90 1D     BCC $CF1C                       A:00 X:55 Y:69 P:67 SP:FB PPU: 38, 20 CYC:2293\n\
CEFF  D0 1B     BNE $CF1C                       A:00 X:55 Y:69 P:67 SP:FB PPU: 44, 20 CYC:2295\n\
CF01  30 19     BMI $CF1C                       A:00 X:55 Y:69 P:67 SP:FB PPU: 50, 20 CYC:2297\n\
CF03  50 17     BVC $CF1C                       A:00 X:55 Y:69 P:67 SP:FB PPU: 56, 20 CYC:2299\n\
CF05  C9 00     CMP #$00                        A:00 X:55 Y:69 P:67 SP:FB PPU: 62, 20 CYC:2301\n\
CF07  D0 13     BNE $CF1C                       A:00 X:55 Y:69 P:67 SP:FB PPU: 68, 20 CYC:2303\n\
CF09  B8        CLV                             A:00 X:55 Y:69 P:67 SP:FB PPU: 74, 20 CYC:2305\n\
CF0A  A9 AA     LDA #$AA                        A:00 X:55 Y:69 P:27 SP:FB PPU: 80, 20 CYC:2307\n\
CF0C  4A        LSR A                           A:AA X:55 Y:69 P:A5 SP:FB PPU: 86, 20 CYC:2309\n\
CF0D  B0 0D     BCS $CF1C                       A:55 X:55 Y:69 P:24 SP:FB PPU: 92, 20 CYC:2311\n\
CF0F  F0 0B     BEQ $CF1C                       A:55 X:55 Y:69 P:24 SP:FB PPU: 98, 20 CYC:2313\n\
CF11  30 09     BMI $CF1C                       A:55 X:55 Y:69 P:24 SP:FB PPU:104, 20 CYC:2315\n\
CF13  70 07     BVS $CF1C                       A:55 X:55 Y:69 P:24 SP:FB PPU:110, 20 CYC:2317\n\
CF15  C9 55     CMP #$55                        A:55 X:55 Y:69 P:24 SP:FB PPU:116, 20 CYC:2319\n\
CF17  D0 03     BNE $CF1C                       A:55 X:55 Y:69 P:27 SP:FB PPU:122, 20 CYC:2321\n\
CF19  4C 20 CF  JMP $CF20                       A:55 X:55 Y:69 P:27 SP:FB PPU:128, 20 CYC:2323\n\
CF20  EA        NOP                             A:55 X:55 Y:69 P:27 SP:FB PPU:137, 20 CYC:2326\n\
CF21  24 01     BIT $01 = FF                    A:55 X:55 Y:69 P:27 SP:FB PPU:143, 20 CYC:2328\n\
CF23  38        SEC                             A:55 X:55 Y:69 P:E5 SP:FB PPU:152, 20 CYC:2331\n\
CF24  A9 80     LDA #$80                        A:55 X:55 Y:69 P:E5 SP:FB PPU:158, 20 CYC:2333\n\
CF26  0A        ASL A                           A:80 X:55 Y:69 P:E5 SP:FB PPU:164, 20 CYC:2335\n\
CF27  90 1E     BCC $CF47                       A:00 X:55 Y:69 P:67 SP:FB PPU:170, 20 CYC:2337\n\
CF29  D0 1C     BNE $CF47                       A:00 X:55 Y:69 P:67 SP:FB PPU:176, 20 CYC:2339\n\
CF2B  30 1A     BMI $CF47                       A:00 X:55 Y:69 P:67 SP:FB PPU:182, 20 CYC:2341\n\
CF2D  50 18     BVC $CF47                       A:00 X:55 Y:69 P:67 SP:FB PPU:188, 20 CYC:2343\n\
CF2F  C9 00     CMP #$00                        A:00 X:55 Y:69 P:67 SP:FB PPU:194, 20 CYC:2345\n\
CF31  D0 14     BNE $CF47                       A:00 X:55 Y:69 P:67 SP:FB PPU:200, 20 CYC:2347\n\
CF33  B8        CLV                             A:00 X:55 Y:69 P:67 SP:FB PPU:206, 20 CYC:2349\n\
CF34  38        SEC                             A:00 X:55 Y:69 P:27 SP:FB PPU:212, 20 CYC:2351\n\
CF35  A9 55     LDA #$55                        A:00 X:55 Y:69 P:27 SP:FB PPU:218, 20 CYC:2353\n\
CF37  0A        ASL A                           A:55 X:55 Y:69 P:25 SP:FB PPU:224, 20 CYC:2355\n\
CF38  B0 0D     BCS $CF47                       A:AA X:55 Y:69 P:A4 SP:FB PPU:230, 20 CYC:2357\n\
CF3A  F0 0B     BEQ $CF47                       A:AA X:55 Y:69 P:A4 SP:FB PPU:236, 20 CYC:2359\n\
CF3C  10 09     BPL $CF47                       A:AA X:55 Y:69 P:A4 SP:FB PPU:242, 20 CYC:2361\n\
CF3E  70 07     BVS $CF47                       A:AA X:55 Y:69 P:A4 SP:FB PPU:248, 20 CYC:2363\n\
CF40  C9 AA     CMP #$AA                        A:AA X:55 Y:69 P:A4 SP:FB PPU:254, 20 CYC:2365\n\
CF42  D0 03     BNE $CF47                       A:AA X:55 Y:69 P:27 SP:FB PPU:260, 20 CYC:2367\n\
CF44  4C 4B CF  JMP $CF4B                       A:AA X:55 Y:69 P:27 SP:FB PPU:266, 20 CYC:2369\n\
CF4B  EA        NOP                             A:AA X:55 Y:69 P:27 SP:FB PPU:275, 20 CYC:2372\n\
CF4C  24 01     BIT $01 = FF                    A:AA X:55 Y:69 P:27 SP:FB PPU:281, 20 CYC:2374\n\
CF4E  38        SEC                             A:AA X:55 Y:69 P:E5 SP:FB PPU:290, 20 CYC:2377\n\
CF4F  A9 01     LDA #$01                        A:AA X:55 Y:69 P:E5 SP:FB PPU:296, 20 CYC:2379\n\
CF51  6A        ROR A                           A:01 X:55 Y:69 P:65 SP:FB PPU:302, 20 CYC:2381\n\
CF52  90 1E     BCC $CF72                       A:80 X:55 Y:69 P:E5 SP:FB PPU:308, 20 CYC:2383\n\
CF54  F0 1C     BEQ $CF72                       A:80 X:55 Y:69 P:E5 SP:FB PPU:314, 20 CYC:2385\n\
CF56  10 1A     BPL $CF72                       A:80 X:55 Y:69 P:E5 SP:FB PPU:320, 20 CYC:2387\n\
CF58  50 18     BVC $CF72                       A:80 X:55 Y:69 P:E5 SP:FB PPU:326, 20 CYC:2389\n\
CF5A  C9 80     CMP #$80                        A:80 X:55 Y:69 P:E5 SP:FB PPU:332, 20 CYC:2391\n\
CF5C  D0 14     BNE $CF72                       A:80 X:55 Y:69 P:67 SP:FB PPU:338, 20 CYC:2393\n\
CF5E  B8        CLV                             A:80 X:55 Y:69 P:67 SP:FB PPU:  3, 21 CYC:2395\n\
CF5F  18        CLC                             A:80 X:55 Y:69 P:27 SP:FB PPU:  9, 21 CYC:2397\n\
CF60  A9 55     LDA #$55                        A:80 X:55 Y:69 P:26 SP:FB PPU: 15, 21 CYC:2399\n\
CF62  6A        ROR A                           A:55 X:55 Y:69 P:24 SP:FB PPU: 21, 21 CYC:2401\n\
CF63  90 0D     BCC $CF72                       A:2A X:55 Y:69 P:25 SP:FB PPU: 27, 21 CYC:2403\n\
CF65  F0 0B     BEQ $CF72                       A:2A X:55 Y:69 P:25 SP:FB PPU: 33, 21 CYC:2405\n\
CF67  30 09     BMI $CF72                       A:2A X:55 Y:69 P:25 SP:FB PPU: 39, 21 CYC:2407\n\
CF69  70 07     BVS $CF72                       A:2A X:55 Y:69 P:25 SP:FB PPU: 45, 21 CYC:2409\n\
CF6B  C9 2A     CMP #$2A                        A:2A X:55 Y:69 P:25 SP:FB PPU: 51, 21 CYC:2411\n\
CF6D  D0 03     BNE $CF72                       A:2A X:55 Y:69 P:27 SP:FB PPU: 57, 21 CYC:2413\n\
CF6F  4C 76 CF  JMP $CF76                       A:2A X:55 Y:69 P:27 SP:FB PPU: 63, 21 CYC:2415\n\
CF76  EA        NOP                             A:2A X:55 Y:69 P:27 SP:FB PPU: 72, 21 CYC:2418\n\
CF77  24 01     BIT $01 = FF                    A:2A X:55 Y:69 P:27 SP:FB PPU: 78, 21 CYC:2420\n\
CF79  38        SEC                             A:2A X:55 Y:69 P:E5 SP:FB PPU: 87, 21 CYC:2423\n\
CF7A  A9 80     LDA #$80                        A:2A X:55 Y:69 P:E5 SP:FB PPU: 93, 21 CYC:2425\n\
CF7C  2A        ROL A                           A:80 X:55 Y:69 P:E5 SP:FB PPU: 99, 21 CYC:2427\n\
CF7D  90 1E     BCC $CF9D                       A:01 X:55 Y:69 P:65 SP:FB PPU:105, 21 CYC:2429\n\
CF7F  F0 1C     BEQ $CF9D                       A:01 X:55 Y:69 P:65 SP:FB PPU:111, 21 CYC:2431\n\
CF81  30 1A     BMI $CF9D                       A:01 X:55 Y:69 P:65 SP:FB PPU:117, 21 CYC:2433\n\
CF83  50 18     BVC $CF9D                       A:01 X:55 Y:69 P:65 SP:FB PPU:123, 21 CYC:2435\n\
CF85  C9 01     CMP #$01                        A:01 X:55 Y:69 P:65 SP:FB PPU:129, 21 CYC:2437\n\
CF87  D0 14     BNE $CF9D                       A:01 X:55 Y:69 P:67 SP:FB PPU:135, 21 CYC:2439\n\
CF89  B8        CLV                             A:01 X:55 Y:69 P:67 SP:FB PPU:141, 21 CYC:2441\n\
CF8A  18        CLC                             A:01 X:55 Y:69 P:27 SP:FB PPU:147, 21 CYC:2443\n\
CF8B  A9 55     LDA #$55                        A:01 X:55 Y:69 P:26 SP:FB PPU:153, 21 CYC:2445\n\
CF8D  2A        ROL A                           A:55 X:55 Y:69 P:24 SP:FB PPU:159, 21 CYC:2447\n\
CF8E  B0 0D     BCS $CF9D                       A:AA X:55 Y:69 P:A4 SP:FB PPU:165, 21 CYC:2449\n\
CF90  F0 0B     BEQ $CF9D                       A:AA X:55 Y:69 P:A4 SP:FB PPU:171, 21 CYC:2451\n\
CF92  10 09     BPL $CF9D                       A:AA X:55 Y:69 P:A4 SP:FB PPU:177, 21 CYC:2453\n\
CF94  70 07     BVS $CF9D                       A:AA X:55 Y:69 P:A4 SP:FB PPU:183, 21 CYC:2455\n\
CF96  C9 AA     CMP #$AA                        A:AA X:55 Y:69 P:A4 SP:FB PPU:189, 21 CYC:2457\n\
CF98  D0 03     BNE $CF9D                       A:AA X:55 Y:69 P:27 SP:FB PPU:195, 21 CYC:2459\n\
CF9A  4C A1 CF  JMP $CFA1                       A:AA X:55 Y:69 P:27 SP:FB PPU:201, 21 CYC:2461\n\
CFA1  60        RTS                             A:AA X:55 Y:69 P:27 SP:FB PPU:210, 21 CYC:2464\n\
C60F  20 A2 CF  JSR $CFA2                       A:AA X:55 Y:69 P:27 SP:FD PPU:228, 21 CYC:2470\n\
CFA2  A5 00     LDA $00 = 00                    A:AA X:55 Y:69 P:27 SP:FB PPU:246, 21 CYC:2476\n\
CFA4  8D FF 07  STA $07FF = FB                  A:00 X:55 Y:69 P:27 SP:FB PPU:255, 21 CYC:2479\n\
CFA7  A9 00     LDA #$00                        A:00 X:55 Y:69 P:27 SP:FB PPU:267, 21 CYC:2483\n\
CFA9  85 80     STA $80 = 00                    A:00 X:55 Y:69 P:27 SP:FB PPU:273, 21 CYC:2485\n\
CFAB  A9 02     LDA #$02                        A:00 X:55 Y:69 P:27 SP:FB PPU:282, 21 CYC:2488\n\
CFAD  85 81     STA $81 = 00                    A:02 X:55 Y:69 P:25 SP:FB PPU:288, 21 CYC:2490\n\
CFAF  A9 FF     LDA #$FF                        A:02 X:55 Y:69 P:25 SP:FB PPU:297, 21 CYC:2493\n\
CFB1  85 01     STA $01 = FF                    A:FF X:55 Y:69 P:A5 SP:FB PPU:303, 21 CYC:2495\n\
CFB3  A9 00     LDA #$00                        A:FF X:55 Y:69 P:A5 SP:FB PPU:312, 21 CYC:2498\n\
CFB5  85 82     STA $82 = 00                    A:00 X:55 Y:69 P:27 SP:FB PPU:318, 21 CYC:2500\n\
CFB7  A9 03     LDA #$03                        A:00 X:55 Y:69 P:27 SP:FB PPU:327, 21 CYC:2503\n\
CFB9  85 83     STA $83 = 00                    A:03 X:55 Y:69 P:25 SP:FB PPU:333, 21 CYC:2505\n\
CFBB  85 84     STA $84 = 00                    A:03 X:55 Y:69 P:25 SP:FB PPU:  1, 22 CYC:2508\n\
CFBD  A9 00     LDA #$00                        A:03 X:55 Y:69 P:25 SP:FB PPU: 10, 22 CYC:2511\n\
CFBF  85 FF     STA $FF = 00                    A:00 X:55 Y:69 P:27 SP:FB PPU: 16, 22 CYC:2513\n\
CFC1  A9 04     LDA #$04                        A:00 X:55 Y:69 P:27 SP:FB PPU: 25, 22 CYC:2516\n\
CFC3  85 00     STA $00 = 00                    A:04 X:55 Y:69 P:25 SP:FB PPU: 31, 22 CYC:2518\n\
CFC5  A9 5A     LDA #$5A                        A:04 X:55 Y:69 P:25 SP:FB PPU: 40, 22 CYC:2521\n\
CFC7  8D 00 02  STA $0200 = 00                  A:5A X:55 Y:69 P:25 SP:FB PPU: 46, 22 CYC:2523\n\
CFCA  A9 5B     LDA #$5B                        A:5A X:55 Y:69 P:25 SP:FB PPU: 58, 22 CYC:2527\n\
CFCC  8D 00 03  STA $0300 = 00                  A:5B X:55 Y:69 P:25 SP:FB PPU: 64, 22 CYC:2529\n\
CFCF  A9 5C     LDA #$5C                        A:5B X:55 Y:69 P:25 SP:FB PPU: 76, 22 CYC:2533\n\
CFD1  8D 03 03  STA $0303 = 00                  A:5C X:55 Y:69 P:25 SP:FB PPU: 82, 22 CYC:2535\n\
CFD4  A9 5D     LDA #$5D                        A:5C X:55 Y:69 P:25 SP:FB PPU: 94, 22 CYC:2539\n\
CFD6  8D 00 04  STA $0400 = 00                  A:5D X:55 Y:69 P:25 SP:FB PPU:100, 22 CYC:2541\n\
CFD9  A2 00     LDX #$00                        A:5D X:55 Y:69 P:25 SP:FB PPU:112, 22 CYC:2545\n\
CFDB  A1 80     LDA ($80,X) @ 80 = 0200 = 5A    A:5D X:00 Y:69 P:27 SP:FB PPU:118, 22 CYC:2547\n\
CFDD  C9 5A     CMP #$5A                        A:5A X:00 Y:69 P:25 SP:FB PPU:136, 22 CYC:2553\n\
CFDF  D0 1F     BNE $D000                       A:5A X:00 Y:69 P:27 SP:FB PPU:142, 22 CYC:2555\n\
CFE1  E8        INX                             A:5A X:00 Y:69 P:27 SP:FB PPU:148, 22 CYC:2557\n\
CFE2  E8        INX                             A:5A X:01 Y:69 P:25 SP:FB PPU:154, 22 CYC:2559\n\
CFE3  A1 80     LDA ($80,X) @ 82 = 0300 = 5B    A:5A X:02 Y:69 P:25 SP:FB PPU:160, 22 CYC:2561\n\
CFE5  C9 5B     CMP #$5B                        A:5B X:02 Y:69 P:25 SP:FB PPU:178, 22 CYC:2567\n\
CFE7  D0 17     BNE $D000                       A:5B X:02 Y:69 P:27 SP:FB PPU:184, 22 CYC:2569\n\
CFE9  E8        INX                             A:5B X:02 Y:69 P:27 SP:FB PPU:190, 22 CYC:2571\n\
CFEA  A1 80     LDA ($80,X) @ 83 = 0303 = 5C    A:5B X:03 Y:69 P:25 SP:FB PPU:196, 22 CYC:2573\n\
CFEC  C9 5C     CMP #$5C                        A:5C X:03 Y:69 P:25 SP:FB PPU:214, 22 CYC:2579\n\
CFEE  D0 10     BNE $D000                       A:5C X:03 Y:69 P:27 SP:FB PPU:220, 22 CYC:2581\n\
CFF0  A2 00     LDX #$00                        A:5C X:03 Y:69 P:27 SP:FB PPU:226, 22 CYC:2583\n\
CFF2  A1 FF     LDA ($FF,X) @ FF = 0400 = 5D    A:5C X:00 Y:69 P:27 SP:FB PPU:232, 22 CYC:2585\n\
CFF4  C9 5D     CMP #$5D                        A:5D X:00 Y:69 P:25 SP:FB PPU:250, 22 CYC:2591\n\
CFF6  D0 08     BNE $D000                       A:5D X:00 Y:69 P:27 SP:FB PPU:256, 22 CYC:2593\n\
CFF8  A2 81     LDX #$81                        A:5D X:00 Y:69 P:27 SP:FB PPU:262, 22 CYC:2595\n\
CFFA  A1 FF     LDA ($FF,X) @ 80 = 0200 = 5A    A:5D X:81 Y:69 P:A5 SP:FB PPU:268, 22 CYC:2597\n\
CFFC  C9 5A     CMP #$5A                        A:5A X:81 Y:69 P:25 SP:FB PPU:286, 22 CYC:2603\n\
CFFE  F0 05     BEQ $D005                       A:5A X:81 Y:69 P:27 SP:FB PPU:292, 22 CYC:2605\n\
D005  A9 AA     LDA #$AA                        A:5A X:81 Y:69 P:27 SP:FB PPU:301, 22 CYC:2608\n\
D007  A2 00     LDX #$00                        A:AA X:81 Y:69 P:A5 SP:FB PPU:307, 22 CYC:2610\n\
D009  81 80     STA ($80,X) @ 80 = 0200 = 5A    A:AA X:00 Y:69 P:27 SP:FB PPU:313, 22 CYC:2612\n\
D00B  E8        INX                             A:AA X:00 Y:69 P:27 SP:FB PPU:331, 22 CYC:2618\n\
D00C  E8        INX                             A:AA X:01 Y:69 P:25 SP:FB PPU:337, 22 CYC:2620\n\
D00D  A9 AB     LDA #$AB                        A:AA X:02 Y:69 P:25 SP:FB PPU:  2, 23 CYC:2622\n\
D00F  81 80     STA ($80,X) @ 82 = 0300 = 5B    A:AB X:02 Y:69 P:A5 SP:FB PPU:  8, 23 CYC:2624\n\
D011  E8        INX                             A:AB X:02 Y:69 P:A5 SP:FB PPU: 26, 23 CYC:2630\n\
D012  A9 AC     LDA #$AC                        A:AB X:03 Y:69 P:25 SP:FB PPU: 32, 23 CYC:2632\n\
D014  81 80     STA ($80,X) @ 83 = 0303 = 5C    A:AC X:03 Y:69 P:A5 SP:FB PPU: 38, 23 CYC:2634\n\
D016  A2 00     LDX #$00                        A:AC X:03 Y:69 P:A5 SP:FB PPU: 56, 23 CYC:2640\n\
D018  A9 AD     LDA #$AD                        A:AC X:00 Y:69 P:27 SP:FB PPU: 62, 23 CYC:2642\n\
D01A  81 FF     STA ($FF,X) @ FF = 0400 = 5D    A:AD X:00 Y:69 P:A5 SP:FB PPU: 68, 23 CYC:2644\n\
D01C  AD 00 02  LDA $0200 = AA                  A:AD X:00 Y:69 P:A5 SP:FB PPU: 86, 23 CYC:2650\n\
D01F  C9 AA     CMP #$AA                        A:AA X:00 Y:69 P:A5 SP:FB PPU: 98, 23 CYC:2654\n\
D021  D0 15     BNE $D038                       A:AA X:00 Y:69 P:27 SP:FB PPU:104, 23 CYC:2656\n\
D023  AD 00 03  LDA $0300 = AB                  A:AA X:00 Y:69 P:27 SP:FB PPU:110, 23 CYC:2658\n\
D026  C9 AB     CMP #$AB                        A:AB X:00 Y:69 P:A5 SP:FB PPU:122, 23 CYC:2662\n\
D028  D0 0E     BNE $D038                       A:AB X:00 Y:69 P:27 SP:FB PPU:128, 23 CYC:2664\n\
D02A  AD 03 03  LDA $0303 = AC                  A:AB X:00 Y:69 P:27 SP:FB PPU:134, 23 CYC:2666\n\
D02D  C9 AC     CMP #$AC                        A:AC X:00 Y:69 P:A5 SP:FB PPU:146, 23 CYC:2670\n\
D02F  D0 07     BNE $D038                       A:AC X:00 Y:69 P:27 SP:FB PPU:152, 23 CYC:2672\n\
D031  AD 00 04  LDA $0400 = AD                  A:AC X:00 Y:69 P:27 SP:FB PPU:158, 23 CYC:2674\n\
D034  C9 AD     CMP #$AD                        A:AD X:00 Y:69 P:A5 SP:FB PPU:170, 23 CYC:2678\n\
D036  F0 05     BEQ $D03D                       A:AD X:00 Y:69 P:27 SP:FB PPU:176, 23 CYC:2680\n\
D03D  AD FF 07  LDA $07FF = 00                  A:AD X:00 Y:69 P:27 SP:FB PPU:185, 23 CYC:2683\n\
D040  85 00     STA $00 = 04                    A:00 X:00 Y:69 P:27 SP:FB PPU:197, 23 CYC:2687\n\
D042  A9 00     LDA #$00                        A:00 X:00 Y:69 P:27 SP:FB PPU:206, 23 CYC:2690\n\
D044  8D 00 03  STA $0300 = AB                  A:00 X:00 Y:69 P:27 SP:FB PPU:212, 23 CYC:2692\n\
D047  A9 AA     LDA #$AA                        A:00 X:00 Y:69 P:27 SP:FB PPU:224, 23 CYC:2696\n\
D049  8D 00 02  STA $0200 = AA                  A:AA X:00 Y:69 P:A5 SP:FB PPU:230, 23 CYC:2698\n\
D04C  A2 00     LDX #$00                        A:AA X:00 Y:69 P:A5 SP:FB PPU:242, 23 CYC:2702\n\
D04E  A0 5A     LDY #$5A                        A:AA X:00 Y:69 P:27 SP:FB PPU:248, 23 CYC:2704\n\
D050  20 B6 F7  JSR $F7B6                       A:AA X:00 Y:5A P:25 SP:FB PPU:254, 23 CYC:2706\n\
F7B6  18        CLC                             A:AA X:00 Y:5A P:25 SP:F9 PPU:272, 23 CYC:2712\n\
F7B7  A9 FF     LDA #$FF                        A:AA X:00 Y:5A P:24 SP:F9 PPU:278, 23 CYC:2714\n\
F7B9  85 01     STA $01 = FF                    A:FF X:00 Y:5A P:A4 SP:F9 PPU:284, 23 CYC:2716\n\
F7BB  24 01     BIT $01 = FF                    A:FF X:00 Y:5A P:A4 SP:F9 PPU:293, 23 CYC:2719\n\
F7BD  A9 55     LDA #$55                        A:FF X:00 Y:5A P:E4 SP:F9 PPU:302, 23 CYC:2722\n\
F7BF  60        RTS                             A:55 X:00 Y:5A P:64 SP:F9 PPU:308, 23 CYC:2724\n\
D053  01 80     ORA ($80,X) @ 80 = 0200 = AA    A:55 X:00 Y:5A P:64 SP:FB PPU:326, 23 CYC:2730\n\
D055  20 C0 F7  JSR $F7C0                       A:FF X:00 Y:5A P:E4 SP:FB PPU:  3, 24 CYC:2736\n\
F7C0  B0 09     BCS $F7CB                       A:FF X:00 Y:5A P:E4 SP:F9 PPU: 21, 24 CYC:2742\n\
F7C2  10 07     BPL $F7CB                       A:FF X:00 Y:5A P:E4 SP:F9 PPU: 27, 24 CYC:2744\n\
F7C4  C9 FF     CMP #$FF                        A:FF X:00 Y:5A P:E4 SP:F9 PPU: 33, 24 CYC:2746\n\
F7C6  D0 03     BNE $F7CB                       A:FF X:00 Y:5A P:67 SP:F9 PPU: 39, 24 CYC:2748\n\
F7C8  50 01     BVC $F7CB                       A:FF X:00 Y:5A P:67 SP:F9 PPU: 45, 24 CYC:2750\n\
F7CA  60        RTS                             A:FF X:00 Y:5A P:67 SP:F9 PPU: 51, 24 CYC:2752\n\
D058  C8        INY                             A:FF X:00 Y:5A P:67 SP:FB PPU: 69, 24 CYC:2758\n\
D059  20 CE F7  JSR $F7CE                       A:FF X:00 Y:5B P:65 SP:FB PPU: 75, 24 CYC:2760\n\
F7CE  38        SEC                             A:FF X:00 Y:5B P:65 SP:F9 PPU: 93, 24 CYC:2766\n\
F7CF  B8        CLV                             A:FF X:00 Y:5B P:65 SP:F9 PPU: 99, 24 CYC:2768\n\
F7D0  A9 00     LDA #$00                        A:FF X:00 Y:5B P:25 SP:F9 PPU:105, 24 CYC:2770\n\
F7D2  60        RTS                             A:00 X:00 Y:5B P:27 SP:F9 PPU:111, 24 CYC:2772\n\
D05C  01 82     ORA ($82,X) @ 82 = 0300 = 00    A:00 X:00 Y:5B P:27 SP:FB PPU:129, 24 CYC:2778\n\
D05E  20 D3 F7  JSR $F7D3                       A:00 X:00 Y:5B P:27 SP:FB PPU:147, 24 CYC:2784\n\
F7D3  D0 07     BNE $F7DC                       A:00 X:00 Y:5B P:27 SP:F9 PPU:165, 24 CYC:2790\n\
F7D5  70 05     BVS $F7DC                       A:00 X:00 Y:5B P:27 SP:F9 PPU:171, 24 CYC:2792\n\
F7D7  90 03     BCC $F7DC                       A:00 X:00 Y:5B P:27 SP:F9 PPU:177, 24 CYC:2794\n\
F7D9  30 01     BMI $F7DC                       A:00 X:00 Y:5B P:27 SP:F9 PPU:183, 24 CYC:2796\n\
F7DB  60        RTS                             A:00 X:00 Y:5B P:27 SP:F9 PPU:189, 24 CYC:2798\n\
D061  C8        INY                             A:00 X:00 Y:5B P:27 SP:FB PPU:207, 24 CYC:2804\n\
D062  20 DF F7  JSR $F7DF                       A:00 X:00 Y:5C P:25 SP:FB PPU:213, 24 CYC:2806\n\
F7DF  18        CLC                             A:00 X:00 Y:5C P:25 SP:F9 PPU:231, 24 CYC:2812\n\
F7E0  24 01     BIT $01 = FF                    A:00 X:00 Y:5C P:24 SP:F9 PPU:237, 24 CYC:2814\n\
F7E2  A9 55     LDA #$55                        A:00 X:00 Y:5C P:E6 SP:F9 PPU:246, 24 CYC:2817\n\
F7E4  60        RTS                             A:55 X:00 Y:5C P:64 SP:F9 PPU:252, 24 CYC:2819\n\
D065  21 80     AND ($80,X) @ 80 = 0200 = AA    A:55 X:00 Y:5C P:64 SP:FB PPU:270, 24 CYC:2825\n\
D067  20 E5 F7  JSR $F7E5                       A:00 X:00 Y:5C P:66 SP:FB PPU:288, 24 CYC:2831\n\
F7E5  D0 07     BNE $F7EE                       A:00 X:00 Y:5C P:66 SP:F9 PPU:306, 24 CYC:2837\n\
F7E7  50 05     BVC $F7EE                       A:00 X:00 Y:5C P:66 SP:F9 PPU:312, 24 CYC:2839\n\
F7E9  B0 03     BCS $F7EE                       A:00 X:00 Y:5C P:66 SP:F9 PPU:318, 24 CYC:2841\n\
F7EB  30 01     BMI $F7EE                       A:00 X:00 Y:5C P:66 SP:F9 PPU:324, 24 CYC:2843\n\
F7ED  60        RTS                             A:00 X:00 Y:5C P:66 SP:F9 PPU:330, 24 CYC:2845\n\
D06A  C8        INY                             A:00 X:00 Y:5C P:66 SP:FB PPU:  7, 25 CYC:2851\n\
D06B  A9 EF     LDA #$EF                        A:00 X:00 Y:5D P:64 SP:FB PPU: 13, 25 CYC:2853\n\
D06D  8D 00 03  STA $0300 = 00                  A:EF X:00 Y:5D P:E4 SP:FB PPU: 19, 25 CYC:2855\n\
D070  20 F1 F7  JSR $F7F1                       A:EF X:00 Y:5D P:E4 SP:FB PPU: 31, 25 CYC:2859\n\
F7F1  38        SEC                             A:EF X:00 Y:5D P:E4 SP:F9 PPU: 49, 25 CYC:2865\n\
F7F2  B8        CLV                             A:EF X:00 Y:5D P:E5 SP:F9 PPU: 55, 25 CYC:2867\n\
F7F3  A9 F8     LDA #$F8                        A:EF X:00 Y:5D P:A5 SP:F9 PPU: 61, 25 CYC:2869\n\
F7F5  60        RTS                             A:F8 X:00 Y:5D P:A5 SP:F9 PPU: 67, 25 CYC:2871\n\
D073  21 82     AND ($82,X) @ 82 = 0300 = EF    A:F8 X:00 Y:5D P:A5 SP:FB PPU: 85, 25 CYC:2877\n\
D075  20 F6 F7  JSR $F7F6                       A:E8 X:00 Y:5D P:A5 SP:FB PPU:103, 25 CYC:2883\n\
F7F6  90 09     BCC $F801                       A:E8 X:00 Y:5D P:A5 SP:F9 PPU:121, 25 CYC:2889\n\
F7F8  10 07     BPL $F801                       A:E8 X:00 Y:5D P:A5 SP:F9 PPU:127, 25 CYC:2891\n\
F7FA  C9 E8     CMP #$E8                        A:E8 X:00 Y:5D P:A5 SP:F9 PPU:133, 25 CYC:2893\n\
F7FC  D0 03     BNE $F801                       A:E8 X:00 Y:5D P:27 SP:F9 PPU:139, 25 CYC:2895\n\
F7FE  70 01     BVS $F801                       A:E8 X:00 Y:5D P:27 SP:F9 PPU:145, 25 CYC:2897\n\
F800  60        RTS                             A:E8 X:00 Y:5D P:27 SP:F9 PPU:151, 25 CYC:2899\n\
D078  C8        INY                             A:E8 X:00 Y:5D P:27 SP:FB PPU:169, 25 CYC:2905\n\
D079  20 04 F8  JSR $F804                       A:E8 X:00 Y:5E P:25 SP:FB PPU:175, 25 CYC:2907\n\
F804  18        CLC                             A:E8 X:00 Y:5E P:25 SP:F9 PPU:193, 25 CYC:2913\n\
F805  24 01     BIT $01 = FF                    A:E8 X:00 Y:5E P:24 SP:F9 PPU:199, 25 CYC:2915\n\
F807  A9 5F     LDA #$5F                        A:E8 X:00 Y:5E P:E4 SP:F9 PPU:208, 25 CYC:2918\n\
F809  60        RTS                             A:5F X:00 Y:5E P:64 SP:F9 PPU:214, 25 CYC:2920\n\
D07C  41 80     EOR ($80,X) @ 80 = 0200 = AA    A:5F X:00 Y:5E P:64 SP:FB PPU:232, 25 CYC:2926\n\
D07E  20 0A F8  JSR $F80A                       A:F5 X:00 Y:5E P:E4 SP:FB PPU:250, 25 CYC:2932\n\
F80A  B0 09     BCS $F815                       A:F5 X:00 Y:5E P:E4 SP:F9 PPU:268, 25 CYC:2938\n\
F80C  10 07     BPL $F815                       A:F5 X:00 Y:5E P:E4 SP:F9 PPU:274, 25 CYC:2940\n\
F80E  C9 F5     CMP #$F5                        A:F5 X:00 Y:5E P:E4 SP:F9 PPU:280, 25 CYC:2942\n\
F810  D0 03     BNE $F815                       A:F5 X:00 Y:5E P:67 SP:F9 PPU:286, 25 CYC:2944\n\
F812  50 01     BVC $F815                       A:F5 X:00 Y:5E P:67 SP:F9 PPU:292, 25 CYC:2946\n\
F814  60        RTS                             A:F5 X:00 Y:5E P:67 SP:F9 PPU:298, 25 CYC:2948\n\
D081  C8        INY                             A:F5 X:00 Y:5E P:67 SP:FB PPU:316, 25 CYC:2954\n\
D082  A9 70     LDA #$70                        A:F5 X:00 Y:5F P:65 SP:FB PPU:322, 25 CYC:2956\n\
D084  8D 00 03  STA $0300 = EF                  A:70 X:00 Y:5F P:65 SP:FB PPU:328, 25 CYC:2958\n\
D087  20 18 F8  JSR $F818                       A:70 X:00 Y:5F P:65 SP:FB PPU:340, 25 CYC:2962\n\
F818  38        SEC                             A:70 X:00 Y:5F P:65 SP:F9 PPU: 17, 26 CYC:2968\n\
F819  B8        CLV                             A:70 X:00 Y:5F P:65 SP:F9 PPU: 23, 26 CYC:2970\n\
F81A  A9 70     LDA #$70                        A:70 X:00 Y:5F P:25 SP:F9 PPU: 29, 26 CYC:2972\n\
F81C  60        RTS                             A:70 X:00 Y:5F P:25 SP:F9 PPU: 35, 26 CYC:2974\n\
D08A  41 82     EOR ($82,X) @ 82 = 0300 = 70    A:70 X:00 Y:5F P:25 SP:FB PPU: 53, 26 CYC:2980\n\
D08C  20 1D F8  JSR $F81D                       A:00 X:00 Y:5F P:27 SP:FB PPU: 71, 26 CYC:2986\n\
F81D  D0 07     BNE $F826                       A:00 X:00 Y:5F P:27 SP:F9 PPU: 89, 26 CYC:2992\n\
F81F  70 05     BVS $F826                       A:00 X:00 Y:5F P:27 SP:F9 PPU: 95, 26 CYC:2994\n\
F821  90 03     BCC $F826                       A:00 X:00 Y:5F P:27 SP:F9 PPU:101, 26 CYC:2996\n\
F823  30 01     BMI $F826                       A:00 X:00 Y:5F P:27 SP:F9 PPU:107, 26 CYC:2998\n\
F825  60        RTS                             A:00 X:00 Y:5F P:27 SP:F9 PPU:113, 26 CYC:3000\n\
D08F  C8        INY                             A:00 X:00 Y:5F P:27 SP:FB PPU:131, 26 CYC:3006\n\
D090  A9 69     LDA #$69                        A:00 X:00 Y:60 P:25 SP:FB PPU:137, 26 CYC:3008\n\
D092  8D 00 02  STA $0200 = AA                  A:69 X:00 Y:60 P:25 SP:FB PPU:143, 26 CYC:3010\n\
D095  20 29 F8  JSR $F829                       A:69 X:00 Y:60 P:25 SP:FB PPU:155, 26 CYC:3014\n\
F829  18        CLC                             A:69 X:00 Y:60 P:25 SP:F9 PPU:173, 26 CYC:3020\n\
F82A  24 01     BIT $01 = FF                    A:69 X:00 Y:60 P:24 SP:F9 PPU:179, 26 CYC:3022\n\
F82C  A9 00     LDA #$00                        A:69 X:00 Y:60 P:E4 SP:F9 PPU:188, 26 CYC:3025\n\
F82E  60        RTS                             A:00 X:00 Y:60 P:66 SP:F9 PPU:194, 26 CYC:3027\n\
D098  61 80     ADC ($80,X) @ 80 = 0200 = 69    A:00 X:00 Y:60 P:66 SP:FB PPU:212, 26 CYC:3033\n\
D09A  20 2F F8  JSR $F82F                       A:69 X:00 Y:60 P:24 SP:FB PPU:230, 26 CYC:3039\n\
F82F  30 09     BMI $F83A                       A:69 X:00 Y:60 P:24 SP:F9 PPU:248, 26 CYC:3045\n\
F831  B0 07     BCS $F83A                       A:69 X:00 Y:60 P:24 SP:F9 PPU:254, 26 CYC:3047\n\
F833  C9 69     CMP #$69                        A:69 X:00 Y:60 P:24 SP:F9 PPU:260, 26 CYC:3049\n\
F835  D0 03     BNE $F83A                       A:69 X:00 Y:60 P:27 SP:F9 PPU:266, 26 CYC:3051\n\
F837  70 01     BVS $F83A                       A:69 X:00 Y:60 P:27 SP:F9 PPU:272, 26 CYC:3053\n\
F839  60        RTS                             A:69 X:00 Y:60 P:27 SP:F9 PPU:278, 26 CYC:3055\n\
D09D  C8        INY                             A:69 X:00 Y:60 P:27 SP:FB PPU:296, 26 CYC:3061\n\
D09E  20 3D F8  JSR $F83D                       A:69 X:00 Y:61 P:25 SP:FB PPU:302, 26 CYC:3063\n\
F83D  38        SEC                             A:69 X:00 Y:61 P:25 SP:F9 PPU:320, 26 CYC:3069\n\
F83E  24 01     BIT $01 = FF                    A:69 X:00 Y:61 P:25 SP:F9 PPU:326, 26 CYC:3071\n\
F840  A9 00     LDA #$00                        A:69 X:00 Y:61 P:E5 SP:F9 PPU:335, 26 CYC:3074\n\
F842  60        RTS                             A:00 X:00 Y:61 P:67 SP:F9 PPU:  0, 27 CYC:3076\n\
D0A1  61 80     ADC ($80,X) @ 80 = 0200 = 69    A:00 X:00 Y:61 P:67 SP:FB PPU: 18, 27 CYC:3082\n\
D0A3  20 43 F8  JSR $F843                       A:6A X:00 Y:61 P:24 SP:FB PPU: 36, 27 CYC:3088\n\
F843  30 09     BMI $F84E                       A:6A X:00 Y:61 P:24 SP:F9 PPU: 54, 27 CYC:3094\n\
F845  B0 07     BCS $F84E                       A:6A X:00 Y:61 P:24 SP:F9 PPU: 60, 27 CYC:3096\n\
F847  C9 6A     CMP #$6A                        A:6A X:00 Y:61 P:24 SP:F9 PPU: 66, 27 CYC:3098\n\
F849  D0 03     BNE $F84E                       A:6A X:00 Y:61 P:27 SP:F9 PPU: 72, 27 CYC:3100\n\
F84B  70 01     BVS $F84E                       A:6A X:00 Y:61 P:27 SP:F9 PPU: 78, 27 CYC:3102\n\
F84D  60        RTS                             A:6A X:00 Y:61 P:27 SP:F9 PPU: 84, 27 CYC:3104\n\
D0A6  C8        INY                             A:6A X:00 Y:61 P:27 SP:FB PPU:102, 27 CYC:3110\n\
D0A7  A9 7F     LDA #$7F                        A:6A X:00 Y:62 P:25 SP:FB PPU:108, 27 CYC:3112\n\
D0A9  8D 00 02  STA $0200 = 69                  A:7F X:00 Y:62 P:25 SP:FB PPU:114, 27 CYC:3114\n\
D0AC  20 51 F8  JSR $F851                       A:7F X:00 Y:62 P:25 SP:FB PPU:126, 27 CYC:3118\n\
F851  38        SEC                             A:7F X:00 Y:62 P:25 SP:F9 PPU:144, 27 CYC:3124\n\
F852  B8        CLV                             A:7F X:00 Y:62 P:25 SP:F9 PPU:150, 27 CYC:3126\n\
F853  A9 7F     LDA #$7F                        A:7F X:00 Y:62 P:25 SP:F9 PPU:156, 27 CYC:3128\n\
F855  60        RTS                             A:7F X:00 Y:62 P:25 SP:F9 PPU:162, 27 CYC:3130\n\
D0AF  61 80     ADC ($80,X) @ 80 = 0200 = 7F    A:7F X:00 Y:62 P:25 SP:FB PPU:180, 27 CYC:3136\n\
D0B1  20 56 F8  JSR $F856                       A:FF X:00 Y:62 P:E4 SP:FB PPU:198, 27 CYC:3142\n\
F856  10 09     BPL $F861                       A:FF X:00 Y:62 P:E4 SP:F9 PPU:216, 27 CYC:3148\n\
F858  B0 07     BCS $F861                       A:FF X:00 Y:62 P:E4 SP:F9 PPU:222, 27 CYC:3150\n\
F85A  C9 FF     CMP #$FF                        A:FF X:00 Y:62 P:E4 SP:F9 PPU:228, 27 CYC:3152\n\
F85C  D0 03     BNE $F861                       A:FF X:00 Y:62 P:67 SP:F9 PPU:234, 27 CYC:3154\n\
F85E  50 01     BVC $F861                       A:FF X:00 Y:62 P:67 SP:F9 PPU:240, 27 CYC:3156\n\
F860  60        RTS                             A:FF X:00 Y:62 P:67 SP:F9 PPU:246, 27 CYC:3158\n\
D0B4  C8        INY                             A:FF X:00 Y:62 P:67 SP:FB PPU:264, 27 CYC:3164\n\
D0B5  A9 80     LDA #$80                        A:FF X:00 Y:63 P:65 SP:FB PPU:270, 27 CYC:3166\n\
D0B7  8D 00 02  STA $0200 = 7F                  A:80 X:00 Y:63 P:E5 SP:FB PPU:276, 27 CYC:3168\n\
D0BA  20 64 F8  JSR $F864                       A:80 X:00 Y:63 P:E5 SP:FB PPU:288, 27 CYC:3172\n\
F864  18        CLC                             A:80 X:00 Y:63 P:E5 SP:F9 PPU:306, 27 CYC:3178\n\
F865  24 01     BIT $01 = FF                    A:80 X:00 Y:63 P:E4 SP:F9 PPU:312, 27 CYC:3180\n\
F867  A9 7F     LDA #$7F                        A:80 X:00 Y:63 P:E4 SP:F9 PPU:321, 27 CYC:3183\n\
F869  60        RTS                             A:7F X:00 Y:63 P:64 SP:F9 PPU:327, 27 CYC:3185\n\
D0BD  61 80     ADC ($80,X) @ 80 = 0200 = 80    A:7F X:00 Y:63 P:64 SP:FB PPU:  4, 28 CYC:3191\n\
D0BF  20 6A F8  JSR $F86A                       A:FF X:00 Y:63 P:A4 SP:FB PPU: 22, 28 CYC:3197\n\
F86A  10 09     BPL $F875                       A:FF X:00 Y:63 P:A4 SP:F9 PPU: 40, 28 CYC:3203\n\
F86C  B0 07     BCS $F875                       A:FF X:00 Y:63 P:A4 SP:F9 PPU: 46, 28 CYC:3205\n\
F86E  C9 FF     CMP #$FF                        A:FF X:00 Y:63 P:A4 SP:F9 PPU: 52, 28 CYC:3207\n\
F870  D0 03     BNE $F875                       A:FF X:00 Y:63 P:27 SP:F9 PPU: 58, 28 CYC:3209\n\
F872  70 01     BVS $F875                       A:FF X:00 Y:63 P:27 SP:F9 PPU: 64, 28 CYC:3211\n\
F874  60        RTS                             A:FF X:00 Y:63 P:27 SP:F9 PPU: 70, 28 CYC:3213\n\
D0C2  C8        INY                             A:FF X:00 Y:63 P:27 SP:FB PPU: 88, 28 CYC:3219\n\
D0C3  20 78 F8  JSR $F878                       A:FF X:00 Y:64 P:25 SP:FB PPU: 94, 28 CYC:3221\n\
F878  38        SEC                             A:FF X:00 Y:64 P:25 SP:F9 PPU:112, 28 CYC:3227\n\
F879  B8        CLV                             A:FF X:00 Y:64 P:25 SP:F9 PPU:118, 28 CYC:3229\n\
F87A  A9 7F     LDA #$7F                        A:FF X:00 Y:64 P:25 SP:F9 PPU:124, 28 CYC:3231\n\
F87C  60        RTS                             A:7F X:00 Y:64 P:25 SP:F9 PPU:130, 28 CYC:3233\n\
D0C6  61 80     ADC ($80,X) @ 80 = 0200 = 80    A:7F X:00 Y:64 P:25 SP:FB PPU:148, 28 CYC:3239\n\
D0C8  20 7D F8  JSR $F87D                       A:00 X:00 Y:64 P:27 SP:FB PPU:166, 28 CYC:3245\n\
F87D  D0 07     BNE $F886                       A:00 X:00 Y:64 P:27 SP:F9 PPU:184, 28 CYC:3251\n\
F87F  30 05     BMI $F886                       A:00 X:00 Y:64 P:27 SP:F9 PPU:190, 28 CYC:3253\n\
F881  70 03     BVS $F886                       A:00 X:00 Y:64 P:27 SP:F9 PPU:196, 28 CYC:3255\n\
F883  90 01     BCC $F886                       A:00 X:00 Y:64 P:27 SP:F9 PPU:202, 28 CYC:3257\n\
F885  60        RTS                             A:00 X:00 Y:64 P:27 SP:F9 PPU:208, 28 CYC:3259\n\
D0CB  C8        INY                             A:00 X:00 Y:64 P:27 SP:FB PPU:226, 28 CYC:3265\n\
D0CC  A9 40     LDA #$40                        A:00 X:00 Y:65 P:25 SP:FB PPU:232, 28 CYC:3267\n\
D0CE  8D 00 02  STA $0200 = 80                  A:40 X:00 Y:65 P:25 SP:FB PPU:238, 28 CYC:3269\n\
D0D1  20 89 F8  JSR $F889                       A:40 X:00 Y:65 P:25 SP:FB PPU:250, 28 CYC:3273\n\
F889  24 01     BIT $01 = FF                    A:40 X:00 Y:65 P:25 SP:F9 PPU:268, 28 CYC:3279\n\
F88B  A9 40     LDA #$40                        A:40 X:00 Y:65 P:E5 SP:F9 PPU:277, 28 CYC:3282\n\
F88D  60        RTS                             A:40 X:00 Y:65 P:65 SP:F9 PPU:283, 28 CYC:3284\n\
D0D4  C1 80     CMP ($80,X) @ 80 = 0200 = 40    A:40 X:00 Y:65 P:65 SP:FB PPU:301, 28 CYC:3290\n\
D0D6  20 8E F8  JSR $F88E                       A:40 X:00 Y:65 P:67 SP:FB PPU:319, 28 CYC:3296\n\
F88E  30 07     BMI $F897                       A:40 X:00 Y:65 P:67 SP:F9 PPU:337, 28 CYC:3302\n\
F890  90 05     BCC $F897                       A:40 X:00 Y:65 P:67 SP:F9 PPU:  2, 29 CYC:3304\n\
F892  D0 03     BNE $F897                       A:40 X:00 Y:65 P:67 SP:F9 PPU:  8, 29 CYC:3306\n\
F894  50 01     BVC $F897                       A:40 X:00 Y:65 P:67 SP:F9 PPU: 14, 29 CYC:3308\n\
F896  60        RTS                             A:40 X:00 Y:65 P:67 SP:F9 PPU: 20, 29 CYC:3310\n\
D0D9  C8        INY                             A:40 X:00 Y:65 P:67 SP:FB PPU: 38, 29 CYC:3316\n\
D0DA  48        PHA                             A:40 X:00 Y:66 P:65 SP:FB PPU: 44, 29 CYC:3318\n\
D0DB  A9 3F     LDA #$3F                        A:40 X:00 Y:66 P:65 SP:FA PPU: 53, 29 CYC:3321\n\
D0DD  8D 00 02  STA $0200 = 40                  A:3F X:00 Y:66 P:65 SP:FA PPU: 59, 29 CYC:3323\n\
D0E0  68        PLA                             A:3F X:00 Y:66 P:65 SP:FA PPU: 71, 29 CYC:3327\n\
D0E1  20 9A F8  JSR $F89A                       A:40 X:00 Y:66 P:65 SP:FB PPU: 83, 29 CYC:3331\n\
F89A  B8        CLV                             A:40 X:00 Y:66 P:65 SP:F9 PPU:101, 29 CYC:3337\n\
F89B  60        RTS                             A:40 X:00 Y:66 P:25 SP:F9 PPU:107, 29 CYC:3339\n\
D0E4  C1 80     CMP ($80,X) @ 80 = 0200 = 3F    A:40 X:00 Y:66 P:25 SP:FB PPU:125, 29 CYC:3345\n\
D0E6  20 9C F8  JSR $F89C                       A:40 X:00 Y:66 P:25 SP:FB PPU:143, 29 CYC:3351\n\
F89C  F0 07     BEQ $F8A5                       A:40 X:00 Y:66 P:25 SP:F9 PPU:161, 29 CYC:3357\n\
F89E  30 05     BMI $F8A5                       A:40 X:00 Y:66 P:25 SP:F9 PPU:167, 29 CYC:3359\n\
F8A0  90 03     BCC $F8A5                       A:40 X:00 Y:66 P:25 SP:F9 PPU:173, 29 CYC:3361\n\
F8A2  70 01     BVS $F8A5                       A:40 X:00 Y:66 P:25 SP:F9 PPU:179, 29 CYC:3363\n\
F8A4  60        RTS                             A:40 X:00 Y:66 P:25 SP:F9 PPU:185, 29 CYC:3365\n\
D0E9  C8        INY                             A:40 X:00 Y:66 P:25 SP:FB PPU:203, 29 CYC:3371\n\
D0EA  48        PHA                             A:40 X:00 Y:67 P:25 SP:FB PPU:209, 29 CYC:3373\n\
D0EB  A9 41     LDA #$41                        A:40 X:00 Y:67 P:25 SP:FA PPU:218, 29 CYC:3376\n\
D0ED  8D 00 02  STA $0200 = 3F                  A:41 X:00 Y:67 P:25 SP:FA PPU:224, 29 CYC:3378\n\
D0F0  68        PLA                             A:41 X:00 Y:67 P:25 SP:FA PPU:236, 29 CYC:3382\n\
D0F1  C1 80     CMP ($80,X) @ 80 = 0200 = 41    A:40 X:00 Y:67 P:25 SP:FB PPU:248, 29 CYC:3386\n\
D0F3  20 A8 F8  JSR $F8A8                       A:40 X:00 Y:67 P:A4 SP:FB PPU:266, 29 CYC:3392\n\
F8A8  F0 05     BEQ $F8AF                       A:40 X:00 Y:67 P:A4 SP:F9 PPU:284, 29 CYC:3398\n\
F8AA  10 03     BPL $F8AF                       A:40 X:00 Y:67 P:A4 SP:F9 PPU:290, 29 CYC:3400\n\
F8AC  10 01     BPL $F8AF                       A:40 X:00 Y:67 P:A4 SP:F9 PPU:296, 29 CYC:3402\n\
F8AE  60        RTS                             A:40 X:00 Y:67 P:A4 SP:F9 PPU:302, 29 CYC:3404\n\
D0F6  C8        INY                             A:40 X:00 Y:67 P:A4 SP:FB PPU:320, 29 CYC:3410\n\
D0F7  48        PHA                             A:40 X:00 Y:68 P:24 SP:FB PPU:326, 29 CYC:3412\n\
D0F8  A9 00     LDA #$00                        A:40 X:00 Y:68 P:24 SP:FA PPU:335, 29 CYC:3415\n\
D0FA  8D 00 02  STA $0200 = 41                  A:00 X:00 Y:68 P:26 SP:FA PPU:  0, 30 CYC:3417\n\
D0FD  68        PLA                             A:00 X:00 Y:68 P:26 SP:FA PPU: 12, 30 CYC:3421\n\
D0FE  20 B2 F8  JSR $F8B2                       A:40 X:00 Y:68 P:24 SP:FB PPU: 24, 30 CYC:3425\n\
F8B2  A9 80     LDA #$80                        A:40 X:00 Y:68 P:24 SP:F9 PPU: 42, 30 CYC:3431\n\
F8B4  60        RTS                             A:80 X:00 Y:68 P:A4 SP:F9 PPU: 48, 30 CYC:3433\n\
D101  C1 80     CMP ($80,X) @ 80 = 0200 = 00    A:80 X:00 Y:68 P:A4 SP:FB PPU: 66, 30 CYC:3439\n\
D103  20 B5 F8  JSR $F8B5                       A:80 X:00 Y:68 P:A5 SP:FB PPU: 84, 30 CYC:3445\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:00 Y:68 P:A5 SP:F9 PPU:102, 30 CYC:3451\n\
F8B7  10 03     BPL $F8BC                       A:80 X:00 Y:68 P:A5 SP:F9 PPU:108, 30 CYC:3453\n\
F8B9  90 01     BCC $F8BC                       A:80 X:00 Y:68 P:A5 SP:F9 PPU:114, 30 CYC:3455\n\
F8BB  60        RTS                             A:80 X:00 Y:68 P:A5 SP:F9 PPU:120, 30 CYC:3457\n\
D106  C8        INY                             A:80 X:00 Y:68 P:A5 SP:FB PPU:138, 30 CYC:3463\n\
D107  48        PHA                             A:80 X:00 Y:69 P:25 SP:FB PPU:144, 30 CYC:3465\n\
D108  A9 80     LDA #$80                        A:80 X:00 Y:69 P:25 SP:FA PPU:153, 30 CYC:3468\n\
D10A  8D 00 02  STA $0200 = 00                  A:80 X:00 Y:69 P:A5 SP:FA PPU:159, 30 CYC:3470\n\
D10D  68        PLA                             A:80 X:00 Y:69 P:A5 SP:FA PPU:171, 30 CYC:3474\n\
D10E  C1 80     CMP ($80,X) @ 80 = 0200 = 80    A:80 X:00 Y:69 P:A5 SP:FB PPU:183, 30 CYC:3478\n\
D110  20 BF F8  JSR $F8BF                       A:80 X:00 Y:69 P:27 SP:FB PPU:201, 30 CYC:3484\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:00 Y:69 P:27 SP:F9 PPU:219, 30 CYC:3490\n\
F8C1  30 03     BMI $F8C6                       A:80 X:00 Y:69 P:27 SP:F9 PPU:225, 30 CYC:3492\n\
F8C3  90 01     BCC $F8C6                       A:80 X:00 Y:69 P:27 SP:F9 PPU:231, 30 CYC:3494\n\
F8C5  60        RTS                             A:80 X:00 Y:69 P:27 SP:F9 PPU:237, 30 CYC:3496\n\
D113  C8        INY                             A:80 X:00 Y:69 P:27 SP:FB PPU:255, 30 CYC:3502\n\
D114  48        PHA                             A:80 X:00 Y:6A P:25 SP:FB PPU:261, 30 CYC:3504\n\
D115  A9 81     LDA #$81                        A:80 X:00 Y:6A P:25 SP:FA PPU:270, 30 CYC:3507\n\
D117  8D 00 02  STA $0200 = 80                  A:81 X:00 Y:6A P:A5 SP:FA PPU:276, 30 CYC:3509\n\
D11A  68        PLA                             A:81 X:00 Y:6A P:A5 SP:FA PPU:288, 30 CYC:3513\n\
D11B  C1 80     CMP ($80,X) @ 80 = 0200 = 81    A:80 X:00 Y:6A P:A5 SP:FB PPU:300, 30 CYC:3517\n\
D11D  20 C9 F8  JSR $F8C9                       A:80 X:00 Y:6A P:A4 SP:FB PPU:318, 30 CYC:3523\n\
F8C9  B0 05     BCS $F8D0                       A:80 X:00 Y:6A P:A4 SP:F9 PPU:336, 30 CYC:3529\n\
F8CB  F0 03     BEQ $F8D0                       A:80 X:00 Y:6A P:A4 SP:F9 PPU:  1, 31 CYC:3531\n\
F8CD  10 01     BPL $F8D0                       A:80 X:00 Y:6A P:A4 SP:F9 PPU:  7, 31 CYC:3533\n\
F8CF  60        RTS                             A:80 X:00 Y:6A P:A4 SP:F9 PPU: 13, 31 CYC:3535\n\
D120  C8        INY                             A:80 X:00 Y:6A P:A4 SP:FB PPU: 31, 31 CYC:3541\n\
D121  48        PHA                             A:80 X:00 Y:6B P:24 SP:FB PPU: 37, 31 CYC:3543\n\
D122  A9 7F     LDA #$7F                        A:80 X:00 Y:6B P:24 SP:FA PPU: 46, 31 CYC:3546\n\
D124  8D 00 02  STA $0200 = 81                  A:7F X:00 Y:6B P:24 SP:FA PPU: 52, 31 CYC:3548\n\
D127  68        PLA                             A:7F X:00 Y:6B P:24 SP:FA PPU: 64, 31 CYC:3552\n\
D128  C1 80     CMP ($80,X) @ 80 = 0200 = 7F    A:80 X:00 Y:6B P:A4 SP:FB PPU: 76, 31 CYC:3556\n\
D12A  20 D3 F8  JSR $F8D3                       A:80 X:00 Y:6B P:25 SP:FB PPU: 94, 31 CYC:3562\n\
F8D3  90 05     BCC $F8DA                       A:80 X:00 Y:6B P:25 SP:F9 PPU:112, 31 CYC:3568\n\
F8D5  F0 03     BEQ $F8DA                       A:80 X:00 Y:6B P:25 SP:F9 PPU:118, 31 CYC:3570\n\
F8D7  30 01     BMI $F8DA                       A:80 X:00 Y:6B P:25 SP:F9 PPU:124, 31 CYC:3572\n\
F8D9  60        RTS                             A:80 X:00 Y:6B P:25 SP:F9 PPU:130, 31 CYC:3574\n\
D12D  C8        INY                             A:80 X:00 Y:6B P:25 SP:FB PPU:148, 31 CYC:3580\n\
D12E  A9 40     LDA #$40                        A:80 X:00 Y:6C P:25 SP:FB PPU:154, 31 CYC:3582\n\
D130  8D 00 02  STA $0200 = 7F                  A:40 X:00 Y:6C P:25 SP:FB PPU:160, 31 CYC:3584\n\
D133  20 31 F9  JSR $F931                       A:40 X:00 Y:6C P:25 SP:FB PPU:172, 31 CYC:3588\n\
F931  24 01     BIT $01 = FF                    A:40 X:00 Y:6C P:25 SP:F9 PPU:190, 31 CYC:3594\n\
F933  A9 40     LDA #$40                        A:40 X:00 Y:6C P:E5 SP:F9 PPU:199, 31 CYC:3597\n\
F935  38        SEC                             A:40 X:00 Y:6C P:65 SP:F9 PPU:205, 31 CYC:3599\n\
F936  60        RTS                             A:40 X:00 Y:6C P:65 SP:F9 PPU:211, 31 CYC:3601\n\
D136  E1 80     SBC ($80,X) @ 80 = 0200 = 40    A:40 X:00 Y:6C P:65 SP:FB PPU:229, 31 CYC:3607\n\
D138  20 37 F9  JSR $F937                       A:00 X:00 Y:6C P:27 SP:FB PPU:247, 31 CYC:3613\n\
F937  30 0B     BMI $F944                       A:00 X:00 Y:6C P:27 SP:F9 PPU:265, 31 CYC:3619\n\
F939  90 09     BCC $F944                       A:00 X:00 Y:6C P:27 SP:F9 PPU:271, 31 CYC:3621\n\
F93B  D0 07     BNE $F944                       A:00 X:00 Y:6C P:27 SP:F9 PPU:277, 31 CYC:3623\n\
F93D  70 05     BVS $F944                       A:00 X:00 Y:6C P:27 SP:F9 PPU:283, 31 CYC:3625\n\
F93F  C9 00     CMP #$00                        A:00 X:00 Y:6C P:27 SP:F9 PPU:289, 31 CYC:3627\n\
F941  D0 01     BNE $F944                       A:00 X:00 Y:6C P:27 SP:F9 PPU:295, 31 CYC:3629\n\
F943  60        RTS                             A:00 X:00 Y:6C P:27 SP:F9 PPU:301, 31 CYC:3631\n\
D13B  C8        INY                             A:00 X:00 Y:6C P:27 SP:FB PPU:319, 31 CYC:3637\n\
D13C  A9 3F     LDA #$3F                        A:00 X:00 Y:6D P:25 SP:FB PPU:325, 31 CYC:3639\n\
D13E  8D 00 02  STA $0200 = 40                  A:3F X:00 Y:6D P:25 SP:FB PPU:331, 31 CYC:3641\n\
D141  20 47 F9  JSR $F947                       A:3F X:00 Y:6D P:25 SP:FB PPU:  2, 32 CYC:3645\n\
F947  B8        CLV                             A:3F X:00 Y:6D P:25 SP:F9 PPU: 20, 32 CYC:3651\n\
F948  38        SEC                             A:3F X:00 Y:6D P:25 SP:F9 PPU: 26, 32 CYC:3653\n\
F949  A9 40     LDA #$40                        A:3F X:00 Y:6D P:25 SP:F9 PPU: 32, 32 CYC:3655\n\
F94B  60        RTS                             A:40 X:00 Y:6D P:25 SP:F9 PPU: 38, 32 CYC:3657\n\
D144  E1 80     SBC ($80,X) @ 80 = 0200 = 3F    A:40 X:00 Y:6D P:25 SP:FB PPU: 56, 32 CYC:3663\n\
D146  20 4C F9  JSR $F94C                       A:01 X:00 Y:6D P:25 SP:FB PPU: 74, 32 CYC:3669\n\
F94C  F0 0B     BEQ $F959                       A:01 X:00 Y:6D P:25 SP:F9 PPU: 92, 32 CYC:3675\n\
F94E  30 09     BMI $F959                       A:01 X:00 Y:6D P:25 SP:F9 PPU: 98, 32 CYC:3677\n\
F950  90 07     BCC $F959                       A:01 X:00 Y:6D P:25 SP:F9 PPU:104, 32 CYC:3679\n\
F952  70 05     BVS $F959                       A:01 X:00 Y:6D P:25 SP:F9 PPU:110, 32 CYC:3681\n\
F954  C9 01     CMP #$01                        A:01 X:00 Y:6D P:25 SP:F9 PPU:116, 32 CYC:3683\n\
F956  D0 01     BNE $F959                       A:01 X:00 Y:6D P:27 SP:F9 PPU:122, 32 CYC:3685\n\
F958  60        RTS                             A:01 X:00 Y:6D P:27 SP:F9 PPU:128, 32 CYC:3687\n\
D149  C8        INY                             A:01 X:00 Y:6D P:27 SP:FB PPU:146, 32 CYC:3693\n\
D14A  A9 41     LDA #$41                        A:01 X:00 Y:6E P:25 SP:FB PPU:152, 32 CYC:3695\n\
D14C  8D 00 02  STA $0200 = 3F                  A:41 X:00 Y:6E P:25 SP:FB PPU:158, 32 CYC:3697\n\
D14F  20 5C F9  JSR $F95C                       A:41 X:00 Y:6E P:25 SP:FB PPU:170, 32 CYC:3701\n\
F95C  A9 40     LDA #$40                        A:41 X:00 Y:6E P:25 SP:F9 PPU:188, 32 CYC:3707\n\
F95E  38        SEC                             A:40 X:00 Y:6E P:25 SP:F9 PPU:194, 32 CYC:3709\n\
F95F  24 01     BIT $01 = FF                    A:40 X:00 Y:6E P:25 SP:F9 PPU:200, 32 CYC:3711\n\
F961  60        RTS                             A:40 X:00 Y:6E P:E5 SP:F9 PPU:209, 32 CYC:3714\n\
D152  E1 80     SBC ($80,X) @ 80 = 0200 = 41    A:40 X:00 Y:6E P:E5 SP:FB PPU:227, 32 CYC:3720\n\
D154  20 62 F9  JSR $F962                       A:FF X:00 Y:6E P:A4 SP:FB PPU:245, 32 CYC:3726\n\
F962  B0 0B     BCS $F96F                       A:FF X:00 Y:6E P:A4 SP:F9 PPU:263, 32 CYC:3732\n\
F964  F0 09     BEQ $F96F                       A:FF X:00 Y:6E P:A4 SP:F9 PPU:269, 32 CYC:3734\n\
F966  10 07     BPL $F96F                       A:FF X:00 Y:6E P:A4 SP:F9 PPU:275, 32 CYC:3736\n\
F968  70 05     BVS $F96F                       A:FF X:00 Y:6E P:A4 SP:F9 PPU:281, 32 CYC:3738\n\
F96A  C9 FF     CMP #$FF                        A:FF X:00 Y:6E P:A4 SP:F9 PPU:287, 32 CYC:3740\n\
F96C  D0 01     BNE $F96F                       A:FF X:00 Y:6E P:27 SP:F9 PPU:293, 32 CYC:3742\n\
F96E  60        RTS                             A:FF X:00 Y:6E P:27 SP:F9 PPU:299, 32 CYC:3744\n\
D157  C8        INY                             A:FF X:00 Y:6E P:27 SP:FB PPU:317, 32 CYC:3750\n\
D158  A9 00     LDA #$00                        A:FF X:00 Y:6F P:25 SP:FB PPU:323, 32 CYC:3752\n\
D15A  8D 00 02  STA $0200 = 41                  A:00 X:00 Y:6F P:27 SP:FB PPU:329, 32 CYC:3754\n\
D15D  20 72 F9  JSR $F972                       A:00 X:00 Y:6F P:27 SP:FB PPU:  0, 33 CYC:3758\n\
F972  18        CLC                             A:00 X:00 Y:6F P:27 SP:F9 PPU: 18, 33 CYC:3764\n\
F973  A9 80     LDA #$80                        A:00 X:00 Y:6F P:26 SP:F9 PPU: 24, 33 CYC:3766\n\
F975  60        RTS                             A:80 X:00 Y:6F P:A4 SP:F9 PPU: 30, 33 CYC:3768\n\
D160  E1 80     SBC ($80,X) @ 80 = 0200 = 00    A:80 X:00 Y:6F P:A4 SP:FB PPU: 48, 33 CYC:3774\n\
D162  20 76 F9  JSR $F976                       A:7F X:00 Y:6F P:65 SP:FB PPU: 66, 33 CYC:3780\n\
F976  90 05     BCC $F97D                       A:7F X:00 Y:6F P:65 SP:F9 PPU: 84, 33 CYC:3786\n\
F978  C9 7F     CMP #$7F                        A:7F X:00 Y:6F P:65 SP:F9 PPU: 90, 33 CYC:3788\n\
F97A  D0 01     BNE $F97D                       A:7F X:00 Y:6F P:67 SP:F9 PPU: 96, 33 CYC:3790\n\
F97C  60        RTS                             A:7F X:00 Y:6F P:67 SP:F9 PPU:102, 33 CYC:3792\n\
D165  C8        INY                             A:7F X:00 Y:6F P:67 SP:FB PPU:120, 33 CYC:3798\n\
D166  A9 7F     LDA #$7F                        A:7F X:00 Y:70 P:65 SP:FB PPU:126, 33 CYC:3800\n\
D168  8D 00 02  STA $0200 = 00                  A:7F X:00 Y:70 P:65 SP:FB PPU:132, 33 CYC:3802\n\
D16B  20 80 F9  JSR $F980                       A:7F X:00 Y:70 P:65 SP:FB PPU:144, 33 CYC:3806\n\
F980  38        SEC                             A:7F X:00 Y:70 P:65 SP:F9 PPU:162, 33 CYC:3812\n\
F981  A9 81     LDA #$81                        A:7F X:00 Y:70 P:65 SP:F9 PPU:168, 33 CYC:3814\n\
F983  60        RTS                             A:81 X:00 Y:70 P:E5 SP:F9 PPU:174, 33 CYC:3816\n\
D16E  E1 80     SBC ($80,X) @ 80 = 0200 = 7F    A:81 X:00 Y:70 P:E5 SP:FB PPU:192, 33 CYC:3822\n\
D170  20 84 F9  JSR $F984                       A:02 X:00 Y:70 P:65 SP:FB PPU:210, 33 CYC:3828\n\
F984  50 07     BVC $F98D                       A:02 X:00 Y:70 P:65 SP:F9 PPU:228, 33 CYC:3834\n\
F986  90 05     BCC $F98D                       A:02 X:00 Y:70 P:65 SP:F9 PPU:234, 33 CYC:3836\n\
F988  C9 02     CMP #$02                        A:02 X:00 Y:70 P:65 SP:F9 PPU:240, 33 CYC:3838\n\
F98A  D0 01     BNE $F98D                       A:02 X:00 Y:70 P:67 SP:F9 PPU:246, 33 CYC:3840\n\
F98C  60        RTS                             A:02 X:00 Y:70 P:67 SP:F9 PPU:252, 33 CYC:3842\n\
D173  60        RTS                             A:02 X:00 Y:70 P:67 SP:FB PPU:270, 33 CYC:3848\n\
C612  20 74 D1  JSR $D174                       A:02 X:00 Y:70 P:67 SP:FD PPU:288, 33 CYC:3854\n\
D174  A9 55     LDA #$55                        A:02 X:00 Y:70 P:67 SP:FB PPU:306, 33 CYC:3860\n\
D176  85 78     STA $78 = 00                    A:55 X:00 Y:70 P:65 SP:FB PPU:312, 33 CYC:3862\n\
D178  A9 FF     LDA #$FF                        A:55 X:00 Y:70 P:65 SP:FB PPU:321, 33 CYC:3865\n\
D17A  85 01     STA $01 = FF                    A:FF X:00 Y:70 P:E5 SP:FB PPU:327, 33 CYC:3867\n\
D17C  24 01     BIT $01 = FF                    A:FF X:00 Y:70 P:E5 SP:FB PPU:336, 33 CYC:3870\n\
D17E  A0 11     LDY #$11                        A:FF X:00 Y:70 P:E5 SP:FB PPU:  4, 34 CYC:3873\n\
D180  A2 23     LDX #$23                        A:FF X:00 Y:11 P:65 SP:FB PPU: 10, 34 CYC:3875\n\
D182  A9 00     LDA #$00                        A:FF X:23 Y:11 P:65 SP:FB PPU: 16, 34 CYC:3877\n\
D184  A5 78     LDA $78 = 55                    A:00 X:23 Y:11 P:67 SP:FB PPU: 22, 34 CYC:3879\n\
D186  F0 10     BEQ $D198                       A:55 X:23 Y:11 P:65 SP:FB PPU: 31, 34 CYC:3882\n\
D188  30 0E     BMI $D198                       A:55 X:23 Y:11 P:65 SP:FB PPU: 37, 34 CYC:3884\n\
D18A  C9 55     CMP #$55                        A:55 X:23 Y:11 P:65 SP:FB PPU: 43, 34 CYC:3886\n\
D18C  D0 0A     BNE $D198                       A:55 X:23 Y:11 P:67 SP:FB PPU: 49, 34 CYC:3888\n\
D18E  C0 11     CPY #$11                        A:55 X:23 Y:11 P:67 SP:FB PPU: 55, 34 CYC:3890\n\
D190  D0 06     BNE $D198                       A:55 X:23 Y:11 P:67 SP:FB PPU: 61, 34 CYC:3892\n\
D192  E0 23     CPX #$23                        A:55 X:23 Y:11 P:67 SP:FB PPU: 67, 34 CYC:3894\n\
D194  50 02     BVC $D198                       A:55 X:23 Y:11 P:67 SP:FB PPU: 73, 34 CYC:3896\n\
D196  F0 04     BEQ $D19C                       A:55 X:23 Y:11 P:67 SP:FB PPU: 79, 34 CYC:3898\n\
D19C  A9 46     LDA #$46                        A:55 X:23 Y:11 P:67 SP:FB PPU: 88, 34 CYC:3901\n\
D19E  24 01     BIT $01 = FF                    A:46 X:23 Y:11 P:65 SP:FB PPU: 94, 34 CYC:3903\n\
D1A0  85 78     STA $78 = 55                    A:46 X:23 Y:11 P:E5 SP:FB PPU:103, 34 CYC:3906\n\
D1A2  F0 0A     BEQ $D1AE                       A:46 X:23 Y:11 P:E5 SP:FB PPU:112, 34 CYC:3909\n\
D1A4  10 08     BPL $D1AE                       A:46 X:23 Y:11 P:E5 SP:FB PPU:118, 34 CYC:3911\n\
D1A6  50 06     BVC $D1AE                       A:46 X:23 Y:11 P:E5 SP:FB PPU:124, 34 CYC:3913\n\
D1A8  A5 78     LDA $78 = 46                    A:46 X:23 Y:11 P:E5 SP:FB PPU:130, 34 CYC:3915\n\
D1AA  C9 46     CMP #$46                        A:46 X:23 Y:11 P:65 SP:FB PPU:139, 34 CYC:3918\n\
D1AC  F0 04     BEQ $D1B2                       A:46 X:23 Y:11 P:67 SP:FB PPU:145, 34 CYC:3920\n\
D1B2  A9 55     LDA #$55                        A:46 X:23 Y:11 P:67 SP:FB PPU:154, 34 CYC:3923\n\
D1B4  85 78     STA $78 = 46                    A:55 X:23 Y:11 P:65 SP:FB PPU:160, 34 CYC:3925\n\
D1B6  24 01     BIT $01 = FF                    A:55 X:23 Y:11 P:65 SP:FB PPU:169, 34 CYC:3928\n\
D1B8  A9 11     LDA #$11                        A:55 X:23 Y:11 P:E5 SP:FB PPU:178, 34 CYC:3931\n\
D1BA  A2 23     LDX #$23                        A:11 X:23 Y:11 P:65 SP:FB PPU:184, 34 CYC:3933\n\
D1BC  A0 00     LDY #$00                        A:11 X:23 Y:11 P:65 SP:FB PPU:190, 34 CYC:3935\n\
D1BE  A4 78     LDY $78 = 55                    A:11 X:23 Y:00 P:67 SP:FB PPU:196, 34 CYC:3937\n\
D1C0  F0 10     BEQ $D1D2                       A:11 X:23 Y:55 P:65 SP:FB PPU:205, 34 CYC:3940\n\
D1C2  30 0E     BMI $D1D2                       A:11 X:23 Y:55 P:65 SP:FB PPU:211, 34 CYC:3942\n\
D1C4  C0 55     CPY #$55                        A:11 X:23 Y:55 P:65 SP:FB PPU:217, 34 CYC:3944\n\
D1C6  D0 0A     BNE $D1D2                       A:11 X:23 Y:55 P:67 SP:FB PPU:223, 34 CYC:3946\n\
D1C8  C9 11     CMP #$11                        A:11 X:23 Y:55 P:67 SP:FB PPU:229, 34 CYC:3948\n\
D1CA  D0 06     BNE $D1D2                       A:11 X:23 Y:55 P:67 SP:FB PPU:235, 34 CYC:3950\n\
D1CC  E0 23     CPX #$23                        A:11 X:23 Y:55 P:67 SP:FB PPU:241, 34 CYC:3952\n\
D1CE  50 02     BVC $D1D2                       A:11 X:23 Y:55 P:67 SP:FB PPU:247, 34 CYC:3954\n\
D1D0  F0 04     BEQ $D1D6                       A:11 X:23 Y:55 P:67 SP:FB PPU:253, 34 CYC:3956\n\
D1D6  A0 46     LDY #$46                        A:11 X:23 Y:55 P:67 SP:FB PPU:262, 34 CYC:3959\n\
D1D8  24 01     BIT $01 = FF                    A:11 X:23 Y:46 P:65 SP:FB PPU:268, 34 CYC:3961\n\
D1DA  84 78     STY $78 = 55                    A:11 X:23 Y:46 P:E5 SP:FB PPU:277, 34 CYC:3964\n\
D1DC  F0 0A     BEQ $D1E8                       A:11 X:23 Y:46 P:E5 SP:FB PPU:286, 34 CYC:3967\n\
D1DE  10 08     BPL $D1E8                       A:11 X:23 Y:46 P:E5 SP:FB PPU:292, 34 CYC:3969\n\
D1E0  50 06     BVC $D1E8                       A:11 X:23 Y:46 P:E5 SP:FB PPU:298, 34 CYC:3971\n\
D1E2  A4 78     LDY $78 = 46                    A:11 X:23 Y:46 P:E5 SP:FB PPU:304, 34 CYC:3973\n\
D1E4  C0 46     CPY #$46                        A:11 X:23 Y:46 P:65 SP:FB PPU:313, 34 CYC:3976\n\
D1E6  F0 04     BEQ $D1EC                       A:11 X:23 Y:46 P:67 SP:FB PPU:319, 34 CYC:3978\n\
D1EC  24 01     BIT $01 = FF                    A:11 X:23 Y:46 P:67 SP:FB PPU:328, 34 CYC:3981\n\
D1EE  A9 55     LDA #$55                        A:11 X:23 Y:46 P:E5 SP:FB PPU:337, 34 CYC:3984\n\
D1F0  85 78     STA $78 = 46                    A:55 X:23 Y:46 P:65 SP:FB PPU:  2, 35 CYC:3986\n\
D1F2  A0 11     LDY #$11                        A:55 X:23 Y:46 P:65 SP:FB PPU: 11, 35 CYC:3989\n\
D1F4  A9 23     LDA #$23                        A:55 X:23 Y:11 P:65 SP:FB PPU: 17, 35 CYC:3991\n\
D1F6  A2 00     LDX #$00                        A:23 X:23 Y:11 P:65 SP:FB PPU: 23, 35 CYC:3993\n\
D1F8  A6 78     LDX $78 = 55                    A:23 X:00 Y:11 P:67 SP:FB PPU: 29, 35 CYC:3995\n\
D1FA  F0 10     BEQ $D20C                       A:23 X:55 Y:11 P:65 SP:FB PPU: 38, 35 CYC:3998\n\
D1FC  30 0E     BMI $D20C                       A:23 X:55 Y:11 P:65 SP:FB PPU: 44, 35 CYC:4000\n\
D1FE  E0 55     CPX #$55                        A:23 X:55 Y:11 P:65 SP:FB PPU: 50, 35 CYC:4002\n\
D200  D0 0A     BNE $D20C                       A:23 X:55 Y:11 P:67 SP:FB PPU: 56, 35 CYC:4004\n\
D202  C0 11     CPY #$11                        A:23 X:55 Y:11 P:67 SP:FB PPU: 62, 35 CYC:4006\n\
D204  D0 06     BNE $D20C                       A:23 X:55 Y:11 P:67 SP:FB PPU: 68, 35 CYC:4008\n\
D206  C9 23     CMP #$23                        A:23 X:55 Y:11 P:67 SP:FB PPU: 74, 35 CYC:4010\n\
D208  50 02     BVC $D20C                       A:23 X:55 Y:11 P:67 SP:FB PPU: 80, 35 CYC:4012\n\
D20A  F0 04     BEQ $D210                       A:23 X:55 Y:11 P:67 SP:FB PPU: 86, 35 CYC:4014\n\
D210  A2 46     LDX #$46                        A:23 X:55 Y:11 P:67 SP:FB PPU: 95, 35 CYC:4017\n\
D212  24 01     BIT $01 = FF                    A:23 X:46 Y:11 P:65 SP:FB PPU:101, 35 CYC:4019\n\
D214  86 78     STX $78 = 55                    A:23 X:46 Y:11 P:E5 SP:FB PPU:110, 35 CYC:4022\n\
D216  F0 0A     BEQ $D222                       A:23 X:46 Y:11 P:E5 SP:FB PPU:119, 35 CYC:4025\n\
D218  10 08     BPL $D222                       A:23 X:46 Y:11 P:E5 SP:FB PPU:125, 35 CYC:4027\n\
D21A  50 06     BVC $D222                       A:23 X:46 Y:11 P:E5 SP:FB PPU:131, 35 CYC:4029\n\
D21C  A6 78     LDX $78 = 46                    A:23 X:46 Y:11 P:E5 SP:FB PPU:137, 35 CYC:4031\n\
D21E  E0 46     CPX #$46                        A:23 X:46 Y:11 P:65 SP:FB PPU:146, 35 CYC:4034\n\
D220  F0 04     BEQ $D226                       A:23 X:46 Y:11 P:67 SP:FB PPU:152, 35 CYC:4036\n\
D226  A9 C0     LDA #$C0                        A:23 X:46 Y:11 P:67 SP:FB PPU:161, 35 CYC:4039\n\
D228  85 78     STA $78 = 46                    A:C0 X:46 Y:11 P:E5 SP:FB PPU:167, 35 CYC:4041\n\
D22A  A2 33     LDX #$33                        A:C0 X:46 Y:11 P:E5 SP:FB PPU:176, 35 CYC:4044\n\
D22C  A0 88     LDY #$88                        A:C0 X:33 Y:11 P:65 SP:FB PPU:182, 35 CYC:4046\n\
D22E  A9 05     LDA #$05                        A:C0 X:33 Y:88 P:E5 SP:FB PPU:188, 35 CYC:4048\n\
D230  24 78     BIT $78 = C0                    A:05 X:33 Y:88 P:65 SP:FB PPU:194, 35 CYC:4050\n\
D232  10 10     BPL $D244                       A:05 X:33 Y:88 P:E7 SP:FB PPU:203, 35 CYC:4053\n\
D234  50 0E     BVC $D244                       A:05 X:33 Y:88 P:E7 SP:FB PPU:209, 35 CYC:4055\n\
D236  D0 0C     BNE $D244                       A:05 X:33 Y:88 P:E7 SP:FB PPU:215, 35 CYC:4057\n\
D238  C9 05     CMP #$05                        A:05 X:33 Y:88 P:E7 SP:FB PPU:221, 35 CYC:4059\n\
D23A  D0 08     BNE $D244                       A:05 X:33 Y:88 P:67 SP:FB PPU:227, 35 CYC:4061\n\
D23C  E0 33     CPX #$33                        A:05 X:33 Y:88 P:67 SP:FB PPU:233, 35 CYC:4063\n\
D23E  D0 04     BNE $D244                       A:05 X:33 Y:88 P:67 SP:FB PPU:239, 35 CYC:4065\n\
D240  C0 88     CPY #$88                        A:05 X:33 Y:88 P:67 SP:FB PPU:245, 35 CYC:4067\n\
D242  F0 04     BEQ $D248                       A:05 X:33 Y:88 P:67 SP:FB PPU:251, 35 CYC:4069\n\
D248  A9 03     LDA #$03                        A:05 X:33 Y:88 P:67 SP:FB PPU:260, 35 CYC:4072\n\
D24A  85 78     STA $78 = C0                    A:03 X:33 Y:88 P:65 SP:FB PPU:266, 35 CYC:4074\n\
D24C  A9 01     LDA #$01                        A:03 X:33 Y:88 P:65 SP:FB PPU:275, 35 CYC:4077\n\
D24E  24 78     BIT $78 = 03                    A:01 X:33 Y:88 P:65 SP:FB PPU:281, 35 CYC:4079\n\
D250  30 08     BMI $D25A                       A:01 X:33 Y:88 P:25 SP:FB PPU:290, 35 CYC:4082\n\
D252  70 06     BVS $D25A                       A:01 X:33 Y:88 P:25 SP:FB PPU:296, 35 CYC:4084\n\
D254  F0 04     BEQ $D25A                       A:01 X:33 Y:88 P:25 SP:FB PPU:302, 35 CYC:4086\n\
D256  C9 01     CMP #$01                        A:01 X:33 Y:88 P:25 SP:FB PPU:308, 35 CYC:4088\n\
D258  F0 04     BEQ $D25E                       A:01 X:33 Y:88 P:27 SP:FB PPU:314, 35 CYC:4090\n\
D25E  A0 7E     LDY #$7E                        A:01 X:33 Y:88 P:27 SP:FB PPU:323, 35 CYC:4093\n\
D260  A9 AA     LDA #$AA                        A:01 X:33 Y:7E P:25 SP:FB PPU:329, 35 CYC:4095\n\
D262  85 78     STA $78 = 03                    A:AA X:33 Y:7E P:A5 SP:FB PPU:335, 35 CYC:4097\n\
D264  20 B6 F7  JSR $F7B6                       A:AA X:33 Y:7E P:A5 SP:FB PPU:  3, 36 CYC:4100\n\
F7B6  18        CLC                             A:AA X:33 Y:7E P:A5 SP:F9 PPU: 21, 36 CYC:4106\n\
F7B7  A9 FF     LDA #$FF                        A:AA X:33 Y:7E P:A4 SP:F9 PPU: 27, 36 CYC:4108\n\
F7B9  85 01     STA $01 = FF                    A:FF X:33 Y:7E P:A4 SP:F9 PPU: 33, 36 CYC:4110\n\
F7BB  24 01     BIT $01 = FF                    A:FF X:33 Y:7E P:A4 SP:F9 PPU: 42, 36 CYC:4113\n\
F7BD  A9 55     LDA #$55                        A:FF X:33 Y:7E P:E4 SP:F9 PPU: 51, 36 CYC:4116\n\
F7BF  60        RTS                             A:55 X:33 Y:7E P:64 SP:F9 PPU: 57, 36 CYC:4118\n\
D267  05 78     ORA $78 = AA                    A:55 X:33 Y:7E P:64 SP:FB PPU: 75, 36 CYC:4124\n\
D269  20 C0 F7  JSR $F7C0                       A:FF X:33 Y:7E P:E4 SP:FB PPU: 84, 36 CYC:4127\n\
F7C0  B0 09     BCS $F7CB                       A:FF X:33 Y:7E P:E4 SP:F9 PPU:102, 36 CYC:4133\n\
F7C2  10 07     BPL $F7CB                       A:FF X:33 Y:7E P:E4 SP:F9 PPU:108, 36 CYC:4135\n\
F7C4  C9 FF     CMP #$FF                        A:FF X:33 Y:7E P:E4 SP:F9 PPU:114, 36 CYC:4137\n\
F7C6  D0 03     BNE $F7CB                       A:FF X:33 Y:7E P:67 SP:F9 PPU:120, 36 CYC:4139\n\
F7C8  50 01     BVC $F7CB                       A:FF X:33 Y:7E P:67 SP:F9 PPU:126, 36 CYC:4141\n\
F7CA  60        RTS                             A:FF X:33 Y:7E P:67 SP:F9 PPU:132, 36 CYC:4143\n\
D26C  C8        INY                             A:FF X:33 Y:7E P:67 SP:FB PPU:150, 36 CYC:4149\n\
D26D  A9 00     LDA #$00                        A:FF X:33 Y:7F P:65 SP:FB PPU:156, 36 CYC:4151\n\
D26F  85 78     STA $78 = AA                    A:00 X:33 Y:7F P:67 SP:FB PPU:162, 36 CYC:4153\n\
D271  20 CE F7  JSR $F7CE                       A:00 X:33 Y:7F P:67 SP:FB PPU:171, 36 CYC:4156\n\
F7CE  38        SEC                             A:00 X:33 Y:7F P:67 SP:F9 PPU:189, 36 CYC:4162\n\
F7CF  B8        CLV                             A:00 X:33 Y:7F P:67 SP:F9 PPU:195, 36 CYC:4164\n\
F7D0  A9 00     LDA #$00                        A:00 X:33 Y:7F P:27 SP:F9 PPU:201, 36 CYC:4166\n\
F7D2  60        RTS                             A:00 X:33 Y:7F P:27 SP:F9 PPU:207, 36 CYC:4168\n\
D274  05 78     ORA $78 = 00                    A:00 X:33 Y:7F P:27 SP:FB PPU:225, 36 CYC:4174\n\
D276  20 D3 F7  JSR $F7D3                       A:00 X:33 Y:7F P:27 SP:FB PPU:234, 36 CYC:4177\n\
F7D3  D0 07     BNE $F7DC                       A:00 X:33 Y:7F P:27 SP:F9 PPU:252, 36 CYC:4183\n\
F7D5  70 05     BVS $F7DC                       A:00 X:33 Y:7F P:27 SP:F9 PPU:258, 36 CYC:4185\n\
F7D7  90 03     BCC $F7DC                       A:00 X:33 Y:7F P:27 SP:F9 PPU:264, 36 CYC:4187\n\
F7D9  30 01     BMI $F7DC                       A:00 X:33 Y:7F P:27 SP:F9 PPU:270, 36 CYC:4189\n\
F7DB  60        RTS                             A:00 X:33 Y:7F P:27 SP:F9 PPU:276, 36 CYC:4191\n\
D279  C8        INY                             A:00 X:33 Y:7F P:27 SP:FB PPU:294, 36 CYC:4197\n\
D27A  A9 AA     LDA #$AA                        A:00 X:33 Y:80 P:A5 SP:FB PPU:300, 36 CYC:4199\n\
D27C  85 78     STA $78 = 00                    A:AA X:33 Y:80 P:A5 SP:FB PPU:306, 36 CYC:4201\n\
D27E  20 DF F7  JSR $F7DF                       A:AA X:33 Y:80 P:A5 SP:FB PPU:315, 36 CYC:4204\n\
F7DF  18        CLC                             A:AA X:33 Y:80 P:A5 SP:F9 PPU:333, 36 CYC:4210\n\
F7E0  24 01     BIT $01 = FF                    A:AA X:33 Y:80 P:A4 SP:F9 PPU:339, 36 CYC:4212\n\
F7E2  A9 55     LDA #$55                        A:AA X:33 Y:80 P:E4 SP:F9 PPU:  7, 37 CYC:4215\n\
F7E4  60        RTS                             A:55 X:33 Y:80 P:64 SP:F9 PPU: 13, 37 CYC:4217\n\
D281  25 78     AND $78 = AA                    A:55 X:33 Y:80 P:64 SP:FB PPU: 31, 37 CYC:4223\n\
D283  20 E5 F7  JSR $F7E5                       A:00 X:33 Y:80 P:66 SP:FB PPU: 40, 37 CYC:4226\n\
F7E5  D0 07     BNE $F7EE                       A:00 X:33 Y:80 P:66 SP:F9 PPU: 58, 37 CYC:4232\n\
F7E7  50 05     BVC $F7EE                       A:00 X:33 Y:80 P:66 SP:F9 PPU: 64, 37 CYC:4234\n\
F7E9  B0 03     BCS $F7EE                       A:00 X:33 Y:80 P:66 SP:F9 PPU: 70, 37 CYC:4236\n\
F7EB  30 01     BMI $F7EE                       A:00 X:33 Y:80 P:66 SP:F9 PPU: 76, 37 CYC:4238\n\
F7ED  60        RTS                             A:00 X:33 Y:80 P:66 SP:F9 PPU: 82, 37 CYC:4240\n\
D286  C8        INY                             A:00 X:33 Y:80 P:66 SP:FB PPU:100, 37 CYC:4246\n\
D287  A9 EF     LDA #$EF                        A:00 X:33 Y:81 P:E4 SP:FB PPU:106, 37 CYC:4248\n\
D289  85 78     STA $78 = AA                    A:EF X:33 Y:81 P:E4 SP:FB PPU:112, 37 CYC:4250\n\
D28B  20 F1 F7  JSR $F7F1                       A:EF X:33 Y:81 P:E4 SP:FB PPU:121, 37 CYC:4253\n\
F7F1  38        SEC                             A:EF X:33 Y:81 P:E4 SP:F9 PPU:139, 37 CYC:4259\n\
F7F2  B8        CLV                             A:EF X:33 Y:81 P:E5 SP:F9 PPU:145, 37 CYC:4261\n\
F7F3  A9 F8     LDA #$F8                        A:EF X:33 Y:81 P:A5 SP:F9 PPU:151, 37 CYC:4263\n\
F7F5  60        RTS                             A:F8 X:33 Y:81 P:A5 SP:F9 PPU:157, 37 CYC:4265\n\
D28E  25 78     AND $78 = EF                    A:F8 X:33 Y:81 P:A5 SP:FB PPU:175, 37 CYC:4271\n\
D290  20 F6 F7  JSR $F7F6                       A:E8 X:33 Y:81 P:A5 SP:FB PPU:184, 37 CYC:4274\n\
F7F6  90 09     BCC $F801                       A:E8 X:33 Y:81 P:A5 SP:F9 PPU:202, 37 CYC:4280\n\
F7F8  10 07     BPL $F801                       A:E8 X:33 Y:81 P:A5 SP:F9 PPU:208, 37 CYC:4282\n\
F7FA  C9 E8     CMP #$E8                        A:E8 X:33 Y:81 P:A5 SP:F9 PPU:214, 37 CYC:4284\n\
F7FC  D0 03     BNE $F801                       A:E8 X:33 Y:81 P:27 SP:F9 PPU:220, 37 CYC:4286\n\
F7FE  70 01     BVS $F801                       A:E8 X:33 Y:81 P:27 SP:F9 PPU:226, 37 CYC:4288\n\
F800  60        RTS                             A:E8 X:33 Y:81 P:27 SP:F9 PPU:232, 37 CYC:4290\n\
D293  C8        INY                             A:E8 X:33 Y:81 P:27 SP:FB PPU:250, 37 CYC:4296\n\
D294  A9 AA     LDA #$AA                        A:E8 X:33 Y:82 P:A5 SP:FB PPU:256, 37 CYC:4298\n\
D296  85 78     STA $78 = EF                    A:AA X:33 Y:82 P:A5 SP:FB PPU:262, 37 CYC:4300\n\
D298  20 04 F8  JSR $F804                       A:AA X:33 Y:82 P:A5 SP:FB PPU:271, 37 CYC:4303\n\
F804  18        CLC                             A:AA X:33 Y:82 P:A5 SP:F9 PPU:289, 37 CYC:4309\n\
F805  24 01     BIT $01 = FF                    A:AA X:33 Y:82 P:A4 SP:F9 PPU:295, 37 CYC:4311\n\
F807  A9 5F     LDA #$5F                        A:AA X:33 Y:82 P:E4 SP:F9 PPU:304, 37 CYC:4314\n\
F809  60        RTS                             A:5F X:33 Y:82 P:64 SP:F9 PPU:310, 37 CYC:4316\n\
D29B  45 78     EOR $78 = AA                    A:5F X:33 Y:82 P:64 SP:FB PPU:328, 37 CYC:4322\n\
D29D  20 0A F8  JSR $F80A                       A:F5 X:33 Y:82 P:E4 SP:FB PPU:337, 37 CYC:4325\n\
F80A  B0 09     BCS $F815                       A:F5 X:33 Y:82 P:E4 SP:F9 PPU: 14, 38 CYC:4331\n\
F80C  10 07     BPL $F815                       A:F5 X:33 Y:82 P:E4 SP:F9 PPU: 20, 38 CYC:4333\n\
F80E  C9 F5     CMP #$F5                        A:F5 X:33 Y:82 P:E4 SP:F9 PPU: 26, 38 CYC:4335\n\
F810  D0 03     BNE $F815                       A:F5 X:33 Y:82 P:67 SP:F9 PPU: 32, 38 CYC:4337\n\
F812  50 01     BVC $F815                       A:F5 X:33 Y:82 P:67 SP:F9 PPU: 38, 38 CYC:4339\n\
F814  60        RTS                             A:F5 X:33 Y:82 P:67 SP:F9 PPU: 44, 38 CYC:4341\n\
D2A0  C8        INY                             A:F5 X:33 Y:82 P:67 SP:FB PPU: 62, 38 CYC:4347\n\
D2A1  A9 70     LDA #$70                        A:F5 X:33 Y:83 P:E5 SP:FB PPU: 68, 38 CYC:4349\n\
D2A3  85 78     STA $78 = AA                    A:70 X:33 Y:83 P:65 SP:FB PPU: 74, 38 CYC:4351\n\
D2A5  20 18 F8  JSR $F818                       A:70 X:33 Y:83 P:65 SP:FB PPU: 83, 38 CYC:4354\n\
F818  38        SEC                             A:70 X:33 Y:83 P:65 SP:F9 PPU:101, 38 CYC:4360\n\
F819  B8        CLV                             A:70 X:33 Y:83 P:65 SP:F9 PPU:107, 38 CYC:4362\n\
F81A  A9 70     LDA #$70                        A:70 X:33 Y:83 P:25 SP:F9 PPU:113, 38 CYC:4364\n\
F81C  60        RTS                             A:70 X:33 Y:83 P:25 SP:F9 PPU:119, 38 CYC:4366\n\
D2A8  45 78     EOR $78 = 70                    A:70 X:33 Y:83 P:25 SP:FB PPU:137, 38 CYC:4372\n\
D2AA  20 1D F8  JSR $F81D                       A:00 X:33 Y:83 P:27 SP:FB PPU:146, 38 CYC:4375\n\
F81D  D0 07     BNE $F826                       A:00 X:33 Y:83 P:27 SP:F9 PPU:164, 38 CYC:4381\n\
F81F  70 05     BVS $F826                       A:00 X:33 Y:83 P:27 SP:F9 PPU:170, 38 CYC:4383\n\
F821  90 03     BCC $F826                       A:00 X:33 Y:83 P:27 SP:F9 PPU:176, 38 CYC:4385\n\
F823  30 01     BMI $F826                       A:00 X:33 Y:83 P:27 SP:F9 PPU:182, 38 CYC:4387\n\
F825  60        RTS                             A:00 X:33 Y:83 P:27 SP:F9 PPU:188, 38 CYC:4389\n\
D2AD  C8        INY                             A:00 X:33 Y:83 P:27 SP:FB PPU:206, 38 CYC:4395\n\
D2AE  A9 69     LDA #$69                        A:00 X:33 Y:84 P:A5 SP:FB PPU:212, 38 CYC:4397\n\
D2B0  85 78     STA $78 = 70                    A:69 X:33 Y:84 P:25 SP:FB PPU:218, 38 CYC:4399\n\
D2B2  20 29 F8  JSR $F829                       A:69 X:33 Y:84 P:25 SP:FB PPU:227, 38 CYC:4402\n\
F829  18        CLC                             A:69 X:33 Y:84 P:25 SP:F9 PPU:245, 38 CYC:4408\n\
F82A  24 01     BIT $01 = FF                    A:69 X:33 Y:84 P:24 SP:F9 PPU:251, 38 CYC:4410\n\
F82C  A9 00     LDA #$00                        A:69 X:33 Y:84 P:E4 SP:F9 PPU:260, 38 CYC:4413\n\
F82E  60        RTS                             A:00 X:33 Y:84 P:66 SP:F9 PPU:266, 38 CYC:4415\n\
D2B5  65 78     ADC $78 = 69                    A:00 X:33 Y:84 P:66 SP:FB PPU:284, 38 CYC:4421\n\
D2B7  20 2F F8  JSR $F82F                       A:69 X:33 Y:84 P:24 SP:FB PPU:293, 38 CYC:4424\n\
F82F  30 09     BMI $F83A                       A:69 X:33 Y:84 P:24 SP:F9 PPU:311, 38 CYC:4430\n\
F831  B0 07     BCS $F83A                       A:69 X:33 Y:84 P:24 SP:F9 PPU:317, 38 CYC:4432\n\
F833  C9 69     CMP #$69                        A:69 X:33 Y:84 P:24 SP:F9 PPU:323, 38 CYC:4434\n\
F835  D0 03     BNE $F83A                       A:69 X:33 Y:84 P:27 SP:F9 PPU:329, 38 CYC:4436\n\
F837  70 01     BVS $F83A                       A:69 X:33 Y:84 P:27 SP:F9 PPU:335, 38 CYC:4438\n\
F839  60        RTS                             A:69 X:33 Y:84 P:27 SP:F9 PPU:  0, 39 CYC:4440\n\
D2BA  C8        INY                             A:69 X:33 Y:84 P:27 SP:FB PPU: 18, 39 CYC:4446\n\
D2BB  20 3D F8  JSR $F83D                       A:69 X:33 Y:85 P:A5 SP:FB PPU: 24, 39 CYC:4448\n\
F83D  38        SEC                             A:69 X:33 Y:85 P:A5 SP:F9 PPU: 42, 39 CYC:4454\n\
F83E  24 01     BIT $01 = FF                    A:69 X:33 Y:85 P:A5 SP:F9 PPU: 48, 39 CYC:4456\n\
F840  A9 00     LDA #$00                        A:69 X:33 Y:85 P:E5 SP:F9 PPU: 57, 39 CYC:4459\n\
F842  60        RTS                             A:00 X:33 Y:85 P:67 SP:F9 PPU: 63, 39 CYC:4461\n\
D2BE  65 78     ADC $78 = 69                    A:00 X:33 Y:85 P:67 SP:FB PPU: 81, 39 CYC:4467\n\
D2C0  20 43 F8  JSR $F843                       A:6A X:33 Y:85 P:24 SP:FB PPU: 90, 39 CYC:4470\n\
F843  30 09     BMI $F84E                       A:6A X:33 Y:85 P:24 SP:F9 PPU:108, 39 CYC:4476\n\
F845  B0 07     BCS $F84E                       A:6A X:33 Y:85 P:24 SP:F9 PPU:114, 39 CYC:4478\n\
F847  C9 6A     CMP #$6A                        A:6A X:33 Y:85 P:24 SP:F9 PPU:120, 39 CYC:4480\n\
F849  D0 03     BNE $F84E                       A:6A X:33 Y:85 P:27 SP:F9 PPU:126, 39 CYC:4482\n\
F84B  70 01     BVS $F84E                       A:6A X:33 Y:85 P:27 SP:F9 PPU:132, 39 CYC:4484\n\
F84D  60        RTS                             A:6A X:33 Y:85 P:27 SP:F9 PPU:138, 39 CYC:4486\n\
D2C3  C8        INY                             A:6A X:33 Y:85 P:27 SP:FB PPU:156, 39 CYC:4492\n\
D2C4  A9 7F     LDA #$7F                        A:6A X:33 Y:86 P:A5 SP:FB PPU:162, 39 CYC:4494\n\
D2C6  85 78     STA $78 = 69                    A:7F X:33 Y:86 P:25 SP:FB PPU:168, 39 CYC:4496\n\
D2C8  20 51 F8  JSR $F851                       A:7F X:33 Y:86 P:25 SP:FB PPU:177, 39 CYC:4499\n\
F851  38        SEC                             A:7F X:33 Y:86 P:25 SP:F9 PPU:195, 39 CYC:4505\n\
F852  B8        CLV                             A:7F X:33 Y:86 P:25 SP:F9 PPU:201, 39 CYC:4507\n\
F853  A9 7F     LDA #$7F                        A:7F X:33 Y:86 P:25 SP:F9 PPU:207, 39 CYC:4509\n\
F855  60        RTS                             A:7F X:33 Y:86 P:25 SP:F9 PPU:213, 39 CYC:4511\n\
D2CB  65 78     ADC $78 = 7F                    A:7F X:33 Y:86 P:25 SP:FB PPU:231, 39 CYC:4517\n\
D2CD  20 56 F8  JSR $F856                       A:FF X:33 Y:86 P:E4 SP:FB PPU:240, 39 CYC:4520\n\
F856  10 09     BPL $F861                       A:FF X:33 Y:86 P:E4 SP:F9 PPU:258, 39 CYC:4526\n\
F858  B0 07     BCS $F861                       A:FF X:33 Y:86 P:E4 SP:F9 PPU:264, 39 CYC:4528\n\
F85A  C9 FF     CMP #$FF                        A:FF X:33 Y:86 P:E4 SP:F9 PPU:270, 39 CYC:4530\n\
F85C  D0 03     BNE $F861                       A:FF X:33 Y:86 P:67 SP:F9 PPU:276, 39 CYC:4532\n\
F85E  50 01     BVC $F861                       A:FF X:33 Y:86 P:67 SP:F9 PPU:282, 39 CYC:4534\n\
F860  60        RTS                             A:FF X:33 Y:86 P:67 SP:F9 PPU:288, 39 CYC:4536\n\
D2D0  C8        INY                             A:FF X:33 Y:86 P:67 SP:FB PPU:306, 39 CYC:4542\n\
D2D1  A9 80     LDA #$80                        A:FF X:33 Y:87 P:E5 SP:FB PPU:312, 39 CYC:4544\n\
D2D3  85 78     STA $78 = 7F                    A:80 X:33 Y:87 P:E5 SP:FB PPU:318, 39 CYC:4546\n\
D2D5  20 64 F8  JSR $F864                       A:80 X:33 Y:87 P:E5 SP:FB PPU:327, 39 CYC:4549\n\
F864  18        CLC                             A:80 X:33 Y:87 P:E5 SP:F9 PPU:  4, 40 CYC:4555\n\
F865  24 01     BIT $01 = FF                    A:80 X:33 Y:87 P:E4 SP:F9 PPU: 10, 40 CYC:4557\n\
F867  A9 7F     LDA #$7F                        A:80 X:33 Y:87 P:E4 SP:F9 PPU: 19, 40 CYC:4560\n\
F869  60        RTS                             A:7F X:33 Y:87 P:64 SP:F9 PPU: 25, 40 CYC:4562\n\
D2D8  65 78     ADC $78 = 80                    A:7F X:33 Y:87 P:64 SP:FB PPU: 43, 40 CYC:4568\n\
D2DA  20 6A F8  JSR $F86A                       A:FF X:33 Y:87 P:A4 SP:FB PPU: 52, 40 CYC:4571\n\
F86A  10 09     BPL $F875                       A:FF X:33 Y:87 P:A4 SP:F9 PPU: 70, 40 CYC:4577\n\
F86C  B0 07     BCS $F875                       A:FF X:33 Y:87 P:A4 SP:F9 PPU: 76, 40 CYC:4579\n\
F86E  C9 FF     CMP #$FF                        A:FF X:33 Y:87 P:A4 SP:F9 PPU: 82, 40 CYC:4581\n\
F870  D0 03     BNE $F875                       A:FF X:33 Y:87 P:27 SP:F9 PPU: 88, 40 CYC:4583\n\
F872  70 01     BVS $F875                       A:FF X:33 Y:87 P:27 SP:F9 PPU: 94, 40 CYC:4585\n\
F874  60        RTS                             A:FF X:33 Y:87 P:27 SP:F9 PPU:100, 40 CYC:4587\n\
D2DD  C8        INY                             A:FF X:33 Y:87 P:27 SP:FB PPU:118, 40 CYC:4593\n\
D2DE  20 78 F8  JSR $F878                       A:FF X:33 Y:88 P:A5 SP:FB PPU:124, 40 CYC:4595\n\
F878  38        SEC                             A:FF X:33 Y:88 P:A5 SP:F9 PPU:142, 40 CYC:4601\n\
F879  B8        CLV                             A:FF X:33 Y:88 P:A5 SP:F9 PPU:148, 40 CYC:4603\n\
F87A  A9 7F     LDA #$7F                        A:FF X:33 Y:88 P:A5 SP:F9 PPU:154, 40 CYC:4605\n\
F87C  60        RTS                             A:7F X:33 Y:88 P:25 SP:F9 PPU:160, 40 CYC:4607\n\
D2E1  65 78     ADC $78 = 80                    A:7F X:33 Y:88 P:25 SP:FB PPU:178, 40 CYC:4613\n\
D2E3  20 7D F8  JSR $F87D                       A:00 X:33 Y:88 P:27 SP:FB PPU:187, 40 CYC:4616\n\
F87D  D0 07     BNE $F886                       A:00 X:33 Y:88 P:27 SP:F9 PPU:205, 40 CYC:4622\n\
F87F  30 05     BMI $F886                       A:00 X:33 Y:88 P:27 SP:F9 PPU:211, 40 CYC:4624\n\
F881  70 03     BVS $F886                       A:00 X:33 Y:88 P:27 SP:F9 PPU:217, 40 CYC:4626\n\
F883  90 01     BCC $F886                       A:00 X:33 Y:88 P:27 SP:F9 PPU:223, 40 CYC:4628\n\
F885  60        RTS                             A:00 X:33 Y:88 P:27 SP:F9 PPU:229, 40 CYC:4630\n\
D2E6  C8        INY                             A:00 X:33 Y:88 P:27 SP:FB PPU:247, 40 CYC:4636\n\
D2E7  A9 40     LDA #$40                        A:00 X:33 Y:89 P:A5 SP:FB PPU:253, 40 CYC:4638\n\
D2E9  85 78     STA $78 = 80                    A:40 X:33 Y:89 P:25 SP:FB PPU:259, 40 CYC:4640\n\
D2EB  20 89 F8  JSR $F889                       A:40 X:33 Y:89 P:25 SP:FB PPU:268, 40 CYC:4643\n\
F889  24 01     BIT $01 = FF                    A:40 X:33 Y:89 P:25 SP:F9 PPU:286, 40 CYC:4649\n\
F88B  A9 40     LDA #$40                        A:40 X:33 Y:89 P:E5 SP:F9 PPU:295, 40 CYC:4652\n\
F88D  60        RTS                             A:40 X:33 Y:89 P:65 SP:F9 PPU:301, 40 CYC:4654\n\
D2EE  C5 78     CMP $78 = 40                    A:40 X:33 Y:89 P:65 SP:FB PPU:319, 40 CYC:4660\n\
D2F0  20 8E F8  JSR $F88E                       A:40 X:33 Y:89 P:67 SP:FB PPU:328, 40 CYC:4663\n\
F88E  30 07     BMI $F897                       A:40 X:33 Y:89 P:67 SP:F9 PPU:  5, 41 CYC:4669\n\
F890  90 05     BCC $F897                       A:40 X:33 Y:89 P:67 SP:F9 PPU: 11, 41 CYC:4671\n\
F892  D0 03     BNE $F897                       A:40 X:33 Y:89 P:67 SP:F9 PPU: 17, 41 CYC:4673\n\
F894  50 01     BVC $F897                       A:40 X:33 Y:89 P:67 SP:F9 PPU: 23, 41 CYC:4675\n\
F896  60        RTS                             A:40 X:33 Y:89 P:67 SP:F9 PPU: 29, 41 CYC:4677\n\
D2F3  C8        INY                             A:40 X:33 Y:89 P:67 SP:FB PPU: 47, 41 CYC:4683\n\
D2F4  48        PHA                             A:40 X:33 Y:8A P:E5 SP:FB PPU: 53, 41 CYC:4685\n\
D2F5  A9 3F     LDA #$3F                        A:40 X:33 Y:8A P:E5 SP:FA PPU: 62, 41 CYC:4688\n\
D2F7  85 78     STA $78 = 40                    A:3F X:33 Y:8A P:65 SP:FA PPU: 68, 41 CYC:4690\n\
D2F9  68        PLA                             A:3F X:33 Y:8A P:65 SP:FA PPU: 77, 41 CYC:4693\n\
D2FA  20 9A F8  JSR $F89A                       A:40 X:33 Y:8A P:65 SP:FB PPU: 89, 41 CYC:4697\n\
F89A  B8        CLV                             A:40 X:33 Y:8A P:65 SP:F9 PPU:107, 41 CYC:4703\n\
F89B  60        RTS                             A:40 X:33 Y:8A P:25 SP:F9 PPU:113, 41 CYC:4705\n\
D2FD  C5 78     CMP $78 = 3F                    A:40 X:33 Y:8A P:25 SP:FB PPU:131, 41 CYC:4711\n\
D2FF  20 9C F8  JSR $F89C                       A:40 X:33 Y:8A P:25 SP:FB PPU:140, 41 CYC:4714\n\
F89C  F0 07     BEQ $F8A5                       A:40 X:33 Y:8A P:25 SP:F9 PPU:158, 41 CYC:4720\n\
F89E  30 05     BMI $F8A5                       A:40 X:33 Y:8A P:25 SP:F9 PPU:164, 41 CYC:4722\n\
F8A0  90 03     BCC $F8A5                       A:40 X:33 Y:8A P:25 SP:F9 PPU:170, 41 CYC:4724\n\
F8A2  70 01     BVS $F8A5                       A:40 X:33 Y:8A P:25 SP:F9 PPU:176, 41 CYC:4726\n\
F8A4  60        RTS                             A:40 X:33 Y:8A P:25 SP:F9 PPU:182, 41 CYC:4728\n\
D302  C8        INY                             A:40 X:33 Y:8A P:25 SP:FB PPU:200, 41 CYC:4734\n\
D303  48        PHA                             A:40 X:33 Y:8B P:A5 SP:FB PPU:206, 41 CYC:4736\n\
D304  A9 41     LDA #$41                        A:40 X:33 Y:8B P:A5 SP:FA PPU:215, 41 CYC:4739\n\
D306  85 78     STA $78 = 3F                    A:41 X:33 Y:8B P:25 SP:FA PPU:221, 41 CYC:4741\n\
D308  68        PLA                             A:41 X:33 Y:8B P:25 SP:FA PPU:230, 41 CYC:4744\n\
D309  C5 78     CMP $78 = 41                    A:40 X:33 Y:8B P:25 SP:FB PPU:242, 41 CYC:4748\n\
D30B  20 A8 F8  JSR $F8A8                       A:40 X:33 Y:8B P:A4 SP:FB PPU:251, 41 CYC:4751\n\
F8A8  F0 05     BEQ $F8AF                       A:40 X:33 Y:8B P:A4 SP:F9 PPU:269, 41 CYC:4757\n\
F8AA  10 03     BPL $F8AF                       A:40 X:33 Y:8B P:A4 SP:F9 PPU:275, 41 CYC:4759\n\
F8AC  10 01     BPL $F8AF                       A:40 X:33 Y:8B P:A4 SP:F9 PPU:281, 41 CYC:4761\n\
F8AE  60        RTS                             A:40 X:33 Y:8B P:A4 SP:F9 PPU:287, 41 CYC:4763\n\
D30E  C8        INY                             A:40 X:33 Y:8B P:A4 SP:FB PPU:305, 41 CYC:4769\n\
D30F  48        PHA                             A:40 X:33 Y:8C P:A4 SP:FB PPU:311, 41 CYC:4771\n\
D310  A9 00     LDA #$00                        A:40 X:33 Y:8C P:A4 SP:FA PPU:320, 41 CYC:4774\n\
D312  85 78     STA $78 = 41                    A:00 X:33 Y:8C P:26 SP:FA PPU:326, 41 CYC:4776\n\
D314  68        PLA                             A:00 X:33 Y:8C P:26 SP:FA PPU:335, 41 CYC:4779\n\
D315  20 B2 F8  JSR $F8B2                       A:40 X:33 Y:8C P:24 SP:FB PPU:  6, 42 CYC:4783\n\
F8B2  A9 80     LDA #$80                        A:40 X:33 Y:8C P:24 SP:F9 PPU: 24, 42 CYC:4789\n\
F8B4  60        RTS                             A:80 X:33 Y:8C P:A4 SP:F9 PPU: 30, 42 CYC:4791\n\
D318  C5 78     CMP $78 = 00                    A:80 X:33 Y:8C P:A4 SP:FB PPU: 48, 42 CYC:4797\n\
D31A  20 B5 F8  JSR $F8B5                       A:80 X:33 Y:8C P:A5 SP:FB PPU: 57, 42 CYC:4800\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:33 Y:8C P:A5 SP:F9 PPU: 75, 42 CYC:4806\n\
F8B7  10 03     BPL $F8BC                       A:80 X:33 Y:8C P:A5 SP:F9 PPU: 81, 42 CYC:4808\n\
F8B9  90 01     BCC $F8BC                       A:80 X:33 Y:8C P:A5 SP:F9 PPU: 87, 42 CYC:4810\n\
F8BB  60        RTS                             A:80 X:33 Y:8C P:A5 SP:F9 PPU: 93, 42 CYC:4812\n\
D31D  C8        INY                             A:80 X:33 Y:8C P:A5 SP:FB PPU:111, 42 CYC:4818\n\
D31E  48        PHA                             A:80 X:33 Y:8D P:A5 SP:FB PPU:117, 42 CYC:4820\n\
D31F  A9 80     LDA #$80                        A:80 X:33 Y:8D P:A5 SP:FA PPU:126, 42 CYC:4823\n\
D321  85 78     STA $78 = 00                    A:80 X:33 Y:8D P:A5 SP:FA PPU:132, 42 CYC:4825\n\
D323  68        PLA                             A:80 X:33 Y:8D P:A5 SP:FA PPU:141, 42 CYC:4828\n\
D324  C5 78     CMP $78 = 80                    A:80 X:33 Y:8D P:A5 SP:FB PPU:153, 42 CYC:4832\n\
D326  20 BF F8  JSR $F8BF                       A:80 X:33 Y:8D P:27 SP:FB PPU:162, 42 CYC:4835\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:33 Y:8D P:27 SP:F9 PPU:180, 42 CYC:4841\n\
F8C1  30 03     BMI $F8C6                       A:80 X:33 Y:8D P:27 SP:F9 PPU:186, 42 CYC:4843\n\
F8C3  90 01     BCC $F8C6                       A:80 X:33 Y:8D P:27 SP:F9 PPU:192, 42 CYC:4845\n\
F8C5  60        RTS                             A:80 X:33 Y:8D P:27 SP:F9 PPU:198, 42 CYC:4847\n\
D329  C8        INY                             A:80 X:33 Y:8D P:27 SP:FB PPU:216, 42 CYC:4853\n\
D32A  48        PHA                             A:80 X:33 Y:8E P:A5 SP:FB PPU:222, 42 CYC:4855\n\
D32B  A9 81     LDA #$81                        A:80 X:33 Y:8E P:A5 SP:FA PPU:231, 42 CYC:4858\n\
D32D  85 78     STA $78 = 80                    A:81 X:33 Y:8E P:A5 SP:FA PPU:237, 42 CYC:4860\n\
D32F  68        PLA                             A:81 X:33 Y:8E P:A5 SP:FA PPU:246, 42 CYC:4863\n\
D330  C5 78     CMP $78 = 81                    A:80 X:33 Y:8E P:A5 SP:FB PPU:258, 42 CYC:4867\n\
D332  20 C9 F8  JSR $F8C9                       A:80 X:33 Y:8E P:A4 SP:FB PPU:267, 42 CYC:4870\n\
F8C9  B0 05     BCS $F8D0                       A:80 X:33 Y:8E P:A4 SP:F9 PPU:285, 42 CYC:4876\n\
F8CB  F0 03     BEQ $F8D0                       A:80 X:33 Y:8E P:A4 SP:F9 PPU:291, 42 CYC:4878\n\
F8CD  10 01     BPL $F8D0                       A:80 X:33 Y:8E P:A4 SP:F9 PPU:297, 42 CYC:4880\n\
F8CF  60        RTS                             A:80 X:33 Y:8E P:A4 SP:F9 PPU:303, 42 CYC:4882\n\
D335  C8        INY                             A:80 X:33 Y:8E P:A4 SP:FB PPU:321, 42 CYC:4888\n\
D336  48        PHA                             A:80 X:33 Y:8F P:A4 SP:FB PPU:327, 42 CYC:4890\n\
D337  A9 7F     LDA #$7F                        A:80 X:33 Y:8F P:A4 SP:FA PPU:336, 42 CYC:4893\n\
D339  85 78     STA $78 = 81                    A:7F X:33 Y:8F P:24 SP:FA PPU:  1, 43 CYC:4895\n\
D33B  68        PLA                             A:7F X:33 Y:8F P:24 SP:FA PPU: 10, 43 CYC:4898\n\
D33C  C5 78     CMP $78 = 7F                    A:80 X:33 Y:8F P:A4 SP:FB PPU: 22, 43 CYC:4902\n\
D33E  20 D3 F8  JSR $F8D3                       A:80 X:33 Y:8F P:25 SP:FB PPU: 31, 43 CYC:4905\n\
F8D3  90 05     BCC $F8DA                       A:80 X:33 Y:8F P:25 SP:F9 PPU: 49, 43 CYC:4911\n\
F8D5  F0 03     BEQ $F8DA                       A:80 X:33 Y:8F P:25 SP:F9 PPU: 55, 43 CYC:4913\n\
F8D7  30 01     BMI $F8DA                       A:80 X:33 Y:8F P:25 SP:F9 PPU: 61, 43 CYC:4915\n\
F8D9  60        RTS                             A:80 X:33 Y:8F P:25 SP:F9 PPU: 67, 43 CYC:4917\n\
D341  C8        INY                             A:80 X:33 Y:8F P:25 SP:FB PPU: 85, 43 CYC:4923\n\
D342  A9 40     LDA #$40                        A:80 X:33 Y:90 P:A5 SP:FB PPU: 91, 43 CYC:4925\n\
D344  85 78     STA $78 = 7F                    A:40 X:33 Y:90 P:25 SP:FB PPU: 97, 43 CYC:4927\n\
D346  20 31 F9  JSR $F931                       A:40 X:33 Y:90 P:25 SP:FB PPU:106, 43 CYC:4930\n\
F931  24 01     BIT $01 = FF                    A:40 X:33 Y:90 P:25 SP:F9 PPU:124, 43 CYC:4936\n\
F933  A9 40     LDA #$40                        A:40 X:33 Y:90 P:E5 SP:F9 PPU:133, 43 CYC:4939\n\
F935  38        SEC                             A:40 X:33 Y:90 P:65 SP:F9 PPU:139, 43 CYC:4941\n\
F936  60        RTS                             A:40 X:33 Y:90 P:65 SP:F9 PPU:145, 43 CYC:4943\n\
D349  E5 78     SBC $78 = 40                    A:40 X:33 Y:90 P:65 SP:FB PPU:163, 43 CYC:4949\n\
D34B  20 37 F9  JSR $F937                       A:00 X:33 Y:90 P:27 SP:FB PPU:172, 43 CYC:4952\n\
F937  30 0B     BMI $F944                       A:00 X:33 Y:90 P:27 SP:F9 PPU:190, 43 CYC:4958\n\
F939  90 09     BCC $F944                       A:00 X:33 Y:90 P:27 SP:F9 PPU:196, 43 CYC:4960\n\
F93B  D0 07     BNE $F944                       A:00 X:33 Y:90 P:27 SP:F9 PPU:202, 43 CYC:4962\n\
F93D  70 05     BVS $F944                       A:00 X:33 Y:90 P:27 SP:F9 PPU:208, 43 CYC:4964\n\
F93F  C9 00     CMP #$00                        A:00 X:33 Y:90 P:27 SP:F9 PPU:214, 43 CYC:4966\n\
F941  D0 01     BNE $F944                       A:00 X:33 Y:90 P:27 SP:F9 PPU:220, 43 CYC:4968\n\
F943  60        RTS                             A:00 X:33 Y:90 P:27 SP:F9 PPU:226, 43 CYC:4970\n\
D34E  C8        INY                             A:00 X:33 Y:90 P:27 SP:FB PPU:244, 43 CYC:4976\n\
D34F  A9 3F     LDA #$3F                        A:00 X:33 Y:91 P:A5 SP:FB PPU:250, 43 CYC:4978\n\
D351  85 78     STA $78 = 40                    A:3F X:33 Y:91 P:25 SP:FB PPU:256, 43 CYC:4980\n\
D353  20 47 F9  JSR $F947                       A:3F X:33 Y:91 P:25 SP:FB PPU:265, 43 CYC:4983\n\
F947  B8        CLV                             A:3F X:33 Y:91 P:25 SP:F9 PPU:283, 43 CYC:4989\n\
F948  38        SEC                             A:3F X:33 Y:91 P:25 SP:F9 PPU:289, 43 CYC:4991\n\
F949  A9 40     LDA #$40                        A:3F X:33 Y:91 P:25 SP:F9 PPU:295, 43 CYC:4993\n\
F94B  60        RTS                             A:40 X:33 Y:91 P:25 SP:F9 PPU:301, 43 CYC:4995\n\
D356  E5 78     SBC $78 = 3F                    A:40 X:33 Y:91 P:25 SP:FB PPU:319, 43 CYC:5001\n\
D358  20 4C F9  JSR $F94C                       A:01 X:33 Y:91 P:25 SP:FB PPU:328, 43 CYC:5004\n\
F94C  F0 0B     BEQ $F959                       A:01 X:33 Y:91 P:25 SP:F9 PPU:  5, 44 CYC:5010\n\
F94E  30 09     BMI $F959                       A:01 X:33 Y:91 P:25 SP:F9 PPU: 11, 44 CYC:5012\n\
F950  90 07     BCC $F959                       A:01 X:33 Y:91 P:25 SP:F9 PPU: 17, 44 CYC:5014\n\
F952  70 05     BVS $F959                       A:01 X:33 Y:91 P:25 SP:F9 PPU: 23, 44 CYC:5016\n\
F954  C9 01     CMP #$01                        A:01 X:33 Y:91 P:25 SP:F9 PPU: 29, 44 CYC:5018\n\
F956  D0 01     BNE $F959                       A:01 X:33 Y:91 P:27 SP:F9 PPU: 35, 44 CYC:5020\n\
F958  60        RTS                             A:01 X:33 Y:91 P:27 SP:F9 PPU: 41, 44 CYC:5022\n\
D35B  C8        INY                             A:01 X:33 Y:91 P:27 SP:FB PPU: 59, 44 CYC:5028\n\
D35C  A9 41     LDA #$41                        A:01 X:33 Y:92 P:A5 SP:FB PPU: 65, 44 CYC:5030\n\
D35E  85 78     STA $78 = 3F                    A:41 X:33 Y:92 P:25 SP:FB PPU: 71, 44 CYC:5032\n\
D360  20 5C F9  JSR $F95C                       A:41 X:33 Y:92 P:25 SP:FB PPU: 80, 44 CYC:5035\n\
F95C  A9 40     LDA #$40                        A:41 X:33 Y:92 P:25 SP:F9 PPU: 98, 44 CYC:5041\n\
F95E  38        SEC                             A:40 X:33 Y:92 P:25 SP:F9 PPU:104, 44 CYC:5043\n\
F95F  24 01     BIT $01 = FF                    A:40 X:33 Y:92 P:25 SP:F9 PPU:110, 44 CYC:5045\n\
F961  60        RTS                             A:40 X:33 Y:92 P:E5 SP:F9 PPU:119, 44 CYC:5048\n\
D363  E5 78     SBC $78 = 41                    A:40 X:33 Y:92 P:E5 SP:FB PPU:137, 44 CYC:5054\n\
D365  20 62 F9  JSR $F962                       A:FF X:33 Y:92 P:A4 SP:FB PPU:146, 44 CYC:5057\n\
F962  B0 0B     BCS $F96F                       A:FF X:33 Y:92 P:A4 SP:F9 PPU:164, 44 CYC:5063\n\
F964  F0 09     BEQ $F96F                       A:FF X:33 Y:92 P:A4 SP:F9 PPU:170, 44 CYC:5065\n\
F966  10 07     BPL $F96F                       A:FF X:33 Y:92 P:A4 SP:F9 PPU:176, 44 CYC:5067\n\
F968  70 05     BVS $F96F                       A:FF X:33 Y:92 P:A4 SP:F9 PPU:182, 44 CYC:5069\n\
F96A  C9 FF     CMP #$FF                        A:FF X:33 Y:92 P:A4 SP:F9 PPU:188, 44 CYC:5071\n\
F96C  D0 01     BNE $F96F                       A:FF X:33 Y:92 P:27 SP:F9 PPU:194, 44 CYC:5073\n\
F96E  60        RTS                             A:FF X:33 Y:92 P:27 SP:F9 PPU:200, 44 CYC:5075\n\
D368  C8        INY                             A:FF X:33 Y:92 P:27 SP:FB PPU:218, 44 CYC:5081\n\
D369  A9 00     LDA #$00                        A:FF X:33 Y:93 P:A5 SP:FB PPU:224, 44 CYC:5083\n\
D36B  85 78     STA $78 = 41                    A:00 X:33 Y:93 P:27 SP:FB PPU:230, 44 CYC:5085\n\
D36D  20 72 F9  JSR $F972                       A:00 X:33 Y:93 P:27 SP:FB PPU:239, 44 CYC:5088\n\
F972  18        CLC                             A:00 X:33 Y:93 P:27 SP:F9 PPU:257, 44 CYC:5094\n\
F973  A9 80     LDA #$80                        A:00 X:33 Y:93 P:26 SP:F9 PPU:263, 44 CYC:5096\n\
F975  60        RTS                             A:80 X:33 Y:93 P:A4 SP:F9 PPU:269, 44 CYC:5098\n\
D370  E5 78     SBC $78 = 00                    A:80 X:33 Y:93 P:A4 SP:FB PPU:287, 44 CYC:5104\n\
D372  20 76 F9  JSR $F976                       A:7F X:33 Y:93 P:65 SP:FB PPU:296, 44 CYC:5107\n\
F976  90 05     BCC $F97D                       A:7F X:33 Y:93 P:65 SP:F9 PPU:314, 44 CYC:5113\n\
F978  C9 7F     CMP #$7F                        A:7F X:33 Y:93 P:65 SP:F9 PPU:320, 44 CYC:5115\n\
F97A  D0 01     BNE $F97D                       A:7F X:33 Y:93 P:67 SP:F9 PPU:326, 44 CYC:5117\n\
F97C  60        RTS                             A:7F X:33 Y:93 P:67 SP:F9 PPU:332, 44 CYC:5119\n\
D375  C8        INY                             A:7F X:33 Y:93 P:67 SP:FB PPU:  9, 45 CYC:5125\n\
D376  A9 7F     LDA #$7F                        A:7F X:33 Y:94 P:E5 SP:FB PPU: 15, 45 CYC:5127\n\
D378  85 78     STA $78 = 00                    A:7F X:33 Y:94 P:65 SP:FB PPU: 21, 45 CYC:5129\n\
D37A  20 80 F9  JSR $F980                       A:7F X:33 Y:94 P:65 SP:FB PPU: 30, 45 CYC:5132\n\
F980  38        SEC                             A:7F X:33 Y:94 P:65 SP:F9 PPU: 48, 45 CYC:5138\n\
F981  A9 81     LDA #$81                        A:7F X:33 Y:94 P:65 SP:F9 PPU: 54, 45 CYC:5140\n\
F983  60        RTS                             A:81 X:33 Y:94 P:E5 SP:F9 PPU: 60, 45 CYC:5142\n\
D37D  E5 78     SBC $78 = 7F                    A:81 X:33 Y:94 P:E5 SP:FB PPU: 78, 45 CYC:5148\n\
D37F  20 84 F9  JSR $F984                       A:02 X:33 Y:94 P:65 SP:FB PPU: 87, 45 CYC:5151\n\
F984  50 07     BVC $F98D                       A:02 X:33 Y:94 P:65 SP:F9 PPU:105, 45 CYC:5157\n\
F986  90 05     BCC $F98D                       A:02 X:33 Y:94 P:65 SP:F9 PPU:111, 45 CYC:5159\n\
F988  C9 02     CMP #$02                        A:02 X:33 Y:94 P:65 SP:F9 PPU:117, 45 CYC:5161\n\
F98A  D0 01     BNE $F98D                       A:02 X:33 Y:94 P:67 SP:F9 PPU:123, 45 CYC:5163\n\
F98C  60        RTS                             A:02 X:33 Y:94 P:67 SP:F9 PPU:129, 45 CYC:5165\n\
D382  C8        INY                             A:02 X:33 Y:94 P:67 SP:FB PPU:147, 45 CYC:5171\n\
D383  A9 40     LDA #$40                        A:02 X:33 Y:95 P:E5 SP:FB PPU:153, 45 CYC:5173\n\
D385  85 78     STA $78 = 7F                    A:40 X:33 Y:95 P:65 SP:FB PPU:159, 45 CYC:5175\n\
D387  20 89 F8  JSR $F889                       A:40 X:33 Y:95 P:65 SP:FB PPU:168, 45 CYC:5178\n\
F889  24 01     BIT $01 = FF                    A:40 X:33 Y:95 P:65 SP:F9 PPU:186, 45 CYC:5184\n\
F88B  A9 40     LDA #$40                        A:40 X:33 Y:95 P:E5 SP:F9 PPU:195, 45 CYC:5187\n\
F88D  60        RTS                             A:40 X:33 Y:95 P:65 SP:F9 PPU:201, 45 CYC:5189\n\
D38A  AA        TAX                             A:40 X:33 Y:95 P:65 SP:FB PPU:219, 45 CYC:5195\n\
D38B  E4 78     CPX $78 = 40                    A:40 X:40 Y:95 P:65 SP:FB PPU:225, 45 CYC:5197\n\
D38D  20 8E F8  JSR $F88E                       A:40 X:40 Y:95 P:67 SP:FB PPU:234, 45 CYC:5200\n\
F88E  30 07     BMI $F897                       A:40 X:40 Y:95 P:67 SP:F9 PPU:252, 45 CYC:5206\n\
F890  90 05     BCC $F897                       A:40 X:40 Y:95 P:67 SP:F9 PPU:258, 45 CYC:5208\n\
F892  D0 03     BNE $F897                       A:40 X:40 Y:95 P:67 SP:F9 PPU:264, 45 CYC:5210\n\
F894  50 01     BVC $F897                       A:40 X:40 Y:95 P:67 SP:F9 PPU:270, 45 CYC:5212\n\
F896  60        RTS                             A:40 X:40 Y:95 P:67 SP:F9 PPU:276, 45 CYC:5214\n\
D390  C8        INY                             A:40 X:40 Y:95 P:67 SP:FB PPU:294, 45 CYC:5220\n\
D391  A9 3F     LDA #$3F                        A:40 X:40 Y:96 P:E5 SP:FB PPU:300, 45 CYC:5222\n\
D393  85 78     STA $78 = 40                    A:3F X:40 Y:96 P:65 SP:FB PPU:306, 45 CYC:5224\n\
D395  20 9A F8  JSR $F89A                       A:3F X:40 Y:96 P:65 SP:FB PPU:315, 45 CYC:5227\n\
F89A  B8        CLV                             A:3F X:40 Y:96 P:65 SP:F9 PPU:333, 45 CYC:5233\n\
F89B  60        RTS                             A:3F X:40 Y:96 P:25 SP:F9 PPU:339, 45 CYC:5235\n\
D398  E4 78     CPX $78 = 3F                    A:3F X:40 Y:96 P:25 SP:FB PPU: 16, 46 CYC:5241\n\
D39A  20 9C F8  JSR $F89C                       A:3F X:40 Y:96 P:25 SP:FB PPU: 25, 46 CYC:5244\n\
F89C  F0 07     BEQ $F8A5                       A:3F X:40 Y:96 P:25 SP:F9 PPU: 43, 46 CYC:5250\n\
F89E  30 05     BMI $F8A5                       A:3F X:40 Y:96 P:25 SP:F9 PPU: 49, 46 CYC:5252\n\
F8A0  90 03     BCC $F8A5                       A:3F X:40 Y:96 P:25 SP:F9 PPU: 55, 46 CYC:5254\n\
F8A2  70 01     BVS $F8A5                       A:3F X:40 Y:96 P:25 SP:F9 PPU: 61, 46 CYC:5256\n\
F8A4  60        RTS                             A:3F X:40 Y:96 P:25 SP:F9 PPU: 67, 46 CYC:5258\n\
D39D  C8        INY                             A:3F X:40 Y:96 P:25 SP:FB PPU: 85, 46 CYC:5264\n\
D39E  A9 41     LDA #$41                        A:3F X:40 Y:97 P:A5 SP:FB PPU: 91, 46 CYC:5266\n\
D3A0  85 78     STA $78 = 3F                    A:41 X:40 Y:97 P:25 SP:FB PPU: 97, 46 CYC:5268\n\
D3A2  E4 78     CPX $78 = 41                    A:41 X:40 Y:97 P:25 SP:FB PPU:106, 46 CYC:5271\n\
D3A4  20 A8 F8  JSR $F8A8                       A:41 X:40 Y:97 P:A4 SP:FB PPU:115, 46 CYC:5274\n\
F8A8  F0 05     BEQ $F8AF                       A:41 X:40 Y:97 P:A4 SP:F9 PPU:133, 46 CYC:5280\n\
F8AA  10 03     BPL $F8AF                       A:41 X:40 Y:97 P:A4 SP:F9 PPU:139, 46 CYC:5282\n\
F8AC  10 01     BPL $F8AF                       A:41 X:40 Y:97 P:A4 SP:F9 PPU:145, 46 CYC:5284\n\
F8AE  60        RTS                             A:41 X:40 Y:97 P:A4 SP:F9 PPU:151, 46 CYC:5286\n\
D3A7  C8        INY                             A:41 X:40 Y:97 P:A4 SP:FB PPU:169, 46 CYC:5292\n\
D3A8  A9 00     LDA #$00                        A:41 X:40 Y:98 P:A4 SP:FB PPU:175, 46 CYC:5294\n\
D3AA  85 78     STA $78 = 41                    A:00 X:40 Y:98 P:26 SP:FB PPU:181, 46 CYC:5296\n\
D3AC  20 B2 F8  JSR $F8B2                       A:00 X:40 Y:98 P:26 SP:FB PPU:190, 46 CYC:5299\n\
F8B2  A9 80     LDA #$80                        A:00 X:40 Y:98 P:26 SP:F9 PPU:208, 46 CYC:5305\n\
F8B4  60        RTS                             A:80 X:40 Y:98 P:A4 SP:F9 PPU:214, 46 CYC:5307\n\
D3AF  AA        TAX                             A:80 X:40 Y:98 P:A4 SP:FB PPU:232, 46 CYC:5313\n\
D3B0  E4 78     CPX $78 = 00                    A:80 X:80 Y:98 P:A4 SP:FB PPU:238, 46 CYC:5315\n\
D3B2  20 B5 F8  JSR $F8B5                       A:80 X:80 Y:98 P:A5 SP:FB PPU:247, 46 CYC:5318\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:80 Y:98 P:A5 SP:F9 PPU:265, 46 CYC:5324\n\
F8B7  10 03     BPL $F8BC                       A:80 X:80 Y:98 P:A5 SP:F9 PPU:271, 46 CYC:5326\n\
F8B9  90 01     BCC $F8BC                       A:80 X:80 Y:98 P:A5 SP:F9 PPU:277, 46 CYC:5328\n\
F8BB  60        RTS                             A:80 X:80 Y:98 P:A5 SP:F9 PPU:283, 46 CYC:5330\n\
D3B5  C8        INY                             A:80 X:80 Y:98 P:A5 SP:FB PPU:301, 46 CYC:5336\n\
D3B6  A9 80     LDA #$80                        A:80 X:80 Y:99 P:A5 SP:FB PPU:307, 46 CYC:5338\n\
D3B8  85 78     STA $78 = 00                    A:80 X:80 Y:99 P:A5 SP:FB PPU:313, 46 CYC:5340\n\
D3BA  E4 78     CPX $78 = 80                    A:80 X:80 Y:99 P:A5 SP:FB PPU:322, 46 CYC:5343\n\
D3BC  20 BF F8  JSR $F8BF                       A:80 X:80 Y:99 P:27 SP:FB PPU:331, 46 CYC:5346\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:80 Y:99 P:27 SP:F9 PPU:  8, 47 CYC:5352\n\
F8C1  30 03     BMI $F8C6                       A:80 X:80 Y:99 P:27 SP:F9 PPU: 14, 47 CYC:5354\n\
F8C3  90 01     BCC $F8C6                       A:80 X:80 Y:99 P:27 SP:F9 PPU: 20, 47 CYC:5356\n\
F8C5  60        RTS                             A:80 X:80 Y:99 P:27 SP:F9 PPU: 26, 47 CYC:5358\n\
D3BF  C8        INY                             A:80 X:80 Y:99 P:27 SP:FB PPU: 44, 47 CYC:5364\n\
D3C0  A9 81     LDA #$81                        A:80 X:80 Y:9A P:A5 SP:FB PPU: 50, 47 CYC:5366\n\
D3C2  85 78     STA $78 = 80                    A:81 X:80 Y:9A P:A5 SP:FB PPU: 56, 47 CYC:5368\n\
D3C4  E4 78     CPX $78 = 81                    A:81 X:80 Y:9A P:A5 SP:FB PPU: 65, 47 CYC:5371\n\
D3C6  20 C9 F8  JSR $F8C9                       A:81 X:80 Y:9A P:A4 SP:FB PPU: 74, 47 CYC:5374\n\
F8C9  B0 05     BCS $F8D0                       A:81 X:80 Y:9A P:A4 SP:F9 PPU: 92, 47 CYC:5380\n\
F8CB  F0 03     BEQ $F8D0                       A:81 X:80 Y:9A P:A4 SP:F9 PPU: 98, 47 CYC:5382\n\
F8CD  10 01     BPL $F8D0                       A:81 X:80 Y:9A P:A4 SP:F9 PPU:104, 47 CYC:5384\n\
F8CF  60        RTS                             A:81 X:80 Y:9A P:A4 SP:F9 PPU:110, 47 CYC:5386\n\
D3C9  C8        INY                             A:81 X:80 Y:9A P:A4 SP:FB PPU:128, 47 CYC:5392\n\
D3CA  A9 7F     LDA #$7F                        A:81 X:80 Y:9B P:A4 SP:FB PPU:134, 47 CYC:5394\n\
D3CC  85 78     STA $78 = 81                    A:7F X:80 Y:9B P:24 SP:FB PPU:140, 47 CYC:5396\n\
D3CE  E4 78     CPX $78 = 7F                    A:7F X:80 Y:9B P:24 SP:FB PPU:149, 47 CYC:5399\n\
D3D0  20 D3 F8  JSR $F8D3                       A:7F X:80 Y:9B P:25 SP:FB PPU:158, 47 CYC:5402\n\
F8D3  90 05     BCC $F8DA                       A:7F X:80 Y:9B P:25 SP:F9 PPU:176, 47 CYC:5408\n\
F8D5  F0 03     BEQ $F8DA                       A:7F X:80 Y:9B P:25 SP:F9 PPU:182, 47 CYC:5410\n\
F8D7  30 01     BMI $F8DA                       A:7F X:80 Y:9B P:25 SP:F9 PPU:188, 47 CYC:5412\n\
F8D9  60        RTS                             A:7F X:80 Y:9B P:25 SP:F9 PPU:194, 47 CYC:5414\n\
D3D3  C8        INY                             A:7F X:80 Y:9B P:25 SP:FB PPU:212, 47 CYC:5420\n\
D3D4  98        TYA                             A:7F X:80 Y:9C P:A5 SP:FB PPU:218, 47 CYC:5422\n\
D3D5  AA        TAX                             A:9C X:80 Y:9C P:A5 SP:FB PPU:224, 47 CYC:5424\n\
D3D6  A9 40     LDA #$40                        A:9C X:9C Y:9C P:A5 SP:FB PPU:230, 47 CYC:5426\n\
D3D8  85 78     STA $78 = 7F                    A:40 X:9C Y:9C P:25 SP:FB PPU:236, 47 CYC:5428\n\
D3DA  20 DD F8  JSR $F8DD                       A:40 X:9C Y:9C P:25 SP:FB PPU:245, 47 CYC:5431\n\
F8DD  24 01     BIT $01 = FF                    A:40 X:9C Y:9C P:25 SP:F9 PPU:263, 47 CYC:5437\n\
F8DF  A0 40     LDY #$40                        A:40 X:9C Y:9C P:E5 SP:F9 PPU:272, 47 CYC:5440\n\
F8E1  60        RTS                             A:40 X:9C Y:40 P:65 SP:F9 PPU:278, 47 CYC:5442\n\
D3DD  C4 78     CPY $78 = 40                    A:40 X:9C Y:40 P:65 SP:FB PPU:296, 47 CYC:5448\n\
D3DF  20 E2 F8  JSR $F8E2                       A:40 X:9C Y:40 P:67 SP:FB PPU:305, 47 CYC:5451\n\
F8E2  30 07     BMI $F8EB                       A:40 X:9C Y:40 P:67 SP:F9 PPU:323, 47 CYC:5457\n\
F8E4  90 05     BCC $F8EB                       A:40 X:9C Y:40 P:67 SP:F9 PPU:329, 47 CYC:5459\n\
F8E6  D0 03     BNE $F8EB                       A:40 X:9C Y:40 P:67 SP:F9 PPU:335, 47 CYC:5461\n\
F8E8  50 01     BVC $F8EB                       A:40 X:9C Y:40 P:67 SP:F9 PPU:  0, 48 CYC:5463\n\
F8EA  60        RTS                             A:40 X:9C Y:40 P:67 SP:F9 PPU:  6, 48 CYC:5465\n\
D3E2  E8        INX                             A:40 X:9C Y:40 P:67 SP:FB PPU: 24, 48 CYC:5471\n\
D3E3  A9 3F     LDA #$3F                        A:40 X:9D Y:40 P:E5 SP:FB PPU: 30, 48 CYC:5473\n\
D3E5  85 78     STA $78 = 40                    A:3F X:9D Y:40 P:65 SP:FB PPU: 36, 48 CYC:5475\n\
D3E7  20 EE F8  JSR $F8EE                       A:3F X:9D Y:40 P:65 SP:FB PPU: 45, 48 CYC:5478\n\
F8EE  B8        CLV                             A:3F X:9D Y:40 P:65 SP:F9 PPU: 63, 48 CYC:5484\n\
F8EF  60        RTS                             A:3F X:9D Y:40 P:25 SP:F9 PPU: 69, 48 CYC:5486\n\
D3EA  C4 78     CPY $78 = 3F                    A:3F X:9D Y:40 P:25 SP:FB PPU: 87, 48 CYC:5492\n\
D3EC  20 F0 F8  JSR $F8F0                       A:3F X:9D Y:40 P:25 SP:FB PPU: 96, 48 CYC:5495\n\
F8F0  F0 07     BEQ $F8F9                       A:3F X:9D Y:40 P:25 SP:F9 PPU:114, 48 CYC:5501\n\
F8F2  30 05     BMI $F8F9                       A:3F X:9D Y:40 P:25 SP:F9 PPU:120, 48 CYC:5503\n\
F8F4  90 03     BCC $F8F9                       A:3F X:9D Y:40 P:25 SP:F9 PPU:126, 48 CYC:5505\n\
F8F6  70 01     BVS $F8F9                       A:3F X:9D Y:40 P:25 SP:F9 PPU:132, 48 CYC:5507\n\
F8F8  60        RTS                             A:3F X:9D Y:40 P:25 SP:F9 PPU:138, 48 CYC:5509\n\
D3EF  E8        INX                             A:3F X:9D Y:40 P:25 SP:FB PPU:156, 48 CYC:5515\n\
D3F0  A9 41     LDA #$41                        A:3F X:9E Y:40 P:A5 SP:FB PPU:162, 48 CYC:5517\n\
D3F2  85 78     STA $78 = 3F                    A:41 X:9E Y:40 P:25 SP:FB PPU:168, 48 CYC:5519\n\
D3F4  C4 78     CPY $78 = 41                    A:41 X:9E Y:40 P:25 SP:FB PPU:177, 48 CYC:5522\n\
D3F6  20 FC F8  JSR $F8FC                       A:41 X:9E Y:40 P:A4 SP:FB PPU:186, 48 CYC:5525\n\
F8FC  F0 05     BEQ $F903                       A:41 X:9E Y:40 P:A4 SP:F9 PPU:204, 48 CYC:5531\n\
F8FE  10 03     BPL $F903                       A:41 X:9E Y:40 P:A4 SP:F9 PPU:210, 48 CYC:5533\n\
F900  10 01     BPL $F903                       A:41 X:9E Y:40 P:A4 SP:F9 PPU:216, 48 CYC:5535\n\
F902  60        RTS                             A:41 X:9E Y:40 P:A4 SP:F9 PPU:222, 48 CYC:5537\n\
D3F9  E8        INX                             A:41 X:9E Y:40 P:A4 SP:FB PPU:240, 48 CYC:5543\n\
D3FA  A9 00     LDA #$00                        A:41 X:9F Y:40 P:A4 SP:FB PPU:246, 48 CYC:5545\n\
D3FC  85 78     STA $78 = 41                    A:00 X:9F Y:40 P:26 SP:FB PPU:252, 48 CYC:5547\n\
D3FE  20 06 F9  JSR $F906                       A:00 X:9F Y:40 P:26 SP:FB PPU:261, 48 CYC:5550\n\
F906  A0 80     LDY #$80                        A:00 X:9F Y:40 P:26 SP:F9 PPU:279, 48 CYC:5556\n\
F908  60        RTS                             A:00 X:9F Y:80 P:A4 SP:F9 PPU:285, 48 CYC:5558\n\
D401  C4 78     CPY $78 = 00                    A:00 X:9F Y:80 P:A4 SP:FB PPU:303, 48 CYC:5564\n\
D403  20 09 F9  JSR $F909                       A:00 X:9F Y:80 P:A5 SP:FB PPU:312, 48 CYC:5567\n\
F909  F0 05     BEQ $F910                       A:00 X:9F Y:80 P:A5 SP:F9 PPU:330, 48 CYC:5573\n\
F90B  10 03     BPL $F910                       A:00 X:9F Y:80 P:A5 SP:F9 PPU:336, 48 CYC:5575\n\
F90D  90 01     BCC $F910                       A:00 X:9F Y:80 P:A5 SP:F9 PPU:  1, 49 CYC:5577\n\
F90F  60        RTS                             A:00 X:9F Y:80 P:A5 SP:F9 PPU:  7, 49 CYC:5579\n\
D406  E8        INX                             A:00 X:9F Y:80 P:A5 SP:FB PPU: 25, 49 CYC:5585\n\
D407  A9 80     LDA #$80                        A:00 X:A0 Y:80 P:A5 SP:FB PPU: 31, 49 CYC:5587\n\
D409  85 78     STA $78 = 00                    A:80 X:A0 Y:80 P:A5 SP:FB PPU: 37, 49 CYC:5589\n\
D40B  C4 78     CPY $78 = 80                    A:80 X:A0 Y:80 P:A5 SP:FB PPU: 46, 49 CYC:5592\n\
D40D  20 13 F9  JSR $F913                       A:80 X:A0 Y:80 P:27 SP:FB PPU: 55, 49 CYC:5595\n\
F913  D0 05     BNE $F91A                       A:80 X:A0 Y:80 P:27 SP:F9 PPU: 73, 49 CYC:5601\n\
F915  30 03     BMI $F91A                       A:80 X:A0 Y:80 P:27 SP:F9 PPU: 79, 49 CYC:5603\n\
F917  90 01     BCC $F91A                       A:80 X:A0 Y:80 P:27 SP:F9 PPU: 85, 49 CYC:5605\n\
F919  60        RTS                             A:80 X:A0 Y:80 P:27 SP:F9 PPU: 91, 49 CYC:5607\n\
D410  E8        INX                             A:80 X:A0 Y:80 P:27 SP:FB PPU:109, 49 CYC:5613\n\
D411  A9 81     LDA #$81                        A:80 X:A1 Y:80 P:A5 SP:FB PPU:115, 49 CYC:5615\n\
D413  85 78     STA $78 = 80                    A:81 X:A1 Y:80 P:A5 SP:FB PPU:121, 49 CYC:5617\n\
D415  C4 78     CPY $78 = 81                    A:81 X:A1 Y:80 P:A5 SP:FB PPU:130, 49 CYC:5620\n\
D417  20 1D F9  JSR $F91D                       A:81 X:A1 Y:80 P:A4 SP:FB PPU:139, 49 CYC:5623\n\
F91D  B0 05     BCS $F924                       A:81 X:A1 Y:80 P:A4 SP:F9 PPU:157, 49 CYC:5629\n\
F91F  F0 03     BEQ $F924                       A:81 X:A1 Y:80 P:A4 SP:F9 PPU:163, 49 CYC:5631\n\
F921  10 01     BPL $F924                       A:81 X:A1 Y:80 P:A4 SP:F9 PPU:169, 49 CYC:5633\n\
F923  60        RTS                             A:81 X:A1 Y:80 P:A4 SP:F9 PPU:175, 49 CYC:5635\n\
D41A  E8        INX                             A:81 X:A1 Y:80 P:A4 SP:FB PPU:193, 49 CYC:5641\n\
D41B  A9 7F     LDA #$7F                        A:81 X:A2 Y:80 P:A4 SP:FB PPU:199, 49 CYC:5643\n\
D41D  85 78     STA $78 = 81                    A:7F X:A2 Y:80 P:24 SP:FB PPU:205, 49 CYC:5645\n\
D41F  C4 78     CPY $78 = 7F                    A:7F X:A2 Y:80 P:24 SP:FB PPU:214, 49 CYC:5648\n\
D421  20 27 F9  JSR $F927                       A:7F X:A2 Y:80 P:25 SP:FB PPU:223, 49 CYC:5651\n\
F927  90 05     BCC $F92E                       A:7F X:A2 Y:80 P:25 SP:F9 PPU:241, 49 CYC:5657\n\
F929  F0 03     BEQ $F92E                       A:7F X:A2 Y:80 P:25 SP:F9 PPU:247, 49 CYC:5659\n\
F92B  30 01     BMI $F92E                       A:7F X:A2 Y:80 P:25 SP:F9 PPU:253, 49 CYC:5661\n\
F92D  60        RTS                             A:7F X:A2 Y:80 P:25 SP:F9 PPU:259, 49 CYC:5663\n\
D424  E8        INX                             A:7F X:A2 Y:80 P:25 SP:FB PPU:277, 49 CYC:5669\n\
D425  8A        TXA                             A:7F X:A3 Y:80 P:A5 SP:FB PPU:283, 49 CYC:5671\n\
D426  A8        TAY                             A:A3 X:A3 Y:80 P:A5 SP:FB PPU:289, 49 CYC:5673\n\
D427  20 90 F9  JSR $F990                       A:A3 X:A3 Y:A3 P:A5 SP:FB PPU:295, 49 CYC:5675\n\
F990  A2 55     LDX #$55                        A:A3 X:A3 Y:A3 P:A5 SP:F9 PPU:313, 49 CYC:5681\n\
F992  A9 FF     LDA #$FF                        A:A3 X:55 Y:A3 P:25 SP:F9 PPU:319, 49 CYC:5683\n\
F994  85 01     STA $01 = FF                    A:FF X:55 Y:A3 P:A5 SP:F9 PPU:325, 49 CYC:5685\n\
F996  EA        NOP                             A:FF X:55 Y:A3 P:A5 SP:F9 PPU:334, 49 CYC:5688\n\
F997  24 01     BIT $01 = FF                    A:FF X:55 Y:A3 P:A5 SP:F9 PPU:340, 49 CYC:5690\n\
F999  38        SEC                             A:FF X:55 Y:A3 P:E5 SP:F9 PPU:  8, 50 CYC:5693\n\
F99A  A9 01     LDA #$01                        A:FF X:55 Y:A3 P:E5 SP:F9 PPU: 14, 50 CYC:5695\n\
F99C  60        RTS                             A:01 X:55 Y:A3 P:65 SP:F9 PPU: 20, 50 CYC:5697\n\
D42A  85 78     STA $78 = 7F                    A:01 X:55 Y:A3 P:65 SP:FB PPU: 38, 50 CYC:5703\n\
D42C  46 78     LSR $78 = 01                    A:01 X:55 Y:A3 P:65 SP:FB PPU: 47, 50 CYC:5706\n\
D42E  A5 78     LDA $78 = 00                    A:01 X:55 Y:A3 P:67 SP:FB PPU: 62, 50 CYC:5711\n\
D430  20 9D F9  JSR $F99D                       A:00 X:55 Y:A3 P:67 SP:FB PPU: 71, 50 CYC:5714\n\
F99D  90 1B     BCC $F9BA                       A:00 X:55 Y:A3 P:67 SP:F9 PPU: 89, 50 CYC:5720\n\
F99F  D0 19     BNE $F9BA                       A:00 X:55 Y:A3 P:67 SP:F9 PPU: 95, 50 CYC:5722\n\
F9A1  30 17     BMI $F9BA                       A:00 X:55 Y:A3 P:67 SP:F9 PPU:101, 50 CYC:5724\n\
F9A3  50 15     BVC $F9BA                       A:00 X:55 Y:A3 P:67 SP:F9 PPU:107, 50 CYC:5726\n\
F9A5  C9 00     CMP #$00                        A:00 X:55 Y:A3 P:67 SP:F9 PPU:113, 50 CYC:5728\n\
F9A7  D0 11     BNE $F9BA                       A:00 X:55 Y:A3 P:67 SP:F9 PPU:119, 50 CYC:5730\n\
F9A9  B8        CLV                             A:00 X:55 Y:A3 P:67 SP:F9 PPU:125, 50 CYC:5732\n\
F9AA  A9 AA     LDA #$AA                        A:00 X:55 Y:A3 P:27 SP:F9 PPU:131, 50 CYC:5734\n\
F9AC  60        RTS                             A:AA X:55 Y:A3 P:A5 SP:F9 PPU:137, 50 CYC:5736\n\
D433  C8        INY                             A:AA X:55 Y:A3 P:A5 SP:FB PPU:155, 50 CYC:5742\n\
D434  85 78     STA $78 = 00                    A:AA X:55 Y:A4 P:A5 SP:FB PPU:161, 50 CYC:5744\n\
D436  46 78     LSR $78 = AA                    A:AA X:55 Y:A4 P:A5 SP:FB PPU:170, 50 CYC:5747\n\
D438  A5 78     LDA $78 = 55                    A:AA X:55 Y:A4 P:24 SP:FB PPU:185, 50 CYC:5752\n\
D43A  20 AD F9  JSR $F9AD                       A:55 X:55 Y:A4 P:24 SP:FB PPU:194, 50 CYC:5755\n\
F9AD  B0 0B     BCS $F9BA                       A:55 X:55 Y:A4 P:24 SP:F9 PPU:212, 50 CYC:5761\n\
F9AF  F0 09     BEQ $F9BA                       A:55 X:55 Y:A4 P:24 SP:F9 PPU:218, 50 CYC:5763\n\
F9B1  30 07     BMI $F9BA                       A:55 X:55 Y:A4 P:24 SP:F9 PPU:224, 50 CYC:5765\n\
F9B3  70 05     BVS $F9BA                       A:55 X:55 Y:A4 P:24 SP:F9 PPU:230, 50 CYC:5767\n\
F9B5  C9 55     CMP #$55                        A:55 X:55 Y:A4 P:24 SP:F9 PPU:236, 50 CYC:5769\n\
F9B7  D0 01     BNE $F9BA                       A:55 X:55 Y:A4 P:27 SP:F9 PPU:242, 50 CYC:5771\n\
F9B9  60        RTS                             A:55 X:55 Y:A4 P:27 SP:F9 PPU:248, 50 CYC:5773\n\
D43D  C8        INY                             A:55 X:55 Y:A4 P:27 SP:FB PPU:266, 50 CYC:5779\n\
D43E  20 BD F9  JSR $F9BD                       A:55 X:55 Y:A5 P:A5 SP:FB PPU:272, 50 CYC:5781\n\
F9BD  24 01     BIT $01 = FF                    A:55 X:55 Y:A5 P:A5 SP:F9 PPU:290, 50 CYC:5787\n\
F9BF  38        SEC                             A:55 X:55 Y:A5 P:E5 SP:F9 PPU:299, 50 CYC:5790\n\
F9C0  A9 80     LDA #$80                        A:55 X:55 Y:A5 P:E5 SP:F9 PPU:305, 50 CYC:5792\n\
F9C2  60        RTS                             A:80 X:55 Y:A5 P:E5 SP:F9 PPU:311, 50 CYC:5794\n\
D441  85 78     STA $78 = 55                    A:80 X:55 Y:A5 P:E5 SP:FB PPU:329, 50 CYC:5800\n\
D443  06 78     ASL $78 = 80                    A:80 X:55 Y:A5 P:E5 SP:FB PPU:338, 50 CYC:5803\n\
D445  A5 78     LDA $78 = 00                    A:80 X:55 Y:A5 P:67 SP:FB PPU: 12, 51 CYC:5808\n\
D447  20 C3 F9  JSR $F9C3                       A:00 X:55 Y:A5 P:67 SP:FB PPU: 21, 51 CYC:5811\n\
F9C3  90 1C     BCC $F9E1                       A:00 X:55 Y:A5 P:67 SP:F9 PPU: 39, 51 CYC:5817\n\
F9C5  D0 1A     BNE $F9E1                       A:00 X:55 Y:A5 P:67 SP:F9 PPU: 45, 51 CYC:5819\n\
F9C7  30 18     BMI $F9E1                       A:00 X:55 Y:A5 P:67 SP:F9 PPU: 51, 51 CYC:5821\n\
F9C9  50 16     BVC $F9E1                       A:00 X:55 Y:A5 P:67 SP:F9 PPU: 57, 51 CYC:5823\n\
F9CB  C9 00     CMP #$00                        A:00 X:55 Y:A5 P:67 SP:F9 PPU: 63, 51 CYC:5825\n\
F9CD  D0 12     BNE $F9E1                       A:00 X:55 Y:A5 P:67 SP:F9 PPU: 69, 51 CYC:5827\n\
F9CF  B8        CLV                             A:00 X:55 Y:A5 P:67 SP:F9 PPU: 75, 51 CYC:5829\n\
F9D0  A9 55     LDA #$55                        A:00 X:55 Y:A5 P:27 SP:F9 PPU: 81, 51 CYC:5831\n\
F9D2  38        SEC                             A:55 X:55 Y:A5 P:25 SP:F9 PPU: 87, 51 CYC:5833\n\
F9D3  60        RTS                             A:55 X:55 Y:A5 P:25 SP:F9 PPU: 93, 51 CYC:5835\n\
D44A  C8        INY                             A:55 X:55 Y:A5 P:25 SP:FB PPU:111, 51 CYC:5841\n\
D44B  85 78     STA $78 = 00                    A:55 X:55 Y:A6 P:A5 SP:FB PPU:117, 51 CYC:5843\n\
D44D  06 78     ASL $78 = 55                    A:55 X:55 Y:A6 P:A5 SP:FB PPU:126, 51 CYC:5846\n\
D44F  A5 78     LDA $78 = AA                    A:55 X:55 Y:A6 P:A4 SP:FB PPU:141, 51 CYC:5851\n\
D451  20 D4 F9  JSR $F9D4                       A:AA X:55 Y:A6 P:A4 SP:FB PPU:150, 51 CYC:5854\n\
F9D4  B0 0B     BCS $F9E1                       A:AA X:55 Y:A6 P:A4 SP:F9 PPU:168, 51 CYC:5860\n\
F9D6  F0 09     BEQ $F9E1                       A:AA X:55 Y:A6 P:A4 SP:F9 PPU:174, 51 CYC:5862\n\
F9D8  10 07     BPL $F9E1                       A:AA X:55 Y:A6 P:A4 SP:F9 PPU:180, 51 CYC:5864\n\
F9DA  70 05     BVS $F9E1                       A:AA X:55 Y:A6 P:A4 SP:F9 PPU:186, 51 CYC:5866\n\
F9DC  C9 AA     CMP #$AA                        A:AA X:55 Y:A6 P:A4 SP:F9 PPU:192, 51 CYC:5868\n\
F9DE  D0 01     BNE $F9E1                       A:AA X:55 Y:A6 P:27 SP:F9 PPU:198, 51 CYC:5870\n\
F9E0  60        RTS                             A:AA X:55 Y:A6 P:27 SP:F9 PPU:204, 51 CYC:5872\n\
D454  C8        INY                             A:AA X:55 Y:A6 P:27 SP:FB PPU:222, 51 CYC:5878\n\
D455  20 E4 F9  JSR $F9E4                       A:AA X:55 Y:A7 P:A5 SP:FB PPU:228, 51 CYC:5880\n\
F9E4  24 01     BIT $01 = FF                    A:AA X:55 Y:A7 P:A5 SP:F9 PPU:246, 51 CYC:5886\n\
F9E6  38        SEC                             A:AA X:55 Y:A7 P:E5 SP:F9 PPU:255, 51 CYC:5889\n\
F9E7  A9 01     LDA #$01                        A:AA X:55 Y:A7 P:E5 SP:F9 PPU:261, 51 CYC:5891\n\
F9E9  60        RTS                             A:01 X:55 Y:A7 P:65 SP:F9 PPU:267, 51 CYC:5893\n\
D458  85 78     STA $78 = AA                    A:01 X:55 Y:A7 P:65 SP:FB PPU:285, 51 CYC:5899\n\
D45A  66 78     ROR $78 = 01                    A:01 X:55 Y:A7 P:65 SP:FB PPU:294, 51 CYC:5902\n\
D45C  A5 78     LDA $78 = 80                    A:01 X:55 Y:A7 P:E5 SP:FB PPU:309, 51 CYC:5907\n\
D45E  20 EA F9  JSR $F9EA                       A:80 X:55 Y:A7 P:E5 SP:FB PPU:318, 51 CYC:5910\n\
F9EA  90 1C     BCC $FA08                       A:80 X:55 Y:A7 P:E5 SP:F9 PPU:336, 51 CYC:5916\n\
F9EC  F0 1A     BEQ $FA08                       A:80 X:55 Y:A7 P:E5 SP:F9 PPU:  1, 52 CYC:5918\n\
F9EE  10 18     BPL $FA08                       A:80 X:55 Y:A7 P:E5 SP:F9 PPU:  7, 52 CYC:5920\n\
F9F0  50 16     BVC $FA08                       A:80 X:55 Y:A7 P:E5 SP:F9 PPU: 13, 52 CYC:5922\n\
F9F2  C9 80     CMP #$80                        A:80 X:55 Y:A7 P:E5 SP:F9 PPU: 19, 52 CYC:5924\n\
F9F4  D0 12     BNE $FA08                       A:80 X:55 Y:A7 P:67 SP:F9 PPU: 25, 52 CYC:5926\n\
F9F6  B8        CLV                             A:80 X:55 Y:A7 P:67 SP:F9 PPU: 31, 52 CYC:5928\n\
F9F7  18        CLC                             A:80 X:55 Y:A7 P:27 SP:F9 PPU: 37, 52 CYC:5930\n\
F9F8  A9 55     LDA #$55                        A:80 X:55 Y:A7 P:26 SP:F9 PPU: 43, 52 CYC:5932\n\
F9FA  60        RTS                             A:55 X:55 Y:A7 P:24 SP:F9 PPU: 49, 52 CYC:5934\n\
D461  C8        INY                             A:55 X:55 Y:A7 P:24 SP:FB PPU: 67, 52 CYC:5940\n\
D462  85 78     STA $78 = 80                    A:55 X:55 Y:A8 P:A4 SP:FB PPU: 73, 52 CYC:5942\n\
D464  66 78     ROR $78 = 55                    A:55 X:55 Y:A8 P:A4 SP:FB PPU: 82, 52 CYC:5945\n\
D466  A5 78     LDA $78 = 2A                    A:55 X:55 Y:A8 P:25 SP:FB PPU: 97, 52 CYC:5950\n\
D468  20 FB F9  JSR $F9FB                       A:2A X:55 Y:A8 P:25 SP:FB PPU:106, 52 CYC:5953\n\
F9FB  90 0B     BCC $FA08                       A:2A X:55 Y:A8 P:25 SP:F9 PPU:124, 52 CYC:5959\n\
F9FD  F0 09     BEQ $FA08                       A:2A X:55 Y:A8 P:25 SP:F9 PPU:130, 52 CYC:5961\n\
F9FF  30 07     BMI $FA08                       A:2A X:55 Y:A8 P:25 SP:F9 PPU:136, 52 CYC:5963\n\
FA01  70 05     BVS $FA08                       A:2A X:55 Y:A8 P:25 SP:F9 PPU:142, 52 CYC:5965\n\
FA03  C9 2A     CMP #$2A                        A:2A X:55 Y:A8 P:25 SP:F9 PPU:148, 52 CYC:5967\n\
FA05  D0 01     BNE $FA08                       A:2A X:55 Y:A8 P:27 SP:F9 PPU:154, 52 CYC:5969\n\
FA07  60        RTS                             A:2A X:55 Y:A8 P:27 SP:F9 PPU:160, 52 CYC:5971\n\
D46B  C8        INY                             A:2A X:55 Y:A8 P:27 SP:FB PPU:178, 52 CYC:5977\n\
D46C  20 0A FA  JSR $FA0A                       A:2A X:55 Y:A9 P:A5 SP:FB PPU:184, 52 CYC:5979\n\
FA0A  24 01     BIT $01 = FF                    A:2A X:55 Y:A9 P:A5 SP:F9 PPU:202, 52 CYC:5985\n\
FA0C  38        SEC                             A:2A X:55 Y:A9 P:E5 SP:F9 PPU:211, 52 CYC:5988\n\
FA0D  A9 80     LDA #$80                        A:2A X:55 Y:A9 P:E5 SP:F9 PPU:217, 52 CYC:5990\n\
FA0F  60        RTS                             A:80 X:55 Y:A9 P:E5 SP:F9 PPU:223, 52 CYC:5992\n\
D46F  85 78     STA $78 = 2A                    A:80 X:55 Y:A9 P:E5 SP:FB PPU:241, 52 CYC:5998\n\
D471  26 78     ROL $78 = 80                    A:80 X:55 Y:A9 P:E5 SP:FB PPU:250, 52 CYC:6001\n\
D473  A5 78     LDA $78 = 01                    A:80 X:55 Y:A9 P:65 SP:FB PPU:265, 52 CYC:6006\n\
D475  20 10 FA  JSR $FA10                       A:01 X:55 Y:A9 P:65 SP:FB PPU:274, 52 CYC:6009\n\
FA10  90 1C     BCC $FA2E                       A:01 X:55 Y:A9 P:65 SP:F9 PPU:292, 52 CYC:6015\n\
FA12  F0 1A     BEQ $FA2E                       A:01 X:55 Y:A9 P:65 SP:F9 PPU:298, 52 CYC:6017\n\
FA14  30 18     BMI $FA2E                       A:01 X:55 Y:A9 P:65 SP:F9 PPU:304, 52 CYC:6019\n\
FA16  50 16     BVC $FA2E                       A:01 X:55 Y:A9 P:65 SP:F9 PPU:310, 52 CYC:6021\n\
FA18  C9 01     CMP #$01                        A:01 X:55 Y:A9 P:65 SP:F9 PPU:316, 52 CYC:6023\n\
FA1A  D0 12     BNE $FA2E                       A:01 X:55 Y:A9 P:67 SP:F9 PPU:322, 52 CYC:6025\n\
FA1C  B8        CLV                             A:01 X:55 Y:A9 P:67 SP:F9 PPU:328, 52 CYC:6027\n\
FA1D  18        CLC                             A:01 X:55 Y:A9 P:27 SP:F9 PPU:334, 52 CYC:6029\n\
FA1E  A9 55     LDA #$55                        A:01 X:55 Y:A9 P:26 SP:F9 PPU:340, 52 CYC:6031\n\
FA20  60        RTS                             A:55 X:55 Y:A9 P:24 SP:F9 PPU:  5, 53 CYC:6033\n\
D478  C8        INY                             A:55 X:55 Y:A9 P:24 SP:FB PPU: 23, 53 CYC:6039\n\
D479  85 78     STA $78 = 01                    A:55 X:55 Y:AA P:A4 SP:FB PPU: 29, 53 CYC:6041\n\
D47B  26 78     ROL $78 = 55                    A:55 X:55 Y:AA P:A4 SP:FB PPU: 38, 53 CYC:6044\n\
D47D  A5 78     LDA $78 = AA                    A:55 X:55 Y:AA P:A4 SP:FB PPU: 53, 53 CYC:6049\n\
D47F  20 21 FA  JSR $FA21                       A:AA X:55 Y:AA P:A4 SP:FB PPU: 62, 53 CYC:6052\n\
FA21  B0 0B     BCS $FA2E                       A:AA X:55 Y:AA P:A4 SP:F9 PPU: 80, 53 CYC:6058\n\
FA23  F0 09     BEQ $FA2E                       A:AA X:55 Y:AA P:A4 SP:F9 PPU: 86, 53 CYC:6060\n\
FA25  10 07     BPL $FA2E                       A:AA X:55 Y:AA P:A4 SP:F9 PPU: 92, 53 CYC:6062\n\
FA27  70 05     BVS $FA2E                       A:AA X:55 Y:AA P:A4 SP:F9 PPU: 98, 53 CYC:6064\n\
FA29  C9 AA     CMP #$AA                        A:AA X:55 Y:AA P:A4 SP:F9 PPU:104, 53 CYC:6066\n\
FA2B  D0 01     BNE $FA2E                       A:AA X:55 Y:AA P:27 SP:F9 PPU:110, 53 CYC:6068\n\
FA2D  60        RTS                             A:AA X:55 Y:AA P:27 SP:F9 PPU:116, 53 CYC:6070\n\
D482  A9 FF     LDA #$FF                        A:AA X:55 Y:AA P:27 SP:FB PPU:134, 53 CYC:6076\n\
D484  85 78     STA $78 = AA                    A:FF X:55 Y:AA P:A5 SP:FB PPU:140, 53 CYC:6078\n\
D486  85 01     STA $01 = FF                    A:FF X:55 Y:AA P:A5 SP:FB PPU:149, 53 CYC:6081\n\
D488  24 01     BIT $01 = FF                    A:FF X:55 Y:AA P:A5 SP:FB PPU:158, 53 CYC:6084\n\
D48A  38        SEC                             A:FF X:55 Y:AA P:E5 SP:FB PPU:167, 53 CYC:6087\n\
D48B  E6 78     INC $78 = FF                    A:FF X:55 Y:AA P:E5 SP:FB PPU:173, 53 CYC:6089\n\
D48D  D0 0C     BNE $D49B                       A:FF X:55 Y:AA P:67 SP:FB PPU:188, 53 CYC:6094\n\
D48F  30 0A     BMI $D49B                       A:FF X:55 Y:AA P:67 SP:FB PPU:194, 53 CYC:6096\n\
D491  50 08     BVC $D49B                       A:FF X:55 Y:AA P:67 SP:FB PPU:200, 53 CYC:6098\n\
D493  90 06     BCC $D49B                       A:FF X:55 Y:AA P:67 SP:FB PPU:206, 53 CYC:6100\n\
D495  A5 78     LDA $78 = 00                    A:FF X:55 Y:AA P:67 SP:FB PPU:212, 53 CYC:6102\n\
D497  C9 00     CMP #$00                        A:00 X:55 Y:AA P:67 SP:FB PPU:221, 53 CYC:6105\n\
D499  F0 04     BEQ $D49F                       A:00 X:55 Y:AA P:67 SP:FB PPU:227, 53 CYC:6107\n\
D49F  A9 7F     LDA #$7F                        A:00 X:55 Y:AA P:67 SP:FB PPU:236, 53 CYC:6110\n\
D4A1  85 78     STA $78 = 00                    A:7F X:55 Y:AA P:65 SP:FB PPU:242, 53 CYC:6112\n\
D4A3  B8        CLV                             A:7F X:55 Y:AA P:65 SP:FB PPU:251, 53 CYC:6115\n\
D4A4  18        CLC                             A:7F X:55 Y:AA P:25 SP:FB PPU:257, 53 CYC:6117\n\
D4A5  E6 78     INC $78 = 7F                    A:7F X:55 Y:AA P:24 SP:FB PPU:263, 53 CYC:6119\n\
D4A7  F0 0C     BEQ $D4B5                       A:7F X:55 Y:AA P:A4 SP:FB PPU:278, 53 CYC:6124\n\
D4A9  10 0A     BPL $D4B5                       A:7F X:55 Y:AA P:A4 SP:FB PPU:284, 53 CYC:6126\n\
D4AB  70 08     BVS $D4B5                       A:7F X:55 Y:AA P:A4 SP:FB PPU:290, 53 CYC:6128\n\
D4AD  B0 06     BCS $D4B5                       A:7F X:55 Y:AA P:A4 SP:FB PPU:296, 53 CYC:6130\n\
D4AF  A5 78     LDA $78 = 80                    A:7F X:55 Y:AA P:A4 SP:FB PPU:302, 53 CYC:6132\n\
D4B1  C9 80     CMP #$80                        A:80 X:55 Y:AA P:A4 SP:FB PPU:311, 53 CYC:6135\n\
D4B3  F0 04     BEQ $D4B9                       A:80 X:55 Y:AA P:27 SP:FB PPU:317, 53 CYC:6137\n\
D4B9  A9 00     LDA #$00                        A:80 X:55 Y:AA P:27 SP:FB PPU:326, 53 CYC:6140\n\
D4BB  85 78     STA $78 = 80                    A:00 X:55 Y:AA P:27 SP:FB PPU:332, 53 CYC:6142\n\
D4BD  24 01     BIT $01 = FF                    A:00 X:55 Y:AA P:27 SP:FB PPU:  0, 54 CYC:6145\n\
D4BF  38        SEC                             A:00 X:55 Y:AA P:E7 SP:FB PPU:  9, 54 CYC:6148\n\
D4C0  C6 78     DEC $78 = 00                    A:00 X:55 Y:AA P:E7 SP:FB PPU: 15, 54 CYC:6150\n\
D4C2  F0 0C     BEQ $D4D0                       A:00 X:55 Y:AA P:E5 SP:FB PPU: 30, 54 CYC:6155\n\
D4C4  10 0A     BPL $D4D0                       A:00 X:55 Y:AA P:E5 SP:FB PPU: 36, 54 CYC:6157\n\
D4C6  50 08     BVC $D4D0                       A:00 X:55 Y:AA P:E5 SP:FB PPU: 42, 54 CYC:6159\n\
D4C8  90 06     BCC $D4D0                       A:00 X:55 Y:AA P:E5 SP:FB PPU: 48, 54 CYC:6161\n\
D4CA  A5 78     LDA $78 = FF                    A:00 X:55 Y:AA P:E5 SP:FB PPU: 54, 54 CYC:6163\n\
D4CC  C9 FF     CMP #$FF                        A:FF X:55 Y:AA P:E5 SP:FB PPU: 63, 54 CYC:6166\n\
D4CE  F0 04     BEQ $D4D4                       A:FF X:55 Y:AA P:67 SP:FB PPU: 69, 54 CYC:6168\n\
D4D4  A9 80     LDA #$80                        A:FF X:55 Y:AA P:67 SP:FB PPU: 78, 54 CYC:6171\n\
D4D6  85 78     STA $78 = FF                    A:80 X:55 Y:AA P:E5 SP:FB PPU: 84, 54 CYC:6173\n\
D4D8  B8        CLV                             A:80 X:55 Y:AA P:E5 SP:FB PPU: 93, 54 CYC:6176\n\
D4D9  18        CLC                             A:80 X:55 Y:AA P:A5 SP:FB PPU: 99, 54 CYC:6178\n\
D4DA  C6 78     DEC $78 = 80                    A:80 X:55 Y:AA P:A4 SP:FB PPU:105, 54 CYC:6180\n\
D4DC  F0 0C     BEQ $D4EA                       A:80 X:55 Y:AA P:24 SP:FB PPU:120, 54 CYC:6185\n\
D4DE  30 0A     BMI $D4EA                       A:80 X:55 Y:AA P:24 SP:FB PPU:126, 54 CYC:6187\n\
D4E0  70 08     BVS $D4EA                       A:80 X:55 Y:AA P:24 SP:FB PPU:132, 54 CYC:6189\n\
D4E2  B0 06     BCS $D4EA                       A:80 X:55 Y:AA P:24 SP:FB PPU:138, 54 CYC:6191\n\
D4E4  A5 78     LDA $78 = 7F                    A:80 X:55 Y:AA P:24 SP:FB PPU:144, 54 CYC:6193\n\
D4E6  C9 7F     CMP #$7F                        A:7F X:55 Y:AA P:24 SP:FB PPU:153, 54 CYC:6196\n\
D4E8  F0 04     BEQ $D4EE                       A:7F X:55 Y:AA P:27 SP:FB PPU:159, 54 CYC:6198\n\
D4EE  A9 01     LDA #$01                        A:7F X:55 Y:AA P:27 SP:FB PPU:168, 54 CYC:6201\n\
D4F0  85 78     STA $78 = 7F                    A:01 X:55 Y:AA P:25 SP:FB PPU:174, 54 CYC:6203\n\
D4F2  C6 78     DEC $78 = 01                    A:01 X:55 Y:AA P:25 SP:FB PPU:183, 54 CYC:6206\n\
D4F4  F0 04     BEQ $D4FA                       A:01 X:55 Y:AA P:27 SP:FB PPU:198, 54 CYC:6211\n\
D4FA  60        RTS                             A:01 X:55 Y:AA P:27 SP:FB PPU:207, 54 CYC:6214\n\
C615  20 FB D4  JSR $D4FB                       A:01 X:55 Y:AA P:27 SP:FD PPU:225, 54 CYC:6220\n\
D4FB  A9 55     LDA #$55                        A:01 X:55 Y:AA P:27 SP:FB PPU:243, 54 CYC:6226\n\
D4FD  8D 78 06  STA $0678 = 00                  A:55 X:55 Y:AA P:25 SP:FB PPU:249, 54 CYC:6228\n\
D500  A9 FF     LDA #$FF                        A:55 X:55 Y:AA P:25 SP:FB PPU:261, 54 CYC:6232\n\
D502  85 01     STA $01 = FF                    A:FF X:55 Y:AA P:A5 SP:FB PPU:267, 54 CYC:6234\n\
D504  24 01     BIT $01 = FF                    A:FF X:55 Y:AA P:A5 SP:FB PPU:276, 54 CYC:6237\n\
D506  A0 11     LDY #$11                        A:FF X:55 Y:AA P:E5 SP:FB PPU:285, 54 CYC:6240\n\
D508  A2 23     LDX #$23                        A:FF X:55 Y:11 P:65 SP:FB PPU:291, 54 CYC:6242\n\
D50A  A9 00     LDA #$00                        A:FF X:23 Y:11 P:65 SP:FB PPU:297, 54 CYC:6244\n\
D50C  AD 78 06  LDA $0678 = 55                  A:00 X:23 Y:11 P:67 SP:FB PPU:303, 54 CYC:6246\n\
D50F  F0 10     BEQ $D521                       A:55 X:23 Y:11 P:65 SP:FB PPU:315, 54 CYC:6250\n\
D511  30 0E     BMI $D521                       A:55 X:23 Y:11 P:65 SP:FB PPU:321, 54 CYC:6252\n\
D513  C9 55     CMP #$55                        A:55 X:23 Y:11 P:65 SP:FB PPU:327, 54 CYC:6254\n\
D515  D0 0A     BNE $D521                       A:55 X:23 Y:11 P:67 SP:FB PPU:333, 54 CYC:6256\n\
D517  C0 11     CPY #$11                        A:55 X:23 Y:11 P:67 SP:FB PPU:339, 54 CYC:6258\n\
D519  D0 06     BNE $D521                       A:55 X:23 Y:11 P:67 SP:FB PPU:  4, 55 CYC:6260\n\
D51B  E0 23     CPX #$23                        A:55 X:23 Y:11 P:67 SP:FB PPU: 10, 55 CYC:6262\n\
D51D  50 02     BVC $D521                       A:55 X:23 Y:11 P:67 SP:FB PPU: 16, 55 CYC:6264\n\
D51F  F0 04     BEQ $D525                       A:55 X:23 Y:11 P:67 SP:FB PPU: 22, 55 CYC:6266\n\
D525  A9 46     LDA #$46                        A:55 X:23 Y:11 P:67 SP:FB PPU: 31, 55 CYC:6269\n\
D527  24 01     BIT $01 = FF                    A:46 X:23 Y:11 P:65 SP:FB PPU: 37, 55 CYC:6271\n\
D529  8D 78 06  STA $0678 = 55                  A:46 X:23 Y:11 P:E5 SP:FB PPU: 46, 55 CYC:6274\n\
D52C  F0 0B     BEQ $D539                       A:46 X:23 Y:11 P:E5 SP:FB PPU: 58, 55 CYC:6278\n\
D52E  10 09     BPL $D539                       A:46 X:23 Y:11 P:E5 SP:FB PPU: 64, 55 CYC:6280\n\
D530  50 07     BVC $D539                       A:46 X:23 Y:11 P:E5 SP:FB PPU: 70, 55 CYC:6282\n\
D532  AD 78 06  LDA $0678 = 46                  A:46 X:23 Y:11 P:E5 SP:FB PPU: 76, 55 CYC:6284\n\
D535  C9 46     CMP #$46                        A:46 X:23 Y:11 P:65 SP:FB PPU: 88, 55 CYC:6288\n\
D537  F0 04     BEQ $D53D                       A:46 X:23 Y:11 P:67 SP:FB PPU: 94, 55 CYC:6290\n\
D53D  A9 55     LDA #$55                        A:46 X:23 Y:11 P:67 SP:FB PPU:103, 55 CYC:6293\n\
D53F  8D 78 06  STA $0678 = 46                  A:55 X:23 Y:11 P:65 SP:FB PPU:109, 55 CYC:6295\n\
D542  24 01     BIT $01 = FF                    A:55 X:23 Y:11 P:65 SP:FB PPU:121, 55 CYC:6299\n\
D544  A9 11     LDA #$11                        A:55 X:23 Y:11 P:E5 SP:FB PPU:130, 55 CYC:6302\n\
D546  A2 23     LDX #$23                        A:11 X:23 Y:11 P:65 SP:FB PPU:136, 55 CYC:6304\n\
D548  A0 00     LDY #$00                        A:11 X:23 Y:11 P:65 SP:FB PPU:142, 55 CYC:6306\n\
D54A  AC 78 06  LDY $0678 = 55                  A:11 X:23 Y:00 P:67 SP:FB PPU:148, 55 CYC:6308\n\
D54D  F0 10     BEQ $D55F                       A:11 X:23 Y:55 P:65 SP:FB PPU:160, 55 CYC:6312\n\
D54F  30 0E     BMI $D55F                       A:11 X:23 Y:55 P:65 SP:FB PPU:166, 55 CYC:6314\n\
D551  C0 55     CPY #$55                        A:11 X:23 Y:55 P:65 SP:FB PPU:172, 55 CYC:6316\n\
D553  D0 0A     BNE $D55F                       A:11 X:23 Y:55 P:67 SP:FB PPU:178, 55 CYC:6318\n\
D555  C9 11     CMP #$11                        A:11 X:23 Y:55 P:67 SP:FB PPU:184, 55 CYC:6320\n\
D557  D0 06     BNE $D55F                       A:11 X:23 Y:55 P:67 SP:FB PPU:190, 55 CYC:6322\n\
D559  E0 23     CPX #$23                        A:11 X:23 Y:55 P:67 SP:FB PPU:196, 55 CYC:6324\n\
D55B  50 02     BVC $D55F                       A:11 X:23 Y:55 P:67 SP:FB PPU:202, 55 CYC:6326\n\
D55D  F0 04     BEQ $D563                       A:11 X:23 Y:55 P:67 SP:FB PPU:208, 55 CYC:6328\n\
D563  A0 46     LDY #$46                        A:11 X:23 Y:55 P:67 SP:FB PPU:217, 55 CYC:6331\n\
D565  24 01     BIT $01 = FF                    A:11 X:23 Y:46 P:65 SP:FB PPU:223, 55 CYC:6333\n\
D567  8C 78 06  STY $0678 = 55                  A:11 X:23 Y:46 P:E5 SP:FB PPU:232, 55 CYC:6336\n\
D56A  F0 0B     BEQ $D577                       A:11 X:23 Y:46 P:E5 SP:FB PPU:244, 55 CYC:6340\n\
D56C  10 09     BPL $D577                       A:11 X:23 Y:46 P:E5 SP:FB PPU:250, 55 CYC:6342\n\
D56E  50 07     BVC $D577                       A:11 X:23 Y:46 P:E5 SP:FB PPU:256, 55 CYC:6344\n\
D570  AC 78 06  LDY $0678 = 46                  A:11 X:23 Y:46 P:E5 SP:FB PPU:262, 55 CYC:6346\n\
D573  C0 46     CPY #$46                        A:11 X:23 Y:46 P:65 SP:FB PPU:274, 55 CYC:6350\n\
D575  F0 04     BEQ $D57B                       A:11 X:23 Y:46 P:67 SP:FB PPU:280, 55 CYC:6352\n\
D57B  24 01     BIT $01 = FF                    A:11 X:23 Y:46 P:67 SP:FB PPU:289, 55 CYC:6355\n\
D57D  A9 55     LDA #$55                        A:11 X:23 Y:46 P:E5 SP:FB PPU:298, 55 CYC:6358\n\
D57F  8D 78 06  STA $0678 = 46                  A:55 X:23 Y:46 P:65 SP:FB PPU:304, 55 CYC:6360\n\
D582  A0 11     LDY #$11                        A:55 X:23 Y:46 P:65 SP:FB PPU:316, 55 CYC:6364\n\
D584  A9 23     LDA #$23                        A:55 X:23 Y:11 P:65 SP:FB PPU:322, 55 CYC:6366\n\
D586  A2 00     LDX #$00                        A:23 X:23 Y:11 P:65 SP:FB PPU:328, 55 CYC:6368\n\
D588  AE 78 06  LDX $0678 = 55                  A:23 X:00 Y:11 P:67 SP:FB PPU:334, 55 CYC:6370\n\
D58B  F0 10     BEQ $D59D                       A:23 X:55 Y:11 P:65 SP:FB PPU:  5, 56 CYC:6374\n\
D58D  30 0E     BMI $D59D                       A:23 X:55 Y:11 P:65 SP:FB PPU: 11, 56 CYC:6376\n\
D58F  E0 55     CPX #$55                        A:23 X:55 Y:11 P:65 SP:FB PPU: 17, 56 CYC:6378\n\
D591  D0 0A     BNE $D59D                       A:23 X:55 Y:11 P:67 SP:FB PPU: 23, 56 CYC:6380\n\
D593  C0 11     CPY #$11                        A:23 X:55 Y:11 P:67 SP:FB PPU: 29, 56 CYC:6382\n\
D595  D0 06     BNE $D59D                       A:23 X:55 Y:11 P:67 SP:FB PPU: 35, 56 CYC:6384\n\
D597  C9 23     CMP #$23                        A:23 X:55 Y:11 P:67 SP:FB PPU: 41, 56 CYC:6386\n\
D599  50 02     BVC $D59D                       A:23 X:55 Y:11 P:67 SP:FB PPU: 47, 56 CYC:6388\n\
D59B  F0 04     BEQ $D5A1                       A:23 X:55 Y:11 P:67 SP:FB PPU: 53, 56 CYC:6390\n\
D5A1  A2 46     LDX #$46                        A:23 X:55 Y:11 P:67 SP:FB PPU: 62, 56 CYC:6393\n\
D5A3  24 01     BIT $01 = FF                    A:23 X:46 Y:11 P:65 SP:FB PPU: 68, 56 CYC:6395\n\
D5A5  8E 78 06  STX $0678 = 55                  A:23 X:46 Y:11 P:E5 SP:FB PPU: 77, 56 CYC:6398\n\
D5A8  F0 0B     BEQ $D5B5                       A:23 X:46 Y:11 P:E5 SP:FB PPU: 89, 56 CYC:6402\n\
D5AA  10 09     BPL $D5B5                       A:23 X:46 Y:11 P:E5 SP:FB PPU: 95, 56 CYC:6404\n\
D5AC  50 07     BVC $D5B5                       A:23 X:46 Y:11 P:E5 SP:FB PPU:101, 56 CYC:6406\n\
D5AE  AE 78 06  LDX $0678 = 46                  A:23 X:46 Y:11 P:E5 SP:FB PPU:107, 56 CYC:6408\n\
D5B1  E0 46     CPX #$46                        A:23 X:46 Y:11 P:65 SP:FB PPU:119, 56 CYC:6412\n\
D5B3  F0 04     BEQ $D5B9                       A:23 X:46 Y:11 P:67 SP:FB PPU:125, 56 CYC:6414\n\
D5B9  A9 C0     LDA #$C0                        A:23 X:46 Y:11 P:67 SP:FB PPU:134, 56 CYC:6417\n\
D5BB  8D 78 06  STA $0678 = 46                  A:C0 X:46 Y:11 P:E5 SP:FB PPU:140, 56 CYC:6419\n\
D5BE  A2 33     LDX #$33                        A:C0 X:46 Y:11 P:E5 SP:FB PPU:152, 56 CYC:6423\n\
D5C0  A0 88     LDY #$88                        A:C0 X:33 Y:11 P:65 SP:FB PPU:158, 56 CYC:6425\n\
D5C2  A9 05     LDA #$05                        A:C0 X:33 Y:88 P:E5 SP:FB PPU:164, 56 CYC:6427\n\
D5C4  2C 78 06  BIT $0678 = C0                  A:05 X:33 Y:88 P:65 SP:FB PPU:170, 56 CYC:6429\n\
D5C7  10 10     BPL $D5D9                       A:05 X:33 Y:88 P:E7 SP:FB PPU:182, 56 CYC:6433\n\
D5C9  50 0E     BVC $D5D9                       A:05 X:33 Y:88 P:E7 SP:FB PPU:188, 56 CYC:6435\n\
D5CB  D0 0C     BNE $D5D9                       A:05 X:33 Y:88 P:E7 SP:FB PPU:194, 56 CYC:6437\n\
D5CD  C9 05     CMP #$05                        A:05 X:33 Y:88 P:E7 SP:FB PPU:200, 56 CYC:6439\n\
D5CF  D0 08     BNE $D5D9                       A:05 X:33 Y:88 P:67 SP:FB PPU:206, 56 CYC:6441\n\
D5D1  E0 33     CPX #$33                        A:05 X:33 Y:88 P:67 SP:FB PPU:212, 56 CYC:6443\n\
D5D3  D0 04     BNE $D5D9                       A:05 X:33 Y:88 P:67 SP:FB PPU:218, 56 CYC:6445\n\
D5D5  C0 88     CPY #$88                        A:05 X:33 Y:88 P:67 SP:FB PPU:224, 56 CYC:6447\n\
D5D7  F0 04     BEQ $D5DD                       A:05 X:33 Y:88 P:67 SP:FB PPU:230, 56 CYC:6449\n\
D5DD  A9 03     LDA #$03                        A:05 X:33 Y:88 P:67 SP:FB PPU:239, 56 CYC:6452\n\
D5DF  8D 78 06  STA $0678 = C0                  A:03 X:33 Y:88 P:65 SP:FB PPU:245, 56 CYC:6454\n\
D5E2  A9 01     LDA #$01                        A:03 X:33 Y:88 P:65 SP:FB PPU:257, 56 CYC:6458\n\
D5E4  2C 78 06  BIT $0678 = 03                  A:01 X:33 Y:88 P:65 SP:FB PPU:263, 56 CYC:6460\n\
D5E7  30 08     BMI $D5F1                       A:01 X:33 Y:88 P:25 SP:FB PPU:275, 56 CYC:6464\n\
D5E9  70 06     BVS $D5F1                       A:01 X:33 Y:88 P:25 SP:FB PPU:281, 56 CYC:6466\n\
D5EB  F0 04     BEQ $D5F1                       A:01 X:33 Y:88 P:25 SP:FB PPU:287, 56 CYC:6468\n\
D5ED  C9 01     CMP #$01                        A:01 X:33 Y:88 P:25 SP:FB PPU:293, 56 CYC:6470\n\
D5EF  F0 04     BEQ $D5F5                       A:01 X:33 Y:88 P:27 SP:FB PPU:299, 56 CYC:6472\n\
D5F5  A0 B8     LDY #$B8                        A:01 X:33 Y:88 P:27 SP:FB PPU:308, 56 CYC:6475\n\
D5F7  A9 AA     LDA #$AA                        A:01 X:33 Y:B8 P:A5 SP:FB PPU:314, 56 CYC:6477\n\
D5F9  8D 78 06  STA $0678 = 03                  A:AA X:33 Y:B8 P:A5 SP:FB PPU:320, 56 CYC:6479\n\
D5FC  20 B6 F7  JSR $F7B6                       A:AA X:33 Y:B8 P:A5 SP:FB PPU:332, 56 CYC:6483\n\
F7B6  18        CLC                             A:AA X:33 Y:B8 P:A5 SP:F9 PPU:  9, 57 CYC:6489\n\
F7B7  A9 FF     LDA #$FF                        A:AA X:33 Y:B8 P:A4 SP:F9 PPU: 15, 57 CYC:6491\n\
F7B9  85 01     STA $01 = FF                    A:FF X:33 Y:B8 P:A4 SP:F9 PPU: 21, 57 CYC:6493\n\
F7BB  24 01     BIT $01 = FF                    A:FF X:33 Y:B8 P:A4 SP:F9 PPU: 30, 57 CYC:6496\n\
F7BD  A9 55     LDA #$55                        A:FF X:33 Y:B8 P:E4 SP:F9 PPU: 39, 57 CYC:6499\n\
F7BF  60        RTS                             A:55 X:33 Y:B8 P:64 SP:F9 PPU: 45, 57 CYC:6501\n\
D5FF  0D 78 06  ORA $0678 = AA                  A:55 X:33 Y:B8 P:64 SP:FB PPU: 63, 57 CYC:6507\n\
D602  20 C0 F7  JSR $F7C0                       A:FF X:33 Y:B8 P:E4 SP:FB PPU: 75, 57 CYC:6511\n\
F7C0  B0 09     BCS $F7CB                       A:FF X:33 Y:B8 P:E4 SP:F9 PPU: 93, 57 CYC:6517\n\
F7C2  10 07     BPL $F7CB                       A:FF X:33 Y:B8 P:E4 SP:F9 PPU: 99, 57 CYC:6519\n\
F7C4  C9 FF     CMP #$FF                        A:FF X:33 Y:B8 P:E4 SP:F9 PPU:105, 57 CYC:6521\n\
F7C6  D0 03     BNE $F7CB                       A:FF X:33 Y:B8 P:67 SP:F9 PPU:111, 57 CYC:6523\n\
F7C8  50 01     BVC $F7CB                       A:FF X:33 Y:B8 P:67 SP:F9 PPU:117, 57 CYC:6525\n\
F7CA  60        RTS                             A:FF X:33 Y:B8 P:67 SP:F9 PPU:123, 57 CYC:6527\n\
D605  C8        INY                             A:FF X:33 Y:B8 P:67 SP:FB PPU:141, 57 CYC:6533\n\
D606  A9 00     LDA #$00                        A:FF X:33 Y:B9 P:E5 SP:FB PPU:147, 57 CYC:6535\n\
D608  8D 78 06  STA $0678 = AA                  A:00 X:33 Y:B9 P:67 SP:FB PPU:153, 57 CYC:6537\n\
D60B  20 CE F7  JSR $F7CE                       A:00 X:33 Y:B9 P:67 SP:FB PPU:165, 57 CYC:6541\n\
F7CE  38        SEC                             A:00 X:33 Y:B9 P:67 SP:F9 PPU:183, 57 CYC:6547\n\
F7CF  B8        CLV                             A:00 X:33 Y:B9 P:67 SP:F9 PPU:189, 57 CYC:6549\n\
F7D0  A9 00     LDA #$00                        A:00 X:33 Y:B9 P:27 SP:F9 PPU:195, 57 CYC:6551\n\
F7D2  60        RTS                             A:00 X:33 Y:B9 P:27 SP:F9 PPU:201, 57 CYC:6553\n\
D60E  0D 78 06  ORA $0678 = 00                  A:00 X:33 Y:B9 P:27 SP:FB PPU:219, 57 CYC:6559\n\
D611  20 D3 F7  JSR $F7D3                       A:00 X:33 Y:B9 P:27 SP:FB PPU:231, 57 CYC:6563\n\
F7D3  D0 07     BNE $F7DC                       A:00 X:33 Y:B9 P:27 SP:F9 PPU:249, 57 CYC:6569\n\
F7D5  70 05     BVS $F7DC                       A:00 X:33 Y:B9 P:27 SP:F9 PPU:255, 57 CYC:6571\n\
F7D7  90 03     BCC $F7DC                       A:00 X:33 Y:B9 P:27 SP:F9 PPU:261, 57 CYC:6573\n\
F7D9  30 01     BMI $F7DC                       A:00 X:33 Y:B9 P:27 SP:F9 PPU:267, 57 CYC:6575\n\
F7DB  60        RTS                             A:00 X:33 Y:B9 P:27 SP:F9 PPU:273, 57 CYC:6577\n\
D614  C8        INY                             A:00 X:33 Y:B9 P:27 SP:FB PPU:291, 57 CYC:6583\n\
D615  A9 AA     LDA #$AA                        A:00 X:33 Y:BA P:A5 SP:FB PPU:297, 57 CYC:6585\n\
D617  8D 78 06  STA $0678 = 00                  A:AA X:33 Y:BA P:A5 SP:FB PPU:303, 57 CYC:6587\n\
D61A  20 DF F7  JSR $F7DF                       A:AA X:33 Y:BA P:A5 SP:FB PPU:315, 57 CYC:6591\n\
F7DF  18        CLC                             A:AA X:33 Y:BA P:A5 SP:F9 PPU:333, 57 CYC:6597\n\
F7E0  24 01     BIT $01 = FF                    A:AA X:33 Y:BA P:A4 SP:F9 PPU:339, 57 CYC:6599\n\
F7E2  A9 55     LDA #$55                        A:AA X:33 Y:BA P:E4 SP:F9 PPU:  7, 58 CYC:6602\n\
F7E4  60        RTS                             A:55 X:33 Y:BA P:64 SP:F9 PPU: 13, 58 CYC:6604\n\
D61D  2D 78 06  AND $0678 = AA                  A:55 X:33 Y:BA P:64 SP:FB PPU: 31, 58 CYC:6610\n\
D620  20 E5 F7  JSR $F7E5                       A:00 X:33 Y:BA P:66 SP:FB PPU: 43, 58 CYC:6614\n\
F7E5  D0 07     BNE $F7EE                       A:00 X:33 Y:BA P:66 SP:F9 PPU: 61, 58 CYC:6620\n\
F7E7  50 05     BVC $F7EE                       A:00 X:33 Y:BA P:66 SP:F9 PPU: 67, 58 CYC:6622\n\
F7E9  B0 03     BCS $F7EE                       A:00 X:33 Y:BA P:66 SP:F9 PPU: 73, 58 CYC:6624\n\
F7EB  30 01     BMI $F7EE                       A:00 X:33 Y:BA P:66 SP:F9 PPU: 79, 58 CYC:6626\n\
F7ED  60        RTS                             A:00 X:33 Y:BA P:66 SP:F9 PPU: 85, 58 CYC:6628\n\
D623  C8        INY                             A:00 X:33 Y:BA P:66 SP:FB PPU:103, 58 CYC:6634\n\
D624  A9 EF     LDA #$EF                        A:00 X:33 Y:BB P:E4 SP:FB PPU:109, 58 CYC:6636\n\
D626  8D 78 06  STA $0678 = AA                  A:EF X:33 Y:BB P:E4 SP:FB PPU:115, 58 CYC:6638\n\
D629  20 F1 F7  JSR $F7F1                       A:EF X:33 Y:BB P:E4 SP:FB PPU:127, 58 CYC:6642\n\
F7F1  38        SEC                             A:EF X:33 Y:BB P:E4 SP:F9 PPU:145, 58 CYC:6648\n\
F7F2  B8        CLV                             A:EF X:33 Y:BB P:E5 SP:F9 PPU:151, 58 CYC:6650\n\
F7F3  A9 F8     LDA #$F8                        A:EF X:33 Y:BB P:A5 SP:F9 PPU:157, 58 CYC:6652\n\
F7F5  60        RTS                             A:F8 X:33 Y:BB P:A5 SP:F9 PPU:163, 58 CYC:6654\n\
D62C  2D 78 06  AND $0678 = EF                  A:F8 X:33 Y:BB P:A5 SP:FB PPU:181, 58 CYC:6660\n\
D62F  20 F6 F7  JSR $F7F6                       A:E8 X:33 Y:BB P:A5 SP:FB PPU:193, 58 CYC:6664\n\
F7F6  90 09     BCC $F801                       A:E8 X:33 Y:BB P:A5 SP:F9 PPU:211, 58 CYC:6670\n\
F7F8  10 07     BPL $F801                       A:E8 X:33 Y:BB P:A5 SP:F9 PPU:217, 58 CYC:6672\n\
F7FA  C9 E8     CMP #$E8                        A:E8 X:33 Y:BB P:A5 SP:F9 PPU:223, 58 CYC:6674\n\
F7FC  D0 03     BNE $F801                       A:E8 X:33 Y:BB P:27 SP:F9 PPU:229, 58 CYC:6676\n\
F7FE  70 01     BVS $F801                       A:E8 X:33 Y:BB P:27 SP:F9 PPU:235, 58 CYC:6678\n\
F800  60        RTS                             A:E8 X:33 Y:BB P:27 SP:F9 PPU:241, 58 CYC:6680\n\
D632  C8        INY                             A:E8 X:33 Y:BB P:27 SP:FB PPU:259, 58 CYC:6686\n\
D633  A9 AA     LDA #$AA                        A:E8 X:33 Y:BC P:A5 SP:FB PPU:265, 58 CYC:6688\n\
D635  8D 78 06  STA $0678 = EF                  A:AA X:33 Y:BC P:A5 SP:FB PPU:271, 58 CYC:6690\n\
D638  20 04 F8  JSR $F804                       A:AA X:33 Y:BC P:A5 SP:FB PPU:283, 58 CYC:6694\n\
F804  18        CLC                             A:AA X:33 Y:BC P:A5 SP:F9 PPU:301, 58 CYC:6700\n\
F805  24 01     BIT $01 = FF                    A:AA X:33 Y:BC P:A4 SP:F9 PPU:307, 58 CYC:6702\n\
F807  A9 5F     LDA #$5F                        A:AA X:33 Y:BC P:E4 SP:F9 PPU:316, 58 CYC:6705\n\
F809  60        RTS                             A:5F X:33 Y:BC P:64 SP:F9 PPU:322, 58 CYC:6707\n\
D63B  4D 78 06  EOR $0678 = AA                  A:5F X:33 Y:BC P:64 SP:FB PPU:340, 58 CYC:6713\n\
D63E  20 0A F8  JSR $F80A                       A:F5 X:33 Y:BC P:E4 SP:FB PPU: 11, 59 CYC:6717\n\
F80A  B0 09     BCS $F815                       A:F5 X:33 Y:BC P:E4 SP:F9 PPU: 29, 59 CYC:6723\n\
F80C  10 07     BPL $F815                       A:F5 X:33 Y:BC P:E4 SP:F9 PPU: 35, 59 CYC:6725\n\
F80E  C9 F5     CMP #$F5                        A:F5 X:33 Y:BC P:E4 SP:F9 PPU: 41, 59 CYC:6727\n\
F810  D0 03     BNE $F815                       A:F5 X:33 Y:BC P:67 SP:F9 PPU: 47, 59 CYC:6729\n\
F812  50 01     BVC $F815                       A:F5 X:33 Y:BC P:67 SP:F9 PPU: 53, 59 CYC:6731\n\
F814  60        RTS                             A:F5 X:33 Y:BC P:67 SP:F9 PPU: 59, 59 CYC:6733\n\
D641  C8        INY                             A:F5 X:33 Y:BC P:67 SP:FB PPU: 77, 59 CYC:6739\n\
D642  A9 70     LDA #$70                        A:F5 X:33 Y:BD P:E5 SP:FB PPU: 83, 59 CYC:6741\n\
D644  8D 78 06  STA $0678 = AA                  A:70 X:33 Y:BD P:65 SP:FB PPU: 89, 59 CYC:6743\n\
D647  20 18 F8  JSR $F818                       A:70 X:33 Y:BD P:65 SP:FB PPU:101, 59 CYC:6747\n\
F818  38        SEC                             A:70 X:33 Y:BD P:65 SP:F9 PPU:119, 59 CYC:6753\n\
F819  B8        CLV                             A:70 X:33 Y:BD P:65 SP:F9 PPU:125, 59 CYC:6755\n\
F81A  A9 70     LDA #$70                        A:70 X:33 Y:BD P:25 SP:F9 PPU:131, 59 CYC:6757\n\
F81C  60        RTS                             A:70 X:33 Y:BD P:25 SP:F9 PPU:137, 59 CYC:6759\n\
D64A  4D 78 06  EOR $0678 = 70                  A:70 X:33 Y:BD P:25 SP:FB PPU:155, 59 CYC:6765\n\
D64D  20 1D F8  JSR $F81D                       A:00 X:33 Y:BD P:27 SP:FB PPU:167, 59 CYC:6769\n\
F81D  D0 07     BNE $F826                       A:00 X:33 Y:BD P:27 SP:F9 PPU:185, 59 CYC:6775\n\
F81F  70 05     BVS $F826                       A:00 X:33 Y:BD P:27 SP:F9 PPU:191, 59 CYC:6777\n\
F821  90 03     BCC $F826                       A:00 X:33 Y:BD P:27 SP:F9 PPU:197, 59 CYC:6779\n\
F823  30 01     BMI $F826                       A:00 X:33 Y:BD P:27 SP:F9 PPU:203, 59 CYC:6781\n\
F825  60        RTS                             A:00 X:33 Y:BD P:27 SP:F9 PPU:209, 59 CYC:6783\n\
D650  C8        INY                             A:00 X:33 Y:BD P:27 SP:FB PPU:227, 59 CYC:6789\n\
D651  A9 69     LDA #$69                        A:00 X:33 Y:BE P:A5 SP:FB PPU:233, 59 CYC:6791\n\
D653  8D 78 06  STA $0678 = 70                  A:69 X:33 Y:BE P:25 SP:FB PPU:239, 59 CYC:6793\n\
D656  20 29 F8  JSR $F829                       A:69 X:33 Y:BE P:25 SP:FB PPU:251, 59 CYC:6797\n\
F829  18        CLC                             A:69 X:33 Y:BE P:25 SP:F9 PPU:269, 59 CYC:6803\n\
F82A  24 01     BIT $01 = FF                    A:69 X:33 Y:BE P:24 SP:F9 PPU:275, 59 CYC:6805\n\
F82C  A9 00     LDA #$00                        A:69 X:33 Y:BE P:E4 SP:F9 PPU:284, 59 CYC:6808\n\
F82E  60        RTS                             A:00 X:33 Y:BE P:66 SP:F9 PPU:290, 59 CYC:6810\n\
D659  6D 78 06  ADC $0678 = 69                  A:00 X:33 Y:BE P:66 SP:FB PPU:308, 59 CYC:6816\n\
D65C  20 2F F8  JSR $F82F                       A:69 X:33 Y:BE P:24 SP:FB PPU:320, 59 CYC:6820\n\
F82F  30 09     BMI $F83A                       A:69 X:33 Y:BE P:24 SP:F9 PPU:338, 59 CYC:6826\n\
F831  B0 07     BCS $F83A                       A:69 X:33 Y:BE P:24 SP:F9 PPU:  3, 60 CYC:6828\n\
F833  C9 69     CMP #$69                        A:69 X:33 Y:BE P:24 SP:F9 PPU:  9, 60 CYC:6830\n\
F835  D0 03     BNE $F83A                       A:69 X:33 Y:BE P:27 SP:F9 PPU: 15, 60 CYC:6832\n\
F837  70 01     BVS $F83A                       A:69 X:33 Y:BE P:27 SP:F9 PPU: 21, 60 CYC:6834\n\
F839  60        RTS                             A:69 X:33 Y:BE P:27 SP:F9 PPU: 27, 60 CYC:6836\n\
D65F  C8        INY                             A:69 X:33 Y:BE P:27 SP:FB PPU: 45, 60 CYC:6842\n\
D660  20 3D F8  JSR $F83D                       A:69 X:33 Y:BF P:A5 SP:FB PPU: 51, 60 CYC:6844\n\
F83D  38        SEC                             A:69 X:33 Y:BF P:A5 SP:F9 PPU: 69, 60 CYC:6850\n\
F83E  24 01     BIT $01 = FF                    A:69 X:33 Y:BF P:A5 SP:F9 PPU: 75, 60 CYC:6852\n\
F840  A9 00     LDA #$00                        A:69 X:33 Y:BF P:E5 SP:F9 PPU: 84, 60 CYC:6855\n\
F842  60        RTS                             A:00 X:33 Y:BF P:67 SP:F9 PPU: 90, 60 CYC:6857\n\
D663  6D 78 06  ADC $0678 = 69                  A:00 X:33 Y:BF P:67 SP:FB PPU:108, 60 CYC:6863\n\
D666  20 43 F8  JSR $F843                       A:6A X:33 Y:BF P:24 SP:FB PPU:120, 60 CYC:6867\n\
F843  30 09     BMI $F84E                       A:6A X:33 Y:BF P:24 SP:F9 PPU:138, 60 CYC:6873\n\
F845  B0 07     BCS $F84E                       A:6A X:33 Y:BF P:24 SP:F9 PPU:144, 60 CYC:6875\n\
F847  C9 6A     CMP #$6A                        A:6A X:33 Y:BF P:24 SP:F9 PPU:150, 60 CYC:6877\n\
F849  D0 03     BNE $F84E                       A:6A X:33 Y:BF P:27 SP:F9 PPU:156, 60 CYC:6879\n\
F84B  70 01     BVS $F84E                       A:6A X:33 Y:BF P:27 SP:F9 PPU:162, 60 CYC:6881\n\
F84D  60        RTS                             A:6A X:33 Y:BF P:27 SP:F9 PPU:168, 60 CYC:6883\n\
D669  C8        INY                             A:6A X:33 Y:BF P:27 SP:FB PPU:186, 60 CYC:6889\n\
D66A  A9 7F     LDA #$7F                        A:6A X:33 Y:C0 P:A5 SP:FB PPU:192, 60 CYC:6891\n\
D66C  8D 78 06  STA $0678 = 69                  A:7F X:33 Y:C0 P:25 SP:FB PPU:198, 60 CYC:6893\n\
D66F  20 51 F8  JSR $F851                       A:7F X:33 Y:C0 P:25 SP:FB PPU:210, 60 CYC:6897\n\
F851  38        SEC                             A:7F X:33 Y:C0 P:25 SP:F9 PPU:228, 60 CYC:6903\n\
F852  B8        CLV                             A:7F X:33 Y:C0 P:25 SP:F9 PPU:234, 60 CYC:6905\n\
F853  A9 7F     LDA #$7F                        A:7F X:33 Y:C0 P:25 SP:F9 PPU:240, 60 CYC:6907\n\
F855  60        RTS                             A:7F X:33 Y:C0 P:25 SP:F9 PPU:246, 60 CYC:6909\n\
D672  6D 78 06  ADC $0678 = 7F                  A:7F X:33 Y:C0 P:25 SP:FB PPU:264, 60 CYC:6915\n\
D675  20 56 F8  JSR $F856                       A:FF X:33 Y:C0 P:E4 SP:FB PPU:276, 60 CYC:6919\n\
F856  10 09     BPL $F861                       A:FF X:33 Y:C0 P:E4 SP:F9 PPU:294, 60 CYC:6925\n\
F858  B0 07     BCS $F861                       A:FF X:33 Y:C0 P:E4 SP:F9 PPU:300, 60 CYC:6927\n\
F85A  C9 FF     CMP #$FF                        A:FF X:33 Y:C0 P:E4 SP:F9 PPU:306, 60 CYC:6929\n\
F85C  D0 03     BNE $F861                       A:FF X:33 Y:C0 P:67 SP:F9 PPU:312, 60 CYC:6931\n\
F85E  50 01     BVC $F861                       A:FF X:33 Y:C0 P:67 SP:F9 PPU:318, 60 CYC:6933\n\
F860  60        RTS                             A:FF X:33 Y:C0 P:67 SP:F9 PPU:324, 60 CYC:6935\n\
D678  C8        INY                             A:FF X:33 Y:C0 P:67 SP:FB PPU:  1, 61 CYC:6941\n\
D679  A9 80     LDA #$80                        A:FF X:33 Y:C1 P:E5 SP:FB PPU:  7, 61 CYC:6943\n\
D67B  8D 78 06  STA $0678 = 7F                  A:80 X:33 Y:C1 P:E5 SP:FB PPU: 13, 61 CYC:6945\n\
D67E  20 64 F8  JSR $F864                       A:80 X:33 Y:C1 P:E5 SP:FB PPU: 25, 61 CYC:6949\n\
F864  18        CLC                             A:80 X:33 Y:C1 P:E5 SP:F9 PPU: 43, 61 CYC:6955\n\
F865  24 01     BIT $01 = FF                    A:80 X:33 Y:C1 P:E4 SP:F9 PPU: 49, 61 CYC:6957\n\
F867  A9 7F     LDA #$7F                        A:80 X:33 Y:C1 P:E4 SP:F9 PPU: 58, 61 CYC:6960\n\
F869  60        RTS                             A:7F X:33 Y:C1 P:64 SP:F9 PPU: 64, 61 CYC:6962\n\
D681  6D 78 06  ADC $0678 = 80                  A:7F X:33 Y:C1 P:64 SP:FB PPU: 82, 61 CYC:6968\n\
D684  20 6A F8  JSR $F86A                       A:FF X:33 Y:C1 P:A4 SP:FB PPU: 94, 61 CYC:6972\n\
F86A  10 09     BPL $F875                       A:FF X:33 Y:C1 P:A4 SP:F9 PPU:112, 61 CYC:6978\n\
F86C  B0 07     BCS $F875                       A:FF X:33 Y:C1 P:A4 SP:F9 PPU:118, 61 CYC:6980\n\
F86E  C9 FF     CMP #$FF                        A:FF X:33 Y:C1 P:A4 SP:F9 PPU:124, 61 CYC:6982\n\
F870  D0 03     BNE $F875                       A:FF X:33 Y:C1 P:27 SP:F9 PPU:130, 61 CYC:6984\n\
F872  70 01     BVS $F875                       A:FF X:33 Y:C1 P:27 SP:F9 PPU:136, 61 CYC:6986\n\
F874  60        RTS                             A:FF X:33 Y:C1 P:27 SP:F9 PPU:142, 61 CYC:6988\n\
D687  C8        INY                             A:FF X:33 Y:C1 P:27 SP:FB PPU:160, 61 CYC:6994\n\
D688  20 78 F8  JSR $F878                       A:FF X:33 Y:C2 P:A5 SP:FB PPU:166, 61 CYC:6996\n\
F878  38        SEC                             A:FF X:33 Y:C2 P:A5 SP:F9 PPU:184, 61 CYC:7002\n\
F879  B8        CLV                             A:FF X:33 Y:C2 P:A5 SP:F9 PPU:190, 61 CYC:7004\n\
F87A  A9 7F     LDA #$7F                        A:FF X:33 Y:C2 P:A5 SP:F9 PPU:196, 61 CYC:7006\n\
F87C  60        RTS                             A:7F X:33 Y:C2 P:25 SP:F9 PPU:202, 61 CYC:7008\n\
D68B  6D 78 06  ADC $0678 = 80                  A:7F X:33 Y:C2 P:25 SP:FB PPU:220, 61 CYC:7014\n\
D68E  20 7D F8  JSR $F87D                       A:00 X:33 Y:C2 P:27 SP:FB PPU:232, 61 CYC:7018\n\
F87D  D0 07     BNE $F886                       A:00 X:33 Y:C2 P:27 SP:F9 PPU:250, 61 CYC:7024\n\
F87F  30 05     BMI $F886                       A:00 X:33 Y:C2 P:27 SP:F9 PPU:256, 61 CYC:7026\n\
F881  70 03     BVS $F886                       A:00 X:33 Y:C2 P:27 SP:F9 PPU:262, 61 CYC:7028\n\
F883  90 01     BCC $F886                       A:00 X:33 Y:C2 P:27 SP:F9 PPU:268, 61 CYC:7030\n\
F885  60        RTS                             A:00 X:33 Y:C2 P:27 SP:F9 PPU:274, 61 CYC:7032\n\
D691  C8        INY                             A:00 X:33 Y:C2 P:27 SP:FB PPU:292, 61 CYC:7038\n\
D692  A9 40     LDA #$40                        A:00 X:33 Y:C3 P:A5 SP:FB PPU:298, 61 CYC:7040\n\
D694  8D 78 06  STA $0678 = 80                  A:40 X:33 Y:C3 P:25 SP:FB PPU:304, 61 CYC:7042\n\
D697  20 89 F8  JSR $F889                       A:40 X:33 Y:C3 P:25 SP:FB PPU:316, 61 CYC:7046\n\
F889  24 01     BIT $01 = FF                    A:40 X:33 Y:C3 P:25 SP:F9 PPU:334, 61 CYC:7052\n\
F88B  A9 40     LDA #$40                        A:40 X:33 Y:C3 P:E5 SP:F9 PPU:  2, 62 CYC:7055\n\
F88D  60        RTS                             A:40 X:33 Y:C3 P:65 SP:F9 PPU:  8, 62 CYC:7057\n\
D69A  CD 78 06  CMP $0678 = 40                  A:40 X:33 Y:C3 P:65 SP:FB PPU: 26, 62 CYC:7063\n\
D69D  20 8E F8  JSR $F88E                       A:40 X:33 Y:C3 P:67 SP:FB PPU: 38, 62 CYC:7067\n\
F88E  30 07     BMI $F897                       A:40 X:33 Y:C3 P:67 SP:F9 PPU: 56, 62 CYC:7073\n\
F890  90 05     BCC $F897                       A:40 X:33 Y:C3 P:67 SP:F9 PPU: 62, 62 CYC:7075\n\
F892  D0 03     BNE $F897                       A:40 X:33 Y:C3 P:67 SP:F9 PPU: 68, 62 CYC:7077\n\
F894  50 01     BVC $F897                       A:40 X:33 Y:C3 P:67 SP:F9 PPU: 74, 62 CYC:7079\n\
F896  60        RTS                             A:40 X:33 Y:C3 P:67 SP:F9 PPU: 80, 62 CYC:7081\n\
D6A0  C8        INY                             A:40 X:33 Y:C3 P:67 SP:FB PPU: 98, 62 CYC:7087\n\
D6A1  48        PHA                             A:40 X:33 Y:C4 P:E5 SP:FB PPU:104, 62 CYC:7089\n\
D6A2  A9 3F     LDA #$3F                        A:40 X:33 Y:C4 P:E5 SP:FA PPU:113, 62 CYC:7092\n\
D6A4  8D 78 06  STA $0678 = 40                  A:3F X:33 Y:C4 P:65 SP:FA PPU:119, 62 CYC:7094\n\
D6A7  68        PLA                             A:3F X:33 Y:C4 P:65 SP:FA PPU:131, 62 CYC:7098\n\
D6A8  20 9A F8  JSR $F89A                       A:40 X:33 Y:C4 P:65 SP:FB PPU:143, 62 CYC:7102\n\
F89A  B8        CLV                             A:40 X:33 Y:C4 P:65 SP:F9 PPU:161, 62 CYC:7108\n\
F89B  60        RTS                             A:40 X:33 Y:C4 P:25 SP:F9 PPU:167, 62 CYC:7110\n\
D6AB  CD 78 06  CMP $0678 = 3F                  A:40 X:33 Y:C4 P:25 SP:FB PPU:185, 62 CYC:7116\n\
D6AE  20 9C F8  JSR $F89C                       A:40 X:33 Y:C4 P:25 SP:FB PPU:197, 62 CYC:7120\n\
F89C  F0 07     BEQ $F8A5                       A:40 X:33 Y:C4 P:25 SP:F9 PPU:215, 62 CYC:7126\n\
F89E  30 05     BMI $F8A5                       A:40 X:33 Y:C4 P:25 SP:F9 PPU:221, 62 CYC:7128\n\
F8A0  90 03     BCC $F8A5                       A:40 X:33 Y:C4 P:25 SP:F9 PPU:227, 62 CYC:7130\n\
F8A2  70 01     BVS $F8A5                       A:40 X:33 Y:C4 P:25 SP:F9 PPU:233, 62 CYC:7132\n\
F8A4  60        RTS                             A:40 X:33 Y:C4 P:25 SP:F9 PPU:239, 62 CYC:7134\n\
D6B1  C8        INY                             A:40 X:33 Y:C4 P:25 SP:FB PPU:257, 62 CYC:7140\n\
D6B2  48        PHA                             A:40 X:33 Y:C5 P:A5 SP:FB PPU:263, 62 CYC:7142\n\
D6B3  A9 41     LDA #$41                        A:40 X:33 Y:C5 P:A5 SP:FA PPU:272, 62 CYC:7145\n\
D6B5  8D 78 06  STA $0678 = 3F                  A:41 X:33 Y:C5 P:25 SP:FA PPU:278, 62 CYC:7147\n\
D6B8  68        PLA                             A:41 X:33 Y:C5 P:25 SP:FA PPU:290, 62 CYC:7151\n\
D6B9  CD 78 06  CMP $0678 = 41                  A:40 X:33 Y:C5 P:25 SP:FB PPU:302, 62 CYC:7155\n\
D6BC  20 A8 F8  JSR $F8A8                       A:40 X:33 Y:C5 P:A4 SP:FB PPU:314, 62 CYC:7159\n\
F8A8  F0 05     BEQ $F8AF                       A:40 X:33 Y:C5 P:A4 SP:F9 PPU:332, 62 CYC:7165\n\
F8AA  10 03     BPL $F8AF                       A:40 X:33 Y:C5 P:A4 SP:F9 PPU:338, 62 CYC:7167\n\
F8AC  10 01     BPL $F8AF                       A:40 X:33 Y:C5 P:A4 SP:F9 PPU:  3, 63 CYC:7169\n\
F8AE  60        RTS                             A:40 X:33 Y:C5 P:A4 SP:F9 PPU:  9, 63 CYC:7171\n\
D6BF  C8        INY                             A:40 X:33 Y:C5 P:A4 SP:FB PPU: 27, 63 CYC:7177\n\
D6C0  48        PHA                             A:40 X:33 Y:C6 P:A4 SP:FB PPU: 33, 63 CYC:7179\n\
D6C1  A9 00     LDA #$00                        A:40 X:33 Y:C6 P:A4 SP:FA PPU: 42, 63 CYC:7182\n\
D6C3  8D 78 06  STA $0678 = 41                  A:00 X:33 Y:C6 P:26 SP:FA PPU: 48, 63 CYC:7184\n\
D6C6  68        PLA                             A:00 X:33 Y:C6 P:26 SP:FA PPU: 60, 63 CYC:7188\n\
D6C7  20 B2 F8  JSR $F8B2                       A:40 X:33 Y:C6 P:24 SP:FB PPU: 72, 63 CYC:7192\n\
F8B2  A9 80     LDA #$80                        A:40 X:33 Y:C6 P:24 SP:F9 PPU: 90, 63 CYC:7198\n\
F8B4  60        RTS                             A:80 X:33 Y:C6 P:A4 SP:F9 PPU: 96, 63 CYC:7200\n\
D6CA  CD 78 06  CMP $0678 = 00                  A:80 X:33 Y:C6 P:A4 SP:FB PPU:114, 63 CYC:7206\n\
D6CD  20 B5 F8  JSR $F8B5                       A:80 X:33 Y:C6 P:A5 SP:FB PPU:126, 63 CYC:7210\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:33 Y:C6 P:A5 SP:F9 PPU:144, 63 CYC:7216\n\
F8B7  10 03     BPL $F8BC                       A:80 X:33 Y:C6 P:A5 SP:F9 PPU:150, 63 CYC:7218\n\
F8B9  90 01     BCC $F8BC                       A:80 X:33 Y:C6 P:A5 SP:F9 PPU:156, 63 CYC:7220\n\
F8BB  60        RTS                             A:80 X:33 Y:C6 P:A5 SP:F9 PPU:162, 63 CYC:7222\n\
D6D0  C8        INY                             A:80 X:33 Y:C6 P:A5 SP:FB PPU:180, 63 CYC:7228\n\
D6D1  48        PHA                             A:80 X:33 Y:C7 P:A5 SP:FB PPU:186, 63 CYC:7230\n\
D6D2  A9 80     LDA #$80                        A:80 X:33 Y:C7 P:A5 SP:FA PPU:195, 63 CYC:7233\n\
D6D4  8D 78 06  STA $0678 = 00                  A:80 X:33 Y:C7 P:A5 SP:FA PPU:201, 63 CYC:7235\n\
D6D7  68        PLA                             A:80 X:33 Y:C7 P:A5 SP:FA PPU:213, 63 CYC:7239\n\
D6D8  CD 78 06  CMP $0678 = 80                  A:80 X:33 Y:C7 P:A5 SP:FB PPU:225, 63 CYC:7243\n\
D6DB  20 BF F8  JSR $F8BF                       A:80 X:33 Y:C7 P:27 SP:FB PPU:237, 63 CYC:7247\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:33 Y:C7 P:27 SP:F9 PPU:255, 63 CYC:7253\n\
F8C1  30 03     BMI $F8C6                       A:80 X:33 Y:C7 P:27 SP:F9 PPU:261, 63 CYC:7255\n\
F8C3  90 01     BCC $F8C6                       A:80 X:33 Y:C7 P:27 SP:F9 PPU:267, 63 CYC:7257\n\
F8C5  60        RTS                             A:80 X:33 Y:C7 P:27 SP:F9 PPU:273, 63 CYC:7259\n\
D6DE  C8        INY                             A:80 X:33 Y:C7 P:27 SP:FB PPU:291, 63 CYC:7265\n\
D6DF  48        PHA                             A:80 X:33 Y:C8 P:A5 SP:FB PPU:297, 63 CYC:7267\n\
D6E0  A9 81     LDA #$81                        A:80 X:33 Y:C8 P:A5 SP:FA PPU:306, 63 CYC:7270\n\
D6E2  8D 78 06  STA $0678 = 80                  A:81 X:33 Y:C8 P:A5 SP:FA PPU:312, 63 CYC:7272\n\
D6E5  68        PLA                             A:81 X:33 Y:C8 P:A5 SP:FA PPU:324, 63 CYC:7276\n\
D6E6  CD 78 06  CMP $0678 = 81                  A:80 X:33 Y:C8 P:A5 SP:FB PPU:336, 63 CYC:7280\n\
D6E9  20 C9 F8  JSR $F8C9                       A:80 X:33 Y:C8 P:A4 SP:FB PPU:  7, 64 CYC:7284\n\
F8C9  B0 05     BCS $F8D0                       A:80 X:33 Y:C8 P:A4 SP:F9 PPU: 25, 64 CYC:7290\n\
F8CB  F0 03     BEQ $F8D0                       A:80 X:33 Y:C8 P:A4 SP:F9 PPU: 31, 64 CYC:7292\n\
F8CD  10 01     BPL $F8D0                       A:80 X:33 Y:C8 P:A4 SP:F9 PPU: 37, 64 CYC:7294\n\
F8CF  60        RTS                             A:80 X:33 Y:C8 P:A4 SP:F9 PPU: 43, 64 CYC:7296\n\
D6EC  C8        INY                             A:80 X:33 Y:C8 P:A4 SP:FB PPU: 61, 64 CYC:7302\n\
D6ED  48        PHA                             A:80 X:33 Y:C9 P:A4 SP:FB PPU: 67, 64 CYC:7304\n\
D6EE  A9 7F     LDA #$7F                        A:80 X:33 Y:C9 P:A4 SP:FA PPU: 76, 64 CYC:7307\n\
D6F0  8D 78 06  STA $0678 = 81                  A:7F X:33 Y:C9 P:24 SP:FA PPU: 82, 64 CYC:7309\n\
D6F3  68        PLA                             A:7F X:33 Y:C9 P:24 SP:FA PPU: 94, 64 CYC:7313\n\
D6F4  CD 78 06  CMP $0678 = 7F                  A:80 X:33 Y:C9 P:A4 SP:FB PPU:106, 64 CYC:7317\n\
D6F7  20 D3 F8  JSR $F8D3                       A:80 X:33 Y:C9 P:25 SP:FB PPU:118, 64 CYC:7321\n\
F8D3  90 05     BCC $F8DA                       A:80 X:33 Y:C9 P:25 SP:F9 PPU:136, 64 CYC:7327\n\
F8D5  F0 03     BEQ $F8DA                       A:80 X:33 Y:C9 P:25 SP:F9 PPU:142, 64 CYC:7329\n\
F8D7  30 01     BMI $F8DA                       A:80 X:33 Y:C9 P:25 SP:F9 PPU:148, 64 CYC:7331\n\
F8D9  60        RTS                             A:80 X:33 Y:C9 P:25 SP:F9 PPU:154, 64 CYC:7333\n\
D6FA  C8        INY                             A:80 X:33 Y:C9 P:25 SP:FB PPU:172, 64 CYC:7339\n\
D6FB  A9 40     LDA #$40                        A:80 X:33 Y:CA P:A5 SP:FB PPU:178, 64 CYC:7341\n\
D6FD  8D 78 06  STA $0678 = 7F                  A:40 X:33 Y:CA P:25 SP:FB PPU:184, 64 CYC:7343\n\
D700  20 31 F9  JSR $F931                       A:40 X:33 Y:CA P:25 SP:FB PPU:196, 64 CYC:7347\n\
F931  24 01     BIT $01 = FF                    A:40 X:33 Y:CA P:25 SP:F9 PPU:214, 64 CYC:7353\n\
F933  A9 40     LDA #$40                        A:40 X:33 Y:CA P:E5 SP:F9 PPU:223, 64 CYC:7356\n\
F935  38        SEC                             A:40 X:33 Y:CA P:65 SP:F9 PPU:229, 64 CYC:7358\n\
F936  60        RTS                             A:40 X:33 Y:CA P:65 SP:F9 PPU:235, 64 CYC:7360\n\
D703  ED 78 06  SBC $0678 = 40                  A:40 X:33 Y:CA P:65 SP:FB PPU:253, 64 CYC:7366\n\
D706  20 37 F9  JSR $F937                       A:00 X:33 Y:CA P:27 SP:FB PPU:265, 64 CYC:7370\n\
F937  30 0B     BMI $F944                       A:00 X:33 Y:CA P:27 SP:F9 PPU:283, 64 CYC:7376\n\
F939  90 09     BCC $F944                       A:00 X:33 Y:CA P:27 SP:F9 PPU:289, 64 CYC:7378\n\
F93B  D0 07     BNE $F944                       A:00 X:33 Y:CA P:27 SP:F9 PPU:295, 64 CYC:7380\n\
F93D  70 05     BVS $F944                       A:00 X:33 Y:CA P:27 SP:F9 PPU:301, 64 CYC:7382\n\
F93F  C9 00     CMP #$00                        A:00 X:33 Y:CA P:27 SP:F9 PPU:307, 64 CYC:7384\n\
F941  D0 01     BNE $F944                       A:00 X:33 Y:CA P:27 SP:F9 PPU:313, 64 CYC:7386\n\
F943  60        RTS                             A:00 X:33 Y:CA P:27 SP:F9 PPU:319, 64 CYC:7388\n\
D709  C8        INY                             A:00 X:33 Y:CA P:27 SP:FB PPU:337, 64 CYC:7394\n\
D70A  A9 3F     LDA #$3F                        A:00 X:33 Y:CB P:A5 SP:FB PPU:  2, 65 CYC:7396\n\
D70C  8D 78 06  STA $0678 = 40                  A:3F X:33 Y:CB P:25 SP:FB PPU:  8, 65 CYC:7398\n\
D70F  20 47 F9  JSR $F947                       A:3F X:33 Y:CB P:25 SP:FB PPU: 20, 65 CYC:7402\n\
F947  B8        CLV                             A:3F X:33 Y:CB P:25 SP:F9 PPU: 38, 65 CYC:7408\n\
F948  38        SEC                             A:3F X:33 Y:CB P:25 SP:F9 PPU: 44, 65 CYC:7410\n\
F949  A9 40     LDA #$40                        A:3F X:33 Y:CB P:25 SP:F9 PPU: 50, 65 CYC:7412\n\
F94B  60        RTS                             A:40 X:33 Y:CB P:25 SP:F9 PPU: 56, 65 CYC:7414\n\
D712  ED 78 06  SBC $0678 = 3F                  A:40 X:33 Y:CB P:25 SP:FB PPU: 74, 65 CYC:7420\n\
D715  20 4C F9  JSR $F94C                       A:01 X:33 Y:CB P:25 SP:FB PPU: 86, 65 CYC:7424\n\
F94C  F0 0B     BEQ $F959                       A:01 X:33 Y:CB P:25 SP:F9 PPU:104, 65 CYC:7430\n\
F94E  30 09     BMI $F959                       A:01 X:33 Y:CB P:25 SP:F9 PPU:110, 65 CYC:7432\n\
F950  90 07     BCC $F959                       A:01 X:33 Y:CB P:25 SP:F9 PPU:116, 65 CYC:7434\n\
F952  70 05     BVS $F959                       A:01 X:33 Y:CB P:25 SP:F9 PPU:122, 65 CYC:7436\n\
F954  C9 01     CMP #$01                        A:01 X:33 Y:CB P:25 SP:F9 PPU:128, 65 CYC:7438\n\
F956  D0 01     BNE $F959                       A:01 X:33 Y:CB P:27 SP:F9 PPU:134, 65 CYC:7440\n\
F958  60        RTS                             A:01 X:33 Y:CB P:27 SP:F9 PPU:140, 65 CYC:7442\n\
D718  C8        INY                             A:01 X:33 Y:CB P:27 SP:FB PPU:158, 65 CYC:7448\n\
D719  A9 41     LDA #$41                        A:01 X:33 Y:CC P:A5 SP:FB PPU:164, 65 CYC:7450\n\
D71B  8D 78 06  STA $0678 = 3F                  A:41 X:33 Y:CC P:25 SP:FB PPU:170, 65 CYC:7452\n\
D71E  20 5C F9  JSR $F95C                       A:41 X:33 Y:CC P:25 SP:FB PPU:182, 65 CYC:7456\n\
F95C  A9 40     LDA #$40                        A:41 X:33 Y:CC P:25 SP:F9 PPU:200, 65 CYC:7462\n\
F95E  38        SEC                             A:40 X:33 Y:CC P:25 SP:F9 PPU:206, 65 CYC:7464\n\
F95F  24 01     BIT $01 = FF                    A:40 X:33 Y:CC P:25 SP:F9 PPU:212, 65 CYC:7466\n\
F961  60        RTS                             A:40 X:33 Y:CC P:E5 SP:F9 PPU:221, 65 CYC:7469\n\
D721  ED 78 06  SBC $0678 = 41                  A:40 X:33 Y:CC P:E5 SP:FB PPU:239, 65 CYC:7475\n\
D724  20 62 F9  JSR $F962                       A:FF X:33 Y:CC P:A4 SP:FB PPU:251, 65 CYC:7479\n\
F962  B0 0B     BCS $F96F                       A:FF X:33 Y:CC P:A4 SP:F9 PPU:269, 65 CYC:7485\n\
F964  F0 09     BEQ $F96F                       A:FF X:33 Y:CC P:A4 SP:F9 PPU:275, 65 CYC:7487\n\
F966  10 07     BPL $F96F                       A:FF X:33 Y:CC P:A4 SP:F9 PPU:281, 65 CYC:7489\n\
F968  70 05     BVS $F96F                       A:FF X:33 Y:CC P:A4 SP:F9 PPU:287, 65 CYC:7491\n\
F96A  C9 FF     CMP #$FF                        A:FF X:33 Y:CC P:A4 SP:F9 PPU:293, 65 CYC:7493\n\
F96C  D0 01     BNE $F96F                       A:FF X:33 Y:CC P:27 SP:F9 PPU:299, 65 CYC:7495\n\
F96E  60        RTS                             A:FF X:33 Y:CC P:27 SP:F9 PPU:305, 65 CYC:7497\n\
D727  C8        INY                             A:FF X:33 Y:CC P:27 SP:FB PPU:323, 65 CYC:7503\n\
D728  A9 00     LDA #$00                        A:FF X:33 Y:CD P:A5 SP:FB PPU:329, 65 CYC:7505\n\
D72A  8D 78 06  STA $0678 = 41                  A:00 X:33 Y:CD P:27 SP:FB PPU:335, 65 CYC:7507\n\
D72D  20 72 F9  JSR $F972                       A:00 X:33 Y:CD P:27 SP:FB PPU:  6, 66 CYC:7511\n\
F972  18        CLC                             A:00 X:33 Y:CD P:27 SP:F9 PPU: 24, 66 CYC:7517\n\
F973  A9 80     LDA #$80                        A:00 X:33 Y:CD P:26 SP:F9 PPU: 30, 66 CYC:7519\n\
F975  60        RTS                             A:80 X:33 Y:CD P:A4 SP:F9 PPU: 36, 66 CYC:7521\n\
D730  ED 78 06  SBC $0678 = 00                  A:80 X:33 Y:CD P:A4 SP:FB PPU: 54, 66 CYC:7527\n\
D733  20 76 F9  JSR $F976                       A:7F X:33 Y:CD P:65 SP:FB PPU: 66, 66 CYC:7531\n\
F976  90 05     BCC $F97D                       A:7F X:33 Y:CD P:65 SP:F9 PPU: 84, 66 CYC:7537\n\
F978  C9 7F     CMP #$7F                        A:7F X:33 Y:CD P:65 SP:F9 PPU: 90, 66 CYC:7539\n\
F97A  D0 01     BNE $F97D                       A:7F X:33 Y:CD P:67 SP:F9 PPU: 96, 66 CYC:7541\n\
F97C  60        RTS                             A:7F X:33 Y:CD P:67 SP:F9 PPU:102, 66 CYC:7543\n\
D736  C8        INY                             A:7F X:33 Y:CD P:67 SP:FB PPU:120, 66 CYC:7549\n\
D737  A9 7F     LDA #$7F                        A:7F X:33 Y:CE P:E5 SP:FB PPU:126, 66 CYC:7551\n\
D739  8D 78 06  STA $0678 = 00                  A:7F X:33 Y:CE P:65 SP:FB PPU:132, 66 CYC:7553\n\
D73C  20 80 F9  JSR $F980                       A:7F X:33 Y:CE P:65 SP:FB PPU:144, 66 CYC:7557\n\
F980  38        SEC                             A:7F X:33 Y:CE P:65 SP:F9 PPU:162, 66 CYC:7563\n\
F981  A9 81     LDA #$81                        A:7F X:33 Y:CE P:65 SP:F9 PPU:168, 66 CYC:7565\n\
F983  60        RTS                             A:81 X:33 Y:CE P:E5 SP:F9 PPU:174, 66 CYC:7567\n\
D73F  ED 78 06  SBC $0678 = 7F                  A:81 X:33 Y:CE P:E5 SP:FB PPU:192, 66 CYC:7573\n\
D742  20 84 F9  JSR $F984                       A:02 X:33 Y:CE P:65 SP:FB PPU:204, 66 CYC:7577\n\
F984  50 07     BVC $F98D                       A:02 X:33 Y:CE P:65 SP:F9 PPU:222, 66 CYC:7583\n\
F986  90 05     BCC $F98D                       A:02 X:33 Y:CE P:65 SP:F9 PPU:228, 66 CYC:7585\n\
F988  C9 02     CMP #$02                        A:02 X:33 Y:CE P:65 SP:F9 PPU:234, 66 CYC:7587\n\
F98A  D0 01     BNE $F98D                       A:02 X:33 Y:CE P:67 SP:F9 PPU:240, 66 CYC:7589\n\
F98C  60        RTS                             A:02 X:33 Y:CE P:67 SP:F9 PPU:246, 66 CYC:7591\n\
D745  C8        INY                             A:02 X:33 Y:CE P:67 SP:FB PPU:264, 66 CYC:7597\n\
D746  A9 40     LDA #$40                        A:02 X:33 Y:CF P:E5 SP:FB PPU:270, 66 CYC:7599\n\
D748  8D 78 06  STA $0678 = 7F                  A:40 X:33 Y:CF P:65 SP:FB PPU:276, 66 CYC:7601\n\
D74B  20 89 F8  JSR $F889                       A:40 X:33 Y:CF P:65 SP:FB PPU:288, 66 CYC:7605\n\
F889  24 01     BIT $01 = FF                    A:40 X:33 Y:CF P:65 SP:F9 PPU:306, 66 CYC:7611\n\
F88B  A9 40     LDA #$40                        A:40 X:33 Y:CF P:E5 SP:F9 PPU:315, 66 CYC:7614\n\
F88D  60        RTS                             A:40 X:33 Y:CF P:65 SP:F9 PPU:321, 66 CYC:7616\n\
D74E  AA        TAX                             A:40 X:33 Y:CF P:65 SP:FB PPU:339, 66 CYC:7622\n\
D74F  EC 78 06  CPX $0678 = 40                  A:40 X:40 Y:CF P:65 SP:FB PPU:  4, 67 CYC:7624\n\
D752  20 8E F8  JSR $F88E                       A:40 X:40 Y:CF P:67 SP:FB PPU: 16, 67 CYC:7628\n\
F88E  30 07     BMI $F897                       A:40 X:40 Y:CF P:67 SP:F9 PPU: 34, 67 CYC:7634\n\
F890  90 05     BCC $F897                       A:40 X:40 Y:CF P:67 SP:F9 PPU: 40, 67 CYC:7636\n\
F892  D0 03     BNE $F897                       A:40 X:40 Y:CF P:67 SP:F9 PPU: 46, 67 CYC:7638\n\
F894  50 01     BVC $F897                       A:40 X:40 Y:CF P:67 SP:F9 PPU: 52, 67 CYC:7640\n\
F896  60        RTS                             A:40 X:40 Y:CF P:67 SP:F9 PPU: 58, 67 CYC:7642\n\
D755  C8        INY                             A:40 X:40 Y:CF P:67 SP:FB PPU: 76, 67 CYC:7648\n\
D756  A9 3F     LDA #$3F                        A:40 X:40 Y:D0 P:E5 SP:FB PPU: 82, 67 CYC:7650\n\
D758  8D 78 06  STA $0678 = 40                  A:3F X:40 Y:D0 P:65 SP:FB PPU: 88, 67 CYC:7652\n\
D75B  20 9A F8  JSR $F89A                       A:3F X:40 Y:D0 P:65 SP:FB PPU:100, 67 CYC:7656\n\
F89A  B8        CLV                             A:3F X:40 Y:D0 P:65 SP:F9 PPU:118, 67 CYC:7662\n\
F89B  60        RTS                             A:3F X:40 Y:D0 P:25 SP:F9 PPU:124, 67 CYC:7664\n\
D75E  EC 78 06  CPX $0678 = 3F                  A:3F X:40 Y:D0 P:25 SP:FB PPU:142, 67 CYC:7670\n\
D761  20 9C F8  JSR $F89C                       A:3F X:40 Y:D0 P:25 SP:FB PPU:154, 67 CYC:7674\n\
F89C  F0 07     BEQ $F8A5                       A:3F X:40 Y:D0 P:25 SP:F9 PPU:172, 67 CYC:7680\n\
F89E  30 05     BMI $F8A5                       A:3F X:40 Y:D0 P:25 SP:F9 PPU:178, 67 CYC:7682\n\
F8A0  90 03     BCC $F8A5                       A:3F X:40 Y:D0 P:25 SP:F9 PPU:184, 67 CYC:7684\n\
F8A2  70 01     BVS $F8A5                       A:3F X:40 Y:D0 P:25 SP:F9 PPU:190, 67 CYC:7686\n\
F8A4  60        RTS                             A:3F X:40 Y:D0 P:25 SP:F9 PPU:196, 67 CYC:7688\n\
D764  C8        INY                             A:3F X:40 Y:D0 P:25 SP:FB PPU:214, 67 CYC:7694\n\
D765  A9 41     LDA #$41                        A:3F X:40 Y:D1 P:A5 SP:FB PPU:220, 67 CYC:7696\n\
D767  8D 78 06  STA $0678 = 3F                  A:41 X:40 Y:D1 P:25 SP:FB PPU:226, 67 CYC:7698\n\
D76A  EC 78 06  CPX $0678 = 41                  A:41 X:40 Y:D1 P:25 SP:FB PPU:238, 67 CYC:7702\n\
D76D  20 A8 F8  JSR $F8A8                       A:41 X:40 Y:D1 P:A4 SP:FB PPU:250, 67 CYC:7706\n\
F8A8  F0 05     BEQ $F8AF                       A:41 X:40 Y:D1 P:A4 SP:F9 PPU:268, 67 CYC:7712\n\
F8AA  10 03     BPL $F8AF                       A:41 X:40 Y:D1 P:A4 SP:F9 PPU:274, 67 CYC:7714\n\
F8AC  10 01     BPL $F8AF                       A:41 X:40 Y:D1 P:A4 SP:F9 PPU:280, 67 CYC:7716\n\
F8AE  60        RTS                             A:41 X:40 Y:D1 P:A4 SP:F9 PPU:286, 67 CYC:7718\n\
D770  C8        INY                             A:41 X:40 Y:D1 P:A4 SP:FB PPU:304, 67 CYC:7724\n\
D771  A9 00     LDA #$00                        A:41 X:40 Y:D2 P:A4 SP:FB PPU:310, 67 CYC:7726\n\
D773  8D 78 06  STA $0678 = 41                  A:00 X:40 Y:D2 P:26 SP:FB PPU:316, 67 CYC:7728\n\
D776  20 B2 F8  JSR $F8B2                       A:00 X:40 Y:D2 P:26 SP:FB PPU:328, 67 CYC:7732\n\
F8B2  A9 80     LDA #$80                        A:00 X:40 Y:D2 P:26 SP:F9 PPU:  5, 68 CYC:7738\n\
F8B4  60        RTS                             A:80 X:40 Y:D2 P:A4 SP:F9 PPU: 11, 68 CYC:7740\n\
D779  AA        TAX                             A:80 X:40 Y:D2 P:A4 SP:FB PPU: 29, 68 CYC:7746\n\
D77A  EC 78 06  CPX $0678 = 00                  A:80 X:80 Y:D2 P:A4 SP:FB PPU: 35, 68 CYC:7748\n\
D77D  20 B5 F8  JSR $F8B5                       A:80 X:80 Y:D2 P:A5 SP:FB PPU: 47, 68 CYC:7752\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:80 Y:D2 P:A5 SP:F9 PPU: 65, 68 CYC:7758\n\
F8B7  10 03     BPL $F8BC                       A:80 X:80 Y:D2 P:A5 SP:F9 PPU: 71, 68 CYC:7760\n\
F8B9  90 01     BCC $F8BC                       A:80 X:80 Y:D2 P:A5 SP:F9 PPU: 77, 68 CYC:7762\n\
F8BB  60        RTS                             A:80 X:80 Y:D2 P:A5 SP:F9 PPU: 83, 68 CYC:7764\n\
D780  C8        INY                             A:80 X:80 Y:D2 P:A5 SP:FB PPU:101, 68 CYC:7770\n\
D781  A9 80     LDA #$80                        A:80 X:80 Y:D3 P:A5 SP:FB PPU:107, 68 CYC:7772\n\
D783  8D 78 06  STA $0678 = 00                  A:80 X:80 Y:D3 P:A5 SP:FB PPU:113, 68 CYC:7774\n\
D786  EC 78 06  CPX $0678 = 80                  A:80 X:80 Y:D3 P:A5 SP:FB PPU:125, 68 CYC:7778\n\
D789  20 BF F8  JSR $F8BF                       A:80 X:80 Y:D3 P:27 SP:FB PPU:137, 68 CYC:7782\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:80 Y:D3 P:27 SP:F9 PPU:155, 68 CYC:7788\n\
F8C1  30 03     BMI $F8C6                       A:80 X:80 Y:D3 P:27 SP:F9 PPU:161, 68 CYC:7790\n\
F8C3  90 01     BCC $F8C6                       A:80 X:80 Y:D3 P:27 SP:F9 PPU:167, 68 CYC:7792\n\
F8C5  60        RTS                             A:80 X:80 Y:D3 P:27 SP:F9 PPU:173, 68 CYC:7794\n\
D78C  C8        INY                             A:80 X:80 Y:D3 P:27 SP:FB PPU:191, 68 CYC:7800\n\
D78D  A9 81     LDA #$81                        A:80 X:80 Y:D4 P:A5 SP:FB PPU:197, 68 CYC:7802\n\
D78F  8D 78 06  STA $0678 = 80                  A:81 X:80 Y:D4 P:A5 SP:FB PPU:203, 68 CYC:7804\n\
D792  EC 78 06  CPX $0678 = 81                  A:81 X:80 Y:D4 P:A5 SP:FB PPU:215, 68 CYC:7808\n\
D795  20 C9 F8  JSR $F8C9                       A:81 X:80 Y:D4 P:A4 SP:FB PPU:227, 68 CYC:7812\n\
F8C9  B0 05     BCS $F8D0                       A:81 X:80 Y:D4 P:A4 SP:F9 PPU:245, 68 CYC:7818\n\
F8CB  F0 03     BEQ $F8D0                       A:81 X:80 Y:D4 P:A4 SP:F9 PPU:251, 68 CYC:7820\n\
F8CD  10 01     BPL $F8D0                       A:81 X:80 Y:D4 P:A4 SP:F9 PPU:257, 68 CYC:7822\n\
F8CF  60        RTS                             A:81 X:80 Y:D4 P:A4 SP:F9 PPU:263, 68 CYC:7824\n\
D798  C8        INY                             A:81 X:80 Y:D4 P:A4 SP:FB PPU:281, 68 CYC:7830\n\
D799  A9 7F     LDA #$7F                        A:81 X:80 Y:D5 P:A4 SP:FB PPU:287, 68 CYC:7832\n\
D79B  8D 78 06  STA $0678 = 81                  A:7F X:80 Y:D5 P:24 SP:FB PPU:293, 68 CYC:7834\n\
D79E  EC 78 06  CPX $0678 = 7F                  A:7F X:80 Y:D5 P:24 SP:FB PPU:305, 68 CYC:7838\n\
D7A1  20 D3 F8  JSR $F8D3                       A:7F X:80 Y:D5 P:25 SP:FB PPU:317, 68 CYC:7842\n\
F8D3  90 05     BCC $F8DA                       A:7F X:80 Y:D5 P:25 SP:F9 PPU:335, 68 CYC:7848\n\
F8D5  F0 03     BEQ $F8DA                       A:7F X:80 Y:D5 P:25 SP:F9 PPU:  0, 69 CYC:7850\n\
F8D7  30 01     BMI $F8DA                       A:7F X:80 Y:D5 P:25 SP:F9 PPU:  6, 69 CYC:7852\n\
F8D9  60        RTS                             A:7F X:80 Y:D5 P:25 SP:F9 PPU: 12, 69 CYC:7854\n\
D7A4  C8        INY                             A:7F X:80 Y:D5 P:25 SP:FB PPU: 30, 69 CYC:7860\n\
D7A5  98        TYA                             A:7F X:80 Y:D6 P:A5 SP:FB PPU: 36, 69 CYC:7862\n\
D7A6  AA        TAX                             A:D6 X:80 Y:D6 P:A5 SP:FB PPU: 42, 69 CYC:7864\n\
D7A7  A9 40     LDA #$40                        A:D6 X:D6 Y:D6 P:A5 SP:FB PPU: 48, 69 CYC:7866\n\
D7A9  8D 78 06  STA $0678 = 7F                  A:40 X:D6 Y:D6 P:25 SP:FB PPU: 54, 69 CYC:7868\n\
D7AC  20 DD F8  JSR $F8DD                       A:40 X:D6 Y:D6 P:25 SP:FB PPU: 66, 69 CYC:7872\n\
F8DD  24 01     BIT $01 = FF                    A:40 X:D6 Y:D6 P:25 SP:F9 PPU: 84, 69 CYC:7878\n\
F8DF  A0 40     LDY #$40                        A:40 X:D6 Y:D6 P:E5 SP:F9 PPU: 93, 69 CYC:7881\n\
F8E1  60        RTS                             A:40 X:D6 Y:40 P:65 SP:F9 PPU: 99, 69 CYC:7883\n\
D7AF  CC 78 06  CPY $0678 = 40                  A:40 X:D6 Y:40 P:65 SP:FB PPU:117, 69 CYC:7889\n\
D7B2  20 E2 F8  JSR $F8E2                       A:40 X:D6 Y:40 P:67 SP:FB PPU:129, 69 CYC:7893\n\
F8E2  30 07     BMI $F8EB                       A:40 X:D6 Y:40 P:67 SP:F9 PPU:147, 69 CYC:7899\n\
F8E4  90 05     BCC $F8EB                       A:40 X:D6 Y:40 P:67 SP:F9 PPU:153, 69 CYC:7901\n\
F8E6  D0 03     BNE $F8EB                       A:40 X:D6 Y:40 P:67 SP:F9 PPU:159, 69 CYC:7903\n\
F8E8  50 01     BVC $F8EB                       A:40 X:D6 Y:40 P:67 SP:F9 PPU:165, 69 CYC:7905\n\
F8EA  60        RTS                             A:40 X:D6 Y:40 P:67 SP:F9 PPU:171, 69 CYC:7907\n\
D7B5  E8        INX                             A:40 X:D6 Y:40 P:67 SP:FB PPU:189, 69 CYC:7913\n\
D7B6  A9 3F     LDA #$3F                        A:40 X:D7 Y:40 P:E5 SP:FB PPU:195, 69 CYC:7915\n\
D7B8  8D 78 06  STA $0678 = 40                  A:3F X:D7 Y:40 P:65 SP:FB PPU:201, 69 CYC:7917\n\
D7BB  20 EE F8  JSR $F8EE                       A:3F X:D7 Y:40 P:65 SP:FB PPU:213, 69 CYC:7921\n\
F8EE  B8        CLV                             A:3F X:D7 Y:40 P:65 SP:F9 PPU:231, 69 CYC:7927\n\
F8EF  60        RTS                             A:3F X:D7 Y:40 P:25 SP:F9 PPU:237, 69 CYC:7929\n\
D7BE  CC 78 06  CPY $0678 = 3F                  A:3F X:D7 Y:40 P:25 SP:FB PPU:255, 69 CYC:7935\n\
D7C1  20 F0 F8  JSR $F8F0                       A:3F X:D7 Y:40 P:25 SP:FB PPU:267, 69 CYC:7939\n\
F8F0  F0 07     BEQ $F8F9                       A:3F X:D7 Y:40 P:25 SP:F9 PPU:285, 69 CYC:7945\n\
F8F2  30 05     BMI $F8F9                       A:3F X:D7 Y:40 P:25 SP:F9 PPU:291, 69 CYC:7947\n\
F8F4  90 03     BCC $F8F9                       A:3F X:D7 Y:40 P:25 SP:F9 PPU:297, 69 CYC:7949\n\
F8F6  70 01     BVS $F8F9                       A:3F X:D7 Y:40 P:25 SP:F9 PPU:303, 69 CYC:7951\n\
F8F8  60        RTS                             A:3F X:D7 Y:40 P:25 SP:F9 PPU:309, 69 CYC:7953\n\
D7C4  E8        INX                             A:3F X:D7 Y:40 P:25 SP:FB PPU:327, 69 CYC:7959\n\
D7C5  A9 41     LDA #$41                        A:3F X:D8 Y:40 P:A5 SP:FB PPU:333, 69 CYC:7961\n\
D7C7  8D 78 06  STA $0678 = 3F                  A:41 X:D8 Y:40 P:25 SP:FB PPU:339, 69 CYC:7963\n\
D7CA  CC 78 06  CPY $0678 = 41                  A:41 X:D8 Y:40 P:25 SP:FB PPU: 10, 70 CYC:7967\n\
D7CD  20 FC F8  JSR $F8FC                       A:41 X:D8 Y:40 P:A4 SP:FB PPU: 22, 70 CYC:7971\n\
F8FC  F0 05     BEQ $F903                       A:41 X:D8 Y:40 P:A4 SP:F9 PPU: 40, 70 CYC:7977\n\
F8FE  10 03     BPL $F903                       A:41 X:D8 Y:40 P:A4 SP:F9 PPU: 46, 70 CYC:7979\n\
F900  10 01     BPL $F903                       A:41 X:D8 Y:40 P:A4 SP:F9 PPU: 52, 70 CYC:7981\n\
F902  60        RTS                             A:41 X:D8 Y:40 P:A4 SP:F9 PPU: 58, 70 CYC:7983\n\
D7D0  E8        INX                             A:41 X:D8 Y:40 P:A4 SP:FB PPU: 76, 70 CYC:7989\n\
D7D1  A9 00     LDA #$00                        A:41 X:D9 Y:40 P:A4 SP:FB PPU: 82, 70 CYC:7991\n\
D7D3  8D 78 06  STA $0678 = 41                  A:00 X:D9 Y:40 P:26 SP:FB PPU: 88, 70 CYC:7993\n\
D7D6  20 06 F9  JSR $F906                       A:00 X:D9 Y:40 P:26 SP:FB PPU:100, 70 CYC:7997\n\
F906  A0 80     LDY #$80                        A:00 X:D9 Y:40 P:26 SP:F9 PPU:118, 70 CYC:8003\n\
F908  60        RTS                             A:00 X:D9 Y:80 P:A4 SP:F9 PPU:124, 70 CYC:8005\n\
D7D9  CC 78 06  CPY $0678 = 00                  A:00 X:D9 Y:80 P:A4 SP:FB PPU:142, 70 CYC:8011\n\
D7DC  20 09 F9  JSR $F909                       A:00 X:D9 Y:80 P:A5 SP:FB PPU:154, 70 CYC:8015\n\
F909  F0 05     BEQ $F910                       A:00 X:D9 Y:80 P:A5 SP:F9 PPU:172, 70 CYC:8021\n\
F90B  10 03     BPL $F910                       A:00 X:D9 Y:80 P:A5 SP:F9 PPU:178, 70 CYC:8023\n\
F90D  90 01     BCC $F910                       A:00 X:D9 Y:80 P:A5 SP:F9 PPU:184, 70 CYC:8025\n\
F90F  60        RTS                             A:00 X:D9 Y:80 P:A5 SP:F9 PPU:190, 70 CYC:8027\n\
D7DF  E8        INX                             A:00 X:D9 Y:80 P:A5 SP:FB PPU:208, 70 CYC:8033\n\
D7E0  A9 80     LDA #$80                        A:00 X:DA Y:80 P:A5 SP:FB PPU:214, 70 CYC:8035\n\
D7E2  8D 78 06  STA $0678 = 00                  A:80 X:DA Y:80 P:A5 SP:FB PPU:220, 70 CYC:8037\n\
D7E5  CC 78 06  CPY $0678 = 80                  A:80 X:DA Y:80 P:A5 SP:FB PPU:232, 70 CYC:8041\n\
D7E8  20 13 F9  JSR $F913                       A:80 X:DA Y:80 P:27 SP:FB PPU:244, 70 CYC:8045\n\
F913  D0 05     BNE $F91A                       A:80 X:DA Y:80 P:27 SP:F9 PPU:262, 70 CYC:8051\n\
F915  30 03     BMI $F91A                       A:80 X:DA Y:80 P:27 SP:F9 PPU:268, 70 CYC:8053\n\
F917  90 01     BCC $F91A                       A:80 X:DA Y:80 P:27 SP:F9 PPU:274, 70 CYC:8055\n\
F919  60        RTS                             A:80 X:DA Y:80 P:27 SP:F9 PPU:280, 70 CYC:8057\n\
D7EB  E8        INX                             A:80 X:DA Y:80 P:27 SP:FB PPU:298, 70 CYC:8063\n\
D7EC  A9 81     LDA #$81                        A:80 X:DB Y:80 P:A5 SP:FB PPU:304, 70 CYC:8065\n\
D7EE  8D 78 06  STA $0678 = 80                  A:81 X:DB Y:80 P:A5 SP:FB PPU:310, 70 CYC:8067\n\
D7F1  CC 78 06  CPY $0678 = 81                  A:81 X:DB Y:80 P:A5 SP:FB PPU:322, 70 CYC:8071\n\
D7F4  20 1D F9  JSR $F91D                       A:81 X:DB Y:80 P:A4 SP:FB PPU:334, 70 CYC:8075\n\
F91D  B0 05     BCS $F924                       A:81 X:DB Y:80 P:A4 SP:F9 PPU: 11, 71 CYC:8081\n\
F91F  F0 03     BEQ $F924                       A:81 X:DB Y:80 P:A4 SP:F9 PPU: 17, 71 CYC:8083\n\
F921  10 01     BPL $F924                       A:81 X:DB Y:80 P:A4 SP:F9 PPU: 23, 71 CYC:8085\n\
F923  60        RTS                             A:81 X:DB Y:80 P:A4 SP:F9 PPU: 29, 71 CYC:8087\n\
D7F7  E8        INX                             A:81 X:DB Y:80 P:A4 SP:FB PPU: 47, 71 CYC:8093\n\
D7F8  A9 7F     LDA #$7F                        A:81 X:DC Y:80 P:A4 SP:FB PPU: 53, 71 CYC:8095\n\
D7FA  8D 78 06  STA $0678 = 81                  A:7F X:DC Y:80 P:24 SP:FB PPU: 59, 71 CYC:8097\n\
D7FD  CC 78 06  CPY $0678 = 7F                  A:7F X:DC Y:80 P:24 SP:FB PPU: 71, 71 CYC:8101\n\
D800  20 27 F9  JSR $F927                       A:7F X:DC Y:80 P:25 SP:FB PPU: 83, 71 CYC:8105\n\
F927  90 05     BCC $F92E                       A:7F X:DC Y:80 P:25 SP:F9 PPU:101, 71 CYC:8111\n\
F929  F0 03     BEQ $F92E                       A:7F X:DC Y:80 P:25 SP:F9 PPU:107, 71 CYC:8113\n\
F92B  30 01     BMI $F92E                       A:7F X:DC Y:80 P:25 SP:F9 PPU:113, 71 CYC:8115\n\
F92D  60        RTS                             A:7F X:DC Y:80 P:25 SP:F9 PPU:119, 71 CYC:8117\n\
D803  E8        INX                             A:7F X:DC Y:80 P:25 SP:FB PPU:137, 71 CYC:8123\n\
D804  8A        TXA                             A:7F X:DD Y:80 P:A5 SP:FB PPU:143, 71 CYC:8125\n\
D805  A8        TAY                             A:DD X:DD Y:80 P:A5 SP:FB PPU:149, 71 CYC:8127\n\
D806  20 90 F9  JSR $F990                       A:DD X:DD Y:DD P:A5 SP:FB PPU:155, 71 CYC:8129\n\
F990  A2 55     LDX #$55                        A:DD X:DD Y:DD P:A5 SP:F9 PPU:173, 71 CYC:8135\n\
F992  A9 FF     LDA #$FF                        A:DD X:55 Y:DD P:25 SP:F9 PPU:179, 71 CYC:8137\n\
F994  85 01     STA $01 = FF                    A:FF X:55 Y:DD P:A5 SP:F9 PPU:185, 71 CYC:8139\n\
F996  EA        NOP                             A:FF X:55 Y:DD P:A5 SP:F9 PPU:194, 71 CYC:8142\n\
F997  24 01     BIT $01 = FF                    A:FF X:55 Y:DD P:A5 SP:F9 PPU:200, 71 CYC:8144\n\
F999  38        SEC                             A:FF X:55 Y:DD P:E5 SP:F9 PPU:209, 71 CYC:8147\n\
F99A  A9 01     LDA #$01                        A:FF X:55 Y:DD P:E5 SP:F9 PPU:215, 71 CYC:8149\n\
F99C  60        RTS                             A:01 X:55 Y:DD P:65 SP:F9 PPU:221, 71 CYC:8151\n\
D809  8D 78 06  STA $0678 = 7F                  A:01 X:55 Y:DD P:65 SP:FB PPU:239, 71 CYC:8157\n\
D80C  4E 78 06  LSR $0678 = 01                  A:01 X:55 Y:DD P:65 SP:FB PPU:251, 71 CYC:8161\n\
D80F  AD 78 06  LDA $0678 = 00                  A:01 X:55 Y:DD P:67 SP:FB PPU:269, 71 CYC:8167\n\
D812  20 9D F9  JSR $F99D                       A:00 X:55 Y:DD P:67 SP:FB PPU:281, 71 CYC:8171\n\
F99D  90 1B     BCC $F9BA                       A:00 X:55 Y:DD P:67 SP:F9 PPU:299, 71 CYC:8177\n\
F99F  D0 19     BNE $F9BA                       A:00 X:55 Y:DD P:67 SP:F9 PPU:305, 71 CYC:8179\n\
F9A1  30 17     BMI $F9BA                       A:00 X:55 Y:DD P:67 SP:F9 PPU:311, 71 CYC:8181\n\
F9A3  50 15     BVC $F9BA                       A:00 X:55 Y:DD P:67 SP:F9 PPU:317, 71 CYC:8183\n\
F9A5  C9 00     CMP #$00                        A:00 X:55 Y:DD P:67 SP:F9 PPU:323, 71 CYC:8185\n\
F9A7  D0 11     BNE $F9BA                       A:00 X:55 Y:DD P:67 SP:F9 PPU:329, 71 CYC:8187\n\
F9A9  B8        CLV                             A:00 X:55 Y:DD P:67 SP:F9 PPU:335, 71 CYC:8189\n\
F9AA  A9 AA     LDA #$AA                        A:00 X:55 Y:DD P:27 SP:F9 PPU:  0, 72 CYC:8191\n\
F9AC  60        RTS                             A:AA X:55 Y:DD P:A5 SP:F9 PPU:  6, 72 CYC:8193\n\
D815  C8        INY                             A:AA X:55 Y:DD P:A5 SP:FB PPU: 24, 72 CYC:8199\n\
D816  8D 78 06  STA $0678 = 00                  A:AA X:55 Y:DE P:A5 SP:FB PPU: 30, 72 CYC:8201\n\
D819  4E 78 06  LSR $0678 = AA                  A:AA X:55 Y:DE P:A5 SP:FB PPU: 42, 72 CYC:8205\n\
D81C  AD 78 06  LDA $0678 = 55                  A:AA X:55 Y:DE P:24 SP:FB PPU: 60, 72 CYC:8211\n\
D81F  20 AD F9  JSR $F9AD                       A:55 X:55 Y:DE P:24 SP:FB PPU: 72, 72 CYC:8215\n\
F9AD  B0 0B     BCS $F9BA                       A:55 X:55 Y:DE P:24 SP:F9 PPU: 90, 72 CYC:8221\n\
F9AF  F0 09     BEQ $F9BA                       A:55 X:55 Y:DE P:24 SP:F9 PPU: 96, 72 CYC:8223\n\
F9B1  30 07     BMI $F9BA                       A:55 X:55 Y:DE P:24 SP:F9 PPU:102, 72 CYC:8225\n\
F9B3  70 05     BVS $F9BA                       A:55 X:55 Y:DE P:24 SP:F9 PPU:108, 72 CYC:8227\n\
F9B5  C9 55     CMP #$55                        A:55 X:55 Y:DE P:24 SP:F9 PPU:114, 72 CYC:8229\n\
F9B7  D0 01     BNE $F9BA                       A:55 X:55 Y:DE P:27 SP:F9 PPU:120, 72 CYC:8231\n\
F9B9  60        RTS                             A:55 X:55 Y:DE P:27 SP:F9 PPU:126, 72 CYC:8233\n\
D822  C8        INY                             A:55 X:55 Y:DE P:27 SP:FB PPU:144, 72 CYC:8239\n\
D823  20 BD F9  JSR $F9BD                       A:55 X:55 Y:DF P:A5 SP:FB PPU:150, 72 CYC:8241\n\
F9BD  24 01     BIT $01 = FF                    A:55 X:55 Y:DF P:A5 SP:F9 PPU:168, 72 CYC:8247\n\
F9BF  38        SEC                             A:55 X:55 Y:DF P:E5 SP:F9 PPU:177, 72 CYC:8250\n\
F9C0  A9 80     LDA #$80                        A:55 X:55 Y:DF P:E5 SP:F9 PPU:183, 72 CYC:8252\n\
F9C2  60        RTS                             A:80 X:55 Y:DF P:E5 SP:F9 PPU:189, 72 CYC:8254\n\
D826  8D 78 06  STA $0678 = 55                  A:80 X:55 Y:DF P:E5 SP:FB PPU:207, 72 CYC:8260\n\
D829  0E 78 06  ASL $0678 = 80                  A:80 X:55 Y:DF P:E5 SP:FB PPU:219, 72 CYC:8264\n\
D82C  AD 78 06  LDA $0678 = 00                  A:80 X:55 Y:DF P:67 SP:FB PPU:237, 72 CYC:8270\n\
D82F  20 C3 F9  JSR $F9C3                       A:00 X:55 Y:DF P:67 SP:FB PPU:249, 72 CYC:8274\n\
F9C3  90 1C     BCC $F9E1                       A:00 X:55 Y:DF P:67 SP:F9 PPU:267, 72 CYC:8280\n\
F9C5  D0 1A     BNE $F9E1                       A:00 X:55 Y:DF P:67 SP:F9 PPU:273, 72 CYC:8282\n\
F9C7  30 18     BMI $F9E1                       A:00 X:55 Y:DF P:67 SP:F9 PPU:279, 72 CYC:8284\n\
F9C9  50 16     BVC $F9E1                       A:00 X:55 Y:DF P:67 SP:F9 PPU:285, 72 CYC:8286\n\
F9CB  C9 00     CMP #$00                        A:00 X:55 Y:DF P:67 SP:F9 PPU:291, 72 CYC:8288\n\
F9CD  D0 12     BNE $F9E1                       A:00 X:55 Y:DF P:67 SP:F9 PPU:297, 72 CYC:8290\n\
F9CF  B8        CLV                             A:00 X:55 Y:DF P:67 SP:F9 PPU:303, 72 CYC:8292\n\
F9D0  A9 55     LDA #$55                        A:00 X:55 Y:DF P:27 SP:F9 PPU:309, 72 CYC:8294\n\
F9D2  38        SEC                             A:55 X:55 Y:DF P:25 SP:F9 PPU:315, 72 CYC:8296\n\
F9D3  60        RTS                             A:55 X:55 Y:DF P:25 SP:F9 PPU:321, 72 CYC:8298\n\
D832  C8        INY                             A:55 X:55 Y:DF P:25 SP:FB PPU:339, 72 CYC:8304\n\
D833  8D 78 06  STA $0678 = 00                  A:55 X:55 Y:E0 P:A5 SP:FB PPU:  4, 73 CYC:8306\n\
D836  0E 78 06  ASL $0678 = 55                  A:55 X:55 Y:E0 P:A5 SP:FB PPU: 16, 73 CYC:8310\n\
D839  AD 78 06  LDA $0678 = AA                  A:55 X:55 Y:E0 P:A4 SP:FB PPU: 34, 73 CYC:8316\n\
D83C  20 D4 F9  JSR $F9D4                       A:AA X:55 Y:E0 P:A4 SP:FB PPU: 46, 73 CYC:8320\n\
F9D4  B0 0B     BCS $F9E1                       A:AA X:55 Y:E0 P:A4 SP:F9 PPU: 64, 73 CYC:8326\n\
F9D6  F0 09     BEQ $F9E1                       A:AA X:55 Y:E0 P:A4 SP:F9 PPU: 70, 73 CYC:8328\n\
F9D8  10 07     BPL $F9E1                       A:AA X:55 Y:E0 P:A4 SP:F9 PPU: 76, 73 CYC:8330\n\
F9DA  70 05     BVS $F9E1                       A:AA X:55 Y:E0 P:A4 SP:F9 PPU: 82, 73 CYC:8332\n\
F9DC  C9 AA     CMP #$AA                        A:AA X:55 Y:E0 P:A4 SP:F9 PPU: 88, 73 CYC:8334\n\
F9DE  D0 01     BNE $F9E1                       A:AA X:55 Y:E0 P:27 SP:F9 PPU: 94, 73 CYC:8336\n\
F9E0  60        RTS                             A:AA X:55 Y:E0 P:27 SP:F9 PPU:100, 73 CYC:8338\n\
D83F  C8        INY                             A:AA X:55 Y:E0 P:27 SP:FB PPU:118, 73 CYC:8344\n\
D840  20 E4 F9  JSR $F9E4                       A:AA X:55 Y:E1 P:A5 SP:FB PPU:124, 73 CYC:8346\n\
F9E4  24 01     BIT $01 = FF                    A:AA X:55 Y:E1 P:A5 SP:F9 PPU:142, 73 CYC:8352\n\
F9E6  38        SEC                             A:AA X:55 Y:E1 P:E5 SP:F9 PPU:151, 73 CYC:8355\n\
F9E7  A9 01     LDA #$01                        A:AA X:55 Y:E1 P:E5 SP:F9 PPU:157, 73 CYC:8357\n\
F9E9  60        RTS                             A:01 X:55 Y:E1 P:65 SP:F9 PPU:163, 73 CYC:8359\n\
D843  8D 78 06  STA $0678 = AA                  A:01 X:55 Y:E1 P:65 SP:FB PPU:181, 73 CYC:8365\n\
D846  6E 78 06  ROR $0678 = 01                  A:01 X:55 Y:E1 P:65 SP:FB PPU:193, 73 CYC:8369\n\
D849  AD 78 06  LDA $0678 = 80                  A:01 X:55 Y:E1 P:E5 SP:FB PPU:211, 73 CYC:8375\n\
D84C  20 EA F9  JSR $F9EA                       A:80 X:55 Y:E1 P:E5 SP:FB PPU:223, 73 CYC:8379\n\
F9EA  90 1C     BCC $FA08                       A:80 X:55 Y:E1 P:E5 SP:F9 PPU:241, 73 CYC:8385\n\
F9EC  F0 1A     BEQ $FA08                       A:80 X:55 Y:E1 P:E5 SP:F9 PPU:247, 73 CYC:8387\n\
F9EE  10 18     BPL $FA08                       A:80 X:55 Y:E1 P:E5 SP:F9 PPU:253, 73 CYC:8389\n\
F9F0  50 16     BVC $FA08                       A:80 X:55 Y:E1 P:E5 SP:F9 PPU:259, 73 CYC:8391\n\
F9F2  C9 80     CMP #$80                        A:80 X:55 Y:E1 P:E5 SP:F9 PPU:265, 73 CYC:8393\n\
F9F4  D0 12     BNE $FA08                       A:80 X:55 Y:E1 P:67 SP:F9 PPU:271, 73 CYC:8395\n\
F9F6  B8        CLV                             A:80 X:55 Y:E1 P:67 SP:F9 PPU:277, 73 CYC:8397\n\
F9F7  18        CLC                             A:80 X:55 Y:E1 P:27 SP:F9 PPU:283, 73 CYC:8399\n\
F9F8  A9 55     LDA #$55                        A:80 X:55 Y:E1 P:26 SP:F9 PPU:289, 73 CYC:8401\n\
F9FA  60        RTS                             A:55 X:55 Y:E1 P:24 SP:F9 PPU:295, 73 CYC:8403\n\
D84F  C8        INY                             A:55 X:55 Y:E1 P:24 SP:FB PPU:313, 73 CYC:8409\n\
D850  8D 78 06  STA $0678 = 80                  A:55 X:55 Y:E2 P:A4 SP:FB PPU:319, 73 CYC:8411\n\
D853  6E 78 06  ROR $0678 = 55                  A:55 X:55 Y:E2 P:A4 SP:FB PPU:331, 73 CYC:8415\n\
D856  AD 78 06  LDA $0678 = 2A                  A:55 X:55 Y:E2 P:25 SP:FB PPU:  8, 74 CYC:8421\n\
D859  20 FB F9  JSR $F9FB                       A:2A X:55 Y:E2 P:25 SP:FB PPU: 20, 74 CYC:8425\n\
F9FB  90 0B     BCC $FA08                       A:2A X:55 Y:E2 P:25 SP:F9 PPU: 38, 74 CYC:8431\n\
F9FD  F0 09     BEQ $FA08                       A:2A X:55 Y:E2 P:25 SP:F9 PPU: 44, 74 CYC:8433\n\
F9FF  30 07     BMI $FA08                       A:2A X:55 Y:E2 P:25 SP:F9 PPU: 50, 74 CYC:8435\n\
FA01  70 05     BVS $FA08                       A:2A X:55 Y:E2 P:25 SP:F9 PPU: 56, 74 CYC:8437\n\
FA03  C9 2A     CMP #$2A                        A:2A X:55 Y:E2 P:25 SP:F9 PPU: 62, 74 CYC:8439\n\
FA05  D0 01     BNE $FA08                       A:2A X:55 Y:E2 P:27 SP:F9 PPU: 68, 74 CYC:8441\n\
FA07  60        RTS                             A:2A X:55 Y:E2 P:27 SP:F9 PPU: 74, 74 CYC:8443\n\
D85C  C8        INY                             A:2A X:55 Y:E2 P:27 SP:FB PPU: 92, 74 CYC:8449\n\
D85D  20 0A FA  JSR $FA0A                       A:2A X:55 Y:E3 P:A5 SP:FB PPU: 98, 74 CYC:8451\n\
FA0A  24 01     BIT $01 = FF                    A:2A X:55 Y:E3 P:A5 SP:F9 PPU:116, 74 CYC:8457\n\
FA0C  38        SEC                             A:2A X:55 Y:E3 P:E5 SP:F9 PPU:125, 74 CYC:8460\n\
FA0D  A9 80     LDA #$80                        A:2A X:55 Y:E3 P:E5 SP:F9 PPU:131, 74 CYC:8462\n\
FA0F  60        RTS                             A:80 X:55 Y:E3 P:E5 SP:F9 PPU:137, 74 CYC:8464\n\
D860  8D 78 06  STA $0678 = 2A                  A:80 X:55 Y:E3 P:E5 SP:FB PPU:155, 74 CYC:8470\n\
D863  2E 78 06  ROL $0678 = 80                  A:80 X:55 Y:E3 P:E5 SP:FB PPU:167, 74 CYC:8474\n\
D866  AD 78 06  LDA $0678 = 01                  A:80 X:55 Y:E3 P:65 SP:FB PPU:185, 74 CYC:8480\n\
D869  20 10 FA  JSR $FA10                       A:01 X:55 Y:E3 P:65 SP:FB PPU:197, 74 CYC:8484\n\
FA10  90 1C     BCC $FA2E                       A:01 X:55 Y:E3 P:65 SP:F9 PPU:215, 74 CYC:8490\n\
FA12  F0 1A     BEQ $FA2E                       A:01 X:55 Y:E3 P:65 SP:F9 PPU:221, 74 CYC:8492\n\
FA14  30 18     BMI $FA2E                       A:01 X:55 Y:E3 P:65 SP:F9 PPU:227, 74 CYC:8494\n\
FA16  50 16     BVC $FA2E                       A:01 X:55 Y:E3 P:65 SP:F9 PPU:233, 74 CYC:8496\n\
FA18  C9 01     CMP #$01                        A:01 X:55 Y:E3 P:65 SP:F9 PPU:239, 74 CYC:8498\n\
FA1A  D0 12     BNE $FA2E                       A:01 X:55 Y:E3 P:67 SP:F9 PPU:245, 74 CYC:8500\n\
FA1C  B8        CLV                             A:01 X:55 Y:E3 P:67 SP:F9 PPU:251, 74 CYC:8502\n\
FA1D  18        CLC                             A:01 X:55 Y:E3 P:27 SP:F9 PPU:257, 74 CYC:8504\n\
FA1E  A9 55     LDA #$55                        A:01 X:55 Y:E3 P:26 SP:F9 PPU:263, 74 CYC:8506\n\
FA20  60        RTS                             A:55 X:55 Y:E3 P:24 SP:F9 PPU:269, 74 CYC:8508\n\
D86C  C8        INY                             A:55 X:55 Y:E3 P:24 SP:FB PPU:287, 74 CYC:8514\n\
D86D  8D 78 06  STA $0678 = 01                  A:55 X:55 Y:E4 P:A4 SP:FB PPU:293, 74 CYC:8516\n\
D870  2E 78 06  ROL $0678 = 55                  A:55 X:55 Y:E4 P:A4 SP:FB PPU:305, 74 CYC:8520\n\
D873  AD 78 06  LDA $0678 = AA                  A:55 X:55 Y:E4 P:A4 SP:FB PPU:323, 74 CYC:8526\n\
D876  20 21 FA  JSR $FA21                       A:AA X:55 Y:E4 P:A4 SP:FB PPU:335, 74 CYC:8530\n\
FA21  B0 0B     BCS $FA2E                       A:AA X:55 Y:E4 P:A4 SP:F9 PPU: 12, 75 CYC:8536\n\
FA23  F0 09     BEQ $FA2E                       A:AA X:55 Y:E4 P:A4 SP:F9 PPU: 18, 75 CYC:8538\n\
FA25  10 07     BPL $FA2E                       A:AA X:55 Y:E4 P:A4 SP:F9 PPU: 24, 75 CYC:8540\n\
FA27  70 05     BVS $FA2E                       A:AA X:55 Y:E4 P:A4 SP:F9 PPU: 30, 75 CYC:8542\n\
FA29  C9 AA     CMP #$AA                        A:AA X:55 Y:E4 P:A4 SP:F9 PPU: 36, 75 CYC:8544\n\
FA2B  D0 01     BNE $FA2E                       A:AA X:55 Y:E4 P:27 SP:F9 PPU: 42, 75 CYC:8546\n\
FA2D  60        RTS                             A:AA X:55 Y:E4 P:27 SP:F9 PPU: 48, 75 CYC:8548\n\
D879  A9 FF     LDA #$FF                        A:AA X:55 Y:E4 P:27 SP:FB PPU: 66, 75 CYC:8554\n\
D87B  8D 78 06  STA $0678 = AA                  A:FF X:55 Y:E4 P:A5 SP:FB PPU: 72, 75 CYC:8556\n\
D87E  85 01     STA $01 = FF                    A:FF X:55 Y:E4 P:A5 SP:FB PPU: 84, 75 CYC:8560\n\
D880  24 01     BIT $01 = FF                    A:FF X:55 Y:E4 P:A5 SP:FB PPU: 93, 75 CYC:8563\n\
D882  38        SEC                             A:FF X:55 Y:E4 P:E5 SP:FB PPU:102, 75 CYC:8566\n\
D883  EE 78 06  INC $0678 = FF                  A:FF X:55 Y:E4 P:E5 SP:FB PPU:108, 75 CYC:8568\n\
D886  D0 0D     BNE $D895                       A:FF X:55 Y:E4 P:67 SP:FB PPU:126, 75 CYC:8574\n\
D888  30 0B     BMI $D895                       A:FF X:55 Y:E4 P:67 SP:FB PPU:132, 75 CYC:8576\n\
D88A  50 09     BVC $D895                       A:FF X:55 Y:E4 P:67 SP:FB PPU:138, 75 CYC:8578\n\
D88C  90 07     BCC $D895                       A:FF X:55 Y:E4 P:67 SP:FB PPU:144, 75 CYC:8580\n\
D88E  AD 78 06  LDA $0678 = 00                  A:FF X:55 Y:E4 P:67 SP:FB PPU:150, 75 CYC:8582\n\
D891  C9 00     CMP #$00                        A:00 X:55 Y:E4 P:67 SP:FB PPU:162, 75 CYC:8586\n\
D893  F0 04     BEQ $D899                       A:00 X:55 Y:E4 P:67 SP:FB PPU:168, 75 CYC:8588\n\
D899  A9 7F     LDA #$7F                        A:00 X:55 Y:E4 P:67 SP:FB PPU:177, 75 CYC:8591\n\
D89B  8D 78 06  STA $0678 = 00                  A:7F X:55 Y:E4 P:65 SP:FB PPU:183, 75 CYC:8593\n\
D89E  B8        CLV                             A:7F X:55 Y:E4 P:65 SP:FB PPU:195, 75 CYC:8597\n\
D89F  18        CLC                             A:7F X:55 Y:E4 P:25 SP:FB PPU:201, 75 CYC:8599\n\
D8A0  EE 78 06  INC $0678 = 7F                  A:7F X:55 Y:E4 P:24 SP:FB PPU:207, 75 CYC:8601\n\
D8A3  F0 0D     BEQ $D8B2                       A:7F X:55 Y:E4 P:A4 SP:FB PPU:225, 75 CYC:8607\n\
D8A5  10 0B     BPL $D8B2                       A:7F X:55 Y:E4 P:A4 SP:FB PPU:231, 75 CYC:8609\n\
D8A7  70 09     BVS $D8B2                       A:7F X:55 Y:E4 P:A4 SP:FB PPU:237, 75 CYC:8611\n\
D8A9  B0 07     BCS $D8B2                       A:7F X:55 Y:E4 P:A4 SP:FB PPU:243, 75 CYC:8613\n\
D8AB  AD 78 06  LDA $0678 = 80                  A:7F X:55 Y:E4 P:A4 SP:FB PPU:249, 75 CYC:8615\n\
D8AE  C9 80     CMP #$80                        A:80 X:55 Y:E4 P:A4 SP:FB PPU:261, 75 CYC:8619\n\
D8B0  F0 04     BEQ $D8B6                       A:80 X:55 Y:E4 P:27 SP:FB PPU:267, 75 CYC:8621\n\
D8B6  A9 00     LDA #$00                        A:80 X:55 Y:E4 P:27 SP:FB PPU:276, 75 CYC:8624\n\
D8B8  8D 78 06  STA $0678 = 80                  A:00 X:55 Y:E4 P:27 SP:FB PPU:282, 75 CYC:8626\n\
D8BB  24 01     BIT $01 = FF                    A:00 X:55 Y:E4 P:27 SP:FB PPU:294, 75 CYC:8630\n\
D8BD  38        SEC                             A:00 X:55 Y:E4 P:E7 SP:FB PPU:303, 75 CYC:8633\n\
D8BE  CE 78 06  DEC $0678 = 00                  A:00 X:55 Y:E4 P:E7 SP:FB PPU:309, 75 CYC:8635\n\
D8C1  F0 0D     BEQ $D8D0                       A:00 X:55 Y:E4 P:E5 SP:FB PPU:327, 75 CYC:8641\n\
D8C3  10 0B     BPL $D8D0                       A:00 X:55 Y:E4 P:E5 SP:FB PPU:333, 75 CYC:8643\n\
D8C5  50 09     BVC $D8D0                       A:00 X:55 Y:E4 P:E5 SP:FB PPU:339, 75 CYC:8645\n\
D8C7  90 07     BCC $D8D0                       A:00 X:55 Y:E4 P:E5 SP:FB PPU:  4, 76 CYC:8647\n\
D8C9  AD 78 06  LDA $0678 = FF                  A:00 X:55 Y:E4 P:E5 SP:FB PPU: 10, 76 CYC:8649\n\
D8CC  C9 FF     CMP #$FF                        A:FF X:55 Y:E4 P:E5 SP:FB PPU: 22, 76 CYC:8653\n\
D8CE  F0 04     BEQ $D8D4                       A:FF X:55 Y:E4 P:67 SP:FB PPU: 28, 76 CYC:8655\n\
D8D4  A9 80     LDA #$80                        A:FF X:55 Y:E4 P:67 SP:FB PPU: 37, 76 CYC:8658\n\
D8D6  8D 78 06  STA $0678 = FF                  A:80 X:55 Y:E4 P:E5 SP:FB PPU: 43, 76 CYC:8660\n\
D8D9  B8        CLV                             A:80 X:55 Y:E4 P:E5 SP:FB PPU: 55, 76 CYC:8664\n\
D8DA  18        CLC                             A:80 X:55 Y:E4 P:A5 SP:FB PPU: 61, 76 CYC:8666\n\
D8DB  CE 78 06  DEC $0678 = 80                  A:80 X:55 Y:E4 P:A4 SP:FB PPU: 67, 76 CYC:8668\n\
D8DE  F0 0D     BEQ $D8ED                       A:80 X:55 Y:E4 P:24 SP:FB PPU: 85, 76 CYC:8674\n\
D8E0  30 0B     BMI $D8ED                       A:80 X:55 Y:E4 P:24 SP:FB PPU: 91, 76 CYC:8676\n\
D8E2  70 09     BVS $D8ED                       A:80 X:55 Y:E4 P:24 SP:FB PPU: 97, 76 CYC:8678\n\
D8E4  B0 07     BCS $D8ED                       A:80 X:55 Y:E4 P:24 SP:FB PPU:103, 76 CYC:8680\n\
D8E6  AD 78 06  LDA $0678 = 7F                  A:80 X:55 Y:E4 P:24 SP:FB PPU:109, 76 CYC:8682\n\
D8E9  C9 7F     CMP #$7F                        A:7F X:55 Y:E4 P:24 SP:FB PPU:121, 76 CYC:8686\n\
D8EB  F0 04     BEQ $D8F1                       A:7F X:55 Y:E4 P:27 SP:FB PPU:127, 76 CYC:8688\n\
D8F1  A9 01     LDA #$01                        A:7F X:55 Y:E4 P:27 SP:FB PPU:136, 76 CYC:8691\n\
D8F3  8D 78 06  STA $0678 = 7F                  A:01 X:55 Y:E4 P:25 SP:FB PPU:142, 76 CYC:8693\n\
D8F6  CE 78 06  DEC $0678 = 01                  A:01 X:55 Y:E4 P:25 SP:FB PPU:154, 76 CYC:8697\n\
D8F9  F0 04     BEQ $D8FF                       A:01 X:55 Y:E4 P:27 SP:FB PPU:172, 76 CYC:8703\n\
D8FF  60        RTS                             A:01 X:55 Y:E4 P:27 SP:FB PPU:181, 76 CYC:8706\n\
C618  20 00 D9  JSR $D900                       A:01 X:55 Y:E4 P:27 SP:FD PPU:199, 76 CYC:8712\n\
D900  A9 A3     LDA #$A3                        A:01 X:55 Y:E4 P:27 SP:FB PPU:217, 76 CYC:8718\n\
D902  85 33     STA $33 = 00                    A:A3 X:55 Y:E4 P:A5 SP:FB PPU:223, 76 CYC:8720\n\
D904  A9 89     LDA #$89                        A:A3 X:55 Y:E4 P:A5 SP:FB PPU:232, 76 CYC:8723\n\
D906  8D 00 03  STA $0300 = 70                  A:89 X:55 Y:E4 P:A5 SP:FB PPU:238, 76 CYC:8725\n\
D909  A9 12     LDA #$12                        A:89 X:55 Y:E4 P:A5 SP:FB PPU:250, 76 CYC:8729\n\
D90B  8D 45 02  STA $0245 = 00                  A:12 X:55 Y:E4 P:25 SP:FB PPU:256, 76 CYC:8731\n\
D90E  A9 FF     LDA #$FF                        A:12 X:55 Y:E4 P:25 SP:FB PPU:268, 76 CYC:8735\n\
D910  85 01     STA $01 = FF                    A:FF X:55 Y:E4 P:A5 SP:FB PPU:274, 76 CYC:8737\n\
D912  A2 65     LDX #$65                        A:FF X:55 Y:E4 P:A5 SP:FB PPU:283, 76 CYC:8740\n\
D914  A9 00     LDA #$00                        A:FF X:65 Y:E4 P:25 SP:FB PPU:289, 76 CYC:8742\n\
D916  85 89     STA $89 = 00                    A:00 X:65 Y:E4 P:27 SP:FB PPU:295, 76 CYC:8744\n\
D918  A9 03     LDA #$03                        A:00 X:65 Y:E4 P:27 SP:FB PPU:304, 76 CYC:8747\n\
D91A  85 8A     STA $8A = 00                    A:03 X:65 Y:E4 P:25 SP:FB PPU:310, 76 CYC:8749\n\
D91C  A0 00     LDY #$00                        A:03 X:65 Y:E4 P:25 SP:FB PPU:319, 76 CYC:8752\n\
D91E  38        SEC                             A:03 X:65 Y:00 P:27 SP:FB PPU:325, 76 CYC:8754\n\
D91F  A9 00     LDA #$00                        A:03 X:65 Y:00 P:27 SP:FB PPU:331, 76 CYC:8756\n\
D921  B8        CLV                             A:00 X:65 Y:00 P:27 SP:FB PPU:337, 76 CYC:8758\n\
D922  B1 89     LDA ($89),Y = 0300 @ 0300 = 89  A:00 X:65 Y:00 P:27 SP:FB PPU:  2, 77 CYC:8760\n\
D924  F0 0C     BEQ $D932                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 17, 77 CYC:8765\n\
D926  90 0A     BCC $D932                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 23, 77 CYC:8767\n\
D928  70 08     BVS $D932                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 29, 77 CYC:8769\n\
D92A  C9 89     CMP #$89                        A:89 X:65 Y:00 P:A5 SP:FB PPU: 35, 77 CYC:8771\n\
D92C  D0 04     BNE $D932                       A:89 X:65 Y:00 P:27 SP:FB PPU: 41, 77 CYC:8773\n\
D92E  E0 65     CPX #$65                        A:89 X:65 Y:00 P:27 SP:FB PPU: 47, 77 CYC:8775\n\
D930  F0 04     BEQ $D936                       A:89 X:65 Y:00 P:27 SP:FB PPU: 53, 77 CYC:8777\n\
D936  A9 FF     LDA #$FF                        A:89 X:65 Y:00 P:27 SP:FB PPU: 62, 77 CYC:8780\n\
D938  85 97     STA $97 = 00                    A:FF X:65 Y:00 P:A5 SP:FB PPU: 68, 77 CYC:8782\n\
D93A  85 98     STA $98 = 00                    A:FF X:65 Y:00 P:A5 SP:FB PPU: 77, 77 CYC:8785\n\
D93C  24 98     BIT $98 = FF                    A:FF X:65 Y:00 P:A5 SP:FB PPU: 86, 77 CYC:8788\n\
D93E  A0 34     LDY #$34                        A:FF X:65 Y:00 P:E5 SP:FB PPU: 95, 77 CYC:8791\n\
D940  B1 97     LDA ($97),Y = FFFF @ 0033 = A3  A:FF X:65 Y:34 P:65 SP:FB PPU:101, 77 CYC:8793\n\
D942  C9 A3     CMP #$A3                        A:A3 X:65 Y:34 P:E5 SP:FB PPU:119, 77 CYC:8799\n\
D944  D0 02     BNE $D948                       A:A3 X:65 Y:34 P:67 SP:FB PPU:125, 77 CYC:8801\n\
D946  B0 04     BCS $D94C                       A:A3 X:65 Y:34 P:67 SP:FB PPU:131, 77 CYC:8803\n\
D94C  A5 00     LDA $00 = 00                    A:A3 X:65 Y:34 P:67 SP:FB PPU:140, 77 CYC:8806\n\
D94E  48        PHA                             A:00 X:65 Y:34 P:67 SP:FB PPU:149, 77 CYC:8809\n\
D94F  A9 46     LDA #$46                        A:00 X:65 Y:34 P:67 SP:FA PPU:158, 77 CYC:8812\n\
D951  85 FF     STA $FF = 00                    A:46 X:65 Y:34 P:65 SP:FA PPU:164, 77 CYC:8814\n\
D953  A9 01     LDA #$01                        A:46 X:65 Y:34 P:65 SP:FA PPU:173, 77 CYC:8817\n\
D955  85 00     STA $00 = 00                    A:01 X:65 Y:34 P:65 SP:FA PPU:179, 77 CYC:8819\n\
D957  A0 FF     LDY #$FF                        A:01 X:65 Y:34 P:65 SP:FA PPU:188, 77 CYC:8822\n\
D959  B1 FF     LDA ($FF),Y = 0146 @ 0245 = 12  A:01 X:65 Y:FF P:E5 SP:FA PPU:194, 77 CYC:8824\n\
D95B  C9 12     CMP #$12                        A:12 X:65 Y:FF P:65 SP:FA PPU:212, 77 CYC:8830\n\
D95D  F0 04     BEQ $D963                       A:12 X:65 Y:FF P:67 SP:FA PPU:218, 77 CYC:8832\n\
D963  68        PLA                             A:12 X:65 Y:FF P:67 SP:FA PPU:227, 77 CYC:8835\n\
D964  85 00     STA $00 = 01                    A:00 X:65 Y:FF P:67 SP:FB PPU:239, 77 CYC:8839\n\
D966  A2 ED     LDX #$ED                        A:00 X:65 Y:FF P:67 SP:FB PPU:248, 77 CYC:8842\n\
D968  A9 00     LDA #$00                        A:00 X:ED Y:FF P:E5 SP:FB PPU:254, 77 CYC:8844\n\
D96A  85 33     STA $33 = A3                    A:00 X:ED Y:FF P:67 SP:FB PPU:260, 77 CYC:8846\n\
D96C  A9 04     LDA #$04                        A:00 X:ED Y:FF P:67 SP:FB PPU:269, 77 CYC:8849\n\
D96E  85 34     STA $34 = 00                    A:04 X:ED Y:FF P:65 SP:FB PPU:275, 77 CYC:8851\n\
D970  A0 00     LDY #$00                        A:04 X:ED Y:FF P:65 SP:FB PPU:284, 77 CYC:8854\n\
D972  18        CLC                             A:04 X:ED Y:00 P:67 SP:FB PPU:290, 77 CYC:8856\n\
D973  A9 FF     LDA #$FF                        A:04 X:ED Y:00 P:66 SP:FB PPU:296, 77 CYC:8858\n\
D975  85 01     STA $01 = FF                    A:FF X:ED Y:00 P:E4 SP:FB PPU:302, 77 CYC:8860\n\
D977  24 01     BIT $01 = FF                    A:FF X:ED Y:00 P:E4 SP:FB PPU:311, 77 CYC:8863\n\
D979  A9 AA     LDA #$AA                        A:FF X:ED Y:00 P:E4 SP:FB PPU:320, 77 CYC:8866\n\
D97B  8D 00 04  STA $0400 = AD                  A:AA X:ED Y:00 P:E4 SP:FB PPU:326, 77 CYC:8868\n\
D97E  A9 55     LDA #$55                        A:AA X:ED Y:00 P:E4 SP:FB PPU:338, 77 CYC:8872\n\
D980  11 33     ORA ($33),Y = 0400 @ 0400 = AA  A:55 X:ED Y:00 P:64 SP:FB PPU:  3, 78 CYC:8874\n\
D982  B0 08     BCS $D98C                       A:FF X:ED Y:00 P:E4 SP:FB PPU: 18, 78 CYC:8879\n\
D984  10 06     BPL $D98C                       A:FF X:ED Y:00 P:E4 SP:FB PPU: 24, 78 CYC:8881\n\
D986  C9 FF     CMP #$FF                        A:FF X:ED Y:00 P:E4 SP:FB PPU: 30, 78 CYC:8883\n\
D988  D0 02     BNE $D98C                       A:FF X:ED Y:00 P:67 SP:FB PPU: 36, 78 CYC:8885\n\
D98A  70 02     BVS $D98E                       A:FF X:ED Y:00 P:67 SP:FB PPU: 42, 78 CYC:8887\n\
D98E  E8        INX                             A:FF X:ED Y:00 P:67 SP:FB PPU: 51, 78 CYC:8890\n\
D98F  38        SEC                             A:FF X:EE Y:00 P:E5 SP:FB PPU: 57, 78 CYC:8892\n\
D990  B8        CLV                             A:FF X:EE Y:00 P:E5 SP:FB PPU: 63, 78 CYC:8894\n\
D991  A9 00     LDA #$00                        A:FF X:EE Y:00 P:A5 SP:FB PPU: 69, 78 CYC:8896\n\
D993  11 33     ORA ($33),Y = 0400 @ 0400 = AA  A:00 X:EE Y:00 P:27 SP:FB PPU: 75, 78 CYC:8898\n\
D995  F0 06     BEQ $D99D                       A:AA X:EE Y:00 P:A5 SP:FB PPU: 90, 78 CYC:8903\n\
D997  70 04     BVS $D99D                       A:AA X:EE Y:00 P:A5 SP:FB PPU: 96, 78 CYC:8905\n\
D999  90 02     BCC $D99D                       A:AA X:EE Y:00 P:A5 SP:FB PPU:102, 78 CYC:8907\n\
D99B  30 02     BMI $D99F                       A:AA X:EE Y:00 P:A5 SP:FB PPU:108, 78 CYC:8909\n\
D99F  E8        INX                             A:AA X:EE Y:00 P:A5 SP:FB PPU:117, 78 CYC:8912\n\
D9A0  18        CLC                             A:AA X:EF Y:00 P:A5 SP:FB PPU:123, 78 CYC:8914\n\
D9A1  24 01     BIT $01 = FF                    A:AA X:EF Y:00 P:A4 SP:FB PPU:129, 78 CYC:8916\n\
D9A3  A9 55     LDA #$55                        A:AA X:EF Y:00 P:E4 SP:FB PPU:138, 78 CYC:8919\n\
D9A5  31 33     AND ($33),Y = 0400 @ 0400 = AA  A:55 X:EF Y:00 P:64 SP:FB PPU:144, 78 CYC:8921\n\
D9A7  D0 06     BNE $D9AF                       A:00 X:EF Y:00 P:66 SP:FB PPU:159, 78 CYC:8926\n\
D9A9  50 04     BVC $D9AF                       A:00 X:EF Y:00 P:66 SP:FB PPU:165, 78 CYC:8928\n\
D9AB  B0 02     BCS $D9AF                       A:00 X:EF Y:00 P:66 SP:FB PPU:171, 78 CYC:8930\n\
D9AD  10 02     BPL $D9B1                       A:00 X:EF Y:00 P:66 SP:FB PPU:177, 78 CYC:8932\n\
D9B1  E8        INX                             A:00 X:EF Y:00 P:66 SP:FB PPU:186, 78 CYC:8935\n\
D9B2  38        SEC                             A:00 X:F0 Y:00 P:E4 SP:FB PPU:192, 78 CYC:8937\n\
D9B3  B8        CLV                             A:00 X:F0 Y:00 P:E5 SP:FB PPU:198, 78 CYC:8939\n\
D9B4  A9 EF     LDA #$EF                        A:00 X:F0 Y:00 P:A5 SP:FB PPU:204, 78 CYC:8941\n\
D9B6  8D 00 04  STA $0400 = AA                  A:EF X:F0 Y:00 P:A5 SP:FB PPU:210, 78 CYC:8943\n\
D9B9  A9 F8     LDA #$F8                        A:EF X:F0 Y:00 P:A5 SP:FB PPU:222, 78 CYC:8947\n\
D9BB  31 33     AND ($33),Y = 0400 @ 0400 = EF  A:F8 X:F0 Y:00 P:A5 SP:FB PPU:228, 78 CYC:8949\n\
D9BD  90 08     BCC $D9C7                       A:E8 X:F0 Y:00 P:A5 SP:FB PPU:243, 78 CYC:8954\n\
D9BF  10 06     BPL $D9C7                       A:E8 X:F0 Y:00 P:A5 SP:FB PPU:249, 78 CYC:8956\n\
D9C1  C9 E8     CMP #$E8                        A:E8 X:F0 Y:00 P:A5 SP:FB PPU:255, 78 CYC:8958\n\
D9C3  D0 02     BNE $D9C7                       A:E8 X:F0 Y:00 P:27 SP:FB PPU:261, 78 CYC:8960\n\
D9C5  50 02     BVC $D9C9                       A:E8 X:F0 Y:00 P:27 SP:FB PPU:267, 78 CYC:8962\n\
D9C9  E8        INX                             A:E8 X:F0 Y:00 P:27 SP:FB PPU:276, 78 CYC:8965\n\
D9CA  18        CLC                             A:E8 X:F1 Y:00 P:A5 SP:FB PPU:282, 78 CYC:8967\n\
D9CB  24 01     BIT $01 = FF                    A:E8 X:F1 Y:00 P:A4 SP:FB PPU:288, 78 CYC:8969\n\
D9CD  A9 AA     LDA #$AA                        A:E8 X:F1 Y:00 P:E4 SP:FB PPU:297, 78 CYC:8972\n\
D9CF  8D 00 04  STA $0400 = EF                  A:AA X:F1 Y:00 P:E4 SP:FB PPU:303, 78 CYC:8974\n\
D9D2  A9 5F     LDA #$5F                        A:AA X:F1 Y:00 P:E4 SP:FB PPU:315, 78 CYC:8978\n\
D9D4  51 33     EOR ($33),Y = 0400 @ 0400 = AA  A:5F X:F1 Y:00 P:64 SP:FB PPU:321, 78 CYC:8980\n\
D9D6  B0 08     BCS $D9E0                       A:F5 X:F1 Y:00 P:E4 SP:FB PPU:336, 78 CYC:8985\n\
D9D8  10 06     BPL $D9E0                       A:F5 X:F1 Y:00 P:E4 SP:FB PPU:  1, 79 CYC:8987\n\
D9DA  C9 F5     CMP #$F5                        A:F5 X:F1 Y:00 P:E4 SP:FB PPU:  7, 79 CYC:8989\n\
D9DC  D0 02     BNE $D9E0                       A:F5 X:F1 Y:00 P:67 SP:FB PPU: 13, 79 CYC:8991\n\
D9DE  70 02     BVS $D9E2                       A:F5 X:F1 Y:00 P:67 SP:FB PPU: 19, 79 CYC:8993\n\
D9E2  E8        INX                             A:F5 X:F1 Y:00 P:67 SP:FB PPU: 28, 79 CYC:8996\n\
D9E3  38        SEC                             A:F5 X:F2 Y:00 P:E5 SP:FB PPU: 34, 79 CYC:8998\n\
D9E4  B8        CLV                             A:F5 X:F2 Y:00 P:E5 SP:FB PPU: 40, 79 CYC:9000\n\
D9E5  A9 70     LDA #$70                        A:F5 X:F2 Y:00 P:A5 SP:FB PPU: 46, 79 CYC:9002\n\
D9E7  8D 00 04  STA $0400 = AA                  A:70 X:F2 Y:00 P:25 SP:FB PPU: 52, 79 CYC:9004\n\
D9EA  51 33     EOR ($33),Y = 0400 @ 0400 = 70  A:70 X:F2 Y:00 P:25 SP:FB PPU: 64, 79 CYC:9008\n\
D9EC  D0 06     BNE $D9F4                       A:00 X:F2 Y:00 P:27 SP:FB PPU: 79, 79 CYC:9013\n\
D9EE  70 04     BVS $D9F4                       A:00 X:F2 Y:00 P:27 SP:FB PPU: 85, 79 CYC:9015\n\
D9F0  90 02     BCC $D9F4                       A:00 X:F2 Y:00 P:27 SP:FB PPU: 91, 79 CYC:9017\n\
D9F2  10 02     BPL $D9F6                       A:00 X:F2 Y:00 P:27 SP:FB PPU: 97, 79 CYC:9019\n\
D9F6  E8        INX                             A:00 X:F2 Y:00 P:27 SP:FB PPU:106, 79 CYC:9022\n\
D9F7  18        CLC                             A:00 X:F3 Y:00 P:A5 SP:FB PPU:112, 79 CYC:9024\n\
D9F8  24 01     BIT $01 = FF                    A:00 X:F3 Y:00 P:A4 SP:FB PPU:118, 79 CYC:9026\n\
D9FA  A9 69     LDA #$69                        A:00 X:F3 Y:00 P:E6 SP:FB PPU:127, 79 CYC:9029\n\
D9FC  8D 00 04  STA $0400 = 70                  A:69 X:F3 Y:00 P:64 SP:FB PPU:133, 79 CYC:9031\n\
D9FF  A9 00     LDA #$00                        A:69 X:F3 Y:00 P:64 SP:FB PPU:145, 79 CYC:9035\n\
DA01  71 33     ADC ($33),Y = 0400 @ 0400 = 69  A:00 X:F3 Y:00 P:66 SP:FB PPU:151, 79 CYC:9037\n\
DA03  30 08     BMI $DA0D                       A:69 X:F3 Y:00 P:24 SP:FB PPU:166, 79 CYC:9042\n\
DA05  B0 06     BCS $DA0D                       A:69 X:F3 Y:00 P:24 SP:FB PPU:172, 79 CYC:9044\n\
DA07  C9 69     CMP #$69                        A:69 X:F3 Y:00 P:24 SP:FB PPU:178, 79 CYC:9046\n\
DA09  D0 02     BNE $DA0D                       A:69 X:F3 Y:00 P:27 SP:FB PPU:184, 79 CYC:9048\n\
DA0B  50 02     BVC $DA0F                       A:69 X:F3 Y:00 P:27 SP:FB PPU:190, 79 CYC:9050\n\
DA0F  E8        INX                             A:69 X:F3 Y:00 P:27 SP:FB PPU:199, 79 CYC:9053\n\
DA10  38        SEC                             A:69 X:F4 Y:00 P:A5 SP:FB PPU:205, 79 CYC:9055\n\
DA11  24 01     BIT $01 = FF                    A:69 X:F4 Y:00 P:A5 SP:FB PPU:211, 79 CYC:9057\n\
DA13  A9 00     LDA #$00                        A:69 X:F4 Y:00 P:E5 SP:FB PPU:220, 79 CYC:9060\n\
DA15  71 33     ADC ($33),Y = 0400 @ 0400 = 69  A:00 X:F4 Y:00 P:67 SP:FB PPU:226, 79 CYC:9062\n\
DA17  30 08     BMI $DA21                       A:6A X:F4 Y:00 P:24 SP:FB PPU:241, 79 CYC:9067\n\
DA19  B0 06     BCS $DA21                       A:6A X:F4 Y:00 P:24 SP:FB PPU:247, 79 CYC:9069\n\
DA1B  C9 6A     CMP #$6A                        A:6A X:F4 Y:00 P:24 SP:FB PPU:253, 79 CYC:9071\n\
DA1D  D0 02     BNE $DA21                       A:6A X:F4 Y:00 P:27 SP:FB PPU:259, 79 CYC:9073\n\
DA1F  50 02     BVC $DA23                       A:6A X:F4 Y:00 P:27 SP:FB PPU:265, 79 CYC:9075\n\
DA23  E8        INX                             A:6A X:F4 Y:00 P:27 SP:FB PPU:274, 79 CYC:9078\n\
DA24  38        SEC                             A:6A X:F5 Y:00 P:A5 SP:FB PPU:280, 79 CYC:9080\n\
DA25  B8        CLV                             A:6A X:F5 Y:00 P:A5 SP:FB PPU:286, 79 CYC:9082\n\
DA26  A9 7F     LDA #$7F                        A:6A X:F5 Y:00 P:A5 SP:FB PPU:292, 79 CYC:9084\n\
DA28  8D 00 04  STA $0400 = 69                  A:7F X:F5 Y:00 P:25 SP:FB PPU:298, 79 CYC:9086\n\
DA2B  71 33     ADC ($33),Y = 0400 @ 0400 = 7F  A:7F X:F5 Y:00 P:25 SP:FB PPU:310, 79 CYC:9090\n\
DA2D  10 08     BPL $DA37                       A:FF X:F5 Y:00 P:E4 SP:FB PPU:325, 79 CYC:9095\n\
DA2F  B0 06     BCS $DA37                       A:FF X:F5 Y:00 P:E4 SP:FB PPU:331, 79 CYC:9097\n\
DA31  C9 FF     CMP #$FF                        A:FF X:F5 Y:00 P:E4 SP:FB PPU:337, 79 CYC:9099\n\
DA33  D0 02     BNE $DA37                       A:FF X:F5 Y:00 P:67 SP:FB PPU:  2, 80 CYC:9101\n\
DA35  70 02     BVS $DA39                       A:FF X:F5 Y:00 P:67 SP:FB PPU:  8, 80 CYC:9103\n\
DA39  E8        INX                             A:FF X:F5 Y:00 P:67 SP:FB PPU: 17, 80 CYC:9106\n\
DA3A  18        CLC                             A:FF X:F6 Y:00 P:E5 SP:FB PPU: 23, 80 CYC:9108\n\
DA3B  24 01     BIT $01 = FF                    A:FF X:F6 Y:00 P:E4 SP:FB PPU: 29, 80 CYC:9110\n\
DA3D  A9 80     LDA #$80                        A:FF X:F6 Y:00 P:E4 SP:FB PPU: 38, 80 CYC:9113\n\
DA3F  8D 00 04  STA $0400 = 7F                  A:80 X:F6 Y:00 P:E4 SP:FB PPU: 44, 80 CYC:9115\n\
DA42  A9 7F     LDA #$7F                        A:80 X:F6 Y:00 P:E4 SP:FB PPU: 56, 80 CYC:9119\n\
DA44  71 33     ADC ($33),Y = 0400 @ 0400 = 80  A:7F X:F6 Y:00 P:64 SP:FB PPU: 62, 80 CYC:9121\n\
DA46  10 08     BPL $DA50                       A:FF X:F6 Y:00 P:A4 SP:FB PPU: 77, 80 CYC:9126\n\
DA48  B0 06     BCS $DA50                       A:FF X:F6 Y:00 P:A4 SP:FB PPU: 83, 80 CYC:9128\n\
DA4A  C9 FF     CMP #$FF                        A:FF X:F6 Y:00 P:A4 SP:FB PPU: 89, 80 CYC:9130\n\
DA4C  D0 02     BNE $DA50                       A:FF X:F6 Y:00 P:27 SP:FB PPU: 95, 80 CYC:9132\n\
DA4E  50 02     BVC $DA52                       A:FF X:F6 Y:00 P:27 SP:FB PPU:101, 80 CYC:9134\n\
DA52  E8        INX                             A:FF X:F6 Y:00 P:27 SP:FB PPU:110, 80 CYC:9137\n\
DA53  38        SEC                             A:FF X:F7 Y:00 P:A5 SP:FB PPU:116, 80 CYC:9139\n\
DA54  B8        CLV                             A:FF X:F7 Y:00 P:A5 SP:FB PPU:122, 80 CYC:9141\n\
DA55  A9 80     LDA #$80                        A:FF X:F7 Y:00 P:A5 SP:FB PPU:128, 80 CYC:9143\n\
DA57  8D 00 04  STA $0400 = 80                  A:80 X:F7 Y:00 P:A5 SP:FB PPU:134, 80 CYC:9145\n\
DA5A  A9 7F     LDA #$7F                        A:80 X:F7 Y:00 P:A5 SP:FB PPU:146, 80 CYC:9149\n\
DA5C  71 33     ADC ($33),Y = 0400 @ 0400 = 80  A:7F X:F7 Y:00 P:25 SP:FB PPU:152, 80 CYC:9151\n\
DA5E  D0 06     BNE $DA66                       A:00 X:F7 Y:00 P:27 SP:FB PPU:167, 80 CYC:9156\n\
DA60  30 04     BMI $DA66                       A:00 X:F7 Y:00 P:27 SP:FB PPU:173, 80 CYC:9158\n\
DA62  70 02     BVS $DA66                       A:00 X:F7 Y:00 P:27 SP:FB PPU:179, 80 CYC:9160\n\
DA64  B0 02     BCS $DA68                       A:00 X:F7 Y:00 P:27 SP:FB PPU:185, 80 CYC:9162\n\
DA68  E8        INX                             A:00 X:F7 Y:00 P:27 SP:FB PPU:194, 80 CYC:9165\n\
DA69  24 01     BIT $01 = FF                    A:00 X:F8 Y:00 P:A5 SP:FB PPU:200, 80 CYC:9167\n\
DA6B  A9 40     LDA #$40                        A:00 X:F8 Y:00 P:E7 SP:FB PPU:209, 80 CYC:9170\n\
DA6D  8D 00 04  STA $0400 = 80                  A:40 X:F8 Y:00 P:65 SP:FB PPU:215, 80 CYC:9172\n\
DA70  D1 33     CMP ($33),Y = 0400 @ 0400 = 40  A:40 X:F8 Y:00 P:65 SP:FB PPU:227, 80 CYC:9176\n\
DA72  30 06     BMI $DA7A                       A:40 X:F8 Y:00 P:67 SP:FB PPU:242, 80 CYC:9181\n\
DA74  90 04     BCC $DA7A                       A:40 X:F8 Y:00 P:67 SP:FB PPU:248, 80 CYC:9183\n\
DA76  D0 02     BNE $DA7A                       A:40 X:F8 Y:00 P:67 SP:FB PPU:254, 80 CYC:9185\n\
DA78  70 02     BVS $DA7C                       A:40 X:F8 Y:00 P:67 SP:FB PPU:260, 80 CYC:9187\n\
DA7C  E8        INX                             A:40 X:F8 Y:00 P:67 SP:FB PPU:269, 80 CYC:9190\n\
DA7D  B8        CLV                             A:40 X:F9 Y:00 P:E5 SP:FB PPU:275, 80 CYC:9192\n\
DA7E  CE 00 04  DEC $0400 = 40                  A:40 X:F9 Y:00 P:A5 SP:FB PPU:281, 80 CYC:9194\n\
DA81  D1 33     CMP ($33),Y = 0400 @ 0400 = 3F  A:40 X:F9 Y:00 P:25 SP:FB PPU:299, 80 CYC:9200\n\
DA83  F0 06     BEQ $DA8B                       A:40 X:F9 Y:00 P:25 SP:FB PPU:314, 80 CYC:9205\n\
DA85  30 04     BMI $DA8B                       A:40 X:F9 Y:00 P:25 SP:FB PPU:320, 80 CYC:9207\n\
DA87  90 02     BCC $DA8B                       A:40 X:F9 Y:00 P:25 SP:FB PPU:326, 80 CYC:9209\n\
DA89  50 02     BVC $DA8D                       A:40 X:F9 Y:00 P:25 SP:FB PPU:332, 80 CYC:9211\n\
DA8D  E8        INX                             A:40 X:F9 Y:00 P:25 SP:FB PPU:  0, 81 CYC:9214\n\
DA8E  EE 00 04  INC $0400 = 3F                  A:40 X:FA Y:00 P:A5 SP:FB PPU:  6, 81 CYC:9216\n\
DA91  EE 00 04  INC $0400 = 40                  A:40 X:FA Y:00 P:25 SP:FB PPU: 24, 81 CYC:9222\n\
DA94  D1 33     CMP ($33),Y = 0400 @ 0400 = 41  A:40 X:FA Y:00 P:25 SP:FB PPU: 42, 81 CYC:9228\n\
DA96  F0 02     BEQ $DA9A                       A:40 X:FA Y:00 P:A4 SP:FB PPU: 57, 81 CYC:9233\n\
DA98  30 02     BMI $DA9C                       A:40 X:FA Y:00 P:A4 SP:FB PPU: 63, 81 CYC:9235\n\
DA9C  E8        INX                             A:40 X:FA Y:00 P:A4 SP:FB PPU: 72, 81 CYC:9238\n\
DA9D  A9 00     LDA #$00                        A:40 X:FB Y:00 P:A4 SP:FB PPU: 78, 81 CYC:9240\n\
DA9F  8D 00 04  STA $0400 = 41                  A:00 X:FB Y:00 P:26 SP:FB PPU: 84, 81 CYC:9242\n\
DAA2  A9 80     LDA #$80                        A:00 X:FB Y:00 P:26 SP:FB PPU: 96, 81 CYC:9246\n\
DAA4  D1 33     CMP ($33),Y = 0400 @ 0400 = 00  A:80 X:FB Y:00 P:A4 SP:FB PPU:102, 81 CYC:9248\n\
DAA6  F0 04     BEQ $DAAC                       A:80 X:FB Y:00 P:A5 SP:FB PPU:117, 81 CYC:9253\n\
DAA8  10 02     BPL $DAAC                       A:80 X:FB Y:00 P:A5 SP:FB PPU:123, 81 CYC:9255\n\
DAAA  B0 02     BCS $DAAE                       A:80 X:FB Y:00 P:A5 SP:FB PPU:129, 81 CYC:9257\n\
DAAE  E8        INX                             A:80 X:FB Y:00 P:A5 SP:FB PPU:138, 81 CYC:9260\n\
DAAF  A0 80     LDY #$80                        A:80 X:FC Y:00 P:A5 SP:FB PPU:144, 81 CYC:9262\n\
DAB1  8C 00 04  STY $0400 = 00                  A:80 X:FC Y:80 P:A5 SP:FB PPU:150, 81 CYC:9264\n\
DAB4  A0 00     LDY #$00                        A:80 X:FC Y:80 P:A5 SP:FB PPU:162, 81 CYC:9268\n\
DAB6  D1 33     CMP ($33),Y = 0400 @ 0400 = 80  A:80 X:FC Y:00 P:27 SP:FB PPU:168, 81 CYC:9270\n\
DAB8  D0 04     BNE $DABE                       A:80 X:FC Y:00 P:27 SP:FB PPU:183, 81 CYC:9275\n\
DABA  30 02     BMI $DABE                       A:80 X:FC Y:00 P:27 SP:FB PPU:189, 81 CYC:9277\n\
DABC  B0 02     BCS $DAC0                       A:80 X:FC Y:00 P:27 SP:FB PPU:195, 81 CYC:9279\n\
DAC0  E8        INX                             A:80 X:FC Y:00 P:27 SP:FB PPU:204, 81 CYC:9282\n\
DAC1  EE 00 04  INC $0400 = 80                  A:80 X:FD Y:00 P:A5 SP:FB PPU:210, 81 CYC:9284\n\
DAC4  D1 33     CMP ($33),Y = 0400 @ 0400 = 81  A:80 X:FD Y:00 P:A5 SP:FB PPU:228, 81 CYC:9290\n\
DAC6  B0 04     BCS $DACC                       A:80 X:FD Y:00 P:A4 SP:FB PPU:243, 81 CYC:9295\n\
DAC8  F0 02     BEQ $DACC                       A:80 X:FD Y:00 P:A4 SP:FB PPU:249, 81 CYC:9297\n\
DACA  30 02     BMI $DACE                       A:80 X:FD Y:00 P:A4 SP:FB PPU:255, 81 CYC:9299\n\
DACE  E8        INX                             A:80 X:FD Y:00 P:A4 SP:FB PPU:264, 81 CYC:9302\n\
DACF  CE 00 04  DEC $0400 = 81                  A:80 X:FE Y:00 P:A4 SP:FB PPU:270, 81 CYC:9304\n\
DAD2  CE 00 04  DEC $0400 = 80                  A:80 X:FE Y:00 P:A4 SP:FB PPU:288, 81 CYC:9310\n\
DAD5  D1 33     CMP ($33),Y = 0400 @ 0400 = 7F  A:80 X:FE Y:00 P:24 SP:FB PPU:306, 81 CYC:9316\n\
DAD7  90 04     BCC $DADD                       A:80 X:FE Y:00 P:25 SP:FB PPU:321, 81 CYC:9321\n\
DAD9  F0 02     BEQ $DADD                       A:80 X:FE Y:00 P:25 SP:FB PPU:327, 81 CYC:9323\n\
DADB  10 02     BPL $DADF                       A:80 X:FE Y:00 P:25 SP:FB PPU:333, 81 CYC:9325\n\
DADF  60        RTS                             A:80 X:FE Y:00 P:25 SP:FB PPU:  1, 82 CYC:9328\n\
C61B  A5 00     LDA $00 = 00                    A:80 X:FE Y:00 P:25 SP:FD PPU: 19, 82 CYC:9334\n\
C61D  85 10     STA $10 = 00                    A:00 X:FE Y:00 P:27 SP:FD PPU: 28, 82 CYC:9337\n\
C61F  A9 00     LDA #$00                        A:00 X:FE Y:00 P:27 SP:FD PPU: 37, 82 CYC:9340\n\
C621  85 00     STA $00 = 00                    A:00 X:FE Y:00 P:27 SP:FD PPU: 43, 82 CYC:9342\n\
C623  20 E0 DA  JSR $DAE0                       A:00 X:FE Y:00 P:27 SP:FD PPU: 52, 82 CYC:9345\n\
DAE0  A9 00     LDA #$00                        A:00 X:FE Y:00 P:27 SP:FB PPU: 70, 82 CYC:9351\n\
DAE2  85 33     STA $33 = 00                    A:00 X:FE Y:00 P:27 SP:FB PPU: 76, 82 CYC:9353\n\
DAE4  A9 04     LDA #$04                        A:00 X:FE Y:00 P:27 SP:FB PPU: 85, 82 CYC:9356\n\
DAE6  85 34     STA $34 = 04                    A:04 X:FE Y:00 P:25 SP:FB PPU: 91, 82 CYC:9358\n\
DAE8  A0 00     LDY #$00                        A:04 X:FE Y:00 P:25 SP:FB PPU:100, 82 CYC:9361\n\
DAEA  A2 01     LDX #$01                        A:04 X:FE Y:00 P:27 SP:FB PPU:106, 82 CYC:9363\n\
DAEC  24 01     BIT $01 = FF                    A:04 X:01 Y:00 P:25 SP:FB PPU:112, 82 CYC:9365\n\
DAEE  A9 40     LDA #$40                        A:04 X:01 Y:00 P:E5 SP:FB PPU:121, 82 CYC:9368\n\
DAF0  8D 00 04  STA $0400 = 7F                  A:40 X:01 Y:00 P:65 SP:FB PPU:127, 82 CYC:9370\n\
DAF3  38        SEC                             A:40 X:01 Y:00 P:65 SP:FB PPU:139, 82 CYC:9374\n\
DAF4  F1 33     SBC ($33),Y = 0400 @ 0400 = 40  A:40 X:01 Y:00 P:65 SP:FB PPU:145, 82 CYC:9376\n\
DAF6  30 0A     BMI $DB02                       A:00 X:01 Y:00 P:27 SP:FB PPU:160, 82 CYC:9381\n\
DAF8  90 08     BCC $DB02                       A:00 X:01 Y:00 P:27 SP:FB PPU:166, 82 CYC:9383\n\
DAFA  D0 06     BNE $DB02                       A:00 X:01 Y:00 P:27 SP:FB PPU:172, 82 CYC:9385\n\
DAFC  70 04     BVS $DB02                       A:00 X:01 Y:00 P:27 SP:FB PPU:178, 82 CYC:9387\n\
DAFE  C9 00     CMP #$00                        A:00 X:01 Y:00 P:27 SP:FB PPU:184, 82 CYC:9389\n\
DB00  F0 02     BEQ $DB04                       A:00 X:01 Y:00 P:27 SP:FB PPU:190, 82 CYC:9391\n\
DB04  E8        INX                             A:00 X:01 Y:00 P:27 SP:FB PPU:199, 82 CYC:9394\n\
DB05  B8        CLV                             A:00 X:02 Y:00 P:25 SP:FB PPU:205, 82 CYC:9396\n\
DB06  38        SEC                             A:00 X:02 Y:00 P:25 SP:FB PPU:211, 82 CYC:9398\n\
DB07  A9 40     LDA #$40                        A:00 X:02 Y:00 P:25 SP:FB PPU:217, 82 CYC:9400\n\
DB09  CE 00 04  DEC $0400 = 40                  A:40 X:02 Y:00 P:25 SP:FB PPU:223, 82 CYC:9402\n\
DB0C  F1 33     SBC ($33),Y = 0400 @ 0400 = 3F  A:40 X:02 Y:00 P:25 SP:FB PPU:241, 82 CYC:9408\n\
DB0E  F0 0A     BEQ $DB1A                       A:01 X:02 Y:00 P:25 SP:FB PPU:256, 82 CYC:9413\n\
DB10  30 08     BMI $DB1A                       A:01 X:02 Y:00 P:25 SP:FB PPU:262, 82 CYC:9415\n\
DB12  90 06     BCC $DB1A                       A:01 X:02 Y:00 P:25 SP:FB PPU:268, 82 CYC:9417\n\
DB14  70 04     BVS $DB1A                       A:01 X:02 Y:00 P:25 SP:FB PPU:274, 82 CYC:9419\n\
DB16  C9 01     CMP #$01                        A:01 X:02 Y:00 P:25 SP:FB PPU:280, 82 CYC:9421\n\
DB18  F0 02     BEQ $DB1C                       A:01 X:02 Y:00 P:27 SP:FB PPU:286, 82 CYC:9423\n\
DB1C  E8        INX                             A:01 X:02 Y:00 P:27 SP:FB PPU:295, 82 CYC:9426\n\
DB1D  A9 40     LDA #$40                        A:01 X:03 Y:00 P:25 SP:FB PPU:301, 82 CYC:9428\n\
DB1F  38        SEC                             A:40 X:03 Y:00 P:25 SP:FB PPU:307, 82 CYC:9430\n\
DB20  24 01     BIT $01 = FF                    A:40 X:03 Y:00 P:25 SP:FB PPU:313, 82 CYC:9432\n\
DB22  EE 00 04  INC $0400 = 3F                  A:40 X:03 Y:00 P:E5 SP:FB PPU:322, 82 CYC:9435\n\
DB25  EE 00 04  INC $0400 = 40                  A:40 X:03 Y:00 P:65 SP:FB PPU:340, 82 CYC:9441\n\
DB28  F1 33     SBC ($33),Y = 0400 @ 0400 = 41  A:40 X:03 Y:00 P:65 SP:FB PPU: 17, 83 CYC:9447\n\
DB2A  B0 0A     BCS $DB36                       A:FF X:03 Y:00 P:A4 SP:FB PPU: 32, 83 CYC:9452\n\
DB2C  F0 08     BEQ $DB36                       A:FF X:03 Y:00 P:A4 SP:FB PPU: 38, 83 CYC:9454\n\
DB2E  10 06     BPL $DB36                       A:FF X:03 Y:00 P:A4 SP:FB PPU: 44, 83 CYC:9456\n\
DB30  70 04     BVS $DB36                       A:FF X:03 Y:00 P:A4 SP:FB PPU: 50, 83 CYC:9458\n\
DB32  C9 FF     CMP #$FF                        A:FF X:03 Y:00 P:A4 SP:FB PPU: 56, 83 CYC:9460\n\
DB34  F0 02     BEQ $DB38                       A:FF X:03 Y:00 P:27 SP:FB PPU: 62, 83 CYC:9462\n\
DB38  E8        INX                             A:FF X:03 Y:00 P:27 SP:FB PPU: 71, 83 CYC:9465\n\
DB39  18        CLC                             A:FF X:04 Y:00 P:25 SP:FB PPU: 77, 83 CYC:9467\n\
DB3A  A9 00     LDA #$00                        A:FF X:04 Y:00 P:24 SP:FB PPU: 83, 83 CYC:9469\n\
DB3C  8D 00 04  STA $0400 = 41                  A:00 X:04 Y:00 P:26 SP:FB PPU: 89, 83 CYC:9471\n\
DB3F  A9 80     LDA #$80                        A:00 X:04 Y:00 P:26 SP:FB PPU:101, 83 CYC:9475\n\
DB41  F1 33     SBC ($33),Y = 0400 @ 0400 = 00  A:80 X:04 Y:00 P:A4 SP:FB PPU:107, 83 CYC:9477\n\
DB43  90 04     BCC $DB49                       A:7F X:04 Y:00 P:65 SP:FB PPU:122, 83 CYC:9482\n\
DB45  C9 7F     CMP #$7F                        A:7F X:04 Y:00 P:65 SP:FB PPU:128, 83 CYC:9484\n\
DB47  F0 02     BEQ $DB4B                       A:7F X:04 Y:00 P:67 SP:FB PPU:134, 83 CYC:9486\n\
DB4B  E8        INX                             A:7F X:04 Y:00 P:67 SP:FB PPU:143, 83 CYC:9489\n\
DB4C  38        SEC                             A:7F X:05 Y:00 P:65 SP:FB PPU:149, 83 CYC:9491\n\
DB4D  A9 7F     LDA #$7F                        A:7F X:05 Y:00 P:65 SP:FB PPU:155, 83 CYC:9493\n\
DB4F  8D 00 04  STA $0400 = 00                  A:7F X:05 Y:00 P:65 SP:FB PPU:161, 83 CYC:9495\n\
DB52  A9 81     LDA #$81                        A:7F X:05 Y:00 P:65 SP:FB PPU:173, 83 CYC:9499\n\
DB54  F1 33     SBC ($33),Y = 0400 @ 0400 = 7F  A:81 X:05 Y:00 P:E5 SP:FB PPU:179, 83 CYC:9501\n\
DB56  50 06     BVC $DB5E                       A:02 X:05 Y:00 P:65 SP:FB PPU:194, 83 CYC:9506\n\
DB58  90 04     BCC $DB5E                       A:02 X:05 Y:00 P:65 SP:FB PPU:200, 83 CYC:9508\n\
DB5A  C9 02     CMP #$02                        A:02 X:05 Y:00 P:65 SP:FB PPU:206, 83 CYC:9510\n\
DB5C  F0 02     BEQ $DB60                       A:02 X:05 Y:00 P:67 SP:FB PPU:212, 83 CYC:9512\n\
DB60  E8        INX                             A:02 X:05 Y:00 P:67 SP:FB PPU:221, 83 CYC:9515\n\
DB61  A9 00     LDA #$00                        A:02 X:06 Y:00 P:65 SP:FB PPU:227, 83 CYC:9517\n\
DB63  A9 87     LDA #$87                        A:00 X:06 Y:00 P:67 SP:FB PPU:233, 83 CYC:9519\n\
DB65  91 33     STA ($33),Y = 0400 @ 0400 = 7F  A:87 X:06 Y:00 P:E5 SP:FB PPU:239, 83 CYC:9521\n\
DB67  AD 00 04  LDA $0400 = 87                  A:87 X:06 Y:00 P:E5 SP:FB PPU:257, 83 CYC:9527\n\
DB6A  C9 87     CMP #$87                        A:87 X:06 Y:00 P:E5 SP:FB PPU:269, 83 CYC:9531\n\
DB6C  F0 02     BEQ $DB70                       A:87 X:06 Y:00 P:67 SP:FB PPU:275, 83 CYC:9533\n\
DB70  E8        INX                             A:87 X:06 Y:00 P:67 SP:FB PPU:284, 83 CYC:9536\n\
DB71  A9 7E     LDA #$7E                        A:87 X:07 Y:00 P:65 SP:FB PPU:290, 83 CYC:9538\n\
DB73  8D 00 02  STA $0200 = 7F                  A:7E X:07 Y:00 P:65 SP:FB PPU:296, 83 CYC:9540\n\
DB76  A9 DB     LDA #$DB                        A:7E X:07 Y:00 P:65 SP:FB PPU:308, 83 CYC:9544\n\
DB78  8D 01 02  STA $0201 = 00                  A:DB X:07 Y:00 P:E5 SP:FB PPU:314, 83 CYC:9546\n\
DB7B  6C 00 02  JMP ($0200) = DB7E              A:DB X:07 Y:00 P:E5 SP:FB PPU:326, 83 CYC:9550\n\
DB7E  A9 00     LDA #$00                        A:DB X:07 Y:00 P:E5 SP:FB PPU:  0, 84 CYC:9555\n\
DB80  8D FF 02  STA $02FF = 00                  A:00 X:07 Y:00 P:67 SP:FB PPU:  6, 84 CYC:9557\n\
DB83  A9 01     LDA #$01                        A:00 X:07 Y:00 P:67 SP:FB PPU: 18, 84 CYC:9561\n\
DB85  8D 00 03  STA $0300 = 89                  A:01 X:07 Y:00 P:65 SP:FB PPU: 24, 84 CYC:9563\n\
DB88  A9 03     LDA #$03                        A:01 X:07 Y:00 P:65 SP:FB PPU: 36, 84 CYC:9567\n\
DB8A  8D 00 02  STA $0200 = 7E                  A:03 X:07 Y:00 P:65 SP:FB PPU: 42, 84 CYC:9569\n\
DB8D  A9 A9     LDA #$A9                        A:03 X:07 Y:00 P:65 SP:FB PPU: 54, 84 CYC:9573\n\
DB8F  8D 00 01  STA $0100 = 00                  A:A9 X:07 Y:00 P:E5 SP:FB PPU: 60, 84 CYC:9575\n\
DB92  A9 55     LDA #$55                        A:A9 X:07 Y:00 P:E5 SP:FB PPU: 72, 84 CYC:9579\n\
DB94  8D 01 01  STA $0101 = 00                  A:55 X:07 Y:00 P:65 SP:FB PPU: 78, 84 CYC:9581\n\
DB97  A9 60     LDA #$60                        A:55 X:07 Y:00 P:65 SP:FB PPU: 90, 84 CYC:9585\n\
DB99  8D 02 01  STA $0102 = 00                  A:60 X:07 Y:00 P:65 SP:FB PPU: 96, 84 CYC:9587\n\
DB9C  A9 A9     LDA #$A9                        A:60 X:07 Y:00 P:65 SP:FB PPU:108, 84 CYC:9591\n\
DB9E  8D 00 03  STA $0300 = 01                  A:A9 X:07 Y:00 P:E5 SP:FB PPU:114, 84 CYC:9593\n\
DBA1  A9 AA     LDA #$AA                        A:A9 X:07 Y:00 P:E5 SP:FB PPU:126, 84 CYC:9597\n\
DBA3  8D 01 03  STA $0301 = 00                  A:AA X:07 Y:00 P:E5 SP:FB PPU:132, 84 CYC:9599\n\
DBA6  A9 60     LDA #$60                        A:AA X:07 Y:00 P:E5 SP:FB PPU:144, 84 CYC:9603\n\
DBA8  8D 02 03  STA $0302 = 00                  A:60 X:07 Y:00 P:65 SP:FB PPU:150, 84 CYC:9605\n\
DBAB  20 B5 DB  JSR $DBB5                       A:60 X:07 Y:00 P:65 SP:FB PPU:162, 84 CYC:9609\n\
DBB5  6C FF 02  JMP ($02FF) = 0300              A:60 X:07 Y:00 P:65 SP:F9 PPU:180, 84 CYC:9615\n\
0300  A9 AA     LDA #$AA                        A:60 X:07 Y:00 P:65 SP:F9 PPU:195, 84 CYC:9620\n\
0302  60        RTS                             A:AA X:07 Y:00 P:E5 SP:F9 PPU:201, 84 CYC:9622\n\
DBAE  C9 AA     CMP #$AA                        A:AA X:07 Y:00 P:E5 SP:FB PPU:219, 84 CYC:9628\n\
DBB0  F0 02     BEQ $DBB4                       A:AA X:07 Y:00 P:67 SP:FB PPU:225, 84 CYC:9630\n\
DBB4  60        RTS                             A:AA X:07 Y:00 P:67 SP:FB PPU:234, 84 CYC:9633\n\
C626  20 4A DF  JSR $DF4A                       A:AA X:07 Y:00 P:67 SP:FD PPU:252, 84 CYC:9639\n\
DF4A  A9 89     LDA #$89                        A:AA X:07 Y:00 P:67 SP:FB PPU:270, 84 CYC:9645\n\
DF4C  8D 00 03  STA $0300 = A9                  A:89 X:07 Y:00 P:E5 SP:FB PPU:276, 84 CYC:9647\n\
DF4F  A9 A3     LDA #$A3                        A:89 X:07 Y:00 P:E5 SP:FB PPU:288, 84 CYC:9651\n\
DF51  85 33     STA $33 = 00                    A:A3 X:07 Y:00 P:E5 SP:FB PPU:294, 84 CYC:9653\n\
DF53  A9 12     LDA #$12                        A:A3 X:07 Y:00 P:E5 SP:FB PPU:303, 84 CYC:9656\n\
DF55  8D 45 02  STA $0245 = 12                  A:12 X:07 Y:00 P:65 SP:FB PPU:309, 84 CYC:9658\n\
DF58  A2 65     LDX #$65                        A:12 X:07 Y:00 P:65 SP:FB PPU:321, 84 CYC:9662\n\
DF5A  A0 00     LDY #$00                        A:12 X:65 Y:00 P:65 SP:FB PPU:327, 84 CYC:9664\n\
DF5C  38        SEC                             A:12 X:65 Y:00 P:67 SP:FB PPU:333, 84 CYC:9666\n\
DF5D  A9 00     LDA #$00                        A:12 X:65 Y:00 P:67 SP:FB PPU:339, 84 CYC:9668\n\
DF5F  B8        CLV                             A:00 X:65 Y:00 P:67 SP:FB PPU:  4, 85 CYC:9670\n\
DF60  B9 00 03  LDA $0300,Y @ 0300 = 89         A:00 X:65 Y:00 P:27 SP:FB PPU: 10, 85 CYC:9672\n\
DF63  F0 0C     BEQ $DF71                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 22, 85 CYC:9676\n\
DF65  90 0A     BCC $DF71                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 28, 85 CYC:9678\n\
DF67  70 08     BVS $DF71                       A:89 X:65 Y:00 P:A5 SP:FB PPU: 34, 85 CYC:9680\n\
DF69  C9 89     CMP #$89                        A:89 X:65 Y:00 P:A5 SP:FB PPU: 40, 85 CYC:9682\n\
DF6B  D0 04     BNE $DF71                       A:89 X:65 Y:00 P:27 SP:FB PPU: 46, 85 CYC:9684\n\
DF6D  E0 65     CPX #$65                        A:89 X:65 Y:00 P:27 SP:FB PPU: 52, 85 CYC:9686\n\
DF6F  F0 04     BEQ $DF75                       A:89 X:65 Y:00 P:27 SP:FB PPU: 58, 85 CYC:9688\n\
DF75  A9 FF     LDA #$FF                        A:89 X:65 Y:00 P:27 SP:FB PPU: 67, 85 CYC:9691\n\
DF77  85 01     STA $01 = FF                    A:FF X:65 Y:00 P:A5 SP:FB PPU: 73, 85 CYC:9693\n\
DF79  24 01     BIT $01 = FF                    A:FF X:65 Y:00 P:A5 SP:FB PPU: 82, 85 CYC:9696\n\
DF7B  A0 34     LDY #$34                        A:FF X:65 Y:00 P:E5 SP:FB PPU: 91, 85 CYC:9699\n\
DF7D  B9 FF FF  LDA $FFFF,Y @ 0033 = A3         A:FF X:65 Y:34 P:65 SP:FB PPU: 97, 85 CYC:9701\n\
DF80  C9 A3     CMP #$A3                        A:A3 X:65 Y:34 P:E5 SP:FB PPU:112, 85 CYC:9706\n\
DF82  D0 02     BNE $DF86                       A:A3 X:65 Y:34 P:67 SP:FB PPU:118, 85 CYC:9708\n\
DF84  B0 04     BCS $DF8A                       A:A3 X:65 Y:34 P:67 SP:FB PPU:124, 85 CYC:9710\n\
DF8A  A9 46     LDA #$46                        A:A3 X:65 Y:34 P:67 SP:FB PPU:133, 85 CYC:9713\n\
DF8C  85 FF     STA $FF = 46                    A:46 X:65 Y:34 P:65 SP:FB PPU:139, 85 CYC:9715\n\
DF8E  A0 FF     LDY #$FF                        A:46 X:65 Y:34 P:65 SP:FB PPU:148, 85 CYC:9718\n\
DF90  B9 46 01  LDA $0146,Y @ 0245 = 12         A:46 X:65 Y:FF P:E5 SP:FB PPU:154, 85 CYC:9720\n\
DF93  C9 12     CMP #$12                        A:12 X:65 Y:FF P:65 SP:FB PPU:169, 85 CYC:9725\n\
DF95  F0 04     BEQ $DF9B                       A:12 X:65 Y:FF P:67 SP:FB PPU:175, 85 CYC:9727\n\
DF9B  A2 39     LDX #$39                        A:12 X:65 Y:FF P:67 SP:FB PPU:184, 85 CYC:9730\n\
DF9D  18        CLC                             A:12 X:39 Y:FF P:65 SP:FB PPU:190, 85 CYC:9732\n\
DF9E  A9 FF     LDA #$FF                        A:12 X:39 Y:FF P:64 SP:FB PPU:196, 85 CYC:9734\n\
DFA0  85 01     STA $01 = FF                    A:FF X:39 Y:FF P:E4 SP:FB PPU:202, 85 CYC:9736\n\
DFA2  24 01     BIT $01 = FF                    A:FF X:39 Y:FF P:E4 SP:FB PPU:211, 85 CYC:9739\n\
DFA4  A9 AA     LDA #$AA                        A:FF X:39 Y:FF P:E4 SP:FB PPU:220, 85 CYC:9742\n\
DFA6  8D 00 04  STA $0400 = 87                  A:AA X:39 Y:FF P:E4 SP:FB PPU:226, 85 CYC:9744\n\
DFA9  A9 55     LDA #$55                        A:AA X:39 Y:FF P:E4 SP:FB PPU:238, 85 CYC:9748\n\
DFAB  A0 00     LDY #$00                        A:55 X:39 Y:FF P:64 SP:FB PPU:244, 85 CYC:9750\n\
DFAD  19 00 04  ORA $0400,Y @ 0400 = AA         A:55 X:39 Y:00 P:66 SP:FB PPU:250, 85 CYC:9752\n\
DFB0  B0 08     BCS $DFBA                       A:FF X:39 Y:00 P:E4 SP:FB PPU:262, 85 CYC:9756\n\
DFB2  10 06     BPL $DFBA                       A:FF X:39 Y:00 P:E4 SP:FB PPU:268, 85 CYC:9758\n\
DFB4  C9 FF     CMP #$FF                        A:FF X:39 Y:00 P:E4 SP:FB PPU:274, 85 CYC:9760\n\
DFB6  D0 02     BNE $DFBA                       A:FF X:39 Y:00 P:67 SP:FB PPU:280, 85 CYC:9762\n\
DFB8  70 02     BVS $DFBC                       A:FF X:39 Y:00 P:67 SP:FB PPU:286, 85 CYC:9764\n\
DFBC  E8        INX                             A:FF X:39 Y:00 P:67 SP:FB PPU:295, 85 CYC:9767\n\
DFBD  38        SEC                             A:FF X:3A Y:00 P:65 SP:FB PPU:301, 85 CYC:9769\n\
DFBE  B8        CLV                             A:FF X:3A Y:00 P:65 SP:FB PPU:307, 85 CYC:9771\n\
DFBF  A9 00     LDA #$00                        A:FF X:3A Y:00 P:25 SP:FB PPU:313, 85 CYC:9773\n\
DFC1  19 00 04  ORA $0400,Y @ 0400 = AA         A:00 X:3A Y:00 P:27 SP:FB PPU:319, 85 CYC:9775\n\
DFC4  F0 06     BEQ $DFCC                       A:AA X:3A Y:00 P:A5 SP:FB PPU:331, 85 CYC:9779\n\
DFC6  70 04     BVS $DFCC                       A:AA X:3A Y:00 P:A5 SP:FB PPU:337, 85 CYC:9781\n\
DFC8  90 02     BCC $DFCC                       A:AA X:3A Y:00 P:A5 SP:FB PPU:  2, 86 CYC:9783\n\
DFCA  30 02     BMI $DFCE                       A:AA X:3A Y:00 P:A5 SP:FB PPU:  8, 86 CYC:9785\n\
DFCE  E8        INX                             A:AA X:3A Y:00 P:A5 SP:FB PPU: 17, 86 CYC:9788\n\
DFCF  18        CLC                             A:AA X:3B Y:00 P:25 SP:FB PPU: 23, 86 CYC:9790\n\
DFD0  24 01     BIT $01 = FF                    A:AA X:3B Y:00 P:24 SP:FB PPU: 29, 86 CYC:9792\n\
DFD2  A9 55     LDA #$55                        A:AA X:3B Y:00 P:E4 SP:FB PPU: 38, 86 CYC:9795\n\
DFD4  39 00 04  AND $0400,Y @ 0400 = AA         A:55 X:3B Y:00 P:64 SP:FB PPU: 44, 86 CYC:9797\n\
DFD7  D0 06     BNE $DFDF                       A:00 X:3B Y:00 P:66 SP:FB PPU: 56, 86 CYC:9801\n\
DFD9  50 04     BVC $DFDF                       A:00 X:3B Y:00 P:66 SP:FB PPU: 62, 86 CYC:9803\n\
DFDB  B0 02     BCS $DFDF                       A:00 X:3B Y:00 P:66 SP:FB PPU: 68, 86 CYC:9805\n\
DFDD  10 02     BPL $DFE1                       A:00 X:3B Y:00 P:66 SP:FB PPU: 74, 86 CYC:9807\n\
DFE1  E8        INX                             A:00 X:3B Y:00 P:66 SP:FB PPU: 83, 86 CYC:9810\n\
DFE2  38        SEC                             A:00 X:3C Y:00 P:64 SP:FB PPU: 89, 86 CYC:9812\n\
DFE3  B8        CLV                             A:00 X:3C Y:00 P:65 SP:FB PPU: 95, 86 CYC:9814\n\
DFE4  A9 EF     LDA #$EF                        A:00 X:3C Y:00 P:25 SP:FB PPU:101, 86 CYC:9816\n\
DFE6  8D 00 04  STA $0400 = AA                  A:EF X:3C Y:00 P:A5 SP:FB PPU:107, 86 CYC:9818\n\
DFE9  A9 F8     LDA #$F8                        A:EF X:3C Y:00 P:A5 SP:FB PPU:119, 86 CYC:9822\n\
DFEB  39 00 04  AND $0400,Y @ 0400 = EF         A:F8 X:3C Y:00 P:A5 SP:FB PPU:125, 86 CYC:9824\n\
DFEE  90 08     BCC $DFF8                       A:E8 X:3C Y:00 P:A5 SP:FB PPU:137, 86 CYC:9828\n\
DFF0  10 06     BPL $DFF8                       A:E8 X:3C Y:00 P:A5 SP:FB PPU:143, 86 CYC:9830\n\
DFF2  C9 E8     CMP #$E8                        A:E8 X:3C Y:00 P:A5 SP:FB PPU:149, 86 CYC:9832\n\
DFF4  D0 02     BNE $DFF8                       A:E8 X:3C Y:00 P:27 SP:FB PPU:155, 86 CYC:9834\n\
DFF6  50 02     BVC $DFFA                       A:E8 X:3C Y:00 P:27 SP:FB PPU:161, 86 CYC:9836\n\
DFFA  E8        INX                             A:E8 X:3C Y:00 P:27 SP:FB PPU:170, 86 CYC:9839\n\
DFFB  18        CLC                             A:E8 X:3D Y:00 P:25 SP:FB PPU:176, 86 CYC:9841\n\
DFFC  24 01     BIT $01 = FF                    A:E8 X:3D Y:00 P:24 SP:FB PPU:182, 86 CYC:9843\n\
DFFE  A9 AA     LDA #$AA                        A:E8 X:3D Y:00 P:E4 SP:FB PPU:191, 86 CYC:9846\n\
E000  8D 00 04  STA $0400 = EF                  A:AA X:3D Y:00 P:E4 SP:FB PPU:197, 86 CYC:9848\n\
E003  A9 5F     LDA #$5F                        A:AA X:3D Y:00 P:E4 SP:FB PPU:209, 86 CYC:9852\n\
E005  59 00 04  EOR $0400,Y @ 0400 = AA         A:5F X:3D Y:00 P:64 SP:FB PPU:215, 86 CYC:9854\n\
E008  B0 08     BCS $E012                       A:F5 X:3D Y:00 P:E4 SP:FB PPU:227, 86 CYC:9858\n\
E00A  10 06     BPL $E012                       A:F5 X:3D Y:00 P:E4 SP:FB PPU:233, 86 CYC:9860\n\
E00C  C9 F5     CMP #$F5                        A:F5 X:3D Y:00 P:E4 SP:FB PPU:239, 86 CYC:9862\n\
E00E  D0 02     BNE $E012                       A:F5 X:3D Y:00 P:67 SP:FB PPU:245, 86 CYC:9864\n\
E010  70 02     BVS $E014                       A:F5 X:3D Y:00 P:67 SP:FB PPU:251, 86 CYC:9866\n\
E014  E8        INX                             A:F5 X:3D Y:00 P:67 SP:FB PPU:260, 86 CYC:9869\n\
E015  38        SEC                             A:F5 X:3E Y:00 P:65 SP:FB PPU:266, 86 CYC:9871\n\
E016  B8        CLV                             A:F5 X:3E Y:00 P:65 SP:FB PPU:272, 86 CYC:9873\n\
E017  A9 70     LDA #$70                        A:F5 X:3E Y:00 P:25 SP:FB PPU:278, 86 CYC:9875\n\
E019  8D 00 04  STA $0400 = AA                  A:70 X:3E Y:00 P:25 SP:FB PPU:284, 86 CYC:9877\n\
E01C  59 00 04  EOR $0400,Y @ 0400 = 70         A:70 X:3E Y:00 P:25 SP:FB PPU:296, 86 CYC:9881\n\
E01F  D0 06     BNE $E027                       A:00 X:3E Y:00 P:27 SP:FB PPU:308, 86 CYC:9885\n\
E021  70 04     BVS $E027                       A:00 X:3E Y:00 P:27 SP:FB PPU:314, 86 CYC:9887\n\
E023  90 02     BCC $E027                       A:00 X:3E Y:00 P:27 SP:FB PPU:320, 86 CYC:9889\n\
E025  10 02     BPL $E029                       A:00 X:3E Y:00 P:27 SP:FB PPU:326, 86 CYC:9891\n\
E029  E8        INX                             A:00 X:3E Y:00 P:27 SP:FB PPU:335, 86 CYC:9894\n\
E02A  18        CLC                             A:00 X:3F Y:00 P:25 SP:FB PPU:  0, 87 CYC:9896\n\
E02B  24 01     BIT $01 = FF                    A:00 X:3F Y:00 P:24 SP:FB PPU:  6, 87 CYC:9898\n\
E02D  A9 69     LDA #$69                        A:00 X:3F Y:00 P:E6 SP:FB PPU: 15, 87 CYC:9901\n\
E02F  8D 00 04  STA $0400 = 70                  A:69 X:3F Y:00 P:64 SP:FB PPU: 21, 87 CYC:9903\n\
E032  A9 00     LDA #$00                        A:69 X:3F Y:00 P:64 SP:FB PPU: 33, 87 CYC:9907\n\
E034  79 00 04  ADC $0400,Y @ 0400 = 69         A:00 X:3F Y:00 P:66 SP:FB PPU: 39, 87 CYC:9909\n\
E037  30 08     BMI $E041                       A:69 X:3F Y:00 P:24 SP:FB PPU: 51, 87 CYC:9913\n\
E039  B0 06     BCS $E041                       A:69 X:3F Y:00 P:24 SP:FB PPU: 57, 87 CYC:9915\n\
E03B  C9 69     CMP #$69                        A:69 X:3F Y:00 P:24 SP:FB PPU: 63, 87 CYC:9917\n\
E03D  D0 02     BNE $E041                       A:69 X:3F Y:00 P:27 SP:FB PPU: 69, 87 CYC:9919\n\
E03F  50 02     BVC $E043                       A:69 X:3F Y:00 P:27 SP:FB PPU: 75, 87 CYC:9921\n\
E043  E8        INX                             A:69 X:3F Y:00 P:27 SP:FB PPU: 84, 87 CYC:9924\n\
E044  38        SEC                             A:69 X:40 Y:00 P:25 SP:FB PPU: 90, 87 CYC:9926\n\
E045  24 01     BIT $01 = FF                    A:69 X:40 Y:00 P:25 SP:FB PPU: 96, 87 CYC:9928\n\
E047  A9 00     LDA #$00                        A:69 X:40 Y:00 P:E5 SP:FB PPU:105, 87 CYC:9931\n\
E049  79 00 04  ADC $0400,Y @ 0400 = 69         A:00 X:40 Y:00 P:67 SP:FB PPU:111, 87 CYC:9933\n\
E04C  30 08     BMI $E056                       A:6A X:40 Y:00 P:24 SP:FB PPU:123, 87 CYC:9937\n\
E04E  B0 06     BCS $E056                       A:6A X:40 Y:00 P:24 SP:FB PPU:129, 87 CYC:9939\n\
E050  C9 6A     CMP #$6A                        A:6A X:40 Y:00 P:24 SP:FB PPU:135, 87 CYC:9941\n\
E052  D0 02     BNE $E056                       A:6A X:40 Y:00 P:27 SP:FB PPU:141, 87 CYC:9943\n\
E054  50 02     BVC $E058                       A:6A X:40 Y:00 P:27 SP:FB PPU:147, 87 CYC:9945\n\
E058  E8        INX                             A:6A X:40 Y:00 P:27 SP:FB PPU:156, 87 CYC:9948\n\
E059  38        SEC                             A:6A X:41 Y:00 P:25 SP:FB PPU:162, 87 CYC:9950\n\
E05A  B8        CLV                             A:6A X:41 Y:00 P:25 SP:FB PPU:168, 87 CYC:9952\n\
E05B  A9 7F     LDA #$7F                        A:6A X:41 Y:00 P:25 SP:FB PPU:174, 87 CYC:9954\n\
E05D  8D 00 04  STA $0400 = 69                  A:7F X:41 Y:00 P:25 SP:FB PPU:180, 87 CYC:9956\n\
E060  79 00 04  ADC $0400,Y @ 0400 = 7F         A:7F X:41 Y:00 P:25 SP:FB PPU:192, 87 CYC:9960\n\
E063  10 08     BPL $E06D                       A:FF X:41 Y:00 P:E4 SP:FB PPU:204, 87 CYC:9964\n\
E065  B0 06     BCS $E06D                       A:FF X:41 Y:00 P:E4 SP:FB PPU:210, 87 CYC:9966\n\
E067  C9 FF     CMP #$FF                        A:FF X:41 Y:00 P:E4 SP:FB PPU:216, 87 CYC:9968\n\
E069  D0 02     BNE $E06D                       A:FF X:41 Y:00 P:67 SP:FB PPU:222, 87 CYC:9970\n\
E06B  70 02     BVS $E06F                       A:FF X:41 Y:00 P:67 SP:FB PPU:228, 87 CYC:9972\n\
E06F  E8        INX                             A:FF X:41 Y:00 P:67 SP:FB PPU:237, 87 CYC:9975\n\
E070  18        CLC                             A:FF X:42 Y:00 P:65 SP:FB PPU:243, 87 CYC:9977\n\
E071  24 01     BIT $01 = FF                    A:FF X:42 Y:00 P:64 SP:FB PPU:249, 87 CYC:9979\n\
E073  A9 80     LDA #$80                        A:FF X:42 Y:00 P:E4 SP:FB PPU:258, 87 CYC:9982\n\
E075  8D 00 04  STA $0400 = 7F                  A:80 X:42 Y:00 P:E4 SP:FB PPU:264, 87 CYC:9984\n\
E078  A9 7F     LDA #$7F                        A:80 X:42 Y:00 P:E4 SP:FB PPU:276, 87 CYC:9988\n\
E07A  79 00 04  ADC $0400,Y @ 0400 = 80         A:7F X:42 Y:00 P:64 SP:FB PPU:282, 87 CYC:9990\n\
E07D  10 08     BPL $E087                       A:FF X:42 Y:00 P:A4 SP:FB PPU:294, 87 CYC:9994\n\
E07F  B0 06     BCS $E087                       A:FF X:42 Y:00 P:A4 SP:FB PPU:300, 87 CYC:9996\n\
E081  C9 FF     CMP #$FF                        A:FF X:42 Y:00 P:A4 SP:FB PPU:306, 87 CYC:9998\n\
E083  D0 02     BNE $E087                       A:FF X:42 Y:00 P:27 SP:FB PPU:312, 87 CYC:10000\n\
E085  50 02     BVC $E089                       A:FF X:42 Y:00 P:27 SP:FB PPU:318, 87 CYC:10002\n\
E089  E8        INX                             A:FF X:42 Y:00 P:27 SP:FB PPU:327, 87 CYC:10005\n\
E08A  38        SEC                             A:FF X:43 Y:00 P:25 SP:FB PPU:333, 87 CYC:10007\n\
E08B  B8        CLV                             A:FF X:43 Y:00 P:25 SP:FB PPU:339, 87 CYC:10009\n\
E08C  A9 80     LDA #$80                        A:FF X:43 Y:00 P:25 SP:FB PPU:  4, 88 CYC:10011\n\
E08E  8D 00 04  STA $0400 = 80                  A:80 X:43 Y:00 P:A5 SP:FB PPU: 10, 88 CYC:10013\n\
E091  A9 7F     LDA #$7F                        A:80 X:43 Y:00 P:A5 SP:FB PPU: 22, 88 CYC:10017\n\
E093  79 00 04  ADC $0400,Y @ 0400 = 80         A:7F X:43 Y:00 P:25 SP:FB PPU: 28, 88 CYC:10019\n\
E096  D0 06     BNE $E09E                       A:00 X:43 Y:00 P:27 SP:FB PPU: 40, 88 CYC:10023\n\
E098  30 04     BMI $E09E                       A:00 X:43 Y:00 P:27 SP:FB PPU: 46, 88 CYC:10025\n\
E09A  70 02     BVS $E09E                       A:00 X:43 Y:00 P:27 SP:FB PPU: 52, 88 CYC:10027\n\
E09C  B0 02     BCS $E0A0                       A:00 X:43 Y:00 P:27 SP:FB PPU: 58, 88 CYC:10029\n\
E0A0  E8        INX                             A:00 X:43 Y:00 P:27 SP:FB PPU: 67, 88 CYC:10032\n\
E0A1  24 01     BIT $01 = FF                    A:00 X:44 Y:00 P:25 SP:FB PPU: 73, 88 CYC:10034\n\
E0A3  A9 40     LDA #$40                        A:00 X:44 Y:00 P:E7 SP:FB PPU: 82, 88 CYC:10037\n\
E0A5  8D 00 04  STA $0400 = 80                  A:40 X:44 Y:00 P:65 SP:FB PPU: 88, 88 CYC:10039\n\
E0A8  D9 00 04  CMP $0400,Y @ 0400 = 40         A:40 X:44 Y:00 P:65 SP:FB PPU:100, 88 CYC:10043\n\
E0AB  30 06     BMI $E0B3                       A:40 X:44 Y:00 P:67 SP:FB PPU:112, 88 CYC:10047\n\
E0AD  90 04     BCC $E0B3                       A:40 X:44 Y:00 P:67 SP:FB PPU:118, 88 CYC:10049\n\
E0AF  D0 02     BNE $E0B3                       A:40 X:44 Y:00 P:67 SP:FB PPU:124, 88 CYC:10051\n\
E0B1  70 02     BVS $E0B5                       A:40 X:44 Y:00 P:67 SP:FB PPU:130, 88 CYC:10053\n\
E0B5  E8        INX                             A:40 X:44 Y:00 P:67 SP:FB PPU:139, 88 CYC:10056\n\
E0B6  B8        CLV                             A:40 X:45 Y:00 P:65 SP:FB PPU:145, 88 CYC:10058\n\
E0B7  CE 00 04  DEC $0400 = 40                  A:40 X:45 Y:00 P:25 SP:FB PPU:151, 88 CYC:10060\n\
E0BA  D9 00 04  CMP $0400,Y @ 0400 = 3F         A:40 X:45 Y:00 P:25 SP:FB PPU:169, 88 CYC:10066\n\
E0BD  F0 06     BEQ $E0C5                       A:40 X:45 Y:00 P:25 SP:FB PPU:181, 88 CYC:10070\n\
E0BF  30 04     BMI $E0C5                       A:40 X:45 Y:00 P:25 SP:FB PPU:187, 88 CYC:10072\n\
E0C1  90 02     BCC $E0C5                       A:40 X:45 Y:00 P:25 SP:FB PPU:193, 88 CYC:10074\n\
E0C3  50 02     BVC $E0C7                       A:40 X:45 Y:00 P:25 SP:FB PPU:199, 88 CYC:10076\n\
E0C7  E8        INX                             A:40 X:45 Y:00 P:25 SP:FB PPU:208, 88 CYC:10079\n\
E0C8  EE 00 04  INC $0400 = 3F                  A:40 X:46 Y:00 P:25 SP:FB PPU:214, 88 CYC:10081\n\
E0CB  EE 00 04  INC $0400 = 40                  A:40 X:46 Y:00 P:25 SP:FB PPU:232, 88 CYC:10087\n\
E0CE  D9 00 04  CMP $0400,Y @ 0400 = 41         A:40 X:46 Y:00 P:25 SP:FB PPU:250, 88 CYC:10093\n\
E0D1  F0 02     BEQ $E0D5                       A:40 X:46 Y:00 P:A4 SP:FB PPU:262, 88 CYC:10097\n\
E0D3  30 02     BMI $E0D7                       A:40 X:46 Y:00 P:A4 SP:FB PPU:268, 88 CYC:10099\n\
E0D7  E8        INX                             A:40 X:46 Y:00 P:A4 SP:FB PPU:277, 88 CYC:10102\n\
E0D8  A9 00     LDA #$00                        A:40 X:47 Y:00 P:24 SP:FB PPU:283, 88 CYC:10104\n\
E0DA  8D 00 04  STA $0400 = 41                  A:00 X:47 Y:00 P:26 SP:FB PPU:289, 88 CYC:10106\n\
E0DD  A9 80     LDA #$80                        A:00 X:47 Y:00 P:26 SP:FB PPU:301, 88 CYC:10110\n\
E0DF  D9 00 04  CMP $0400,Y @ 0400 = 00         A:80 X:47 Y:00 P:A4 SP:FB PPU:307, 88 CYC:10112\n\
E0E2  F0 04     BEQ $E0E8                       A:80 X:47 Y:00 P:A5 SP:FB PPU:319, 88 CYC:10116\n\
E0E4  10 02     BPL $E0E8                       A:80 X:47 Y:00 P:A5 SP:FB PPU:325, 88 CYC:10118\n\
E0E6  B0 02     BCS $E0EA                       A:80 X:47 Y:00 P:A5 SP:FB PPU:331, 88 CYC:10120\n\
E0EA  E8        INX                             A:80 X:47 Y:00 P:A5 SP:FB PPU:340, 88 CYC:10123\n\
E0EB  A0 80     LDY #$80                        A:80 X:48 Y:00 P:25 SP:FB PPU:  5, 89 CYC:10125\n\
E0ED  8C 00 04  STY $0400 = 00                  A:80 X:48 Y:80 P:A5 SP:FB PPU: 11, 89 CYC:10127\n\
E0F0  A0 00     LDY #$00                        A:80 X:48 Y:80 P:A5 SP:FB PPU: 23, 89 CYC:10131\n\
E0F2  D9 00 04  CMP $0400,Y @ 0400 = 80         A:80 X:48 Y:00 P:27 SP:FB PPU: 29, 89 CYC:10133\n\
E0F5  D0 04     BNE $E0FB                       A:80 X:48 Y:00 P:27 SP:FB PPU: 41, 89 CYC:10137\n\
E0F7  30 02     BMI $E0FB                       A:80 X:48 Y:00 P:27 SP:FB PPU: 47, 89 CYC:10139\n\
E0F9  B0 02     BCS $E0FD                       A:80 X:48 Y:00 P:27 SP:FB PPU: 53, 89 CYC:10141\n\
E0FD  E8        INX                             A:80 X:48 Y:00 P:27 SP:FB PPU: 62, 89 CYC:10144\n\
E0FE  EE 00 04  INC $0400 = 80                  A:80 X:49 Y:00 P:25 SP:FB PPU: 68, 89 CYC:10146\n\
E101  D9 00 04  CMP $0400,Y @ 0400 = 81         A:80 X:49 Y:00 P:A5 SP:FB PPU: 86, 89 CYC:10152\n\
E104  B0 04     BCS $E10A                       A:80 X:49 Y:00 P:A4 SP:FB PPU: 98, 89 CYC:10156\n\
E106  F0 02     BEQ $E10A                       A:80 X:49 Y:00 P:A4 SP:FB PPU:104, 89 CYC:10158\n\
E108  30 02     BMI $E10C                       A:80 X:49 Y:00 P:A4 SP:FB PPU:110, 89 CYC:10160\n\
E10C  E8        INX                             A:80 X:49 Y:00 P:A4 SP:FB PPU:119, 89 CYC:10163\n\
E10D  CE 00 04  DEC $0400 = 81                  A:80 X:4A Y:00 P:24 SP:FB PPU:125, 89 CYC:10165\n\
E110  CE 00 04  DEC $0400 = 80                  A:80 X:4A Y:00 P:A4 SP:FB PPU:143, 89 CYC:10171\n\
E113  D9 00 04  CMP $0400,Y @ 0400 = 7F         A:80 X:4A Y:00 P:24 SP:FB PPU:161, 89 CYC:10177\n\
E116  90 04     BCC $E11C                       A:80 X:4A Y:00 P:25 SP:FB PPU:173, 89 CYC:10181\n\
E118  F0 02     BEQ $E11C                       A:80 X:4A Y:00 P:25 SP:FB PPU:179, 89 CYC:10183\n\
E11A  10 02     BPL $E11E                       A:80 X:4A Y:00 P:25 SP:FB PPU:185, 89 CYC:10185\n\
E11E  E8        INX                             A:80 X:4A Y:00 P:25 SP:FB PPU:194, 89 CYC:10188\n\
E11F  24 01     BIT $01 = FF                    A:80 X:4B Y:00 P:25 SP:FB PPU:200, 89 CYC:10190\n\
E121  A9 40     LDA #$40                        A:80 X:4B Y:00 P:E5 SP:FB PPU:209, 89 CYC:10193\n\
E123  8D 00 04  STA $0400 = 7F                  A:40 X:4B Y:00 P:65 SP:FB PPU:215, 89 CYC:10195\n\
E126  38        SEC                             A:40 X:4B Y:00 P:65 SP:FB PPU:227, 89 CYC:10199\n\
E127  F9 00 04  SBC $0400,Y @ 0400 = 40         A:40 X:4B Y:00 P:65 SP:FB PPU:233, 89 CYC:10201\n\
E12A  30 0A     BMI $E136                       A:00 X:4B Y:00 P:27 SP:FB PPU:245, 89 CYC:10205\n\
E12C  90 08     BCC $E136                       A:00 X:4B Y:00 P:27 SP:FB PPU:251, 89 CYC:10207\n\
E12E  D0 06     BNE $E136                       A:00 X:4B Y:00 P:27 SP:FB PPU:257, 89 CYC:10209\n\
E130  70 04     BVS $E136                       A:00 X:4B Y:00 P:27 SP:FB PPU:263, 89 CYC:10211\n\
E132  C9 00     CMP #$00                        A:00 X:4B Y:00 P:27 SP:FB PPU:269, 89 CYC:10213\n\
E134  F0 02     BEQ $E138                       A:00 X:4B Y:00 P:27 SP:FB PPU:275, 89 CYC:10215\n\
E138  E8        INX                             A:00 X:4B Y:00 P:27 SP:FB PPU:284, 89 CYC:10218\n\
E139  B8        CLV                             A:00 X:4C Y:00 P:25 SP:FB PPU:290, 89 CYC:10220\n\
E13A  38        SEC                             A:00 X:4C Y:00 P:25 SP:FB PPU:296, 89 CYC:10222\n\
E13B  A9 40     LDA #$40                        A:00 X:4C Y:00 P:25 SP:FB PPU:302, 89 CYC:10224\n\
E13D  CE 00 04  DEC $0400 = 40                  A:40 X:4C Y:00 P:25 SP:FB PPU:308, 89 CYC:10226\n\
E140  F9 00 04  SBC $0400,Y @ 0400 = 3F         A:40 X:4C Y:00 P:25 SP:FB PPU:326, 89 CYC:10232\n\
E143  F0 0A     BEQ $E14F                       A:01 X:4C Y:00 P:25 SP:FB PPU:338, 89 CYC:10236\n\
E145  30 08     BMI $E14F                       A:01 X:4C Y:00 P:25 SP:FB PPU:  3, 90 CYC:10238\n\
E147  90 06     BCC $E14F                       A:01 X:4C Y:00 P:25 SP:FB PPU:  9, 90 CYC:10240\n\
E149  70 04     BVS $E14F                       A:01 X:4C Y:00 P:25 SP:FB PPU: 15, 90 CYC:10242\n\
E14B  C9 01     CMP #$01                        A:01 X:4C Y:00 P:25 SP:FB PPU: 21, 90 CYC:10244\n\
E14D  F0 02     BEQ $E151                       A:01 X:4C Y:00 P:27 SP:FB PPU: 27, 90 CYC:10246\n\
E151  E8        INX                             A:01 X:4C Y:00 P:27 SP:FB PPU: 36, 90 CYC:10249\n\
E152  A9 40     LDA #$40                        A:01 X:4D Y:00 P:25 SP:FB PPU: 42, 90 CYC:10251\n\
E154  38        SEC                             A:40 X:4D Y:00 P:25 SP:FB PPU: 48, 90 CYC:10253\n\
E155  24 01     BIT $01 = FF                    A:40 X:4D Y:00 P:25 SP:FB PPU: 54, 90 CYC:10255\n\
E157  EE 00 04  INC $0400 = 3F                  A:40 X:4D Y:00 P:E5 SP:FB PPU: 63, 90 CYC:10258\n\
E15A  EE 00 04  INC $0400 = 40                  A:40 X:4D Y:00 P:65 SP:FB PPU: 81, 90 CYC:10264\n\
E15D  F9 00 04  SBC $0400,Y @ 0400 = 41         A:40 X:4D Y:00 P:65 SP:FB PPU: 99, 90 CYC:10270\n\
E160  B0 0A     BCS $E16C                       A:FF X:4D Y:00 P:A4 SP:FB PPU:111, 90 CYC:10274\n\
E162  F0 08     BEQ $E16C                       A:FF X:4D Y:00 P:A4 SP:FB PPU:117, 90 CYC:10276\n\
E164  10 06     BPL $E16C                       A:FF X:4D Y:00 P:A4 SP:FB PPU:123, 90 CYC:10278\n\
E166  70 04     BVS $E16C                       A:FF X:4D Y:00 P:A4 SP:FB PPU:129, 90 CYC:10280\n\
E168  C9 FF     CMP #$FF                        A:FF X:4D Y:00 P:A4 SP:FB PPU:135, 90 CYC:10282\n\
E16A  F0 02     BEQ $E16E                       A:FF X:4D Y:00 P:27 SP:FB PPU:141, 90 CYC:10284\n\
E16E  E8        INX                             A:FF X:4D Y:00 P:27 SP:FB PPU:150, 90 CYC:10287\n\
E16F  18        CLC                             A:FF X:4E Y:00 P:25 SP:FB PPU:156, 90 CYC:10289\n\
E170  A9 00     LDA #$00                        A:FF X:4E Y:00 P:24 SP:FB PPU:162, 90 CYC:10291\n\
E172  8D 00 04  STA $0400 = 41                  A:00 X:4E Y:00 P:26 SP:FB PPU:168, 90 CYC:10293\n\
E175  A9 80     LDA #$80                        A:00 X:4E Y:00 P:26 SP:FB PPU:180, 90 CYC:10297\n\
E177  F9 00 04  SBC $0400,Y @ 0400 = 00         A:80 X:4E Y:00 P:A4 SP:FB PPU:186, 90 CYC:10299\n\
E17A  90 04     BCC $E180                       A:7F X:4E Y:00 P:65 SP:FB PPU:198, 90 CYC:10303\n\
E17C  C9 7F     CMP #$7F                        A:7F X:4E Y:00 P:65 SP:FB PPU:204, 90 CYC:10305\n\
E17E  F0 02     BEQ $E182                       A:7F X:4E Y:00 P:67 SP:FB PPU:210, 90 CYC:10307\n\
E182  E8        INX                             A:7F X:4E Y:00 P:67 SP:FB PPU:219, 90 CYC:10310\n\
E183  38        SEC                             A:7F X:4F Y:00 P:65 SP:FB PPU:225, 90 CYC:10312\n\
E184  A9 7F     LDA #$7F                        A:7F X:4F Y:00 P:65 SP:FB PPU:231, 90 CYC:10314\n\
E186  8D 00 04  STA $0400 = 00                  A:7F X:4F Y:00 P:65 SP:FB PPU:237, 90 CYC:10316\n\
E189  A9 81     LDA #$81                        A:7F X:4F Y:00 P:65 SP:FB PPU:249, 90 CYC:10320\n\
E18B  F9 00 04  SBC $0400,Y @ 0400 = 7F         A:81 X:4F Y:00 P:E5 SP:FB PPU:255, 90 CYC:10322\n\
E18E  50 06     BVC $E196                       A:02 X:4F Y:00 P:65 SP:FB PPU:267, 90 CYC:10326\n\
E190  90 04     BCC $E196                       A:02 X:4F Y:00 P:65 SP:FB PPU:273, 90 CYC:10328\n\
E192  C9 02     CMP #$02                        A:02 X:4F Y:00 P:65 SP:FB PPU:279, 90 CYC:10330\n\
E194  F0 02     BEQ $E198                       A:02 X:4F Y:00 P:67 SP:FB PPU:285, 90 CYC:10332\n\
E198  E8        INX                             A:02 X:4F Y:00 P:67 SP:FB PPU:294, 90 CYC:10335\n\
E199  A9 00     LDA #$00                        A:02 X:50 Y:00 P:65 SP:FB PPU:300, 90 CYC:10337\n\
E19B  A9 87     LDA #$87                        A:00 X:50 Y:00 P:67 SP:FB PPU:306, 90 CYC:10339\n\
E19D  99 00 04  STA $0400,Y @ 0400 = 7F         A:87 X:50 Y:00 P:E5 SP:FB PPU:312, 90 CYC:10341\n\
E1A0  AD 00 04  LDA $0400 = 87                  A:87 X:50 Y:00 P:E5 SP:FB PPU:327, 90 CYC:10346\n\
E1A3  C9 87     CMP #$87                        A:87 X:50 Y:00 P:E5 SP:FB PPU:339, 90 CYC:10350\n\
E1A5  F0 02     BEQ $E1A9                       A:87 X:50 Y:00 P:67 SP:FB PPU:  4, 91 CYC:10352\n\
E1A9  60        RTS                             A:87 X:50 Y:00 P:67 SP:FB PPU: 13, 91 CYC:10355\n\
C629  20 B8 DB  JSR $DBB8                       A:87 X:50 Y:00 P:67 SP:FD PPU: 31, 91 CYC:10361\n\
DBB8  A9 FF     LDA #$FF                        A:87 X:50 Y:00 P:67 SP:FB PPU: 49, 91 CYC:10367\n\
DBBA  85 01     STA $01 = FF                    A:FF X:50 Y:00 P:E5 SP:FB PPU: 55, 91 CYC:10369\n\
DBBC  A9 AA     LDA #$AA                        A:FF X:50 Y:00 P:E5 SP:FB PPU: 64, 91 CYC:10372\n\
DBBE  85 33     STA $33 = A3                    A:AA X:50 Y:00 P:E5 SP:FB PPU: 70, 91 CYC:10374\n\
DBC0  A9 BB     LDA #$BB                        A:AA X:50 Y:00 P:E5 SP:FB PPU: 79, 91 CYC:10377\n\
DBC2  85 89     STA $89 = 00                    A:BB X:50 Y:00 P:E5 SP:FB PPU: 85, 91 CYC:10379\n\
DBC4  A2 00     LDX #$00                        A:BB X:50 Y:00 P:E5 SP:FB PPU: 94, 91 CYC:10382\n\
DBC6  A9 66     LDA #$66                        A:BB X:00 Y:00 P:67 SP:FB PPU:100, 91 CYC:10384\n\
DBC8  24 01     BIT $01 = FF                    A:66 X:00 Y:00 P:65 SP:FB PPU:106, 91 CYC:10386\n\
DBCA  38        SEC                             A:66 X:00 Y:00 P:E5 SP:FB PPU:115, 91 CYC:10389\n\
DBCB  A0 00     LDY #$00                        A:66 X:00 Y:00 P:E5 SP:FB PPU:121, 91 CYC:10391\n\
DBCD  B4 33     LDY $33,X @ 33 = AA             A:66 X:00 Y:00 P:67 SP:FB PPU:127, 91 CYC:10393\n\
DBCF  10 12     BPL $DBE3                       A:66 X:00 Y:AA P:E5 SP:FB PPU:139, 91 CYC:10397\n\
DBD1  F0 10     BEQ $DBE3                       A:66 X:00 Y:AA P:E5 SP:FB PPU:145, 91 CYC:10399\n\
DBD3  50 0E     BVC $DBE3                       A:66 X:00 Y:AA P:E5 SP:FB PPU:151, 91 CYC:10401\n\
DBD5  90 0C     BCC $DBE3                       A:66 X:00 Y:AA P:E5 SP:FB PPU:157, 91 CYC:10403\n\
DBD7  C9 66     CMP #$66                        A:66 X:00 Y:AA P:E5 SP:FB PPU:163, 91 CYC:10405\n\
DBD9  D0 08     BNE $DBE3                       A:66 X:00 Y:AA P:67 SP:FB PPU:169, 91 CYC:10407\n\
DBDB  E0 00     CPX #$00                        A:66 X:00 Y:AA P:67 SP:FB PPU:175, 91 CYC:10409\n\
DBDD  D0 04     BNE $DBE3                       A:66 X:00 Y:AA P:67 SP:FB PPU:181, 91 CYC:10411\n\
DBDF  C0 AA     CPY #$AA                        A:66 X:00 Y:AA P:67 SP:FB PPU:187, 91 CYC:10413\n\
DBE1  F0 04     BEQ $DBE7                       A:66 X:00 Y:AA P:67 SP:FB PPU:193, 91 CYC:10415\n\
DBE7  A2 8A     LDX #$8A                        A:66 X:00 Y:AA P:67 SP:FB PPU:202, 91 CYC:10418\n\
DBE9  A9 66     LDA #$66                        A:66 X:8A Y:AA P:E5 SP:FB PPU:208, 91 CYC:10420\n\
DBEB  B8        CLV                             A:66 X:8A Y:AA P:65 SP:FB PPU:214, 91 CYC:10422\n\
DBEC  18        CLC                             A:66 X:8A Y:AA P:25 SP:FB PPU:220, 91 CYC:10424\n\
DBED  A0 00     LDY #$00                        A:66 X:8A Y:AA P:24 SP:FB PPU:226, 91 CYC:10426\n\
DBEF  B4 FF     LDY $FF,X @ 89 = BB             A:66 X:8A Y:00 P:26 SP:FB PPU:232, 91 CYC:10428\n\
DBF1  10 12     BPL $DC05                       A:66 X:8A Y:BB P:A4 SP:FB PPU:244, 91 CYC:10432\n\
DBF3  F0 10     BEQ $DC05                       A:66 X:8A Y:BB P:A4 SP:FB PPU:250, 91 CYC:10434\n\
DBF5  70 0E     BVS $DC05                       A:66 X:8A Y:BB P:A4 SP:FB PPU:256, 91 CYC:10436\n\
DBF7  B0 0C     BCS $DC05                       A:66 X:8A Y:BB P:A4 SP:FB PPU:262, 91 CYC:10438\n\
DBF9  C0 BB     CPY #$BB                        A:66 X:8A Y:BB P:A4 SP:FB PPU:268, 91 CYC:10440\n\
DBFB  D0 08     BNE $DC05                       A:66 X:8A Y:BB P:27 SP:FB PPU:274, 91 CYC:10442\n\
DBFD  C9 66     CMP #$66                        A:66 X:8A Y:BB P:27 SP:FB PPU:280, 91 CYC:10444\n\
DBFF  D0 04     BNE $DC05                       A:66 X:8A Y:BB P:27 SP:FB PPU:286, 91 CYC:10446\n\
DC01  E0 8A     CPX #$8A                        A:66 X:8A Y:BB P:27 SP:FB PPU:292, 91 CYC:10448\n\
DC03  F0 04     BEQ $DC09                       A:66 X:8A Y:BB P:27 SP:FB PPU:298, 91 CYC:10450\n\
DC09  24 01     BIT $01 = FF                    A:66 X:8A Y:BB P:27 SP:FB PPU:307, 91 CYC:10453\n\
DC0B  38        SEC                             A:66 X:8A Y:BB P:E5 SP:FB PPU:316, 91 CYC:10456\n\
DC0C  A0 44     LDY #$44                        A:66 X:8A Y:BB P:E5 SP:FB PPU:322, 91 CYC:10458\n\
DC0E  A2 00     LDX #$00                        A:66 X:8A Y:44 P:65 SP:FB PPU:328, 91 CYC:10460\n\
DC10  94 33     STY $33,X @ 33 = AA             A:66 X:00 Y:44 P:67 SP:FB PPU:334, 91 CYC:10462\n\
DC12  A5 33     LDA $33 = 44                    A:66 X:00 Y:44 P:67 SP:FB PPU:  5, 92 CYC:10466\n\
DC14  90 18     BCC $DC2E                       A:44 X:00 Y:44 P:65 SP:FB PPU: 14, 92 CYC:10469\n\
DC16  C9 44     CMP #$44                        A:44 X:00 Y:44 P:65 SP:FB PPU: 20, 92 CYC:10471\n\
DC18  D0 14     BNE $DC2E                       A:44 X:00 Y:44 P:67 SP:FB PPU: 26, 92 CYC:10473\n\
DC1A  50 12     BVC $DC2E                       A:44 X:00 Y:44 P:67 SP:FB PPU: 32, 92 CYC:10475\n\
DC1C  18        CLC                             A:44 X:00 Y:44 P:67 SP:FB PPU: 38, 92 CYC:10477\n\
DC1D  B8        CLV                             A:44 X:00 Y:44 P:66 SP:FB PPU: 44, 92 CYC:10479\n\
DC1E  A0 99     LDY #$99                        A:44 X:00 Y:44 P:26 SP:FB PPU: 50, 92 CYC:10481\n\
DC20  A2 80     LDX #$80                        A:44 X:00 Y:99 P:A4 SP:FB PPU: 56, 92 CYC:10483\n\
DC22  94 85     STY $85,X @ 05 = 00             A:44 X:80 Y:99 P:A4 SP:FB PPU: 62, 92 CYC:10485\n\
DC24  A5 05     LDA $05 = 99                    A:44 X:80 Y:99 P:A4 SP:FB PPU: 74, 92 CYC:10489\n\
DC26  B0 06     BCS $DC2E                       A:99 X:80 Y:99 P:A4 SP:FB PPU: 83, 92 CYC:10492\n\
DC28  C9 99     CMP #$99                        A:99 X:80 Y:99 P:A4 SP:FB PPU: 89, 92 CYC:10494\n\
DC2A  D0 02     BNE $DC2E                       A:99 X:80 Y:99 P:27 SP:FB PPU: 95, 92 CYC:10496\n\
DC2C  50 04     BVC $DC32                       A:99 X:80 Y:99 P:27 SP:FB PPU:101, 92 CYC:10498\n\
DC32  A0 0B     LDY #$0B                        A:99 X:80 Y:99 P:27 SP:FB PPU:110, 92 CYC:10501\n\
DC34  A9 AA     LDA #$AA                        A:99 X:80 Y:0B P:25 SP:FB PPU:116, 92 CYC:10503\n\
DC36  A2 78     LDX #$78                        A:AA X:80 Y:0B P:A5 SP:FB PPU:122, 92 CYC:10505\n\
DC38  85 78     STA $78 = 00                    A:AA X:78 Y:0B P:25 SP:FB PPU:128, 92 CYC:10507\n\
DC3A  20 B6 F7  JSR $F7B6                       A:AA X:78 Y:0B P:25 SP:FB PPU:137, 92 CYC:10510\n\
F7B6  18        CLC                             A:AA X:78 Y:0B P:25 SP:F9 PPU:155, 92 CYC:10516\n\
F7B7  A9 FF     LDA #$FF                        A:AA X:78 Y:0B P:24 SP:F9 PPU:161, 92 CYC:10518\n\
F7B9  85 01     STA $01 = FF                    A:FF X:78 Y:0B P:A4 SP:F9 PPU:167, 92 CYC:10520\n\
F7BB  24 01     BIT $01 = FF                    A:FF X:78 Y:0B P:A4 SP:F9 PPU:176, 92 CYC:10523\n\
F7BD  A9 55     LDA #$55                        A:FF X:78 Y:0B P:E4 SP:F9 PPU:185, 92 CYC:10526\n\
F7BF  60        RTS                             A:55 X:78 Y:0B P:64 SP:F9 PPU:191, 92 CYC:10528\n\
DC3D  15 00     ORA $00,X @ 78 = AA             A:55 X:78 Y:0B P:64 SP:FB PPU:209, 92 CYC:10534\n\
DC3F  20 C0 F7  JSR $F7C0                       A:FF X:78 Y:0B P:E4 SP:FB PPU:221, 92 CYC:10538\n\
F7C0  B0 09     BCS $F7CB                       A:FF X:78 Y:0B P:E4 SP:F9 PPU:239, 92 CYC:10544\n\
F7C2  10 07     BPL $F7CB                       A:FF X:78 Y:0B P:E4 SP:F9 PPU:245, 92 CYC:10546\n\
F7C4  C9 FF     CMP #$FF                        A:FF X:78 Y:0B P:E4 SP:F9 PPU:251, 92 CYC:10548\n\
F7C6  D0 03     BNE $F7CB                       A:FF X:78 Y:0B P:67 SP:F9 PPU:257, 92 CYC:10550\n\
F7C8  50 01     BVC $F7CB                       A:FF X:78 Y:0B P:67 SP:F9 PPU:263, 92 CYC:10552\n\
F7CA  60        RTS                             A:FF X:78 Y:0B P:67 SP:F9 PPU:269, 92 CYC:10554\n\
DC42  C8        INY                             A:FF X:78 Y:0B P:67 SP:FB PPU:287, 92 CYC:10560\n\
DC43  A9 00     LDA #$00                        A:FF X:78 Y:0C P:65 SP:FB PPU:293, 92 CYC:10562\n\
DC45  85 78     STA $78 = AA                    A:00 X:78 Y:0C P:67 SP:FB PPU:299, 92 CYC:10564\n\
DC47  20 CE F7  JSR $F7CE                       A:00 X:78 Y:0C P:67 SP:FB PPU:308, 92 CYC:10567\n\
F7CE  38        SEC                             A:00 X:78 Y:0C P:67 SP:F9 PPU:326, 92 CYC:10573\n\
F7CF  B8        CLV                             A:00 X:78 Y:0C P:67 SP:F9 PPU:332, 92 CYC:10575\n\
F7D0  A9 00     LDA #$00                        A:00 X:78 Y:0C P:27 SP:F9 PPU:338, 92 CYC:10577\n\
F7D2  60        RTS                             A:00 X:78 Y:0C P:27 SP:F9 PPU:  3, 93 CYC:10579\n\
DC4A  15 00     ORA $00,X @ 78 = 00             A:00 X:78 Y:0C P:27 SP:FB PPU: 21, 93 CYC:10585\n\
DC4C  20 D3 F7  JSR $F7D3                       A:00 X:78 Y:0C P:27 SP:FB PPU: 33, 93 CYC:10589\n\
F7D3  D0 07     BNE $F7DC                       A:00 X:78 Y:0C P:27 SP:F9 PPU: 51, 93 CYC:10595\n\
F7D5  70 05     BVS $F7DC                       A:00 X:78 Y:0C P:27 SP:F9 PPU: 57, 93 CYC:10597\n\
F7D7  90 03     BCC $F7DC                       A:00 X:78 Y:0C P:27 SP:F9 PPU: 63, 93 CYC:10599\n\
F7D9  30 01     BMI $F7DC                       A:00 X:78 Y:0C P:27 SP:F9 PPU: 69, 93 CYC:10601\n\
F7DB  60        RTS                             A:00 X:78 Y:0C P:27 SP:F9 PPU: 75, 93 CYC:10603\n\
DC4F  C8        INY                             A:00 X:78 Y:0C P:27 SP:FB PPU: 93, 93 CYC:10609\n\
DC50  A9 AA     LDA #$AA                        A:00 X:78 Y:0D P:25 SP:FB PPU: 99, 93 CYC:10611\n\
DC52  85 78     STA $78 = 00                    A:AA X:78 Y:0D P:A5 SP:FB PPU:105, 93 CYC:10613\n\
DC54  20 DF F7  JSR $F7DF                       A:AA X:78 Y:0D P:A5 SP:FB PPU:114, 93 CYC:10616\n\
F7DF  18        CLC                             A:AA X:78 Y:0D P:A5 SP:F9 PPU:132, 93 CYC:10622\n\
F7E0  24 01     BIT $01 = FF                    A:AA X:78 Y:0D P:A4 SP:F9 PPU:138, 93 CYC:10624\n\
F7E2  A9 55     LDA #$55                        A:AA X:78 Y:0D P:E4 SP:F9 PPU:147, 93 CYC:10627\n\
F7E4  60        RTS                             A:55 X:78 Y:0D P:64 SP:F9 PPU:153, 93 CYC:10629\n\
DC57  35 00     AND $00,X @ 78 = AA             A:55 X:78 Y:0D P:64 SP:FB PPU:171, 93 CYC:10635\n\
DC59  20 E5 F7  JSR $F7E5                       A:00 X:78 Y:0D P:66 SP:FB PPU:183, 93 CYC:10639\n\
F7E5  D0 07     BNE $F7EE                       A:00 X:78 Y:0D P:66 SP:F9 PPU:201, 93 CYC:10645\n\
F7E7  50 05     BVC $F7EE                       A:00 X:78 Y:0D P:66 SP:F9 PPU:207, 93 CYC:10647\n\
F7E9  B0 03     BCS $F7EE                       A:00 X:78 Y:0D P:66 SP:F9 PPU:213, 93 CYC:10649\n\
F7EB  30 01     BMI $F7EE                       A:00 X:78 Y:0D P:66 SP:F9 PPU:219, 93 CYC:10651\n\
F7ED  60        RTS                             A:00 X:78 Y:0D P:66 SP:F9 PPU:225, 93 CYC:10653\n\
DC5C  C8        INY                             A:00 X:78 Y:0D P:66 SP:FB PPU:243, 93 CYC:10659\n\
DC5D  A9 EF     LDA #$EF                        A:00 X:78 Y:0E P:64 SP:FB PPU:249, 93 CYC:10661\n\
DC5F  85 78     STA $78 = AA                    A:EF X:78 Y:0E P:E4 SP:FB PPU:255, 93 CYC:10663\n\
DC61  20 F1 F7  JSR $F7F1                       A:EF X:78 Y:0E P:E4 SP:FB PPU:264, 93 CYC:10666\n\
F7F1  38        SEC                             A:EF X:78 Y:0E P:E4 SP:F9 PPU:282, 93 CYC:10672\n\
F7F2  B8        CLV                             A:EF X:78 Y:0E P:E5 SP:F9 PPU:288, 93 CYC:10674\n\
F7F3  A9 F8     LDA #$F8                        A:EF X:78 Y:0E P:A5 SP:F9 PPU:294, 93 CYC:10676\n\
F7F5  60        RTS                             A:F8 X:78 Y:0E P:A5 SP:F9 PPU:300, 93 CYC:10678\n\
DC64  35 00     AND $00,X @ 78 = EF             A:F8 X:78 Y:0E P:A5 SP:FB PPU:318, 93 CYC:10684\n\
DC66  20 F6 F7  JSR $F7F6                       A:E8 X:78 Y:0E P:A5 SP:FB PPU:330, 93 CYC:10688\n\
F7F6  90 09     BCC $F801                       A:E8 X:78 Y:0E P:A5 SP:F9 PPU:  7, 94 CYC:10694\n\
F7F8  10 07     BPL $F801                       A:E8 X:78 Y:0E P:A5 SP:F9 PPU: 13, 94 CYC:10696\n\
F7FA  C9 E8     CMP #$E8                        A:E8 X:78 Y:0E P:A5 SP:F9 PPU: 19, 94 CYC:10698\n\
F7FC  D0 03     BNE $F801                       A:E8 X:78 Y:0E P:27 SP:F9 PPU: 25, 94 CYC:10700\n\
F7FE  70 01     BVS $F801                       A:E8 X:78 Y:0E P:27 SP:F9 PPU: 31, 94 CYC:10702\n\
F800  60        RTS                             A:E8 X:78 Y:0E P:27 SP:F9 PPU: 37, 94 CYC:10704\n\
DC69  C8        INY                             A:E8 X:78 Y:0E P:27 SP:FB PPU: 55, 94 CYC:10710\n\
DC6A  A9 AA     LDA #$AA                        A:E8 X:78 Y:0F P:25 SP:FB PPU: 61, 94 CYC:10712\n\
DC6C  85 78     STA $78 = EF                    A:AA X:78 Y:0F P:A5 SP:FB PPU: 67, 94 CYC:10714\n\
DC6E  20 04 F8  JSR $F804                       A:AA X:78 Y:0F P:A5 SP:FB PPU: 76, 94 CYC:10717\n\
F804  18        CLC                             A:AA X:78 Y:0F P:A5 SP:F9 PPU: 94, 94 CYC:10723\n\
F805  24 01     BIT $01 = FF                    A:AA X:78 Y:0F P:A4 SP:F9 PPU:100, 94 CYC:10725\n\
F807  A9 5F     LDA #$5F                        A:AA X:78 Y:0F P:E4 SP:F9 PPU:109, 94 CYC:10728\n\
F809  60        RTS                             A:5F X:78 Y:0F P:64 SP:F9 PPU:115, 94 CYC:10730\n\
DC71  55 00     EOR $00,X @ 78 = AA             A:5F X:78 Y:0F P:64 SP:FB PPU:133, 94 CYC:10736\n\
DC73  20 0A F8  JSR $F80A                       A:F5 X:78 Y:0F P:E4 SP:FB PPU:145, 94 CYC:10740\n\
F80A  B0 09     BCS $F815                       A:F5 X:78 Y:0F P:E4 SP:F9 PPU:163, 94 CYC:10746\n\
F80C  10 07     BPL $F815                       A:F5 X:78 Y:0F P:E4 SP:F9 PPU:169, 94 CYC:10748\n\
F80E  C9 F5     CMP #$F5                        A:F5 X:78 Y:0F P:E4 SP:F9 PPU:175, 94 CYC:10750\n\
F810  D0 03     BNE $F815                       A:F5 X:78 Y:0F P:67 SP:F9 PPU:181, 94 CYC:10752\n\
F812  50 01     BVC $F815                       A:F5 X:78 Y:0F P:67 SP:F9 PPU:187, 94 CYC:10754\n\
F814  60        RTS                             A:F5 X:78 Y:0F P:67 SP:F9 PPU:193, 94 CYC:10756\n\
DC76  C8        INY                             A:F5 X:78 Y:0F P:67 SP:FB PPU:211, 94 CYC:10762\n\
DC77  A9 70     LDA #$70                        A:F5 X:78 Y:10 P:65 SP:FB PPU:217, 94 CYC:10764\n\
DC79  85 78     STA $78 = AA                    A:70 X:78 Y:10 P:65 SP:FB PPU:223, 94 CYC:10766\n\
DC7B  20 18 F8  JSR $F818                       A:70 X:78 Y:10 P:65 SP:FB PPU:232, 94 CYC:10769\n\
F818  38        SEC                             A:70 X:78 Y:10 P:65 SP:F9 PPU:250, 94 CYC:10775\n\
F819  B8        CLV                             A:70 X:78 Y:10 P:65 SP:F9 PPU:256, 94 CYC:10777\n\
F81A  A9 70     LDA #$70                        A:70 X:78 Y:10 P:25 SP:F9 PPU:262, 94 CYC:10779\n\
F81C  60        RTS                             A:70 X:78 Y:10 P:25 SP:F9 PPU:268, 94 CYC:10781\n\
DC7E  55 00     EOR $00,X @ 78 = 70             A:70 X:78 Y:10 P:25 SP:FB PPU:286, 94 CYC:10787\n\
DC80  20 1D F8  JSR $F81D                       A:00 X:78 Y:10 P:27 SP:FB PPU:298, 94 CYC:10791\n\
F81D  D0 07     BNE $F826                       A:00 X:78 Y:10 P:27 SP:F9 PPU:316, 94 CYC:10797\n\
F81F  70 05     BVS $F826                       A:00 X:78 Y:10 P:27 SP:F9 PPU:322, 94 CYC:10799\n\
F821  90 03     BCC $F826                       A:00 X:78 Y:10 P:27 SP:F9 PPU:328, 94 CYC:10801\n\
F823  30 01     BMI $F826                       A:00 X:78 Y:10 P:27 SP:F9 PPU:334, 94 CYC:10803\n\
F825  60        RTS                             A:00 X:78 Y:10 P:27 SP:F9 PPU:340, 94 CYC:10805\n\
DC83  C8        INY                             A:00 X:78 Y:10 P:27 SP:FB PPU: 17, 95 CYC:10811\n\
DC84  A9 69     LDA #$69                        A:00 X:78 Y:11 P:25 SP:FB PPU: 23, 95 CYC:10813\n\
DC86  85 78     STA $78 = 70                    A:69 X:78 Y:11 P:25 SP:FB PPU: 29, 95 CYC:10815\n\
DC88  20 29 F8  JSR $F829                       A:69 X:78 Y:11 P:25 SP:FB PPU: 38, 95 CYC:10818\n\
F829  18        CLC                             A:69 X:78 Y:11 P:25 SP:F9 PPU: 56, 95 CYC:10824\n\
F82A  24 01     BIT $01 = FF                    A:69 X:78 Y:11 P:24 SP:F9 PPU: 62, 95 CYC:10826\n\
F82C  A9 00     LDA #$00                        A:69 X:78 Y:11 P:E4 SP:F9 PPU: 71, 95 CYC:10829\n\
F82E  60        RTS                             A:00 X:78 Y:11 P:66 SP:F9 PPU: 77, 95 CYC:10831\n\
DC8B  75 00     ADC $00,X @ 78 = 69             A:00 X:78 Y:11 P:66 SP:FB PPU: 95, 95 CYC:10837\n\
DC8D  20 2F F8  JSR $F82F                       A:69 X:78 Y:11 P:24 SP:FB PPU:107, 95 CYC:10841\n\
F82F  30 09     BMI $F83A                       A:69 X:78 Y:11 P:24 SP:F9 PPU:125, 95 CYC:10847\n\
F831  B0 07     BCS $F83A                       A:69 X:78 Y:11 P:24 SP:F9 PPU:131, 95 CYC:10849\n\
F833  C9 69     CMP #$69                        A:69 X:78 Y:11 P:24 SP:F9 PPU:137, 95 CYC:10851\n\
F835  D0 03     BNE $F83A                       A:69 X:78 Y:11 P:27 SP:F9 PPU:143, 95 CYC:10853\n\
F837  70 01     BVS $F83A                       A:69 X:78 Y:11 P:27 SP:F9 PPU:149, 95 CYC:10855\n\
F839  60        RTS                             A:69 X:78 Y:11 P:27 SP:F9 PPU:155, 95 CYC:10857\n\
DC90  C8        INY                             A:69 X:78 Y:11 P:27 SP:FB PPU:173, 95 CYC:10863\n\
DC91  20 3D F8  JSR $F83D                       A:69 X:78 Y:12 P:25 SP:FB PPU:179, 95 CYC:10865\n\
F83D  38        SEC                             A:69 X:78 Y:12 P:25 SP:F9 PPU:197, 95 CYC:10871\n\
F83E  24 01     BIT $01 = FF                    A:69 X:78 Y:12 P:25 SP:F9 PPU:203, 95 CYC:10873\n\
F840  A9 00     LDA #$00                        A:69 X:78 Y:12 P:E5 SP:F9 PPU:212, 95 CYC:10876\n\
F842  60        RTS                             A:00 X:78 Y:12 P:67 SP:F9 PPU:218, 95 CYC:10878\n\
DC94  75 00     ADC $00,X @ 78 = 69             A:00 X:78 Y:12 P:67 SP:FB PPU:236, 95 CYC:10884\n\
DC96  20 43 F8  JSR $F843                       A:6A X:78 Y:12 P:24 SP:FB PPU:248, 95 CYC:10888\n\
F843  30 09     BMI $F84E                       A:6A X:78 Y:12 P:24 SP:F9 PPU:266, 95 CYC:10894\n\
F845  B0 07     BCS $F84E                       A:6A X:78 Y:12 P:24 SP:F9 PPU:272, 95 CYC:10896\n\
F847  C9 6A     CMP #$6A                        A:6A X:78 Y:12 P:24 SP:F9 PPU:278, 95 CYC:10898\n\
F849  D0 03     BNE $F84E                       A:6A X:78 Y:12 P:27 SP:F9 PPU:284, 95 CYC:10900\n\
F84B  70 01     BVS $F84E                       A:6A X:78 Y:12 P:27 SP:F9 PPU:290, 95 CYC:10902\n\
F84D  60        RTS                             A:6A X:78 Y:12 P:27 SP:F9 PPU:296, 95 CYC:10904\n\
DC99  C8        INY                             A:6A X:78 Y:12 P:27 SP:FB PPU:314, 95 CYC:10910\n\
DC9A  A9 7F     LDA #$7F                        A:6A X:78 Y:13 P:25 SP:FB PPU:320, 95 CYC:10912\n\
DC9C  85 78     STA $78 = 69                    A:7F X:78 Y:13 P:25 SP:FB PPU:326, 95 CYC:10914\n\
DC9E  20 51 F8  JSR $F851                       A:7F X:78 Y:13 P:25 SP:FB PPU:335, 95 CYC:10917\n\
F851  38        SEC                             A:7F X:78 Y:13 P:25 SP:F9 PPU: 12, 96 CYC:10923\n\
F852  B8        CLV                             A:7F X:78 Y:13 P:25 SP:F9 PPU: 18, 96 CYC:10925\n\
F853  A9 7F     LDA #$7F                        A:7F X:78 Y:13 P:25 SP:F9 PPU: 24, 96 CYC:10927\n\
F855  60        RTS                             A:7F X:78 Y:13 P:25 SP:F9 PPU: 30, 96 CYC:10929\n\
DCA1  75 00     ADC $00,X @ 78 = 7F             A:7F X:78 Y:13 P:25 SP:FB PPU: 48, 96 CYC:10935\n\
DCA3  20 56 F8  JSR $F856                       A:FF X:78 Y:13 P:E4 SP:FB PPU: 60, 96 CYC:10939\n\
F856  10 09     BPL $F861                       A:FF X:78 Y:13 P:E4 SP:F9 PPU: 78, 96 CYC:10945\n\
F858  B0 07     BCS $F861                       A:FF X:78 Y:13 P:E4 SP:F9 PPU: 84, 96 CYC:10947\n\
F85A  C9 FF     CMP #$FF                        A:FF X:78 Y:13 P:E4 SP:F9 PPU: 90, 96 CYC:10949\n\
F85C  D0 03     BNE $F861                       A:FF X:78 Y:13 P:67 SP:F9 PPU: 96, 96 CYC:10951\n\
F85E  50 01     BVC $F861                       A:FF X:78 Y:13 P:67 SP:F9 PPU:102, 96 CYC:10953\n\
F860  60        RTS                             A:FF X:78 Y:13 P:67 SP:F9 PPU:108, 96 CYC:10955\n\
DCA6  C8        INY                             A:FF X:78 Y:13 P:67 SP:FB PPU:126, 96 CYC:10961\n\
DCA7  A9 80     LDA #$80                        A:FF X:78 Y:14 P:65 SP:FB PPU:132, 96 CYC:10963\n\
DCA9  85 78     STA $78 = 7F                    A:80 X:78 Y:14 P:E5 SP:FB PPU:138, 96 CYC:10965\n\
DCAB  20 64 F8  JSR $F864                       A:80 X:78 Y:14 P:E5 SP:FB PPU:147, 96 CYC:10968\n\
F864  18        CLC                             A:80 X:78 Y:14 P:E5 SP:F9 PPU:165, 96 CYC:10974\n\
F865  24 01     BIT $01 = FF                    A:80 X:78 Y:14 P:E4 SP:F9 PPU:171, 96 CYC:10976\n\
F867  A9 7F     LDA #$7F                        A:80 X:78 Y:14 P:E4 SP:F9 PPU:180, 96 CYC:10979\n\
F869  60        RTS                             A:7F X:78 Y:14 P:64 SP:F9 PPU:186, 96 CYC:10981\n\
DCAE  75 00     ADC $00,X @ 78 = 80             A:7F X:78 Y:14 P:64 SP:FB PPU:204, 96 CYC:10987\n\
DCB0  20 6A F8  JSR $F86A                       A:FF X:78 Y:14 P:A4 SP:FB PPU:216, 96 CYC:10991\n\
F86A  10 09     BPL $F875                       A:FF X:78 Y:14 P:A4 SP:F9 PPU:234, 96 CYC:10997\n\
F86C  B0 07     BCS $F875                       A:FF X:78 Y:14 P:A4 SP:F9 PPU:240, 96 CYC:10999\n\
F86E  C9 FF     CMP #$FF                        A:FF X:78 Y:14 P:A4 SP:F9 PPU:246, 96 CYC:11001\n\
F870  D0 03     BNE $F875                       A:FF X:78 Y:14 P:27 SP:F9 PPU:252, 96 CYC:11003\n\
F872  70 01     BVS $F875                       A:FF X:78 Y:14 P:27 SP:F9 PPU:258, 96 CYC:11005\n\
F874  60        RTS                             A:FF X:78 Y:14 P:27 SP:F9 PPU:264, 96 CYC:11007\n\
DCB3  C8        INY                             A:FF X:78 Y:14 P:27 SP:FB PPU:282, 96 CYC:11013\n\
DCB4  20 78 F8  JSR $F878                       A:FF X:78 Y:15 P:25 SP:FB PPU:288, 96 CYC:11015\n\
F878  38        SEC                             A:FF X:78 Y:15 P:25 SP:F9 PPU:306, 96 CYC:11021\n\
F879  B8        CLV                             A:FF X:78 Y:15 P:25 SP:F9 PPU:312, 96 CYC:11023\n\
F87A  A9 7F     LDA #$7F                        A:FF X:78 Y:15 P:25 SP:F9 PPU:318, 96 CYC:11025\n\
F87C  60        RTS                             A:7F X:78 Y:15 P:25 SP:F9 PPU:324, 96 CYC:11027\n\
DCB7  75 00     ADC $00,X @ 78 = 80             A:7F X:78 Y:15 P:25 SP:FB PPU:  1, 97 CYC:11033\n\
DCB9  20 7D F8  JSR $F87D                       A:00 X:78 Y:15 P:27 SP:FB PPU: 13, 97 CYC:11037\n\
F87D  D0 07     BNE $F886                       A:00 X:78 Y:15 P:27 SP:F9 PPU: 31, 97 CYC:11043\n\
F87F  30 05     BMI $F886                       A:00 X:78 Y:15 P:27 SP:F9 PPU: 37, 97 CYC:11045\n\
F881  70 03     BVS $F886                       A:00 X:78 Y:15 P:27 SP:F9 PPU: 43, 97 CYC:11047\n\
F883  90 01     BCC $F886                       A:00 X:78 Y:15 P:27 SP:F9 PPU: 49, 97 CYC:11049\n\
F885  60        RTS                             A:00 X:78 Y:15 P:27 SP:F9 PPU: 55, 97 CYC:11051\n\
DCBC  C8        INY                             A:00 X:78 Y:15 P:27 SP:FB PPU: 73, 97 CYC:11057\n\
DCBD  A9 40     LDA #$40                        A:00 X:78 Y:16 P:25 SP:FB PPU: 79, 97 CYC:11059\n\
DCBF  85 78     STA $78 = 80                    A:40 X:78 Y:16 P:25 SP:FB PPU: 85, 97 CYC:11061\n\
DCC1  20 89 F8  JSR $F889                       A:40 X:78 Y:16 P:25 SP:FB PPU: 94, 97 CYC:11064\n\
F889  24 01     BIT $01 = FF                    A:40 X:78 Y:16 P:25 SP:F9 PPU:112, 97 CYC:11070\n\
F88B  A9 40     LDA #$40                        A:40 X:78 Y:16 P:E5 SP:F9 PPU:121, 97 CYC:11073\n\
F88D  60        RTS                             A:40 X:78 Y:16 P:65 SP:F9 PPU:127, 97 CYC:11075\n\
DCC4  D5 00     CMP $00,X @ 78 = 40             A:40 X:78 Y:16 P:65 SP:FB PPU:145, 97 CYC:11081\n\
DCC6  20 8E F8  JSR $F88E                       A:40 X:78 Y:16 P:67 SP:FB PPU:157, 97 CYC:11085\n\
F88E  30 07     BMI $F897                       A:40 X:78 Y:16 P:67 SP:F9 PPU:175, 97 CYC:11091\n\
F890  90 05     BCC $F897                       A:40 X:78 Y:16 P:67 SP:F9 PPU:181, 97 CYC:11093\n\
F892  D0 03     BNE $F897                       A:40 X:78 Y:16 P:67 SP:F9 PPU:187, 97 CYC:11095\n\
F894  50 01     BVC $F897                       A:40 X:78 Y:16 P:67 SP:F9 PPU:193, 97 CYC:11097\n\
F896  60        RTS                             A:40 X:78 Y:16 P:67 SP:F9 PPU:199, 97 CYC:11099\n\
DCC9  C8        INY                             A:40 X:78 Y:16 P:67 SP:FB PPU:217, 97 CYC:11105\n\
DCCA  48        PHA                             A:40 X:78 Y:17 P:65 SP:FB PPU:223, 97 CYC:11107\n\
DCCB  A9 3F     LDA #$3F                        A:40 X:78 Y:17 P:65 SP:FA PPU:232, 97 CYC:11110\n\
DCCD  85 78     STA $78 = 40                    A:3F X:78 Y:17 P:65 SP:FA PPU:238, 97 CYC:11112\n\
DCCF  68        PLA                             A:3F X:78 Y:17 P:65 SP:FA PPU:247, 97 CYC:11115\n\
DCD0  20 9A F8  JSR $F89A                       A:40 X:78 Y:17 P:65 SP:FB PPU:259, 97 CYC:11119\n\
F89A  B8        CLV                             A:40 X:78 Y:17 P:65 SP:F9 PPU:277, 97 CYC:11125\n\
F89B  60        RTS                             A:40 X:78 Y:17 P:25 SP:F9 PPU:283, 97 CYC:11127\n\
DCD3  D5 00     CMP $00,X @ 78 = 3F             A:40 X:78 Y:17 P:25 SP:FB PPU:301, 97 CYC:11133\n\
DCD5  20 9C F8  JSR $F89C                       A:40 X:78 Y:17 P:25 SP:FB PPU:313, 97 CYC:11137\n\
F89C  F0 07     BEQ $F8A5                       A:40 X:78 Y:17 P:25 SP:F9 PPU:331, 97 CYC:11143\n\
F89E  30 05     BMI $F8A5                       A:40 X:78 Y:17 P:25 SP:F9 PPU:337, 97 CYC:11145\n\
F8A0  90 03     BCC $F8A5                       A:40 X:78 Y:17 P:25 SP:F9 PPU:  2, 98 CYC:11147\n\
F8A2  70 01     BVS $F8A5                       A:40 X:78 Y:17 P:25 SP:F9 PPU:  8, 98 CYC:11149\n\
F8A4  60        RTS                             A:40 X:78 Y:17 P:25 SP:F9 PPU: 14, 98 CYC:11151\n\
DCD8  C8        INY                             A:40 X:78 Y:17 P:25 SP:FB PPU: 32, 98 CYC:11157\n\
DCD9  48        PHA                             A:40 X:78 Y:18 P:25 SP:FB PPU: 38, 98 CYC:11159\n\
DCDA  A9 41     LDA #$41                        A:40 X:78 Y:18 P:25 SP:FA PPU: 47, 98 CYC:11162\n\
DCDC  85 78     STA $78 = 3F                    A:41 X:78 Y:18 P:25 SP:FA PPU: 53, 98 CYC:11164\n\
DCDE  68        PLA                             A:41 X:78 Y:18 P:25 SP:FA PPU: 62, 98 CYC:11167\n\
DCDF  D5 00     CMP $00,X @ 78 = 41             A:40 X:78 Y:18 P:25 SP:FB PPU: 74, 98 CYC:11171\n\
DCE1  20 A8 F8  JSR $F8A8                       A:40 X:78 Y:18 P:A4 SP:FB PPU: 86, 98 CYC:11175\n\
F8A8  F0 05     BEQ $F8AF                       A:40 X:78 Y:18 P:A4 SP:F9 PPU:104, 98 CYC:11181\n\
F8AA  10 03     BPL $F8AF                       A:40 X:78 Y:18 P:A4 SP:F9 PPU:110, 98 CYC:11183\n\
F8AC  10 01     BPL $F8AF                       A:40 X:78 Y:18 P:A4 SP:F9 PPU:116, 98 CYC:11185\n\
F8AE  60        RTS                             A:40 X:78 Y:18 P:A4 SP:F9 PPU:122, 98 CYC:11187\n\
DCE4  C8        INY                             A:40 X:78 Y:18 P:A4 SP:FB PPU:140, 98 CYC:11193\n\
DCE5  48        PHA                             A:40 X:78 Y:19 P:24 SP:FB PPU:146, 98 CYC:11195\n\
DCE6  A9 00     LDA #$00                        A:40 X:78 Y:19 P:24 SP:FA PPU:155, 98 CYC:11198\n\
DCE8  85 78     STA $78 = 41                    A:00 X:78 Y:19 P:26 SP:FA PPU:161, 98 CYC:11200\n\
DCEA  68        PLA                             A:00 X:78 Y:19 P:26 SP:FA PPU:170, 98 CYC:11203\n\
DCEB  20 B2 F8  JSR $F8B2                       A:40 X:78 Y:19 P:24 SP:FB PPU:182, 98 CYC:11207\n\
F8B2  A9 80     LDA #$80                        A:40 X:78 Y:19 P:24 SP:F9 PPU:200, 98 CYC:11213\n\
F8B4  60        RTS                             A:80 X:78 Y:19 P:A4 SP:F9 PPU:206, 98 CYC:11215\n\
DCEE  D5 00     CMP $00,X @ 78 = 00             A:80 X:78 Y:19 P:A4 SP:FB PPU:224, 98 CYC:11221\n\
DCF0  20 B5 F8  JSR $F8B5                       A:80 X:78 Y:19 P:A5 SP:FB PPU:236, 98 CYC:11225\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:78 Y:19 P:A5 SP:F9 PPU:254, 98 CYC:11231\n\
F8B7  10 03     BPL $F8BC                       A:80 X:78 Y:19 P:A5 SP:F9 PPU:260, 98 CYC:11233\n\
F8B9  90 01     BCC $F8BC                       A:80 X:78 Y:19 P:A5 SP:F9 PPU:266, 98 CYC:11235\n\
F8BB  60        RTS                             A:80 X:78 Y:19 P:A5 SP:F9 PPU:272, 98 CYC:11237\n\
DCF3  C8        INY                             A:80 X:78 Y:19 P:A5 SP:FB PPU:290, 98 CYC:11243\n\
DCF4  48        PHA                             A:80 X:78 Y:1A P:25 SP:FB PPU:296, 98 CYC:11245\n\
DCF5  A9 80     LDA #$80                        A:80 X:78 Y:1A P:25 SP:FA PPU:305, 98 CYC:11248\n\
DCF7  85 78     STA $78 = 00                    A:80 X:78 Y:1A P:A5 SP:FA PPU:311, 98 CYC:11250\n\
DCF9  68        PLA                             A:80 X:78 Y:1A P:A5 SP:FA PPU:320, 98 CYC:11253\n\
DCFA  D5 00     CMP $00,X @ 78 = 80             A:80 X:78 Y:1A P:A5 SP:FB PPU:332, 98 CYC:11257\n\
DCFC  20 BF F8  JSR $F8BF                       A:80 X:78 Y:1A P:27 SP:FB PPU:  3, 99 CYC:11261\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:78 Y:1A P:27 SP:F9 PPU: 21, 99 CYC:11267\n\
F8C1  30 03     BMI $F8C6                       A:80 X:78 Y:1A P:27 SP:F9 PPU: 27, 99 CYC:11269\n\
F8C3  90 01     BCC $F8C6                       A:80 X:78 Y:1A P:27 SP:F9 PPU: 33, 99 CYC:11271\n\
F8C5  60        RTS                             A:80 X:78 Y:1A P:27 SP:F9 PPU: 39, 99 CYC:11273\n\
DCFF  C8        INY                             A:80 X:78 Y:1A P:27 SP:FB PPU: 57, 99 CYC:11279\n\
DD00  48        PHA                             A:80 X:78 Y:1B P:25 SP:FB PPU: 63, 99 CYC:11281\n\
DD01  A9 81     LDA #$81                        A:80 X:78 Y:1B P:25 SP:FA PPU: 72, 99 CYC:11284\n\
DD03  85 78     STA $78 = 80                    A:81 X:78 Y:1B P:A5 SP:FA PPU: 78, 99 CYC:11286\n\
DD05  68        PLA                             A:81 X:78 Y:1B P:A5 SP:FA PPU: 87, 99 CYC:11289\n\
DD06  D5 00     CMP $00,X @ 78 = 81             A:80 X:78 Y:1B P:A5 SP:FB PPU: 99, 99 CYC:11293\n\
DD08  20 C9 F8  JSR $F8C9                       A:80 X:78 Y:1B P:A4 SP:FB PPU:111, 99 CYC:11297\n\
F8C9  B0 05     BCS $F8D0                       A:80 X:78 Y:1B P:A4 SP:F9 PPU:129, 99 CYC:11303\n\
F8CB  F0 03     BEQ $F8D0                       A:80 X:78 Y:1B P:A4 SP:F9 PPU:135, 99 CYC:11305\n\
F8CD  10 01     BPL $F8D0                       A:80 X:78 Y:1B P:A4 SP:F9 PPU:141, 99 CYC:11307\n\
F8CF  60        RTS                             A:80 X:78 Y:1B P:A4 SP:F9 PPU:147, 99 CYC:11309\n\
DD0B  C8        INY                             A:80 X:78 Y:1B P:A4 SP:FB PPU:165, 99 CYC:11315\n\
DD0C  48        PHA                             A:80 X:78 Y:1C P:24 SP:FB PPU:171, 99 CYC:11317\n\
DD0D  A9 7F     LDA #$7F                        A:80 X:78 Y:1C P:24 SP:FA PPU:180, 99 CYC:11320\n\
DD0F  85 78     STA $78 = 81                    A:7F X:78 Y:1C P:24 SP:FA PPU:186, 99 CYC:11322\n\
DD11  68        PLA                             A:7F X:78 Y:1C P:24 SP:FA PPU:195, 99 CYC:11325\n\
DD12  D5 00     CMP $00,X @ 78 = 7F             A:80 X:78 Y:1C P:A4 SP:FB PPU:207, 99 CYC:11329\n\
DD14  20 D3 F8  JSR $F8D3                       A:80 X:78 Y:1C P:25 SP:FB PPU:219, 99 CYC:11333\n\
F8D3  90 05     BCC $F8DA                       A:80 X:78 Y:1C P:25 SP:F9 PPU:237, 99 CYC:11339\n\
F8D5  F0 03     BEQ $F8DA                       A:80 X:78 Y:1C P:25 SP:F9 PPU:243, 99 CYC:11341\n\
F8D7  30 01     BMI $F8DA                       A:80 X:78 Y:1C P:25 SP:F9 PPU:249, 99 CYC:11343\n\
F8D9  60        RTS                             A:80 X:78 Y:1C P:25 SP:F9 PPU:255, 99 CYC:11345\n\
DD17  C8        INY                             A:80 X:78 Y:1C P:25 SP:FB PPU:273, 99 CYC:11351\n\
DD18  A9 40     LDA #$40                        A:80 X:78 Y:1D P:25 SP:FB PPU:279, 99 CYC:11353\n\
DD1A  85 78     STA $78 = 7F                    A:40 X:78 Y:1D P:25 SP:FB PPU:285, 99 CYC:11355\n\
DD1C  20 31 F9  JSR $F931                       A:40 X:78 Y:1D P:25 SP:FB PPU:294, 99 CYC:11358\n\
F931  24 01     BIT $01 = FF                    A:40 X:78 Y:1D P:25 SP:F9 PPU:312, 99 CYC:11364\n\
F933  A9 40     LDA #$40                        A:40 X:78 Y:1D P:E5 SP:F9 PPU:321, 99 CYC:11367\n\
F935  38        SEC                             A:40 X:78 Y:1D P:65 SP:F9 PPU:327, 99 CYC:11369\n\
F936  60        RTS                             A:40 X:78 Y:1D P:65 SP:F9 PPU:333, 99 CYC:11371\n\
DD1F  F5 00     SBC $00,X @ 78 = 40             A:40 X:78 Y:1D P:65 SP:FB PPU: 10,100 CYC:11377\n\
DD21  20 37 F9  JSR $F937                       A:00 X:78 Y:1D P:27 SP:FB PPU: 22,100 CYC:11381\n\
F937  30 0B     BMI $F944                       A:00 X:78 Y:1D P:27 SP:F9 PPU: 40,100 CYC:11387\n\
F939  90 09     BCC $F944                       A:00 X:78 Y:1D P:27 SP:F9 PPU: 46,100 CYC:11389\n\
F93B  D0 07     BNE $F944                       A:00 X:78 Y:1D P:27 SP:F9 PPU: 52,100 CYC:11391\n\
F93D  70 05     BVS $F944                       A:00 X:78 Y:1D P:27 SP:F9 PPU: 58,100 CYC:11393\n\
F93F  C9 00     CMP #$00                        A:00 X:78 Y:1D P:27 SP:F9 PPU: 64,100 CYC:11395\n\
F941  D0 01     BNE $F944                       A:00 X:78 Y:1D P:27 SP:F9 PPU: 70,100 CYC:11397\n\
F943  60        RTS                             A:00 X:78 Y:1D P:27 SP:F9 PPU: 76,100 CYC:11399\n\
DD24  C8        INY                             A:00 X:78 Y:1D P:27 SP:FB PPU: 94,100 CYC:11405\n\
DD25  A9 3F     LDA #$3F                        A:00 X:78 Y:1E P:25 SP:FB PPU:100,100 CYC:11407\n\
DD27  85 78     STA $78 = 40                    A:3F X:78 Y:1E P:25 SP:FB PPU:106,100 CYC:11409\n\
DD29  20 47 F9  JSR $F947                       A:3F X:78 Y:1E P:25 SP:FB PPU:115,100 CYC:11412\n\
F947  B8        CLV                             A:3F X:78 Y:1E P:25 SP:F9 PPU:133,100 CYC:11418\n\
F948  38        SEC                             A:3F X:78 Y:1E P:25 SP:F9 PPU:139,100 CYC:11420\n\
F949  A9 40     LDA #$40                        A:3F X:78 Y:1E P:25 SP:F9 PPU:145,100 CYC:11422\n\
F94B  60        RTS                             A:40 X:78 Y:1E P:25 SP:F9 PPU:151,100 CYC:11424\n\
DD2C  F5 00     SBC $00,X @ 78 = 3F             A:40 X:78 Y:1E P:25 SP:FB PPU:169,100 CYC:11430\n\
DD2E  20 4C F9  JSR $F94C                       A:01 X:78 Y:1E P:25 SP:FB PPU:181,100 CYC:11434\n\
F94C  F0 0B     BEQ $F959                       A:01 X:78 Y:1E P:25 SP:F9 PPU:199,100 CYC:11440\n\
F94E  30 09     BMI $F959                       A:01 X:78 Y:1E P:25 SP:F9 PPU:205,100 CYC:11442\n\
F950  90 07     BCC $F959                       A:01 X:78 Y:1E P:25 SP:F9 PPU:211,100 CYC:11444\n\
F952  70 05     BVS $F959                       A:01 X:78 Y:1E P:25 SP:F9 PPU:217,100 CYC:11446\n\
F954  C9 01     CMP #$01                        A:01 X:78 Y:1E P:25 SP:F9 PPU:223,100 CYC:11448\n\
F956  D0 01     BNE $F959                       A:01 X:78 Y:1E P:27 SP:F9 PPU:229,100 CYC:11450\n\
F958  60        RTS                             A:01 X:78 Y:1E P:27 SP:F9 PPU:235,100 CYC:11452\n\
DD31  C8        INY                             A:01 X:78 Y:1E P:27 SP:FB PPU:253,100 CYC:11458\n\
DD32  A9 41     LDA #$41                        A:01 X:78 Y:1F P:25 SP:FB PPU:259,100 CYC:11460\n\
DD34  85 78     STA $78 = 3F                    A:41 X:78 Y:1F P:25 SP:FB PPU:265,100 CYC:11462\n\
DD36  20 5C F9  JSR $F95C                       A:41 X:78 Y:1F P:25 SP:FB PPU:274,100 CYC:11465\n\
F95C  A9 40     LDA #$40                        A:41 X:78 Y:1F P:25 SP:F9 PPU:292,100 CYC:11471\n\
F95E  38        SEC                             A:40 X:78 Y:1F P:25 SP:F9 PPU:298,100 CYC:11473\n\
F95F  24 01     BIT $01 = FF                    A:40 X:78 Y:1F P:25 SP:F9 PPU:304,100 CYC:11475\n\
F961  60        RTS                             A:40 X:78 Y:1F P:E5 SP:F9 PPU:313,100 CYC:11478\n\
DD39  F5 00     SBC $00,X @ 78 = 41             A:40 X:78 Y:1F P:E5 SP:FB PPU:331,100 CYC:11484\n\
DD3B  20 62 F9  JSR $F962                       A:FF X:78 Y:1F P:A4 SP:FB PPU:  2,101 CYC:11488\n\
F962  B0 0B     BCS $F96F                       A:FF X:78 Y:1F P:A4 SP:F9 PPU: 20,101 CYC:11494\n\
F964  F0 09     BEQ $F96F                       A:FF X:78 Y:1F P:A4 SP:F9 PPU: 26,101 CYC:11496\n\
F966  10 07     BPL $F96F                       A:FF X:78 Y:1F P:A4 SP:F9 PPU: 32,101 CYC:11498\n\
F968  70 05     BVS $F96F                       A:FF X:78 Y:1F P:A4 SP:F9 PPU: 38,101 CYC:11500\n\
F96A  C9 FF     CMP #$FF                        A:FF X:78 Y:1F P:A4 SP:F9 PPU: 44,101 CYC:11502\n\
F96C  D0 01     BNE $F96F                       A:FF X:78 Y:1F P:27 SP:F9 PPU: 50,101 CYC:11504\n\
F96E  60        RTS                             A:FF X:78 Y:1F P:27 SP:F9 PPU: 56,101 CYC:11506\n\
DD3E  C8        INY                             A:FF X:78 Y:1F P:27 SP:FB PPU: 74,101 CYC:11512\n\
DD3F  A9 00     LDA #$00                        A:FF X:78 Y:20 P:25 SP:FB PPU: 80,101 CYC:11514\n\
DD41  85 78     STA $78 = 41                    A:00 X:78 Y:20 P:27 SP:FB PPU: 86,101 CYC:11516\n\
DD43  20 72 F9  JSR $F972                       A:00 X:78 Y:20 P:27 SP:FB PPU: 95,101 CYC:11519\n\
F972  18        CLC                             A:00 X:78 Y:20 P:27 SP:F9 PPU:113,101 CYC:11525\n\
F973  A9 80     LDA #$80                        A:00 X:78 Y:20 P:26 SP:F9 PPU:119,101 CYC:11527\n\
F975  60        RTS                             A:80 X:78 Y:20 P:A4 SP:F9 PPU:125,101 CYC:11529\n\
DD46  F5 00     SBC $00,X @ 78 = 00             A:80 X:78 Y:20 P:A4 SP:FB PPU:143,101 CYC:11535\n\
DD48  20 76 F9  JSR $F976                       A:7F X:78 Y:20 P:65 SP:FB PPU:155,101 CYC:11539\n\
F976  90 05     BCC $F97D                       A:7F X:78 Y:20 P:65 SP:F9 PPU:173,101 CYC:11545\n\
F978  C9 7F     CMP #$7F                        A:7F X:78 Y:20 P:65 SP:F9 PPU:179,101 CYC:11547\n\
F97A  D0 01     BNE $F97D                       A:7F X:78 Y:20 P:67 SP:F9 PPU:185,101 CYC:11549\n\
F97C  60        RTS                             A:7F X:78 Y:20 P:67 SP:F9 PPU:191,101 CYC:11551\n\
DD4B  C8        INY                             A:7F X:78 Y:20 P:67 SP:FB PPU:209,101 CYC:11557\n\
DD4C  A9 7F     LDA #$7F                        A:7F X:78 Y:21 P:65 SP:FB PPU:215,101 CYC:11559\n\
DD4E  85 78     STA $78 = 00                    A:7F X:78 Y:21 P:65 SP:FB PPU:221,101 CYC:11561\n\
DD50  20 80 F9  JSR $F980                       A:7F X:78 Y:21 P:65 SP:FB PPU:230,101 CYC:11564\n\
F980  38        SEC                             A:7F X:78 Y:21 P:65 SP:F9 PPU:248,101 CYC:11570\n\
F981  A9 81     LDA #$81                        A:7F X:78 Y:21 P:65 SP:F9 PPU:254,101 CYC:11572\n\
F983  60        RTS                             A:81 X:78 Y:21 P:E5 SP:F9 PPU:260,101 CYC:11574\n\
DD53  F5 00     SBC $00,X @ 78 = 7F             A:81 X:78 Y:21 P:E5 SP:FB PPU:278,101 CYC:11580\n\
DD55  20 84 F9  JSR $F984                       A:02 X:78 Y:21 P:65 SP:FB PPU:290,101 CYC:11584\n\
F984  50 07     BVC $F98D                       A:02 X:78 Y:21 P:65 SP:F9 PPU:308,101 CYC:11590\n\
F986  90 05     BCC $F98D                       A:02 X:78 Y:21 P:65 SP:F9 PPU:314,101 CYC:11592\n\
F988  C9 02     CMP #$02                        A:02 X:78 Y:21 P:65 SP:F9 PPU:320,101 CYC:11594\n\
F98A  D0 01     BNE $F98D                       A:02 X:78 Y:21 P:67 SP:F9 PPU:326,101 CYC:11596\n\
F98C  60        RTS                             A:02 X:78 Y:21 P:67 SP:F9 PPU:332,101 CYC:11598\n\
DD58  A9 AA     LDA #$AA                        A:02 X:78 Y:21 P:67 SP:FB PPU:  9,102 CYC:11604\n\
DD5A  85 33     STA $33 = 44                    A:AA X:78 Y:21 P:E5 SP:FB PPU: 15,102 CYC:11606\n\
DD5C  A9 BB     LDA #$BB                        A:AA X:78 Y:21 P:E5 SP:FB PPU: 24,102 CYC:11609\n\
DD5E  85 89     STA $89 = BB                    A:BB X:78 Y:21 P:E5 SP:FB PPU: 30,102 CYC:11611\n\
DD60  A2 00     LDX #$00                        A:BB X:78 Y:21 P:E5 SP:FB PPU: 39,102 CYC:11614\n\
DD62  A0 66     LDY #$66                        A:BB X:00 Y:21 P:67 SP:FB PPU: 45,102 CYC:11616\n\
DD64  24 01     BIT $01 = FF                    A:BB X:00 Y:66 P:65 SP:FB PPU: 51,102 CYC:11618\n\
DD66  38        SEC                             A:BB X:00 Y:66 P:E5 SP:FB PPU: 60,102 CYC:11621\n\
DD67  A9 00     LDA #$00                        A:BB X:00 Y:66 P:E5 SP:FB PPU: 66,102 CYC:11623\n\
DD69  B5 33     LDA $33,X @ 33 = AA             A:00 X:00 Y:66 P:67 SP:FB PPU: 72,102 CYC:11625\n\
DD6B  10 12     BPL $DD7F                       A:AA X:00 Y:66 P:E5 SP:FB PPU: 84,102 CYC:11629\n\
DD6D  F0 10     BEQ $DD7F                       A:AA X:00 Y:66 P:E5 SP:FB PPU: 90,102 CYC:11631\n\
DD6F  50 0E     BVC $DD7F                       A:AA X:00 Y:66 P:E5 SP:FB PPU: 96,102 CYC:11633\n\
DD71  90 0C     BCC $DD7F                       A:AA X:00 Y:66 P:E5 SP:FB PPU:102,102 CYC:11635\n\
DD73  C0 66     CPY #$66                        A:AA X:00 Y:66 P:E5 SP:FB PPU:108,102 CYC:11637\n\
DD75  D0 08     BNE $DD7F                       A:AA X:00 Y:66 P:67 SP:FB PPU:114,102 CYC:11639\n\
DD77  E0 00     CPX #$00                        A:AA X:00 Y:66 P:67 SP:FB PPU:120,102 CYC:11641\n\
DD79  D0 04     BNE $DD7F                       A:AA X:00 Y:66 P:67 SP:FB PPU:126,102 CYC:11643\n\
DD7B  C9 AA     CMP #$AA                        A:AA X:00 Y:66 P:67 SP:FB PPU:132,102 CYC:11645\n\
DD7D  F0 04     BEQ $DD83                       A:AA X:00 Y:66 P:67 SP:FB PPU:138,102 CYC:11647\n\
DD83  A2 8A     LDX #$8A                        A:AA X:00 Y:66 P:67 SP:FB PPU:147,102 CYC:11650\n\
DD85  A0 66     LDY #$66                        A:AA X:8A Y:66 P:E5 SP:FB PPU:153,102 CYC:11652\n\
DD87  B8        CLV                             A:AA X:8A Y:66 P:65 SP:FB PPU:159,102 CYC:11654\n\
DD88  18        CLC                             A:AA X:8A Y:66 P:25 SP:FB PPU:165,102 CYC:11656\n\
DD89  A9 00     LDA #$00                        A:AA X:8A Y:66 P:24 SP:FB PPU:171,102 CYC:11658\n\
DD8B  B5 FF     LDA $FF,X @ 89 = BB             A:00 X:8A Y:66 P:26 SP:FB PPU:177,102 CYC:11660\n\
DD8D  10 12     BPL $DDA1                       A:BB X:8A Y:66 P:A4 SP:FB PPU:189,102 CYC:11664\n\
DD8F  F0 10     BEQ $DDA1                       A:BB X:8A Y:66 P:A4 SP:FB PPU:195,102 CYC:11666\n\
DD91  70 0E     BVS $DDA1                       A:BB X:8A Y:66 P:A4 SP:FB PPU:201,102 CYC:11668\n\
DD93  B0 0C     BCS $DDA1                       A:BB X:8A Y:66 P:A4 SP:FB PPU:207,102 CYC:11670\n\
DD95  C9 BB     CMP #$BB                        A:BB X:8A Y:66 P:A4 SP:FB PPU:213,102 CYC:11672\n\
DD97  D0 08     BNE $DDA1                       A:BB X:8A Y:66 P:27 SP:FB PPU:219,102 CYC:11674\n\
DD99  C0 66     CPY #$66                        A:BB X:8A Y:66 P:27 SP:FB PPU:225,102 CYC:11676\n\
DD9B  D0 04     BNE $DDA1                       A:BB X:8A Y:66 P:27 SP:FB PPU:231,102 CYC:11678\n\
DD9D  E0 8A     CPX #$8A                        A:BB X:8A Y:66 P:27 SP:FB PPU:237,102 CYC:11680\n\
DD9F  F0 04     BEQ $DDA5                       A:BB X:8A Y:66 P:27 SP:FB PPU:243,102 CYC:11682\n\
DDA5  24 01     BIT $01 = FF                    A:BB X:8A Y:66 P:27 SP:FB PPU:252,102 CYC:11685\n\
DDA7  38        SEC                             A:BB X:8A Y:66 P:E5 SP:FB PPU:261,102 CYC:11688\n\
DDA8  A9 44     LDA #$44                        A:BB X:8A Y:66 P:E5 SP:FB PPU:267,102 CYC:11690\n\
DDAA  A2 00     LDX #$00                        A:44 X:8A Y:66 P:65 SP:FB PPU:273,102 CYC:11692\n\
DDAC  95 33     STA $33,X @ 33 = AA             A:44 X:00 Y:66 P:67 SP:FB PPU:279,102 CYC:11694\n\
DDAE  A5 33     LDA $33 = 44                    A:44 X:00 Y:66 P:67 SP:FB PPU:291,102 CYC:11698\n\
DDB0  90 18     BCC $DDCA                       A:44 X:00 Y:66 P:65 SP:FB PPU:300,102 CYC:11701\n\
DDB2  C9 44     CMP #$44                        A:44 X:00 Y:66 P:65 SP:FB PPU:306,102 CYC:11703\n\
DDB4  D0 14     BNE $DDCA                       A:44 X:00 Y:66 P:67 SP:FB PPU:312,102 CYC:11705\n\
DDB6  50 12     BVC $DDCA                       A:44 X:00 Y:66 P:67 SP:FB PPU:318,102 CYC:11707\n\
DDB8  18        CLC                             A:44 X:00 Y:66 P:67 SP:FB PPU:324,102 CYC:11709\n\
DDB9  B8        CLV                             A:44 X:00 Y:66 P:66 SP:FB PPU:330,102 CYC:11711\n\
DDBA  A9 99     LDA #$99                        A:44 X:00 Y:66 P:26 SP:FB PPU:336,102 CYC:11713\n\
DDBC  A2 80     LDX #$80                        A:99 X:00 Y:66 P:A4 SP:FB PPU:  1,103 CYC:11715\n\
DDBE  95 85     STA $85,X @ 05 = 99             A:99 X:80 Y:66 P:A4 SP:FB PPU:  7,103 CYC:11717\n\
DDC0  A5 05     LDA $05 = 99                    A:99 X:80 Y:66 P:A4 SP:FB PPU: 19,103 CYC:11721\n\
DDC2  B0 06     BCS $DDCA                       A:99 X:80 Y:66 P:A4 SP:FB PPU: 28,103 CYC:11724\n\
DDC4  C9 99     CMP #$99                        A:99 X:80 Y:66 P:A4 SP:FB PPU: 34,103 CYC:11726\n\
DDC6  D0 02     BNE $DDCA                       A:99 X:80 Y:66 P:27 SP:FB PPU: 40,103 CYC:11728\n\
DDC8  50 04     BVC $DDCE                       A:99 X:80 Y:66 P:27 SP:FB PPU: 46,103 CYC:11730\n\
DDCE  A0 25     LDY #$25                        A:99 X:80 Y:66 P:27 SP:FB PPU: 55,103 CYC:11733\n\
DDD0  A2 78     LDX #$78                        A:99 X:80 Y:25 P:25 SP:FB PPU: 61,103 CYC:11735\n\
DDD2  20 90 F9  JSR $F990                       A:99 X:78 Y:25 P:25 SP:FB PPU: 67,103 CYC:11737\n\
F990  A2 55     LDX #$55                        A:99 X:78 Y:25 P:25 SP:F9 PPU: 85,103 CYC:11743\n\
F992  A9 FF     LDA #$FF                        A:99 X:55 Y:25 P:25 SP:F9 PPU: 91,103 CYC:11745\n\
F994  85 01     STA $01 = FF                    A:FF X:55 Y:25 P:A5 SP:F9 PPU: 97,103 CYC:11747\n\
F996  EA        NOP                             A:FF X:55 Y:25 P:A5 SP:F9 PPU:106,103 CYC:11750\n\
F997  24 01     BIT $01 = FF                    A:FF X:55 Y:25 P:A5 SP:F9 PPU:112,103 CYC:11752\n\
F999  38        SEC                             A:FF X:55 Y:25 P:E5 SP:F9 PPU:121,103 CYC:11755\n\
F99A  A9 01     LDA #$01                        A:FF X:55 Y:25 P:E5 SP:F9 PPU:127,103 CYC:11757\n\
F99C  60        RTS                             A:01 X:55 Y:25 P:65 SP:F9 PPU:133,103 CYC:11759\n\
DDD5  95 00     STA $00,X @ 55 = 00             A:01 X:55 Y:25 P:65 SP:FB PPU:151,103 CYC:11765\n\
DDD7  56 00     LSR $00,X @ 55 = 01             A:01 X:55 Y:25 P:65 SP:FB PPU:163,103 CYC:11769\n\
DDD9  B5 00     LDA $00,X @ 55 = 00             A:01 X:55 Y:25 P:67 SP:FB PPU:181,103 CYC:11775\n\
DDDB  20 9D F9  JSR $F99D                       A:00 X:55 Y:25 P:67 SP:FB PPU:193,103 CYC:11779\n\
F99D  90 1B     BCC $F9BA                       A:00 X:55 Y:25 P:67 SP:F9 PPU:211,103 CYC:11785\n\
F99F  D0 19     BNE $F9BA                       A:00 X:55 Y:25 P:67 SP:F9 PPU:217,103 CYC:11787\n\
F9A1  30 17     BMI $F9BA                       A:00 X:55 Y:25 P:67 SP:F9 PPU:223,103 CYC:11789\n\
F9A3  50 15     BVC $F9BA                       A:00 X:55 Y:25 P:67 SP:F9 PPU:229,103 CYC:11791\n\
F9A5  C9 00     CMP #$00                        A:00 X:55 Y:25 P:67 SP:F9 PPU:235,103 CYC:11793\n\
F9A7  D0 11     BNE $F9BA                       A:00 X:55 Y:25 P:67 SP:F9 PPU:241,103 CYC:11795\n\
F9A9  B8        CLV                             A:00 X:55 Y:25 P:67 SP:F9 PPU:247,103 CYC:11797\n\
F9AA  A9 AA     LDA #$AA                        A:00 X:55 Y:25 P:27 SP:F9 PPU:253,103 CYC:11799\n\
F9AC  60        RTS                             A:AA X:55 Y:25 P:A5 SP:F9 PPU:259,103 CYC:11801\n\
DDDE  C8        INY                             A:AA X:55 Y:25 P:A5 SP:FB PPU:277,103 CYC:11807\n\
DDDF  95 00     STA $00,X @ 55 = 00             A:AA X:55 Y:26 P:25 SP:FB PPU:283,103 CYC:11809\n\
DDE1  56 00     LSR $00,X @ 55 = AA             A:AA X:55 Y:26 P:25 SP:FB PPU:295,103 CYC:11813\n\
DDE3  B5 00     LDA $00,X @ 55 = 55             A:AA X:55 Y:26 P:24 SP:FB PPU:313,103 CYC:11819\n\
DDE5  20 AD F9  JSR $F9AD                       A:55 X:55 Y:26 P:24 SP:FB PPU:325,103 CYC:11823\n\
F9AD  B0 0B     BCS $F9BA                       A:55 X:55 Y:26 P:24 SP:F9 PPU:  2,104 CYC:11829\n\
F9AF  F0 09     BEQ $F9BA                       A:55 X:55 Y:26 P:24 SP:F9 PPU:  8,104 CYC:11831\n\
F9B1  30 07     BMI $F9BA                       A:55 X:55 Y:26 P:24 SP:F9 PPU: 14,104 CYC:11833\n\
F9B3  70 05     BVS $F9BA                       A:55 X:55 Y:26 P:24 SP:F9 PPU: 20,104 CYC:11835\n\
F9B5  C9 55     CMP #$55                        A:55 X:55 Y:26 P:24 SP:F9 PPU: 26,104 CYC:11837\n\
F9B7  D0 01     BNE $F9BA                       A:55 X:55 Y:26 P:27 SP:F9 PPU: 32,104 CYC:11839\n\
F9B9  60        RTS                             A:55 X:55 Y:26 P:27 SP:F9 PPU: 38,104 CYC:11841\n\
DDE8  C8        INY                             A:55 X:55 Y:26 P:27 SP:FB PPU: 56,104 CYC:11847\n\
DDE9  20 BD F9  JSR $F9BD                       A:55 X:55 Y:27 P:25 SP:FB PPU: 62,104 CYC:11849\n\
F9BD  24 01     BIT $01 = FF                    A:55 X:55 Y:27 P:25 SP:F9 PPU: 80,104 CYC:11855\n\
F9BF  38        SEC                             A:55 X:55 Y:27 P:E5 SP:F9 PPU: 89,104 CYC:11858\n\
F9C0  A9 80     LDA #$80                        A:55 X:55 Y:27 P:E5 SP:F9 PPU: 95,104 CYC:11860\n\
F9C2  60        RTS                             A:80 X:55 Y:27 P:E5 SP:F9 PPU:101,104 CYC:11862\n\
DDEC  95 00     STA $00,X @ 55 = 55             A:80 X:55 Y:27 P:E5 SP:FB PPU:119,104 CYC:11868\n\
DDEE  16 00     ASL $00,X @ 55 = 80             A:80 X:55 Y:27 P:E5 SP:FB PPU:131,104 CYC:11872\n\
DDF0  B5 00     LDA $00,X @ 55 = 00             A:80 X:55 Y:27 P:67 SP:FB PPU:149,104 CYC:11878\n\
DDF2  20 C3 F9  JSR $F9C3                       A:00 X:55 Y:27 P:67 SP:FB PPU:161,104 CYC:11882\n\
F9C3  90 1C     BCC $F9E1                       A:00 X:55 Y:27 P:67 SP:F9 PPU:179,104 CYC:11888\n\
F9C5  D0 1A     BNE $F9E1                       A:00 X:55 Y:27 P:67 SP:F9 PPU:185,104 CYC:11890\n\
F9C7  30 18     BMI $F9E1                       A:00 X:55 Y:27 P:67 SP:F9 PPU:191,104 CYC:11892\n\
F9C9  50 16     BVC $F9E1                       A:00 X:55 Y:27 P:67 SP:F9 PPU:197,104 CYC:11894\n\
F9CB  C9 00     CMP #$00                        A:00 X:55 Y:27 P:67 SP:F9 PPU:203,104 CYC:11896\n\
F9CD  D0 12     BNE $F9E1                       A:00 X:55 Y:27 P:67 SP:F9 PPU:209,104 CYC:11898\n\
F9CF  B8        CLV                             A:00 X:55 Y:27 P:67 SP:F9 PPU:215,104 CYC:11900\n\
F9D0  A9 55     LDA #$55                        A:00 X:55 Y:27 P:27 SP:F9 PPU:221,104 CYC:11902\n\
F9D2  38        SEC                             A:55 X:55 Y:27 P:25 SP:F9 PPU:227,104 CYC:11904\n\
F9D3  60        RTS                             A:55 X:55 Y:27 P:25 SP:F9 PPU:233,104 CYC:11906\n\
DDF5  C8        INY                             A:55 X:55 Y:27 P:25 SP:FB PPU:251,104 CYC:11912\n\
DDF6  95 00     STA $00,X @ 55 = 00             A:55 X:55 Y:28 P:25 SP:FB PPU:257,104 CYC:11914\n\
DDF8  16 00     ASL $00,X @ 55 = 55             A:55 X:55 Y:28 P:25 SP:FB PPU:269,104 CYC:11918\n\
DDFA  B5 00     LDA $00,X @ 55 = AA             A:55 X:55 Y:28 P:A4 SP:FB PPU:287,104 CYC:11924\n\
DDFC  20 D4 F9  JSR $F9D4                       A:AA X:55 Y:28 P:A4 SP:FB PPU:299,104 CYC:11928\n\
F9D4  B0 0B     BCS $F9E1                       A:AA X:55 Y:28 P:A4 SP:F9 PPU:317,104 CYC:11934\n\
F9D6  F0 09     BEQ $F9E1                       A:AA X:55 Y:28 P:A4 SP:F9 PPU:323,104 CYC:11936\n\
F9D8  10 07     BPL $F9E1                       A:AA X:55 Y:28 P:A4 SP:F9 PPU:329,104 CYC:11938\n\
F9DA  70 05     BVS $F9E1                       A:AA X:55 Y:28 P:A4 SP:F9 PPU:335,104 CYC:11940\n\
F9DC  C9 AA     CMP #$AA                        A:AA X:55 Y:28 P:A4 SP:F9 PPU:  0,105 CYC:11942\n\
F9DE  D0 01     BNE $F9E1                       A:AA X:55 Y:28 P:27 SP:F9 PPU:  6,105 CYC:11944\n\
F9E0  60        RTS                             A:AA X:55 Y:28 P:27 SP:F9 PPU: 12,105 CYC:11946\n\
DDFF  C8        INY                             A:AA X:55 Y:28 P:27 SP:FB PPU: 30,105 CYC:11952\n\
DE00  20 E4 F9  JSR $F9E4                       A:AA X:55 Y:29 P:25 SP:FB PPU: 36,105 CYC:11954\n\
F9E4  24 01     BIT $01 = FF                    A:AA X:55 Y:29 P:25 SP:F9 PPU: 54,105 CYC:11960\n\
F9E6  38        SEC                             A:AA X:55 Y:29 P:E5 SP:F9 PPU: 63,105 CYC:11963\n\
F9E7  A9 01     LDA #$01                        A:AA X:55 Y:29 P:E5 SP:F9 PPU: 69,105 CYC:11965\n\
F9E9  60        RTS                             A:01 X:55 Y:29 P:65 SP:F9 PPU: 75,105 CYC:11967\n\
DE03  95 00     STA $00,X @ 55 = AA             A:01 X:55 Y:29 P:65 SP:FB PPU: 93,105 CYC:11973\n\
DE05  76 00     ROR $00,X @ 55 = 01             A:01 X:55 Y:29 P:65 SP:FB PPU:105,105 CYC:11977\n\
DE07  B5 00     LDA $00,X @ 55 = 80             A:01 X:55 Y:29 P:E5 SP:FB PPU:123,105 CYC:11983\n\
DE09  20 EA F9  JSR $F9EA                       A:80 X:55 Y:29 P:E5 SP:FB PPU:135,105 CYC:11987\n\
F9EA  90 1C     BCC $FA08                       A:80 X:55 Y:29 P:E5 SP:F9 PPU:153,105 CYC:11993\n\
F9EC  F0 1A     BEQ $FA08                       A:80 X:55 Y:29 P:E5 SP:F9 PPU:159,105 CYC:11995\n\
F9EE  10 18     BPL $FA08                       A:80 X:55 Y:29 P:E5 SP:F9 PPU:165,105 CYC:11997\n\
F9F0  50 16     BVC $FA08                       A:80 X:55 Y:29 P:E5 SP:F9 PPU:171,105 CYC:11999\n\
F9F2  C9 80     CMP #$80                        A:80 X:55 Y:29 P:E5 SP:F9 PPU:177,105 CYC:12001\n\
F9F4  D0 12     BNE $FA08                       A:80 X:55 Y:29 P:67 SP:F9 PPU:183,105 CYC:12003\n\
F9F6  B8        CLV                             A:80 X:55 Y:29 P:67 SP:F9 PPU:189,105 CYC:12005\n\
F9F7  18        CLC                             A:80 X:55 Y:29 P:27 SP:F9 PPU:195,105 CYC:12007\n\
F9F8  A9 55     LDA #$55                        A:80 X:55 Y:29 P:26 SP:F9 PPU:201,105 CYC:12009\n\
F9FA  60        RTS                             A:55 X:55 Y:29 P:24 SP:F9 PPU:207,105 CYC:12011\n\
DE0C  C8        INY                             A:55 X:55 Y:29 P:24 SP:FB PPU:225,105 CYC:12017\n\
DE0D  95 00     STA $00,X @ 55 = 80             A:55 X:55 Y:2A P:24 SP:FB PPU:231,105 CYC:12019\n\
DE0F  76 00     ROR $00,X @ 55 = 55             A:55 X:55 Y:2A P:24 SP:FB PPU:243,105 CYC:12023\n\
DE11  B5 00     LDA $00,X @ 55 = 2A             A:55 X:55 Y:2A P:25 SP:FB PPU:261,105 CYC:12029\n\
DE13  20 FB F9  JSR $F9FB                       A:2A X:55 Y:2A P:25 SP:FB PPU:273,105 CYC:12033\n\
F9FB  90 0B     BCC $FA08                       A:2A X:55 Y:2A P:25 SP:F9 PPU:291,105 CYC:12039\n\
F9FD  F0 09     BEQ $FA08                       A:2A X:55 Y:2A P:25 SP:F9 PPU:297,105 CYC:12041\n\
F9FF  30 07     BMI $FA08                       A:2A X:55 Y:2A P:25 SP:F9 PPU:303,105 CYC:12043\n\
FA01  70 05     BVS $FA08                       A:2A X:55 Y:2A P:25 SP:F9 PPU:309,105 CYC:12045\n\
FA03  C9 2A     CMP #$2A                        A:2A X:55 Y:2A P:25 SP:F9 PPU:315,105 CYC:12047\n\
FA05  D0 01     BNE $FA08                       A:2A X:55 Y:2A P:27 SP:F9 PPU:321,105 CYC:12049\n\
FA07  60        RTS                             A:2A X:55 Y:2A P:27 SP:F9 PPU:327,105 CYC:12051\n\
DE16  C8        INY                             A:2A X:55 Y:2A P:27 SP:FB PPU:  4,106 CYC:12057\n\
DE17  20 0A FA  JSR $FA0A                       A:2A X:55 Y:2B P:25 SP:FB PPU: 10,106 CYC:12059\n\
FA0A  24 01     BIT $01 = FF                    A:2A X:55 Y:2B P:25 SP:F9 PPU: 28,106 CYC:12065\n\
FA0C  38        SEC                             A:2A X:55 Y:2B P:E5 SP:F9 PPU: 37,106 CYC:12068\n\
FA0D  A9 80     LDA #$80                        A:2A X:55 Y:2B P:E5 SP:F9 PPU: 43,106 CYC:12070\n\
FA0F  60        RTS                             A:80 X:55 Y:2B P:E5 SP:F9 PPU: 49,106 CYC:12072\n\
DE1A  95 00     STA $00,X @ 55 = 2A             A:80 X:55 Y:2B P:E5 SP:FB PPU: 67,106 CYC:12078\n\
DE1C  36 00     ROL $00,X @ 55 = 80             A:80 X:55 Y:2B P:E5 SP:FB PPU: 79,106 CYC:12082\n\
DE1E  B5 00     LDA $00,X @ 55 = 01             A:80 X:55 Y:2B P:65 SP:FB PPU: 97,106 CYC:12088\n\
DE20  20 10 FA  JSR $FA10                       A:01 X:55 Y:2B P:65 SP:FB PPU:109,106 CYC:12092\n\
FA10  90 1C     BCC $FA2E                       A:01 X:55 Y:2B P:65 SP:F9 PPU:127,106 CYC:12098\n\
FA12  F0 1A     BEQ $FA2E                       A:01 X:55 Y:2B P:65 SP:F9 PPU:133,106 CYC:12100\n\
FA14  30 18     BMI $FA2E                       A:01 X:55 Y:2B P:65 SP:F9 PPU:139,106 CYC:12102\n\
FA16  50 16     BVC $FA2E                       A:01 X:55 Y:2B P:65 SP:F9 PPU:145,106 CYC:12104\n\
FA18  C9 01     CMP #$01                        A:01 X:55 Y:2B P:65 SP:F9 PPU:151,106 CYC:12106\n\
FA1A  D0 12     BNE $FA2E                       A:01 X:55 Y:2B P:67 SP:F9 PPU:157,106 CYC:12108\n\
FA1C  B8        CLV                             A:01 X:55 Y:2B P:67 SP:F9 PPU:163,106 CYC:12110\n\
FA1D  18        CLC                             A:01 X:55 Y:2B P:27 SP:F9 PPU:169,106 CYC:12112\n\
FA1E  A9 55     LDA #$55                        A:01 X:55 Y:2B P:26 SP:F9 PPU:175,106 CYC:12114\n\
FA20  60        RTS                             A:55 X:55 Y:2B P:24 SP:F9 PPU:181,106 CYC:12116\n\
DE23  C8        INY                             A:55 X:55 Y:2B P:24 SP:FB PPU:199,106 CYC:12122\n\
DE24  95 00     STA $00,X @ 55 = 01             A:55 X:55 Y:2C P:24 SP:FB PPU:205,106 CYC:12124\n\
DE26  36 00     ROL $00,X @ 55 = 55             A:55 X:55 Y:2C P:24 SP:FB PPU:217,106 CYC:12128\n\
DE28  B5 00     LDA $00,X @ 55 = AA             A:55 X:55 Y:2C P:A4 SP:FB PPU:235,106 CYC:12134\n\
DE2A  20 21 FA  JSR $FA21                       A:AA X:55 Y:2C P:A4 SP:FB PPU:247,106 CYC:12138\n\
FA21  B0 0B     BCS $FA2E                       A:AA X:55 Y:2C P:A4 SP:F9 PPU:265,106 CYC:12144\n\
FA23  F0 09     BEQ $FA2E                       A:AA X:55 Y:2C P:A4 SP:F9 PPU:271,106 CYC:12146\n\
FA25  10 07     BPL $FA2E                       A:AA X:55 Y:2C P:A4 SP:F9 PPU:277,106 CYC:12148\n\
FA27  70 05     BVS $FA2E                       A:AA X:55 Y:2C P:A4 SP:F9 PPU:283,106 CYC:12150\n\
FA29  C9 AA     CMP #$AA                        A:AA X:55 Y:2C P:A4 SP:F9 PPU:289,106 CYC:12152\n\
FA2B  D0 01     BNE $FA2E                       A:AA X:55 Y:2C P:27 SP:F9 PPU:295,106 CYC:12154\n\
FA2D  60        RTS                             A:AA X:55 Y:2C P:27 SP:F9 PPU:301,106 CYC:12156\n\
DE2D  A9 FF     LDA #$FF                        A:AA X:55 Y:2C P:27 SP:FB PPU:319,106 CYC:12162\n\
DE2F  95 00     STA $00,X @ 55 = AA             A:FF X:55 Y:2C P:A5 SP:FB PPU:325,106 CYC:12164\n\
DE31  85 01     STA $01 = FF                    A:FF X:55 Y:2C P:A5 SP:FB PPU:337,106 CYC:12168\n\
DE33  24 01     BIT $01 = FF                    A:FF X:55 Y:2C P:A5 SP:FB PPU:  5,107 CYC:12171\n\
DE35  38        SEC                             A:FF X:55 Y:2C P:E5 SP:FB PPU: 14,107 CYC:12174\n\
DE36  F6 00     INC $00,X @ 55 = FF             A:FF X:55 Y:2C P:E5 SP:FB PPU: 20,107 CYC:12176\n\
DE38  D0 0C     BNE $DE46                       A:FF X:55 Y:2C P:67 SP:FB PPU: 38,107 CYC:12182\n\
DE3A  30 0A     BMI $DE46                       A:FF X:55 Y:2C P:67 SP:FB PPU: 44,107 CYC:12184\n\
DE3C  50 08     BVC $DE46                       A:FF X:55 Y:2C P:67 SP:FB PPU: 50,107 CYC:12186\n\
DE3E  90 06     BCC $DE46                       A:FF X:55 Y:2C P:67 SP:FB PPU: 56,107 CYC:12188\n\
DE40  B5 00     LDA $00,X @ 55 = 00             A:FF X:55 Y:2C P:67 SP:FB PPU: 62,107 CYC:12190\n\
DE42  C9 00     CMP #$00                        A:00 X:55 Y:2C P:67 SP:FB PPU: 74,107 CYC:12194\n\
DE44  F0 04     BEQ $DE4A                       A:00 X:55 Y:2C P:67 SP:FB PPU: 80,107 CYC:12196\n\
DE4A  A9 7F     LDA #$7F                        A:00 X:55 Y:2C P:67 SP:FB PPU: 89,107 CYC:12199\n\
DE4C  95 00     STA $00,X @ 55 = 00             A:7F X:55 Y:2C P:65 SP:FB PPU: 95,107 CYC:12201\n\
DE4E  B8        CLV                             A:7F X:55 Y:2C P:65 SP:FB PPU:107,107 CYC:12205\n\
DE4F  18        CLC                             A:7F X:55 Y:2C P:25 SP:FB PPU:113,107 CYC:12207\n\
DE50  F6 00     INC $00,X @ 55 = 7F             A:7F X:55 Y:2C P:24 SP:FB PPU:119,107 CYC:12209\n\
DE52  F0 0C     BEQ $DE60                       A:7F X:55 Y:2C P:A4 SP:FB PPU:137,107 CYC:12215\n\
DE54  10 0A     BPL $DE60                       A:7F X:55 Y:2C P:A4 SP:FB PPU:143,107 CYC:12217\n\
DE56  70 08     BVS $DE60                       A:7F X:55 Y:2C P:A4 SP:FB PPU:149,107 CYC:12219\n\
DE58  B0 06     BCS $DE60                       A:7F X:55 Y:2C P:A4 SP:FB PPU:155,107 CYC:12221\n\
DE5A  B5 00     LDA $00,X @ 55 = 80             A:7F X:55 Y:2C P:A4 SP:FB PPU:161,107 CYC:12223\n\
DE5C  C9 80     CMP #$80                        A:80 X:55 Y:2C P:A4 SP:FB PPU:173,107 CYC:12227\n\
DE5E  F0 04     BEQ $DE64                       A:80 X:55 Y:2C P:27 SP:FB PPU:179,107 CYC:12229\n\
DE64  A9 00     LDA #$00                        A:80 X:55 Y:2C P:27 SP:FB PPU:188,107 CYC:12232\n\
DE66  95 00     STA $00,X @ 55 = 80             A:00 X:55 Y:2C P:27 SP:FB PPU:194,107 CYC:12234\n\
DE68  24 01     BIT $01 = FF                    A:00 X:55 Y:2C P:27 SP:FB PPU:206,107 CYC:12238\n\
DE6A  38        SEC                             A:00 X:55 Y:2C P:E7 SP:FB PPU:215,107 CYC:12241\n\
DE6B  D6 00     DEC $00,X @ 55 = 00             A:00 X:55 Y:2C P:E7 SP:FB PPU:221,107 CYC:12243\n\
DE6D  F0 0C     BEQ $DE7B                       A:00 X:55 Y:2C P:E5 SP:FB PPU:239,107 CYC:12249\n\
DE6F  10 0A     BPL $DE7B                       A:00 X:55 Y:2C P:E5 SP:FB PPU:245,107 CYC:12251\n\
DE71  50 08     BVC $DE7B                       A:00 X:55 Y:2C P:E5 SP:FB PPU:251,107 CYC:12253\n\
DE73  90 06     BCC $DE7B                       A:00 X:55 Y:2C P:E5 SP:FB PPU:257,107 CYC:12255\n\
DE75  B5 00     LDA $00,X @ 55 = FF             A:00 X:55 Y:2C P:E5 SP:FB PPU:263,107 CYC:12257\n\
DE77  C9 FF     CMP #$FF                        A:FF X:55 Y:2C P:E5 SP:FB PPU:275,107 CYC:12261\n\
DE79  F0 04     BEQ $DE7F                       A:FF X:55 Y:2C P:67 SP:FB PPU:281,107 CYC:12263\n\
DE7F  A9 80     LDA #$80                        A:FF X:55 Y:2C P:67 SP:FB PPU:290,107 CYC:12266\n\
DE81  95 00     STA $00,X @ 55 = FF             A:80 X:55 Y:2C P:E5 SP:FB PPU:296,107 CYC:12268\n\
DE83  B8        CLV                             A:80 X:55 Y:2C P:E5 SP:FB PPU:308,107 CYC:12272\n\
DE84  18        CLC                             A:80 X:55 Y:2C P:A5 SP:FB PPU:314,107 CYC:12274\n\
DE85  D6 00     DEC $00,X @ 55 = 80             A:80 X:55 Y:2C P:A4 SP:FB PPU:320,107 CYC:12276\n\
DE87  F0 0C     BEQ $DE95                       A:80 X:55 Y:2C P:24 SP:FB PPU:338,107 CYC:12282\n\
DE89  30 0A     BMI $DE95                       A:80 X:55 Y:2C P:24 SP:FB PPU:  3,108 CYC:12284\n\
DE8B  70 08     BVS $DE95                       A:80 X:55 Y:2C P:24 SP:FB PPU:  9,108 CYC:12286\n\
DE8D  B0 06     BCS $DE95                       A:80 X:55 Y:2C P:24 SP:FB PPU: 15,108 CYC:12288\n\
DE8F  B5 00     LDA $00,X @ 55 = 7F             A:80 X:55 Y:2C P:24 SP:FB PPU: 21,108 CYC:12290\n\
DE91  C9 7F     CMP #$7F                        A:7F X:55 Y:2C P:24 SP:FB PPU: 33,108 CYC:12294\n\
DE93  F0 04     BEQ $DE99                       A:7F X:55 Y:2C P:27 SP:FB PPU: 39,108 CYC:12296\n\
DE99  A9 01     LDA #$01                        A:7F X:55 Y:2C P:27 SP:FB PPU: 48,108 CYC:12299\n\
DE9B  95 00     STA $00,X @ 55 = 7F             A:01 X:55 Y:2C P:25 SP:FB PPU: 54,108 CYC:12301\n\
DE9D  D6 00     DEC $00,X @ 55 = 01             A:01 X:55 Y:2C P:25 SP:FB PPU: 66,108 CYC:12305\n\
DE9F  F0 04     BEQ $DEA5                       A:01 X:55 Y:2C P:27 SP:FB PPU: 84,108 CYC:12311\n\
DEA5  A9 33     LDA #$33                        A:01 X:55 Y:2C P:27 SP:FB PPU: 93,108 CYC:12314\n\
DEA7  85 78     STA $78 = 7F                    A:33 X:55 Y:2C P:25 SP:FB PPU: 99,108 CYC:12316\n\
DEA9  A9 44     LDA #$44                        A:33 X:55 Y:2C P:25 SP:FB PPU:108,108 CYC:12319\n\
DEAB  A0 78     LDY #$78                        A:44 X:55 Y:2C P:25 SP:FB PPU:114,108 CYC:12321\n\
DEAD  A2 00     LDX #$00                        A:44 X:55 Y:78 P:25 SP:FB PPU:120,108 CYC:12323\n\
DEAF  38        SEC                             A:44 X:00 Y:78 P:27 SP:FB PPU:126,108 CYC:12325\n\
DEB0  24 01     BIT $01 = FF                    A:44 X:00 Y:78 P:27 SP:FB PPU:132,108 CYC:12327\n\
DEB2  B6 00     LDX $00,Y @ 78 = 33             A:44 X:00 Y:78 P:E5 SP:FB PPU:141,108 CYC:12330\n\
DEB4  90 12     BCC $DEC8                       A:44 X:33 Y:78 P:65 SP:FB PPU:153,108 CYC:12334\n\
DEB6  50 10     BVC $DEC8                       A:44 X:33 Y:78 P:65 SP:FB PPU:159,108 CYC:12336\n\
DEB8  30 0E     BMI $DEC8                       A:44 X:33 Y:78 P:65 SP:FB PPU:165,108 CYC:12338\n\
DEBA  F0 0C     BEQ $DEC8                       A:44 X:33 Y:78 P:65 SP:FB PPU:171,108 CYC:12340\n\
DEBC  E0 33     CPX #$33                        A:44 X:33 Y:78 P:65 SP:FB PPU:177,108 CYC:12342\n\
DEBE  D0 08     BNE $DEC8                       A:44 X:33 Y:78 P:67 SP:FB PPU:183,108 CYC:12344\n\
DEC0  C0 78     CPY #$78                        A:44 X:33 Y:78 P:67 SP:FB PPU:189,108 CYC:12346\n\
DEC2  D0 04     BNE $DEC8                       A:44 X:33 Y:78 P:67 SP:FB PPU:195,108 CYC:12348\n\
DEC4  C9 44     CMP #$44                        A:44 X:33 Y:78 P:67 SP:FB PPU:201,108 CYC:12350\n\
DEC6  F0 04     BEQ $DECC                       A:44 X:33 Y:78 P:67 SP:FB PPU:207,108 CYC:12352\n\
DECC  A9 97     LDA #$97                        A:44 X:33 Y:78 P:67 SP:FB PPU:216,108 CYC:12355\n\
DECE  85 7F     STA $7F = 00                    A:97 X:33 Y:78 P:E5 SP:FB PPU:222,108 CYC:12357\n\
DED0  A9 47     LDA #$47                        A:97 X:33 Y:78 P:E5 SP:FB PPU:231,108 CYC:12360\n\
DED2  A0 FF     LDY #$FF                        A:47 X:33 Y:78 P:65 SP:FB PPU:237,108 CYC:12362\n\
DED4  A2 00     LDX #$00                        A:47 X:33 Y:FF P:E5 SP:FB PPU:243,108 CYC:12364\n\
DED6  18        CLC                             A:47 X:00 Y:FF P:67 SP:FB PPU:249,108 CYC:12366\n\
DED7  B8        CLV                             A:47 X:00 Y:FF P:66 SP:FB PPU:255,108 CYC:12368\n\
DED8  B6 80     LDX $80,Y @ 7F = 97             A:47 X:00 Y:FF P:26 SP:FB PPU:261,108 CYC:12370\n\
DEDA  B0 12     BCS $DEEE                       A:47 X:97 Y:FF P:A4 SP:FB PPU:273,108 CYC:12374\n\
DEDC  70 10     BVS $DEEE                       A:47 X:97 Y:FF P:A4 SP:FB PPU:279,108 CYC:12376\n\
DEDE  10 0E     BPL $DEEE                       A:47 X:97 Y:FF P:A4 SP:FB PPU:285,108 CYC:12378\n\
DEE0  F0 0C     BEQ $DEEE                       A:47 X:97 Y:FF P:A4 SP:FB PPU:291,108 CYC:12380\n\
DEE2  E0 97     CPX #$97                        A:47 X:97 Y:FF P:A4 SP:FB PPU:297,108 CYC:12382\n\
DEE4  D0 08     BNE $DEEE                       A:47 X:97 Y:FF P:27 SP:FB PPU:303,108 CYC:12384\n\
DEE6  C0 FF     CPY #$FF                        A:47 X:97 Y:FF P:27 SP:FB PPU:309,108 CYC:12386\n\
DEE8  D0 04     BNE $DEEE                       A:47 X:97 Y:FF P:27 SP:FB PPU:315,108 CYC:12388\n\
DEEA  C9 47     CMP #$47                        A:47 X:97 Y:FF P:27 SP:FB PPU:321,108 CYC:12390\n\
DEEC  F0 04     BEQ $DEF2                       A:47 X:97 Y:FF P:27 SP:FB PPU:327,108 CYC:12392\n\
DEF2  A9 00     LDA #$00                        A:47 X:97 Y:FF P:27 SP:FB PPU:336,108 CYC:12395\n\
DEF4  85 7F     STA $7F = 97                    A:00 X:97 Y:FF P:27 SP:FB PPU:  1,109 CYC:12397\n\
DEF6  A9 47     LDA #$47                        A:00 X:97 Y:FF P:27 SP:FB PPU: 10,109 CYC:12400\n\
DEF8  A0 FF     LDY #$FF                        A:47 X:97 Y:FF P:25 SP:FB PPU: 16,109 CYC:12402\n\
DEFA  A2 69     LDX #$69                        A:47 X:97 Y:FF P:A5 SP:FB PPU: 22,109 CYC:12404\n\
DEFC  18        CLC                             A:47 X:69 Y:FF P:25 SP:FB PPU: 28,109 CYC:12406\n\
DEFD  B8        CLV                             A:47 X:69 Y:FF P:24 SP:FB PPU: 34,109 CYC:12408\n\
DEFE  96 80     STX $80,Y @ 7F = 00             A:47 X:69 Y:FF P:24 SP:FB PPU: 40,109 CYC:12410\n\
DF00  B0 18     BCS $DF1A                       A:47 X:69 Y:FF P:24 SP:FB PPU: 52,109 CYC:12414\n\
DF02  70 16     BVS $DF1A                       A:47 X:69 Y:FF P:24 SP:FB PPU: 58,109 CYC:12416\n\
DF04  30 14     BMI $DF1A                       A:47 X:69 Y:FF P:24 SP:FB PPU: 64,109 CYC:12418\n\
DF06  F0 12     BEQ $DF1A                       A:47 X:69 Y:FF P:24 SP:FB PPU: 70,109 CYC:12420\n\
DF08  E0 69     CPX #$69                        A:47 X:69 Y:FF P:24 SP:FB PPU: 76,109 CYC:12422\n\
DF0A  D0 0E     BNE $DF1A                       A:47 X:69 Y:FF P:27 SP:FB PPU: 82,109 CYC:12424\n\
DF0C  C0 FF     CPY #$FF                        A:47 X:69 Y:FF P:27 SP:FB PPU: 88,109 CYC:12426\n\
DF0E  D0 0A     BNE $DF1A                       A:47 X:69 Y:FF P:27 SP:FB PPU: 94,109 CYC:12428\n\
DF10  C9 47     CMP #$47                        A:47 X:69 Y:FF P:27 SP:FB PPU:100,109 CYC:12430\n\
DF12  D0 06     BNE $DF1A                       A:47 X:69 Y:FF P:27 SP:FB PPU:106,109 CYC:12432\n\
DF14  A5 7F     LDA $7F = 69                    A:47 X:69 Y:FF P:27 SP:FB PPU:112,109 CYC:12434\n\
DF16  C9 69     CMP #$69                        A:69 X:69 Y:FF P:25 SP:FB PPU:121,109 CYC:12437\n\
DF18  F0 04     BEQ $DF1E                       A:69 X:69 Y:FF P:27 SP:FB PPU:127,109 CYC:12439\n\
DF1E  A9 F5     LDA #$F5                        A:69 X:69 Y:FF P:27 SP:FB PPU:136,109 CYC:12442\n\
DF20  85 4F     STA $4F = 00                    A:F5 X:69 Y:FF P:A5 SP:FB PPU:142,109 CYC:12444\n\
DF22  A9 47     LDA #$47                        A:F5 X:69 Y:FF P:A5 SP:FB PPU:151,109 CYC:12447\n\
DF24  A0 4F     LDY #$4F                        A:47 X:69 Y:FF P:25 SP:FB PPU:157,109 CYC:12449\n\
DF26  24 01     BIT $01 = FF                    A:47 X:69 Y:4F P:25 SP:FB PPU:163,109 CYC:12451\n\
DF28  A2 00     LDX #$00                        A:47 X:69 Y:4F P:E5 SP:FB PPU:172,109 CYC:12454\n\
DF2A  38        SEC                             A:47 X:00 Y:4F P:67 SP:FB PPU:178,109 CYC:12456\n\
DF2B  96 00     STX $00,Y @ 4F = F5             A:47 X:00 Y:4F P:67 SP:FB PPU:184,109 CYC:12458\n\
DF2D  90 16     BCC $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:196,109 CYC:12462\n\
DF2F  50 14     BVC $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:202,109 CYC:12464\n\
DF31  30 12     BMI $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:208,109 CYC:12466\n\
DF33  D0 10     BNE $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:214,109 CYC:12468\n\
DF35  E0 00     CPX #$00                        A:47 X:00 Y:4F P:67 SP:FB PPU:220,109 CYC:12470\n\
DF37  D0 0C     BNE $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:226,109 CYC:12472\n\
DF39  C0 4F     CPY #$4F                        A:47 X:00 Y:4F P:67 SP:FB PPU:232,109 CYC:12474\n\
DF3B  D0 08     BNE $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:238,109 CYC:12476\n\
DF3D  C9 47     CMP #$47                        A:47 X:00 Y:4F P:67 SP:FB PPU:244,109 CYC:12478\n\
DF3F  D0 04     BNE $DF45                       A:47 X:00 Y:4F P:67 SP:FB PPU:250,109 CYC:12480\n\
DF41  A5 4F     LDA $4F = 00                    A:47 X:00 Y:4F P:67 SP:FB PPU:256,109 CYC:12482\n\
DF43  F0 04     BEQ $DF49                       A:00 X:00 Y:4F P:67 SP:FB PPU:265,109 CYC:12485\n\
DF49  60        RTS                             A:00 X:00 Y:4F P:67 SP:FB PPU:274,109 CYC:12488\n\
C62C  20 AA E1  JSR $E1AA                       A:00 X:00 Y:4F P:67 SP:FD PPU:292,109 CYC:12494\n\
E1AA  A9 FF     LDA #$FF                        A:00 X:00 Y:4F P:67 SP:FB PPU:310,109 CYC:12500\n\
E1AC  85 01     STA $01 = FF                    A:FF X:00 Y:4F P:E5 SP:FB PPU:316,109 CYC:12502\n\
E1AE  A9 AA     LDA #$AA                        A:FF X:00 Y:4F P:E5 SP:FB PPU:325,109 CYC:12505\n\
E1B0  8D 33 06  STA $0633 = 00                  A:AA X:00 Y:4F P:E5 SP:FB PPU:331,109 CYC:12507\n\
E1B3  A9 BB     LDA #$BB                        A:AA X:00 Y:4F P:E5 SP:FB PPU:  2,110 CYC:12511\n\
E1B5  8D 89 06  STA $0689 = 00                  A:BB X:00 Y:4F P:E5 SP:FB PPU:  8,110 CYC:12513\n\
E1B8  A2 00     LDX #$00                        A:BB X:00 Y:4F P:E5 SP:FB PPU: 20,110 CYC:12517\n\
E1BA  A9 66     LDA #$66                        A:BB X:00 Y:4F P:67 SP:FB PPU: 26,110 CYC:12519\n\
E1BC  24 01     BIT $01 = FF                    A:66 X:00 Y:4F P:65 SP:FB PPU: 32,110 CYC:12521\n\
E1BE  38        SEC                             A:66 X:00 Y:4F P:E5 SP:FB PPU: 41,110 CYC:12524\n\
E1BF  A0 00     LDY #$00                        A:66 X:00 Y:4F P:E5 SP:FB PPU: 47,110 CYC:12526\n\
E1C1  BC 33 06  LDY $0633,X @ 0633 = AA         A:66 X:00 Y:00 P:67 SP:FB PPU: 53,110 CYC:12528\n\
E1C4  10 12     BPL $E1D8                       A:66 X:00 Y:AA P:E5 SP:FB PPU: 65,110 CYC:12532\n\
E1C6  F0 10     BEQ $E1D8                       A:66 X:00 Y:AA P:E5 SP:FB PPU: 71,110 CYC:12534\n\
E1C8  50 0E     BVC $E1D8                       A:66 X:00 Y:AA P:E5 SP:FB PPU: 77,110 CYC:12536\n\
E1CA  90 0C     BCC $E1D8                       A:66 X:00 Y:AA P:E5 SP:FB PPU: 83,110 CYC:12538\n\
E1CC  C9 66     CMP #$66                        A:66 X:00 Y:AA P:E5 SP:FB PPU: 89,110 CYC:12540\n\
E1CE  D0 08     BNE $E1D8                       A:66 X:00 Y:AA P:67 SP:FB PPU: 95,110 CYC:12542\n\
E1D0  E0 00     CPX #$00                        A:66 X:00 Y:AA P:67 SP:FB PPU:101,110 CYC:12544\n\
E1D2  D0 04     BNE $E1D8                       A:66 X:00 Y:AA P:67 SP:FB PPU:107,110 CYC:12546\n\
E1D4  C0 AA     CPY #$AA                        A:66 X:00 Y:AA P:67 SP:FB PPU:113,110 CYC:12548\n\
E1D6  F0 04     BEQ $E1DC                       A:66 X:00 Y:AA P:67 SP:FB PPU:119,110 CYC:12550\n\
E1DC  A2 8A     LDX #$8A                        A:66 X:00 Y:AA P:67 SP:FB PPU:128,110 CYC:12553\n\
E1DE  A9 66     LDA #$66                        A:66 X:8A Y:AA P:E5 SP:FB PPU:134,110 CYC:12555\n\
E1E0  B8        CLV                             A:66 X:8A Y:AA P:65 SP:FB PPU:140,110 CYC:12557\n\
E1E1  18        CLC                             A:66 X:8A Y:AA P:25 SP:FB PPU:146,110 CYC:12559\n\
E1E2  A0 00     LDY #$00                        A:66 X:8A Y:AA P:24 SP:FB PPU:152,110 CYC:12561\n\
E1E4  BC FF 05  LDY $05FF,X @ 0689 = BB         A:66 X:8A Y:00 P:26 SP:FB PPU:158,110 CYC:12563\n\
E1E7  10 12     BPL $E1FB                       A:66 X:8A Y:BB P:A4 SP:FB PPU:173,110 CYC:12568\n\
E1E9  F0 10     BEQ $E1FB                       A:66 X:8A Y:BB P:A4 SP:FB PPU:179,110 CYC:12570\n\
E1EB  70 0E     BVS $E1FB                       A:66 X:8A Y:BB P:A4 SP:FB PPU:185,110 CYC:12572\n\
E1ED  B0 0C     BCS $E1FB                       A:66 X:8A Y:BB P:A4 SP:FB PPU:191,110 CYC:12574\n\
E1EF  C0 BB     CPY #$BB                        A:66 X:8A Y:BB P:A4 SP:FB PPU:197,110 CYC:12576\n\
E1F1  D0 08     BNE $E1FB                       A:66 X:8A Y:BB P:27 SP:FB PPU:203,110 CYC:12578\n\
E1F3  C9 66     CMP #$66                        A:66 X:8A Y:BB P:27 SP:FB PPU:209,110 CYC:12580\n\
E1F5  D0 04     BNE $E1FB                       A:66 X:8A Y:BB P:27 SP:FB PPU:215,110 CYC:12582\n\
E1F7  E0 8A     CPX #$8A                        A:66 X:8A Y:BB P:27 SP:FB PPU:221,110 CYC:12584\n\
E1F9  F0 04     BEQ $E1FF                       A:66 X:8A Y:BB P:27 SP:FB PPU:227,110 CYC:12586\n\
E1FF  A0 53     LDY #$53                        A:66 X:8A Y:BB P:27 SP:FB PPU:236,110 CYC:12589\n\
E201  A9 AA     LDA #$AA                        A:66 X:8A Y:53 P:25 SP:FB PPU:242,110 CYC:12591\n\
E203  A2 78     LDX #$78                        A:AA X:8A Y:53 P:A5 SP:FB PPU:248,110 CYC:12593\n\
E205  8D 78 06  STA $0678 = 00                  A:AA X:78 Y:53 P:25 SP:FB PPU:254,110 CYC:12595\n\
E208  20 B6 F7  JSR $F7B6                       A:AA X:78 Y:53 P:25 SP:FB PPU:266,110 CYC:12599\n\
F7B6  18        CLC                             A:AA X:78 Y:53 P:25 SP:F9 PPU:284,110 CYC:12605\n\
F7B7  A9 FF     LDA #$FF                        A:AA X:78 Y:53 P:24 SP:F9 PPU:290,110 CYC:12607\n\
F7B9  85 01     STA $01 = FF                    A:FF X:78 Y:53 P:A4 SP:F9 PPU:296,110 CYC:12609\n\
F7BB  24 01     BIT $01 = FF                    A:FF X:78 Y:53 P:A4 SP:F9 PPU:305,110 CYC:12612\n\
F7BD  A9 55     LDA #$55                        A:FF X:78 Y:53 P:E4 SP:F9 PPU:314,110 CYC:12615\n\
F7BF  60        RTS                             A:55 X:78 Y:53 P:64 SP:F9 PPU:320,110 CYC:12617\n\
E20B  1D 00 06  ORA $0600,X @ 0678 = AA         A:55 X:78 Y:53 P:64 SP:FB PPU:338,110 CYC:12623\n\
E20E  20 C0 F7  JSR $F7C0                       A:FF X:78 Y:53 P:E4 SP:FB PPU:  9,111 CYC:12627\n\
F7C0  B0 09     BCS $F7CB                       A:FF X:78 Y:53 P:E4 SP:F9 PPU: 27,111 CYC:12633\n\
F7C2  10 07     BPL $F7CB                       A:FF X:78 Y:53 P:E4 SP:F9 PPU: 33,111 CYC:12635\n\
F7C4  C9 FF     CMP #$FF                        A:FF X:78 Y:53 P:E4 SP:F9 PPU: 39,111 CYC:12637\n\
F7C6  D0 03     BNE $F7CB                       A:FF X:78 Y:53 P:67 SP:F9 PPU: 45,111 CYC:12639\n\
F7C8  50 01     BVC $F7CB                       A:FF X:78 Y:53 P:67 SP:F9 PPU: 51,111 CYC:12641\n\
F7CA  60        RTS                             A:FF X:78 Y:53 P:67 SP:F9 PPU: 57,111 CYC:12643\n\
E211  C8        INY                             A:FF X:78 Y:53 P:67 SP:FB PPU: 75,111 CYC:12649\n\
E212  A9 00     LDA #$00                        A:FF X:78 Y:54 P:65 SP:FB PPU: 81,111 CYC:12651\n\
E214  8D 78 06  STA $0678 = AA                  A:00 X:78 Y:54 P:67 SP:FB PPU: 87,111 CYC:12653\n\
E217  20 CE F7  JSR $F7CE                       A:00 X:78 Y:54 P:67 SP:FB PPU: 99,111 CYC:12657\n\
F7CE  38        SEC                             A:00 X:78 Y:54 P:67 SP:F9 PPU:117,111 CYC:12663\n\
F7CF  B8        CLV                             A:00 X:78 Y:54 P:67 SP:F9 PPU:123,111 CYC:12665\n\
F7D0  A9 00     LDA #$00                        A:00 X:78 Y:54 P:27 SP:F9 PPU:129,111 CYC:12667\n\
F7D2  60        RTS                             A:00 X:78 Y:54 P:27 SP:F9 PPU:135,111 CYC:12669\n\
E21A  1D 00 06  ORA $0600,X @ 0678 = 00         A:00 X:78 Y:54 P:27 SP:FB PPU:153,111 CYC:12675\n\
E21D  20 D3 F7  JSR $F7D3                       A:00 X:78 Y:54 P:27 SP:FB PPU:165,111 CYC:12679\n\
F7D3  D0 07     BNE $F7DC                       A:00 X:78 Y:54 P:27 SP:F9 PPU:183,111 CYC:12685\n\
F7D5  70 05     BVS $F7DC                       A:00 X:78 Y:54 P:27 SP:F9 PPU:189,111 CYC:12687\n\
F7D7  90 03     BCC $F7DC                       A:00 X:78 Y:54 P:27 SP:F9 PPU:195,111 CYC:12689\n\
F7D9  30 01     BMI $F7DC                       A:00 X:78 Y:54 P:27 SP:F9 PPU:201,111 CYC:12691\n\
F7DB  60        RTS                             A:00 X:78 Y:54 P:27 SP:F9 PPU:207,111 CYC:12693\n\
E220  C8        INY                             A:00 X:78 Y:54 P:27 SP:FB PPU:225,111 CYC:12699\n\
E221  A9 AA     LDA #$AA                        A:00 X:78 Y:55 P:25 SP:FB PPU:231,111 CYC:12701\n\
E223  8D 78 06  STA $0678 = 00                  A:AA X:78 Y:55 P:A5 SP:FB PPU:237,111 CYC:12703\n\
E226  20 DF F7  JSR $F7DF                       A:AA X:78 Y:55 P:A5 SP:FB PPU:249,111 CYC:12707\n\
F7DF  18        CLC                             A:AA X:78 Y:55 P:A5 SP:F9 PPU:267,111 CYC:12713\n\
F7E0  24 01     BIT $01 = FF                    A:AA X:78 Y:55 P:A4 SP:F9 PPU:273,111 CYC:12715\n\
F7E2  A9 55     LDA #$55                        A:AA X:78 Y:55 P:E4 SP:F9 PPU:282,111 CYC:12718\n\
F7E4  60        RTS                             A:55 X:78 Y:55 P:64 SP:F9 PPU:288,111 CYC:12720\n\
E229  3D 00 06  AND $0600,X @ 0678 = AA         A:55 X:78 Y:55 P:64 SP:FB PPU:306,111 CYC:12726\n\
E22C  20 E5 F7  JSR $F7E5                       A:00 X:78 Y:55 P:66 SP:FB PPU:318,111 CYC:12730\n\
F7E5  D0 07     BNE $F7EE                       A:00 X:78 Y:55 P:66 SP:F9 PPU:336,111 CYC:12736\n\
F7E7  50 05     BVC $F7EE                       A:00 X:78 Y:55 P:66 SP:F9 PPU:  1,112 CYC:12738\n\
F7E9  B0 03     BCS $F7EE                       A:00 X:78 Y:55 P:66 SP:F9 PPU:  7,112 CYC:12740\n\
F7EB  30 01     BMI $F7EE                       A:00 X:78 Y:55 P:66 SP:F9 PPU: 13,112 CYC:12742\n\
F7ED  60        RTS                             A:00 X:78 Y:55 P:66 SP:F9 PPU: 19,112 CYC:12744\n\
E22F  C8        INY                             A:00 X:78 Y:55 P:66 SP:FB PPU: 37,112 CYC:12750\n\
E230  A9 EF     LDA #$EF                        A:00 X:78 Y:56 P:64 SP:FB PPU: 43,112 CYC:12752\n\
E232  8D 78 06  STA $0678 = AA                  A:EF X:78 Y:56 P:E4 SP:FB PPU: 49,112 CYC:12754\n\
E235  20 F1 F7  JSR $F7F1                       A:EF X:78 Y:56 P:E4 SP:FB PPU: 61,112 CYC:12758\n\
F7F1  38        SEC                             A:EF X:78 Y:56 P:E4 SP:F9 PPU: 79,112 CYC:12764\n\
F7F2  B8        CLV                             A:EF X:78 Y:56 P:E5 SP:F9 PPU: 85,112 CYC:12766\n\
F7F3  A9 F8     LDA #$F8                        A:EF X:78 Y:56 P:A5 SP:F9 PPU: 91,112 CYC:12768\n\
F7F5  60        RTS                             A:F8 X:78 Y:56 P:A5 SP:F9 PPU: 97,112 CYC:12770\n\
E238  3D 00 06  AND $0600,X @ 0678 = EF         A:F8 X:78 Y:56 P:A5 SP:FB PPU:115,112 CYC:12776\n\
E23B  20 F6 F7  JSR $F7F6                       A:E8 X:78 Y:56 P:A5 SP:FB PPU:127,112 CYC:12780\n\
F7F6  90 09     BCC $F801                       A:E8 X:78 Y:56 P:A5 SP:F9 PPU:145,112 CYC:12786\n\
F7F8  10 07     BPL $F801                       A:E8 X:78 Y:56 P:A5 SP:F9 PPU:151,112 CYC:12788\n\
F7FA  C9 E8     CMP #$E8                        A:E8 X:78 Y:56 P:A5 SP:F9 PPU:157,112 CYC:12790\n\
F7FC  D0 03     BNE $F801                       A:E8 X:78 Y:56 P:27 SP:F9 PPU:163,112 CYC:12792\n\
F7FE  70 01     BVS $F801                       A:E8 X:78 Y:56 P:27 SP:F9 PPU:169,112 CYC:12794\n\
F800  60        RTS                             A:E8 X:78 Y:56 P:27 SP:F9 PPU:175,112 CYC:12796\n\
E23E  C8        INY                             A:E8 X:78 Y:56 P:27 SP:FB PPU:193,112 CYC:12802\n\
E23F  A9 AA     LDA #$AA                        A:E8 X:78 Y:57 P:25 SP:FB PPU:199,112 CYC:12804\n\
E241  8D 78 06  STA $0678 = EF                  A:AA X:78 Y:57 P:A5 SP:FB PPU:205,112 CYC:12806\n\
E244  20 04 F8  JSR $F804                       A:AA X:78 Y:57 P:A5 SP:FB PPU:217,112 CYC:12810\n\
F804  18        CLC                             A:AA X:78 Y:57 P:A5 SP:F9 PPU:235,112 CYC:12816\n\
F805  24 01     BIT $01 = FF                    A:AA X:78 Y:57 P:A4 SP:F9 PPU:241,112 CYC:12818\n\
F807  A9 5F     LDA #$5F                        A:AA X:78 Y:57 P:E4 SP:F9 PPU:250,112 CYC:12821\n\
F809  60        RTS                             A:5F X:78 Y:57 P:64 SP:F9 PPU:256,112 CYC:12823\n\
E247  5D 00 06  EOR $0600,X @ 0678 = AA         A:5F X:78 Y:57 P:64 SP:FB PPU:274,112 CYC:12829\n\
E24A  20 0A F8  JSR $F80A                       A:F5 X:78 Y:57 P:E4 SP:FB PPU:286,112 CYC:12833\n\
F80A  B0 09     BCS $F815                       A:F5 X:78 Y:57 P:E4 SP:F9 PPU:304,112 CYC:12839\n\
F80C  10 07     BPL $F815                       A:F5 X:78 Y:57 P:E4 SP:F9 PPU:310,112 CYC:12841\n\
F80E  C9 F5     CMP #$F5                        A:F5 X:78 Y:57 P:E4 SP:F9 PPU:316,112 CYC:12843\n\
F810  D0 03     BNE $F815                       A:F5 X:78 Y:57 P:67 SP:F9 PPU:322,112 CYC:12845\n\
F812  50 01     BVC $F815                       A:F5 X:78 Y:57 P:67 SP:F9 PPU:328,112 CYC:12847\n\
F814  60        RTS                             A:F5 X:78 Y:57 P:67 SP:F9 PPU:334,112 CYC:12849\n\
E24D  C8        INY                             A:F5 X:78 Y:57 P:67 SP:FB PPU: 11,113 CYC:12855\n\
E24E  A9 70     LDA #$70                        A:F5 X:78 Y:58 P:65 SP:FB PPU: 17,113 CYC:12857\n\
E250  8D 78 06  STA $0678 = AA                  A:70 X:78 Y:58 P:65 SP:FB PPU: 23,113 CYC:12859\n\
E253  20 18 F8  JSR $F818                       A:70 X:78 Y:58 P:65 SP:FB PPU: 35,113 CYC:12863\n\
F818  38        SEC                             A:70 X:78 Y:58 P:65 SP:F9 PPU: 53,113 CYC:12869\n\
F819  B8        CLV                             A:70 X:78 Y:58 P:65 SP:F9 PPU: 59,113 CYC:12871\n\
F81A  A9 70     LDA #$70                        A:70 X:78 Y:58 P:25 SP:F9 PPU: 65,113 CYC:12873\n\
F81C  60        RTS                             A:70 X:78 Y:58 P:25 SP:F9 PPU: 71,113 CYC:12875\n\
E256  5D 00 06  EOR $0600,X @ 0678 = 70         A:70 X:78 Y:58 P:25 SP:FB PPU: 89,113 CYC:12881\n\
E259  20 1D F8  JSR $F81D                       A:00 X:78 Y:58 P:27 SP:FB PPU:101,113 CYC:12885\n\
F81D  D0 07     BNE $F826                       A:00 X:78 Y:58 P:27 SP:F9 PPU:119,113 CYC:12891\n\
F81F  70 05     BVS $F826                       A:00 X:78 Y:58 P:27 SP:F9 PPU:125,113 CYC:12893\n\
F821  90 03     BCC $F826                       A:00 X:78 Y:58 P:27 SP:F9 PPU:131,113 CYC:12895\n\
F823  30 01     BMI $F826                       A:00 X:78 Y:58 P:27 SP:F9 PPU:137,113 CYC:12897\n\
F825  60        RTS                             A:00 X:78 Y:58 P:27 SP:F9 PPU:143,113 CYC:12899\n\
E25C  C8        INY                             A:00 X:78 Y:58 P:27 SP:FB PPU:161,113 CYC:12905\n\
E25D  A9 69     LDA #$69                        A:00 X:78 Y:59 P:25 SP:FB PPU:167,113 CYC:12907\n\
E25F  8D 78 06  STA $0678 = 70                  A:69 X:78 Y:59 P:25 SP:FB PPU:173,113 CYC:12909\n\
E262  20 29 F8  JSR $F829                       A:69 X:78 Y:59 P:25 SP:FB PPU:185,113 CYC:12913\n\
F829  18        CLC                             A:69 X:78 Y:59 P:25 SP:F9 PPU:203,113 CYC:12919\n\
F82A  24 01     BIT $01 = FF                    A:69 X:78 Y:59 P:24 SP:F9 PPU:209,113 CYC:12921\n\
F82C  A9 00     LDA #$00                        A:69 X:78 Y:59 P:E4 SP:F9 PPU:218,113 CYC:12924\n\
F82E  60        RTS                             A:00 X:78 Y:59 P:66 SP:F9 PPU:224,113 CYC:12926\n\
E265  7D 00 06  ADC $0600,X @ 0678 = 69         A:00 X:78 Y:59 P:66 SP:FB PPU:242,113 CYC:12932\n\
E268  20 2F F8  JSR $F82F                       A:69 X:78 Y:59 P:24 SP:FB PPU:254,113 CYC:12936\n\
F82F  30 09     BMI $F83A                       A:69 X:78 Y:59 P:24 SP:F9 PPU:272,113 CYC:12942\n\
F831  B0 07     BCS $F83A                       A:69 X:78 Y:59 P:24 SP:F9 PPU:278,113 CYC:12944\n\
F833  C9 69     CMP #$69                        A:69 X:78 Y:59 P:24 SP:F9 PPU:284,113 CYC:12946\n\
F835  D0 03     BNE $F83A                       A:69 X:78 Y:59 P:27 SP:F9 PPU:290,113 CYC:12948\n\
F837  70 01     BVS $F83A                       A:69 X:78 Y:59 P:27 SP:F9 PPU:296,113 CYC:12950\n\
F839  60        RTS                             A:69 X:78 Y:59 P:27 SP:F9 PPU:302,113 CYC:12952\n\
E26B  C8        INY                             A:69 X:78 Y:59 P:27 SP:FB PPU:320,113 CYC:12958\n\
E26C  20 3D F8  JSR $F83D                       A:69 X:78 Y:5A P:25 SP:FB PPU:326,113 CYC:12960\n\
F83D  38        SEC                             A:69 X:78 Y:5A P:25 SP:F9 PPU:  3,114 CYC:12966\n\
F83E  24 01     BIT $01 = FF                    A:69 X:78 Y:5A P:25 SP:F9 PPU:  9,114 CYC:12968\n\
F840  A9 00     LDA #$00                        A:69 X:78 Y:5A P:E5 SP:F9 PPU: 18,114 CYC:12971\n\
F842  60        RTS                             A:00 X:78 Y:5A P:67 SP:F9 PPU: 24,114 CYC:12973\n\
E26F  7D 00 06  ADC $0600,X @ 0678 = 69         A:00 X:78 Y:5A P:67 SP:FB PPU: 42,114 CYC:12979\n\
E272  20 43 F8  JSR $F843                       A:6A X:78 Y:5A P:24 SP:FB PPU: 54,114 CYC:12983\n\
F843  30 09     BMI $F84E                       A:6A X:78 Y:5A P:24 SP:F9 PPU: 72,114 CYC:12989\n\
F845  B0 07     BCS $F84E                       A:6A X:78 Y:5A P:24 SP:F9 PPU: 78,114 CYC:12991\n\
F847  C9 6A     CMP #$6A                        A:6A X:78 Y:5A P:24 SP:F9 PPU: 84,114 CYC:12993\n\
F849  D0 03     BNE $F84E                       A:6A X:78 Y:5A P:27 SP:F9 PPU: 90,114 CYC:12995\n\
F84B  70 01     BVS $F84E                       A:6A X:78 Y:5A P:27 SP:F9 PPU: 96,114 CYC:12997\n\
F84D  60        RTS                             A:6A X:78 Y:5A P:27 SP:F9 PPU:102,114 CYC:12999\n\
E275  C8        INY                             A:6A X:78 Y:5A P:27 SP:FB PPU:120,114 CYC:13005\n\
E276  A9 7F     LDA #$7F                        A:6A X:78 Y:5B P:25 SP:FB PPU:126,114 CYC:13007\n\
E278  8D 78 06  STA $0678 = 69                  A:7F X:78 Y:5B P:25 SP:FB PPU:132,114 CYC:13009\n\
E27B  20 51 F8  JSR $F851                       A:7F X:78 Y:5B P:25 SP:FB PPU:144,114 CYC:13013\n\
F851  38        SEC                             A:7F X:78 Y:5B P:25 SP:F9 PPU:162,114 CYC:13019\n\
F852  B8        CLV                             A:7F X:78 Y:5B P:25 SP:F9 PPU:168,114 CYC:13021\n\
F853  A9 7F     LDA #$7F                        A:7F X:78 Y:5B P:25 SP:F9 PPU:174,114 CYC:13023\n\
F855  60        RTS                             A:7F X:78 Y:5B P:25 SP:F9 PPU:180,114 CYC:13025\n\
E27E  7D 00 06  ADC $0600,X @ 0678 = 7F         A:7F X:78 Y:5B P:25 SP:FB PPU:198,114 CYC:13031\n\
E281  20 56 F8  JSR $F856                       A:FF X:78 Y:5B P:E4 SP:FB PPU:210,114 CYC:13035\n\
F856  10 09     BPL $F861                       A:FF X:78 Y:5B P:E4 SP:F9 PPU:228,114 CYC:13041\n\
F858  B0 07     BCS $F861                       A:FF X:78 Y:5B P:E4 SP:F9 PPU:234,114 CYC:13043\n\
F85A  C9 FF     CMP #$FF                        A:FF X:78 Y:5B P:E4 SP:F9 PPU:240,114 CYC:13045\n\
F85C  D0 03     BNE $F861                       A:FF X:78 Y:5B P:67 SP:F9 PPU:246,114 CYC:13047\n\
F85E  50 01     BVC $F861                       A:FF X:78 Y:5B P:67 SP:F9 PPU:252,114 CYC:13049\n\
F860  60        RTS                             A:FF X:78 Y:5B P:67 SP:F9 PPU:258,114 CYC:13051\n\
E284  C8        INY                             A:FF X:78 Y:5B P:67 SP:FB PPU:276,114 CYC:13057\n\
E285  A9 80     LDA #$80                        A:FF X:78 Y:5C P:65 SP:FB PPU:282,114 CYC:13059\n\
E287  8D 78 06  STA $0678 = 7F                  A:80 X:78 Y:5C P:E5 SP:FB PPU:288,114 CYC:13061\n\
E28A  20 64 F8  JSR $F864                       A:80 X:78 Y:5C P:E5 SP:FB PPU:300,114 CYC:13065\n\
F864  18        CLC                             A:80 X:78 Y:5C P:E5 SP:F9 PPU:318,114 CYC:13071\n\
F865  24 01     BIT $01 = FF                    A:80 X:78 Y:5C P:E4 SP:F9 PPU:324,114 CYC:13073\n\
F867  A9 7F     LDA #$7F                        A:80 X:78 Y:5C P:E4 SP:F9 PPU:333,114 CYC:13076\n\
F869  60        RTS                             A:7F X:78 Y:5C P:64 SP:F9 PPU:339,114 CYC:13078\n\
E28D  7D 00 06  ADC $0600,X @ 0678 = 80         A:7F X:78 Y:5C P:64 SP:FB PPU: 16,115 CYC:13084\n\
E290  20 6A F8  JSR $F86A                       A:FF X:78 Y:5C P:A4 SP:FB PPU: 28,115 CYC:13088\n\
F86A  10 09     BPL $F875                       A:FF X:78 Y:5C P:A4 SP:F9 PPU: 46,115 CYC:13094\n\
F86C  B0 07     BCS $F875                       A:FF X:78 Y:5C P:A4 SP:F9 PPU: 52,115 CYC:13096\n\
F86E  C9 FF     CMP #$FF                        A:FF X:78 Y:5C P:A4 SP:F9 PPU: 58,115 CYC:13098\n\
F870  D0 03     BNE $F875                       A:FF X:78 Y:5C P:27 SP:F9 PPU: 64,115 CYC:13100\n\
F872  70 01     BVS $F875                       A:FF X:78 Y:5C P:27 SP:F9 PPU: 70,115 CYC:13102\n\
F874  60        RTS                             A:FF X:78 Y:5C P:27 SP:F9 PPU: 76,115 CYC:13104\n\
E293  C8        INY                             A:FF X:78 Y:5C P:27 SP:FB PPU: 94,115 CYC:13110\n\
E294  20 78 F8  JSR $F878                       A:FF X:78 Y:5D P:25 SP:FB PPU:100,115 CYC:13112\n\
F878  38        SEC                             A:FF X:78 Y:5D P:25 SP:F9 PPU:118,115 CYC:13118\n\
F879  B8        CLV                             A:FF X:78 Y:5D P:25 SP:F9 PPU:124,115 CYC:13120\n\
F87A  A9 7F     LDA #$7F                        A:FF X:78 Y:5D P:25 SP:F9 PPU:130,115 CYC:13122\n\
F87C  60        RTS                             A:7F X:78 Y:5D P:25 SP:F9 PPU:136,115 CYC:13124\n\
E297  7D 00 06  ADC $0600,X @ 0678 = 80         A:7F X:78 Y:5D P:25 SP:FB PPU:154,115 CYC:13130\n\
E29A  20 7D F8  JSR $F87D                       A:00 X:78 Y:5D P:27 SP:FB PPU:166,115 CYC:13134\n\
F87D  D0 07     BNE $F886                       A:00 X:78 Y:5D P:27 SP:F9 PPU:184,115 CYC:13140\n\
F87F  30 05     BMI $F886                       A:00 X:78 Y:5D P:27 SP:F9 PPU:190,115 CYC:13142\n\
F881  70 03     BVS $F886                       A:00 X:78 Y:5D P:27 SP:F9 PPU:196,115 CYC:13144\n\
F883  90 01     BCC $F886                       A:00 X:78 Y:5D P:27 SP:F9 PPU:202,115 CYC:13146\n\
F885  60        RTS                             A:00 X:78 Y:5D P:27 SP:F9 PPU:208,115 CYC:13148\n\
E29D  C8        INY                             A:00 X:78 Y:5D P:27 SP:FB PPU:226,115 CYC:13154\n\
E29E  A9 40     LDA #$40                        A:00 X:78 Y:5E P:25 SP:FB PPU:232,115 CYC:13156\n\
E2A0  8D 78 06  STA $0678 = 80                  A:40 X:78 Y:5E P:25 SP:FB PPU:238,115 CYC:13158\n\
E2A3  20 89 F8  JSR $F889                       A:40 X:78 Y:5E P:25 SP:FB PPU:250,115 CYC:13162\n\
F889  24 01     BIT $01 = FF                    A:40 X:78 Y:5E P:25 SP:F9 PPU:268,115 CYC:13168\n\
F88B  A9 40     LDA #$40                        A:40 X:78 Y:5E P:E5 SP:F9 PPU:277,115 CYC:13171\n\
F88D  60        RTS                             A:40 X:78 Y:5E P:65 SP:F9 PPU:283,115 CYC:13173\n\
E2A6  DD 00 06  CMP $0600,X @ 0678 = 40         A:40 X:78 Y:5E P:65 SP:FB PPU:301,115 CYC:13179\n\
E2A9  20 8E F8  JSR $F88E                       A:40 X:78 Y:5E P:67 SP:FB PPU:313,115 CYC:13183\n\
F88E  30 07     BMI $F897                       A:40 X:78 Y:5E P:67 SP:F9 PPU:331,115 CYC:13189\n\
F890  90 05     BCC $F897                       A:40 X:78 Y:5E P:67 SP:F9 PPU:337,115 CYC:13191\n\
F892  D0 03     BNE $F897                       A:40 X:78 Y:5E P:67 SP:F9 PPU:  2,116 CYC:13193\n\
F894  50 01     BVC $F897                       A:40 X:78 Y:5E P:67 SP:F9 PPU:  8,116 CYC:13195\n\
F896  60        RTS                             A:40 X:78 Y:5E P:67 SP:F9 PPU: 14,116 CYC:13197\n\
E2AC  C8        INY                             A:40 X:78 Y:5E P:67 SP:FB PPU: 32,116 CYC:13203\n\
E2AD  48        PHA                             A:40 X:78 Y:5F P:65 SP:FB PPU: 38,116 CYC:13205\n\
E2AE  A9 3F     LDA #$3F                        A:40 X:78 Y:5F P:65 SP:FA PPU: 47,116 CYC:13208\n\
E2B0  8D 78 06  STA $0678 = 40                  A:3F X:78 Y:5F P:65 SP:FA PPU: 53,116 CYC:13210\n\
E2B3  68        PLA                             A:3F X:78 Y:5F P:65 SP:FA PPU: 65,116 CYC:13214\n\
E2B4  20 9A F8  JSR $F89A                       A:40 X:78 Y:5F P:65 SP:FB PPU: 77,116 CYC:13218\n\
F89A  B8        CLV                             A:40 X:78 Y:5F P:65 SP:F9 PPU: 95,116 CYC:13224\n\
F89B  60        RTS                             A:40 X:78 Y:5F P:25 SP:F9 PPU:101,116 CYC:13226\n\
E2B7  DD 00 06  CMP $0600,X @ 0678 = 3F         A:40 X:78 Y:5F P:25 SP:FB PPU:119,116 CYC:13232\n\
E2BA  20 9C F8  JSR $F89C                       A:40 X:78 Y:5F P:25 SP:FB PPU:131,116 CYC:13236\n\
F89C  F0 07     BEQ $F8A5                       A:40 X:78 Y:5F P:25 SP:F9 PPU:149,116 CYC:13242\n\
F89E  30 05     BMI $F8A5                       A:40 X:78 Y:5F P:25 SP:F9 PPU:155,116 CYC:13244\n\
F8A0  90 03     BCC $F8A5                       A:40 X:78 Y:5F P:25 SP:F9 PPU:161,116 CYC:13246\n\
F8A2  70 01     BVS $F8A5                       A:40 X:78 Y:5F P:25 SP:F9 PPU:167,116 CYC:13248\n\
F8A4  60        RTS                             A:40 X:78 Y:5F P:25 SP:F9 PPU:173,116 CYC:13250\n\
E2BD  C8        INY                             A:40 X:78 Y:5F P:25 SP:FB PPU:191,116 CYC:13256\n\
E2BE  48        PHA                             A:40 X:78 Y:60 P:25 SP:FB PPU:197,116 CYC:13258\n\
E2BF  A9 41     LDA #$41                        A:40 X:78 Y:60 P:25 SP:FA PPU:206,116 CYC:13261\n\
E2C1  8D 78 06  STA $0678 = 3F                  A:41 X:78 Y:60 P:25 SP:FA PPU:212,116 CYC:13263\n\
E2C4  68        PLA                             A:41 X:78 Y:60 P:25 SP:FA PPU:224,116 CYC:13267\n\
E2C5  DD 00 06  CMP $0600,X @ 0678 = 41         A:40 X:78 Y:60 P:25 SP:FB PPU:236,116 CYC:13271\n\
E2C8  20 A8 F8  JSR $F8A8                       A:40 X:78 Y:60 P:A4 SP:FB PPU:248,116 CYC:13275\n\
F8A8  F0 05     BEQ $F8AF                       A:40 X:78 Y:60 P:A4 SP:F9 PPU:266,116 CYC:13281\n\
F8AA  10 03     BPL $F8AF                       A:40 X:78 Y:60 P:A4 SP:F9 PPU:272,116 CYC:13283\n\
F8AC  10 01     BPL $F8AF                       A:40 X:78 Y:60 P:A4 SP:F9 PPU:278,116 CYC:13285\n\
F8AE  60        RTS                             A:40 X:78 Y:60 P:A4 SP:F9 PPU:284,116 CYC:13287\n\
E2CB  C8        INY                             A:40 X:78 Y:60 P:A4 SP:FB PPU:302,116 CYC:13293\n\
E2CC  48        PHA                             A:40 X:78 Y:61 P:24 SP:FB PPU:308,116 CYC:13295\n\
E2CD  A9 00     LDA #$00                        A:40 X:78 Y:61 P:24 SP:FA PPU:317,116 CYC:13298\n\
E2CF  8D 78 06  STA $0678 = 41                  A:00 X:78 Y:61 P:26 SP:FA PPU:323,116 CYC:13300\n\
E2D2  68        PLA                             A:00 X:78 Y:61 P:26 SP:FA PPU:335,116 CYC:13304\n\
E2D3  20 B2 F8  JSR $F8B2                       A:40 X:78 Y:61 P:24 SP:FB PPU:  6,117 CYC:13308\n\
F8B2  A9 80     LDA #$80                        A:40 X:78 Y:61 P:24 SP:F9 PPU: 24,117 CYC:13314\n\
F8B4  60        RTS                             A:80 X:78 Y:61 P:A4 SP:F9 PPU: 30,117 CYC:13316\n\
E2D6  DD 00 06  CMP $0600,X @ 0678 = 00         A:80 X:78 Y:61 P:A4 SP:FB PPU: 48,117 CYC:13322\n\
E2D9  20 B5 F8  JSR $F8B5                       A:80 X:78 Y:61 P:A5 SP:FB PPU: 60,117 CYC:13326\n\
F8B5  F0 05     BEQ $F8BC                       A:80 X:78 Y:61 P:A5 SP:F9 PPU: 78,117 CYC:13332\n\
F8B7  10 03     BPL $F8BC                       A:80 X:78 Y:61 P:A5 SP:F9 PPU: 84,117 CYC:13334\n\
F8B9  90 01     BCC $F8BC                       A:80 X:78 Y:61 P:A5 SP:F9 PPU: 90,117 CYC:13336\n\
F8BB  60        RTS                             A:80 X:78 Y:61 P:A5 SP:F9 PPU: 96,117 CYC:13338\n\
E2DC  C8        INY                             A:80 X:78 Y:61 P:A5 SP:FB PPU:114,117 CYC:13344\n\
E2DD  48        PHA                             A:80 X:78 Y:62 P:25 SP:FB PPU:120,117 CYC:13346\n\
E2DE  A9 80     LDA #$80                        A:80 X:78 Y:62 P:25 SP:FA PPU:129,117 CYC:13349\n\
E2E0  8D 78 06  STA $0678 = 00                  A:80 X:78 Y:62 P:A5 SP:FA PPU:135,117 CYC:13351\n\
E2E3  68        PLA                             A:80 X:78 Y:62 P:A5 SP:FA PPU:147,117 CYC:13355\n\
E2E4  DD 00 06  CMP $0600,X @ 0678 = 80         A:80 X:78 Y:62 P:A5 SP:FB PPU:159,117 CYC:13359\n\
E2E7  20 BF F8  JSR $F8BF                       A:80 X:78 Y:62 P:27 SP:FB PPU:171,117 CYC:13363\n\
F8BF  D0 05     BNE $F8C6                       A:80 X:78 Y:62 P:27 SP:F9 PPU:189,117 CYC:13369\n\
F8C1  30 03     BMI $F8C6                       A:80 X:78 Y:62 P:27 SP:F9 PPU:195,117 CYC:13371\n\
F8C3  90 01     BCC $F8C6                       A:80 X:78 Y:62 P:27 SP:F9 PPU:201,117 CYC:13373\n\
F8C5  60        RTS                             A:80 X:78 Y:62 P:27 SP:F9 PPU:207,117 CYC:13375\n\
E2EA  C8        INY                             A:80 X:78 Y:62 P:27 SP:FB PPU:225,117 CYC:13381\n\
E2EB  48        PHA                             A:80 X:78 Y:63 P:25 SP:FB PPU:231,117 CYC:13383\n\
E2EC  A9 81     LDA #$81                        A:80 X:78 Y:63 P:25 SP:FA PPU:240,117 CYC:13386\n\
E2EE  8D 78 06  STA $0678 = 80                  A:81 X:78 Y:63 P:A5 SP:FA PPU:246,117 CYC:13388\n\
E2F1  68        PLA                             A:81 X:78 Y:63 P:A5 SP:FA PPU:258,117 CYC:13392\n\
E2F2  DD 00 06  CMP $0600,X @ 0678 = 81         A:80 X:78 Y:63 P:A5 SP:FB PPU:270,117 CYC:13396\n\
E2F5  20 C9 F8  JSR $F8C9                       A:80 X:78 Y:63 P:A4 SP:FB PPU:282,117 CYC:13400\n\
F8C9  B0 05     BCS $F8D0                       A:80 X:78 Y:63 P:A4 SP:F9 PPU:300,117 CYC:13406\n\
F8CB  F0 03     BEQ $F8D0                       A:80 X:78 Y:63 P:A4 SP:F9 PPU:306,117 CYC:13408\n\
F8CD  10 01     BPL $F8D0                       A:80 X:78 Y:63 P:A4 SP:F9 PPU:312,117 CYC:13410\n\
F8CF  60        RTS                             A:80 X:78 Y:63 P:A4 SP:F9 PPU:318,117 CYC:13412\n\
E2F8  C8        INY                             A:80 X:78 Y:63 P:A4 SP:FB PPU:336,117 CYC:13418\n\
E2F9  48        PHA                             A:80 X:78 Y:64 P:24 SP:FB PPU:  1,118 CYC:13420\n\
E2FA  A9 7F     LDA #$7F                        A:80 X:78 Y:64 P:24 SP:FA PPU: 10,118 CYC:13423\n\
E2FC  8D 78 06  STA $0678 = 81                  A:7F X:78 Y:64 P:24 SP:FA PPU: 16,118 CYC:13425\n\
E2FF  68        PLA                             A:7F X:78 Y:64 P:24 SP:FA PPU: 28,118 CYC:13429\n\
E300  DD 00 06  CMP $0600,X @ 0678 = 7F         A:80 X:78 Y:64 P:A4 SP:FB PPU: 40,118 CYC:13433\n\
E303  20 D3 F8  JSR $F8D3                       A:80 X:78 Y:64 P:25 SP:FB PPU: 52,118 CYC:13437\n\
F8D3  90 05     BCC $F8DA                       A:80 X:78 Y:64 P:25 SP:F9 PPU: 70,118 CYC:13443\n\
F8D5  F0 03     BEQ $F8DA                       A:80 X:78 Y:64 P:25 SP:F9 PPU: 76,118 CYC:13445\n\
F8D7  30 01     BMI $F8DA                       A:80 X:78 Y:64 P:25 SP:F9 PPU: 82,118 CYC:13447\n\
F8D9  60        RTS                             A:80 X:78 Y:64 P:25 SP:F9 PPU: 88,118 CYC:13449\n\
E306  C8        INY                             A:80 X:78 Y:64 P:25 SP:FB PPU:106,118 CYC:13455\n\
E307  A9 40     LDA #$40                        A:80 X:78 Y:65 P:25 SP:FB PPU:112,118 CYC:13457\n\
E309  8D 78 06  STA $0678 = 7F                  A:40 X:78 Y:65 P:25 SP:FB PPU:118,118 CYC:13459\n\
E30C  20 31 F9  JSR $F931                       A:40 X:78 Y:65 P:25 SP:FB PPU:130,118 CYC:13463\n\
F931  24 01     BIT $01 = FF                    A:40 X:78 Y:65 P:25 SP:F9 PPU:148,118 CYC:13469\n\
F933  A9 40     LDA #$40                        A:40 X:78 Y:65 P:E5 SP:F9 PPU:157,118 CYC:13472\n\
F935  38        SEC                             A:40 X:78 Y:65 P:65 SP:F9 PPU:163,118 CYC:13474\n\
F936  60        RTS                             A:40 X:78 Y:65 P:65 SP:F9 PPU:169,118 CYC:13476\n\
E30F  FD 00 06  SBC $0600,X @ 0678 = 40         A:40 X:78 Y:65 P:65 SP:FB PPU:187,118 CYC:13482\n\
E312  20 37 F9  JSR $F937                       A:00 X:78 Y:65 P:27 SP:FB PPU:199,118 CYC:13486\n\
F937  30 0B     BMI $F944                       A:00 X:78 Y:65 P:27 SP:F9 PPU:217,118 CYC:13492\n\
F939  90 09     BCC $F944                       A:00 X:78 Y:65 P:27 SP:F9 PPU:223,118 CYC:13494\n\
F93B  D0 07     BNE $F944                       A:00 X:78 Y:65 P:27 SP:F9 PPU:229,118 CYC:13496\n\
F93D  70 05     BVS $F944                       A:00 X:78 Y:65 P:27 SP:F9 PPU:235,118 CYC:13498\n\
F93F  C9 00     CMP #$00                        A:00 X:78 Y:65 P:27 SP:F9 PPU:241,118 CYC:13500\n\
F941  D0 01     BNE $F944                       A:00 X:78 Y:65 P:27 SP:F9 PPU:247,118 CYC:13502\n\
F943  60        RTS                             A:00 X:78 Y:65 P:27 SP:F9 PPU:253,118 CYC:13504\n\
E315  C8        INY                             A:00 X:78 Y:65 P:27 SP:FB PPU:271,118 CYC:13510\n\
E316  A9 3F     LDA #$3F                        A:00 X:78 Y:66 P:25 SP:FB PPU:277,118 CYC:13512\n\
E318  8D 78 06  STA $0678 = 40                  A:3F X:78 Y:66 P:25 SP:FB PPU:283,118 CYC:13514\n\
E31B  20 47 F9  JSR $F947                       A:3F X:78 Y:66 P:25 SP:FB PPU:295,118 CYC:13518\n\
F947  B8        CLV                             A:3F X:78 Y:66 P:25 SP:F9 PPU:313,118 CYC:13524\n\
F948  38        SEC                             A:3F X:78 Y:66 P:25 SP:F9 PPU:319,118 CYC:13526\n\
F949  A9 40     LDA #$40                        A:3F X:78 Y:66 P:25 SP:F9 PPU:325,118 CYC:13528\n\
F94B  60        RTS                             A:40 X:78 Y:66 P:25 SP:F9 PPU:331,118 CYC:13530\n\
E31E  FD 00 06  SBC $0600,X @ 0678 = 3F         A:40 X:78 Y:66 P:25 SP:FB PPU:  8,119 CYC:13536\n\
E321  20 4C F9  JSR $F94C                       A:01 X:78 Y:66 P:25 SP:FB PPU: 20,119 CYC:13540\n\
F94C  F0 0B     BEQ $F959                       A:01 X:78 Y:66 P:25 SP:F9 PPU: 38,119 CYC:13546\n\
F94E  30 09     BMI $F959                       A:01 X:78 Y:66 P:25 SP:F9 PPU: 44,119 CYC:13548\n\
F950  90 07     BCC $F959                       A:01 X:78 Y:66 P:25 SP:F9 PPU: 50,119 CYC:13550\n\
F952  70 05     BVS $F959                       A:01 X:78 Y:66 P:25 SP:F9 PPU: 56,119 CYC:13552\n\
F954  C9 01     CMP #$01                        A:01 X:78 Y:66 P:25 SP:F9 PPU: 62,119 CYC:13554\n\
F956  D0 01     BNE $F959                       A:01 X:78 Y:66 P:27 SP:F9 PPU: 68,119 CYC:13556\n\
F958  60        RTS                             A:01 X:78 Y:66 P:27 SP:F9 PPU: 74,119 CYC:13558\n\
E324  C8        INY                             A:01 X:78 Y:66 P:27 SP:FB PPU: 92,119 CYC:13564\n\
E325  A9 41     LDA #$41                        A:01 X:78 Y:67 P:25 SP:FB PPU: 98,119 CYC:13566\n\
E327  8D 78 06  STA $0678 = 3F                  A:41 X:78 Y:67 P:25 SP:FB PPU:104,119 CYC:13568\n\
E32A  20 5C F9  JSR $F95C                       A:41 X:78 Y:67 P:25 SP:FB PPU:116,119 CYC:13572\n\
F95C  A9 40     LDA #$40                        A:41 X:78 Y:67 P:25 SP:F9 PPU:134,119 CYC:13578\n\
F95E  38        SEC                             A:40 X:78 Y:67 P:25 SP:F9 PPU:140,119 CYC:13580\n\
F95F  24 01     BIT $01 = FF                    A:40 X:78 Y:67 P:25 SP:F9 PPU:146,119 CYC:13582\n\
F961  60        RTS                             A:40 X:78 Y:67 P:E5 SP:F9 PPU:155,119 CYC:13585\n\
E32D  FD 00 06  SBC $0600,X @ 0678 = 41         A:40 X:78 Y:67 P:E5 SP:FB PPU:173,119 CYC:13591\n\
E330  20 62 F9  JSR $F962                       A:FF X:78 Y:67 P:A4 SP:FB PPU:185,119 CYC:13595\n\
F962  B0 0B     BCS $F96F                       A:FF X:78 Y:67 P:A4 SP:F9 PPU:203,119 CYC:13601\n\
F964  F0 09     BEQ $F96F                       A:FF X:78 Y:67 P:A4 SP:F9 PPU:209,119 CYC:13603\n\
F966  10 07     BPL $F96F                       A:FF X:78 Y:67 P:A4 SP:F9 PPU:215,119 CYC:13605\n\
F968  70 05     BVS $F96F                       A:FF X:78 Y:67 P:A4 SP:F9 PPU:221,119 CYC:13607\n\
F96A  C9 FF     CMP #$FF                        A:FF X:78 Y:67 P:A4 SP:F9 PPU:227,119 CYC:13609\n\
F96C  D0 01     BNE $F96F                       A:FF X:78 Y:67 P:27 SP:F9 PPU:233,119 CYC:13611\n\
F96E  60        RTS                             A:FF X:78 Y:67 P:27 SP:F9 PPU:239,119 CYC:13613\n\
E333  C8        INY                             A:FF X:78 Y:67 P:27 SP:FB PPU:257,119 CYC:13619\n\
E334  A9 00     LDA #$00                        A:FF X:78 Y:68 P:25 SP:FB PPU:263,119 CYC:13621\n\
E336  8D 78 06  STA $0678 = 41                  A:00 X:78 Y:68 P:27 SP:FB PPU:269,119 CYC:13623\n\
E339  20 72 F9  JSR $F972                       A:00 X:78 Y:68 P:27 SP:FB PPU:281,119 CYC:13627\n\
F972  18        CLC                             A:00 X:78 Y:68 P:27 SP:F9 PPU:299,119 CYC:13633\n\
F973  A9 80     LDA #$80                        A:00 X:78 Y:68 P:26 SP:F9 PPU:305,119 CYC:13635\n\
F975  60        RTS                             A:80 X:78 Y:68 P:A4 SP:F9 PPU:311,119 CYC:13637\n\
E33C  FD 00 06  SBC $0600,X @ 0678 = 00         A:80 X:78 Y:68 P:A4 SP:FB PPU:329,119 CYC:13643\n\
E33F  20 76 F9  JSR $F976                       A:7F X:78 Y:68 P:65 SP:FB PPU:  0,120 CYC:13647\n\
F976  90 05     BCC $F97D                       A:7F X:78 Y:68 P:65 SP:F9 PPU: 18,120 CYC:13653\n\
F978  C9 7F     CMP #$7F                        A:7F X:78 Y:68 P:65 SP:F9 PPU: 24,120 CYC:13655\n\
F97A  D0 01     BNE $F97D                       A:7F X:78 Y:68 P:67 SP:F9 PPU: 30,120 CYC:13657\n\
F97C  60        RTS                             A:7F X:78 Y:68 P:67 SP:F9 PPU: 36,120 CYC:13659\n\
E342  C8        INY                             A:7F X:78 Y:68 P:67 SP:FB PPU: 54,120 CYC:13665\n\
E343  A9 7F     LDA #$7F                        A:7F X:78 Y:69 P:65 SP:FB PPU: 60,120 CYC:13667\n\
E345  8D 78 06  STA $0678 = 00                  A:7F X:78 Y:69 P:65 SP:FB PPU: 66,120 CYC:13669\n\
E348  20 80 F9  JSR $F980                       A:7F X:78 Y:69 P:65 SP:FB PPU: 78,120 CYC:13673\n\
F980  38        SEC                             A:7F X:78 Y:69 P:65 SP:F9 PPU: 96,120 CYC:13679\n\
F981  A9 81     LDA #$81                        A:7F X:78 Y:69 P:65 SP:F9 PPU:102,120 CYC:13681\n\
F983  60        RTS                             A:81 X:78 Y:69 P:E5 SP:F9 PPU:108,120 CYC:13683\n\
E34B  FD 00 06  SBC $0600,X @ 0678 = 7F         A:81 X:78 Y:69 P:E5 SP:FB PPU:126,120 CYC:13689\n\
E34E  20 84 F9  JSR $F984                       A:02 X:78 Y:69 P:65 SP:FB PPU:138,120 CYC:13693\n\
F984  50 07     BVC $F98D                       A:02 X:78 Y:69 P:65 SP:F9 PPU:156,120 CYC:13699\n\
F986  90 05     BCC $F98D                       A:02 X:78 Y:69 P:65 SP:F9 PPU:162,120 CYC:13701\n\
F988  C9 02     CMP #$02                        A:02 X:78 Y:69 P:65 SP:F9 PPU:168,120 CYC:13703\n\
F98A  D0 01     BNE $F98D                       A:02 X:78 Y:69 P:67 SP:F9 PPU:174,120 CYC:13705\n\
F98C  60        RTS                             A:02 X:78 Y:69 P:67 SP:F9 PPU:180,120 CYC:13707\n\
E351  A9 AA     LDA #$AA                        A:02 X:78 Y:69 P:67 SP:FB PPU:198,120 CYC:13713\n\
E353  8D 33 06  STA $0633 = AA                  A:AA X:78 Y:69 P:E5 SP:FB PPU:204,120 CYC:13715\n\
E356  A9 BB     LDA #$BB                        A:AA X:78 Y:69 P:E5 SP:FB PPU:216,120 CYC:13719\n\
E358  8D 89 06  STA $0689 = BB                  A:BB X:78 Y:69 P:E5 SP:FB PPU:222,120 CYC:13721\n\
E35B  A2 00     LDX #$00                        A:BB X:78 Y:69 P:E5 SP:FB PPU:234,120 CYC:13725\n\
E35D  A0 66     LDY #$66                        A:BB X:00 Y:69 P:67 SP:FB PPU:240,120 CYC:13727\n\
E35F  24 01     BIT $01 = FF                    A:BB X:00 Y:66 P:65 SP:FB PPU:246,120 CYC:13729\n\
E361  38        SEC                             A:BB X:00 Y:66 P:E5 SP:FB PPU:255,120 CYC:13732\n\
E362  A9 00     LDA #$00                        A:BB X:00 Y:66 P:E5 SP:FB PPU:261,120 CYC:13734\n\
E364  BD 33 06  LDA $0633,X @ 0633 = AA         A:00 X:00 Y:66 P:67 SP:FB PPU:267,120 CYC:13736\n\
E367  10 12     BPL $E37B                       A:AA X:00 Y:66 P:E5 SP:FB PPU:279,120 CYC:13740\n\
E369  F0 10     BEQ $E37B                       A:AA X:00 Y:66 P:E5 SP:FB PPU:285,120 CYC:13742\n\
E36B  50 0E     BVC $E37B                       A:AA X:00 Y:66 P:E5 SP:FB PPU:291,120 CYC:13744\n\
E36D  90 0C     BCC $E37B                       A:AA X:00 Y:66 P:E5 SP:FB PPU:297,120 CYC:13746\n\
E36F  C0 66     CPY #$66                        A:AA X:00 Y:66 P:E5 SP:FB PPU:303,120 CYC:13748\n\
E371  D0 08     BNE $E37B                       A:AA X:00 Y:66 P:67 SP:FB PPU:309,120 CYC:13750\n\
E373  E0 00     CPX #$00                        A:AA X:00 Y:66 P:67 SP:FB PPU:315,120 CYC:13752\n\
E375  D0 04     BNE $E37B                       A:AA X:00 Y:66 P:67 SP:FB PPU:321,120 CYC:13754\n\
E377  C9 AA     CMP #$AA                        A:AA X:00 Y:66 P:67 SP:FB PPU:327,120 CYC:13756\n\
E379  F0 04     BEQ $E37F                       A:AA X:00 Y:66 P:67 SP:FB PPU:333,120 CYC:13758\n\
E37F  A2 8A     LDX #$8A                        A:AA X:00 Y:66 P:67 SP:FB PPU:  1,121 CYC:13761\n\
E381  A0 66     LDY #$66                        A:AA X:8A Y:66 P:E5 SP:FB PPU:  7,121 CYC:13763\n\
E383  B8        CLV                             A:AA X:8A Y:66 P:65 SP:FB PPU: 13,121 CYC:13765\n\
E384  18        CLC                             A:AA X:8A Y:66 P:25 SP:FB PPU: 19,121 CYC:13767\n\
E385  A9 00     LDA #$00                        A:AA X:8A Y:66 P:24 SP:FB PPU: 25,121 CYC:13769\n\
E387  BD FF 05  LDA $05FF,X @ 0689 = BB         A:00 X:8A Y:66 P:26 SP:FB PPU: 31,121 CYC:13771\n\
E38A  10 12     BPL $E39E                       A:BB X:8A Y:66 P:A4 SP:FB PPU: 46,121 CYC:13776\n\
E38C  F0 10     BEQ $E39E                       A:BB X:8A Y:66 P:A4 SP:FB PPU: 52,121 CYC:13778\n\
E38E  70 0E     BVS $E39E                       A:BB X:8A Y:66 P:A4 SP:FB PPU: 58,121 CYC:13780\n\
E390  B0 0C     BCS $E39E                       A:BB X:8A Y:66 P:A4 SP:FB PPU: 64,121 CYC:13782\n\
E392  C9 BB     CMP #$BB                        A:BB X:8A Y:66 P:A4 SP:FB PPU: 70,121 CYC:13784\n\
E394  D0 08     BNE $E39E                       A:BB X:8A Y:66 P:27 SP:FB PPU: 76,121 CYC:13786\n\
E396  C0 66     CPY #$66                        A:BB X:8A Y:66 P:27 SP:FB PPU: 82,121 CYC:13788\n\
E398  D0 04     BNE $E39E                       A:BB X:8A Y:66 P:27 SP:FB PPU: 88,121 CYC:13790\n\
E39A  E0 8A     CPX #$8A                        A:BB X:8A Y:66 P:27 SP:FB PPU: 94,121 CYC:13792\n\
E39C  F0 04     BEQ $E3A2                       A:BB X:8A Y:66 P:27 SP:FB PPU:100,121 CYC:13794\n\
E3A2  24 01     BIT $01 = FF                    A:BB X:8A Y:66 P:27 SP:FB PPU:109,121 CYC:13797\n\
E3A4  38        SEC                             A:BB X:8A Y:66 P:E5 SP:FB PPU:118,121 CYC:13800\n\
E3A5  A9 44     LDA #$44                        A:BB X:8A Y:66 P:E5 SP:FB PPU:124,121 CYC:13802\n\
E3A7  A2 00     LDX #$00                        A:44 X:8A Y:66 P:65 SP:FB PPU:130,121 CYC:13804\n\
E3A9  9D 33 06  STA $0633,X @ 0633 = AA         A:44 X:00 Y:66 P:67 SP:FB PPU:136,121 CYC:13806\n\
E3AC  AD 33 06  LDA $0633 = 44                  A:44 X:00 Y:66 P:67 SP:FB PPU:151,121 CYC:13811\n\
E3AF  90 1A     BCC $E3CB                       A:44 X:00 Y:66 P:65 SP:FB PPU:163,121 CYC:13815\n\
E3B1  C9 44     CMP #$44                        A:44 X:00 Y:66 P:65 SP:FB PPU:169,121 CYC:13817\n\
E3B3  D0 16     BNE $E3CB                       A:44 X:00 Y:66 P:67 SP:FB PPU:175,121 CYC:13819\n\
E3B5  50 14     BVC $E3CB                       A:44 X:00 Y:66 P:67 SP:FB PPU:181,121 CYC:13821\n\
E3B7  18        CLC                             A:44 X:00 Y:66 P:67 SP:FB PPU:187,121 CYC:13823\n\
E3B8  B8        CLV                             A:44 X:00 Y:66 P:66 SP:FB PPU:193,121 CYC:13825\n\
E3B9  A9 99     LDA #$99                        A:44 X:00 Y:66 P:26 SP:FB PPU:199,121 CYC:13827\n\
E3BB  A2 80     LDX #$80                        A:99 X:00 Y:66 P:A4 SP:FB PPU:205,121 CYC:13829\n\
E3BD  9D 85 05  STA $0585,X @ 0605 = 00         A:99 X:80 Y:66 P:A4 SP:FB PPU:211,121 CYC:13831\n\
E3C0  AD 05 06  LDA $0605 = 99                  A:99 X:80 Y:66 P:A4 SP:FB PPU:226,121 CYC:13836\n\
E3C3  B0 06     BCS $E3CB                       A:99 X:80 Y:66 P:A4 SP:FB PPU:238,121 CYC:13840\n\
E3C5  C9 99     CMP #$99                        A:99 X:80 Y:66 P:A4 SP:FB PPU:244,121 CYC:13842\n\
E3C7  D0 02     BNE $E3CB                       A:99 X:80 Y:66 P:27 SP:FB PPU:250,121 CYC:13844\n\
E3C9  50 04     BVC $E3CF                       A:99 X:80 Y:66 P:27 SP:FB PPU:256,121 CYC:13846\n\
E3CF  A0 6D     LDY #$6D                        A:99 X:80 Y:66 P:27 SP:FB PPU:265,121 CYC:13849\n\
E3D1  A2 6D     LDX #$6D                        A:99 X:80 Y:6D P:25 SP:FB PPU:271,121 CYC:13851\n\
E3D3  20 90 F9  JSR $F990                       A:99 X:6D Y:6D P:25 SP:FB PPU:277,121 CYC:13853\n\
F990  A2 55     LDX #$55                        A:99 X:6D Y:6D P:25 SP:F9 PPU:295,121 CYC:13859\n\
F992  A9 FF     LDA #$FF                        A:99 X:55 Y:6D P:25 SP:F9 PPU:301,121 CYC:13861\n\
F994  85 01     STA $01 = FF                    A:FF X:55 Y:6D P:A5 SP:F9 PPU:307,121 CYC:13863\n\
F996  EA        NOP                             A:FF X:55 Y:6D P:A5 SP:F9 PPU:316,121 CYC:13866\n\
F997  24 01     BIT $01 = FF                    A:FF X:55 Y:6D P:A5 SP:F9 PPU:322,121 CYC:13868\n\
F999  38        SEC                             A:FF X:55 Y:6D P:E5 SP:F9 PPU:331,121 CYC:13871\n\
F99A  A9 01     LDA #$01                        A:FF X:55 Y:6D P:E5 SP:F9 PPU:337,121 CYC:13873\n\
F99C  60        RTS                             A:01 X:55 Y:6D P:65 SP:F9 PPU:  2,122 CYC:13875\n\
E3D6  9D 00 06  STA $0600,X @ 0655 = 00         A:01 X:55 Y:6D P:65 SP:FB PPU: 20,122 CYC:13881\n\
E3D9  5E 00 06  LSR $0600,X @ 0655 = 01         A:01 X:55 Y:6D P:65 SP:FB PPU: 35,122 CYC:13886\n\
E3DC  BD 00 06  LDA $0600,X @ 0655 = 00         A:01 X:55 Y:6D P:67 SP:FB PPU: 56,122 CYC:13893\n\
E3DF  20 9D F9  JSR $F99D                       A:00 X:55 Y:6D P:67 SP:FB PPU: 68,122 CYC:13897\n\
F99D  90 1B     BCC $F9BA                       A:00 X:55 Y:6D P:67 SP:F9 PPU: 86,122 CYC:13903\n\
F99F  D0 19     BNE $F9BA                       A:00 X:55 Y:6D P:67 SP:F9 PPU: 92,122 CYC:13905\n\
F9A1  30 17     BMI $F9BA                       A:00 X:55 Y:6D P:67 SP:F9 PPU: 98,122 CYC:13907\n\
F9A3  50 15     BVC $F9BA                       A:00 X:55 Y:6D P:67 SP:F9 PPU:104,122 CYC:13909\n\
F9A5  C9 00     CMP #$00                        A:00 X:55 Y:6D P:67 SP:F9 PPU:110,122 CYC:13911\n\
F9A7  D0 11     BNE $F9BA                       A:00 X:55 Y:6D P:67 SP:F9 PPU:116,122 CYC:13913\n\
F9A9  B8        CLV                             A:00 X:55 Y:6D P:67 SP:F9 PPU:122,122 CYC:13915\n\
F9AA  A9 AA     LDA #$AA                        A:00 X:55 Y:6D P:27 SP:F9 PPU:128,122 CYC:13917\n\
F9AC  60        RTS                             A:AA X:55 Y:6D P:A5 SP:F9 PPU:134,122 CYC:13919\n\
E3E2  C8        INY                             A:AA X:55 Y:6D P:A5 SP:FB PPU:152,122 CYC:13925\n\
E3E3  9D 00 06  STA $0600,X @ 0655 = 00         A:AA X:55 Y:6E P:25 SP:FB PPU:158,122 CYC:13927\n\
E3E6  5E 00 06  LSR $0600,X @ 0655 = AA         A:AA X:55 Y:6E P:25 SP:FB PPU:173,122 CYC:13932\n\
E3E9  BD 00 06  LDA $0600,X @ 0655 = 55         A:AA X:55 Y:6E P:24 SP:FB PPU:194,122 CYC:13939\n\
E3EC  20 AD F9  JSR $F9AD                       A:55 X:55 Y:6E P:24 SP:FB PPU:206,122 CYC:13943\n\
F9AD  B0 0B     BCS $F9BA                       A:55 X:55 Y:6E P:24 SP:F9 PPU:224,122 CYC:13949\n\
F9AF  F0 09     BEQ $F9BA                       A:55 X:55 Y:6E P:24 SP:F9 PPU:230,122 CYC:13951\n\
F9B1  30 07     BMI $F9BA                       A:55 X:55 Y:6E P:24 SP:F9 PPU:236,122 CYC:13953\n\
F9B3  70 05     BVS $F9BA                       A:55 X:55 Y:6E P:24 SP:F9 PPU:242,122 CYC:13955\n\
F9B5  C9 55     CMP #$55                        A:55 X:55 Y:6E P:24 SP:F9 PPU:248,122 CYC:13957\n\
F9B7  D0 01     BNE $F9BA                       A:55 X:55 Y:6E P:27 SP:F9 PPU:254,122 CYC:13959\n\
F9B9  60        RTS                             A:55 X:55 Y:6E P:27 SP:F9 PPU:260,122 CYC:13961\n\
E3EF  C8        INY                             A:55 X:55 Y:6E P:27 SP:FB PPU:278,122 CYC:13967\n\
E3F0  20 BD F9  JSR $F9BD                       A:55 X:55 Y:6F P:25 SP:FB PPU:284,122 CYC:13969\n\
F9BD  24 01     BIT $01 = FF                    A:55 X:55 Y:6F P:25 SP:F9 PPU:302,122 CYC:13975\n\
F9BF  38        SEC                             A:55 X:55 Y:6F P:E5 SP:F9 PPU:311,122 CYC:13978\n\
F9C0  A9 80     LDA #$80                        A:55 X:55 Y:6F P:E5 SP:F9 PPU:317,122 CYC:13980\n\
F9C2  60        RTS                             A:80 X:55 Y:6F P:E5 SP:F9 PPU:323,122 CYC:13982\n\
E3F3  9D 00 06  STA $0600,X @ 0655 = 55         A:80 X:55 Y:6F P:E5 SP:FB PPU:  0,123 CYC:13988\n\
E3F6  1E 00 06  ASL $0600,X @ 0655 = 80         A:80 X:55 Y:6F P:E5 SP:FB PPU: 15,123 CYC:13993\n\
E3F9  BD 00 06  LDA $0600,X @ 0655 = 00         A:80 X:55 Y:6F P:67 SP:FB PPU: 36,123 CYC:14000\n\
E3FC  20 C3 F9  JSR $F9C3                       A:00 X:55 Y:6F P:67 SP:FB PPU: 48,123 CYC:14004\n\
F9C3  90 1C     BCC $F9E1                       A:00 X:55 Y:6F P:67 SP:F9 PPU: 66,123 CYC:14010\n\
F9C5  D0 1A     BNE $F9E1                       A:00 X:55 Y:6F P:67 SP:F9 PPU: 72,123 CYC:14012\n\
F9C7  30 18     BMI $F9E1                       A:00 X:55 Y:6F P:67 SP:F9 PPU: 78,123 CYC:14014\n\
F9C9  50 16     BVC $F9E1                       A:00 X:55 Y:6F P:67 SP:F9 PPU: 84,123 CYC:14016\n\
F9CB  C9 00     CMP #$00                        A:00 X:55 Y:6F P:67 SP:F9 PPU: 90,123 CYC:14018\n\
F9CD  D0 12     BNE $F9E1                       A:00 X:55 Y:6F P:67 SP:F9 PPU: 96,123 CYC:14020\n\
F9CF  B8        CLV                             A:00 X:55 Y:6F P:67 SP:F9 PPU:102,123 CYC:14022\n\
F9D0  A9 55     LDA #$55                        A:00 X:55 Y:6F P:27 SP:F9 PPU:108,123 CYC:14024\n\
F9D2  38        SEC                             A:55 X:55 Y:6F P:25 SP:F9 PPU:114,123 CYC:14026\n\
F9D3  60        RTS                             A:55 X:55 Y:6F P:25 SP:F9 PPU:120,123 CYC:14028\n\
E3FF  C8        INY                             A:55 X:55 Y:6F P:25 SP:FB PPU:138,123 CYC:14034\n\
E400  9D 00 06  STA $0600,X @ 0655 = 00         A:55 X:55 Y:70 P:25 SP:FB PPU:144,123 CYC:14036\n\
E403  1E 00 06  ASL $0600,X @ 0655 = 55         A:55 X:55 Y:70 P:25 SP:FB PPU:159,123 CYC:14041\n\
E406  BD 00 06  LDA $0600,X @ 0655 = AA         A:55 X:55 Y:70 P:A4 SP:FB PPU:180,123 CYC:14048\n\
E409  20 D4 F9  JSR $F9D4                       A:AA X:55 Y:70 P:A4 SP:FB PPU:192,123 CYC:14052\n\
F9D4  B0 0B     BCS $F9E1                       A:AA X:55 Y:70 P:A4 SP:F9 PPU:210,123 CYC:14058\n\
F9D6  F0 09     BEQ $F9E1                       A:AA X:55 Y:70 P:A4 SP:F9 PPU:216,123 CYC:14060\n\
F9D8  10 07     BPL $F9E1                       A:AA X:55 Y:70 P:A4 SP:F9 PPU:222,123 CYC:14062\n\
F9DA  70 05     BVS $F9E1                       A:AA X:55 Y:70 P:A4 SP:F9 PPU:228,123 CYC:14064\n\
F9DC  C9 AA     CMP #$AA                        A:AA X:55 Y:70 P:A4 SP:F9 PPU:234,123 CYC:14066\n\
F9DE  D0 01     BNE $F9E1                       A:AA X:55 Y:70 P:27 SP:F9 PPU:240,123 CYC:14068\n\
F9E0  60        RTS                             A:AA X:55 Y:70 P:27 SP:F9 PPU:246,123 CYC:14070\n\
E40C  C8        INY                             A:AA X:55 Y:70 P:27 SP:FB PPU:264,123 CYC:14076\n\
E40D  20 E4 F9  JSR $F9E4                       A:AA X:55 Y:71 P:25 SP:FB PPU:270,123 CYC:14078\n\
F9E4  24 01     BIT $01 = FF                    A:AA X:55 Y:71 P:25 SP:F9 PPU:288,123 CYC:14084\n\
F9E6  38        SEC                             A:AA X:55 Y:71 P:E5 SP:F9 PPU:297,123 CYC:14087\n\
F9E7  A9 01     LDA #$01                        A:AA X:55 Y:71 P:E5 SP:F9 PPU:303,123 CYC:14089\n\
F9E9  60        RTS                             A:01 X:55 Y:71 P:65 SP:F9 PPU:309,123 CYC:14091\n\
E410  9D 00 06  STA $0600,X @ 0655 = AA         A:01 X:55 Y:71 P:65 SP:FB PPU:327,123 CYC:14097\n\
E413  7E 00 06  ROR $0600,X @ 0655 = 01         A:01 X:55 Y:71 P:65 SP:FB PPU:  1,124 CYC:14102\n\
E416  BD 00 06  LDA $0600,X @ 0655 = 80         A:01 X:55 Y:71 P:E5 SP:FB PPU: 22,124 CYC:14109\n\
E419  20 EA F9  JSR $F9EA                       A:80 X:55 Y:71 P:E5 SP:FB PPU: 34,124 CYC:14113\n\
F9EA  90 1C     BCC $FA08                       A:80 X:55 Y:71 P:E5 SP:F9 PPU: 52,124 CYC:14119\n\
F9EC  F0 1A     BEQ $FA08                       A:80 X:55 Y:71 P:E5 SP:F9 PPU: 58,124 CYC:14121\n\
F9EE  10 18     BPL $FA08                       A:80 X:55 Y:71 P:E5 SP:F9 PPU: 64,124 CYC:14123\n\
F9F0  50 16     BVC $FA08                       A:80 X:55 Y:71 P:E5 SP:F9 PPU: 70,124 CYC:14125\n\
F9F2  C9 80     CMP #$80                        A:80 X:55 Y:71 P:E5 SP:F9 PPU: 76,124 CYC:14127\n\
F9F4  D0 12     BNE $FA08                       A:80 X:55 Y:71 P:67 SP:F9 PPU: 82,124 CYC:14129\n\
F9F6  B8        CLV                             A:80 X:55 Y:71 P:67 SP:F9 PPU: 88,124 CYC:14131\n\
F9F7  18        CLC                             A:80 X:55 Y:71 P:27 SP:F9 PPU: 94,124 CYC:14133\n\
F9F8  A9 55     LDA #$55                        A:80 X:55 Y:71 P:26 SP:F9 PPU:100,124 CYC:14135\n\
F9FA  60        RTS                             A:55 X:55 Y:71 P:24 SP:F9 PPU:106,124 CYC:14137\n\
E41C  C8        INY                             A:55 X:55 Y:71 P:24 SP:FB PPU:124,124 CYC:14143\n\
E41D  9D 00 06  STA $0600,X @ 0655 = 80         A:55 X:55 Y:72 P:24 SP:FB PPU:130,124 CYC:14145\n\
E420  7E 00 06  ROR $0600,X @ 0655 = 55         A:55 X:55 Y:72 P:24 SP:FB PPU:145,124 CYC:14150\n\
E423  BD 00 06  LDA $0600,X @ 0655 = 2A         A:55 X:55 Y:72 P:25 SP:FB PPU:166,124 CYC:14157\n\
E426  20 FB F9  JSR $F9FB                       A:2A X:55 Y:72 P:25 SP:FB PPU:178,124 CYC:14161\n\
F9FB  90 0B     BCC $FA08                       A:2A X:55 Y:72 P:25 SP:F9 PPU:196,124 CYC:14167\n\
F9FD  F0 09     BEQ $FA08                       A:2A X:55 Y:72 P:25 SP:F9 PPU:202,124 CYC:14169\n\
F9FF  30 07     BMI $FA08                       A:2A X:55 Y:72 P:25 SP:F9 PPU:208,124 CYC:14171\n\
FA01  70 05     BVS $FA08                       A:2A X:55 Y:72 P:25 SP:F9 PPU:214,124 CYC:14173\n\
FA03  C9 2A     CMP #$2A                        A:2A X:55 Y:72 P:25 SP:F9 PPU:220,124 CYC:14175\n\
FA05  D0 01     BNE $FA08                       A:2A X:55 Y:72 P:27 SP:F9 PPU:226,124 CYC:14177\n\
FA07  60        RTS                             A:2A X:55 Y:72 P:27 SP:F9 PPU:232,124 CYC:14179\n\
E429  C8        INY                             A:2A X:55 Y:72 P:27 SP:FB PPU:250,124 CYC:14185\n\
E42A  20 0A FA  JSR $FA0A                       A:2A X:55 Y:73 P:25 SP:FB PPU:256,124 CYC:14187\n\
FA0A  24 01     BIT $01 = FF                    A:2A X:55 Y:73 P:25 SP:F9 PPU:274,124 CYC:14193\n\
FA0C  38        SEC                             A:2A X:55 Y:73 P:E5 SP:F9 PPU:283,124 CYC:14196\n\
FA0D  A9 80     LDA #$80                        A:2A X:55 Y:73 P:E5 SP:F9 PPU:289,124 CYC:14198\n\
FA0F  60        RTS                             A:80 X:55 Y:73 P:E5 SP:F9 PPU:295,124 CYC:14200\n\
E42D  9D 00 06  STA $0600,X @ 0655 = 2A         A:80 X:55 Y:73 P:E5 SP:FB PPU:313,124 CYC:14206\n\
E430  3E 00 06  ROL $0600,X @ 0655 = 80         A:80 X:55 Y:73 P:E5 SP:FB PPU:328,124 CYC:14211\n\
E433  BD 00 06  LDA $0600,X @ 0655 = 01         A:80 X:55 Y:73 P:65 SP:FB PPU:  8,125 CYC:14218\n\
E436  20 10 FA  JSR $FA10                       A:01 X:55 Y:73 P:65 SP:FB PPU: 20,125 CYC:14222\n\
FA10  90 1C     BCC $FA2E                       A:01 X:55 Y:73 P:65 SP:F9 PPU: 38,125 CYC:14228\n\
FA12  F0 1A     BEQ $FA2E                       A:01 X:55 Y:73 P:65 SP:F9 PPU: 44,125 CYC:14230\n\
FA14  30 18     BMI $FA2E                       A:01 X:55 Y:73 P:65 SP:F9 PPU: 50,125 CYC:14232\n\
FA16  50 16     BVC $FA2E                       A:01 X:55 Y:73 P:65 SP:F9 PPU: 56,125 CYC:14234\n\
FA18  C9 01     CMP #$01                        A:01 X:55 Y:73 P:65 SP:F9 PPU: 62,125 CYC:14236\n\
FA1A  D0 12     BNE $FA2E                       A:01 X:55 Y:73 P:67 SP:F9 PPU: 68,125 CYC:14238\n\
FA1C  B8        CLV                             A:01 X:55 Y:73 P:67 SP:F9 PPU: 74,125 CYC:14240\n\
FA1D  18        CLC                             A:01 X:55 Y:73 P:27 SP:F9 PPU: 80,125 CYC:14242\n\
FA1E  A9 55     LDA #$55                        A:01 X:55 Y:73 P:26 SP:F9 PPU: 86,125 CYC:14244\n\
FA20  60        RTS                             A:55 X:55 Y:73 P:24 SP:F9 PPU: 92,125 CYC:14246\n\
E439  C8        INY                             A:55 X:55 Y:73 P:24 SP:FB PPU:110,125 CYC:14252\n\
E43A  9D 00 06  STA $0600,X @ 0655 = 01         A:55 X:55 Y:74 P:24 SP:FB PPU:116,125 CYC:14254\n\
E43D  3E 00 06  ROL $0600,X @ 0655 = 55         A:55 X:55 Y:74 P:24 SP:FB PPU:131,125 CYC:14259\n\
E440  BD 00 06  LDA $0600,X @ 0655 = AA         A:55 X:55 Y:74 P:A4 SP:FB PPU:152,125 CYC:14266\n\
E443  20 21 FA  JSR $FA21                       A:AA X:55 Y:74 P:A4 SP:FB PPU:164,125 CYC:14270\n\
FA21  B0 0B     BCS $FA2E                       A:AA X:55 Y:74 P:A4 SP:F9 PPU:182,125 CYC:14276\n\
FA23  F0 09     BEQ $FA2E                       A:AA X:55 Y:74 P:A4 SP:F9 PPU:188,125 CYC:14278\n\
FA25  10 07     BPL $FA2E                       A:AA X:55 Y:74 P:A4 SP:F9 PPU:194,125 CYC:14280\n\
FA27  70 05     BVS $FA2E                       A:AA X:55 Y:74 P:A4 SP:F9 PPU:200,125 CYC:14282\n\
FA29  C9 AA     CMP #$AA                        A:AA X:55 Y:74 P:A4 SP:F9 PPU:206,125 CYC:14284\n\
FA2B  D0 01     BNE $FA2E                       A:AA X:55 Y:74 P:27 SP:F9 PPU:212,125 CYC:14286\n\
FA2D  60        RTS                             A:AA X:55 Y:74 P:27 SP:F9 PPU:218,125 CYC:14288\n\
E446  A9 FF     LDA #$FF                        A:AA X:55 Y:74 P:27 SP:FB PPU:236,125 CYC:14294\n\
E448  9D 00 06  STA $0600,X @ 0655 = AA         A:FF X:55 Y:74 P:A5 SP:FB PPU:242,125 CYC:14296\n\
E44B  85 01     STA $01 = FF                    A:FF X:55 Y:74 P:A5 SP:FB PPU:257,125 CYC:14301\n\
E44D  24 01     BIT $01 = FF                    A:FF X:55 Y:74 P:A5 SP:FB PPU:266,125 CYC:14304\n\
E44F  38        SEC                             A:FF X:55 Y:74 P:E5 SP:FB PPU:275,125 CYC:14307\n\
E450  FE 00 06  INC $0600,X @ 0655 = FF         A:FF X:55 Y:74 P:E5 SP:FB PPU:281,125 CYC:14309\n\
E453  D0 0D     BNE $E462                       A:FF X:55 Y:74 P:67 SP:FB PPU:302,125 CYC:14316\n\
E455  30 0B     BMI $E462                       A:FF X:55 Y:74 P:67 SP:FB PPU:308,125 CYC:14318\n\
E457  50 09     BVC $E462                       A:FF X:55 Y:74 P:67 SP:FB PPU:314,125 CYC:14320\n\
E459  90 07     BCC $E462                       A:FF X:55 Y:74 P:67 SP:FB PPU:320,125 CYC:14322\n\
E45B  BD 00 06  LDA $0600,X @ 0655 = 00         A:FF X:55 Y:74 P:67 SP:FB PPU:326,125 CYC:14324\n\
E45E  C9 00     CMP #$00                        A:00 X:55 Y:74 P:67 SP:FB PPU:338,125 CYC:14328\n\
E460  F0 04     BEQ $E466                       A:00 X:55 Y:74 P:67 SP:FB PPU:  3,126 CYC:14330\n\
E466  A9 7F     LDA #$7F                        A:00 X:55 Y:74 P:67 SP:FB PPU: 12,126 CYC:14333\n\
E468  9D 00 06  STA $0600,X @ 0655 = 00         A:7F X:55 Y:74 P:65 SP:FB PPU: 18,126 CYC:14335\n\
E46B  B8        CLV                             A:7F X:55 Y:74 P:65 SP:FB PPU: 33,126 CYC:14340\n\
E46C  18        CLC                             A:7F X:55 Y:74 P:25 SP:FB PPU: 39,126 CYC:14342\n\
E46D  FE 00 06  INC $0600,X @ 0655 = 7F         A:7F X:55 Y:74 P:24 SP:FB PPU: 45,126 CYC:14344\n\
E470  F0 0D     BEQ $E47F                       A:7F X:55 Y:74 P:A4 SP:FB PPU: 66,126 CYC:14351\n\
E472  10 0B     BPL $E47F                       A:7F X:55 Y:74 P:A4 SP:FB PPU: 72,126 CYC:14353\n\
E474  70 09     BVS $E47F                       A:7F X:55 Y:74 P:A4 SP:FB PPU: 78,126 CYC:14355\n\
E476  B0 07     BCS $E47F                       A:7F X:55 Y:74 P:A4 SP:FB PPU: 84,126 CYC:14357\n\
E478  BD 00 06  LDA $0600,X @ 0655 = 80         A:7F X:55 Y:74 P:A4 SP:FB PPU: 90,126 CYC:14359\n\
E47B  C9 80     CMP #$80                        A:80 X:55 Y:74 P:A4 SP:FB PPU:102,126 CYC:14363\n\
E47D  F0 04     BEQ $E483                       A:80 X:55 Y:74 P:27 SP:FB PPU:108,126 CYC:14365\n\
E483  A9 00     LDA #$00                        A:80 X:55 Y:74 P:27 SP:FB PPU:117,126 CYC:14368\n\
E485  9D 00 06  STA $0600,X @ 0655 = 80         A:00 X:55 Y:74 P:27 SP:FB PPU:123,126 CYC:14370\n\
E488  24 01     BIT $01 = FF                    A:00 X:55 Y:74 P:27 SP:FB PPU:138,126 CYC:14375\n\
E48A  38        SEC                             A:00 X:55 Y:74 P:E7 SP:FB PPU:147,126 CYC:14378\n\
E48B  DE 00 06  DEC $0600,X @ 0655 = 00         A:00 X:55 Y:74 P:E7 SP:FB PPU:153,126 CYC:14380\n\
E48E  F0 0D     BEQ $E49D                       A:00 X:55 Y:74 P:E5 SP:FB PPU:174,126 CYC:14387\n\
E490  10 0B     BPL $E49D                       A:00 X:55 Y:74 P:E5 SP:FB PPU:180,126 CYC:14389\n\
E492  50 09     BVC $E49D                       A:00 X:55 Y:74 P:E5 SP:FB PPU:186,126 CYC:14391\n\
E494  90 07     BCC $E49D                       A:00 X:55 Y:74 P:E5 SP:FB PPU:192,126 CYC:14393\n\
E496  BD 00 06  LDA $0600,X @ 0655 = FF         A:00 X:55 Y:74 P:E5 SP:FB PPU:198,126 CYC:14395\n\
E499  C9 FF     CMP #$FF                        A:FF X:55 Y:74 P:E5 SP:FB PPU:210,126 CYC:14399\n\
E49B  F0 04     BEQ $E4A1                       A:FF X:55 Y:74 P:67 SP:FB PPU:216,126 CYC:14401\n\
E4A1  A9 80     LDA #$80                        A:FF X:55 Y:74 P:67 SP:FB PPU:225,126 CYC:14404\n\
E4A3  9D 00 06  STA $0600,X @ 0655 = FF         A:80 X:55 Y:74 P:E5 SP:FB PPU:231,126 CYC:14406\n\
E4A6  B8        CLV                             A:80 X:55 Y:74 P:E5 SP:FB PPU:246,126 CYC:14411\n\
E4A7  18        CLC                             A:80 X:55 Y:74 P:A5 SP:FB PPU:252,126 CYC:14413\n\
E4A8  DE 00 06  DEC $0600,X @ 0655 = 80         A:80 X:55 Y:74 P:A4 SP:FB PPU:258,126 CYC:14415\n\
E4AB  F0 0D     BEQ $E4BA                       A:80 X:55 Y:74 P:24 SP:FB PPU:279,126 CYC:14422\n\
E4AD  30 0B     BMI $E4BA                       A:80 X:55 Y:74 P:24 SP:FB PPU:285,126 CYC:14424\n\
E4AF  70 09     BVS $E4BA                       A:80 X:55 Y:74 P:24 SP:FB PPU:291,126 CYC:14426\n\
E4B1  B0 07     BCS $E4BA                       A:80 X:55 Y:74 P:24 SP:FB PPU:297,126 CYC:14428\n\
E4B3  BD 00 06  LDA $0600,X @ 0655 = 7F         A:80 X:55 Y:74 P:24 SP:FB PPU:303,126 CYC:14430\n\
E4B6  C9 7F     CMP #$7F                        A:7F X:55 Y:74 P:24 SP:FB PPU:315,126 CYC:14434\n\
E4B8  F0 04     BEQ $E4BE                       A:7F X:55 Y:74 P:27 SP:FB PPU:321,126 CYC:14436\n\
E4BE  A9 01     LDA #$01                        A:7F X:55 Y:74 P:27 SP:FB PPU:330,126 CYC:14439\n\
E4C0  9D 00 06  STA $0600,X @ 0655 = 7F         A:01 X:55 Y:74 P:25 SP:FB PPU:336,126 CYC:14441\n\
E4C3  DE 00 06  DEC $0600,X @ 0655 = 01         A:01 X:55 Y:74 P:25 SP:FB PPU: 10,127 CYC:14446\n\
E4C6  F0 04     BEQ $E4CC                       A:01 X:55 Y:74 P:27 SP:FB PPU: 31,127 CYC:14453\n\
E4CC  A9 33     LDA #$33                        A:01 X:55 Y:74 P:27 SP:FB PPU: 40,127 CYC:14456\n\
E4CE  8D 78 06  STA $0678 = 7F                  A:33 X:55 Y:74 P:25 SP:FB PPU: 46,127 CYC:14458\n\
E4D1  A9 44     LDA #$44                        A:33 X:55 Y:74 P:25 SP:FB PPU: 58,127 CYC:14462\n\
E4D3  A0 78     LDY #$78                        A:44 X:55 Y:74 P:25 SP:FB PPU: 64,127 CYC:14464\n\
E4D5  A2 00     LDX #$00                        A:44 X:55 Y:78 P:25 SP:FB PPU: 70,127 CYC:14466\n\
E4D7  38        SEC                             A:44 X:00 Y:78 P:27 SP:FB PPU: 76,127 CYC:14468\n\
E4D8  24 01     BIT $01 = FF                    A:44 X:00 Y:78 P:27 SP:FB PPU: 82,127 CYC:14470\n\
E4DA  BE 00 06  LDX $0600,Y @ 0678 = 33         A:44 X:00 Y:78 P:E5 SP:FB PPU: 91,127 CYC:14473\n\
E4DD  90 12     BCC $E4F1                       A:44 X:33 Y:78 P:65 SP:FB PPU:103,127 CYC:14477\n\
E4DF  50 10     BVC $E4F1                       A:44 X:33 Y:78 P:65 SP:FB PPU:109,127 CYC:14479\n\
E4E1  30 0E     BMI $E4F1                       A:44 X:33 Y:78 P:65 SP:FB PPU:115,127 CYC:14481\n\
E4E3  F0 0C     BEQ $E4F1                       A:44 X:33 Y:78 P:65 SP:FB PPU:121,127 CYC:14483\n\
E4E5  E0 33     CPX #$33                        A:44 X:33 Y:78 P:65 SP:FB PPU:127,127 CYC:14485\n\
E4E7  D0 08     BNE $E4F1                       A:44 X:33 Y:78 P:67 SP:FB PPU:133,127 CYC:14487\n\
E4E9  C0 78     CPY #$78                        A:44 X:33 Y:78 P:67 SP:FB PPU:139,127 CYC:14489\n\
E4EB  D0 04     BNE $E4F1                       A:44 X:33 Y:78 P:67 SP:FB PPU:145,127 CYC:14491\n\
E4ED  C9 44     CMP #$44                        A:44 X:33 Y:78 P:67 SP:FB PPU:151,127 CYC:14493\n\
E4EF  F0 04     BEQ $E4F5                       A:44 X:33 Y:78 P:67 SP:FB PPU:157,127 CYC:14495\n\
E4F5  A9 97     LDA #$97                        A:44 X:33 Y:78 P:67 SP:FB PPU:166,127 CYC:14498\n\
E4F7  8D 7F 06  STA $067F = 00                  A:97 X:33 Y:78 P:E5 SP:FB PPU:172,127 CYC:14500\n\
E4FA  A9 47     LDA #$47                        A:97 X:33 Y:78 P:E5 SP:FB PPU:184,127 CYC:14504\n\
E4FC  A0 FF     LDY #$FF                        A:47 X:33 Y:78 P:65 SP:FB PPU:190,127 CYC:14506\n\
E4FE  A2 00     LDX #$00                        A:47 X:33 Y:FF P:E5 SP:FB PPU:196,127 CYC:14508\n\
E500  18        CLC                             A:47 X:00 Y:FF P:67 SP:FB PPU:202,127 CYC:14510\n\
E501  B8        CLV                             A:47 X:00 Y:FF P:66 SP:FB PPU:208,127 CYC:14512\n\
E502  BE 80 05  LDX $0580,Y @ 067F = 97         A:47 X:00 Y:FF P:26 SP:FB PPU:214,127 CYC:14514\n\
E505  B0 12     BCS $E519                       A:47 X:97 Y:FF P:A4 SP:FB PPU:229,127 CYC:14519\n\
E507  70 10     BVS $E519                       A:47 X:97 Y:FF P:A4 SP:FB PPU:235,127 CYC:14521\n\
E509  10 0E     BPL $E519                       A:47 X:97 Y:FF P:A4 SP:FB PPU:241,127 CYC:14523\n\
E50B  F0 0C     BEQ $E519                       A:47 X:97 Y:FF P:A4 SP:FB PPU:247,127 CYC:14525\n\
E50D  E0 97     CPX #$97                        A:47 X:97 Y:FF P:A4 SP:FB PPU:253,127 CYC:14527\n\
E50F  D0 08     BNE $E519                       A:47 X:97 Y:FF P:27 SP:FB PPU:259,127 CYC:14529\n\
E511  C0 FF     CPY #$FF                        A:47 X:97 Y:FF P:27 SP:FB PPU:265,127 CYC:14531\n\
E513  D0 04     BNE $E519                       A:47 X:97 Y:FF P:27 SP:FB PPU:271,127 CYC:14533\n\
E515  C9 47     CMP #$47                        A:47 X:97 Y:FF P:27 SP:FB PPU:277,127 CYC:14535\n\
E517  F0 04     BEQ $E51D                       A:47 X:97 Y:FF P:27 SP:FB PPU:283,127 CYC:14537\n\
E51D  60        RTS                             A:47 X:97 Y:FF P:27 SP:FB PPU:292,127 CYC:14540\n\
C62F  20 A3 C6  JSR $C6A3                       A:47 X:97 Y:FF P:27 SP:FD PPU:310,127 CYC:14546\n\
C6A3  A0 4E     LDY #$4E                        A:47 X:97 Y:FF P:27 SP:FB PPU:328,127 CYC:14552\n\
C6A5  A9 FF     LDA #$FF                        A:47 X:97 Y:4E P:25 SP:FB PPU:334,127 CYC:14554\n\
C6A7  85 01     STA $01 = FF                    A:FF X:97 Y:4E P:A5 SP:FB PPU:340,127 CYC:14556\n\
C6A9  20 B0 C6  JSR $C6B0                       A:FF X:97 Y:4E P:A5 SP:FB PPU:  8,128 CYC:14559\n\
C6B0  A9 FF     LDA #$FF                        A:FF X:97 Y:4E P:A5 SP:F9 PPU: 26,128 CYC:14565\n\
C6B2  48        PHA                             A:FF X:97 Y:4E P:A5 SP:F9 PPU: 32,128 CYC:14567\n\
C6B3  A9 AA     LDA #$AA                        A:FF X:97 Y:4E P:A5 SP:F8 PPU: 41,128 CYC:14570\n\
C6B5  D0 05     BNE $C6BC                       A:AA X:97 Y:4E P:A5 SP:F8 PPU: 47,128 CYC:14572\n\
C6BC  28        PLP                             A:AA X:97 Y:4E P:A5 SP:F8 PPU: 56,128 CYC:14575\n\
C6BD  04 A9    *NOP $A9 = 00                    A:AA X:97 Y:4E P:EF SP:F9 PPU: 68,128 CYC:14579\n\
C6BF  44 A9    *NOP $A9 = 00                    A:AA X:97 Y:4E P:EF SP:F9 PPU: 77,128 CYC:14582\n\
C6C1  64 A9    *NOP $A9 = 00                    A:AA X:97 Y:4E P:EF SP:F9 PPU: 86,128 CYC:14585\n\
C6C3  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F9 PPU: 95,128 CYC:14588\n\
C6C4  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F9 PPU:101,128 CYC:14590\n\
C6C5  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F9 PPU:107,128 CYC:14592\n\
C6C6  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F9 PPU:113,128 CYC:14594\n\
C6C7  08        PHP                             A:AA X:97 Y:4E P:EF SP:F9 PPU:119,128 CYC:14596\n\
C6C8  48        PHA                             A:AA X:97 Y:4E P:EF SP:F8 PPU:128,128 CYC:14599\n\
C6C9  0C A9 A9 *NOP $A9A9 = A9                  A:AA X:97 Y:4E P:EF SP:F7 PPU:137,128 CYC:14602\n\
C6CC  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F7 PPU:149,128 CYC:14606\n\
C6CD  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F7 PPU:155,128 CYC:14608\n\
C6CE  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F7 PPU:161,128 CYC:14610\n\
C6CF  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F7 PPU:167,128 CYC:14612\n\
C6D0  08        PHP                             A:AA X:97 Y:4E P:EF SP:F7 PPU:173,128 CYC:14614\n\
C6D1  48        PHA                             A:AA X:97 Y:4E P:EF SP:F6 PPU:182,128 CYC:14617\n\
C6D2  14 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:191,128 CYC:14620\n\
C6D4  34 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:203,128 CYC:14624\n\
C6D6  54 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:215,128 CYC:14628\n\
C6D8  74 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:227,128 CYC:14632\n\
C6DA  D4 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:239,128 CYC:14636\n\
C6DC  F4 A9    *NOP $A9,X @ 40 = 00             A:AA X:97 Y:4E P:EF SP:F5 PPU:251,128 CYC:14640\n\
C6DE  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F5 PPU:263,128 CYC:14644\n\
C6DF  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F5 PPU:269,128 CYC:14646\n\
C6E0  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F5 PPU:275,128 CYC:14648\n\
C6E1  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F5 PPU:281,128 CYC:14650\n\
C6E2  08        PHP                             A:AA X:97 Y:4E P:EF SP:F5 PPU:287,128 CYC:14652\n\
C6E3  48        PHA                             A:AA X:97 Y:4E P:EF SP:F4 PPU:296,128 CYC:14655\n\
C6E4  1A       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:305,128 CYC:14658\n\
C6E5  3A       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:311,128 CYC:14660\n\
C6E6  5A       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:317,128 CYC:14662\n\
C6E7  7A       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:323,128 CYC:14664\n\
C6E8  DA       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:329,128 CYC:14666\n\
C6E9  FA       *NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:335,128 CYC:14668\n\
C6EA  80 89    *NOP #$89                        A:AA X:97 Y:4E P:EF SP:F3 PPU:  0,129 CYC:14670\n\
C6EC  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU:  6,129 CYC:14672\n\
C6ED  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU: 12,129 CYC:14674\n\
C6EE  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU: 18,129 CYC:14676\n\
C6EF  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F3 PPU: 24,129 CYC:14678\n\
C6F0  08        PHP                             A:AA X:97 Y:4E P:EF SP:F3 PPU: 30,129 CYC:14680\n\
C6F1  48        PHA                             A:AA X:97 Y:4E P:EF SP:F2 PPU: 39,129 CYC:14683\n\
C6F2  1C A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU: 48,129 CYC:14686\n\
C6F5  3C A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU: 63,129 CYC:14691\n\
C6F8  5C A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU: 78,129 CYC:14696\n\
C6FB  7C A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU: 93,129 CYC:14701\n\
C6FE  DC A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU:108,129 CYC:14706\n\
C701  FC A9 A9 *NOP $A9A9,X @ AA40 = 00         A:AA X:97 Y:4E P:EF SP:F1 PPU:123,129 CYC:14711\n\
C704  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F1 PPU:138,129 CYC:14716\n\
C705  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F1 PPU:144,129 CYC:14718\n\
C706  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F1 PPU:150,129 CYC:14720\n\
C707  EA        NOP                             A:AA X:97 Y:4E P:EF SP:F1 PPU:156,129 CYC:14722\n\
C708  08        PHP                             A:AA X:97 Y:4E P:EF SP:F1 PPU:162,129 CYC:14724\n\
C709  48        PHA                             A:AA X:97 Y:4E P:EF SP:F0 PPU:171,129 CYC:14727\n\
C70A  A2 05     LDX #$05                        A:AA X:97 Y:4E P:EF SP:EF PPU:180,129 CYC:14730\n\
C70C  68        PLA                             A:AA X:05 Y:4E P:6D SP:EF PPU:186,129 CYC:14732\n\
C70D  C9 55     CMP #$55                        A:AA X:05 Y:4E P:ED SP:F0 PPU:198,129 CYC:14736\n\
C70F  F0 0A     BEQ $C71B                       A:AA X:05 Y:4E P:6D SP:F0 PPU:204,129 CYC:14738\n\
C711  C9 AA     CMP #$AA                        A:AA X:05 Y:4E P:6D SP:F0 PPU:210,129 CYC:14740\n\
C713  F0 06     BEQ $C71B                       A:AA X:05 Y:4E P:6F SP:F0 PPU:216,129 CYC:14742\n\
C71B  68        PLA                             A:AA X:05 Y:4E P:6F SP:F0 PPU:225,129 CYC:14745\n\
C71C  29 CB     AND #$CB                        A:FF X:05 Y:4E P:ED SP:F1 PPU:237,129 CYC:14749\n\
C71E  C9 00     CMP #$00                        A:CB X:05 Y:4E P:ED SP:F1 PPU:243,129 CYC:14751\n\
C720  F0 06     BEQ $C728                       A:CB X:05 Y:4E P:ED SP:F1 PPU:249,129 CYC:14753\n\
C722  C9 CB     CMP #$CB                        A:CB X:05 Y:4E P:ED SP:F1 PPU:255,129 CYC:14755\n\
C724  F0 02     BEQ $C728                       A:CB X:05 Y:4E P:6F SP:F1 PPU:261,129 CYC:14757\n\
C728  C8        INY                             A:CB X:05 Y:4E P:6F SP:F1 PPU:270,129 CYC:14760\n\
C729  CA        DEX                             A:CB X:05 Y:4F P:6D SP:F1 PPU:276,129 CYC:14762\n\
C72A  D0 E0     BNE $C70C                       A:CB X:04 Y:4F P:6D SP:F1 PPU:282,129 CYC:14764\n\
C70C  68        PLA                             A:CB X:04 Y:4F P:6D SP:F1 PPU:291,129 CYC:14767\n\
C70D  C9 55     CMP #$55                        A:AA X:04 Y:4F P:ED SP:F2 PPU:303,129 CYC:14771\n\
C70F  F0 0A     BEQ $C71B                       A:AA X:04 Y:4F P:6D SP:F2 PPU:309,129 CYC:14773\n\
C711  C9 AA     CMP #$AA                        A:AA X:04 Y:4F P:6D SP:F2 PPU:315,129 CYC:14775\n\
C713  F0 06     BEQ $C71B                       A:AA X:04 Y:4F P:6F SP:F2 PPU:321,129 CYC:14777\n\
C71B  68        PLA                             A:AA X:04 Y:4F P:6F SP:F2 PPU:330,129 CYC:14780\n\
C71C  29 CB     AND #$CB                        A:FF X:04 Y:4F P:ED SP:F3 PPU:  1,130 CYC:14784\n\
C71E  C9 00     CMP #$00                        A:CB X:04 Y:4F P:ED SP:F3 PPU:  7,130 CYC:14786\n\
C720  F0 06     BEQ $C728                       A:CB X:04 Y:4F P:ED SP:F3 PPU: 13,130 CYC:14788\n\
C722  C9 CB     CMP #$CB                        A:CB X:04 Y:4F P:ED SP:F3 PPU: 19,130 CYC:14790\n\
C724  F0 02     BEQ $C728                       A:CB X:04 Y:4F P:6F SP:F3 PPU: 25,130 CYC:14792\n\
C728  C8        INY                             A:CB X:04 Y:4F P:6F SP:F3 PPU: 34,130 CYC:14795\n\
C729  CA        DEX                             A:CB X:04 Y:50 P:6D SP:F3 PPU: 40,130 CYC:14797\n\
C72A  D0 E0     BNE $C70C                       A:CB X:03 Y:50 P:6D SP:F3 PPU: 46,130 CYC:14799\n\
C70C  68        PLA                             A:CB X:03 Y:50 P:6D SP:F3 PPU: 55,130 CYC:14802\n\
C70D  C9 55     CMP #$55                        A:AA X:03 Y:50 P:ED SP:F4 PPU: 67,130 CYC:14806\n\
C70F  F0 0A     BEQ $C71B                       A:AA X:03 Y:50 P:6D SP:F4 PPU: 73,130 CYC:14808\n\
C711  C9 AA     CMP #$AA                        A:AA X:03 Y:50 P:6D SP:F4 PPU: 79,130 CYC:14810\n\
C713  F0 06     BEQ $C71B                       A:AA X:03 Y:50 P:6F SP:F4 PPU: 85,130 CYC:14812\n\
C71B  68        PLA                             A:AA X:03 Y:50 P:6F SP:F4 PPU: 94,130 CYC:14815\n\
C71C  29 CB     AND #$CB                        A:FF X:03 Y:50 P:ED SP:F5 PPU:106,130 CYC:14819\n\
C71E  C9 00     CMP #$00                        A:CB X:03 Y:50 P:ED SP:F5 PPU:112,130 CYC:14821\n\
C720  F0 06     BEQ $C728                       A:CB X:03 Y:50 P:ED SP:F5 PPU:118,130 CYC:14823\n\
C722  C9 CB     CMP #$CB                        A:CB X:03 Y:50 P:ED SP:F5 PPU:124,130 CYC:14825\n\
C724  F0 02     BEQ $C728                       A:CB X:03 Y:50 P:6F SP:F5 PPU:130,130 CYC:14827\n\
C728  C8        INY                             A:CB X:03 Y:50 P:6F SP:F5 PPU:139,130 CYC:14830\n\
C729  CA        DEX                             A:CB X:03 Y:51 P:6D SP:F5 PPU:145,130 CYC:14832\n\
C72A  D0 E0     BNE $C70C                       A:CB X:02 Y:51 P:6D SP:F5 PPU:151,130 CYC:14834\n\
C70C  68        PLA                             A:CB X:02 Y:51 P:6D SP:F5 PPU:160,130 CYC:14837\n\
C70D  C9 55     CMP #$55                        A:AA X:02 Y:51 P:ED SP:F6 PPU:172,130 CYC:14841\n\
C70F  F0 0A     BEQ $C71B                       A:AA X:02 Y:51 P:6D SP:F6 PPU:178,130 CYC:14843\n\
C711  C9 AA     CMP #$AA                        A:AA X:02 Y:51 P:6D SP:F6 PPU:184,130 CYC:14845\n\
C713  F0 06     BEQ $C71B                       A:AA X:02 Y:51 P:6F SP:F6 PPU:190,130 CYC:14847\n\
C71B  68        PLA                             A:AA X:02 Y:51 P:6F SP:F6 PPU:199,130 CYC:14850\n\
C71C  29 CB     AND #$CB                        A:FF X:02 Y:51 P:ED SP:F7 PPU:211,130 CYC:14854\n\
C71E  C9 00     CMP #$00                        A:CB X:02 Y:51 P:ED SP:F7 PPU:217,130 CYC:14856\n\
C720  F0 06     BEQ $C728                       A:CB X:02 Y:51 P:ED SP:F7 PPU:223,130 CYC:14858\n\
C722  C9 CB     CMP #$CB                        A:CB X:02 Y:51 P:ED SP:F7 PPU:229,130 CYC:14860\n\
C724  F0 02     BEQ $C728                       A:CB X:02 Y:51 P:6F SP:F7 PPU:235,130 CYC:14862\n\
C728  C8        INY                             A:CB X:02 Y:51 P:6F SP:F7 PPU:244,130 CYC:14865\n\
C729  CA        DEX                             A:CB X:02 Y:52 P:6D SP:F7 PPU:250,130 CYC:14867\n\
C72A  D0 E0     BNE $C70C                       A:CB X:01 Y:52 P:6D SP:F7 PPU:256,130 CYC:14869\n\
C70C  68        PLA                             A:CB X:01 Y:52 P:6D SP:F7 PPU:265,130 CYC:14872\n\
C70D  C9 55     CMP #$55                        A:AA X:01 Y:52 P:ED SP:F8 PPU:277,130 CYC:14876\n\
C70F  F0 0A     BEQ $C71B                       A:AA X:01 Y:52 P:6D SP:F8 PPU:283,130 CYC:14878\n\
C711  C9 AA     CMP #$AA                        A:AA X:01 Y:52 P:6D SP:F8 PPU:289,130 CYC:14880\n\
C713  F0 06     BEQ $C71B                       A:AA X:01 Y:52 P:6F SP:F8 PPU:295,130 CYC:14882\n\
C71B  68        PLA                             A:AA X:01 Y:52 P:6F SP:F8 PPU:304,130 CYC:14885\n\
C71C  29 CB     AND #$CB                        A:FF X:01 Y:52 P:ED SP:F9 PPU:316,130 CYC:14889\n\
C71E  C9 00     CMP #$00                        A:CB X:01 Y:52 P:ED SP:F9 PPU:322,130 CYC:14891\n\
C720  F0 06     BEQ $C728                       A:CB X:01 Y:52 P:ED SP:F9 PPU:328,130 CYC:14893\n\
C722  C9 CB     CMP #$CB                        A:CB X:01 Y:52 P:ED SP:F9 PPU:334,130 CYC:14895\n\
C724  F0 02     BEQ $C728                       A:CB X:01 Y:52 P:6F SP:F9 PPU:340,130 CYC:14897\n\
C728  C8        INY                             A:CB X:01 Y:52 P:6F SP:F9 PPU:  8,131 CYC:14900\n\
C729  CA        DEX                             A:CB X:01 Y:53 P:6D SP:F9 PPU: 14,131 CYC:14902\n\
C72A  D0 E0     BNE $C70C                       A:CB X:00 Y:53 P:6F SP:F9 PPU: 20,131 CYC:14904\n\
C72C  60        RTS                             A:CB X:00 Y:53 P:6F SP:F9 PPU: 26,131 CYC:14906\n\
C6AC  20 B7 C6  JSR $C6B7                       A:CB X:00 Y:53 P:6F SP:FB PPU: 44,131 CYC:14912\n\
C6B7  A9 34     LDA #$34                        A:CB X:00 Y:53 P:6F SP:F9 PPU: 62,131 CYC:14918\n\
C6B9  48        PHA                             A:34 X:00 Y:53 P:6D SP:F9 PPU: 68,131 CYC:14920\n\
C6BA  A9 55     LDA #$55                        A:34 X:00 Y:53 P:6D SP:F8 PPU: 77,131 CYC:14923\n\
C6BC  28        PLP                             A:55 X:00 Y:53 P:6D SP:F8 PPU: 83,131 CYC:14925\n\
C6BD  04 A9    *NOP $A9 = 00                    A:55 X:00 Y:53 P:24 SP:F9 PPU: 95,131 CYC:14929\n\
C6BF  44 A9    *NOP $A9 = 00                    A:55 X:00 Y:53 P:24 SP:F9 PPU:104,131 CYC:14932\n\
C6C1  64 A9    *NOP $A9 = 00                    A:55 X:00 Y:53 P:24 SP:F9 PPU:113,131 CYC:14935\n\
C6C3  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F9 PPU:122,131 CYC:14938\n\
C6C4  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F9 PPU:128,131 CYC:14940\n\
C6C5  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F9 PPU:134,131 CYC:14942\n\
C6C6  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F9 PPU:140,131 CYC:14944\n\
C6C7  08        PHP                             A:55 X:00 Y:53 P:24 SP:F9 PPU:146,131 CYC:14946\n\
C6C8  48        PHA                             A:55 X:00 Y:53 P:24 SP:F8 PPU:155,131 CYC:14949\n\
C6C9  0C A9 A9 *NOP $A9A9 = A9                  A:55 X:00 Y:53 P:24 SP:F7 PPU:164,131 CYC:14952\n\
C6CC  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F7 PPU:176,131 CYC:14956\n\
C6CD  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F7 PPU:182,131 CYC:14958\n\
C6CE  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F7 PPU:188,131 CYC:14960\n\
C6CF  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F7 PPU:194,131 CYC:14962\n\
C6D0  08        PHP                             A:55 X:00 Y:53 P:24 SP:F7 PPU:200,131 CYC:14964\n\
C6D1  48        PHA                             A:55 X:00 Y:53 P:24 SP:F6 PPU:209,131 CYC:14967\n\
C6D2  14 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:218,131 CYC:14970\n\
C6D4  34 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:230,131 CYC:14974\n\
C6D6  54 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:242,131 CYC:14978\n\
C6D8  74 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:254,131 CYC:14982\n\
C6DA  D4 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:266,131 CYC:14986\n\
C6DC  F4 A9    *NOP $A9,X @ A9 = 00             A:55 X:00 Y:53 P:24 SP:F5 PPU:278,131 CYC:14990\n\
C6DE  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F5 PPU:290,131 CYC:14994\n\
C6DF  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F5 PPU:296,131 CYC:14996\n\
C6E0  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F5 PPU:302,131 CYC:14998\n\
C6E1  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F5 PPU:308,131 CYC:15000\n\
C6E2  08        PHP                             A:55 X:00 Y:53 P:24 SP:F5 PPU:314,131 CYC:15002\n\
C6E3  48        PHA                             A:55 X:00 Y:53 P:24 SP:F4 PPU:323,131 CYC:15005\n\
C6E4  1A       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU:332,131 CYC:15008\n\
C6E5  3A       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU:338,131 CYC:15010\n\
C6E6  5A       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU:  3,132 CYC:15012\n\
C6E7  7A       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU:  9,132 CYC:15014\n\
C6E8  DA       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 15,132 CYC:15016\n\
C6E9  FA       *NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 21,132 CYC:15018\n\
C6EA  80 89    *NOP #$89                        A:55 X:00 Y:53 P:24 SP:F3 PPU: 27,132 CYC:15020\n\
C6EC  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 33,132 CYC:15022\n\
C6ED  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 39,132 CYC:15024\n\
C6EE  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 45,132 CYC:15026\n\
C6EF  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 51,132 CYC:15028\n\
C6F0  08        PHP                             A:55 X:00 Y:53 P:24 SP:F3 PPU: 57,132 CYC:15030\n\
C6F1  48        PHA                             A:55 X:00 Y:53 P:24 SP:F2 PPU: 66,132 CYC:15033\n\
C6F2  1C A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU: 75,132 CYC:15036\n\
C6F5  3C A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU: 87,132 CYC:15040\n\
C6F8  5C A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU: 99,132 CYC:15044\n\
C6FB  7C A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU:111,132 CYC:15048\n\
C6FE  DC A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU:123,132 CYC:15052\n\
C701  FC A9 A9 *NOP $A9A9,X @ A9A9 = A9         A:55 X:00 Y:53 P:24 SP:F1 PPU:135,132 CYC:15056\n\
C704  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F1 PPU:147,132 CYC:15060\n\
C705  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F1 PPU:153,132 CYC:15062\n\
C706  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F1 PPU:159,132 CYC:15064\n\
C707  EA        NOP                             A:55 X:00 Y:53 P:24 SP:F1 PPU:165,132 CYC:15066\n\
C708  08        PHP                             A:55 X:00 Y:53 P:24 SP:F1 PPU:171,132 CYC:15068\n\
C709  48        PHA                             A:55 X:00 Y:53 P:24 SP:F0 PPU:180,132 CYC:15071\n\
C70A  A2 05     LDX #$05                        A:55 X:00 Y:53 P:24 SP:EF PPU:189,132 CYC:15074\n\
C70C  68        PLA                             A:55 X:05 Y:53 P:24 SP:EF PPU:195,132 CYC:15076\n\
C70D  C9 55     CMP #$55                        A:55 X:05 Y:53 P:24 SP:F0 PPU:207,132 CYC:15080\n\
C70F  F0 0A     BEQ $C71B                       A:55 X:05 Y:53 P:27 SP:F0 PPU:213,132 CYC:15082\n\
C71B  68        PLA                             A:55 X:05 Y:53 P:27 SP:F0 PPU:222,132 CYC:15085\n\
C71C  29 CB     AND #$CB                        A:34 X:05 Y:53 P:25 SP:F1 PPU:234,132 CYC:15089\n\
C71E  C9 00     CMP #$00                        A:00 X:05 Y:53 P:27 SP:F1 PPU:240,132 CYC:15091\n\
C720  F0 06     BEQ $C728                       A:00 X:05 Y:53 P:27 SP:F1 PPU:246,132 CYC:15093\n\
C728  C8        INY                             A:00 X:05 Y:53 P:27 SP:F1 PPU:255,132 CYC:15096\n\
C729  CA        DEX                             A:00 X:05 Y:54 P:25 SP:F1 PPU:261,132 CYC:15098\n\
C72A  D0 E0     BNE $C70C                       A:00 X:04 Y:54 P:25 SP:F1 PPU:267,132 CYC:15100\n\
C70C  68        PLA                             A:00 X:04 Y:54 P:25 SP:F1 PPU:276,132 CYC:15103\n\
C70D  C9 55     CMP #$55                        A:55 X:04 Y:54 P:25 SP:F2 PPU:288,132 CYC:15107\n\
C70F  F0 0A     BEQ $C71B                       A:55 X:04 Y:54 P:27 SP:F2 PPU:294,132 CYC:15109\n\
C71B  68        PLA                             A:55 X:04 Y:54 P:27 SP:F2 PPU:303,132 CYC:15112\n\
C71C  29 CB     AND #$CB                        A:34 X:04 Y:54 P:25 SP:F3 PPU:315,132 CYC:15116\n\
C71E  C9 00     CMP #$00                        A:00 X:04 Y:54 P:27 SP:F3 PPU:321,132 CYC:15118\n\
C720  F0 06     BEQ $C728                       A:00 X:04 Y:54 P:27 SP:F3 PPU:327,132 CYC:15120\n\
C728  C8        INY                             A:00 X:04 Y:54 P:27 SP:F3 PPU:336,132 CYC:15123\n\
C729  CA        DEX                             A:00 X:04 Y:55 P:25 SP:F3 PPU:  1,133 CYC:15125\n\
C72A  D0 E0     BNE $C70C                       A:00 X:03 Y:55 P:25 SP:F3 PPU:  7,133 CYC:15127\n\
C70C  68        PLA                             A:00 X:03 Y:55 P:25 SP:F3 PPU: 16,133 CYC:15130\n\
C70D  C9 55     CMP #$55                        A:55 X:03 Y:55 P:25 SP:F4 PPU: 28,133 CYC:15134\n\
C70F  F0 0A     BEQ $C71B                       A:55 X:03 Y:55 P:27 SP:F4 PPU: 34,133 CYC:15136\n\
C71B  68        PLA                             A:55 X:03 Y:55 P:27 SP:F4 PPU: 43,133 CYC:15139\n\
C71C  29 CB     AND #$CB                        A:34 X:03 Y:55 P:25 SP:F5 PPU: 55,133 CYC:15143\n\
C71E  C9 00     CMP #$00                        A:00 X:03 Y:55 P:27 SP:F5 PPU: 61,133 CYC:15145\n\
C720  F0 06     BEQ $C728                       A:00 X:03 Y:55 P:27 SP:F5 PPU: 67,133 CYC:15147\n\
C728  C8        INY                             A:00 X:03 Y:55 P:27 SP:F5 PPU: 76,133 CYC:15150\n\
C729  CA        DEX                             A:00 X:03 Y:56 P:25 SP:F5 PPU: 82,133 CYC:15152\n\
C72A  D0 E0     BNE $C70C                       A:00 X:02 Y:56 P:25 SP:F5 PPU: 88,133 CYC:15154\n\
C70C  68        PLA                             A:00 X:02 Y:56 P:25 SP:F5 PPU: 97,133 CYC:15157\n\
C70D  C9 55     CMP #$55                        A:55 X:02 Y:56 P:25 SP:F6 PPU:109,133 CYC:15161\n\
C70F  F0 0A     BEQ $C71B                       A:55 X:02 Y:56 P:27 SP:F6 PPU:115,133 CYC:15163\n\
C71B  68        PLA                             A:55 X:02 Y:56 P:27 SP:F6 PPU:124,133 CYC:15166\n\
C71C  29 CB     AND #$CB                        A:34 X:02 Y:56 P:25 SP:F7 PPU:136,133 CYC:15170\n\
C71E  C9 00     CMP #$00                        A:00 X:02 Y:56 P:27 SP:F7 PPU:142,133 CYC:15172\n\
C720  F0 06     BEQ $C728                       A:00 X:02 Y:56 P:27 SP:F7 PPU:148,133 CYC:15174\n\
C728  C8        INY                             A:00 X:02 Y:56 P:27 SP:F7 PPU:157,133 CYC:15177\n\
C729  CA        DEX                             A:00 X:02 Y:57 P:25 SP:F7 PPU:163,133 CYC:15179\n\
C72A  D0 E0     BNE $C70C                       A:00 X:01 Y:57 P:25 SP:F7 PPU:169,133 CYC:15181\n\
C70C  68        PLA                             A:00 X:01 Y:57 P:25 SP:F7 PPU:178,133 CYC:15184\n\
C70D  C9 55     CMP #$55                        A:55 X:01 Y:57 P:25 SP:F8 PPU:190,133 CYC:15188\n\
C70F  F0 0A     BEQ $C71B                       A:55 X:01 Y:57 P:27 SP:F8 PPU:196,133 CYC:15190\n\
C71B  68        PLA                             A:55 X:01 Y:57 P:27 SP:F8 PPU:205,133 CYC:15193\n\
C71C  29 CB     AND #$CB                        A:34 X:01 Y:57 P:25 SP:F9 PPU:217,133 CYC:15197\n\
C71E  C9 00     CMP #$00                        A:00 X:01 Y:57 P:27 SP:F9 PPU:223,133 CYC:15199\n\
C720  F0 06     BEQ $C728                       A:00 X:01 Y:57 P:27 SP:F9 PPU:229,133 CYC:15201\n\
C728  C8        INY                             A:00 X:01 Y:57 P:27 SP:F9 PPU:238,133 CYC:15204\n\
C729  CA        DEX                             A:00 X:01 Y:58 P:25 SP:F9 PPU:244,133 CYC:15206\n\
C72A  D0 E0     BNE $C70C                       A:00 X:00 Y:58 P:27 SP:F9 PPU:250,133 CYC:15208\n\
C72C  60        RTS                             A:00 X:00 Y:58 P:27 SP:F9 PPU:256,133 CYC:15210\n\
C6AF  60        RTS                             A:00 X:00 Y:58 P:27 SP:FB PPU:274,133 CYC:15216\n\
C632  20 1E E5  JSR $E51E                       A:00 X:00 Y:58 P:27 SP:FD PPU:292,133 CYC:15222\n\
E51E  A9 55     LDA #$55                        A:00 X:00 Y:58 P:27 SP:FB PPU:310,133 CYC:15228\n\
E520  8D 80 05  STA $0580 = 00                  A:55 X:00 Y:58 P:25 SP:FB PPU:316,133 CYC:15230\n\
E523  A9 AA     LDA #$AA                        A:55 X:00 Y:58 P:25 SP:FB PPU:328,133 CYC:15234\n\
E525  8D 32 04  STA $0432 = 00                  A:AA X:00 Y:58 P:A5 SP:FB PPU:334,133 CYC:15236\n\
E528  A9 80     LDA #$80                        A:AA X:00 Y:58 P:A5 SP:FB PPU:  5,134 CYC:15240\n\
E52A  85 43     STA $43 = 00                    A:80 X:00 Y:58 P:A5 SP:FB PPU: 11,134 CYC:15242\n\
E52C  A9 05     LDA #$05                        A:80 X:00 Y:58 P:A5 SP:FB PPU: 20,134 CYC:15245\n\
E52E  85 44     STA $44 = 00                    A:05 X:00 Y:58 P:25 SP:FB PPU: 26,134 CYC:15247\n\
E530  A9 32     LDA #$32                        A:05 X:00 Y:58 P:25 SP:FB PPU: 35,134 CYC:15250\n\
E532  85 45     STA $45 = 00                    A:32 X:00 Y:58 P:25 SP:FB PPU: 41,134 CYC:15252\n\
E534  A9 04     LDA #$04                        A:32 X:00 Y:58 P:25 SP:FB PPU: 50,134 CYC:15255\n\
E536  85 46     STA $46 = 00                    A:04 X:00 Y:58 P:25 SP:FB PPU: 56,134 CYC:15257\n\
E538  A2 03     LDX #$03                        A:04 X:00 Y:58 P:25 SP:FB PPU: 65,134 CYC:15260\n\
E53A  A0 77     LDY #$77                        A:04 X:03 Y:58 P:25 SP:FB PPU: 71,134 CYC:15262\n\
E53C  A9 FF     LDA #$FF                        A:04 X:03 Y:77 P:25 SP:FB PPU: 77,134 CYC:15264\n\
E53E  85 01     STA $01 = FF                    A:FF X:03 Y:77 P:A5 SP:FB PPU: 83,134 CYC:15266\n\
E540  24 01     BIT $01 = FF                    A:FF X:03 Y:77 P:A5 SP:FB PPU: 92,134 CYC:15269\n\
E542  38        SEC                             A:FF X:03 Y:77 P:E5 SP:FB PPU:101,134 CYC:15272\n\
E543  A9 00     LDA #$00                        A:FF X:03 Y:77 P:E5 SP:FB PPU:107,134 CYC:15274\n\
E545  A3 40    *LAX ($40,X) @ 43 = 0580 = 55    A:00 X:03 Y:77 P:67 SP:FB PPU:113,134 CYC:15276\n\
E547  EA        NOP                             A:55 X:55 Y:77 P:65 SP:FB PPU:131,134 CYC:15282\n\
E548  EA        NOP                             A:55 X:55 Y:77 P:65 SP:FB PPU:137,134 CYC:15284\n\
E549  EA        NOP                             A:55 X:55 Y:77 P:65 SP:FB PPU:143,134 CYC:15286\n\
E54A  EA        NOP                             A:55 X:55 Y:77 P:65 SP:FB PPU:149,134 CYC:15288\n\
E54B  F0 12     BEQ $E55F                       A:55 X:55 Y:77 P:65 SP:FB PPU:155,134 CYC:15290\n\
E54D  30 10     BMI $E55F                       A:55 X:55 Y:77 P:65 SP:FB PPU:161,134 CYC:15292\n\
E54F  50 0E     BVC $E55F                       A:55 X:55 Y:77 P:65 SP:FB PPU:167,134 CYC:15294\n\
E551  90 0C     BCC $E55F                       A:55 X:55 Y:77 P:65 SP:FB PPU:173,134 CYC:15296\n\
E553  C9 55     CMP #$55                        A:55 X:55 Y:77 P:65 SP:FB PPU:179,134 CYC:15298\n\
E555  D0 08     BNE $E55F                       A:55 X:55 Y:77 P:67 SP:FB PPU:185,134 CYC:15300\n\
E557  E0 55     CPX #$55                        A:55 X:55 Y:77 P:67 SP:FB PPU:191,134 CYC:15302\n\
E559  D0 04     BNE $E55F                       A:55 X:55 Y:77 P:67 SP:FB PPU:197,134 CYC:15304\n\
E55B  C0 77     CPY #$77                        A:55 X:55 Y:77 P:67 SP:FB PPU:203,134 CYC:15306\n\
E55D  F0 04     BEQ $E563                       A:55 X:55 Y:77 P:67 SP:FB PPU:209,134 CYC:15308\n\
E563  A2 05     LDX #$05                        A:55 X:55 Y:77 P:67 SP:FB PPU:218,134 CYC:15311\n\
E565  A0 33     LDY #$33                        A:55 X:05 Y:77 P:65 SP:FB PPU:224,134 CYC:15313\n\
E567  B8        CLV                             A:55 X:05 Y:33 P:65 SP:FB PPU:230,134 CYC:15315\n\
E568  18        CLC                             A:55 X:05 Y:33 P:25 SP:FB PPU:236,134 CYC:15317\n\
E569  A9 00     LDA #$00                        A:55 X:05 Y:33 P:24 SP:FB PPU:242,134 CYC:15319\n\
E56B  A3 40    *LAX ($40,X) @ 45 = 0432 = AA    A:00 X:05 Y:33 P:26 SP:FB PPU:248,134 CYC:15321\n\
E56D  EA        NOP                             A:AA X:AA Y:33 P:A4 SP:FB PPU:266,134 CYC:15327\n\
E56E  EA        NOP                             A:AA X:AA Y:33 P:A4 SP:FB PPU:272,134 CYC:15329\n\
E56F  EA        NOP                             A:AA X:AA Y:33 P:A4 SP:FB PPU:278,134 CYC:15331\n\
E570  EA        NOP                             A:AA X:AA Y:33 P:A4 SP:FB PPU:284,134 CYC:15333\n\
E571  F0 12     BEQ $E585                       A:AA X:AA Y:33 P:A4 SP:FB PPU:290,134 CYC:15335\n\
E573  10 10     BPL $E585                       A:AA X:AA Y:33 P:A4 SP:FB PPU:296,134 CYC:15337\n\
E575  70 0E     BVS $E585                       A:AA X:AA Y:33 P:A4 SP:FB PPU:302,134 CYC:15339\n\
E577  B0 0C     BCS $E585                       A:AA X:AA Y:33 P:A4 SP:FB PPU:308,134 CYC:15341\n\
E579  C9 AA     CMP #$AA                        A:AA X:AA Y:33 P:A4 SP:FB PPU:314,134 CYC:15343\n\
E57B  D0 08     BNE $E585                       A:AA X:AA Y:33 P:27 SP:FB PPU:320,134 CYC:15345\n\
E57D  E0 AA     CPX #$AA                        A:AA X:AA Y:33 P:27 SP:FB PPU:326,134 CYC:15347\n\
E57F  D0 04     BNE $E585                       A:AA X:AA Y:33 P:27 SP:FB PPU:332,134 CYC:15349\n\
E581  C0 33     CPY #$33                        A:AA X:AA Y:33 P:27 SP:FB PPU:338,134 CYC:15351\n\
E583  F0 04     BEQ $E589                       A:AA X:AA Y:33 P:27 SP:FB PPU:  3,135 CYC:15353\n\
E589  A9 87     LDA #$87                        A:AA X:AA Y:33 P:27 SP:FB PPU: 12,135 CYC:15356\n\
E58B  85 67     STA $67 = 00                    A:87 X:AA Y:33 P:A5 SP:FB PPU: 18,135 CYC:15358\n\
E58D  A9 32     LDA #$32                        A:87 X:AA Y:33 P:A5 SP:FB PPU: 27,135 CYC:15361\n\
E58F  85 68     STA $68 = 00                    A:32 X:AA Y:33 P:25 SP:FB PPU: 33,135 CYC:15363\n\
E591  A0 57     LDY #$57                        A:32 X:AA Y:33 P:25 SP:FB PPU: 42,135 CYC:15366\n\
E593  24 01     BIT $01 = FF                    A:32 X:AA Y:57 P:25 SP:FB PPU: 48,135 CYC:15368\n\
E595  38        SEC                             A:32 X:AA Y:57 P:E5 SP:FB PPU: 57,135 CYC:15371\n\
E596  A9 00     LDA #$00                        A:32 X:AA Y:57 P:E5 SP:FB PPU: 63,135 CYC:15373\n\
E598  A7 67    *LAX $67 = 87                    A:00 X:AA Y:57 P:67 SP:FB PPU: 69,135 CYC:15375\n\
E59A  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 78,135 CYC:15378\n\
E59B  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 84,135 CYC:15380\n\
E59C  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 90,135 CYC:15382\n\
E59D  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 96,135 CYC:15384\n\
E59E  F0 12     BEQ $E5B2                       A:87 X:87 Y:57 P:E5 SP:FB PPU:102,135 CYC:15386\n\
E5A0  10 10     BPL $E5B2                       A:87 X:87 Y:57 P:E5 SP:FB PPU:108,135 CYC:15388\n\
E5A2  50 0E     BVC $E5B2                       A:87 X:87 Y:57 P:E5 SP:FB PPU:114,135 CYC:15390\n\
E5A4  90 0C     BCC $E5B2                       A:87 X:87 Y:57 P:E5 SP:FB PPU:120,135 CYC:15392\n\
E5A6  C9 87     CMP #$87                        A:87 X:87 Y:57 P:E5 SP:FB PPU:126,135 CYC:15394\n\
E5A8  D0 08     BNE $E5B2                       A:87 X:87 Y:57 P:67 SP:FB PPU:132,135 CYC:15396\n\
E5AA  E0 87     CPX #$87                        A:87 X:87 Y:57 P:67 SP:FB PPU:138,135 CYC:15398\n\
E5AC  D0 04     BNE $E5B2                       A:87 X:87 Y:57 P:67 SP:FB PPU:144,135 CYC:15400\n\
E5AE  C0 57     CPY #$57                        A:87 X:87 Y:57 P:67 SP:FB PPU:150,135 CYC:15402\n\
E5B0  F0 04     BEQ $E5B6                       A:87 X:87 Y:57 P:67 SP:FB PPU:156,135 CYC:15404\n\
E5B6  A0 53     LDY #$53                        A:87 X:87 Y:57 P:67 SP:FB PPU:165,135 CYC:15407\n\
E5B8  B8        CLV                             A:87 X:87 Y:53 P:65 SP:FB PPU:171,135 CYC:15409\n\
E5B9  18        CLC                             A:87 X:87 Y:53 P:25 SP:FB PPU:177,135 CYC:15411\n\
E5BA  A9 00     LDA #$00                        A:87 X:87 Y:53 P:24 SP:FB PPU:183,135 CYC:15413\n\
E5BC  A7 68    *LAX $68 = 32                    A:00 X:87 Y:53 P:26 SP:FB PPU:189,135 CYC:15415\n\
E5BE  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:198,135 CYC:15418\n\
E5BF  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:204,135 CYC:15420\n\
E5C0  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:210,135 CYC:15422\n\
E5C1  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:216,135 CYC:15424\n\
E5C2  F0 12     BEQ $E5D6                       A:32 X:32 Y:53 P:24 SP:FB PPU:222,135 CYC:15426\n\
E5C4  30 10     BMI $E5D6                       A:32 X:32 Y:53 P:24 SP:FB PPU:228,135 CYC:15428\n\
E5C6  70 0E     BVS $E5D6                       A:32 X:32 Y:53 P:24 SP:FB PPU:234,135 CYC:15430\n\
E5C8  B0 0C     BCS $E5D6                       A:32 X:32 Y:53 P:24 SP:FB PPU:240,135 CYC:15432\n\
E5CA  C9 32     CMP #$32                        A:32 X:32 Y:53 P:24 SP:FB PPU:246,135 CYC:15434\n\
E5CC  D0 08     BNE $E5D6                       A:32 X:32 Y:53 P:27 SP:FB PPU:252,135 CYC:15436\n\
E5CE  E0 32     CPX #$32                        A:32 X:32 Y:53 P:27 SP:FB PPU:258,135 CYC:15438\n\
E5D0  D0 04     BNE $E5D6                       A:32 X:32 Y:53 P:27 SP:FB PPU:264,135 CYC:15440\n\
E5D2  C0 53     CPY #$53                        A:32 X:32 Y:53 P:27 SP:FB PPU:270,135 CYC:15442\n\
E5D4  F0 04     BEQ $E5DA                       A:32 X:32 Y:53 P:27 SP:FB PPU:276,135 CYC:15444\n\
E5DA  A9 87     LDA #$87                        A:32 X:32 Y:53 P:27 SP:FB PPU:285,135 CYC:15447\n\
E5DC  8D 77 05  STA $0577 = 00                  A:87 X:32 Y:53 P:A5 SP:FB PPU:291,135 CYC:15449\n\
E5DF  A9 32     LDA #$32                        A:87 X:32 Y:53 P:A5 SP:FB PPU:303,135 CYC:15453\n\
E5E1  8D 78 05  STA $0578 = 00                  A:32 X:32 Y:53 P:25 SP:FB PPU:309,135 CYC:15455\n\
E5E4  A0 57     LDY #$57                        A:32 X:32 Y:53 P:25 SP:FB PPU:321,135 CYC:15459\n\
E5E6  24 01     BIT $01 = FF                    A:32 X:32 Y:57 P:25 SP:FB PPU:327,135 CYC:15461\n\
E5E8  38        SEC                             A:32 X:32 Y:57 P:E5 SP:FB PPU:336,135 CYC:15464\n\
E5E9  A9 00     LDA #$00                        A:32 X:32 Y:57 P:E5 SP:FB PPU:  1,136 CYC:15466\n\
E5EB  AF 77 05 *LAX $0577 = 87                  A:00 X:32 Y:57 P:67 SP:FB PPU:  7,136 CYC:15468\n\
E5EE  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 19,136 CYC:15472\n\
E5EF  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 25,136 CYC:15474\n\
E5F0  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 31,136 CYC:15476\n\
E5F1  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU: 37,136 CYC:15478\n\
E5F2  F0 12     BEQ $E606                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 43,136 CYC:15480\n\
E5F4  10 10     BPL $E606                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 49,136 CYC:15482\n\
E5F6  50 0E     BVC $E606                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 55,136 CYC:15484\n\
E5F8  90 0C     BCC $E606                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 61,136 CYC:15486\n\
E5FA  C9 87     CMP #$87                        A:87 X:87 Y:57 P:E5 SP:FB PPU: 67,136 CYC:15488\n\
E5FC  D0 08     BNE $E606                       A:87 X:87 Y:57 P:67 SP:FB PPU: 73,136 CYC:15490\n\
E5FE  E0 87     CPX #$87                        A:87 X:87 Y:57 P:67 SP:FB PPU: 79,136 CYC:15492\n\
E600  D0 04     BNE $E606                       A:87 X:87 Y:57 P:67 SP:FB PPU: 85,136 CYC:15494\n\
E602  C0 57     CPY #$57                        A:87 X:87 Y:57 P:67 SP:FB PPU: 91,136 CYC:15496\n\
E604  F0 04     BEQ $E60A                       A:87 X:87 Y:57 P:67 SP:FB PPU: 97,136 CYC:15498\n\
E60A  A0 53     LDY #$53                        A:87 X:87 Y:57 P:67 SP:FB PPU:106,136 CYC:15501\n\
E60C  B8        CLV                             A:87 X:87 Y:53 P:65 SP:FB PPU:112,136 CYC:15503\n\
E60D  18        CLC                             A:87 X:87 Y:53 P:25 SP:FB PPU:118,136 CYC:15505\n\
E60E  A9 00     LDA #$00                        A:87 X:87 Y:53 P:24 SP:FB PPU:124,136 CYC:15507\n\
E610  AF 78 05 *LAX $0578 = 32                  A:00 X:87 Y:53 P:26 SP:FB PPU:130,136 CYC:15509\n\
E613  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:142,136 CYC:15513\n\
E614  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:148,136 CYC:15515\n\
E615  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:154,136 CYC:15517\n\
E616  EA        NOP                             A:32 X:32 Y:53 P:24 SP:FB PPU:160,136 CYC:15519\n\
E617  F0 12     BEQ $E62B                       A:32 X:32 Y:53 P:24 SP:FB PPU:166,136 CYC:15521\n\
E619  30 10     BMI $E62B                       A:32 X:32 Y:53 P:24 SP:FB PPU:172,136 CYC:15523\n\
E61B  70 0E     BVS $E62B                       A:32 X:32 Y:53 P:24 SP:FB PPU:178,136 CYC:15525\n\
E61D  B0 0C     BCS $E62B                       A:32 X:32 Y:53 P:24 SP:FB PPU:184,136 CYC:15527\n\
E61F  C9 32     CMP #$32                        A:32 X:32 Y:53 P:24 SP:FB PPU:190,136 CYC:15529\n\
E621  D0 08     BNE $E62B                       A:32 X:32 Y:53 P:27 SP:FB PPU:196,136 CYC:15531\n\
E623  E0 32     CPX #$32                        A:32 X:32 Y:53 P:27 SP:FB PPU:202,136 CYC:15533\n\
E625  D0 04     BNE $E62B                       A:32 X:32 Y:53 P:27 SP:FB PPU:208,136 CYC:15535\n\
E627  C0 53     CPY #$53                        A:32 X:32 Y:53 P:27 SP:FB PPU:214,136 CYC:15537\n\
E629  F0 04     BEQ $E62F                       A:32 X:32 Y:53 P:27 SP:FB PPU:220,136 CYC:15539\n\
E62F  A9 FF     LDA #$FF                        A:32 X:32 Y:53 P:27 SP:FB PPU:229,136 CYC:15542\n\
E631  85 43     STA $43 = 80                    A:FF X:32 Y:53 P:A5 SP:FB PPU:235,136 CYC:15544\n\
E633  A9 04     LDA #$04                        A:FF X:32 Y:53 P:A5 SP:FB PPU:244,136 CYC:15547\n\
E635  85 44     STA $44 = 05                    A:04 X:32 Y:53 P:25 SP:FB PPU:250,136 CYC:15549\n\
E637  A9 32     LDA #$32                        A:04 X:32 Y:53 P:25 SP:FB PPU:259,136 CYC:15552\n\
E639  85 45     STA $45 = 32                    A:32 X:32 Y:53 P:25 SP:FB PPU:265,136 CYC:15554\n\
E63B  A9 04     LDA #$04                        A:32 X:32 Y:53 P:25 SP:FB PPU:274,136 CYC:15557\n\
E63D  85 46     STA $46 = 04                    A:04 X:32 Y:53 P:25 SP:FB PPU:280,136 CYC:15559\n\
E63F  A9 55     LDA #$55                        A:04 X:32 Y:53 P:25 SP:FB PPU:289,136 CYC:15562\n\
E641  8D 80 05  STA $0580 = 55                  A:55 X:32 Y:53 P:25 SP:FB PPU:295,136 CYC:15564\n\
E644  A9 AA     LDA #$AA                        A:55 X:32 Y:53 P:25 SP:FB PPU:307,136 CYC:15568\n\
E646  8D 32 04  STA $0432 = AA                  A:AA X:32 Y:53 P:A5 SP:FB PPU:313,136 CYC:15570\n\
E649  A2 03     LDX #$03                        A:AA X:32 Y:53 P:A5 SP:FB PPU:325,136 CYC:15574\n\
E64B  A0 81     LDY #$81                        A:AA X:03 Y:53 P:25 SP:FB PPU:331,136 CYC:15576\n\
E64D  24 01     BIT $01 = FF                    A:AA X:03 Y:81 P:A5 SP:FB PPU:337,136 CYC:15578\n\
E64F  38        SEC                             A:AA X:03 Y:81 P:E5 SP:FB PPU:  5,137 CYC:15581\n\
E650  A9 00     LDA #$00                        A:AA X:03 Y:81 P:E5 SP:FB PPU: 11,137 CYC:15583\n\
E652  B3 43    *LAX ($43),Y = 04FF @ 0580 = 55  A:00 X:03 Y:81 P:67 SP:FB PPU: 17,137 CYC:15585\n\
E654  EA        NOP                             A:55 X:55 Y:81 P:65 SP:FB PPU: 35,137 CYC:15591\n\
E655  EA        NOP                             A:55 X:55 Y:81 P:65 SP:FB PPU: 41,137 CYC:15593\n\
E656  EA        NOP                             A:55 X:55 Y:81 P:65 SP:FB PPU: 47,137 CYC:15595\n\
E657  EA        NOP                             A:55 X:55 Y:81 P:65 SP:FB PPU: 53,137 CYC:15597\n\
E658  F0 12     BEQ $E66C                       A:55 X:55 Y:81 P:65 SP:FB PPU: 59,137 CYC:15599\n\
E65A  30 10     BMI $E66C                       A:55 X:55 Y:81 P:65 SP:FB PPU: 65,137 CYC:15601\n\
E65C  50 0E     BVC $E66C                       A:55 X:55 Y:81 P:65 SP:FB PPU: 71,137 CYC:15603\n\
E65E  90 0C     BCC $E66C                       A:55 X:55 Y:81 P:65 SP:FB PPU: 77,137 CYC:15605\n\
E660  C9 55     CMP #$55                        A:55 X:55 Y:81 P:65 SP:FB PPU: 83,137 CYC:15607\n\
E662  D0 08     BNE $E66C                       A:55 X:55 Y:81 P:67 SP:FB PPU: 89,137 CYC:15609\n\
E664  E0 55     CPX #$55                        A:55 X:55 Y:81 P:67 SP:FB PPU: 95,137 CYC:15611\n\
E666  D0 04     BNE $E66C                       A:55 X:55 Y:81 P:67 SP:FB PPU:101,137 CYC:15613\n\
E668  C0 81     CPY #$81                        A:55 X:55 Y:81 P:67 SP:FB PPU:107,137 CYC:15615\n\
E66A  F0 04     BEQ $E670                       A:55 X:55 Y:81 P:67 SP:FB PPU:113,137 CYC:15617\n\
E670  A2 05     LDX #$05                        A:55 X:55 Y:81 P:67 SP:FB PPU:122,137 CYC:15620\n\
E672  A0 00     LDY #$00                        A:55 X:05 Y:81 P:65 SP:FB PPU:128,137 CYC:15622\n\
E674  B8        CLV                             A:55 X:05 Y:00 P:67 SP:FB PPU:134,137 CYC:15624\n\
E675  18        CLC                             A:55 X:05 Y:00 P:27 SP:FB PPU:140,137 CYC:15626\n\
E676  A9 00     LDA #$00                        A:55 X:05 Y:00 P:26 SP:FB PPU:146,137 CYC:15628\n\
E678  B3 45    *LAX ($45),Y = 0432 @ 0432 = AA  A:00 X:05 Y:00 P:26 SP:FB PPU:152,137 CYC:15630\n\
E67A  EA        NOP                             A:AA X:AA Y:00 P:A4 SP:FB PPU:167,137 CYC:15635\n\
E67B  EA        NOP                             A:AA X:AA Y:00 P:A4 SP:FB PPU:173,137 CYC:15637\n\
E67C  EA        NOP                             A:AA X:AA Y:00 P:A4 SP:FB PPU:179,137 CYC:15639\n\
E67D  EA        NOP                             A:AA X:AA Y:00 P:A4 SP:FB PPU:185,137 CYC:15641\n\
E67E  F0 12     BEQ $E692                       A:AA X:AA Y:00 P:A4 SP:FB PPU:191,137 CYC:15643\n\
E680  10 10     BPL $E692                       A:AA X:AA Y:00 P:A4 SP:FB PPU:197,137 CYC:15645\n\
E682  70 0E     BVS $E692                       A:AA X:AA Y:00 P:A4 SP:FB PPU:203,137 CYC:15647\n\
E684  B0 0C     BCS $E692                       A:AA X:AA Y:00 P:A4 SP:FB PPU:209,137 CYC:15649\n\
E686  C9 AA     CMP #$AA                        A:AA X:AA Y:00 P:A4 SP:FB PPU:215,137 CYC:15651\n\
E688  D0 08     BNE $E692                       A:AA X:AA Y:00 P:27 SP:FB PPU:221,137 CYC:15653\n\
E68A  E0 AA     CPX #$AA                        A:AA X:AA Y:00 P:27 SP:FB PPU:227,137 CYC:15655\n\
E68C  D0 04     BNE $E692                       A:AA X:AA Y:00 P:27 SP:FB PPU:233,137 CYC:15657\n\
E68E  C0 00     CPY #$00                        A:AA X:AA Y:00 P:27 SP:FB PPU:239,137 CYC:15659\n\
E690  F0 04     BEQ $E696                       A:AA X:AA Y:00 P:27 SP:FB PPU:245,137 CYC:15661\n\
E696  A9 87     LDA #$87                        A:AA X:AA Y:00 P:27 SP:FB PPU:254,137 CYC:15664\n\
E698  85 67     STA $67 = 87                    A:87 X:AA Y:00 P:A5 SP:FB PPU:260,137 CYC:15666\n\
E69A  A9 32     LDA #$32                        A:87 X:AA Y:00 P:A5 SP:FB PPU:269,137 CYC:15669\n\
E69C  85 68     STA $68 = 32                    A:32 X:AA Y:00 P:25 SP:FB PPU:275,137 CYC:15671\n\
E69E  A0 57     LDY #$57                        A:32 X:AA Y:00 P:25 SP:FB PPU:284,137 CYC:15674\n\
E6A0  24 01     BIT $01 = FF                    A:32 X:AA Y:57 P:25 SP:FB PPU:290,137 CYC:15676\n\
E6A2  38        SEC                             A:32 X:AA Y:57 P:E5 SP:FB PPU:299,137 CYC:15679\n\
E6A3  A9 00     LDA #$00                        A:32 X:AA Y:57 P:E5 SP:FB PPU:305,137 CYC:15681\n\
E6A5  B7 10    *LAX $10,Y @ 67 = 87             A:00 X:AA Y:57 P:67 SP:FB PPU:311,137 CYC:15683\n\
E6A7  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU:323,137 CYC:15687\n\
E6A8  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU:329,137 CYC:15689\n\
E6A9  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU:335,137 CYC:15691\n\
E6AA  EA        NOP                             A:87 X:87 Y:57 P:E5 SP:FB PPU:  0,138 CYC:15693\n\
E6AB  F0 12     BEQ $E6BF                       A:87 X:87 Y:57 P:E5 SP:FB PPU:  6,138 CYC:15695\n\
E6AD  10 10     BPL $E6BF                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 12,138 CYC:15697\n\
E6AF  50 0E     BVC $E6BF                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 18,138 CYC:15699\n\
E6B1  90 0C     BCC $E6BF                       A:87 X:87 Y:57 P:E5 SP:FB PPU: 24,138 CYC:15701\n\
E6B3  C9 87     CMP #$87                        A:87 X:87 Y:57 P:E5 SP:FB PPU: 30,138 CYC:15703\n\
E6B5  D0 08     BNE $E6BF                       A:87 X:87 Y:57 P:67 SP:FB PPU: 36,138 CYC:15705\n\
E6B7  E0 87     CPX #$87                        A:87 X:87 Y:57 P:67 SP:FB PPU: 42,138 CYC:15707\n\
E6B9  D0 04     BNE $E6BF                       A:87 X:87 Y:57 P:67 SP:FB PPU: 48,138 CYC:15709\n\
E6BB  C0 57     CPY #$57                        A:87 X:87 Y:57 P:67 SP:FB PPU: 54,138 CYC:15711\n\
E6BD  F0 04     BEQ $E6C3                       A:87 X:87 Y:57 P:67 SP:FB PPU: 60,138 CYC:15713\n\
E6C3  A0 FF     LDY #$FF                        A:87 X:87 Y:57 P:67 SP:FB PPU: 69,138 CYC:15716\n\
E6C5  B8        CLV                             A:87 X:87 Y:FF P:E5 SP:FB PPU: 75,138 CYC:15718\n\
E6C6  18        CLC                             A:87 X:87 Y:FF P:A5 SP:FB PPU: 81,138 CYC:15720\n\
E6C7  A9 00     LDA #$00                        A:87 X:87 Y:FF P:A4 SP:FB PPU: 87,138 CYC:15722\n\
E6C9  B7 69    *LAX $69,Y @ 68 = 32             A:00 X:87 Y:FF P:26 SP:FB PPU: 93,138 CYC:15724\n\
E6CB  EA        NOP                             A:32 X:32 Y:FF P:24 SP:FB PPU:105,138 CYC:15728\n\
E6CC  EA        NOP                             A:32 X:32 Y:FF P:24 SP:FB PPU:111,138 CYC:15730\n\
E6CD  EA        NOP                             A:32 X:32 Y:FF P:24 SP:FB PPU:117,138 CYC:15732\n\
E6CE  EA        NOP                             A:32 X:32 Y:FF P:24 SP:FB PPU:123,138 CYC:15734\n\
E6CF  F0 12     BEQ $E6E3                       A:32 X:32 Y:FF P:24 SP:FB PPU:129,138 CYC:15736\n\
E6D1  30 10     BMI $E6E3                       A:32 X:32 Y:FF P:24 SP:FB PPU:135,138 CYC:15738\n\
E6D3  70 0E     BVS $E6E3                       A:32 X:32 Y:FF P:24 SP:FB PPU:141,138 CYC:15740\n\
E6D5  B0 0C     BCS $E6E3                       A:32 X:32 Y:FF P:24 SP:FB PPU:147,138 CYC:15742\n\
E6D7  C9 32     CMP #$32                        A:32 X:32 Y:FF P:24 SP:FB PPU:153,138 CYC:15744\n\
E6D9  D0 08     BNE $E6E3                       A:32 X:32 Y:FF P:27 SP:FB PPU:159,138 CYC:15746\n\
E6DB  E0 32     CPX #$32                        A:32 X:32 Y:FF P:27 SP:FB PPU:165,138 CYC:15748\n\
E6DD  D0 04     BNE $E6E3                       A:32 X:32 Y:FF P:27 SP:FB PPU:171,138 CYC:15750\n\
E6DF  C0 FF     CPY #$FF                        A:32 X:32 Y:FF P:27 SP:FB PPU:177,138 CYC:15752\n\
E6E1  F0 04     BEQ $E6E7                       A:32 X:32 Y:FF P:27 SP:FB PPU:183,138 CYC:15754\n\
E6E7  A9 87     LDA #$87                        A:32 X:32 Y:FF P:27 SP:FB PPU:192,138 CYC:15757\n\
E6E9  8D 87 05  STA $0587 = 00                  A:87 X:32 Y:FF P:A5 SP:FB PPU:198,138 CYC:15759\n\
E6EC  A9 32     LDA #$32                        A:87 X:32 Y:FF P:A5 SP:FB PPU:210,138 CYC:15763\n\
E6EE  8D 88 05  STA $0588 = 00                  A:32 X:32 Y:FF P:25 SP:FB PPU:216,138 CYC:15765\n\
E6F1  A0 30     LDY #$30                        A:32 X:32 Y:FF P:25 SP:FB PPU:228,138 CYC:15769\n\
E6F3  24 01     BIT $01 = FF                    A:32 X:32 Y:30 P:25 SP:FB PPU:234,138 CYC:15771\n\
E6F5  38        SEC                             A:32 X:32 Y:30 P:E5 SP:FB PPU:243,138 CYC:15774\n\
E6F6  A9 00     LDA #$00                        A:32 X:32 Y:30 P:E5 SP:FB PPU:249,138 CYC:15776\n\
E6F8  BF 57 05 *LAX $0557,Y @ 0587 = 87         A:00 X:32 Y:30 P:67 SP:FB PPU:255,138 CYC:15778\n\
E6FB  EA        NOP                             A:87 X:87 Y:30 P:E5 SP:FB PPU:267,138 CYC:15782\n\
E6FC  EA        NOP                             A:87 X:87 Y:30 P:E5 SP:FB PPU:273,138 CYC:15784\n\
E6FD  EA        NOP                             A:87 X:87 Y:30 P:E5 SP:FB PPU:279,138 CYC:15786\n\
E6FE  EA        NOP                             A:87 X:87 Y:30 P:E5 SP:FB PPU:285,138 CYC:15788\n\
E6FF  F0 12     BEQ $E713                       A:87 X:87 Y:30 P:E5 SP:FB PPU:291,138 CYC:15790\n\
E701  10 10     BPL $E713                       A:87 X:87 Y:30 P:E5 SP:FB PPU:297,138 CYC:15792\n\
E703  50 0E     BVC $E713                       A:87 X:87 Y:30 P:E5 SP:FB PPU:303,138 CYC:15794\n\
E705  90 0C     BCC $E713                       A:87 X:87 Y:30 P:E5 SP:FB PPU:309,138 CYC:15796\n\
E707  C9 87     CMP #$87                        A:87 X:87 Y:30 P:E5 SP:FB PPU:315,138 CYC:15798\n\
E709  D0 08     BNE $E713                       A:87 X:87 Y:30 P:67 SP:FB PPU:321,138 CYC:15800\n\
E70B  E0 87     CPX #$87                        A:87 X:87 Y:30 P:67 SP:FB PPU:327,138 CYC:15802\n\
E70D  D0 04     BNE $E713                       A:87 X:87 Y:30 P:67 SP:FB PPU:333,138 CYC:15804\n\
E70F  C0 30     CPY #$30                        A:87 X:87 Y:30 P:67 SP:FB PPU:339,138 CYC:15806\n\
E711  F0 04     BEQ $E717                       A:87 X:87 Y:30 P:67 SP:FB PPU:  4,139 CYC:15808\n\
E717  A0 40     LDY #$40                        A:87 X:87 Y:30 P:67 SP:FB PPU: 13,139 CYC:15811\n\
E719  B8        CLV                             A:87 X:87 Y:40 P:65 SP:FB PPU: 19,139 CYC:15813\n\
E71A  18        CLC                             A:87 X:87 Y:40 P:25 SP:FB PPU: 25,139 CYC:15815\n\
E71B  A9 00     LDA #$00                        A:87 X:87 Y:40 P:24 SP:FB PPU: 31,139 CYC:15817\n\
E71D  BF 48 05 *LAX $0548,Y @ 0588 = 32         A:00 X:87 Y:40 P:26 SP:FB PPU: 37,139 CYC:15819\n\
E720  EA        NOP                             A:32 X:32 Y:40 P:24 SP:FB PPU: 49,139 CYC:15823\n\
E721  EA        NOP                             A:32 X:32 Y:40 P:24 SP:FB PPU: 55,139 CYC:15825\n\
E722  EA        NOP                             A:32 X:32 Y:40 P:24 SP:FB PPU: 61,139 CYC:15827\n\
E723  EA        NOP                             A:32 X:32 Y:40 P:24 SP:FB PPU: 67,139 CYC:15829\n\
E724  F0 12     BEQ $E738                       A:32 X:32 Y:40 P:24 SP:FB PPU: 73,139 CYC:15831\n\
E726  30 10     BMI $E738                       A:32 X:32 Y:40 P:24 SP:FB PPU: 79,139 CYC:15833\n\
E728  70 0E     BVS $E738                       A:32 X:32 Y:40 P:24 SP:FB PPU: 85,139 CYC:15835\n\
E72A  B0 0C     BCS $E738                       A:32 X:32 Y:40 P:24 SP:FB PPU: 91,139 CYC:15837\n\
E72C  C9 32     CMP #$32                        A:32 X:32 Y:40 P:24 SP:FB PPU: 97,139 CYC:15839\n\
E72E  D0 08     BNE $E738                       A:32 X:32 Y:40 P:27 SP:FB PPU:103,139 CYC:15841\n\
E730  E0 32     CPX #$32                        A:32 X:32 Y:40 P:27 SP:FB PPU:109,139 CYC:15843\n\
E732  D0 04     BNE $E738                       A:32 X:32 Y:40 P:27 SP:FB PPU:115,139 CYC:15845\n\
E734  C0 40     CPY #$40                        A:32 X:32 Y:40 P:27 SP:FB PPU:121,139 CYC:15847\n\
E736  F0 04     BEQ $E73C                       A:32 X:32 Y:40 P:27 SP:FB PPU:127,139 CYC:15849\n\
E73C  60        RTS                             A:32 X:32 Y:40 P:27 SP:FB PPU:136,139 CYC:15852\n\
C635  20 3D E7  JSR $E73D                       A:32 X:32 Y:40 P:27 SP:FD PPU:154,139 CYC:15858\n\
E73D  A9 C0     LDA #$C0                        A:32 X:32 Y:40 P:27 SP:FB PPU:172,139 CYC:15864\n\
E73F  85 01     STA $01 = FF                    A:C0 X:32 Y:40 P:A5 SP:FB PPU:178,139 CYC:15866\n\
E741  A9 00     LDA #$00                        A:C0 X:32 Y:40 P:A5 SP:FB PPU:187,139 CYC:15869\n\
E743  8D 89 04  STA $0489 = 00                  A:00 X:32 Y:40 P:27 SP:FB PPU:193,139 CYC:15871\n\
E746  A9 89     LDA #$89                        A:00 X:32 Y:40 P:27 SP:FB PPU:205,139 CYC:15875\n\
E748  85 60     STA $60 = 00                    A:89 X:32 Y:40 P:A5 SP:FB PPU:211,139 CYC:15877\n\
E74A  A9 04     LDA #$04                        A:89 X:32 Y:40 P:A5 SP:FB PPU:220,139 CYC:15880\n\
E74C  85 61     STA $61 = 00                    A:04 X:32 Y:40 P:25 SP:FB PPU:226,139 CYC:15882\n\
E74E  A0 44     LDY #$44                        A:04 X:32 Y:40 P:25 SP:FB PPU:235,139 CYC:15885\n\
E750  A2 17     LDX #$17                        A:04 X:32 Y:44 P:25 SP:FB PPU:241,139 CYC:15887\n\
E752  A9 3E     LDA #$3E                        A:04 X:17 Y:44 P:25 SP:FB PPU:247,139 CYC:15889\n\
E754  24 01     BIT $01 = C0                    A:3E X:17 Y:44 P:25 SP:FB PPU:253,139 CYC:15891\n\
E756  18        CLC                             A:3E X:17 Y:44 P:E7 SP:FB PPU:262,139 CYC:15894\n\
E757  83 49    *SAX ($49,X) @ 60 = 0489 = 00    A:3E X:17 Y:44 P:E6 SP:FB PPU:268,139 CYC:15896\n\
E759  EA        NOP                             A:3E X:17 Y:44 P:E6 SP:FB PPU:286,139 CYC:15902\n\
E75A  EA        NOP                             A:3E X:17 Y:44 P:E6 SP:FB PPU:292,139 CYC:15904\n\
E75B  EA        NOP                             A:3E X:17 Y:44 P:E6 SP:FB PPU:298,139 CYC:15906\n\
E75C  EA        NOP                             A:3E X:17 Y:44 P:E6 SP:FB PPU:304,139 CYC:15908\n\
E75D  D0 19     BNE $E778                       A:3E X:17 Y:44 P:E6 SP:FB PPU:310,139 CYC:15910\n\
E75F  B0 17     BCS $E778                       A:3E X:17 Y:44 P:E6 SP:FB PPU:316,139 CYC:15912\n\
E761  50 15     BVC $E778                       A:3E X:17 Y:44 P:E6 SP:FB PPU:322,139 CYC:15914\n\
E763  10 13     BPL $E778                       A:3E X:17 Y:44 P:E6 SP:FB PPU:328,139 CYC:15916\n\
E765  C9 3E     CMP #$3E                        A:3E X:17 Y:44 P:E6 SP:FB PPU:334,139 CYC:15918\n\
E767  D0 0F     BNE $E778                       A:3E X:17 Y:44 P:67 SP:FB PPU:340,139 CYC:15920\n\
E769  C0 44     CPY #$44                        A:3E X:17 Y:44 P:67 SP:FB PPU:  5,140 CYC:15922\n\
E76B  D0 0B     BNE $E778                       A:3E X:17 Y:44 P:67 SP:FB PPU: 11,140 CYC:15924\n\
E76D  E0 17     CPX #$17                        A:3E X:17 Y:44 P:67 SP:FB PPU: 17,140 CYC:15926\n\
E76F  D0 07     BNE $E778                       A:3E X:17 Y:44 P:67 SP:FB PPU: 23,140 CYC:15928\n\
E771  AD 89 04  LDA $0489 = 16                  A:3E X:17 Y:44 P:67 SP:FB PPU: 29,140 CYC:15930\n\
E774  C9 16     CMP #$16                        A:16 X:17 Y:44 P:65 SP:FB PPU: 41,140 CYC:15934\n\
E776  F0 04     BEQ $E77C                       A:16 X:17 Y:44 P:67 SP:FB PPU: 47,140 CYC:15936\n\
E77C  A0 44     LDY #$44                        A:16 X:17 Y:44 P:67 SP:FB PPU: 56,140 CYC:15939\n\
E77E  A2 7A     LDX #$7A                        A:16 X:17 Y:44 P:65 SP:FB PPU: 62,140 CYC:15941\n\
E780  A9 66     LDA #$66                        A:16 X:7A Y:44 P:65 SP:FB PPU: 68,140 CYC:15943\n\
E782  38        SEC                             A:66 X:7A Y:44 P:65 SP:FB PPU: 74,140 CYC:15945\n\
E783  B8        CLV                             A:66 X:7A Y:44 P:65 SP:FB PPU: 80,140 CYC:15947\n\
E784  83 E6    *SAX ($E6,X) @ 60 = 0489 = 16    A:66 X:7A Y:44 P:25 SP:FB PPU: 86,140 CYC:15949\n\
E786  EA        NOP                             A:66 X:7A Y:44 P:25 SP:FB PPU:104,140 CYC:15955\n\
E787  EA        NOP                             A:66 X:7A Y:44 P:25 SP:FB PPU:110,140 CYC:15957\n\
E788  EA        NOP                             A:66 X:7A Y:44 P:25 SP:FB PPU:116,140 CYC:15959\n\
E789  EA        NOP                             A:66 X:7A Y:44 P:25 SP:FB PPU:122,140 CYC:15961\n\
E78A  F0 19     BEQ $E7A5                       A:66 X:7A Y:44 P:25 SP:FB PPU:128,140 CYC:15963\n\
E78C  90 17     BCC $E7A5                       A:66 X:7A Y:44 P:25 SP:FB PPU:134,140 CYC:15965\n\
E78E  70 15     BVS $E7A5                       A:66 X:7A Y:44 P:25 SP:FB PPU:140,140 CYC:15967\n\
E790  30 13     BMI $E7A5                       A:66 X:7A Y:44 P:25 SP:FB PPU:146,140 CYC:15969\n\
E792  C9 66     CMP #$66                        A:66 X:7A Y:44 P:25 SP:FB PPU:152,140 CYC:15971\n\
E794  D0 0F     BNE $E7A5                       A:66 X:7A Y:44 P:27 SP:FB PPU:158,140 CYC:15973\n\
E796  C0 44     CPY #$44                        A:66 X:7A Y:44 P:27 SP:FB PPU:164,140 CYC:15975\n\
E798  D0 0B     BNE $E7A5                       A:66 X:7A Y:44 P:27 SP:FB PPU:170,140 CYC:15977\n\
E79A  E0 7A     CPX #$7A                        A:66 X:7A Y:44 P:27 SP:FB PPU:176,140 CYC:15979\n\
E79C  D0 07     BNE $E7A5                       A:66 X:7A Y:44 P:27 SP:FB PPU:182,140 CYC:15981\n\
E79E  AD 89 04  LDA $0489 = 62                  A:66 X:7A Y:44 P:27 SP:FB PPU:188,140 CYC:15983\n\
E7A1  C9 62     CMP #$62                        A:62 X:7A Y:44 P:25 SP:FB PPU:200,140 CYC:15987\n\
E7A3  F0 04     BEQ $E7A9                       A:62 X:7A Y:44 P:27 SP:FB PPU:206,140 CYC:15989\n\
E7A9  A9 FF     LDA #$FF                        A:62 X:7A Y:44 P:27 SP:FB PPU:215,140 CYC:15992\n\
E7AB  85 49     STA $49 = 00                    A:FF X:7A Y:44 P:A5 SP:FB PPU:221,140 CYC:15994\n\
E7AD  A0 44     LDY #$44                        A:FF X:7A Y:44 P:A5 SP:FB PPU:230,140 CYC:15997\n\
E7AF  A2 AA     LDX #$AA                        A:FF X:7A Y:44 P:25 SP:FB PPU:236,140 CYC:15999\n\
E7B1  A9 55     LDA #$55                        A:FF X:AA Y:44 P:A5 SP:FB PPU:242,140 CYC:16001\n\
E7B3  24 01     BIT $01 = C0                    A:55 X:AA Y:44 P:25 SP:FB PPU:248,140 CYC:16003\n\
E7B5  18        CLC                             A:55 X:AA Y:44 P:E5 SP:FB PPU:257,140 CYC:16006\n\
E7B6  87 49    *SAX $49 = FF                    A:55 X:AA Y:44 P:E4 SP:FB PPU:263,140 CYC:16008\n\
E7B8  EA        NOP                             A:55 X:AA Y:44 P:E4 SP:FB PPU:272,140 CYC:16011\n\
E7B9  EA        NOP                             A:55 X:AA Y:44 P:E4 SP:FB PPU:278,140 CYC:16013\n\
E7BA  EA        NOP                             A:55 X:AA Y:44 P:E4 SP:FB PPU:284,140 CYC:16015\n\
E7BB  EA        NOP                             A:55 X:AA Y:44 P:E4 SP:FB PPU:290,140 CYC:16017\n\
E7BC  F0 18     BEQ $E7D6                       A:55 X:AA Y:44 P:E4 SP:FB PPU:296,140 CYC:16019\n\
E7BE  B0 16     BCS $E7D6                       A:55 X:AA Y:44 P:E4 SP:FB PPU:302,140 CYC:16021\n\
E7C0  50 14     BVC $E7D6                       A:55 X:AA Y:44 P:E4 SP:FB PPU:308,140 CYC:16023\n\
E7C2  10 12     BPL $E7D6                       A:55 X:AA Y:44 P:E4 SP:FB PPU:314,140 CYC:16025\n\
E7C4  C9 55     CMP #$55                        A:55 X:AA Y:44 P:E4 SP:FB PPU:320,140 CYC:16027\n\
E7C6  D0 0E     BNE $E7D6                       A:55 X:AA Y:44 P:67 SP:FB PPU:326,140 CYC:16029\n\
E7C8  C0 44     CPY #$44                        A:55 X:AA Y:44 P:67 SP:FB PPU:332,140 CYC:16031\n\
E7CA  D0 0A     BNE $E7D6                       A:55 X:AA Y:44 P:67 SP:FB PPU:338,140 CYC:16033\n\
E7CC  E0 AA     CPX #$AA                        A:55 X:AA Y:44 P:67 SP:FB PPU:  3,141 CYC:16035\n\
E7CE  D0 06     BNE $E7D6                       A:55 X:AA Y:44 P:67 SP:FB PPU:  9,141 CYC:16037\n\
E7D0  A5 49     LDA $49 = 00                    A:55 X:AA Y:44 P:67 SP:FB PPU: 15,141 CYC:16039\n\
E7D2  C9 00     CMP #$00                        A:00 X:AA Y:44 P:67 SP:FB PPU: 24,141 CYC:16042\n\
E7D4  F0 04     BEQ $E7DA                       A:00 X:AA Y:44 P:67 SP:FB PPU: 30,141 CYC:16044\n\
E7DA  A9 00     LDA #$00                        A:00 X:AA Y:44 P:67 SP:FB PPU: 39,141 CYC:16047\n\
E7DC  85 56     STA $56 = 00                    A:00 X:AA Y:44 P:67 SP:FB PPU: 45,141 CYC:16049\n\
E7DE  A0 58     LDY #$58                        A:00 X:AA Y:44 P:67 SP:FB PPU: 54,141 CYC:16052\n\
E7E0  A2 EF     LDX #$EF                        A:00 X:AA Y:58 P:65 SP:FB PPU: 60,141 CYC:16054\n\
E7E2  A9 66     LDA #$66                        A:00 X:EF Y:58 P:E5 SP:FB PPU: 66,141 CYC:16056\n\
E7E4  38        SEC                             A:66 X:EF Y:58 P:65 SP:FB PPU: 72,141 CYC:16058\n\
E7E5  B8        CLV                             A:66 X:EF Y:58 P:65 SP:FB PPU: 78,141 CYC:16060\n\
E7E6  87 56    *SAX $56 = 00                    A:66 X:EF Y:58 P:25 SP:FB PPU: 84,141 CYC:16062\n\
E7E8  EA        NOP                             A:66 X:EF Y:58 P:25 SP:FB PPU: 93,141 CYC:16065\n\
E7E9  EA        NOP                             A:66 X:EF Y:58 P:25 SP:FB PPU: 99,141 CYC:16067\n\
E7EA  EA        NOP                             A:66 X:EF Y:58 P:25 SP:FB PPU:105,141 CYC:16069\n\
E7EB  EA        NOP                             A:66 X:EF Y:58 P:25 SP:FB PPU:111,141 CYC:16071\n\
E7EC  F0 18     BEQ $E806                       A:66 X:EF Y:58 P:25 SP:FB PPU:117,141 CYC:16073\n\
E7EE  90 16     BCC $E806                       A:66 X:EF Y:58 P:25 SP:FB PPU:123,141 CYC:16075\n\
E7F0  70 14     BVS $E806                       A:66 X:EF Y:58 P:25 SP:FB PPU:129,141 CYC:16077\n\
E7F2  30 12     BMI $E806                       A:66 X:EF Y:58 P:25 SP:FB PPU:135,141 CYC:16079\n\
E7F4  C9 66     CMP #$66                        A:66 X:EF Y:58 P:25 SP:FB PPU:141,141 CYC:16081\n\
E7F6  D0 0E     BNE $E806                       A:66 X:EF Y:58 P:27 SP:FB PPU:147,141 CYC:16083\n\
E7F8  C0 58     CPY #$58                        A:66 X:EF Y:58 P:27 SP:FB PPU:153,141 CYC:16085\n\
E7FA  D0 0A     BNE $E806                       A:66 X:EF Y:58 P:27 SP:FB PPU:159,141 CYC:16087\n\
E7FC  E0 EF     CPX #$EF                        A:66 X:EF Y:58 P:27 SP:FB PPU:165,141 CYC:16089\n\
E7FE  D0 06     BNE $E806                       A:66 X:EF Y:58 P:27 SP:FB PPU:171,141 CYC:16091\n\
E800  A5 56     LDA $56 = 66                    A:66 X:EF Y:58 P:27 SP:FB PPU:177,141 CYC:16093\n\
E802  C9 66     CMP #$66                        A:66 X:EF Y:58 P:25 SP:FB PPU:186,141 CYC:16096\n\
E804  F0 04     BEQ $E80A                       A:66 X:EF Y:58 P:27 SP:FB PPU:192,141 CYC:16098\n\
E80A  A9 FF     LDA #$FF                        A:66 X:EF Y:58 P:27 SP:FB PPU:201,141 CYC:16101\n\
E80C  8D 49 05  STA $0549 = 00                  A:FF X:EF Y:58 P:A5 SP:FB PPU:207,141 CYC:16103\n\
E80F  A0 E5     LDY #$E5                        A:FF X:EF Y:58 P:A5 SP:FB PPU:219,141 CYC:16107\n\
E811  A2 AF     LDX #$AF                        A:FF X:EF Y:E5 P:A5 SP:FB PPU:225,141 CYC:16109\n\
E813  A9 F5     LDA #$F5                        A:FF X:AF Y:E5 P:A5 SP:FB PPU:231,141 CYC:16111\n\
E815  24 01     BIT $01 = C0                    A:F5 X:AF Y:E5 P:A5 SP:FB PPU:237,141 CYC:16113\n\
E817  18        CLC                             A:F5 X:AF Y:E5 P:E5 SP:FB PPU:246,141 CYC:16116\n\
E818  8F 49 05 *SAX $0549 = FF                  A:F5 X:AF Y:E5 P:E4 SP:FB PPU:252,141 CYC:16118\n\
E81B  EA        NOP                             A:F5 X:AF Y:E5 P:E4 SP:FB PPU:264,141 CYC:16122\n\
E81C  EA        NOP                             A:F5 X:AF Y:E5 P:E4 SP:FB PPU:270,141 CYC:16124\n\
E81D  EA        NOP                             A:F5 X:AF Y:E5 P:E4 SP:FB PPU:276,141 CYC:16126\n\
E81E  EA        NOP                             A:F5 X:AF Y:E5 P:E4 SP:FB PPU:282,141 CYC:16128\n\
E81F  F0 19     BEQ $E83A                       A:F5 X:AF Y:E5 P:E4 SP:FB PPU:288,141 CYC:16130\n\
E821  B0 17     BCS $E83A                       A:F5 X:AF Y:E5 P:E4 SP:FB PPU:294,141 CYC:16132\n\
E823  50 15     BVC $E83A                       A:F5 X:AF Y:E5 P:E4 SP:FB PPU:300,141 CYC:16134\n\
E825  10 13     BPL $E83A                       A:F5 X:AF Y:E5 P:E4 SP:FB PPU:306,141 CYC:16136\n\
E827  C9 F5     CMP #$F5                        A:F5 X:AF Y:E5 P:E4 SP:FB PPU:312,141 CYC:16138\n\
E829  D0 0F     BNE $E83A                       A:F5 X:AF Y:E5 P:67 SP:FB PPU:318,141 CYC:16140\n\
E82B  C0 E5     CPY #$E5                        A:F5 X:AF Y:E5 P:67 SP:FB PPU:324,141 CYC:16142\n\
E82D  D0 0B     BNE $E83A                       A:F5 X:AF Y:E5 P:67 SP:FB PPU:330,141 CYC:16144\n\
E82F  E0 AF     CPX #$AF                        A:F5 X:AF Y:E5 P:67 SP:FB PPU:336,141 CYC:16146\n\
E831  D0 07     BNE $E83A                       A:F5 X:AF Y:E5 P:67 SP:FB PPU:  1,142 CYC:16148\n\
E833  AD 49 05  LDA $0549 = A5                  A:F5 X:AF Y:E5 P:67 SP:FB PPU:  7,142 CYC:16150\n\
E836  C9 A5     CMP #$A5                        A:A5 X:AF Y:E5 P:E5 SP:FB PPU: 19,142 CYC:16154\n\
E838  F0 04     BEQ $E83E                       A:A5 X:AF Y:E5 P:67 SP:FB PPU: 25,142 CYC:16156\n\
E83E  A9 00     LDA #$00                        A:A5 X:AF Y:E5 P:67 SP:FB PPU: 34,142 CYC:16159\n\
E840  8D 56 05  STA $0556 = 00                  A:00 X:AF Y:E5 P:67 SP:FB PPU: 40,142 CYC:16161\n\
E843  A0 58     LDY #$58                        A:00 X:AF Y:E5 P:67 SP:FB PPU: 52,142 CYC:16165\n\
E845  A2 B3     LDX #$B3                        A:00 X:AF Y:58 P:65 SP:FB PPU: 58,142 CYC:16167\n\
E847  A9 97     LDA #$97                        A:00 X:B3 Y:58 P:E5 SP:FB PPU: 64,142 CYC:16169\n\
E849  38        SEC                             A:97 X:B3 Y:58 P:E5 SP:FB PPU: 70,142 CYC:16171\n\
E84A  B8        CLV                             A:97 X:B3 Y:58 P:E5 SP:FB PPU: 76,142 CYC:16173\n\
E84B  8F 56 05 *SAX $0556 = 00                  A:97 X:B3 Y:58 P:A5 SP:FB PPU: 82,142 CYC:16175\n\
E84E  EA        NOP                             A:97 X:B3 Y:58 P:A5 SP:FB PPU: 94,142 CYC:16179\n\
E84F  EA        NOP                             A:97 X:B3 Y:58 P:A5 SP:FB PPU:100,142 CYC:16181\n\
E850  EA        NOP                             A:97 X:B3 Y:58 P:A5 SP:FB PPU:106,142 CYC:16183\n\
E851  EA        NOP                             A:97 X:B3 Y:58 P:A5 SP:FB PPU:112,142 CYC:16185\n\
E852  F0 19     BEQ $E86D                       A:97 X:B3 Y:58 P:A5 SP:FB PPU:118,142 CYC:16187\n\
E854  90 17     BCC $E86D                       A:97 X:B3 Y:58 P:A5 SP:FB PPU:124,142 CYC:16189\n\
E856  70 15     BVS $E86D                       A:97 X:B3 Y:58 P:A5 SP:FB PPU:130,142 CYC:16191\n\
E858  10 13     BPL $E86D                       A:97 X:B3 Y:58 P:A5 SP:FB PPU:136,142 CYC:16193\n\
E85A  C9 97     CMP #$97                        A:97 X:B3 Y:58 P:A5 SP:FB PPU:142,142 CYC:16195\n\
E85C  D0 0F     BNE $E86D                       A:97 X:B3 Y:58 P:27 SP:FB PPU:148,142 CYC:16197\n\
E85E  C0 58     CPY #$58                        A:97 X:B3 Y:58 P:27 SP:FB PPU:154,142 CYC:16199\n\
E860  D0 0B     BNE $E86D                       A:97 X:B3 Y:58 P:27 SP:FB PPU:160,142 CYC:16201\n\
E862  E0 B3     CPX #$B3                        A:97 X:B3 Y:58 P:27 SP:FB PPU:166,142 CYC:16203\n\
E864  D0 07     BNE $E86D                       A:97 X:B3 Y:58 P:27 SP:FB PPU:172,142 CYC:16205\n\
E866  AD 56 05  LDA $0556 = 93                  A:97 X:B3 Y:58 P:27 SP:FB PPU:178,142 CYC:16207\n\
E869  C9 93     CMP #$93                        A:93 X:B3 Y:58 P:A5 SP:FB PPU:190,142 CYC:16211\n\
E86B  F0 04     BEQ $E871                       A:93 X:B3 Y:58 P:27 SP:FB PPU:196,142 CYC:16213\n\
E871  A9 FF     LDA #$FF                        A:93 X:B3 Y:58 P:27 SP:FB PPU:205,142 CYC:16216\n\
E873  85 49     STA $49 = 00                    A:FF X:B3 Y:58 P:A5 SP:FB PPU:211,142 CYC:16218\n\
E875  A0 FF     LDY #$FF                        A:FF X:B3 Y:58 P:A5 SP:FB PPU:220,142 CYC:16221\n\
E877  A2 AA     LDX #$AA                        A:FF X:B3 Y:FF P:A5 SP:FB PPU:226,142 CYC:16223\n\
E879  A9 55     LDA #$55                        A:FF X:AA Y:FF P:A5 SP:FB PPU:232,142 CYC:16225\n\
E87B  24 01     BIT $01 = C0                    A:55 X:AA Y:FF P:25 SP:FB PPU:238,142 CYC:16227\n\
E87D  18        CLC                             A:55 X:AA Y:FF P:E5 SP:FB PPU:247,142 CYC:16230\n\
E87E  97 4A    *SAX $4A,Y @ 49 = FF             A:55 X:AA Y:FF P:E4 SP:FB PPU:253,142 CYC:16232\n\
E880  EA        NOP                             A:55 X:AA Y:FF P:E4 SP:FB PPU:265,142 CYC:16236\n\
E881  EA        NOP                             A:55 X:AA Y:FF P:E4 SP:FB PPU:271,142 CYC:16238\n\
E882  EA        NOP                             A:55 X:AA Y:FF P:E4 SP:FB PPU:277,142 CYC:16240\n\
E883  EA        NOP                             A:55 X:AA Y:FF P:E4 SP:FB PPU:283,142 CYC:16242\n\
E884  F0 18     BEQ $E89E                       A:55 X:AA Y:FF P:E4 SP:FB PPU:289,142 CYC:16244\n\
E886  B0 16     BCS $E89E                       A:55 X:AA Y:FF P:E4 SP:FB PPU:295,142 CYC:16246\n\
E888  50 14     BVC $E89E                       A:55 X:AA Y:FF P:E4 SP:FB PPU:301,142 CYC:16248\n\
E88A  10 12     BPL $E89E                       A:55 X:AA Y:FF P:E4 SP:FB PPU:307,142 CYC:16250\n\
E88C  C9 55     CMP #$55                        A:55 X:AA Y:FF P:E4 SP:FB PPU:313,142 CYC:16252\n\
E88E  D0 0E     BNE $E89E                       A:55 X:AA Y:FF P:67 SP:FB PPU:319,142 CYC:16254\n\
E890  C0 FF     CPY #$FF                        A:55 X:AA Y:FF P:67 SP:FB PPU:325,142 CYC:16256\n\
E892  D0 0A     BNE $E89E                       A:55 X:AA Y:FF P:67 SP:FB PPU:331,142 CYC:16258\n\
E894  E0 AA     CPX #$AA                        A:55 X:AA Y:FF P:67 SP:FB PPU:337,142 CYC:16260\n\
E896  D0 06     BNE $E89E                       A:55 X:AA Y:FF P:67 SP:FB PPU:  2,143 CYC:16262\n\
E898  A5 49     LDA $49 = 00                    A:55 X:AA Y:FF P:67 SP:FB PPU:  8,143 CYC:16264\n\
E89A  C9 00     CMP #$00                        A:00 X:AA Y:FF P:67 SP:FB PPU: 17,143 CYC:16267\n\
E89C  F0 04     BEQ $E8A2                       A:00 X:AA Y:FF P:67 SP:FB PPU: 23,143 CYC:16269\n\
E8A2  A9 00     LDA #$00                        A:00 X:AA Y:FF P:67 SP:FB PPU: 32,143 CYC:16272\n\
E8A4  85 56     STA $56 = 66                    A:00 X:AA Y:FF P:67 SP:FB PPU: 38,143 CYC:16274\n\
E8A6  A0 06     LDY #$06                        A:00 X:AA Y:FF P:67 SP:FB PPU: 47,143 CYC:16277\n\
E8A8  A2 EF     LDX #$EF                        A:00 X:AA Y:06 P:65 SP:FB PPU: 53,143 CYC:16279\n\
E8AA  A9 66     LDA #$66                        A:00 X:EF Y:06 P:E5 SP:FB PPU: 59,143 CYC:16281\n\
E8AC  38        SEC                             A:66 X:EF Y:06 P:65 SP:FB PPU: 65,143 CYC:16283\n\
E8AD  B8        CLV                             A:66 X:EF Y:06 P:65 SP:FB PPU: 71,143 CYC:16285\n\
E8AE  97 50    *SAX $50,Y @ 56 = 00             A:66 X:EF Y:06 P:25 SP:FB PPU: 77,143 CYC:16287\n\
E8B0  EA        NOP                             A:66 X:EF Y:06 P:25 SP:FB PPU: 89,143 CYC:16291\n\
E8B1  EA        NOP                             A:66 X:EF Y:06 P:25 SP:FB PPU: 95,143 CYC:16293\n\
E8B2  EA        NOP                             A:66 X:EF Y:06 P:25 SP:FB PPU:101,143 CYC:16295\n\
E8B3  EA        NOP                             A:66 X:EF Y:06 P:25 SP:FB PPU:107,143 CYC:16297\n\
E8B4  F0 18     BEQ $E8CE                       A:66 X:EF Y:06 P:25 SP:FB PPU:113,143 CYC:16299\n\
E8B6  90 16     BCC $E8CE                       A:66 X:EF Y:06 P:25 SP:FB PPU:119,143 CYC:16301\n\
E8B8  70 14     BVS $E8CE                       A:66 X:EF Y:06 P:25 SP:FB PPU:125,143 CYC:16303\n\
E8BA  30 12     BMI $E8CE                       A:66 X:EF Y:06 P:25 SP:FB PPU:131,143 CYC:16305\n\
E8BC  C9 66     CMP #$66                        A:66 X:EF Y:06 P:25 SP:FB PPU:137,143 CYC:16307\n\
E8BE  D0 0E     BNE $E8CE                       A:66 X:EF Y:06 P:27 SP:FB PPU:143,143 CYC:16309\n\
E8C0  C0 06     CPY #$06                        A:66 X:EF Y:06 P:27 SP:FB PPU:149,143 CYC:16311\n\
E8C2  D0 0A     BNE $E8CE                       A:66 X:EF Y:06 P:27 SP:FB PPU:155,143 CYC:16313\n\
E8C4  E0 EF     CPX #$EF                        A:66 X:EF Y:06 P:27 SP:FB PPU:161,143 CYC:16315\n\
E8C6  D0 06     BNE $E8CE                       A:66 X:EF Y:06 P:27 SP:FB PPU:167,143 CYC:16317\n\
E8C8  A5 56     LDA $56 = 66                    A:66 X:EF Y:06 P:27 SP:FB PPU:173,143 CYC:16319\n\
E8CA  C9 66     CMP #$66                        A:66 X:EF Y:06 P:25 SP:FB PPU:182,143 CYC:16322\n\
E8CC  F0 04     BEQ $E8D2                       A:66 X:EF Y:06 P:27 SP:FB PPU:188,143 CYC:16324\n\
E8D2  60        RTS                             A:66 X:EF Y:06 P:27 SP:FB PPU:197,143 CYC:16327\n\
C638  20 D3 E8  JSR $E8D3                       A:66 X:EF Y:06 P:27 SP:FD PPU:215,143 CYC:16333\n\
E8D3  A0 90     LDY #$90                        A:66 X:EF Y:06 P:27 SP:FB PPU:233,143 CYC:16339\n\
E8D5  20 31 F9  JSR $F931                       A:66 X:EF Y:90 P:A5 SP:FB PPU:239,143 CYC:16341\n\
F931  24 01     BIT $01 = C0                    A:66 X:EF Y:90 P:A5 SP:F9 PPU:257,143 CYC:16347\n\
F933  A9 40     LDA #$40                        A:66 X:EF Y:90 P:E5 SP:F9 PPU:266,143 CYC:16350\n\
F935  38        SEC                             A:40 X:EF Y:90 P:65 SP:F9 PPU:272,143 CYC:16352\n\
F936  60        RTS                             A:40 X:EF Y:90 P:65 SP:F9 PPU:278,143 CYC:16354\n\
E8D8  EB 40    *SBC #$40                        A:40 X:EF Y:90 P:65 SP:FB PPU:296,143 CYC:16360\n\
E8DA  EA        NOP                             A:00 X:EF Y:90 P:27 SP:FB PPU:302,143 CYC:16362\n\
E8DB  EA        NOP                             A:00 X:EF Y:90 P:27 SP:FB PPU:308,143 CYC:16364\n\
E8DC  EA        NOP                             A:00 X:EF Y:90 P:27 SP:FB PPU:314,143 CYC:16366\n\
E8DD  EA        NOP                             A:00 X:EF Y:90 P:27 SP:FB PPU:320,143 CYC:16368\n\
E8DE  20 37 F9  JSR $F937                       A:00 X:EF Y:90 P:27 SP:FB PPU:326,143 CYC:16370\n\
F937  30 0B     BMI $F944                       A:00 X:EF Y:90 P:27 SP:F9 PPU:  3,144 CYC:16376\n\
F939  90 09     BCC $F944                       A:00 X:EF Y:90 P:27 SP:F9 PPU:  9,144 CYC:16378\n\
F93B  D0 07     BNE $F944                       A:00 X:EF Y:90 P:27 SP:F9 PPU: 15,144 CYC:16380\n\
F93D  70 05     BVS $F944                       A:00 X:EF Y:90 P:27 SP:F9 PPU: 21,144 CYC:16382\n\
F93F  C9 00     CMP #$00                        A:00 X:EF Y:90 P:27 SP:F9 PPU: 27,144 CYC:16384\n\
F941  D0 01     BNE $F944                       A:00 X:EF Y:90 P:27 SP:F9 PPU: 33,144 CYC:16386\n\
F943  60        RTS                             A:00 X:EF Y:90 P:27 SP:F9 PPU: 39,144 CYC:16388\n\
E8E1  C8        INY                             A:00 X:EF Y:90 P:27 SP:FB PPU: 57,144 CYC:16394\n\
E8E2  20 47 F9  JSR $F947                       A:00 X:EF Y:91 P:A5 SP:FB PPU: 63,144 CYC:16396\n\
F947  B8        CLV                             A:00 X:EF Y:91 P:A5 SP:F9 PPU: 81,144 CYC:16402\n\
F948  38        SEC                             A:00 X:EF Y:91 P:A5 SP:F9 PPU: 87,144 CYC:16404\n\
F949  A9 40     LDA #$40                        A:00 X:EF Y:91 P:A5 SP:F9 PPU: 93,144 CYC:16406\n\
F94B  60        RTS                             A:40 X:EF Y:91 P:25 SP:F9 PPU: 99,144 CYC:16408\n\
E8E5  EB 3F    *SBC #$3F                        A:40 X:EF Y:91 P:25 SP:FB PPU:117,144 CYC:16414\n\
E8E7  EA        NOP                             A:01 X:EF Y:91 P:25 SP:FB PPU:123,144 CYC:16416\n\
E8E8  EA        NOP                             A:01 X:EF Y:91 P:25 SP:FB PPU:129,144 CYC:16418\n\
E8E9  EA        NOP                             A:01 X:EF Y:91 P:25 SP:FB PPU:135,144 CYC:16420\n\
E8EA  EA        NOP                             A:01 X:EF Y:91 P:25 SP:FB PPU:141,144 CYC:16422\n\
E8EB  20 4C F9  JSR $F94C                       A:01 X:EF Y:91 P:25 SP:FB PPU:147,144 CYC:16424\n\
F94C  F0 0B     BEQ $F959                       A:01 X:EF Y:91 P:25 SP:F9 PPU:165,144 CYC:16430\n\
F94E  30 09     BMI $F959                       A:01 X:EF Y:91 P:25 SP:F9 PPU:171,144 CYC:16432\n\
F950  90 07     BCC $F959                       A:01 X:EF Y:91 P:25 SP:F9 PPU:177,144 CYC:16434\n\
F952  70 05     BVS $F959                       A:01 X:EF Y:91 P:25 SP:F9 PPU:183,144 CYC:16436\n\
F954  C9 01     CMP #$01                        A:01 X:EF Y:91 P:25 SP:F9 PPU:189,144 CYC:16438\n\
F956  D0 01     BNE $F959                       A:01 X:EF Y:91 P:27 SP:F9 PPU:195,144 CYC:16440\n\
F958  60        RTS                             A:01 X:EF Y:91 P:27 SP:F9 PPU:201,144 CYC:16442\n\
E8EE  C8        INY                             A:01 X:EF Y:91 P:27 SP:FB PPU:219,144 CYC:16448\n\
E8EF  20 5C F9  JSR $F95C                       A:01 X:EF Y:92 P:A5 SP:FB PPU:225,144 CYC:16450\n\
F95C  A9 40     LDA #$40                        A:01 X:EF Y:92 P:A5 SP:F9 PPU:243,144 CYC:16456\n\
F95E  38        SEC                             A:40 X:EF Y:92 P:25 SP:F9 PPU:249,144 CYC:16458\n\
F95F  24 01     BIT $01 = C0                    A:40 X:EF Y:92 P:25 SP:F9 PPU:255,144 CYC:16460\n\
F961  60        RTS                             A:40 X:EF Y:92 P:E5 SP:F9 PPU:264,144 CYC:16463\n\
E8F2  EB 41    *SBC #$41                        A:40 X:EF Y:92 P:E5 SP:FB PPU:282,144 CYC:16469\n\
E8F4  EA        NOP                             A:FF X:EF Y:92 P:A4 SP:FB PPU:288,144 CYC:16471\n\
E8F5  EA        NOP                             A:FF X:EF Y:92 P:A4 SP:FB PPU:294,144 CYC:16473\n\
E8F6  EA        NOP                             A:FF X:EF Y:92 P:A4 SP:FB PPU:300,144 CYC:16475\n\
E8F7  EA        NOP                             A:FF X:EF Y:92 P:A4 SP:FB PPU:306,144 CYC:16477\n\
E8F8  20 62 F9  JSR $F962                       A:FF X:EF Y:92 P:A4 SP:FB PPU:312,144 CYC:16479\n\
F962  B0 0B     BCS $F96F                       A:FF X:EF Y:92 P:A4 SP:F9 PPU:330,144 CYC:16485\n\
F964  F0 09     BEQ $F96F                       A:FF X:EF Y:92 P:A4 SP:F9 PPU:336,144 CYC:16487\n\
F966  10 07     BPL $F96F                       A:FF X:EF Y:92 P:A4 SP:F9 PPU:  1,145 CYC:16489\n\
F968  70 05     BVS $F96F                       A:FF X:EF Y:92 P:A4 SP:F9 PPU:  7,145 CYC:16491\n\
F96A  C9 FF     CMP #$FF                        A:FF X:EF Y:92 P:A4 SP:F9 PPU: 13,145 CYC:16493\n\
F96C  D0 01     BNE $F96F                       A:FF X:EF Y:92 P:27 SP:F9 PPU: 19,145 CYC:16495\n\
F96E  60        RTS                             A:FF X:EF Y:92 P:27 SP:F9 PPU: 25,145 CYC:16497\n\
E8FB  C8        INY                             A:FF X:EF Y:92 P:27 SP:FB PPU: 43,145 CYC:16503\n\
E8FC  20 72 F9  JSR $F972                       A:FF X:EF Y:93 P:A5 SP:FB PPU: 49,145 CYC:16505\n\
F972  18        CLC                             A:FF X:EF Y:93 P:A5 SP:F9 PPU: 67,145 CYC:16511\n\
F973  A9 80     LDA #$80                        A:FF X:EF Y:93 P:A4 SP:F9 PPU: 73,145 CYC:16513\n\
F975  60        RTS                             A:80 X:EF Y:93 P:A4 SP:F9 PPU: 79,145 CYC:16515\n\
E8FF  EB 00    *SBC #$00                        A:80 X:EF Y:93 P:A4 SP:FB PPU: 97,145 CYC:16521\n\
E901  EA        NOP                             A:7F X:EF Y:93 P:65 SP:FB PPU:103,145 CYC:16523\n\
E902  EA        NOP                             A:7F X:EF Y:93 P:65 SP:FB PPU:109,145 CYC:16525\n\
E903  EA        NOP                             A:7F X:EF Y:93 P:65 SP:FB PPU:115,145 CYC:16527\n\
E904  EA        NOP                             A:7F X:EF Y:93 P:65 SP:FB PPU:121,145 CYC:16529\n\
E905  20 76 F9  JSR $F976                       A:7F X:EF Y:93 P:65 SP:FB PPU:127,145 CYC:16531\n\
F976  90 05     BCC $F97D                       A:7F X:EF Y:93 P:65 SP:F9 PPU:145,145 CYC:16537\n\
F978  C9 7F     CMP #$7F                        A:7F X:EF Y:93 P:65 SP:F9 PPU:151,145 CYC:16539\n\
F97A  D0 01     BNE $F97D                       A:7F X:EF Y:93 P:67 SP:F9 PPU:157,145 CYC:16541\n\
F97C  60        RTS                             A:7F X:EF Y:93 P:67 SP:F9 PPU:163,145 CYC:16543\n\
E908  C8        INY                             A:7F X:EF Y:93 P:67 SP:FB PPU:181,145 CYC:16549\n\
E909  20 80 F9  JSR $F980                       A:7F X:EF Y:94 P:E5 SP:FB PPU:187,145 CYC:16551\n\
F980  38        SEC                             A:7F X:EF Y:94 P:E5 SP:F9 PPU:205,145 CYC:16557\n\
F981  A9 81     LDA #$81                        A:7F X:EF Y:94 P:E5 SP:F9 PPU:211,145 CYC:16559\n\
F983  60        RTS                             A:81 X:EF Y:94 P:E5 SP:F9 PPU:217,145 CYC:16561\n\
E90C  EB 7F    *SBC #$7F                        A:81 X:EF Y:94 P:E5 SP:FB PPU:235,145 CYC:16567\n\
E90E  EA        NOP                             A:02 X:EF Y:94 P:65 SP:FB PPU:241,145 CYC:16569\n\
E90F  EA        NOP                             A:02 X:EF Y:94 P:65 SP:FB PPU:247,145 CYC:16571\n\
E910  EA        NOP                             A:02 X:EF Y:94 P:65 SP:FB PPU:253,145 CYC:16573\n\
E911  EA        NOP                             A:02 X:EF Y:94 P:65 SP:FB PPU:259,145 CYC:16575\n\
E912  20 84 F9  JSR $F984                       A:02 X:EF Y:94 P:65 SP:FB PPU:265,145 CYC:16577\n\
F984  50 07     BVC $F98D                       A:02 X:EF Y:94 P:65 SP:F9 PPU:283,145 CYC:16583\n\
F986  90 05     BCC $F98D                       A:02 X:EF Y:94 P:65 SP:F9 PPU:289,145 CYC:16585\n\
F988  C9 02     CMP #$02                        A:02 X:EF Y:94 P:65 SP:F9 PPU:295,145 CYC:16587\n\
F98A  D0 01     BNE $F98D                       A:02 X:EF Y:94 P:67 SP:F9 PPU:301,145 CYC:16589\n\
F98C  60        RTS                             A:02 X:EF Y:94 P:67 SP:F9 PPU:307,145 CYC:16591\n\
E915  60        RTS                             A:02 X:EF Y:94 P:67 SP:FB PPU:325,145 CYC:16597\n\
C63B  20 16 E9  JSR $E916                       A:02 X:EF Y:94 P:67 SP:FD PPU:  2,146 CYC:16603\n\
E916  A9 FF     LDA #$FF                        A:02 X:EF Y:94 P:67 SP:FB PPU: 20,146 CYC:16609\n\
E918  85 01     STA $01 = C0                    A:FF X:EF Y:94 P:E5 SP:FB PPU: 26,146 CYC:16611\n\
E91A  A0 95     LDY #$95                        A:FF X:EF Y:94 P:E5 SP:FB PPU: 35,146 CYC:16614\n\
E91C  A2 02     LDX #$02                        A:FF X:EF Y:95 P:E5 SP:FB PPU: 41,146 CYC:16616\n\
E91E  A9 47     LDA #$47                        A:FF X:02 Y:95 P:65 SP:FB PPU: 47,146 CYC:16618\n\
E920  85 47     STA $47 = 00                    A:47 X:02 Y:95 P:65 SP:FB PPU: 53,146 CYC:16620\n\
E922  A9 06     LDA #$06                        A:47 X:02 Y:95 P:65 SP:FB PPU: 62,146 CYC:16623\n\
E924  85 48     STA $48 = 00                    A:06 X:02 Y:95 P:65 SP:FB PPU: 68,146 CYC:16625\n\
E926  A9 EB     LDA #$EB                        A:06 X:02 Y:95 P:65 SP:FB PPU: 77,146 CYC:16628\n\
E928  8D 47 06  STA $0647 = 00                  A:EB X:02 Y:95 P:E5 SP:FB PPU: 83,146 CYC:16630\n\
E92B  20 31 FA  JSR $FA31                       A:EB X:02 Y:95 P:E5 SP:FB PPU: 95,146 CYC:16634\n\
FA31  24 01     BIT $01 = FF                    A:EB X:02 Y:95 P:E5 SP:F9 PPU:113,146 CYC:16640\n\
FA33  18        CLC                             A:EB X:02 Y:95 P:E5 SP:F9 PPU:122,146 CYC:16643\n\
FA34  A9 40     LDA #$40                        A:EB X:02 Y:95 P:E4 SP:F9 PPU:128,146 CYC:16645\n\
FA36  60        RTS                             A:40 X:02 Y:95 P:64 SP:F9 PPU:134,146 CYC:16647\n\
E92E  C3 45    *DCP ($45,X) @ 47 = 0647 = EB    A:40 X:02 Y:95 P:64 SP:FB PPU:152,146 CYC:16653\n\
E930  EA        NOP                             A:40 X:02 Y:95 P:64 SP:FB PPU:176,146 CYC:16661\n\
E931  EA        NOP                             A:40 X:02 Y:95 P:64 SP:FB PPU:182,146 CYC:16663\n\
E932  EA        NOP                             A:40 X:02 Y:95 P:64 SP:FB PPU:188,146 CYC:16665\n\
E933  EA        NOP                             A:40 X:02 Y:95 P:64 SP:FB PPU:194,146 CYC:16667\n\
E934  20 37 FA  JSR $FA37                       A:40 X:02 Y:95 P:64 SP:FB PPU:200,146 CYC:16669\n\
FA37  50 2C     BVC $FA65                       A:40 X:02 Y:95 P:64 SP:F9 PPU:218,146 CYC:16675\n\
FA39  B0 2A     BCS $FA65                       A:40 X:02 Y:95 P:64 SP:F9 PPU:224,146 CYC:16677\n\
FA3B  30 28     BMI $FA65                       A:40 X:02 Y:95 P:64 SP:F9 PPU:230,146 CYC:16679\n\
FA3D  C9 40     CMP #$40                        A:40 X:02 Y:95 P:64 SP:F9 PPU:236,146 CYC:16681\n\
FA3F  D0 24     BNE $FA65                       A:40 X:02 Y:95 P:67 SP:F9 PPU:242,146 CYC:16683\n\
FA41  60        RTS                             A:40 X:02 Y:95 P:67 SP:F9 PPU:248,146 CYC:16685\n\
E937  AD 47 06  LDA $0647 = EA                  A:40 X:02 Y:95 P:67 SP:FB PPU:266,146 CYC:16691\n\
E93A  C9 EA     CMP #$EA                        A:EA X:02 Y:95 P:E5 SP:FB PPU:278,146 CYC:16695\n\
E93C  F0 02     BEQ $E940                       A:EA X:02 Y:95 P:67 SP:FB PPU:284,146 CYC:16697\n\
E940  C8        INY                             A:EA X:02 Y:95 P:67 SP:FB PPU:293,146 CYC:16700\n\
E941  A9 00     LDA #$00                        A:EA X:02 Y:96 P:E5 SP:FB PPU:299,146 CYC:16702\n\
E943  8D 47 06  STA $0647 = EA                  A:00 X:02 Y:96 P:67 SP:FB PPU:305,146 CYC:16704\n\
E946  20 42 FA  JSR $FA42                       A:00 X:02 Y:96 P:67 SP:FB PPU:317,146 CYC:16708\n\
FA42  B8        CLV                             A:00 X:02 Y:96 P:67 SP:F9 PPU:335,146 CYC:16714\n\
FA43  38        SEC                             A:00 X:02 Y:96 P:27 SP:F9 PPU:  0,147 CYC:16716\n\
FA44  A9 FF     LDA #$FF                        A:00 X:02 Y:96 P:27 SP:F9 PPU:  6,147 CYC:16718\n\
FA46  60        RTS                             A:FF X:02 Y:96 P:A5 SP:F9 PPU: 12,147 CYC:16720\n\
E949  C3 45    *DCP ($45,X) @ 47 = 0647 = 00    A:FF X:02 Y:96 P:A5 SP:FB PPU: 30,147 CYC:16726\n\
E94B  EA        NOP                             A:FF X:02 Y:96 P:27 SP:FB PPU: 54,147 CYC:16734\n\
E94C  EA        NOP                             A:FF X:02 Y:96 P:27 SP:FB PPU: 60,147 CYC:16736\n\
E94D  EA        NOP                             A:FF X:02 Y:96 P:27 SP:FB PPU: 66,147 CYC:16738\n\
E94E  EA        NOP                             A:FF X:02 Y:96 P:27 SP:FB PPU: 72,147 CYC:16740\n\
E94F  20 47 FA  JSR $FA47                       A:FF X:02 Y:96 P:27 SP:FB PPU: 78,147 CYC:16742\n\
FA47  70 1C     BVS $FA65                       A:FF X:02 Y:96 P:27 SP:F9 PPU: 96,147 CYC:16748\n\
FA49  D0 1A     BNE $FA65                       A:FF X:02 Y:96 P:27 SP:F9 PPU:102,147 CYC:16750\n\
FA4B  30 18     BMI $FA65                       A:FF X:02 Y:96 P:27 SP:F9 PPU:108,147 CYC:16752\n\
FA4D  90 16     BCC $FA65                       A:FF X:02 Y:96 P:27 SP:F9 PPU:114,147 CYC:16754\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:02 Y:96 P:27 SP:F9 PPU:120,147 CYC:16756\n\
FA51  D0 12     BNE $FA65                       A:FF X:02 Y:96 P:27 SP:F9 PPU:126,147 CYC:16758\n\
FA53  60        RTS                             A:FF X:02 Y:96 P:27 SP:F9 PPU:132,147 CYC:16760\n\
E952  AD 47 06  LDA $0647 = FF                  A:FF X:02 Y:96 P:27 SP:FB PPU:150,147 CYC:16766\n\
E955  C9 FF     CMP #$FF                        A:FF X:02 Y:96 P:A5 SP:FB PPU:162,147 CYC:16770\n\
E957  F0 02     BEQ $E95B                       A:FF X:02 Y:96 P:27 SP:FB PPU:168,147 CYC:16772\n\
E95B  C8        INY                             A:FF X:02 Y:96 P:27 SP:FB PPU:177,147 CYC:16775\n\
E95C  A9 37     LDA #$37                        A:FF X:02 Y:97 P:A5 SP:FB PPU:183,147 CYC:16777\n\
E95E  8D 47 06  STA $0647 = FF                  A:37 X:02 Y:97 P:25 SP:FB PPU:189,147 CYC:16779\n\
E961  20 54 FA  JSR $FA54                       A:37 X:02 Y:97 P:25 SP:FB PPU:201,147 CYC:16783\n\
FA54  24 01     BIT $01 = FF                    A:37 X:02 Y:97 P:25 SP:F9 PPU:219,147 CYC:16789\n\
FA56  A9 F0     LDA #$F0                        A:37 X:02 Y:97 P:E5 SP:F9 PPU:228,147 CYC:16792\n\
FA58  60        RTS                             A:F0 X:02 Y:97 P:E5 SP:F9 PPU:234,147 CYC:16794\n\
E964  C3 45    *DCP ($45,X) @ 47 = 0647 = 37    A:F0 X:02 Y:97 P:E5 SP:FB PPU:252,147 CYC:16800\n\
E966  EA        NOP                             A:F0 X:02 Y:97 P:E5 SP:FB PPU:276,147 CYC:16808\n\
E967  EA        NOP                             A:F0 X:02 Y:97 P:E5 SP:FB PPU:282,147 CYC:16810\n\
E968  EA        NOP                             A:F0 X:02 Y:97 P:E5 SP:FB PPU:288,147 CYC:16812\n\
E969  EA        NOP                             A:F0 X:02 Y:97 P:E5 SP:FB PPU:294,147 CYC:16814\n\
E96A  20 59 FA  JSR $FA59                       A:F0 X:02 Y:97 P:E5 SP:FB PPU:300,147 CYC:16816\n\
FA59  50 0A     BVC $FA65                       A:F0 X:02 Y:97 P:E5 SP:F9 PPU:318,147 CYC:16822\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:02 Y:97 P:E5 SP:F9 PPU:324,147 CYC:16824\n\
FA5D  10 06     BPL $FA65                       A:F0 X:02 Y:97 P:E5 SP:F9 PPU:330,147 CYC:16826\n\
FA5F  90 04     BCC $FA65                       A:F0 X:02 Y:97 P:E5 SP:F9 PPU:336,147 CYC:16828\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:02 Y:97 P:E5 SP:F9 PPU:  1,148 CYC:16830\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:02 Y:97 P:67 SP:F9 PPU:  7,148 CYC:16832\n\
FA67  60        RTS                             A:F0 X:02 Y:97 P:67 SP:F9 PPU: 16,148 CYC:16835\n\
E96D  AD 47 06  LDA $0647 = 36                  A:F0 X:02 Y:97 P:67 SP:FB PPU: 34,148 CYC:16841\n\
E970  C9 36     CMP #$36                        A:36 X:02 Y:97 P:65 SP:FB PPU: 46,148 CYC:16845\n\
E972  F0 02     BEQ $E976                       A:36 X:02 Y:97 P:67 SP:FB PPU: 52,148 CYC:16847\n\
E976  C8        INY                             A:36 X:02 Y:97 P:67 SP:FB PPU: 61,148 CYC:16850\n\
E977  A9 EB     LDA #$EB                        A:36 X:02 Y:98 P:E5 SP:FB PPU: 67,148 CYC:16852\n\
E979  85 47     STA $47 = 47                    A:EB X:02 Y:98 P:E5 SP:FB PPU: 73,148 CYC:16854\n\
E97B  20 31 FA  JSR $FA31                       A:EB X:02 Y:98 P:E5 SP:FB PPU: 82,148 CYC:16857\n\
FA31  24 01     BIT $01 = FF                    A:EB X:02 Y:98 P:E5 SP:F9 PPU:100,148 CYC:16863\n\
FA33  18        CLC                             A:EB X:02 Y:98 P:E5 SP:F9 PPU:109,148 CYC:16866\n\
FA34  A9 40     LDA #$40                        A:EB X:02 Y:98 P:E4 SP:F9 PPU:115,148 CYC:16868\n\
FA36  60        RTS                             A:40 X:02 Y:98 P:64 SP:F9 PPU:121,148 CYC:16870\n\
E97E  C7 47    *DCP $47 = EB                    A:40 X:02 Y:98 P:64 SP:FB PPU:139,148 CYC:16876\n\
E980  EA        NOP                             A:40 X:02 Y:98 P:64 SP:FB PPU:154,148 CYC:16881\n\
E981  EA        NOP                             A:40 X:02 Y:98 P:64 SP:FB PPU:160,148 CYC:16883\n\
E982  EA        NOP                             A:40 X:02 Y:98 P:64 SP:FB PPU:166,148 CYC:16885\n\
E983  EA        NOP                             A:40 X:02 Y:98 P:64 SP:FB PPU:172,148 CYC:16887\n\
E984  20 37 FA  JSR $FA37                       A:40 X:02 Y:98 P:64 SP:FB PPU:178,148 CYC:16889\n\
FA37  50 2C     BVC $FA65                       A:40 X:02 Y:98 P:64 SP:F9 PPU:196,148 CYC:16895\n\
FA39  B0 2A     BCS $FA65                       A:40 X:02 Y:98 P:64 SP:F9 PPU:202,148 CYC:16897\n\
FA3B  30 28     BMI $FA65                       A:40 X:02 Y:98 P:64 SP:F9 PPU:208,148 CYC:16899\n\
FA3D  C9 40     CMP #$40                        A:40 X:02 Y:98 P:64 SP:F9 PPU:214,148 CYC:16901\n\
FA3F  D0 24     BNE $FA65                       A:40 X:02 Y:98 P:67 SP:F9 PPU:220,148 CYC:16903\n\
FA41  60        RTS                             A:40 X:02 Y:98 P:67 SP:F9 PPU:226,148 CYC:16905\n\
E987  A5 47     LDA $47 = EA                    A:40 X:02 Y:98 P:67 SP:FB PPU:244,148 CYC:16911\n\
E989  C9 EA     CMP #$EA                        A:EA X:02 Y:98 P:E5 SP:FB PPU:253,148 CYC:16914\n\
E98B  F0 02     BEQ $E98F                       A:EA X:02 Y:98 P:67 SP:FB PPU:259,148 CYC:16916\n\
E98F  C8        INY                             A:EA X:02 Y:98 P:67 SP:FB PPU:268,148 CYC:16919\n\
E990  A9 00     LDA #$00                        A:EA X:02 Y:99 P:E5 SP:FB PPU:274,148 CYC:16921\n\
E992  85 47     STA $47 = EA                    A:00 X:02 Y:99 P:67 SP:FB PPU:280,148 CYC:16923\n\
E994  20 42 FA  JSR $FA42                       A:00 X:02 Y:99 P:67 SP:FB PPU:289,148 CYC:16926\n\
FA42  B8        CLV                             A:00 X:02 Y:99 P:67 SP:F9 PPU:307,148 CYC:16932\n\
FA43  38        SEC                             A:00 X:02 Y:99 P:27 SP:F9 PPU:313,148 CYC:16934\n\
FA44  A9 FF     LDA #$FF                        A:00 X:02 Y:99 P:27 SP:F9 PPU:319,148 CYC:16936\n\
FA46  60        RTS                             A:FF X:02 Y:99 P:A5 SP:F9 PPU:325,148 CYC:16938\n\
E997  C7 47    *DCP $47 = 00                    A:FF X:02 Y:99 P:A5 SP:FB PPU:  2,149 CYC:16944\n\
E999  EA        NOP                             A:FF X:02 Y:99 P:27 SP:FB PPU: 17,149 CYC:16949\n\
E99A  EA        NOP                             A:FF X:02 Y:99 P:27 SP:FB PPU: 23,149 CYC:16951\n\
E99B  EA        NOP                             A:FF X:02 Y:99 P:27 SP:FB PPU: 29,149 CYC:16953\n\
E99C  EA        NOP                             A:FF X:02 Y:99 P:27 SP:FB PPU: 35,149 CYC:16955\n\
E99D  20 47 FA  JSR $FA47                       A:FF X:02 Y:99 P:27 SP:FB PPU: 41,149 CYC:16957\n\
FA47  70 1C     BVS $FA65                       A:FF X:02 Y:99 P:27 SP:F9 PPU: 59,149 CYC:16963\n\
FA49  D0 1A     BNE $FA65                       A:FF X:02 Y:99 P:27 SP:F9 PPU: 65,149 CYC:16965\n\
FA4B  30 18     BMI $FA65                       A:FF X:02 Y:99 P:27 SP:F9 PPU: 71,149 CYC:16967\n\
FA4D  90 16     BCC $FA65                       A:FF X:02 Y:99 P:27 SP:F9 PPU: 77,149 CYC:16969\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:02 Y:99 P:27 SP:F9 PPU: 83,149 CYC:16971\n\
FA51  D0 12     BNE $FA65                       A:FF X:02 Y:99 P:27 SP:F9 PPU: 89,149 CYC:16973\n\
FA53  60        RTS                             A:FF X:02 Y:99 P:27 SP:F9 PPU: 95,149 CYC:16975\n\
E9A0  A5 47     LDA $47 = FF                    A:FF X:02 Y:99 P:27 SP:FB PPU:113,149 CYC:16981\n\
E9A2  C9 FF     CMP #$FF                        A:FF X:02 Y:99 P:A5 SP:FB PPU:122,149 CYC:16984\n\
E9A4  F0 02     BEQ $E9A8                       A:FF X:02 Y:99 P:27 SP:FB PPU:128,149 CYC:16986\n\
E9A8  C8        INY                             A:FF X:02 Y:99 P:27 SP:FB PPU:137,149 CYC:16989\n\
E9A9  A9 37     LDA #$37                        A:FF X:02 Y:9A P:A5 SP:FB PPU:143,149 CYC:16991\n\
E9AB  85 47     STA $47 = FF                    A:37 X:02 Y:9A P:25 SP:FB PPU:149,149 CYC:16993\n\
E9AD  20 54 FA  JSR $FA54                       A:37 X:02 Y:9A P:25 SP:FB PPU:158,149 CYC:16996\n\
FA54  24 01     BIT $01 = FF                    A:37 X:02 Y:9A P:25 SP:F9 PPU:176,149 CYC:17002\n\
FA56  A9 F0     LDA #$F0                        A:37 X:02 Y:9A P:E5 SP:F9 PPU:185,149 CYC:17005\n\
FA58  60        RTS                             A:F0 X:02 Y:9A P:E5 SP:F9 PPU:191,149 CYC:17007\n\
E9B0  C7 47    *DCP $47 = 37                    A:F0 X:02 Y:9A P:E5 SP:FB PPU:209,149 CYC:17013\n\
E9B2  EA        NOP                             A:F0 X:02 Y:9A P:E5 SP:FB PPU:224,149 CYC:17018\n\
E9B3  EA        NOP                             A:F0 X:02 Y:9A P:E5 SP:FB PPU:230,149 CYC:17020\n\
E9B4  EA        NOP                             A:F0 X:02 Y:9A P:E5 SP:FB PPU:236,149 CYC:17022\n\
E9B5  EA        NOP                             A:F0 X:02 Y:9A P:E5 SP:FB PPU:242,149 CYC:17024\n\
E9B6  20 59 FA  JSR $FA59                       A:F0 X:02 Y:9A P:E5 SP:FB PPU:248,149 CYC:17026\n\
FA59  50 0A     BVC $FA65                       A:F0 X:02 Y:9A P:E5 SP:F9 PPU:266,149 CYC:17032\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:02 Y:9A P:E5 SP:F9 PPU:272,149 CYC:17034\n\
FA5D  10 06     BPL $FA65                       A:F0 X:02 Y:9A P:E5 SP:F9 PPU:278,149 CYC:17036\n\
FA5F  90 04     BCC $FA65                       A:F0 X:02 Y:9A P:E5 SP:F9 PPU:284,149 CYC:17038\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:02 Y:9A P:E5 SP:F9 PPU:290,149 CYC:17040\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:02 Y:9A P:67 SP:F9 PPU:296,149 CYC:17042\n\
FA67  60        RTS                             A:F0 X:02 Y:9A P:67 SP:F9 PPU:305,149 CYC:17045\n\
E9B9  A5 47     LDA $47 = 36                    A:F0 X:02 Y:9A P:67 SP:FB PPU:323,149 CYC:17051\n\
E9BB  C9 36     CMP #$36                        A:36 X:02 Y:9A P:65 SP:FB PPU:332,149 CYC:17054\n\
E9BD  F0 02     BEQ $E9C1                       A:36 X:02 Y:9A P:67 SP:FB PPU:338,149 CYC:17056\n\
E9C1  C8        INY                             A:36 X:02 Y:9A P:67 SP:FB PPU:  6,150 CYC:17059\n\
E9C2  A9 EB     LDA #$EB                        A:36 X:02 Y:9B P:E5 SP:FB PPU: 12,150 CYC:17061\n\
E9C4  8D 47 06  STA $0647 = 36                  A:EB X:02 Y:9B P:E5 SP:FB PPU: 18,150 CYC:17063\n\
E9C7  20 31 FA  JSR $FA31                       A:EB X:02 Y:9B P:E5 SP:FB PPU: 30,150 CYC:17067\n\
FA31  24 01     BIT $01 = FF                    A:EB X:02 Y:9B P:E5 SP:F9 PPU: 48,150 CYC:17073\n\
FA33  18        CLC                             A:EB X:02 Y:9B P:E5 SP:F9 PPU: 57,150 CYC:17076\n\
FA34  A9 40     LDA #$40                        A:EB X:02 Y:9B P:E4 SP:F9 PPU: 63,150 CYC:17078\n\
FA36  60        RTS                             A:40 X:02 Y:9B P:64 SP:F9 PPU: 69,150 CYC:17080\n\
E9CA  CF 47 06 *DCP $0647 = EB                  A:40 X:02 Y:9B P:64 SP:FB PPU: 87,150 CYC:17086\n\
E9CD  EA        NOP                             A:40 X:02 Y:9B P:64 SP:FB PPU:105,150 CYC:17092\n\
E9CE  EA        NOP                             A:40 X:02 Y:9B P:64 SP:FB PPU:111,150 CYC:17094\n\
E9CF  EA        NOP                             A:40 X:02 Y:9B P:64 SP:FB PPU:117,150 CYC:17096\n\
E9D0  EA        NOP                             A:40 X:02 Y:9B P:64 SP:FB PPU:123,150 CYC:17098\n\
E9D1  20 37 FA  JSR $FA37                       A:40 X:02 Y:9B P:64 SP:FB PPU:129,150 CYC:17100\n\
FA37  50 2C     BVC $FA65                       A:40 X:02 Y:9B P:64 SP:F9 PPU:147,150 CYC:17106\n\
FA39  B0 2A     BCS $FA65                       A:40 X:02 Y:9B P:64 SP:F9 PPU:153,150 CYC:17108\n\
FA3B  30 28     BMI $FA65                       A:40 X:02 Y:9B P:64 SP:F9 PPU:159,150 CYC:17110\n\
FA3D  C9 40     CMP #$40                        A:40 X:02 Y:9B P:64 SP:F9 PPU:165,150 CYC:17112\n\
FA3F  D0 24     BNE $FA65                       A:40 X:02 Y:9B P:67 SP:F9 PPU:171,150 CYC:17114\n\
FA41  60        RTS                             A:40 X:02 Y:9B P:67 SP:F9 PPU:177,150 CYC:17116\n\
E9D4  AD 47 06  LDA $0647 = EA                  A:40 X:02 Y:9B P:67 SP:FB PPU:195,150 CYC:17122\n\
E9D7  C9 EA     CMP #$EA                        A:EA X:02 Y:9B P:E5 SP:FB PPU:207,150 CYC:17126\n\
E9D9  F0 02     BEQ $E9DD                       A:EA X:02 Y:9B P:67 SP:FB PPU:213,150 CYC:17128\n\
E9DD  C8        INY                             A:EA X:02 Y:9B P:67 SP:FB PPU:222,150 CYC:17131\n\
E9DE  A9 00     LDA #$00                        A:EA X:02 Y:9C P:E5 SP:FB PPU:228,150 CYC:17133\n\
E9E0  8D 47 06  STA $0647 = EA                  A:00 X:02 Y:9C P:67 SP:FB PPU:234,150 CYC:17135\n\
E9E3  20 42 FA  JSR $FA42                       A:00 X:02 Y:9C P:67 SP:FB PPU:246,150 CYC:17139\n\
FA42  B8        CLV                             A:00 X:02 Y:9C P:67 SP:F9 PPU:264,150 CYC:17145\n\
FA43  38        SEC                             A:00 X:02 Y:9C P:27 SP:F9 PPU:270,150 CYC:17147\n\
FA44  A9 FF     LDA #$FF                        A:00 X:02 Y:9C P:27 SP:F9 PPU:276,150 CYC:17149\n\
FA46  60        RTS                             A:FF X:02 Y:9C P:A5 SP:F9 PPU:282,150 CYC:17151\n\
E9E6  CF 47 06 *DCP $0647 = 00                  A:FF X:02 Y:9C P:A5 SP:FB PPU:300,150 CYC:17157\n\
E9E9  EA        NOP                             A:FF X:02 Y:9C P:27 SP:FB PPU:318,150 CYC:17163\n\
E9EA  EA        NOP                             A:FF X:02 Y:9C P:27 SP:FB PPU:324,150 CYC:17165\n\
E9EB  EA        NOP                             A:FF X:02 Y:9C P:27 SP:FB PPU:330,150 CYC:17167\n\
E9EC  EA        NOP                             A:FF X:02 Y:9C P:27 SP:FB PPU:336,150 CYC:17169\n\
E9ED  20 47 FA  JSR $FA47                       A:FF X:02 Y:9C P:27 SP:FB PPU:  1,151 CYC:17171\n\
FA47  70 1C     BVS $FA65                       A:FF X:02 Y:9C P:27 SP:F9 PPU: 19,151 CYC:17177\n\
FA49  D0 1A     BNE $FA65                       A:FF X:02 Y:9C P:27 SP:F9 PPU: 25,151 CYC:17179\n\
FA4B  30 18     BMI $FA65                       A:FF X:02 Y:9C P:27 SP:F9 PPU: 31,151 CYC:17181\n\
FA4D  90 16     BCC $FA65                       A:FF X:02 Y:9C P:27 SP:F9 PPU: 37,151 CYC:17183\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:02 Y:9C P:27 SP:F9 PPU: 43,151 CYC:17185\n\
FA51  D0 12     BNE $FA65                       A:FF X:02 Y:9C P:27 SP:F9 PPU: 49,151 CYC:17187\n\
FA53  60        RTS                             A:FF X:02 Y:9C P:27 SP:F9 PPU: 55,151 CYC:17189\n\
E9F0  AD 47 06  LDA $0647 = FF                  A:FF X:02 Y:9C P:27 SP:FB PPU: 73,151 CYC:17195\n\
E9F3  C9 FF     CMP #$FF                        A:FF X:02 Y:9C P:A5 SP:FB PPU: 85,151 CYC:17199\n\
E9F5  F0 02     BEQ $E9F9                       A:FF X:02 Y:9C P:27 SP:FB PPU: 91,151 CYC:17201\n\
E9F9  C8        INY                             A:FF X:02 Y:9C P:27 SP:FB PPU:100,151 CYC:17204\n\
E9FA  A9 37     LDA #$37                        A:FF X:02 Y:9D P:A5 SP:FB PPU:106,151 CYC:17206\n\
E9FC  8D 47 06  STA $0647 = FF                  A:37 X:02 Y:9D P:25 SP:FB PPU:112,151 CYC:17208\n\
E9FF  20 54 FA  JSR $FA54                       A:37 X:02 Y:9D P:25 SP:FB PPU:124,151 CYC:17212\n\
FA54  24 01     BIT $01 = FF                    A:37 X:02 Y:9D P:25 SP:F9 PPU:142,151 CYC:17218\n\
FA56  A9 F0     LDA #$F0                        A:37 X:02 Y:9D P:E5 SP:F9 PPU:151,151 CYC:17221\n\
FA58  60        RTS                             A:F0 X:02 Y:9D P:E5 SP:F9 PPU:157,151 CYC:17223\n\
EA02  CF 47 06 *DCP $0647 = 37                  A:F0 X:02 Y:9D P:E5 SP:FB PPU:175,151 CYC:17229\n\
EA05  EA        NOP                             A:F0 X:02 Y:9D P:E5 SP:FB PPU:193,151 CYC:17235\n\
EA06  EA        NOP                             A:F0 X:02 Y:9D P:E5 SP:FB PPU:199,151 CYC:17237\n\
EA07  EA        NOP                             A:F0 X:02 Y:9D P:E5 SP:FB PPU:205,151 CYC:17239\n\
EA08  EA        NOP                             A:F0 X:02 Y:9D P:E5 SP:FB PPU:211,151 CYC:17241\n\
EA09  20 59 FA  JSR $FA59                       A:F0 X:02 Y:9D P:E5 SP:FB PPU:217,151 CYC:17243\n\
FA59  50 0A     BVC $FA65                       A:F0 X:02 Y:9D P:E5 SP:F9 PPU:235,151 CYC:17249\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:02 Y:9D P:E5 SP:F9 PPU:241,151 CYC:17251\n\
FA5D  10 06     BPL $FA65                       A:F0 X:02 Y:9D P:E5 SP:F9 PPU:247,151 CYC:17253\n\
FA5F  90 04     BCC $FA65                       A:F0 X:02 Y:9D P:E5 SP:F9 PPU:253,151 CYC:17255\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:02 Y:9D P:E5 SP:F9 PPU:259,151 CYC:17257\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:02 Y:9D P:67 SP:F9 PPU:265,151 CYC:17259\n\
FA67  60        RTS                             A:F0 X:02 Y:9D P:67 SP:F9 PPU:274,151 CYC:17262\n\
EA0C  AD 47 06  LDA $0647 = 36                  A:F0 X:02 Y:9D P:67 SP:FB PPU:292,151 CYC:17268\n\
EA0F  C9 36     CMP #$36                        A:36 X:02 Y:9D P:65 SP:FB PPU:304,151 CYC:17272\n\
EA11  F0 02     BEQ $EA15                       A:36 X:02 Y:9D P:67 SP:FB PPU:310,151 CYC:17274\n\
EA15  A9 EB     LDA #$EB                        A:36 X:02 Y:9D P:67 SP:FB PPU:319,151 CYC:17277\n\
EA17  8D 47 06  STA $0647 = 36                  A:EB X:02 Y:9D P:E5 SP:FB PPU:325,151 CYC:17279\n\
EA1A  A9 48     LDA #$48                        A:EB X:02 Y:9D P:E5 SP:FB PPU:337,151 CYC:17283\n\
EA1C  85 45     STA $45 = 32                    A:48 X:02 Y:9D P:65 SP:FB PPU:  2,152 CYC:17285\n\
EA1E  A9 05     LDA #$05                        A:48 X:02 Y:9D P:65 SP:FB PPU: 11,152 CYC:17288\n\
EA20  85 46     STA $46 = 04                    A:05 X:02 Y:9D P:65 SP:FB PPU: 17,152 CYC:17290\n\
EA22  A0 FF     LDY #$FF                        A:05 X:02 Y:9D P:65 SP:FB PPU: 26,152 CYC:17293\n\
EA24  20 31 FA  JSR $FA31                       A:05 X:02 Y:FF P:E5 SP:FB PPU: 32,152 CYC:17295\n\
FA31  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:E5 SP:F9 PPU: 50,152 CYC:17301\n\
FA33  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU: 59,152 CYC:17304\n\
FA34  A9 40     LDA #$40                        A:05 X:02 Y:FF P:E4 SP:F9 PPU: 65,152 CYC:17306\n\
FA36  60        RTS                             A:40 X:02 Y:FF P:64 SP:F9 PPU: 71,152 CYC:17308\n\
EA27  D3 45    *DCP ($45),Y = 0548 @ 0647 = EB  A:40 X:02 Y:FF P:64 SP:FB PPU: 89,152 CYC:17314\n\
EA29  EA        NOP                             A:40 X:02 Y:FF P:64 SP:FB PPU:113,152 CYC:17322\n\
EA2A  EA        NOP                             A:40 X:02 Y:FF P:64 SP:FB PPU:119,152 CYC:17324\n\
EA2B  08        PHP                             A:40 X:02 Y:FF P:64 SP:FB PPU:125,152 CYC:17326\n\
EA2C  48        PHA                             A:40 X:02 Y:FF P:64 SP:FA PPU:134,152 CYC:17329\n\
EA2D  A0 9E     LDY #$9E                        A:40 X:02 Y:FF P:64 SP:F9 PPU:143,152 CYC:17332\n\
EA2F  68        PLA                             A:40 X:02 Y:9E P:E4 SP:F9 PPU:149,152 CYC:17334\n\
EA30  28        PLP                             A:40 X:02 Y:9E P:64 SP:FA PPU:161,152 CYC:17338\n\
EA31  20 37 FA  JSR $FA37                       A:40 X:02 Y:9E P:64 SP:FB PPU:173,152 CYC:17342\n\
FA37  50 2C     BVC $FA65                       A:40 X:02 Y:9E P:64 SP:F9 PPU:191,152 CYC:17348\n\
FA39  B0 2A     BCS $FA65                       A:40 X:02 Y:9E P:64 SP:F9 PPU:197,152 CYC:17350\n\
FA3B  30 28     BMI $FA65                       A:40 X:02 Y:9E P:64 SP:F9 PPU:203,152 CYC:17352\n\
FA3D  C9 40     CMP #$40                        A:40 X:02 Y:9E P:64 SP:F9 PPU:209,152 CYC:17354\n\
FA3F  D0 24     BNE $FA65                       A:40 X:02 Y:9E P:67 SP:F9 PPU:215,152 CYC:17356\n\
FA41  60        RTS                             A:40 X:02 Y:9E P:67 SP:F9 PPU:221,152 CYC:17358\n\
EA34  AD 47 06  LDA $0647 = EA                  A:40 X:02 Y:9E P:67 SP:FB PPU:239,152 CYC:17364\n\
EA37  C9 EA     CMP #$EA                        A:EA X:02 Y:9E P:E5 SP:FB PPU:251,152 CYC:17368\n\
EA39  F0 02     BEQ $EA3D                       A:EA X:02 Y:9E P:67 SP:FB PPU:257,152 CYC:17370\n\
EA3D  A0 FF     LDY #$FF                        A:EA X:02 Y:9E P:67 SP:FB PPU:266,152 CYC:17373\n\
EA3F  A9 00     LDA #$00                        A:EA X:02 Y:FF P:E5 SP:FB PPU:272,152 CYC:17375\n\
EA41  8D 47 06  STA $0647 = EA                  A:00 X:02 Y:FF P:67 SP:FB PPU:278,152 CYC:17377\n\
EA44  20 42 FA  JSR $FA42                       A:00 X:02 Y:FF P:67 SP:FB PPU:290,152 CYC:17381\n\
FA42  B8        CLV                             A:00 X:02 Y:FF P:67 SP:F9 PPU:308,152 CYC:17387\n\
FA43  38        SEC                             A:00 X:02 Y:FF P:27 SP:F9 PPU:314,152 CYC:17389\n\
FA44  A9 FF     LDA #$FF                        A:00 X:02 Y:FF P:27 SP:F9 PPU:320,152 CYC:17391\n\
FA46  60        RTS                             A:FF X:02 Y:FF P:A5 SP:F9 PPU:326,152 CYC:17393\n\
EA47  D3 45    *DCP ($45),Y = 0548 @ 0647 = 00  A:FF X:02 Y:FF P:A5 SP:FB PPU:  3,153 CYC:17399\n\
EA49  EA        NOP                             A:FF X:02 Y:FF P:27 SP:FB PPU: 27,153 CYC:17407\n\
EA4A  EA        NOP                             A:FF X:02 Y:FF P:27 SP:FB PPU: 33,153 CYC:17409\n\
EA4B  08        PHP                             A:FF X:02 Y:FF P:27 SP:FB PPU: 39,153 CYC:17411\n\
EA4C  48        PHA                             A:FF X:02 Y:FF P:27 SP:FA PPU: 48,153 CYC:17414\n\
EA4D  A0 9F     LDY #$9F                        A:FF X:02 Y:FF P:27 SP:F9 PPU: 57,153 CYC:17417\n\
EA4F  68        PLA                             A:FF X:02 Y:9F P:A5 SP:F9 PPU: 63,153 CYC:17419\n\
EA50  28        PLP                             A:FF X:02 Y:9F P:A5 SP:FA PPU: 75,153 CYC:17423\n\
EA51  20 47 FA  JSR $FA47                       A:FF X:02 Y:9F P:27 SP:FB PPU: 87,153 CYC:17427\n\
FA47  70 1C     BVS $FA65                       A:FF X:02 Y:9F P:27 SP:F9 PPU:105,153 CYC:17433\n\
FA49  D0 1A     BNE $FA65                       A:FF X:02 Y:9F P:27 SP:F9 PPU:111,153 CYC:17435\n\
FA4B  30 18     BMI $FA65                       A:FF X:02 Y:9F P:27 SP:F9 PPU:117,153 CYC:17437\n\
FA4D  90 16     BCC $FA65                       A:FF X:02 Y:9F P:27 SP:F9 PPU:123,153 CYC:17439\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:02 Y:9F P:27 SP:F9 PPU:129,153 CYC:17441\n\
FA51  D0 12     BNE $FA65                       A:FF X:02 Y:9F P:27 SP:F9 PPU:135,153 CYC:17443\n\
FA53  60        RTS                             A:FF X:02 Y:9F P:27 SP:F9 PPU:141,153 CYC:17445\n\
EA54  AD 47 06  LDA $0647 = FF                  A:FF X:02 Y:9F P:27 SP:FB PPU:159,153 CYC:17451\n\
EA57  C9 FF     CMP #$FF                        A:FF X:02 Y:9F P:A5 SP:FB PPU:171,153 CYC:17455\n\
EA59  F0 02     BEQ $EA5D                       A:FF X:02 Y:9F P:27 SP:FB PPU:177,153 CYC:17457\n\
EA5D  A0 FF     LDY #$FF                        A:FF X:02 Y:9F P:27 SP:FB PPU:186,153 CYC:17460\n\
EA5F  A9 37     LDA #$37                        A:FF X:02 Y:FF P:A5 SP:FB PPU:192,153 CYC:17462\n\
EA61  8D 47 06  STA $0647 = FF                  A:37 X:02 Y:FF P:25 SP:FB PPU:198,153 CYC:17464\n\
EA64  20 54 FA  JSR $FA54                       A:37 X:02 Y:FF P:25 SP:FB PPU:210,153 CYC:17468\n\
FA54  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU:228,153 CYC:17474\n\
FA56  A9 F0     LDA #$F0                        A:37 X:02 Y:FF P:E5 SP:F9 PPU:237,153 CYC:17477\n\
FA58  60        RTS                             A:F0 X:02 Y:FF P:E5 SP:F9 PPU:243,153 CYC:17479\n\
EA67  D3 45    *DCP ($45),Y = 0548 @ 0647 = 37  A:F0 X:02 Y:FF P:E5 SP:FB PPU:261,153 CYC:17485\n\
EA69  EA        NOP                             A:F0 X:02 Y:FF P:E5 SP:FB PPU:285,153 CYC:17493\n\
EA6A  EA        NOP                             A:F0 X:02 Y:FF P:E5 SP:FB PPU:291,153 CYC:17495\n\
EA6B  08        PHP                             A:F0 X:02 Y:FF P:E5 SP:FB PPU:297,153 CYC:17497\n\
EA6C  48        PHA                             A:F0 X:02 Y:FF P:E5 SP:FA PPU:306,153 CYC:17500\n\
EA6D  A0 A0     LDY #$A0                        A:F0 X:02 Y:FF P:E5 SP:F9 PPU:315,153 CYC:17503\n\
EA6F  68        PLA                             A:F0 X:02 Y:A0 P:E5 SP:F9 PPU:321,153 CYC:17505\n\
EA70  28        PLP                             A:F0 X:02 Y:A0 P:E5 SP:FA PPU:333,153 CYC:17509\n\
EA71  20 59 FA  JSR $FA59                       A:F0 X:02 Y:A0 P:E5 SP:FB PPU:  4,154 CYC:17513\n\
FA59  50 0A     BVC $FA65                       A:F0 X:02 Y:A0 P:E5 SP:F9 PPU: 22,154 CYC:17519\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:02 Y:A0 P:E5 SP:F9 PPU: 28,154 CYC:17521\n\
FA5D  10 06     BPL $FA65                       A:F0 X:02 Y:A0 P:E5 SP:F9 PPU: 34,154 CYC:17523\n\
FA5F  90 04     BCC $FA65                       A:F0 X:02 Y:A0 P:E5 SP:F9 PPU: 40,154 CYC:17525\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:02 Y:A0 P:E5 SP:F9 PPU: 46,154 CYC:17527\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:02 Y:A0 P:67 SP:F9 PPU: 52,154 CYC:17529\n\
FA67  60        RTS                             A:F0 X:02 Y:A0 P:67 SP:F9 PPU: 61,154 CYC:17532\n\
EA74  AD 47 06  LDA $0647 = 36                  A:F0 X:02 Y:A0 P:67 SP:FB PPU: 79,154 CYC:17538\n\
EA77  C9 36     CMP #$36                        A:36 X:02 Y:A0 P:65 SP:FB PPU: 91,154 CYC:17542\n\
EA79  F0 02     BEQ $EA7D                       A:36 X:02 Y:A0 P:67 SP:FB PPU: 97,154 CYC:17544\n\
EA7D  A0 A1     LDY #$A1                        A:36 X:02 Y:A0 P:67 SP:FB PPU:106,154 CYC:17547\n\
EA7F  A2 FF     LDX #$FF                        A:36 X:02 Y:A1 P:E5 SP:FB PPU:112,154 CYC:17549\n\
EA81  A9 EB     LDA #$EB                        A:36 X:FF Y:A1 P:E5 SP:FB PPU:118,154 CYC:17551\n\
EA83  85 47     STA $47 = 36                    A:EB X:FF Y:A1 P:E5 SP:FB PPU:124,154 CYC:17553\n\
EA85  20 31 FA  JSR $FA31                       A:EB X:FF Y:A1 P:E5 SP:FB PPU:133,154 CYC:17556\n\
FA31  24 01     BIT $01 = FF                    A:EB X:FF Y:A1 P:E5 SP:F9 PPU:151,154 CYC:17562\n\
FA33  18        CLC                             A:EB X:FF Y:A1 P:E5 SP:F9 PPU:160,154 CYC:17565\n\
FA34  A9 40     LDA #$40                        A:EB X:FF Y:A1 P:E4 SP:F9 PPU:166,154 CYC:17567\n\
FA36  60        RTS                             A:40 X:FF Y:A1 P:64 SP:F9 PPU:172,154 CYC:17569\n\
EA88  D7 48    *DCP $48,X @ 47 = EB             A:40 X:FF Y:A1 P:64 SP:FB PPU:190,154 CYC:17575\n\
EA8A  EA        NOP                             A:40 X:FF Y:A1 P:64 SP:FB PPU:208,154 CYC:17581\n\
EA8B  EA        NOP                             A:40 X:FF Y:A1 P:64 SP:FB PPU:214,154 CYC:17583\n\
EA8C  EA        NOP                             A:40 X:FF Y:A1 P:64 SP:FB PPU:220,154 CYC:17585\n\
EA8D  EA        NOP                             A:40 X:FF Y:A1 P:64 SP:FB PPU:226,154 CYC:17587\n\
EA8E  20 37 FA  JSR $FA37                       A:40 X:FF Y:A1 P:64 SP:FB PPU:232,154 CYC:17589\n\
FA37  50 2C     BVC $FA65                       A:40 X:FF Y:A1 P:64 SP:F9 PPU:250,154 CYC:17595\n\
FA39  B0 2A     BCS $FA65                       A:40 X:FF Y:A1 P:64 SP:F9 PPU:256,154 CYC:17597\n\
FA3B  30 28     BMI $FA65                       A:40 X:FF Y:A1 P:64 SP:F9 PPU:262,154 CYC:17599\n\
FA3D  C9 40     CMP #$40                        A:40 X:FF Y:A1 P:64 SP:F9 PPU:268,154 CYC:17601\n\
FA3F  D0 24     BNE $FA65                       A:40 X:FF Y:A1 P:67 SP:F9 PPU:274,154 CYC:17603\n\
FA41  60        RTS                             A:40 X:FF Y:A1 P:67 SP:F9 PPU:280,154 CYC:17605\n\
EA91  A5 47     LDA $47 = EA                    A:40 X:FF Y:A1 P:67 SP:FB PPU:298,154 CYC:17611\n\
EA93  C9 EA     CMP #$EA                        A:EA X:FF Y:A1 P:E5 SP:FB PPU:307,154 CYC:17614\n\
EA95  F0 02     BEQ $EA99                       A:EA X:FF Y:A1 P:67 SP:FB PPU:313,154 CYC:17616\n\
EA99  C8        INY                             A:EA X:FF Y:A1 P:67 SP:FB PPU:322,154 CYC:17619\n\
EA9A  A9 00     LDA #$00                        A:EA X:FF Y:A2 P:E5 SP:FB PPU:328,154 CYC:17621\n\
EA9C  85 47     STA $47 = EA                    A:00 X:FF Y:A2 P:67 SP:FB PPU:334,154 CYC:17623\n\
EA9E  20 42 FA  JSR $FA42                       A:00 X:FF Y:A2 P:67 SP:FB PPU:  2,155 CYC:17626\n\
FA42  B8        CLV                             A:00 X:FF Y:A2 P:67 SP:F9 PPU: 20,155 CYC:17632\n\
FA43  38        SEC                             A:00 X:FF Y:A2 P:27 SP:F9 PPU: 26,155 CYC:17634\n\
FA44  A9 FF     LDA #$FF                        A:00 X:FF Y:A2 P:27 SP:F9 PPU: 32,155 CYC:17636\n\
FA46  60        RTS                             A:FF X:FF Y:A2 P:A5 SP:F9 PPU: 38,155 CYC:17638\n\
EAA1  D7 48    *DCP $48,X @ 47 = 00             A:FF X:FF Y:A2 P:A5 SP:FB PPU: 56,155 CYC:17644\n\
EAA3  EA        NOP                             A:FF X:FF Y:A2 P:27 SP:FB PPU: 74,155 CYC:17650\n\
EAA4  EA        NOP                             A:FF X:FF Y:A2 P:27 SP:FB PPU: 80,155 CYC:17652\n\
EAA5  EA        NOP                             A:FF X:FF Y:A2 P:27 SP:FB PPU: 86,155 CYC:17654\n\
EAA6  EA        NOP                             A:FF X:FF Y:A2 P:27 SP:FB PPU: 92,155 CYC:17656\n\
EAA7  20 47 FA  JSR $FA47                       A:FF X:FF Y:A2 P:27 SP:FB PPU: 98,155 CYC:17658\n\
FA47  70 1C     BVS $FA65                       A:FF X:FF Y:A2 P:27 SP:F9 PPU:116,155 CYC:17664\n\
FA49  D0 1A     BNE $FA65                       A:FF X:FF Y:A2 P:27 SP:F9 PPU:122,155 CYC:17666\n\
FA4B  30 18     BMI $FA65                       A:FF X:FF Y:A2 P:27 SP:F9 PPU:128,155 CYC:17668\n\
FA4D  90 16     BCC $FA65                       A:FF X:FF Y:A2 P:27 SP:F9 PPU:134,155 CYC:17670\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:FF Y:A2 P:27 SP:F9 PPU:140,155 CYC:17672\n\
FA51  D0 12     BNE $FA65                       A:FF X:FF Y:A2 P:27 SP:F9 PPU:146,155 CYC:17674\n\
FA53  60        RTS                             A:FF X:FF Y:A2 P:27 SP:F9 PPU:152,155 CYC:17676\n\
EAAA  A5 47     LDA $47 = FF                    A:FF X:FF Y:A2 P:27 SP:FB PPU:170,155 CYC:17682\n\
EAAC  C9 FF     CMP #$FF                        A:FF X:FF Y:A2 P:A5 SP:FB PPU:179,155 CYC:17685\n\
EAAE  F0 02     BEQ $EAB2                       A:FF X:FF Y:A2 P:27 SP:FB PPU:185,155 CYC:17687\n\
EAB2  C8        INY                             A:FF X:FF Y:A2 P:27 SP:FB PPU:194,155 CYC:17690\n\
EAB3  A9 37     LDA #$37                        A:FF X:FF Y:A3 P:A5 SP:FB PPU:200,155 CYC:17692\n\
EAB5  85 47     STA $47 = FF                    A:37 X:FF Y:A3 P:25 SP:FB PPU:206,155 CYC:17694\n\
EAB7  20 54 FA  JSR $FA54                       A:37 X:FF Y:A3 P:25 SP:FB PPU:215,155 CYC:17697\n\
FA54  24 01     BIT $01 = FF                    A:37 X:FF Y:A3 P:25 SP:F9 PPU:233,155 CYC:17703\n\
FA56  A9 F0     LDA #$F0                        A:37 X:FF Y:A3 P:E5 SP:F9 PPU:242,155 CYC:17706\n\
FA58  60        RTS                             A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:248,155 CYC:17708\n\
EABA  D7 48    *DCP $48,X @ 47 = 37             A:F0 X:FF Y:A3 P:E5 SP:FB PPU:266,155 CYC:17714\n\
EABC  EA        NOP                             A:F0 X:FF Y:A3 P:E5 SP:FB PPU:284,155 CYC:17720\n\
EABD  EA        NOP                             A:F0 X:FF Y:A3 P:E5 SP:FB PPU:290,155 CYC:17722\n\
EABE  EA        NOP                             A:F0 X:FF Y:A3 P:E5 SP:FB PPU:296,155 CYC:17724\n\
EABF  EA        NOP                             A:F0 X:FF Y:A3 P:E5 SP:FB PPU:302,155 CYC:17726\n\
EAC0  20 59 FA  JSR $FA59                       A:F0 X:FF Y:A3 P:E5 SP:FB PPU:308,155 CYC:17728\n\
FA59  50 0A     BVC $FA65                       A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:326,155 CYC:17734\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:332,155 CYC:17736\n\
FA5D  10 06     BPL $FA65                       A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:338,155 CYC:17738\n\
FA5F  90 04     BCC $FA65                       A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:  3,156 CYC:17740\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:FF Y:A3 P:E5 SP:F9 PPU:  9,156 CYC:17742\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:FF Y:A3 P:67 SP:F9 PPU: 15,156 CYC:17744\n\
FA67  60        RTS                             A:F0 X:FF Y:A3 P:67 SP:F9 PPU: 24,156 CYC:17747\n\
EAC3  A5 47     LDA $47 = 36                    A:F0 X:FF Y:A3 P:67 SP:FB PPU: 42,156 CYC:17753\n\
EAC5  C9 36     CMP #$36                        A:36 X:FF Y:A3 P:65 SP:FB PPU: 51,156 CYC:17756\n\
EAC7  F0 02     BEQ $EACB                       A:36 X:FF Y:A3 P:67 SP:FB PPU: 57,156 CYC:17758\n\
EACB  A9 EB     LDA #$EB                        A:36 X:FF Y:A3 P:67 SP:FB PPU: 66,156 CYC:17761\n\
EACD  8D 47 06  STA $0647 = 36                  A:EB X:FF Y:A3 P:E5 SP:FB PPU: 72,156 CYC:17763\n\
EAD0  A0 FF     LDY #$FF                        A:EB X:FF Y:A3 P:E5 SP:FB PPU: 84,156 CYC:17767\n\
EAD2  20 31 FA  JSR $FA31                       A:EB X:FF Y:FF P:E5 SP:FB PPU: 90,156 CYC:17769\n\
FA31  24 01     BIT $01 = FF                    A:EB X:FF Y:FF P:E5 SP:F9 PPU:108,156 CYC:17775\n\
FA33  18        CLC                             A:EB X:FF Y:FF P:E5 SP:F9 PPU:117,156 CYC:17778\n\
FA34  A9 40     LDA #$40                        A:EB X:FF Y:FF P:E4 SP:F9 PPU:123,156 CYC:17780\n\
FA36  60        RTS                             A:40 X:FF Y:FF P:64 SP:F9 PPU:129,156 CYC:17782\n\
EAD5  DB 48 05 *DCP $0548,Y @ 0647 = EB         A:40 X:FF Y:FF P:64 SP:FB PPU:147,156 CYC:17788\n\
EAD8  EA        NOP                             A:40 X:FF Y:FF P:64 SP:FB PPU:168,156 CYC:17795\n\
EAD9  EA        NOP                             A:40 X:FF Y:FF P:64 SP:FB PPU:174,156 CYC:17797\n\
EADA  08        PHP                             A:40 X:FF Y:FF P:64 SP:FB PPU:180,156 CYC:17799\n\
EADB  48        PHA                             A:40 X:FF Y:FF P:64 SP:FA PPU:189,156 CYC:17802\n\
EADC  A0 A4     LDY #$A4                        A:40 X:FF Y:FF P:64 SP:F9 PPU:198,156 CYC:17805\n\
EADE  68        PLA                             A:40 X:FF Y:A4 P:E4 SP:F9 PPU:204,156 CYC:17807\n\
EADF  28        PLP                             A:40 X:FF Y:A4 P:64 SP:FA PPU:216,156 CYC:17811\n\
EAE0  20 37 FA  JSR $FA37                       A:40 X:FF Y:A4 P:64 SP:FB PPU:228,156 CYC:17815\n\
FA37  50 2C     BVC $FA65                       A:40 X:FF Y:A4 P:64 SP:F9 PPU:246,156 CYC:17821\n\
FA39  B0 2A     BCS $FA65                       A:40 X:FF Y:A4 P:64 SP:F9 PPU:252,156 CYC:17823\n\
FA3B  30 28     BMI $FA65                       A:40 X:FF Y:A4 P:64 SP:F9 PPU:258,156 CYC:17825\n\
FA3D  C9 40     CMP #$40                        A:40 X:FF Y:A4 P:64 SP:F9 PPU:264,156 CYC:17827\n\
FA3F  D0 24     BNE $FA65                       A:40 X:FF Y:A4 P:67 SP:F9 PPU:270,156 CYC:17829\n\
FA41  60        RTS                             A:40 X:FF Y:A4 P:67 SP:F9 PPU:276,156 CYC:17831\n\
EAE3  AD 47 06  LDA $0647 = EA                  A:40 X:FF Y:A4 P:67 SP:FB PPU:294,156 CYC:17837\n\
EAE6  C9 EA     CMP #$EA                        A:EA X:FF Y:A4 P:E5 SP:FB PPU:306,156 CYC:17841\n\
EAE8  F0 02     BEQ $EAEC                       A:EA X:FF Y:A4 P:67 SP:FB PPU:312,156 CYC:17843\n\
EAEC  A0 FF     LDY #$FF                        A:EA X:FF Y:A4 P:67 SP:FB PPU:321,156 CYC:17846\n\
EAEE  A9 00     LDA #$00                        A:EA X:FF Y:FF P:E5 SP:FB PPU:327,156 CYC:17848\n\
EAF0  8D 47 06  STA $0647 = EA                  A:00 X:FF Y:FF P:67 SP:FB PPU:333,156 CYC:17850\n\
EAF3  20 42 FA  JSR $FA42                       A:00 X:FF Y:FF P:67 SP:FB PPU:  4,157 CYC:17854\n\
FA42  B8        CLV                             A:00 X:FF Y:FF P:67 SP:F9 PPU: 22,157 CYC:17860\n\
FA43  38        SEC                             A:00 X:FF Y:FF P:27 SP:F9 PPU: 28,157 CYC:17862\n\
FA44  A9 FF     LDA #$FF                        A:00 X:FF Y:FF P:27 SP:F9 PPU: 34,157 CYC:17864\n\
FA46  60        RTS                             A:FF X:FF Y:FF P:A5 SP:F9 PPU: 40,157 CYC:17866\n\
EAF6  DB 48 05 *DCP $0548,Y @ 0647 = 00         A:FF X:FF Y:FF P:A5 SP:FB PPU: 58,157 CYC:17872\n\
EAF9  EA        NOP                             A:FF X:FF Y:FF P:27 SP:FB PPU: 79,157 CYC:17879\n\
EAFA  EA        NOP                             A:FF X:FF Y:FF P:27 SP:FB PPU: 85,157 CYC:17881\n\
EAFB  08        PHP                             A:FF X:FF Y:FF P:27 SP:FB PPU: 91,157 CYC:17883\n\
EAFC  48        PHA                             A:FF X:FF Y:FF P:27 SP:FA PPU:100,157 CYC:17886\n\
EAFD  A0 A5     LDY #$A5                        A:FF X:FF Y:FF P:27 SP:F9 PPU:109,157 CYC:17889\n\
EAFF  68        PLA                             A:FF X:FF Y:A5 P:A5 SP:F9 PPU:115,157 CYC:17891\n\
EB00  28        PLP                             A:FF X:FF Y:A5 P:A5 SP:FA PPU:127,157 CYC:17895\n\
EB01  20 47 FA  JSR $FA47                       A:FF X:FF Y:A5 P:27 SP:FB PPU:139,157 CYC:17899\n\
FA47  70 1C     BVS $FA65                       A:FF X:FF Y:A5 P:27 SP:F9 PPU:157,157 CYC:17905\n\
FA49  D0 1A     BNE $FA65                       A:FF X:FF Y:A5 P:27 SP:F9 PPU:163,157 CYC:17907\n\
FA4B  30 18     BMI $FA65                       A:FF X:FF Y:A5 P:27 SP:F9 PPU:169,157 CYC:17909\n\
FA4D  90 16     BCC $FA65                       A:FF X:FF Y:A5 P:27 SP:F9 PPU:175,157 CYC:17911\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:FF Y:A5 P:27 SP:F9 PPU:181,157 CYC:17913\n\
FA51  D0 12     BNE $FA65                       A:FF X:FF Y:A5 P:27 SP:F9 PPU:187,157 CYC:17915\n\
FA53  60        RTS                             A:FF X:FF Y:A5 P:27 SP:F9 PPU:193,157 CYC:17917\n\
EB04  AD 47 06  LDA $0647 = FF                  A:FF X:FF Y:A5 P:27 SP:FB PPU:211,157 CYC:17923\n\
EB07  C9 FF     CMP #$FF                        A:FF X:FF Y:A5 P:A5 SP:FB PPU:223,157 CYC:17927\n\
EB09  F0 02     BEQ $EB0D                       A:FF X:FF Y:A5 P:27 SP:FB PPU:229,157 CYC:17929\n\
EB0D  A0 FF     LDY #$FF                        A:FF X:FF Y:A5 P:27 SP:FB PPU:238,157 CYC:17932\n\
EB0F  A9 37     LDA #$37                        A:FF X:FF Y:FF P:A5 SP:FB PPU:244,157 CYC:17934\n\
EB11  8D 47 06  STA $0647 = FF                  A:37 X:FF Y:FF P:25 SP:FB PPU:250,157 CYC:17936\n\
EB14  20 54 FA  JSR $FA54                       A:37 X:FF Y:FF P:25 SP:FB PPU:262,157 CYC:17940\n\
FA54  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU:280,157 CYC:17946\n\
FA56  A9 F0     LDA #$F0                        A:37 X:FF Y:FF P:E5 SP:F9 PPU:289,157 CYC:17949\n\
FA58  60        RTS                             A:F0 X:FF Y:FF P:E5 SP:F9 PPU:295,157 CYC:17951\n\
EB17  DB 48 05 *DCP $0548,Y @ 0647 = 37         A:F0 X:FF Y:FF P:E5 SP:FB PPU:313,157 CYC:17957\n\
EB1A  EA        NOP                             A:F0 X:FF Y:FF P:E5 SP:FB PPU:334,157 CYC:17964\n\
EB1B  EA        NOP                             A:F0 X:FF Y:FF P:E5 SP:FB PPU:340,157 CYC:17966\n\
EB1C  08        PHP                             A:F0 X:FF Y:FF P:E5 SP:FB PPU:  5,158 CYC:17968\n\
EB1D  48        PHA                             A:F0 X:FF Y:FF P:E5 SP:FA PPU: 14,158 CYC:17971\n\
EB1E  A0 A6     LDY #$A6                        A:F0 X:FF Y:FF P:E5 SP:F9 PPU: 23,158 CYC:17974\n\
EB20  68        PLA                             A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 29,158 CYC:17976\n\
EB21  28        PLP                             A:F0 X:FF Y:A6 P:E5 SP:FA PPU: 41,158 CYC:17980\n\
EB22  20 59 FA  JSR $FA59                       A:F0 X:FF Y:A6 P:E5 SP:FB PPU: 53,158 CYC:17984\n\
FA59  50 0A     BVC $FA65                       A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 71,158 CYC:17990\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 77,158 CYC:17992\n\
FA5D  10 06     BPL $FA65                       A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 83,158 CYC:17994\n\
FA5F  90 04     BCC $FA65                       A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 89,158 CYC:17996\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:FF Y:A6 P:E5 SP:F9 PPU: 95,158 CYC:17998\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:FF Y:A6 P:67 SP:F9 PPU:101,158 CYC:18000\n\
FA67  60        RTS                             A:F0 X:FF Y:A6 P:67 SP:F9 PPU:110,158 CYC:18003\n\
EB25  AD 47 06  LDA $0647 = 36                  A:F0 X:FF Y:A6 P:67 SP:FB PPU:128,158 CYC:18009\n\
EB28  C9 36     CMP #$36                        A:36 X:FF Y:A6 P:65 SP:FB PPU:140,158 CYC:18013\n\
EB2A  F0 02     BEQ $EB2E                       A:36 X:FF Y:A6 P:67 SP:FB PPU:146,158 CYC:18015\n\
EB2E  A0 A7     LDY #$A7                        A:36 X:FF Y:A6 P:67 SP:FB PPU:155,158 CYC:18018\n\
EB30  A2 FF     LDX #$FF                        A:36 X:FF Y:A7 P:E5 SP:FB PPU:161,158 CYC:18020\n\
EB32  A9 EB     LDA #$EB                        A:36 X:FF Y:A7 P:E5 SP:FB PPU:167,158 CYC:18022\n\
EB34  8D 47 06  STA $0647 = 36                  A:EB X:FF Y:A7 P:E5 SP:FB PPU:173,158 CYC:18024\n\
EB37  20 31 FA  JSR $FA31                       A:EB X:FF Y:A7 P:E5 SP:FB PPU:185,158 CYC:18028\n\
FA31  24 01     BIT $01 = FF                    A:EB X:FF Y:A7 P:E5 SP:F9 PPU:203,158 CYC:18034\n\
FA33  18        CLC                             A:EB X:FF Y:A7 P:E5 SP:F9 PPU:212,158 CYC:18037\n\
FA34  A9 40     LDA #$40                        A:EB X:FF Y:A7 P:E4 SP:F9 PPU:218,158 CYC:18039\n\
FA36  60        RTS                             A:40 X:FF Y:A7 P:64 SP:F9 PPU:224,158 CYC:18041\n\
EB3A  DF 48 05 *DCP $0548,X @ 0647 = EB         A:40 X:FF Y:A7 P:64 SP:FB PPU:242,158 CYC:18047\n\
EB3D  EA        NOP                             A:40 X:FF Y:A7 P:64 SP:FB PPU:263,158 CYC:18054\n\
EB3E  EA        NOP                             A:40 X:FF Y:A7 P:64 SP:FB PPU:269,158 CYC:18056\n\
EB3F  EA        NOP                             A:40 X:FF Y:A7 P:64 SP:FB PPU:275,158 CYC:18058\n\
EB40  EA        NOP                             A:40 X:FF Y:A7 P:64 SP:FB PPU:281,158 CYC:18060\n\
EB41  20 37 FA  JSR $FA37                       A:40 X:FF Y:A7 P:64 SP:FB PPU:287,158 CYC:18062\n\
FA37  50 2C     BVC $FA65                       A:40 X:FF Y:A7 P:64 SP:F9 PPU:305,158 CYC:18068\n\
FA39  B0 2A     BCS $FA65                       A:40 X:FF Y:A7 P:64 SP:F9 PPU:311,158 CYC:18070\n\
FA3B  30 28     BMI $FA65                       A:40 X:FF Y:A7 P:64 SP:F9 PPU:317,158 CYC:18072\n\
FA3D  C9 40     CMP #$40                        A:40 X:FF Y:A7 P:64 SP:F9 PPU:323,158 CYC:18074\n\
FA3F  D0 24     BNE $FA65                       A:40 X:FF Y:A7 P:67 SP:F9 PPU:329,158 CYC:18076\n\
FA41  60        RTS                             A:40 X:FF Y:A7 P:67 SP:F9 PPU:335,158 CYC:18078\n\
EB44  AD 47 06  LDA $0647 = EA                  A:40 X:FF Y:A7 P:67 SP:FB PPU: 12,159 CYC:18084\n\
EB47  C9 EA     CMP #$EA                        A:EA X:FF Y:A7 P:E5 SP:FB PPU: 24,159 CYC:18088\n\
EB49  F0 02     BEQ $EB4D                       A:EA X:FF Y:A7 P:67 SP:FB PPU: 30,159 CYC:18090\n\
EB4D  C8        INY                             A:EA X:FF Y:A7 P:67 SP:FB PPU: 39,159 CYC:18093\n\
EB4E  A9 00     LDA #$00                        A:EA X:FF Y:A8 P:E5 SP:FB PPU: 45,159 CYC:18095\n\
EB50  8D 47 06  STA $0647 = EA                  A:00 X:FF Y:A8 P:67 SP:FB PPU: 51,159 CYC:18097\n\
EB53  20 42 FA  JSR $FA42                       A:00 X:FF Y:A8 P:67 SP:FB PPU: 63,159 CYC:18101\n\
FA42  B8        CLV                             A:00 X:FF Y:A8 P:67 SP:F9 PPU: 81,159 CYC:18107\n\
FA43  38        SEC                             A:00 X:FF Y:A8 P:27 SP:F9 PPU: 87,159 CYC:18109\n\
FA44  A9 FF     LDA #$FF                        A:00 X:FF Y:A8 P:27 SP:F9 PPU: 93,159 CYC:18111\n\
FA46  60        RTS                             A:FF X:FF Y:A8 P:A5 SP:F9 PPU: 99,159 CYC:18113\n\
EB56  DF 48 05 *DCP $0548,X @ 0647 = 00         A:FF X:FF Y:A8 P:A5 SP:FB PPU:117,159 CYC:18119\n\
EB59  EA        NOP                             A:FF X:FF Y:A8 P:27 SP:FB PPU:138,159 CYC:18126\n\
EB5A  EA        NOP                             A:FF X:FF Y:A8 P:27 SP:FB PPU:144,159 CYC:18128\n\
EB5B  EA        NOP                             A:FF X:FF Y:A8 P:27 SP:FB PPU:150,159 CYC:18130\n\
EB5C  EA        NOP                             A:FF X:FF Y:A8 P:27 SP:FB PPU:156,159 CYC:18132\n\
EB5D  20 47 FA  JSR $FA47                       A:FF X:FF Y:A8 P:27 SP:FB PPU:162,159 CYC:18134\n\
FA47  70 1C     BVS $FA65                       A:FF X:FF Y:A8 P:27 SP:F9 PPU:180,159 CYC:18140\n\
FA49  D0 1A     BNE $FA65                       A:FF X:FF Y:A8 P:27 SP:F9 PPU:186,159 CYC:18142\n\
FA4B  30 18     BMI $FA65                       A:FF X:FF Y:A8 P:27 SP:F9 PPU:192,159 CYC:18144\n\
FA4D  90 16     BCC $FA65                       A:FF X:FF Y:A8 P:27 SP:F9 PPU:198,159 CYC:18146\n\
FA4F  C9 FF     CMP #$FF                        A:FF X:FF Y:A8 P:27 SP:F9 PPU:204,159 CYC:18148\n\
FA51  D0 12     BNE $FA65                       A:FF X:FF Y:A8 P:27 SP:F9 PPU:210,159 CYC:18150\n\
FA53  60        RTS                             A:FF X:FF Y:A8 P:27 SP:F9 PPU:216,159 CYC:18152\n\
EB60  AD 47 06  LDA $0647 = FF                  A:FF X:FF Y:A8 P:27 SP:FB PPU:234,159 CYC:18158\n\
EB63  C9 FF     CMP #$FF                        A:FF X:FF Y:A8 P:A5 SP:FB PPU:246,159 CYC:18162\n\
EB65  F0 02     BEQ $EB69                       A:FF X:FF Y:A8 P:27 SP:FB PPU:252,159 CYC:18164\n\
EB69  C8        INY                             A:FF X:FF Y:A8 P:27 SP:FB PPU:261,159 CYC:18167\n\
EB6A  A9 37     LDA #$37                        A:FF X:FF Y:A9 P:A5 SP:FB PPU:267,159 CYC:18169\n\
EB6C  8D 47 06  STA $0647 = FF                  A:37 X:FF Y:A9 P:25 SP:FB PPU:273,159 CYC:18171\n\
EB6F  20 54 FA  JSR $FA54                       A:37 X:FF Y:A9 P:25 SP:FB PPU:285,159 CYC:18175\n\
FA54  24 01     BIT $01 = FF                    A:37 X:FF Y:A9 P:25 SP:F9 PPU:303,159 CYC:18181\n\
FA56  A9 F0     LDA #$F0                        A:37 X:FF Y:A9 P:E5 SP:F9 PPU:312,159 CYC:18184\n\
FA58  60        RTS                             A:F0 X:FF Y:A9 P:E5 SP:F9 PPU:318,159 CYC:18186\n\
EB72  DF 48 05 *DCP $0548,X @ 0647 = 37         A:F0 X:FF Y:A9 P:E5 SP:FB PPU:336,159 CYC:18192\n\
EB75  EA        NOP                             A:F0 X:FF Y:A9 P:E5 SP:FB PPU: 16,160 CYC:18199\n\
EB76  EA        NOP                             A:F0 X:FF Y:A9 P:E5 SP:FB PPU: 22,160 CYC:18201\n\
EB77  EA        NOP                             A:F0 X:FF Y:A9 P:E5 SP:FB PPU: 28,160 CYC:18203\n\
EB78  EA        NOP                             A:F0 X:FF Y:A9 P:E5 SP:FB PPU: 34,160 CYC:18205\n\
EB79  20 59 FA  JSR $FA59                       A:F0 X:FF Y:A9 P:E5 SP:FB PPU: 40,160 CYC:18207\n\
FA59  50 0A     BVC $FA65                       A:F0 X:FF Y:A9 P:E5 SP:F9 PPU: 58,160 CYC:18213\n\
FA5B  F0 08     BEQ $FA65                       A:F0 X:FF Y:A9 P:E5 SP:F9 PPU: 64,160 CYC:18215\n\
FA5D  10 06     BPL $FA65                       A:F0 X:FF Y:A9 P:E5 SP:F9 PPU: 70,160 CYC:18217\n\
FA5F  90 04     BCC $FA65                       A:F0 X:FF Y:A9 P:E5 SP:F9 PPU: 76,160 CYC:18219\n\
FA61  C9 F0     CMP #$F0                        A:F0 X:FF Y:A9 P:E5 SP:F9 PPU: 82,160 CYC:18221\n\
FA63  F0 02     BEQ $FA67                       A:F0 X:FF Y:A9 P:67 SP:F9 PPU: 88,160 CYC:18223\n\
FA67  60        RTS                             A:F0 X:FF Y:A9 P:67 SP:F9 PPU: 97,160 CYC:18226\n\
EB7C  AD 47 06  LDA $0647 = 36                  A:F0 X:FF Y:A9 P:67 SP:FB PPU:115,160 CYC:18232\n\
EB7F  C9 36     CMP #$36                        A:36 X:FF Y:A9 P:65 SP:FB PPU:127,160 CYC:18236\n\
EB81  F0 02     BEQ $EB85                       A:36 X:FF Y:A9 P:67 SP:FB PPU:133,160 CYC:18238\n\
EB85  60        RTS                             A:36 X:FF Y:A9 P:67 SP:FB PPU:142,160 CYC:18241\n\
C63E  20 86 EB  JSR $EB86                       A:36 X:FF Y:A9 P:67 SP:FD PPU:160,160 CYC:18247\n\
EB86  A9 FF     LDA #$FF                        A:36 X:FF Y:A9 P:67 SP:FB PPU:178,160 CYC:18253\n\
EB88  85 01     STA $01 = FF                    A:FF X:FF Y:A9 P:E5 SP:FB PPU:184,160 CYC:18255\n\
EB8A  A0 AA     LDY #$AA                        A:FF X:FF Y:A9 P:E5 SP:FB PPU:193,160 CYC:18258\n\
EB8C  A2 02     LDX #$02                        A:FF X:FF Y:AA P:E5 SP:FB PPU:199,160 CYC:18260\n\
EB8E  A9 47     LDA #$47                        A:FF X:02 Y:AA P:65 SP:FB PPU:205,160 CYC:18262\n\
EB90  85 47     STA $47 = 36                    A:47 X:02 Y:AA P:65 SP:FB PPU:211,160 CYC:18264\n\
EB92  A9 06     LDA #$06                        A:47 X:02 Y:AA P:65 SP:FB PPU:220,160 CYC:18267\n\
EB94  85 48     STA $48 = 06                    A:06 X:02 Y:AA P:65 SP:FB PPU:226,160 CYC:18269\n\
EB96  A9 EB     LDA #$EB                        A:06 X:02 Y:AA P:65 SP:FB PPU:235,160 CYC:18272\n\
EB98  8D 47 06  STA $0647 = 36                  A:EB X:02 Y:AA P:E5 SP:FB PPU:241,160 CYC:18274\n\
EB9B  20 B1 FA  JSR $FAB1                       A:EB X:02 Y:AA P:E5 SP:FB PPU:253,160 CYC:18278\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:02 Y:AA P:E5 SP:F9 PPU:271,160 CYC:18284\n\
FAB3  18        CLC                             A:EB X:02 Y:AA P:E5 SP:F9 PPU:280,160 CYC:18287\n\
FAB4  A9 40     LDA #$40                        A:EB X:02 Y:AA P:E4 SP:F9 PPU:286,160 CYC:18289\n\
FAB6  60        RTS                             A:40 X:02 Y:AA P:64 SP:F9 PPU:292,160 CYC:18291\n\
EB9E  E3 45    *ISB ($45,X) @ 47 = 0647 = EB    A:40 X:02 Y:AA P:64 SP:FB PPU:310,160 CYC:18297\n\
EBA0  EA        NOP                             A:53 X:02 Y:AA P:24 SP:FB PPU:334,160 CYC:18305\n\
EBA1  EA        NOP                             A:53 X:02 Y:AA P:24 SP:FB PPU:340,160 CYC:18307\n\
EBA2  EA        NOP                             A:53 X:02 Y:AA P:24 SP:FB PPU:  5,161 CYC:18309\n\
EBA3  EA        NOP                             A:53 X:02 Y:AA P:24 SP:FB PPU: 11,161 CYC:18311\n\
EBA4  20 B7 FA  JSR $FAB7                       A:53 X:02 Y:AA P:24 SP:FB PPU: 17,161 CYC:18313\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:02 Y:AA P:24 SP:F9 PPU: 35,161 CYC:18319\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:02 Y:AA P:24 SP:F9 PPU: 41,161 CYC:18321\n\
FABB  30 29     BMI $FAE6                       A:53 X:02 Y:AA P:24 SP:F9 PPU: 47,161 CYC:18323\n\
FABD  C9 53     CMP #$53                        A:53 X:02 Y:AA P:24 SP:F9 PPU: 53,161 CYC:18325\n\
FABF  D0 25     BNE $FAE6                       A:53 X:02 Y:AA P:27 SP:F9 PPU: 59,161 CYC:18327\n\
FAC1  60        RTS                             A:53 X:02 Y:AA P:27 SP:F9 PPU: 65,161 CYC:18329\n\
EBA7  AD 47 06  LDA $0647 = EC                  A:53 X:02 Y:AA P:27 SP:FB PPU: 83,161 CYC:18335\n\
EBAA  C9 EC     CMP #$EC                        A:EC X:02 Y:AA P:A5 SP:FB PPU: 95,161 CYC:18339\n\
EBAC  F0 02     BEQ $EBB0                       A:EC X:02 Y:AA P:27 SP:FB PPU:101,161 CYC:18341\n\
EBB0  C8        INY                             A:EC X:02 Y:AA P:27 SP:FB PPU:110,161 CYC:18344\n\
EBB1  A9 FF     LDA #$FF                        A:EC X:02 Y:AB P:A5 SP:FB PPU:116,161 CYC:18346\n\
EBB3  8D 47 06  STA $0647 = EC                  A:FF X:02 Y:AB P:A5 SP:FB PPU:122,161 CYC:18348\n\
EBB6  20 C2 FA  JSR $FAC2                       A:FF X:02 Y:AB P:A5 SP:FB PPU:134,161 CYC:18352\n\
FAC2  B8        CLV                             A:FF X:02 Y:AB P:A5 SP:F9 PPU:152,161 CYC:18358\n\
FAC3  38        SEC                             A:FF X:02 Y:AB P:A5 SP:F9 PPU:158,161 CYC:18360\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:02 Y:AB P:A5 SP:F9 PPU:164,161 CYC:18362\n\
FAC6  60        RTS                             A:FF X:02 Y:AB P:A5 SP:F9 PPU:170,161 CYC:18364\n\
EBB9  E3 45    *ISB ($45,X) @ 47 = 0647 = FF    A:FF X:02 Y:AB P:A5 SP:FB PPU:188,161 CYC:18370\n\
EBBB  EA        NOP                             A:FF X:02 Y:AB P:A5 SP:FB PPU:212,161 CYC:18378\n\
EBBC  EA        NOP                             A:FF X:02 Y:AB P:A5 SP:FB PPU:218,161 CYC:18380\n\
EBBD  EA        NOP                             A:FF X:02 Y:AB P:A5 SP:FB PPU:224,161 CYC:18382\n\
EBBE  EA        NOP                             A:FF X:02 Y:AB P:A5 SP:FB PPU:230,161 CYC:18384\n\
EBBF  20 C7 FA  JSR $FAC7                       A:FF X:02 Y:AB P:A5 SP:FB PPU:236,161 CYC:18386\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:02 Y:AB P:A5 SP:F9 PPU:254,161 CYC:18392\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:02 Y:AB P:A5 SP:F9 PPU:260,161 CYC:18394\n\
FACB  10 19     BPL $FAE6                       A:FF X:02 Y:AB P:A5 SP:F9 PPU:266,161 CYC:18396\n\
FACD  90 17     BCC $FAE6                       A:FF X:02 Y:AB P:A5 SP:F9 PPU:272,161 CYC:18398\n\
FACF  C9 FF     CMP #$FF                        A:FF X:02 Y:AB P:A5 SP:F9 PPU:278,161 CYC:18400\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:02 Y:AB P:27 SP:F9 PPU:284,161 CYC:18402\n\
FAD3  60        RTS                             A:FF X:02 Y:AB P:27 SP:F9 PPU:290,161 CYC:18404\n\
EBC2  AD 47 06  LDA $0647 = 00                  A:FF X:02 Y:AB P:27 SP:FB PPU:308,161 CYC:18410\n\
EBC5  C9 00     CMP #$00                        A:00 X:02 Y:AB P:27 SP:FB PPU:320,161 CYC:18414\n\
EBC7  F0 02     BEQ $EBCB                       A:00 X:02 Y:AB P:27 SP:FB PPU:326,161 CYC:18416\n\
EBCB  C8        INY                             A:00 X:02 Y:AB P:27 SP:FB PPU:335,161 CYC:18419\n\
EBCC  A9 37     LDA #$37                        A:00 X:02 Y:AC P:A5 SP:FB PPU:  0,162 CYC:18421\n\
EBCE  8D 47 06  STA $0647 = 00                  A:37 X:02 Y:AC P:25 SP:FB PPU:  6,162 CYC:18423\n\
EBD1  20 D4 FA  JSR $FAD4                       A:37 X:02 Y:AC P:25 SP:FB PPU: 18,162 CYC:18427\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:02 Y:AC P:25 SP:F9 PPU: 36,162 CYC:18433\n\
FAD6  38        SEC                             A:37 X:02 Y:AC P:E5 SP:F9 PPU: 45,162 CYC:18436\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:02 Y:AC P:E5 SP:F9 PPU: 51,162 CYC:18438\n\
FAD9  60        RTS                             A:F0 X:02 Y:AC P:E5 SP:F9 PPU: 57,162 CYC:18440\n\
EBD4  E3 45    *ISB ($45,X) @ 47 = 0647 = 37    A:F0 X:02 Y:AC P:E5 SP:FB PPU: 75,162 CYC:18446\n\
EBD6  EA        NOP                             A:B8 X:02 Y:AC P:A5 SP:FB PPU: 99,162 CYC:18454\n\
EBD7  EA        NOP                             A:B8 X:02 Y:AC P:A5 SP:FB PPU:105,162 CYC:18456\n\
EBD8  EA        NOP                             A:B8 X:02 Y:AC P:A5 SP:FB PPU:111,162 CYC:18458\n\
EBD9  EA        NOP                             A:B8 X:02 Y:AC P:A5 SP:FB PPU:117,162 CYC:18460\n\
EBDA  20 DA FA  JSR $FADA                       A:B8 X:02 Y:AC P:A5 SP:FB PPU:123,162 CYC:18462\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:02 Y:AC P:A5 SP:F9 PPU:141,162 CYC:18468\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:02 Y:AC P:A5 SP:F9 PPU:147,162 CYC:18470\n\
FADE  10 06     BPL $FAE6                       A:B8 X:02 Y:AC P:A5 SP:F9 PPU:153,162 CYC:18472\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:02 Y:AC P:A5 SP:F9 PPU:159,162 CYC:18474\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:02 Y:AC P:A5 SP:F9 PPU:165,162 CYC:18476\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:02 Y:AC P:27 SP:F9 PPU:171,162 CYC:18478\n\
FAE8  60        RTS                             A:B8 X:02 Y:AC P:27 SP:F9 PPU:180,162 CYC:18481\n\
EBDD  AD 47 06  LDA $0647 = 38                  A:B8 X:02 Y:AC P:27 SP:FB PPU:198,162 CYC:18487\n\
EBE0  C9 38     CMP #$38                        A:38 X:02 Y:AC P:25 SP:FB PPU:210,162 CYC:18491\n\
EBE2  F0 02     BEQ $EBE6                       A:38 X:02 Y:AC P:27 SP:FB PPU:216,162 CYC:18493\n\
EBE6  C8        INY                             A:38 X:02 Y:AC P:27 SP:FB PPU:225,162 CYC:18496\n\
EBE7  A9 EB     LDA #$EB                        A:38 X:02 Y:AD P:A5 SP:FB PPU:231,162 CYC:18498\n\
EBE9  85 47     STA $47 = 47                    A:EB X:02 Y:AD P:A5 SP:FB PPU:237,162 CYC:18500\n\
EBEB  20 B1 FA  JSR $FAB1                       A:EB X:02 Y:AD P:A5 SP:FB PPU:246,162 CYC:18503\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:02 Y:AD P:A5 SP:F9 PPU:264,162 CYC:18509\n\
FAB3  18        CLC                             A:EB X:02 Y:AD P:E5 SP:F9 PPU:273,162 CYC:18512\n\
FAB4  A9 40     LDA #$40                        A:EB X:02 Y:AD P:E4 SP:F9 PPU:279,162 CYC:18514\n\
FAB6  60        RTS                             A:40 X:02 Y:AD P:64 SP:F9 PPU:285,162 CYC:18516\n\
EBEE  E7 47    *ISB $47 = EB                    A:40 X:02 Y:AD P:64 SP:FB PPU:303,162 CYC:18522\n\
EBF0  EA        NOP                             A:53 X:02 Y:AD P:24 SP:FB PPU:318,162 CYC:18527\n\
EBF1  EA        NOP                             A:53 X:02 Y:AD P:24 SP:FB PPU:324,162 CYC:18529\n\
EBF2  EA        NOP                             A:53 X:02 Y:AD P:24 SP:FB PPU:330,162 CYC:18531\n\
EBF3  EA        NOP                             A:53 X:02 Y:AD P:24 SP:FB PPU:336,162 CYC:18533\n\
EBF4  20 B7 FA  JSR $FAB7                       A:53 X:02 Y:AD P:24 SP:FB PPU:  1,163 CYC:18535\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:02 Y:AD P:24 SP:F9 PPU: 19,163 CYC:18541\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:02 Y:AD P:24 SP:F9 PPU: 25,163 CYC:18543\n\
FABB  30 29     BMI $FAE6                       A:53 X:02 Y:AD P:24 SP:F9 PPU: 31,163 CYC:18545\n\
FABD  C9 53     CMP #$53                        A:53 X:02 Y:AD P:24 SP:F9 PPU: 37,163 CYC:18547\n\
FABF  D0 25     BNE $FAE6                       A:53 X:02 Y:AD P:27 SP:F9 PPU: 43,163 CYC:18549\n\
FAC1  60        RTS                             A:53 X:02 Y:AD P:27 SP:F9 PPU: 49,163 CYC:18551\n\
EBF7  A5 47     LDA $47 = EC                    A:53 X:02 Y:AD P:27 SP:FB PPU: 67,163 CYC:18557\n\
EBF9  C9 EC     CMP #$EC                        A:EC X:02 Y:AD P:A5 SP:FB PPU: 76,163 CYC:18560\n\
EBFB  F0 02     BEQ $EBFF                       A:EC X:02 Y:AD P:27 SP:FB PPU: 82,163 CYC:18562\n\
EBFF  C8        INY                             A:EC X:02 Y:AD P:27 SP:FB PPU: 91,163 CYC:18565\n\
EC00  A9 FF     LDA #$FF                        A:EC X:02 Y:AE P:A5 SP:FB PPU: 97,163 CYC:18567\n\
EC02  85 47     STA $47 = EC                    A:FF X:02 Y:AE P:A5 SP:FB PPU:103,163 CYC:18569\n\
EC04  20 C2 FA  JSR $FAC2                       A:FF X:02 Y:AE P:A5 SP:FB PPU:112,163 CYC:18572\n\
FAC2  B8        CLV                             A:FF X:02 Y:AE P:A5 SP:F9 PPU:130,163 CYC:18578\n\
FAC3  38        SEC                             A:FF X:02 Y:AE P:A5 SP:F9 PPU:136,163 CYC:18580\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:02 Y:AE P:A5 SP:F9 PPU:142,163 CYC:18582\n\
FAC6  60        RTS                             A:FF X:02 Y:AE P:A5 SP:F9 PPU:148,163 CYC:18584\n\
EC07  E7 47    *ISB $47 = FF                    A:FF X:02 Y:AE P:A5 SP:FB PPU:166,163 CYC:18590\n\
EC09  EA        NOP                             A:FF X:02 Y:AE P:A5 SP:FB PPU:181,163 CYC:18595\n\
EC0A  EA        NOP                             A:FF X:02 Y:AE P:A5 SP:FB PPU:187,163 CYC:18597\n\
EC0B  EA        NOP                             A:FF X:02 Y:AE P:A5 SP:FB PPU:193,163 CYC:18599\n\
EC0C  EA        NOP                             A:FF X:02 Y:AE P:A5 SP:FB PPU:199,163 CYC:18601\n\
EC0D  20 C7 FA  JSR $FAC7                       A:FF X:02 Y:AE P:A5 SP:FB PPU:205,163 CYC:18603\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:02 Y:AE P:A5 SP:F9 PPU:223,163 CYC:18609\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:02 Y:AE P:A5 SP:F9 PPU:229,163 CYC:18611\n\
FACB  10 19     BPL $FAE6                       A:FF X:02 Y:AE P:A5 SP:F9 PPU:235,163 CYC:18613\n\
FACD  90 17     BCC $FAE6                       A:FF X:02 Y:AE P:A5 SP:F9 PPU:241,163 CYC:18615\n\
FACF  C9 FF     CMP #$FF                        A:FF X:02 Y:AE P:A5 SP:F9 PPU:247,163 CYC:18617\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:02 Y:AE P:27 SP:F9 PPU:253,163 CYC:18619\n\
FAD3  60        RTS                             A:FF X:02 Y:AE P:27 SP:F9 PPU:259,163 CYC:18621\n\
EC10  A5 47     LDA $47 = 00                    A:FF X:02 Y:AE P:27 SP:FB PPU:277,163 CYC:18627\n\
EC12  C9 00     CMP #$00                        A:00 X:02 Y:AE P:27 SP:FB PPU:286,163 CYC:18630\n\
EC14  F0 02     BEQ $EC18                       A:00 X:02 Y:AE P:27 SP:FB PPU:292,163 CYC:18632\n\
EC18  C8        INY                             A:00 X:02 Y:AE P:27 SP:FB PPU:301,163 CYC:18635\n\
EC19  A9 37     LDA #$37                        A:00 X:02 Y:AF P:A5 SP:FB PPU:307,163 CYC:18637\n\
EC1B  85 47     STA $47 = 00                    A:37 X:02 Y:AF P:25 SP:FB PPU:313,163 CYC:18639\n\
EC1D  20 D4 FA  JSR $FAD4                       A:37 X:02 Y:AF P:25 SP:FB PPU:322,163 CYC:18642\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:02 Y:AF P:25 SP:F9 PPU:340,163 CYC:18648\n\
FAD6  38        SEC                             A:37 X:02 Y:AF P:E5 SP:F9 PPU:  8,164 CYC:18651\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:02 Y:AF P:E5 SP:F9 PPU: 14,164 CYC:18653\n\
FAD9  60        RTS                             A:F0 X:02 Y:AF P:E5 SP:F9 PPU: 20,164 CYC:18655\n\
EC20  E7 47    *ISB $47 = 37                    A:F0 X:02 Y:AF P:E5 SP:FB PPU: 38,164 CYC:18661\n\
EC22  EA        NOP                             A:B8 X:02 Y:AF P:A5 SP:FB PPU: 53,164 CYC:18666\n\
EC23  EA        NOP                             A:B8 X:02 Y:AF P:A5 SP:FB PPU: 59,164 CYC:18668\n\
EC24  EA        NOP                             A:B8 X:02 Y:AF P:A5 SP:FB PPU: 65,164 CYC:18670\n\
EC25  EA        NOP                             A:B8 X:02 Y:AF P:A5 SP:FB PPU: 71,164 CYC:18672\n\
EC26  20 DA FA  JSR $FADA                       A:B8 X:02 Y:AF P:A5 SP:FB PPU: 77,164 CYC:18674\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:02 Y:AF P:A5 SP:F9 PPU: 95,164 CYC:18680\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:02 Y:AF P:A5 SP:F9 PPU:101,164 CYC:18682\n\
FADE  10 06     BPL $FAE6                       A:B8 X:02 Y:AF P:A5 SP:F9 PPU:107,164 CYC:18684\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:02 Y:AF P:A5 SP:F9 PPU:113,164 CYC:18686\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:02 Y:AF P:A5 SP:F9 PPU:119,164 CYC:18688\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:02 Y:AF P:27 SP:F9 PPU:125,164 CYC:18690\n\
FAE8  60        RTS                             A:B8 X:02 Y:AF P:27 SP:F9 PPU:134,164 CYC:18693\n\
EC29  A5 47     LDA $47 = 38                    A:B8 X:02 Y:AF P:27 SP:FB PPU:152,164 CYC:18699\n\
EC2B  C9 38     CMP #$38                        A:38 X:02 Y:AF P:25 SP:FB PPU:161,164 CYC:18702\n\
EC2D  F0 02     BEQ $EC31                       A:38 X:02 Y:AF P:27 SP:FB PPU:167,164 CYC:18704\n\
EC31  C8        INY                             A:38 X:02 Y:AF P:27 SP:FB PPU:176,164 CYC:18707\n\
EC32  A9 EB     LDA #$EB                        A:38 X:02 Y:B0 P:A5 SP:FB PPU:182,164 CYC:18709\n\
EC34  8D 47 06  STA $0647 = 38                  A:EB X:02 Y:B0 P:A5 SP:FB PPU:188,164 CYC:18711\n\
EC37  20 B1 FA  JSR $FAB1                       A:EB X:02 Y:B0 P:A5 SP:FB PPU:200,164 CYC:18715\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:02 Y:B0 P:A5 SP:F9 PPU:218,164 CYC:18721\n\
FAB3  18        CLC                             A:EB X:02 Y:B0 P:E5 SP:F9 PPU:227,164 CYC:18724\n\
FAB4  A9 40     LDA #$40                        A:EB X:02 Y:B0 P:E4 SP:F9 PPU:233,164 CYC:18726\n\
FAB6  60        RTS                             A:40 X:02 Y:B0 P:64 SP:F9 PPU:239,164 CYC:18728\n\
EC3A  EF 47 06 *ISB $0647 = EB                  A:40 X:02 Y:B0 P:64 SP:FB PPU:257,164 CYC:18734\n\
EC3D  EA        NOP                             A:53 X:02 Y:B0 P:24 SP:FB PPU:275,164 CYC:18740\n\
EC3E  EA        NOP                             A:53 X:02 Y:B0 P:24 SP:FB PPU:281,164 CYC:18742\n\
EC3F  EA        NOP                             A:53 X:02 Y:B0 P:24 SP:FB PPU:287,164 CYC:18744\n\
EC40  EA        NOP                             A:53 X:02 Y:B0 P:24 SP:FB PPU:293,164 CYC:18746\n\
EC41  20 B7 FA  JSR $FAB7                       A:53 X:02 Y:B0 P:24 SP:FB PPU:299,164 CYC:18748\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:02 Y:B0 P:24 SP:F9 PPU:317,164 CYC:18754\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:02 Y:B0 P:24 SP:F9 PPU:323,164 CYC:18756\n\
FABB  30 29     BMI $FAE6                       A:53 X:02 Y:B0 P:24 SP:F9 PPU:329,164 CYC:18758\n\
FABD  C9 53     CMP #$53                        A:53 X:02 Y:B0 P:24 SP:F9 PPU:335,164 CYC:18760\n\
FABF  D0 25     BNE $FAE6                       A:53 X:02 Y:B0 P:27 SP:F9 PPU:  0,165 CYC:18762\n\
FAC1  60        RTS                             A:53 X:02 Y:B0 P:27 SP:F9 PPU:  6,165 CYC:18764\n\
EC44  AD 47 06  LDA $0647 = EC                  A:53 X:02 Y:B0 P:27 SP:FB PPU: 24,165 CYC:18770\n\
EC47  C9 EC     CMP #$EC                        A:EC X:02 Y:B0 P:A5 SP:FB PPU: 36,165 CYC:18774\n\
EC49  F0 02     BEQ $EC4D                       A:EC X:02 Y:B0 P:27 SP:FB PPU: 42,165 CYC:18776\n\
EC4D  C8        INY                             A:EC X:02 Y:B0 P:27 SP:FB PPU: 51,165 CYC:18779\n\
EC4E  A9 FF     LDA #$FF                        A:EC X:02 Y:B1 P:A5 SP:FB PPU: 57,165 CYC:18781\n\
EC50  8D 47 06  STA $0647 = EC                  A:FF X:02 Y:B1 P:A5 SP:FB PPU: 63,165 CYC:18783\n\
EC53  20 C2 FA  JSR $FAC2                       A:FF X:02 Y:B1 P:A5 SP:FB PPU: 75,165 CYC:18787\n\
FAC2  B8        CLV                             A:FF X:02 Y:B1 P:A5 SP:F9 PPU: 93,165 CYC:18793\n\
FAC3  38        SEC                             A:FF X:02 Y:B1 P:A5 SP:F9 PPU: 99,165 CYC:18795\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:02 Y:B1 P:A5 SP:F9 PPU:105,165 CYC:18797\n\
FAC6  60        RTS                             A:FF X:02 Y:B1 P:A5 SP:F9 PPU:111,165 CYC:18799\n\
EC56  EF 47 06 *ISB $0647 = FF                  A:FF X:02 Y:B1 P:A5 SP:FB PPU:129,165 CYC:18805\n\
EC59  EA        NOP                             A:FF X:02 Y:B1 P:A5 SP:FB PPU:147,165 CYC:18811\n\
EC5A  EA        NOP                             A:FF X:02 Y:B1 P:A5 SP:FB PPU:153,165 CYC:18813\n\
EC5B  EA        NOP                             A:FF X:02 Y:B1 P:A5 SP:FB PPU:159,165 CYC:18815\n\
EC5C  EA        NOP                             A:FF X:02 Y:B1 P:A5 SP:FB PPU:165,165 CYC:18817\n\
EC5D  20 C7 FA  JSR $FAC7                       A:FF X:02 Y:B1 P:A5 SP:FB PPU:171,165 CYC:18819\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:02 Y:B1 P:A5 SP:F9 PPU:189,165 CYC:18825\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:02 Y:B1 P:A5 SP:F9 PPU:195,165 CYC:18827\n\
FACB  10 19     BPL $FAE6                       A:FF X:02 Y:B1 P:A5 SP:F9 PPU:201,165 CYC:18829\n\
FACD  90 17     BCC $FAE6                       A:FF X:02 Y:B1 P:A5 SP:F9 PPU:207,165 CYC:18831\n\
FACF  C9 FF     CMP #$FF                        A:FF X:02 Y:B1 P:A5 SP:F9 PPU:213,165 CYC:18833\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:02 Y:B1 P:27 SP:F9 PPU:219,165 CYC:18835\n\
FAD3  60        RTS                             A:FF X:02 Y:B1 P:27 SP:F9 PPU:225,165 CYC:18837\n\
EC60  AD 47 06  LDA $0647 = 00                  A:FF X:02 Y:B1 P:27 SP:FB PPU:243,165 CYC:18843\n\
EC63  C9 00     CMP #$00                        A:00 X:02 Y:B1 P:27 SP:FB PPU:255,165 CYC:18847\n\
EC65  F0 02     BEQ $EC69                       A:00 X:02 Y:B1 P:27 SP:FB PPU:261,165 CYC:18849\n\
EC69  C8        INY                             A:00 X:02 Y:B1 P:27 SP:FB PPU:270,165 CYC:18852\n\
EC6A  A9 37     LDA #$37                        A:00 X:02 Y:B2 P:A5 SP:FB PPU:276,165 CYC:18854\n\
EC6C  8D 47 06  STA $0647 = 00                  A:37 X:02 Y:B2 P:25 SP:FB PPU:282,165 CYC:18856\n\
EC6F  20 D4 FA  JSR $FAD4                       A:37 X:02 Y:B2 P:25 SP:FB PPU:294,165 CYC:18860\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:02 Y:B2 P:25 SP:F9 PPU:312,165 CYC:18866\n\
FAD6  38        SEC                             A:37 X:02 Y:B2 P:E5 SP:F9 PPU:321,165 CYC:18869\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:02 Y:B2 P:E5 SP:F9 PPU:327,165 CYC:18871\n\
FAD9  60        RTS                             A:F0 X:02 Y:B2 P:E5 SP:F9 PPU:333,165 CYC:18873\n\
EC72  EF 47 06 *ISB $0647 = 37                  A:F0 X:02 Y:B2 P:E5 SP:FB PPU: 10,166 CYC:18879\n\
EC75  EA        NOP                             A:B8 X:02 Y:B2 P:A5 SP:FB PPU: 28,166 CYC:18885\n\
EC76  EA        NOP                             A:B8 X:02 Y:B2 P:A5 SP:FB PPU: 34,166 CYC:18887\n\
EC77  EA        NOP                             A:B8 X:02 Y:B2 P:A5 SP:FB PPU: 40,166 CYC:18889\n\
EC78  EA        NOP                             A:B8 X:02 Y:B2 P:A5 SP:FB PPU: 46,166 CYC:18891\n\
EC79  20 DA FA  JSR $FADA                       A:B8 X:02 Y:B2 P:A5 SP:FB PPU: 52,166 CYC:18893\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:02 Y:B2 P:A5 SP:F9 PPU: 70,166 CYC:18899\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:02 Y:B2 P:A5 SP:F9 PPU: 76,166 CYC:18901\n\
FADE  10 06     BPL $FAE6                       A:B8 X:02 Y:B2 P:A5 SP:F9 PPU: 82,166 CYC:18903\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:02 Y:B2 P:A5 SP:F9 PPU: 88,166 CYC:18905\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:02 Y:B2 P:A5 SP:F9 PPU: 94,166 CYC:18907\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:02 Y:B2 P:27 SP:F9 PPU:100,166 CYC:18909\n\
FAE8  60        RTS                             A:B8 X:02 Y:B2 P:27 SP:F9 PPU:109,166 CYC:18912\n\
EC7C  AD 47 06  LDA $0647 = 38                  A:B8 X:02 Y:B2 P:27 SP:FB PPU:127,166 CYC:18918\n\
EC7F  C9 38     CMP #$38                        A:38 X:02 Y:B2 P:25 SP:FB PPU:139,166 CYC:18922\n\
EC81  F0 02     BEQ $EC85                       A:38 X:02 Y:B2 P:27 SP:FB PPU:145,166 CYC:18924\n\
EC85  A9 EB     LDA #$EB                        A:38 X:02 Y:B2 P:27 SP:FB PPU:154,166 CYC:18927\n\
EC87  8D 47 06  STA $0647 = 38                  A:EB X:02 Y:B2 P:A5 SP:FB PPU:160,166 CYC:18929\n\
EC8A  A9 48     LDA #$48                        A:EB X:02 Y:B2 P:A5 SP:FB PPU:172,166 CYC:18933\n\
EC8C  85 45     STA $45 = 48                    A:48 X:02 Y:B2 P:25 SP:FB PPU:178,166 CYC:18935\n\
EC8E  A9 05     LDA #$05                        A:48 X:02 Y:B2 P:25 SP:FB PPU:187,166 CYC:18938\n\
EC90  85 46     STA $46 = 05                    A:05 X:02 Y:B2 P:25 SP:FB PPU:193,166 CYC:18940\n\
EC92  A0 FF     LDY #$FF                        A:05 X:02 Y:B2 P:25 SP:FB PPU:202,166 CYC:18943\n\
EC94  20 B1 FA  JSR $FAB1                       A:05 X:02 Y:FF P:A5 SP:FB PPU:208,166 CYC:18945\n\
FAB1  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:A5 SP:F9 PPU:226,166 CYC:18951\n\
FAB3  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU:235,166 CYC:18954\n\
FAB4  A9 40     LDA #$40                        A:05 X:02 Y:FF P:E4 SP:F9 PPU:241,166 CYC:18956\n\
FAB6  60        RTS                             A:40 X:02 Y:FF P:64 SP:F9 PPU:247,166 CYC:18958\n\
EC97  F3 45    *ISB ($45),Y = 0548 @ 0647 = EB  A:40 X:02 Y:FF P:64 SP:FB PPU:265,166 CYC:18964\n\
EC99  EA        NOP                             A:53 X:02 Y:FF P:24 SP:FB PPU:289,166 CYC:18972\n\
EC9A  EA        NOP                             A:53 X:02 Y:FF P:24 SP:FB PPU:295,166 CYC:18974\n\
EC9B  08        PHP                             A:53 X:02 Y:FF P:24 SP:FB PPU:301,166 CYC:18976\n\
EC9C  48        PHA                             A:53 X:02 Y:FF P:24 SP:FA PPU:310,166 CYC:18979\n\
EC9D  A0 B3     LDY #$B3                        A:53 X:02 Y:FF P:24 SP:F9 PPU:319,166 CYC:18982\n\
EC9F  68        PLA                             A:53 X:02 Y:B3 P:A4 SP:F9 PPU:325,166 CYC:18984\n\
ECA0  28        PLP                             A:53 X:02 Y:B3 P:24 SP:FA PPU:337,166 CYC:18988\n\
ECA1  20 B7 FA  JSR $FAB7                       A:53 X:02 Y:B3 P:24 SP:FB PPU:  8,167 CYC:18992\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:02 Y:B3 P:24 SP:F9 PPU: 26,167 CYC:18998\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:02 Y:B3 P:24 SP:F9 PPU: 32,167 CYC:19000\n\
FABB  30 29     BMI $FAE6                       A:53 X:02 Y:B3 P:24 SP:F9 PPU: 38,167 CYC:19002\n\
FABD  C9 53     CMP #$53                        A:53 X:02 Y:B3 P:24 SP:F9 PPU: 44,167 CYC:19004\n\
FABF  D0 25     BNE $FAE6                       A:53 X:02 Y:B3 P:27 SP:F9 PPU: 50,167 CYC:19006\n\
FAC1  60        RTS                             A:53 X:02 Y:B3 P:27 SP:F9 PPU: 56,167 CYC:19008\n\
ECA4  AD 47 06  LDA $0647 = EC                  A:53 X:02 Y:B3 P:27 SP:FB PPU: 74,167 CYC:19014\n\
ECA7  C9 EC     CMP #$EC                        A:EC X:02 Y:B3 P:A5 SP:FB PPU: 86,167 CYC:19018\n\
ECA9  F0 02     BEQ $ECAD                       A:EC X:02 Y:B3 P:27 SP:FB PPU: 92,167 CYC:19020\n\
ECAD  A0 FF     LDY #$FF                        A:EC X:02 Y:B3 P:27 SP:FB PPU:101,167 CYC:19023\n\
ECAF  A9 FF     LDA #$FF                        A:EC X:02 Y:FF P:A5 SP:FB PPU:107,167 CYC:19025\n\
ECB1  8D 47 06  STA $0647 = EC                  A:FF X:02 Y:FF P:A5 SP:FB PPU:113,167 CYC:19027\n\
ECB4  20 C2 FA  JSR $FAC2                       A:FF X:02 Y:FF P:A5 SP:FB PPU:125,167 CYC:19031\n\
FAC2  B8        CLV                             A:FF X:02 Y:FF P:A5 SP:F9 PPU:143,167 CYC:19037\n\
FAC3  38        SEC                             A:FF X:02 Y:FF P:A5 SP:F9 PPU:149,167 CYC:19039\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:02 Y:FF P:A5 SP:F9 PPU:155,167 CYC:19041\n\
FAC6  60        RTS                             A:FF X:02 Y:FF P:A5 SP:F9 PPU:161,167 CYC:19043\n\
ECB7  F3 45    *ISB ($45),Y = 0548 @ 0647 = FF  A:FF X:02 Y:FF P:A5 SP:FB PPU:179,167 CYC:19049\n\
ECB9  EA        NOP                             A:FF X:02 Y:FF P:A5 SP:FB PPU:203,167 CYC:19057\n\
ECBA  EA        NOP                             A:FF X:02 Y:FF P:A5 SP:FB PPU:209,167 CYC:19059\n\
ECBB  08        PHP                             A:FF X:02 Y:FF P:A5 SP:FB PPU:215,167 CYC:19061\n\
ECBC  48        PHA                             A:FF X:02 Y:FF P:A5 SP:FA PPU:224,167 CYC:19064\n\
ECBD  A0 B4     LDY #$B4                        A:FF X:02 Y:FF P:A5 SP:F9 PPU:233,167 CYC:19067\n\
ECBF  68        PLA                             A:FF X:02 Y:B4 P:A5 SP:F9 PPU:239,167 CYC:19069\n\
ECC0  28        PLP                             A:FF X:02 Y:B4 P:A5 SP:FA PPU:251,167 CYC:19073\n\
ECC1  20 C7 FA  JSR $FAC7                       A:FF X:02 Y:B4 P:A5 SP:FB PPU:263,167 CYC:19077\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:02 Y:B4 P:A5 SP:F9 PPU:281,167 CYC:19083\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:02 Y:B4 P:A5 SP:F9 PPU:287,167 CYC:19085\n\
FACB  10 19     BPL $FAE6                       A:FF X:02 Y:B4 P:A5 SP:F9 PPU:293,167 CYC:19087\n\
FACD  90 17     BCC $FAE6                       A:FF X:02 Y:B4 P:A5 SP:F9 PPU:299,167 CYC:19089\n\
FACF  C9 FF     CMP #$FF                        A:FF X:02 Y:B4 P:A5 SP:F9 PPU:305,167 CYC:19091\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:02 Y:B4 P:27 SP:F9 PPU:311,167 CYC:19093\n\
FAD3  60        RTS                             A:FF X:02 Y:B4 P:27 SP:F9 PPU:317,167 CYC:19095\n\
ECC4  AD 47 06  LDA $0647 = 00                  A:FF X:02 Y:B4 P:27 SP:FB PPU:335,167 CYC:19101\n\
ECC7  C9 00     CMP #$00                        A:00 X:02 Y:B4 P:27 SP:FB PPU:  6,168 CYC:19105\n\
ECC9  F0 02     BEQ $ECCD                       A:00 X:02 Y:B4 P:27 SP:FB PPU: 12,168 CYC:19107\n\
ECCD  A0 FF     LDY #$FF                        A:00 X:02 Y:B4 P:27 SP:FB PPU: 21,168 CYC:19110\n\
ECCF  A9 37     LDA #$37                        A:00 X:02 Y:FF P:A5 SP:FB PPU: 27,168 CYC:19112\n\
ECD1  8D 47 06  STA $0647 = 00                  A:37 X:02 Y:FF P:25 SP:FB PPU: 33,168 CYC:19114\n\
ECD4  20 D4 FA  JSR $FAD4                       A:37 X:02 Y:FF P:25 SP:FB PPU: 45,168 CYC:19118\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU: 63,168 CYC:19124\n\
FAD6  38        SEC                             A:37 X:02 Y:FF P:E5 SP:F9 PPU: 72,168 CYC:19127\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:02 Y:FF P:E5 SP:F9 PPU: 78,168 CYC:19129\n\
FAD9  60        RTS                             A:F0 X:02 Y:FF P:E5 SP:F9 PPU: 84,168 CYC:19131\n\
ECD7  F3 45    *ISB ($45),Y = 0548 @ 0647 = 37  A:F0 X:02 Y:FF P:E5 SP:FB PPU:102,168 CYC:19137\n\
ECD9  EA        NOP                             A:B8 X:02 Y:FF P:A5 SP:FB PPU:126,168 CYC:19145\n\
ECDA  EA        NOP                             A:B8 X:02 Y:FF P:A5 SP:FB PPU:132,168 CYC:19147\n\
ECDB  08        PHP                             A:B8 X:02 Y:FF P:A5 SP:FB PPU:138,168 CYC:19149\n\
ECDC  48        PHA                             A:B8 X:02 Y:FF P:A5 SP:FA PPU:147,168 CYC:19152\n\
ECDD  A0 B5     LDY #$B5                        A:B8 X:02 Y:FF P:A5 SP:F9 PPU:156,168 CYC:19155\n\
ECDF  68        PLA                             A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:162,168 CYC:19157\n\
ECE0  28        PLP                             A:B8 X:02 Y:B5 P:A5 SP:FA PPU:174,168 CYC:19161\n\
ECE1  20 DA FA  JSR $FADA                       A:B8 X:02 Y:B5 P:A5 SP:FB PPU:186,168 CYC:19165\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:204,168 CYC:19171\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:210,168 CYC:19173\n\
FADE  10 06     BPL $FAE6                       A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:216,168 CYC:19175\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:222,168 CYC:19177\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:02 Y:B5 P:A5 SP:F9 PPU:228,168 CYC:19179\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:02 Y:B5 P:27 SP:F9 PPU:234,168 CYC:19181\n\
FAE8  60        RTS                             A:B8 X:02 Y:B5 P:27 SP:F9 PPU:243,168 CYC:19184\n\
ECE4  AD 47 06  LDA $0647 = 38                  A:B8 X:02 Y:B5 P:27 SP:FB PPU:261,168 CYC:19190\n\
ECE7  C9 38     CMP #$38                        A:38 X:02 Y:B5 P:25 SP:FB PPU:273,168 CYC:19194\n\
ECE9  F0 02     BEQ $ECED                       A:38 X:02 Y:B5 P:27 SP:FB PPU:279,168 CYC:19196\n\
ECED  A0 B6     LDY #$B6                        A:38 X:02 Y:B5 P:27 SP:FB PPU:288,168 CYC:19199\n\
ECEF  A2 FF     LDX #$FF                        A:38 X:02 Y:B6 P:A5 SP:FB PPU:294,168 CYC:19201\n\
ECF1  A9 EB     LDA #$EB                        A:38 X:FF Y:B6 P:A5 SP:FB PPU:300,168 CYC:19203\n\
ECF3  85 47     STA $47 = 38                    A:EB X:FF Y:B6 P:A5 SP:FB PPU:306,168 CYC:19205\n\
ECF5  20 B1 FA  JSR $FAB1                       A:EB X:FF Y:B6 P:A5 SP:FB PPU:315,168 CYC:19208\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:FF Y:B6 P:A5 SP:F9 PPU:333,168 CYC:19214\n\
FAB3  18        CLC                             A:EB X:FF Y:B6 P:E5 SP:F9 PPU:  1,169 CYC:19217\n\
FAB4  A9 40     LDA #$40                        A:EB X:FF Y:B6 P:E4 SP:F9 PPU:  7,169 CYC:19219\n\
FAB6  60        RTS                             A:40 X:FF Y:B6 P:64 SP:F9 PPU: 13,169 CYC:19221\n\
ECF8  F7 48    *ISB $48,X @ 47 = EB             A:40 X:FF Y:B6 P:64 SP:FB PPU: 31,169 CYC:19227\n\
ECFA  EA        NOP                             A:53 X:FF Y:B6 P:24 SP:FB PPU: 49,169 CYC:19233\n\
ECFB  EA        NOP                             A:53 X:FF Y:B6 P:24 SP:FB PPU: 55,169 CYC:19235\n\
ECFC  EA        NOP                             A:53 X:FF Y:B6 P:24 SP:FB PPU: 61,169 CYC:19237\n\
ECFD  EA        NOP                             A:53 X:FF Y:B6 P:24 SP:FB PPU: 67,169 CYC:19239\n\
ECFE  20 B7 FA  JSR $FAB7                       A:53 X:FF Y:B6 P:24 SP:FB PPU: 73,169 CYC:19241\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:FF Y:B6 P:24 SP:F9 PPU: 91,169 CYC:19247\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:FF Y:B6 P:24 SP:F9 PPU: 97,169 CYC:19249\n\
FABB  30 29     BMI $FAE6                       A:53 X:FF Y:B6 P:24 SP:F9 PPU:103,169 CYC:19251\n\
FABD  C9 53     CMP #$53                        A:53 X:FF Y:B6 P:24 SP:F9 PPU:109,169 CYC:19253\n\
FABF  D0 25     BNE $FAE6                       A:53 X:FF Y:B6 P:27 SP:F9 PPU:115,169 CYC:19255\n\
FAC1  60        RTS                             A:53 X:FF Y:B6 P:27 SP:F9 PPU:121,169 CYC:19257\n\
ED01  A5 47     LDA $47 = EC                    A:53 X:FF Y:B6 P:27 SP:FB PPU:139,169 CYC:19263\n\
ED03  C9 EC     CMP #$EC                        A:EC X:FF Y:B6 P:A5 SP:FB PPU:148,169 CYC:19266\n\
ED05  F0 02     BEQ $ED09                       A:EC X:FF Y:B6 P:27 SP:FB PPU:154,169 CYC:19268\n\
ED09  C8        INY                             A:EC X:FF Y:B6 P:27 SP:FB PPU:163,169 CYC:19271\n\
ED0A  A9 FF     LDA #$FF                        A:EC X:FF Y:B7 P:A5 SP:FB PPU:169,169 CYC:19273\n\
ED0C  85 47     STA $47 = EC                    A:FF X:FF Y:B7 P:A5 SP:FB PPU:175,169 CYC:19275\n\
ED0E  20 C2 FA  JSR $FAC2                       A:FF X:FF Y:B7 P:A5 SP:FB PPU:184,169 CYC:19278\n\
FAC2  B8        CLV                             A:FF X:FF Y:B7 P:A5 SP:F9 PPU:202,169 CYC:19284\n\
FAC3  38        SEC                             A:FF X:FF Y:B7 P:A5 SP:F9 PPU:208,169 CYC:19286\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:FF Y:B7 P:A5 SP:F9 PPU:214,169 CYC:19288\n\
FAC6  60        RTS                             A:FF X:FF Y:B7 P:A5 SP:F9 PPU:220,169 CYC:19290\n\
ED11  F7 48    *ISB $48,X @ 47 = FF             A:FF X:FF Y:B7 P:A5 SP:FB PPU:238,169 CYC:19296\n\
ED13  EA        NOP                             A:FF X:FF Y:B7 P:A5 SP:FB PPU:256,169 CYC:19302\n\
ED14  EA        NOP                             A:FF X:FF Y:B7 P:A5 SP:FB PPU:262,169 CYC:19304\n\
ED15  EA        NOP                             A:FF X:FF Y:B7 P:A5 SP:FB PPU:268,169 CYC:19306\n\
ED16  EA        NOP                             A:FF X:FF Y:B7 P:A5 SP:FB PPU:274,169 CYC:19308\n\
ED17  20 C7 FA  JSR $FAC7                       A:FF X:FF Y:B7 P:A5 SP:FB PPU:280,169 CYC:19310\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:FF Y:B7 P:A5 SP:F9 PPU:298,169 CYC:19316\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:FF Y:B7 P:A5 SP:F9 PPU:304,169 CYC:19318\n\
FACB  10 19     BPL $FAE6                       A:FF X:FF Y:B7 P:A5 SP:F9 PPU:310,169 CYC:19320\n\
FACD  90 17     BCC $FAE6                       A:FF X:FF Y:B7 P:A5 SP:F9 PPU:316,169 CYC:19322\n\
FACF  C9 FF     CMP #$FF                        A:FF X:FF Y:B7 P:A5 SP:F9 PPU:322,169 CYC:19324\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:FF Y:B7 P:27 SP:F9 PPU:328,169 CYC:19326\n\
FAD3  60        RTS                             A:FF X:FF Y:B7 P:27 SP:F9 PPU:334,169 CYC:19328\n\
ED1A  A5 47     LDA $47 = 00                    A:FF X:FF Y:B7 P:27 SP:FB PPU: 11,170 CYC:19334\n\
ED1C  C9 00     CMP #$00                        A:00 X:FF Y:B7 P:27 SP:FB PPU: 20,170 CYC:19337\n\
ED1E  F0 02     BEQ $ED22                       A:00 X:FF Y:B7 P:27 SP:FB PPU: 26,170 CYC:19339\n\
ED22  C8        INY                             A:00 X:FF Y:B7 P:27 SP:FB PPU: 35,170 CYC:19342\n\
ED23  A9 37     LDA #$37                        A:00 X:FF Y:B8 P:A5 SP:FB PPU: 41,170 CYC:19344\n\
ED25  85 47     STA $47 = 00                    A:37 X:FF Y:B8 P:25 SP:FB PPU: 47,170 CYC:19346\n\
ED27  20 D4 FA  JSR $FAD4                       A:37 X:FF Y:B8 P:25 SP:FB PPU: 56,170 CYC:19349\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:FF Y:B8 P:25 SP:F9 PPU: 74,170 CYC:19355\n\
FAD6  38        SEC                             A:37 X:FF Y:B8 P:E5 SP:F9 PPU: 83,170 CYC:19358\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:FF Y:B8 P:E5 SP:F9 PPU: 89,170 CYC:19360\n\
FAD9  60        RTS                             A:F0 X:FF Y:B8 P:E5 SP:F9 PPU: 95,170 CYC:19362\n\
ED2A  F7 48    *ISB $48,X @ 47 = 37             A:F0 X:FF Y:B8 P:E5 SP:FB PPU:113,170 CYC:19368\n\
ED2C  EA        NOP                             A:B8 X:FF Y:B8 P:A5 SP:FB PPU:131,170 CYC:19374\n\
ED2D  EA        NOP                             A:B8 X:FF Y:B8 P:A5 SP:FB PPU:137,170 CYC:19376\n\
ED2E  EA        NOP                             A:B8 X:FF Y:B8 P:A5 SP:FB PPU:143,170 CYC:19378\n\
ED2F  EA        NOP                             A:B8 X:FF Y:B8 P:A5 SP:FB PPU:149,170 CYC:19380\n\
ED30  20 DA FA  JSR $FADA                       A:B8 X:FF Y:B8 P:A5 SP:FB PPU:155,170 CYC:19382\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:FF Y:B8 P:A5 SP:F9 PPU:173,170 CYC:19388\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:FF Y:B8 P:A5 SP:F9 PPU:179,170 CYC:19390\n\
FADE  10 06     BPL $FAE6                       A:B8 X:FF Y:B8 P:A5 SP:F9 PPU:185,170 CYC:19392\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:FF Y:B8 P:A5 SP:F9 PPU:191,170 CYC:19394\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:FF Y:B8 P:A5 SP:F9 PPU:197,170 CYC:19396\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:FF Y:B8 P:27 SP:F9 PPU:203,170 CYC:19398\n\
FAE8  60        RTS                             A:B8 X:FF Y:B8 P:27 SP:F9 PPU:212,170 CYC:19401\n\
ED33  A5 47     LDA $47 = 38                    A:B8 X:FF Y:B8 P:27 SP:FB PPU:230,170 CYC:19407\n\
ED35  C9 38     CMP #$38                        A:38 X:FF Y:B8 P:25 SP:FB PPU:239,170 CYC:19410\n\
ED37  F0 02     BEQ $ED3B                       A:38 X:FF Y:B8 P:27 SP:FB PPU:245,170 CYC:19412\n\
ED3B  A9 EB     LDA #$EB                        A:38 X:FF Y:B8 P:27 SP:FB PPU:254,170 CYC:19415\n\
ED3D  8D 47 06  STA $0647 = 38                  A:EB X:FF Y:B8 P:A5 SP:FB PPU:260,170 CYC:19417\n\
ED40  A0 FF     LDY #$FF                        A:EB X:FF Y:B8 P:A5 SP:FB PPU:272,170 CYC:19421\n\
ED42  20 B1 FA  JSR $FAB1                       A:EB X:FF Y:FF P:A5 SP:FB PPU:278,170 CYC:19423\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:FF Y:FF P:A5 SP:F9 PPU:296,170 CYC:19429\n\
FAB3  18        CLC                             A:EB X:FF Y:FF P:E5 SP:F9 PPU:305,170 CYC:19432\n\
FAB4  A9 40     LDA #$40                        A:EB X:FF Y:FF P:E4 SP:F9 PPU:311,170 CYC:19434\n\
FAB6  60        RTS                             A:40 X:FF Y:FF P:64 SP:F9 PPU:317,170 CYC:19436\n\
ED45  FB 48 05 *ISB $0548,Y @ 0647 = EB         A:40 X:FF Y:FF P:64 SP:FB PPU:335,170 CYC:19442\n\
ED48  EA        NOP                             A:53 X:FF Y:FF P:24 SP:FB PPU: 15,171 CYC:19449\n\
ED49  EA        NOP                             A:53 X:FF Y:FF P:24 SP:FB PPU: 21,171 CYC:19451\n\
ED4A  08        PHP                             A:53 X:FF Y:FF P:24 SP:FB PPU: 27,171 CYC:19453\n\
ED4B  48        PHA                             A:53 X:FF Y:FF P:24 SP:FA PPU: 36,171 CYC:19456\n\
ED4C  A0 B9     LDY #$B9                        A:53 X:FF Y:FF P:24 SP:F9 PPU: 45,171 CYC:19459\n\
ED4E  68        PLA                             A:53 X:FF Y:B9 P:A4 SP:F9 PPU: 51,171 CYC:19461\n\
ED4F  28        PLP                             A:53 X:FF Y:B9 P:24 SP:FA PPU: 63,171 CYC:19465\n\
ED50  20 B7 FA  JSR $FAB7                       A:53 X:FF Y:B9 P:24 SP:FB PPU: 75,171 CYC:19469\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:FF Y:B9 P:24 SP:F9 PPU: 93,171 CYC:19475\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:FF Y:B9 P:24 SP:F9 PPU: 99,171 CYC:19477\n\
FABB  30 29     BMI $FAE6                       A:53 X:FF Y:B9 P:24 SP:F9 PPU:105,171 CYC:19479\n\
FABD  C9 53     CMP #$53                        A:53 X:FF Y:B9 P:24 SP:F9 PPU:111,171 CYC:19481\n\
FABF  D0 25     BNE $FAE6                       A:53 X:FF Y:B9 P:27 SP:F9 PPU:117,171 CYC:19483\n\
FAC1  60        RTS                             A:53 X:FF Y:B9 P:27 SP:F9 PPU:123,171 CYC:19485\n\
ED53  AD 47 06  LDA $0647 = EC                  A:53 X:FF Y:B9 P:27 SP:FB PPU:141,171 CYC:19491\n\
ED56  C9 EC     CMP #$EC                        A:EC X:FF Y:B9 P:A5 SP:FB PPU:153,171 CYC:19495\n\
ED58  F0 02     BEQ $ED5C                       A:EC X:FF Y:B9 P:27 SP:FB PPU:159,171 CYC:19497\n\
ED5C  A0 FF     LDY #$FF                        A:EC X:FF Y:B9 P:27 SP:FB PPU:168,171 CYC:19500\n\
ED5E  A9 FF     LDA #$FF                        A:EC X:FF Y:FF P:A5 SP:FB PPU:174,171 CYC:19502\n\
ED60  8D 47 06  STA $0647 = EC                  A:FF X:FF Y:FF P:A5 SP:FB PPU:180,171 CYC:19504\n\
ED63  20 C2 FA  JSR $FAC2                       A:FF X:FF Y:FF P:A5 SP:FB PPU:192,171 CYC:19508\n\
FAC2  B8        CLV                             A:FF X:FF Y:FF P:A5 SP:F9 PPU:210,171 CYC:19514\n\
FAC3  38        SEC                             A:FF X:FF Y:FF P:A5 SP:F9 PPU:216,171 CYC:19516\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:FF Y:FF P:A5 SP:F9 PPU:222,171 CYC:19518\n\
FAC6  60        RTS                             A:FF X:FF Y:FF P:A5 SP:F9 PPU:228,171 CYC:19520\n\
ED66  FB 48 05 *ISB $0548,Y @ 0647 = FF         A:FF X:FF Y:FF P:A5 SP:FB PPU:246,171 CYC:19526\n\
ED69  EA        NOP                             A:FF X:FF Y:FF P:A5 SP:FB PPU:267,171 CYC:19533\n\
ED6A  EA        NOP                             A:FF X:FF Y:FF P:A5 SP:FB PPU:273,171 CYC:19535\n\
ED6B  08        PHP                             A:FF X:FF Y:FF P:A5 SP:FB PPU:279,171 CYC:19537\n\
ED6C  48        PHA                             A:FF X:FF Y:FF P:A5 SP:FA PPU:288,171 CYC:19540\n\
ED6D  A0 BA     LDY #$BA                        A:FF X:FF Y:FF P:A5 SP:F9 PPU:297,171 CYC:19543\n\
ED6F  68        PLA                             A:FF X:FF Y:BA P:A5 SP:F9 PPU:303,171 CYC:19545\n\
ED70  28        PLP                             A:FF X:FF Y:BA P:A5 SP:FA PPU:315,171 CYC:19549\n\
ED71  20 C7 FA  JSR $FAC7                       A:FF X:FF Y:BA P:A5 SP:FB PPU:327,171 CYC:19553\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:FF Y:BA P:A5 SP:F9 PPU:  4,172 CYC:19559\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:FF Y:BA P:A5 SP:F9 PPU: 10,172 CYC:19561\n\
FACB  10 19     BPL $FAE6                       A:FF X:FF Y:BA P:A5 SP:F9 PPU: 16,172 CYC:19563\n\
FACD  90 17     BCC $FAE6                       A:FF X:FF Y:BA P:A5 SP:F9 PPU: 22,172 CYC:19565\n\
FACF  C9 FF     CMP #$FF                        A:FF X:FF Y:BA P:A5 SP:F9 PPU: 28,172 CYC:19567\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:FF Y:BA P:27 SP:F9 PPU: 34,172 CYC:19569\n\
FAD3  60        RTS                             A:FF X:FF Y:BA P:27 SP:F9 PPU: 40,172 CYC:19571\n\
ED74  AD 47 06  LDA $0647 = 00                  A:FF X:FF Y:BA P:27 SP:FB PPU: 58,172 CYC:19577\n\
ED77  C9 00     CMP #$00                        A:00 X:FF Y:BA P:27 SP:FB PPU: 70,172 CYC:19581\n\
ED79  F0 02     BEQ $ED7D                       A:00 X:FF Y:BA P:27 SP:FB PPU: 76,172 CYC:19583\n\
ED7D  A0 FF     LDY #$FF                        A:00 X:FF Y:BA P:27 SP:FB PPU: 85,172 CYC:19586\n\
ED7F  A9 37     LDA #$37                        A:00 X:FF Y:FF P:A5 SP:FB PPU: 91,172 CYC:19588\n\
ED81  8D 47 06  STA $0647 = 00                  A:37 X:FF Y:FF P:25 SP:FB PPU: 97,172 CYC:19590\n\
ED84  20 D4 FA  JSR $FAD4                       A:37 X:FF Y:FF P:25 SP:FB PPU:109,172 CYC:19594\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU:127,172 CYC:19600\n\
FAD6  38        SEC                             A:37 X:FF Y:FF P:E5 SP:F9 PPU:136,172 CYC:19603\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:FF Y:FF P:E5 SP:F9 PPU:142,172 CYC:19605\n\
FAD9  60        RTS                             A:F0 X:FF Y:FF P:E5 SP:F9 PPU:148,172 CYC:19607\n\
ED87  FB 48 05 *ISB $0548,Y @ 0647 = 37         A:F0 X:FF Y:FF P:E5 SP:FB PPU:166,172 CYC:19613\n\
ED8A  EA        NOP                             A:B8 X:FF Y:FF P:A5 SP:FB PPU:187,172 CYC:19620\n\
ED8B  EA        NOP                             A:B8 X:FF Y:FF P:A5 SP:FB PPU:193,172 CYC:19622\n\
ED8C  08        PHP                             A:B8 X:FF Y:FF P:A5 SP:FB PPU:199,172 CYC:19624\n\
ED8D  48        PHA                             A:B8 X:FF Y:FF P:A5 SP:FA PPU:208,172 CYC:19627\n\
ED8E  A0 BB     LDY #$BB                        A:B8 X:FF Y:FF P:A5 SP:F9 PPU:217,172 CYC:19630\n\
ED90  68        PLA                             A:B8 X:FF Y:BB P:A5 SP:F9 PPU:223,172 CYC:19632\n\
ED91  28        PLP                             A:B8 X:FF Y:BB P:A5 SP:FA PPU:235,172 CYC:19636\n\
ED92  20 DA FA  JSR $FADA                       A:B8 X:FF Y:BB P:A5 SP:FB PPU:247,172 CYC:19640\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:FF Y:BB P:A5 SP:F9 PPU:265,172 CYC:19646\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:FF Y:BB P:A5 SP:F9 PPU:271,172 CYC:19648\n\
FADE  10 06     BPL $FAE6                       A:B8 X:FF Y:BB P:A5 SP:F9 PPU:277,172 CYC:19650\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:FF Y:BB P:A5 SP:F9 PPU:283,172 CYC:19652\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:FF Y:BB P:A5 SP:F9 PPU:289,172 CYC:19654\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:FF Y:BB P:27 SP:F9 PPU:295,172 CYC:19656\n\
FAE8  60        RTS                             A:B8 X:FF Y:BB P:27 SP:F9 PPU:304,172 CYC:19659\n\
ED95  AD 47 06  LDA $0647 = 38                  A:B8 X:FF Y:BB P:27 SP:FB PPU:322,172 CYC:19665\n\
ED98  C9 38     CMP #$38                        A:38 X:FF Y:BB P:25 SP:FB PPU:334,172 CYC:19669\n\
ED9A  F0 02     BEQ $ED9E                       A:38 X:FF Y:BB P:27 SP:FB PPU:340,172 CYC:19671\n\
ED9E  A0 BC     LDY #$BC                        A:38 X:FF Y:BB P:27 SP:FB PPU:  8,173 CYC:19674\n\
EDA0  A2 FF     LDX #$FF                        A:38 X:FF Y:BC P:A5 SP:FB PPU: 14,173 CYC:19676\n\
EDA2  A9 EB     LDA #$EB                        A:38 X:FF Y:BC P:A5 SP:FB PPU: 20,173 CYC:19678\n\
EDA4  8D 47 06  STA $0647 = 38                  A:EB X:FF Y:BC P:A5 SP:FB PPU: 26,173 CYC:19680\n\
EDA7  20 B1 FA  JSR $FAB1                       A:EB X:FF Y:BC P:A5 SP:FB PPU: 38,173 CYC:19684\n\
FAB1  24 01     BIT $01 = FF                    A:EB X:FF Y:BC P:A5 SP:F9 PPU: 56,173 CYC:19690\n\
FAB3  18        CLC                             A:EB X:FF Y:BC P:E5 SP:F9 PPU: 65,173 CYC:19693\n\
FAB4  A9 40     LDA #$40                        A:EB X:FF Y:BC P:E4 SP:F9 PPU: 71,173 CYC:19695\n\
FAB6  60        RTS                             A:40 X:FF Y:BC P:64 SP:F9 PPU: 77,173 CYC:19697\n\
EDAA  FF 48 05 *ISB $0548,X @ 0647 = EB         A:40 X:FF Y:BC P:64 SP:FB PPU: 95,173 CYC:19703\n\
EDAD  EA        NOP                             A:53 X:FF Y:BC P:24 SP:FB PPU:116,173 CYC:19710\n\
EDAE  EA        NOP                             A:53 X:FF Y:BC P:24 SP:FB PPU:122,173 CYC:19712\n\
EDAF  EA        NOP                             A:53 X:FF Y:BC P:24 SP:FB PPU:128,173 CYC:19714\n\
EDB0  EA        NOP                             A:53 X:FF Y:BC P:24 SP:FB PPU:134,173 CYC:19716\n\
EDB1  20 B7 FA  JSR $FAB7                       A:53 X:FF Y:BC P:24 SP:FB PPU:140,173 CYC:19718\n\
FAB7  70 2D     BVS $FAE6                       A:53 X:FF Y:BC P:24 SP:F9 PPU:158,173 CYC:19724\n\
FAB9  B0 2B     BCS $FAE6                       A:53 X:FF Y:BC P:24 SP:F9 PPU:164,173 CYC:19726\n\
FABB  30 29     BMI $FAE6                       A:53 X:FF Y:BC P:24 SP:F9 PPU:170,173 CYC:19728\n\
FABD  C9 53     CMP #$53                        A:53 X:FF Y:BC P:24 SP:F9 PPU:176,173 CYC:19730\n\
FABF  D0 25     BNE $FAE6                       A:53 X:FF Y:BC P:27 SP:F9 PPU:182,173 CYC:19732\n\
FAC1  60        RTS                             A:53 X:FF Y:BC P:27 SP:F9 PPU:188,173 CYC:19734\n\
EDB4  AD 47 06  LDA $0647 = EC                  A:53 X:FF Y:BC P:27 SP:FB PPU:206,173 CYC:19740\n\
EDB7  C9 EC     CMP #$EC                        A:EC X:FF Y:BC P:A5 SP:FB PPU:218,173 CYC:19744\n\
EDB9  F0 02     BEQ $EDBD                       A:EC X:FF Y:BC P:27 SP:FB PPU:224,173 CYC:19746\n\
EDBD  C8        INY                             A:EC X:FF Y:BC P:27 SP:FB PPU:233,173 CYC:19749\n\
EDBE  A9 FF     LDA #$FF                        A:EC X:FF Y:BD P:A5 SP:FB PPU:239,173 CYC:19751\n\
EDC0  8D 47 06  STA $0647 = EC                  A:FF X:FF Y:BD P:A5 SP:FB PPU:245,173 CYC:19753\n\
EDC3  20 C2 FA  JSR $FAC2                       A:FF X:FF Y:BD P:A5 SP:FB PPU:257,173 CYC:19757\n\
FAC2  B8        CLV                             A:FF X:FF Y:BD P:A5 SP:F9 PPU:275,173 CYC:19763\n\
FAC3  38        SEC                             A:FF X:FF Y:BD P:A5 SP:F9 PPU:281,173 CYC:19765\n\
FAC4  A9 FF     LDA #$FF                        A:FF X:FF Y:BD P:A5 SP:F9 PPU:287,173 CYC:19767\n\
FAC6  60        RTS                             A:FF X:FF Y:BD P:A5 SP:F9 PPU:293,173 CYC:19769\n\
EDC6  FF 48 05 *ISB $0548,X @ 0647 = FF         A:FF X:FF Y:BD P:A5 SP:FB PPU:311,173 CYC:19775\n\
EDC9  EA        NOP                             A:FF X:FF Y:BD P:A5 SP:FB PPU:332,173 CYC:19782\n\
EDCA  EA        NOP                             A:FF X:FF Y:BD P:A5 SP:FB PPU:338,173 CYC:19784\n\
EDCB  EA        NOP                             A:FF X:FF Y:BD P:A5 SP:FB PPU:  3,174 CYC:19786\n\
EDCC  EA        NOP                             A:FF X:FF Y:BD P:A5 SP:FB PPU:  9,174 CYC:19788\n\
EDCD  20 C7 FA  JSR $FAC7                       A:FF X:FF Y:BD P:A5 SP:FB PPU: 15,174 CYC:19790\n\
FAC7  70 1D     BVS $FAE6                       A:FF X:FF Y:BD P:A5 SP:F9 PPU: 33,174 CYC:19796\n\
FAC9  F0 1B     BEQ $FAE6                       A:FF X:FF Y:BD P:A5 SP:F9 PPU: 39,174 CYC:19798\n\
FACB  10 19     BPL $FAE6                       A:FF X:FF Y:BD P:A5 SP:F9 PPU: 45,174 CYC:19800\n\
FACD  90 17     BCC $FAE6                       A:FF X:FF Y:BD P:A5 SP:F9 PPU: 51,174 CYC:19802\n\
FACF  C9 FF     CMP #$FF                        A:FF X:FF Y:BD P:A5 SP:F9 PPU: 57,174 CYC:19804\n\
FAD1  D0 13     BNE $FAE6                       A:FF X:FF Y:BD P:27 SP:F9 PPU: 63,174 CYC:19806\n\
FAD3  60        RTS                             A:FF X:FF Y:BD P:27 SP:F9 PPU: 69,174 CYC:19808\n\
EDD0  AD 47 06  LDA $0647 = 00                  A:FF X:FF Y:BD P:27 SP:FB PPU: 87,174 CYC:19814\n\
EDD3  C9 00     CMP #$00                        A:00 X:FF Y:BD P:27 SP:FB PPU: 99,174 CYC:19818\n\
EDD5  F0 02     BEQ $EDD9                       A:00 X:FF Y:BD P:27 SP:FB PPU:105,174 CYC:19820\n\
EDD9  C8        INY                             A:00 X:FF Y:BD P:27 SP:FB PPU:114,174 CYC:19823\n\
EDDA  A9 37     LDA #$37                        A:00 X:FF Y:BE P:A5 SP:FB PPU:120,174 CYC:19825\n\
EDDC  8D 47 06  STA $0647 = 00                  A:37 X:FF Y:BE P:25 SP:FB PPU:126,174 CYC:19827\n\
EDDF  20 D4 FA  JSR $FAD4                       A:37 X:FF Y:BE P:25 SP:FB PPU:138,174 CYC:19831\n\
FAD4  24 01     BIT $01 = FF                    A:37 X:FF Y:BE P:25 SP:F9 PPU:156,174 CYC:19837\n\
FAD6  38        SEC                             A:37 X:FF Y:BE P:E5 SP:F9 PPU:165,174 CYC:19840\n\
FAD7  A9 F0     LDA #$F0                        A:37 X:FF Y:BE P:E5 SP:F9 PPU:171,174 CYC:19842\n\
FAD9  60        RTS                             A:F0 X:FF Y:BE P:E5 SP:F9 PPU:177,174 CYC:19844\n\
EDE2  FF 48 05 *ISB $0548,X @ 0647 = 37         A:F0 X:FF Y:BE P:E5 SP:FB PPU:195,174 CYC:19850\n\
EDE5  EA        NOP                             A:B8 X:FF Y:BE P:A5 SP:FB PPU:216,174 CYC:19857\n\
EDE6  EA        NOP                             A:B8 X:FF Y:BE P:A5 SP:FB PPU:222,174 CYC:19859\n\
EDE7  EA        NOP                             A:B8 X:FF Y:BE P:A5 SP:FB PPU:228,174 CYC:19861\n\
EDE8  EA        NOP                             A:B8 X:FF Y:BE P:A5 SP:FB PPU:234,174 CYC:19863\n\
EDE9  20 DA FA  JSR $FADA                       A:B8 X:FF Y:BE P:A5 SP:FB PPU:240,174 CYC:19865\n\
FADA  70 0A     BVS $FAE6                       A:B8 X:FF Y:BE P:A5 SP:F9 PPU:258,174 CYC:19871\n\
FADC  F0 08     BEQ $FAE6                       A:B8 X:FF Y:BE P:A5 SP:F9 PPU:264,174 CYC:19873\n\
FADE  10 06     BPL $FAE6                       A:B8 X:FF Y:BE P:A5 SP:F9 PPU:270,174 CYC:19875\n\
FAE0  90 04     BCC $FAE6                       A:B8 X:FF Y:BE P:A5 SP:F9 PPU:276,174 CYC:19877\n\
FAE2  C9 B8     CMP #$B8                        A:B8 X:FF Y:BE P:A5 SP:F9 PPU:282,174 CYC:19879\n\
FAE4  F0 02     BEQ $FAE8                       A:B8 X:FF Y:BE P:27 SP:F9 PPU:288,174 CYC:19881\n\
FAE8  60        RTS                             A:B8 X:FF Y:BE P:27 SP:F9 PPU:297,174 CYC:19884\n\
EDEC  AD 47 06  LDA $0647 = 38                  A:B8 X:FF Y:BE P:27 SP:FB PPU:315,174 CYC:19890\n\
EDEF  C9 38     CMP #$38                        A:38 X:FF Y:BE P:25 SP:FB PPU:327,174 CYC:19894\n\
EDF1  F0 02     BEQ $EDF5                       A:38 X:FF Y:BE P:27 SP:FB PPU:333,174 CYC:19896\n\
EDF5  60        RTS                             A:38 X:FF Y:BE P:27 SP:FB PPU:  1,175 CYC:19899\n\
C641  20 F6 ED  JSR $EDF6                       A:38 X:FF Y:BE P:27 SP:FD PPU: 19,175 CYC:19905\n\
EDF6  A9 FF     LDA #$FF                        A:38 X:FF Y:BE P:27 SP:FB PPU: 37,175 CYC:19911\n\
EDF8  85 01     STA $01 = FF                    A:FF X:FF Y:BE P:A5 SP:FB PPU: 43,175 CYC:19913\n\
EDFA  A0 BF     LDY #$BF                        A:FF X:FF Y:BE P:A5 SP:FB PPU: 52,175 CYC:19916\n\
EDFC  A2 02     LDX #$02                        A:FF X:FF Y:BF P:A5 SP:FB PPU: 58,175 CYC:19918\n\
EDFE  A9 47     LDA #$47                        A:FF X:02 Y:BF P:25 SP:FB PPU: 64,175 CYC:19920\n\
EE00  85 47     STA $47 = 38                    A:47 X:02 Y:BF P:25 SP:FB PPU: 70,175 CYC:19922\n\
EE02  A9 06     LDA #$06                        A:47 X:02 Y:BF P:25 SP:FB PPU: 79,175 CYC:19925\n\
EE04  85 48     STA $48 = 06                    A:06 X:02 Y:BF P:25 SP:FB PPU: 85,175 CYC:19927\n\
EE06  A9 A5     LDA #$A5                        A:06 X:02 Y:BF P:25 SP:FB PPU: 94,175 CYC:19930\n\
EE08  8D 47 06  STA $0647 = 38                  A:A5 X:02 Y:BF P:A5 SP:FB PPU:100,175 CYC:19932\n\
EE0B  20 7B FA  JSR $FA7B                       A:A5 X:02 Y:BF P:A5 SP:FB PPU:112,175 CYC:19936\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:02 Y:BF P:A5 SP:F9 PPU:130,175 CYC:19942\n\
FA7D  18        CLC                             A:A5 X:02 Y:BF P:E5 SP:F9 PPU:139,175 CYC:19945\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:02 Y:BF P:E4 SP:F9 PPU:145,175 CYC:19947\n\
FA80  60        RTS                             A:B3 X:02 Y:BF P:E4 SP:F9 PPU:151,175 CYC:19949\n\
EE0E  03 45    *SLO ($45,X) @ 47 = 0647 = A5    A:B3 X:02 Y:BF P:E4 SP:FB PPU:169,175 CYC:19955\n\
EE10  EA        NOP                             A:FB X:02 Y:BF P:E5 SP:FB PPU:193,175 CYC:19963\n\
EE11  EA        NOP                             A:FB X:02 Y:BF P:E5 SP:FB PPU:199,175 CYC:19965\n\
EE12  EA        NOP                             A:FB X:02 Y:BF P:E5 SP:FB PPU:205,175 CYC:19967\n\
EE13  EA        NOP                             A:FB X:02 Y:BF P:E5 SP:FB PPU:211,175 CYC:19969\n\
EE14  20 81 FA  JSR $FA81                       A:FB X:02 Y:BF P:E5 SP:FB PPU:217,175 CYC:19971\n\
FA81  50 63     BVC $FAE6                       A:FB X:02 Y:BF P:E5 SP:F9 PPU:235,175 CYC:19977\n\
FA83  90 61     BCC $FAE6                       A:FB X:02 Y:BF P:E5 SP:F9 PPU:241,175 CYC:19979\n\
FA85  10 5F     BPL $FAE6                       A:FB X:02 Y:BF P:E5 SP:F9 PPU:247,175 CYC:19981\n\
FA87  C9 FB     CMP #$FB                        A:FB X:02 Y:BF P:E5 SP:F9 PPU:253,175 CYC:19983\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:02 Y:BF P:67 SP:F9 PPU:259,175 CYC:19985\n\
FA8B  60        RTS                             A:FB X:02 Y:BF P:67 SP:F9 PPU:265,175 CYC:19987\n\
EE17  AD 47 06  LDA $0647 = 4A                  A:FB X:02 Y:BF P:67 SP:FB PPU:283,175 CYC:19993\n\
EE1A  C9 4A     CMP #$4A                        A:4A X:02 Y:BF P:65 SP:FB PPU:295,175 CYC:19997\n\
EE1C  F0 02     BEQ $EE20                       A:4A X:02 Y:BF P:67 SP:FB PPU:301,175 CYC:19999\n\
EE20  C8        INY                             A:4A X:02 Y:BF P:67 SP:FB PPU:310,175 CYC:20002\n\
EE21  A9 29     LDA #$29                        A:4A X:02 Y:C0 P:E5 SP:FB PPU:316,175 CYC:20004\n\
EE23  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:C0 P:65 SP:FB PPU:322,175 CYC:20006\n\
EE26  20 8C FA  JSR $FA8C                       A:29 X:02 Y:C0 P:65 SP:FB PPU:334,175 CYC:20010\n\
FA8C  B8        CLV                             A:29 X:02 Y:C0 P:65 SP:F9 PPU: 11,176 CYC:20016\n\
FA8D  18        CLC                             A:29 X:02 Y:C0 P:25 SP:F9 PPU: 17,176 CYC:20018\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:02 Y:C0 P:24 SP:F9 PPU: 23,176 CYC:20020\n\
FA90  60        RTS                             A:C3 X:02 Y:C0 P:A4 SP:F9 PPU: 29,176 CYC:20022\n\
EE29  03 45    *SLO ($45,X) @ 47 = 0647 = 29    A:C3 X:02 Y:C0 P:A4 SP:FB PPU: 47,176 CYC:20028\n\
EE2B  EA        NOP                             A:D3 X:02 Y:C0 P:A4 SP:FB PPU: 71,176 CYC:20036\n\
EE2C  EA        NOP                             A:D3 X:02 Y:C0 P:A4 SP:FB PPU: 77,176 CYC:20038\n\
EE2D  EA        NOP                             A:D3 X:02 Y:C0 P:A4 SP:FB PPU: 83,176 CYC:20040\n\
EE2E  EA        NOP                             A:D3 X:02 Y:C0 P:A4 SP:FB PPU: 89,176 CYC:20042\n\
EE2F  20 91 FA  JSR $FA91                       A:D3 X:02 Y:C0 P:A4 SP:FB PPU: 95,176 CYC:20044\n\
FA91  70 53     BVS $FAE6                       A:D3 X:02 Y:C0 P:A4 SP:F9 PPU:113,176 CYC:20050\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:02 Y:C0 P:A4 SP:F9 PPU:119,176 CYC:20052\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:02 Y:C0 P:A4 SP:F9 PPU:125,176 CYC:20054\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:02 Y:C0 P:A4 SP:F9 PPU:131,176 CYC:20056\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:02 Y:C0 P:A4 SP:F9 PPU:137,176 CYC:20058\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:02 Y:C0 P:27 SP:F9 PPU:143,176 CYC:20060\n\
FA9D  60        RTS                             A:D3 X:02 Y:C0 P:27 SP:F9 PPU:149,176 CYC:20062\n\
EE32  AD 47 06  LDA $0647 = 52                  A:D3 X:02 Y:C0 P:27 SP:FB PPU:167,176 CYC:20068\n\
EE35  C9 52     CMP #$52                        A:52 X:02 Y:C0 P:25 SP:FB PPU:179,176 CYC:20072\n\
EE37  F0 02     BEQ $EE3B                       A:52 X:02 Y:C0 P:27 SP:FB PPU:185,176 CYC:20074\n\
EE3B  C8        INY                             A:52 X:02 Y:C0 P:27 SP:FB PPU:194,176 CYC:20077\n\
EE3C  A9 37     LDA #$37                        A:52 X:02 Y:C1 P:A5 SP:FB PPU:200,176 CYC:20079\n\
EE3E  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:C1 P:25 SP:FB PPU:206,176 CYC:20081\n\
EE41  20 9E FA  JSR $FA9E                       A:37 X:02 Y:C1 P:25 SP:FB PPU:218,176 CYC:20085\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:02 Y:C1 P:25 SP:F9 PPU:236,176 CYC:20091\n\
FAA0  38        SEC                             A:37 X:02 Y:C1 P:E5 SP:F9 PPU:245,176 CYC:20094\n\
FAA1  A9 10     LDA #$10                        A:37 X:02 Y:C1 P:E5 SP:F9 PPU:251,176 CYC:20096\n\
FAA3  60        RTS                             A:10 X:02 Y:C1 P:65 SP:F9 PPU:257,176 CYC:20098\n\
EE44  03 45    *SLO ($45,X) @ 47 = 0647 = 37    A:10 X:02 Y:C1 P:65 SP:FB PPU:275,176 CYC:20104\n\
EE46  EA        NOP                             A:7E X:02 Y:C1 P:64 SP:FB PPU:299,176 CYC:20112\n\
EE47  EA        NOP                             A:7E X:02 Y:C1 P:64 SP:FB PPU:305,176 CYC:20114\n\
EE48  EA        NOP                             A:7E X:02 Y:C1 P:64 SP:FB PPU:311,176 CYC:20116\n\
EE49  EA        NOP                             A:7E X:02 Y:C1 P:64 SP:FB PPU:317,176 CYC:20118\n\
EE4A  20 A4 FA  JSR $FAA4                       A:7E X:02 Y:C1 P:64 SP:FB PPU:323,176 CYC:20120\n\
FAA4  50 40     BVC $FAE6                       A:7E X:02 Y:C1 P:64 SP:F9 PPU:  0,177 CYC:20126\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:02 Y:C1 P:64 SP:F9 PPU:  6,177 CYC:20128\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:02 Y:C1 P:64 SP:F9 PPU: 12,177 CYC:20130\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:02 Y:C1 P:64 SP:F9 PPU: 18,177 CYC:20132\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:02 Y:C1 P:64 SP:F9 PPU: 24,177 CYC:20134\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:02 Y:C1 P:67 SP:F9 PPU: 30,177 CYC:20136\n\
FAB0  60        RTS                             A:7E X:02 Y:C1 P:67 SP:F9 PPU: 36,177 CYC:20138\n\
EE4D  AD 47 06  LDA $0647 = 6E                  A:7E X:02 Y:C1 P:67 SP:FB PPU: 54,177 CYC:20144\n\
EE50  C9 6E     CMP #$6E                        A:6E X:02 Y:C1 P:65 SP:FB PPU: 66,177 CYC:20148\n\
EE52  F0 02     BEQ $EE56                       A:6E X:02 Y:C1 P:67 SP:FB PPU: 72,177 CYC:20150\n\
EE56  C8        INY                             A:6E X:02 Y:C1 P:67 SP:FB PPU: 81,177 CYC:20153\n\
EE57  A9 A5     LDA #$A5                        A:6E X:02 Y:C2 P:E5 SP:FB PPU: 87,177 CYC:20155\n\
EE59  85 47     STA $47 = 47                    A:A5 X:02 Y:C2 P:E5 SP:FB PPU: 93,177 CYC:20157\n\
EE5B  20 7B FA  JSR $FA7B                       A:A5 X:02 Y:C2 P:E5 SP:FB PPU:102,177 CYC:20160\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:02 Y:C2 P:E5 SP:F9 PPU:120,177 CYC:20166\n\
FA7D  18        CLC                             A:A5 X:02 Y:C2 P:E5 SP:F9 PPU:129,177 CYC:20169\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:02 Y:C2 P:E4 SP:F9 PPU:135,177 CYC:20171\n\
FA80  60        RTS                             A:B3 X:02 Y:C2 P:E4 SP:F9 PPU:141,177 CYC:20173\n\
EE5E  07 47    *SLO $47 = A5                    A:B3 X:02 Y:C2 P:E4 SP:FB PPU:159,177 CYC:20179\n\
EE60  EA        NOP                             A:FB X:02 Y:C2 P:E5 SP:FB PPU:174,177 CYC:20184\n\
EE61  EA        NOP                             A:FB X:02 Y:C2 P:E5 SP:FB PPU:180,177 CYC:20186\n\
EE62  EA        NOP                             A:FB X:02 Y:C2 P:E5 SP:FB PPU:186,177 CYC:20188\n\
EE63  EA        NOP                             A:FB X:02 Y:C2 P:E5 SP:FB PPU:192,177 CYC:20190\n\
EE64  20 81 FA  JSR $FA81                       A:FB X:02 Y:C2 P:E5 SP:FB PPU:198,177 CYC:20192\n\
FA81  50 63     BVC $FAE6                       A:FB X:02 Y:C2 P:E5 SP:F9 PPU:216,177 CYC:20198\n\
FA83  90 61     BCC $FAE6                       A:FB X:02 Y:C2 P:E5 SP:F9 PPU:222,177 CYC:20200\n\
FA85  10 5F     BPL $FAE6                       A:FB X:02 Y:C2 P:E5 SP:F9 PPU:228,177 CYC:20202\n\
FA87  C9 FB     CMP #$FB                        A:FB X:02 Y:C2 P:E5 SP:F9 PPU:234,177 CYC:20204\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:02 Y:C2 P:67 SP:F9 PPU:240,177 CYC:20206\n\
FA8B  60        RTS                             A:FB X:02 Y:C2 P:67 SP:F9 PPU:246,177 CYC:20208\n\
EE67  A5 47     LDA $47 = 4A                    A:FB X:02 Y:C2 P:67 SP:FB PPU:264,177 CYC:20214\n\
EE69  C9 4A     CMP #$4A                        A:4A X:02 Y:C2 P:65 SP:FB PPU:273,177 CYC:20217\n\
EE6B  F0 02     BEQ $EE6F                       A:4A X:02 Y:C2 P:67 SP:FB PPU:279,177 CYC:20219\n\
EE6F  C8        INY                             A:4A X:02 Y:C2 P:67 SP:FB PPU:288,177 CYC:20222\n\
EE70  A9 29     LDA #$29                        A:4A X:02 Y:C3 P:E5 SP:FB PPU:294,177 CYC:20224\n\
EE72  85 47     STA $47 = 4A                    A:29 X:02 Y:C3 P:65 SP:FB PPU:300,177 CYC:20226\n\
EE74  20 8C FA  JSR $FA8C                       A:29 X:02 Y:C3 P:65 SP:FB PPU:309,177 CYC:20229\n\
FA8C  B8        CLV                             A:29 X:02 Y:C3 P:65 SP:F9 PPU:327,177 CYC:20235\n\
FA8D  18        CLC                             A:29 X:02 Y:C3 P:25 SP:F9 PPU:333,177 CYC:20237\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:02 Y:C3 P:24 SP:F9 PPU:339,177 CYC:20239\n\
FA90  60        RTS                             A:C3 X:02 Y:C3 P:A4 SP:F9 PPU:  4,178 CYC:20241\n\
EE77  07 47    *SLO $47 = 29                    A:C3 X:02 Y:C3 P:A4 SP:FB PPU: 22,178 CYC:20247\n\
EE79  EA        NOP                             A:D3 X:02 Y:C3 P:A4 SP:FB PPU: 37,178 CYC:20252\n\
EE7A  EA        NOP                             A:D3 X:02 Y:C3 P:A4 SP:FB PPU: 43,178 CYC:20254\n\
EE7B  EA        NOP                             A:D3 X:02 Y:C3 P:A4 SP:FB PPU: 49,178 CYC:20256\n\
EE7C  EA        NOP                             A:D3 X:02 Y:C3 P:A4 SP:FB PPU: 55,178 CYC:20258\n\
EE7D  20 91 FA  JSR $FA91                       A:D3 X:02 Y:C3 P:A4 SP:FB PPU: 61,178 CYC:20260\n\
FA91  70 53     BVS $FAE6                       A:D3 X:02 Y:C3 P:A4 SP:F9 PPU: 79,178 CYC:20266\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:02 Y:C3 P:A4 SP:F9 PPU: 85,178 CYC:20268\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:02 Y:C3 P:A4 SP:F9 PPU: 91,178 CYC:20270\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:02 Y:C3 P:A4 SP:F9 PPU: 97,178 CYC:20272\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:02 Y:C3 P:A4 SP:F9 PPU:103,178 CYC:20274\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:02 Y:C3 P:27 SP:F9 PPU:109,178 CYC:20276\n\
FA9D  60        RTS                             A:D3 X:02 Y:C3 P:27 SP:F9 PPU:115,178 CYC:20278\n\
EE80  A5 47     LDA $47 = 52                    A:D3 X:02 Y:C3 P:27 SP:FB PPU:133,178 CYC:20284\n\
EE82  C9 52     CMP #$52                        A:52 X:02 Y:C3 P:25 SP:FB PPU:142,178 CYC:20287\n\
EE84  F0 02     BEQ $EE88                       A:52 X:02 Y:C3 P:27 SP:FB PPU:148,178 CYC:20289\n\
EE88  C8        INY                             A:52 X:02 Y:C3 P:27 SP:FB PPU:157,178 CYC:20292\n\
EE89  A9 37     LDA #$37                        A:52 X:02 Y:C4 P:A5 SP:FB PPU:163,178 CYC:20294\n\
EE8B  85 47     STA $47 = 52                    A:37 X:02 Y:C4 P:25 SP:FB PPU:169,178 CYC:20296\n\
EE8D  20 9E FA  JSR $FA9E                       A:37 X:02 Y:C4 P:25 SP:FB PPU:178,178 CYC:20299\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:02 Y:C4 P:25 SP:F9 PPU:196,178 CYC:20305\n\
FAA0  38        SEC                             A:37 X:02 Y:C4 P:E5 SP:F9 PPU:205,178 CYC:20308\n\
FAA1  A9 10     LDA #$10                        A:37 X:02 Y:C4 P:E5 SP:F9 PPU:211,178 CYC:20310\n\
FAA3  60        RTS                             A:10 X:02 Y:C4 P:65 SP:F9 PPU:217,178 CYC:20312\n\
EE90  07 47    *SLO $47 = 37                    A:10 X:02 Y:C4 P:65 SP:FB PPU:235,178 CYC:20318\n\
EE92  EA        NOP                             A:7E X:02 Y:C4 P:64 SP:FB PPU:250,178 CYC:20323\n\
EE93  EA        NOP                             A:7E X:02 Y:C4 P:64 SP:FB PPU:256,178 CYC:20325\n\
EE94  EA        NOP                             A:7E X:02 Y:C4 P:64 SP:FB PPU:262,178 CYC:20327\n\
EE95  EA        NOP                             A:7E X:02 Y:C4 P:64 SP:FB PPU:268,178 CYC:20329\n\
EE96  20 A4 FA  JSR $FAA4                       A:7E X:02 Y:C4 P:64 SP:FB PPU:274,178 CYC:20331\n\
FAA4  50 40     BVC $FAE6                       A:7E X:02 Y:C4 P:64 SP:F9 PPU:292,178 CYC:20337\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:02 Y:C4 P:64 SP:F9 PPU:298,178 CYC:20339\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:02 Y:C4 P:64 SP:F9 PPU:304,178 CYC:20341\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:02 Y:C4 P:64 SP:F9 PPU:310,178 CYC:20343\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:02 Y:C4 P:64 SP:F9 PPU:316,178 CYC:20345\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:02 Y:C4 P:67 SP:F9 PPU:322,178 CYC:20347\n\
FAB0  60        RTS                             A:7E X:02 Y:C4 P:67 SP:F9 PPU:328,178 CYC:20349\n\
EE99  A5 47     LDA $47 = 6E                    A:7E X:02 Y:C4 P:67 SP:FB PPU:  5,179 CYC:20355\n\
EE9B  C9 6E     CMP #$6E                        A:6E X:02 Y:C4 P:65 SP:FB PPU: 14,179 CYC:20358\n\
EE9D  F0 02     BEQ $EEA1                       A:6E X:02 Y:C4 P:67 SP:FB PPU: 20,179 CYC:20360\n\
EEA1  C8        INY                             A:6E X:02 Y:C4 P:67 SP:FB PPU: 29,179 CYC:20363\n\
EEA2  A9 A5     LDA #$A5                        A:6E X:02 Y:C5 P:E5 SP:FB PPU: 35,179 CYC:20365\n\
EEA4  8D 47 06  STA $0647 = 6E                  A:A5 X:02 Y:C5 P:E5 SP:FB PPU: 41,179 CYC:20367\n\
EEA7  20 7B FA  JSR $FA7B                       A:A5 X:02 Y:C5 P:E5 SP:FB PPU: 53,179 CYC:20371\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:02 Y:C5 P:E5 SP:F9 PPU: 71,179 CYC:20377\n\
FA7D  18        CLC                             A:A5 X:02 Y:C5 P:E5 SP:F9 PPU: 80,179 CYC:20380\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:02 Y:C5 P:E4 SP:F9 PPU: 86,179 CYC:20382\n\
FA80  60        RTS                             A:B3 X:02 Y:C5 P:E4 SP:F9 PPU: 92,179 CYC:20384\n\
EEAA  0F 47 06 *SLO $0647 = A5                  A:B3 X:02 Y:C5 P:E4 SP:FB PPU:110,179 CYC:20390\n\
EEAD  EA        NOP                             A:FB X:02 Y:C5 P:E5 SP:FB PPU:128,179 CYC:20396\n\
EEAE  EA        NOP                             A:FB X:02 Y:C5 P:E5 SP:FB PPU:134,179 CYC:20398\n\
EEAF  EA        NOP                             A:FB X:02 Y:C5 P:E5 SP:FB PPU:140,179 CYC:20400\n\
EEB0  EA        NOP                             A:FB X:02 Y:C5 P:E5 SP:FB PPU:146,179 CYC:20402\n\
EEB1  20 81 FA  JSR $FA81                       A:FB X:02 Y:C5 P:E5 SP:FB PPU:152,179 CYC:20404\n\
FA81  50 63     BVC $FAE6                       A:FB X:02 Y:C5 P:E5 SP:F9 PPU:170,179 CYC:20410\n\
FA83  90 61     BCC $FAE6                       A:FB X:02 Y:C5 P:E5 SP:F9 PPU:176,179 CYC:20412\n\
FA85  10 5F     BPL $FAE6                       A:FB X:02 Y:C5 P:E5 SP:F9 PPU:182,179 CYC:20414\n\
FA87  C9 FB     CMP #$FB                        A:FB X:02 Y:C5 P:E5 SP:F9 PPU:188,179 CYC:20416\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:02 Y:C5 P:67 SP:F9 PPU:194,179 CYC:20418\n\
FA8B  60        RTS                             A:FB X:02 Y:C5 P:67 SP:F9 PPU:200,179 CYC:20420\n\
EEB4  AD 47 06  LDA $0647 = 4A                  A:FB X:02 Y:C5 P:67 SP:FB PPU:218,179 CYC:20426\n\
EEB7  C9 4A     CMP #$4A                        A:4A X:02 Y:C5 P:65 SP:FB PPU:230,179 CYC:20430\n\
EEB9  F0 02     BEQ $EEBD                       A:4A X:02 Y:C5 P:67 SP:FB PPU:236,179 CYC:20432\n\
EEBD  C8        INY                             A:4A X:02 Y:C5 P:67 SP:FB PPU:245,179 CYC:20435\n\
EEBE  A9 29     LDA #$29                        A:4A X:02 Y:C6 P:E5 SP:FB PPU:251,179 CYC:20437\n\
EEC0  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:C6 P:65 SP:FB PPU:257,179 CYC:20439\n\
EEC3  20 8C FA  JSR $FA8C                       A:29 X:02 Y:C6 P:65 SP:FB PPU:269,179 CYC:20443\n\
FA8C  B8        CLV                             A:29 X:02 Y:C6 P:65 SP:F9 PPU:287,179 CYC:20449\n\
FA8D  18        CLC                             A:29 X:02 Y:C6 P:25 SP:F9 PPU:293,179 CYC:20451\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:02 Y:C6 P:24 SP:F9 PPU:299,179 CYC:20453\n\
FA90  60        RTS                             A:C3 X:02 Y:C6 P:A4 SP:F9 PPU:305,179 CYC:20455\n\
EEC6  0F 47 06 *SLO $0647 = 29                  A:C3 X:02 Y:C6 P:A4 SP:FB PPU:323,179 CYC:20461\n\
EEC9  EA        NOP                             A:D3 X:02 Y:C6 P:A4 SP:FB PPU:  0,180 CYC:20467\n\
EECA  EA        NOP                             A:D3 X:02 Y:C6 P:A4 SP:FB PPU:  6,180 CYC:20469\n\
EECB  EA        NOP                             A:D3 X:02 Y:C6 P:A4 SP:FB PPU: 12,180 CYC:20471\n\
EECC  EA        NOP                             A:D3 X:02 Y:C6 P:A4 SP:FB PPU: 18,180 CYC:20473\n\
EECD  20 91 FA  JSR $FA91                       A:D3 X:02 Y:C6 P:A4 SP:FB PPU: 24,180 CYC:20475\n\
FA91  70 53     BVS $FAE6                       A:D3 X:02 Y:C6 P:A4 SP:F9 PPU: 42,180 CYC:20481\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:02 Y:C6 P:A4 SP:F9 PPU: 48,180 CYC:20483\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:02 Y:C6 P:A4 SP:F9 PPU: 54,180 CYC:20485\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:02 Y:C6 P:A4 SP:F9 PPU: 60,180 CYC:20487\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:02 Y:C6 P:A4 SP:F9 PPU: 66,180 CYC:20489\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:02 Y:C6 P:27 SP:F9 PPU: 72,180 CYC:20491\n\
FA9D  60        RTS                             A:D3 X:02 Y:C6 P:27 SP:F9 PPU: 78,180 CYC:20493\n\
EED0  AD 47 06  LDA $0647 = 52                  A:D3 X:02 Y:C6 P:27 SP:FB PPU: 96,180 CYC:20499\n\
EED3  C9 52     CMP #$52                        A:52 X:02 Y:C6 P:25 SP:FB PPU:108,180 CYC:20503\n\
EED5  F0 02     BEQ $EED9                       A:52 X:02 Y:C6 P:27 SP:FB PPU:114,180 CYC:20505\n\
EED9  C8        INY                             A:52 X:02 Y:C6 P:27 SP:FB PPU:123,180 CYC:20508\n\
EEDA  A9 37     LDA #$37                        A:52 X:02 Y:C7 P:A5 SP:FB PPU:129,180 CYC:20510\n\
EEDC  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:C7 P:25 SP:FB PPU:135,180 CYC:20512\n\
EEDF  20 9E FA  JSR $FA9E                       A:37 X:02 Y:C7 P:25 SP:FB PPU:147,180 CYC:20516\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:02 Y:C7 P:25 SP:F9 PPU:165,180 CYC:20522\n\
FAA0  38        SEC                             A:37 X:02 Y:C7 P:E5 SP:F9 PPU:174,180 CYC:20525\n\
FAA1  A9 10     LDA #$10                        A:37 X:02 Y:C7 P:E5 SP:F9 PPU:180,180 CYC:20527\n\
FAA3  60        RTS                             A:10 X:02 Y:C7 P:65 SP:F9 PPU:186,180 CYC:20529\n\
EEE2  0F 47 06 *SLO $0647 = 37                  A:10 X:02 Y:C7 P:65 SP:FB PPU:204,180 CYC:20535\n\
EEE5  EA        NOP                             A:7E X:02 Y:C7 P:64 SP:FB PPU:222,180 CYC:20541\n\
EEE6  EA        NOP                             A:7E X:02 Y:C7 P:64 SP:FB PPU:228,180 CYC:20543\n\
EEE7  EA        NOP                             A:7E X:02 Y:C7 P:64 SP:FB PPU:234,180 CYC:20545\n\
EEE8  EA        NOP                             A:7E X:02 Y:C7 P:64 SP:FB PPU:240,180 CYC:20547\n\
EEE9  20 A4 FA  JSR $FAA4                       A:7E X:02 Y:C7 P:64 SP:FB PPU:246,180 CYC:20549\n\
FAA4  50 40     BVC $FAE6                       A:7E X:02 Y:C7 P:64 SP:F9 PPU:264,180 CYC:20555\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:02 Y:C7 P:64 SP:F9 PPU:270,180 CYC:20557\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:02 Y:C7 P:64 SP:F9 PPU:276,180 CYC:20559\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:02 Y:C7 P:64 SP:F9 PPU:282,180 CYC:20561\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:02 Y:C7 P:64 SP:F9 PPU:288,180 CYC:20563\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:02 Y:C7 P:67 SP:F9 PPU:294,180 CYC:20565\n\
FAB0  60        RTS                             A:7E X:02 Y:C7 P:67 SP:F9 PPU:300,180 CYC:20567\n\
EEEC  AD 47 06  LDA $0647 = 6E                  A:7E X:02 Y:C7 P:67 SP:FB PPU:318,180 CYC:20573\n\
EEEF  C9 6E     CMP #$6E                        A:6E X:02 Y:C7 P:65 SP:FB PPU:330,180 CYC:20577\n\
EEF1  F0 02     BEQ $EEF5                       A:6E X:02 Y:C7 P:67 SP:FB PPU:336,180 CYC:20579\n\
EEF5  A9 A5     LDA #$A5                        A:6E X:02 Y:C7 P:67 SP:FB PPU:  4,181 CYC:20582\n\
EEF7  8D 47 06  STA $0647 = 6E                  A:A5 X:02 Y:C7 P:E5 SP:FB PPU: 10,181 CYC:20584\n\
EEFA  A9 48     LDA #$48                        A:A5 X:02 Y:C7 P:E5 SP:FB PPU: 22,181 CYC:20588\n\
EEFC  85 45     STA $45 = 48                    A:48 X:02 Y:C7 P:65 SP:FB PPU: 28,181 CYC:20590\n\
EEFE  A9 05     LDA #$05                        A:48 X:02 Y:C7 P:65 SP:FB PPU: 37,181 CYC:20593\n\
EF00  85 46     STA $46 = 05                    A:05 X:02 Y:C7 P:65 SP:FB PPU: 43,181 CYC:20595\n\
EF02  A0 FF     LDY #$FF                        A:05 X:02 Y:C7 P:65 SP:FB PPU: 52,181 CYC:20598\n\
EF04  20 7B FA  JSR $FA7B                       A:05 X:02 Y:FF P:E5 SP:FB PPU: 58,181 CYC:20600\n\
FA7B  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:E5 SP:F9 PPU: 76,181 CYC:20606\n\
FA7D  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU: 85,181 CYC:20609\n\
FA7E  A9 B3     LDA #$B3                        A:05 X:02 Y:FF P:E4 SP:F9 PPU: 91,181 CYC:20611\n\
FA80  60        RTS                             A:B3 X:02 Y:FF P:E4 SP:F9 PPU: 97,181 CYC:20613\n\
EF07  13 45    *SLO ($45),Y = 0548 @ 0647 = A5  A:B3 X:02 Y:FF P:E4 SP:FB PPU:115,181 CYC:20619\n\
EF09  EA        NOP                             A:FB X:02 Y:FF P:E5 SP:FB PPU:139,181 CYC:20627\n\
EF0A  EA        NOP                             A:FB X:02 Y:FF P:E5 SP:FB PPU:145,181 CYC:20629\n\
EF0B  08        PHP                             A:FB X:02 Y:FF P:E5 SP:FB PPU:151,181 CYC:20631\n\
EF0C  48        PHA                             A:FB X:02 Y:FF P:E5 SP:FA PPU:160,181 CYC:20634\n\
EF0D  A0 C8     LDY #$C8                        A:FB X:02 Y:FF P:E5 SP:F9 PPU:169,181 CYC:20637\n\
EF0F  68        PLA                             A:FB X:02 Y:C8 P:E5 SP:F9 PPU:175,181 CYC:20639\n\
EF10  28        PLP                             A:FB X:02 Y:C8 P:E5 SP:FA PPU:187,181 CYC:20643\n\
EF11  20 81 FA  JSR $FA81                       A:FB X:02 Y:C8 P:E5 SP:FB PPU:199,181 CYC:20647\n\
FA81  50 63     BVC $FAE6                       A:FB X:02 Y:C8 P:E5 SP:F9 PPU:217,181 CYC:20653\n\
FA83  90 61     BCC $FAE6                       A:FB X:02 Y:C8 P:E5 SP:F9 PPU:223,181 CYC:20655\n\
FA85  10 5F     BPL $FAE6                       A:FB X:02 Y:C8 P:E5 SP:F9 PPU:229,181 CYC:20657\n\
FA87  C9 FB     CMP #$FB                        A:FB X:02 Y:C8 P:E5 SP:F9 PPU:235,181 CYC:20659\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:02 Y:C8 P:67 SP:F9 PPU:241,181 CYC:20661\n\
FA8B  60        RTS                             A:FB X:02 Y:C8 P:67 SP:F9 PPU:247,181 CYC:20663\n\
EF14  AD 47 06  LDA $0647 = 4A                  A:FB X:02 Y:C8 P:67 SP:FB PPU:265,181 CYC:20669\n\
EF17  C9 4A     CMP #$4A                        A:4A X:02 Y:C8 P:65 SP:FB PPU:277,181 CYC:20673\n\
EF19  F0 02     BEQ $EF1D                       A:4A X:02 Y:C8 P:67 SP:FB PPU:283,181 CYC:20675\n\
EF1D  A0 FF     LDY #$FF                        A:4A X:02 Y:C8 P:67 SP:FB PPU:292,181 CYC:20678\n\
EF1F  A9 29     LDA #$29                        A:4A X:02 Y:FF P:E5 SP:FB PPU:298,181 CYC:20680\n\
EF21  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:FF P:65 SP:FB PPU:304,181 CYC:20682\n\
EF24  20 8C FA  JSR $FA8C                       A:29 X:02 Y:FF P:65 SP:FB PPU:316,181 CYC:20686\n\
FA8C  B8        CLV                             A:29 X:02 Y:FF P:65 SP:F9 PPU:334,181 CYC:20692\n\
FA8D  18        CLC                             A:29 X:02 Y:FF P:25 SP:F9 PPU:340,181 CYC:20694\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:02 Y:FF P:24 SP:F9 PPU:  5,182 CYC:20696\n\
FA90  60        RTS                             A:C3 X:02 Y:FF P:A4 SP:F9 PPU: 11,182 CYC:20698\n\
EF27  13 45    *SLO ($45),Y = 0548 @ 0647 = 29  A:C3 X:02 Y:FF P:A4 SP:FB PPU: 29,182 CYC:20704\n\
EF29  EA        NOP                             A:D3 X:02 Y:FF P:A4 SP:FB PPU: 53,182 CYC:20712\n\
EF2A  EA        NOP                             A:D3 X:02 Y:FF P:A4 SP:FB PPU: 59,182 CYC:20714\n\
EF2B  08        PHP                             A:D3 X:02 Y:FF P:A4 SP:FB PPU: 65,182 CYC:20716\n\
EF2C  48        PHA                             A:D3 X:02 Y:FF P:A4 SP:FA PPU: 74,182 CYC:20719\n\
EF2D  A0 C9     LDY #$C9                        A:D3 X:02 Y:FF P:A4 SP:F9 PPU: 83,182 CYC:20722\n\
EF2F  68        PLA                             A:D3 X:02 Y:C9 P:A4 SP:F9 PPU: 89,182 CYC:20724\n\
EF30  28        PLP                             A:D3 X:02 Y:C9 P:A4 SP:FA PPU:101,182 CYC:20728\n\
EF31  20 91 FA  JSR $FA91                       A:D3 X:02 Y:C9 P:A4 SP:FB PPU:113,182 CYC:20732\n\
FA91  70 53     BVS $FAE6                       A:D3 X:02 Y:C9 P:A4 SP:F9 PPU:131,182 CYC:20738\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:02 Y:C9 P:A4 SP:F9 PPU:137,182 CYC:20740\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:02 Y:C9 P:A4 SP:F9 PPU:143,182 CYC:20742\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:02 Y:C9 P:A4 SP:F9 PPU:149,182 CYC:20744\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:02 Y:C9 P:A4 SP:F9 PPU:155,182 CYC:20746\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:02 Y:C9 P:27 SP:F9 PPU:161,182 CYC:20748\n\
FA9D  60        RTS                             A:D3 X:02 Y:C9 P:27 SP:F9 PPU:167,182 CYC:20750\n\
EF34  AD 47 06  LDA $0647 = 52                  A:D3 X:02 Y:C9 P:27 SP:FB PPU:185,182 CYC:20756\n\
EF37  C9 52     CMP #$52                        A:52 X:02 Y:C9 P:25 SP:FB PPU:197,182 CYC:20760\n\
EF39  F0 02     BEQ $EF3D                       A:52 X:02 Y:C9 P:27 SP:FB PPU:203,182 CYC:20762\n\
EF3D  A0 FF     LDY #$FF                        A:52 X:02 Y:C9 P:27 SP:FB PPU:212,182 CYC:20765\n\
EF3F  A9 37     LDA #$37                        A:52 X:02 Y:FF P:A5 SP:FB PPU:218,182 CYC:20767\n\
EF41  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:FF P:25 SP:FB PPU:224,182 CYC:20769\n\
EF44  20 9E FA  JSR $FA9E                       A:37 X:02 Y:FF P:25 SP:FB PPU:236,182 CYC:20773\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU:254,182 CYC:20779\n\
FAA0  38        SEC                             A:37 X:02 Y:FF P:E5 SP:F9 PPU:263,182 CYC:20782\n\
FAA1  A9 10     LDA #$10                        A:37 X:02 Y:FF P:E5 SP:F9 PPU:269,182 CYC:20784\n\
FAA3  60        RTS                             A:10 X:02 Y:FF P:65 SP:F9 PPU:275,182 CYC:20786\n\
EF47  13 45    *SLO ($45),Y = 0548 @ 0647 = 37  A:10 X:02 Y:FF P:65 SP:FB PPU:293,182 CYC:20792\n\
EF49  EA        NOP                             A:7E X:02 Y:FF P:64 SP:FB PPU:317,182 CYC:20800\n\
EF4A  EA        NOP                             A:7E X:02 Y:FF P:64 SP:FB PPU:323,182 CYC:20802\n\
EF4B  08        PHP                             A:7E X:02 Y:FF P:64 SP:FB PPU:329,182 CYC:20804\n\
EF4C  48        PHA                             A:7E X:02 Y:FF P:64 SP:FA PPU:338,182 CYC:20807\n\
EF4D  A0 CA     LDY #$CA                        A:7E X:02 Y:FF P:64 SP:F9 PPU:  6,183 CYC:20810\n\
EF4F  68        PLA                             A:7E X:02 Y:CA P:E4 SP:F9 PPU: 12,183 CYC:20812\n\
EF50  28        PLP                             A:7E X:02 Y:CA P:64 SP:FA PPU: 24,183 CYC:20816\n\
EF51  20 A4 FA  JSR $FAA4                       A:7E X:02 Y:CA P:64 SP:FB PPU: 36,183 CYC:20820\n\
FAA4  50 40     BVC $FAE6                       A:7E X:02 Y:CA P:64 SP:F9 PPU: 54,183 CYC:20826\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:02 Y:CA P:64 SP:F9 PPU: 60,183 CYC:20828\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:02 Y:CA P:64 SP:F9 PPU: 66,183 CYC:20830\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:02 Y:CA P:64 SP:F9 PPU: 72,183 CYC:20832\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:02 Y:CA P:64 SP:F9 PPU: 78,183 CYC:20834\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:02 Y:CA P:67 SP:F9 PPU: 84,183 CYC:20836\n\
FAB0  60        RTS                             A:7E X:02 Y:CA P:67 SP:F9 PPU: 90,183 CYC:20838\n\
EF54  AD 47 06  LDA $0647 = 6E                  A:7E X:02 Y:CA P:67 SP:FB PPU:108,183 CYC:20844\n\
EF57  C9 6E     CMP #$6E                        A:6E X:02 Y:CA P:65 SP:FB PPU:120,183 CYC:20848\n\
EF59  F0 02     BEQ $EF5D                       A:6E X:02 Y:CA P:67 SP:FB PPU:126,183 CYC:20850\n\
EF5D  A0 CB     LDY #$CB                        A:6E X:02 Y:CA P:67 SP:FB PPU:135,183 CYC:20853\n\
EF5F  A2 FF     LDX #$FF                        A:6E X:02 Y:CB P:E5 SP:FB PPU:141,183 CYC:20855\n\
EF61  A9 A5     LDA #$A5                        A:6E X:FF Y:CB P:E5 SP:FB PPU:147,183 CYC:20857\n\
EF63  85 47     STA $47 = 6E                    A:A5 X:FF Y:CB P:E5 SP:FB PPU:153,183 CYC:20859\n\
EF65  20 7B FA  JSR $FA7B                       A:A5 X:FF Y:CB P:E5 SP:FB PPU:162,183 CYC:20862\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:FF Y:CB P:E5 SP:F9 PPU:180,183 CYC:20868\n\
FA7D  18        CLC                             A:A5 X:FF Y:CB P:E5 SP:F9 PPU:189,183 CYC:20871\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:FF Y:CB P:E4 SP:F9 PPU:195,183 CYC:20873\n\
FA80  60        RTS                             A:B3 X:FF Y:CB P:E4 SP:F9 PPU:201,183 CYC:20875\n\
EF68  17 48    *SLO $48,X @ 47 = A5             A:B3 X:FF Y:CB P:E4 SP:FB PPU:219,183 CYC:20881\n\
EF6A  EA        NOP                             A:FB X:FF Y:CB P:E5 SP:FB PPU:237,183 CYC:20887\n\
EF6B  EA        NOP                             A:FB X:FF Y:CB P:E5 SP:FB PPU:243,183 CYC:20889\n\
EF6C  EA        NOP                             A:FB X:FF Y:CB P:E5 SP:FB PPU:249,183 CYC:20891\n\
EF6D  EA        NOP                             A:FB X:FF Y:CB P:E5 SP:FB PPU:255,183 CYC:20893\n\
EF6E  20 81 FA  JSR $FA81                       A:FB X:FF Y:CB P:E5 SP:FB PPU:261,183 CYC:20895\n\
FA81  50 63     BVC $FAE6                       A:FB X:FF Y:CB P:E5 SP:F9 PPU:279,183 CYC:20901\n\
FA83  90 61     BCC $FAE6                       A:FB X:FF Y:CB P:E5 SP:F9 PPU:285,183 CYC:20903\n\
FA85  10 5F     BPL $FAE6                       A:FB X:FF Y:CB P:E5 SP:F9 PPU:291,183 CYC:20905\n\
FA87  C9 FB     CMP #$FB                        A:FB X:FF Y:CB P:E5 SP:F9 PPU:297,183 CYC:20907\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:FF Y:CB P:67 SP:F9 PPU:303,183 CYC:20909\n\
FA8B  60        RTS                             A:FB X:FF Y:CB P:67 SP:F9 PPU:309,183 CYC:20911\n\
EF71  A5 47     LDA $47 = 4A                    A:FB X:FF Y:CB P:67 SP:FB PPU:327,183 CYC:20917\n\
EF73  C9 4A     CMP #$4A                        A:4A X:FF Y:CB P:65 SP:FB PPU:336,183 CYC:20920\n\
EF75  F0 02     BEQ $EF79                       A:4A X:FF Y:CB P:67 SP:FB PPU:  1,184 CYC:20922\n\
EF79  C8        INY                             A:4A X:FF Y:CB P:67 SP:FB PPU: 10,184 CYC:20925\n\
EF7A  A9 29     LDA #$29                        A:4A X:FF Y:CC P:E5 SP:FB PPU: 16,184 CYC:20927\n\
EF7C  85 47     STA $47 = 4A                    A:29 X:FF Y:CC P:65 SP:FB PPU: 22,184 CYC:20929\n\
EF7E  20 8C FA  JSR $FA8C                       A:29 X:FF Y:CC P:65 SP:FB PPU: 31,184 CYC:20932\n\
FA8C  B8        CLV                             A:29 X:FF Y:CC P:65 SP:F9 PPU: 49,184 CYC:20938\n\
FA8D  18        CLC                             A:29 X:FF Y:CC P:25 SP:F9 PPU: 55,184 CYC:20940\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:FF Y:CC P:24 SP:F9 PPU: 61,184 CYC:20942\n\
FA90  60        RTS                             A:C3 X:FF Y:CC P:A4 SP:F9 PPU: 67,184 CYC:20944\n\
EF81  17 48    *SLO $48,X @ 47 = 29             A:C3 X:FF Y:CC P:A4 SP:FB PPU: 85,184 CYC:20950\n\
EF83  EA        NOP                             A:D3 X:FF Y:CC P:A4 SP:FB PPU:103,184 CYC:20956\n\
EF84  EA        NOP                             A:D3 X:FF Y:CC P:A4 SP:FB PPU:109,184 CYC:20958\n\
EF85  EA        NOP                             A:D3 X:FF Y:CC P:A4 SP:FB PPU:115,184 CYC:20960\n\
EF86  EA        NOP                             A:D3 X:FF Y:CC P:A4 SP:FB PPU:121,184 CYC:20962\n\
EF87  20 91 FA  JSR $FA91                       A:D3 X:FF Y:CC P:A4 SP:FB PPU:127,184 CYC:20964\n\
FA91  70 53     BVS $FAE6                       A:D3 X:FF Y:CC P:A4 SP:F9 PPU:145,184 CYC:20970\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:FF Y:CC P:A4 SP:F9 PPU:151,184 CYC:20972\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:FF Y:CC P:A4 SP:F9 PPU:157,184 CYC:20974\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:FF Y:CC P:A4 SP:F9 PPU:163,184 CYC:20976\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:FF Y:CC P:A4 SP:F9 PPU:169,184 CYC:20978\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:FF Y:CC P:27 SP:F9 PPU:175,184 CYC:20980\n\
FA9D  60        RTS                             A:D3 X:FF Y:CC P:27 SP:F9 PPU:181,184 CYC:20982\n\
EF8A  A5 47     LDA $47 = 52                    A:D3 X:FF Y:CC P:27 SP:FB PPU:199,184 CYC:20988\n\
EF8C  C9 52     CMP #$52                        A:52 X:FF Y:CC P:25 SP:FB PPU:208,184 CYC:20991\n\
EF8E  F0 02     BEQ $EF92                       A:52 X:FF Y:CC P:27 SP:FB PPU:214,184 CYC:20993\n\
EF92  C8        INY                             A:52 X:FF Y:CC P:27 SP:FB PPU:223,184 CYC:20996\n\
EF93  A9 37     LDA #$37                        A:52 X:FF Y:CD P:A5 SP:FB PPU:229,184 CYC:20998\n\
EF95  85 47     STA $47 = 52                    A:37 X:FF Y:CD P:25 SP:FB PPU:235,184 CYC:21000\n\
EF97  20 9E FA  JSR $FA9E                       A:37 X:FF Y:CD P:25 SP:FB PPU:244,184 CYC:21003\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:FF Y:CD P:25 SP:F9 PPU:262,184 CYC:21009\n\
FAA0  38        SEC                             A:37 X:FF Y:CD P:E5 SP:F9 PPU:271,184 CYC:21012\n\
FAA1  A9 10     LDA #$10                        A:37 X:FF Y:CD P:E5 SP:F9 PPU:277,184 CYC:21014\n\
FAA3  60        RTS                             A:10 X:FF Y:CD P:65 SP:F9 PPU:283,184 CYC:21016\n\
EF9A  17 48    *SLO $48,X @ 47 = 37             A:10 X:FF Y:CD P:65 SP:FB PPU:301,184 CYC:21022\n\
EF9C  EA        NOP                             A:7E X:FF Y:CD P:64 SP:FB PPU:319,184 CYC:21028\n\
EF9D  EA        NOP                             A:7E X:FF Y:CD P:64 SP:FB PPU:325,184 CYC:21030\n\
EF9E  EA        NOP                             A:7E X:FF Y:CD P:64 SP:FB PPU:331,184 CYC:21032\n\
EF9F  EA        NOP                             A:7E X:FF Y:CD P:64 SP:FB PPU:337,184 CYC:21034\n\
EFA0  20 A4 FA  JSR $FAA4                       A:7E X:FF Y:CD P:64 SP:FB PPU:  2,185 CYC:21036\n\
FAA4  50 40     BVC $FAE6                       A:7E X:FF Y:CD P:64 SP:F9 PPU: 20,185 CYC:21042\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:FF Y:CD P:64 SP:F9 PPU: 26,185 CYC:21044\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:FF Y:CD P:64 SP:F9 PPU: 32,185 CYC:21046\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:FF Y:CD P:64 SP:F9 PPU: 38,185 CYC:21048\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:FF Y:CD P:64 SP:F9 PPU: 44,185 CYC:21050\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:FF Y:CD P:67 SP:F9 PPU: 50,185 CYC:21052\n\
FAB0  60        RTS                             A:7E X:FF Y:CD P:67 SP:F9 PPU: 56,185 CYC:21054\n\
EFA3  A5 47     LDA $47 = 6E                    A:7E X:FF Y:CD P:67 SP:FB PPU: 74,185 CYC:21060\n\
EFA5  C9 6E     CMP #$6E                        A:6E X:FF Y:CD P:65 SP:FB PPU: 83,185 CYC:21063\n\
EFA7  F0 02     BEQ $EFAB                       A:6E X:FF Y:CD P:67 SP:FB PPU: 89,185 CYC:21065\n\
EFAB  A9 A5     LDA #$A5                        A:6E X:FF Y:CD P:67 SP:FB PPU: 98,185 CYC:21068\n\
EFAD  8D 47 06  STA $0647 = 6E                  A:A5 X:FF Y:CD P:E5 SP:FB PPU:104,185 CYC:21070\n\
EFB0  A0 FF     LDY #$FF                        A:A5 X:FF Y:CD P:E5 SP:FB PPU:116,185 CYC:21074\n\
EFB2  20 7B FA  JSR $FA7B                       A:A5 X:FF Y:FF P:E5 SP:FB PPU:122,185 CYC:21076\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:FF Y:FF P:E5 SP:F9 PPU:140,185 CYC:21082\n\
FA7D  18        CLC                             A:A5 X:FF Y:FF P:E5 SP:F9 PPU:149,185 CYC:21085\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:FF Y:FF P:E4 SP:F9 PPU:155,185 CYC:21087\n\
FA80  60        RTS                             A:B3 X:FF Y:FF P:E4 SP:F9 PPU:161,185 CYC:21089\n\
EFB5  1B 48 05 *SLO $0548,Y @ 0647 = A5         A:B3 X:FF Y:FF P:E4 SP:FB PPU:179,185 CYC:21095\n\
EFB8  EA        NOP                             A:FB X:FF Y:FF P:E5 SP:FB PPU:200,185 CYC:21102\n\
EFB9  EA        NOP                             A:FB X:FF Y:FF P:E5 SP:FB PPU:206,185 CYC:21104\n\
EFBA  08        PHP                             A:FB X:FF Y:FF P:E5 SP:FB PPU:212,185 CYC:21106\n\
EFBB  48        PHA                             A:FB X:FF Y:FF P:E5 SP:FA PPU:221,185 CYC:21109\n\
EFBC  A0 CE     LDY #$CE                        A:FB X:FF Y:FF P:E5 SP:F9 PPU:230,185 CYC:21112\n\
EFBE  68        PLA                             A:FB X:FF Y:CE P:E5 SP:F9 PPU:236,185 CYC:21114\n\
EFBF  28        PLP                             A:FB X:FF Y:CE P:E5 SP:FA PPU:248,185 CYC:21118\n\
EFC0  20 81 FA  JSR $FA81                       A:FB X:FF Y:CE P:E5 SP:FB PPU:260,185 CYC:21122\n\
FA81  50 63     BVC $FAE6                       A:FB X:FF Y:CE P:E5 SP:F9 PPU:278,185 CYC:21128\n\
FA83  90 61     BCC $FAE6                       A:FB X:FF Y:CE P:E5 SP:F9 PPU:284,185 CYC:21130\n\
FA85  10 5F     BPL $FAE6                       A:FB X:FF Y:CE P:E5 SP:F9 PPU:290,185 CYC:21132\n\
FA87  C9 FB     CMP #$FB                        A:FB X:FF Y:CE P:E5 SP:F9 PPU:296,185 CYC:21134\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:FF Y:CE P:67 SP:F9 PPU:302,185 CYC:21136\n\
FA8B  60        RTS                             A:FB X:FF Y:CE P:67 SP:F9 PPU:308,185 CYC:21138\n\
EFC3  AD 47 06  LDA $0647 = 4A                  A:FB X:FF Y:CE P:67 SP:FB PPU:326,185 CYC:21144\n\
EFC6  C9 4A     CMP #$4A                        A:4A X:FF Y:CE P:65 SP:FB PPU:338,185 CYC:21148\n\
EFC8  F0 02     BEQ $EFCC                       A:4A X:FF Y:CE P:67 SP:FB PPU:  3,186 CYC:21150\n\
EFCC  A0 FF     LDY #$FF                        A:4A X:FF Y:CE P:67 SP:FB PPU: 12,186 CYC:21153\n\
EFCE  A9 29     LDA #$29                        A:4A X:FF Y:FF P:E5 SP:FB PPU: 18,186 CYC:21155\n\
EFD0  8D 47 06  STA $0647 = 4A                  A:29 X:FF Y:FF P:65 SP:FB PPU: 24,186 CYC:21157\n\
EFD3  20 8C FA  JSR $FA8C                       A:29 X:FF Y:FF P:65 SP:FB PPU: 36,186 CYC:21161\n\
FA8C  B8        CLV                             A:29 X:FF Y:FF P:65 SP:F9 PPU: 54,186 CYC:21167\n\
FA8D  18        CLC                             A:29 X:FF Y:FF P:25 SP:F9 PPU: 60,186 CYC:21169\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:FF Y:FF P:24 SP:F9 PPU: 66,186 CYC:21171\n\
FA90  60        RTS                             A:C3 X:FF Y:FF P:A4 SP:F9 PPU: 72,186 CYC:21173\n\
EFD6  1B 48 05 *SLO $0548,Y @ 0647 = 29         A:C3 X:FF Y:FF P:A4 SP:FB PPU: 90,186 CYC:21179\n\
EFD9  EA        NOP                             A:D3 X:FF Y:FF P:A4 SP:FB PPU:111,186 CYC:21186\n\
EFDA  EA        NOP                             A:D3 X:FF Y:FF P:A4 SP:FB PPU:117,186 CYC:21188\n\
EFDB  08        PHP                             A:D3 X:FF Y:FF P:A4 SP:FB PPU:123,186 CYC:21190\n\
EFDC  48        PHA                             A:D3 X:FF Y:FF P:A4 SP:FA PPU:132,186 CYC:21193\n\
EFDD  A0 CF     LDY #$CF                        A:D3 X:FF Y:FF P:A4 SP:F9 PPU:141,186 CYC:21196\n\
EFDF  68        PLA                             A:D3 X:FF Y:CF P:A4 SP:F9 PPU:147,186 CYC:21198\n\
EFE0  28        PLP                             A:D3 X:FF Y:CF P:A4 SP:FA PPU:159,186 CYC:21202\n\
EFE1  20 91 FA  JSR $FA91                       A:D3 X:FF Y:CF P:A4 SP:FB PPU:171,186 CYC:21206\n\
FA91  70 53     BVS $FAE6                       A:D3 X:FF Y:CF P:A4 SP:F9 PPU:189,186 CYC:21212\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:FF Y:CF P:A4 SP:F9 PPU:195,186 CYC:21214\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:FF Y:CF P:A4 SP:F9 PPU:201,186 CYC:21216\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:FF Y:CF P:A4 SP:F9 PPU:207,186 CYC:21218\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:FF Y:CF P:A4 SP:F9 PPU:213,186 CYC:21220\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:FF Y:CF P:27 SP:F9 PPU:219,186 CYC:21222\n\
FA9D  60        RTS                             A:D3 X:FF Y:CF P:27 SP:F9 PPU:225,186 CYC:21224\n\
EFE4  AD 47 06  LDA $0647 = 52                  A:D3 X:FF Y:CF P:27 SP:FB PPU:243,186 CYC:21230\n\
EFE7  C9 52     CMP #$52                        A:52 X:FF Y:CF P:25 SP:FB PPU:255,186 CYC:21234\n\
EFE9  F0 02     BEQ $EFED                       A:52 X:FF Y:CF P:27 SP:FB PPU:261,186 CYC:21236\n\
EFED  A0 FF     LDY #$FF                        A:52 X:FF Y:CF P:27 SP:FB PPU:270,186 CYC:21239\n\
EFEF  A9 37     LDA #$37                        A:52 X:FF Y:FF P:A5 SP:FB PPU:276,186 CYC:21241\n\
EFF1  8D 47 06  STA $0647 = 52                  A:37 X:FF Y:FF P:25 SP:FB PPU:282,186 CYC:21243\n\
EFF4  20 9E FA  JSR $FA9E                       A:37 X:FF Y:FF P:25 SP:FB PPU:294,186 CYC:21247\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU:312,186 CYC:21253\n\
FAA0  38        SEC                             A:37 X:FF Y:FF P:E5 SP:F9 PPU:321,186 CYC:21256\n\
FAA1  A9 10     LDA #$10                        A:37 X:FF Y:FF P:E5 SP:F9 PPU:327,186 CYC:21258\n\
FAA3  60        RTS                             A:10 X:FF Y:FF P:65 SP:F9 PPU:333,186 CYC:21260\n\
EFF7  1B 48 05 *SLO $0548,Y @ 0647 = 37         A:10 X:FF Y:FF P:65 SP:FB PPU: 10,187 CYC:21266\n\
EFFA  EA        NOP                             A:7E X:FF Y:FF P:64 SP:FB PPU: 31,187 CYC:21273\n\
EFFB  EA        NOP                             A:7E X:FF Y:FF P:64 SP:FB PPU: 37,187 CYC:21275\n\
EFFC  08        PHP                             A:7E X:FF Y:FF P:64 SP:FB PPU: 43,187 CYC:21277\n\
EFFD  48        PHA                             A:7E X:FF Y:FF P:64 SP:FA PPU: 52,187 CYC:21280\n\
EFFE  A0 D0     LDY #$D0                        A:7E X:FF Y:FF P:64 SP:F9 PPU: 61,187 CYC:21283\n\
F000  68        PLA                             A:7E X:FF Y:D0 P:E4 SP:F9 PPU: 67,187 CYC:21285\n\
F001  28        PLP                             A:7E X:FF Y:D0 P:64 SP:FA PPU: 79,187 CYC:21289\n\
F002  20 A4 FA  JSR $FAA4                       A:7E X:FF Y:D0 P:64 SP:FB PPU: 91,187 CYC:21293\n\
FAA4  50 40     BVC $FAE6                       A:7E X:FF Y:D0 P:64 SP:F9 PPU:109,187 CYC:21299\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:FF Y:D0 P:64 SP:F9 PPU:115,187 CYC:21301\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:FF Y:D0 P:64 SP:F9 PPU:121,187 CYC:21303\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:FF Y:D0 P:64 SP:F9 PPU:127,187 CYC:21305\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:FF Y:D0 P:64 SP:F9 PPU:133,187 CYC:21307\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:FF Y:D0 P:67 SP:F9 PPU:139,187 CYC:21309\n\
FAB0  60        RTS                             A:7E X:FF Y:D0 P:67 SP:F9 PPU:145,187 CYC:21311\n\
F005  AD 47 06  LDA $0647 = 6E                  A:7E X:FF Y:D0 P:67 SP:FB PPU:163,187 CYC:21317\n\
F008  C9 6E     CMP #$6E                        A:6E X:FF Y:D0 P:65 SP:FB PPU:175,187 CYC:21321\n\
F00A  F0 02     BEQ $F00E                       A:6E X:FF Y:D0 P:67 SP:FB PPU:181,187 CYC:21323\n\
F00E  A0 D1     LDY #$D1                        A:6E X:FF Y:D0 P:67 SP:FB PPU:190,187 CYC:21326\n\
F010  A2 FF     LDX #$FF                        A:6E X:FF Y:D1 P:E5 SP:FB PPU:196,187 CYC:21328\n\
F012  A9 A5     LDA #$A5                        A:6E X:FF Y:D1 P:E5 SP:FB PPU:202,187 CYC:21330\n\
F014  8D 47 06  STA $0647 = 6E                  A:A5 X:FF Y:D1 P:E5 SP:FB PPU:208,187 CYC:21332\n\
F017  20 7B FA  JSR $FA7B                       A:A5 X:FF Y:D1 P:E5 SP:FB PPU:220,187 CYC:21336\n\
FA7B  24 01     BIT $01 = FF                    A:A5 X:FF Y:D1 P:E5 SP:F9 PPU:238,187 CYC:21342\n\
FA7D  18        CLC                             A:A5 X:FF Y:D1 P:E5 SP:F9 PPU:247,187 CYC:21345\n\
FA7E  A9 B3     LDA #$B3                        A:A5 X:FF Y:D1 P:E4 SP:F9 PPU:253,187 CYC:21347\n\
FA80  60        RTS                             A:B3 X:FF Y:D1 P:E4 SP:F9 PPU:259,187 CYC:21349\n\
F01A  1F 48 05 *SLO $0548,X @ 0647 = A5         A:B3 X:FF Y:D1 P:E4 SP:FB PPU:277,187 CYC:21355\n\
F01D  EA        NOP                             A:FB X:FF Y:D1 P:E5 SP:FB PPU:298,187 CYC:21362\n\
F01E  EA        NOP                             A:FB X:FF Y:D1 P:E5 SP:FB PPU:304,187 CYC:21364\n\
F01F  EA        NOP                             A:FB X:FF Y:D1 P:E5 SP:FB PPU:310,187 CYC:21366\n\
F020  EA        NOP                             A:FB X:FF Y:D1 P:E5 SP:FB PPU:316,187 CYC:21368\n\
F021  20 81 FA  JSR $FA81                       A:FB X:FF Y:D1 P:E5 SP:FB PPU:322,187 CYC:21370\n\
FA81  50 63     BVC $FAE6                       A:FB X:FF Y:D1 P:E5 SP:F9 PPU:340,187 CYC:21376\n\
FA83  90 61     BCC $FAE6                       A:FB X:FF Y:D1 P:E5 SP:F9 PPU:  5,188 CYC:21378\n\
FA85  10 5F     BPL $FAE6                       A:FB X:FF Y:D1 P:E5 SP:F9 PPU: 11,188 CYC:21380\n\
FA87  C9 FB     CMP #$FB                        A:FB X:FF Y:D1 P:E5 SP:F9 PPU: 17,188 CYC:21382\n\
FA89  D0 5B     BNE $FAE6                       A:FB X:FF Y:D1 P:67 SP:F9 PPU: 23,188 CYC:21384\n\
FA8B  60        RTS                             A:FB X:FF Y:D1 P:67 SP:F9 PPU: 29,188 CYC:21386\n\
F024  AD 47 06  LDA $0647 = 4A                  A:FB X:FF Y:D1 P:67 SP:FB PPU: 47,188 CYC:21392\n\
F027  C9 4A     CMP #$4A                        A:4A X:FF Y:D1 P:65 SP:FB PPU: 59,188 CYC:21396\n\
F029  F0 02     BEQ $F02D                       A:4A X:FF Y:D1 P:67 SP:FB PPU: 65,188 CYC:21398\n\
F02D  C8        INY                             A:4A X:FF Y:D1 P:67 SP:FB PPU: 74,188 CYC:21401\n\
F02E  A9 29     LDA #$29                        A:4A X:FF Y:D2 P:E5 SP:FB PPU: 80,188 CYC:21403\n\
F030  8D 47 06  STA $0647 = 4A                  A:29 X:FF Y:D2 P:65 SP:FB PPU: 86,188 CYC:21405\n\
F033  20 8C FA  JSR $FA8C                       A:29 X:FF Y:D2 P:65 SP:FB PPU: 98,188 CYC:21409\n\
FA8C  B8        CLV                             A:29 X:FF Y:D2 P:65 SP:F9 PPU:116,188 CYC:21415\n\
FA8D  18        CLC                             A:29 X:FF Y:D2 P:25 SP:F9 PPU:122,188 CYC:21417\n\
FA8E  A9 C3     LDA #$C3                        A:29 X:FF Y:D2 P:24 SP:F9 PPU:128,188 CYC:21419\n\
FA90  60        RTS                             A:C3 X:FF Y:D2 P:A4 SP:F9 PPU:134,188 CYC:21421\n\
F036  1F 48 05 *SLO $0548,X @ 0647 = 29         A:C3 X:FF Y:D2 P:A4 SP:FB PPU:152,188 CYC:21427\n\
F039  EA        NOP                             A:D3 X:FF Y:D2 P:A4 SP:FB PPU:173,188 CYC:21434\n\
F03A  EA        NOP                             A:D3 X:FF Y:D2 P:A4 SP:FB PPU:179,188 CYC:21436\n\
F03B  EA        NOP                             A:D3 X:FF Y:D2 P:A4 SP:FB PPU:185,188 CYC:21438\n\
F03C  EA        NOP                             A:D3 X:FF Y:D2 P:A4 SP:FB PPU:191,188 CYC:21440\n\
F03D  20 91 FA  JSR $FA91                       A:D3 X:FF Y:D2 P:A4 SP:FB PPU:197,188 CYC:21442\n\
FA91  70 53     BVS $FAE6                       A:D3 X:FF Y:D2 P:A4 SP:F9 PPU:215,188 CYC:21448\n\
FA93  F0 51     BEQ $FAE6                       A:D3 X:FF Y:D2 P:A4 SP:F9 PPU:221,188 CYC:21450\n\
FA95  10 4F     BPL $FAE6                       A:D3 X:FF Y:D2 P:A4 SP:F9 PPU:227,188 CYC:21452\n\
FA97  B0 4D     BCS $FAE6                       A:D3 X:FF Y:D2 P:A4 SP:F9 PPU:233,188 CYC:21454\n\
FA99  C9 D3     CMP #$D3                        A:D3 X:FF Y:D2 P:A4 SP:F9 PPU:239,188 CYC:21456\n\
FA9B  D0 49     BNE $FAE6                       A:D3 X:FF Y:D2 P:27 SP:F9 PPU:245,188 CYC:21458\n\
FA9D  60        RTS                             A:D3 X:FF Y:D2 P:27 SP:F9 PPU:251,188 CYC:21460\n\
F040  AD 47 06  LDA $0647 = 52                  A:D3 X:FF Y:D2 P:27 SP:FB PPU:269,188 CYC:21466\n\
F043  C9 52     CMP #$52                        A:52 X:FF Y:D2 P:25 SP:FB PPU:281,188 CYC:21470\n\
F045  F0 02     BEQ $F049                       A:52 X:FF Y:D2 P:27 SP:FB PPU:287,188 CYC:21472\n\
F049  C8        INY                             A:52 X:FF Y:D2 P:27 SP:FB PPU:296,188 CYC:21475\n\
F04A  A9 37     LDA #$37                        A:52 X:FF Y:D3 P:A5 SP:FB PPU:302,188 CYC:21477\n\
F04C  8D 47 06  STA $0647 = 52                  A:37 X:FF Y:D3 P:25 SP:FB PPU:308,188 CYC:21479\n\
F04F  20 9E FA  JSR $FA9E                       A:37 X:FF Y:D3 P:25 SP:FB PPU:320,188 CYC:21483\n\
FA9E  24 01     BIT $01 = FF                    A:37 X:FF Y:D3 P:25 SP:F9 PPU:338,188 CYC:21489\n\
FAA0  38        SEC                             A:37 X:FF Y:D3 P:E5 SP:F9 PPU:  6,189 CYC:21492\n\
FAA1  A9 10     LDA #$10                        A:37 X:FF Y:D3 P:E5 SP:F9 PPU: 12,189 CYC:21494\n\
FAA3  60        RTS                             A:10 X:FF Y:D3 P:65 SP:F9 PPU: 18,189 CYC:21496\n\
F052  1F 48 05 *SLO $0548,X @ 0647 = 37         A:10 X:FF Y:D3 P:65 SP:FB PPU: 36,189 CYC:21502\n\
F055  EA        NOP                             A:7E X:FF Y:D3 P:64 SP:FB PPU: 57,189 CYC:21509\n\
F056  EA        NOP                             A:7E X:FF Y:D3 P:64 SP:FB PPU: 63,189 CYC:21511\n\
F057  EA        NOP                             A:7E X:FF Y:D3 P:64 SP:FB PPU: 69,189 CYC:21513\n\
F058  EA        NOP                             A:7E X:FF Y:D3 P:64 SP:FB PPU: 75,189 CYC:21515\n\
F059  20 A4 FA  JSR $FAA4                       A:7E X:FF Y:D3 P:64 SP:FB PPU: 81,189 CYC:21517\n\
FAA4  50 40     BVC $FAE6                       A:7E X:FF Y:D3 P:64 SP:F9 PPU: 99,189 CYC:21523\n\
FAA6  F0 3E     BEQ $FAE6                       A:7E X:FF Y:D3 P:64 SP:F9 PPU:105,189 CYC:21525\n\
FAA8  30 3C     BMI $FAE6                       A:7E X:FF Y:D3 P:64 SP:F9 PPU:111,189 CYC:21527\n\
FAAA  B0 3A     BCS $FAE6                       A:7E X:FF Y:D3 P:64 SP:F9 PPU:117,189 CYC:21529\n\
FAAC  C9 7E     CMP #$7E                        A:7E X:FF Y:D3 P:64 SP:F9 PPU:123,189 CYC:21531\n\
FAAE  D0 36     BNE $FAE6                       A:7E X:FF Y:D3 P:67 SP:F9 PPU:129,189 CYC:21533\n\
FAB0  60        RTS                             A:7E X:FF Y:D3 P:67 SP:F9 PPU:135,189 CYC:21535\n\
F05C  AD 47 06  LDA $0647 = 6E                  A:7E X:FF Y:D3 P:67 SP:FB PPU:153,189 CYC:21541\n\
F05F  C9 6E     CMP #$6E                        A:6E X:FF Y:D3 P:65 SP:FB PPU:165,189 CYC:21545\n\
F061  F0 02     BEQ $F065                       A:6E X:FF Y:D3 P:67 SP:FB PPU:171,189 CYC:21547\n\
F065  60        RTS                             A:6E X:FF Y:D3 P:67 SP:FB PPU:180,189 CYC:21550\n\
C644  20 66 F0  JSR $F066                       A:6E X:FF Y:D3 P:67 SP:FD PPU:198,189 CYC:21556\n\
F066  A9 FF     LDA #$FF                        A:6E X:FF Y:D3 P:67 SP:FB PPU:216,189 CYC:21562\n\
F068  85 01     STA $01 = FF                    A:FF X:FF Y:D3 P:E5 SP:FB PPU:222,189 CYC:21564\n\
F06A  A0 D4     LDY #$D4                        A:FF X:FF Y:D3 P:E5 SP:FB PPU:231,189 CYC:21567\n\
F06C  A2 02     LDX #$02                        A:FF X:FF Y:D4 P:E5 SP:FB PPU:237,189 CYC:21569\n\
F06E  A9 47     LDA #$47                        A:FF X:02 Y:D4 P:65 SP:FB PPU:243,189 CYC:21571\n\
F070  85 47     STA $47 = 6E                    A:47 X:02 Y:D4 P:65 SP:FB PPU:249,189 CYC:21573\n\
F072  A9 06     LDA #$06                        A:47 X:02 Y:D4 P:65 SP:FB PPU:258,189 CYC:21576\n\
F074  85 48     STA $48 = 06                    A:06 X:02 Y:D4 P:65 SP:FB PPU:264,189 CYC:21578\n\
F076  A9 A5     LDA #$A5                        A:06 X:02 Y:D4 P:65 SP:FB PPU:273,189 CYC:21581\n\
F078  8D 47 06  STA $0647 = 6E                  A:A5 X:02 Y:D4 P:E5 SP:FB PPU:279,189 CYC:21583\n\
F07B  20 53 FB  JSR $FB53                       A:A5 X:02 Y:D4 P:E5 SP:FB PPU:291,189 CYC:21587\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:02 Y:D4 P:E5 SP:F9 PPU:309,189 CYC:21593\n\
FB55  18        CLC                             A:A5 X:02 Y:D4 P:E5 SP:F9 PPU:318,189 CYC:21596\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:02 Y:D4 P:E4 SP:F9 PPU:324,189 CYC:21598\n\
FB58  60        RTS                             A:B3 X:02 Y:D4 P:E4 SP:F9 PPU:330,189 CYC:21600\n\
F07E  23 45    *RLA ($45,X) @ 47 = 0647 = A5    A:B3 X:02 Y:D4 P:E4 SP:FB PPU:  7,190 CYC:21606\n\
F080  EA        NOP                             A:02 X:02 Y:D4 P:65 SP:FB PPU: 31,190 CYC:21614\n\
F081  EA        NOP                             A:02 X:02 Y:D4 P:65 SP:FB PPU: 37,190 CYC:21616\n\
F082  EA        NOP                             A:02 X:02 Y:D4 P:65 SP:FB PPU: 43,190 CYC:21618\n\
F083  EA        NOP                             A:02 X:02 Y:D4 P:65 SP:FB PPU: 49,190 CYC:21620\n\
F084  20 59 FB  JSR $FB59                       A:02 X:02 Y:D4 P:65 SP:FB PPU: 55,190 CYC:21622\n\
FB59  50 1A     BVC $FB75                       A:02 X:02 Y:D4 P:65 SP:F9 PPU: 73,190 CYC:21628\n\
FB5B  90 18     BCC $FB75                       A:02 X:02 Y:D4 P:65 SP:F9 PPU: 79,190 CYC:21630\n\
FB5D  30 16     BMI $FB75                       A:02 X:02 Y:D4 P:65 SP:F9 PPU: 85,190 CYC:21632\n\
FB5F  C9 02     CMP #$02                        A:02 X:02 Y:D4 P:65 SP:F9 PPU: 91,190 CYC:21634\n\
FB61  D0 12     BNE $FB75                       A:02 X:02 Y:D4 P:67 SP:F9 PPU: 97,190 CYC:21636\n\
FB63  60        RTS                             A:02 X:02 Y:D4 P:67 SP:F9 PPU:103,190 CYC:21638\n\
F087  AD 47 06  LDA $0647 = 4A                  A:02 X:02 Y:D4 P:67 SP:FB PPU:121,190 CYC:21644\n\
F08A  C9 4A     CMP #$4A                        A:4A X:02 Y:D4 P:65 SP:FB PPU:133,190 CYC:21648\n\
F08C  F0 02     BEQ $F090                       A:4A X:02 Y:D4 P:67 SP:FB PPU:139,190 CYC:21650\n\
F090  C8        INY                             A:4A X:02 Y:D4 P:67 SP:FB PPU:148,190 CYC:21653\n\
F091  A9 29     LDA #$29                        A:4A X:02 Y:D5 P:E5 SP:FB PPU:154,190 CYC:21655\n\
F093  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:D5 P:65 SP:FB PPU:160,190 CYC:21657\n\
F096  20 64 FB  JSR $FB64                       A:29 X:02 Y:D5 P:65 SP:FB PPU:172,190 CYC:21661\n\
FB64  B8        CLV                             A:29 X:02 Y:D5 P:65 SP:F9 PPU:190,190 CYC:21667\n\
FB65  18        CLC                             A:29 X:02 Y:D5 P:25 SP:F9 PPU:196,190 CYC:21669\n\
FB66  A9 42     LDA #$42                        A:29 X:02 Y:D5 P:24 SP:F9 PPU:202,190 CYC:21671\n\
FB68  60        RTS                             A:42 X:02 Y:D5 P:24 SP:F9 PPU:208,190 CYC:21673\n\
F099  23 45    *RLA ($45,X) @ 47 = 0647 = 29    A:42 X:02 Y:D5 P:24 SP:FB PPU:226,190 CYC:21679\n\
F09B  EA        NOP                             A:42 X:02 Y:D5 P:24 SP:FB PPU:250,190 CYC:21687\n\
F09C  EA        NOP                             A:42 X:02 Y:D5 P:24 SP:FB PPU:256,190 CYC:21689\n\
F09D  EA        NOP                             A:42 X:02 Y:D5 P:24 SP:FB PPU:262,190 CYC:21691\n\
F09E  EA        NOP                             A:42 X:02 Y:D5 P:24 SP:FB PPU:268,190 CYC:21693\n\
F09F  20 69 FB  JSR $FB69                       A:42 X:02 Y:D5 P:24 SP:FB PPU:274,190 CYC:21695\n\
FB69  70 0A     BVS $FB75                       A:42 X:02 Y:D5 P:24 SP:F9 PPU:292,190 CYC:21701\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:02 Y:D5 P:24 SP:F9 PPU:298,190 CYC:21703\n\
FB6D  30 06     BMI $FB75                       A:42 X:02 Y:D5 P:24 SP:F9 PPU:304,190 CYC:21705\n\
FB6F  B0 04     BCS $FB75                       A:42 X:02 Y:D5 P:24 SP:F9 PPU:310,190 CYC:21707\n\
FB71  C9 42     CMP #$42                        A:42 X:02 Y:D5 P:24 SP:F9 PPU:316,190 CYC:21709\n\
FB73  F0 02     BEQ $FB77                       A:42 X:02 Y:D5 P:27 SP:F9 PPU:322,190 CYC:21711\n\
FB77  60        RTS                             A:42 X:02 Y:D5 P:27 SP:F9 PPU:331,190 CYC:21714\n\
F0A2  AD 47 06  LDA $0647 = 52                  A:42 X:02 Y:D5 P:27 SP:FB PPU:  8,191 CYC:21720\n\
F0A5  C9 52     CMP #$52                        A:52 X:02 Y:D5 P:25 SP:FB PPU: 20,191 CYC:21724\n\
F0A7  F0 02     BEQ $F0AB                       A:52 X:02 Y:D5 P:27 SP:FB PPU: 26,191 CYC:21726\n\
F0AB  C8        INY                             A:52 X:02 Y:D5 P:27 SP:FB PPU: 35,191 CYC:21729\n\
F0AC  A9 37     LDA #$37                        A:52 X:02 Y:D6 P:A5 SP:FB PPU: 41,191 CYC:21731\n\
F0AE  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:D6 P:25 SP:FB PPU: 47,191 CYC:21733\n\
F0B1  20 68 FA  JSR $FA68                       A:37 X:02 Y:D6 P:25 SP:FB PPU: 59,191 CYC:21737\n\
FA68  24 01     BIT $01 = FF                    A:37 X:02 Y:D6 P:25 SP:F9 PPU: 77,191 CYC:21743\n\
FA6A  38        SEC                             A:37 X:02 Y:D6 P:E5 SP:F9 PPU: 86,191 CYC:21746\n\
FA6B  A9 75     LDA #$75                        A:37 X:02 Y:D6 P:E5 SP:F9 PPU: 92,191 CYC:21748\n\
FA6D  60        RTS                             A:75 X:02 Y:D6 P:65 SP:F9 PPU: 98,191 CYC:21750\n\
F0B4  23 45    *RLA ($45,X) @ 47 = 0647 = 37    A:75 X:02 Y:D6 P:65 SP:FB PPU:116,191 CYC:21756\n\
F0B6  EA        NOP                             A:65 X:02 Y:D6 P:64 SP:FB PPU:140,191 CYC:21764\n\
F0B7  EA        NOP                             A:65 X:02 Y:D6 P:64 SP:FB PPU:146,191 CYC:21766\n\
F0B8  EA        NOP                             A:65 X:02 Y:D6 P:64 SP:FB PPU:152,191 CYC:21768\n\
F0B9  EA        NOP                             A:65 X:02 Y:D6 P:64 SP:FB PPU:158,191 CYC:21770\n\
F0BA  20 6E FA  JSR $FA6E                       A:65 X:02 Y:D6 P:64 SP:FB PPU:164,191 CYC:21772\n\
FA6E  50 76     BVC $FAE6                       A:65 X:02 Y:D6 P:64 SP:F9 PPU:182,191 CYC:21778\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:02 Y:D6 P:64 SP:F9 PPU:188,191 CYC:21780\n\
FA72  30 72     BMI $FAE6                       A:65 X:02 Y:D6 P:64 SP:F9 PPU:194,191 CYC:21782\n\
FA74  B0 70     BCS $FAE6                       A:65 X:02 Y:D6 P:64 SP:F9 PPU:200,191 CYC:21784\n\
FA76  C9 65     CMP #$65                        A:65 X:02 Y:D6 P:64 SP:F9 PPU:206,191 CYC:21786\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:02 Y:D6 P:67 SP:F9 PPU:212,191 CYC:21788\n\
FA7A  60        RTS                             A:65 X:02 Y:D6 P:67 SP:F9 PPU:218,191 CYC:21790\n\
F0BD  AD 47 06  LDA $0647 = 6F                  A:65 X:02 Y:D6 P:67 SP:FB PPU:236,191 CYC:21796\n\
F0C0  C9 6F     CMP #$6F                        A:6F X:02 Y:D6 P:65 SP:FB PPU:248,191 CYC:21800\n\
F0C2  F0 02     BEQ $F0C6                       A:6F X:02 Y:D6 P:67 SP:FB PPU:254,191 CYC:21802\n\
F0C6  C8        INY                             A:6F X:02 Y:D6 P:67 SP:FB PPU:263,191 CYC:21805\n\
F0C7  A9 A5     LDA #$A5                        A:6F X:02 Y:D7 P:E5 SP:FB PPU:269,191 CYC:21807\n\
F0C9  85 47     STA $47 = 47                    A:A5 X:02 Y:D7 P:E5 SP:FB PPU:275,191 CYC:21809\n\
F0CB  20 53 FB  JSR $FB53                       A:A5 X:02 Y:D7 P:E5 SP:FB PPU:284,191 CYC:21812\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:02 Y:D7 P:E5 SP:F9 PPU:302,191 CYC:21818\n\
FB55  18        CLC                             A:A5 X:02 Y:D7 P:E5 SP:F9 PPU:311,191 CYC:21821\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:02 Y:D7 P:E4 SP:F9 PPU:317,191 CYC:21823\n\
FB58  60        RTS                             A:B3 X:02 Y:D7 P:E4 SP:F9 PPU:323,191 CYC:21825\n\
F0CE  27 47    *RLA $47 = A5                    A:B3 X:02 Y:D7 P:E4 SP:FB PPU:  0,192 CYC:21831\n\
F0D0  EA        NOP                             A:02 X:02 Y:D7 P:65 SP:FB PPU: 15,192 CYC:21836\n\
F0D1  EA        NOP                             A:02 X:02 Y:D7 P:65 SP:FB PPU: 21,192 CYC:21838\n\
F0D2  EA        NOP                             A:02 X:02 Y:D7 P:65 SP:FB PPU: 27,192 CYC:21840\n\
F0D3  EA        NOP                             A:02 X:02 Y:D7 P:65 SP:FB PPU: 33,192 CYC:21842\n\
F0D4  20 59 FB  JSR $FB59                       A:02 X:02 Y:D7 P:65 SP:FB PPU: 39,192 CYC:21844\n\
FB59  50 1A     BVC $FB75                       A:02 X:02 Y:D7 P:65 SP:F9 PPU: 57,192 CYC:21850\n\
FB5B  90 18     BCC $FB75                       A:02 X:02 Y:D7 P:65 SP:F9 PPU: 63,192 CYC:21852\n\
FB5D  30 16     BMI $FB75                       A:02 X:02 Y:D7 P:65 SP:F9 PPU: 69,192 CYC:21854\n\
FB5F  C9 02     CMP #$02                        A:02 X:02 Y:D7 P:65 SP:F9 PPU: 75,192 CYC:21856\n\
FB61  D0 12     BNE $FB75                       A:02 X:02 Y:D7 P:67 SP:F9 PPU: 81,192 CYC:21858\n\
FB63  60        RTS                             A:02 X:02 Y:D7 P:67 SP:F9 PPU: 87,192 CYC:21860\n\
F0D7  A5 47     LDA $47 = 4A                    A:02 X:02 Y:D7 P:67 SP:FB PPU:105,192 CYC:21866\n\
F0D9  C9 4A     CMP #$4A                        A:4A X:02 Y:D7 P:65 SP:FB PPU:114,192 CYC:21869\n\
F0DB  F0 02     BEQ $F0DF                       A:4A X:02 Y:D7 P:67 SP:FB PPU:120,192 CYC:21871\n\
F0DF  C8        INY                             A:4A X:02 Y:D7 P:67 SP:FB PPU:129,192 CYC:21874\n\
F0E0  A9 29     LDA #$29                        A:4A X:02 Y:D8 P:E5 SP:FB PPU:135,192 CYC:21876\n\
F0E2  85 47     STA $47 = 4A                    A:29 X:02 Y:D8 P:65 SP:FB PPU:141,192 CYC:21878\n\
F0E4  20 64 FB  JSR $FB64                       A:29 X:02 Y:D8 P:65 SP:FB PPU:150,192 CYC:21881\n\
FB64  B8        CLV                             A:29 X:02 Y:D8 P:65 SP:F9 PPU:168,192 CYC:21887\n\
FB65  18        CLC                             A:29 X:02 Y:D8 P:25 SP:F9 PPU:174,192 CYC:21889\n\
FB66  A9 42     LDA #$42                        A:29 X:02 Y:D8 P:24 SP:F9 PPU:180,192 CYC:21891\n\
FB68  60        RTS                             A:42 X:02 Y:D8 P:24 SP:F9 PPU:186,192 CYC:21893\n\
F0E7  27 47    *RLA $47 = 29                    A:42 X:02 Y:D8 P:24 SP:FB PPU:204,192 CYC:21899\n\
F0E9  EA        NOP                             A:42 X:02 Y:D8 P:24 SP:FB PPU:219,192 CYC:21904\n\
F0EA  EA        NOP                             A:42 X:02 Y:D8 P:24 SP:FB PPU:225,192 CYC:21906\n\
F0EB  EA        NOP                             A:42 X:02 Y:D8 P:24 SP:FB PPU:231,192 CYC:21908\n\
F0EC  EA        NOP                             A:42 X:02 Y:D8 P:24 SP:FB PPU:237,192 CYC:21910\n\
F0ED  20 69 FB  JSR $FB69                       A:42 X:02 Y:D8 P:24 SP:FB PPU:243,192 CYC:21912\n\
FB69  70 0A     BVS $FB75                       A:42 X:02 Y:D8 P:24 SP:F9 PPU:261,192 CYC:21918\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:02 Y:D8 P:24 SP:F9 PPU:267,192 CYC:21920\n\
FB6D  30 06     BMI $FB75                       A:42 X:02 Y:D8 P:24 SP:F9 PPU:273,192 CYC:21922\n\
FB6F  B0 04     BCS $FB75                       A:42 X:02 Y:D8 P:24 SP:F9 PPU:279,192 CYC:21924\n\
FB71  C9 42     CMP #$42                        A:42 X:02 Y:D8 P:24 SP:F9 PPU:285,192 CYC:21926\n\
FB73  F0 02     BEQ $FB77                       A:42 X:02 Y:D8 P:27 SP:F9 PPU:291,192 CYC:21928\n\
FB77  60        RTS                             A:42 X:02 Y:D8 P:27 SP:F9 PPU:300,192 CYC:21931\n\
F0F0  A5 47     LDA $47 = 52                    A:42 X:02 Y:D8 P:27 SP:FB PPU:318,192 CYC:21937\n\
F0F2  C9 52     CMP #$52                        A:52 X:02 Y:D8 P:25 SP:FB PPU:327,192 CYC:21940\n\
F0F4  F0 02     BEQ $F0F8                       A:52 X:02 Y:D8 P:27 SP:FB PPU:333,192 CYC:21942\n\
F0F8  C8        INY                             A:52 X:02 Y:D8 P:27 SP:FB PPU:  1,193 CYC:21945\n\
F0F9  A9 37     LDA #$37                        A:52 X:02 Y:D9 P:A5 SP:FB PPU:  7,193 CYC:21947\n\
F0FB  85 47     STA $47 = 52                    A:37 X:02 Y:D9 P:25 SP:FB PPU: 13,193 CYC:21949\n\
F0FD  20 68 FA  JSR $FA68                       A:37 X:02 Y:D9 P:25 SP:FB PPU: 22,193 CYC:21952\n\
FA68  24 01     BIT $01 = FF                    A:37 X:02 Y:D9 P:25 SP:F9 PPU: 40,193 CYC:21958\n\
FA6A  38        SEC                             A:37 X:02 Y:D9 P:E5 SP:F9 PPU: 49,193 CYC:21961\n\
FA6B  A9 75     LDA #$75                        A:37 X:02 Y:D9 P:E5 SP:F9 PPU: 55,193 CYC:21963\n\
FA6D  60        RTS                             A:75 X:02 Y:D9 P:65 SP:F9 PPU: 61,193 CYC:21965\n\
F100  27 47    *RLA $47 = 37                    A:75 X:02 Y:D9 P:65 SP:FB PPU: 79,193 CYC:21971\n\
F102  EA        NOP                             A:65 X:02 Y:D9 P:64 SP:FB PPU: 94,193 CYC:21976\n\
F103  EA        NOP                             A:65 X:02 Y:D9 P:64 SP:FB PPU:100,193 CYC:21978\n\
F104  EA        NOP                             A:65 X:02 Y:D9 P:64 SP:FB PPU:106,193 CYC:21980\n\
F105  EA        NOP                             A:65 X:02 Y:D9 P:64 SP:FB PPU:112,193 CYC:21982\n\
F106  20 6E FA  JSR $FA6E                       A:65 X:02 Y:D9 P:64 SP:FB PPU:118,193 CYC:21984\n\
FA6E  50 76     BVC $FAE6                       A:65 X:02 Y:D9 P:64 SP:F9 PPU:136,193 CYC:21990\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:02 Y:D9 P:64 SP:F9 PPU:142,193 CYC:21992\n\
FA72  30 72     BMI $FAE6                       A:65 X:02 Y:D9 P:64 SP:F9 PPU:148,193 CYC:21994\n\
FA74  B0 70     BCS $FAE6                       A:65 X:02 Y:D9 P:64 SP:F9 PPU:154,193 CYC:21996\n\
FA76  C9 65     CMP #$65                        A:65 X:02 Y:D9 P:64 SP:F9 PPU:160,193 CYC:21998\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:02 Y:D9 P:67 SP:F9 PPU:166,193 CYC:22000\n\
FA7A  60        RTS                             A:65 X:02 Y:D9 P:67 SP:F9 PPU:172,193 CYC:22002\n\
F109  A5 47     LDA $47 = 6F                    A:65 X:02 Y:D9 P:67 SP:FB PPU:190,193 CYC:22008\n\
F10B  C9 6F     CMP #$6F                        A:6F X:02 Y:D9 P:65 SP:FB PPU:199,193 CYC:22011\n\
F10D  F0 02     BEQ $F111                       A:6F X:02 Y:D9 P:67 SP:FB PPU:205,193 CYC:22013\n\
F111  C8        INY                             A:6F X:02 Y:D9 P:67 SP:FB PPU:214,193 CYC:22016\n\
F112  A9 A5     LDA #$A5                        A:6F X:02 Y:DA P:E5 SP:FB PPU:220,193 CYC:22018\n\
F114  8D 47 06  STA $0647 = 6F                  A:A5 X:02 Y:DA P:E5 SP:FB PPU:226,193 CYC:22020\n\
F117  20 53 FB  JSR $FB53                       A:A5 X:02 Y:DA P:E5 SP:FB PPU:238,193 CYC:22024\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:02 Y:DA P:E5 SP:F9 PPU:256,193 CYC:22030\n\
FB55  18        CLC                             A:A5 X:02 Y:DA P:E5 SP:F9 PPU:265,193 CYC:22033\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:02 Y:DA P:E4 SP:F9 PPU:271,193 CYC:22035\n\
FB58  60        RTS                             A:B3 X:02 Y:DA P:E4 SP:F9 PPU:277,193 CYC:22037\n\
F11A  2F 47 06 *RLA $0647 = A5                  A:B3 X:02 Y:DA P:E4 SP:FB PPU:295,193 CYC:22043\n\
F11D  EA        NOP                             A:02 X:02 Y:DA P:65 SP:FB PPU:313,193 CYC:22049\n\
F11E  EA        NOP                             A:02 X:02 Y:DA P:65 SP:FB PPU:319,193 CYC:22051\n\
F11F  EA        NOP                             A:02 X:02 Y:DA P:65 SP:FB PPU:325,193 CYC:22053\n\
F120  EA        NOP                             A:02 X:02 Y:DA P:65 SP:FB PPU:331,193 CYC:22055\n\
F121  20 59 FB  JSR $FB59                       A:02 X:02 Y:DA P:65 SP:FB PPU:337,193 CYC:22057\n\
FB59  50 1A     BVC $FB75                       A:02 X:02 Y:DA P:65 SP:F9 PPU: 14,194 CYC:22063\n\
FB5B  90 18     BCC $FB75                       A:02 X:02 Y:DA P:65 SP:F9 PPU: 20,194 CYC:22065\n\
FB5D  30 16     BMI $FB75                       A:02 X:02 Y:DA P:65 SP:F9 PPU: 26,194 CYC:22067\n\
FB5F  C9 02     CMP #$02                        A:02 X:02 Y:DA P:65 SP:F9 PPU: 32,194 CYC:22069\n\
FB61  D0 12     BNE $FB75                       A:02 X:02 Y:DA P:67 SP:F9 PPU: 38,194 CYC:22071\n\
FB63  60        RTS                             A:02 X:02 Y:DA P:67 SP:F9 PPU: 44,194 CYC:22073\n\
F124  AD 47 06  LDA $0647 = 4A                  A:02 X:02 Y:DA P:67 SP:FB PPU: 62,194 CYC:22079\n\
F127  C9 4A     CMP #$4A                        A:4A X:02 Y:DA P:65 SP:FB PPU: 74,194 CYC:22083\n\
F129  F0 02     BEQ $F12D                       A:4A X:02 Y:DA P:67 SP:FB PPU: 80,194 CYC:22085\n\
F12D  C8        INY                             A:4A X:02 Y:DA P:67 SP:FB PPU: 89,194 CYC:22088\n\
F12E  A9 29     LDA #$29                        A:4A X:02 Y:DB P:E5 SP:FB PPU: 95,194 CYC:22090\n\
F130  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:DB P:65 SP:FB PPU:101,194 CYC:22092\n\
F133  20 64 FB  JSR $FB64                       A:29 X:02 Y:DB P:65 SP:FB PPU:113,194 CYC:22096\n\
FB64  B8        CLV                             A:29 X:02 Y:DB P:65 SP:F9 PPU:131,194 CYC:22102\n\
FB65  18        CLC                             A:29 X:02 Y:DB P:25 SP:F9 PPU:137,194 CYC:22104\n\
FB66  A9 42     LDA #$42                        A:29 X:02 Y:DB P:24 SP:F9 PPU:143,194 CYC:22106\n\
FB68  60        RTS                             A:42 X:02 Y:DB P:24 SP:F9 PPU:149,194 CYC:22108\n\
F136  2F 47 06 *RLA $0647 = 29                  A:42 X:02 Y:DB P:24 SP:FB PPU:167,194 CYC:22114\n\
F139  EA        NOP                             A:42 X:02 Y:DB P:24 SP:FB PPU:185,194 CYC:22120\n\
F13A  EA        NOP                             A:42 X:02 Y:DB P:24 SP:FB PPU:191,194 CYC:22122\n\
F13B  EA        NOP                             A:42 X:02 Y:DB P:24 SP:FB PPU:197,194 CYC:22124\n\
F13C  EA        NOP                             A:42 X:02 Y:DB P:24 SP:FB PPU:203,194 CYC:22126\n\
F13D  20 69 FB  JSR $FB69                       A:42 X:02 Y:DB P:24 SP:FB PPU:209,194 CYC:22128\n\
FB69  70 0A     BVS $FB75                       A:42 X:02 Y:DB P:24 SP:F9 PPU:227,194 CYC:22134\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:02 Y:DB P:24 SP:F9 PPU:233,194 CYC:22136\n\
FB6D  30 06     BMI $FB75                       A:42 X:02 Y:DB P:24 SP:F9 PPU:239,194 CYC:22138\n\
FB6F  B0 04     BCS $FB75                       A:42 X:02 Y:DB P:24 SP:F9 PPU:245,194 CYC:22140\n\
FB71  C9 42     CMP #$42                        A:42 X:02 Y:DB P:24 SP:F9 PPU:251,194 CYC:22142\n\
FB73  F0 02     BEQ $FB77                       A:42 X:02 Y:DB P:27 SP:F9 PPU:257,194 CYC:22144\n\
FB77  60        RTS                             A:42 X:02 Y:DB P:27 SP:F9 PPU:266,194 CYC:22147\n\
F140  AD 47 06  LDA $0647 = 52                  A:42 X:02 Y:DB P:27 SP:FB PPU:284,194 CYC:22153\n\
F143  C9 52     CMP #$52                        A:52 X:02 Y:DB P:25 SP:FB PPU:296,194 CYC:22157\n\
F145  F0 02     BEQ $F149                       A:52 X:02 Y:DB P:27 SP:FB PPU:302,194 CYC:22159\n\
F149  C8        INY                             A:52 X:02 Y:DB P:27 SP:FB PPU:311,194 CYC:22162\n\
F14A  A9 37     LDA #$37                        A:52 X:02 Y:DC P:A5 SP:FB PPU:317,194 CYC:22164\n\
F14C  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:DC P:25 SP:FB PPU:323,194 CYC:22166\n\
F14F  20 68 FA  JSR $FA68                       A:37 X:02 Y:DC P:25 SP:FB PPU:335,194 CYC:22170\n\
FA68  24 01     BIT $01 = FF                    A:37 X:02 Y:DC P:25 SP:F9 PPU: 12,195 CYC:22176\n\
FA6A  38        SEC                             A:37 X:02 Y:DC P:E5 SP:F9 PPU: 21,195 CYC:22179\n\
FA6B  A9 75     LDA #$75                        A:37 X:02 Y:DC P:E5 SP:F9 PPU: 27,195 CYC:22181\n\
FA6D  60        RTS                             A:75 X:02 Y:DC P:65 SP:F9 PPU: 33,195 CYC:22183\n\
F152  2F 47 06 *RLA $0647 = 37                  A:75 X:02 Y:DC P:65 SP:FB PPU: 51,195 CYC:22189\n\
F155  EA        NOP                             A:65 X:02 Y:DC P:64 SP:FB PPU: 69,195 CYC:22195\n\
F156  EA        NOP                             A:65 X:02 Y:DC P:64 SP:FB PPU: 75,195 CYC:22197\n\
F157  EA        NOP                             A:65 X:02 Y:DC P:64 SP:FB PPU: 81,195 CYC:22199\n\
F158  EA        NOP                             A:65 X:02 Y:DC P:64 SP:FB PPU: 87,195 CYC:22201\n\
F159  20 6E FA  JSR $FA6E                       A:65 X:02 Y:DC P:64 SP:FB PPU: 93,195 CYC:22203\n\
FA6E  50 76     BVC $FAE6                       A:65 X:02 Y:DC P:64 SP:F9 PPU:111,195 CYC:22209\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:02 Y:DC P:64 SP:F9 PPU:117,195 CYC:22211\n\
FA72  30 72     BMI $FAE6                       A:65 X:02 Y:DC P:64 SP:F9 PPU:123,195 CYC:22213\n\
FA74  B0 70     BCS $FAE6                       A:65 X:02 Y:DC P:64 SP:F9 PPU:129,195 CYC:22215\n\
FA76  C9 65     CMP #$65                        A:65 X:02 Y:DC P:64 SP:F9 PPU:135,195 CYC:22217\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:02 Y:DC P:67 SP:F9 PPU:141,195 CYC:22219\n\
FA7A  60        RTS                             A:65 X:02 Y:DC P:67 SP:F9 PPU:147,195 CYC:22221\n\
F15C  AD 47 06  LDA $0647 = 6F                  A:65 X:02 Y:DC P:67 SP:FB PPU:165,195 CYC:22227\n\
F15F  C9 6F     CMP #$6F                        A:6F X:02 Y:DC P:65 SP:FB PPU:177,195 CYC:22231\n\
F161  F0 02     BEQ $F165                       A:6F X:02 Y:DC P:67 SP:FB PPU:183,195 CYC:22233\n\
F165  A9 A5     LDA #$A5                        A:6F X:02 Y:DC P:67 SP:FB PPU:192,195 CYC:22236\n\
F167  8D 47 06  STA $0647 = 6F                  A:A5 X:02 Y:DC P:E5 SP:FB PPU:198,195 CYC:22238\n\
F16A  A9 48     LDA #$48                        A:A5 X:02 Y:DC P:E5 SP:FB PPU:210,195 CYC:22242\n\
F16C  85 45     STA $45 = 48                    A:48 X:02 Y:DC P:65 SP:FB PPU:216,195 CYC:22244\n\
F16E  A9 05     LDA #$05                        A:48 X:02 Y:DC P:65 SP:FB PPU:225,195 CYC:22247\n\
F170  85 46     STA $46 = 05                    A:05 X:02 Y:DC P:65 SP:FB PPU:231,195 CYC:22249\n\
F172  A0 FF     LDY #$FF                        A:05 X:02 Y:DC P:65 SP:FB PPU:240,195 CYC:22252\n\
F174  20 53 FB  JSR $FB53                       A:05 X:02 Y:FF P:E5 SP:FB PPU:246,195 CYC:22254\n\
FB53  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:E5 SP:F9 PPU:264,195 CYC:22260\n\
FB55  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU:273,195 CYC:22263\n\
FB56  A9 B3     LDA #$B3                        A:05 X:02 Y:FF P:E4 SP:F9 PPU:279,195 CYC:22265\n\
FB58  60        RTS                             A:B3 X:02 Y:FF P:E4 SP:F9 PPU:285,195 CYC:22267\n\
F177  33 45    *RLA ($45),Y = 0548 @ 0647 = A5  A:B3 X:02 Y:FF P:E4 SP:FB PPU:303,195 CYC:22273\n\
F179  EA        NOP                             A:02 X:02 Y:FF P:65 SP:FB PPU:327,195 CYC:22281\n\
F17A  EA        NOP                             A:02 X:02 Y:FF P:65 SP:FB PPU:333,195 CYC:22283\n\
F17B  08        PHP                             A:02 X:02 Y:FF P:65 SP:FB PPU:339,195 CYC:22285\n\
F17C  48        PHA                             A:02 X:02 Y:FF P:65 SP:FA PPU:  7,196 CYC:22288\n\
F17D  A0 DD     LDY #$DD                        A:02 X:02 Y:FF P:65 SP:F9 PPU: 16,196 CYC:22291\n\
F17F  68        PLA                             A:02 X:02 Y:DD P:E5 SP:F9 PPU: 22,196 CYC:22293\n\
F180  28        PLP                             A:02 X:02 Y:DD P:65 SP:FA PPU: 34,196 CYC:22297\n\
F181  20 59 FB  JSR $FB59                       A:02 X:02 Y:DD P:65 SP:FB PPU: 46,196 CYC:22301\n\
FB59  50 1A     BVC $FB75                       A:02 X:02 Y:DD P:65 SP:F9 PPU: 64,196 CYC:22307\n\
FB5B  90 18     BCC $FB75                       A:02 X:02 Y:DD P:65 SP:F9 PPU: 70,196 CYC:22309\n\
FB5D  30 16     BMI $FB75                       A:02 X:02 Y:DD P:65 SP:F9 PPU: 76,196 CYC:22311\n\
FB5F  C9 02     CMP #$02                        A:02 X:02 Y:DD P:65 SP:F9 PPU: 82,196 CYC:22313\n\
FB61  D0 12     BNE $FB75                       A:02 X:02 Y:DD P:67 SP:F9 PPU: 88,196 CYC:22315\n\
FB63  60        RTS                             A:02 X:02 Y:DD P:67 SP:F9 PPU: 94,196 CYC:22317\n\
F184  AD 47 06  LDA $0647 = 4A                  A:02 X:02 Y:DD P:67 SP:FB PPU:112,196 CYC:22323\n\
F187  C9 4A     CMP #$4A                        A:4A X:02 Y:DD P:65 SP:FB PPU:124,196 CYC:22327\n\
F189  F0 02     BEQ $F18D                       A:4A X:02 Y:DD P:67 SP:FB PPU:130,196 CYC:22329\n\
F18D  A0 FF     LDY #$FF                        A:4A X:02 Y:DD P:67 SP:FB PPU:139,196 CYC:22332\n\
F18F  A9 29     LDA #$29                        A:4A X:02 Y:FF P:E5 SP:FB PPU:145,196 CYC:22334\n\
F191  8D 47 06  STA $0647 = 4A                  A:29 X:02 Y:FF P:65 SP:FB PPU:151,196 CYC:22336\n\
F194  20 64 FB  JSR $FB64                       A:29 X:02 Y:FF P:65 SP:FB PPU:163,196 CYC:22340\n\
FB64  B8        CLV                             A:29 X:02 Y:FF P:65 SP:F9 PPU:181,196 CYC:22346\n\
FB65  18        CLC                             A:29 X:02 Y:FF P:25 SP:F9 PPU:187,196 CYC:22348\n\
FB66  A9 42     LDA #$42                        A:29 X:02 Y:FF P:24 SP:F9 PPU:193,196 CYC:22350\n\
FB68  60        RTS                             A:42 X:02 Y:FF P:24 SP:F9 PPU:199,196 CYC:22352\n\
F197  33 45    *RLA ($45),Y = 0548 @ 0647 = 29  A:42 X:02 Y:FF P:24 SP:FB PPU:217,196 CYC:22358\n\
F199  EA        NOP                             A:42 X:02 Y:FF P:24 SP:FB PPU:241,196 CYC:22366\n\
F19A  EA        NOP                             A:42 X:02 Y:FF P:24 SP:FB PPU:247,196 CYC:22368\n\
F19B  08        PHP                             A:42 X:02 Y:FF P:24 SP:FB PPU:253,196 CYC:22370\n\
F19C  48        PHA                             A:42 X:02 Y:FF P:24 SP:FA PPU:262,196 CYC:22373\n\
F19D  A0 DE     LDY #$DE                        A:42 X:02 Y:FF P:24 SP:F9 PPU:271,196 CYC:22376\n\
F19F  68        PLA                             A:42 X:02 Y:DE P:A4 SP:F9 PPU:277,196 CYC:22378\n\
F1A0  28        PLP                             A:42 X:02 Y:DE P:24 SP:FA PPU:289,196 CYC:22382\n\
F1A1  20 69 FB  JSR $FB69                       A:42 X:02 Y:DE P:24 SP:FB PPU:301,196 CYC:22386\n\
FB69  70 0A     BVS $FB75                       A:42 X:02 Y:DE P:24 SP:F9 PPU:319,196 CYC:22392\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:02 Y:DE P:24 SP:F9 PPU:325,196 CYC:22394\n\
FB6D  30 06     BMI $FB75                       A:42 X:02 Y:DE P:24 SP:F9 PPU:331,196 CYC:22396\n\
FB6F  B0 04     BCS $FB75                       A:42 X:02 Y:DE P:24 SP:F9 PPU:337,196 CYC:22398\n\
FB71  C9 42     CMP #$42                        A:42 X:02 Y:DE P:24 SP:F9 PPU:  2,197 CYC:22400\n\
FB73  F0 02     BEQ $FB77                       A:42 X:02 Y:DE P:27 SP:F9 PPU:  8,197 CYC:22402\n\
FB77  60        RTS                             A:42 X:02 Y:DE P:27 SP:F9 PPU: 17,197 CYC:22405\n\
F1A4  AD 47 06  LDA $0647 = 52                  A:42 X:02 Y:DE P:27 SP:FB PPU: 35,197 CYC:22411\n\
F1A7  C9 52     CMP #$52                        A:52 X:02 Y:DE P:25 SP:FB PPU: 47,197 CYC:22415\n\
F1A9  F0 02     BEQ $F1AD                       A:52 X:02 Y:DE P:27 SP:FB PPU: 53,197 CYC:22417\n\
F1AD  A0 FF     LDY #$FF                        A:52 X:02 Y:DE P:27 SP:FB PPU: 62,197 CYC:22420\n\
F1AF  A9 37     LDA #$37                        A:52 X:02 Y:FF P:A5 SP:FB PPU: 68,197 CYC:22422\n\
F1B1  8D 47 06  STA $0647 = 52                  A:37 X:02 Y:FF P:25 SP:FB PPU: 74,197 CYC:22424\n\
F1B4  20 68 FA  JSR $FA68                       A:37 X:02 Y:FF P:25 SP:FB PPU: 86,197 CYC:22428\n\
FA68  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU:104,197 CYC:22434\n\
FA6A  38        SEC                             A:37 X:02 Y:FF P:E5 SP:F9 PPU:113,197 CYC:22437\n\
FA6B  A9 75     LDA #$75                        A:37 X:02 Y:FF P:E5 SP:F9 PPU:119,197 CYC:22439\n\
FA6D  60        RTS                             A:75 X:02 Y:FF P:65 SP:F9 PPU:125,197 CYC:22441\n\
F1B7  33 45    *RLA ($45),Y = 0548 @ 0647 = 37  A:75 X:02 Y:FF P:65 SP:FB PPU:143,197 CYC:22447\n\
F1B9  EA        NOP                             A:65 X:02 Y:FF P:64 SP:FB PPU:167,197 CYC:22455\n\
F1BA  EA        NOP                             A:65 X:02 Y:FF P:64 SP:FB PPU:173,197 CYC:22457\n\
F1BB  08        PHP                             A:65 X:02 Y:FF P:64 SP:FB PPU:179,197 CYC:22459\n\
F1BC  48        PHA                             A:65 X:02 Y:FF P:64 SP:FA PPU:188,197 CYC:22462\n\
F1BD  A0 DF     LDY #$DF                        A:65 X:02 Y:FF P:64 SP:F9 PPU:197,197 CYC:22465\n\
F1BF  68        PLA                             A:65 X:02 Y:DF P:E4 SP:F9 PPU:203,197 CYC:22467\n\
F1C0  28        PLP                             A:65 X:02 Y:DF P:64 SP:FA PPU:215,197 CYC:22471\n\
F1C1  20 6E FA  JSR $FA6E                       A:65 X:02 Y:DF P:64 SP:FB PPU:227,197 CYC:22475\n\
FA6E  50 76     BVC $FAE6                       A:65 X:02 Y:DF P:64 SP:F9 PPU:245,197 CYC:22481\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:02 Y:DF P:64 SP:F9 PPU:251,197 CYC:22483\n\
FA72  30 72     BMI $FAE6                       A:65 X:02 Y:DF P:64 SP:F9 PPU:257,197 CYC:22485\n\
FA74  B0 70     BCS $FAE6                       A:65 X:02 Y:DF P:64 SP:F9 PPU:263,197 CYC:22487\n\
FA76  C9 65     CMP #$65                        A:65 X:02 Y:DF P:64 SP:F9 PPU:269,197 CYC:22489\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:02 Y:DF P:67 SP:F9 PPU:275,197 CYC:22491\n\
FA7A  60        RTS                             A:65 X:02 Y:DF P:67 SP:F9 PPU:281,197 CYC:22493\n\
F1C4  AD 47 06  LDA $0647 = 6F                  A:65 X:02 Y:DF P:67 SP:FB PPU:299,197 CYC:22499\n\
F1C7  C9 6F     CMP #$6F                        A:6F X:02 Y:DF P:65 SP:FB PPU:311,197 CYC:22503\n\
F1C9  F0 02     BEQ $F1CD                       A:6F X:02 Y:DF P:67 SP:FB PPU:317,197 CYC:22505\n\
F1CD  A0 E0     LDY #$E0                        A:6F X:02 Y:DF P:67 SP:FB PPU:326,197 CYC:22508\n\
F1CF  A2 FF     LDX #$FF                        A:6F X:02 Y:E0 P:E5 SP:FB PPU:332,197 CYC:22510\n\
F1D1  A9 A5     LDA #$A5                        A:6F X:FF Y:E0 P:E5 SP:FB PPU:338,197 CYC:22512\n\
F1D3  85 47     STA $47 = 6F                    A:A5 X:FF Y:E0 P:E5 SP:FB PPU:  3,198 CYC:22514\n\
F1D5  20 53 FB  JSR $FB53                       A:A5 X:FF Y:E0 P:E5 SP:FB PPU: 12,198 CYC:22517\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:FF Y:E0 P:E5 SP:F9 PPU: 30,198 CYC:22523\n\
FB55  18        CLC                             A:A5 X:FF Y:E0 P:E5 SP:F9 PPU: 39,198 CYC:22526\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:FF Y:E0 P:E4 SP:F9 PPU: 45,198 CYC:22528\n\
FB58  60        RTS                             A:B3 X:FF Y:E0 P:E4 SP:F9 PPU: 51,198 CYC:22530\n\
F1D8  37 48    *RLA $48,X @ 47 = A5             A:B3 X:FF Y:E0 P:E4 SP:FB PPU: 69,198 CYC:22536\n\
F1DA  EA        NOP                             A:02 X:FF Y:E0 P:65 SP:FB PPU: 87,198 CYC:22542\n\
F1DB  EA        NOP                             A:02 X:FF Y:E0 P:65 SP:FB PPU: 93,198 CYC:22544\n\
F1DC  EA        NOP                             A:02 X:FF Y:E0 P:65 SP:FB PPU: 99,198 CYC:22546\n\
F1DD  EA        NOP                             A:02 X:FF Y:E0 P:65 SP:FB PPU:105,198 CYC:22548\n\
F1DE  20 59 FB  JSR $FB59                       A:02 X:FF Y:E0 P:65 SP:FB PPU:111,198 CYC:22550\n\
FB59  50 1A     BVC $FB75                       A:02 X:FF Y:E0 P:65 SP:F9 PPU:129,198 CYC:22556\n\
FB5B  90 18     BCC $FB75                       A:02 X:FF Y:E0 P:65 SP:F9 PPU:135,198 CYC:22558\n\
FB5D  30 16     BMI $FB75                       A:02 X:FF Y:E0 P:65 SP:F9 PPU:141,198 CYC:22560\n\
FB5F  C9 02     CMP #$02                        A:02 X:FF Y:E0 P:65 SP:F9 PPU:147,198 CYC:22562\n\
FB61  D0 12     BNE $FB75                       A:02 X:FF Y:E0 P:67 SP:F9 PPU:153,198 CYC:22564\n\
FB63  60        RTS                             A:02 X:FF Y:E0 P:67 SP:F9 PPU:159,198 CYC:22566\n\
F1E1  A5 47     LDA $47 = 4A                    A:02 X:FF Y:E0 P:67 SP:FB PPU:177,198 CYC:22572\n\
F1E3  C9 4A     CMP #$4A                        A:4A X:FF Y:E0 P:65 SP:FB PPU:186,198 CYC:22575\n\
F1E5  F0 02     BEQ $F1E9                       A:4A X:FF Y:E0 P:67 SP:FB PPU:192,198 CYC:22577\n\
F1E9  C8        INY                             A:4A X:FF Y:E0 P:67 SP:FB PPU:201,198 CYC:22580\n\
F1EA  A9 29     LDA #$29                        A:4A X:FF Y:E1 P:E5 SP:FB PPU:207,198 CYC:22582\n\
F1EC  85 47     STA $47 = 4A                    A:29 X:FF Y:E1 P:65 SP:FB PPU:213,198 CYC:22584\n\
F1EE  20 64 FB  JSR $FB64                       A:29 X:FF Y:E1 P:65 SP:FB PPU:222,198 CYC:22587\n\
FB64  B8        CLV                             A:29 X:FF Y:E1 P:65 SP:F9 PPU:240,198 CYC:22593\n\
FB65  18        CLC                             A:29 X:FF Y:E1 P:25 SP:F9 PPU:246,198 CYC:22595\n\
FB66  A9 42     LDA #$42                        A:29 X:FF Y:E1 P:24 SP:F9 PPU:252,198 CYC:22597\n\
FB68  60        RTS                             A:42 X:FF Y:E1 P:24 SP:F9 PPU:258,198 CYC:22599\n\
F1F1  37 48    *RLA $48,X @ 47 = 29             A:42 X:FF Y:E1 P:24 SP:FB PPU:276,198 CYC:22605\n\
F1F3  EA        NOP                             A:42 X:FF Y:E1 P:24 SP:FB PPU:294,198 CYC:22611\n\
F1F4  EA        NOP                             A:42 X:FF Y:E1 P:24 SP:FB PPU:300,198 CYC:22613\n\
F1F5  EA        NOP                             A:42 X:FF Y:E1 P:24 SP:FB PPU:306,198 CYC:22615\n\
F1F6  EA        NOP                             A:42 X:FF Y:E1 P:24 SP:FB PPU:312,198 CYC:22617\n\
F1F7  20 69 FB  JSR $FB69                       A:42 X:FF Y:E1 P:24 SP:FB PPU:318,198 CYC:22619\n\
FB69  70 0A     BVS $FB75                       A:42 X:FF Y:E1 P:24 SP:F9 PPU:336,198 CYC:22625\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:FF Y:E1 P:24 SP:F9 PPU:  1,199 CYC:22627\n\
FB6D  30 06     BMI $FB75                       A:42 X:FF Y:E1 P:24 SP:F9 PPU:  7,199 CYC:22629\n\
FB6F  B0 04     BCS $FB75                       A:42 X:FF Y:E1 P:24 SP:F9 PPU: 13,199 CYC:22631\n\
FB71  C9 42     CMP #$42                        A:42 X:FF Y:E1 P:24 SP:F9 PPU: 19,199 CYC:22633\n\
FB73  F0 02     BEQ $FB77                       A:42 X:FF Y:E1 P:27 SP:F9 PPU: 25,199 CYC:22635\n\
FB77  60        RTS                             A:42 X:FF Y:E1 P:27 SP:F9 PPU: 34,199 CYC:22638\n\
F1FA  A5 47     LDA $47 = 52                    A:42 X:FF Y:E1 P:27 SP:FB PPU: 52,199 CYC:22644\n\
F1FC  C9 52     CMP #$52                        A:52 X:FF Y:E1 P:25 SP:FB PPU: 61,199 CYC:22647\n\
F1FE  F0 02     BEQ $F202                       A:52 X:FF Y:E1 P:27 SP:FB PPU: 67,199 CYC:22649\n\
F202  C8        INY                             A:52 X:FF Y:E1 P:27 SP:FB PPU: 76,199 CYC:22652\n\
F203  A9 37     LDA #$37                        A:52 X:FF Y:E2 P:A5 SP:FB PPU: 82,199 CYC:22654\n\
F205  85 47     STA $47 = 52                    A:37 X:FF Y:E2 P:25 SP:FB PPU: 88,199 CYC:22656\n\
F207  20 68 FA  JSR $FA68                       A:37 X:FF Y:E2 P:25 SP:FB PPU: 97,199 CYC:22659\n\
FA68  24 01     BIT $01 = FF                    A:37 X:FF Y:E2 P:25 SP:F9 PPU:115,199 CYC:22665\n\
FA6A  38        SEC                             A:37 X:FF Y:E2 P:E5 SP:F9 PPU:124,199 CYC:22668\n\
FA6B  A9 75     LDA #$75                        A:37 X:FF Y:E2 P:E5 SP:F9 PPU:130,199 CYC:22670\n\
FA6D  60        RTS                             A:75 X:FF Y:E2 P:65 SP:F9 PPU:136,199 CYC:22672\n\
F20A  37 48    *RLA $48,X @ 47 = 37             A:75 X:FF Y:E2 P:65 SP:FB PPU:154,199 CYC:22678\n\
F20C  EA        NOP                             A:65 X:FF Y:E2 P:64 SP:FB PPU:172,199 CYC:22684\n\
F20D  EA        NOP                             A:65 X:FF Y:E2 P:64 SP:FB PPU:178,199 CYC:22686\n\
F20E  EA        NOP                             A:65 X:FF Y:E2 P:64 SP:FB PPU:184,199 CYC:22688\n\
F20F  EA        NOP                             A:65 X:FF Y:E2 P:64 SP:FB PPU:190,199 CYC:22690\n\
F210  20 6E FA  JSR $FA6E                       A:65 X:FF Y:E2 P:64 SP:FB PPU:196,199 CYC:22692\n\
FA6E  50 76     BVC $FAE6                       A:65 X:FF Y:E2 P:64 SP:F9 PPU:214,199 CYC:22698\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:FF Y:E2 P:64 SP:F9 PPU:220,199 CYC:22700\n\
FA72  30 72     BMI $FAE6                       A:65 X:FF Y:E2 P:64 SP:F9 PPU:226,199 CYC:22702\n\
FA74  B0 70     BCS $FAE6                       A:65 X:FF Y:E2 P:64 SP:F9 PPU:232,199 CYC:22704\n\
FA76  C9 65     CMP #$65                        A:65 X:FF Y:E2 P:64 SP:F9 PPU:238,199 CYC:22706\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:FF Y:E2 P:67 SP:F9 PPU:244,199 CYC:22708\n\
FA7A  60        RTS                             A:65 X:FF Y:E2 P:67 SP:F9 PPU:250,199 CYC:22710\n\
F213  A5 47     LDA $47 = 6F                    A:65 X:FF Y:E2 P:67 SP:FB PPU:268,199 CYC:22716\n\
F215  C9 6F     CMP #$6F                        A:6F X:FF Y:E2 P:65 SP:FB PPU:277,199 CYC:22719\n\
F217  F0 02     BEQ $F21B                       A:6F X:FF Y:E2 P:67 SP:FB PPU:283,199 CYC:22721\n\
F21B  A9 A5     LDA #$A5                        A:6F X:FF Y:E2 P:67 SP:FB PPU:292,199 CYC:22724\n\
F21D  8D 47 06  STA $0647 = 6F                  A:A5 X:FF Y:E2 P:E5 SP:FB PPU:298,199 CYC:22726\n\
F220  A0 FF     LDY #$FF                        A:A5 X:FF Y:E2 P:E5 SP:FB PPU:310,199 CYC:22730\n\
F222  20 53 FB  JSR $FB53                       A:A5 X:FF Y:FF P:E5 SP:FB PPU:316,199 CYC:22732\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:FF Y:FF P:E5 SP:F9 PPU:334,199 CYC:22738\n\
FB55  18        CLC                             A:A5 X:FF Y:FF P:E5 SP:F9 PPU:  2,200 CYC:22741\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:FF Y:FF P:E4 SP:F9 PPU:  8,200 CYC:22743\n\
FB58  60        RTS                             A:B3 X:FF Y:FF P:E4 SP:F9 PPU: 14,200 CYC:22745\n\
F225  3B 48 05 *RLA $0548,Y @ 0647 = A5         A:B3 X:FF Y:FF P:E4 SP:FB PPU: 32,200 CYC:22751\n\
F228  EA        NOP                             A:02 X:FF Y:FF P:65 SP:FB PPU: 53,200 CYC:22758\n\
F229  EA        NOP                             A:02 X:FF Y:FF P:65 SP:FB PPU: 59,200 CYC:22760\n\
F22A  08        PHP                             A:02 X:FF Y:FF P:65 SP:FB PPU: 65,200 CYC:22762\n\
F22B  48        PHA                             A:02 X:FF Y:FF P:65 SP:FA PPU: 74,200 CYC:22765\n\
F22C  A0 E3     LDY #$E3                        A:02 X:FF Y:FF P:65 SP:F9 PPU: 83,200 CYC:22768\n\
F22E  68        PLA                             A:02 X:FF Y:E3 P:E5 SP:F9 PPU: 89,200 CYC:22770\n\
F22F  28        PLP                             A:02 X:FF Y:E3 P:65 SP:FA PPU:101,200 CYC:22774\n\
F230  20 59 FB  JSR $FB59                       A:02 X:FF Y:E3 P:65 SP:FB PPU:113,200 CYC:22778\n\
FB59  50 1A     BVC $FB75                       A:02 X:FF Y:E3 P:65 SP:F9 PPU:131,200 CYC:22784\n\
FB5B  90 18     BCC $FB75                       A:02 X:FF Y:E3 P:65 SP:F9 PPU:137,200 CYC:22786\n\
FB5D  30 16     BMI $FB75                       A:02 X:FF Y:E3 P:65 SP:F9 PPU:143,200 CYC:22788\n\
FB5F  C9 02     CMP #$02                        A:02 X:FF Y:E3 P:65 SP:F9 PPU:149,200 CYC:22790\n\
FB61  D0 12     BNE $FB75                       A:02 X:FF Y:E3 P:67 SP:F9 PPU:155,200 CYC:22792\n\
FB63  60        RTS                             A:02 X:FF Y:E3 P:67 SP:F9 PPU:161,200 CYC:22794\n\
F233  AD 47 06  LDA $0647 = 4A                  A:02 X:FF Y:E3 P:67 SP:FB PPU:179,200 CYC:22800\n\
F236  C9 4A     CMP #$4A                        A:4A X:FF Y:E3 P:65 SP:FB PPU:191,200 CYC:22804\n\
F238  F0 02     BEQ $F23C                       A:4A X:FF Y:E3 P:67 SP:FB PPU:197,200 CYC:22806\n\
F23C  A0 FF     LDY #$FF                        A:4A X:FF Y:E3 P:67 SP:FB PPU:206,200 CYC:22809\n\
F23E  A9 29     LDA #$29                        A:4A X:FF Y:FF P:E5 SP:FB PPU:212,200 CYC:22811\n\
F240  8D 47 06  STA $0647 = 4A                  A:29 X:FF Y:FF P:65 SP:FB PPU:218,200 CYC:22813\n\
F243  20 64 FB  JSR $FB64                       A:29 X:FF Y:FF P:65 SP:FB PPU:230,200 CYC:22817\n\
FB64  B8        CLV                             A:29 X:FF Y:FF P:65 SP:F9 PPU:248,200 CYC:22823\n\
FB65  18        CLC                             A:29 X:FF Y:FF P:25 SP:F9 PPU:254,200 CYC:22825\n\
FB66  A9 42     LDA #$42                        A:29 X:FF Y:FF P:24 SP:F9 PPU:260,200 CYC:22827\n\
FB68  60        RTS                             A:42 X:FF Y:FF P:24 SP:F9 PPU:266,200 CYC:22829\n\
F246  3B 48 05 *RLA $0548,Y @ 0647 = 29         A:42 X:FF Y:FF P:24 SP:FB PPU:284,200 CYC:22835\n\
F249  EA        NOP                             A:42 X:FF Y:FF P:24 SP:FB PPU:305,200 CYC:22842\n\
F24A  EA        NOP                             A:42 X:FF Y:FF P:24 SP:FB PPU:311,200 CYC:22844\n\
F24B  08        PHP                             A:42 X:FF Y:FF P:24 SP:FB PPU:317,200 CYC:22846\n\
F24C  48        PHA                             A:42 X:FF Y:FF P:24 SP:FA PPU:326,200 CYC:22849\n\
F24D  A0 E4     LDY #$E4                        A:42 X:FF Y:FF P:24 SP:F9 PPU:335,200 CYC:22852\n\
F24F  68        PLA                             A:42 X:FF Y:E4 P:A4 SP:F9 PPU:  0,201 CYC:22854\n\
F250  28        PLP                             A:42 X:FF Y:E4 P:24 SP:FA PPU: 12,201 CYC:22858\n\
F251  20 69 FB  JSR $FB69                       A:42 X:FF Y:E4 P:24 SP:FB PPU: 24,201 CYC:22862\n\
FB69  70 0A     BVS $FB75                       A:42 X:FF Y:E4 P:24 SP:F9 PPU: 42,201 CYC:22868\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:FF Y:E4 P:24 SP:F9 PPU: 48,201 CYC:22870\n\
FB6D  30 06     BMI $FB75                       A:42 X:FF Y:E4 P:24 SP:F9 PPU: 54,201 CYC:22872\n\
FB6F  B0 04     BCS $FB75                       A:42 X:FF Y:E4 P:24 SP:F9 PPU: 60,201 CYC:22874\n\
FB71  C9 42     CMP #$42                        A:42 X:FF Y:E4 P:24 SP:F9 PPU: 66,201 CYC:22876\n\
FB73  F0 02     BEQ $FB77                       A:42 X:FF Y:E4 P:27 SP:F9 PPU: 72,201 CYC:22878\n\
FB77  60        RTS                             A:42 X:FF Y:E4 P:27 SP:F9 PPU: 81,201 CYC:22881\n\
F254  AD 47 06  LDA $0647 = 52                  A:42 X:FF Y:E4 P:27 SP:FB PPU: 99,201 CYC:22887\n\
F257  C9 52     CMP #$52                        A:52 X:FF Y:E4 P:25 SP:FB PPU:111,201 CYC:22891\n\
F259  F0 02     BEQ $F25D                       A:52 X:FF Y:E4 P:27 SP:FB PPU:117,201 CYC:22893\n\
F25D  A0 FF     LDY #$FF                        A:52 X:FF Y:E4 P:27 SP:FB PPU:126,201 CYC:22896\n\
F25F  A9 37     LDA #$37                        A:52 X:FF Y:FF P:A5 SP:FB PPU:132,201 CYC:22898\n\
F261  8D 47 06  STA $0647 = 52                  A:37 X:FF Y:FF P:25 SP:FB PPU:138,201 CYC:22900\n\
F264  20 68 FA  JSR $FA68                       A:37 X:FF Y:FF P:25 SP:FB PPU:150,201 CYC:22904\n\
FA68  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU:168,201 CYC:22910\n\
FA6A  38        SEC                             A:37 X:FF Y:FF P:E5 SP:F9 PPU:177,201 CYC:22913\n\
FA6B  A9 75     LDA #$75                        A:37 X:FF Y:FF P:E5 SP:F9 PPU:183,201 CYC:22915\n\
FA6D  60        RTS                             A:75 X:FF Y:FF P:65 SP:F9 PPU:189,201 CYC:22917\n\
F267  3B 48 05 *RLA $0548,Y @ 0647 = 37         A:75 X:FF Y:FF P:65 SP:FB PPU:207,201 CYC:22923\n\
F26A  EA        NOP                             A:65 X:FF Y:FF P:64 SP:FB PPU:228,201 CYC:22930\n\
F26B  EA        NOP                             A:65 X:FF Y:FF P:64 SP:FB PPU:234,201 CYC:22932\n\
F26C  08        PHP                             A:65 X:FF Y:FF P:64 SP:FB PPU:240,201 CYC:22934\n\
F26D  48        PHA                             A:65 X:FF Y:FF P:64 SP:FA PPU:249,201 CYC:22937\n\
F26E  A0 E5     LDY #$E5                        A:65 X:FF Y:FF P:64 SP:F9 PPU:258,201 CYC:22940\n\
F270  68        PLA                             A:65 X:FF Y:E5 P:E4 SP:F9 PPU:264,201 CYC:22942\n\
F271  28        PLP                             A:65 X:FF Y:E5 P:64 SP:FA PPU:276,201 CYC:22946\n\
F272  20 6E FA  JSR $FA6E                       A:65 X:FF Y:E5 P:64 SP:FB PPU:288,201 CYC:22950\n\
FA6E  50 76     BVC $FAE6                       A:65 X:FF Y:E5 P:64 SP:F9 PPU:306,201 CYC:22956\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:FF Y:E5 P:64 SP:F9 PPU:312,201 CYC:22958\n\
FA72  30 72     BMI $FAE6                       A:65 X:FF Y:E5 P:64 SP:F9 PPU:318,201 CYC:22960\n\
FA74  B0 70     BCS $FAE6                       A:65 X:FF Y:E5 P:64 SP:F9 PPU:324,201 CYC:22962\n\
FA76  C9 65     CMP #$65                        A:65 X:FF Y:E5 P:64 SP:F9 PPU:330,201 CYC:22964\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:FF Y:E5 P:67 SP:F9 PPU:336,201 CYC:22966\n\
FA7A  60        RTS                             A:65 X:FF Y:E5 P:67 SP:F9 PPU:  1,202 CYC:22968\n\
F275  AD 47 06  LDA $0647 = 6F                  A:65 X:FF Y:E5 P:67 SP:FB PPU: 19,202 CYC:22974\n\
F278  C9 6F     CMP #$6F                        A:6F X:FF Y:E5 P:65 SP:FB PPU: 31,202 CYC:22978\n\
F27A  F0 02     BEQ $F27E                       A:6F X:FF Y:E5 P:67 SP:FB PPU: 37,202 CYC:22980\n\
F27E  A0 E6     LDY #$E6                        A:6F X:FF Y:E5 P:67 SP:FB PPU: 46,202 CYC:22983\n\
F280  A2 FF     LDX #$FF                        A:6F X:FF Y:E6 P:E5 SP:FB PPU: 52,202 CYC:22985\n\
F282  A9 A5     LDA #$A5                        A:6F X:FF Y:E6 P:E5 SP:FB PPU: 58,202 CYC:22987\n\
F284  8D 47 06  STA $0647 = 6F                  A:A5 X:FF Y:E6 P:E5 SP:FB PPU: 64,202 CYC:22989\n\
F287  20 53 FB  JSR $FB53                       A:A5 X:FF Y:E6 P:E5 SP:FB PPU: 76,202 CYC:22993\n\
FB53  24 01     BIT $01 = FF                    A:A5 X:FF Y:E6 P:E5 SP:F9 PPU: 94,202 CYC:22999\n\
FB55  18        CLC                             A:A5 X:FF Y:E6 P:E5 SP:F9 PPU:103,202 CYC:23002\n\
FB56  A9 B3     LDA #$B3                        A:A5 X:FF Y:E6 P:E4 SP:F9 PPU:109,202 CYC:23004\n\
FB58  60        RTS                             A:B3 X:FF Y:E6 P:E4 SP:F9 PPU:115,202 CYC:23006\n\
F28A  3F 48 05 *RLA $0548,X @ 0647 = A5         A:B3 X:FF Y:E6 P:E4 SP:FB PPU:133,202 CYC:23012\n\
F28D  EA        NOP                             A:02 X:FF Y:E6 P:65 SP:FB PPU:154,202 CYC:23019\n\
F28E  EA        NOP                             A:02 X:FF Y:E6 P:65 SP:FB PPU:160,202 CYC:23021\n\
F28F  EA        NOP                             A:02 X:FF Y:E6 P:65 SP:FB PPU:166,202 CYC:23023\n\
F290  EA        NOP                             A:02 X:FF Y:E6 P:65 SP:FB PPU:172,202 CYC:23025\n\
F291  20 59 FB  JSR $FB59                       A:02 X:FF Y:E6 P:65 SP:FB PPU:178,202 CYC:23027\n\
FB59  50 1A     BVC $FB75                       A:02 X:FF Y:E6 P:65 SP:F9 PPU:196,202 CYC:23033\n\
FB5B  90 18     BCC $FB75                       A:02 X:FF Y:E6 P:65 SP:F9 PPU:202,202 CYC:23035\n\
FB5D  30 16     BMI $FB75                       A:02 X:FF Y:E6 P:65 SP:F9 PPU:208,202 CYC:23037\n\
FB5F  C9 02     CMP #$02                        A:02 X:FF Y:E6 P:65 SP:F9 PPU:214,202 CYC:23039\n\
FB61  D0 12     BNE $FB75                       A:02 X:FF Y:E6 P:67 SP:F9 PPU:220,202 CYC:23041\n\
FB63  60        RTS                             A:02 X:FF Y:E6 P:67 SP:F9 PPU:226,202 CYC:23043\n\
F294  AD 47 06  LDA $0647 = 4A                  A:02 X:FF Y:E6 P:67 SP:FB PPU:244,202 CYC:23049\n\
F297  C9 4A     CMP #$4A                        A:4A X:FF Y:E6 P:65 SP:FB PPU:256,202 CYC:23053\n\
F299  F0 02     BEQ $F29D                       A:4A X:FF Y:E6 P:67 SP:FB PPU:262,202 CYC:23055\n\
F29D  C8        INY                             A:4A X:FF Y:E6 P:67 SP:FB PPU:271,202 CYC:23058\n\
F29E  A9 29     LDA #$29                        A:4A X:FF Y:E7 P:E5 SP:FB PPU:277,202 CYC:23060\n\
F2A0  8D 47 06  STA $0647 = 4A                  A:29 X:FF Y:E7 P:65 SP:FB PPU:283,202 CYC:23062\n\
F2A3  20 64 FB  JSR $FB64                       A:29 X:FF Y:E7 P:65 SP:FB PPU:295,202 CYC:23066\n\
FB64  B8        CLV                             A:29 X:FF Y:E7 P:65 SP:F9 PPU:313,202 CYC:23072\n\
FB65  18        CLC                             A:29 X:FF Y:E7 P:25 SP:F9 PPU:319,202 CYC:23074\n\
FB66  A9 42     LDA #$42                        A:29 X:FF Y:E7 P:24 SP:F9 PPU:325,202 CYC:23076\n\
FB68  60        RTS                             A:42 X:FF Y:E7 P:24 SP:F9 PPU:331,202 CYC:23078\n\
F2A6  3F 48 05 *RLA $0548,X @ 0647 = 29         A:42 X:FF Y:E7 P:24 SP:FB PPU:  8,203 CYC:23084\n\
F2A9  EA        NOP                             A:42 X:FF Y:E7 P:24 SP:FB PPU: 29,203 CYC:23091\n\
F2AA  EA        NOP                             A:42 X:FF Y:E7 P:24 SP:FB PPU: 35,203 CYC:23093\n\
F2AB  EA        NOP                             A:42 X:FF Y:E7 P:24 SP:FB PPU: 41,203 CYC:23095\n\
F2AC  EA        NOP                             A:42 X:FF Y:E7 P:24 SP:FB PPU: 47,203 CYC:23097\n\
F2AD  20 69 FB  JSR $FB69                       A:42 X:FF Y:E7 P:24 SP:FB PPU: 53,203 CYC:23099\n\
FB69  70 0A     BVS $FB75                       A:42 X:FF Y:E7 P:24 SP:F9 PPU: 71,203 CYC:23105\n\
FB6B  F0 08     BEQ $FB75                       A:42 X:FF Y:E7 P:24 SP:F9 PPU: 77,203 CYC:23107\n\
FB6D  30 06     BMI $FB75                       A:42 X:FF Y:E7 P:24 SP:F9 PPU: 83,203 CYC:23109\n\
FB6F  B0 04     BCS $FB75                       A:42 X:FF Y:E7 P:24 SP:F9 PPU: 89,203 CYC:23111\n\
FB71  C9 42     CMP #$42                        A:42 X:FF Y:E7 P:24 SP:F9 PPU: 95,203 CYC:23113\n\
FB73  F0 02     BEQ $FB77                       A:42 X:FF Y:E7 P:27 SP:F9 PPU:101,203 CYC:23115\n\
FB77  60        RTS                             A:42 X:FF Y:E7 P:27 SP:F9 PPU:110,203 CYC:23118\n\
F2B0  AD 47 06  LDA $0647 = 52                  A:42 X:FF Y:E7 P:27 SP:FB PPU:128,203 CYC:23124\n\
F2B3  C9 52     CMP #$52                        A:52 X:FF Y:E7 P:25 SP:FB PPU:140,203 CYC:23128\n\
F2B5  F0 02     BEQ $F2B9                       A:52 X:FF Y:E7 P:27 SP:FB PPU:146,203 CYC:23130\n\
F2B9  C8        INY                             A:52 X:FF Y:E7 P:27 SP:FB PPU:155,203 CYC:23133\n\
F2BA  A9 37     LDA #$37                        A:52 X:FF Y:E8 P:A5 SP:FB PPU:161,203 CYC:23135\n\
F2BC  8D 47 06  STA $0647 = 52                  A:37 X:FF Y:E8 P:25 SP:FB PPU:167,203 CYC:23137\n\
F2BF  20 68 FA  JSR $FA68                       A:37 X:FF Y:E8 P:25 SP:FB PPU:179,203 CYC:23141\n\
FA68  24 01     BIT $01 = FF                    A:37 X:FF Y:E8 P:25 SP:F9 PPU:197,203 CYC:23147\n\
FA6A  38        SEC                             A:37 X:FF Y:E8 P:E5 SP:F9 PPU:206,203 CYC:23150\n\
FA6B  A9 75     LDA #$75                        A:37 X:FF Y:E8 P:E5 SP:F9 PPU:212,203 CYC:23152\n\
FA6D  60        RTS                             A:75 X:FF Y:E8 P:65 SP:F9 PPU:218,203 CYC:23154\n\
F2C2  3F 48 05 *RLA $0548,X @ 0647 = 37         A:75 X:FF Y:E8 P:65 SP:FB PPU:236,203 CYC:23160\n\
F2C5  EA        NOP                             A:65 X:FF Y:E8 P:64 SP:FB PPU:257,203 CYC:23167\n\
F2C6  EA        NOP                             A:65 X:FF Y:E8 P:64 SP:FB PPU:263,203 CYC:23169\n\
F2C7  EA        NOP                             A:65 X:FF Y:E8 P:64 SP:FB PPU:269,203 CYC:23171\n\
F2C8  EA        NOP                             A:65 X:FF Y:E8 P:64 SP:FB PPU:275,203 CYC:23173\n\
F2C9  20 6E FA  JSR $FA6E                       A:65 X:FF Y:E8 P:64 SP:FB PPU:281,203 CYC:23175\n\
FA6E  50 76     BVC $FAE6                       A:65 X:FF Y:E8 P:64 SP:F9 PPU:299,203 CYC:23181\n\
FA70  F0 74     BEQ $FAE6                       A:65 X:FF Y:E8 P:64 SP:F9 PPU:305,203 CYC:23183\n\
FA72  30 72     BMI $FAE6                       A:65 X:FF Y:E8 P:64 SP:F9 PPU:311,203 CYC:23185\n\
FA74  B0 70     BCS $FAE6                       A:65 X:FF Y:E8 P:64 SP:F9 PPU:317,203 CYC:23187\n\
FA76  C9 65     CMP #$65                        A:65 X:FF Y:E8 P:64 SP:F9 PPU:323,203 CYC:23189\n\
FA78  D0 6C     BNE $FAE6                       A:65 X:FF Y:E8 P:67 SP:F9 PPU:329,203 CYC:23191\n\
FA7A  60        RTS                             A:65 X:FF Y:E8 P:67 SP:F9 PPU:335,203 CYC:23193\n\
F2CC  AD 47 06  LDA $0647 = 6F                  A:65 X:FF Y:E8 P:67 SP:FB PPU: 12,204 CYC:23199\n\
F2CF  C9 6F     CMP #$6F                        A:6F X:FF Y:E8 P:65 SP:FB PPU: 24,204 CYC:23203\n\
F2D1  F0 02     BEQ $F2D5                       A:6F X:FF Y:E8 P:67 SP:FB PPU: 30,204 CYC:23205\n\
F2D5  60        RTS                             A:6F X:FF Y:E8 P:67 SP:FB PPU: 39,204 CYC:23208\n\
C647  20 D6 F2  JSR $F2D6                       A:6F X:FF Y:E8 P:67 SP:FD PPU: 57,204 CYC:23214\n\
F2D6  A9 FF     LDA #$FF                        A:6F X:FF Y:E8 P:67 SP:FB PPU: 75,204 CYC:23220\n\
F2D8  85 01     STA $01 = FF                    A:FF X:FF Y:E8 P:E5 SP:FB PPU: 81,204 CYC:23222\n\
F2DA  A0 E9     LDY #$E9                        A:FF X:FF Y:E8 P:E5 SP:FB PPU: 90,204 CYC:23225\n\
F2DC  A2 02     LDX #$02                        A:FF X:FF Y:E9 P:E5 SP:FB PPU: 96,204 CYC:23227\n\
F2DE  A9 47     LDA #$47                        A:FF X:02 Y:E9 P:65 SP:FB PPU:102,204 CYC:23229\n\
F2E0  85 47     STA $47 = 6F                    A:47 X:02 Y:E9 P:65 SP:FB PPU:108,204 CYC:23231\n\
F2E2  A9 06     LDA #$06                        A:47 X:02 Y:E9 P:65 SP:FB PPU:117,204 CYC:23234\n\
F2E4  85 48     STA $48 = 06                    A:06 X:02 Y:E9 P:65 SP:FB PPU:123,204 CYC:23236\n\
F2E6  A9 A5     LDA #$A5                        A:06 X:02 Y:E9 P:65 SP:FB PPU:132,204 CYC:23239\n\
F2E8  8D 47 06  STA $0647 = 6F                  A:A5 X:02 Y:E9 P:E5 SP:FB PPU:138,204 CYC:23241\n\
F2EB  20 1D FB  JSR $FB1D                       A:A5 X:02 Y:E9 P:E5 SP:FB PPU:150,204 CYC:23245\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:02 Y:E9 P:E5 SP:F9 PPU:168,204 CYC:23251\n\
FB1F  18        CLC                             A:A5 X:02 Y:E9 P:E5 SP:F9 PPU:177,204 CYC:23254\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:02 Y:E9 P:E4 SP:F9 PPU:183,204 CYC:23256\n\
FB22  60        RTS                             A:B3 X:02 Y:E9 P:E4 SP:F9 PPU:189,204 CYC:23258\n\
F2EE  43 45    *SRE ($45,X) @ 47 = 0647 = A5    A:B3 X:02 Y:E9 P:E4 SP:FB PPU:207,204 CYC:23264\n\
F2F0  EA        NOP                             A:E1 X:02 Y:E9 P:E5 SP:FB PPU:231,204 CYC:23272\n\
F2F1  EA        NOP                             A:E1 X:02 Y:E9 P:E5 SP:FB PPU:237,204 CYC:23274\n\
F2F2  EA        NOP                             A:E1 X:02 Y:E9 P:E5 SP:FB PPU:243,204 CYC:23276\n\
F2F3  EA        NOP                             A:E1 X:02 Y:E9 P:E5 SP:FB PPU:249,204 CYC:23278\n\
F2F4  20 23 FB  JSR $FB23                       A:E1 X:02 Y:E9 P:E5 SP:FB PPU:255,204 CYC:23280\n\
FB23  50 50     BVC $FB75                       A:E1 X:02 Y:E9 P:E5 SP:F9 PPU:273,204 CYC:23286\n\
FB25  90 4E     BCC $FB75                       A:E1 X:02 Y:E9 P:E5 SP:F9 PPU:279,204 CYC:23288\n\
FB27  10 4C     BPL $FB75                       A:E1 X:02 Y:E9 P:E5 SP:F9 PPU:285,204 CYC:23290\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:02 Y:E9 P:E5 SP:F9 PPU:291,204 CYC:23292\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:02 Y:E9 P:67 SP:F9 PPU:297,204 CYC:23294\n\
FB2D  60        RTS                             A:E1 X:02 Y:E9 P:67 SP:F9 PPU:303,204 CYC:23296\n\
F2F7  AD 47 06  LDA $0647 = 52                  A:E1 X:02 Y:E9 P:67 SP:FB PPU:321,204 CYC:23302\n\
F2FA  C9 52     CMP #$52                        A:52 X:02 Y:E9 P:65 SP:FB PPU:333,204 CYC:23306\n\
F2FC  F0 02     BEQ $F300                       A:52 X:02 Y:E9 P:67 SP:FB PPU:339,204 CYC:23308\n\
F300  C8        INY                             A:52 X:02 Y:E9 P:67 SP:FB PPU: 10,205 CYC:23312\n\
F301  A9 29     LDA #$29                        A:52 X:02 Y:EA P:E5 SP:FB PPU: 16,205 CYC:23314\n\
F303  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:EA P:65 SP:FB PPU: 22,205 CYC:23316\n\
F306  20 2E FB  JSR $FB2E                       A:29 X:02 Y:EA P:65 SP:FB PPU: 34,205 CYC:23320\n\
FB2E  B8        CLV                             A:29 X:02 Y:EA P:65 SP:F9 PPU: 52,205 CYC:23326\n\
FB2F  18        CLC                             A:29 X:02 Y:EA P:25 SP:F9 PPU: 58,205 CYC:23328\n\
FB30  A9 42     LDA #$42                        A:29 X:02 Y:EA P:24 SP:F9 PPU: 64,205 CYC:23330\n\
FB32  60        RTS                             A:42 X:02 Y:EA P:24 SP:F9 PPU: 70,205 CYC:23332\n\
F309  43 45    *SRE ($45,X) @ 47 = 0647 = 29    A:42 X:02 Y:EA P:24 SP:FB PPU: 88,205 CYC:23338\n\
F30B  EA        NOP                             A:56 X:02 Y:EA P:25 SP:FB PPU:112,205 CYC:23346\n\
F30C  EA        NOP                             A:56 X:02 Y:EA P:25 SP:FB PPU:118,205 CYC:23348\n\
F30D  EA        NOP                             A:56 X:02 Y:EA P:25 SP:FB PPU:124,205 CYC:23350\n\
F30E  EA        NOP                             A:56 X:02 Y:EA P:25 SP:FB PPU:130,205 CYC:23352\n\
F30F  20 33 FB  JSR $FB33                       A:56 X:02 Y:EA P:25 SP:FB PPU:136,205 CYC:23354\n\
FB33  70 40     BVS $FB75                       A:56 X:02 Y:EA P:25 SP:F9 PPU:154,205 CYC:23360\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:02 Y:EA P:25 SP:F9 PPU:160,205 CYC:23362\n\
FB37  30 3C     BMI $FB75                       A:56 X:02 Y:EA P:25 SP:F9 PPU:166,205 CYC:23364\n\
FB39  90 3A     BCC $FB75                       A:56 X:02 Y:EA P:25 SP:F9 PPU:172,205 CYC:23366\n\
FB3B  C9 56     CMP #$56                        A:56 X:02 Y:EA P:25 SP:F9 PPU:178,205 CYC:23368\n\
FB3D  D0 36     BNE $FB75                       A:56 X:02 Y:EA P:27 SP:F9 PPU:184,205 CYC:23370\n\
FB3F  60        RTS                             A:56 X:02 Y:EA P:27 SP:F9 PPU:190,205 CYC:23372\n\
F312  AD 47 06  LDA $0647 = 14                  A:56 X:02 Y:EA P:27 SP:FB PPU:208,205 CYC:23378\n\
F315  C9 14     CMP #$14                        A:14 X:02 Y:EA P:25 SP:FB PPU:220,205 CYC:23382\n\
F317  F0 02     BEQ $F31B                       A:14 X:02 Y:EA P:27 SP:FB PPU:226,205 CYC:23384\n\
F31B  C8        INY                             A:14 X:02 Y:EA P:27 SP:FB PPU:235,205 CYC:23387\n\
F31C  A9 37     LDA #$37                        A:14 X:02 Y:EB P:A5 SP:FB PPU:241,205 CYC:23389\n\
F31E  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:EB P:25 SP:FB PPU:247,205 CYC:23391\n\
F321  20 40 FB  JSR $FB40                       A:37 X:02 Y:EB P:25 SP:FB PPU:259,205 CYC:23395\n\
FB40  24 01     BIT $01 = FF                    A:37 X:02 Y:EB P:25 SP:F9 PPU:277,205 CYC:23401\n\
FB42  38        SEC                             A:37 X:02 Y:EB P:E5 SP:F9 PPU:286,205 CYC:23404\n\
FB43  A9 75     LDA #$75                        A:37 X:02 Y:EB P:E5 SP:F9 PPU:292,205 CYC:23406\n\
FB45  60        RTS                             A:75 X:02 Y:EB P:65 SP:F9 PPU:298,205 CYC:23408\n\
F324  43 45    *SRE ($45,X) @ 47 = 0647 = 37    A:75 X:02 Y:EB P:65 SP:FB PPU:316,205 CYC:23414\n\
F326  EA        NOP                             A:6E X:02 Y:EB P:65 SP:FB PPU:340,205 CYC:23422\n\
F327  EA        NOP                             A:6E X:02 Y:EB P:65 SP:FB PPU:  5,206 CYC:23424\n\
F328  EA        NOP                             A:6E X:02 Y:EB P:65 SP:FB PPU: 11,206 CYC:23426\n\
F329  EA        NOP                             A:6E X:02 Y:EB P:65 SP:FB PPU: 17,206 CYC:23428\n\
F32A  20 46 FB  JSR $FB46                       A:6E X:02 Y:EB P:65 SP:FB PPU: 23,206 CYC:23430\n\
FB46  50 2D     BVC $FB75                       A:6E X:02 Y:EB P:65 SP:F9 PPU: 41,206 CYC:23436\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:02 Y:EB P:65 SP:F9 PPU: 47,206 CYC:23438\n\
FB4A  30 29     BMI $FB75                       A:6E X:02 Y:EB P:65 SP:F9 PPU: 53,206 CYC:23440\n\
FB4C  90 27     BCC $FB75                       A:6E X:02 Y:EB P:65 SP:F9 PPU: 59,206 CYC:23442\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:02 Y:EB P:65 SP:F9 PPU: 65,206 CYC:23444\n\
FB50  D0 23     BNE $FB75                       A:6E X:02 Y:EB P:67 SP:F9 PPU: 71,206 CYC:23446\n\
FB52  60        RTS                             A:6E X:02 Y:EB P:67 SP:F9 PPU: 77,206 CYC:23448\n\
F32D  AD 47 06  LDA $0647 = 1B                  A:6E X:02 Y:EB P:67 SP:FB PPU: 95,206 CYC:23454\n\
F330  C9 1B     CMP #$1B                        A:1B X:02 Y:EB P:65 SP:FB PPU:107,206 CYC:23458\n\
F332  F0 02     BEQ $F336                       A:1B X:02 Y:EB P:67 SP:FB PPU:113,206 CYC:23460\n\
F336  C8        INY                             A:1B X:02 Y:EB P:67 SP:FB PPU:122,206 CYC:23463\n\
F337  A9 A5     LDA #$A5                        A:1B X:02 Y:EC P:E5 SP:FB PPU:128,206 CYC:23465\n\
F339  85 47     STA $47 = 47                    A:A5 X:02 Y:EC P:E5 SP:FB PPU:134,206 CYC:23467\n\
F33B  20 1D FB  JSR $FB1D                       A:A5 X:02 Y:EC P:E5 SP:FB PPU:143,206 CYC:23470\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:02 Y:EC P:E5 SP:F9 PPU:161,206 CYC:23476\n\
FB1F  18        CLC                             A:A5 X:02 Y:EC P:E5 SP:F9 PPU:170,206 CYC:23479\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:02 Y:EC P:E4 SP:F9 PPU:176,206 CYC:23481\n\
FB22  60        RTS                             A:B3 X:02 Y:EC P:E4 SP:F9 PPU:182,206 CYC:23483\n\
F33E  47 47    *SRE $47 = A5                    A:B3 X:02 Y:EC P:E4 SP:FB PPU:200,206 CYC:23489\n\
F340  EA        NOP                             A:E1 X:02 Y:EC P:E5 SP:FB PPU:215,206 CYC:23494\n\
F341  EA        NOP                             A:E1 X:02 Y:EC P:E5 SP:FB PPU:221,206 CYC:23496\n\
F342  EA        NOP                             A:E1 X:02 Y:EC P:E5 SP:FB PPU:227,206 CYC:23498\n\
F343  EA        NOP                             A:E1 X:02 Y:EC P:E5 SP:FB PPU:233,206 CYC:23500\n\
F344  20 23 FB  JSR $FB23                       A:E1 X:02 Y:EC P:E5 SP:FB PPU:239,206 CYC:23502\n\
FB23  50 50     BVC $FB75                       A:E1 X:02 Y:EC P:E5 SP:F9 PPU:257,206 CYC:23508\n\
FB25  90 4E     BCC $FB75                       A:E1 X:02 Y:EC P:E5 SP:F9 PPU:263,206 CYC:23510\n\
FB27  10 4C     BPL $FB75                       A:E1 X:02 Y:EC P:E5 SP:F9 PPU:269,206 CYC:23512\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:02 Y:EC P:E5 SP:F9 PPU:275,206 CYC:23514\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:02 Y:EC P:67 SP:F9 PPU:281,206 CYC:23516\n\
FB2D  60        RTS                             A:E1 X:02 Y:EC P:67 SP:F9 PPU:287,206 CYC:23518\n\
F347  A5 47     LDA $47 = 52                    A:E1 X:02 Y:EC P:67 SP:FB PPU:305,206 CYC:23524\n\
F349  C9 52     CMP #$52                        A:52 X:02 Y:EC P:65 SP:FB PPU:314,206 CYC:23527\n\
F34B  F0 02     BEQ $F34F                       A:52 X:02 Y:EC P:67 SP:FB PPU:320,206 CYC:23529\n\
F34F  C8        INY                             A:52 X:02 Y:EC P:67 SP:FB PPU:329,206 CYC:23532\n\
F350  A9 29     LDA #$29                        A:52 X:02 Y:ED P:E5 SP:FB PPU:335,206 CYC:23534\n\
F352  85 47     STA $47 = 52                    A:29 X:02 Y:ED P:65 SP:FB PPU:  0,207 CYC:23536\n\
F354  20 2E FB  JSR $FB2E                       A:29 X:02 Y:ED P:65 SP:FB PPU:  9,207 CYC:23539\n\
FB2E  B8        CLV                             A:29 X:02 Y:ED P:65 SP:F9 PPU: 27,207 CYC:23545\n\
FB2F  18        CLC                             A:29 X:02 Y:ED P:25 SP:F9 PPU: 33,207 CYC:23547\n\
FB30  A9 42     LDA #$42                        A:29 X:02 Y:ED P:24 SP:F9 PPU: 39,207 CYC:23549\n\
FB32  60        RTS                             A:42 X:02 Y:ED P:24 SP:F9 PPU: 45,207 CYC:23551\n\
F357  47 47    *SRE $47 = 29                    A:42 X:02 Y:ED P:24 SP:FB PPU: 63,207 CYC:23557\n\
F359  EA        NOP                             A:56 X:02 Y:ED P:25 SP:FB PPU: 78,207 CYC:23562\n\
F35A  EA        NOP                             A:56 X:02 Y:ED P:25 SP:FB PPU: 84,207 CYC:23564\n\
F35B  EA        NOP                             A:56 X:02 Y:ED P:25 SP:FB PPU: 90,207 CYC:23566\n\
F35C  EA        NOP                             A:56 X:02 Y:ED P:25 SP:FB PPU: 96,207 CYC:23568\n\
F35D  20 33 FB  JSR $FB33                       A:56 X:02 Y:ED P:25 SP:FB PPU:102,207 CYC:23570\n\
FB33  70 40     BVS $FB75                       A:56 X:02 Y:ED P:25 SP:F9 PPU:120,207 CYC:23576\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:02 Y:ED P:25 SP:F9 PPU:126,207 CYC:23578\n\
FB37  30 3C     BMI $FB75                       A:56 X:02 Y:ED P:25 SP:F9 PPU:132,207 CYC:23580\n\
FB39  90 3A     BCC $FB75                       A:56 X:02 Y:ED P:25 SP:F9 PPU:138,207 CYC:23582\n\
FB3B  C9 56     CMP #$56                        A:56 X:02 Y:ED P:25 SP:F9 PPU:144,207 CYC:23584\n\
FB3D  D0 36     BNE $FB75                       A:56 X:02 Y:ED P:27 SP:F9 PPU:150,207 CYC:23586\n\
FB3F  60        RTS                             A:56 X:02 Y:ED P:27 SP:F9 PPU:156,207 CYC:23588\n\
F360  A5 47     LDA $47 = 14                    A:56 X:02 Y:ED P:27 SP:FB PPU:174,207 CYC:23594\n\
F362  C9 14     CMP #$14                        A:14 X:02 Y:ED P:25 SP:FB PPU:183,207 CYC:23597\n\
F364  F0 02     BEQ $F368                       A:14 X:02 Y:ED P:27 SP:FB PPU:189,207 CYC:23599\n\
F368  C8        INY                             A:14 X:02 Y:ED P:27 SP:FB PPU:198,207 CYC:23602\n\
F369  A9 37     LDA #$37                        A:14 X:02 Y:EE P:A5 SP:FB PPU:204,207 CYC:23604\n\
F36B  85 47     STA $47 = 14                    A:37 X:02 Y:EE P:25 SP:FB PPU:210,207 CYC:23606\n\
F36D  20 40 FB  JSR $FB40                       A:37 X:02 Y:EE P:25 SP:FB PPU:219,207 CYC:23609\n\
FB40  24 01     BIT $01 = FF                    A:37 X:02 Y:EE P:25 SP:F9 PPU:237,207 CYC:23615\n\
FB42  38        SEC                             A:37 X:02 Y:EE P:E5 SP:F9 PPU:246,207 CYC:23618\n\
FB43  A9 75     LDA #$75                        A:37 X:02 Y:EE P:E5 SP:F9 PPU:252,207 CYC:23620\n\
FB45  60        RTS                             A:75 X:02 Y:EE P:65 SP:F9 PPU:258,207 CYC:23622\n\
F370  47 47    *SRE $47 = 37                    A:75 X:02 Y:EE P:65 SP:FB PPU:276,207 CYC:23628\n\
F372  EA        NOP                             A:6E X:02 Y:EE P:65 SP:FB PPU:291,207 CYC:23633\n\
F373  EA        NOP                             A:6E X:02 Y:EE P:65 SP:FB PPU:297,207 CYC:23635\n\
F374  EA        NOP                             A:6E X:02 Y:EE P:65 SP:FB PPU:303,207 CYC:23637\n\
F375  EA        NOP                             A:6E X:02 Y:EE P:65 SP:FB PPU:309,207 CYC:23639\n\
F376  20 46 FB  JSR $FB46                       A:6E X:02 Y:EE P:65 SP:FB PPU:315,207 CYC:23641\n\
FB46  50 2D     BVC $FB75                       A:6E X:02 Y:EE P:65 SP:F9 PPU:333,207 CYC:23647\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:02 Y:EE P:65 SP:F9 PPU:339,207 CYC:23649\n\
FB4A  30 29     BMI $FB75                       A:6E X:02 Y:EE P:65 SP:F9 PPU:  4,208 CYC:23651\n\
FB4C  90 27     BCC $FB75                       A:6E X:02 Y:EE P:65 SP:F9 PPU: 10,208 CYC:23653\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:02 Y:EE P:65 SP:F9 PPU: 16,208 CYC:23655\n\
FB50  D0 23     BNE $FB75                       A:6E X:02 Y:EE P:67 SP:F9 PPU: 22,208 CYC:23657\n\
FB52  60        RTS                             A:6E X:02 Y:EE P:67 SP:F9 PPU: 28,208 CYC:23659\n\
F379  A5 47     LDA $47 = 1B                    A:6E X:02 Y:EE P:67 SP:FB PPU: 46,208 CYC:23665\n\
F37B  C9 1B     CMP #$1B                        A:1B X:02 Y:EE P:65 SP:FB PPU: 55,208 CYC:23668\n\
F37D  F0 02     BEQ $F381                       A:1B X:02 Y:EE P:67 SP:FB PPU: 61,208 CYC:23670\n\
F381  C8        INY                             A:1B X:02 Y:EE P:67 SP:FB PPU: 70,208 CYC:23673\n\
F382  A9 A5     LDA #$A5                        A:1B X:02 Y:EF P:E5 SP:FB PPU: 76,208 CYC:23675\n\
F384  8D 47 06  STA $0647 = 1B                  A:A5 X:02 Y:EF P:E5 SP:FB PPU: 82,208 CYC:23677\n\
F387  20 1D FB  JSR $FB1D                       A:A5 X:02 Y:EF P:E5 SP:FB PPU: 94,208 CYC:23681\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:02 Y:EF P:E5 SP:F9 PPU:112,208 CYC:23687\n\
FB1F  18        CLC                             A:A5 X:02 Y:EF P:E5 SP:F9 PPU:121,208 CYC:23690\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:02 Y:EF P:E4 SP:F9 PPU:127,208 CYC:23692\n\
FB22  60        RTS                             A:B3 X:02 Y:EF P:E4 SP:F9 PPU:133,208 CYC:23694\n\
F38A  4F 47 06 *SRE $0647 = A5                  A:B3 X:02 Y:EF P:E4 SP:FB PPU:151,208 CYC:23700\n\
F38D  EA        NOP                             A:E1 X:02 Y:EF P:E5 SP:FB PPU:169,208 CYC:23706\n\
F38E  EA        NOP                             A:E1 X:02 Y:EF P:E5 SP:FB PPU:175,208 CYC:23708\n\
F38F  EA        NOP                             A:E1 X:02 Y:EF P:E5 SP:FB PPU:181,208 CYC:23710\n\
F390  EA        NOP                             A:E1 X:02 Y:EF P:E5 SP:FB PPU:187,208 CYC:23712\n\
F391  20 23 FB  JSR $FB23                       A:E1 X:02 Y:EF P:E5 SP:FB PPU:193,208 CYC:23714\n\
FB23  50 50     BVC $FB75                       A:E1 X:02 Y:EF P:E5 SP:F9 PPU:211,208 CYC:23720\n\
FB25  90 4E     BCC $FB75                       A:E1 X:02 Y:EF P:E5 SP:F9 PPU:217,208 CYC:23722\n\
FB27  10 4C     BPL $FB75                       A:E1 X:02 Y:EF P:E5 SP:F9 PPU:223,208 CYC:23724\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:02 Y:EF P:E5 SP:F9 PPU:229,208 CYC:23726\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:02 Y:EF P:67 SP:F9 PPU:235,208 CYC:23728\n\
FB2D  60        RTS                             A:E1 X:02 Y:EF P:67 SP:F9 PPU:241,208 CYC:23730\n\
F394  AD 47 06  LDA $0647 = 52                  A:E1 X:02 Y:EF P:67 SP:FB PPU:259,208 CYC:23736\n\
F397  C9 52     CMP #$52                        A:52 X:02 Y:EF P:65 SP:FB PPU:271,208 CYC:23740\n\
F399  F0 02     BEQ $F39D                       A:52 X:02 Y:EF P:67 SP:FB PPU:277,208 CYC:23742\n\
F39D  C8        INY                             A:52 X:02 Y:EF P:67 SP:FB PPU:286,208 CYC:23745\n\
F39E  A9 29     LDA #$29                        A:52 X:02 Y:F0 P:E5 SP:FB PPU:292,208 CYC:23747\n\
F3A0  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:F0 P:65 SP:FB PPU:298,208 CYC:23749\n\
F3A3  20 2E FB  JSR $FB2E                       A:29 X:02 Y:F0 P:65 SP:FB PPU:310,208 CYC:23753\n\
FB2E  B8        CLV                             A:29 X:02 Y:F0 P:65 SP:F9 PPU:328,208 CYC:23759\n\
FB2F  18        CLC                             A:29 X:02 Y:F0 P:25 SP:F9 PPU:334,208 CYC:23761\n\
FB30  A9 42     LDA #$42                        A:29 X:02 Y:F0 P:24 SP:F9 PPU:340,208 CYC:23763\n\
FB32  60        RTS                             A:42 X:02 Y:F0 P:24 SP:F9 PPU:  5,209 CYC:23765\n\
F3A6  4F 47 06 *SRE $0647 = 29                  A:42 X:02 Y:F0 P:24 SP:FB PPU: 23,209 CYC:23771\n\
F3A9  EA        NOP                             A:56 X:02 Y:F0 P:25 SP:FB PPU: 41,209 CYC:23777\n\
F3AA  EA        NOP                             A:56 X:02 Y:F0 P:25 SP:FB PPU: 47,209 CYC:23779\n\
F3AB  EA        NOP                             A:56 X:02 Y:F0 P:25 SP:FB PPU: 53,209 CYC:23781\n\
F3AC  EA        NOP                             A:56 X:02 Y:F0 P:25 SP:FB PPU: 59,209 CYC:23783\n\
F3AD  20 33 FB  JSR $FB33                       A:56 X:02 Y:F0 P:25 SP:FB PPU: 65,209 CYC:23785\n\
FB33  70 40     BVS $FB75                       A:56 X:02 Y:F0 P:25 SP:F9 PPU: 83,209 CYC:23791\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:02 Y:F0 P:25 SP:F9 PPU: 89,209 CYC:23793\n\
FB37  30 3C     BMI $FB75                       A:56 X:02 Y:F0 P:25 SP:F9 PPU: 95,209 CYC:23795\n\
FB39  90 3A     BCC $FB75                       A:56 X:02 Y:F0 P:25 SP:F9 PPU:101,209 CYC:23797\n\
FB3B  C9 56     CMP #$56                        A:56 X:02 Y:F0 P:25 SP:F9 PPU:107,209 CYC:23799\n\
FB3D  D0 36     BNE $FB75                       A:56 X:02 Y:F0 P:27 SP:F9 PPU:113,209 CYC:23801\n\
FB3F  60        RTS                             A:56 X:02 Y:F0 P:27 SP:F9 PPU:119,209 CYC:23803\n\
F3B0  AD 47 06  LDA $0647 = 14                  A:56 X:02 Y:F0 P:27 SP:FB PPU:137,209 CYC:23809\n\
F3B3  C9 14     CMP #$14                        A:14 X:02 Y:F0 P:25 SP:FB PPU:149,209 CYC:23813\n\
F3B5  F0 02     BEQ $F3B9                       A:14 X:02 Y:F0 P:27 SP:FB PPU:155,209 CYC:23815\n\
F3B9  C8        INY                             A:14 X:02 Y:F0 P:27 SP:FB PPU:164,209 CYC:23818\n\
F3BA  A9 37     LDA #$37                        A:14 X:02 Y:F1 P:A5 SP:FB PPU:170,209 CYC:23820\n\
F3BC  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:F1 P:25 SP:FB PPU:176,209 CYC:23822\n\
F3BF  20 40 FB  JSR $FB40                       A:37 X:02 Y:F1 P:25 SP:FB PPU:188,209 CYC:23826\n\
FB40  24 01     BIT $01 = FF                    A:37 X:02 Y:F1 P:25 SP:F9 PPU:206,209 CYC:23832\n\
FB42  38        SEC                             A:37 X:02 Y:F1 P:E5 SP:F9 PPU:215,209 CYC:23835\n\
FB43  A9 75     LDA #$75                        A:37 X:02 Y:F1 P:E5 SP:F9 PPU:221,209 CYC:23837\n\
FB45  60        RTS                             A:75 X:02 Y:F1 P:65 SP:F9 PPU:227,209 CYC:23839\n\
F3C2  4F 47 06 *SRE $0647 = 37                  A:75 X:02 Y:F1 P:65 SP:FB PPU:245,209 CYC:23845\n\
F3C5  EA        NOP                             A:6E X:02 Y:F1 P:65 SP:FB PPU:263,209 CYC:23851\n\
F3C6  EA        NOP                             A:6E X:02 Y:F1 P:65 SP:FB PPU:269,209 CYC:23853\n\
F3C7  EA        NOP                             A:6E X:02 Y:F1 P:65 SP:FB PPU:275,209 CYC:23855\n\
F3C8  EA        NOP                             A:6E X:02 Y:F1 P:65 SP:FB PPU:281,209 CYC:23857\n\
F3C9  20 46 FB  JSR $FB46                       A:6E X:02 Y:F1 P:65 SP:FB PPU:287,209 CYC:23859\n\
FB46  50 2D     BVC $FB75                       A:6E X:02 Y:F1 P:65 SP:F9 PPU:305,209 CYC:23865\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:02 Y:F1 P:65 SP:F9 PPU:311,209 CYC:23867\n\
FB4A  30 29     BMI $FB75                       A:6E X:02 Y:F1 P:65 SP:F9 PPU:317,209 CYC:23869\n\
FB4C  90 27     BCC $FB75                       A:6E X:02 Y:F1 P:65 SP:F9 PPU:323,209 CYC:23871\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:02 Y:F1 P:65 SP:F9 PPU:329,209 CYC:23873\n\
FB50  D0 23     BNE $FB75                       A:6E X:02 Y:F1 P:67 SP:F9 PPU:335,209 CYC:23875\n\
FB52  60        RTS                             A:6E X:02 Y:F1 P:67 SP:F9 PPU:  0,210 CYC:23877\n\
F3CC  AD 47 06  LDA $0647 = 1B                  A:6E X:02 Y:F1 P:67 SP:FB PPU: 18,210 CYC:23883\n\
F3CF  C9 1B     CMP #$1B                        A:1B X:02 Y:F1 P:65 SP:FB PPU: 30,210 CYC:23887\n\
F3D1  F0 02     BEQ $F3D5                       A:1B X:02 Y:F1 P:67 SP:FB PPU: 36,210 CYC:23889\n\
F3D5  A9 A5     LDA #$A5                        A:1B X:02 Y:F1 P:67 SP:FB PPU: 45,210 CYC:23892\n\
F3D7  8D 47 06  STA $0647 = 1B                  A:A5 X:02 Y:F1 P:E5 SP:FB PPU: 51,210 CYC:23894\n\
F3DA  A9 48     LDA #$48                        A:A5 X:02 Y:F1 P:E5 SP:FB PPU: 63,210 CYC:23898\n\
F3DC  85 45     STA $45 = 48                    A:48 X:02 Y:F1 P:65 SP:FB PPU: 69,210 CYC:23900\n\
F3DE  A9 05     LDA #$05                        A:48 X:02 Y:F1 P:65 SP:FB PPU: 78,210 CYC:23903\n\
F3E0  85 46     STA $46 = 05                    A:05 X:02 Y:F1 P:65 SP:FB PPU: 84,210 CYC:23905\n\
F3E2  A0 FF     LDY #$FF                        A:05 X:02 Y:F1 P:65 SP:FB PPU: 93,210 CYC:23908\n\
F3E4  20 1D FB  JSR $FB1D                       A:05 X:02 Y:FF P:E5 SP:FB PPU: 99,210 CYC:23910\n\
FB1D  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:E5 SP:F9 PPU:117,210 CYC:23916\n\
FB1F  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU:126,210 CYC:23919\n\
FB20  A9 B3     LDA #$B3                        A:05 X:02 Y:FF P:E4 SP:F9 PPU:132,210 CYC:23921\n\
FB22  60        RTS                             A:B3 X:02 Y:FF P:E4 SP:F9 PPU:138,210 CYC:23923\n\
F3E7  53 45    *SRE ($45),Y = 0548 @ 0647 = A5  A:B3 X:02 Y:FF P:E4 SP:FB PPU:156,210 CYC:23929\n\
F3E9  EA        NOP                             A:E1 X:02 Y:FF P:E5 SP:FB PPU:180,210 CYC:23937\n\
F3EA  EA        NOP                             A:E1 X:02 Y:FF P:E5 SP:FB PPU:186,210 CYC:23939\n\
F3EB  08        PHP                             A:E1 X:02 Y:FF P:E5 SP:FB PPU:192,210 CYC:23941\n\
F3EC  48        PHA                             A:E1 X:02 Y:FF P:E5 SP:FA PPU:201,210 CYC:23944\n\
F3ED  A0 F2     LDY #$F2                        A:E1 X:02 Y:FF P:E5 SP:F9 PPU:210,210 CYC:23947\n\
F3EF  68        PLA                             A:E1 X:02 Y:F2 P:E5 SP:F9 PPU:216,210 CYC:23949\n\
F3F0  28        PLP                             A:E1 X:02 Y:F2 P:E5 SP:FA PPU:228,210 CYC:23953\n\
F3F1  20 23 FB  JSR $FB23                       A:E1 X:02 Y:F2 P:E5 SP:FB PPU:240,210 CYC:23957\n\
FB23  50 50     BVC $FB75                       A:E1 X:02 Y:F2 P:E5 SP:F9 PPU:258,210 CYC:23963\n\
FB25  90 4E     BCC $FB75                       A:E1 X:02 Y:F2 P:E5 SP:F9 PPU:264,210 CYC:23965\n\
FB27  10 4C     BPL $FB75                       A:E1 X:02 Y:F2 P:E5 SP:F9 PPU:270,210 CYC:23967\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:02 Y:F2 P:E5 SP:F9 PPU:276,210 CYC:23969\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:02 Y:F2 P:67 SP:F9 PPU:282,210 CYC:23971\n\
FB2D  60        RTS                             A:E1 X:02 Y:F2 P:67 SP:F9 PPU:288,210 CYC:23973\n\
F3F4  AD 47 06  LDA $0647 = 52                  A:E1 X:02 Y:F2 P:67 SP:FB PPU:306,210 CYC:23979\n\
F3F7  C9 52     CMP #$52                        A:52 X:02 Y:F2 P:65 SP:FB PPU:318,210 CYC:23983\n\
F3F9  F0 02     BEQ $F3FD                       A:52 X:02 Y:F2 P:67 SP:FB PPU:324,210 CYC:23985\n\
F3FD  A0 FF     LDY #$FF                        A:52 X:02 Y:F2 P:67 SP:FB PPU:333,210 CYC:23988\n\
F3FF  A9 29     LDA #$29                        A:52 X:02 Y:FF P:E5 SP:FB PPU:339,210 CYC:23990\n\
F401  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:FF P:65 SP:FB PPU:  4,211 CYC:23992\n\
F404  20 2E FB  JSR $FB2E                       A:29 X:02 Y:FF P:65 SP:FB PPU: 16,211 CYC:23996\n\
FB2E  B8        CLV                             A:29 X:02 Y:FF P:65 SP:F9 PPU: 34,211 CYC:24002\n\
FB2F  18        CLC                             A:29 X:02 Y:FF P:25 SP:F9 PPU: 40,211 CYC:24004\n\
FB30  A9 42     LDA #$42                        A:29 X:02 Y:FF P:24 SP:F9 PPU: 46,211 CYC:24006\n\
FB32  60        RTS                             A:42 X:02 Y:FF P:24 SP:F9 PPU: 52,211 CYC:24008\n\
F407  53 45    *SRE ($45),Y = 0548 @ 0647 = 29  A:42 X:02 Y:FF P:24 SP:FB PPU: 70,211 CYC:24014\n\
F409  EA        NOP                             A:56 X:02 Y:FF P:25 SP:FB PPU: 94,211 CYC:24022\n\
F40A  EA        NOP                             A:56 X:02 Y:FF P:25 SP:FB PPU:100,211 CYC:24024\n\
F40B  08        PHP                             A:56 X:02 Y:FF P:25 SP:FB PPU:106,211 CYC:24026\n\
F40C  48        PHA                             A:56 X:02 Y:FF P:25 SP:FA PPU:115,211 CYC:24029\n\
F40D  A0 F3     LDY #$F3                        A:56 X:02 Y:FF P:25 SP:F9 PPU:124,211 CYC:24032\n\
F40F  68        PLA                             A:56 X:02 Y:F3 P:A5 SP:F9 PPU:130,211 CYC:24034\n\
F410  28        PLP                             A:56 X:02 Y:F3 P:25 SP:FA PPU:142,211 CYC:24038\n\
F411  20 33 FB  JSR $FB33                       A:56 X:02 Y:F3 P:25 SP:FB PPU:154,211 CYC:24042\n\
FB33  70 40     BVS $FB75                       A:56 X:02 Y:F3 P:25 SP:F9 PPU:172,211 CYC:24048\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:02 Y:F3 P:25 SP:F9 PPU:178,211 CYC:24050\n\
FB37  30 3C     BMI $FB75                       A:56 X:02 Y:F3 P:25 SP:F9 PPU:184,211 CYC:24052\n\
FB39  90 3A     BCC $FB75                       A:56 X:02 Y:F3 P:25 SP:F9 PPU:190,211 CYC:24054\n\
FB3B  C9 56     CMP #$56                        A:56 X:02 Y:F3 P:25 SP:F9 PPU:196,211 CYC:24056\n\
FB3D  D0 36     BNE $FB75                       A:56 X:02 Y:F3 P:27 SP:F9 PPU:202,211 CYC:24058\n\
FB3F  60        RTS                             A:56 X:02 Y:F3 P:27 SP:F9 PPU:208,211 CYC:24060\n\
F414  AD 47 06  LDA $0647 = 14                  A:56 X:02 Y:F3 P:27 SP:FB PPU:226,211 CYC:24066\n\
F417  C9 14     CMP #$14                        A:14 X:02 Y:F3 P:25 SP:FB PPU:238,211 CYC:24070\n\
F419  F0 02     BEQ $F41D                       A:14 X:02 Y:F3 P:27 SP:FB PPU:244,211 CYC:24072\n\
F41D  A0 FF     LDY #$FF                        A:14 X:02 Y:F3 P:27 SP:FB PPU:253,211 CYC:24075\n\
F41F  A9 37     LDA #$37                        A:14 X:02 Y:FF P:A5 SP:FB PPU:259,211 CYC:24077\n\
F421  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:FF P:25 SP:FB PPU:265,211 CYC:24079\n\
F424  20 40 FB  JSR $FB40                       A:37 X:02 Y:FF P:25 SP:FB PPU:277,211 CYC:24083\n\
FB40  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU:295,211 CYC:24089\n\
FB42  38        SEC                             A:37 X:02 Y:FF P:E5 SP:F9 PPU:304,211 CYC:24092\n\
FB43  A9 75     LDA #$75                        A:37 X:02 Y:FF P:E5 SP:F9 PPU:310,211 CYC:24094\n\
FB45  60        RTS                             A:75 X:02 Y:FF P:65 SP:F9 PPU:316,211 CYC:24096\n\
F427  53 45    *SRE ($45),Y = 0548 @ 0647 = 37  A:75 X:02 Y:FF P:65 SP:FB PPU:334,211 CYC:24102\n\
F429  EA        NOP                             A:6E X:02 Y:FF P:65 SP:FB PPU: 17,212 CYC:24110\n\
F42A  EA        NOP                             A:6E X:02 Y:FF P:65 SP:FB PPU: 23,212 CYC:24112\n\
F42B  08        PHP                             A:6E X:02 Y:FF P:65 SP:FB PPU: 29,212 CYC:24114\n\
F42C  48        PHA                             A:6E X:02 Y:FF P:65 SP:FA PPU: 38,212 CYC:24117\n\
F42D  A0 F4     LDY #$F4                        A:6E X:02 Y:FF P:65 SP:F9 PPU: 47,212 CYC:24120\n\
F42F  68        PLA                             A:6E X:02 Y:F4 P:E5 SP:F9 PPU: 53,212 CYC:24122\n\
F430  28        PLP                             A:6E X:02 Y:F4 P:65 SP:FA PPU: 65,212 CYC:24126\n\
F431  20 46 FB  JSR $FB46                       A:6E X:02 Y:F4 P:65 SP:FB PPU: 77,212 CYC:24130\n\
FB46  50 2D     BVC $FB75                       A:6E X:02 Y:F4 P:65 SP:F9 PPU: 95,212 CYC:24136\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:02 Y:F4 P:65 SP:F9 PPU:101,212 CYC:24138\n\
FB4A  30 29     BMI $FB75                       A:6E X:02 Y:F4 P:65 SP:F9 PPU:107,212 CYC:24140\n\
FB4C  90 27     BCC $FB75                       A:6E X:02 Y:F4 P:65 SP:F9 PPU:113,212 CYC:24142\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:02 Y:F4 P:65 SP:F9 PPU:119,212 CYC:24144\n\
FB50  D0 23     BNE $FB75                       A:6E X:02 Y:F4 P:67 SP:F9 PPU:125,212 CYC:24146\n\
FB52  60        RTS                             A:6E X:02 Y:F4 P:67 SP:F9 PPU:131,212 CYC:24148\n\
F434  AD 47 06  LDA $0647 = 1B                  A:6E X:02 Y:F4 P:67 SP:FB PPU:149,212 CYC:24154\n\
F437  C9 1B     CMP #$1B                        A:1B X:02 Y:F4 P:65 SP:FB PPU:161,212 CYC:24158\n\
F439  F0 02     BEQ $F43D                       A:1B X:02 Y:F4 P:67 SP:FB PPU:167,212 CYC:24160\n\
F43D  A0 F5     LDY #$F5                        A:1B X:02 Y:F4 P:67 SP:FB PPU:176,212 CYC:24163\n\
F43F  A2 FF     LDX #$FF                        A:1B X:02 Y:F5 P:E5 SP:FB PPU:182,212 CYC:24165\n\
F441  A9 A5     LDA #$A5                        A:1B X:FF Y:F5 P:E5 SP:FB PPU:188,212 CYC:24167\n\
F443  85 47     STA $47 = 1B                    A:A5 X:FF Y:F5 P:E5 SP:FB PPU:194,212 CYC:24169\n\
F445  20 1D FB  JSR $FB1D                       A:A5 X:FF Y:F5 P:E5 SP:FB PPU:203,212 CYC:24172\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:FF Y:F5 P:E5 SP:F9 PPU:221,212 CYC:24178\n\
FB1F  18        CLC                             A:A5 X:FF Y:F5 P:E5 SP:F9 PPU:230,212 CYC:24181\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:FF Y:F5 P:E4 SP:F9 PPU:236,212 CYC:24183\n\
FB22  60        RTS                             A:B3 X:FF Y:F5 P:E4 SP:F9 PPU:242,212 CYC:24185\n\
F448  57 48    *SRE $48,X @ 47 = A5             A:B3 X:FF Y:F5 P:E4 SP:FB PPU:260,212 CYC:24191\n\
F44A  EA        NOP                             A:E1 X:FF Y:F5 P:E5 SP:FB PPU:278,212 CYC:24197\n\
F44B  EA        NOP                             A:E1 X:FF Y:F5 P:E5 SP:FB PPU:284,212 CYC:24199\n\
F44C  EA        NOP                             A:E1 X:FF Y:F5 P:E5 SP:FB PPU:290,212 CYC:24201\n\
F44D  EA        NOP                             A:E1 X:FF Y:F5 P:E5 SP:FB PPU:296,212 CYC:24203\n\
F44E  20 23 FB  JSR $FB23                       A:E1 X:FF Y:F5 P:E5 SP:FB PPU:302,212 CYC:24205\n\
FB23  50 50     BVC $FB75                       A:E1 X:FF Y:F5 P:E5 SP:F9 PPU:320,212 CYC:24211\n\
FB25  90 4E     BCC $FB75                       A:E1 X:FF Y:F5 P:E5 SP:F9 PPU:326,212 CYC:24213\n\
FB27  10 4C     BPL $FB75                       A:E1 X:FF Y:F5 P:E5 SP:F9 PPU:332,212 CYC:24215\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:FF Y:F5 P:E5 SP:F9 PPU:338,212 CYC:24217\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:FF Y:F5 P:67 SP:F9 PPU:  3,213 CYC:24219\n\
FB2D  60        RTS                             A:E1 X:FF Y:F5 P:67 SP:F9 PPU:  9,213 CYC:24221\n\
F451  A5 47     LDA $47 = 52                    A:E1 X:FF Y:F5 P:67 SP:FB PPU: 27,213 CYC:24227\n\
F453  C9 52     CMP #$52                        A:52 X:FF Y:F5 P:65 SP:FB PPU: 36,213 CYC:24230\n\
F455  F0 02     BEQ $F459                       A:52 X:FF Y:F5 P:67 SP:FB PPU: 42,213 CYC:24232\n\
F459  C8        INY                             A:52 X:FF Y:F5 P:67 SP:FB PPU: 51,213 CYC:24235\n\
F45A  A9 29     LDA #$29                        A:52 X:FF Y:F6 P:E5 SP:FB PPU: 57,213 CYC:24237\n\
F45C  85 47     STA $47 = 52                    A:29 X:FF Y:F6 P:65 SP:FB PPU: 63,213 CYC:24239\n\
F45E  20 2E FB  JSR $FB2E                       A:29 X:FF Y:F6 P:65 SP:FB PPU: 72,213 CYC:24242\n\
FB2E  B8        CLV                             A:29 X:FF Y:F6 P:65 SP:F9 PPU: 90,213 CYC:24248\n\
FB2F  18        CLC                             A:29 X:FF Y:F6 P:25 SP:F9 PPU: 96,213 CYC:24250\n\
FB30  A9 42     LDA #$42                        A:29 X:FF Y:F6 P:24 SP:F9 PPU:102,213 CYC:24252\n\
FB32  60        RTS                             A:42 X:FF Y:F6 P:24 SP:F9 PPU:108,213 CYC:24254\n\
F461  57 48    *SRE $48,X @ 47 = 29             A:42 X:FF Y:F6 P:24 SP:FB PPU:126,213 CYC:24260\n\
F463  EA        NOP                             A:56 X:FF Y:F6 P:25 SP:FB PPU:144,213 CYC:24266\n\
F464  EA        NOP                             A:56 X:FF Y:F6 P:25 SP:FB PPU:150,213 CYC:24268\n\
F465  EA        NOP                             A:56 X:FF Y:F6 P:25 SP:FB PPU:156,213 CYC:24270\n\
F466  EA        NOP                             A:56 X:FF Y:F6 P:25 SP:FB PPU:162,213 CYC:24272\n\
F467  20 33 FB  JSR $FB33                       A:56 X:FF Y:F6 P:25 SP:FB PPU:168,213 CYC:24274\n\
FB33  70 40     BVS $FB75                       A:56 X:FF Y:F6 P:25 SP:F9 PPU:186,213 CYC:24280\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:FF Y:F6 P:25 SP:F9 PPU:192,213 CYC:24282\n\
FB37  30 3C     BMI $FB75                       A:56 X:FF Y:F6 P:25 SP:F9 PPU:198,213 CYC:24284\n\
FB39  90 3A     BCC $FB75                       A:56 X:FF Y:F6 P:25 SP:F9 PPU:204,213 CYC:24286\n\
FB3B  C9 56     CMP #$56                        A:56 X:FF Y:F6 P:25 SP:F9 PPU:210,213 CYC:24288\n\
FB3D  D0 36     BNE $FB75                       A:56 X:FF Y:F6 P:27 SP:F9 PPU:216,213 CYC:24290\n\
FB3F  60        RTS                             A:56 X:FF Y:F6 P:27 SP:F9 PPU:222,213 CYC:24292\n\
F46A  A5 47     LDA $47 = 14                    A:56 X:FF Y:F6 P:27 SP:FB PPU:240,213 CYC:24298\n\
F46C  C9 14     CMP #$14                        A:14 X:FF Y:F6 P:25 SP:FB PPU:249,213 CYC:24301\n\
F46E  F0 02     BEQ $F472                       A:14 X:FF Y:F6 P:27 SP:FB PPU:255,213 CYC:24303\n\
F472  C8        INY                             A:14 X:FF Y:F6 P:27 SP:FB PPU:264,213 CYC:24306\n\
F473  A9 37     LDA #$37                        A:14 X:FF Y:F7 P:A5 SP:FB PPU:270,213 CYC:24308\n\
F475  85 47     STA $47 = 14                    A:37 X:FF Y:F7 P:25 SP:FB PPU:276,213 CYC:24310\n\
F477  20 40 FB  JSR $FB40                       A:37 X:FF Y:F7 P:25 SP:FB PPU:285,213 CYC:24313\n\
FB40  24 01     BIT $01 = FF                    A:37 X:FF Y:F7 P:25 SP:F9 PPU:303,213 CYC:24319\n\
FB42  38        SEC                             A:37 X:FF Y:F7 P:E5 SP:F9 PPU:312,213 CYC:24322\n\
FB43  A9 75     LDA #$75                        A:37 X:FF Y:F7 P:E5 SP:F9 PPU:318,213 CYC:24324\n\
FB45  60        RTS                             A:75 X:FF Y:F7 P:65 SP:F9 PPU:324,213 CYC:24326\n\
F47A  57 48    *SRE $48,X @ 47 = 37             A:75 X:FF Y:F7 P:65 SP:FB PPU:  1,214 CYC:24332\n\
F47C  EA        NOP                             A:6E X:FF Y:F7 P:65 SP:FB PPU: 19,214 CYC:24338\n\
F47D  EA        NOP                             A:6E X:FF Y:F7 P:65 SP:FB PPU: 25,214 CYC:24340\n\
F47E  EA        NOP                             A:6E X:FF Y:F7 P:65 SP:FB PPU: 31,214 CYC:24342\n\
F47F  EA        NOP                             A:6E X:FF Y:F7 P:65 SP:FB PPU: 37,214 CYC:24344\n\
F480  20 46 FB  JSR $FB46                       A:6E X:FF Y:F7 P:65 SP:FB PPU: 43,214 CYC:24346\n\
FB46  50 2D     BVC $FB75                       A:6E X:FF Y:F7 P:65 SP:F9 PPU: 61,214 CYC:24352\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:FF Y:F7 P:65 SP:F9 PPU: 67,214 CYC:24354\n\
FB4A  30 29     BMI $FB75                       A:6E X:FF Y:F7 P:65 SP:F9 PPU: 73,214 CYC:24356\n\
FB4C  90 27     BCC $FB75                       A:6E X:FF Y:F7 P:65 SP:F9 PPU: 79,214 CYC:24358\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:FF Y:F7 P:65 SP:F9 PPU: 85,214 CYC:24360\n\
FB50  D0 23     BNE $FB75                       A:6E X:FF Y:F7 P:67 SP:F9 PPU: 91,214 CYC:24362\n\
FB52  60        RTS                             A:6E X:FF Y:F7 P:67 SP:F9 PPU: 97,214 CYC:24364\n\
F483  A5 47     LDA $47 = 1B                    A:6E X:FF Y:F7 P:67 SP:FB PPU:115,214 CYC:24370\n\
F485  C9 1B     CMP #$1B                        A:1B X:FF Y:F7 P:65 SP:FB PPU:124,214 CYC:24373\n\
F487  F0 02     BEQ $F48B                       A:1B X:FF Y:F7 P:67 SP:FB PPU:130,214 CYC:24375\n\
F48B  A9 A5     LDA #$A5                        A:1B X:FF Y:F7 P:67 SP:FB PPU:139,214 CYC:24378\n\
F48D  8D 47 06  STA $0647 = 1B                  A:A5 X:FF Y:F7 P:E5 SP:FB PPU:145,214 CYC:24380\n\
F490  A0 FF     LDY #$FF                        A:A5 X:FF Y:F7 P:E5 SP:FB PPU:157,214 CYC:24384\n\
F492  20 1D FB  JSR $FB1D                       A:A5 X:FF Y:FF P:E5 SP:FB PPU:163,214 CYC:24386\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:FF Y:FF P:E5 SP:F9 PPU:181,214 CYC:24392\n\
FB1F  18        CLC                             A:A5 X:FF Y:FF P:E5 SP:F9 PPU:190,214 CYC:24395\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:FF Y:FF P:E4 SP:F9 PPU:196,214 CYC:24397\n\
FB22  60        RTS                             A:B3 X:FF Y:FF P:E4 SP:F9 PPU:202,214 CYC:24399\n\
F495  5B 48 05 *SRE $0548,Y @ 0647 = A5         A:B3 X:FF Y:FF P:E4 SP:FB PPU:220,214 CYC:24405\n\
F498  EA        NOP                             A:E1 X:FF Y:FF P:E5 SP:FB PPU:241,214 CYC:24412\n\
F499  EA        NOP                             A:E1 X:FF Y:FF P:E5 SP:FB PPU:247,214 CYC:24414\n\
F49A  08        PHP                             A:E1 X:FF Y:FF P:E5 SP:FB PPU:253,214 CYC:24416\n\
F49B  48        PHA                             A:E1 X:FF Y:FF P:E5 SP:FA PPU:262,214 CYC:24419\n\
F49C  A0 F8     LDY #$F8                        A:E1 X:FF Y:FF P:E5 SP:F9 PPU:271,214 CYC:24422\n\
F49E  68        PLA                             A:E1 X:FF Y:F8 P:E5 SP:F9 PPU:277,214 CYC:24424\n\
F49F  28        PLP                             A:E1 X:FF Y:F8 P:E5 SP:FA PPU:289,214 CYC:24428\n\
F4A0  20 23 FB  JSR $FB23                       A:E1 X:FF Y:F8 P:E5 SP:FB PPU:301,214 CYC:24432\n\
FB23  50 50     BVC $FB75                       A:E1 X:FF Y:F8 P:E5 SP:F9 PPU:319,214 CYC:24438\n\
FB25  90 4E     BCC $FB75                       A:E1 X:FF Y:F8 P:E5 SP:F9 PPU:325,214 CYC:24440\n\
FB27  10 4C     BPL $FB75                       A:E1 X:FF Y:F8 P:E5 SP:F9 PPU:331,214 CYC:24442\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:FF Y:F8 P:E5 SP:F9 PPU:337,214 CYC:24444\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:FF Y:F8 P:67 SP:F9 PPU:  2,215 CYC:24446\n\
FB2D  60        RTS                             A:E1 X:FF Y:F8 P:67 SP:F9 PPU:  8,215 CYC:24448\n\
F4A3  AD 47 06  LDA $0647 = 52                  A:E1 X:FF Y:F8 P:67 SP:FB PPU: 26,215 CYC:24454\n\
F4A6  C9 52     CMP #$52                        A:52 X:FF Y:F8 P:65 SP:FB PPU: 38,215 CYC:24458\n\
F4A8  F0 02     BEQ $F4AC                       A:52 X:FF Y:F8 P:67 SP:FB PPU: 44,215 CYC:24460\n\
F4AC  A0 FF     LDY #$FF                        A:52 X:FF Y:F8 P:67 SP:FB PPU: 53,215 CYC:24463\n\
F4AE  A9 29     LDA #$29                        A:52 X:FF Y:FF P:E5 SP:FB PPU: 59,215 CYC:24465\n\
F4B0  8D 47 06  STA $0647 = 52                  A:29 X:FF Y:FF P:65 SP:FB PPU: 65,215 CYC:24467\n\
F4B3  20 2E FB  JSR $FB2E                       A:29 X:FF Y:FF P:65 SP:FB PPU: 77,215 CYC:24471\n\
FB2E  B8        CLV                             A:29 X:FF Y:FF P:65 SP:F9 PPU: 95,215 CYC:24477\n\
FB2F  18        CLC                             A:29 X:FF Y:FF P:25 SP:F9 PPU:101,215 CYC:24479\n\
FB30  A9 42     LDA #$42                        A:29 X:FF Y:FF P:24 SP:F9 PPU:107,215 CYC:24481\n\
FB32  60        RTS                             A:42 X:FF Y:FF P:24 SP:F9 PPU:113,215 CYC:24483\n\
F4B6  5B 48 05 *SRE $0548,Y @ 0647 = 29         A:42 X:FF Y:FF P:24 SP:FB PPU:131,215 CYC:24489\n\
F4B9  EA        NOP                             A:56 X:FF Y:FF P:25 SP:FB PPU:152,215 CYC:24496\n\
F4BA  EA        NOP                             A:56 X:FF Y:FF P:25 SP:FB PPU:158,215 CYC:24498\n\
F4BB  08        PHP                             A:56 X:FF Y:FF P:25 SP:FB PPU:164,215 CYC:24500\n\
F4BC  48        PHA                             A:56 X:FF Y:FF P:25 SP:FA PPU:173,215 CYC:24503\n\
F4BD  A0 F9     LDY #$F9                        A:56 X:FF Y:FF P:25 SP:F9 PPU:182,215 CYC:24506\n\
F4BF  68        PLA                             A:56 X:FF Y:F9 P:A5 SP:F9 PPU:188,215 CYC:24508\n\
F4C0  28        PLP                             A:56 X:FF Y:F9 P:25 SP:FA PPU:200,215 CYC:24512\n\
F4C1  20 33 FB  JSR $FB33                       A:56 X:FF Y:F9 P:25 SP:FB PPU:212,215 CYC:24516\n\
FB33  70 40     BVS $FB75                       A:56 X:FF Y:F9 P:25 SP:F9 PPU:230,215 CYC:24522\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:FF Y:F9 P:25 SP:F9 PPU:236,215 CYC:24524\n\
FB37  30 3C     BMI $FB75                       A:56 X:FF Y:F9 P:25 SP:F9 PPU:242,215 CYC:24526\n\
FB39  90 3A     BCC $FB75                       A:56 X:FF Y:F9 P:25 SP:F9 PPU:248,215 CYC:24528\n\
FB3B  C9 56     CMP #$56                        A:56 X:FF Y:F9 P:25 SP:F9 PPU:254,215 CYC:24530\n\
FB3D  D0 36     BNE $FB75                       A:56 X:FF Y:F9 P:27 SP:F9 PPU:260,215 CYC:24532\n\
FB3F  60        RTS                             A:56 X:FF Y:F9 P:27 SP:F9 PPU:266,215 CYC:24534\n\
F4C4  AD 47 06  LDA $0647 = 14                  A:56 X:FF Y:F9 P:27 SP:FB PPU:284,215 CYC:24540\n\
F4C7  C9 14     CMP #$14                        A:14 X:FF Y:F9 P:25 SP:FB PPU:296,215 CYC:24544\n\
F4C9  F0 02     BEQ $F4CD                       A:14 X:FF Y:F9 P:27 SP:FB PPU:302,215 CYC:24546\n\
F4CD  A0 FF     LDY #$FF                        A:14 X:FF Y:F9 P:27 SP:FB PPU:311,215 CYC:24549\n\
F4CF  A9 37     LDA #$37                        A:14 X:FF Y:FF P:A5 SP:FB PPU:317,215 CYC:24551\n\
F4D1  8D 47 06  STA $0647 = 14                  A:37 X:FF Y:FF P:25 SP:FB PPU:323,215 CYC:24553\n\
F4D4  20 40 FB  JSR $FB40                       A:37 X:FF Y:FF P:25 SP:FB PPU:335,215 CYC:24557\n\
FB40  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU: 12,216 CYC:24563\n\
FB42  38        SEC                             A:37 X:FF Y:FF P:E5 SP:F9 PPU: 21,216 CYC:24566\n\
FB43  A9 75     LDA #$75                        A:37 X:FF Y:FF P:E5 SP:F9 PPU: 27,216 CYC:24568\n\
FB45  60        RTS                             A:75 X:FF Y:FF P:65 SP:F9 PPU: 33,216 CYC:24570\n\
F4D7  5B 48 05 *SRE $0548,Y @ 0647 = 37         A:75 X:FF Y:FF P:65 SP:FB PPU: 51,216 CYC:24576\n\
F4DA  EA        NOP                             A:6E X:FF Y:FF P:65 SP:FB PPU: 72,216 CYC:24583\n\
F4DB  EA        NOP                             A:6E X:FF Y:FF P:65 SP:FB PPU: 78,216 CYC:24585\n\
F4DC  08        PHP                             A:6E X:FF Y:FF P:65 SP:FB PPU: 84,216 CYC:24587\n\
F4DD  48        PHA                             A:6E X:FF Y:FF P:65 SP:FA PPU: 93,216 CYC:24590\n\
F4DE  A0 FA     LDY #$FA                        A:6E X:FF Y:FF P:65 SP:F9 PPU:102,216 CYC:24593\n\
F4E0  68        PLA                             A:6E X:FF Y:FA P:E5 SP:F9 PPU:108,216 CYC:24595\n\
F4E1  28        PLP                             A:6E X:FF Y:FA P:65 SP:FA PPU:120,216 CYC:24599\n\
F4E2  20 46 FB  JSR $FB46                       A:6E X:FF Y:FA P:65 SP:FB PPU:132,216 CYC:24603\n\
FB46  50 2D     BVC $FB75                       A:6E X:FF Y:FA P:65 SP:F9 PPU:150,216 CYC:24609\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:FF Y:FA P:65 SP:F9 PPU:156,216 CYC:24611\n\
FB4A  30 29     BMI $FB75                       A:6E X:FF Y:FA P:65 SP:F9 PPU:162,216 CYC:24613\n\
FB4C  90 27     BCC $FB75                       A:6E X:FF Y:FA P:65 SP:F9 PPU:168,216 CYC:24615\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:FF Y:FA P:65 SP:F9 PPU:174,216 CYC:24617\n\
FB50  D0 23     BNE $FB75                       A:6E X:FF Y:FA P:67 SP:F9 PPU:180,216 CYC:24619\n\
FB52  60        RTS                             A:6E X:FF Y:FA P:67 SP:F9 PPU:186,216 CYC:24621\n\
F4E5  AD 47 06  LDA $0647 = 1B                  A:6E X:FF Y:FA P:67 SP:FB PPU:204,216 CYC:24627\n\
F4E8  C9 1B     CMP #$1B                        A:1B X:FF Y:FA P:65 SP:FB PPU:216,216 CYC:24631\n\
F4EA  F0 02     BEQ $F4EE                       A:1B X:FF Y:FA P:67 SP:FB PPU:222,216 CYC:24633\n\
F4EE  A0 FB     LDY #$FB                        A:1B X:FF Y:FA P:67 SP:FB PPU:231,216 CYC:24636\n\
F4F0  A2 FF     LDX #$FF                        A:1B X:FF Y:FB P:E5 SP:FB PPU:237,216 CYC:24638\n\
F4F2  A9 A5     LDA #$A5                        A:1B X:FF Y:FB P:E5 SP:FB PPU:243,216 CYC:24640\n\
F4F4  8D 47 06  STA $0647 = 1B                  A:A5 X:FF Y:FB P:E5 SP:FB PPU:249,216 CYC:24642\n\
F4F7  20 1D FB  JSR $FB1D                       A:A5 X:FF Y:FB P:E5 SP:FB PPU:261,216 CYC:24646\n\
FB1D  24 01     BIT $01 = FF                    A:A5 X:FF Y:FB P:E5 SP:F9 PPU:279,216 CYC:24652\n\
FB1F  18        CLC                             A:A5 X:FF Y:FB P:E5 SP:F9 PPU:288,216 CYC:24655\n\
FB20  A9 B3     LDA #$B3                        A:A5 X:FF Y:FB P:E4 SP:F9 PPU:294,216 CYC:24657\n\
FB22  60        RTS                             A:B3 X:FF Y:FB P:E4 SP:F9 PPU:300,216 CYC:24659\n\
F4FA  5F 48 05 *SRE $0548,X @ 0647 = A5         A:B3 X:FF Y:FB P:E4 SP:FB PPU:318,216 CYC:24665\n\
F4FD  EA        NOP                             A:E1 X:FF Y:FB P:E5 SP:FB PPU:339,216 CYC:24672\n\
F4FE  EA        NOP                             A:E1 X:FF Y:FB P:E5 SP:FB PPU:  4,217 CYC:24674\n\
F4FF  EA        NOP                             A:E1 X:FF Y:FB P:E5 SP:FB PPU: 10,217 CYC:24676\n\
F500  EA        NOP                             A:E1 X:FF Y:FB P:E5 SP:FB PPU: 16,217 CYC:24678\n\
F501  20 23 FB  JSR $FB23                       A:E1 X:FF Y:FB P:E5 SP:FB PPU: 22,217 CYC:24680\n\
FB23  50 50     BVC $FB75                       A:E1 X:FF Y:FB P:E5 SP:F9 PPU: 40,217 CYC:24686\n\
FB25  90 4E     BCC $FB75                       A:E1 X:FF Y:FB P:E5 SP:F9 PPU: 46,217 CYC:24688\n\
FB27  10 4C     BPL $FB75                       A:E1 X:FF Y:FB P:E5 SP:F9 PPU: 52,217 CYC:24690\n\
FB29  C9 E1     CMP #$E1                        A:E1 X:FF Y:FB P:E5 SP:F9 PPU: 58,217 CYC:24692\n\
FB2B  D0 48     BNE $FB75                       A:E1 X:FF Y:FB P:67 SP:F9 PPU: 64,217 CYC:24694\n\
FB2D  60        RTS                             A:E1 X:FF Y:FB P:67 SP:F9 PPU: 70,217 CYC:24696\n\
F504  AD 47 06  LDA $0647 = 52                  A:E1 X:FF Y:FB P:67 SP:FB PPU: 88,217 CYC:24702\n\
F507  C9 52     CMP #$52                        A:52 X:FF Y:FB P:65 SP:FB PPU:100,217 CYC:24706\n\
F509  F0 02     BEQ $F50D                       A:52 X:FF Y:FB P:67 SP:FB PPU:106,217 CYC:24708\n\
F50D  C8        INY                             A:52 X:FF Y:FB P:67 SP:FB PPU:115,217 CYC:24711\n\
F50E  A9 29     LDA #$29                        A:52 X:FF Y:FC P:E5 SP:FB PPU:121,217 CYC:24713\n\
F510  8D 47 06  STA $0647 = 52                  A:29 X:FF Y:FC P:65 SP:FB PPU:127,217 CYC:24715\n\
F513  20 2E FB  JSR $FB2E                       A:29 X:FF Y:FC P:65 SP:FB PPU:139,217 CYC:24719\n\
FB2E  B8        CLV                             A:29 X:FF Y:FC P:65 SP:F9 PPU:157,217 CYC:24725\n\
FB2F  18        CLC                             A:29 X:FF Y:FC P:25 SP:F9 PPU:163,217 CYC:24727\n\
FB30  A9 42     LDA #$42                        A:29 X:FF Y:FC P:24 SP:F9 PPU:169,217 CYC:24729\n\
FB32  60        RTS                             A:42 X:FF Y:FC P:24 SP:F9 PPU:175,217 CYC:24731\n\
F516  5F 48 05 *SRE $0548,X @ 0647 = 29         A:42 X:FF Y:FC P:24 SP:FB PPU:193,217 CYC:24737\n\
F519  EA        NOP                             A:56 X:FF Y:FC P:25 SP:FB PPU:214,217 CYC:24744\n\
F51A  EA        NOP                             A:56 X:FF Y:FC P:25 SP:FB PPU:220,217 CYC:24746\n\
F51B  EA        NOP                             A:56 X:FF Y:FC P:25 SP:FB PPU:226,217 CYC:24748\n\
F51C  EA        NOP                             A:56 X:FF Y:FC P:25 SP:FB PPU:232,217 CYC:24750\n\
F51D  20 33 FB  JSR $FB33                       A:56 X:FF Y:FC P:25 SP:FB PPU:238,217 CYC:24752\n\
FB33  70 40     BVS $FB75                       A:56 X:FF Y:FC P:25 SP:F9 PPU:256,217 CYC:24758\n\
FB35  F0 3E     BEQ $FB75                       A:56 X:FF Y:FC P:25 SP:F9 PPU:262,217 CYC:24760\n\
FB37  30 3C     BMI $FB75                       A:56 X:FF Y:FC P:25 SP:F9 PPU:268,217 CYC:24762\n\
FB39  90 3A     BCC $FB75                       A:56 X:FF Y:FC P:25 SP:F9 PPU:274,217 CYC:24764\n\
FB3B  C9 56     CMP #$56                        A:56 X:FF Y:FC P:25 SP:F9 PPU:280,217 CYC:24766\n\
FB3D  D0 36     BNE $FB75                       A:56 X:FF Y:FC P:27 SP:F9 PPU:286,217 CYC:24768\n\
FB3F  60        RTS                             A:56 X:FF Y:FC P:27 SP:F9 PPU:292,217 CYC:24770\n\
F520  AD 47 06  LDA $0647 = 14                  A:56 X:FF Y:FC P:27 SP:FB PPU:310,217 CYC:24776\n\
F523  C9 14     CMP #$14                        A:14 X:FF Y:FC P:25 SP:FB PPU:322,217 CYC:24780\n\
F525  F0 02     BEQ $F529                       A:14 X:FF Y:FC P:27 SP:FB PPU:328,217 CYC:24782\n\
F529  C8        INY                             A:14 X:FF Y:FC P:27 SP:FB PPU:337,217 CYC:24785\n\
F52A  A9 37     LDA #$37                        A:14 X:FF Y:FD P:A5 SP:FB PPU:  2,218 CYC:24787\n\
F52C  8D 47 06  STA $0647 = 14                  A:37 X:FF Y:FD P:25 SP:FB PPU:  8,218 CYC:24789\n\
F52F  20 40 FB  JSR $FB40                       A:37 X:FF Y:FD P:25 SP:FB PPU: 20,218 CYC:24793\n\
FB40  24 01     BIT $01 = FF                    A:37 X:FF Y:FD P:25 SP:F9 PPU: 38,218 CYC:24799\n\
FB42  38        SEC                             A:37 X:FF Y:FD P:E5 SP:F9 PPU: 47,218 CYC:24802\n\
FB43  A9 75     LDA #$75                        A:37 X:FF Y:FD P:E5 SP:F9 PPU: 53,218 CYC:24804\n\
FB45  60        RTS                             A:75 X:FF Y:FD P:65 SP:F9 PPU: 59,218 CYC:24806\n\
F532  5F 48 05 *SRE $0548,X @ 0647 = 37         A:75 X:FF Y:FD P:65 SP:FB PPU: 77,218 CYC:24812\n\
F535  EA        NOP                             A:6E X:FF Y:FD P:65 SP:FB PPU: 98,218 CYC:24819\n\
F536  EA        NOP                             A:6E X:FF Y:FD P:65 SP:FB PPU:104,218 CYC:24821\n\
F537  EA        NOP                             A:6E X:FF Y:FD P:65 SP:FB PPU:110,218 CYC:24823\n\
F538  EA        NOP                             A:6E X:FF Y:FD P:65 SP:FB PPU:116,218 CYC:24825\n\
F539  20 46 FB  JSR $FB46                       A:6E X:FF Y:FD P:65 SP:FB PPU:122,218 CYC:24827\n\
FB46  50 2D     BVC $FB75                       A:6E X:FF Y:FD P:65 SP:F9 PPU:140,218 CYC:24833\n\
FB48  F0 2B     BEQ $FB75                       A:6E X:FF Y:FD P:65 SP:F9 PPU:146,218 CYC:24835\n\
FB4A  30 29     BMI $FB75                       A:6E X:FF Y:FD P:65 SP:F9 PPU:152,218 CYC:24837\n\
FB4C  90 27     BCC $FB75                       A:6E X:FF Y:FD P:65 SP:F9 PPU:158,218 CYC:24839\n\
FB4E  C9 6E     CMP #$6E                        A:6E X:FF Y:FD P:65 SP:F9 PPU:164,218 CYC:24841\n\
FB50  D0 23     BNE $FB75                       A:6E X:FF Y:FD P:67 SP:F9 PPU:170,218 CYC:24843\n\
FB52  60        RTS                             A:6E X:FF Y:FD P:67 SP:F9 PPU:176,218 CYC:24845\n\
F53C  AD 47 06  LDA $0647 = 1B                  A:6E X:FF Y:FD P:67 SP:FB PPU:194,218 CYC:24851\n\
F53F  C9 1B     CMP #$1B                        A:1B X:FF Y:FD P:65 SP:FB PPU:206,218 CYC:24855\n\
F541  F0 02     BEQ $F545                       A:1B X:FF Y:FD P:67 SP:FB PPU:212,218 CYC:24857\n\
F545  60        RTS                             A:1B X:FF Y:FD P:67 SP:FB PPU:221,218 CYC:24860\n\
C64A  A5 00     LDA $00 = 00                    A:1B X:FF Y:FD P:67 SP:FD PPU:239,218 CYC:24866\n\
C64C  85 11     STA $11 = 00                    A:00 X:FF Y:FD P:67 SP:FD PPU:248,218 CYC:24869\n\
C64E  A9 00     LDA #$00                        A:00 X:FF Y:FD P:67 SP:FD PPU:257,218 CYC:24872\n\
C650  85 00     STA $00 = 00                    A:00 X:FF Y:FD P:67 SP:FD PPU:263,218 CYC:24874\n\
C652  20 46 F5  JSR $F546                       A:00 X:FF Y:FD P:67 SP:FD PPU:272,218 CYC:24877\n\
F546  A9 FF     LDA #$FF                        A:00 X:FF Y:FD P:67 SP:FB PPU:290,218 CYC:24883\n\
F548  85 01     STA $01 = FF                    A:FF X:FF Y:FD P:E5 SP:FB PPU:296,218 CYC:24885\n\
F54A  A0 01     LDY #$01                        A:FF X:FF Y:FD P:E5 SP:FB PPU:305,218 CYC:24888\n\
F54C  A2 02     LDX #$02                        A:FF X:FF Y:01 P:65 SP:FB PPU:311,218 CYC:24890\n\
F54E  A9 47     LDA #$47                        A:FF X:02 Y:01 P:65 SP:FB PPU:317,218 CYC:24892\n\
F550  85 47     STA $47 = 1B                    A:47 X:02 Y:01 P:65 SP:FB PPU:323,218 CYC:24894\n\
F552  A9 06     LDA #$06                        A:47 X:02 Y:01 P:65 SP:FB PPU:332,218 CYC:24897\n\
F554  85 48     STA $48 = 06                    A:06 X:02 Y:01 P:65 SP:FB PPU:338,218 CYC:24899\n\
F556  A9 A5     LDA #$A5                        A:06 X:02 Y:01 P:65 SP:FB PPU:  6,219 CYC:24902\n\
F558  8D 47 06  STA $0647 = 1B                  A:A5 X:02 Y:01 P:E5 SP:FB PPU: 12,219 CYC:24904\n\
F55B  20 E9 FA  JSR $FAE9                       A:A5 X:02 Y:01 P:E5 SP:FB PPU: 24,219 CYC:24908\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:02 Y:01 P:E5 SP:F9 PPU: 42,219 CYC:24914\n\
FAEB  18        CLC                             A:A5 X:02 Y:01 P:E5 SP:F9 PPU: 51,219 CYC:24917\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:02 Y:01 P:E4 SP:F9 PPU: 57,219 CYC:24919\n\
FAEE  60        RTS                             A:B2 X:02 Y:01 P:E4 SP:F9 PPU: 63,219 CYC:24921\n\
F55E  63 45    *RRA ($45,X) @ 47 = 0647 = A5    A:B2 X:02 Y:01 P:E4 SP:FB PPU: 81,219 CYC:24927\n\
F560  EA        NOP                             A:05 X:02 Y:01 P:25 SP:FB PPU:105,219 CYC:24935\n\
F561  EA        NOP                             A:05 X:02 Y:01 P:25 SP:FB PPU:111,219 CYC:24937\n\
F562  EA        NOP                             A:05 X:02 Y:01 P:25 SP:FB PPU:117,219 CYC:24939\n\
F563  EA        NOP                             A:05 X:02 Y:01 P:25 SP:FB PPU:123,219 CYC:24941\n\
F564  20 EF FA  JSR $FAEF                       A:05 X:02 Y:01 P:25 SP:FB PPU:129,219 CYC:24943\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:02 Y:01 P:25 SP:F9 PPU:147,219 CYC:24949\n\
FAF1  90 28     BCC $FB1B                       A:05 X:02 Y:01 P:25 SP:F9 PPU:153,219 CYC:24951\n\
FAF3  30 26     BMI $FB1B                       A:05 X:02 Y:01 P:25 SP:F9 PPU:159,219 CYC:24953\n\
FAF5  C9 05     CMP #$05                        A:05 X:02 Y:01 P:25 SP:F9 PPU:165,219 CYC:24955\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:02 Y:01 P:27 SP:F9 PPU:171,219 CYC:24957\n\
FAF9  60        RTS                             A:05 X:02 Y:01 P:27 SP:F9 PPU:177,219 CYC:24959\n\
F567  AD 47 06  LDA $0647 = 52                  A:05 X:02 Y:01 P:27 SP:FB PPU:195,219 CYC:24965\n\
F56A  C9 52     CMP #$52                        A:52 X:02 Y:01 P:25 SP:FB PPU:207,219 CYC:24969\n\
F56C  F0 02     BEQ $F570                       A:52 X:02 Y:01 P:27 SP:FB PPU:213,219 CYC:24971\n\
F570  C8        INY                             A:52 X:02 Y:01 P:27 SP:FB PPU:222,219 CYC:24974\n\
F571  A9 29     LDA #$29                        A:52 X:02 Y:02 P:25 SP:FB PPU:228,219 CYC:24976\n\
F573  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:02 P:25 SP:FB PPU:234,219 CYC:24978\n\
F576  20 FA FA  JSR $FAFA                       A:29 X:02 Y:02 P:25 SP:FB PPU:246,219 CYC:24982\n\
FAFA  B8        CLV                             A:29 X:02 Y:02 P:25 SP:F9 PPU:264,219 CYC:24988\n\
FAFB  18        CLC                             A:29 X:02 Y:02 P:25 SP:F9 PPU:270,219 CYC:24990\n\
FAFC  A9 42     LDA #$42                        A:29 X:02 Y:02 P:24 SP:F9 PPU:276,219 CYC:24992\n\
FAFE  60        RTS                             A:42 X:02 Y:02 P:24 SP:F9 PPU:282,219 CYC:24994\n\
F579  63 45    *RRA ($45,X) @ 47 = 0647 = 29    A:42 X:02 Y:02 P:24 SP:FB PPU:300,219 CYC:25000\n\
F57B  EA        NOP                             A:57 X:02 Y:02 P:24 SP:FB PPU:324,219 CYC:25008\n\
F57C  EA        NOP                             A:57 X:02 Y:02 P:24 SP:FB PPU:330,219 CYC:25010\n\
F57D  EA        NOP                             A:57 X:02 Y:02 P:24 SP:FB PPU:336,219 CYC:25012\n\
F57E  EA        NOP                             A:57 X:02 Y:02 P:24 SP:FB PPU:  1,220 CYC:25014\n\
F57F  20 FF FA  JSR $FAFF                       A:57 X:02 Y:02 P:24 SP:FB PPU:  7,220 CYC:25016\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:02 Y:02 P:24 SP:F9 PPU: 25,220 CYC:25022\n\
FB01  30 18     BMI $FB1B                       A:57 X:02 Y:02 P:24 SP:F9 PPU: 31,220 CYC:25024\n\
FB03  B0 16     BCS $FB1B                       A:57 X:02 Y:02 P:24 SP:F9 PPU: 37,220 CYC:25026\n\
FB05  C9 57     CMP #$57                        A:57 X:02 Y:02 P:24 SP:F9 PPU: 43,220 CYC:25028\n\
FB07  D0 12     BNE $FB1B                       A:57 X:02 Y:02 P:27 SP:F9 PPU: 49,220 CYC:25030\n\
FB09  60        RTS                             A:57 X:02 Y:02 P:27 SP:F9 PPU: 55,220 CYC:25032\n\
F582  AD 47 06  LDA $0647 = 14                  A:57 X:02 Y:02 P:27 SP:FB PPU: 73,220 CYC:25038\n\
F585  C9 14     CMP #$14                        A:14 X:02 Y:02 P:25 SP:FB PPU: 85,220 CYC:25042\n\
F587  F0 02     BEQ $F58B                       A:14 X:02 Y:02 P:27 SP:FB PPU: 91,220 CYC:25044\n\
F58B  C8        INY                             A:14 X:02 Y:02 P:27 SP:FB PPU:100,220 CYC:25047\n\
F58C  A9 37     LDA #$37                        A:14 X:02 Y:03 P:25 SP:FB PPU:106,220 CYC:25049\n\
F58E  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:03 P:25 SP:FB PPU:112,220 CYC:25051\n\
F591  20 0A FB  JSR $FB0A                       A:37 X:02 Y:03 P:25 SP:FB PPU:124,220 CYC:25055\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:02 Y:03 P:25 SP:F9 PPU:142,220 CYC:25061\n\
FB0C  38        SEC                             A:37 X:02 Y:03 P:E5 SP:F9 PPU:151,220 CYC:25064\n\
FB0D  A9 75     LDA #$75                        A:37 X:02 Y:03 P:E5 SP:F9 PPU:157,220 CYC:25066\n\
FB0F  60        RTS                             A:75 X:02 Y:03 P:65 SP:F9 PPU:163,220 CYC:25068\n\
F594  63 45    *RRA ($45,X) @ 47 = 0647 = 37    A:75 X:02 Y:03 P:65 SP:FB PPU:181,220 CYC:25074\n\
F596  EA        NOP                             A:11 X:02 Y:03 P:25 SP:FB PPU:205,220 CYC:25082\n\
F597  EA        NOP                             A:11 X:02 Y:03 P:25 SP:FB PPU:211,220 CYC:25084\n\
F598  EA        NOP                             A:11 X:02 Y:03 P:25 SP:FB PPU:217,220 CYC:25086\n\
F599  EA        NOP                             A:11 X:02 Y:03 P:25 SP:FB PPU:223,220 CYC:25088\n\
F59A  20 10 FB  JSR $FB10                       A:11 X:02 Y:03 P:25 SP:FB PPU:229,220 CYC:25090\n\
FB10  70 09     BVS $FB1B                       A:11 X:02 Y:03 P:25 SP:F9 PPU:247,220 CYC:25096\n\
FB12  30 07     BMI $FB1B                       A:11 X:02 Y:03 P:25 SP:F9 PPU:253,220 CYC:25098\n\
FB14  90 05     BCC $FB1B                       A:11 X:02 Y:03 P:25 SP:F9 PPU:259,220 CYC:25100\n\
FB16  C9 11     CMP #$11                        A:11 X:02 Y:03 P:25 SP:F9 PPU:265,220 CYC:25102\n\
FB18  D0 01     BNE $FB1B                       A:11 X:02 Y:03 P:27 SP:F9 PPU:271,220 CYC:25104\n\
FB1A  60        RTS                             A:11 X:02 Y:03 P:27 SP:F9 PPU:277,220 CYC:25106\n\
F59D  AD 47 06  LDA $0647 = 9B                  A:11 X:02 Y:03 P:27 SP:FB PPU:295,220 CYC:25112\n\
F5A0  C9 9B     CMP #$9B                        A:9B X:02 Y:03 P:A5 SP:FB PPU:307,220 CYC:25116\n\
F5A2  F0 02     BEQ $F5A6                       A:9B X:02 Y:03 P:27 SP:FB PPU:313,220 CYC:25118\n\
F5A6  C8        INY                             A:9B X:02 Y:03 P:27 SP:FB PPU:322,220 CYC:25121\n\
F5A7  A9 A5     LDA #$A5                        A:9B X:02 Y:04 P:25 SP:FB PPU:328,220 CYC:25123\n\
F5A9  85 47     STA $47 = 47                    A:A5 X:02 Y:04 P:A5 SP:FB PPU:334,220 CYC:25125\n\
F5AB  20 E9 FA  JSR $FAE9                       A:A5 X:02 Y:04 P:A5 SP:FB PPU:  2,221 CYC:25128\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:02 Y:04 P:A5 SP:F9 PPU: 20,221 CYC:25134\n\
FAEB  18        CLC                             A:A5 X:02 Y:04 P:E5 SP:F9 PPU: 29,221 CYC:25137\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:02 Y:04 P:E4 SP:F9 PPU: 35,221 CYC:25139\n\
FAEE  60        RTS                             A:B2 X:02 Y:04 P:E4 SP:F9 PPU: 41,221 CYC:25141\n\
F5AE  67 47    *RRA $47 = A5                    A:B2 X:02 Y:04 P:E4 SP:FB PPU: 59,221 CYC:25147\n\
F5B0  EA        NOP                             A:05 X:02 Y:04 P:25 SP:FB PPU: 74,221 CYC:25152\n\
F5B1  EA        NOP                             A:05 X:02 Y:04 P:25 SP:FB PPU: 80,221 CYC:25154\n\
F5B2  EA        NOP                             A:05 X:02 Y:04 P:25 SP:FB PPU: 86,221 CYC:25156\n\
F5B3  EA        NOP                             A:05 X:02 Y:04 P:25 SP:FB PPU: 92,221 CYC:25158\n\
F5B4  20 EF FA  JSR $FAEF                       A:05 X:02 Y:04 P:25 SP:FB PPU: 98,221 CYC:25160\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:02 Y:04 P:25 SP:F9 PPU:116,221 CYC:25166\n\
FAF1  90 28     BCC $FB1B                       A:05 X:02 Y:04 P:25 SP:F9 PPU:122,221 CYC:25168\n\
FAF3  30 26     BMI $FB1B                       A:05 X:02 Y:04 P:25 SP:F9 PPU:128,221 CYC:25170\n\
FAF5  C9 05     CMP #$05                        A:05 X:02 Y:04 P:25 SP:F9 PPU:134,221 CYC:25172\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:02 Y:04 P:27 SP:F9 PPU:140,221 CYC:25174\n\
FAF9  60        RTS                             A:05 X:02 Y:04 P:27 SP:F9 PPU:146,221 CYC:25176\n\
F5B7  A5 47     LDA $47 = 52                    A:05 X:02 Y:04 P:27 SP:FB PPU:164,221 CYC:25182\n\
F5B9  C9 52     CMP #$52                        A:52 X:02 Y:04 P:25 SP:FB PPU:173,221 CYC:25185\n\
F5BB  F0 02     BEQ $F5BF                       A:52 X:02 Y:04 P:27 SP:FB PPU:179,221 CYC:25187\n\
F5BF  C8        INY                             A:52 X:02 Y:04 P:27 SP:FB PPU:188,221 CYC:25190\n\
F5C0  A9 29     LDA #$29                        A:52 X:02 Y:05 P:25 SP:FB PPU:194,221 CYC:25192\n\
F5C2  85 47     STA $47 = 52                    A:29 X:02 Y:05 P:25 SP:FB PPU:200,221 CYC:25194\n\
F5C4  20 FA FA  JSR $FAFA                       A:29 X:02 Y:05 P:25 SP:FB PPU:209,221 CYC:25197\n\
FAFA  B8        CLV                             A:29 X:02 Y:05 P:25 SP:F9 PPU:227,221 CYC:25203\n\
FAFB  18        CLC                             A:29 X:02 Y:05 P:25 SP:F9 PPU:233,221 CYC:25205\n\
FAFC  A9 42     LDA #$42                        A:29 X:02 Y:05 P:24 SP:F9 PPU:239,221 CYC:25207\n\
FAFE  60        RTS                             A:42 X:02 Y:05 P:24 SP:F9 PPU:245,221 CYC:25209\n\
F5C7  67 47    *RRA $47 = 29                    A:42 X:02 Y:05 P:24 SP:FB PPU:263,221 CYC:25215\n\
F5C9  EA        NOP                             A:57 X:02 Y:05 P:24 SP:FB PPU:278,221 CYC:25220\n\
F5CA  EA        NOP                             A:57 X:02 Y:05 P:24 SP:FB PPU:284,221 CYC:25222\n\
F5CB  EA        NOP                             A:57 X:02 Y:05 P:24 SP:FB PPU:290,221 CYC:25224\n\
F5CC  EA        NOP                             A:57 X:02 Y:05 P:24 SP:FB PPU:296,221 CYC:25226\n\
F5CD  20 FF FA  JSR $FAFF                       A:57 X:02 Y:05 P:24 SP:FB PPU:302,221 CYC:25228\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:02 Y:05 P:24 SP:F9 PPU:320,221 CYC:25234\n\
FB01  30 18     BMI $FB1B                       A:57 X:02 Y:05 P:24 SP:F9 PPU:326,221 CYC:25236\n\
FB03  B0 16     BCS $FB1B                       A:57 X:02 Y:05 P:24 SP:F9 PPU:332,221 CYC:25238\n\
FB05  C9 57     CMP #$57                        A:57 X:02 Y:05 P:24 SP:F9 PPU:338,221 CYC:25240\n\
FB07  D0 12     BNE $FB1B                       A:57 X:02 Y:05 P:27 SP:F9 PPU:  3,222 CYC:25242\n\
FB09  60        RTS                             A:57 X:02 Y:05 P:27 SP:F9 PPU:  9,222 CYC:25244\n\
F5D0  A5 47     LDA $47 = 14                    A:57 X:02 Y:05 P:27 SP:FB PPU: 27,222 CYC:25250\n\
F5D2  C9 14     CMP #$14                        A:14 X:02 Y:05 P:25 SP:FB PPU: 36,222 CYC:25253\n\
F5D4  F0 02     BEQ $F5D8                       A:14 X:02 Y:05 P:27 SP:FB PPU: 42,222 CYC:25255\n\
F5D8  C8        INY                             A:14 X:02 Y:05 P:27 SP:FB PPU: 51,222 CYC:25258\n\
F5D9  A9 37     LDA #$37                        A:14 X:02 Y:06 P:25 SP:FB PPU: 57,222 CYC:25260\n\
F5DB  85 47     STA $47 = 14                    A:37 X:02 Y:06 P:25 SP:FB PPU: 63,222 CYC:25262\n\
F5DD  20 0A FB  JSR $FB0A                       A:37 X:02 Y:06 P:25 SP:FB PPU: 72,222 CYC:25265\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:02 Y:06 P:25 SP:F9 PPU: 90,222 CYC:25271\n\
FB0C  38        SEC                             A:37 X:02 Y:06 P:E5 SP:F9 PPU: 99,222 CYC:25274\n\
FB0D  A9 75     LDA #$75                        A:37 X:02 Y:06 P:E5 SP:F9 PPU:105,222 CYC:25276\n\
FB0F  60        RTS                             A:75 X:02 Y:06 P:65 SP:F9 PPU:111,222 CYC:25278\n\
F5E0  67 47    *RRA $47 = 37                    A:75 X:02 Y:06 P:65 SP:FB PPU:129,222 CYC:25284\n\
F5E2  EA        NOP                             A:11 X:02 Y:06 P:25 SP:FB PPU:144,222 CYC:25289\n\
F5E3  EA        NOP                             A:11 X:02 Y:06 P:25 SP:FB PPU:150,222 CYC:25291\n\
F5E4  EA        NOP                             A:11 X:02 Y:06 P:25 SP:FB PPU:156,222 CYC:25293\n\
F5E5  EA        NOP                             A:11 X:02 Y:06 P:25 SP:FB PPU:162,222 CYC:25295\n\
F5E6  20 10 FB  JSR $FB10                       A:11 X:02 Y:06 P:25 SP:FB PPU:168,222 CYC:25297\n\
FB10  70 09     BVS $FB1B                       A:11 X:02 Y:06 P:25 SP:F9 PPU:186,222 CYC:25303\n\
FB12  30 07     BMI $FB1B                       A:11 X:02 Y:06 P:25 SP:F9 PPU:192,222 CYC:25305\n\
FB14  90 05     BCC $FB1B                       A:11 X:02 Y:06 P:25 SP:F9 PPU:198,222 CYC:25307\n\
FB16  C9 11     CMP #$11                        A:11 X:02 Y:06 P:25 SP:F9 PPU:204,222 CYC:25309\n\
FB18  D0 01     BNE $FB1B                       A:11 X:02 Y:06 P:27 SP:F9 PPU:210,222 CYC:25311\n\
FB1A  60        RTS                             A:11 X:02 Y:06 P:27 SP:F9 PPU:216,222 CYC:25313\n\
F5E9  A5 47     LDA $47 = 9B                    A:11 X:02 Y:06 P:27 SP:FB PPU:234,222 CYC:25319\n\
F5EB  C9 9B     CMP #$9B                        A:9B X:02 Y:06 P:A5 SP:FB PPU:243,222 CYC:25322\n\
F5ED  F0 02     BEQ $F5F1                       A:9B X:02 Y:06 P:27 SP:FB PPU:249,222 CYC:25324\n\
F5F1  C8        INY                             A:9B X:02 Y:06 P:27 SP:FB PPU:258,222 CYC:25327\n\
F5F2  A9 A5     LDA #$A5                        A:9B X:02 Y:07 P:25 SP:FB PPU:264,222 CYC:25329\n\
F5F4  8D 47 06  STA $0647 = 9B                  A:A5 X:02 Y:07 P:A5 SP:FB PPU:270,222 CYC:25331\n\
F5F7  20 E9 FA  JSR $FAE9                       A:A5 X:02 Y:07 P:A5 SP:FB PPU:282,222 CYC:25335\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:02 Y:07 P:A5 SP:F9 PPU:300,222 CYC:25341\n\
FAEB  18        CLC                             A:A5 X:02 Y:07 P:E5 SP:F9 PPU:309,222 CYC:25344\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:02 Y:07 P:E4 SP:F9 PPU:315,222 CYC:25346\n\
FAEE  60        RTS                             A:B2 X:02 Y:07 P:E4 SP:F9 PPU:321,222 CYC:25348\n\
F5FA  6F 47 06 *RRA $0647 = A5                  A:B2 X:02 Y:07 P:E4 SP:FB PPU:339,222 CYC:25354\n\
F5FD  EA        NOP                             A:05 X:02 Y:07 P:25 SP:FB PPU: 16,223 CYC:25360\n\
F5FE  EA        NOP                             A:05 X:02 Y:07 P:25 SP:FB PPU: 22,223 CYC:25362\n\
F5FF  EA        NOP                             A:05 X:02 Y:07 P:25 SP:FB PPU: 28,223 CYC:25364\n\
F600  EA        NOP                             A:05 X:02 Y:07 P:25 SP:FB PPU: 34,223 CYC:25366\n\
F601  20 EF FA  JSR $FAEF                       A:05 X:02 Y:07 P:25 SP:FB PPU: 40,223 CYC:25368\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:02 Y:07 P:25 SP:F9 PPU: 58,223 CYC:25374\n\
FAF1  90 28     BCC $FB1B                       A:05 X:02 Y:07 P:25 SP:F9 PPU: 64,223 CYC:25376\n\
FAF3  30 26     BMI $FB1B                       A:05 X:02 Y:07 P:25 SP:F9 PPU: 70,223 CYC:25378\n\
FAF5  C9 05     CMP #$05                        A:05 X:02 Y:07 P:25 SP:F9 PPU: 76,223 CYC:25380\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:02 Y:07 P:27 SP:F9 PPU: 82,223 CYC:25382\n\
FAF9  60        RTS                             A:05 X:02 Y:07 P:27 SP:F9 PPU: 88,223 CYC:25384\n\
F604  AD 47 06  LDA $0647 = 52                  A:05 X:02 Y:07 P:27 SP:FB PPU:106,223 CYC:25390\n\
F607  C9 52     CMP #$52                        A:52 X:02 Y:07 P:25 SP:FB PPU:118,223 CYC:25394\n\
F609  F0 02     BEQ $F60D                       A:52 X:02 Y:07 P:27 SP:FB PPU:124,223 CYC:25396\n\
F60D  C8        INY                             A:52 X:02 Y:07 P:27 SP:FB PPU:133,223 CYC:25399\n\
F60E  A9 29     LDA #$29                        A:52 X:02 Y:08 P:25 SP:FB PPU:139,223 CYC:25401\n\
F610  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:08 P:25 SP:FB PPU:145,223 CYC:25403\n\
F613  20 FA FA  JSR $FAFA                       A:29 X:02 Y:08 P:25 SP:FB PPU:157,223 CYC:25407\n\
FAFA  B8        CLV                             A:29 X:02 Y:08 P:25 SP:F9 PPU:175,223 CYC:25413\n\
FAFB  18        CLC                             A:29 X:02 Y:08 P:25 SP:F9 PPU:181,223 CYC:25415\n\
FAFC  A9 42     LDA #$42                        A:29 X:02 Y:08 P:24 SP:F9 PPU:187,223 CYC:25417\n\
FAFE  60        RTS                             A:42 X:02 Y:08 P:24 SP:F9 PPU:193,223 CYC:25419\n\
F616  6F 47 06 *RRA $0647 = 29                  A:42 X:02 Y:08 P:24 SP:FB PPU:211,223 CYC:25425\n\
F619  EA        NOP                             A:57 X:02 Y:08 P:24 SP:FB PPU:229,223 CYC:25431\n\
F61A  EA        NOP                             A:57 X:02 Y:08 P:24 SP:FB PPU:235,223 CYC:25433\n\
F61B  EA        NOP                             A:57 X:02 Y:08 P:24 SP:FB PPU:241,223 CYC:25435\n\
F61C  EA        NOP                             A:57 X:02 Y:08 P:24 SP:FB PPU:247,223 CYC:25437\n\
F61D  20 FF FA  JSR $FAFF                       A:57 X:02 Y:08 P:24 SP:FB PPU:253,223 CYC:25439\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:02 Y:08 P:24 SP:F9 PPU:271,223 CYC:25445\n\
FB01  30 18     BMI $FB1B                       A:57 X:02 Y:08 P:24 SP:F9 PPU:277,223 CYC:25447\n\
FB03  B0 16     BCS $FB1B                       A:57 X:02 Y:08 P:24 SP:F9 PPU:283,223 CYC:25449\n\
FB05  C9 57     CMP #$57                        A:57 X:02 Y:08 P:24 SP:F9 PPU:289,223 CYC:25451\n\
FB07  D0 12     BNE $FB1B                       A:57 X:02 Y:08 P:27 SP:F9 PPU:295,223 CYC:25453\n\
FB09  60        RTS                             A:57 X:02 Y:08 P:27 SP:F9 PPU:301,223 CYC:25455\n\
F620  AD 47 06  LDA $0647 = 14                  A:57 X:02 Y:08 P:27 SP:FB PPU:319,223 CYC:25461\n\
F623  C9 14     CMP #$14                        A:14 X:02 Y:08 P:25 SP:FB PPU:331,223 CYC:25465\n\
F625  F0 02     BEQ $F629                       A:14 X:02 Y:08 P:27 SP:FB PPU:337,223 CYC:25467\n\
F629  C8        INY                             A:14 X:02 Y:08 P:27 SP:FB PPU:  5,224 CYC:25470\n\
F62A  A9 37     LDA #$37                        A:14 X:02 Y:09 P:25 SP:FB PPU: 11,224 CYC:25472\n\
F62C  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:09 P:25 SP:FB PPU: 17,224 CYC:25474\n\
F62F  20 0A FB  JSR $FB0A                       A:37 X:02 Y:09 P:25 SP:FB PPU: 29,224 CYC:25478\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:02 Y:09 P:25 SP:F9 PPU: 47,224 CYC:25484\n\
FB0C  38        SEC                             A:37 X:02 Y:09 P:E5 SP:F9 PPU: 56,224 CYC:25487\n\
FB0D  A9 75     LDA #$75                        A:37 X:02 Y:09 P:E5 SP:F9 PPU: 62,224 CYC:25489\n\
FB0F  60        RTS                             A:75 X:02 Y:09 P:65 SP:F9 PPU: 68,224 CYC:25491\n\
F632  6F 47 06 *RRA $0647 = 37                  A:75 X:02 Y:09 P:65 SP:FB PPU: 86,224 CYC:25497\n\
F635  EA        NOP                             A:11 X:02 Y:09 P:25 SP:FB PPU:104,224 CYC:25503\n\
F636  EA        NOP                             A:11 X:02 Y:09 P:25 SP:FB PPU:110,224 CYC:25505\n\
F637  EA        NOP                             A:11 X:02 Y:09 P:25 SP:FB PPU:116,224 CYC:25507\n\
F638  EA        NOP                             A:11 X:02 Y:09 P:25 SP:FB PPU:122,224 CYC:25509\n\
F639  20 10 FB  JSR $FB10                       A:11 X:02 Y:09 P:25 SP:FB PPU:128,224 CYC:25511\n\
FB10  70 09     BVS $FB1B                       A:11 X:02 Y:09 P:25 SP:F9 PPU:146,224 CYC:25517\n\
FB12  30 07     BMI $FB1B                       A:11 X:02 Y:09 P:25 SP:F9 PPU:152,224 CYC:25519\n\
FB14  90 05     BCC $FB1B                       A:11 X:02 Y:09 P:25 SP:F9 PPU:158,224 CYC:25521\n\
FB16  C9 11     CMP #$11                        A:11 X:02 Y:09 P:25 SP:F9 PPU:164,224 CYC:25523\n\
FB18  D0 01     BNE $FB1B                       A:11 X:02 Y:09 P:27 SP:F9 PPU:170,224 CYC:25525\n\
FB1A  60        RTS                             A:11 X:02 Y:09 P:27 SP:F9 PPU:176,224 CYC:25527\n\
F63C  AD 47 06  LDA $0647 = 9B                  A:11 X:02 Y:09 P:27 SP:FB PPU:194,224 CYC:25533\n\
F63F  C9 9B     CMP #$9B                        A:9B X:02 Y:09 P:A5 SP:FB PPU:206,224 CYC:25537\n\
F641  F0 02     BEQ $F645                       A:9B X:02 Y:09 P:27 SP:FB PPU:212,224 CYC:25539\n\
F645  A9 A5     LDA #$A5                        A:9B X:02 Y:09 P:27 SP:FB PPU:221,224 CYC:25542\n\
F647  8D 47 06  STA $0647 = 9B                  A:A5 X:02 Y:09 P:A5 SP:FB PPU:227,224 CYC:25544\n\
F64A  A9 48     LDA #$48                        A:A5 X:02 Y:09 P:A5 SP:FB PPU:239,224 CYC:25548\n\
F64C  85 45     STA $45 = 48                    A:48 X:02 Y:09 P:25 SP:FB PPU:245,224 CYC:25550\n\
F64E  A9 05     LDA #$05                        A:48 X:02 Y:09 P:25 SP:FB PPU:254,224 CYC:25553\n\
F650  85 46     STA $46 = 05                    A:05 X:02 Y:09 P:25 SP:FB PPU:260,224 CYC:25555\n\
F652  A0 FF     LDY #$FF                        A:05 X:02 Y:09 P:25 SP:FB PPU:269,224 CYC:25558\n\
F654  20 E9 FA  JSR $FAE9                       A:05 X:02 Y:FF P:A5 SP:FB PPU:275,224 CYC:25560\n\
FAE9  24 01     BIT $01 = FF                    A:05 X:02 Y:FF P:A5 SP:F9 PPU:293,224 CYC:25566\n\
FAEB  18        CLC                             A:05 X:02 Y:FF P:E5 SP:F9 PPU:302,224 CYC:25569\n\
FAEC  A9 B2     LDA #$B2                        A:05 X:02 Y:FF P:E4 SP:F9 PPU:308,224 CYC:25571\n\
FAEE  60        RTS                             A:B2 X:02 Y:FF P:E4 SP:F9 PPU:314,224 CYC:25573\n\
F657  73 45    *RRA ($45),Y = 0548 @ 0647 = A5  A:B2 X:02 Y:FF P:E4 SP:FB PPU:332,224 CYC:25579\n\
F659  EA        NOP                             A:05 X:02 Y:FF P:25 SP:FB PPU: 15,225 CYC:25587\n\
F65A  EA        NOP                             A:05 X:02 Y:FF P:25 SP:FB PPU: 21,225 CYC:25589\n\
F65B  08        PHP                             A:05 X:02 Y:FF P:25 SP:FB PPU: 27,225 CYC:25591\n\
F65C  48        PHA                             A:05 X:02 Y:FF P:25 SP:FA PPU: 36,225 CYC:25594\n\
F65D  A0 0A     LDY #$0A                        A:05 X:02 Y:FF P:25 SP:F9 PPU: 45,225 CYC:25597\n\
F65F  68        PLA                             A:05 X:02 Y:0A P:25 SP:F9 PPU: 51,225 CYC:25599\n\
F660  28        PLP                             A:05 X:02 Y:0A P:25 SP:FA PPU: 63,225 CYC:25603\n\
F661  20 EF FA  JSR $FAEF                       A:05 X:02 Y:0A P:25 SP:FB PPU: 75,225 CYC:25607\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:02 Y:0A P:25 SP:F9 PPU: 93,225 CYC:25613\n\
FAF1  90 28     BCC $FB1B                       A:05 X:02 Y:0A P:25 SP:F9 PPU: 99,225 CYC:25615\n\
FAF3  30 26     BMI $FB1B                       A:05 X:02 Y:0A P:25 SP:F9 PPU:105,225 CYC:25617\n\
FAF5  C9 05     CMP #$05                        A:05 X:02 Y:0A P:25 SP:F9 PPU:111,225 CYC:25619\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:02 Y:0A P:27 SP:F9 PPU:117,225 CYC:25621\n\
FAF9  60        RTS                             A:05 X:02 Y:0A P:27 SP:F9 PPU:123,225 CYC:25623\n\
F664  AD 47 06  LDA $0647 = 52                  A:05 X:02 Y:0A P:27 SP:FB PPU:141,225 CYC:25629\n\
F667  C9 52     CMP #$52                        A:52 X:02 Y:0A P:25 SP:FB PPU:153,225 CYC:25633\n\
F669  F0 02     BEQ $F66D                       A:52 X:02 Y:0A P:27 SP:FB PPU:159,225 CYC:25635\n\
F66D  A0 FF     LDY #$FF                        A:52 X:02 Y:0A P:27 SP:FB PPU:168,225 CYC:25638\n\
F66F  A9 29     LDA #$29                        A:52 X:02 Y:FF P:A5 SP:FB PPU:174,225 CYC:25640\n\
F671  8D 47 06  STA $0647 = 52                  A:29 X:02 Y:FF P:25 SP:FB PPU:180,225 CYC:25642\n\
F674  20 FA FA  JSR $FAFA                       A:29 X:02 Y:FF P:25 SP:FB PPU:192,225 CYC:25646\n\
FAFA  B8        CLV                             A:29 X:02 Y:FF P:25 SP:F9 PPU:210,225 CYC:25652\n\
FAFB  18        CLC                             A:29 X:02 Y:FF P:25 SP:F9 PPU:216,225 CYC:25654\n\
FAFC  A9 42     LDA #$42                        A:29 X:02 Y:FF P:24 SP:F9 PPU:222,225 CYC:25656\n\
FAFE  60        RTS                             A:42 X:02 Y:FF P:24 SP:F9 PPU:228,225 CYC:25658\n\
F677  73 45    *RRA ($45),Y = 0548 @ 0647 = 29  A:42 X:02 Y:FF P:24 SP:FB PPU:246,225 CYC:25664\n\
F679  EA        NOP                             A:57 X:02 Y:FF P:24 SP:FB PPU:270,225 CYC:25672\n\
F67A  EA        NOP                             A:57 X:02 Y:FF P:24 SP:FB PPU:276,225 CYC:25674\n\
F67B  08        PHP                             A:57 X:02 Y:FF P:24 SP:FB PPU:282,225 CYC:25676\n\
F67C  48        PHA                             A:57 X:02 Y:FF P:24 SP:FA PPU:291,225 CYC:25679\n\
F67D  A0 0B     LDY #$0B                        A:57 X:02 Y:FF P:24 SP:F9 PPU:300,225 CYC:25682\n\
F67F  68        PLA                             A:57 X:02 Y:0B P:24 SP:F9 PPU:306,225 CYC:25684\n\
F680  28        PLP                             A:57 X:02 Y:0B P:24 SP:FA PPU:318,225 CYC:25688\n\
F681  20 FF FA  JSR $FAFF                       A:57 X:02 Y:0B P:24 SP:FB PPU:330,225 CYC:25692\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:02 Y:0B P:24 SP:F9 PPU:  7,226 CYC:25698\n\
FB01  30 18     BMI $FB1B                       A:57 X:02 Y:0B P:24 SP:F9 PPU: 13,226 CYC:25700\n\
FB03  B0 16     BCS $FB1B                       A:57 X:02 Y:0B P:24 SP:F9 PPU: 19,226 CYC:25702\n\
FB05  C9 57     CMP #$57                        A:57 X:02 Y:0B P:24 SP:F9 PPU: 25,226 CYC:25704\n\
FB07  D0 12     BNE $FB1B                       A:57 X:02 Y:0B P:27 SP:F9 PPU: 31,226 CYC:25706\n\
FB09  60        RTS                             A:57 X:02 Y:0B P:27 SP:F9 PPU: 37,226 CYC:25708\n\
F684  AD 47 06  LDA $0647 = 14                  A:57 X:02 Y:0B P:27 SP:FB PPU: 55,226 CYC:25714\n\
F687  C9 14     CMP #$14                        A:14 X:02 Y:0B P:25 SP:FB PPU: 67,226 CYC:25718\n\
F689  F0 02     BEQ $F68D                       A:14 X:02 Y:0B P:27 SP:FB PPU: 73,226 CYC:25720\n\
F68D  A0 FF     LDY #$FF                        A:14 X:02 Y:0B P:27 SP:FB PPU: 82,226 CYC:25723\n\
F68F  A9 37     LDA #$37                        A:14 X:02 Y:FF P:A5 SP:FB PPU: 88,226 CYC:25725\n\
F691  8D 47 06  STA $0647 = 14                  A:37 X:02 Y:FF P:25 SP:FB PPU: 94,226 CYC:25727\n\
F694  20 0A FB  JSR $FB0A                       A:37 X:02 Y:FF P:25 SP:FB PPU:106,226 CYC:25731\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:02 Y:FF P:25 SP:F9 PPU:124,226 CYC:25737\n\
FB0C  38        SEC                             A:37 X:02 Y:FF P:E5 SP:F9 PPU:133,226 CYC:25740\n\
FB0D  A9 75     LDA #$75                        A:37 X:02 Y:FF P:E5 SP:F9 PPU:139,226 CYC:25742\n\
FB0F  60        RTS                             A:75 X:02 Y:FF P:65 SP:F9 PPU:145,226 CYC:25744\n\
F697  73 45    *RRA ($45),Y = 0548 @ 0647 = 37  A:75 X:02 Y:FF P:65 SP:FB PPU:163,226 CYC:25750\n\
F699  EA        NOP                             A:11 X:02 Y:FF P:25 SP:FB PPU:187,226 CYC:25758\n\
F69A  EA        NOP                             A:11 X:02 Y:FF P:25 SP:FB PPU:193,226 CYC:25760\n\
F69B  08        PHP                             A:11 X:02 Y:FF P:25 SP:FB PPU:199,226 CYC:25762\n\
F69C  48        PHA                             A:11 X:02 Y:FF P:25 SP:FA PPU:208,226 CYC:25765\n\
F69D  A0 0C     LDY #$0C                        A:11 X:02 Y:FF P:25 SP:F9 PPU:217,226 CYC:25768\n\
F69F  68        PLA                             A:11 X:02 Y:0C P:25 SP:F9 PPU:223,226 CYC:25770\n\
F6A0  28        PLP                             A:11 X:02 Y:0C P:25 SP:FA PPU:235,226 CYC:25774\n\
F6A1  20 10 FB  JSR $FB10                       A:11 X:02 Y:0C P:25 SP:FB PPU:247,226 CYC:25778\n\
FB10  70 09     BVS $FB1B                       A:11 X:02 Y:0C P:25 SP:F9 PPU:265,226 CYC:25784\n\
FB12  30 07     BMI $FB1B                       A:11 X:02 Y:0C P:25 SP:F9 PPU:271,226 CYC:25786\n\
FB14  90 05     BCC $FB1B                       A:11 X:02 Y:0C P:25 SP:F9 PPU:277,226 CYC:25788\n\
FB16  C9 11     CMP #$11                        A:11 X:02 Y:0C P:25 SP:F9 PPU:283,226 CYC:25790\n\
FB18  D0 01     BNE $FB1B                       A:11 X:02 Y:0C P:27 SP:F9 PPU:289,226 CYC:25792\n\
FB1A  60        RTS                             A:11 X:02 Y:0C P:27 SP:F9 PPU:295,226 CYC:25794\n\
F6A4  AD 47 06  LDA $0647 = 9B                  A:11 X:02 Y:0C P:27 SP:FB PPU:313,226 CYC:25800\n\
F6A7  C9 9B     CMP #$9B                        A:9B X:02 Y:0C P:A5 SP:FB PPU:325,226 CYC:25804\n\
F6A9  F0 02     BEQ $F6AD                       A:9B X:02 Y:0C P:27 SP:FB PPU:331,226 CYC:25806\n\
F6AD  A0 0D     LDY #$0D                        A:9B X:02 Y:0C P:27 SP:FB PPU:340,226 CYC:25809\n\
F6AF  A2 FF     LDX #$FF                        A:9B X:02 Y:0D P:25 SP:FB PPU:  5,227 CYC:25811\n\
F6B1  A9 A5     LDA #$A5                        A:9B X:FF Y:0D P:A5 SP:FB PPU: 11,227 CYC:25813\n\
F6B3  85 47     STA $47 = 9B                    A:A5 X:FF Y:0D P:A5 SP:FB PPU: 17,227 CYC:25815\n\
F6B5  20 E9 FA  JSR $FAE9                       A:A5 X:FF Y:0D P:A5 SP:FB PPU: 26,227 CYC:25818\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:FF Y:0D P:A5 SP:F9 PPU: 44,227 CYC:25824\n\
FAEB  18        CLC                             A:A5 X:FF Y:0D P:E5 SP:F9 PPU: 53,227 CYC:25827\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:FF Y:0D P:E4 SP:F9 PPU: 59,227 CYC:25829\n\
FAEE  60        RTS                             A:B2 X:FF Y:0D P:E4 SP:F9 PPU: 65,227 CYC:25831\n\
F6B8  77 48    *RRA $48,X @ 47 = A5             A:B2 X:FF Y:0D P:E4 SP:FB PPU: 83,227 CYC:25837\n\
F6BA  EA        NOP                             A:05 X:FF Y:0D P:25 SP:FB PPU:101,227 CYC:25843\n\
F6BB  EA        NOP                             A:05 X:FF Y:0D P:25 SP:FB PPU:107,227 CYC:25845\n\
F6BC  EA        NOP                             A:05 X:FF Y:0D P:25 SP:FB PPU:113,227 CYC:25847\n\
F6BD  EA        NOP                             A:05 X:FF Y:0D P:25 SP:FB PPU:119,227 CYC:25849\n\
F6BE  20 EF FA  JSR $FAEF                       A:05 X:FF Y:0D P:25 SP:FB PPU:125,227 CYC:25851\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:FF Y:0D P:25 SP:F9 PPU:143,227 CYC:25857\n\
FAF1  90 28     BCC $FB1B                       A:05 X:FF Y:0D P:25 SP:F9 PPU:149,227 CYC:25859\n\
FAF3  30 26     BMI $FB1B                       A:05 X:FF Y:0D P:25 SP:F9 PPU:155,227 CYC:25861\n\
FAF5  C9 05     CMP #$05                        A:05 X:FF Y:0D P:25 SP:F9 PPU:161,227 CYC:25863\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:FF Y:0D P:27 SP:F9 PPU:167,227 CYC:25865\n\
FAF9  60        RTS                             A:05 X:FF Y:0D P:27 SP:F9 PPU:173,227 CYC:25867\n\
F6C1  A5 47     LDA $47 = 52                    A:05 X:FF Y:0D P:27 SP:FB PPU:191,227 CYC:25873\n\
F6C3  C9 52     CMP #$52                        A:52 X:FF Y:0D P:25 SP:FB PPU:200,227 CYC:25876\n\
F6C5  F0 02     BEQ $F6C9                       A:52 X:FF Y:0D P:27 SP:FB PPU:206,227 CYC:25878\n\
F6C9  C8        INY                             A:52 X:FF Y:0D P:27 SP:FB PPU:215,227 CYC:25881\n\
F6CA  A9 29     LDA #$29                        A:52 X:FF Y:0E P:25 SP:FB PPU:221,227 CYC:25883\n\
F6CC  85 47     STA $47 = 52                    A:29 X:FF Y:0E P:25 SP:FB PPU:227,227 CYC:25885\n\
F6CE  20 FA FA  JSR $FAFA                       A:29 X:FF Y:0E P:25 SP:FB PPU:236,227 CYC:25888\n\
FAFA  B8        CLV                             A:29 X:FF Y:0E P:25 SP:F9 PPU:254,227 CYC:25894\n\
FAFB  18        CLC                             A:29 X:FF Y:0E P:25 SP:F9 PPU:260,227 CYC:25896\n\
FAFC  A9 42     LDA #$42                        A:29 X:FF Y:0E P:24 SP:F9 PPU:266,227 CYC:25898\n\
FAFE  60        RTS                             A:42 X:FF Y:0E P:24 SP:F9 PPU:272,227 CYC:25900\n\
F6D1  77 48    *RRA $48,X @ 47 = 29             A:42 X:FF Y:0E P:24 SP:FB PPU:290,227 CYC:25906\n\
F6D3  EA        NOP                             A:57 X:FF Y:0E P:24 SP:FB PPU:308,227 CYC:25912\n\
F6D4  EA        NOP                             A:57 X:FF Y:0E P:24 SP:FB PPU:314,227 CYC:25914\n\
F6D5  EA        NOP                             A:57 X:FF Y:0E P:24 SP:FB PPU:320,227 CYC:25916\n\
F6D6  EA        NOP                             A:57 X:FF Y:0E P:24 SP:FB PPU:326,227 CYC:25918\n\
F6D7  20 FF FA  JSR $FAFF                       A:57 X:FF Y:0E P:24 SP:FB PPU:332,227 CYC:25920\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:FF Y:0E P:24 SP:F9 PPU:  9,228 CYC:25926\n\
FB01  30 18     BMI $FB1B                       A:57 X:FF Y:0E P:24 SP:F9 PPU: 15,228 CYC:25928\n\
FB03  B0 16     BCS $FB1B                       A:57 X:FF Y:0E P:24 SP:F9 PPU: 21,228 CYC:25930\n\
FB05  C9 57     CMP #$57                        A:57 X:FF Y:0E P:24 SP:F9 PPU: 27,228 CYC:25932\n\
FB07  D0 12     BNE $FB1B                       A:57 X:FF Y:0E P:27 SP:F9 PPU: 33,228 CYC:25934\n\
FB09  60        RTS                             A:57 X:FF Y:0E P:27 SP:F9 PPU: 39,228 CYC:25936\n\
F6DA  A5 47     LDA $47 = 14                    A:57 X:FF Y:0E P:27 SP:FB PPU: 57,228 CYC:25942\n\
F6DC  C9 14     CMP #$14                        A:14 X:FF Y:0E P:25 SP:FB PPU: 66,228 CYC:25945\n\
F6DE  F0 02     BEQ $F6E2                       A:14 X:FF Y:0E P:27 SP:FB PPU: 72,228 CYC:25947\n\
F6E2  C8        INY                             A:14 X:FF Y:0E P:27 SP:FB PPU: 81,228 CYC:25950\n\
F6E3  A9 37     LDA #$37                        A:14 X:FF Y:0F P:25 SP:FB PPU: 87,228 CYC:25952\n\
F6E5  85 47     STA $47 = 14                    A:37 X:FF Y:0F P:25 SP:FB PPU: 93,228 CYC:25954\n\
F6E7  20 0A FB  JSR $FB0A                       A:37 X:FF Y:0F P:25 SP:FB PPU:102,228 CYC:25957\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:FF Y:0F P:25 SP:F9 PPU:120,228 CYC:25963\n\
FB0C  38        SEC                             A:37 X:FF Y:0F P:E5 SP:F9 PPU:129,228 CYC:25966\n\
FB0D  A9 75     LDA #$75                        A:37 X:FF Y:0F P:E5 SP:F9 PPU:135,228 CYC:25968\n\
FB0F  60        RTS                             A:75 X:FF Y:0F P:65 SP:F9 PPU:141,228 CYC:25970\n\
F6EA  77 48    *RRA $48,X @ 47 = 37             A:75 X:FF Y:0F P:65 SP:FB PPU:159,228 CYC:25976\n\
F6EC  EA        NOP                             A:11 X:FF Y:0F P:25 SP:FB PPU:177,228 CYC:25982\n\
F6ED  EA        NOP                             A:11 X:FF Y:0F P:25 SP:FB PPU:183,228 CYC:25984\n\
F6EE  EA        NOP                             A:11 X:FF Y:0F P:25 SP:FB PPU:189,228 CYC:25986\n\
F6EF  EA        NOP                             A:11 X:FF Y:0F P:25 SP:FB PPU:195,228 CYC:25988\n\
F6F0  20 10 FB  JSR $FB10                       A:11 X:FF Y:0F P:25 SP:FB PPU:201,228 CYC:25990\n\
FB10  70 09     BVS $FB1B                       A:11 X:FF Y:0F P:25 SP:F9 PPU:219,228 CYC:25996\n\
FB12  30 07     BMI $FB1B                       A:11 X:FF Y:0F P:25 SP:F9 PPU:225,228 CYC:25998\n\
FB14  90 05     BCC $FB1B                       A:11 X:FF Y:0F P:25 SP:F9 PPU:231,228 CYC:26000\n\
FB16  C9 11     CMP #$11                        A:11 X:FF Y:0F P:25 SP:F9 PPU:237,228 CYC:26002\n\
FB18  D0 01     BNE $FB1B                       A:11 X:FF Y:0F P:27 SP:F9 PPU:243,228 CYC:26004\n\
FB1A  60        RTS                             A:11 X:FF Y:0F P:27 SP:F9 PPU:249,228 CYC:26006\n\
F6F3  A5 47     LDA $47 = 9B                    A:11 X:FF Y:0F P:27 SP:FB PPU:267,228 CYC:26012\n\
F6F5  C9 9B     CMP #$9B                        A:9B X:FF Y:0F P:A5 SP:FB PPU:276,228 CYC:26015\n\
F6F7  F0 02     BEQ $F6FB                       A:9B X:FF Y:0F P:27 SP:FB PPU:282,228 CYC:26017\n\
F6FB  A9 A5     LDA #$A5                        A:9B X:FF Y:0F P:27 SP:FB PPU:291,228 CYC:26020\n\
F6FD  8D 47 06  STA $0647 = 9B                  A:A5 X:FF Y:0F P:A5 SP:FB PPU:297,228 CYC:26022\n\
F700  A0 FF     LDY #$FF                        A:A5 X:FF Y:0F P:A5 SP:FB PPU:309,228 CYC:26026\n\
F702  20 E9 FA  JSR $FAE9                       A:A5 X:FF Y:FF P:A5 SP:FB PPU:315,228 CYC:26028\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:FF Y:FF P:A5 SP:F9 PPU:333,228 CYC:26034\n\
FAEB  18        CLC                             A:A5 X:FF Y:FF P:E5 SP:F9 PPU:  1,229 CYC:26037\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:FF Y:FF P:E4 SP:F9 PPU:  7,229 CYC:26039\n\
FAEE  60        RTS                             A:B2 X:FF Y:FF P:E4 SP:F9 PPU: 13,229 CYC:26041\n\
F705  7B 48 05 *RRA $0548,Y @ 0647 = A5         A:B2 X:FF Y:FF P:E4 SP:FB PPU: 31,229 CYC:26047\n\
F708  EA        NOP                             A:05 X:FF Y:FF P:25 SP:FB PPU: 52,229 CYC:26054\n\
F709  EA        NOP                             A:05 X:FF Y:FF P:25 SP:FB PPU: 58,229 CYC:26056\n\
F70A  08        PHP                             A:05 X:FF Y:FF P:25 SP:FB PPU: 64,229 CYC:26058\n\
F70B  48        PHA                             A:05 X:FF Y:FF P:25 SP:FA PPU: 73,229 CYC:26061\n\
F70C  A0 10     LDY #$10                        A:05 X:FF Y:FF P:25 SP:F9 PPU: 82,229 CYC:26064\n\
F70E  68        PLA                             A:05 X:FF Y:10 P:25 SP:F9 PPU: 88,229 CYC:26066\n\
F70F  28        PLP                             A:05 X:FF Y:10 P:25 SP:FA PPU:100,229 CYC:26070\n\
F710  20 EF FA  JSR $FAEF                       A:05 X:FF Y:10 P:25 SP:FB PPU:112,229 CYC:26074\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:FF Y:10 P:25 SP:F9 PPU:130,229 CYC:26080\n\
FAF1  90 28     BCC $FB1B                       A:05 X:FF Y:10 P:25 SP:F9 PPU:136,229 CYC:26082\n\
FAF3  30 26     BMI $FB1B                       A:05 X:FF Y:10 P:25 SP:F9 PPU:142,229 CYC:26084\n\
FAF5  C9 05     CMP #$05                        A:05 X:FF Y:10 P:25 SP:F9 PPU:148,229 CYC:26086\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:FF Y:10 P:27 SP:F9 PPU:154,229 CYC:26088\n\
FAF9  60        RTS                             A:05 X:FF Y:10 P:27 SP:F9 PPU:160,229 CYC:26090\n\
F713  AD 47 06  LDA $0647 = 52                  A:05 X:FF Y:10 P:27 SP:FB PPU:178,229 CYC:26096\n\
F716  C9 52     CMP #$52                        A:52 X:FF Y:10 P:25 SP:FB PPU:190,229 CYC:26100\n\
F718  F0 02     BEQ $F71C                       A:52 X:FF Y:10 P:27 SP:FB PPU:196,229 CYC:26102\n\
F71C  A0 FF     LDY #$FF                        A:52 X:FF Y:10 P:27 SP:FB PPU:205,229 CYC:26105\n\
F71E  A9 29     LDA #$29                        A:52 X:FF Y:FF P:A5 SP:FB PPU:211,229 CYC:26107\n\
F720  8D 47 06  STA $0647 = 52                  A:29 X:FF Y:FF P:25 SP:FB PPU:217,229 CYC:26109\n\
F723  20 FA FA  JSR $FAFA                       A:29 X:FF Y:FF P:25 SP:FB PPU:229,229 CYC:26113\n\
FAFA  B8        CLV                             A:29 X:FF Y:FF P:25 SP:F9 PPU:247,229 CYC:26119\n\
FAFB  18        CLC                             A:29 X:FF Y:FF P:25 SP:F9 PPU:253,229 CYC:26121\n\
FAFC  A9 42     LDA #$42                        A:29 X:FF Y:FF P:24 SP:F9 PPU:259,229 CYC:26123\n\
FAFE  60        RTS                             A:42 X:FF Y:FF P:24 SP:F9 PPU:265,229 CYC:26125\n\
F726  7B 48 05 *RRA $0548,Y @ 0647 = 29         A:42 X:FF Y:FF P:24 SP:FB PPU:283,229 CYC:26131\n\
F729  EA        NOP                             A:57 X:FF Y:FF P:24 SP:FB PPU:304,229 CYC:26138\n\
F72A  EA        NOP                             A:57 X:FF Y:FF P:24 SP:FB PPU:310,229 CYC:26140\n\
F72B  08        PHP                             A:57 X:FF Y:FF P:24 SP:FB PPU:316,229 CYC:26142\n\
F72C  48        PHA                             A:57 X:FF Y:FF P:24 SP:FA PPU:325,229 CYC:26145\n\
F72D  A0 11     LDY #$11                        A:57 X:FF Y:FF P:24 SP:F9 PPU:334,229 CYC:26148\n\
F72F  68        PLA                             A:57 X:FF Y:11 P:24 SP:F9 PPU:340,229 CYC:26150\n\
F730  28        PLP                             A:57 X:FF Y:11 P:24 SP:FA PPU: 11,230 CYC:26154\n\
F731  20 FF FA  JSR $FAFF                       A:57 X:FF Y:11 P:24 SP:FB PPU: 23,230 CYC:26158\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:FF Y:11 P:24 SP:F9 PPU: 41,230 CYC:26164\n\
FB01  30 18     BMI $FB1B                       A:57 X:FF Y:11 P:24 SP:F9 PPU: 47,230 CYC:26166\n\
FB03  B0 16     BCS $FB1B                       A:57 X:FF Y:11 P:24 SP:F9 PPU: 53,230 CYC:26168\n\
FB05  C9 57     CMP #$57                        A:57 X:FF Y:11 P:24 SP:F9 PPU: 59,230 CYC:26170\n\
FB07  D0 12     BNE $FB1B                       A:57 X:FF Y:11 P:27 SP:F9 PPU: 65,230 CYC:26172\n\
FB09  60        RTS                             A:57 X:FF Y:11 P:27 SP:F9 PPU: 71,230 CYC:26174\n\
F734  AD 47 06  LDA $0647 = 14                  A:57 X:FF Y:11 P:27 SP:FB PPU: 89,230 CYC:26180\n\
F737  C9 14     CMP #$14                        A:14 X:FF Y:11 P:25 SP:FB PPU:101,230 CYC:26184\n\
F739  F0 02     BEQ $F73D                       A:14 X:FF Y:11 P:27 SP:FB PPU:107,230 CYC:26186\n\
F73D  A0 FF     LDY #$FF                        A:14 X:FF Y:11 P:27 SP:FB PPU:116,230 CYC:26189\n\
F73F  A9 37     LDA #$37                        A:14 X:FF Y:FF P:A5 SP:FB PPU:122,230 CYC:26191\n\
F741  8D 47 06  STA $0647 = 14                  A:37 X:FF Y:FF P:25 SP:FB PPU:128,230 CYC:26193\n\
F744  20 0A FB  JSR $FB0A                       A:37 X:FF Y:FF P:25 SP:FB PPU:140,230 CYC:26197\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:FF Y:FF P:25 SP:F9 PPU:158,230 CYC:26203\n\
FB0C  38        SEC                             A:37 X:FF Y:FF P:E5 SP:F9 PPU:167,230 CYC:26206\n\
FB0D  A9 75     LDA #$75                        A:37 X:FF Y:FF P:E5 SP:F9 PPU:173,230 CYC:26208\n\
FB0F  60        RTS                             A:75 X:FF Y:FF P:65 SP:F9 PPU:179,230 CYC:26210\n\
F747  7B 48 05 *RRA $0548,Y @ 0647 = 37         A:75 X:FF Y:FF P:65 SP:FB PPU:197,230 CYC:26216\n\
F74A  EA        NOP                             A:11 X:FF Y:FF P:25 SP:FB PPU:218,230 CYC:26223\n\
F74B  EA        NOP                             A:11 X:FF Y:FF P:25 SP:FB PPU:224,230 CYC:26225\n\
F74C  08        PHP                             A:11 X:FF Y:FF P:25 SP:FB PPU:230,230 CYC:26227\n\
F74D  48        PHA                             A:11 X:FF Y:FF P:25 SP:FA PPU:239,230 CYC:26230\n\
F74E  A0 12     LDY #$12                        A:11 X:FF Y:FF P:25 SP:F9 PPU:248,230 CYC:26233\n\
F750  68        PLA                             A:11 X:FF Y:12 P:25 SP:F9 PPU:254,230 CYC:26235\n\
F751  28        PLP                             A:11 X:FF Y:12 P:25 SP:FA PPU:266,230 CYC:26239\n\
F752  20 10 FB  JSR $FB10                       A:11 X:FF Y:12 P:25 SP:FB PPU:278,230 CYC:26243\n\
FB10  70 09     BVS $FB1B                       A:11 X:FF Y:12 P:25 SP:F9 PPU:296,230 CYC:26249\n\
FB12  30 07     BMI $FB1B                       A:11 X:FF Y:12 P:25 SP:F9 PPU:302,230 CYC:26251\n\
FB14  90 05     BCC $FB1B                       A:11 X:FF Y:12 P:25 SP:F9 PPU:308,230 CYC:26253\n\
FB16  C9 11     CMP #$11                        A:11 X:FF Y:12 P:25 SP:F9 PPU:314,230 CYC:26255\n\
FB18  D0 01     BNE $FB1B                       A:11 X:FF Y:12 P:27 SP:F9 PPU:320,230 CYC:26257\n\
FB1A  60        RTS                             A:11 X:FF Y:12 P:27 SP:F9 PPU:326,230 CYC:26259\n\
F755  AD 47 06  LDA $0647 = 9B                  A:11 X:FF Y:12 P:27 SP:FB PPU:  3,231 CYC:26265\n\
F758  C9 9B     CMP #$9B                        A:9B X:FF Y:12 P:A5 SP:FB PPU: 15,231 CYC:26269\n\
F75A  F0 02     BEQ $F75E                       A:9B X:FF Y:12 P:27 SP:FB PPU: 21,231 CYC:26271\n\
F75E  A0 13     LDY #$13                        A:9B X:FF Y:12 P:27 SP:FB PPU: 30,231 CYC:26274\n\
F760  A2 FF     LDX #$FF                        A:9B X:FF Y:13 P:25 SP:FB PPU: 36,231 CYC:26276\n\
F762  A9 A5     LDA #$A5                        A:9B X:FF Y:13 P:A5 SP:FB PPU: 42,231 CYC:26278\n\
F764  8D 47 06  STA $0647 = 9B                  A:A5 X:FF Y:13 P:A5 SP:FB PPU: 48,231 CYC:26280\n\
F767  20 E9 FA  JSR $FAE9                       A:A5 X:FF Y:13 P:A5 SP:FB PPU: 60,231 CYC:26284\n\
FAE9  24 01     BIT $01 = FF                    A:A5 X:FF Y:13 P:A5 SP:F9 PPU: 78,231 CYC:26290\n\
FAEB  18        CLC                             A:A5 X:FF Y:13 P:E5 SP:F9 PPU: 87,231 CYC:26293\n\
FAEC  A9 B2     LDA #$B2                        A:A5 X:FF Y:13 P:E4 SP:F9 PPU: 93,231 CYC:26295\n\
FAEE  60        RTS                             A:B2 X:FF Y:13 P:E4 SP:F9 PPU: 99,231 CYC:26297\n\
F76A  7F 48 05 *RRA $0548,X @ 0647 = A5         A:B2 X:FF Y:13 P:E4 SP:FB PPU:117,231 CYC:26303\n\
F76D  EA        NOP                             A:05 X:FF Y:13 P:25 SP:FB PPU:138,231 CYC:26310\n\
F76E  EA        NOP                             A:05 X:FF Y:13 P:25 SP:FB PPU:144,231 CYC:26312\n\
F76F  EA        NOP                             A:05 X:FF Y:13 P:25 SP:FB PPU:150,231 CYC:26314\n\
F770  EA        NOP                             A:05 X:FF Y:13 P:25 SP:FB PPU:156,231 CYC:26316\n\
F771  20 EF FA  JSR $FAEF                       A:05 X:FF Y:13 P:25 SP:FB PPU:162,231 CYC:26318\n\
FAEF  70 2A     BVS $FB1B                       A:05 X:FF Y:13 P:25 SP:F9 PPU:180,231 CYC:26324\n\
FAF1  90 28     BCC $FB1B                       A:05 X:FF Y:13 P:25 SP:F9 PPU:186,231 CYC:26326\n\
FAF3  30 26     BMI $FB1B                       A:05 X:FF Y:13 P:25 SP:F9 PPU:192,231 CYC:26328\n\
FAF5  C9 05     CMP #$05                        A:05 X:FF Y:13 P:25 SP:F9 PPU:198,231 CYC:26330\n\
FAF7  D0 22     BNE $FB1B                       A:05 X:FF Y:13 P:27 SP:F9 PPU:204,231 CYC:26332\n\
FAF9  60        RTS                             A:05 X:FF Y:13 P:27 SP:F9 PPU:210,231 CYC:26334\n\
F774  AD 47 06  LDA $0647 = 52                  A:05 X:FF Y:13 P:27 SP:FB PPU:228,231 CYC:26340\n\
F777  C9 52     CMP #$52                        A:52 X:FF Y:13 P:25 SP:FB PPU:240,231 CYC:26344\n\
F779  F0 02     BEQ $F77D                       A:52 X:FF Y:13 P:27 SP:FB PPU:246,231 CYC:26346\n\
F77D  C8        INY                             A:52 X:FF Y:13 P:27 SP:FB PPU:255,231 CYC:26349\n\
F77E  A9 29     LDA #$29                        A:52 X:FF Y:14 P:25 SP:FB PPU:261,231 CYC:26351\n\
F780  8D 47 06  STA $0647 = 52                  A:29 X:FF Y:14 P:25 SP:FB PPU:267,231 CYC:26353\n\
F783  20 FA FA  JSR $FAFA                       A:29 X:FF Y:14 P:25 SP:FB PPU:279,231 CYC:26357\n\
FAFA  B8        CLV                             A:29 X:FF Y:14 P:25 SP:F9 PPU:297,231 CYC:26363\n\
FAFB  18        CLC                             A:29 X:FF Y:14 P:25 SP:F9 PPU:303,231 CYC:26365\n\
FAFC  A9 42     LDA #$42                        A:29 X:FF Y:14 P:24 SP:F9 PPU:309,231 CYC:26367\n\
FAFE  60        RTS                             A:42 X:FF Y:14 P:24 SP:F9 PPU:315,231 CYC:26369\n\
F786  7F 48 05 *RRA $0548,X @ 0647 = 29         A:42 X:FF Y:14 P:24 SP:FB PPU:333,231 CYC:26375\n\
F789  EA        NOP                             A:57 X:FF Y:14 P:24 SP:FB PPU: 13,232 CYC:26382\n\
F78A  EA        NOP                             A:57 X:FF Y:14 P:24 SP:FB PPU: 19,232 CYC:26384\n\
F78B  EA        NOP                             A:57 X:FF Y:14 P:24 SP:FB PPU: 25,232 CYC:26386\n\
F78C  EA        NOP                             A:57 X:FF Y:14 P:24 SP:FB PPU: 31,232 CYC:26388\n\
F78D  20 FF FA  JSR $FAFF                       A:57 X:FF Y:14 P:24 SP:FB PPU: 37,232 CYC:26390\n\
FAFF  70 1A     BVS $FB1B                       A:57 X:FF Y:14 P:24 SP:F9 PPU: 55,232 CYC:26396\n\
FB01  30 18     BMI $FB1B                       A:57 X:FF Y:14 P:24 SP:F9 PPU: 61,232 CYC:26398\n\
FB03  B0 16     BCS $FB1B                       A:57 X:FF Y:14 P:24 SP:F9 PPU: 67,232 CYC:26400\n\
FB05  C9 57     CMP #$57                        A:57 X:FF Y:14 P:24 SP:F9 PPU: 73,232 CYC:26402\n\
FB07  D0 12     BNE $FB1B                       A:57 X:FF Y:14 P:27 SP:F9 PPU: 79,232 CYC:26404\n\
FB09  60        RTS                             A:57 X:FF Y:14 P:27 SP:F9 PPU: 85,232 CYC:26406\n\
F790  AD 47 06  LDA $0647 = 14                  A:57 X:FF Y:14 P:27 SP:FB PPU:103,232 CYC:26412\n\
F793  C9 14     CMP #$14                        A:14 X:FF Y:14 P:25 SP:FB PPU:115,232 CYC:26416\n\
F795  F0 02     BEQ $F799                       A:14 X:FF Y:14 P:27 SP:FB PPU:121,232 CYC:26418\n\
F799  C8        INY                             A:14 X:FF Y:14 P:27 SP:FB PPU:130,232 CYC:26421\n\
F79A  A9 37     LDA #$37                        A:14 X:FF Y:15 P:25 SP:FB PPU:136,232 CYC:26423\n\
F79C  8D 47 06  STA $0647 = 14                  A:37 X:FF Y:15 P:25 SP:FB PPU:142,232 CYC:26425\n\
F79F  20 0A FB  JSR $FB0A                       A:37 X:FF Y:15 P:25 SP:FB PPU:154,232 CYC:26429\n\
FB0A  24 01     BIT $01 = FF                    A:37 X:FF Y:15 P:25 SP:F9 PPU:172,232 CYC:26435\n\
FB0C  38        SEC                             A:37 X:FF Y:15 P:E5 SP:F9 PPU:181,232 CYC:26438\n\
FB0D  A9 75     LDA #$75                        A:37 X:FF Y:15 P:E5 SP:F9 PPU:187,232 CYC:26440\n\
FB0F  60        RTS                             A:75 X:FF Y:15 P:65 SP:F9 PPU:193,232 CYC:26442\n\
F7A2  7F 48 05 *RRA $0548,X @ 0647 = 37         A:75 X:FF Y:15 P:65 SP:FB PPU:211,232 CYC:26448\n\
F7A5  EA        NOP                             A:11 X:FF Y:15 P:25 SP:FB PPU:232,232 CYC:26455\n\
F7A6  EA        NOP                             A:11 X:FF Y:15 P:25 SP:FB PPU:238,232 CYC:26457\n\
F7A7  EA        NOP                             A:11 X:FF Y:15 P:25 SP:FB PPU:244,232 CYC:26459\n\
F7A8  EA        NOP                             A:11 X:FF Y:15 P:25 SP:FB PPU:250,232 CYC:26461\n\
F7A9  20 10 FB  JSR $FB10                       A:11 X:FF Y:15 P:25 SP:FB PPU:256,232 CYC:26463\n\
FB10  70 09     BVS $FB1B                       A:11 X:FF Y:15 P:25 SP:F9 PPU:274,232 CYC:26469\n\
FB12  30 07     BMI $FB1B                       A:11 X:FF Y:15 P:25 SP:F9 PPU:280,232 CYC:26471\n\
FB14  90 05     BCC $FB1B                       A:11 X:FF Y:15 P:25 SP:F9 PPU:286,232 CYC:26473\n\
FB16  C9 11     CMP #$11                        A:11 X:FF Y:15 P:25 SP:F9 PPU:292,232 CYC:26475\n\
FB18  D0 01     BNE $FB1B                       A:11 X:FF Y:15 P:27 SP:F9 PPU:298,232 CYC:26477\n\
FB1A  60        RTS                             A:11 X:FF Y:15 P:27 SP:F9 PPU:304,232 CYC:26479\n\
F7AC  AD 47 06  LDA $0647 = 9B                  A:11 X:FF Y:15 P:27 SP:FB PPU:322,232 CYC:26485\n\
F7AF  C9 9B     CMP #$9B                        A:9B X:FF Y:15 P:A5 SP:FB PPU:334,232 CYC:26489\n\
F7B1  F0 02     BEQ $F7B5                       A:9B X:FF Y:15 P:27 SP:FB PPU:340,232 CYC:26491\n\
F7B5  60        RTS                             A:9B X:FF Y:15 P:27 SP:FB PPU:  8,233 CYC:26494\n\
C655  A5 00     LDA $00 = 00                    A:9B X:FF Y:15 P:27 SP:FD PPU: 26,233 CYC:26500\n\
C657  05 10     ORA $10 = 00                    A:00 X:FF Y:15 P:27 SP:FD PPU: 35,233 CYC:26503\n\
C659  05 11     ORA $11 = 00                    A:00 X:FF Y:15 P:27 SP:FD PPU: 44,233 CYC:26506\n\
C65B  F0 0E     BEQ $C66B                       A:00 X:FF Y:15 P:27 SP:FD PPU: 53,233 CYC:26509\n\
C66B  20 89 C6  JSR $C689                       A:00 X:FF Y:15 P:27 SP:FD PPU: 62,233 CYC:26512\n\
C689  A9 02     LDA #$02                        A:00 X:FF Y:15 P:27 SP:FB PPU: 80,233 CYC:26518\n\
C68B  8D 15 40  STA $4015 = FF                  A:02 X:FF Y:15 P:25 SP:FB PPU: 86,233 CYC:26520\n\
C68E  A9 3F     LDA #$3F                        A:02 X:FF Y:15 P:25 SP:FB PPU: 98,233 CYC:26524\n\
C690  8D 04 40  STA $4004 = FF                  A:3F X:FF Y:15 P:25 SP:FB PPU:104,233 CYC:26526\n\
C693  A9 9A     LDA #$9A                        A:3F X:FF Y:15 P:25 SP:FB PPU:116,233 CYC:26530\n\
C695  8D 05 40  STA $4005 = FF                  A:9A X:FF Y:15 P:A5 SP:FB PPU:122,233 CYC:26532\n\
C698  A9 FF     LDA #$FF                        A:9A X:FF Y:15 P:A5 SP:FB PPU:134,233 CYC:26536\n\
C69A  8D 06 40  STA $4006 = FF                  A:FF X:FF Y:15 P:A5 SP:FB PPU:140,233 CYC:26538\n\
C69D  A9 00     LDA #$00                        A:FF X:FF Y:15 P:A5 SP:FB PPU:152,233 CYC:26542\n\
C69F  8D 07 40  STA $4007 = FF                  A:00 X:FF Y:15 P:27 SP:FB PPU:158,233 CYC:26544\n\
C6A2  60        RTS                             A:00 X:FF Y:15 P:27 SP:FB PPU:170,233 CYC:26548\n\
C66E  60        RTS                             A:00 X:FF Y:15 P:27 SP:FD PPU:188,233 CYC:26554\n\
").split('\n');
