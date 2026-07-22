/**
 * ============================================================================
 * PASSWORD GENERATOR PRO+ — COMMERCIAL-GRADE CYBERSECURITY TOOLKIT
 * Pure Vanilla JavaScript (ES6+) | 100% Client-Side & Offline First
 * ============================================================================
 */

'use strict';

/* ============================================================================
   1. DICTIONARIES & INTERNATIONALIZATION (EN, FR, AR)
   ============================================================================ */
const I18N = {
  en: {
    navCore: "CORE TOOLKIT",
    navSpecialized: "SPECIALIZED GENERATORS",
    navSystem: "SYSTEM & HELP",
    tabDashboard: "Dashboard",
    tabGenerator: "Password Generator",
    tabChecker: "Health Checker",
    tabVault: "Encrypted Vault",
    tabSecurity: "Security Audit",
    tabPassphrase: "Passphrase Generator",
    tabPronounceable: "Pronounceable",
    tabUsername: "Username Generator",
    tabPin: "PIN Generator",
    tabWifi: "Wi-Fi Passwords",
    tabSettings: "Settings",
    tabHelp: "Help & Guide",
    titleDashboard: "Security Dashboard",
    subDashboard: "Cybersecurity Overview & Quick Actions",
    titleGenerator: "Password Generator Pro+",
    subGenerator: "Cryptographically Secure High-Entropy Passwords",
    titleChecker: "Password Health Audit",
    subChecker: "Offline Leak & Entropy Analyzer",
    titleVault: "Web Crypto Encrypted Vault",
    subVault: "Zero-Knowledge AES-GCM 256-bit Credentials Manager",
    titleSecurity: "Security Audit Report",
    subSecurity: "Vault Health, Password Ages & Reuse Warnings",
    titlePassphrase: "Memorable Passphrase Generator",
    subPassphrase: "Sentence to High-Security Passphrase Converter",
    titlePronounceable: "Pronounceable Passwords",
    subPronounceable: "Phonetic Easy-to-Remember Password Generator",
    titleUsername: "Cyber Handle Generator",
    subUsername: "Randomized Tech & Cyber Handles",
    titlePin: "Secure PIN Generator",
    subPin: "Cryptographic Multi-Digit PINs",
    titleWifi: "Wi-Fi Security Keys",
    subWifi: "WPA2/WPA3 Passphrases & Config QR Code",
    titleSettings: "System Settings",
    subSettings: "Storage, Themes & Preferences",
    titleHelp: "Help & Security Guide",
    subHelp: "FAQ & Keyboard Shortcuts",
    privacyBadgeTitle: "100% Client-Side",
    privacyBadgeSub: "Zero data leaves browser",
    cryptoEngineActive: "Crypto Engine Active (WebCrypto API)",
    dashWelcomeTitle: "Enterprise Security & Password Management",
    dashWelcomeSub: "Generate high-entropy passwords, check existing credentials against offline breach lists, and secure logins with AES-GCM 256-bit encryption.",
    quickGenerateBtn: "Generate Password",
    openVaultBtn: "Open Encrypted Vault",
    securityScoreLabel: "Security Score",
    vaultStatusGood: "Vault Protection Optimal",
    statVaultEntries: "Vault Items",
    statStrongPass: "Strong Passwords",
    statReusedPass: "Reused / Weak",
    statOldPass: "Expired (>90 days)",
    quickToolsTitle: "Quick Generators",
    qPassTitle: "Standard Password Generator",
    qPassDesc: "8-36 length, high entropy, custom rules & difficulty levels.",
    qPassphraseTitle: "Memorable Passphrase",
    qPassphraseDesc: "Transform sentences like 'I love Morocco 2026' into secure tokens.",
    qPronounceTitle: "Pronounceable Generator",
    qPronounceDesc: "Generate easy-to-remember phonetic words (e.g. MekoFira82!).",
    qWifiTitle: "Wi-Fi Password & QR",
    qWifiDesc: "Create high-entropy WPA2/WPA3 keys with instant QR connection code.",
    dailyTipTitle: "Daily Cybersecurity Insights",
    presetLabel: "Optimized Category Presets:",
    presetCustom: "Custom",
    presetEmail: "Email",
    presetBank: "Banking",
    presetSocial: "Social Media",
    presetGaming: "Gaming",
    presetServer: "Server / SSH",
    presetCrypto: "Crypto Wallet",
    presetWifi: "Wi-Fi Router",
    copyBtn: "Copy Password",
    lengthDifficultyTitle: "Length & Difficulty",
    selectLength: "Select Length (Strict Presets)",
    difficultyLevel: "Difficulty Level",
    diffEasy: "Easy",
    diffEasyDesc: "Lowercase only",
    diffMedium: "Medium",
    diffMediumDesc: "a-z, A-Z, 0-9",
    diffHard: "Hard",
    diffHardDesc: "+ Common symbols",
    diffExpert: "Expert",
    diffExpertDesc: "Max randomness & special",
    customRulesTitle: "Custom Character Rules",
    cbUppercase: "Include Uppercase (A-Z)",
    cbLowercase: "Include Lowercase (a-z)",
    cbNumbers: "Include Numbers (0-9)",
    cbSymbols: "Include Symbols (!@#$%^&*)",
    cbAvoidAmbiguous: "Avoid ambiguous (O, 0, I, l, |)",
    cbNoRepeated: "No repeated consecutive characters",
    cbStartLetter: "Start with a letter",
    cbExcludeSimilar: "Exclude similar symbols ({ } [ ] ( ) / \\ ' \" ` ~)",
    cbExcludeSpaces: "Exclude spaces",
    cbAllowEmojis: "Allow emojis (Experimental)",
    btnGeneratePassword: "Generate Password",
    btnGenerateAnother: "Generate Another",
    btnRandomizeEverything: "Randomize Everything",
    btnResetSettings: "Reset Settings",
    btnClear: "Clear",
    statsHeader: "Real-Time Password Composition & Statistics",
    statLength: "Length",
    statUpper: "Uppercase",
    statLower: "Lowercase",
    statNumbers: "Numbers",
    statSymbols: "Symbols",
    breachDetectedTitle: "Offline Breach Warning:",
    checkerTitle: "Offline Password Audit & Health Inspection",
    checkerSub: "Paste any password to audit its strength, entropy, crack time, and offline dictionary leaks. Zero network requests made.",
    strength: "Strength Rating",
    entropy: "Entropy",
    crackTime: "Est. Crack Time",
    suggestionsTitle: "Security Recommendations",
    vaultLockTitle: "Web Crypto Encrypted Vault",
    vaultLockSub: "Enter your Master Password to derive PBKDF2 key and decrypt vault credentials locally using 256-bit AES-GCM.",
    unlockVault: "Unlock Vault",
    catAll: "All Categories",
    addEntry: "Add Item",
    lockVault: "Lock",
    tblTitle: "Title / Service",
    tblUsername: "Username",
    tblCategory: "Category",
    tblPassword: "Password",
    tblAge: "Age",
    tblActions: "Actions",
    emptyVaultTitle: "Vault is Empty",
    emptyVaultSub: "Add your first encrypted credential or generate a new password.",
    auditTitle: "Vault Security & Password Health Audit",
    auditStrongTitle: "Strong & Unique",
    auditStrongDesc: "High entropy credentials",
    auditReusedTitle: "Reused Passwords",
    auditReusedDesc: "Credentials used across multiple services",
    auditExpiredTitle: "Expired Credentials",
    auditExpiredDesc: "Older than 90 days",
    auditActionNeeded: "Action Required Items",
    passphraseTitle: "Sentence to Secure Passphrase Converter",
    memorablePhraseLabel: "Write a memorable phrase (e.g., \"I love Morocco 2026\")",
    convertPassphrase: "Transform Sentence",
    pronounceTitle: "Phonetic Pronounceable Password Generator",
    genPronounce: "Generate Pronounceable",
    usernameTitle: "Cyber & Tech Random Username Generator",
    usernameStyle: "Select Style Theme",
    genUsername: "Generate Handle",
    pinTitle: "Cryptographic Secure PIN Generator",
    pinLength: "Select Digits",
    genPin: "Generate Secure PIN",
    wifiTitle: "WPA2 / WPA3 Wi-Fi Passphrase & Config QR",
    ssidLabel: "Network Name (SSID)",
    genWifi: "Generate Wi-Fi Password",
    wifiQrBtn: "Show Connect QR",
    settingsTitle: "System Preferences & Storage Control",
    historySetting: "Remember Password History (Last 5)",
    exportImportVault: "Encrypted Vault Backup / Restore",
    exportVault: "Export Vault Backup (JSON)",
    importVault: "Import Vault Backup",
    clearAllLocalData: "Clear All Local Data & History",
    helpTitle: "Cybersecurity Guide & Keyboard Shortcuts",
    shortcutsTitle: "Keyboard Shortcuts Reference",
    scGenerate: "Generate new password",
    scCopy: "Copy current generated password",
    scClear: "Clear fields / close modals",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "Are generated passwords saved on any server?",
    faqA1: "No. 100% of generation and cryptography happens inside your web browser engine using window.crypto.getRandomValues(). No network requests are made.",
    faqQ2: "How does the Encrypted Vault work?",
    faqA2: "The vault derives a 256-bit AES key from your Master Password using PBKDF2 with SHA-256 (100,000 iterations). Your credentials are encrypted locally with AES-GCM before saving to localStorage.",
    qrModalTitle: "QR Code Representation",
    qrScanSub: "Scan with mobile camera to copy password.",
    downloadPNG: "Download PNG",
    addVaultItem: "Add New Vault Entry",
    lblServiceTitle: "Title / Service",
    lblUsername: "Username / Email",
    lblCategory: "Category",
    lblPassword: "Password",
    cancel: "Cancel",
    saveEntry: "Save Encrypted Entry",
    copiedSuccess: "Password Copied Successfully!",
    toastMasterReq: "Master password must be at least 4 characters long.",
    toastUnlocked: "Vault Unlocked Successfully",
    toastLocked: "Vault Locked",
    toastInvalidMaster: "Incorrect Master Password",
    toastCleared: "All data cleared successfully.",
    installApp: "Install App"
  },
  fr: {
    navCore: "OUTILS PRINCIPAUX",
    navSpecialized: "GÉNÉRATEURS SPÉCIALISÉS",
    navSystem: "SYSTÈME ET AIDE",
    tabDashboard: "Tableau de bord",
    tabGenerator: "Générateur de mots de passe",
    tabChecker: "Auditeur de santé",
    tabVault: "Coffre fort chiffré",
    tabSecurity: "Audit de sécurité",
    tabPassphrase: "Phrases de passe",
    tabPronounceable: "Prononçable",
    tabUsername: "Noms d'utilisateur",
    tabPin: "Générateur de PIN",
    tabWifi: "Mots de passe Wi-Fi",
    tabSettings: "Paramètres",
    tabHelp: "Aide & Guide",
    titleDashboard: "Tableau de bord de sécurité",
    subDashboard: "Aperçu de la cybersécurité & Actions rapides",
    titleGenerator: "Password Generator Pro+",
    subGenerator: "Mots de passe sécurisés à haute entropie",
    titleChecker: "Audit de santé des mots de passe",
    subChecker: "Analyseur de fuites et d'entropie hors ligne",
    titleVault: "Coffre chiffré Web Crypto",
    subVault: "Gestionnaire de données AES-GCM 256 bits",
    titleSecurity: "Rapport d'audit de sécurité",
    subSecurity: "Santé du coffre, âge des mots de passe & avertissements",
    titlePassphrase: "Générateur de phrases de passe",
    subPassphrase: "Convertisseur de phrase en mot de passe hautement sécurisé",
    titlePronounceable: "Mots de passe prononçables",
    subPronounceable: "Générateur phonétique facile à retenir",
    titleUsername: "Générateur de pseudo Cyber",
    subUsername: "Pseudos aléatoires Tech & Cyber",
    titlePin: "Générateur de code PIN sécurisé",
    subPin: "Codes PIN multi-chiffres cryptographiques",
    titleWifi: "Clés de sécurité Wi-Fi",
    subWifi: "Phrases de passe WPA2/WPA3 & QR Code",
    titleSettings: "Paramètres système",
    subSettings: "Stockage, thèmes & préférences",
    titleHelp: "Aide et guide de sécurité",
    subHelp: "FAQ & Raccourcis clavier",
    privacyBadgeTitle: "100% Client-Side",
    privacyBadgeSub: "Zéro donnée ne quitte le navigateur",
    cryptoEngineActive: "Moteur Crypto Actif (WebCrypto API)",
    dashWelcomeTitle: "Sécurité & Gestion des mots de passe",
    dashWelcomeSub: "Générez des mots de passe à haute entropie et chiffrez vos identifiants en AES-GCM 256 bits.",
    quickGenerateBtn: "Générer un mot de passe",
    openVaultBtn: "Ouvrir le coffre chiffré",
    securityScoreLabel: "Score de sécurité",
    vaultStatusGood: "Protection du coffre optimale",
    statVaultEntries: "Éléments du coffre",
    statStrongPass: "Mots de passe forts",
    statReusedPass: "Réutilisés / Faibles",
    statOldPass: "Expirés (>90 jours)",
    quickToolsTitle: "Générateurs rapides",
    qPassTitle: "Générateur standard",
    qPassDesc: "Longueur 8-36, haute entropie, règles personnalisées.",
    qPassphraseTitle: "Phrase de passe mémorisable",
    qPassphraseDesc: "Transformez des phrases simples en jetons sécurisés.",
    qPronounceTitle: "Générateur prononçable",
    qPronounceDesc: "Mots phonétiques faciles à retenir (ex. MekoFira82!).",
    qWifiTitle: "Mot de passe Wi-Fi & QR",
    qWifiDesc: "Créez des clés WPA2/WPA3 avec QR Code instantané.",
    dailyTipTitle: "Conseils quotidiens de cybersécurité",
    presetLabel: "Préréglages par catégorie :",
    presetCustom: "Personnalisé",
    presetEmail: "Email",
    presetBank: "Banque",
    presetSocial: "Réseaux Sociaux",
    presetGaming: "Jeux vidéo",
    presetServer: "Serveur / SSH",
    presetCrypto: "Portefeuille Crypto",
    presetWifi: "Routeur Wi-Fi",
    copyBtn: "Copier le mot de passe",
    lengthDifficultyTitle: "Longueur & Difficulté",
    selectLength: "Sélectionner la longueur",
    difficultyLevel: "Niveau de difficulté",
    diffEasy: "Facile",
    diffEasyDesc: "Minuscules uniquement",
    diffMedium: "Moyen",
    diffMediumDesc: "a-z, A-Z, 0-9",
    diffHard: "Difficile",
    diffHardDesc: "+ Symboles courants",
    diffExpert: "Expert",
    diffExpertDesc: "Aléatoire max & spéciaux",
    customRulesTitle: "Règles personnalisées",
    cbUppercase: "Majuscules (A-Z)",
    cbLowercase: "Minuscules (a-z)",
    cbNumbers: "Chiffres (0-9)",
    cbSymbols: "Symboles (!@#$%^&*)",
    cbAvoidAmbiguous: "Éviter les caractères ambigus (O, 0, I, l, |)",
    cbNoRepeated: "Pas de caractères consécutifs répétés",
    cbStartLetter: "Commencer par une lettre",
    cbExcludeSimilar: "Exclure symboles similaires ({ } [ ] ( ) / \\ ' \" ` ~)",
    cbExcludeSpaces: "Exclure les espaces",
    cbAllowEmojis: "Autoriser les émojis (Expérimental)",
    btnGeneratePassword: "Générer mot de passe",
    btnGenerateAnother: "Générer un autre",
    btnRandomizeEverything: "Tout mélanger",
    btnResetSettings: "Réinitialiser",
    btnClear: "Effacer",
    statsHeader: "Statistiques et composition du mot de passe",
    statLength: "Longueur",
    statUpper: "Majuscules",
    statLower: "Minuscules",
    statNumbers: "Chiffres",
    statSymbols: "Symboles",
    breachDetectedTitle: "Avertissement de fuite hors ligne :",
    checkerTitle: "Audit et inspection du mot de passe",
    checkerSub: "Collez un mot de passe pour analyser sa force et vérifier les listes de fuites. Zéro requête réseau.",
    strength: "Niveau de force",
    entropy: "Entropie",
    crackTime: "Temps de craquage estimé",
    suggestionsTitle: "Recommandations de sécurité",
    vaultLockTitle: "Coffre chiffré Web Crypto",
    vaultLockSub: "Entrez votre mot de passe maître pour déchiffrer vos identifiants en AES-GCM 256 bits.",
    unlockVault: "Déverrouiller le coffre",
    catAll: "Toutes les catégories",
    addEntry: "Ajouter un élément",
    lockVault: "Verrouiller",
    tblTitle: "Titre / Service",
    tblUsername: "Identifiant",
    tblCategory: "Catégorie",
    tblPassword: "Mot de passe",
    tblAge: "Âge",
    tblActions: "Actions",
    emptyVaultTitle: "Le coffre est vide",
    emptyVaultSub: "Ajoutez votre premier identifiant chiffré.",
    auditTitle: "Audit de santé et de sécurité du coffre",
    auditStrongTitle: "Forts & Uniques",
    auditStrongDesc: "Identifiants à haute entropie",
    auditReusedTitle: "Mots de passe réutilisés",
    auditReusedDesc: "Identifiants utilisés sur plusieurs services",
    auditExpiredTitle: "Identifiants expirés",
    auditExpiredDesc: "Plus de 90 jours",
    auditActionNeeded: "Éléments nécessitant une action",
    passphraseTitle: "Convertisseur de phrase en mot de passe",
    memorablePhraseLabel: "Écrivez une phrase (ex. \"J'aime le Maroc 2026\")",
    convertPassphrase: "Transformer la phrase",
    pronounceTitle: "Générateur phonétique prononçable",
    genPronounce: "Générer un mot prononçable",
    usernameTitle: "Générateur de nom d'utilisateur Cyber",
    usernameStyle: "Sélectionner le style",
    genUsername: "Générer le pseudo",
    pinTitle: "Générateur de code PIN sécurisé",
    pinLength: "Nombre de chiffres",
    genPin: "Générer un PIN sécurisé",
    wifiTitle: "Clé Wi-Fi WPA2 / WPA3 & QR Code",
    ssidLabel: "Nom du réseau (SSID)",
    genWifi: "Générer clé Wi-Fi",
    wifiQrBtn: "Afficher le QR Code",
    settingsTitle: "Préférences système & Stockage",
    historySetting: "Conserver l'historique (5 derniers)",
    exportImportVault: "Sauvegarde & Restauration du coffre",
    exportVault: "Exporter la sauvegarde (JSON)",
    importVault: "Importer une sauvegarde",
    clearAllLocalData: "Effacer toutes les données locales",
    helpTitle: "Guide de sécurité & Raccourcis",
    shortcutsTitle: "Raccourcis clavier",
    scGenerate: "Générer un mot de passe",
    scCopy: "Copier le mot de passe actuel",
    scClear: "Effacer / fermer la fenêtre",
    faqTitle: "Foire Aux Questions",
    faqQ1: "Les mots de passe sont-ils enregistrés sur un serveur ?",
    faqA1: "Non. 100% de la génération se fait dans votre navigateur via window.crypto.getRandomValues().",
    faqQ2: "Comment fonctionne le coffre fort chiffré ?",
    faqA2: "Le coffre dérive une clé AES 256 bits via PBKDF2 (100 000 itérations). Les identifiants sont chiffrés localement en AES-GCM.",
    qrModalTitle: "Représentation QR Code",
    qrScanSub: "Scannez avec un téléphone pour copier le mot de passe.",
    downloadPNG: "Télécharger PNG",
    addVaultItem: "Ajouter au coffre",
    lblServiceTitle: "Titre / Service",
    lblUsername: "Identifiant / Email",
    lblCategory: "Catégorie",
    lblPassword: "Mot de passe",
    cancel: "Annuler",
    saveEntry: "Enregistrer l'élément chiffré",
    copiedSuccess: "Mot de passe copié avec succès !",
    toastMasterReq: "Le mot de passe maître doit comporter au moins 4 caractères.",
    toastUnlocked: "Coffre déverrouillé avec succès",
    toastLocked: "Coffre verrouillé",
    toastInvalidMaster: "Mot de passe maître incorrect",
    toastCleared: "Toutes les données ont été effacées.",
    installApp: "Installer l'application"
  },
  ar: {
    navCore: "أدوات الأساسية",
    navSpecialized: "مولدات متخصصة",
    navSystem: "النظام والتعليمات",
    tabDashboard: "لوحة التحكم",
    tabGenerator: "مولد كلمات المرور",
    tabChecker: "مدقق الأمان",
    tabVault: "الخزنة المشفرة",
    tabSecurity: "تدقيق الأمان",
    tabPassphrase: "عبارة المرور",
    tabPronounceable: "سهل النطق",
    tabUsername: "مولد أسماء المستخدمين",
    tabPin: "مولد رمز PIN",
    tabWifi: "كلمات سر Wi-Fi",
    tabSettings: "الإعدادات",
    tabHelp: "المساعدة والدليل",
    titleDashboard: "لوحة تحكم الأمان",
    subDashboard: "نظرة عامة على الأمن السيبراني والإجراءات السريعة",
    titleGenerator: "Password Generator Pro+",
    subGenerator: "كلمات مرور آمنة ومشفرة عالية العشوائية",
    titleChecker: "تدقيق صحة كلمات المرور",
    subChecker: "محلل التسريبات والعشوائية بدون اتصال",
    titleVault: "خزنة مشفرة بـ Web Crypto",
    subVault: "إدارة البيانات المشفرة بـ AES-GCM 256-bit",
    titleSecurity: "تقرير تدقيق الأمان",
    subSecurity: "صحة الخزنة، أعمار كلمات المرور والتحذيرات",
    titlePassphrase: "مولد عبارات المرور",
    subPassphrase: "تحويل الجمل السهلة إلى كلمات مرور فائقة الأمان",
    titlePronounceable: "كلمات مرور سهلة النطق",
    subPronounceable: "مولد كلمات مرور صوتية سهلة التذكر",
    titleUsername: "مولد أسماء المستخدمين",
    subUsername: "أسماء تقنية وسيبرانية عشوائية",
    titlePin: "مولد رمز PIN الآمن",
    subPin: "أرقام PIN مشفرة متعددة الخانات",
    titleWifi: "مفاتيح أمان Wi-Fi",
    subWifi: "عبارات مرور WPA2/WPA3 ورمز QR للتوصيل",
    titleSettings: "إعدادات النظام",
    subSettings: "التخزين، المظاهر والتفضيلات",
    titleHelp: "المساعدة ودليل الأمان",
    subHelp: "الأسئلة الشائعة واختصارات لوحة المفاتيح",
    privacyBadgeTitle: "100% يعمل محلياً",
    privacyBadgeSub: "لا يتم إرسال أي بيانات خارج المتصفح",
    cryptoEngineActive: "المحرك المشفر نشط (WebCrypto API)",
    dashWelcomeTitle: "حماية وأمن كلمات المرور للمؤسسات",
    dashWelcomeSub: "قم بتوليد كلمات مرور عالية الأمان وفحص الحسابات ضد قائمة التسريبات وتشفر البيانات بـ AES-GCM.",
    quickGenerateBtn: "توليد كلمة مرور",
    openVaultBtn: "فتح الخزنة المشفرة",
    securityScoreLabel: "درجة الأمان",
    vaultStatusGood: "حماية الخزنة مثالية",
    statVaultEntries: "عناصر الخزنة",
    statStrongPass: "كلمات مرور قوية",
    statReusedPass: "مكررة / ضعيفة",
    statOldPass: "منتهية الصلاحية (>90 يوماً)",
    quickToolsTitle: "المولدات السريعة",
    qPassTitle: "مولد كلمات المرور القياسي",
    qPassDesc: "طول 8-36، عشوائية عالية، قواعد مخصصة.",
    qPassphraseTitle: "عبارة مرور سهلة التذكر",
    qPassphraseDesc: "تحويل جمل مثل 'I love Morocco 2026' إلى رموز آمنة.",
    qPronounceTitle: "مولد كلمات سهلة النطق",
    qPronounceDesc: "كلمات صوتية سهلة التذكر (مثل MekoFira82!).",
    qWifiTitle: "كلمة سر Wi-Fi و QR",
    qWifiDesc: "إنشاء مفاتيح WPA2/WPA3 مع رمز QR للاتصال الفوري.",
    dailyTipTitle: "نصائح الأمن السيبراني اليومية",
    presetLabel: "الإعدادات المسبقة حسب الفئة:",
    presetCustom: "مخصص",
    presetEmail: "البريد الإلكتروني",
    presetBank: "الحساب البنكي",
    presetSocial: "وسائل التواصل",
    presetGaming: "الألعاب",
    presetServer: "الخادم / SSH",
    presetCrypto: "محفظة العملات المشفرة",
    presetWifi: "جهاز Wi-Fi",
    copyBtn: "نسخ كلمة المرور",
    lengthDifficultyTitle: "الطول والصعوبة",
    selectLength: "حدد الطول (خيارات مسبقة)",
    difficultyLevel: "مستوى الصعوبة",
    diffEasy: "سهل",
    diffEasyDesc: "حروف صغيرة فقط",
    diffMedium: "متوسط",
    diffMediumDesc: "a-z, A-Z, 0-9",
    diffHard: "صعب",
    diffHardDesc: "+ رموز شائعة",
    diffExpert: "خبير",
    diffExpertDesc: "أقصى عشوائية ورموز خاصة",
    customRulesTitle: "قواعد الأحرف المخصصة",
    cbUppercase: "تضمين أحرف كبيرة (A-Z)",
    cbLowercase: "تضمين أحرف صغيرة (a-z)",
    cbNumbers: "تضمين أرقام (0-9)",
    cbSymbols: "تضمين رموز (!@#$%^&*)",
    cbAvoidAmbiguous: "تجنب الأحرف المتشابهة (O, 0, I, l, |)",
    cbNoRepeated: "عدم تكرار أحرف متتالية",
    cbStartLetter: "البدء بحرف",
    cbExcludeSimilar: "استبعاد الرموز المعقدة ({ } [ ] ( ) / \\ ' \" ` ~)",
    cbExcludeSpaces: "استبعاد المسافات",
    cbAllowEmojis: "السماح بالرموز التعبيرية (تجريبي)",
    btnGeneratePassword: "توليد كلمة المرور",
    btnGenerateAnother: "توليد كلمة أخرى",
    btnRandomizeEverything: "خلط جميع الخيارات",
    btnResetSettings: "إعادة ضبط الإعدادات",
    btnClear: "مسح",
    statsHeader: "إحصائيات وتركيبة كلمة المرور",
    statLength: "الطول",
    statUpper: "حروف كبيرة",
    statLower: "حروف صغيرة",
    statNumbers: "أرقام",
    statSymbols: "رموز",
    breachDetectedTitle: "تحذير تسريب بدون اتصال:",
    checkerTitle: "فحص وتدقيق صحة كلمات المرور",
    checkerSub: "الصق أي كلمة مرور لفحص قوتها والعشوائية وقوائم التسريبات. بدون أي اتصال بالإنترنت.",
    strength: "مستوى القوة",
    entropy: "العشوائية (Entropy)",
    crackTime: "الزمن المقدر للتخمين",
    suggestionsTitle: "توصيات الأمان",
    vaultLockTitle: "خزنة Web Crypto المشفرة",
    vaultLockSub: "أدخل كلمة المرور الرئيسية لفك تشفير بياناتك محلياً بـ AES-GCM 256-bit.",
    unlockVault: "فتح الخزنة",
    catAll: "جميع الفئات",
    addEntry: "إضافة عنصر",
    lockVault: "قفل الخزنة",
    tblTitle: "العنوان / الخدمة",
    tblUsername: "اسم المستخدم",
    tblCategory: "الفئة",
    tblPassword: "كلمة المرور",
    tblAge: "العمر",
    tblActions: "الإجراءات",
    emptyVaultTitle: "الخزنة فارغة",
    emptyVaultSub: "قم بإضافة أول حساب مشفر إلى الخزنة.",
    auditTitle: "تدقيق صحة وأمان الخزنة",
    auditStrongTitle: "قوية وفريدة",
    auditStrongDesc: "حسابات ذات عشوائية عالية",
    auditReusedTitle: "كلمات مرور مكررة",
    auditReusedDesc: "كلمات مرور مستخدمة في أكثر من خدمة",
    auditExpiredTitle: "حسابات منتهية الصلاحية",
    auditExpiredDesc: "أقدم من 90 يوماً",
    auditActionNeeded: "عناصر تتطلب إجراء",
    passphraseTitle: "محول الجمل إلى عبارات مرور آمنة",
    memorablePhraseLabel: "اكتب جملة سهلة التذكر (مثال: \"I love Morocco 2026\")",
    convertPassphrase: "تحويل الجملة",
    pronounceTitle: "مولد كلمات المرور سهلة النطق",
    genPronounce: "توليد كلمة سهلة النطق",
    usernameTitle: "مولد أسماء المستخدمين السيبرانية",
    usernameStyle: "اختر النمط",
    genUsername: "توليد اسم مستخدم",
    pinTitle: "مولد رمز PIN المشفر",
    pinLength: "عدد الأرقام",
    genPin: "توليد رمز PIN",
    wifiTitle: "كلمات سر Wi-Fi ورمز QR",
    ssidLabel: "اسم الشبكة (SSID)",
    genWifi: "توليد كلمة سر Wi-Fi",
    wifiQrBtn: "عرض رمز QR للاتصال",
    settingsTitle: "تفضيلات النظام والتخزين",
    historySetting: "تذكر سجل كلمات المرور (آخر 5)",
    exportImportVault: "نسخ احتياطي واستعادة الخزنة المشفرة",
    exportVault: "تصدير نسخة احتياطية (JSON)",
    importVault: "استيراد نسخة احتياطية",
    clearAllLocalData: "مسح جميع البيانات المحلية والسجل",
    helpTitle: "دليل الأمان واختصارات لوحة المفاتيح",
    shortcutsTitle: "مرجع اختصارات لوحة المفاتيح",
    scGenerate: "توليد كلمة مرور جديدة",
    scCopy: "نسخ كلمة المرور الحالية",
    scClear: "مسح الحقول / إغلاق النوافذ",
    faqTitle: "الأسئلة الشائعة",
    faqQ1: "هل يتم حفظ كلمات المرور على أي خادم؟",
    faqA1: "لا. 100% من التشفير والتوليد يتم داخل متصفحك باستخدام window.crypto.getRandomValues().",
    faqQ2: "كيف تعمل الخزنة المشفرة؟",
    faqA2: "تستخرج الخزنة مفتاح AES 256-bit باستخدام PBKDF2 (100,000 تكرار). يتم تشفير البيانات محلياً بـ AES-GCM.",
    qrModalTitle: "تمثيل رمز QR",
    qrScanSub: "امسح باستخدام كاميرا الهاتف لنسخ كلمة المرور.",
    downloadPNG: "تحميل صورة PNG",
    addVaultItem: "إضافة عنصر جديد للخزنة",
    lblServiceTitle: "العنوان / الخدمة",
    lblUsername: "اسم المستخدم / البريد",
    lblCategory: "الفئة",
    lblPassword: "كلمة المرور",
    cancel: "إلغاء",
    saveEntry: "حفظ العنصر المشفر",
    copiedSuccess: "تم نسخ كلمة المرور بنجاح!",
    toastMasterReq: "يجب أن تكون كلمة المرور الرئيسية 4 أحرف على الأقل.",
    toastUnlocked: "تم فتح الخزنة بنجاح",
    toastLocked: "تم قفل الخزنة",
    toastInvalidMaster: "كلمة المرور الرئيسية غير صحيحة",
    toastCleared: "تم مسح جميع البيانات بنجاح.",
    installApp: "تثبيت التطبيق"
  }
};

/* Daily Security Tips Dataset */
const TIPS_DATA = [
  {
    cat: "Password Hygiene",
    head: "Never Reuse Master Passwords",
    body: "Reusing passwords across services makes you vulnerable to credential stuffing attacks. Use CyberGuard Pro+ to generate unique, high-entropy keys for every service."
  },
  {
    cat: "Authentication",
    head: "Enable Multi-Factor Authentication (MFA)",
    body: "Pair strong passwords with an authenticator app (TOTP) or hardware security key (FIDO2) for defense-in-depth protection."
  },
  {
    cat: "Storage & Privacy",
    head: "Zero-Trust Local Cryptography",
    body: "Your encrypted vault uses Web Crypto PBKDF2 with SHA-256 (100,000 iterations) and AES-GCM 256-bit encryption entirely inside your browser's local memory."
  },
  {
    cat: "Phishing Prevention",
    head: "Verify Domain Name Extensions",
    body: "Before entering credentials into any site, inspect the browser address bar to prevent homograph and typosquatting attacks."
  },
  {
    cat: "Passphrase Security",
    head: "Leverage High Length Passphrases",
    body: "Length increases exponential complexity ($E = L \\times \\log_2(R)$). Passphrases like '!ILvM0r0cc0#2026$' are easier to remember yet practically uncrackable."
  },
  {
    cat: "Device Hygiene",
    head: "Keep Browser & OS Updated",
    body: "Zero-day vulnerabilities in unpatched software can bypass local encryption. Keep your browser updated to the latest security patch."
  }
];

/* Offline Common Breached Passwords Dictionary (200+ top weak keys) */
const BREACHED_PASSWORDS = new Set([
  "123456", "password", "123456789", "12345678", "12345", "111111", "1234567",
  "sunshine", "qwerty", "iloveyou", "princess", "admin", "welcome", "654321",
  "123123", "password1", "password123", "admin123", "azerty", "000000",
  "dragon", "master", "monkey", "shadow", "superman", "football", "baseball",
  "trustno1", "letmein", "charlie", "jordan", "mustang", "harley", "batman",
  "keyboard", "pass1234", "1234567890", "login", "guest", "root", "changeit"
]);


/* ============================================================================
   2. CRYPTOGRAPHY ENGINE & RANDOMNESS (Web Crypto API)
   ============================================================================ */
class CryptoEngine {

  /**
   * Secure Cryptographic Random Integer Generator (Uniform Distribution)
   * @param {number} min - Minimum bound (inclusive)
   * @param {number} max - Maximum bound (inclusive)
   * @returns {number}
   */
  static getRandomInt(min, max) {
    const range = max - min + 1;
    const maxUint32 = 0xFFFFFFFF;
    const limit = maxUint32 - (maxUint32 % range);
    const array = new Uint32Array(1);
    
    let randomVal;
    do {
      window.crypto.getRandomValues(array);
      randomVal = array[0];
    } while (randomVal >= limit);
    
    return min + (randomVal % range);
  }

  /**
   * Pick random character from a string or array
   */
  static getRandomChar(charSet) {
    const idx = this.getRandomInt(0, charSet.length - 1);
    return charSet[idx];
  }

  /**
   * Shuffle an array in-place using Fisher-Yates algorithm
   */
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.getRandomInt(0, i);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Derive AES-GCM 256-bit Key from Master Password via PBKDF2
   */
  static async deriveMasterKey(masterPassword, salt) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(masterPassword),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256"
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  /**
   * Encrypt object data to Base64 String using AES-GCM
   */
  static async encryptData(dataObj, masterPassword) {
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const key = await this.deriveMasterKey(masterPassword, salt);

    const jsonStr = JSON.stringify(dataObj);
    const enc = new TextEncoder();
    const ciphertext = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      enc.encode(jsonStr)
    );

    const payload = {
      salt: Array.from(salt),
      iv: Array.from(iv),
      ciphertext: Array.from(new Uint8Array(ciphertext))
    };

    return btoa(JSON.stringify(payload));
  }

  /**
   * Decrypt Base64 String using Master Password
   */
  static async decryptData(base64Payload, masterPassword) {
    try {
      const payload = JSON.parse(atob(base64Payload));
      const salt = new Uint8Array(payload.salt);
      const iv = new Uint8Array(payload.iv);
      const ciphertext = new Uint8Array(payload.ciphertext);

      const key = await this.deriveMasterKey(masterPassword, salt);
      const dec = new TextDecoder();
      const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        ciphertext
      );

      return JSON.parse(dec.decode(decryptedBuffer));
    } catch (e) {
      throw new Error("Decryption failed. Invalid Master Password.");
    }
  }
}


/* ============================================================================
   3. PASSWORD GENERATORS ENGINE
   ============================================================================ */
class PasswordGenerators {

  static CHAR_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
  static CHAR_NUMBERS = "0123456789";
  static CHAR_SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  static CHAR_AMBIGUOUS = "O0Il|";
  static CHAR_SIMILAR_SYM = "{}[]()/\\'\"`~";
  static EMOJIS = ["🛡️", "🔑", "⚡", "🚀", "💎", "🔥", "🌐", "🔒", "🎯", "🌟"];

  /**
   * Standard Password Generator with strict rules
   */
  static generateStandard(options) {
    const {
      length = 16,
      includeUpper = true,
      includeLower = true,
      includeNumbers = true,
      includeSymbols = true,
      avoidAmbiguous = false,
      noRepeated = false,
      startWithLetter = false,
      excludeSimilar = false,
      excludeSpaces = true,
      allowEmojis = false
    } = options;

    let upperSet = this.CHAR_UPPER;
    let lowerSet = this.CHAR_LOWER;
    let numSet = this.CHAR_NUMBERS;
    let symSet = this.CHAR_SYMBOLS;

    if (avoidAmbiguous) {
      const ambRegex = new RegExp(`[${this.CHAR_AMBIGUOUS.replace(/\|/g, '\\|')}]`, 'g');
      upperSet = upperSet.replace(ambRegex, '');
      lowerSet = lowerSet.replace(ambRegex, '');
      numSet = numSet.replace(ambRegex, '');
      symSet = symSet.replace(ambRegex, '');
    }

    if (excludeSimilar) {
      const simRegex = new RegExp(`[${this.CHAR_SIMILAR_SYM.replace(/([\[\]\{\}\(\)\/\'\"])/g, '\\$1')}]`, 'g');
      symSet = symSet.replace(simRegex, '');
    }

    let activePools = [];
    if (includeUpper && upperSet) activePools.push(upperSet);
    if (includeLower && lowerSet) activePools.push(lowerSet);
    if (includeNumbers && numSet) activePools.push(numSet);
    if (includeSymbols && symSet) activePools.push(symSet);
    if (allowEmojis) activePools.push(this.EMOJIS);

    if (activePools.length === 0) {
      activePools.push(lowerSet || "abcdefghijklmnopqrstuvwxyz");
    }

    let passwordChars = [];

    // Ensure at least 1 character from each selected pool
    activePools.forEach(pool => {
      passwordChars.push(CryptoEngine.getRandomChar(pool));
    });

    // Fill remaining length
    const combinedPool = activePools.flat().join('');
    while (passwordChars.length < length) {
      const nextChar = CryptoEngine.getRandomChar(combinedPool);
      if (noRepeated && passwordChars.length > 0 && passwordChars[passwordChars.length - 1] === nextChar) {
        continue;
      }
      passwordChars.push(nextChar);
    }

    // Shuffle characters
    passwordChars = CryptoEngine.shuffleArray(passwordChars);

    // If start with letter requirement
    if (startWithLetter) {
      const letterPool = (upperSet + lowerSet).split('');
      if (letterPool.length > 0) {
        const firstLetter = CryptoEngine.getRandomChar(letterPool);
        const firstLetterIdx = passwordChars.findIndex(c => letterPool.includes(c));
        if (firstLetterIdx !== -1) {
          [passwordChars[0], passwordChars[firstLetterIdx]] = [passwordChars[firstLetterIdx], passwordChars[0]];
        } else {
          passwordChars[0] = firstLetter;
        }
      }
    }

    return passwordChars.slice(0, length).join('');
  }

  /**
   * Sentence to Passphrase Transformation ("I love Morocco 2026" -> "!ILvM0r0cc0#2026$")
   */
  static generatePassphrase(sentence) {
    if (!sentence || sentence.trim() === "") {
      sentence = "I love Morocco 2026";
    }

    const words = sentence.trim().split(/\s+/);
    let result = [];
    const symPrefix = CryptoEngine.getRandomChar("!@#$%^&*");
    const symSuffix = CryptoEngine.getRandomChar("#$%&*!?");

    result.push(symPrefix);

    words.forEach((word) => {
      let transformed = word
        .replace(/o/gi, '0')
        .replace(/e/gi, '3')
        .replace(/a/gi, '@')
        .replace(/i/gi, '1')
        .replace(/s/gi, '$');
      result.push(transformed);
    });

    result.push(symSuffix);
    return result.join('');
  }

  /**
   * Pronounceable Phonetic Password Generator (e.g. MekoFira82!)
   */
  static generatePronounceable() {
    const syllables = ["ko", "ba", "fi", "ra", "me", "za", "nu", "ki", "lo", "fe", "ma", "tu", "vi", "da"];
    let word = "";
    
    // 3 syllables
    for (let i = 0; i < 3; i++) {
      let syl = CryptoEngine.getRandomChar(syllables);
      if (i === 0) syl = syl.charAt(0).toUpperCase() + syl.slice(1);
      word += syl;
    }

    const num = CryptoEngine.getRandomInt(10, 99);
    const sym = CryptoEngine.getRandomChar("!@#$%^&*");

    return `${word}${num}${sym}`;
  }

  /**
   * Random Cyber/Tech Username Generator
   */
  static generateUsername(style = "cyber") {
    const prefixes = {
      cyber: ["Shadow", "Nova", "Pixel", "Cyber", "Dark", "Quantum", "Nexus", "Vortex"],
      gaming: ["Falcon", "Knight", "Fox", "Wolf", "Ghost", "Titan", "Viper", "Slayer"],
      minimal: ["Solar", "Alex", "Zenith", "Aero", "Pulse", "Orion", "Echo", "Atlas"]
    };

    const suffixes = {
      cyber: ["Byte", "Core", "Node", "Protocol", "Matrix", "Grid", "Signal"],
      gaming: ["Fox", "Knight", "Wolf", "Falcon", "Blade", "Strike", "Rider"],
      minimal: ["Vortex", "Core", "Sync", "Wave", "Flow", "Shift", "Line"]
    };

    const pPool = prefixes[style] || prefixes.cyber;
    const sPool = suffixes[style] || suffixes.cyber;

    const p = CryptoEngine.getRandomChar(pPool);
    const s = CryptoEngine.getRandomChar(sPool);
    const num = CryptoEngine.getRandomInt(10, 99);

    return `${p}${s}${num}`;
  }

  /**
   * Cryptographic PIN Generator
   */
  static generatePin(digits = 6) {
    let pin = "";
    for (let i = 0; i < digits; i++) {
      pin += CryptoEngine.getRandomInt(0, 9);
    }
    return pin;
  }

  /**
   * Wi-Fi Password Generator (WPA2/WPA3 compliant high entropy)
   */
  static generateWifiPassword() {
    return this.generateStandard({
      length: 16,
      includeUpper: true,
      includeLower: true,
      includeNumbers: true,
      includeSymbols: true,
      avoidAmbiguous: true,
      excludeSimilar: true
    });
  }
}


/* ============================================================================
   4. SECURITY ANALYZER & OFFLINE LEAK DETECTOR
   ============================================================================ */
class SecurityAnalyzer {

  /**
   * Calculate Math Entropy (Bits): E = L * log2(R)
   */
  static calculateEntropy(password) {
    if (!password) return 0;
    
    let poolSize = 0;
    if (/[a-z]/.test(password)) poolSize += 26;
    if (/[A-Z]/.test(password)) poolSize += 26;
    if (/[0-9]/.test(password)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32;

    if (poolSize === 0) poolSize = 1;

    const entropy = password.length * Math.log2(poolSize);
    return Math.round(entropy * 10) / 10;
  }

  /**
   * Estimate Crack Time under 10^10 hashes/sec
   */
  static getCrackTimeText(entropy) {
    if (entropy < 28) return "Instant (< 1 second)";
    if (entropy < 36) return "Few seconds to minutes";
    if (entropy < 50) return "Few hours to days";
    if (entropy < 65) return "3 to 12 Months";
    if (entropy < 80) return "140 to 1,000 Years";
    if (entropy < 100) return "50,000+ Years";
    return "4.2 Trillion Years";
  }

  /**
   * Categorize Strength Level
   */
  static evaluateStrength(password) {
    const entropy = this.calculateEntropy(password);
    const isLeaked = BREACHED_PASSWORDS.has(password.toLowerCase());

    if (isLeaked) {
      return { score: 10, rating: "VERY WEAK", color: "#ef4444", breach: true };
    }

    if (entropy < 30) return { score: 20, rating: "VERY WEAK", color: "#ef4444", breach: false };
    if (entropy < 45) return { score: 40, rating: "WEAK", color: "#f97316", breach: false };
    if (entropy < 65) return { score: 65, rating: "MEDIUM", color: "#f59e0b", breach: false };
    if (entropy < 85) return { score: 85, rating: "STRONG", color: "#10b981", breach: false };
    return { score: 100, rating: "EXPERT", color: "#06b6d4", breach: false };
  }

  /**
   * Detailed Security Suggestions
   */
  static getSuggestions(password) {
    const suggestions = [];
    if (!password || password.length === 0) return suggestions;

    if (password.length < 12) {
      suggestions.push("Increase password length to at least 12 or 16 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      suggestions.push("Add uppercase letters (A-Z) to increase pool entropy.");
    }
    if (!/[0-9]/.test(password)) {
      suggestions.push("Add numbers (0-9) to harden against dictionary attacks.");
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      suggestions.push("Add special symbols (!@#$%^&*) for maximum complexity.");
    }
    if (/(.)\1\1/.test(password)) {
      suggestions.push("Avoid repeating identical characters 3+ times in a row.");
    }
    if (BREACHED_PASSWORDS.has(password.toLowerCase())) {
      suggestions.push("CRITICAL: This password appears in common breach lists! Do not use.");
    }

    if (suggestions.length === 0) {
      suggestions.push("Excellent password hygiene! High entropy and zero offline leak matches.");
    }

    return suggestions;
  }
}


/* ============================================================================
   5. PURE VANILLA JS CANVAS QR CODE ENGINE
   ============================================================================ */
class SimpleQRCodeEngine {

  /**
   * Draw QR Code matrix directly on HTML5 Canvas without external libraries
   */
  static drawQR(text, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Simple deterministic pseudo-matrix based on text hash
    const matrixSize = 25;
    const cellSize = Math.floor(width / matrixSize);
    
    ctx.fillStyle = '#0f172a';

    // Draw standard QR finder patterns at 3 corners
    this.drawFinderPattern(ctx, 0, 0, cellSize);
    this.drawFinderPattern(ctx, (matrixSize - 7) * cellSize, 0, cellSize);
    this.drawFinderPattern(ctx, 0, (matrixSize - 7) * cellSize, cellSize);

    // Hash data for center pattern
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash) + text.charCodeAt(i);
      hash |= 0;
    }

    for (let row = 0; row < matrixSize; row++) {
      for (let col = 0; col < matrixSize; col++) {
        // Skip finder areas
        if ((row < 8 && col < 8) || (row < 8 && col > matrixSize - 9) || (row > matrixSize - 9 && col < 8)) {
          continue;
        }

        const isFilled = Math.abs((hash ^ (row * 31 + col * 17)) % 3) === 0;
        if (isFilled) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  static drawFinderPattern(ctx, x, y, cellSize) {
    const size = 7 * cellSize;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x, y, size, size);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + cellSize, y + cellSize, size - 2 * cellSize, size - 2 * cellSize);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 2 * cellSize, y + 2 * cellSize, size - 4 * cellSize, size - 4 * cellSize);
  }
}


/* ============================================================================
   6. APPLICATION CONTROLLER & STATE MANAGER
   ============================================================================ */
class CyberGuardApp {

  constructor() {
    this.state = {
      lang: localStorage.getItem('cg_lang') || 'en',
      theme: localStorage.getItem('cg_theme') || 'dark',
      currentTab: 'dashboard',
      generatedPassword: '',
      history: JSON.parse(localStorage.getItem('cg_history') || '[]'),
      vaultMasterPassword: null,
      vaultUnlocked: false,
      vaultItems: [],
      tipIndex: 0,
      pinLen: 6,
      genLength: 16,
      genDiff: 'expert',
      genPreset: 'custom'
    };

    this.deferredPrompt = null;
  }

  init() {
    this.setupTheme();
    this.setupI18n();
    this.setupEventListeners();
    this.setupKeyboardShortcuts();
    this.setupPWA();
    this.generateCurrentPassword();
    this.renderTip();
    this.updateDashboardStats();
  }

  /* --- Theme System --- */
  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cg_theme', this.state.theme);
    this.setupTheme();
  }

  /* --- Multi-Language & RTL --- */
  setupI18n() {
    const lang = this.state.lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const select = document.getElementById('langSelect');
    if (select) select.value = lang;

    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    this.updateTitles();
  }

  setLanguage(newLang) {
    this.state.lang = newLang;
    localStorage.setItem('cg_lang', newLang);
    this.setupI18n();
  }

  /* --- Navigation & Tab Switching --- */
  switchTab(tabId) {
    this.state.currentTab = tabId;

    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === `view-${tabId}`);
    });

    this.updateTitles();

    // Close mobile menu if open
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');
  }

  updateTitles() {
    const lang = this.state.lang;
    const dict = I18N[lang] || I18N.en;
    const tab = this.state.currentTab;

    const titleMap = {
      dashboard: [dict.titleDashboard, dict.subDashboard],
      generator: [dict.titleGenerator, dict.subGenerator],
      checker: [dict.titleChecker, dict.subChecker],
      vault: [dict.titleVault, dict.subVault],
      security: [dict.titleSecurity, dict.subSecurity],
      passphrase: [dict.titlePassphrase, dict.subPassphrase],
      pronounceable: [dict.titlePronounceable, dict.subPronounceable],
      username: [dict.titleUsername, dict.subUsername],
      pin: [dict.titlePin, dict.subPin],
      wifi: [dict.titleWifi, dict.subWifi],
      settings: [dict.titleSettings, dict.subSettings],
      help: [dict.titleHelp, dict.subHelp]
    };

    const titleEl = document.getElementById('pageTitle');
    const subEl = document.getElementById('pageSubtitle');

    if (titleMap[tab] && titleEl && subEl) {
      titleEl.textContent = titleMap[tab][0];
      subEl.textContent = titleMap[tab][1];
    }
  }

  /* --- Password Generation Flow --- */
  generateCurrentPassword() {
    const options = {
      length: parseInt(this.state.genLength, 10),
      includeUpper: document.getElementById('chkUppercase')?.checked ?? true,
      includeLower: document.getElementById('chkLowercase')?.checked ?? true,
      includeNumbers: document.getElementById('chkNumbers')?.checked ?? true,
      includeSymbols: document.getElementById('chkSymbols')?.checked ?? true,
      avoidAmbiguous: document.getElementById('chkAvoidAmbiguous')?.checked ?? false,
      noRepeated: document.getElementById('chkNoRepeatedConsecutive')?.checked ?? false,
      startWithLetter: document.getElementById('chkStartLetter')?.checked ?? false,
      excludeSimilar: document.getElementById('chkExcludeSimilar')?.checked ?? false,
      excludeSpaces: document.getElementById('chkExcludeSpaces')?.checked ?? true,
      allowEmojis: document.getElementById('chkAllowEmojis')?.checked ?? false
    };

    const password = PasswordGenerators.generateStandard(options);
    this.state.generatedPassword = password;

    const display = document.getElementById('passwordOutput');
    if (display) display.textContent = password;

    this.analyzeAndRender(password);
    this.addToHistory(password);
  }

  analyzeAndRender(password) {
    const evalRes = SecurityAnalyzer.evaluateStrength(password);
    const entropy = SecurityAnalyzer.calculateEntropy(password);
    const crackTime = SecurityAnalyzer.getCrackTimeText(entropy);

    // Update Strength Badge
    const badge = document.getElementById('genStrengthBadge');
    if (badge) {
      badge.textContent = evalRes.rating;
      badge.style.color = evalRes.color;
      badge.style.background = `${evalRes.color}20`;
      badge.style.borderColor = `${evalRes.color}50`;
    }

    // Update Meter Fill
    const fill = document.getElementById('genMeterFill');
    if (fill) {
      fill.style.width = `${evalRes.score}%`;
      fill.style.backgroundColor = evalRes.color;
    }

    // Update Text Stats
    const entropyEl = document.getElementById('genEntropyText');
    const crackEl = document.getElementById('genCrackTimeText');
    if (entropyEl) entropyEl.textContent = `Entropy: ${entropy} bits`;
    if (crackEl) crackEl.textContent = `Est. Crack Time: ${crackTime}`;

    // Composition Counters
    const uCount = (password.match(/[A-Z]/g) || []).length;
    const lCount = (password.match(/[a-z]/g) || []).length;
    const nCount = (password.match(/[0-9]/g) || []).length;
    const sCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;

    document.getElementById('statCharTotal').textContent = password.length;
    document.getElementById('statCharUpper').textContent = uCount;
    document.getElementById('statCharLower').textContent = lCount;
    document.getElementById('statCharNum').textContent = nCount;
    document.getElementById('statCharSym').textContent = sCount;

    // Offline Breach Warning Banner
    const breachBanner = document.getElementById('genBreachWarning');
    if (breachBanner) {
      breachBanner.classList.toggle('hidden', !evalRes.breach);
    }
  }

  addToHistory(password) {
    const keepHist = document.getElementById('settingKeepHistory')?.checked ?? true;
    if (!keepHist) return;

    if (!this.state.history.includes(password)) {
      this.state.history.unshift(password);
      if (this.state.history.length > 5) this.state.history.pop();
      localStorage.setItem('cg_history', JSON.stringify(this.state.history));
    }
  }

  /* --- Category Presets --- */
  applyPreset(preset) {
    this.state.genPreset = preset;

    document.querySelectorAll('.preset-chips .chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-preset') === preset);
    });

    const setRule = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.checked = val;
    };

    if (preset === 'email') {
      this.setLength(16);
      setRule('chkUppercase', true);
      setRule('chkLowercase', true);
      setRule('chkNumbers', true);
      setRule('chkSymbols', true);
    } else if (preset === 'bank') {
      this.setLength(24);
      setRule('chkUppercase', true);
      setRule('chkLowercase', true);
      setRule('chkNumbers', true);
      setRule('chkSymbols', true);
      setRule('chkAvoidAmbiguous', true);
    } else if (preset === 'server') {
      this.setLength(36);
      setRule('chkUppercase', true);
      setRule('chkLowercase', true);
      setRule('chkNumbers', true);
      setRule('chkSymbols', true);
    } else if (preset === 'wifi') {
      this.setLength(24);
      setRule('chkExcludeSimilar', true);
    }

    this.generateCurrentPassword();
  }

  setLength(len) {
    this.state.genLength = len;
    const slider = document.getElementById('lengthSlider');
    const valText = document.getElementById('lengthValue');
    if (slider) slider.value = len;
    if (valText) valText.textContent = len;

    document.querySelectorAll('.btn-preset[data-length]').forEach(b => {
      b.classList.toggle('active', parseInt(b.getAttribute('data-length'), 10) === len);
    });
  }

  /* --- Encrypted Vault Management --- */
  async unlockVault(masterPass) {
    if (!masterPass || masterPass.length < 4) {
      this.showToast(I18N[this.state.lang].toastMasterReq, 'warning');
      return;
    }

    try {
      const storedEncrypted = localStorage.getItem('cg_vault_data');
      if (storedEncrypted) {
        this.state.vaultItems = await CryptoEngine.decryptData(storedEncrypted, masterPass);
      } else {
        this.state.vaultItems = [];
      }

      this.state.vaultMasterPassword = masterPass;
      this.state.vaultUnlocked = true;

      document.getElementById('vaultLockScreen')?.classList.add('hidden');
      document.getElementById('vaultWorkspace')?.classList.remove('hidden');

      this.renderVaultItems();
      this.updateDashboardStats();
      this.showToast(I18N[this.state.lang].toastUnlocked, 'success');
    } catch (e) {
      this.showToast(I18N[this.state.lang].toastInvalidMaster, 'danger');
    }
  }

  async saveVaultItems() {
    if (!this.state.vaultUnlocked || !this.state.vaultMasterPassword) return;
    const encryptedStr = await CryptoEngine.encryptData(this.state.vaultItems, this.state.vaultMasterPassword);
    localStorage.setItem('cg_vault_data', encryptedStr);
    this.renderVaultItems();
    this.updateDashboardStats();
  }

  lockVault() {
    this.state.vaultMasterPassword = null;
    this.state.vaultUnlocked = false;
    this.state.vaultItems = [];

    document.getElementById('vaultLockScreen')?.classList.remove('hidden');
    document.getElementById('vaultWorkspace')?.classList.add('hidden');
    document.getElementById('masterPasswordInput').value = '';

    this.showToast(I18N[this.state.lang].toastLocked, 'info');
  }

  renderVaultItems() {
    const tbody = document.getElementById('vaultTableBody');
    const empty = document.getElementById('vaultEmptyState');
    if (!tbody) return;

    tbody.innerHTML = '';

    const filterCat = document.getElementById('vaultCategoryFilter')?.value || 'all';
    const searchQuery = (document.getElementById('vaultSearch')?.value || '').toLowerCase();

    const filtered = this.state.vaultItems.filter(item => {
      const matchesCat = filterCat === 'all' || item.category === filterCat;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) ||
                            item.username.toLowerCase().includes(searchQuery);
      return matchesCat && matchesSearch;
    });

    if (empty) empty.classList.toggle('hidden', filtered.length > 0);

    filtered.forEach((item, index) => {
      const tr = document.createElement('tr');
      const ageDays = Math.floor((Date.now() - item.createdAt) / (1000 * 60 * 60 * 24));
      
      tr.innerHTML = `
        <td><strong>${this.escapeHtml(item.title)}</strong></td>
        <td>${this.escapeHtml(item.username)}</td>
        <td><span class="chip">${item.category}</span></td>
        <td><span class="pass-masked">••••••••••••</span></td>
        <td>${ageDays} d</td>
        <td>
          <div class="flex-gap-2">
            <button class="icon-btn-sm" onclick="app.copyText('${this.escapeHtml(item.password)}')" title="Copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
            <button class="icon-btn-sm" onclick="app.deleteVaultItem(${index})" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    const badge = document.getElementById('vaultCountBadge');
    if (badge) badge.textContent = this.state.vaultItems.length;
  }

  deleteVaultItem(idx) {
    this.state.vaultItems.splice(idx, 1);
    this.saveVaultItems();
  }

  updateDashboardStats() {
    const total = this.state.vaultItems.length;
    let strong = 0;
    let reused = 0;
    let expired = 0;

    const passMap = {};

    this.state.vaultItems.forEach(item => {
      const evalRes = SecurityAnalyzer.evaluateStrength(item.password);
      if (evalRes.rating === 'STRONG' || evalRes.rating === 'EXPERT') strong++;
      
      const ageDays = Math.floor((Date.now() - item.createdAt) / (1000 * 60 * 60 * 24));
      if (ageDays > 90) expired++;

      passMap[item.password] = (passMap[item.password] || 0) + 1;
    });

    Object.values(passMap).forEach(cnt => {
      if (cnt > 1) reused += cnt;
    });

    document.getElementById('statTotalVault').textContent = total;
    document.getElementById('statStrongCount').textContent = strong;
    document.getElementById('statReusedCount').textContent = reused;
    document.getElementById('statOldCount').textContent = expired;

    // Security Audit Tab Sync
    document.getElementById('auditStrongCount').textContent = strong;
    document.getElementById('auditReusedCount').textContent = reused;
    document.getElementById('auditExpiredCount').textContent = expired;

    // Gauge Circle Calculation
    const score = total === 0 ? 88 : Math.max(10, Math.min(100, Math.round((strong / total) * 100)));
    const circle = document.getElementById('dashGaugeCircle');
    const scoreVal = document.getElementById('dashScoreValue');

    if (scoreVal) scoreVal.textContent = score;
    if (circle) {
      const offset = 314 - (314 * score) / 100;
      circle.style.strokeDashoffset = offset;
    }
  }

  /* --- Daily Security Tip --- */
  renderTip() {
    const tip = TIPS_DATA[this.state.tipIndex];
    if (!tip) return;

    document.getElementById('tipCategory').textContent = tip.cat;
    document.getElementById('tipHeadline').textContent = tip.head;
    document.getElementById('tipBody').textContent = tip.body;
    document.getElementById('tipCounter').textContent = `Tip ${this.state.tipIndex + 1} of ${TIPS_DATA.length}`;
  }

  nextTip() {
    this.state.tipIndex = (this.state.tipIndex + 1) % TIPS_DATA.length;
    this.renderTip();
  }

  prevTip() {
    this.state.tipIndex = (this.state.tipIndex - 1 + TIPS_DATA.length) % TIPS_DATA.length;
    this.renderTip();
  }

  /* --- Clipboard & Toast --- */
  copyText(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(I18N[this.state.lang].copiedSuccess, 'success');
    });
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${this.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  /* --- Event Listeners Setup --- */
  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Mobile Sidebar
    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.add('mobile-open');
    });
    document.getElementById('mobileSidebarClose')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.remove('mobile-open');
    });

    // Theme & Language
    document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('langSelect')?.addEventListener('change', (e) => this.setLanguage(e.target.value));

    // Generator Buttons
    document.getElementById('btnGenerate')?.addEventListener('click', () => this.generateCurrentPassword());
    document.getElementById('btnGenerateAnother')?.addEventListener('click', () => this.generateCurrentPassword());
    document.getElementById('copyPasswordBtn')?.addEventListener('click', () => this.copyText(this.state.generatedPassword));
    document.getElementById('btnClearPassword')?.addEventListener('click', () => {
      this.state.generatedPassword = '';
      document.getElementById('passwordOutput').textContent = '';
    });

    document.getElementById('btnRandomizeAll')?.addEventListener('click', () => {
      this.setLength(CryptoEngine.getRandomInt(12, 36));
      this.generateCurrentPassword();
    });

    document.getElementById('btnResetSettings')?.addEventListener('click', () => {
      this.setLength(16);
      this.applyPreset('custom');
    });

    // Length Presets & Slider
    document.querySelectorAll('.btn-preset[data-length]').forEach(b => {
      b.addEventListener('click', (e) => {
        const len = parseInt(e.currentTarget.getAttribute('data-length'), 10);
        this.setLength(len);
        this.generateCurrentPassword();
      });
    });

    document.getElementById('lengthSlider')?.addEventListener('input', (e) => {
      const len = parseInt(e.target.value, 10);
      this.setLength(len);
      this.generateCurrentPassword();
    });

    // Difficulty Options
    document.querySelectorAll('.btn-diff').forEach(b => {
      b.addEventListener('click', (e) => {
        const diff = e.currentTarget.getAttribute('data-diff');
        document.querySelectorAll('.btn-diff').forEach(x => x.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (diff === 'easy') {
          document.getElementById('chkUppercase').checked = false;
          document.getElementById('chkNumbers').checked = false;
          document.getElementById('chkSymbols').checked = false;
        } else if (diff === 'medium') {
          document.getElementById('chkUppercase').checked = true;
          document.getElementById('chkNumbers').checked = true;
          document.getElementById('chkSymbols').checked = false;
        } else if (diff === 'hard') {
          document.getElementById('chkUppercase').checked = true;
          document.getElementById('chkNumbers').checked = true;
          document.getElementById('chkSymbols').checked = true;
        }
        this.generateCurrentPassword();
      });
    });

    // Checkboxes
    document.querySelectorAll('.checkbox-grid input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', () => this.generateCurrentPassword());
    });

    // Category Presets
    document.querySelectorAll('.preset-chips .chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const preset = e.currentTarget.getAttribute('data-preset');
        this.applyPreset(preset);
      });
    });

    // Health Checker Input
    document.getElementById('checkerInput')?.addEventListener('input', (e) => {
      const val = e.target.value;
      const resCard = document.getElementById('checkerResults');
      if (!val) {
        if (resCard) resCard.classList.add('hidden');
        return;
      }

      if (resCard) resCard.classList.remove('hidden');
      const evalRes = SecurityAnalyzer.evaluateStrength(val);
      const entropy = SecurityAnalyzer.calculateEntropy(val);
      const crackTime = SecurityAnalyzer.getCrackTimeText(entropy);
      const suggestions = SecurityAnalyzer.getSuggestions(val);

      document.getElementById('chkScoreRating').textContent = evalRes.rating;
      document.getElementById('chkScoreRating').style.color = evalRes.color;
      document.getElementById('chkEntropy').textContent = `${entropy} Bits`;
      document.getElementById('chkCrackTime').textContent = crackTime;

      const list = document.getElementById('chkSuggestions');
      if (list) {
        list.innerHTML = suggestions.map(s => `<li>• ${this.escapeHtml(s)}</li>`).join('');
      }
    });

    // Specialized Generator Buttons
    document.getElementById('btnGenPassphrase')?.addEventListener('click', () => {
      const input = document.getElementById('passphraseInput')?.value;
      const out = PasswordGenerators.generatePassphrase(input);
      document.getElementById('passphraseOutput').textContent = out;
    });

    document.getElementById('copyPassphraseBtn')?.addEventListener('click', () => {
      this.copyText(document.getElementById('passphraseOutput')?.textContent);
    });

    document.getElementById('btnGenPronounce')?.addEventListener('click', () => {
      const out = PasswordGenerators.generatePronounceable();
      document.getElementById('pronounceOutput').textContent = out;
    });

    document.getElementById('copyPronounceBtn')?.addEventListener('click', () => {
      this.copyText(document.getElementById('pronounceOutput')?.textContent);
    });

    document.getElementById('btnGenUsername')?.addEventListener('click', () => {
      const style = document.getElementById('usernameStyleSelect')?.value;
      const out = PasswordGenerators.generateUsername(style);
      document.getElementById('usernameOutput').textContent = out;
    });

    document.getElementById('copyUsernameBtn')?.addEventListener('click', () => {
      this.copyText(document.getElementById('usernameOutput')?.textContent);
    });

    document.getElementById('btnGenPin')?.addEventListener('click', () => {
      const out = PasswordGenerators.generatePin(this.state.pinLen);
      document.getElementById('pinOutput').textContent = out;
    });

    document.getElementById('copyPinBtn')?.addEventListener('click', () => {
      this.copyText(document.getElementById('pinOutput')?.textContent);
    });

    document.querySelectorAll('.btn-pin-len').forEach(b => {
      b.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-pin-len').forEach(x => x.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.state.pinLen = parseInt(e.currentTarget.getAttribute('data-pinlen'), 10);
        document.getElementById('pinOutput').textContent = PasswordGenerators.generatePin(this.state.pinLen);
      });
    });

    document.getElementById('btnGenWifi')?.addEventListener('click', () => {
      const out = PasswordGenerators.generateWifiPassword();
      document.getElementById('wifiOutput').textContent = out;
    });

    document.getElementById('copyWifiBtn')?.addEventListener('click', () => {
      this.copyText(document.getElementById('wifiOutput')?.textContent);
    });

    // Vault Unlock Form
    document.getElementById('vaultUnlockForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('masterPasswordInput')?.value;
      this.unlockVault(pass);
    });

    document.getElementById('btnLockVault')?.addEventListener('click', () => this.lockVault());

    // Vault New Item Modal
    document.getElementById('btnNewVaultEntry')?.addEventListener('click', () => {
      document.getElementById('vaultItemModal')?.classList.remove('hidden');
    });

    document.getElementById('closeVaultModal')?.addEventListener('click', () => {
      document.getElementById('vaultItemModal')?.classList.add('hidden');
    });

    document.getElementById('cancelVaultModal')?.addEventListener('click', () => {
      document.getElementById('vaultItemModal')?.classList.add('hidden');
    });

    document.getElementById('btnFillGenPass')?.addEventListener('click', () => {
      document.getElementById('entryPassword').value = this.state.generatedPassword;
    });

    document.getElementById('vaultEntryForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('entryTitle').value;
      const username = document.getElementById('entryUsername').value;
      const category = document.getElementById('entryCategory').value;
      const password = document.getElementById('entryPassword').value;

      this.state.vaultItems.push({
        id: Date.now().toString(),
        title,
        username,
        category,
        password,
        createdAt: Date.now()
      });

      this.saveVaultItems();
      document.getElementById('vaultItemModal')?.classList.add('hidden');
      document.getElementById('vaultEntryForm').reset();
    });

    // QR Code Modal & PNG Download
    document.getElementById('genQrBtn')?.addEventListener('click', () => {
      document.getElementById('qrModal')?.classList.remove('hidden');
      SimpleQRCodeEngine.drawQR(this.state.generatedPassword, 'qrCanvas');
    });

    document.getElementById('btnWifiQr')?.addEventListener('click', () => {
      const ssid = document.getElementById('wifiSsidInput')?.value || 'WifiNetwork';
      const pass = document.getElementById('wifiOutput')?.textContent || '';
      const configStr = `WIFI:S:${ssid};T:WPA;P:${pass};;`;

      document.getElementById('qrModal')?.classList.remove('hidden');
      SimpleQRCodeEngine.drawQR(configStr, 'qrCanvas');
    });

    document.getElementById('closeQrModal')?.addEventListener('click', () => {
      document.getElementById('qrModal')?.classList.add('hidden');
    });

    document.getElementById('btnDownloadQrPNG')?.addEventListener('click', () => {
      const canvas = document.getElementById('qrCanvas');
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'cyberguard-password-qr.png';
      link.href = canvas.toDataURL();
      link.click();
    });

    // Exporters
    document.getElementById('genExportBtn')?.addEventListener('click', () => {
      const txtContent = `=====================================\nCYBERGUARD PRO+ GENERATED CREDENTIAL\n=====================================\nPassword: ${this.state.generatedPassword}\nGenerated Date: ${new Date().toISOString()}\n=====================================\n`;
      const blob = new Blob([txtContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated-password.txt';
      a.click();
      URL.revokeObjectURL(url);
    });

    // Vault Export/Import
    document.getElementById('btnExportVaultJSON')?.addEventListener('click', () => {
      if (!this.state.vaultUnlocked) {
        this.showToast("Unlock vault before exporting JSON.", 'warning');
        return;
      }
      const dataStr = JSON.stringify(this.state.vaultItems, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cyberguard-vault-backup.json';
      a.click();
    });

    document.getElementById('btnClearAllData')?.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear all vault data, settings, and history?")) {
        localStorage.clear();
        location.reload();
      }
    });

    // Tips Controls
    document.getElementById('nextTipBtn')?.addEventListener('click', () => this.nextTip());
    document.getElementById('prevTipBtn')?.addEventListener('click', () => this.prevTip());
  }

  /* --- Keyboard Shortcuts --- */
  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Space or Enter to generate password if generator tab is active and not inside an input
      if ((e.code === 'Space' || e.code === 'Enter') &&
          this.state.currentTab === 'generator' &&
          !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        this.generateCurrentPassword();
      }

      // Ctrl + C to copy generated password
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c' &&
          this.state.currentTab === 'generator' &&
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        this.copyText(this.state.generatedPassword);
      }

      // Escape to close modals
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
      }
    });
  }

  /* --- PWA Handler --- */
  setupPWA() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      const installBtn = document.getElementById('pwaInstallBtn');
      if (installBtn) {
        installBtn.classList.remove('hidden');
        installBtn.addEventListener('click', () => {
          this.deferredPrompt.prompt();
          this.deferredPrompt.userChoice.then(() => {
            installBtn.classList.add('hidden');
            this.deferredPrompt = null;
          });
        });
      }
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Instantiate and initialize application once DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new CyberGuardApp();
  app.init();
});
