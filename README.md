# CURIO

İngilisdilli öyrənmə və quiz platforması. Sadə HTML, Tailwind CDN və JavaScript ilə işləyir; ayrıca frontend build mərhələsi yoxdur. Node.js serveri yalnız yerli səhifə və assetləri təqdim edir. Hesab funksiyaları Supabase Authentication istifadə edir.

## İşə salmaq

Node.js 22 və ya daha yeni versiya istifadə edin. Bu yoxlama Node.js 24 ilə aparılıb.

```powershell
npm ci
npm start
```

Standart ünvan: `http://127.0.0.1:3000`. Hazırkı baxış serveri `http://127.0.0.1:3001` ünvanındadır. Başqa port üçün:

```powershell
$env:PORT = '3001'
npm start
```

Serveri dayandırmaq üçün başladıldığı terminalda `Ctrl+C` basın. `localhost` avtomatik olaraq `127.0.0.1` ünvanına yönləndirilir; bu, giriş və PKCE bərpa axınlarının eyni brauzer yaddaşından istifadə etməsini təmin edir.

## Qovluqlar

| Yol | Məzmun |
| --- | --- |
| `index.html` | Ana səhifə, Daily Six sualları və ilkinləşdirmə |
| `*.html` | Altı bölmə, 48 quiz, dünya xəritəsi oyunu, hesab və hüquqi səhifələr |
| `assets/quiz/` | Bütün quizlərin ortaq məntiqi və görünüşü |
| `content/quizzes/` | 630 yeni sualın redaktə olunan mənbə mətnləri və 48 mövzunun kataloqu |
| `docs/quiz-review/` | Cavablar və izahlarla son v3 yoxlama paketləri |
| `assets/auth/` | Supabase konfiqurasiyası, SDK ilkinləşdirməsi, formalar və sessiya nəzarətləri |
| `assets/` alt qovluqları | Mövcud şəkillər; şəkil xəritələri saxlanılıb |
| `server.js` | Yerli HTTP server, marşrutlar və ictimai fayl məhdudiyyəti |
| `scripts/` | Quiz səhifələrinin yığılması, cavab açarlarının çıxarılması və validatorlar |
| `tests/` | Sayt, quiz, auth, real SDK və server testləri |
| `docs/` | Dizayn, auth qurulması və son yoxlamanın hesabatı |
| `docs/archive/` | Əvvəlki auditlər və sual yoxlama məlumatları |
| `docs/screenshots/` | İlkin görünüş şəkilləri |
| `.curio-backups/` | Dəyişikliklərdən əvvəlki ehtiyat nüsxələr; server bunları təqdim etmir |

HTML faylları kökdə saxlanılıb ki, mövcud keçidlər və auth callback ünvanları işləməyə davam etsin. Sənədlər və testlər ictimai serverdən açılmır.

## Yoxlamalar

```powershell
npm run validate
npm test
```

`npm test` 62 səhifənin keçid və başlıqlarını, 726 sualın strukturunu, 147 tam quiz ssenarisini, dünya xəritəsi oyununu, hesab formalarını, PKCE bərpasını, bütün yerli şəkil/script/CSS fayllarını və HTTP marşrutlarını yoxlayır. Server testi boş `3087` portu tələb edir. Auth testləri saxta məlumat və mock HTTP istifadə edir; real hesab yaratmır və email göndərmir.

Yeni sualları `content/quizzes/` içində redaktə edin, sonra `npm run build:quizzes` ilə səhifələri və `npm run review:quizzes` ilə yoxlama paketlərini yeniləyin. Sonra `npm test` çalışdırın.

## Hazırkı imkanlar və növbəti iş

- Bütün 48 mövzuda 15 suallıq quiz, nəticə və cavablara baxış var. 42 yeni quizə 630 sual əlavə edilib. Daily Six-də altı sabit sual var; gündəlik avtomatik yenilənmə hələ yoxdur.
- Geography bölməsindən interaktiv dünya xəritəsi oyununu açmaq olar: 15 ölkə, üç cəhd, böyütmə, region ipucusu və xal. Xəritə konturları yerli fayldan yüklənir.
- Sualların müstəqil redaktə yoxlaması davam edir; son cavab açarları `docs/quiz-review/` içindəki v3 fayllardır.
- Quiz nəticələri səhifənin yaddaşındadır; yeniləmə və səhifədən çıxış onları sıfırlayır. Hesaba yazılma və davametmə yoxdur.
- Email/password giriş, qeydiyyat və bərpa kodu mövcuddur. Google girişi konfiqurasiyada deaktivdir. Sınaq hesabının qeydiyyatı, email təsdiqi və girişi 18 noyabrda yoxlanılıb. Hamıya email göndərmək üçün xüsusi SMTP hələ qurulmalıdır.
- Port dəyişəndə Supabase redirect allowlist-i yoxlayın: `/auth-callback.html` və `/reset-password.html` cari origin üçün icazəli olmalıdır.
- Stil, fontlar, SDK və bəzi şəkillər xarici xidmətlərdən yüklənir. Tam offline rejim və production build sistemi yoxdur.
- Hüquqi səhifələrdə sahibin tamamlamalı olduğu açıq şəkildə işarələnmiş məlumatlar var.

Son əlavə: [17 noyabr 2026 — quizlər](docs/QUIZ-EXPANSION-2026-11-17.md), [dünya xəritəsi](docs/WORLD-MAP.md), [suallar və cavablar](docs/quiz-review/README.md). Əvvəlki [13 noyabr yoxlaması](docs/SITE-AUDIT-2026-11-13.md). Son auth düzəlişi: [18 noyabr 2026](docs/AUTH-2026-11-18.md). Auth detalları: [AUTH-SETUP](docs/AUTH-SETUP.md). Dizayn: [DESIGN](docs/DESIGN.md).
