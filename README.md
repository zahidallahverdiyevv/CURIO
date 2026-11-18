# CURIO

İngilisdilli öyrənmə və quiz platforması: altı bölmə, 48 mövzu quizi, Daily Six və interaktiv dünya xəritəsi. HTML, JavaScript və Tailwind CDN istifadə edir. Node.js yerli serveri səhifələri təqdim edir; hesab funksiyaları Supabase Authentication ilə işləyir.

## İşə salmaq

Node.js 22 və ya 24 istifadə edin:

```sh
npm ci
npm start
```

Ünvan: `http://127.0.0.1:3000`. Başqa port üçün PowerShell-də:

```powershell
$env:PORT = '3001'
npm start
```

`localhost` eyni brauzer yaddaşının işlənməsi üçün `127.0.0.1` ünvanına yönləndirilir. Supabase-də həmin portun callback və reset ünvanlarına icazə verilməlidir. Serveri başladıldığı terminalda `Ctrl+C` ilə dayandırın.

## İmkanlar

- 48 mövzuda hər biri 15 sual: 720 sual, dərhal izah, nəticə və cavablara baxış.
- Daily Six-də altı sabit sual; gündəlik avtomatik yenilənmə hazırda yoxdur.
- Dünya xəritəsində 176 ölkə/ərazi konturu, hər raundda 15 hədəf, üç cəhd, ipucu və xal.
- Email/parol qeydiyyatı, email təsdiqi, giriş, parol bərpası və profil. Çıxış profildədir. Google girişi deaktivdir.
- Quiz və xəritə nəticələri səhifə yaddaşındadır; hesaba yazılmır və səhifə yenilənəndə sıfırlanır.

## Layihənin quruluşu

| Yol | Məzmun |
| --- | --- |
| `*.html` | Ana səhifə, bölmələr, quizlər, xəritə, hesab və hüquqi səhifələr |
| `assets/auth/` | Public Supabase konfiqurasiyası, auth və profil məntiqi |
| `assets/quiz/` | Ortaq quiz/xəritə məntiqi, CSS və yerli xəritə məlumatı |
| `assets/` | Şəkillər |
| `content/quizzes/` | 42 yeni quizin 630 redaktə olunan sualı və 48 mövzunun kataloqu |
| `scripts/` | Məzmun yığımı, validatorlar və review eksportu |
| `tests/` | Sayt, quiz, xəritə, auth, profil, SDK və HTTP yoxlamaları |
| `docs/` | Cari developer sənədləri və mənbə istinadları |
| `.github/` | Avtomatik testlər və Dependabot konfiqurasiyası |
| `server.js` | Yalnız HTML/assets təqdim edən yerli server |

## Yoxlama və məzmun redaktəsi

```sh
npm run validate
npm test
```

Testlər 63 səhifənin keçidlərini, 726 sualın strukturunu, 147 tam quiz gedişini, xəritəni, hesab formalarını və server marşrutlarını yoxlayır. Server testi boş `3087` portu tələb edir. Auth handler/SDK testləri saxta məlumat və mock HTTP istifadə edir; real hesab yaratmır, parol dəyişmir və email göndərmir.

Yeni sualları `content/quizzes/` daxilində redaktə etdikdən sonra:

```sh
npm run build:quizzes
npm run review:quizzes
npm test
```

Review paketləri `docs/quiz-review/` daxilində yerli yaradılır və Git-ə daxil edilmir. Mövcud sual mənbələri repoda qalır. Ətraflı: [review qaydası](docs/quiz-review/README.md), [mənbələr](docs/quiz-review/sources.md).

## Təhlükəsizlik və yayım

Brauzer konfiqurasiyasındakı Supabase URL və publishable key ictimai istifadə üçün nəzərdə tutulub. SMTP parolu, app password, secret/service_role açarı və istifadəçi məlumatı repoya əlavə edilməməlidir. Təhlükəsizlik problemi üçün [SECURITY.md](SECURITY.md) qaydasını izləyin.

Sayt hələ production yayımına hazır hesab edilmir: final HTTPS ünvanı və Supabase redirect-ləri, canlı email/recovery sınağı, production CSS/header/cache konfiqurasiyası və hüquqi mətnlər tamamlanmalıdır. Custom SMTP qurulub; real çatdırılma ayrıca təsdiqlənməlidir. Stil, font, SDK və bəzi şəkillər hazırda xarici xidmətlərdən yüklənir.

Köhnə auditlər, ekran görüntüləri və təkrar review/ZIP eksportları cari mənbə ağacından çıxarılıb, yerli arxivdə saxlanılıb. İlkin public commitdəki nüsxələr Git tarixçəsində qalır. Repo public-dir; ayrıca açıq mənbə lisenziyası verilməyib.

Əlavə sənədlər: [Auth qurulması](docs/AUTH-SETUP.md), [dizayn](docs/DESIGN.md), [dünya xəritəsi və mənbəsi](docs/WORLD-MAP.md).
